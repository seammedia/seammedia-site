import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const maxDuration = 30;

const origins = new Set(["https://www.seammedia.com.au", "https://seammedia.com.au"]);
const fields = new Set(["firstName", "lastName", "name", "email", "phone", "service", "message", "form", "business", "trade", "area", "website", "package", "goal", "weeklyMarketingInvestment", "recommendedPackage", "fax_number", "_gotcha"]);
const reply = (status: number, body: object) => NextResponse.json(body, { status, headers: { "Cache-Control": "no-store" } });

export async function POST(request: NextRequest) {
  if (!origins.has(request.headers.get("origin") || "")) return reply(403, { error: "Origin not allowed" });
  if (Number(request.headers.get("content-length") || 0) > 20000) return reply(413, { error: "Submission is too large" });
  const secret = process.env.SEAM_FORM_RELAY_SECRET?.trim();
  if (!secret) return reply(503, { error: "Please try again shortly or email contact@seammedia.com.au." });

  try {
    // Read a bounded body before parsing multipart input; no files are accepted.
    const reader = request.body?.getReader();
    if (!reader) return reply(400, { error: "Please complete the form." });
    const chunks: Uint8Array[] = [];
    let size = 0;
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > 20000) { await reader.cancel(); return reply(413, { error: "Submission is too large" }); }
      chunks.push(value);
    }
    const body = Buffer.concat(chunks);
    const form = await new Response(body, { headers: { "Content-Type": request.headers.get("content-type") || "" } }).formData();
    const payload: Record<string, string> = {};
    for (const [key, value] of form) {
      if (!fields.has(key)) continue;
      if (typeof value !== "string" || value.length > 2000) return reply(400, { error: "Please check your form details." });
      payload[key] = value.trim();
    }
    if (payload.fax_number || payload._gotcha) return reply(200, { ok: true });
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email || "") || payload.email.length > 160) return reply(400, { error: "Please enter a valid email address." });
    const referrer = request.headers.get("referer");
    const page = referrer ? new URL(referrer) : null;
    payload.page = page && origins.has(page.origin) ? page.origin + page.pathname : "https://www.seammedia.com.au/";
    payload.submitted_at = new Date().toISOString();
    // Ad click details remembered from the landing page (components/AttributionCookie.tsx).
    try {
      const attr = JSON.parse(decodeURIComponent(request.cookies.get("seam_attr")?.value || "{}")) as Record<string, unknown>;
      for (const key of ["gclid", "gbraid", "wbraid", "utm_source", "utm_medium", "utm_campaign", "utm_term", "landing"]) {
        const value = attr[key];
        if (typeof value === "string" && value.trim()) payload[key] = value.trim().slice(0, 200);
      }
    } catch {
      // A malformed cookie must never block an enquiry.
    }
    const response = await fetch("https://thesoutheastplumber.com.au/api/seam-lead", {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Seam-Form-Secret": secret },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(25000),
      cache: "no-store",
    });
    const result = await response.json();
    if (!response.ok || result.ok !== true) return reply(502, { error: "Your enquiry could not be sent. Please try again or email contact@seammedia.com.au." });
    return reply(200, { ok: true });
  } catch {
    return reply(502, { error: "Your enquiry could not be sent. Please try again or email contact@seammedia.com.au." });
  }
}

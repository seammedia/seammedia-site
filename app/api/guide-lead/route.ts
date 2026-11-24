import { NextRequest, NextResponse } from "next/server";
import { ALL_BUDGETS, INDUSTRIES, REVIEW_OPTIONS, isOfferQualified, isQualifiedBudget, phoneProblem } from "@/lib/lead-qualify";
import { readQuickJobFields } from "@/lib/quick-jobs";

export const runtime = "nodejs";
export const maxDuration = 30;

const origins = new Set(["https://www.seammedia.com.au", "https://seammedia.com.au"]);
const reply = (status: number, body: object) => NextResponse.json(body, { status, headers: { "Cache-Control": "no-store" } });
const LEAD_MANAGER_URL = "https://seam-media-lead-manager.vercel.app/api/leads/guide";
const RELAY_URL = "https://thesoutheastplumber.com.au/api/seam-lead";

// Social media guide opt-in, the Smart Website enquiry form, the website offer form, the social media manager form and the quick job form. The lead manager saves the lead, emails the guide
// (or the Smart Website reply) and alerts Heath.
// If it can't be reached, the lead still reaches contact@ through the normal enquiry relay.
export async function POST(request: NextRequest) {
  const dev = process.env.NODE_ENV !== "production";
  if (!dev && !origins.has(request.headers.get("origin") || "")) return reply(403, { error: "Origin not allowed" });
  if (Number(request.headers.get("content-length") || 0) > 10000) return reply(413, { error: "Submission is too large" });

  let raw: Record<string, unknown>;
  try {
    raw = await request.json();
  } catch {
    return reply(400, { error: "Please complete the form." });
  }
  const field = (key: string, max = 160) => (typeof raw[key] === "string" ? (raw[key] as string).trim().slice(0, max) : "");
  if (field("fax_number")) return reply(200, { ok: true });

  const name = field("name");
  const business = field("business");
  const email = field("email").toLowerCase();
  const phone = field("phone", 30);
  if (!name || !business) return reply(400, { error: "Please add your name and business." });
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return reply(400, { error: "Please enter a valid email address." });
  if (!/^\+?\d{8,15}$/.test(phone.replace(/[\s()-]/g, ""))) return reply(400, { error: "Please enter a valid mobile number." });
  const badPhone = phoneProblem(phone);
  if (badPhone) return reply(400, { error: field("offer", 30) === "quick-job" ? badPhone.split(" I only use it")[0] : badPhone });

  // offer "smart-website" comes from /smart-website (8 Nov 2026); the lead manager sends the Smart Website reply instead of the guide
  const offer = field("offer", 30);
  const smart = offer === "smart-website";
  const websiteGuide = offer === "website-guide"; // /website-guide opt-in (8 Nov 2026): the lead manager sends the tradie website guide
  const websiteOffer = offer === "website-offer"; // /website-offer (17 Nov 2026): the NB ads' pay-on-results website offer
  const socialManager = offer === "social-manager"; // /social-media-manager (19 Nov 2026): the SM ads, Foundation social media
  const quickJob = offer === "quick-job"; // /quick-jobs (25 Nov 2026): one-off work at a fixed price, with its own questions
  const social = field("social", 200);
  const trade = field("trade", 120);
  const website = field("website", 200);
  const lead: Record<string, string> = { name, company: business, email, phone_number: phone };
  // Guide forms (not /smart-website) ask industry and monthly budget (10 Nov 2026)
  const industry = field("industry", 60);
  const budget = field("budget", 60);
  if (quickJob) {
    const fields = readQuickJobFields(field);
    if ("error" in fields) return reply(400, { error: fields.error });
    Object.assign(lead, fields, { offer });
    if (!lead.website) delete lead.website;
  }
  if (!smart && !quickJob) {
    if (!(INDUSTRIES as readonly string[]).includes(industry)) return reply(400, { error: "Please choose your industry." });
    if (!ALL_BUDGETS.includes(budget)) return reply(400, { error: "Please choose a monthly marketing budget." });
    lead.industry = industry;
    lead.budget = budget;
    lead.qualified = isQualifiedBudget(budget) ? "yes" : "no";
  }
  // Website offer: Google reviews too, and only 10+ reviews (and not e-commerce) qualifies (17 Nov 2026)
  const reviews = field("reviews", 60);
  if (websiteOffer) {
    if (!(REVIEW_OPTIONS as readonly string[]).includes(reviews)) return reply(400, { error: "Please choose your Google reviews." });
    lead.reviews = reviews;
    lead.qualified = isOfferQualified({ budget, reviews, industry }) ? "yes" : "no";
  }
  if (websiteGuide) lead.offer = "website-guide";
  if (smart || websiteOffer || socialManager) {
    lead.offer = offer;
    if (trade) lead.trade = trade;
    if (website) lead.website = website;
  }
  if (socialManager && social) lead.social = social;
  try {
    const attr = JSON.parse(decodeURIComponent(request.cookies.get("seam_attr")?.value || "{}")) as Record<string, unknown>;
    for (const key of ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "fbclid"]) {
      const value = attr[key];
      if (typeof value === "string" && value.trim()) lead[key] = value.trim().slice(0, 200);
    }
  } catch {
    // A malformed cookie must never block a lead.
  }
  // Backup: ad tags the form read from the page URL, used when the cookie didn't carry them (12 Nov 2026)
  for (const key of ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "fbclid"]) {
    const value = field(key, 200);
    if (value && !lead[key]) lead[key] = value;
  }

  if (dev) return reply(200, { ok: true, dev: true });

  const key = process.env.LEAD_INTAKE_KEY?.trim();
  if (key) {
    try {
      const res = await fetch(LEAD_MANAGER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-api-key": key },
        body: JSON.stringify(lead),
        signal: AbortSignal.timeout(12000),
        cache: "no-store",
      });
      if (res.ok) return reply(200, { ok: true });
    } catch {
      // Fall through to the relay.
    }
  }

  const secret = process.env.SEAM_FORM_RELAY_SECRET?.trim();
  if (!secret) return reply(503, { error: "Please try again shortly, or call me on 0402 642 746." });
  try {
    const res = await fetch(RELAY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Seam-Form-Secret": secret },
      body: JSON.stringify({
        form: quickJob ? "Quick job: REPLY BY HAND (lead manager was unavailable)" : smart ? "Smart Website ($99/wk): REPLY BY HAND (lead manager was unavailable)" : socialManager ? "Social media manager: REPLY BY HAND (lead manager was unavailable)" : websiteOffer ? "Website offer: REPLY BY HAND (lead manager was unavailable)" : websiteGuide ? "Tradie website guide: SEND THE PDF BY HAND (lead manager was unavailable)" : "Social media guide: SEND THE PDF BY HAND (lead manager was unavailable)",
        name, business, email, phone,
        ...(quickJob ? { budget: lead.budget, qualified: lead.qualified, message: [`Job: ${lead.job}`, `Timing: ${lead.timing}`, website && `Website: ${website}`, `Details: ${lead.details}`].filter(Boolean).join(" | ") } : {}),
        ...(industry ? { industry, budget, qualified: lead.qualified } : {}),
        ...(reviews ? { reviews } : {}),
        ...(smart || websiteOffer || socialManager ? { message: [trade && `Does: ${trade}`, website && `Website: ${website}`, social && `Social: ${social}`].filter(Boolean).join(" | ") } : {}),
        page: quickJob ? "https://www.seammedia.com.au/quick-jobs" : smart ? "https://www.seammedia.com.au/smart-website" : socialManager ? "https://www.seammedia.com.au/social-media-manager" : websiteOffer ? "https://www.seammedia.com.au/website-offer" : websiteGuide ? "https://www.seammedia.com.au/website-guide" : "https://www.seammedia.com.au/social-media-guide",
        submitted_at: new Date().toISOString(),
        ...(lead.utm_campaign ? { utm_campaign: lead.utm_campaign } : {}),
      }),
      signal: AbortSignal.timeout(15000),
      cache: "no-store",
    });
    const result = await res.json();
    if (res.ok && result.ok === true) return reply(200, { ok: true });
  } catch {
    // Handled below.
  }
  return reply(502, { error: "That didn't go through. Please try again, or call me on 0402 642 746." });
}

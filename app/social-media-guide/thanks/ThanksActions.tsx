"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";

type Lead = { name?: string; business?: string; email?: string; phone?: string; tracked?: boolean };
type Fbq = (...args: unknown[]) => void;
const fbq = (): Fbq | undefined => (typeof window !== "undefined" ? (window as unknown as { fbq?: Fbq }).fbq : undefined);
const gtag = (): Fbq | undefined => (typeof window !== "undefined" ? (window as unknown as { gtag?: Fbq }).gtag : undefined);

function readLead(): Lead | null {
  try {
    return JSON.parse(sessionStorage.getItem("seam_guide_lead") || "null");
  } catch {
    return null;
  }
}

// Counts the Lead once, for someone who has just filled in the form. Reloads and direct visits don't count.
export function LeadTracker() {
  useEffect(() => {
    const lead = readLead();
    if (!lead || lead.tracked) return;
    let tries = 0;
    const fire = () => {
      const f = fbq();
      if (f || tries++ > 20) {
        f?.("track", "Lead", { content_name: "Social media guide" });
        gtag()?.("event", "generate_lead", { form: "social-media-guide" });
        try {
          sessionStorage.setItem("seam_guide_lead", JSON.stringify({ ...lead, tracked: true }));
        } catch {
          // Storage can be blocked; the event has still fired.
        }
        return;
      }
      setTimeout(fire, 250);
    };
    fire();
  }, []);
  return null;
}

// One tap to ask for a call, using the details from the form. Falls back to a plain phone link.
export function CallMeButton({ label = "Yes, call me" }: { label?: string }) {
  const [lead, setLead] = useState<Lead | null>(null);
  const [state, setState] = useState<"idle" | "busy" | "done" | "error">("idle");
  useEffect(() => setLead(readLead()), []);

  async function requestCall() {
    if (!lead || state === "busy" || state === "done") return;
    setState("busy");
    const form = new FormData();
    form.set("form", "Social media guide: ASKED FOR A CALL");
    form.set("name", lead.name || "");
    form.set("business", lead.business || "");
    form.set("email", lead.email || "");
    form.set("phone", lead.phone || "");
    try {
      const res = await fetch("/api/enquiry", { method: "POST", body: form });
      if (!res.ok) throw new Error("failed");
      fbq()?.("track", "Contact", { content_name: "Social media guide call request" });
      gtag()?.("event", "guide_call_request");
      setState("done");
    } catch {
      setState("error");
    }
  }

  if (state === "done") return <p className="rounded-lg bg-white/10 px-5 py-4 font-bold text-white">Thanks. I&apos;ll call you as soon as I can.</p>;
  if (!lead || state === "error") {
    return (
      <a href="tel:0402642746" className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#f5b5b5] px-7 py-4 text-lg font-bold text-black transition-opacity hover:opacity-90">
        <Phone className="h-5 w-5" /> Call me on 0402 642 746
      </a>
    );
  }
  return (
    <button type="button" onClick={requestCall} disabled={state === "busy"} className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#f5b5b5] px-7 py-4 text-lg font-bold text-black transition-opacity hover:opacity-90 disabled:opacity-60">
      <Phone className="h-5 w-5" /> {state === "busy" ? "Sending..." : label}
    </button>
  );
}

"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, ReactNode, useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { BUDGETS, INDUSTRIES, isQualifiedBudget, phoneProblem } from "@/lib/lead-qualify";

const ACCENTS = {
  pink: { input: "focus:border-[#f5b5b5]", button: "bg-[#f5b5b5]" },
  green: { input: "focus:border-[#4ade80]", button: "bg-[#4ade80]" },
};
const baseInput = "w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none";

// Sends the lead to /api/guide-lead, remembers it for the "call me" button on the next page,
// then moves to the thanks page, where the Meta Lead event fires.
// Also used by /website-guide (8 Nov 2026) with its own offer, storage key and thanks page, and by /website-offer
// (17 Nov 2026), which adds trade, suburb and current website, its own budget options, note and colour.
type GuideFormProps = {
  id?: string; offer?: string; storageKey?: string; thanksPath?: string; heading?: string; button?: string;
  budgets?: readonly string[]; budgetLabel?: string; extraFields?: boolean; note?: ReactNode; accent?: keyof typeof ACCENTS;
};

export default function GuideForm({
  id = "get-the-guide",
  offer,
  storageKey = "seam_guide_lead",
  thanksPath = "/social-media-guide/thanks",
  heading = "Where should I send it?",
  button = "Send me the free guide",
  budgets = BUDGETS,
  budgetLabel = "Monthly marketing budget",
  extraFields = false,
  note,
  accent = "pink",
}: GuideFormProps) {
  const inputClass = `${baseInput} ${ACCENTS[accent].input}`;
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (busy) return;
    setBusy(true);
    setError("");
    const values = Object.fromEntries(new FormData(e.currentTarget).entries()) as Record<string, string>;
    const badPhone = phoneProblem(values.phone || "");
    if (badPhone) {
      setError(badPhone);
      setBusy(false);
      return;
    }
    const qualified = isQualifiedBudget(values.budget || "");
    // Ad tags straight from the page URL, as a backup for the seam_attr cookie (12 Nov 2026: a third of
    // guide leads arrived with no ad tag)
    try {
      const params = new URL(window.location.href).searchParams;
      for (const k of ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "fbclid"]) {
        const v = params.get(k);
        if (v) values[k] = v.slice(0, 200);
      }
    } catch {
      // Attribution is optional; never block the form.
    }
    try {
      const res = await fetch("/api/guide-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(offer ? { ...values, offer } : values),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Please try again, or call me on 0402 642 746.");
      try {
        sessionStorage.setItem(storageKey, JSON.stringify({ name: values.name, business: values.business, email: values.email, phone: values.phone, qualified, tracked: false }));
      } catch {
        // Storage can be blocked; the thanks page still works without it.
      }
      router.push(thanksPath);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Please try again, or call me on 0402 642 746.");
      setBusy(false);
    }
  }

  return (
    <form id={id} onSubmit={submit} className="space-y-3 rounded-2xl border border-white/10 bg-[#141417] p-6 sm:p-7">
      <p className="text-xl font-bold text-white">{heading}</p>
      <input className={inputClass} name="name" autoComplete="name" placeholder="Your name" required aria-label="Your name" />
      <input className={inputClass} name="business" autoComplete="organization" placeholder="Business name" required aria-label="Business name" />
      <input className={inputClass} name="email" type="email" autoComplete="email" placeholder="Email" required aria-label="Email" />
      <input className={inputClass} name="phone" type="tel" autoComplete="tel" placeholder="Mobile" required aria-label="Mobile" />
      <div className="relative">
        <select className={`${inputClass} appearance-none pr-10`} name="industry" required defaultValue="" aria-label="Your industry">
          <option value="" disabled>Your industry</option>
          {INDUSTRIES.map((o) => <option key={o} value={o} className="text-black">{o}</option>)}
        </select>
        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" aria-hidden="true" />
      </div>
      {extraFields && (
        <>
          <input className={inputClass} name="trade" placeholder="Your trade or service, and suburb" required aria-label="Your trade or service, and suburb" />
          <input className={inputClass} name="website" autoComplete="url" placeholder="Current website, if you have one" aria-label="Current website, if you have one" />
        </>
      )}
      <div className="relative">
        <select className={`${inputClass} appearance-none pr-10`} name="budget" required defaultValue="" aria-label={budgetLabel}>
          <option value="" disabled>{budgetLabel}</option>
          {budgets.map((o) => <option key={o} value={o} className="text-black">{o}</option>)}
        </select>
        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" aria-hidden="true" />
      </div>
      <input className="hidden" name="fax_number" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      {error && <p role="alert" className="text-sm text-red-300">{error}</p>}
      <button type="submit" disabled={busy} className={`flex w-full items-center justify-center gap-2 rounded-lg ${ACCENTS[accent].button} px-5 py-4 text-lg font-bold text-black transition-opacity hover:opacity-90 disabled:opacity-60`}>
        {busy ? "Sending..." : button}
        {!busy && <ArrowRight className="h-5 w-5" />}
      </button>
      <p className="text-xs leading-relaxed text-gray-400">
        {note ?? <>You&apos;ll get the guide straight away. I may also email, text or call you about it and how I can help.</>} You can opt out any time. See my{" "}
        <Link href="/privacy" className="underline hover:text-white">privacy policy</Link>.
      </p>
    </form>
  );
}

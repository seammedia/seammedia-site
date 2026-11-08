"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { ArrowRight } from "lucide-react";

const inputClass =
  "w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-gray-500 focus:border-[#4ade80] focus:outline-none";

// Same route as the guide form (/api/guide-lead) with offer "smart-website", so the lead manager sends the
// Smart Website reply and alerts Heath. The thanks page fires the Meta Lead event.
export default function SmartWebsiteForm({ id = "get-started" }: { id?: string }) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (busy) return;
    setBusy(true);
    setError("");
    const values = Object.fromEntries(new FormData(e.currentTarget).entries()) as Record<string, string>;
    try {
      const res = await fetch("/api/guide-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, offer: "smart-website" }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Please try again, or call me on 0402 642 746.");
      try {
        sessionStorage.setItem("seam_smart_lead", JSON.stringify({ name: values.name, business: values.business, email: values.email, phone: values.phone, tracked: false }));
      } catch {
        // Storage can be blocked; the thanks page still works without it.
      }
      router.push("/smart-website/thanks");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Please try again, or call me on 0402 642 746.");
      setBusy(false);
    }
  }

  return (
    <form id={id} onSubmit={submit} className="space-y-3 rounded-2xl border border-white/10 bg-[#141417] p-6 sm:p-7">
      <p className="text-xl font-bold text-white">Get your smart website</p>
      <input className={inputClass} name="name" autoComplete="name" placeholder="Your name" required aria-label="Your name" />
      <input className={inputClass} name="business" autoComplete="organization" placeholder="Business name" required aria-label="Business name" />
      <input className={inputClass} name="trade" placeholder="Your trade and suburb" required aria-label="Your trade and suburb" />
      <input className={inputClass} name="phone" type="tel" autoComplete="tel" placeholder="Mobile" required aria-label="Mobile" />
      <input className={inputClass} name="email" type="email" autoComplete="email" placeholder="Email" required aria-label="Email" />
      <input className={inputClass} name="website" autoComplete="url" placeholder="Current website, if you have one" aria-label="Current website, if you have one" />
      <input className="hidden" name="fax_number" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      {error && <p role="alert" className="text-sm text-red-300">{error}</p>}
      <button type="submit" disabled={busy} className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#4ade80] px-5 py-4 text-lg font-bold text-black transition-opacity hover:opacity-90 disabled:opacity-60">
        {busy ? "Sending..." : "Get started"}
        {!busy && <ArrowRight className="h-5 w-5" />}
      </button>
      <p className="text-xs leading-relaxed text-gray-400">
        I&apos;ll call you within one business day. I may also email or text you about it. You can opt out any time. See my{" "}
        <Link href="/privacy" className="underline hover:text-white">privacy policy</Link>.
      </p>
    </form>
  );
}

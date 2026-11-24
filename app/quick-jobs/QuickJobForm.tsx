"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, ReactNode, useEffect, useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { phoneProblem } from "@/lib/lead-qualify";
import { DETAILS_MAX, JOBS, JOB_BUDGETS, JOB_TIMINGS, OTHER_JOB, isJobQualified } from "@/lib/quick-jobs";

const PICK_EVENT = "seam:pick-job";
const FORM_ID = "send-job";
const STORAGE_KEY = "seam_quick_job";
const FALLBACK = "Please try again, or call me on 0402 642 746.";
const control = "mt-1.5 w-full rounded-lg border border-black/25 bg-white px-4 py-3 text-base text-black placeholder:text-gray-500 focus:border-black focus:outline-none focus:ring-2 focus:ring-black/40";

// "Send this job" on a job card: picks it in the form and scrolls there, keeping the ad tags in the URL
export function PickJob({ job, className, children }: { job: string; className?: string; children: ReactNode }) {
  return (
    <a href={`#${FORM_ID}`} className={className} onClick={() => window.dispatchEvent(new CustomEvent(PICK_EVENT, { detail: job }))}>
      {children}
    </a>
  );
}

function Field({ id, label, optional, children }: { id: string; label: string; optional?: boolean; children: ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-bold text-black">
        {label}{optional && <span className="font-normal text-gray-600"> (optional)</span>}
      </label>
      {children}
    </div>
  );
}

function Chevron() {
  return <ChevronDown className="pointer-events-none absolute right-3 top-1/2 mt-[3px] h-5 w-5 -translate-y-1/2 text-gray-600" aria-hidden="true" />;
}

// Same route, spam trap, ad tags and thanks-page Lead event as the other landing page forms (GuideForm)
export default function QuickJobForm({ initialJob }: { initialJob: string }) {
  const router = useRouter();
  const [job, setJob] = useState(initialJob);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const pick = (e: Event) => setJob((e as CustomEvent<string>).detail);
    window.addEventListener(PICK_EVENT, pick);
    return () => window.removeEventListener(PICK_EVENT, pick);
  }, []);

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (busy) return;
    setBusy(true);
    setError("");
    const values = Object.fromEntries(new FormData(e.currentTarget).entries()) as Record<string, string>;
    const badPhone = phoneProblem(values.phone || "");
    if (badPhone) {
      setError(badPhone.split(" I only use it")[0]);
      setBusy(false);
      return;
    }
    const qualified = isJobQualified(values.budget);
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
        body: JSON.stringify({ ...values, offer: "quick-job" }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || FALLBACK);
      try {
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify({ qualified, tracked: false }));
      } catch {
        // Storage can be blocked; the thanks page still works without it.
      }
      router.push("/quick-jobs/thanks");
    } catch (err) {
      setError(err instanceof Error ? err.message : FALLBACK);
      setBusy(false);
    }
  }

  return (
    <form id={FORM_ID} onSubmit={submit} className="scroll-mt-28 space-y-4 rounded-2xl bg-[#fff8e1] p-5 text-black sm:p-7">
      <p className="text-2xl font-black">Send me the job</p>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field id="qj-name" label="Your name"><input id="qj-name" className={control} name="name" autoComplete="name" required maxLength={160} /></Field>
        <Field id="qj-business" label="Business name"><input id="qj-business" className={control} name="business" autoComplete="organization" required maxLength={160} /></Field>
        <Field id="qj-email" label="Email"><input id="qj-email" className={control} name="email" type="email" autoComplete="email" required maxLength={160} /></Field>
        <Field id="qj-phone" label="Mobile"><input id="qj-phone" className={control} name="phone" type="tel" autoComplete="tel" required maxLength={30} /></Field>
      </div>
      <Field id="qj-job" label="Which job?">
        <div className="relative">
          <select id="qj-job" className={`${control} appearance-none pr-10`} name="job" required value={job} onChange={(e) => setJob(e.target.value)}>
            <option value="" disabled>Choose a job</option>
            {JOBS.map((j) => <option key={j.id} value={j.id}>{j.title}</option>)}
            <option value={OTHER_JOB.id}>{OTHER_JOB.title}</option>
          </select>
          <Chevron />
        </div>
      </Field>
      <Field id="qj-website" label="Website link" optional><input id="qj-website" className={control} name="website" autoComplete="url" inputMode="url" maxLength={200} /></Field>
      <Field id="qj-details" label="What needs doing?"><textarea id="qj-details" className={`${control} block min-h-28 resize-y`} name="details" rows={4} required maxLength={DETAILS_MAX} /></Field>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field id="qj-budget" label="Budget">
          <div className="relative">
            <select id="qj-budget" className={`${control} appearance-none pr-10`} name="budget" required defaultValue="">
              <option value="" disabled>Choose a budget</option>
              {JOB_BUDGETS.map((o) => <option key={o} value={o}>{o}</option>)}
            </select>
            <Chevron />
          </div>
        </Field>
        <Field id="qj-timing" label="When do you need it?">
          <div className="relative">
            <select id="qj-timing" className={`${control} appearance-none pr-10`} name="timing" required defaultValue="">
              <option value="" disabled>Choose timing</option>
              {JOB_TIMINGS.map((o) => <option key={o} value={o}>{o}</option>)}
            </select>
            <Chevron />
          </div>
        </Field>
      </div>
      <input className="hidden" name="fax_number" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      {error && <p role="alert" className="text-sm font-bold text-red-700">{error}</p>}
      <button type="submit" disabled={busy} className="flex w-full items-center justify-center gap-2 rounded-lg bg-black px-5 py-4 text-lg font-bold text-[#ffd23f] transition-opacity hover:opacity-85 disabled:opacity-60">
        {busy ? "Sending..." : "Get a fixed price"}
        {!busy && <ArrowRight className="h-5 w-5" aria-hidden="true" />}
      </button>
      <p className="text-xs leading-relaxed text-gray-700">
        I&apos;ll email you about your job, and I may call if I have a question. You can opt out any time. See my{" "}
        <Link href="/privacy" className="underline hover:text-black">privacy policy</Link>.
      </p>
    </form>
  );
}

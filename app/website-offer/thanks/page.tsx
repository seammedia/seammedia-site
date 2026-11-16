import type { Metadata } from "next";
import GoogleRating from "@/components/GoogleRating";
import { CallMeButton, LeadTracker } from "../../social-media-guide/thanks/ThanksActions";
import { STEPS } from "../offer";

// After the website offer form: fires the Meta Lead event once (only for $250+ budgets), then sets expectations.
export const metadata: Metadata = {
  title: "Thanks, the details are on their way | Seam Media",
  description: "Your website enquiry is in. Here's what happens next.",
  robots: { index: false, follow: false },
};

const STORAGE_KEY = "seam_offer_lead";
const FORM_LABEL = "Website offer: ASKED FOR A CALL NOW";

export default function WebsiteOfferThanksPage() {
  return (
    <div className="bg-[#09090b] text-white">
      <LeadTracker storageKey={STORAGE_KEY} contentName="Website offer" gaForm="website-offer" />
      <section className="px-6 pb-14 pt-14 sm:pt-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#4ade80]">Got it, thanks</p>
          <h1 className="mt-4 text-4xl font-black leading-[1.05] tracking-tight sm:text-6xl">The details are in your inbox.</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-gray-300 sm:text-xl">
            Check your junk folder if you can&apos;t see it. If you&apos;d like to talk it through, tap below and I&apos;ll call you.
          </p>
          <div className="mt-9 flex flex-col items-center gap-3">
            <CallMeButton label="Call me as soon as you can" storageKey={STORAGE_KEY} formLabel={FORM_LABEL} />
            <a href="tel:0402642746" className="text-gray-300 underline hover:text-white">Or call me on 0402 642 746</a>
            <GoogleRating className="mt-3" />
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-black tracking-tight sm:text-4xl">What happens next</h2>
          <div className="mt-9 grid gap-4 md:grid-cols-3">
            {STEPS.map(([title, copy], i) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-[#141417] p-6">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#4ade80] text-sm font-black text-black">{i + 1}</span>
                <p className="mt-4 text-xl font-black">{title}</p>
                <p className="mt-2 leading-relaxed text-gray-300">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

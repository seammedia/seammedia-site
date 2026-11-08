import type { Metadata } from "next";
import Link from "next/link";
import { Check, Download } from "lucide-react";
import GoogleRating from "@/components/GoogleRating";
import { CallMeButton, LeadTracker } from "../../social-media-guide/thanks/ThanksActions";
import { INCLUDES, PRICE, PRICE_NOTE, TERMS } from "../../smart-website/offer";

// After the tradie website guide opt-in: the download, then the Smart Website offer, with Growth as the step up.
// Prices and terms come from app/smart-website/offer.ts (Heath, 8 Nov 2026).
export const metadata: Metadata = {
  title: "Your guide is ready | Seam Media",
  description: "Download your free tradie website guide, and see how a Smart Website catches every enquiry for you.",
  robots: { index: false, follow: false },
};

const PDF = "/guides/tradie-website-guide.pdf";
const STORAGE_KEY = "seam_website_guide_lead";
const FORM_LABEL = "Tradie website guide: ASKED FOR A CALL";

const faqs = [
  ["Is there a setup fee or lock-in contract?", "No setup fee. It's month to month and billed weekly. Cancel any time, and it takes effect at the end of the billing period you've paid for."],
  ["How many pages do I get?", "There's no cap on pages. Ecommerce, custom features and complex builds are quoted separately."],
  ["Who does the work?", "Me. You deal with me directly, and it's all done here in Australia."],
  ["Can you guarantee leads?", "No, and I'd be careful of anyone who does. What I can promise is that the enquiries you do get won't slip through the cracks."],
];

export default function WebsiteGuideThanksPage() {
  return (
    <div className="bg-[#09090b] text-white">
      <LeadTracker storageKey={STORAGE_KEY} contentName="Tradie website guide" gaForm="website-guide" />
      <section className="border-b border-white/10 px-6 py-10">
        <div className="mx-auto flex max-w-4xl flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
          <div>
            <p className="text-2xl font-black tracking-tight">Your guide is ready.</p>
            <p className="mt-1 text-gray-400">I&apos;ve emailed you a copy too. Check your junk folder if you can&apos;t see it.</p>
          </div>
          <a href={PDF} target="_blank" rel="noopener" className="inline-flex flex-none items-center gap-2 rounded-lg bg-white px-6 py-3.5 font-bold text-black transition-opacity hover:opacity-90">
            <Download className="h-5 w-5" /> Download the guide
          </a>
        </div>
      </section>

      <section className="px-6 pb-14 pt-14 sm:pt-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#f5b5b5]">Rather not do it all yourself?</p>
          <h1 className="mt-4 text-4xl font-black leading-[1.05] tracking-tight sm:text-6xl">
            A website that catches every enquiry, for {PRICE} {PRICE_NOTE}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-gray-300 sm:text-xl">
            I build it for your business, missed calls get a text back, and every enquiry lands on your phone. {TERMS}
          </p>
          <div className="mt-9 flex flex-col items-center gap-3">
            <CallMeButton label="Yes, call me for a quick chat" storageKey={STORAGE_KEY} formLabel={FORM_LABEL} />
            <p className="text-sm text-gray-400">10 minutes, no pressure. I&apos;ll tell you what I&apos;d fix first, even if you don&apos;t go ahead.</p>
            <GoogleRating className="mt-3" />
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-16">
        <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-[1.35fr_1fr]">
          <div className="rounded-2xl bg-white p-7 text-black sm:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-gray-500">Where I&apos;d start for most trades</p>
            <div className="mt-2 flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="text-3xl font-black">Smart Website</h2>
              <p className="text-3xl font-black">{PRICE}<span className="ml-1 text-base font-bold">{PRICE_NOTE}</span></p>
            </div>
            <ul className="mt-5 space-y-2.5">
              {INCLUDES.map(([title, copy]) => (
                <li key={title} className="flex gap-2.5">
                  <Check className="mt-0.5 h-5 w-5 flex-none" />
                  <span><b>{title}.</b> {copy}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-gray-600">{TERMS} <Link href="/smart-website" className="font-bold underline">See how it works</Link></p>
          </div>
          <div className="flex flex-col rounded-2xl border border-white/10 bg-[#141417] p-7">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-gray-400">Want more work coming in?</p>
            <h2 className="mt-2 text-2xl font-black">Growth</h2>
            <p className="mt-2 text-2xl font-black">$235<span className="ml-1 text-base font-bold">a week + GST</span></p>
            <p className="mt-4 leading-relaxed text-gray-300">Your Smart Website, plus social media, full local SEO, Google Business Profile management and one ad platform: Google Ads or Meta Ads.</p>
            <p className="mt-3 text-sm leading-relaxed text-gray-400">Ad spend is separate and paid directly to Google or Meta.</p>
            <Link href="/marketing-packages" className="mt-auto pt-5 font-bold text-[#f5b5b5] hover:underline">Compare every plan</Link>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-3xl font-black tracking-tight sm:text-4xl">Fair questions</h2>
          <div className="mt-8 divide-y divide-white/10">
            {faqs.map(([q, a]) => (
              <div key={q} className="py-5">
                <h3 className="text-lg font-bold">{q}</h3>
                <p className="mt-1.5 leading-relaxed text-gray-300">{a}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-col items-center gap-3 text-center">
            <p className="text-2xl font-black">Want to talk it through?</p>
            <CallMeButton label="Yes, call me" storageKey={STORAGE_KEY} formLabel={FORM_LABEL} />
            <a href="tel:0402642746" className="text-gray-300 underline hover:text-white">Or call me on 0402 642 746</a>
          </div>
        </div>
      </section>
    </div>
  );
}

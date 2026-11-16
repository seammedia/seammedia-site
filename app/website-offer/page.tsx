import type { Metadata } from "next";
import { Check } from "lucide-react";
import GoogleRating from "@/components/GoogleRating";
import MissedCallPhone from "@/components/MissedCallPhone";
import { OFFER_BUDGETS } from "@/lib/lead-qualify";
import { createMetadata } from "@/lib/seo";
import GuideForm from "../social-media-guide/GuideForm";
import { INCLUDES } from "../smart-website/offer";
import { FAQS, FOR_WHO, OFFER_LINE, OFFER_SHORT, PRICE_LINE, STEPS, TERMS } from "./offer";

// Meta Ads landing page for the website offer (NB ads, 17 Nov 2026). Not for search, not linked.
// Same lead route and qualifying questions as the guides, so the Meta Lead event only fires for $250+ budgets.
export const metadata: Metadata = {
  ...createMetadata({
    title: "A website that earns its keep | Seam Media",
    description: "A website built for your business that texts back missed calls, replies to enquiries instantly and sends every enquiry to your phone.",
    path: "/website-offer",
  }),
  robots: { index: false, follow: false },
};

function OfferForm({ id }: { id?: string }) {
  return (
    <GuideForm
      id={id}
      offer="website-offer"
      storageKey="seam_offer_lead"
      thanksPath="/website-offer/thanks"
      heading={OFFER_SHORT}
      button="Get started"
      budgets={OFFER_BUDGETS}
      budgetLabel="Monthly budget once it works"
      extraFields
      accent="green"
      note={<>I&apos;ll email you the details straight away, and call if it looks like a fit. I may also text you about it.</>}
    />
  );
}

export default function WebsiteOfferPage() {
  return (
    <div className="bg-[#09090b] text-white">
      <section className="px-6 pb-16 pt-12 sm:pt-16">
        {/* On phones the form follows the headline, so it's on the first screen. */}
        <div className="mx-auto grid max-w-6xl items-start gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-x-14">
          <div className="lg:col-start-1">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#4ade80]">Websites for trades and small businesses</p>
            <h1 className="mt-4 text-4xl font-black leading-[1.05] tracking-tight sm:text-6xl">
              A new website. <span className="text-[#4ade80]">{OFFER_LINE}</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-gray-300 sm:text-xl">
              Built for your business, set up for Google and connected to your phone, so every enquiry reaches you. {PRICE_LINE} {TERMS}
            </p>
          </div>
          <div className="lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <OfferForm id="get-started" />
          </div>
          <div className="lg:col-start-1">
            <ul className="space-y-3">
              {INCLUDES.map(([title]) => (
                <li key={title} className="flex gap-3 text-gray-200">
                  <Check className="mt-0.5 h-5 w-5 flex-none text-[#4ade80]" />
                  <span>{title}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-gray-400">{FOR_WHO}</p>
            <GoogleRating className="mt-7" />
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-black tracking-tight sm:text-4xl">How it works</h2>
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

      <section className="border-t border-white/10 px-6 py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">What happens when you miss a call</h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-300">
              Most people won&apos;t leave a voicemail. They ring the next business on Google. Your website texts them back straight away, so you keep the job while you finish the one you&apos;re on.
            </p>
            <p className="mt-3 text-sm text-gray-500">Example only, with a made-up business.</p>
          </div>
          <MissedCallPhone />
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-black tracking-tight sm:text-4xl">What you get</h2>
          <div className="mt-9 grid gap-4 sm:grid-cols-2">
            {INCLUDES.map(([title, copy]) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-[#141417] p-6">
                <p className="text-xl font-black text-[#4ade80]">{title}</p>
                <p className="mt-2 leading-relaxed text-gray-300">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-3xl font-black tracking-tight sm:text-4xl">Fair questions</h2>
          <div className="mt-8 divide-y divide-white/10">
            {FAQS.map(([q, a]) => (
              <div key={q} className="py-5">
                <h3 className="text-lg font-bold">{q}</h3>
                <p className="mt-1.5 leading-relaxed text-gray-300">{a}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <p className="text-lg leading-relaxed text-gray-300">
              I&apos;m Heath from Seam Media. I&apos;ve worked in digital marketing for more than 10 years, and I build and look after every website myself, here in Australia.
            </p>
            <a href="#get-started" className="mt-8 inline-block rounded-lg bg-[#4ade80] px-7 py-4 text-lg font-bold text-black transition-opacity hover:opacity-90">
              Get started
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

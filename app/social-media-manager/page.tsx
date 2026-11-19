import type { Metadata } from "next";
import { Check, Star } from "lucide-react";
import GoogleRating from "@/components/GoogleRating";
import { OFFER_BUDGETS } from "@/lib/lead-qualify";
import { createMetadata } from "@/lib/seo";
import GuideForm from "../social-media-guide/GuideForm";
import { FAQS, FOR_WHO, HEADLINE_END, HEADLINE_START, INCLUDES, NOT_INCLUDED, OFFER_LINE, PRICE_LINE, REDESIGN_LINE, STEPS } from "./offer";

// Meta Ads landing page for the social media manager ads (SM ads, 19 Nov 2026). Not for search, not linked.
// Same lead route and qualifying questions as the guides, so the Meta Lead event only fires for $250+ budgets.
export const metadata: Metadata = {
  ...createMetadata({
    title: "Social media manager, no photos needed | Seam Media",
    description: "I run your Facebook and Instagram and make the posts from your website, Google reviews and past jobs. $140 a week + GST.",
    path: "/social-media-manager",
  }),
  robots: { index: false, follow: false },
};

const CORAL = "#ff8a65";

function OfferForm({ id }: { id?: string }) {
  return (
    <GuideForm
      id={id}
      offer="social-manager"
      storageKey="seam_social_lead"
      thanksPath="/social-media-manager/thanks"
      heading="Get started"
      button="Get started"
      budgets={OFFER_BUDGETS}
      budgetLabel="Monthly budget for social media"
      extraFields
      social
      accent="coral"
      note={<>I&apos;ll email you the details straight away, and call if it looks like a fit. I may also text you about it.</>}
    />
  );
}

// Three example posts for a made-up business, built from a website, a review and a past job
function ExamplePosts() {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      <div className="flex aspect-square flex-col justify-between rounded-2xl bg-[#0f3d3e] p-5">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#ff8a65]">From a Google review</p>
        <div>
          <div className="flex gap-1 text-[#fbbf24]">{[0, 1, 2, 3, 4].map((i) => <Star key={i} className="h-5 w-5 fill-current" />)}</div>
          <p className="mt-3 text-lg font-bold leading-snug">&ldquo;Hot water fixed the same day. Clean, on time and fair on price.&rdquo;</p>
          <p className="mt-2 text-sm text-gray-300">Sarah, Mornington</p>
        </div>
        <p className="text-sm font-black">Banksia Bay Plumbing</p>
      </div>
      <div className="flex aspect-square flex-col justify-between rounded-2xl bg-[#ff8a65] p-5 text-black">
        <p className="text-xs font-bold uppercase tracking-[0.14em]">From the website</p>
        <p className="text-2xl font-black leading-tight">3 signs your hot water system is on its way out</p>
        <p className="text-sm font-black">Banksia Bay Plumbing</p>
      </div>
      <div className="grid aspect-square grid-rows-[auto_1fr_auto] gap-3 rounded-2xl bg-[#1c1c21] p-5">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#ff8a65]">From a past job</p>
        <div className="grid grid-cols-2 gap-2">
          <div className="flex items-end rounded-lg bg-gradient-to-br from-[#4b4b52] to-[#2a2a30] p-2 text-xs font-bold">Before</div>
          <div className="flex items-end rounded-lg bg-gradient-to-br from-[#2f7d6d] to-[#0f3d3e] p-2 text-xs font-bold">After</div>
        </div>
        <p className="text-sm font-black">Bathroom regrout, Mt Martha</p>
      </div>
    </div>
  );
}

export default function SocialManagerPage() {
  return (
    <div className="bg-[#09090b] text-white">
      <section className="px-6 pb-16 pt-12 sm:pt-16">
        {/* On phones the form follows the headline, so it's on the first screen. */}
        <div className="mx-auto grid max-w-6xl items-start gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-x-14">
          <div className="lg:col-start-1">
            <p className="text-sm font-bold uppercase tracking-[0.14em]" style={{ color: CORAL }}>For trades and local service businesses</p>
            <h1 className="mt-4 text-4xl font-black leading-[1.05] tracking-tight sm:text-6xl">
              {HEADLINE_START} <span style={{ color: CORAL }}>{HEADLINE_END}</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-gray-200 sm:text-xl">{OFFER_LINE}</p>
            <p className="mt-3 max-w-xl leading-relaxed text-gray-400">{PRICE_LINE}</p>
          </div>
          <div className="lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <OfferForm id="get-started" />
          </div>
          <div className="lg:col-start-1">
            <ul className="space-y-3">
              {INCLUDES.map(([title]) => (
                <li key={title} className="flex gap-3 text-gray-200">
                  <Check className="mt-0.5 h-5 w-5 flex-none" style={{ color: CORAL }} />
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
          <h2 className="text-center text-3xl font-black tracking-tight sm:text-4xl">Posts from what you already have</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-gray-300">Your reviews, your website and your past jobs are a month of posts waiting to happen.</p>
          <div className="mt-9">
            <ExamplePosts />
          </div>
          <p className="mt-4 text-center text-sm text-gray-500">Examples only, with a made-up business.</p>
          <p className="mx-auto mt-8 max-w-2xl text-center text-lg text-gray-200">{REDESIGN_LINE}</p>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-black tracking-tight sm:text-4xl">How it works</h2>
          <div className="mt-9 grid gap-4 md:grid-cols-3">
            {STEPS.map(([title, copy], i) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-[#141417] p-6">
                <span className="flex h-8 w-8 items-center justify-center rounded-full text-sm font-black text-black" style={{ background: CORAL }}>{i + 1}</span>
                <p className="mt-4 text-xl font-black">{title}</p>
                <p className="mt-2 leading-relaxed text-gray-300">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-black tracking-tight sm:text-4xl">What you get</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-gray-300">Local Marketing Foundation: {PRICE_LINE}</p>
          <div className="mt-9 grid gap-4 sm:grid-cols-2">
            {INCLUDES.map(([title, copy]) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-[#141417] p-6">
                <p className="text-xl font-black" style={{ color: CORAL }}>{title}</p>
                <p className="mt-2 leading-relaxed text-gray-300">{copy}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-6 max-w-3xl text-center text-sm text-gray-500">{NOT_INCLUDED}</p>
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
              I&apos;m Heath from Seam Media. I&apos;ve worked in digital marketing for more than 10 years and made over 30,000 social posts for Australian businesses, and I do the work myself, here in Australia.
            </p>
            <a href="#get-started" className="mt-8 inline-block rounded-lg px-7 py-4 text-lg font-bold text-black transition-opacity hover:opacity-90" style={{ background: CORAL }}>
              Get started
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

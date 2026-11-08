import type { Metadata } from "next";
import { Check, MessageSquare, PhoneMissed, Send } from "lucide-react";
import GoogleRating from "@/components/GoogleRating";
import { createMetadata } from "@/lib/seo";
import SmartWebsiteForm from "./SmartWebsiteForm";
import { INCLUDES, PRICE, PRICE_NOTE, STEP_UPS, TERMS } from "./offer";

// Meta Ads landing page for the Smart Website entry package (8 Nov 2026). Not for search.
// The phone example uses a made-up business.
export const metadata: Metadata = {
  ...createMetadata({
    title: `Smart websites for trades, ${PRICE} ${PRICE_NOTE} | Seam Media`,
    description: "A website built for your business that texts back missed calls, replies to enquiries instantly and sends every enquiry to your phone.",
    path: "/smart-website",
  }),
  robots: { index: false, follow: false },
};

const faqs = [
  ["Is there a lock-in contract?", "No. It's month to month, billed weekly."],
  ["Is there a setup fee?", "No. You pay the weekly price, starting from the first week."],
  ["Who does the work?", "Me. You deal with me directly, and it's all done here in Australia."],
  ["Do I need a website already?", "No. I build it for you. If you have one, tell me in the form and I'll take a look before I call."],
  ["How many pages do I get?", "There's no cap on pages. Ecommerce, custom functionality and complex builds are quoted separately."],
  ["What SEO is included?", "Basic local SEO. Full local SEO, with tracked search terms, Google Business Profile management and map-pack scans, comes with Growth, and you keep your website when you step up."],
  ["Can you guarantee leads?", "No, and I'd be careful of anyone who does. What I can promise is that the enquiries you do get won't slip through the cracks."],
];

const flow = [
  { icon: PhoneMissed, colour: "bg-red-500", title: "Missed call", time: "10:14 am", body: "0412 *** 318 called while you were up a ladder." },
  { icon: Send, colour: "bg-blue-500", title: "Text sent to the caller", time: "10:14 am", body: "\"Sorry I missed you, I'm on a job. What do you need a hand with? I'll call you back shortly. Dan, Banksia Bay Plumbing\"" },
  { icon: MessageSquare, colour: "bg-green-500", title: "New enquiry on your phone", time: "10:16 am", body: "\"Hot water system's leaking, I'm in Mornington. Can you come today?\"" },
];

export default function SmartWebsitePage() {
  return (
    <div className="bg-[#09090b] text-white">
      <section className="px-6 pb-16 pt-12 sm:pt-16">
        {/* On phones the form follows the headline, so it's on the first screen. */}
        <div className="mx-auto grid max-w-6xl items-start gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-x-14">
          <div className="lg:col-start-1">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#4ade80]">Smart websites for trades</p>
            <h1 className="mt-4 text-4xl font-black leading-[1.05] tracking-tight sm:text-6xl">
              A website that <span className="text-[#4ade80]">texts back the calls you miss.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-gray-300 sm:text-xl">
              Built for your business and set up for Google, with every enquiry sent straight to your phone. {PRICE} {PRICE_NOTE}. {TERMS}
            </p>
          </div>
          <div className="lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <SmartWebsiteForm />
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
            <GoogleRating className="mt-7" />
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">What happens when you miss a call</h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-300">
              Most people won&apos;t leave a voicemail. They ring the next business on Google. A smart website texts them back straight away, so you keep the job while you finish the one you&apos;re on.
            </p>
            <p className="mt-3 text-sm text-gray-500">Example only, with a made-up business.</p>
          </div>
          <div className="mx-auto w-full max-w-sm rounded-[2.5rem] border-[10px] border-[#2a2f3a] bg-gradient-to-br from-[#1e3a8a] via-[#4c1d95] to-[#0f766e] p-4 shadow-2xl">
            <p className="pt-3 text-center text-6xl font-light tracking-tight">10:16</p>
            <p className="mb-5 mt-1 text-center text-sm font-semibold text-white/80">Tuesday</p>
            <div className="space-y-2.5">
              {flow.map(({ icon: Icon, colour, title, time, body }) => (
                <div key={title} className="flex gap-3 rounded-2xl bg-white/90 p-3.5 text-black">
                  <div className={`flex h-9 w-9 flex-none items-center justify-center rounded-lg ${colour}`}>
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex justify-between gap-2 text-sm font-bold">
                      {title}
                      <span className="whitespace-nowrap font-medium text-gray-500">{time}</span>
                    </div>
                    <p className="mt-0.5 text-sm leading-snug text-gray-700">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-black tracking-tight sm:text-4xl">
            What you get for {PRICE} {PRICE_NOTE}
          </h2>
          <div className="mt-9 grid gap-4 sm:grid-cols-2">
            {INCLUDES.map(([title, copy]) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-[#141417] p-6">
                <p className="text-xl font-black text-[#4ade80]">{title}</p>
                <p className="mt-2 leading-relaxed text-gray-300">{copy}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-gray-400">{TERMS} I do the work myself, here in Australia.</p>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-black tracking-tight sm:text-4xl">When you&apos;re ready for more work</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-gray-300">Start with the website. If you want more enquiries coming in, step up any time and keep your website.</p>
          <div className="mt-9 grid gap-4 md:grid-cols-2">
            {STEP_UPS.map(([name, price, copy]) => (
              <div key={name} className="rounded-2xl border border-white/10 bg-[#141417] p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <p className="text-2xl font-black">{name}</p>
                  <p className="font-bold text-[#4ade80]">{price}</p>
                </div>
                <p className="mt-3 leading-relaxed text-gray-300">{copy}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-center text-sm text-gray-500">Ad spend is separate and paid directly to Google or Meta.</p>
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
          <div className="mt-10 text-center">
            <p className="text-lg leading-relaxed text-gray-300">
              I&apos;m Heath from Seam Media. I&apos;ve worked in digital marketing for more than 10 years, and I build and look after every website myself.
            </p>
            <a href="#get-started" className="mt-8 inline-block rounded-lg bg-[#4ade80] px-7 py-4 text-lg font-bold text-black transition-opacity hover:opacity-90">
              Get your smart website
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

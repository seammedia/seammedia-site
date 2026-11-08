import type { Metadata } from "next";
import Link from "next/link";
import { Check, Download } from "lucide-react";
import GoogleRating from "@/components/GoogleRating";
import { CallMeButton, LeadTracker } from "./ThanksActions";

// Second step after the opt-in: the download, then the offer. Prices mirror /marketing-packages.
export const metadata: Metadata = {
  title: "Your guide is ready | Seam Media",
  description: "Download your free guide, and see how I can turn your socials into enquiries for you.",
  robots: { index: false, follow: false },
};

// Paste the Loom embed URL here (https://www.loom.com/embed/...) once it's recorded. Nothing shows while blank.
const LOOM_EMBED_URL = "";
const PDF = "/guides/social-media-enquiries-guide.pdf";

const steps = [
  ["Seen", "I run Meta Ads or Google Ads for you, and look after your local SEO and Google Business Profile, so people in your area find you."],
  ["Trusted", "I write, design and schedule your Facebook and Instagram posts from your real jobs, and set up review requests."],
  ["Contacted", "I look after your website, set up conversion tracking and show you every month where your enquiries came from."],
];

const growth = [
  "Branded social posts and captions, scheduled on Facebook and Instagram",
  "Google Ads OR Meta Ads managed, including setup, tracking and optimisation",
  "Local SEO with five tracked search terms",
  "Google Business Profile posts and management",
  "Review requests, monitoring and reply support",
  "A Smart Website: missed calls texted back, instant enquiry replies and every enquiry sent to your phone",
  "One priority website or SEO improvement a month",
  "Monthly performance reporting",
];

const faqs = [
  ["Is there a lock-in contract?", "No. It's month to month and billed weekly. Cancel any time, and it takes effect at the end of the billing period you've paid for."],
  ["Is ad spend included?", "No. Ad spend is separate and you pay it directly to Meta or Google, so you can always see exactly what's being spent."],
  ["Who does the work?", "Me. You deal with me directly, and it's all done here in Australia."],
  ["Do I need to supply photos?", "Yes. Photos and footage from your phone are perfect, and the guide shows you what to capture. On-site filming is quoted separately."],
  ["Can you guarantee leads?", "No, and I'd be careful of anyone who does. Results depend on your market, your offer and how quickly enquiries get answered. What I can promise is clear reporting, so you can see what's working."],
];

export default function GuideThanksPage() {
  return (
    <div className="bg-[#09090b] text-white">
      <LeadTracker />
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
            I&apos;ll turn your socials into enquiries, for $235 a week + GST
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-gray-300 sm:text-xl">
            Posts alone don&apos;t bring in work. So I look after your posts, your ads, your Google presence and your reporting, in one plan, with no lock-in.
          </p>
          {LOOM_EMBED_URL && (
            <div className="mx-auto mt-9 aspect-video max-w-3xl overflow-hidden rounded-2xl ring-1 ring-white/15">
              <iframe src={LOOM_EMBED_URL} title="A short video from Heath" allowFullScreen className="h-full w-full" />
            </div>
          )}
          <div className="mt-9 flex flex-col items-center gap-3">
            <CallMeButton label="Yes, call me for a quick chat" />
            <p className="text-sm text-gray-400">10 minutes, no pressure. I&apos;ll tell you what I&apos;d fix first, even if you don&apos;t go ahead.</p>
            <GoogleRating className="mt-3" />
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-black tracking-tight sm:text-4xl">Every step of the path, covered</h2>
          <div className="mt-9 grid gap-4 md:grid-cols-3">
            {steps.map(([title, copy]) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-[#141417] p-6">
                <p className="text-2xl font-black text-[#f5b5b5]">{title}</p>
                <p className="mt-3 leading-relaxed text-gray-300">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-16">
        <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-[1.35fr_1fr]">
          <div className="rounded-2xl bg-white p-7 text-black sm:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-gray-500">Where I&apos;d start for most businesses</p>
            <div className="mt-2 flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="text-3xl font-black">Growth</h2>
              <p className="text-3xl font-black">$235<span className="ml-1 text-base font-bold">a week + GST</span></p>
            </div>
            <ul className="mt-5 space-y-2.5">
              {growth.map((g) => (
                <li key={g} className="flex gap-2.5">
                  <Check className="mt-0.5 h-5 w-5 flex-none" />
                  <span>{g}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-gray-600">Ad spend is separate and paid directly to Google or Meta. Filming, extra locations and larger website projects are quoted separately.</p>
          </div>
          <div className="flex flex-col rounded-2xl border border-white/10 bg-[#141417] p-7">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-gray-400">Not ready for ads?</p>
            <h2 className="mt-2 text-2xl font-black">Local Marketing Foundation</h2>
            <p className="mt-2 text-2xl font-black">$140<span className="ml-1 text-base font-bold">a week + GST</span></p>
            <p className="mt-4 leading-relaxed text-gray-300">Branded social posts and captions scheduled on Facebook and Instagram, using your photos.</p>
            <p className="mt-3 text-sm leading-relaxed text-gray-400">It&apos;s social media only, so it doesn&apos;t include a website, ads, SEO, Google Business Profile management or reporting.</p>
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
            <CallMeButton label="Yes, call me" />
            <a href="tel:0402642746" className="text-gray-300 underline hover:text-white">Or call me on 0402 642 746</a>
          </div>
        </div>
      </section>
    </div>
  );
}

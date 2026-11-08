import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import GoogleRating from "@/components/GoogleRating";
import { createMetadata } from "@/lib/seo";
import GuideForm from "../social-media-guide/GuideForm";

// Meta Ads opt-in page for the tradie website guide (8 Nov 2026): free PDF for name, business, email and mobile,
// then /website-guide/thanks leads with the Smart Website. Same pattern as /social-media-guide. Not for search.
export const metadata: Metadata = {
  ...createMetadata({
    title: "Free guide: Stop losing jobs to missed calls and slow replies | Seam Media",
    description: "A free guide for trades: what your website needs so visitors turn into calls, with a checklist you can work through on your phone.",
    path: "/website-guide",
  }),
  robots: { index: false, follow: false },
};

const bullets = [
  "The phone test that shows why visitors leave without calling",
  "What to do so a missed call doesn't become a lost job",
  "A missed-call text and an instant reply you can copy",
  "A 12-point website checklist, and the one number to track",
];

const fixes = [
  ["The phone test", "Seven things a stranger needs to see on your website, without scrolling, before they'll call."],
  ["Get found for the jobs you want", "The basic local SEO that's worth doing: service pages, suburb pages and clear page titles."],
  ["Make it easy to get in touch", "Tap-to-call on every page, and a quote form short enough to fill in with one thumb."],
  ["Don't let a missed call become a lost job", "How to keep the caller waiting for you instead of ringing the next tradie."],
  ["Reply before they ring someone else", "Get every enquiry to your phone, and send an instant reply while you're on the tools."],
];

export default function WebsiteGuidePage() {
  return (
    <div className="bg-[#09090b] text-white">
      <section className="px-6 pb-16 pt-12 sm:pt-16">
        {/* On phones the form follows the headline, so it's on the first screen. */}
        <div className="mx-auto grid max-w-6xl items-start gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-x-14">
          <div className="lg:col-start-1">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#f5b5b5]">Free guide for trades</p>
            <h1 className="mt-4 text-4xl font-black leading-[1.05] tracking-tight sm:text-6xl">
              Stop losing jobs to <span className="text-[#f5b5b5]">missed calls and slow replies.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-gray-300 sm:text-xl">
              Your website might look fine and still leak work. This guide shows you where the calls are going, and the 5 fixes I&apos;d make first.
            </p>
          </div>
          <div className="lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <GuideForm id="get-the-guide" offer="website-guide" storageKey="seam_website_guide_lead" thanksPath="/website-guide/thanks" />
          </div>
          <div className="lg:col-start-1">
            <ul className="space-y-3">
              {bullets.map((b) => (
                <li key={b} className="flex gap-3 text-gray-200">
                  <Check className="mt-0.5 h-5 w-5 flex-none text-[#f5b5b5]" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <GoogleRating className="mt-7" />
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          <div className="flex justify-center gap-3 sm:gap-4">
            {["p-01", "p-04", "p-07"].map((p, i) => (
              <Image key={p} src={`/images/website-guide/${p}.png`} alt={`Page from the guide ${i + 1}`} width={280} height={396} className="w-1/3 max-w-[210px] rounded-md shadow-2xl ring-1 ring-white/10" />
            ))}
          </div>
          <div>
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">The 5 fixes inside</h2>
            <ol className="mt-6 space-y-4">
              {fixes.map(([title, copy], i) => (
                <li key={title} className="flex gap-4">
                  <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-[#f5b5b5] text-sm font-black text-black">{i + 1}</span>
                  <div>
                    <p className="font-bold">{title}</p>
                    <p className="mt-0.5 text-sm leading-relaxed text-gray-400">{copy}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Who wrote it</h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-300">
            I&apos;m Heath from Seam Media. I&apos;ve worked in digital marketing for more than 10 years and built over 100 websites for Australian businesses. I do the work myself, here in Australia. I wrote this because most tradie websites I look at aren&apos;t ugly. They just leak calls.
          </p>
          <a href="#get-the-guide" className="mt-8 inline-block rounded-lg bg-[#f5b5b5] px-7 py-4 text-lg font-bold text-black transition-opacity hover:opacity-90">
            Get the free guide
          </a>
        </div>
      </section>
    </div>
  );
}

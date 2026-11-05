import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import GoogleRating from "@/components/GoogleRating";
import { createMetadata } from "@/lib/seo";
import GuideForm from "./GuideForm";

// Meta Ads opt-in page: free PDF in exchange for name, business, email and mobile. Not for search.
export const metadata: Metadata = {
  ...createMetadata({
    title: "Free guide: Why your socials get likes but no enquiries | Seam Media",
    description: "A free 12-page guide for service businesses: the 6 fixes I'd make first to turn Facebook and Instagram into enquiries.",
    path: "/social-media-guide",
  }),
  robots: { index: false, follow: false },
};

const bullets = [
  "The 10-second test that shows why people look at your profile and leave",
  "5 types of post that build trust, using photos you already take on the job",
  "A saved reply you can copy, so enquiries stop dying in your DMs",
  "A one-hour weekly plan, and the only numbers worth tracking",
];

const fixes = [
  ["The 10-second profile test", "Tick off the 7 things a stranger needs to see before they'll contact you."],
  ["Post proof, not promos", "Swap filler graphics for real work that shows you can do the job."],
  ["Talk to locals", "Make sure the people seeing your posts are people who can actually hire you."],
  ["One next step per post", "Exact endings you can copy for urgent work, quotes, appointments and classes."],
  ["Answer before they message someone else", "A simple system for replying quickly, even when you're flat out."],
  ["Put a small budget behind what's working", "How to run your first small test, and the one sum that tells you if it's working."],
];

export default function SocialMediaGuidePage() {
  return (
    <div className="bg-[#09090b] text-white">
      <section className="px-6 pb-16 pt-12 sm:pt-16">
        {/* On phones the form follows the headline, so it's on the first screen. */}
        <div className="mx-auto grid max-w-6xl items-start gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-x-14">
          <div className="lg:col-start-1">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#f5b5b5]">Free 12-page guide for service businesses</p>
            <h1 className="mt-4 text-4xl font-black leading-[1.05] tracking-tight sm:text-6xl">
              Getting likes on your socials, but <span className="text-[#f5b5b5]">no enquiries?</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-gray-300 sm:text-xl">
              More posts won&apos;t fix it. This guide shows you where your enquiries are leaking, and the 6 fixes I&apos;d make first.
            </p>
          </div>
          <div className="lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <GuideForm />
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
            {["p-01", "p-03", "p-04"].map((p, i) => (
              <Image key={p} src={`/images/social-guide/${p}.png`} alt={`Page from the guide ${i + 1}`} width={280} height={396} className="w-1/3 max-w-[210px] rounded-md shadow-2xl ring-1 ring-white/10" />
            ))}
          </div>
          <div>
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">The 6 fixes inside</h2>
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
            I&apos;m Heath from Seam Media. I&apos;ve worked in digital marketing for more than 10 years and created over 30,000 social posts for Australian businesses. I do the work myself, here in Australia. I wrote this because a nice-looking feed doesn&apos;t bring in work on its own, and I&apos;ve had clients leave over it.
          </p>
          <a href="#get-the-guide" className="mt-8 inline-block rounded-lg bg-[#f5b5b5] px-7 py-4 text-lg font-bold text-black transition-opacity hover:opacity-90">
            Get the free guide
          </a>
        </div>
      </section>
    </div>
  );
}

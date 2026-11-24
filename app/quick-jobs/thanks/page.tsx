import type { Metadata } from "next";
import GoogleRating from "@/components/GoogleRating";
import { LeadTracker } from "../../social-media-guide/thanks/ThanksActions";

// After the quick job form: fires the Meta Lead event once (every budget except "Under $300").
export const metadata: Metadata = {
  title: "Thanks, I've got your job | Seam Media",
  description: "Your job is in. Here's what happens next.",
  robots: { index: false, follow: false },
};

const NEXT: [string, string][] = [
  ["I'll take a look", "I read every job myself."],
  ["I'll reply within one business day", "With a fixed price, or a question if I need to know more."],
  ["You decide", "The final price is quoted before any work starts."],
];

export default function QuickJobsThanksPage() {
  return (
    <div className="bg-[#0b0b0c] text-white">
      <LeadTracker storageKey="seam_quick_job" contentName="Quick job" gaForm="quick-job" />
      <section className="px-4 pb-20 pt-16 sm:px-6 sm:pt-20">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-black leading-[1.05] tracking-tight sm:text-6xl">
            Thanks. <span className="block text-[#ffd23f]">I&apos;ve got your job.</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-gray-200 sm:text-xl">
            Keep an eye on your inbox (and your junk folder) for my email. If you think of anything else, just reply to it.
          </p>
          <ol className="mt-10 divide-y divide-white/15 border-y border-white/15">
            {NEXT.map(([title, copy], i) => (
              <li key={title} className="flex gap-5 py-5">
                <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-[#ffd23f] font-black text-black" aria-hidden="true">{i + 1}</span>
                <div><p className="text-xl font-black">{title}</p><p className="mt-1 text-gray-300">{copy}</p></div>
              </li>
            ))}
          </ol>
          <GoogleRating className="mt-9" />
        </div>
      </section>
    </div>
  );
}

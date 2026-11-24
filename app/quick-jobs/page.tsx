import type { Metadata } from "next";
import { ArrowRight, Check } from "lucide-react";
import GoogleRating from "@/components/GoogleRating";
import { JOBS, OTHER_JOB, jobFromParam } from "@/lib/quick-jobs";
import { createMetadata } from "@/lib/seo";
import QuickJobForm, { PickJob } from "./QuickJobForm";

// Meta Ads landing page for the odd-jobs ads (25 Nov 2026): one-off work at a fixed price. Not for search, not linked.
// ?job=website|shopify|crm|small picks the job in the form, so each ad can link to its own.
export const metadata: Metadata = {
  ...createMetadata({
    title: "Send me the job you keep putting off | Seam Media",
    description: "One-off website, Shopify, CRM and small digital jobs at a fixed price. No retainer, no lock-in.",
    path: "/quick-jobs",
  }),
  robots: { index: false, follow: false },
};

const STEPS: [string, string][] = [
  ["Send me the job", "Tell me what needs doing in a few lines. Add a link if you have one."],
  ["I send back a fixed price", "With what's included, or a question if I need to know more. The final price is quoted before any work starts."],
  ["You decide", "If you're happy with the price, I get started. If not, that's fine too."],
];

export default async function QuickJobsPage({ searchParams }: { searchParams: Promise<{ job?: string | string[] }> }) {
  const initialJob = jobFromParam((await searchParams).job);
  return (
    <div className="bg-[#0b0b0c] text-white">
      <section className="px-4 pb-16 pt-16 sm:px-6 sm:pt-20">
        {/* On phones the form follows the headline */}
        <div className="mx-auto grid max-w-6xl items-start gap-8 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-x-14">
          <div className="lg:col-start-1">
            <h1 className="text-4xl font-black leading-[1.05] tracking-tight sm:text-6xl">
              Send me the job <span className="block text-[#ffd23f]">you keep putting off.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-gray-200 sm:text-xl">
              I&apos;ll send back a fixed price. One-off work, no retainer, <span className="whitespace-nowrap">no lock-in.</span>
            </p>
          </div>
          <div className="lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <QuickJobForm key={initialJob} initialJob={initialJob} />
          </div>
          <div className="lg:col-start-1">
            <ul className="divide-y divide-white/15 border-y border-white/15">
              {JOBS.map((j) => (
                <li key={j.id} className="flex items-center gap-4 py-4">
                  <span className="h-6 w-6 flex-none rounded-md border-2 border-[#ffd23f]" aria-hidden="true" />
                  <span className="flex-1 font-bold sm:text-lg">{j.title}</span>
                  <span className="flex-none text-right text-gray-300">from <b className="text-white">{j.from}</b></span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-gray-300">All prices + GST. The final price is quoted before any work starts.</p>
            <p className="mt-6 flex gap-3 text-lg font-bold"><Check className="mt-1 h-5 w-5 flex-none text-[#ffd23f]" aria-hidden="true" />I do the work myself, here in Australia.</p>
            <GoogleRating className="mt-6" />
          </div>
        </div>
      </section>

      <section className="bg-[#ffd23f] px-4 py-16 text-black sm:px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">What I can take off your list</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {JOBS.map((j) => (
              <div key={j.id} className="flex flex-col rounded-2xl bg-[#fff8e1] p-6">
                <h3 className="text-xl font-black">{j.title}</h3>
                <p className="mt-1 font-bold">From {j.from} + GST</p>
                <p className="mt-3 flex-1 leading-relaxed text-gray-800">{j.copy}</p>
                <PickJob job={j.id} className="mt-5 inline-flex items-center gap-2 self-start py-2 font-bold underline underline-offset-4 hover:no-underline">
                  Send me this job <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </PickJob>
              </div>
            ))}
          </div>
          <p className="mt-6 text-lg">
            Something else on the list?{" "}
            <PickJob job={OTHER_JOB.id} className="font-bold underline underline-offset-4 hover:no-underline">Send it through</PickJob> and I&apos;ll tell you if I can help.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">How it works</h2>
          <ol className="mt-8 grid gap-8 md:grid-cols-3">
            {STEPS.map(([title, copy], i) => (
              <li key={title} className="border-t-4 border-[#ffd23f] pt-5">
                <p className="text-xl font-black">{i + 1}. {title}</p>
                <p className="mt-2 leading-relaxed text-gray-300">{copy}</p>
              </li>
            ))}
          </ol>
          <p className="mt-12 max-w-2xl text-lg leading-relaxed text-gray-200">I&apos;m Heath from Seam Media. You deal with me directly, and I do the work myself, here in Australia.</p>
          <a href="#send-job" className="mt-7 inline-block rounded-lg bg-[#ffd23f] px-7 py-4 text-lg font-bold text-black transition-opacity hover:opacity-90">Send me the job</a>
        </div>
      </section>
    </div>
  );
}

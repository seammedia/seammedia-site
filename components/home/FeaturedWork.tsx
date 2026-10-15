import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/lib/case-studies";
import DarkSection, { SectionIntro } from "./DarkSection";

// Shows the first three case studies, so the home page updates whenever lib/case-studies.ts changes.
export default function FeaturedWork() {
  const featured = caseStudies.slice(0, 3);
  return (
    <DarkSection glow="left" className="pt-10 lg:pt-14">
      <SectionIntro
        eyebrow="Data-driven results"
        title={<>Real businesses. <span className="text-gray-500">Real numbers.</span></>}
        text="We track every campaign month by month, so you can see exactly what your marketing is returning. Here are a few results, straight from our clients' own Google and Shopify reports."
      >
        <Link href="/case-studies" className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/25 px-6 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-black">
          All case studies <ArrowRight size={18} aria-hidden="true" />
        </Link>
      </SectionIntro>
      <div className="grid gap-6 md:grid-cols-3">
        {featured.map(study => (
          <Link
            key={study.slug}
            href={`/case-studies/${study.slug}`}
            className="group relative flex min-h-[440px] flex-col justify-end overflow-hidden rounded-3xl border border-[#262626] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            <Image src={study.cover} alt={study.coverAlt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/10" />
            <div className="relative p-7">
              <p className="text-xs font-medium uppercase tracking-widest text-white/60">{study.category}</p>
              <p className="mt-4 text-5xl font-bold tracking-tight text-white">{study.cardStat.value}</p>
              <p className="mt-1 text-white/75">{study.cardStat.label}</p>
              <div className="mt-6 flex items-center justify-between border-t border-white/15 pt-5">
                <h3 className="text-xl font-bold text-white">{study.name}</h3>
                <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-black transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true"><ArrowUpRight size={18} /></span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </DarkSection>
  );
}

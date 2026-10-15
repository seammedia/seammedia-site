import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { caseStudies } from "@/lib/case-studies";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({ title: "Case Studies | Seam Media", description: "Explore Seam Media’s case studies in SEO, Google Ads and ecommerce. See A$4.77M in Shopify sales for an ecommerce business, The South East Fencer’s search growth and The Florist Client’s sales and local results.", path: "/case-studies" });

export default function CaseStudiesPage() {
  return (
    <>
      <section className="bg-[#0a0a0a] px-6 pb-16 pt-28 text-white lg:px-12 lg:pb-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-[#f5b5b5]">Our work, in focus</p>
          <h1 className="max-w-4xl text-5xl font-bold tracking-tight sm:text-7xl lg:text-8xl">Real businesses.<br /><span className="text-gray-400">Real numbers.</span></h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-gray-300 sm:text-xl">The work behind the results, straight from our clients’ own Google and Shopify reports.</p>
        </div>
      </section>
      <section className="bg-[#0a0a0a] px-6 pb-20 lg:px-12 lg:pb-28" aria-label="Our case studies">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
          {caseStudies.map((study, index) => (
            <Link key={study.slug} href={`/case-studies/${study.slug}`} className={`group relative flex min-h-[560px] flex-col justify-between overflow-hidden rounded-3xl text-white ${index === 0 ? "md:col-span-2 sm:min-h-[600px]" : "sm:min-h-[620px]"} focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white`}>
              <Image src={study.cover} alt={study.coverAlt} fill sizes={index === 0 ? "100vw" : "(max-width: 768px) 100vw, 50vw"} className="object-cover transition-transform duration-700 group-hover:scale-105" priority={index === 0} />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/10" />
              {index === 0 && <div aria-hidden="true" className="absolute inset-0 hidden bg-gradient-to-r from-black/70 to-transparent md:block" />}
              <div className="relative flex items-center justify-between gap-4 p-8 sm:p-10"><span className="text-sm font-semibold tracking-widest">0{index + 1}</span><span className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium backdrop-blur">{study.category}</span></div>
              <div className="relative p-8 sm:p-10">
                <p className={`font-bold tracking-tight ${index === 0 ? "text-6xl sm:text-8xl" : "text-6xl sm:text-7xl"}`}>{study.cardStat.value}</p>
                <p className="mt-2 text-lg text-white/80">{study.cardStat.label}</p>
                <div className="mt-8 border-t border-white/20 pt-6">
                  <h2 className="text-3xl font-bold tracking-tight">{study.name}</h2>
                  <p className="mt-2 text-white/75">{study.headline}</p>
                  <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black">Explore the case study <ArrowRight size={16} aria-hidden="true" className="transition-transform group-hover:translate-x-1" /></span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className="px-6 py-20 text-center"><h2 className="text-3xl font-bold sm:text-4xl">What could growth look like for your business?</h2><p className="mx-auto mb-8 mt-5 max-w-xl text-gray-600">Let’s talk about your goals and where SEO, advertising or a better website could help.</p><Link href="/contact" className="inline-flex rounded-full bg-black px-7 py-4 font-semibold text-white">Talk to Seam Media</Link></section>
    </>
  );
}

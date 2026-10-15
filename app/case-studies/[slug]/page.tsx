import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, Clock } from "lucide-react";
import { caseStudies } from "@/lib/case-studies";
import { createMetadata } from "@/lib/seo";
import CaseChart from "../CaseChart";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() { return caseStudies.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);
  if (!study) notFound();
  return createMetadata({ title: `${study.name} Case Study | Seam Media`, description: study.summary, path: `/case-studies/${slug}`, image: study.cover });
}

const accents = { fencer: "#4e7d5b", florist: "#c2577a", ecommerce: "#4f5bd5", finance: "#16806f" };

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);
  if (!study) notFound();
  const other = caseStudies[(caseStudies.findIndex((item) => item.slug === slug) + 1) % caseStudies.length];
  const accent = accents[study.theme];
  const reports = study.sections.filter(section => "image" in section);
  const pending = study.sections.filter(section => !("image" in section));

  return (
    <>
      <section className="relative flex min-h-[640px] items-end overflow-hidden bg-black px-6 pb-16 pt-28 text-white lg:min-h-[78vh] lg:px-12 lg:pb-20">
        <Image src={study.cover} alt={study.coverAlt} fill priority sizes="100vw" className="object-cover" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
        <div className="relative mx-auto w-full max-w-7xl">
          <Link href="/case-studies" className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"><ArrowLeft size={16} aria-hidden="true" />All case studies</Link>
          <p className="mb-5 mt-10 text-sm font-semibold uppercase tracking-widest text-white/75">{study.category}</p>
          <h1 className="text-5xl font-bold tracking-tight sm:text-7xl lg:text-8xl">{study.name}</h1>
          <p className="mt-6 max-w-3xl text-2xl leading-snug text-white/85 sm:text-3xl">{study.headline}</p>
          <div className="mt-8 flex flex-wrap gap-3">{study.focus.map((focus) => <span key={focus} className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm backdrop-blur">{focus}</span>)}</div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-white px-6 py-14 lg:px-12 lg:py-20" aria-label="Key results">
        <dl className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {study.stats.map(stat => <div key={stat.label} className="flex flex-col-reverse border-l-4 pl-5" style={{ borderColor: accent }}><dt className="mt-2 text-sm leading-snug text-gray-600 sm:text-base">{stat.label}</dt><dd className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">{stat.value}</dd></div>)}
        </dl>
      </section>

      <section className="px-6 py-16 lg:px-12 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_2fr]">
          <h2 className="text-3xl font-bold sm:text-4xl">The story</h2>
          <div><p className="text-lg leading-relaxed text-gray-700 sm:text-xl">{study.intro}</p>{"website" in study && <a href={study.website} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center gap-1 font-semibold underline underline-offset-4">Visit The South East Fencer <ArrowUpRight size={16} aria-hidden="true" /></a>}</div>
        </div>
      </section>

      <section className="bg-[#f7f5f2] px-6 py-16 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl space-y-8">
          <p className="text-sm font-semibold uppercase tracking-widest" style={{ color: accent }}>The growth, charted</p>
          {study.charts.map(chart => <article key={chart.title} className="rounded-3xl border border-black/10 bg-white p-6 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">{chart.title}</p>
            <h3 className="mb-10 mt-3 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">{chart.kicker}</h3>
            <CaseChart series={chart.series} labels={chart.labels} unit={chart.unit} format={chart.format} theme={study.theme} approx={"approx" in chart ? chart.approx : true} />
            <p className="mt-8 max-w-4xl text-sm leading-relaxed text-gray-500">{chart.note}</p>
          </article>)}
        </div>
      </section>

      <section className="px-6 py-16 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">The original reports</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Straight from the source.</h2>
          <p className="mt-4 max-w-2xl text-gray-600">Screenshots from the original reports. Click any report to view it full size.</p>
          <div className="mt-10 grid gap-8 lg:grid-cols-2">{reports.map((section, i) => "image" in section && <figure key={section.title} className={reports.length % 2 && i === 0 ? "lg:col-span-2" : ""}>
            <a href={section.image} target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-2xl border border-gray-200 shadow-sm transition hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4" aria-label={`View full-size image: ${section.title}`}><Image src={section.image} width={section.width} height={section.height} alt={section.alt} sizes="(max-width: 1024px) 100vw, 1200px" className="h-auto w-full" /></a>
            <figcaption className="mt-4"><p className="text-xs font-semibold uppercase tracking-widest text-gray-500">{section.source}</p><p className="mt-2 font-bold">{section.title}</p><p className="mt-2 text-sm leading-relaxed text-gray-600">{section.description}</p><p className="mt-2 text-xs leading-relaxed text-gray-500">{section.caption}</p></figcaption>
          </figure>)}</div>
          {pending.length > 0 && <div className="mt-12 grid gap-4 sm:grid-cols-2">{pending.map(section => <div key={section.title} className="flex gap-4 rounded-2xl border border-dashed border-gray-300 p-6"><Clock size={20} className="mt-0.5 shrink-0 text-gray-400" aria-hidden="true" /><div><p className="font-semibold">{section.title}</p><p className="mt-1 text-sm text-gray-600">{"detail" in section ? section.detail : ""}</p></div></div>)}</div>}
        </div>
      </section>

      <section className="bg-[#0a0a0a] px-6 py-20 text-white lg:px-12">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
          <div><h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Want numbers like these?</h2><p className="mt-4 max-w-md text-lg text-gray-400">Let’s talk about where your business could grow next.</p><Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-black">Get in touch <ArrowRight size={18} aria-hidden="true" /></Link></div>
          <Link href={`/case-studies/${other.slug}`} className="group relative flex min-h-64 flex-col justify-end overflow-hidden rounded-3xl p-8 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
            <Image src={other.cover} alt={other.coverAlt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/20" />
            <div className="relative"><p className="text-sm uppercase tracking-widest text-white/70">Next case study</p><p className="mt-2 text-3xl font-bold">{other.name}</p><p className="mt-1 text-white/80">{other.cardStat.value} {other.cardStat.label}</p></div>
          </Link>
        </div>
      </section>
    </>
  );
}

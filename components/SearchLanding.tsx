import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { StructuredData } from "@/components/StructuredData";
import { siteUrl } from "@/lib/seo";
import type { SearchPage } from "@/lib/search-pages";
import { GOOGLE_BUSINESS_URL } from "@/lib/reviews";
import { GOOGLE_RATING } from "@/components/GoogleRating";

function Stars() {
  return <span className="flex gap-0.5" aria-label="5 out of 5 stars">{Array.from({ length: 5 }, (_, i) => <svg key={i} viewBox="0 0 20 20" className="h-5 w-5 fill-[#FBBF24]" aria-hidden="true"><path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z" /></svg>)}</span>;
}

export default function SearchLanding({ page }: { page: SearchPage }) {
  return <>
    <StructuredData data={{ "@context": "https://schema.org", "@type": "Service", "@id": `${siteUrl}${page.path}#service`, name: page.h1, description: page.description, url: `${siteUrl}${page.path}`, serviceType: page.service, provider: { "@type": "Organization", "@id": `${siteUrl}/#organization`, name: "Seam Media", url: siteUrl }, areaServed: { "@type": "Place", name: page.area } }} />
    <StructuredData data={{ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: siteUrl }, { "@type": "ListItem", position: 2, name: page.h1, item: `${siteUrl}${page.path}` }] }} />
    <section className="bg-[#f4f7f8] px-6 py-20 lg:py-28">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.5fr_1fr] gap-12 items-center">
        <div>
          <Link href="/services" className="text-sm text-[#4a6370] underline underline-offset-4">Seam Media services</Link>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mt-6 mb-6">{page.h1}</h1>
          <p className="text-xl text-gray-700 leading-relaxed">{page.intro}</p>
          <div className="flex flex-wrap gap-4 mt-8"><Link href="#enquire" className="bg-gray-900 text-white rounded-full px-7 py-4 font-semibold">Discuss your {page.service.toLowerCase()}</Link><Link href="/marketing-packages" className="rounded-full border border-gray-400 px-7 py-4 text-gray-900 font-semibold">See packages and scope</Link></div>
        </div>
        <aside className="rounded-2xl bg-white border border-gray-200 p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Start with the right priorities</h2>
          <ul className="space-y-4 text-gray-700">{page.checks.map(check => <li key={check} className="border-b border-gray-100 pb-4">{check}</li>)}</ul>
          <p className="text-sm text-gray-600 mt-6">We work with businesses serving {page.area}. Your plan starts with the services, customers and locations you actually want to grow.</p>
        </aside>
      </div>
    </section>
    {page.reviews && page.reviews.length > 0 && <section className="px-6 py-16 bg-white border-b border-gray-200" aria-labelledby="reviews-heading"><div className="max-w-6xl mx-auto">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-8">
        <div><p className="text-sm font-semibold uppercase tracking-widest text-[#4a6370]">What clients say</p><h2 id="reviews-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">{page.reviews.length > 1 ? `What ${page.area} businesses say` : `A ${page.area} business on working with us`}</h2></div>
        <a href={GOOGLE_BUSINESS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 rounded-xl border border-gray-200 px-5 py-3 hover:border-gray-400"><span className="text-3xl font-bold text-gray-900">{GOOGLE_RATING.rating}</span><span><Stars /><span className="block text-sm text-gray-600 mt-1">{GOOGLE_RATING.count} Google reviews</span></span></a>
      </div>
      <div className={`grid gap-6 ${page.reviews.length > 1 ? "md:grid-cols-2" : ""}`}>{page.reviews.map(review => <figure key={review.name} className="rounded-2xl bg-[#f4f7f8] border border-gray-200 p-8 md:p-10">
        <Stars />
        <blockquote className="mt-5 text-xl md:text-2xl leading-relaxed text-gray-900">&ldquo;{review.text}&rdquo;</blockquote>
        <figcaption className="mt-6 text-gray-700"><span className="font-semibold text-gray-900">{review.name}</span> · {review.context} · Google review</figcaption>
      </figure>)}</div>
      <p className="text-xs text-gray-500 mt-4">Quoted word for word from Seam Media&apos;s Google Business Profile. <a href={GOOGLE_BUSINESS_URL} target="_blank" rel="noopener noreferrer" className="underline">Read all reviews on Google</a></p>
    </div></section>}
    <section className="px-6 py-20 bg-white"><div className="max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">{page.sectionTitle}</h2>
      <p className="text-lg text-gray-700 max-w-3xl mb-10 leading-relaxed">{page.context}</p>
      <div className="grid md:grid-cols-2 gap-7">{page.sections.map(section => <div key={section.title} className="rounded-2xl bg-gray-50 border border-gray-200 p-8"><h3 className="text-xl font-bold text-gray-900 mb-4">{section.title}</h3><p className="text-gray-700 leading-relaxed">{section.copy}</p>{section.href && <Link href={section.href} className="inline-block mt-5 text-[#405e6b] font-semibold underline underline-offset-4">{section.linkLabel}</Link>}</div>)}</div>
    </div></section>
    {page.resource && <section className="px-6 py-20 bg-white border-t border-gray-200"><div className="max-w-6xl mx-auto"><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">{page.resourceTitle}</h2><p className="text-gray-700 leading-relaxed max-w-4xl mb-10">{page.resourceIntro}</p><div className="grid lg:grid-cols-3 gap-7">{page.resource.map(item => <div key={item.title} className="rounded-2xl border border-gray-200 p-8"><h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3><p className="text-gray-700 leading-relaxed mb-5">{item.copy}</p><ul className="list-disc pl-5 space-y-3 text-gray-700">{item.questions.map(q => <li key={q}>{q}</li>)}</ul></div>)}</div></div></section>}
    <section className="px-6 py-20 bg-[#f4f7f8]"><div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
      <div><h2 className="text-3xl font-bold text-gray-900 mb-6">A practical first 90 days</h2><ol className="space-y-5">{page.process.map((step, i) => <li key={step.title} className="text-gray-700"><h3 className="text-xl font-semibold text-gray-900 mb-2">{i + 1}. {step.title}</h3><p className="leading-relaxed">{step.copy}</p></li>)}</ol></div>
      <div className="rounded-2xl bg-white p-8 lg:p-10 border border-gray-200"><h2 className="text-3xl font-bold text-gray-900 mb-5">See the evidence behind the work</h2><p className="text-gray-700 leading-relaxed mb-5">{page.proof}</p><Link href={page.proofPath} className="font-semibold text-[#405e6b] underline underline-offset-4">Read the case study and reporting limits</Link><div className="border-t border-gray-200 mt-8 pt-8"><h3 className="text-xl font-bold text-gray-900 mb-3">What does it cost?</h3><p className="text-gray-700 leading-relaxed">{page.pricing}</p><p className="text-sm text-gray-600 mt-4">All package prices are plus GST and billed weekly. Advertising spend, larger website builds and extra work are scoped separately.</p><Link href="/marketing-packages#fit-check" className="inline-block mt-5 text-[#405e6b] font-semibold underline underline-offset-4">Find the right package</Link></div></div>
    </div></section>
    <section className="px-6 py-20 bg-white"><div className="max-w-4xl mx-auto"><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">{page.faqTitle}</h2><div className="space-y-3">{page.faqs.map(faq => <details key={faq.q} className="rounded-xl border border-gray-200 p-6"><summary className="font-semibold text-lg text-gray-900 cursor-pointer">{faq.q}</summary><p className="text-gray-700 leading-relaxed mt-4">{faq.a}</p></details>)}</div></div></section>
    <section className="px-6 py-16 bg-gray-50"><div className="max-w-6xl mx-auto"><h2 className="text-2xl font-bold text-gray-900 mb-6">{page.relatedTitle}</h2><div className="flex flex-wrap gap-4">{page.links.map(link => <Link key={link.href} href={link.href} className="bg-white border border-gray-200 rounded-xl px-5 py-4 text-[#405e6b] font-semibold hover:border-gray-500">{link.label}</Link>)}</div></div></section>
    <div id="enquire" className="scroll-mt-24"><ContactForm /></div>
  </>;
}

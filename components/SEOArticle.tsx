import Link from "next/link";
import { StructuredData } from "@/components/StructuredData";
import { defaultOgImage, siteUrl } from "@/lib/seo";

export type Guide = { title: string; path: string; description: string; published: string; modified: string; intro: string[]; sections: { title: string; paragraphs: string[]; checklist?: string[] }[]; table?: { title: string; headers: string[]; rows: string[][] }; sources: { title: string; url: string }[]; links: { title: string; path: string }[] };

export default function SEOArticle({ guide }: { guide: Guide }) {
  const url = siteUrl + guide.path;
  return <>
    <StructuredData data={{ "@context": "https://schema.org", "@type": "BlogPosting", headline: guide.title, description: guide.description, url, mainEntityOfPage: url, datePublished: guide.published, dateModified: guide.modified, image: siteUrl + defaultOgImage, author: { "@type": "Organization", name: "Seam Media", url: siteUrl }, publisher: { "@type": "Organization", "@id": `${siteUrl}/#organization`, name: "Seam Media", logo: { "@type": "ImageObject", url: `${siteUrl}/icon.png` } } }} />
    <article className="bg-white text-gray-900 px-6 py-20"><div className="max-w-4xl mx-auto">
      <Link href="/blog" className="text-[#405e6b] underline underline-offset-4">Marketing guides</Link>
      <h1 className="text-4xl md:text-5xl font-bold leading-tight mt-7 mb-5">{guide.title}</h1>
      <p className="text-sm text-gray-600 mb-8">By Seam Media · Updated <time dateTime={guide.modified}>{new Date(`${guide.modified}T12:00:00Z`).toLocaleDateString("en-AU", {day:"numeric",month:"long",year:"numeric",timeZone:"Australia/Melbourne"})}</time></p>
      {guide.intro.map(p => <p key={p} className="text-lg text-gray-700 leading-relaxed mb-6">{p}</p>)}
      <nav aria-label="Guide contents" className="rounded-2xl bg-[#f4f7f8] p-7 my-10"><h2 className="text-xl font-semibold mb-4">In this guide</h2><ol className="list-decimal pl-5 space-y-3 text-[#405e6b]">{guide.sections.map((s,i) => <li key={s.title}><a href={`#step-${i+1}`} className="underline underline-offset-4">{s.title}</a></li>)}</ol></nav>
      {guide.table && <section className="my-12"><h2 className="text-2xl font-bold mb-5">{guide.table.title}</h2><div className="overflow-x-auto"><table className="w-full border-collapse text-left text-sm"><thead><tr>{guide.table.headers.map(h => <th key={h} scope="col" className="bg-[#f4f7f8] border border-gray-200 p-4 font-semibold">{h}</th>)}</tr></thead><tbody>{guide.table.rows.map((r,i) => <tr key={i}>{r.map((cell,j) => j===0 ? <th key={j} scope="row" className="border border-gray-200 p-4 align-top font-semibold">{cell}</th> : <td key={j} className="border border-gray-200 p-4 align-top text-gray-700">{cell}</td>)}</tr>)}</tbody></table></div></section>}
      {guide.sections.map((s,i) => <section id={`step-${i+1}`} key={s.title} className="my-12 scroll-mt-24"><h2 className="text-2xl md:text-3xl font-bold mb-5">{s.title}</h2>{s.paragraphs.map(p => <p key={p} className="text-gray-700 leading-relaxed mb-5">{p}</p>)}{s.checklist && <ul className="list-disc pl-6 space-y-3 text-gray-700">{s.checklist.map(p => <li key={p}>{p}</li>)}</ul>}</section>)}
      <section className="border-t border-gray-200 pt-8 mt-12"><h2 className="text-2xl font-bold mb-5">Sources and further reading</h2><ul className="space-y-3">{guide.sources.map(s => <li key={s.url}><a href={s.url} className="text-[#405e6b] underline underline-offset-4">{s.title}</a></li>)}</ul></section>
      <section className="bg-[#f4f7f8] rounded-2xl p-8 mt-12"><h2 className="text-2xl font-bold mb-4">Choose your next step</h2><p className="text-gray-700 leading-relaxed mb-6">Tell us which services and locations you want to grow. We can review the starting point and agree a practical scope for your website and local search.</p><div className="flex flex-wrap gap-5">{guide.links.map(l => <Link key={l.path} href={l.path} className="text-[#405e6b] underline font-semibold">{l.title}</Link>)}<Link href="/marketing-packages#fit-check" className="bg-gray-900 text-white rounded-full px-6 py-3 font-semibold">Discuss your priorities</Link></div></section>
    </div></article>
  </>;
}

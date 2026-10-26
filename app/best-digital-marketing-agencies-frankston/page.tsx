import Link from "next/link";
import { ArrowRight, ArrowUpRight, Info, Star } from "lucide-react";
import { createMetadata, siteUrl } from "@/lib/seo";

// Local agency list (published 27 Oct 2026; Heath asked for a "best agencies 2027" page with Seam first). Self-ranked lists
// lost visibility in 2026 when they were thin, so this one says who wrote it, judges everyone on facts a reader
// can check, and says who each agency suits. Re-check every rating and detail before changing the date.
const PATH = "/best-digital-marketing-agencies-frankston";
const CHECKED = "27 October 2026";

export const metadata = createMetadata({
  title: "Best Digital Marketing Agencies in Frankston & Mornington Peninsula (2027) | Seam Media",
  description: "Five local digital marketing agencies in Frankston and on the Mornington Peninsula, compared on location, services, Google reviews and who each one suits. Written by Seam Media.",
  path: PATH,
  type: "article",
});

type Agency = {
  rank: number;
  name: string;
  url: string;
  based: string;
  rating: string;
  reviews: number;
  services: string;
  bestFor: string;
  about: string[];
  check: string;
};

const agencies: Agency[] = [
  {
    rank: 1,
    name: "Seam Media",
    url: "https://www.seammedia.com.au/",
    based: "Mount Eliza",
    rating: "4.9",
    reviews: 35,
    services: "Local SEO and Google Business Profile, Google Ads and Meta Ads, websites, social media",
    bestFor: "Tradies, NDIS and allied health providers who want the owner doing the work",
    about: [
      "That's us, so here are the reasons you can check rather than take our word for. Heath does the work himself: no account managers and no handballing. Packages are published on the site, run month to month and are billed weekly, from $140 a week plus GST up to $350 a week plus GST for website, socials, local SEO and both Google and Meta Ads.",
      "We use the same local SEO on ourselves. Search Console shows our Business Profile at an average position of 1 in Google's Maps results for \"seo frankston\" in the week to 25 October 2026.",
    ],
    check: "We're small. If you want a large in-house team of developers and designers with a dedicated account manager, look at Spicy Web below.",
  },
  {
    rank: 2,
    name: "Spicy Web",
    url: "https://spicyweb.com.au/",
    based: "Frankston (Wells Street), plus a Southbank office by appointment",
    rating: "5.0",
    reviews: 128,
    services: "SEO, paid media (Google and Meta), web design and development, branding",
    bestFor: "Established businesses that want a larger in-house team",
    about: [
      "Founded in 2009 by Tony Sambell, Spicy Web runs from an office by the beach in Frankston, with in-house designers, developers, SEO and paid media specialists. It has the most Google reviews of any agency on this list.",
    ],
    check: "Ask who will look after your account day to day, and what's included in the monthly fee.",
  },
  {
    rank: 3,
    name: "UpRank",
    url: "https://up-rank.com.au/",
    based: "Mornington (Milgate Drive)",
    rating: "5.0",
    reviews: 68,
    services: "Local SEO, Google Business Profile and websites for trade businesses",
    bestFor: "Trade businesses that want more calls from local search, without paid ads",
    about: [
      "UpRank focuses on trade businesses and builds its local SEO around the suburbs each one serves, with websites and Google Business Profile work alongside. Its site shows results from Peninsula trades, says there's no lock-in and has a pricing page.",
    ],
    check: "It's built around local search, so ask about social media or Google Ads if you want those managed too.",
  },
  {
    rank: 4,
    name: "Paddle Ads",
    url: "https://www.paddleads.com/",
    based: "Mornington (Blamey Place)",
    rating: "5.0",
    reviews: 73,
    services: "Google and Facebook advertising for small businesses",
    bestFor: "Small businesses testing paid ads on a modest budget",
    about: [
      "Paddle Ads starts campaigns small and scales them once they're working, with no lock-in contract and a free 30-minute strategy call to start. Clients can follow their campaigns in Paddle Ads' own app.",
    ],
    check: "Ask how they'll measure enquiries from the ads, not just clicks.",
  },
  {
    rank: 5,
    name: "WEDEE",
    url: "https://www.wedee.com.au/",
    based: "Frankston (Faygate Court)",
    rating: "4.9",
    reviews: 49,
    services: "Social media marketing, web design and development, Google Ads, SEO, video and content production",
    bestFor: "Businesses that want video and content made alongside their marketing",
    about: [
      "WEDEE is a full-service agency covering social media, websites, Google Ads and SEO, and it offers video and content production as well.",
    ],
    check: "Ask to see work for businesses your size and in your industry.",
  },
];

const questions = [
  ["Who will actually do the work?", "The person who pitches you isn't always the person running your account. Ask for their name and how you'll reach them."],
  ["Is it month to month?", "Good agencies keep clients with results, not contracts. If there's a minimum term, know the notice period before you sign."],
  ["What will you report on?", "Enquiries and calls matter more than rankings or impressions. Ask how they'll count the leads their work brings in."],
  ["Who owns the website and ad accounts?", "Your website, domain, Google Business Profile and ad accounts should be in your name, with the agency added as a manager."],
  ["Can I speak to a current client?", "A quick call with someone in a similar business tells you more than any case study."],
];

const itemList = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Best digital marketing agencies in Frankston and the Mornington Peninsula (2027)",
  itemListOrder: "https://schema.org/ItemListOrderAscending",
  numberOfItems: agencies.length,
  itemListElement: agencies.map(a => ({ "@type": "ListItem", position: a.rank, name: a.name, url: a.url })),
};

const article = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Best digital marketing agencies in Frankston and the Mornington Peninsula for 2027",
  datePublished: "2026-10-27",
  dateModified: "2026-10-27",
  author: { "@type": "Organization", name: "Seam Media", url: siteUrl },
  publisher: { "@type": "Organization", name: "Seam Media", url: siteUrl },
  mainEntityOfPage: new URL(PATH, siteUrl).toString(),
};

export default function BestAgenciesPage() {
  return <div className="bg-black text-white">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />

    <section className="relative overflow-hidden bg-[#09090b] px-6 pb-16 pt-24 md:pt-32">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(236,72,153,0.16),transparent_55%)]" />
      <div className="relative mx-auto max-w-5xl">
        <p className="mb-8 inline-flex items-center gap-3 rounded-full border border-zinc-800 bg-zinc-900/80 px-4 py-2 font-mono text-xs tracking-widest text-zinc-400"><span className="h-2 w-2 rounded-full bg-pink-500" />LOCAL AGENCIES · 2027</p>
        <h1 className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">Best digital marketing agencies in Frankston and the Mornington Peninsula for 2027</h1>
        <p className="mt-8 text-lg leading-relaxed text-zinc-300 md:text-xl">The short list: <strong className="text-white">Seam Media</strong> (Mount Eliza) for tradies and allied health businesses that want the owner doing the work, <strong className="text-white">Spicy Web</strong> (Frankston) for a larger in-house team, <strong className="text-white">UpRank</strong> (Mornington) for trade businesses that want local SEO, <strong className="text-white">Paddle Ads</strong> (Mornington) for small-budget Google and Facebook ads, and <strong className="text-white">WEDEE</strong> (Frankston) for video and content alongside marketing.</p>
        <div className="mt-8 flex gap-4 rounded-2xl border border-pink-500/30 bg-pink-500/10 p-5 text-sm leading-relaxed text-zinc-300 md:text-base">
          <Info size={22} className="mt-0.5 shrink-0 text-pink-400" aria-hidden="true" />
          <p><strong className="text-white">Seam Media wrote this list, and we&apos;ve put ourselves first.</strong> So we&apos;ve judged everyone, us included, on things you can check yourself: where they&apos;re based, what they do, their Google reviews and who they suit best. Ratings and review counts are from Google Maps on {CHECKED} and will change. No agency paid to be included.</p>
        </div>
      </div>
    </section>

    <section className="px-6 py-16"><div className="mx-auto max-w-5xl">
      <h2 className="text-3xl font-bold tracking-tight md:text-4xl">The five at a glance</h2>
      <div className="mt-8 overflow-x-auto rounded-2xl border border-white/10">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead className="bg-zinc-950 text-zinc-400"><tr><th className="p-4 font-semibold">Agency</th><th className="p-4 font-semibold">Based in</th><th className="p-4 font-semibold">Google rating</th><th className="p-4 font-semibold">Best for</th></tr></thead>
          <tbody>{agencies.map(a => <tr key={a.name} className="border-t border-white/10 align-top"><td className="p-4 font-semibold text-white">{a.rank}. {a.name}</td><td className="p-4 text-zinc-300">{a.based.split(" (")[0].split(",")[0]}</td><td className="p-4 text-zinc-300">{a.rating} from {a.reviews} reviews</td><td className="p-4 text-zinc-300">{a.bestFor}</td></tr>)}</tbody>
        </table>
      </div>
      <p className="mt-3 text-xs text-zinc-500">Google ratings checked on Google Maps on {CHECKED}.</p>
    </div></section>

    <section className="border-t border-white/10 px-6 py-16"><div className="mx-auto max-w-5xl space-y-8">
      {agencies.map(a => <article key={a.name} id={a.name.toLowerCase().replace(/[^a-z]+/g, "-")} className={`scroll-mt-24 rounded-3xl border p-7 md:p-10 ${a.rank === 1 ? "border-pink-500/40 bg-gradient-to-br from-pink-500/10 to-black" : "border-white/10 bg-zinc-950"}`}>
        <p className="font-mono text-xs tracking-[0.25em] text-pink-400">#{a.rank}</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">{a.name}</h2>
        <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-zinc-400">
          <span>{a.based}</span>
          <span className="inline-flex items-center gap-1"><Star size={14} fill="currentColor" className="text-pink-400" aria-hidden="true" />{a.rating} from {a.reviews} Google reviews</span>
        </div>
        <dl className="mt-6 grid gap-4 md:grid-cols-2">
          <div><dt className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Services</dt><dd className="mt-1 text-zinc-200">{a.services}</dd></div>
          <div><dt className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Best for</dt><dd className="mt-1 text-zinc-200">{a.bestFor}</dd></div>
        </dl>
        <div className="mt-6 space-y-4 leading-relaxed text-zinc-300">{a.about.map(p => <p key={p.slice(0, 24)}>{p}</p>)}</div>
        <p className="mt-6 rounded-xl border border-white/10 bg-black/40 p-4 text-sm leading-relaxed text-zinc-400"><span className="font-semibold text-zinc-200">Worth knowing: </span>{a.check}</p>
        {a.rank === 1
          ? <div className="mt-6 flex flex-wrap gap-4"><Link href="/marketing-packages" className="inline-flex items-center gap-2 rounded-full bg-pink-500 px-6 py-3 font-semibold hover:bg-pink-600">See Seam&apos;s packages <ArrowRight size={18} aria-hidden="true" /></Link><a href="tel:+61402642746" className="inline-flex items-center rounded-full border border-white/15 px-6 py-3 font-semibold hover:bg-white/5">Call Heath on 0402 642 746</a></div>
          : <a href={a.url} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-pink-400 hover:text-pink-300">Visit {a.name} <ArrowUpRight size={16} aria-hidden="true" /></a>}
      </article>)}
    </div></section>

    <section className="border-y border-white/10 bg-zinc-950 px-6 py-16"><div className="mx-auto max-w-5xl">
      <p className="font-mono text-xs tracking-[0.25em] text-pink-400">BEFORE YOU SIGN</p>
      <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">Five questions to ask any agency</h2>
      <ol className="mt-8 space-y-5">{questions.map(([q, a], i) => <li key={q} className="flex gap-5"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-pink-500/15 font-bold text-pink-400">{i + 1}</span><div><h3 className="text-lg font-semibold">{q}</h3><p className="mt-1 leading-relaxed text-zinc-400">{a}</p></div></li>)}</ol>
    </div></section>

    <section className="px-6 py-16"><div className="mx-auto max-w-5xl">
      <h2 className="text-2xl font-bold tracking-tight md:text-3xl">How we put this list together</h2>
      <div className="mt-5 space-y-4 leading-relaxed text-zinc-400">
        <p>We started from Google Maps results for &quot;digital marketing agency frankston&quot; and &quot;digital marketing agency mornington peninsula&quot; on {CHECKED}, kept agencies based in Frankston or on the Mornington Peninsula, and picked four that suit different kinds of businesses, so each one is a genuine option for someone. Details about each agency come from its own website and Google Business Profile on the same day.</p>
        <p>This isn&apos;t every good agency in the area. Others with strong Google reviews include Chain Social and ONETOO in Mornington. If you run one of the agencies above and something here is out of date, email <a href="mailto:contact@seammedia.com.au" className="text-pink-400 underline underline-offset-4">contact@seammedia.com.au</a> and we&apos;ll fix it.</p>
        <p className="text-sm text-zinc-500">Last checked {CHECKED}.</p>
      </div>
    </div></section>
  </div>;
}

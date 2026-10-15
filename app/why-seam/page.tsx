import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, Laptop, CalendarDays, GraduationCap, Star } from "lucide-react";
import { createMetadata } from "@/lib/seo";
import CostComparison from "./CostComparison";

export const metadata = createMetadata({
  title: "Why Seam? Marketing Support vs Hiring In-house | Seam Media",
  description: "Compare a $70,000–$80,000 salary plus super with Seam Media marketing packages from $140 a week + GST. Experienced support without the cost of a full-time hire.",
  path: "/why-seam",
  image: "/why-seam/opengraph-image",
});

const overheads = [
  { icon: Laptop, title: "A desk, a laptop, a toolkit.", copy: "A new hire needs equipment and design, scheduling and reporting software. Seam brings its own." },
  { icon: GraduationCap, title: "Someone still needs to train them.", copy: "A graduate brings fresh ideas, but often needs guidance with live campaigns, websites and reporting. Seam brings experience from day one." },
  { icon: CalendarDays, title: "Paid leave needs a plan.", copy: "Full-time employees generally get four weeks of annual leave and 10 days of personal/carer’s leave a year. Your marketing still needs to keep moving." },
  { icon: BriefcaseBusiness, title: "Hiring is a job of its own.", copy: "Recruitment, onboarding, payroll and supervision all take time. Seam gives you an agreed scope and one point of contact." },
];

const reviews = [
  { quote: "Highly recommend Heath... he’s a man of his words, and he’ll do exactly what he says. Easy to communicate, very professional, very knowledgeable and I can tell he actually cares about helping your business grow.", author: "Calvin Yung" },
  { quote: "Heath is nothing but amazing to work with! His communication was clear and he kept me well updated throughout the whole process of building our website. It turned out even better than I imagined.", author: "Lacey Thorn" },
];

const results = [
  { stat: "5.38k", label: "clicks from Google search", client: "The South East Fencer", href: "/case-studies/the-south-east-fencer" },
  { stat: "A$76k", label: "in Shopify sales over 12 months", client: "Florist client", href: "/case-studies/a-florist" },
];

const logos = [
  { name: "Fujifilm", src: "/images/fujifilm_white.png", onBlack: true },
  { name: "Daniel Wellington", src: "/images/daniel-wellington-logo_black.png", onBlack: false },
  { name: "PT Leo Estate", src: "/images/pt_leo_estate_black-1.png", onBlack: false },
  { name: "Taubmans", src: "/images/Taubmans_Master_GREY_for-web.png", onBlack: false },
  { name: "Vitasoy", src: "/images/Vitasoy-logoblack-1024x311.png", onBlack: false },
  { name: "Youfoodz", src: "/images/youfoodz_white.png", onBlack: true },
];

export default function WhySeamPage() {
  return <div className="bg-black text-white">
    <section className="relative overflow-hidden bg-[#09090b] px-6 pb-20 pt-24 md:pb-24 md:pt-32">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(236,72,153,0.18),transparent_55%)]" />
      <div className="relative mx-auto max-w-7xl">
        <p className="mb-8 inline-flex items-center gap-3 rounded-full border border-zinc-800 bg-zinc-900/80 px-4 py-2 font-mono text-xs tracking-widest text-zinc-400"><span className="h-2 w-2 rounded-full bg-pink-500" />WHY SEAM?</p>
        <h1 className="max-w-6xl text-5xl font-bold leading-[0.98] tracking-tight sm:text-6xl md:text-8xl lg:text-9xl">Your marketing.<br /><span className="bg-gradient-to-r from-zinc-400 via-white to-pink-400 bg-clip-text text-transparent">Without the <span className="whitespace-nowrap">full-time</span> salary.</span></h1>
        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-zinc-400 md:text-xl">You need your marketing moving. You might not need another employee. Get experienced support for your website, socials and more, from $140 a week plus GST.</p>
        <div className="mt-10 flex flex-wrap gap-4"><a href="#compare" className="inline-flex items-center gap-2 rounded-full bg-pink-500 px-7 py-3.5 font-semibold transition hover:bg-pink-600">See the cost difference <ArrowRight size={18} aria-hidden="true" /></a><Link href="/marketing-packages#fit-check" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 font-semibold transition hover:bg-white/10">Find your fit</Link></div>
        <div className="mt-16 grid gap-5 border-t border-white/10 pt-7 sm:grid-cols-3">{[["From $140 / week", "Plus GST. Billed weekly."], ["Experience from day one", "Support across your agreed services."], ["No new employee to hire", "No recruitment, payroll or super to manage."]].map(([title, copy]) => <div key={title}><p className="font-semibold">{title}</p><p className="mt-2 text-sm text-zinc-400">{copy}</p></div>)}</div>
      </div>
    </section>

    <CostComparison>
      <section className="px-6 py-20 md:py-24"><div className="mx-auto max-w-7xl"><p className="font-mono text-xs tracking-[0.25em] text-pink-400">BEYOND THE PAYSLIP</p><h2 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">And that’s before<br />the hidden costs.</h2><p className="mt-5 max-w-3xl text-lg leading-relaxed text-zinc-400">The numbers above only count salary and super. A new hire also comes with these.</p><div className="mt-12 grid gap-5 md:grid-cols-2">{overheads.map(({ icon: Icon, title, copy }) => <article key={title} className="rounded-2xl border border-white/10 bg-zinc-950 p-7"><Icon size={26} className="text-pink-400" aria-hidden="true" /><h3 className="mt-5 text-2xl font-bold">{title}</h3><p className="mt-3 leading-relaxed text-zinc-400">{copy}</p></article>)}</div></div></section>

      <section className="border-y border-white/10 bg-zinc-950 px-6 py-20 md:py-24"><div className="mx-auto max-w-7xl">
        <p className="font-mono text-xs tracking-[0.25em] text-pink-400">LESS COST, NOT LESS QUALITY</p><h2 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">Real results for<br />real local businesses.</h2>
        <div className="mt-12 grid gap-5 lg:grid-cols-[1fr_1fr_0.9fr]">
          {reviews.map(r => <figure key={r.author} className="flex flex-col rounded-2xl border border-white/10 bg-black p-7"><div className="flex gap-1 text-pink-400" aria-label="5 star Google review">{Array.from({ length: 5 }, (_, i) => <Star key={i} size={16} fill="currentColor" aria-hidden="true" />)}</div><blockquote className="mt-5 flex-grow leading-relaxed text-zinc-200">“{r.quote}”</blockquote><figcaption className="mt-6 text-sm"><span className="font-semibold">{r.author}</span><span className="text-zinc-500"> · Google review</span></figcaption></figure>)}
          <div className="grid gap-5">{results.map(r => <Link key={r.client} href={r.href} className="group rounded-2xl border border-pink-400/30 bg-gradient-to-br from-pink-500/10 to-black p-7 transition hover:border-pink-400/60"><p className="text-5xl font-bold tracking-tight">{r.stat}</p><p className="mt-2 text-zinc-300">{r.label}</p><p className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-pink-400">{r.client} case study <ArrowRight size={14} className="transition group-hover:translate-x-1" aria-hidden="true" /></p></Link>)}</div>
        </div>
        <div className="mt-16 grid gap-8 rounded-3xl border border-white/10 bg-black p-7 md:grid-cols-[auto_1fr] md:items-center md:p-10"><div aria-hidden="true" className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-pink-400 to-pink-600 text-3xl font-bold">H</div><div><h3 className="text-2xl font-bold">You’ll work with Heath directly.</h3><p className="mt-2 max-w-2xl leading-relaxed text-zinc-400">No account managers or handballing. The person planning your marketing is the person doing it, and you’ll always know who to call.</p></div></div>
        <div className="mt-14"><p className="text-center text-sm text-zinc-500">Some of the brands we’ve worked with</p><ul className="mt-8 grid grid-cols-2 items-center gap-x-8 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">{logos.map(l => <li key={l.name} className="flex h-12 items-center justify-center"><Image src={l.src} alt={l.name} width={120} height={48} className={`max-h-12 w-auto object-contain opacity-60 ${l.onBlack ? "grayscale mix-blend-screen" : "brightness-0 invert"}`} /></li>)}</ul></div>
      </div></section>
    </CostComparison>

    <section className="border-y border-white/10 bg-zinc-950 px-6 py-20"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2"><div><p className="font-mono text-xs tracking-[0.25em] text-pink-400">THE RIGHT FIT MATTERS</p><h2 className="mt-4 text-4xl font-bold md:text-5xl">Need marketing support,<br />or a seat filled?</h2></div><div className="space-y-5 text-lg leading-relaxed text-zinc-400"><p>If you need someone on site all day, managing internal projects and responding to every request, a full-time hire can make sense.</p><p className="text-zinc-200">If you need your marketing done well and done consistently, you don’t need to pay for 38 hours a week. You’re paying for an agreed set of marketing work, done by someone who’s done it before.</p><Link href="/case-studies" className="inline-flex items-center gap-2 text-base font-semibold text-pink-400 hover:text-pink-300">See our work in practice <ArrowRight size={18} aria-hidden="true" /></Link></div></div></section>

    <section className="px-6 py-20 md:py-24"><div className="mx-auto max-w-7xl"><div className="rounded-3xl border border-pink-500/30 bg-gradient-to-br from-pink-500/15 via-zinc-950 to-black p-8 md:p-14"><p className="font-mono text-xs tracking-[0.25em] text-pink-400">YOUR NEXT STEP</p><h2 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">Put more into your business.<br />Spend less on getting started.</h2><p className="mt-5 max-w-2xl text-lg leading-relaxed text-zinc-400">Tell us where your marketing needs help. We’ll work out whether Foundation, Growth or Complete Growth is the right fit.</p><div className="mt-8 flex flex-wrap gap-4"><Link href="/marketing-packages#fit-check" className="inline-flex items-center gap-2 rounded-full bg-pink-500 px-7 py-3.5 font-semibold hover:bg-pink-600">Find my marketing package <ArrowRight size={18} aria-hidden="true" /></Link><a href="tel:+61402642746" className="inline-flex items-center rounded-full border border-white/15 px-7 py-3.5 font-semibold hover:bg-white/5">Call 0402 642 746</a></div></div>
      <details id="method" className="mt-10 scroll-mt-24 rounded-2xl border border-white/10 p-6 text-sm text-zinc-400"><summary className="cursor-pointer font-semibold text-zinc-300">How we calculated the comparison</summary><div className="mt-4 space-y-3 leading-relaxed"><p>The $70,000, $75,000 and $80,000 salaries are illustrative hiring budgets, excluding super. They are not a claim about the market average, a minimum salary or an award rate. The model applies 12% super to the full example salary.</p><p>All figures are in AUD and rounded. Weekly employee costs are salary plus super divided by 52. Package annual equivalents are the weekly service fee multiplied by 52; average monthly equivalents divide that total by 12. These are comparison figures, not monthly or annual billing offers. Packages are billed weekly. Fees exclude GST; GST is payable on Seam’s fees. Employee salaries do not attract GST.</p><p>Salary already covers paid leave, so no additional leave amount is included. Equipment, software, recruitment, training, replacement cover, workers compensation insurance, any applicable payroll tax and leave loading are excluded because they vary by business. Ad spend, third-party platform fees, filming and larger projects are additional to Seam’s fees.</p><p>This compares costs, not equal hours, duties or outcomes. Seam packages are an agreed marketing service with defined deliverables and do not include a dedicated employee, full-time hours or unlimited requests. Your proposal sets the scope, term and notice period.</p><p>Results shown are from client-supplied reports; see each case study for the reporting period and context.</p><p>Employment references: <a className="text-pink-400 underline underline-offset-4" href="https://www.ato.gov.au/tax-rates-and-codes/key-superannuation-rates-and-thresholds/super-guarantee">ATO super guarantee rates</a>, <a className="text-pink-400 underline underline-offset-4" href="https://www.fairwork.gov.au/leave/annual-leave">Fair Work annual leave</a> and <a className="text-pink-400 underline underline-offset-4" href="https://www.fairwork.gov.au/leave/sick-and-carers-leave">Fair Work sick and carer’s leave</a>. References checked 1 October 2026.</p></div></details>
    </div></section>
  </div>;
}

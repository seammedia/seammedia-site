"use client";

import Link from "next/link";
import GoogleRating from "@/components/GoogleRating";
import { FormEvent, useState } from "react";
import { ArrowRight, ArrowUpRight, Check, CheckCircle2, MapPinned, Phone, PlayCircle, Quote, Search, ShieldCheck, Star } from "lucide-react";
import { HEARD_ABOUT_OPTIONS, trackLead } from "@/lib/ads";
import type { NicheConfig } from "@/lib/niche-pages";
import { GOOGLE_BUSINESS_URL } from "@/lib/reviews";
import { GOOGLE_RATING } from "@/components/GoogleRating";

// Shared Google Ads landing page. Content comes from lib/niche-pages.ts.
// Prices mirror /marketing-packages; proof mirrors lib/case-studies.ts (The South East Fencer by default,
// or config.caseStudy). config.offer swaps the free Google Maps check-up for another offer.

const proof: [string, string][] = [
  ["100+", "websites built"],
  ["10+ years", "of experience"],
  ["$1M+", "ad spend managed"],
  ["Weekly", "billing, no big upfront cost"],
];

const plans = [
  {
    name: "Local Marketing Foundation",
    weekly: "$140",
    blurb: "A simple website and active socials.",
    features: ["Website setup and ongoing care", "Branded social posts and scheduling"],
  },
  {
    name: "Growth",
    weekly: "$235",
    blurb: "Get found locally and add one ad platform.",
    features: [
      "Everything in Foundation",
      "Google Business Profile posts and management",
      "Local SEO and weekly map-pack scans",
      "Review requests and reply support",
      "Google Ads OR Meta Ads management",
      "Monthly reporting",
    ],
    featured: true,
  },
  {
    name: "Complete Growth",
    weekly: "$350",
    blurb: "Website, socials, SEO and both ad platforms.",
    features: ["Everything in Growth", "Google Ads AND Meta Ads", "Monthly marketing review"],
  },
];

export default function NicheLanding({ config }: { config: NicheConfig }) {
  const offer = config.offer;
  const cta = offer?.cta ?? "Get my free check-up";
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    const formData = new FormData(event.currentTarget);
    formData.set("form", `${config.slug} - ${offer ? offer.name.toLowerCase() : "free Google Maps check-up"}`);
    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      if (response.ok) await trackLead(config.slug);
      setStatus(response.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  const field = "w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-zinc-500 outline-none focus:border-pink-400";

  return (
    <div className="bg-black text-white">
      {/* Hero + form */}
      <section className="relative overflow-hidden bg-[#09090b] px-6 pb-20 pt-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(236,72,153,0.16),transparent_40%)]" />
        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div>
            {/* The eyebrow is part of the H1 so the heading says what people searched ("Marketing for tradies"). */}
            <h1>
              <span className="mb-7 flex w-fit items-center gap-3 rounded-full border border-zinc-800 bg-zinc-900/80 px-4 py-1.5 font-mono text-xs font-normal tracking-widest text-zinc-400">
                <span className="h-2 w-2 rounded-full bg-pink-500" aria-hidden="true" /> {config.eyebrow}
              </span>
              <span className="block text-4xl font-bold leading-[0.95] tracking-tight sm:text-5xl md:text-7xl">
                {config.headline}
                <br />
                <span className="bg-gradient-to-r from-zinc-300 via-white to-pink-400 bg-clip-text text-transparent">{config.headlineAccent}</span>
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400 md:text-xl">{config.intro}</p>
            <ul className="mt-6 space-y-3">
              {(config.heroPoints ?? ["Google Maps profile and reviews", "A fast website with a page for every suburb you work in", "Google Ads when you want more work, faster"]).map((item) => (
                <li key={item} className="flex gap-3 text-zinc-300"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-pink-400" />{item}</li>
              ))}
            </ul>
            {config.guarantee && (
              <a href="#guarantee" className="mt-7 flex max-w-2xl gap-4 rounded-2xl border border-pink-500/40 bg-pink-500/10 p-5 transition hover:border-pink-400">
                <ShieldCheck className="mt-0.5 h-7 w-7 shrink-0 text-pink-400" />
                <span>
                  <span className="block text-lg font-semibold leading-snug">{config.guarantee.hero.title}</span>
                  <span className="mt-1 block text-sm leading-relaxed text-zinc-300">{config.guarantee.hero.copy} <span className="whitespace-nowrap text-pink-400 underline underline-offset-2">See the terms</span></span>
                </span>
              </a>
            )}
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a href="#check-up" className="inline-flex items-center gap-2 rounded-full bg-pink-500 px-6 py-3 font-semibold transition hover:bg-pink-600">{cta} <ArrowRight size={18} /></a>
              <a href="tel:+61402642746" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold transition hover:bg-white/10"><Phone size={18} /> 0402 642 746</a>
              <span className="w-full text-sm text-zinc-500">Packages from $140 a week + GST · billed weekly</span>
            </div>
            <GoogleRating className="mt-8" />
            {config.reviews?.[0] && (
              <a href="#reviews" className="mt-5 block max-w-2xl rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-white/25">
                <Stars />
                <p className="mt-3 line-clamp-3 leading-relaxed text-zinc-200">&ldquo;{config.reviews[0].text}&rdquo;</p>
                <p className="mt-3 text-sm text-zinc-500"><span className="font-semibold text-zinc-300">{config.reviews[0].name}</span> · {config.reviews[0].context} · <span className="text-pink-400 underline underline-offset-2">More reviews</span></p>
              </a>
            )}
          </div>

          <div id="check-up" className="scroll-mt-24 rounded-3xl border border-pink-500/40 bg-gradient-to-b from-pink-500/15 to-zinc-950 p-7 shadow-2xl shadow-pink-500/10">
            {status === "success" ? (
              <div className="py-10 text-center">
                <CheckCircle2 className="mx-auto h-12 w-12 text-pink-400" />
                <h2 className="mt-5 text-2xl font-bold">Thanks, we&apos;re on it.</h2>
                <p className="mt-3 text-zinc-400">{offer?.success ?? "We'll run your Google Maps check-up and send your video within one business day."}</p>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-4">
                <input type="text" name="fax_number" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
                <div className="flex items-center gap-3"><PlayCircle className="h-7 w-7 text-pink-400" /><h2 className="text-2xl font-bold">{offer?.name ?? "Free Google Maps check-up"}</h2></div>
                <p className="text-sm leading-relaxed text-zinc-400">{offer?.formIntro ?? "A short video showing where your business shows up on Google Maps across your area, and what's holding it back. Free, no obligation."}</p>
                {/* Short form (17 Oct 2026): only a name and mobile are required; the rest is optional or tucked away. */}
                <input name="name" required autoComplete="name" placeholder="Your name" className={field} />
                <input name="phone" type="tel" required autoComplete="tel" placeholder="Mobile" className={field} />
                <input name="email" type="email" autoComplete="email" placeholder="Email (optional)" className={field} />
                <input name="business" autoComplete="organization" placeholder="Business name (optional)" className={field} />
                <select name="heardAbout" defaultValue="" aria-label="How did you hear about us?" className={field}>
                  <option value="">How did you hear about us? (optional)</option>
                  {HEARD_ABOUT_OPTIONS.map((o) => <option key={o}>{o}</option>)}
                </select>
                {offer?.messagePlaceholder && <textarea name="message" rows={2} placeholder={offer.messagePlaceholder} className={field} />}
                <details className="group">
                  <summary className="cursor-pointer list-none text-sm text-zinc-400 hover:text-zinc-200"><span className="text-pink-400 transition group-open:rotate-45 inline-block">+</span> Add more details (optional)</summary>
                  <div className="mt-4 space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      <select name="trade" defaultValue="" className={field}>
                        <option value="">{config.businessLabel} (optional)</option>
                        {config.businessOptions.map((o) => <option key={o}>{o}</option>)}
                      </select>
                      <input name="area" placeholder="Main suburb (optional)" className={field} />
                    </div>
                    <input name="website" placeholder="Website (optional)" className={field} />
                    {config.budgetOptions && (
                      <select name="weeklyMarketingInvestment" defaultValue="" className={field}>
                        <option value="">Monthly marketing budget, incl. ads (optional)</option>
                        {config.budgetOptions.map((o) => <option key={o}>{o}</option>)}
                      </select>
                    )}
                  </div>
                </details>
                <button type="submit" disabled={status === "submitting"} className="flex w-full items-center justify-center gap-2 rounded-full bg-pink-500 px-6 py-4 font-semibold transition hover:bg-pink-600 disabled:opacity-60">
                  {status === "submitting" ? "Sending..." : <>{cta} <ArrowRight size={18} /></>}
                </button>
                <p className="text-center text-xs text-zinc-500">Free, no obligation. Sent within one business day.</p>
                {status === "error" && <p className="text-sm text-red-400">Something went wrong. Please call 0402 642 746 instead.</p>}
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-zinc-950 px-6 py-9">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 md:grid-cols-4">
          {(config.proofStats ?? proof).map(([n, l]) => (
            <div key={l}><div className="text-3xl font-bold">{n}</div><div className="mt-1 text-xs uppercase tracking-wider text-zinc-500">{l}</div></div>
          ))}
        </div>
      </section>

      {/* Problems */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-xs tracking-[0.25em] text-pink-400">WHY THE PHONE GOES QUIET</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-bold md:text-5xl">{config.problemsHeading ?? "The jobs are out there. Someone else is getting them."}</h2>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {config.problems.map((p, i) => {
              const Icon = [MapPinned, Search, Star][i % 3];
              return (
                <article key={p.title} className="rounded-3xl border border-white/10 bg-zinc-950 p-7">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-500/10 text-pink-400"><Icon className="h-6 w-6" /></div>
                  <h3 className="mt-6 text-2xl font-semibold">{p.title}</h3>
                  <p className="mt-3 leading-relaxed text-zinc-400">{p.copy}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* What we'd set up for this trade (unique per trade page) */}
      {config.tradeSection && (
        <section className="border-t border-white/10 px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <p className="font-mono text-xs tracking-[0.25em] text-pink-400">HOW WE&apos;D SET IT UP</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-bold md:text-5xl">{config.tradeSection.heading}</h2>
            <p className="mt-5 max-w-3xl text-lg text-zinc-400">{config.tradeSection.intro}</p>
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {config.tradeSection.items.map((item) => (
                <article key={item.title} className="rounded-3xl border border-white/10 bg-zinc-950 p-7">
                  <h3 className="text-2xl font-semibold">{item.title}</h3>
                  <p className="mt-3 leading-relaxed text-zinc-400">{item.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Check-up explainer */}
      <section className="border-y border-white/10 bg-zinc-950 px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="font-mono text-xs tracking-[0.25em] text-pink-400">{offer?.explainerKicker ?? "THE FREE CHECK-UP"}</p>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">{offer?.explainerHeading ?? "See exactly where you show up."}</h2>
            <p className="mt-5 text-lg text-zinc-400">{offer?.explainerIntro ?? "Most marketing pitches are guesswork. Ours starts with your real Google results, recorded as a short video you can watch in a minute."}</p>
            <ul className="mt-8 space-y-4">
              {config.checkupPoints.map((pt) => <li key={pt} className="flex gap-3 text-zinc-300"><Check className="mt-1 h-5 w-5 shrink-0 text-pink-400" />{pt}</li>)}
            </ul>
            <a href="#check-up" className="mt-10 inline-flex items-center gap-2 rounded-full bg-pink-500 px-7 py-3.5 font-semibold transition hover:bg-pink-600">{cta} <ArrowRight size={18} /></a>
          </div>
          {offer ? (
            <div className="rounded-3xl border border-white/10 bg-black p-7">
              <h3 className="text-xl font-semibold">{offer.explainerCardTitle}</h3>
              <ul className="mt-6 space-y-4">
                {offer.explainerCardItems.map((item) => <li key={item} className="flex gap-3 text-zinc-300"><Search className="mt-0.5 h-5 w-5 shrink-0 text-pink-400" />{item}</li>)}
              </ul>
            </div>
          ) : (
          <div className="rounded-3xl border border-white/10 bg-black p-6">
            <div className="grid grid-cols-5 gap-3" aria-hidden="true">
              {[1, 2, 3, 2, 6, 3, 1, 1, 4, 9, 4, 2, 1, 3, 12, 9, 5, 4, 8, 0, 0, 14, 11, 0, 0].map((r, i) => (
                <div key={i} className={`flex aspect-square items-center justify-center rounded-full text-sm font-bold ${r === 0 ? "bg-zinc-700 text-zinc-300" : r <= 3 ? "bg-emerald-600" : r <= 10 ? "bg-amber-500" : "bg-red-500"}`}>{r === 0 ? "20+" : r}</div>
              ))}
            </div>
            <p className="mt-5 text-center text-xs text-zinc-500">Example check-up map: each pin is a Google Maps search from that spot. Green is top 3.</p>
          </div>
          )}
        </div>
      </section>

      {/* Proof (left off when the case study is marked hidden) */}
      {!config.hideCaseStudy && !config.caseStudy?.hidden && (
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-xs tracking-[0.25em] text-pink-400">{config.caseStudyKicker ?? "A TRADE CLIENT"}</p>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">{config.caseStudy?.name ?? "The South East Fencer"}</h2>
          <p className="mt-4 max-w-3xl text-lg text-zinc-400">{config.caseStudy?.intro ?? "Fencing on the Mornington Peninsula and south-east Melbourne. Their Google Search Console report shows search visibility building through 2025 and 2026."}</p>
          <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-4">
            {(config.caseStudy?.stats ?? [["5.38k", "clicks from Google search"], ["437k", "times shown in Google"], ["9.5", "average position (page one)"], ["20+", "daily clicks, up from about 3"]]).map(([n, l]) => (
              <div key={l} className="rounded-2xl border border-white/10 bg-zinc-950 p-6"><div className="text-4xl font-bold">{n}</div><div className="mt-2 text-sm text-zinc-500">{l}</div></div>
            ))}
          </div>
          <p className="mt-4 text-xs text-zinc-600">{config.caseStudy?.source ?? "Source: client-supplied Google Search Console report. Clicks are website visits from search, not confirmed enquiries."}</p>
          <Link href={config.caseStudy?.href ?? "/case-studies/the-south-east-fencer"} className="mt-6 inline-flex items-center gap-2 text-pink-400 hover:text-pink-300">Read the case study <ArrowRight size={16} /></Link>
        </div>
      </section>
      )}

      {/* Google reviews that match this page's service (lib/reviews.ts) */}
      {config.reviews && config.reviews.length > 0 && (
        <section id="reviews" className="scroll-mt-20 border-t border-white/10 bg-zinc-950 px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="font-mono text-xs tracking-[0.25em] text-pink-400">WHAT CLIENTS SAY</p>
                <h2 className="mt-4 max-w-3xl text-4xl font-bold md:text-5xl">Real reviews from Google.</h2>
              </div>
              <a href={GOOGLE_BUSINESS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex shrink-0 items-center gap-3 rounded-2xl border border-white/10 bg-black px-5 py-4 transition hover:border-white/25">
                <span className="text-4xl font-bold">{GOOGLE_RATING.rating}</span>
                <span>
                  <Stars />
                  <span className="mt-1 flex items-center gap-1 text-sm text-zinc-400">{GOOGLE_RATING.count} Google reviews <ArrowUpRight size={14} /></span>
                </span>
              </a>
            </div>
            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {config.reviews.map((r) => (
                <figure key={r.name} className="relative flex flex-col rounded-3xl border border-white/10 bg-black p-7">
                  <Quote className="absolute right-6 top-6 h-8 w-8 text-pink-500/20" aria-hidden="true" />
                  <Stars />
                  <blockquote className="mt-5 flex-grow leading-relaxed text-zinc-300">&ldquo;{r.text}&rdquo;</blockquote>
                  <figcaption className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-pink-500/15 font-bold text-pink-300" aria-hidden="true">{r.name.charAt(0)}</span>
                    <span>
                      <span className="block font-semibold">{r.name}</span>
                      <span className="block text-sm text-zinc-500">{r.context}</span>
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
            <p className="mt-6 text-xs text-zinc-600">Quoted word for word from Seam Media&apos;s Google Business Profile. <a href={GOOGLE_BUSINESS_URL} target="_blank" rel="noopener noreferrer" className="underline hover:text-zinc-400">Read all reviews on Google</a></p>
          </div>
        </section>
      )}

      {config.guarantee && (
        <section id="guarantee" className="scroll-mt-20 border-t border-white/10 bg-gradient-to-b from-pink-500/10 to-black px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <p className="font-mono text-xs tracking-[0.25em] text-pink-400">{config.guarantee.kicker}</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-bold md:text-5xl">{config.guarantee.heading}</h2>
            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {config.guarantee.points.map((g) => (
                <article key={g.title} className="rounded-3xl border border-pink-500/30 bg-black p-7">
                  <CheckCircle2 className="h-8 w-8 text-pink-400" />
                  <h3 className="mt-5 text-2xl font-semibold">{g.title}</h3>
                  <p className="mt-3 leading-relaxed text-zinc-400">{g.copy}</p>
                </article>
              ))}
            </div>
            <p className="mt-6 max-w-4xl text-xs leading-relaxed text-zinc-500">{config.guarantee.terms}</p>
          </div>
        </section>
      )}

      {/* Plans */}
      <section className="border-y border-white/10 bg-zinc-950 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-xs tracking-[0.25em] text-pink-400">SIMPLE WEEKLY PACKAGES</p>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">Pick the level that suits your business.</h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {plans.map((p) => (
              <article key={p.name} className={`relative flex flex-col rounded-3xl border p-7 ${(config.featuredPlan ? p.name === config.featuredPlan : p.featured) ? "border-pink-500/50 bg-gradient-to-b from-pink-500/15 to-black" : "border-white/10 bg-black"}`}>
                {(config.featuredPlan ? p.name === config.featuredPlan : p.featured) && <span className="absolute -top-3 left-6 rounded-full bg-pink-500 px-4 py-1 text-xs font-bold uppercase tracking-wider">Recommended for {config.audience}</span>}
                <h3 className="text-2xl font-bold">{p.name}</h3>
                <p className="mt-2 text-sm text-zinc-500">{p.blurb}</p>
                <div className="my-6"><span className="text-4xl font-bold">{p.weekly}</span><span className="ml-2 text-sm text-zinc-500">per week + GST</span></div>
                <ul className="flex-grow space-y-3">
                  {p.features.map((f) => <li key={f} className="flex gap-2.5 text-sm text-zinc-300"><Check className="mt-0.5 h-4 w-4 shrink-0 text-pink-400" />{f}</li>)}
                </ul>
              </article>
            ))}
          </div>
          <p className="mt-8 text-center text-xs text-zinc-600">Prices in AUD plus GST, billed weekly. Ad spend is separate and paid directly to Google or Meta. <Link href="/marketing-packages" className="underline hover:text-zinc-400">Full package details</Link></p>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold md:text-5xl">Questions</h2>
          <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
            {config.faqs.map((f) => (
              <details key={f.q} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-semibold">{f.q}<span className="text-pink-400 transition group-open:rotate-45">+</span></summary>
                <p className="mt-4 leading-relaxed text-zinc-400">{f.a}</p>
              </details>
            ))}
          </div>
          <div className="mt-14 text-center">
            <a href="#check-up" className="inline-flex items-center gap-2 rounded-full bg-pink-500 px-8 py-4 font-semibold transition hover:bg-pink-600">{offer ? cta : "Get my free Google Maps check-up"} <ArrowRight size={18} /></a>
            <p className="mt-4 text-sm text-zinc-500">Or call Heath on <a href="tel:+61402642746" className="text-pink-400">0402 642 746</a></p>
          </div>
        </div>
      </section>

      {/* Mobile call bar (17 Oct 2026): the header's call button sits inside the menu below xl, so on a phone the
          number was only in the hero. globals.css pads the page bottom while this bar is on the page. */}
      <div data-mobile-call-bar className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-3 border-t border-white/10 bg-black/95 px-4 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 backdrop-blur lg:hidden">
        <a href="tel:+61402642746" className="flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 py-3 text-sm font-semibold"><Phone size={16} /> Call Heath</a>
        <a href="#check-up" className="flex items-center justify-center gap-2 rounded-full bg-pink-500 py-3 text-sm font-semibold">{offer ? "Free audit" : "Free check-up"} <ArrowRight size={16} /></a>
      </div>
    </div>
  );
}

function Stars() {
  return (
    <span className="flex gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }, (_, i) => <Star key={i} className="h-4 w-4 fill-[#FBBF24] text-[#FBBF24]" aria-hidden="true" />)}
    </span>
  );
}

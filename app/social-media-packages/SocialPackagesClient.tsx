"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowRight, Check, Film, Layers3, ShieldCheck, Sparkles } from "lucide-react";
import PaymentTermsNotice from "@/components/PaymentTermsNotice";

const DotScreenShader = dynamic(() => import("@/components/DotShader"), { ssr: false });

const packages = [
  {
    name: "Content House",
    eyebrow: "Stay visible",
    price: "$199",
    priceNote: "per month",
    description:
      "A simple, productised content service for businesses that need to show up consistently without managing every post themselves.",
    features: [
      "1–2 templated posts per week",
      "Client-supplied photos and information",
      "Branded graphic design and captions",
      "Facebook and Instagram cross-posting",
      "Weekly content calendar",
      "One revision round",
      "Email support",
    ],
    exclusions: "No Reels, filming, community management or paid advertising.",
    cta: "Choose Content House",
    href: "https://seam-media-content-manager.vercel.app/signup?plan=basic&billing=monthly",
    external: true,
    featured: false,
  },
  {
    name: "Content Engine",
    eyebrow: "Build reach",
    price: "$895",
    priceNote: "per month",
    description:
      "A stronger content system for businesses ready to combine polished posts with short-form video across the channels that matter.",
    features: [
      "Eight core content assets per month",
      "Up to two Reels edited from supplied footage",
      "Facebook and Instagram publishing",
      "Adapted TikTok and YouTube Shorts distribution",
      "Monthly content plan and performance summary",
      "One revision round per asset",
      "Priority email support",
    ],
    exclusions: "On-site filming, daily engagement and advertising are quoted separately.",
    cta: "Discuss Content Engine",
    href: "/marketing-packages#fit-check",
    external: false,
    featured: true,
  },
];

export default function SocialPackagesClient() {
  return (
    <div className="bg-black text-white">
      <section className="relative flex min-h-[78vh] items-center overflow-hidden bg-[#09090b] px-6 pb-24 pt-32">
        <div className="absolute inset-0 z-0 opacity-80"><DotScreenShader /></div>
        <div className="relative z-10 mx-auto w-full max-w-6xl">
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-zinc-800 bg-zinc-900/80 px-4 py-1.5 font-mono text-xs tracking-widest text-zinc-400">
            <span className="h-2 w-2 rounded-full bg-pink-500" /> CONTENT-ONLY PACKAGES
          </div>
          <h1 className="max-w-5xl text-6xl font-bold leading-[0.95] tracking-tight md:text-8xl">
            Consistent content.<br />
            <span className="bg-gradient-to-r from-zinc-400 to-zinc-700 bg-clip-text text-transparent">Clear boundaries.</span><br />
            <span className="bg-gradient-to-r from-white to-pink-400 bg-clip-text text-transparent">No guesswork.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400 md:text-xl">
            Choose a focused content package for dependable social visibility. Need advertising, SEO or website support too? Our marketing growth plans connect the whole system.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#packages" className="inline-flex items-center gap-2 rounded-full bg-pink-500 px-7 py-3.5 font-semibold text-white transition hover:bg-pink-600">
              View content packages <ArrowRight size={18} />
            </a>
            <Link href="/marketing-packages" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 font-semibold text-white transition hover:bg-white/10">
              Explore growth plans
            </Link>
          </div>
        </div>
      </section>

      <section id="packages" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 max-w-3xl">
            <p className="font-mono text-xs tracking-[0.25em] text-pink-400">SOCIAL CONTENT</p>
            <h2 className="mt-4 text-4xl font-bold md:text-6xl">Start with the level of content support you actually need.</h2>
            <p className="mt-5 text-lg text-zinc-400">Both packages are content-only. Advertising spend, campaign management and original filming are never quietly bundled into the price.</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {packages.map((pkg) => (
              <article key={pkg.name} className={`relative flex flex-col rounded-3xl border p-8 md:p-10 ${pkg.featured ? "border-pink-500/40 bg-gradient-to-b from-pink-500/10 to-zinc-950 shadow-2xl shadow-pink-500/10" : "border-white/10 bg-zinc-950"}`}>
                {pkg.featured && <span className="absolute -top-3 left-8 rounded-full bg-pink-500 px-4 py-1 text-xs font-bold uppercase tracking-wider">Best for growth</span>}
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">{pkg.eyebrow}</p>
                <h3 className="mt-3 text-3xl font-bold">{pkg.name}</h3>
                <p className="mt-3 min-h-20 text-zinc-400">{pkg.description}</p>
                <div className="my-7 flex items-end gap-2">
                  <span className="text-5xl font-bold">{pkg.price}</span>
                  <span className="pb-1 text-zinc-500">{pkg.priceNote}</span>
                </div>
                <ul className="mb-7 flex-grow space-y-3">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm text-zinc-300"><Check className="mt-0.5 h-5 w-5 shrink-0 text-pink-400" />{feature}</li>
                  ))}
                </ul>
                <p className="mb-7 rounded-xl border border-white/5 bg-white/[0.03] p-4 text-xs leading-relaxed text-zinc-500">{pkg.exclusions}</p>
                {pkg.external ? (
                  <a href={pkg.href} className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-black transition hover:bg-zinc-200">{pkg.cta}<ArrowRight size={17} /></a>
                ) : (
                  <Link href={pkg.href} className="inline-flex items-center justify-center gap-2 rounded-full bg-pink-500 px-6 py-3.5 font-semibold text-white transition hover:bg-pink-600">{pkg.cta}<ArrowRight size={17} /></Link>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-zinc-950 px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {[
            { icon: Layers3, title: "One core asset", copy: "Cross-posting the same approved piece does not create an extra content charge." },
            { icon: Film, title: "Footage supplied by you", copy: "Content Engine includes editing. On-site filming and larger shoots are separate." },
            { icon: ShieldCheck, title: "Defined approval process", copy: "One revision round keeps delivery moving while protecting quality and scope." },
          ].map(({ icon: Icon, title, copy }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-black p-7">
              <Icon className="h-7 w-7 text-pink-400" />
              <h3 className="mt-5 text-xl font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-500">{copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-pink-500/20 bg-gradient-to-br from-pink-500/15 via-zinc-950 to-black p-9 md:p-14">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div>
              <div className="flex items-center gap-2 text-pink-400"><Sparkles size={18} /><span className="font-mono text-xs tracking-[0.2em]">NEED MORE THAN CONTENT?</span></div>
              <h2 className="mt-5 max-w-3xl text-4xl font-bold md:text-5xl">Turn your content into a connected lead-generation system.</h2>
              <p className="mt-5 max-w-2xl text-zinc-400">See plans that combine content, paid advertising, conversion tracking, SEO and website improvements.</p>
            </div>
            <Link href="/marketing-packages" className="inline-flex items-center justify-center gap-2 rounded-full bg-pink-500 px-7 py-4 font-semibold transition hover:bg-pink-600">
              View marketing packages <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
      <PaymentTermsNotice />
    </div>
  );
}

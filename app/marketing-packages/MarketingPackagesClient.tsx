"use client";

import { trackLead } from "@/lib/ads";

import dynamic from "next/dynamic";
import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";
import PaymentTermsNotice from "@/components/PaymentTermsNotice";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Check,
  CheckCircle2,
  CircleDollarSign,
  Layers3,
  MapPinned,
  Megaphone,
  Search,
  Sparkles,
  Star,
  Target,
} from "lucide-react";

const DotScreenShader = dynamic(() => import("@/components/DotShader"), { ssr: false });

type PackageOffer = {
  name: string;
  outcome: string;
  price: string;
  weekly: string;
  description: string;
  features: string[];
  exclusions: string;
  cta: string;
  signupPlan: "foundation" | "growth" | "complete";
  featured?: boolean;
  featuredLabel?: string;
};

const offers: PackageOffer[] = [
  {
    name: "Local Marketing Foundation",
    outcome: "A simple website. Active socials.",
    price: "$140 per week + GST",
    weekly: "$140",
    description: "Basic website and social media support for businesses that want a simple, credible online presence.",
    features: [
      "Basic website setup and ongoing care",
      "Small website text, image and contact-detail updates",
      "Basic branded social posts and captions",
      "Social content scheduling on Facebook and Instagram",
      "Client-supplied photos, footage and business information",
    ],
    exclusions: "SEO, Google Business Profile management, map-pack tracking, performance reporting and paid advertising are not included. Filming, complex websites and larger projects are quoted separately.",
    cta: "Start with the foundation",
    signupPlan: "foundation",
  },
  {
    name: "Growth",
    outcome: "Get found locally. Run one ad platform.",
    price: "$235 per week + GST",
    weekly: "$235",
    description: "Website and social support, plus local search visibility and management of either Google Ads or Meta Ads.",
    features: [
      "Everything in Local Marketing Foundation",
      "Management of one ad platform: Google Ads OR Meta Ads",
      "Campaign setup, conversion tracking and optimisation",
      "Local SEO and five tracked search terms",
      "Google Business Profile posts and management",
      "Weekly map-pack visibility scans",
      "Review requests, monitoring and reply support",
      "One prioritised website or SEO improvement monthly",
      "Monthly performance reporting",
    ],
    exclusions: "Ad spend is separate and paid directly to Google or Meta. Filming, extra locations and larger website projects are quoted separately.",
    cta: "Choose Growth",
    signupPlan: "growth",
    featured: true,
    featuredLabel: "For local enquiries",
  },
  {
    name: "Complete Growth",
    outcome: "Website, socials, SEO and both ad platforms.",
    price: "$350 per week + GST",
    weekly: "$350",
    description: "The complete marketing package, bringing your website, social media, local SEO and Google and Meta advertising together.",
    features: [
      "Everything in Growth",
      "Both Google Ads AND Meta Ads management",
      "Social content and campaign creative",
      "Ongoing website care and local SEO improvements",
      "Google Business Profile and map-pack tracking",
      "Shared conversion and enquiry tracking",
      "Combined reporting across website, socials, SEO and ads",
      "Monthly marketing review and next priorities",
    ],
    exclusions: "Ad spend is separate. Filming, platform fees, extra locations, complex websites and larger projects are quoted separately.",
    cta: "Choose Complete Growth",
    signupPlan: "complete",
  },
];

const comparisonRows = [
  ["Basic website setup and care", "Included", "Included", "Included"],
  ["Social content and scheduling", "Included", "Included", "Included"],
  ["Google Business Profile management", "Not included", "Included", "Included"],
  ["Local SEO and map-pack tracking", "Not included", "5 terms", "5 terms"],
  ["Review requests and monitoring", "Not included", "Included", "Included"],
  ["Monthly website or SEO improvement", "Basic website care", "1 priority", "1 priority"],
  ["Ad management", "Not included", "Google OR Meta", "Google AND Meta"],
  ["Conversion tracking", "Not included", "Selected ad platform", "Across both ad platforms"],
  ["Performance reporting", "Not included", "Monthly", "Combined monthly report"],
  ["Weekly price", "$140", "$235", "$350"],
];

const growthChannels = [
  {
    icon: Search,
    title: "Google Ads",
    copy: "Reach people already searching for your service with campaign management, conversion tracking and ongoing optimisation. Choose Google Ads in Growth, or include it alongside Meta Ads in Complete Growth.",
    note: "Ad spend is paid directly to Google.",
  },
  {
    icon: Megaphone,
    title: "Meta Ads",
    copy: "Reach potential customers on Facebook and Instagram with campaign creative, audience optimisation and enquiry tracking. Choose Meta Ads in Growth, or run both ad platforms in Complete Growth.",
    note: "Ad spend is paid directly to Meta.",
  },
  {
    icon: MapPinned,
    title: "Local search visibility",
    copy: "Growth and Complete Growth include local SEO, Google Business Profile management, map-pack visibility scans and review support to help customers find your business locally.",
    note: "Local search services are included from Growth upwards.",
  },
];

const contentStandards = [
  "Branded graphics and captions written for the business, not a template",
  "One revision round on each asset",
  "Footage and product images supplied by you",
  "Reel editing agreed in your scope, with on-site filming quoted separately",
];

const proof = [
  ["100+", "websites built"],
  ["30K+", "social posts created"],
  ["10+", "years of experience"],
  ["$1M+", "ad spend managed"],
];

const goals = ["Build my local presence", "Add one enquiry channel", "Bring all my marketing together"];
const investmentOptions = [
  "$140 a week",
  "$235 a week",
  "$350 a week",
  "I need a recommendation",
];

export default function MarketingPackagesClient() {
  const [step, setStep] = useState(1);
  const [goal, setGoal] = useState("");
  const [investment, setInvestment] = useState("");
  const [business, setBusiness] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const recommendation = useMemo(() => {
    if (goal === "Build my local presence") return "Local Marketing Foundation";
    if (goal === "Add one enquiry channel") return "Growth";
    if (goal === "Bring all my marketing together") return "Complete Growth";
    return "the right plan";
  }, [goal]);

  const next = () => {
    if (step === 1 && !goal) return;
    if (step === 2 && !investment) return;
    setStep((current) => Math.min(3, current + 1));
  };

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!business || !name || !email) return;
    setStatus("submitting");

    const formData = new FormData();
    formData.set("form", "Marketing packages fit check");
    formData.set("fax_number", String(new FormData(event.currentTarget).get("fax_number") || ""));
    formData.set("goal", goal);
    formData.set("weeklyMarketingInvestment", investment);
    formData.set("recommendedPackage", recommendation);
    formData.set("business", business);
    formData.set("name", name);
    formData.set("email", email);
    formData.set("phone", phone);
    formData.set("website", website);

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      if (response.ok) await trackLead("marketing-packages");
      setStatus(response.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="bg-black text-white">
      <section className="relative flex min-h-[86vh] items-center overflow-hidden bg-[#09090b] px-6 pb-24 pt-32">
        <div className="absolute inset-0 z-0 opacity-75"><DotScreenShader /></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(236,72,153,0.14),transparent_38%)]" />
        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-zinc-800 bg-zinc-900/80 px-4 py-1.5 font-mono text-xs tracking-widest text-zinc-400">
            <span className="h-2 w-2 rounded-full bg-pink-500" /> SIMPLE MARKETING PACKAGES
          </div>
          <h1 className="max-w-6xl text-6xl font-bold leading-[0.92] tracking-tight md:text-8xl lg:text-9xl">
            Start with the basics.<br />
            <span className="bg-gradient-to-r from-zinc-400 via-white to-pink-400 bg-clip-text text-transparent">Grow when you’re ready.</span>
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-zinc-400 md:text-xl">
            Start with a basic website and social media for $140 a week plus GST. Step up to local SEO and one ad platform, or bring your website, socials, SEO and both ad platforms together. All packages are billed weekly.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#plans" className="inline-flex items-center gap-2 rounded-full bg-pink-500 px-7 py-3.5 font-semibold transition hover:bg-pink-600">Compare plans <ArrowRight size={18} /></a>
            <a href="#fit-check" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 font-semibold transition hover:bg-white/10">Find your fit</a>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-zinc-950 px-6 py-10">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 md:grid-cols-4">
          {proof.map(([number, label]) => (
            <div key={label} className="text-center md:text-left">
              <div className="text-3xl font-bold md:text-4xl">{number}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-zinc-500">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="plans" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-4xl">
            <p className="font-mono text-xs tracking-[0.25em] text-pink-400">THREE CLEAR LEVELS OF SUPPORT</p>
            <h2 className="mt-4 text-4xl font-bold md:text-6xl">The basics, local growth or the complete package.</h2>
            <p className="mt-5 text-lg text-zinc-400">Foundation keeps your website and socials active. Growth adds local search and one ad platform. Complete Growth brings it all together with Google and Meta Ads. Choose the level your business needs.</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {offers.map((offer) => (
              <article key={offer.name} className={`relative flex flex-col rounded-3xl border p-7 ${offer.featured ? "border-pink-500/50 bg-gradient-to-b from-pink-500/15 to-zinc-950 shadow-2xl shadow-pink-500/10" : "border-white/10 bg-zinc-950"}`}>
                {offer.featured && <span className="absolute -top-3 left-6 rounded-full bg-pink-500 px-4 py-1 text-xs font-bold uppercase tracking-wider">{offer.featuredLabel || "Recommended"}</span>}
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500">{offer.outcome}</p>
                <h3 className="mt-3 text-2xl font-bold">{offer.name}</h3>
                <div className="my-6 border-t border-white/10 pt-5" aria-label={`Price: ${offer.price}`}>
                  <div className="text-3xl font-bold leading-none">{offer.weekly}</div>
                  <div className="mt-2 text-[11px] uppercase tracking-wider text-zinc-500">per week + GST</div>
                  <div className="mt-2 text-xs text-zinc-400">Billed weekly</div>
                </div>
                <p className="mb-6 min-h-24 text-sm leading-relaxed text-zinc-500">{offer.description}</p>
                <ul className="mb-6 flex-grow space-y-3">
                  {offer.features.map((feature) => <li key={feature} className="flex gap-2.5 text-sm text-zinc-300"><Check className="mt-0.5 h-4 w-4 shrink-0 text-pink-400" />{feature}</li>)}
                </ul>
                <p className="mb-6 border-t border-white/10 pt-4 text-xs leading-relaxed text-zinc-600">{offer.exclusions}</p>
                <a href="#fit-check" onClick={() => { setGoal(goals[offers.indexOf(offer)]); setInvestment(investmentOptions[offers.indexOf(offer)]); setStep(3); }} className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition ${offer.featured ? "bg-pink-500 text-white hover:bg-pink-600" : "border border-white/15 bg-white/5 hover:bg-white/10"}`}>{offer.cta}<ArrowRight size={16} /></a>
              </article>
            ))}
          </div>
          <p className="mt-8 text-center text-xs text-zinc-600">Prices are in AUD, plus GST, and billed weekly. Ad spend is separate.</p>
        </div>
      </section>

      <section className="border-y border-white/10 bg-zinc-950 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="font-mono text-xs tracking-[0.25em] text-pink-400">WHAT CHANGES AS YOU MOVE UP</p>
              <h2 className="mt-4 text-4xl font-bold md:text-5xl">Add local visibility and advertising as you grow.</h2>
            </div>
            <p className="max-w-2xl text-lg leading-relaxed text-zinc-400">Growth includes local SEO, Google Business Profile management and map-pack tracking, plus your choice of Google Ads or Meta Ads. Complete Growth includes both ad platforms alongside your website, socials and local search.</p>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {growthChannels.map(({ icon: Icon, title, copy, note }) => (
              <article key={title} className="rounded-3xl border border-white/10 bg-black p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-500/10 text-pink-400"><Icon className="h-6 w-6" /></div>
                <h3 className="mt-6 text-2xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">{copy}</p>
                <p className="mt-5 border-t border-white/10 pt-4 text-xs leading-relaxed text-zinc-600">{note}</p>
              </article>
            ))}
          </div>
          <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5 text-sm leading-relaxed text-zinc-400">
            Need something different? Website Conversion Care, SEO Content Boost and additional locations can be added when they are the clearest next move. We keep the public menu simple and prescribe these only when they suit the business.
          </div>
        </div>
      </section>

      <section id="compare" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="font-mono text-xs tracking-[0.25em] text-pink-400">COMPARE THE SCOPE</p>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">See exactly what each package includes.</h2>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full min-w-[840px] text-left text-sm">
              <thead className="bg-black">
                <tr><th className="p-5 text-zinc-500">Capability</th>{offers.map((offer) => <th key={offer.name} className="p-5 text-white">{offer.name}</th>)}</tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {comparisonRows.map(([label, ...values]) => (
                  <tr key={label} className="bg-zinc-950/60"><th className="p-5 font-medium text-zinc-300">{label}</th>{values.map((value, index) => <td key={`${label}-${index}`} className="p-5 text-zinc-500">{value}</td>)}</tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-xs leading-relaxed text-zinc-600">All prices are in AUD, plus GST, and billed weekly. Ad spend is separate.</p>
        </div>
      </section>

      <section className="border-y border-white/10 bg-zinc-950 px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="font-mono text-xs tracking-[0.25em] text-pink-400">WHERE SOCIAL CONTENT SITS NOW</p>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">Social content is part of every plan.</h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-zinc-400">Every package includes social content and scheduling. Foundation keeps it basic, using your supplied assets to keep Facebook and Instagram active. Growth and Complete Growth connect that social presence with local search and advertising. Our content standards are:</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-black p-7 md:p-9">
            <ul className="space-y-4">
              {contentStandards.map((standard) => (
                <li key={standard} className="flex gap-3 text-sm leading-relaxed text-zinc-300"><Check className="mt-0.5 h-4 w-4 shrink-0 text-pink-400" />{standard}</li>
              ))}
            </ul>
            <p className="mt-6 border-t border-white/10 pt-5 text-xs leading-relaxed text-zinc-600">The content volume and formats are agreed in your proposal. Photos and footage are supplied by you, and on-site filming is quoted separately.</p>
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="font-mono text-xs tracking-[0.25em] text-pink-400">THE FIRST 90 DAYS</p>
              <h2 className="mt-4 text-4xl font-bold md:text-5xl">Build the foundation first. Grow from evidence.</h2>
              <p className="mt-5 text-zinc-500">We set up the services in your chosen package, keep delivery consistent and review what support the business needs next.</p>
            </div>
            <div className="space-y-4">
              {[
                ["01", "Days 1 to 30", "Baseline and first win", "Start with an onboarding call, connect your website and social accounts, and agree the scope. For Growth and Complete Growth, we also set up local search and your selected ad platforms."],
                ["02", "Days 31 to 60", "Publish and improve", "Keep your website and socials current. Growth and Complete Growth also include local SEO work, campaign optimisation and performance reporting."],
                ["03", "Days 61 to 90", "Review and grow", "Review the work delivered and your next priorities. If you need local search or more advertising support, move to Growth or Complete Growth."],
              ].map(([number, period, title, copy]) => (
                <div key={number} className="grid gap-5 rounded-2xl border border-white/10 bg-zinc-950 p-6 md:grid-cols-[auto_1fr]">
                  <span className="font-mono text-sm text-pink-400">{number}</span>
                  <div><p className="text-xs uppercase tracking-wider text-zinc-600">{period}</p><h3 className="mt-1 text-xl font-semibold">{title}</h3><p className="mt-2 text-sm leading-relaxed text-zinc-500">{copy}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-zinc-950 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="font-mono text-xs tracking-[0.25em] text-pink-400">ONE CONNECTED SYSTEM</p>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">Support that grows with your business.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Layers3, title: "Social content", copy: "Keep the business active and give potential customers current reasons to trust it." },
              { icon: MapPinned, title: "Google visibility", copy: "From Growth upwards: manage your Google Business Profile, monitor map-pack coverage and improve local SEO." },
              { icon: Star, title: "Reviews and reputation", copy: "From Growth upwards: request genuine feedback, monitor new reviews and prepare useful responses." },
              { icon: Target, title: "Optional growth", copy: "Choose Google Ads or Meta Ads with Growth. Complete Growth includes both ad platforms." },
            ].map(({ icon: Icon, title, copy }) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-black p-7"><Icon className="h-7 w-7 text-pink-400" /><h3 className="mt-5 text-xl font-semibold">{title}</h3><p className="mt-3 text-sm leading-relaxed text-zinc-500">{copy}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section id="fit-check" className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div className="flex items-center gap-2 text-pink-400"><Sparkles size={18} /><span className="font-mono text-xs tracking-[0.2em]">FIND YOUR FIT</span></div>
            <h2 className="mt-5 text-4xl font-bold md:text-5xl">Find the right starting point.</h2>
            <p className="mt-5 max-w-lg text-zinc-500">Three quick steps help us recommend basic website and social support, Growth with one ad platform, or Complete Growth with everything working together.</p>
            <div className="mt-9 space-y-4 text-sm text-zinc-400">
              <div className="flex gap-3"><CheckCircle2 className="h-5 w-5 text-pink-400" />No obligation or forced advertising bundle</div>
              <div className="flex gap-3"><CircleDollarSign className="h-5 w-5 text-pink-400" />Clear scope and pricing in your proposal</div>
              <div className="flex gap-3"><BarChart3 className="h-5 w-5 text-pink-400" />A practical recommendation based on your goal</div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-zinc-950 p-7 md:p-10">
            {status === "success" ? (
              <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                <div className="rounded-full bg-pink-500/15 p-4"><CheckCircle2 className="h-10 w-10 text-pink-400" /></div>
                <h3 className="mt-6 text-3xl font-bold">Your fit check is on its way.</h3>
                <p className="mt-4 max-w-md text-zinc-500">Thanks, {name}. We’ll review your goals and get back to you with the clearest next step.</p>
              </div>
            ) : (
              <form onSubmit={submit} noValidate>
                <input type="text" name="fax_number" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
                <div className="mb-8 flex items-center gap-3" aria-label={`Step ${step} of 3`}>
                  {[1, 2, 3].map((item) => <span key={item} className={`h-1.5 flex-1 rounded-full ${item <= step ? "bg-pink-500" : "bg-zinc-800"}`} />)}
                </div>

                {step === 1 && (
                  <fieldset>
                    <legend className="text-2xl font-bold">What is the main outcome you want?</legend>
                    <p className="mt-2 text-sm text-zinc-500">Choose the level of support that feels closest to what the business needs now.</p>
                    <div className="mt-7 grid gap-3">
                      {goals.map((option) => <button key={option} type="button" onClick={() => setGoal(option)} className={`rounded-xl border p-4 text-left transition ${goal === option ? "border-pink-500 bg-pink-500/10 text-white" : "border-white/10 bg-black text-zinc-400 hover:border-white/20"}`}>{option}</button>)}
                    </div>
                  </fieldset>
                )}

                {step === 2 && (
                  <fieldset>
                    <legend className="text-2xl font-bold">Which weekly budget suits your business?</legend>
                    <p className="mt-2 text-sm text-zinc-500">Packages are billed weekly, plus GST. Advertising spend is separate.</p>
                    <div className="mt-7 grid gap-3 sm:grid-cols-2">
                      {investmentOptions.map((option) => <button key={option} type="button" onClick={() => setInvestment(option)} className={`rounded-xl border p-4 text-left transition ${investment === option ? "border-pink-500 bg-pink-500/10 text-white" : "border-white/10 bg-black text-zinc-400 hover:border-white/20"}`}>{option}</button>)}
                    </div>
                  </fieldset>
                )}

                {step === 3 && (
                  <fieldset>
                    <legend className="text-2xl font-bold">Where should we send your recommendation?</legend>
                    <p className="mt-2 text-sm text-zinc-500">Based on your answers, we’ll start by assessing {recommendation}.</p>
                    <div className="mt-7 grid gap-4 sm:grid-cols-2">
                      <label className="text-sm text-zinc-400">Your name *<input value={name} onChange={(e) => setName(e.target.value)} required className="mt-2 w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white outline-none focus:border-pink-500" /></label>
                      <label className="text-sm text-zinc-400">Business name *<input value={business} onChange={(e) => setBusiness(e.target.value)} required className="mt-2 w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white outline-none focus:border-pink-500" /></label>
                      <label className="text-sm text-zinc-400">Email *<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="mt-2 w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white outline-none focus:border-pink-500" /></label>
                      <label className="text-sm text-zinc-400">Phone<input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className="mt-2 w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white outline-none focus:border-pink-500" /></label>
                      <label className="text-sm text-zinc-400 sm:col-span-2">Website<input type="url" value={website} onChange={(e) => setWebsite(e.target.value)} placeholder="https://" className="mt-2 w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white outline-none focus:border-pink-500" /></label>
                    </div>
                  </fieldset>
                )}

                {status === "error" && <p className="mt-5 rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-300">Something went wrong. Please try again or email contact@seammedia.com.au.</p>}

                <div className="mt-8 flex items-center justify-between gap-4">
                  {step > 1 ? <button type="button" onClick={() => setStep((current) => current - 1)} className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm text-zinc-300 hover:bg-white/5"><ArrowLeft size={16} />Back</button> : <span />}
                  {step < 3 ? <button type="button" onClick={next} disabled={(step === 1 && !goal) || (step === 2 && !investment)} className="inline-flex items-center gap-2 rounded-full bg-pink-500 px-6 py-3 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-40">Next<ArrowRight size={16} /></button> : <button type="submit" disabled={!name || !business || !email || status === "submitting"} className="inline-flex items-center gap-2 rounded-full bg-pink-500 px-6 py-3 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-40">{status === "submitting" ? "Sending…" : "Get my recommendation"}<ArrowRight size={16} /></button>}
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-zinc-950 px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <div className="text-center"><p className="font-mono text-xs tracking-[0.25em] text-pink-400">COMMON QUESTIONS</p><h2 className="mt-4 text-4xl font-bold md:text-5xl">Clear before you commit.</h2></div>
          <div className="mt-12 divide-y divide-white/10 rounded-2xl border border-white/10 bg-black px-6 md:px-8">
            {[
              ["How much does it cost?", "Foundation is $140 a week, Growth is $235 a week, and Complete Growth is $350 a week. All prices are in AUD, plus GST, and billed weekly."],
              ["How often am I billed?", "You are billed weekly at the advertised package price, plus GST. Advertising spend is separate from your weekly service fee."],
              ["What is included in Foundation?", "Basic website setup and care, small website updates, branded social posts, captions and Facebook and Instagram scheduling using assets you supply. Foundation does not include SEO, Google Business Profile management, map-pack tracking, performance reporting or paid advertising."],
              ["What does Growth add?", "Growth adds local SEO, Google Business Profile management, map-pack tracking, review support, a prioritised monthly website or SEO improvement, performance reporting, and management of either Google Ads or Meta Ads."],
              ["What is included in Complete Growth?", "Complete Growth includes everything in Growth, with both Google Ads and Meta Ads management, social and campaign creative, shared tracking, combined reporting and a monthly marketing review."],
              ["Can we start with Foundation and upgrade later?", "Yes. Start with basic website and social support, then move to Growth or Complete Growth when you need local SEO or advertising management."],
              ["Is ad spend included?", "No. Advertising spend is separate from the management fee and is paid directly to Google or Meta. Any third-party platform fees are separate too."],
              ["What does a basic website include?", "A simple business website and ongoing care, with small text, image and contact-detail updates. The pages and setup requirements are agreed in your proposal. Ecommerce, custom functionality, complex builds and larger projects are quoted separately."],
              ["Are SEO articles included in Foundation?", "No. SEO starts with Growth. In Growth and Complete Growth, an article may be the prioritised monthly SEO improvement where it is the best use of that allowance."],
              ["How are review requests handled?", "Review support is included in Growth and Complete Growth. We request honest feedback from genuine customers without incentives or review gating. Sensitive and negative public replies remain approval-led."],
              ["Is there a lock-in contract?", "No. Everything is month to month and billed weekly. Cancel any time, and it takes effect at the end of the billing period you've paid for."],
            ].map(([question, answer]) => <div key={question} className="py-6"><h3 className="font-semibold">{question}</h3><p className="mt-2 text-sm leading-relaxed text-zinc-500">{answer}</p></div>)}
          </div>
          <div className="mt-12 text-center text-sm text-zinc-500">Prefer to talk it through? <a href="tel:+61402642746" className="text-pink-400 hover:text-pink-300">Call 0402 642 746</a> or <Link href="/contact" className="text-pink-400 hover:text-pink-300">send an enquiry</Link>.</div>
        </div>
      </section>
      <PaymentTermsNotice />
    </div>
  );
}

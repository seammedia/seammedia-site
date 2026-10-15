"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { dollars, employmentCost, marketingPlans, packageCost, salaryOptions } from "@/lib/marketing-costs";

export default function CostComparison({ children }: { children?: ReactNode }) {
  const [salary, setSalary] = useState<number>(75000);
  const employee = employmentCost(salary);
  const weeklyHire = employee.annual / 52;
  const complete = packageCost(350, employee.annual);
  const bars = [
    { name: "One in-house hire", detail: "Salary + super", annual: employee.annual, weekly: weeklyHire, hire: true },
    ...marketingPlans.map(p => ({ name: p.name, detail: "Seam package", annual: p.weekly * 52, weekly: p.weekly, hire: false })),
  ];

  return <>
    <section id="compare" className="scroll-mt-24 border-y border-white/10 bg-zinc-950 px-6 py-20 md:py-24">
      <div className="mx-auto max-w-7xl">
        <p className="font-mono text-xs tracking-[0.25em] text-pink-400">THE COST OF ONE HIRE</p>
        <div className="mt-4 grid gap-10 lg:grid-cols-2 lg:items-end">
          <div><h2 className="text-4xl font-bold tracking-tight md:text-6xl">A salary is just<br />the starting point.</h2><p className="mt-5 max-w-xl text-lg leading-relaxed text-zinc-400">Thinking about hiring a marketing graduate? Pick a salary and see what one hire really costs each week, before the laptop, software or training.</p></div>
          <fieldset className="rounded-2xl border border-white/10 bg-black p-6"><legend className="px-2 text-sm font-semibold text-zinc-300">Choose an example salary</legend><div className="grid grid-cols-3 gap-2">{salaryOptions.map(value => <button type="button" key={value} aria-pressed={salary === value} onClick={() => setSalary(value)} className={`rounded-xl border px-2 py-3 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pink-400 ${salary === value ? "border-pink-400 bg-pink-500/15 text-pink-300" : "border-white/15 text-zinc-300 hover:border-white/40"}`}>{dollars(value)}</button>)}</div><p className="mt-4 text-sm text-zinc-400">{dollars(employee.salary)} salary + {dollars(employee.superannuation)} super = <span className="font-semibold text-white">{dollars(employee.annual)} a year</span></p></fieldset>
        </div>

        <div aria-live="polite" aria-atomic="true" className="mt-12 grid items-stretch gap-4 md:grid-cols-[1fr_auto_1fr]">
          <div className="rounded-3xl border border-white/10 bg-black p-8 md:p-10"><p className="text-sm uppercase tracking-wider text-zinc-400">One in-house hire</p><p className="mt-4 text-6xl font-bold tracking-tight md:text-7xl">{dollars(weeklyHire)}</p><p className="mt-2 text-lg text-zinc-400">per week</p></div>
          <p className="self-center text-center font-mono text-sm tracking-widest text-zinc-500">VS</p>
          <div className="rounded-3xl border border-pink-400/50 bg-gradient-to-br from-pink-500/20 to-black p-8 md:p-10"><p className="text-sm uppercase tracking-wider text-pink-300">Seam Media</p><p className="mt-4 text-6xl font-bold tracking-tight md:text-7xl"><span className="mr-2 text-2xl font-semibold text-zinc-400 md:text-3xl">from</span>{dollars(marketingPlans[0].weekly)}</p><p className="mt-2 text-lg text-zinc-400">per week + GST</p></div>
        </div>

        <figure className="mt-12 rounded-3xl border border-white/10 bg-black p-6 md:p-10">
          <figcaption className="text-lg font-semibold">What you’d spend in a year</figcaption>
          <div role="img" aria-label={`Yearly cost: ${bars.map(b => `${b.name} ${dollars(b.annual)}`).join(", ")}`} className="mt-8 space-y-6">
            {bars.map(bar => <div key={bar.name} className="grid gap-2 md:grid-cols-[200px_1fr] md:items-center md:gap-6">
              <div><p className={`font-semibold ${bar.hire ? "text-white" : "text-zinc-200"}`}>{bar.name}</p><p className="text-xs text-zinc-500">{bar.detail}</p></div>
              <div className="flex items-center gap-3">
                <div className="h-5 flex-1 md:h-9"><div className={`h-full rounded-r transition-[width] duration-500 ${bar.hire ? "bg-zinc-500" : "bg-pink-500"}`} style={{ width: `${Math.max(bar.annual / employee.annual * 100, 1.5)}%` }} /></div>
                <p className="w-28 shrink-0 text-right text-sm"><span className="block font-semibold text-white">{dollars(bar.annual)}</span><span className="text-zinc-500">{dollars(bar.weekly)} / wk</span></p>
              </div>
            </div>)}
          </div>
          <p className="mt-8 text-xs text-zinc-500">Salary + super only. Seam fees exclude GST. <a href="#method" className="text-zinc-300 underline underline-offset-4 hover:text-white">How we calculated this</a></p>
        </figure>

        <div className="mt-10 rounded-3xl border border-pink-400/30 bg-gradient-to-r from-pink-500/15 to-transparent p-7 md:p-12"><p className="text-sm text-pink-300">Even our most comprehensive package</p><p className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl md:text-7xl">{dollars(complete.saving)} less per year.</p><p className="mt-5 max-w-3xl text-lg leading-relaxed text-zinc-300">That’s {complete.savingPercent}% less than one hire on {dollars(salary)} plus super. More room in your budget for advertising, equipment or your next big move.</p></div>
      </div>
    </section>

    {children}

    <section id="plans" className="scroll-mt-24 px-6 py-20 md:py-24"><div className="mx-auto max-w-7xl"><p className="font-mono text-xs tracking-[0.25em] text-pink-400">CHOOSE THE SUPPORT YOU NEED</p><h2 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">A smaller commitment.<br />A clear plan.</h2><p className="mt-5 max-w-3xl text-lg leading-relaxed text-zinc-400">Start with your website and socials, add local search and one ad platform, or bring everything together.</p>
      <div className="mt-14 grid gap-6 lg:grid-cols-3">{marketingPlans.map((plan, i) => { const cost = packageCost(plan.weekly, employee.annual); return <article key={plan.name} className={`relative flex flex-col rounded-3xl border p-7 ${i === 2 ? "border-pink-500/50 bg-gradient-to-b from-pink-500/15 to-zinc-950" : "border-white/10 bg-zinc-950"}`}>
        {i === 2 && <span className="absolute -top-3 left-6 rounded-full bg-pink-500 px-4 py-1 text-xs font-bold uppercase tracking-wider">Most comprehensive</span>}<p className="text-xs leading-relaxed text-zinc-400">{plan.summary}</p><h3 className="mt-3 text-2xl font-bold">{plan.name}</h3><div className="mt-6 border-t border-white/10 pt-5"><p className="text-4xl font-bold">{dollars(plan.weekly)}<span className="ml-2 text-sm font-normal text-zinc-400">/ week + GST</span></p><p className="mt-3 text-sm text-zinc-400">{dollars(cost.annual)} / year · {dollars(cost.monthly)} / month average</p></div><p className="my-6 rounded-xl bg-pink-500/10 px-4 py-3 text-sm font-semibold text-pink-300">{cost.savingPercent}% less than one hire</p><ul className="flex-grow space-y-3">{plan.features.map(feature => <li key={feature} className="flex gap-3 text-sm leading-relaxed text-zinc-300"><Check size={17} className="mt-0.5 shrink-0 text-pink-400" aria-hidden="true" />{feature}</li>)}</ul><p className="mb-6 mt-6 border-t border-white/10 pt-4 text-xs leading-relaxed text-zinc-400">{plan.note}</p><Link href="/marketing-packages#plans" className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition ${i === 2 ? "bg-pink-500 hover:bg-pink-600" : "border border-white/15 bg-white/5 hover:bg-white/10"}`}>Explore package details <ArrowRight size={16} aria-hidden="true" /></Link>
      </article>; })}</div>
    </div></section>
  </>;
}

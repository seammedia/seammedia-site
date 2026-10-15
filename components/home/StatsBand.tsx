"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import DarkSection from "./DarkSection";

const stats = [
  { label: "Websites & tech", value: 100, format: (v: number) => `${v}+`, unit: "websites built", description: "For trades, hospitality, ecommerce and professional services." },
  { label: "Social media", value: 30, format: (v: number) => `${v}K+`, unit: "posts created", description: "Planned, designed and published across Instagram, Facebook and LinkedIn." },
  { label: "Experience", value: 10, format: (v: number) => `${v}+`, unit: "years", description: "Helping Australian service businesses grow online." },
  // Counted in thousands so the animation reads $250K, $500K... before landing on $1M+.
  { label: "Advertising", value: 1000, format: (v: number) => (v >= 1000 ? "$1M+" : `$${v}K`), unit: "ad spend managed", description: "Across Google and Meta, with a focus on return on spend." },
];

const noop = () => () => {};
const motionQuery = "(prefers-reduced-motion: reduce)";
// True only after hydration, so the server (and search engines) get the final figures.
const useHydrated = () => useSyncExternalStore(noop, () => true, () => false);
const useReducedMotion = () => useSyncExternalStore(
  (onChange) => { const query = window.matchMedia(motionQuery); query.addEventListener("change", onChange); return () => query.removeEventListener("change", onChange); },
  () => window.matchMedia(motionQuery).matches,
  () => false,
);

// Counts up once the band scrolls into view; reduced-motion users see the final figures straight away.
function useCountUp(target: number, start: boolean) {
  const hydrated = useHydrated();
  const reduced = useReducedMotion();
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    if (!start || reduced) return;
    let frame = 0;
    const began = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - began) / 1400);
      setProgress(t);
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [start, reduced]);
  if (!hydrated || reduced) return target;
  return Math.round(target * (1 - Math.pow(1 - progress, 3)));
}

function Stat({ stat, start }: { stat: (typeof stats)[number]; start: boolean }) {
  const value = useCountUp(stat.value, start);
  return (
    <div className="group relative flex min-h-[210px] flex-col justify-between overflow-hidden rounded-2xl border border-[#262626] bg-[#111111] p-5 sm:min-h-[230px] sm:p-8 transition-colors duration-500 hover:border-[#00c2d1]/50">
      <div aria-hidden="true" className="pointer-events-none absolute -top-24 left-1/2 h-[300px] w-[300px] -translate-x-1/2 bg-[radial-gradient(circle,rgba(0,194,209,0.18)_0%,transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <p className="relative font-mono text-[10px] uppercase tracking-widest text-[#888888] sm:text-[11px]">{stat.label}</p>
      <div className="relative">
        <p className="text-5xl font-semibold leading-none tracking-tight text-white tabular-nums sm:text-6xl">{stat.format(value)}</p>
        <p className="mt-2 min-h-7 text-base text-[#a1a1a1] sm:text-lg">{stat.unit}</p>
        <p className="mt-3 text-xs leading-relaxed text-[#8a8a8a] sm:mt-4 sm:text-sm">{stat.description}</p>
      </div>
    </div>
  );
}

export default function StatsBand() {
  const ref = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setStart(true); observer.disconnect(); } }, { threshold: 0.3 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return (
    <DarkSection glow="centre" className="pb-10 lg:pb-14">
      <h2 className="sr-only">Seam Media in numbers</h2>
      <div ref={ref} className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
        {stats.map(stat => <Stat key={stat.label} stat={stat} start={start} />)}
      </div>
    </DarkSection>
  );
}

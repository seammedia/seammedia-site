"use client";

import { useState } from "react";

type Series = { readonly name: string; readonly values: readonly number[] };
type Props = { series: readonly Series[]; labels: readonly string[]; unit: string; format: "number" | "currency" | "ratio" | "percent"; theme: "fencer" | "florist" | "ecommerce" | "finance"; approx?: boolean };

const accent = { fencer: "#4e7d5b", florist: "#c2577a", ecommerce: "#4f5bd5", finance: "#16806f" };
const baseline = "#8f8984";

function fmt(value: number, format: Props["format"], short = false) {
  if (format === "percent") return `${short && Number.isInteger(value) ? value : value.toFixed(2)}%`;
  if (format === "ratio") return `${short ? (Number.isInteger(value) ? value : value.toFixed(1)) : value.toFixed(2)}×`;
  if (format === "currency" && short && value >= 1000000) return `A$${Math.round(value / 100000) / 10}M`;
  if (format === "currency" && short && value >= 1000) return `A$${Math.round(value / 100) / 10}k`;
  if (format === "currency") return `A$${value.toLocaleString("en-AU")}`;
  return value.toLocaleString("en-AU");
}

function niceMax(value: number) {
  const step = 10 ** Math.floor(Math.log10(value));
  return Math.ceil(value / step) * step;
}

export default function CaseChart({ series, labels, unit, format, theme, approx = true }: Props) {
  const [active, setActive] = useState<number | null>(null);
  const max = niceMax(Math.max(...series.flatMap(s => s.values)));
  const ticks = [max, max / 2, 0];
  const colours = [accent[theme], baseline];
  const peak = series[0].values.indexOf(Math.max(...series[0].values));

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-600">
        <span>{unit}</span>
        {series.length > 1 && series.map((s, i) => <span key={s.name} className="inline-flex items-center gap-2"><span className="h-3 w-3 rounded-sm" style={{ background: colours[i] }} aria-hidden="true" />{s.name}</span>)}
      </div>
      <div className="relative grid grid-cols-[auto_minmax(0,1fr)] gap-3" aria-hidden="true">
        <div className="flex h-56 flex-col justify-between pb-0 text-right text-xs text-gray-500 sm:h-72">{ticks.map(t => <span key={t} className="-translate-y-1/2 first:translate-y-0 last:translate-y-0">{fmt(t, format, true)}</span>)}</div>
        <div>
          <div className="relative flex h-56 items-end gap-[2px] border-b border-gray-300 sm:h-72 sm:gap-1">
            <div className="pointer-events-none absolute inset-x-0 top-0 border-t border-dashed border-gray-200" />
            <div className="pointer-events-none absolute inset-x-0 top-1/2 border-t border-dashed border-gray-200" />
            {labels.map((label, i) => (
              <div key={label + i} className="relative flex h-full min-w-0 flex-1 items-end justify-center gap-[2px]" onMouseEnter={() => setActive(i)} onMouseLeave={() => setActive(null)} onClick={() => setActive(active === i ? null : i)}>
                {series.map((s, si) => <div key={s.name} className="w-full max-w-10 rounded-t transition-opacity" style={{ height: `${Math.max((s.values[i] / max) * 100, s.values[i] ? 1 : 0)}%`, background: colours[si], opacity: active === null || active === i ? 1 : 0.45 }} />)}
                {i === peak && active === null && <span className="absolute -translate-y-full whitespace-nowrap pb-1 text-xs font-semibold text-gray-900" style={{ bottom: `${(series[0].values[i] / max) * 100}%` }}>{fmt(series[0].values[i], format, true)}</span>}
                {active === i && <div className="absolute bottom-full z-10 mb-2 whitespace-nowrap rounded-lg bg-gray-900 px-3 py-2 text-xs text-white shadow-lg" style={{ bottom: `${(Math.max(...series.map(s => s.values[i])) / max) * 100}%` }}><p className="font-semibold">{label}</p>{series.map(s => <p key={s.name}>{series.length > 1 ? `${s.name}: ` : ""}{approx ? "≈ " : ""}{fmt(s.values[i], format)}</p>)}</div>}
              </div>
            ))}
          </div>
          <div className="mt-2 flex gap-[2px] sm:gap-1">{labels.map((label, i) => <span key={label + i} className={`min-w-0 flex-1 text-center text-[10px] leading-tight text-gray-500 sm:text-xs ${labels.length > 8 ? "whitespace-nowrap" : ""} ${i % 2 && labels.length > 8 ? "max-sm:invisible" : ""}`}>{label}</span>)}</div>
        </div>
      </div>
      <div className="sr-only"><table>
        <caption>{unit}{approx ? ", approximate" : ""}</caption>
        <thead><tr><th scope="col">Period</th>{series.map(s => <th key={s.name} scope="col">{s.name}</th>)}</tr></thead>
        <tbody>{labels.map((label, i) => <tr key={label + i}><th scope="row">{label}</th>{series.map(s => <td key={s.name}>{fmt(s.values[i], format)}</td>)}</tr>)}</tbody>
      </table></div>
    </div>
  );
}

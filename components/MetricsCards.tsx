"use client";

import Section from "./ui/Section";

export default function MetricsCards() {
  const metrics = [
    {
      label: "Websites & Tech",
      number: "100+",
      unit: "Websites Built",
      description: "Delivered for trades, hospitality, ecommerce & professional services",
    },
    {
      label: "Social Media",
      number: "30K+",
      unit: "Posts Created",
      description: "Strategy-driven content planned, designed & published across Instagram, Facebook & LinkedIn",
    },
    {
      label: "Experience",
      number: "8+",
      unit: "Years",
      description: "Digital Marketing & SEO\nSupporting Australian service-based businesses to grow online",
    },
    {
      label: "Ad Spend Managed",
      number: "$1M+",
      unit: "",
      description: "Managed across Google & Meta with strong ROI focus",
    },
  ];

  return (
    <Section background="white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="group relative bg-[#0a0a0a] border border-[#262626] rounded-2xl p-8 min-h-[220px] flex flex-col justify-between overflow-hidden transition-all duration-500 hover:border-[#404040] hover:scale-105 hover:-translate-y-2 cursor-default"
          >
            {/* Ambient Top Glow */}
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-[radial-gradient(circle,_rgba(255,255,255,0.15)_0%,_transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Sharp Top Border Spotlight */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              {/* Label */}
              <div className="font-mono text-[11px] text-[#888888] tracking-widest uppercase mb-8">
                {metric.label}
              </div>

              {/* Number Block */}
              <div className="mb-3 flex items-baseline flex-wrap gap-2">
                <span className="text-[52px] font-semibold text-white leading-none tracking-tight">
                  {metric.number}
                </span>
                {metric.unit && (
                  <span className="text-lg text-[#A1A1A1] font-normal">
                    {metric.unit}
                  </span>
                )}
              </div>

              {/* Description */}
              <div className="text-sm leading-relaxed text-[#777777] mt-auto whitespace-pre-line">
                {metric.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

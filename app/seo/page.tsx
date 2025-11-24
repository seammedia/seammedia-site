"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, TrendingUp, Search, BarChart3, Target, Globe, Zap, ArrowUpRight, Send } from "lucide-react";
import { Metadata } from "next";

export default function SEOPage() {
  return (
    <>
      <Hero />
      <WhatWeOffer />
      <HowWeWork />
      <Testimonial />
      <ReadyToRank />
      <ContactSection />
    </>
  );
}

// Scramble Text Effect Component
const ScrambleText = ({ text, className = "" }: { text: string; className?: string }) => {
  const [displayText, setDisplayText] = useState('');
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&";
  const [hasScrambled, setHasScrambled] = useState(false);

  useEffect(() => {
    if (hasScrambled) return;

    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (index < iteration) {
              return text[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(interval);
        setHasScrambled(true);
      }

      iteration += 1 / 3;
    }, 30);

    return () => clearInterval(interval);
  }, [text, hasScrambled]);

  return <span className={className}>{displayText}</span>;
};

// Hero Section
const Hero = () => {
  return (
    <section className="min-h-screen bg-black flex items-center justify-center px-6 py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900 via-black to-black opacity-50"></div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 mb-8 font-mono text-xs tracking-widest text-zinc-400">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          IDENTITY: SEAM MEDIA
        </div>

        <h1 className="text-6xl md:text-8xl font-bold leading-[0.95] tracking-tight mb-8 max-w-5xl group mx-auto">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400">
            <ScrambleText text="Dominating Search" />
          </span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 to-zinc-700">
            <ScrambleText text="Rankings That" />
          </span>
          <br />
          <span className="inline-block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400">
              <ScrambleText text="Drive " />
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400 group-hover:from-green-500 group-hover:to-green-600 transition-all duration-300">
              <ScrambleText text="Results" />
            </span>
          </span>
        </h1>

        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed mb-12 mx-auto">
          Data-driven SEO strategies that put Australian businesses on page one. Sustainable organic growth through technical excellence and strategic optimization.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <div className="relative inline-block group">
            <div className="absolute -bottom-2 left-1/2 -z-10 h-8 w-3/4 -translate-x-1/2 bg-white/20 blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-40" />
            <a
              href="#contact"
              className="relative block overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_0%,#ffffff_10%,#00000000_50%)] opacity-0 transition-opacity duration-100 group-hover:opacity-100" />
              <span className="relative flex h-full w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-8 py-4 text-base font-medium text-white ring-1 ring-white/10 transition-colors duration-300 group-hover:bg-slate-900/80 group-hover:ring-transparent">
                <span>Rank Higher Today</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
              </span>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  );
};

// What We Offer Section
const WhatWeOffer = () => {
  const seoServices = [
    {
      title: "Local SEO",
      description: "Dominate local search results. Get found by customers in your area with optimized Google Business profiles and location-based targeting.",
      icon: <Target className="text-zinc-400" size={28} />
    },
    {
      title: "Technical SEO",
      description: "Site speed optimization, mobile responsiveness, structured data, and crawlability improvements that search engines love.",
      icon: <Zap className="text-zinc-400" size={28} />
    },
    {
      title: "On-Page Optimization",
      description: "Strategic keyword placement, meta optimization, content structure, and internal linking that drives rankings.",
      icon: <Search className="text-zinc-400" size={28} />
    },
    {
      title: "Link Building",
      description: "High-authority backlinks from relevant sources. White-hat strategies that build domain authority sustainably.",
      icon: <Globe className="text-zinc-400" size={28} />
    },
    {
      title: "Content Strategy",
      description: "Data-driven content that ranks and converts. Topic clusters, semantic SEO, and user intent optimization.",
      icon: <BarChart3 className="text-zinc-400" size={28} />
    },
    {
      title: "Performance Tracking",
      description: "Real-time analytics, ranking reports, and ROI measurement. Complete visibility into your SEO performance.",
      icon: <TrendingUp className="text-zinc-400" size={28} />
    }
  ];

  return (
    <section className="py-24 px-6 bg-zinc-950" id="services">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">What We Optimize</span>
            <span className="relative inline-flex ml-2 align-middle">
              <span className="animate-ping absolute inline-flex h-3 w-3 rounded-sm bg-green-400 opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-sm bg-green-500"></span>
            </span>
          </h2>
          <p className="text-zinc-500 text-lg max-w-2xl">
            Comprehensive SEO services covering every ranking factor. From technical foundations to content excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {seoServices.map((service, index) => (
            <div
              key={index}
              className="group relative bg-zinc-900/50 border border-zinc-800 rounded-lg p-8 hover:border-green-500/50 transition-all duration-300 hover:bg-zinc-900/80"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-zinc-800/50 rounded-lg group-hover:bg-green-500/10 transition-colors">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-green-500/0 via-green-500/5 to-green-500/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// How We Work Section
const HowWeWork = () => {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      id: 1,
      phase: "PHASE_01",
      title: "Technical Audit",
      description: "Deep dive into your site architecture. We identify crawl errors, speed issues, mobile problems, and technical debt holding back your rankings."
    },
    {
      id: 2,
      phase: "PHASE_02",
      title: "Keyword Research",
      description: "Data-driven keyword targeting. We find high-value search terms your customers actually use, not vanity metrics."
    },
    {
      id: 3,
      phase: "PHASE_03",
      title: "On-Page Optimization",
      description: "Strategic content optimization. Meta tags, headers, internal linking, and content structure that signals relevance to search engines."
    },
    {
      id: 4,
      phase: "PHASE_04",
      title: "Authority Building",
      description: "White-hat link building. We earn high-quality backlinks from authoritative sources in your industry."
    },
    {
      id: 5,
      phase: "PHASE_05",
      title: "Monitor & Optimize",
      description: "Continuous improvement. We track rankings, analyze performance, and iterate based on real data."
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stepId = parseInt(entry.target.getAttribute('data-step-id') || '0');
            setVisibleSteps(prev => [...new Set([...prev, stepId])]);
          }
        });
      },
      { threshold: 0.5 }
    );

    const stepElements = containerRef.current?.querySelectorAll('[data-step-id]');
    stepElements?.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 px-6 bg-[#09090b]" ref={containerRef}>
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-20">
          <h2 className="text-4xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">How We Rank</span>
            <span className="relative inline-flex ml-2 align-middle">
              <span className="animate-ping absolute inline-flex h-3 w-3 rounded-sm bg-green-400 opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-sm bg-green-500"></span>
            </span>
          </h2>
          <div className="text-xs font-mono text-zinc-600 animate-pulse">SCANNING SECTOR...</div>
        </div>

        <p className="text-zinc-400 mb-16 text-center max-w-lg mx-auto">
          From technical foundations to page one dominance. A systematic approach to organic growth.
        </p>

        <div className="relative">
          <div className="absolute left-1/2 top-0 w-px bg-zinc-800 transform -translate-x-1/2 hidden md:block" style={{ height: 'calc(100% - 6rem)' }}></div>

          <div
            className="absolute left-1/2 top-0 w-px bg-green-500 transform -translate-x-1/2 hidden md:block transition-all duration-[2000ms] ease-linear shadow-[0_0_10px_rgba(34,197,94,0.5)]"
            style={{ height: visibleSteps.length === steps.length ? 'calc(100% - 6rem)' : `${(visibleSteps.length / steps.length) * (100 - 15)}%` }}
          ></div>

          <div className="space-y-12 md:space-y-24 relative">
            {steps.map((step, index) => (
              <div
                key={step.id}
                data-step-id={step.id}
                className={`flex flex-col md:flex-row items-center gap-8 md:gap-0 transition-all duration-700 ${
                  visibleSteps.includes(step.id) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                {/* Left Side (odd steps) */}
                {index % 2 === 0 && (
                  <>
                    <div className="flex-1 md:text-right md:pr-12 order-2 md:order-1">
                      <div className="inline-block md:block">
                        <p className="text-xs font-mono text-green-500 mb-2 tracking-widest">{step.phase}</p>
                        <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                        <p className="text-zinc-400 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                    <div className="relative z-10 flex items-center justify-center order-1 md:order-2">
                      <div className={`w-6 h-6 rounded-full border-4 ${visibleSteps.includes(step.id) ? 'border-green-500 bg-green-500' : 'border-zinc-800 bg-zinc-900'} transition-all duration-500 shadow-[0_0_20px_rgba(34,197,94,0.3)]`}></div>
                    </div>
                    <div className="flex-1 order-3"></div>
                  </>
                )}

                {/* Right Side (even steps) */}
                {index % 2 === 1 && (
                  <>
                    <div className="flex-1 order-3 md:order-1"></div>
                    <div className="relative z-10 flex items-center justify-center order-1 md:order-2">
                      <div className={`w-6 h-6 rounded-full border-4 ${visibleSteps.includes(step.id) ? 'border-green-500 bg-green-500' : 'border-zinc-800 bg-zinc-900'} transition-all duration-500 shadow-[0_0_20px_rgba(34,197,94,0.3)]`}></div>
                    </div>
                    <div className="flex-1 md:pl-12 order-2 md:order-3">
                      <div className="inline-block md:block">
                        <p className="text-xs font-mono text-green-500 mb-2 tracking-widest">{step.phase}</p>
                        <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                        <p className="text-zinc-400 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Testimonial Section
const Testimonial = () => {
  return (
    <section className="py-24 px-6 bg-zinc-950">
      <div className="max-w-4xl mx-auto">
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-xs font-mono text-zinc-500 tracking-widest">VERIFIED_CLIENT</span>
            </div>

            <blockquote className="text-xl md:text-2xl text-white font-medium mb-8 leading-relaxed">
              "Our organic traffic increased by 340% in 6 months. Seam Media's technical SEO expertise and strategic approach delivered results we didn't think were possible."
            </blockquote>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white font-bold">
                JM
              </div>
              <div>
                <div className="text-white font-semibold">James Morrison</div>
                <div className="text-zinc-500 text-sm">Director, BuildCo Melbourne</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Ready to Rank Section
const ReadyToRank = () => {
  return (
    <section className="py-32 px-6 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-900/20 via-black to-black"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 mb-8">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-green-500 font-mono text-xs tracking-widest">SYSTEM READY</span>
        </div>

        <div className="relative mb-12 group cursor-default">
            <h2 className="text-7xl md:text-9xl font-black text-white tracking-tighter uppercase relative z-10">
                Ready To<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-800">Rank?</span>
            </h2>
        </div>

        <p className="text-zinc-400 text-xl mb-4">Stop guessing. Start ranking.</p>
        <p className="text-zinc-500 mb-12">We turn "invisible" into "page one".</p>

        <div className="relative inline-block group">
          <div className="absolute -bottom-2 left-1/2 -z-10 h-8 w-3/4 -translate-x-1/2 bg-white/20 blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-40" />
          <a
            href="#contact"
            className="relative block overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-950"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_0%,#ffffff_10%,#00000000_50%)] opacity-0 transition-opacity duration-100 group-hover:opacity-100" />
            <span className="relative flex h-full w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-10 py-5 text-lg font-bold text-white ring-1 ring-white/10 transition-colors duration-300 group-hover:bg-slate-900/80 group-hover:ring-transparent">
              <span>Get In Touch</span>
              <ArrowUpRight size={20} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

// Contact Section
const ContactSection = () => {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mdkyqykl", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        const data = await response.json();
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Network error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section className="py-24 px-6 bg-[#09090b]" id="contact">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Contact Info */}
          <div>
            <h2 className="text-5xl md:text-6xl font-bold mb-12">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">Contact</span>
              {' '}
              <span className="text-white">us</span>
            </h2>

            <div className="space-y-8">
              <div className="group">
                <p className="text-xs font-mono text-zinc-600 uppercase tracking-widest mb-2">Email Us</p>
                <a
                  href="mailto:contact@seammedia.com.au"
                  className="text-xl md:text-2xl font-medium text-zinc-300 hover:text-white transition-colors flex items-center gap-2"
                >
                  contact@seammedia.com.au
                </a>
              </div>

              <div className="group">
                <p className="text-xs font-mono text-zinc-600 uppercase tracking-widest mb-2">Call Us</p>
                <a
                  href="tel:+61402642746"
                  className="text-xl md:text-2xl font-medium text-zinc-300 hover:text-white transition-colors flex items-center gap-2"
                >
                  0402 642 746
                </a>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Row */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="block text-xs font-mono text-zinc-500 uppercase tracking-wide">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full bg-zinc-900/30 border border-white/10 rounded-lg px-4 py-3 text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-green-500/50 focus:ring-1 focus:ring-green-500/50 transition-all hover:border-white/20"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="block text-xs font-mono text-zinc-500 uppercase tracking-wide">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full bg-zinc-900/30 border border-white/10 rounded-lg px-4 py-3 text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-green-500/50 focus:ring-1 focus:ring-green-500/50 transition-all hover:border-white/20"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-xs font-mono text-zinc-500 uppercase tracking-wide">
                  Email (required)
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="john@example.com"
                  className="w-full bg-zinc-900/30 border border-white/10 rounded-lg px-4 py-3 text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-green-500/50 focus:ring-1 focus:ring-green-500/50 transition-all hover:border-white/20"
                />
              </div>

              {/* Service Dropdown */}
              <div className="space-y-2">
                <label htmlFor="service" className="block text-xs font-mono text-zinc-500 uppercase tracking-wide">
                  Service
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full bg-zinc-900/30 border border-white/10 rounded-lg px-4 py-3 text-zinc-100 focus:outline-none focus:border-green-500/50 focus:ring-1 focus:ring-green-500/50 transition-all hover:border-white/20"
                >
                  <option value="">Select a service</option>
                  <option value="SEO">SEO</option>
                  <option value="Local SEO">Local SEO</option>
                  <option value="Technical SEO">Technical SEO</option>
                  <option value="Content Strategy">Content Strategy</option>
                  <option value="Link Building">Link Building</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="block text-xs font-mono text-zinc-500 uppercase tracking-wide">
                  Project Description
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us about your SEO goals and current challenges..."
                  className="w-full bg-zinc-900/30 border border-white/10 rounded-lg px-4 py-3 text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-green-500/50 focus:ring-1 focus:ring-green-500/50 transition-all hover:border-white/20 resize-y min-h-[120px]"
                />
              </div>

              {/* Submit Button */}
              <div className="relative inline-block group w-full">
                <div className="absolute -bottom-2 left-1/2 -z-10 h-8 w-3/4 -translate-x-1/2 bg-white/20 blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-40" />
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="relative block overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-950 w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_0%,#ffffff_10%,#00000000_50%)] opacity-0 transition-opacity duration-100 group-hover:opacity-100" />
                  <span className="relative flex h-full w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-8 py-4 font-bold text-white ring-1 ring-white/10 transition-colors duration-300 group-hover:bg-slate-900/80 group-hover:ring-transparent">
                    <span>{status === "submitting" ? "Sending..." : "Submit Inquiry"}</span>
                    <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </div>

              {/* Success Message */}
              {status === "success" && (
                <div className="bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-3 rounded-lg">
                  <p className="font-medium">✓ Thank you! We'll be in touch soon.</p>
                </div>
              )}

              {/* Error Message */}
              {status === "error" && (
                <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-lg">
                  <p className="font-medium">✗ {errorMessage || "Something went wrong. Please try again."}</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

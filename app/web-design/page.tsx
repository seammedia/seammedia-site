"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, ShoppingBag, FileText, Code, Briefcase, Search, PenTool, Code2, Rocket, ArrowUpRight, Send } from "lucide-react";

export default function WebDesignPage() {
  return (
    <>
      <Hero />
      <WhatWeBuild />
      <HowWeWork />
      <Testimonial />
      <ReadyToScale />
      <ContactSection />
    </>
  );
}

// Scramble Text Effect Component
const ScrambleText = ({ text, className = "" }: { text: string; className?: string }) => {
  const [displayText, setDisplayText] = useState('');
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&";

  useEffect(() => {
    let iteration = 0;
    let interval: any;

    const startScramble = () => {
        clearInterval(interval);
        interval = setInterval(() => {
          setDisplayText(text.split("").map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          }).join(""));

          if (iteration >= text.length) {
            clearInterval(interval);
          }

          iteration += 1 / 3;
        }, 30);
    };

    setTimeout(startScramble, 500);
    return () => clearInterval(interval);
  }, [text]);

  return <span className={className}>{displayText}</span>;
};

// Hero Section
const Hero = () => {
  return (
    <section className="pt-40 pb-24 px-6 min-h-[80vh] flex flex-col justify-center bg-[#09090b]">
      <div className="max-w-6xl mx-auto w-full">
        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 mb-8 font-mono text-xs tracking-widest text-zinc-400">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          IDENTITY: SEAM MEDIA
        </div>

        <h1 className="text-6xl md:text-8xl font-bold leading-[0.95] tracking-tight mb-8 max-w-5xl group">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400">
            <ScrambleText text="Building Digital" />
          </span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 to-zinc-700">
            <ScrambleText text="Products That" />
          </span>
          <br />
          <span className="inline-block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400">
              <ScrambleText text="Drive " />
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400 group-hover:from-orange-500 group-hover:to-orange-600 transition-all duration-300">
              <ScrambleText text="Growth" />
            </span>
          </span>
        </h1>

        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed mb-12">
          We craft high-performance websites and e-commerce experiences for ambitious Australian brands. Aesthetic precision meets technical excellence.
        </p>

        <div className="flex flex-wrap gap-4">
          <div className="relative inline-block group">
            <div className="absolute -bottom-2 left-1/2 -z-10 h-8 w-3/4 -translate-x-1/2 bg-white/20 blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-40" />
            <a
              href="#contact"
              className="relative block overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_0%,#ffffff_10%,#00000000_50%)] opacity-0 transition-opacity duration-100 group-hover:opacity-100" />
              <span className="relative flex h-full w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-8 py-4 text-base font-medium text-white ring-1 ring-white/10 transition-colors duration-300 group-hover:bg-slate-900/80 group-hover:ring-transparent">
                <span>Start a Project</span>
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

// Typewriter Component
const TypewriterText = ({ text }: { text: string }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => {
        if (index >= text.length) {
          clearInterval(interval);
          return prev;
        }
        const nextChar = text.charAt(index);
        index++;
        return prev + nextChar;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <span>
      {displayedText}
      <span className="inline-block w-3 h-6 ml-1 align-middle bg-green-500 animate-blink"></span>
    </span>
  );
};

// What We Build Section
const WhatWeBuild = () => {
  const buildItems = [
    {
      title: "Shopify/Ecommerce",
      description: "High-converting online stores built for scale. Inventory management, payment gateways, and seamless checkout flows.",
      tags: ["Liquid", "React", "Conversion"],
      icon: <ShoppingBag className="text-zinc-400" size={28} />
    },
    {
      title: "Wordpress",
      description: "Flexible content management systems tailored to your brand. Easy to edit, SEO-optimized, and infinitely scalable.",
      tags: ["CMS", "PHP", "Elementor"],
      icon: <FileText className="text-zinc-400" size={28} />
    },
    {
      title: "Custom Coded",
      description: "Bespoke web applications built with modern frameworks like React and Next.js for ultimate performance and control.",
      tags: ["React", "Next.js", "Node"],
      icon: <Code className="text-zinc-400" size={28} />
    },
    {
      title: "Service Based",
      description: "Lead generation websites designed to build trust and capture inquiries for professional service businesses.",
      tags: ["Lead Gen", "Design", "Speed"],
      icon: <Briefcase className="text-zinc-400" size={28} />
    }
  ];

  return (
    <section className="py-24 px-6 bg-zinc-950" id="services">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">What We Build</span>
            <span className="relative inline-flex ml-2 align-middle">
              <span className="animate-ping absolute inline-flex h-3 w-3 rounded-sm bg-green-400 opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-sm bg-green-500"></span>
            </span>
          </h2>
          <p className="text-zinc-500 text-lg max-w-2xl">
            Visualizing the architecture of high-impact digital deployments and strategic outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {buildItems.map((item, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-zinc-900/30 border border-white/5 hover:border-white/10 hover:bg-zinc-900 transition-all duration-300 h-full flex flex-col"
            >
              <div className="flex justify-between items-start mb-8">
                 <div className="p-3 bg-zinc-800/50 rounded-xl border border-white/5 group-hover:scale-105 transition-transform">
                    {item.icon}
                 </div>
                 <div className="flex gap-2">
                     <span className="text-xs font-mono text-zinc-500 border border-zinc-800 px-2 py-1 rounded bg-zinc-900">
                       {item.tags[0]}
                     </span>
                 </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">
                  {item.title}
              </h3>
              <p className="text-zinc-400 leading-relaxed mb-8 flex-grow">
                  {item.description}
              </p>

              <div className="border-t border-white/5 pt-6 flex justify-between items-center">
                  <div className="flex gap-2">
                      {item.tags.slice(1).map(tag => (
                         <span key={tag} className="text-xs font-mono text-zinc-600 bg-zinc-900/50 px-2 py-1 rounded">
                             {tag}
                         </span>
                     ))}
                  </div>
                  <span className="text-white font-bold text-sm">100% Coverage</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// How We Work Timeline
const HowWeWork = () => {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      id: 1,
      title: "Identify",
      description: "Find the high-leverage problem. What is the actual user need vs the noise?",
      icon: <Search className="text-blue-400" size={24} />,
    },
    {
      id: 2,
      title: "Strategy",
      description: "Architecting the solution. We map out the user journey and technical requirements.",
      icon: <PenTool className="text-purple-400" size={24} />,
    },
    {
      id: 3,
      title: "Development",
      description: "Clean, scalable code. Building the product with modern frameworks and best practices.",
      icon: <Code2 className="text-green-400" size={24} />,
    },
    {
      id: 4,
      title: "Launch",
      description: "Deployment and handover. Ensuring a smooth transition to the live environment.",
      icon: <Rocket className="text-orange-400" size={24} />,
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            steps.forEach((step, index) => {
              setTimeout(() => {
                setVisibleSteps((prev) => [...prev, step.id]);
              }, index * 600);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 px-6 bg-[#09090b]" ref={containerRef}>
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-20">
          <h2 className="text-4xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">How We Work</span>
            <span className="relative inline-flex ml-2 align-middle">
              <span className="animate-ping absolute inline-flex h-3 w-3 rounded-sm bg-green-400 opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-sm bg-green-500"></span>
            </span>
          </h2>
          <div className="text-xs font-mono text-zinc-600 animate-pulse">SCANNING SECTOR...</div>
        </div>

        <p className="text-zinc-400 mb-16 text-center max-w-lg mx-auto">
          From ambiguous idea to shipped product. A systematic approach to chaos.
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
                className={`flex flex-col md:flex-row items-center gap-8 md:gap-0 transition-all duration-700 ${
                  visibleSteps.includes(step.id) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <div className={`flex-1 w-full md:w-auto flex ${index % 2 === 0 ? 'md:justify-end md:pr-12' : 'md:justify-start md:pl-12 order-1 md:order-3'}`}>
                   {index % 2 === 0 ? (
                       <div className="hidden md:block">
                           <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 inline-block shadow-lg">
                               {step.icon}
                           </div>
                       </div>
                   ) : (
                       <div className="bg-zinc-900 border border-white/5 p-8 rounded-2xl w-full max-w-md shadow-xl relative group hover:border-white/20 transition-colors">
                           <div className="md:hidden mb-4">{step.icon}</div>
                           <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                           <p className="text-zinc-400 leading-relaxed">{step.description}</p>
                       </div>
                   )}
                </div>

                <div className="relative z-10 flex items-center justify-center w-8 h-8 order-2">
                  <div className={`w-4 h-4 rounded-full bg-zinc-800 border border-zinc-700 transition-all duration-500 ${visibleSteps.includes(step.id) ? 'bg-green-500 border-green-400 shadow-[0_0_15px_rgba(34,197,94,1)] scale-125' : ''}`}></div>
                </div>

                <div className={`flex-1 w-full md:w-auto flex ${index % 2 === 0 ? 'md:justify-start md:pl-12 order-3' : 'md:justify-end md:pr-12 order-1'}`}>
                    {index % 2 === 0 ? (
                       <div className="bg-zinc-900 border border-white/5 p-8 rounded-2xl w-full max-w-md shadow-xl relative group hover:border-white/20 transition-colors">
                           <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                           <p className="text-zinc-400 leading-relaxed">{step.description}</p>
                       </div>
                   ) : (
                       <div className="hidden md:block">
                           <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 inline-block shadow-lg">
                               {step.icon}
                           </div>
                       </div>
                   )}
                </div>
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
        <div className="bg-zinc-900/20 border border-white/5 rounded-3xl p-12 md:p-20 relative overflow-hidden text-center">
            <div className="flex justify-center mb-12 text-zinc-600">
                <div className="flex items-end gap-1 h-8">
                    {[...Array(15)].map((_, i) => (
                        <div
                            key={i}
                            className="w-1 bg-zinc-600 rounded-full animate-pulse"
                            style={{
                                height: `${Math.random() * 100}%`,
                                animationDelay: `${i * 0.1}s`
                            }}
                        ></div>
                    ))}
                </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-medium text-white leading-relaxed mb-12">
                <span className="text-zinc-500">"</span>
                Seam Media Have Been So Helpful And Have Honestly Helped So Much With Getting Us On Our Feet!
                <span className="text-zinc-500">"</span>
            </h2>

            <div className="flex items-center justify-center gap-3 text-xs font-mono tracking-widest uppercase">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                <span className="text-zinc-500">Margison</span>
                <span className="text-zinc-700">|</span>
                <span className="text-zinc-500">Google Reviews</span>
            </div>
        </div>
      </div>
    </section>
  );
};

// Ready to Scale CTA
const ReadyToScale = () => {
  return (
    <section className="py-40 px-6 bg-black relative overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.05)_0%,rgba(0,0,0,0)_70%)]"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 mb-12 bg-zinc-900/80 border border-zinc-800 px-4 py-1 rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-green-500 font-mono text-xs tracking-widest">SYSTEM READY</span>
        </div>

        <div className="relative mb-12 group cursor-default">
            <h2 className="text-7xl md:text-9xl font-black text-white tracking-tighter uppercase relative z-10">
                Ready To<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-800">Scale?</span>
            </h2>
        </div>

        <p className="text-zinc-400 text-xl mb-4">Stop guessing. Start shipping.</p>
        <p className="text-zinc-500 mb-12">We turn "what if" into "here it is".</p>

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
                  <option value="Web Design">Web Design</option>
                  <option value="SEO">SEO</option>
                  <option value="Social Media Management">Social Media Management</option>
                  <option value="Google Ads">Google Ads</option>
                  <option value="Graphic Design">Graphic Design</option>
                  <option value="Branding">Branding</option>
                  <option value="Photography">Photography</option>
                  <option value="Videography">Videography</option>
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
                  placeholder="Tell us a little bit about your project goals and requirements..."
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

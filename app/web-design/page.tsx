"use client";

import ContactForm from "@/components/ContactForm";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Globe, ShoppingBag, FileText, Code, Briefcase, Search, PenTool, Code2, Rocket, ArrowUpRight } from "lucide-react";

export default function WebDesignPage() {
  return (
    <>
      <Hero />
      <WhatWeBuild />
      <HowWeWork />
      <Testimonial />
      <ReadyToScale />
      <ContactForm />
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

        <h1 className="text-6xl md:text-8xl font-bold text-white leading-[0.95] tracking-tight mb-8 max-w-5xl">
          <ScrambleText text="Building Digital" />
          <br />
          <span className="text-zinc-500">
            <ScrambleText text="Products That" />
          </span>
          <br />
          <ScrambleText text="Drive Growth" />
        </h1>

        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed mb-12">
          We craft high-performance websites and e-commerce experiences for ambitious Australian brands. Aesthetic precision meets technical excellence.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="#contact"
            className="px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-zinc-200 transition-all flex items-center gap-2 group"
          >
            Start a Project
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
          </a>
          <a
            href="#services"
            className="px-8 py-4 bg-zinc-900 text-white border border-zinc-800 font-medium rounded-full hover:bg-zinc-800 transition-all flex items-center gap-2"
          >
            View Portfolio
            <Globe size={18} className="text-zinc-500"/>
          </a>
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What We Build<span className="inline-block w-3 h-8 bg-green-600 ml-2 align-middle"></span>
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
          <h2 className="text-4xl font-bold text-white">
            How We Work <span className="inline-block w-3 h-8 bg-green-600 ml-2 align-middle"></span>
          </h2>
          <div className="text-xs font-mono text-zinc-600 animate-pulse">SCANNING SECTOR...</div>
        </div>

        <p className="text-zinc-400 mb-16 text-center max-w-lg mx-auto">
          From ambiguous idea to shipped product. A systematic approach to chaos.
        </p>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-zinc-800 transform -translate-x-1/2 hidden md:block"></div>

          <div
            className="absolute left-1/2 top-0 w-px bg-green-500 transform -translate-x-1/2 hidden md:block transition-all duration-[2000ms] ease-linear shadow-[0_0_10px_rgba(34,197,94,0.5)]"
            style={{ height: `${(visibleSteps.length / steps.length) * 100}%` }}
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

        <a
          href="#contact"
          className="inline-flex px-10 py-5 bg-white text-black font-bold text-lg rounded-xl hover:scale-105 transition-transform duration-200 items-center gap-2"
        >
            Get In Touch
            <ArrowUpRight size={20} />
        </a>
      </div>
    </section>
  );
};

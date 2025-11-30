"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Instagram, Users, BarChart3, Calendar, Search, Target, Zap, Rocket, ArrowUpRight, Send } from "lucide-react";
import DotScreenShader from "@/components/DotShader";
import Image from "next/image";

export default function SocialMediaPage() {
  return (
    <>
      <Hero />
      <WhatWeOffer />
      <OurWork />
      <HowWeWork />
      <Testimonial />
      <ReadyToGrow />
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
    <section className="pt-40 pb-24 px-6 min-h-[80vh] flex flex-col justify-center bg-[#09090b] relative overflow-hidden">
      {/* Dot Shader Background */}
      <div className="absolute inset-0 z-0">
        <DotScreenShader />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 mb-8 font-mono text-xs tracking-widest text-zinc-400">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
          </span>
          IDENTITY: SEAM MEDIA
        </div>

        <h1 className="text-6xl md:text-8xl font-bold leading-[0.95] tracking-tight mb-8 max-w-5xl group">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400">
            <ScrambleText text="Building Your" />
          </span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 to-zinc-700">
            <ScrambleText text="Social Media" />
          </span>
          <br />
          <span className="inline-block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400 group-hover:from-pink-500 group-hover:to-pink-600 transition-all duration-300">
              <ScrambleText text="Presence" />
            </span>
          </span>
        </h1>

        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed mb-12">
          We manage your social media so you can focus on your business. Content creation, engagement, and growth strategies that actually work.
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
                <span>Start Growing</span>
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
  const offerItems = [
    {
      title: "Content Creation",
      description: "Engaging, high-quality content tailored to your brand. Eye-catching graphics and compelling copy that resonates with your audience.",
      tags: ["Graphics", "Copy", "Video"],
      icon: <Instagram className="text-zinc-400" size={28} />
    },
    {
      title: "Community Management",
      description: "Active engagement with your followers. We respond to comments, messages, and build meaningful relationships with your audience.",
      tags: ["Engagement", "DMs", "Comments"],
      icon: <Users className="text-zinc-400" size={28} />
    },
    {
      title: "Analytics & Reporting",
      description: "Track performance with detailed monthly reports. Insights and recommendations to continuously improve your results.",
      tags: ["Insights", "Reports", "Growth"],
      icon: <BarChart3 className="text-zinc-400" size={28} />
    },
    {
      title: "Strategy & Planning",
      description: "Data-driven social media strategies aligned with your business goals. Content calendars and campaign planning.",
      tags: ["Planning", "Strategy", "Calendar"],
      icon: <Calendar className="text-zinc-400" size={28} />
    }
  ];

  return (
    <section className="py-24 px-6 bg-zinc-950" id="services">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">What We Offer</span>
            <span className="relative inline-flex ml-2 align-middle">
              <span className="animate-ping absolute inline-flex h-3 w-3 rounded-sm bg-pink-400 opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-sm bg-pink-500"></span>
            </span>
          </h2>
          <p className="text-zinc-500 text-lg max-w-2xl">
            Complete social media management to build your brand and grow your audience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {offerItems.map((item, index) => (
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

              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-pink-400 transition-colors">
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
                  <span className="text-white font-bold text-sm">Full Service</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Our Work Gallery
const OurWork = () => {
  const [activeId, setActiveId] = useState(2); // middle card active by default

  const cards = [
    {
      id: 1,
      title: "BLVD Drinks",
      tag: "Lifestyle Brand",
      image: "/images/blvd_drinks.png",
    },
    {
      id: 2,
      title: "Clamroc Seafood",
      tag: "Construction",
      image: "/images/clamroc01.png",
    },
    {
      id: 3,
      title: "Coffee Culture",
      tag: "Cafe",
      image: "/images/coffee01.png",
    },
    {
      id: 4,
      title: "Vitasoy",
      tag: "Consumer Brand",
      image: "/images/vitasoy1.png",
    },
    {
      id: 5,
      title: "Gobble Up",
      tag: "Food & Beverage",
      image: "/images/gobbleupmelbourne01.png",
    },
  ];

  return (
    <section className="py-24 px-6 bg-black overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">Our Work</span>
            <span className="relative inline-flex ml-2 align-middle">
              <span className="animate-ping absolute inline-flex h-3 w-3 rounded-sm bg-pink-400 opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-sm bg-pink-500"></span>
            </span>
          </h2>
        </div>

        {/* Image Gallery */}
        <div className="relative">
          <div className="relative mx-auto flex h-[480px] items-center justify-center">
            {cards.map((card, index) => {
              const isActive = card.id === activeId;
              const totalCards = cards.length;
              const middleIndex = Math.floor(totalCards / 2);
              const relativePosition = index - middleIndex;

              // Calculate horizontal offset based on position - wider spacing
              const baseOffset = 200;
              const translateX = relativePosition * baseOffset;

              // Stagger vertically - more pronounced
              const translateY = Math.abs(relativePosition) === 2 ? 30 : Math.abs(relativePosition) === 1 ? 15 : 0;

              // Slight rotation for outer cards
              const rotation = relativePosition * -5;

              return (
                <button
                  key={card.id}
                  type="button"
                  onClick={() => setActiveId(card.id)}
                  aria-pressed={isActive}
                  className={`
                    group absolute w-48 md:w-56 cursor-pointer overflow-hidden rounded-3xl border border-zinc-700/70 bg-zinc-900/70 shadow-xl backdrop-blur-sm transition-all duration-500 ease-out
                    ${isActive ? 'z-30 scale-105 shadow-2xl shadow-pink-500/20' : 'z-10 scale-90 opacity-60 hover:opacity-90 hover:scale-95'}
                  `}
                  style={{
                    transform: `translateX(${translateX}px) translateY(${translateY}px) rotate(${isActive ? 0 : rotation}deg)`,
                    transformOrigin: 'center center',
                  }}
                >
                  <div className="relative h-72 md:h-80 w-full overflow-hidden">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Gradient overlay */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Tag pill */}
                    <div className="absolute left-3 top-3">
                      <span className="inline-flex items-center rounded-full bg-black/60 px-3 py-1 text-[10px] font-medium uppercase tracking-widest text-white backdrop-blur">
                        {card.tag}
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Soft glow behind cards */}
          <div className="pointer-events-none absolute inset-x-10 bottom-4 -z-10 h-40 rounded-full bg-pink-500/20 blur-3xl" />
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
      title: "Audit",
      description: "Analysing your current social presence. Understanding your audience, competitors, and opportunities for growth.",
      icon: <Search className="text-blue-400" size={24} />,
    },
    {
      id: 2,
      title: "Strategize",
      description: "Building a custom content strategy. Defining your brand voice, content pillars, and posting schedule.",
      icon: <Target className="text-yellow-400" size={24} />,
    },
    {
      id: 3,
      title: "Execute",
      description: "Creating and posting engaging content. Managing your community and driving meaningful engagement.",
      icon: <Zap className="text-pink-400" size={24} />,
    },
    {
      id: 4,
      title: "Optimise",
      description: "Analysing performance and refining strategy. Continuous improvement based on data and insights.",
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">Our Approach</span>
            <span className="relative inline-flex ml-2 align-middle">
              <span className="animate-ping absolute inline-flex h-3 w-3 rounded-sm bg-pink-400 opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-sm bg-pink-500"></span>
            </span>
          </h2>
          <div className="text-xs font-mono text-zinc-600 animate-pulse">GROWING...</div>
        </div>

        <p className="text-zinc-400 mb-16 text-center max-w-lg mx-auto">
          From audit to optimisation. A systematic approach to social media success.
        </p>

        <div className="relative">
          <div className="absolute left-1/2 top-0 w-px bg-zinc-800 transform -translate-x-1/2 hidden md:block" style={{ height: 'calc(100% - 6rem)' }}></div>

          <div
            className="absolute left-1/2 top-0 w-px bg-pink-500 transform -translate-x-1/2 hidden md:block transition-all duration-[2000ms] ease-linear shadow-[0_0_10px_rgba(236,72,153,0.5)]"
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
                  <div className={`w-4 h-4 rounded-full bg-zinc-800 border border-zinc-700 transition-all duration-500 ${visibleSteps.includes(step.id) ? 'bg-pink-500 border-pink-400 shadow-[0_0_15px_rgba(236,72,153,1)] scale-125' : ''}`}></div>
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

// Testimonial Section with Review Rotator
const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const featuredReviews = [
    {
      id: 1,
      highlight: "Quality educated and engaging imaging.",
      content: "If you're looking for a company to help with your social media, google reviews, website etc.... Look no further, these guys are the ones!!! They do plenty of research on the industry you're in, and post quality educated and engaging imaging and text. Great company to work with.",
      author: "Rossy Pest Services",
      role: "Google Review",
    },
    {
      id: 2,
      highlight: "Results achieved have been truly fantastic.",
      content: "I am delighted to praise Sean Media services for their exceptional communication skills and outstanding customer service. The results achieved through their strategies have been truly fantastic, exceeding my expectations. I am extremely satisfied and wholeheartedly recommend their services.",
      author: "Estela Aiello",
      role: "Google Review",
    }
  ];

  const allReviews = [
    {
      id: 1,
      author: "Calvin Yung",
      role: "1 review • 0 photos",
      date: "4 weeks ago",
      rating: 5,
      content: "Highly recommend Heath, very happy and grateful for his service so far. He's been helping us manage our website SEO and restructuring, he's a man of his words, and he'll do exactly what he says. Easy to communicate, very professional, very knowledgeable and I can tell he actually cares about helping your business grow."
    },
    {
      id: 2,
      author: "Lacey Thorn",
      role: "Local Guide • 20 reviews",
      date: "21 May 2024",
      rating: 5,
      content: "Heath is nothing but amazing to work with! His communication was clear and he kept me well updated throughout the whole process of building our website. It turned out even better than I imagined, he really listened and saw our vision. He is responsive to any updates that need to be made."
    },
    {
      id: 3,
      author: "Brodie Threlfall",
      role: "1 review • 0 photos",
      date: "2 May 2024",
      rating: 5,
      content: "Seam Media exceeded our expectations with their stellar work on our new website design. After searching for a web designer in Frankston for quite some time, we're thrilled to have found Seam Media. Their exceptional performance speaks volumes, and we wholeheartedly endorse their services."
    },
    {
      id: 4,
      author: "Rossy Pest Services",
      role: "Local Guide • 21 reviews",
      date: "7 Jul 2023",
      rating: 5,
      content: "If you're looking for a company to help with your social media, google reviews, website etc.... Look no further, these guys are the ones!!! They do plenty of research on the industry you're in, and post quality educated and engaging imaging and text. Great company to work with."
    },
    {
      id: 5,
      author: "Estela Aiello",
      role: "Local Guide • 15 reviews",
      date: "5 Jul 2023",
      rating: 5,
      content: "I am delighted to praise Sean Media services for their exceptional communication skills and outstanding customer service. The results achieved through their strategies have been truly fantastic, exceeding my expectations. I am extremely satisfied and wholeheartedly recommend their services."
    }
  ];

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % featuredReviews.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [activeIndex, isHovered, featuredReviews.length]);

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % featuredReviews.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + featuredReviews.length) % featuredReviews.length);
  };

  const activeReview = featuredReviews[activeIndex];

  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-2">Testimonials</h2>
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">
              Loved by fast-growing<br/>teams everywhere.
            </span>
          </h1>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto lg:h-[500px]">

          {/* Featured Review Rotator */}
          <div
            className="lg:col-span-7 h-[400px] lg:h-full relative bg-zinc-900 rounded-[2.5rem] overflow-hidden border border-zinc-800 p-8 md:p-12 flex flex-col justify-between"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-zinc-800/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            {/* Navigation */}
            <div className="absolute top-8 right-8 flex space-x-2 z-20">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center transition-colors text-white"
                aria-label="Previous review"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center transition-colors text-white"
                aria-label="Next review"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="relative flex-1 flex items-center">
              <div
                key={activeIndex}
                className="w-full transition-all duration-500"
                style={{
                  opacity: 1,
                  transform: 'translateX(0)',
                }}
              >
                <div className="mb-6">
                  <span className="inline-block p-3 rounded-2xl bg-zinc-800/50 text-pink-400 mb-6">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                    </svg>
                  </span>
                  <h2 className="text-2xl md:text-4xl font-medium leading-tight text-white mb-4">
                    "{activeReview.highlight}"
                  </h2>
                  <p className="text-zinc-400 text-lg leading-relaxed">
                    {activeReview.content}
                  </p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="relative z-10 pt-6 border-t border-zinc-800/50 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center text-lg font-bold text-white">
                {activeReview.author.charAt(0)}
              </div>
              <div>
                <div className="text-white font-medium">{activeReview.author}</div>
                <div className="text-zinc-500 text-sm">{activeReview.role}</div>
              </div>
              <div className="ml-auto flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>

          {/* Stat Card */}
          <div className="lg:col-span-5 h-[300px] lg:h-full bg-zinc-950 rounded-[2.5rem] border border-zinc-800 p-8 md:p-12 flex flex-col justify-center relative overflow-hidden group">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-pink-600/10 rounded-full blur-[80px] group-hover:bg-pink-600/20 transition-all duration-700" />

            <div className="relative z-10">
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-7xl md:text-8xl font-bold tracking-tighter text-white">5.0</span>
                <span className="text-4xl md:text-5xl font-bold text-pink-500">/5</span>
              </div>

              <div className="space-y-4">
                <div className="h-12 w-1 bg-pink-500 rounded-full mb-6" />

                <h3 className="text-xl md:text-2xl font-medium text-zinc-200">
                  Perfect rating across all platforms.
                </h3>

                <p className="text-zinc-500 leading-relaxed">
                  "We pride ourselves on engagement. From content creation to community management, our clients trust us to grow their social presence."
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-zinc-900 flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1,2,3].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-zinc-800 flex items-center justify-center text-xs text-zinc-400">
                      User
                    </div>
                  ))}
                </div>
                <span className="text-sm text-zinc-500">Trusted by 50+ local businesses</span>
              </div>
            </div>
          </div>

        </div>

        {/* Marquee Reviews */}
        <div className="pt-12 relative w-full overflow-hidden">
          {/* Fade masks */}
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-black to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-black to-transparent pointer-events-none" />

          {/* Scrolling container */}
          <div className="flex animate-marquee">
            {/* Duplicate reviews 3 times for seamless loop */}
            {[...allReviews, ...allReviews, ...allReviews].map((review, idx) => (
              <div
                key={`${review.id}-${idx}`}
                className="w-[350px] md:w-[400px] flex-shrink-0 bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6 mr-6 hover:bg-zinc-800 transition-colors duration-300"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3.5 h-3.5 fill-yellow-500 text-yellow-500" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-zinc-600 text-xs ml-2">{review.date}</span>
                </div>

                <p className="text-zinc-300 text-sm leading-relaxed mb-6 line-clamp-3">
                  "{review.content}"
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-zinc-700 flex items-center justify-center text-xs text-zinc-300 font-bold">
                    {review.author.charAt(0)}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-zinc-200 text-xs font-semibold">{review.author}</span>
                    <span className="text-zinc-600 text-[10px]">{review.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </section>
  );
};

// Ready to Grow CTA
const ReadyToGrow = () => {
  return (
    <section className="py-40 px-6 bg-black relative overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.05)_0%,rgba(0,0,0,0)_70%)]"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 mb-12 bg-zinc-900/80 border border-zinc-800 px-4 py-1 rounded-full">
            <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"></div>
            <span className="text-pink-500 font-mono text-xs tracking-widest">GROWTH READY</span>
        </div>

        <div className="relative mb-12 group cursor-default">
            <h2 className="text-7xl md:text-9xl font-black text-white tracking-tighter uppercase relative z-10">
                Ready To<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-800">Grow?</span>
            </h2>
        </div>

        <p className="text-zinc-400 text-xl mb-4">Stop posting randomly. Start growing strategically.</p>
        <p className="text-zinc-500 mb-12">We turn followers into customers.</p>

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
                    className="w-full bg-zinc-900/30 border border-white/10 rounded-lg px-4 py-3 text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-pink-500/50 focus:ring-1 focus:ring-pink-500/50 transition-all hover:border-white/20"
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
                    className="w-full bg-zinc-900/30 border border-white/10 rounded-lg px-4 py-3 text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-pink-500/50 focus:ring-1 focus:ring-pink-500/50 transition-all hover:border-white/20"
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
                  className="w-full bg-zinc-900/30 border border-white/10 rounded-lg px-4 py-3 text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-pink-500/50 focus:ring-1 focus:ring-pink-500/50 transition-all hover:border-white/20"
                />
              </div>

              {/* Service Dropdown */}
              <div className="space-y-2">
                <label htmlFor="service" className="block text-xs font-mono text-zinc-500 uppercase tracking-wide">
                  Social Media Service
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full bg-zinc-900/30 border border-white/10 rounded-lg px-4 py-3 text-zinc-100 focus:outline-none focus:border-pink-500/50 focus:ring-1 focus:ring-pink-500/50 transition-all hover:border-white/20"
                >
                  <option value="">Select a service</option>
                  <option value="Content Creation">Content Creation</option>
                  <option value="Community Management">Community Management</option>
                  <option value="Social Media Strategy">Social Media Strategy</option>
                  <option value="Full Management">Full Management</option>
                  <option value="Analytics & Reporting">Analytics & Reporting</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="block text-xs font-mono text-zinc-500 uppercase tracking-wide">
                  Tell Us About Your Goals
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="What are your social media goals and challenges?"
                  className="w-full bg-zinc-900/30 border border-white/10 rounded-lg px-4 py-3 text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-pink-500/50 focus:ring-1 focus:ring-pink-500/50 transition-all hover:border-white/20 resize-y min-h-[120px]"
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
                <div className="bg-pink-500/10 border border-pink-500/20 text-pink-400 px-4 py-3 rounded-lg">
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

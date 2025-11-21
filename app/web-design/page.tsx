"use client";

import { Metadata } from "next";
import Section from "@/components/ui/Section";
import ContactForm from "@/components/ContactForm";
import { useEffect, useRef, useState } from "react";

export default function WebDesignPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const services = [
    {
      title: "Custom Website Development",
      description: "Tailored web solutions built from the ground up to match your exact business requirements and brand identity.",
      icon: "⚡",
    },
    {
      title: "E-Commerce Solutions",
      description: "Powerful online stores with seamless checkout experiences that drive sales and customer satisfaction.",
      icon: "🛒",
    },
    {
      title: "Responsive Design",
      description: "Pixel-perfect websites that look stunning and function flawlessly across all devices and screen sizes.",
      icon: "📱",
    },
    {
      title: "Performance Optimization",
      description: "Lightning-fast load times and smooth interactions that keep visitors engaged and boost conversions.",
      icon: "🚀",
    },
    {
      title: "SEO & Analytics",
      description: "Search engine optimized architecture with comprehensive tracking to help your business grow online.",
      icon: "📊",
    },
    {
      title: "Ongoing Support",
      description: "Continuous maintenance, updates, and technical support to keep your website running at peak performance.",
      icon: "🔧",
    },
  ];

  const technologies = [
    "React", "Next.js", "TypeScript", "Tailwind CSS",
    "Node.js", "PostgreSQL", "Vercel", "Stripe"
  ];

  return (
    <>
      {/* Hero Section with Terminal Aesthetic */}
      <div className="relative bg-[#09090b] overflow-hidden" ref={heroRef}>
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-50" />

        {/* Radial gradient following mouse */}
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(34, 197, 94, 0.15), transparent 40%)`,
          }}
        />

        {/* Scanning line effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent animate-scan" />
        </div>

        <Section background="transparent">
          <div className="relative z-10 max-w-5xl mx-auto">
            {/* Terminal Header */}
            <div className="mb-8 font-mono text-sm">
              <span className="text-green-500">seam-media@web-design</span>
              <span className="text-zinc-400">:</span>
              <span className="text-blue-400">~</span>
              <span className="text-zinc-400">$ </span>
              <span className="text-zinc-100">./showcase</span>
              <span className="animate-blink">_</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Premium Web Design<br />
              <span className="text-gradient bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
                That Converts
              </span>
            </h1>

            <p className="text-xl text-zinc-400 leading-relaxed mb-12 max-w-3xl">
              We craft high-performance websites that combine stunning design with cutting-edge technology.
              Every pixel, every interaction, engineered for results.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="group relative px-8 py-4 bg-green-500 hover:bg-green-600 text-black font-semibold rounded-lg transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10">Start Your Project</span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
              </a>
              <a
                href="#services"
                className="px-8 py-4 border-2 border-zinc-700 hover:border-green-500 text-white font-semibold rounded-lg transition-all duration-300"
              >
                View Services
              </a>
            </div>

            {/* Tech Stack */}
            <div className="mt-16 pt-8 border-t border-zinc-800">
              <p className="text-sm text-zinc-500 mb-4 font-mono uppercase tracking-wider">
                Tech Stack //
              </p>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-zinc-900 border border-zinc-800 text-zinc-300 text-sm font-mono rounded-md hover:border-green-500/50 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <style jsx>{`
          @keyframes scan {
            0% { top: 0%; opacity: 0; }
            15% { opacity: 1; }
            85% { opacity: 1; }
            100% { top: 100%; opacity: 0; }
          }

          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }

          .animate-scan {
            animation: scan 2.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          }

          .animate-blink {
            animation: blink 1s step-end infinite;
          }
        `}</style>
      </div>

      {/* Services Grid */}
      <Section background="white" id="services">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              End-to-end web development solutions designed to elevate your digital presence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-8 bg-white border-2 border-gray-200 rounded-2xl hover:border-green-500 hover:shadow-xl transition-all duration-300 cursor-default"
              >
                <div className="text-5xl mb-4 transition-transform group-hover:scale-110 duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Process Section */}
      <div className="bg-[#09090b] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="text-5xl font-bold text-white mb-4">
              Our Process
            </h2>
            <p className="text-xl text-zinc-400">
              A streamlined approach to bringing your vision to life
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your goals and requirements" },
              { step: "02", title: "Design", desc: "Creating stunning visual concepts" },
              { step: "03", title: "Development", desc: "Building with cutting-edge technology" },
              { step: "04", title: "Launch", desc: "Deploying and optimizing for success" },
            ].map((item, index) => (
              <div key={index} className="relative p-6 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-green-500/50 transition-colors">
                <div className="text-6xl font-bold text-zinc-800 mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-zinc-400 text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <Section background="gray">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "100+", label: "Websites Built" },
              { number: "8+", label: "Years Experience" },
              { number: "99%", label: "Client Satisfaction" },
              { number: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-5xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-green-500 to-emerald-600 py-24">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-5xl font-bold text-white mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl text-green-50 mb-8 leading-relaxed">
            Let's discuss your project and create a website that drives real results for your business.
          </p>
          <a
            href="#contact"
            className="inline-block px-10 py-5 bg-white text-green-600 font-bold rounded-lg hover:bg-green-50 transition-colors text-lg shadow-xl"
          >
            Get Started Today
          </a>
        </div>
      </div>

      {/* Contact Form */}
      <div id="contact">
        <ContactForm />
      </div>
    </>
  );
}

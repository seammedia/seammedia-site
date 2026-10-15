"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import DarkSection, { SectionIntro } from "./home/DarkSection";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What does a Digital Marketing Agency actually do?",
      answer:
        "We help businesses grow their online presence through social media management, website design, SEO, Google Ads, graphic design, branding, photography, and videography. We create data-driven strategies that deliver measurable results for your business.",
    },
    {
      question: "Are there any contracts?",
      answer:
        "No! We don't believe in locking our clients into long-term contracts. All of our services are contract-free, so you can cancel anytime. We earn your business every month by delivering results.",
    },
    {
      question: "Where are you located and who do you work with?",
      answer:
        "We're based on the beautiful Mornington Peninsula in Victoria, but we work with clients Australia-wide. Whether you're a local business or a national brand, we can help you achieve your digital marketing goals.",
    },
    {
      question: "How do I know that I will get a return on my investment?",
      answer:
        "We use data to ensure we get results. Every single time. We track key metrics, provide transparent reporting, and continually optimise our strategies based on performance. Our focus is on delivering measurable ROI for your business.",
    },
    {
      question: "Do you work with big or small companies?",
      answer:
        "We work with businesses of all sizes - from start-ups and small businesses to large national corporations. Our services are tailored to meet your specific needs and budget, regardless of company size.",
    },
    {
      question: "What's involved with digital marketing?",
      answer:
        "Digital marketing encompasses everything from social media management and content creation to SEO, paid advertising, website development, and brand strategy. We assess your business goals and create a customised plan that combines the right services to achieve maximum impact.",
    },
  ];

  return (
    <DarkSection className="border-t border-white/5">
      <div className="mx-auto max-w-4xl">
        <SectionIntro eyebrow="FAQ" title="Frequently asked questions" align="centre" />
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const open = openIndex === index;
            return (
              <div key={index} className={`overflow-hidden rounded-2xl border transition-colors duration-200 ${open ? "border-[#00c2d1]/40 bg-[#111111]" : "border-[#262626] bg-[#0f0f0f] hover:border-[#3a3a3a]"}`}>
                <h3>
                  <button
                    onClick={() => setOpenIndex(open ? null : index)}
                    aria-expanded={open}
                    aria-controls={`faq-${index}`}
                    className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left sm:px-8 sm:py-6"
                  >
                    <span className="text-lg font-semibold text-white sm:text-xl">{faq.question}</span>
                    <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-all duration-200 ${open ? "rotate-45 border-[#00c2d1] text-[#00e1f0]" : "border-white/20 text-white"}`} aria-hidden="true">
                      <Plus size={18} />
                    </span>
                  </button>
                </h3>
                {open && (
                  <div id={`faq-${index}`} className="px-6 pb-6 sm:px-8">
                    <p className="text-base leading-relaxed text-gray-400 sm:text-lg">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </DarkSection>
  );
}

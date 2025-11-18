"use client";

import { useState } from "react";
import Section from "./ui/Section";

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
        "We use data to ensure we get results. Every single time. We track key metrics, provide transparent reporting, and continually optimize our strategies based on performance. Our focus is on delivering measurable ROI for your business.",
    },
    {
      question: "Do you work with big or small companies?",
      answer:
        "We work with businesses of all sizes - from start-ups and small businesses to large national corporations. Our services are tailored to meet your specific needs and budget, regardless of company size.",
    },
    {
      question: "What's involved with digital marketing?",
      answer:
        "Digital marketing encompasses everything from social media management and content creation to SEO, paid advertising, website development, and brand strategy. We assess your business goals and create a customized plan that combines the right services to achieve maximum impact.",
    },
  ];

  return (
    <Section background="white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-[44px] font-bold text-gray-900 text-center mb-4" style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '-0.5px' }}>
          Frequently Asked{' '}
          <span className="relative inline-block px-4">
            <span className="relative z-10 text-white">Questions</span>
            <span
              className="absolute inset-0 -inset-x-1 top-[15%] h-[75%] rounded-sm opacity-90"
              style={{
                backgroundColor: '#5e7986',
                transform: 'skewX(-5deg)'
              }}
            ></span>
          </span>
        </h2>

        <div className="mt-16 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg overflow-hidden transition-all duration-200"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-100 transition-colors"
              >
                <span className="text-xl md:text-2xl font-bold text-gray-900 pr-8">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-8 pb-6">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

import { Metadata } from "next";
import Section from "@/components/ui/Section";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Google Ads Management | Seam Media",
  description:
    "Expert Google Ads (AdWords) management in Melbourne. Drive qualified traffic and maximize ROI with data-driven PPC campaigns.",
};

export default function AdwordsPage() {
  const packages = [
    {
      name: "Starter",
      price: "$599",
      period: "per month",
      features: [
        "Google Search Ads",
        "Campaign setup & optimization",
        "Keyword research",
        "Ad copywriting",
        "Monthly reporting",
        "Up to $2,000 ad spend",
      ],
      color: "#6b8e9f",
    },
    {
      name: "Growth",
      price: "$999",
      period: "per month",
      features: [
        "Search + Display Ads",
        "Advanced targeting",
        "A/B testing",
        "Conversion tracking",
        "Remarketing campaigns",
        "Detailed analytics",
        "Up to $5,000 ad spend",
      ],
      color: "#f5b5b5",
      popular: true,
    },
    {
      name: "Professional",
      price: "$1,999",
      period: "per month",
      features: [
        "Full Google Ads suite",
        "Shopping campaigns",
        "Video ads (YouTube)",
        "Advanced automation",
        "Landing page optimization",
        "Dedicated account manager",
        "Up to $15,000 ad spend",
      ],
      color: "#b5a5d5",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Section background="gray">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Google Ads Management
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Drive qualified traffic to your website with expertly managed Google
            Ads campaigns. We maximize your ROI through data-driven strategies
            and continuous optimization.
          </p>
        </div>
      </Section>

      {/* What We Offer */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Our Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">
                Search Advertising
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Appear at the top of Google search results when potential
                customers are actively searching for your products or services.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">
                Display Advertising
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Reach your audience across millions of websites with visually
                engaging display ads that drive brand awareness.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">
                Remarketing
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Re-engage visitors who didn't convert, keeping your brand
                top-of-mind and bringing them back to complete their purchase.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">
                Shopping Campaigns
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Showcase your products directly in Google search results with
                product images, prices, and business information.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Packages */}
      <Section background="gray">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Google Ads Management Packages
          </h2>
          <p className="text-xl text-gray-700">
            Choose the perfect package for your business
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-lg p-8 relative ${
                pkg.popular ? "ring-4 ring-[#f5b5b5]" : ""
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#f5b5b5] text-white px-6 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: pkg.color }}
              >
                <span className="text-3xl">📊</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-2">
                {pkg.name}
              </h3>
              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-gray-900">
                  {pkg.price}
                </span>
                <span className="text-gray-600 ml-2">{pkg.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-green-500 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="block w-full py-3 px-6 text-center bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-lg transition-colors"
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="white">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Grow with Google Ads?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Let's create a high-performing campaign that drives real results for
            your business.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-[#f5b5b5] hover:bg-[#e8a5a5] text-white font-semibold rounded-lg transition-colors text-lg"
          >
            Get In Touch
          </Link>
        </div>
      </Section>

      {/* Contact Form */}
      <ContactForm />
    </>
  );
}

import { Metadata } from "next";
import Section from "@/components/ui/Section";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SEO Services Melbourne | Seam Media",
  description:
    "Expert SEO services in Melbourne. Increase your online visibility, rank higher on Google, and drive more organic traffic to your website.",
};

export default function SEOPage() {
  const services = [
    {
      title: "Local SEO",
      description:
        "Dominate local search results and attract customers in your area. Perfect for Melbourne businesses looking to increase foot traffic and local visibility.",
      icon: "📍",
    },
    {
      title: "On-Page SEO",
      description:
        "Optimize your website content, meta tags, headers, and structure to rank higher in search results and provide better user experience.",
      icon: "📄",
    },
    {
      title: "Technical SEO",
      description:
        "Improve site speed, mobile responsiveness, crawlability, and fix technical issues that prevent search engines from properly indexing your site.",
      icon: "⚙️",
    },
    {
      title: "Link Building",
      description:
        "Build high-quality backlinks from authoritative websites to increase your domain authority and search rankings.",
      icon: "🔗",
    },
  ];

  const packages = [
    {
      name: "SEO Starter",
      price: "$799",
      period: "per month",
      features: [
        "Keyword research",
        "On-page optimization",
        "Technical SEO audit",
        "Monthly reporting",
        "10 hours/month",
      ],
      color: "#6b8e9f",
    },
    {
      name: "SEO Growth",
      price: "$1,499",
      period: "per month",
      features: [
        "Everything in Starter",
        "Local SEO optimization",
        "Content creation",
        "Link building",
        "Competitor analysis",
        "20 hours/month",
      ],
      color: "#f5b5b5",
      popular: true,
    },
    {
      name: "SEO Professional",
      price: "$2,999",
      period: "per month",
      features: [
        "Everything in Growth",
        "Advanced link building",
        "Content marketing",
        "Schema markup",
        "Conversion optimization",
        "40 hours/month",
        "Dedicated account manager",
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
            SEO Services Melbourne
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Increase your online visibility and drive more organic traffic with
            our expert SEO services. We help Melbourne businesses rank higher
            on Google and attract more customers.
          </p>
        </div>
      </Section>

      {/* What We Offer */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Our SEO Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="space-y-4">
                <div className="text-4xl">{service.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Why SEO Matters */}
      <Section background="gray">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Why SEO Matters for Your Business
          </h2>
          <div className="space-y-6 text-lg text-gray-700">
            <p className="leading-relaxed">
              Search Engine Optimization (SEO) is essential for any business
              that wants to succeed online. With over 90% of online experiences
              starting with a search engine, appearing on the first page of
              Google is crucial for attracting customers.
            </p>
            <p className="leading-relaxed">
              Our data-driven SEO strategies focus on delivering measurable
              results. We don't just increase traffic - we attract the right
              visitors who are actively searching for your products or services.
            </p>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                SEO Benefits:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-green-500 flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Increase organic traffic and visibility</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-green-500 flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Build trust and credibility with customers</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-green-500 flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Generate high-quality leads consistently</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-green-500 flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Better ROI compared to paid advertising</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-green-500 flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Long-term sustainable growth</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Packages */}
      <Section background="white">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            SEO Packages
          </h2>
          <p className="text-xl text-gray-700">
            Choose the right package to grow your business
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
                <span className="text-3xl">🔍</span>
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
      <Section background="gray">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Dominate Search Results?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Let's discuss your SEO goals and create a strategy that delivers
            real results.
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

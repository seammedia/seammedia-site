import { Metadata } from "next";
import Section from "@/components/ui/Section";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Social Media Management Services | Seam Media",
  description:
    "Professional social media management services in Melbourne. Build your brand online with expert posting, engagement, and audience growth strategies.",
};

export default function SocialMediaPage() {
  const packages = [
    {
      name: "Starter",
      price: "$299",
      period: "per month",
      features: [
        "8 Posts per month",
        "Content creation",
        "Hashtag research",
        "1 Social platform",
        "Monthly reporting",
      ],
      color: "#6b8e9f",
    },
    {
      name: "Growth",
      price: "$599",
      period: "per month",
      features: [
        "16 Posts per month",
        "Content creation & curation",
        "Hashtag strategy",
        "2 Social platforms",
        "Community management",
        "Monthly analytics report",
      ],
      color: "#f5b5b5",
      popular: true,
    },
    {
      name: "Professional",
      price: "$999",
      period: "per month",
      features: [
        "24 Posts per month",
        "Premium content creation",
        "Advanced hashtag strategy",
        "3 Social platforms",
        "Full community management",
        "Paid ad management",
        "Detailed analytics & insights",
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
            Social Media Management
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            We offer social media management services to help build your brand
            online. This can include posting on your behalf, engaging with your
            followers and growing your audience.
          </p>
        </div>
      </Section>

      {/* What We Offer */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            What We Offer
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">
                Content Creation
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Our team creates engaging, high-quality content tailored to your
                brand and audience. From eye-catching graphics to compelling
                copy, we ensure your social media presence stands out.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">
                Community Management
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We actively engage with your followers, respond to comments and
                messages, and build meaningful relationships with your audience
                to foster brand loyalty.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">
                Strategy & Planning
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We develop data-driven social media strategies aligned with your
                business goals, ensuring every post contributes to your overall
                marketing objectives.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">
                Analytics & Reporting
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Track your social media performance with detailed monthly
                reports. We provide insights and recommendations to continuously
                improve your results.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Packages */}
      <Section background="gray">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Social Media Packages
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
                <span className="text-3xl">📱</span>
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
            Ready to Grow Your Social Media Presence?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Let's discuss how we can help you achieve your social media goals.
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

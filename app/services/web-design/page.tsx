import { Metadata } from "next";
import Section from "@/components/ui/Section";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Website Design & Development | Seam Media",
  description:
    "Professional website design and development services in Melbourne. Custom websites that drive results and grow your business.",
};

export default function WebDesignPage() {
  const features = [
    {
      title: "Responsive Design",
      description:
        "Beautiful websites that work perfectly on all devices - desktop, tablet, and mobile.",
      icon: "📱",
    },
    {
      title: "SEO Optimized",
      description:
        "Built with search engines in mind to help your website rank higher and attract more visitors.",
      icon: "🔍",
    },
    {
      title: "Fast Performance",
      description:
        "Lightning-fast loading times ensure visitors stay engaged and convert into customers.",
      icon: "⚡",
    },
    {
      title: "Custom Development",
      description:
        "Tailored solutions built specifically for your business needs and goals.",
      icon: "💻",
    },
  ];

  const packages = [
    {
      name: "Starter Website",
      price: "$2,499",
      period: "one-time",
      features: [
        "5 page website",
        "Mobile responsive",
        "Contact form",
        "SEO basics",
        "1 month support",
      ],
      color: "#6b8e9f",
    },
    {
      name: "Business Website",
      price: "$4,999",
      period: "one-time",
      features: [
        "10 page website",
        "Advanced SEO",
        "Content management system",
        "Analytics integration",
        "3 months support",
        "Social media integration",
      ],
      color: "#f5b5b5",
      popular: true,
    },
    {
      name: "E-Commerce",
      price: "$7,999",
      period: "one-time",
      features: [
        "Custom online store",
        "Payment gateway",
        "Product management",
        "Inventory system",
        "6 months support",
        "Marketing integration",
        "Advanced analytics",
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
            Website Design & Development
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            We create stunning, high-performance websites that convert visitors
            into customers. From simple landing pages to complex e-commerce
            platforms, we build digital experiences that drive results.
          </p>
        </div>
      </Section>

      {/* Features */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Why Choose Our Web Design Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="space-y-4">
                <div className="text-4xl">{feature.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Packages */}
      <Section background="gray">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Website Design Packages
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
                <span className="text-3xl">🌐</span>
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
            Ready to Build Your Dream Website?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Let's discuss your project and create a website that helps your
            business grow.
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

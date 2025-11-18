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

      {/* CTA Section */}
      <Section background="gray">
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

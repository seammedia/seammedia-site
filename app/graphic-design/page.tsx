import { Metadata } from "next";
import Section from "@/components/ui/Section";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Graphic Design Services | Seam Media",
  description:
    "Professional graphic design services in Melbourne. From logos to marketing materials, we create stunning designs that make your brand stand out.",
};

export default function GraphicDesignPage() {
  const services = [
    {
      title: "Logo Design",
      description:
        "Create a memorable brand identity with a custom logo that perfectly represents your business and resonates with your target audience.",
      icon: "✨",
    },
    {
      title: "Marketing Materials",
      description:
        "Business cards, brochures, flyers, and posters designed to captivate your audience and drive action.",
      icon: "📋",
    },
    {
      title: "Digital Graphics",
      description:
        "Social media graphics, email templates, web banners, and digital ads optimized for online platforms.",
      icon: "💻",
    },
    {
      title: "Print Design",
      description:
        "High-quality print-ready designs for packaging, signage, magazines, and promotional materials.",
      icon: "🎨",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Section background="gray">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Graphic Design Services
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Transform your brand with stunning graphic design. From logos to
            complete brand identities, we create visual designs that capture
            attention and communicate your message effectively.
          </p>
        </div>
      </Section>

      {/* What We Offer */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            What We Design
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

      {/* Our Process */}
      <Section background="gray">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Our Design Process
          </h2>
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#f5b5b5] rounded-full flex items-center justify-center text-white font-bold text-xl">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Discovery & Brief
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    We start by understanding your business, target audience,
                    and design goals. This ensures every design decision is
                    strategic and aligned with your objectives.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#5865f2] rounded-full flex items-center justify-center text-white font-bold text-xl">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Concept Development
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our designers create multiple concepts based on your brief.
                    We explore different styles, colors, and approaches to find
                    the perfect direction.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#b5a5d5] rounded-full flex items-center justify-center text-white font-bold text-xl">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Refinement
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Based on your feedback, we refine the chosen concept,
                    perfecting every detail until it's exactly what you
                    envisioned.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#a5d5b5] rounded-full flex items-center justify-center text-white font-bold text-xl">
                    4
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Final Delivery
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    You receive all final files in multiple formats, ready to
                    use across all platforms - print, web, and social media.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Why Choose Our Design Services
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <svg
                className="w-8 h-8 text-green-500 flex-shrink-0 mt-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Experienced Designers
                </h3>
                <p className="text-gray-700">
                  Our team has years of experience creating designs for
                  businesses across all industries.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <svg
                className="w-8 h-8 text-green-500 flex-shrink-0 mt-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Fast Turnaround
                </h3>
                <p className="text-gray-700">
                  We deliver quality designs quickly without compromising on
                  creativity or attention to detail.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <svg
                className="w-8 h-8 text-green-500 flex-shrink-0 mt-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Unlimited Revisions
                </h3>
                <p className="text-gray-700">
                  We work with you until you're 100% satisfied with the final
                  design.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <svg
                className="w-8 h-8 text-green-500 flex-shrink-0 mt-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  All File Formats
                </h3>
                <p className="text-gray-700">
                  Receive your designs in all necessary formats for print, web,
                  and social media use.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gray">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Elevate Your Brand?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Let's create stunning designs that make your business stand out.
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

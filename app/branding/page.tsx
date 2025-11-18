import { Metadata } from "next";
import Section from "@/components/ui/Section";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Brand Strategy & Development | Seam Media",
  description:
    "Build a powerful brand identity that resonates with your audience. Professional branding services in Melbourne for businesses of all sizes.",
};

export default function BrandingPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="gray">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Brand Strategy & Development
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Build a brand that stands out and connects with your audience. We
            create comprehensive brand identities that tell your story and drive
            business growth.
          </p>
        </div>
      </Section>

      {/* What We Offer */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            What's Included
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">
                Brand Strategy
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Develop a clear brand positioning, messaging framework, and value
                proposition that differentiates you from competitors.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">
                Visual Identity
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Create a cohesive visual system including logo, color palette,
                typography, and design guidelines.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">
                Brand Voice & Messaging
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Define your brand personality and develop consistent messaging
                that resonates with your target audience.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">
                Brand Guidelines
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Comprehensive brand guidelines to ensure consistent application
                across all touchpoints.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gray">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Build a Powerful Brand?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Let's create a brand identity that sets you apart from the
            competition.
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

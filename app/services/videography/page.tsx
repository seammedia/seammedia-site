import { Metadata } from "next";
import Section from "@/components/ui/Section";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Professional Videography Services | Seam Media",
  description:
    "Professional video production services in Melbourne. Corporate videos, promotional content, and social media videos for your business.",
};

export default function VideographyPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="gray">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Professional Videography
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Engaging video content that tells your story and connects with your
            audience. From corporate videos to social media content, we bring
            your brand to life.
          </p>
        </div>
      </Section>

      {/* What We Offer */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Video Production Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">
                Corporate Videos
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Professional corporate videos that communicate your message,
                showcase your team, and build trust with stakeholders.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">
                Promotional Videos
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Compelling promotional content that drives action and generates
                results for your marketing campaigns.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">
                Social Media Videos
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Short-form video content optimized for social media platforms to
                increase engagement and reach.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">
                Product Videos
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Showcase your products in action with professional product
                demonstrations and feature highlights.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gray">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Tell Your Story?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Let's create engaging video content that resonates with your
            audience.
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

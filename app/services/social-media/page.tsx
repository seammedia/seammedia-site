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

      {/* CTA Section */}
      <Section background="gray">
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

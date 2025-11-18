import { Metadata } from "next";
import Section from "@/components/ui/Section";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Construction Marketing Services | Seam Media",
  description:
    "Specialized digital marketing services for construction companies. Build your brand, generate leads, and grow your construction business with data-driven strategies.",
};

export default function ConstructionMarketingPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="gray">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Construction Marketing
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Specialized digital marketing services for construction companies, builders, and trades.
            We help you showcase your projects, generate quality leads, and grow your construction business
            through proven digital marketing strategies.
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
                Project Showcasing
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Professional photography and videography of your construction projects,
                creating compelling before-and-after content that demonstrates your expertise
                and attracts potential clients.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">
                Lead Generation
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Targeted Google Ads and social media campaigns designed to attract homeowners
                and businesses looking for construction services in your local area.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">
                Local SEO
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Optimize your online presence to rank for local construction searches.
                We help you appear when potential clients search for builders and contractors
                in your service area.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">
                Website Development
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Build a professional website that showcases your portfolio, builds trust
                with potential clients, and converts visitors into leads with clear calls-to-action.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">
                Social Media Management
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Engage with your local community, share project updates, and build your
                reputation through strategic social media content on platforms where your
                clients spend their time.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">
                Review & Reputation Management
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Build trust and credibility with potential clients by actively managing
                your online reviews and showcasing testimonials from satisfied customers.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Why Construction Companies Choose Us */}
      <Section background="gray">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Why Construction Companies Choose Us
          </h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <svg className="w-6 h-6 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Industry Experience</h3>
                <p className="text-gray-700">
                  We understand the construction industry and know how to market your services effectively
                  to homeowners, property developers, and commercial clients.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <svg className="w-6 h-6 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Data-Driven Results</h3>
                <p className="text-gray-700">
                  Every campaign is backed by data and analytics. We track leads, conversions, and ROI
                  to ensure your marketing budget delivers measurable results.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <svg className="w-6 h-6 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Local Focus</h3>
                <p className="text-gray-700">
                  Based on the Mornington Peninsula, we specialize in local marketing strategies
                  that help you dominate your service area and attract nearby clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="white">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Grow Your Construction Business?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Let's discuss how we can help you generate more leads and win more projects.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-lg transition-colors text-lg"
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

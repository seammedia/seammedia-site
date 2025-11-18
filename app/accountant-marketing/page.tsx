import { Metadata } from "next";
import Section from "@/components/ui/Section";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Accountant Marketing Services | Seam Media",
  description:
    "Specialized digital marketing services for accountants and accounting firms. Attract new clients, build your reputation, and grow your practice with proven strategies.",
};

export default function AccountantMarketingPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="gray">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Accountant Marketing
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Specialized digital marketing services for accountants, bookkeepers, and accounting firms.
            We help you attract high-quality clients, establish your expertise, and grow your practice
            through strategic digital marketing.
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
                Professional Website Design
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Create a trustworthy, professional online presence with a modern website
                that showcases your services, builds credibility, and makes it easy for
                potential clients to get in touch.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">
                Local SEO
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Rank higher in local search results when businesses and individuals search
                for accounting services. We optimize your Google Business Profile and website
                to attract clients in your area.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">
                Content Marketing
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Establish yourself as a trusted expert through educational blog posts, tax tips,
                and financial advice that helps potential clients while improving your search rankings.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">
                Google Ads Management
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Generate qualified leads through targeted Google Ads campaigns that reach businesses
                and individuals actively searching for accounting services.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">
                Social Media Marketing
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Build your professional reputation on LinkedIn and Facebook, sharing valuable
                insights and connecting with potential clients and referral partners.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">
                Email Marketing
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Stay top-of-mind with clients and prospects through regular newsletters featuring
                tax deadlines, financial tips, and updates about your services.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Why Accountants Choose Us */}
      <Section background="gray">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Why Accountants Choose Us
          </h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <svg className="w-6 h-6 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Industry Understanding</h3>
                <p className="text-gray-700">
                  We understand the unique marketing challenges accountants face, including compliance
                  requirements, seasonal demand, and building trust with potential clients.
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
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Measurable ROI</h3>
                <p className="text-gray-700">
                  We track every lead and conversion, providing transparent reporting on your marketing
                  investment. You'll know exactly how many new clients your marketing is generating.
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
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No Long-Term Contracts</h3>
                <p className="text-gray-700">
                  We don't lock you into lengthy contracts. Our month-to-month service means
                  we earn your business every month by delivering results.
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
            Ready to Grow Your Accounting Practice?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Let's discuss how we can help you attract more clients and grow your practice.
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

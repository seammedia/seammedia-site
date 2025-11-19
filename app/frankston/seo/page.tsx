import Section from "@/components/ui/Section";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "SEO Services Frankston | Seam Media",
  description: "Professional SEO services in Frankston. Improve your local search rankings, attract more customers, and grow your business with our proven SEO strategies.",
};

export default function FrankstonSEOPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/frankston"
            className="text-[#5e7986] hover:text-[#4a6370] font-medium mb-4 inline-block transition-colors"
          >
            ← Back to Frankston Services
          </Link>
          <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-8">
            SEO Services{' '}
            <span className="relative inline-block px-4">
              <span className="relative z-10 text-white">Frankston</span>
              <span
                className="absolute inset-0 -inset-x-1 top-[15%] h-[75%] rounded-sm opacity-90"
                style={{
                  backgroundColor: '#5e7986',
                  transform: 'skewX(-5deg)'
                }}
              ></span>
            </span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8">
            Rank higher in Google search results and attract more local customers in Frankston with our comprehensive SEO services.
          </p>
        </div>
      </Section>

      {/* What We Offer */}
      <Section background="gray">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-12 text-center">
            What We{' '}
            <span className="relative inline-block px-4">
              <span className="relative z-10 text-white">Offer</span>
              <span
                className="absolute inset-0 -inset-x-1 top-[15%] h-[75%] rounded-sm opacity-90"
                style={{
                  backgroundColor: '#5e7986',
                  transform: 'skewX(-5deg)'
                }}
              ></span>
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Local SEO</h3>
              <p className="text-gray-700 leading-relaxed">
                Dominate local search results in Frankston. We optimize your Google Business Profile, build local citations, and ensure your business appears when locals search for your services.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">On-Page SEO</h3>
              <p className="text-gray-700 leading-relaxed">
                Optimize every element of your website for search engines. From meta tags to content structure, we ensure your site is technically sound and search-engine friendly.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Keyword Research</h3>
              <p className="text-gray-700 leading-relaxed">
                Target the right keywords to attract qualified traffic. We identify high-value search terms that your Frankston customers are actually using.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Technical SEO</h3>
              <p className="text-gray-700 leading-relaxed">
                Fix technical issues that hold your rankings back. We optimize site speed, mobile responsiveness, crawlability, and all the technical factors that Google cares about.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-12 text-center">
            Why Choose{' '}
            <span className="relative inline-block px-4">
              <span className="relative z-10 text-white">Us</span>
              <span
                className="absolute inset-0 -inset-x-1 top-[15%] h-[75%] rounded-sm opacity-90"
                style={{
                  backgroundColor: '#5e7986',
                  transform: 'skewX(-5deg)'
                }}
              ></span>
            </span>
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Proven Track Record</h3>
              <p className="text-gray-700 leading-relaxed">
                We've helped countless Frankston businesses improve their search rankings and drive more organic traffic. Our SEO strategies deliver measurable, long-term results.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">White-Hat Methods</h3>
              <p className="text-gray-700 leading-relaxed">
                We only use ethical, Google-approved SEO techniques. No black-hat tactics, no shortcuts – just sustainable strategies that build your online authority over time.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Local Market Knowledge</h3>
              <p className="text-gray-700 leading-relaxed">
                Understanding the Frankston market is key to SEO success. We know the local competitors, search trends, and what it takes to rank for location-specific keywords.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Regular Reporting</h3>
              <p className="text-gray-700 leading-relaxed">
                Track your progress with detailed monthly reports. We show you exactly where you rank, how much traffic you're getting, and the ROI from your SEO investment.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Map Section */}
      <Section background="gray">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-12 text-center">
            Find{' '}
            <span className="relative inline-block px-4">
              <span className="relative z-10 text-white">Us</span>
              <span
                className="absolute inset-0 -inset-x-1 top-[15%] h-[75%] rounded-sm opacity-90"
                style={{
                  backgroundColor: '#5e7986',
                  transform: 'skewX(-5deg)'
                }}
              ></span>
            </span>
          </h2>
          <div className="w-full aspect-[4/3] lg:aspect-[16/9] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25100.32405903817!2d145.12077927722586!3d-38.15087609362117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad60b2a48d44683%3A0x5045675218ce240!2sFrankston%20VIC%203199!5e0!3m2!1sen!2sau!4v1763507513247!5m2!1sen!2sau"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <ContactForm />
    </>
  );
}

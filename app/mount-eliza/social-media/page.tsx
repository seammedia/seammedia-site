import Section from "@/components/ui/Section";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Social Media Management Mount Eliza | Seam Media",
  description: "Expert social media management services in Mount Eliza. We help local businesses grow their online presence with strategic social media campaigns across all platforms.",
};

export default function MountElizaSocialMediaPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/mount-eliza"
            className="text-[#5e7986] hover:text-[#4a6370] font-medium mb-4 inline-block transition-colors"
          >
            ← Back to Mount Eliza Services
          </Link>
          <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-8">
            Social Media Management{' '}
            <span className="relative inline-block px-4">
              <span className="relative z-10 text-white">Mount Eliza</span>
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
            Grow your Mount Eliza business with strategic social media management that drives engagement, builds community, and generates real results.
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Content Creation</h3>
              <p className="text-gray-700 leading-relaxed">
                Professional content tailored to your brand and audience. We create engaging posts, stories, and reels that capture attention and drive engagement across all major platforms.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Community Management</h3>
              <p className="text-gray-700 leading-relaxed">
                Build meaningful relationships with your audience. We monitor, respond to comments and messages, and foster an engaged community around your Mount Eliza business.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Strategy & Planning</h3>
              <p className="text-gray-700 leading-relaxed">
                Data-driven social media strategies designed specifically for Mount Eliza businesses. We plan content calendars, identify optimal posting times, and track performance metrics.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Paid Social Advertising</h3>
              <p className="text-gray-700 leading-relaxed">
                Maximize your reach with targeted social media advertising. We create and manage campaigns on Facebook, Instagram, and LinkedIn to reach your ideal customers in Mount Eliza.
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
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Local Expertise</h3>
              <p className="text-gray-700 leading-relaxed">
                We understand the Mount Eliza market and create content that resonates with your local audience. Our team knows what works for businesses in the area.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Proven Results</h3>
              <p className="text-gray-700 leading-relaxed">
                Our social media campaigns deliver measurable results. We focus on metrics that matter – engagement, reach, website traffic, and conversions.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Full-Service Management</h3>
              <p className="text-gray-700 leading-relaxed">
                From strategy to content creation to community management, we handle every aspect of your social media presence so you can focus on running your business.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Transparent Reporting</h3>
              <p className="text-gray-700 leading-relaxed">
                Stay informed with detailed monthly reports showing exactly how your social media is performing and the ROI you're getting from our services.
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25073.832794940754!2d145.04161062743066!3d-38.227790842445636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad5dfa0228d7dd5%3A0x5045675218ce2e0!2sMount%20Eliza%20VIC%203930!5e0!3m2!1sen!2sau!4v1763507954247!5m2!1sen!2sau"
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

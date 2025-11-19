import Section from "@/components/ui/Section";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Website Design Hampton | Seam Media",
  description: "Professional website design services in Hampton. We create custom, responsive websites that convert visitors into customers and grow your business.",
};

export default function HamptonWebDesignPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/hampton"
            className="text-[#5e7986] hover:text-[#4a6370] font-medium mb-4 inline-block transition-colors"
          >
            ← Back to Hampton Services
          </Link>
          <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-8">
            Website Design{' '}
            <span className="relative inline-block px-4">
              <span className="relative z-10 text-white">Hampton</span>
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
            Transform your online presence with a professionally designed website that attracts customers and drives results for your Hampton business.
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom Design</h3>
              <p className="text-gray-700 leading-relaxed">
                Unique, tailored designs that reflect your brand identity. No templates – every website we create is custom-built to meet your specific business needs and goals.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mobile Responsive</h3>
              <p className="text-gray-700 leading-relaxed">
                Perfect display on any device. Your website will look stunning and function flawlessly on desktops, tablets, and smartphones – ensuring you never miss a potential customer.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Fast Loading Speed</h3>
              <p className="text-gray-700 leading-relaxed">
                Lightning-fast performance that keeps visitors engaged. We optimize every element to ensure your site loads quickly, reducing bounce rates and improving conversions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Optimized</h3>
              <p className="text-gray-700 leading-relaxed">
                Built for search engines from the ground up. Your new website will be structured and coded to help you rank higher in Google search results for Hampton-area searches.
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
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Conversion-Focused Design</h3>
              <p className="text-gray-700 leading-relaxed">
                Beautiful design is just the start. We focus on creating websites that convert visitors into customers with strategic layouts, clear calls-to-action, and user-friendly navigation.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Ongoing Support</h3>
              <p className="text-gray-700 leading-relaxed">
                We're here for you after launch. From content updates to technical support, we provide ongoing maintenance to keep your website running smoothly and securely.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Local Expertise</h3>
              <p className="text-gray-700 leading-relaxed">
                As a Hampton-based agency, we understand local businesses and their unique needs. We create websites that resonate with your target audience in the area.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Affordable Pricing</h3>
              <p className="text-gray-700 leading-relaxed">
                Professional websites don't have to break the bank. We offer competitive pricing and flexible payment options, including website leasing, to fit your budget.
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25157.0979663063!2d145.19324797678723!3d-37.985594196191364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad66edef41b619d%3A0x5045675218cde80!2sHampton%20VIC%203188!5e0!3m2!1sen!2sau!4v1763507922726!5m2!1sen!2sau"
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

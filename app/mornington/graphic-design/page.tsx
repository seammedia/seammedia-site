import Section from "@/components/ui/Section";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Graphic Design Mornington | Seam Media",
  description: "Professional graphic design services in Mornington. From logos to marketing materials, we create stunning designs that make your business stand out.",
};

export default function MorningtonGraphicDesignPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/mornington"
            className="text-[#5e7986] hover:text-[#4a6370] font-medium mb-4 inline-block transition-colors"
          >
            ← Back to Mornington Services
          </Link>
          <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-8">
            Graphic Design{' '}
            <span className="relative inline-block px-4">
              <span className="relative z-10 text-white">Mornington</span>
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
            Stand out from the competition with professional graphic design that captures attention and communicates your brand message effectively.
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Logo Design</h3>
              <p className="text-gray-700 leading-relaxed">
                Create a memorable brand identity with a professionally designed logo. We craft unique, timeless logos that represent your Mornington business and make a lasting impression.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Marketing Materials</h3>
              <p className="text-gray-700 leading-relaxed">
                From business cards to brochures, flyers, and posters – we design eye-catching marketing materials that help you promote your business effectively.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Social Media Graphics</h3>
              <p className="text-gray-700 leading-relaxed">
                Boost engagement with professionally designed social media graphics. We create scroll-stopping visuals optimized for Instagram, Facebook, LinkedIn, and more.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Brand Identity</h3>
              <p className="text-gray-700 leading-relaxed">
                Develop a cohesive brand identity with consistent visual elements. We create comprehensive brand guidelines including color palettes, typography, and design standards.
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
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Creative Excellence</h3>
              <p className="text-gray-700 leading-relaxed">
                Our talented design team combines creativity with strategic thinking to deliver designs that not only look great but also achieve your business objectives.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Fast Turnaround</h3>
              <p className="text-gray-700 leading-relaxed">
                We understand deadlines matter. Our efficient design process ensures you get high-quality work delivered on time, every time.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Unlimited Revisions</h3>
              <p className="text-gray-700 leading-relaxed">
                Your satisfaction is our priority. We work with you through multiple revision rounds until the design is exactly what you envisioned.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Print-Ready Files</h3>
              <p className="text-gray-700 leading-relaxed">
                Receive all your designs in multiple formats ready for both print and digital use. We provide high-resolution files suitable for any application.
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25073.832794940754!2d145.04161062743066!3d-38.227790842445636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad5debc7abbe955%3A0x5045675218ce420!2sMornington%20VIC%203931!5e0!3m2!1sen!2sau!4v1763507939984!5m2!1sen!2sau"
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

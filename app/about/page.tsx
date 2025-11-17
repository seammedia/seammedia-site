import { Metadata } from "next";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | Seam Media",
  description:
    "Learn about Seam Media, a digital marketing agency dedicated to building brands through data-driven strategies and creative excellence.",
};

export default function AboutPage() {
  const values = [
    {
      title: "Data-Driven Results",
      description:
        "We believe in the power of data to inform strategy and drive measurable results. Every campaign is tracked, analyzed, and optimized for maximum ROI.",
    },
    {
      title: "Client-Focused Approach",
      description:
        "Your success is our success. We work closely with each client to understand their unique goals and create tailored solutions that deliver.",
    },
    {
      title: "Creative Excellence",
      description:
        "From design to content, we bring creative thinking to every project. We don't just follow trends – we help set them.",
    },
    {
      title: "Transparent Communication",
      description:
        "No contracts. No hidden fees. Just honest, open communication and a commitment to your success.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Section background="gray">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            About Seam Media
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            A digital marketing agency with a difference
          </p>
        </div>
      </Section>

      {/* Our Story */}
      <Section background="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              We Build Brands That Last
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                At Seam Media, we're not just another digital marketing agency.
                We're a team of passionate marketers, designers, and strategists
                dedicated to helping businesses of all sizes succeed online.
              </p>
              <p>
                Founded with a vision to make digital marketing accessible and
                effective for everyone, we've worked with startups, small
                businesses, and large national brands to create impactful
                campaigns that drive real results.
              </p>
              <p>
                What sets us apart is our commitment to data-driven strategies,
                creative excellence, and transparent communication. We don't
                believe in long-term contracts or hidden fees – just honest,
                effective marketing that works.
              </p>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
              alt="Team collaboration"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </Section>

      {/* Our Values */}
      <Section background="gray">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            These principles guide everything we do
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {value.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="pink">
        <div className="text-center max-w-3xl mx-auto text-white">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Build Your Brand?
          </h2>
          <p className="text-xl mb-8">
            Let's talk about how we can help your business grow
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary">
              Get in Touch
            </Button>
          </Link>
        </div>
      </Section>
    </>
  );
}

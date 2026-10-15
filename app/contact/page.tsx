import ContactForm from "@/components/ContactForm";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contact Us | Seam Media",
  description:
    "Get in touch with Seam Media. We're available 24/7 to discuss your digital marketing needs.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      {/* Add top padding for fixed header */}
      <div className="pt-24">
        <header className="mx-auto max-w-4xl px-6 pb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900">Contact Seam Media</h1>
          <p className="mt-4 text-lg text-gray-600">
            Tell us what you are trying to grow and we will help you plan the next step.
          </p>
        </header>
        <ContactForm />
      </div>
    </>
  );
}

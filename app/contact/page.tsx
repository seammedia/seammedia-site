import { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Seam Media",
  description:
    "Get in touch with Seam Media. We're available 24/7 to discuss your digital marketing needs.",
};

export default function ContactPage() {
  return (
    <>
      {/* Add top padding for fixed header */}
      <div className="pt-24">
        <ContactForm />
      </div>
    </>
  );
}

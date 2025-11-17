import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import DataDriven from "@/components/DataDriven";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import ClientLogos from "@/components/ClientLogos";
import ContactForm from "@/components/ContactForm";

// Cache bust - Updated 2025-11-17
export default function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <DataDriven />
      <WhyChooseUs />
      <Testimonials />
      <ClientLogos />
      <ContactForm />
    </>
  );
}


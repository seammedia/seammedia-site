import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import DataDriven from "@/components/DataDriven";
import WhyChooseUs from "@/components/WhyChooseUs";
import AudioQuote from "@/components/AudioQuote";
import ClientLogos from "@/components/ClientLogos";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";

// Cache bust - Updated 2025-11-20
export default function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <DataDriven />
      <WhyChooseUs />
      <AudioQuote />
      <ClientLogos />
      <FAQ />
      <ContactForm />
    </>
  );
}


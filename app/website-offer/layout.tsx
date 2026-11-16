import MetaPixel from "@/components/MetaPixel";

export default function WebsiteOfferLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MetaPixel />
      {children}
    </>
  );
}

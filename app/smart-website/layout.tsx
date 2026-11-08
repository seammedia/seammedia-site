import MetaPixel from "@/components/MetaPixel";

export default function SmartWebsiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MetaPixel />
      {children}
    </>
  );
}

import MetaPixel from "@/components/MetaPixel";

export default function WebsiteGuideLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MetaPixel />
      {children}
    </>
  );
}

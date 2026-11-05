import MetaPixel from "@/components/MetaPixel";

export default function SocialMediaGuideLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MetaPixel />
      {children}
    </>
  );
}

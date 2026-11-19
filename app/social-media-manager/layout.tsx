import MetaPixel from "@/components/MetaPixel";

export default function SocialManagerLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MetaPixel />
      {children}
    </>
  );
}

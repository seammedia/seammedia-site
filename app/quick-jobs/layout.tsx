import MetaPixel from "@/components/MetaPixel";

export default function QuickJobsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MetaPixel />
      {children}
    </>
  );
}

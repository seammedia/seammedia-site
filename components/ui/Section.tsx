import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: "white" | "gray" | "pink";
}

export default function Section({
  children,
  className,
  id,
  background = "white",
}: SectionProps) {
  const backgrounds = {
    white: "bg-white",
    gray: "bg-gray-50",
    pink: "bg-[#f5b5b5]",
  };

  return (
    <section
      id={id}
      className={cn("py-16 lg:py-24", backgrounds[background], className)}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">{children}</div>
    </section>
  );
}

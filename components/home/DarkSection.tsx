import { cn } from "@/lib/utils";

// Dark home page section. The faint teal glow echoes the water in the hero.
export default function DarkSection({
  children,
  id,
  className,
  glow = "none",
  image,
}: {
  children: React.ReactNode;
  id?: string;
  className?: string;
  glow?: "none" | "left" | "right" | "centre";
  image?: string;
}) {
  const glows = {
    none: "",
    left: "bg-[radial-gradient(ellipse_at_10%_0%,rgba(0,194,209,0.10),transparent_55%)]",
    right: "bg-[radial-gradient(ellipse_at_90%_10%,rgba(0,194,209,0.10),transparent_55%)]",
    centre: "bg-[radial-gradient(ellipse_at_50%_0%,rgba(0,194,209,0.12),transparent_60%)]",
  };
  return (
    <section id={id} className={cn("relative overflow-hidden bg-[#0a0a0a] py-20 text-white lg:py-28", className)}>
      {image && <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-35" style={{ backgroundImage: `url('${image}')` }} />}
      {image && <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/70 to-[#0a0a0a]/30" />}
      {glow !== "none" && <div aria-hidden="true" className={cn("pointer-events-none absolute inset-0", glows[glow])} />}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">{children}</div>
    </section>
  );
}

export function SectionIntro({
  eyebrow,
  title,
  text,
  align = "left",
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  text?: string;
  align?: "left" | "centre";
  children?: React.ReactNode;
}) {
  return (
    <div className={cn("mb-12 flex flex-col gap-6 lg:mb-16", align === "centre" ? "items-center text-center" : "lg:flex-row lg:items-end lg:justify-between")}>
      <div className={cn("max-w-3xl", align === "centre" && "mx-auto")}>
        <p className={cn("mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-[#00c2d1]", align === "centre" && "justify-center")}>
          <span className="h-1.5 w-1.5 rounded-full bg-[#00f0ff] shadow-[0_0_8px_#00f0ff]" aria-hidden="true" />
          {eyebrow}
        </p>
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">{title}</h2>
        {text && <p className="mt-5 text-lg leading-relaxed text-gray-400">{text}</p>}
      </div>
      {children}
    </div>
  );
}

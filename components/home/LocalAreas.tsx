import Link from "next/link";
import { MapPin } from "lucide-react";
import DarkSection, { SectionIntro } from "./DarkSection";

// Added 15 Oct 2026: the home page linked the suburb pages only from the footer. Descriptive links from the
// strongest page help /mount-eliza and /frankston, which sit at positions 8-15 for agency searches.
const areas = [
  { href: "/mount-eliza", label: "SEO and digital marketing agency in Mount Eliza" },
  { href: "/frankston", label: "Digital marketing and SEO agency in Frankston" },
  { href: "/mornington", label: "Digital marketing agency in Mornington" },
  { href: "/dandenong", label: "Digital marketing in Dandenong" },
  { href: "/cranbourne", label: "SEO and marketing agency in Cranbourne" },
  { href: "/chelsea", label: "Digital marketing in Chelsea" },
  { href: "/hampton", label: "Digital marketing in Hampton" },
  { href: "/brighton", label: "Digital marketing in Brighton" },
];

export default function LocalAreas() {
  return (
    <DarkSection className="border-t border-white/5">
      <SectionIntro
        eyebrow="Where we work"
        title={<>Local marketing across the <span className="bg-gradient-to-r from-white to-[#7ff5ff] bg-clip-text text-transparent">Mornington Peninsula.</span></>}
        text="Based in Mount Eliza, we work with businesses across the Mornington Peninsula and Melbourne's south-east, and with clients right across Australia."
      />
      <div className="grid gap-px overflow-hidden rounded-2xl border border-[#262626] bg-[#262626] sm:grid-cols-2 lg:grid-cols-4">
        {areas.map(({ href, label }) => (
          <Link key={href} href={href} className="group flex items-start gap-3 bg-[#0f0f0f] p-6 transition-colors hover:bg-[#151515]">
            <MapPin size={20} className="mt-0.5 shrink-0 text-[#00e1f0]" aria-hidden="true" />
            <span className="text-sm font-semibold leading-relaxed text-white group-hover:text-[#7ff5ff]">{label}</span>
          </Link>
        ))}
      </div>
    </DarkSection>
  );
}

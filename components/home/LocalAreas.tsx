import Link from "next/link";
import { MapPin } from "lucide-react";
import DarkSection, { SectionIntro } from "./DarkSection";

// Added 15 Oct 2026: the home page linked the suburb pages only from the footer. Descriptive links from the
// strongest page help /mount-eliza and /frankston, which sit at positions 8-15 for agency searches.
// 19 Oct 2026: suburbs with an SEO page also link it ("SEO in <suburb>"), since service searches such as
// "seo frankston" belong to the /seo sub-page while agency searches belong to the hub.
// 22 Oct 2026: Frankston is the exception: /frankston/seo owns every Frankston SEO search, so the hub link drops "SEO".
const areas: { href: string; label: string; seo?: { href: string; label: string } }[] = [
  { href: "/mount-eliza", label: "SEO and digital marketing agency in Mount Eliza", seo: { href: "/mount-eliza/seo", label: "SEO in Mount Eliza" } },
  { href: "/frankston", label: "Digital marketing agency in Frankston", seo: { href: "/frankston/seo", label: "SEO in Frankston" } },
  { href: "/mornington", label: "Digital marketing agency in Mornington", seo: { href: "/mornington/seo", label: "SEO in Mornington" } },
  { href: "/dandenong", label: "Digital marketing agency in Dandenong", seo: { href: "/dandenong/seo", label: "SEO in Dandenong" } },
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
        {areas.map(({ href, label, seo }) => (
          <div key={href} className="flex items-start gap-3 bg-[#0f0f0f] p-6 transition-colors hover:bg-[#151515]">
            <MapPin size={20} className="mt-0.5 shrink-0 text-[#00e1f0]" aria-hidden="true" />
            <div className="flex flex-col gap-2">
              <Link href={href} className="text-sm font-semibold leading-relaxed text-white hover:text-[#7ff5ff]">{label}</Link>
              {seo && <Link href={seo.href} className="text-sm leading-relaxed text-gray-400 underline underline-offset-4 hover:text-[#7ff5ff]">{seo.label}</Link>}
            </div>
          </div>
        ))}
      </div>
    </DarkSection>
  );
}

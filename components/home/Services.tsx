import Link from "next/link";
import { ArrowRight, Camera, MessagesSquare, MonitorSmartphone, MousePointerClick, PenTool, Search, Sparkles, Video } from "lucide-react";
import DarkSection, { SectionIntro } from "./DarkSection";

const services = [
  { title: "Social Media", icon: MessagesSquare, link: "/social-media", description: "Social media management that grows your audience, with content, posting and community engagement handled for you." },
  { title: "Web Design", icon: MonitorSmartphone, link: "/web-design", description: "Websites built to turn visitors into enquiries, from a single landing page to a full online store." },
  { title: "SEO", icon: Search, link: "/seo", description: "Local and organic SEO that helps the right customers find your business on Google." },
  { title: "Google Ads", icon: MousePointerClick, link: "/adwords", description: "Google Ads management for ecommerce, service and local businesses, built around return on spend." },
  { title: "Branding", icon: Sparkles, link: "/branding", description: "Research, strategy and identity for new brands and rebrands, built from the ground up." },
  { title: "Graphic Design", icon: PenTool, link: "/graphic-design", description: "Logos, packaging, business cards and marketing materials designed to suit your brand." },
  { title: "Photography", icon: Camera, link: "/photography", description: "Event, food, travel, editorial and studio photography that shows your business at its best." },
  { title: "Videography", icon: Video, link: "/videography", description: "Eye-catching video, from behind-the-scenes content to event coverage, made to stand out in the feed." },
];

export default function Services() {
  return (
    <DarkSection glow="right" className="border-t border-white/5">
      <SectionIntro eyebrow="What we do" title="Everything your brand needs to grow online." text="One small team across strategy, content, websites, search and advertising.">
        <Link href="/marketing-packages" className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/25 px-6 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-black">
          Marketing packages <ArrowRight size={18} aria-hidden="true" />
        </Link>
      </SectionIntro>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {services.map(({ title, icon: Icon, link, description }) => (
          <Link key={title} href={link} className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#262626] bg-[#111111] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#00c2d1]/50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
            <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00f0ff]/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="mb-6 grid h-12 w-12 place-items-center rounded-xl border border-[#00c2d1]/30 bg-[#00c2d1]/10 text-[#00e1f0]"><Icon size={22} aria-hidden="true" /></span>
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-400">{description}</p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white">Learn more <ArrowRight size={16} aria-hidden="true" className="transition-transform group-hover:translate-x-1" /></span>
          </Link>
        ))}
      </div>
    </DarkSection>
  );
}

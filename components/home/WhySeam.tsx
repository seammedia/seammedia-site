import { BarChart3, MapPin, Unlock, Users } from "lucide-react";
import DarkSection, { SectionIntro } from "./DarkSection";

// Each point is backed by existing site copy (FAQ and the former "why choose us" list).
const reasons = [
  { icon: Unlock, title: "No lock-in contracts", text: "All of our services are contract-free. We earn your business every month by delivering results." },
  { icon: BarChart3, title: "Results you can see", text: "Up-to-date reporting with month-on-month insight into every part of your digital marketing." },
  { icon: Users, title: "A small team you can trust", text: "You work directly with the people doing the work, from start-ups to national brands." },
  { icon: MapPin, title: "Local, working Australia-wide", text: "Based on the Mornington Peninsula in Victoria, with clients right across Australia." },
];

export default function WhySeam() {
  return (
    <DarkSection className="border-t border-white/5">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <SectionIntro eyebrow="Why Seam" title={<>Marketing with a <span className="bg-gradient-to-r from-white to-[#7ff5ff] bg-clip-text text-transparent">difference.</span></>} text="We not only create brands, we use data to make sure they get results." />
        <div className="grid gap-px overflow-hidden rounded-2xl border border-[#262626] bg-[#262626] sm:grid-cols-2">
          {reasons.map(({ icon: Icon, title, text }) => (
            <div key={title} className="bg-[#0f0f0f] p-8">
              <Icon size={26} className="text-[#00e1f0]" aria-hidden="true" />
              <h3 className="mt-5 text-xl font-bold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-400">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </DarkSection>
  );
}

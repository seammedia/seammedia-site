import Link from "next/link";
import Section from "@/components/ui/Section";

// Shared "before you post" guide links for the suburb social media pages.
// Add guides here so every social media page picks them up.
const guides = [
  {
    href: "/blog/social-media-handle",
    label: "What is a social media handle?",
    copy: "Your handle is the @ name people search, tag and type. Check it is consistent and available on each platform before you print it on signage or vehicles.",
  },
  {
    href: "/blog/google-business-benefits",
    label: "Why your Google Business Profile matters",
    copy: "Social posts and your Business Profile work together when someone looks you up after seeing a post.",
  },
];

export default function SocialMediaGuides({ area }: { area: string }) {
  return (
    <Section background="white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Get your social media accounts ready</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Before a {area} business starts posting, check the basics: the same handle and business name on every platform, a profile that links to your website, and contact details that match your Google Business Profile.
        </p>
        <ul className="space-y-4">
          {guides.map((guide) => (
            <li key={guide.href}>
              <Link href={guide.href} className="text-lg font-semibold underline text-[#405e6b] hover:text-[#5e7986]">
                {guide.label}
              </Link>
              <p className="text-gray-700 leading-relaxed mt-1">{guide.copy}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

import type { Metadata } from "next";
import SocialPackagesClient from "./SocialPackagesClient";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Social Media Packages Australia | Seam Media",
  description:
    "Clear social media content packages for Australian businesses. Start with consistent branded posts or add short-form video and multi-platform distribution.",
  path: "/social-media-packages",
  keywords: [
    "social media packages Australia",
    "social media management pricing",
    "content creation packages",
    "reels editing Melbourne",
  ],
});

export default function SocialMediaPackagesPage() {
  return <SocialPackagesClient />;
}

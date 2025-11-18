import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Social Media Packages | Seam Media",
  description: "Social media management packages for businesses of all sizes.",
};

export default function SocialMediaPackagesBackupPage() {
  redirect("/social-media");
}

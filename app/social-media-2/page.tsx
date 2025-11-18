import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Social Media Management | Seam Media",
  description: "Professional social media management services to build your brand online.",
};

export default function SocialMedia2Page() {
  redirect("/social-media");
}

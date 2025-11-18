import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "SEO Frankston | Seam Media",
  description: "SEO services to help your business rank on search engines.",
};

export default function SEOFrankstonPage() {
  redirect("/seo");
}

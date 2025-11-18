import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Seam Media | Social Media & Digital Marketing Agency",
  description:
    "We build brands through data-driven digital marketing. Social media management, SEO, web design, branding, and more for businesses of all sizes.",
  keywords: [
    "digital marketing",
    "social media management",
    "SEO",
    "web design",
    "branding",
    "Google Ads",
    "Melbourne",
  ],
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

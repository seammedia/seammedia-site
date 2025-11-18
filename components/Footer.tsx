"use client";

import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [newsletterStatus, setNewsletterStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleNewsletterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNewsletterStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mdkyqykl", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setNewsletterStatus("success");
        form.reset();
        setTimeout(() => setNewsletterStatus("idle"), 3000);
      } else {
        const data = await response.json();
        console.error("Formspree error:", data);
        setNewsletterStatus("error");
        setTimeout(() => setNewsletterStatus("idle"), 3000);
      }
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      setNewsletterStatus("error");
      setTimeout(() => setNewsletterStatus("idle"), 3000);
    }
  };

  const menuLinks = [
    { href: "/", label: "Home" },
    { href: "/clients", label: "Clients" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact Us" },
  ];

  const serviceLinks = [
    { href: "/social-media", label: "Social Media Management" },
    { href: "/web-design", label: "Website Design" },
    { href: "/seo", label: "SEO" },
    { href: "/graphic-design", label: "Graphic Design" },
    { href: "/branding", label: "Branding" },
    { href: "/adwords", label: "Google Ads" },
    { href: "/photography", label: "Photography" },
    { href: "/videography", label: "Videography" },
  ];

  const blogLinks = [
    { href: "/blog/website-design-tips", label: "Top 5 Website Design Tips" },
    { href: "/blog/leasing-website-benefits", label: "Top 5 Benefits of Leasing A Website" },
    { href: "/blog/seo-melbourne-tips", label: "SEO Melbourne – Small Business Top 5 Tips" },
    { href: "/blog/google-business-benefits", label: "The Benefits of Setting Up Google Business" },
    { href: "/blog/ranking-locally-google", label: "Ranking your business locally on Google" },
  ];

  const socialLinks = [
    { href: "https://www.facebook.com/seammediaaus/", label: "Facebook", icon: "facebook" },
    { href: "https://www.instagram.com/seammedia/?hl=en", label: "Instagram", icon: "instagram" },
    { href: "https://www.youtube.com/channel/UC62wYiZCDqhzGSHUliZcNSQ", label: "YouTube", icon: "youtube" },
    { href: "https://www.linkedin.com/company/seam-media-agency/", label: "LinkedIn", icon: "linkedin" },
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Menu Column */}
          <div>
            <h3 className="font-bold text-gray-900 mb-6">Menu</h3>
            <ul className="space-y-3">
              {menuLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-bold text-gray-900 mb-6">Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Blog Column */}
          <div>
            <h3 className="font-bold text-gray-900 mb-6">Blog</h3>
            <ul className="space-y-3">
              {blogLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us Column */}
          <div>
            <h3 className="font-bold text-gray-900 mb-6">Follow Us</h3>
            <ul className="space-y-3">
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-2"
                  >
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <form onSubmit={handleNewsletterSubmit} className="space-y-4">
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                disabled={newsletterStatus === "submitting"}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f5b5b5] focus:border-transparent disabled:opacity-50"
              />
              <input type="hidden" name="_subject" value="Newsletter Subscription" />
              <button
                type="submit"
                disabled={newsletterStatus === "submitting"}
                className="w-full px-6 py-2 text-white font-medium rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ backgroundColor: '#5e7986' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#4d6570'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#5e7986'}
              >
                {newsletterStatus === "submitting"
                  ? "SUBSCRIBING..."
                  : newsletterStatus === "success"
                  ? "SUBSCRIBED!"
                  : "SUBSCRIBE"}
              </button>
              {newsletterStatus === "error" && (
                <p className="text-red-600 text-sm">Failed to subscribe. Please try again.</p>
              )}
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 text-center text-sm text-gray-600">
          <p>Copyright 2025 © All rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

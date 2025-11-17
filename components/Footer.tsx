"use client";

import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with email service (Mailchimp, Formspree, etc.)
    console.log("Newsletter subscription:", email);
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 3000);
  };

  const menuLinks = [
    { href: "/", label: "Home" },
    { href: "/clients", label: "Clients" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact Us" },
    { href: "/blog", label: "Blog" },
  ];

  const blogLinks = [
    { href: "/blog/website-design-tips", label: "Top 5 Website Design Tips" },
    { href: "/blog/leasing-website-benefits", label: "Top 5 Benefits of Leasing A Website" },
    { href: "/blog/seo-melbourne-tips", label: "SEO Melbourne – Small Business Top 5 Tips" },
    { href: "/blog/google-business-benefits", label: "The Benefits of Setting Up Google Business" },
    { href: "/blog/ranking-locally-google", label: "Ranking your business locally on Google" },
  ];

  const socialLinks = [
    { href: "https://facebook.com", label: "Facebook", icon: "facebook" },
    { href: "https://instagram.com", label: "Instagram", icon: "instagram" },
    { href: "https://youtube.com", label: "YouTube", icon: "youtube" },
    { href: "https://linkedin.com", label: "LinkedIn", icon: "linkedin" },
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
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
            <form onSubmit={handleSubscribe} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f5b5b5] focus:border-transparent"
              />
              <button
                type="submit"
                className="w-full px-6 py-2 bg-[#f5b5b5] hover:bg-[#e8a5a5] text-white font-medium rounded-md transition-colors"
              >
                {subscribed ? "Subscribed!" : "SUBSCRIBE"}
              </button>
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

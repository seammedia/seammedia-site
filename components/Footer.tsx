"use client";

import Link from "next/link";
import { Instagram, Linkedin, Facebook, Youtube } from "lucide-react";

export default function Footer() {
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

  const locationLinks = [
    { href: "/brighton", label: "Brighton" },
    { href: "/chelsea", label: "Chelsea" },
    { href: "/cranbourne", label: "Cranbourne" },
    { href: "/dandenong", label: "Dandenong" },
    { href: "/frankston", label: "Frankston" },
    { href: "/hampton", label: "Hampton" },
    { href: "/mornington", label: "Mornington" },
    { href: "/mount-eliza", label: "Mount Eliza" },
  ];

  return (
    <footer className="bg-[#0a0a0a] border-t border-[#1a1a1a]">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold mb-4">
              <span className="text-white">SEAM</span>
              <span className="text-gray-500">MEDIA</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Helping Australian businesses grow through strategic web design, SEO, and digital marketing solutions.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/seammedia/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/seammediaaus/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/seam-media-agency/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.youtube.com/channel/UC62wYiZCDqhzGSHUliZcNSQ"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-semibold text-white mb-6">Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-semibold text-white mb-6">Company</h3>
            <ul className="space-y-3">
              {menuLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations Column */}
          <div>
            <h3 className="font-semibold text-white mb-6">Locations</h3>
            <ul className="space-y-3">
              {locationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-semibold text-white mb-6">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:contact@seammedia.com.au"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  contact@seammedia.com.au
                </a>
              </li>
              <li>
                <a
                  href="tel:+61402642746"
                  className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  0402 642 746
                </a>
              </li>
              <li>
                <div className="text-gray-400 text-sm flex items-start gap-2">
                  <svg
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>Melbourne, Australia</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#1a1a1a]">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <p className="text-center text-sm text-gray-500">
            Copyright 2025 © All rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

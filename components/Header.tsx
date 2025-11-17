"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/clients", label: "Clients" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact Us" },
  ];

  const serviceLinks = [
    { href: "/services/social-media", label: "Social Media Management" },
    { href: "/services/web-design", label: "Website Design" },
    { href: "/services/seo", label: "SEO" },
    { href: "/services/graphic-design", label: "Graphic Design" },
    { href: "/services/branding", label: "Branding" },
    { href: "/services/adwords", label: "Google Ads" },
    { href: "/services/photography", label: "Photography" },
    { href: "/services/videography", label: "Videography" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black backdrop-blur-md border-b border-white/10">
      <nav className="mx-auto max-w-7xl px-6 py-6 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/Seam Logo-3_white.png"
              alt="Seam Media"
              width={140}
              height={45}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-10">
            {/* Home */}
            <li>
              <Link
                href="/"
                className="text-white text-base font-medium hover:text-white/70 transition-colors duration-200"
              >
                Home
              </Link>
            </li>
            {/* Services Dropdown */}
            <li
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button className="text-white text-base font-medium hover:text-white/70 transition-colors duration-200 flex items-center gap-1">
                Services
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
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl py-2 z-50">
                  {serviceLinks.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-6 py-3 text-gray-900 hover:bg-gray-100 transition-colors"
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              )}
            </li>
            {/* Clients */}
            <li>
              <Link
                href="/clients"
                className="text-white text-base font-medium hover:text-white/70 transition-colors duration-200"
              >
                Clients
              </Link>
            </li>
            {/* Blog */}
            <li>
              <Link
                href="/blog"
                className="text-white text-base font-medium hover:text-white/70 transition-colors duration-200"
              >
                Blog
              </Link>
            </li>
            {/* Contact Us */}
            <li>
              <Link
                href="/contact"
                className="text-white text-base font-medium hover:text-white/70 transition-colors duration-200"
              >
                Contact Us
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white hover:bg-white/10 rounded-md transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-6 pb-4 bg-black/90 backdrop-blur-lg rounded-lg p-6">
            <ul className="flex flex-col gap-5">
              {/* Home */}
              <li>
                <Link
                  href="/"
                  className="block text-white text-lg font-medium hover:text-white/70 transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              {/* Services in Mobile Menu */}
              <li>
                <div className="text-white text-lg font-medium mb-3">
                  Services
                </div>
                <ul className="ml-4 space-y-3">
                  {serviceLinks.map((service) => (
                    <li key={service.href}>
                      <Link
                        href={service.href}
                        className="block text-white/80 text-base hover:text-white transition-colors duration-200"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {service.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              {/* Clients */}
              <li>
                <Link
                  href="/clients"
                  className="block text-white text-lg font-medium hover:text-white/70 transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Clients
                </Link>
              </li>
              {/* Blog */}
              <li>
                <Link
                  href="/blog"
                  className="block text-white text-lg font-medium hover:text-white/70 transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Blog
                </Link>
              </li>
              {/* Contact Us */}
              <li>
                <Link
                  href="/contact"
                  className="block text-white text-lg font-medium hover:text-white/70 transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}

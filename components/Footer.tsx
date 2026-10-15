import Link from "next/link";
import { Instagram, Linkedin, Facebook, Youtube } from "lucide-react";

// Seam Media's Google Business Profile (Maps customer ID link, checked 7 October 2026).
const GOOGLE_BUSINESS_URL = "https://maps.google.com/?cid=18236398314403901553";

export default function Footer() {
  const menuLinks = [
    { href: "/", label: "Home" },
    { href: "/clients", label: "Clients" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/why-seam", label: "Why Seam?" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact Us" },
  ];

  const serviceLinks = [
    { href: "/marketing-packages", label: "Marketing Packages" },
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
            <p className="text-gray-400 text-sm leading-relaxed">
              Helping Australian businesses grow through strategic web design, SEO, and digital marketing solutions.
            </p>
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
            <div className="mt-6 flex flex-wrap gap-4">
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
              <a
                href="https://www.tiktok.com/@seammedia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="TikTok"
              >
                <svg viewBox="0 0 24 24" width={20} height={20} fill="currentColor" aria-hidden="true">
                  <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5 2.6 2.6 0 0 1-2.6-2.6 2.6 2.6 0 0 1 3.37-2.49V9.66a5.69 5.69 0 0 0-.77-.05A5.69 5.69 0 0 0 4.17 15.3 5.69 5.69 0 0 0 9.86 21a5.69 5.69 0 0 0 5.68-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3a4.28 4.28 0 0 1-3.24-1.48z" />
                </svg>
              </a>
              <a
                href="https://x.com/seammediaaus"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="X (formerly Twitter)"
              >
                <svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://au.pinterest.com/seammedia/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Pinterest"
              >
                <svg viewBox="0 0 24 24" width={20} height={20} fill="currentColor" aria-hidden="true">
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.64 7.86 6.36 9.32-.09-.79-.17-2 .04-2.87.18-.78 1.17-4.97 1.17-4.97s-.3-.6-.3-1.48c0-1.39.81-2.43 1.81-2.43.85 0 1.27.64 1.27 1.41 0 .86-.55 2.14-.83 3.33-.24.99.5 1.8 1.48 1.8 1.77 0 3.14-1.87 3.14-4.57 0-2.39-1.72-4.06-4.17-4.06-2.84 0-4.51 2.13-4.51 4.34 0 .86.33 1.78.74 2.28.08.1.09.19.07.29-.08.32-.25.99-.28 1.13-.04.18-.15.22-.34.13-1.25-.58-2.03-2.41-2.03-3.88 0-3.16 2.3-6.06 6.62-6.06 3.48 0 6.18 2.48 6.18 5.79 0 3.45-2.18 6.24-5.2 6.24-1.02 0-1.97-.53-2.3-1.15l-.62 2.38c-.23.87-.84 1.96-1.25 2.62.94.29 1.94.45 2.98.45 5.52 0 10-4.48 10-10S17.52 2 12 2z" />
                </svg>
              </a>
              <a
                href={GOOGLE_BUSINESS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Google Business Profile"
                title="Google Business Profile"
              >
                <svg viewBox="0 0 24 24" width={20} height={20} fill="currentColor" aria-hidden="true">
                  <path d="M21.35 11.1H12.2v2.98h5.24c-.23 1.4-1.63 4.1-5.24 4.1-3.15 0-5.72-2.61-5.72-5.83s2.57-5.83 5.72-5.83c1.79 0 2.99.76 3.68 1.42l2.5-2.41C16.78 4.04 14.7 3.1 12.2 3.1 7.1 3.1 3 7.2 3 12.35s4.1 9.25 9.2 9.25c5.31 0 8.83-3.73 8.83-8.99 0-.6-.07-1.06-.15-1.51z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#1a1a1a]">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <div className="flex flex-col items-center justify-between gap-3 text-sm text-gray-500 sm:flex-row">
            <p>Copyright {new Date().getFullYear()} © All rights reserved.</p>
            <Link href="/terms-and-conditions" className="transition-colors hover:text-white">
              Terms and Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

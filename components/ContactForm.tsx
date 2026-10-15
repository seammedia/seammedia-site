"use client";

import { HEARD_ABOUT_OPTIONS, trackLead } from "@/lib/ads";

import { useState } from "react";
import Section from "./ui/Section";
import DarkSection from "./home/DarkSection";

// variant="dark" is used on the home page; every other page keeps the light form.
export default function ContactForm({ variant = "light" }: { variant?: "light" | "dark" }) {
  const dark = variant === "dark";
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      

      const response = await fetch("/api/enquiry", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      
      

      const data = await response.json();
      

      if (response.ok) {
        await trackLead("contact");
        setStatus("success");
        form.reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong");
        console.error("Form submission failed");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Network error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const field = dark
    ? "w-full px-0 py-3 border-0 border-b-2 border-white/20 focus:border-[#00c2d1] focus:outline-none focus:ring-0 bg-transparent text-white placeholder-gray-500"
    : "w-full px-0 py-3 border-0 border-b-2 border-gray-300 focus:border-gray-900 focus:outline-none focus:ring-0 bg-transparent text-gray-900 placeholder-gray-400";
  const label = `block text-sm mb-2 ${dark ? "text-gray-400" : "text-gray-600"}`;
  const contactLink = `text-2xl font-medium transition-colors ${dark ? "text-white hover:text-[#00e1f0]" : "text-gray-900 hover:text-gray-600"}`;

  const content = (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left: Contact Info */}
        <div>
          {dark ? (
            <div className="mb-12">
              <p className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-[#00c2d1]"><span className="h-1.5 w-1.5 rounded-full bg-[#00f0ff] shadow-[0_0_8px_#00f0ff]" aria-hidden="true" />Contact us</p>
              <h2 className="text-5xl font-bold tracking-tight text-white lg:text-6xl">Let&apos;s talk about your next project.</h2>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-gray-400">Tell us what you need and we&apos;ll come back to you with ideas and a free quote. No lock-in contracts.</p>
            </div>
          ) : (
            <h2 className="text-6xl lg:text-7xl font-bold text-gray-900 mb-16">
              <span className="relative inline-block px-4">
                <span className="relative z-10 text-white">Contact</span>
                <span
                  className="absolute inset-0 -inset-x-1 top-[15%] h-[75%] rounded-sm opacity-90"
                  style={{
                    backgroundColor: '#5e7986',
                    transform: 'skewX(-5deg)'
                  }}
                ></span>
              </span>{' '}
              us
            </h2>
          )}

          <div className="space-y-8">
            <div>
              <a
                href="mailto:contact@seammedia.com.au"
                className={contactLink}
              >
                contact@seammedia.com.au
              </a>
            </div>

            <div>
              <a
                href="tel:+61402642746"
                className={contactLink}
              >
                0402 642 746
              </a>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
                <input type="text" name="fax_number" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
            {/* Name Row */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className={label}>
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  className={field}
                />
              </div>
              <div>
                <label htmlFor="lastName" className={label}>
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  className={field}
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className={label}>
                Email (required)
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className={field}
              />
            </div>

            {/* Service Dropdown */}
            <div>
              <label htmlFor="service" className={label}>
                Service
              </label>
              <select
                id="service"
                name="service"
                className={dark ? `${field} [&>option]:bg-[#111111]` : field}
              >
                <option value="">Select a service</option>
                <option value="Web Design">Web Design</option>
                <option value="SEO">SEO</option>
                <option value="Social Media Management">Social Media Management</option>
                <option value="Google Ads">Google Ads</option>
                <option value="Graphic Design">Graphic Design</option>
                <option value="Branding">Branding</option>
                <option value="Photography">Photography</option>
                <option value="Videography">Videography</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* How they found Seam */}
            <div>
              <label htmlFor="heardAbout" className={label}>
                How did you hear about us?
              </label>
              <select
                id="heardAbout"
                name="heardAbout"
                defaultValue=""
                className={dark ? `${field} [&>option]:bg-[#111111]` : field}
              >
                <option value="">Select one (optional)</option>
                {HEARD_ABOUT_OPTIONS.map((o) => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className={label}>
                Project description
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className={`${field} resize-none`}
              />
            </div>

            {/* Submit Button */}
            <div className="relative inline-block group">
              <div className="absolute -bottom-2 left-1/2 -z-10 h-8 w-3/4 -translate-x-1/2 bg-white/20 blur-xl opacity-20 transition-opacity duration-500 group-hover:opacity-50" />
              <button
                type="submit"
                disabled={status === "submitting"}
                className="relative block overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-950 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_0%,#ffffff_10%,#00000000_50%)] opacity-60 transition-opacity duration-300 group-hover:opacity-100" />
                <span className={`relative flex h-full w-full items-center justify-center rounded-full px-8 py-3 font-medium ring-1 transition-colors duration-300 group-hover:ring-transparent ${dark ? "bg-white text-black ring-white/10 group-hover:bg-gray-200" : "bg-slate-950 text-white ring-white/10 group-hover:bg-slate-900/80"}`}>
                  <span>{status === "submitting" ? "Sending..." : "Submit"}</span>
                </span>
              </button>
            </div>

            {/* Success Message */}
            {status === "success" && (
              <div className={dark ? "rounded border border-green-500/30 bg-green-500/10 px-4 py-3 text-green-300" : "bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded"}>
                <p className="font-medium">✓ Thank you! We&apos;ll be in touch soon.</p>
              </div>
            )}

            {/* Error Message */}
            {status === "error" && (
              <div className={dark ? "rounded border border-red-500/30 bg-red-500/10 px-4 py-3 text-red-300" : "bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded"}>
                <p className="font-medium">✗ {errorMessage || "Something went wrong. Please try again."}</p>
              </div>
            )}
          </form>
        </div>
      </div>
  );

  return dark ? (
    <DarkSection id="contact" image="/images/seam-media-hero-image.png" className="scroll-mt-16 border-t border-white/5">{content}</DarkSection>
  ) : (
    <Section background="white">{content}</Section>
  );
}

"use client";

import { useState } from "react";
import Section from "./ui/Section";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      console.log("Submitting form to Formspree...");

      const response = await fetch("https://formspree.io/f/mdkyqykl", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      console.log("Response status:", response.status);
      console.log("Response ok:", response.ok);

      const data = await response.json();
      console.log("Response data:", data);

      if (response.ok) {
        setStatus("success");
        form.reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong");
        console.error("Formspree error:", data);
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Network error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <Section background="white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left: Contact Info */}
        <div>
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

          <div className="space-y-8">
            <div>
              <a
                href="mailto:contact@seammedia.com.au"
                className="text-2xl font-medium text-gray-900 hover:text-gray-600 transition-colors"
              >
                contact@seammedia.com.au
              </a>
            </div>

            <div>
              <a
                href="tel:+61402642746"
                className="text-2xl font-medium text-gray-900 hover:text-gray-600 transition-colors"
              >
                0402 642 746
              </a>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Row */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm text-gray-600 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  className="w-full px-0 py-3 border-0 border-b-2 border-gray-300 focus:border-gray-900 focus:outline-none focus:ring-0 bg-transparent text-gray-900 placeholder-gray-400"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm text-gray-600 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  className="w-full px-0 py-3 border-0 border-b-2 border-gray-300 focus:border-gray-900 focus:outline-none focus:ring-0 bg-transparent text-gray-900 placeholder-gray-400"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm text-gray-600 mb-2">
                Email (required)
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-0 py-3 border-0 border-b-2 border-gray-300 focus:border-gray-900 focus:outline-none focus:ring-0 bg-transparent text-gray-900 placeholder-gray-400"
              />
            </div>

            {/* Service Dropdown */}
            <div>
              <label htmlFor="service" className="block text-sm text-gray-600 mb-2">
                Service
              </label>
              <select
                id="service"
                name="service"
                className="w-full px-0 py-3 border-0 border-b-2 border-gray-300 focus:border-gray-900 focus:outline-none focus:ring-0 bg-transparent text-gray-900"
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

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm text-gray-600 mb-2">
                Project description
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-0 py-3 border-0 border-b-2 border-gray-300 focus:border-gray-900 focus:outline-none focus:ring-0 bg-transparent text-gray-900 placeholder-gray-400 resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="relative inline-block group">
              <div className="absolute -bottom-2 left-1/2 -z-10 h-8 w-3/4 -translate-x-1/2 bg-white/20 blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-40" />
              <button
                type="submit"
                disabled={status === "submitting"}
                className="relative block overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-950 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_0%,#ffffff_10%,#00000000_50%)] opacity-0 transition-opacity duration-100 group-hover:opacity-100" />
                <span className="relative flex h-full w-full items-center justify-center rounded-full bg-slate-950 px-8 py-3 font-medium text-white ring-1 ring-white/10 transition-colors duration-300 group-hover:bg-slate-900/80 group-hover:ring-transparent">
                  <span>{status === "submitting" ? "Sending..." : "Submit"}</span>
                </span>
              </button>
            </div>

            {/* Success Message */}
            {status === "success" && (
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded">
                <p className="font-medium">✓ Thank you! We'll be in touch soon.</p>
              </div>
            )}

            {/* Error Message */}
            {status === "error" && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
                <p className="font-medium">✗ {errorMessage || "Something went wrong. Please try again."}</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </Section>
  );
}

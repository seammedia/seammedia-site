"use client";

import { useState } from "react";
import Section from "./ui/Section";
import Button from "./ui/Button";

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

  // Decorative squares
  const decorativeSquares: Array<{
    color: string;
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
    size: string;
  }> = [
    { color: "#f5d45d", top: "5%", right: "10%", size: "w-8 h-8" },
    { color: "#5865f2", top: "15%", right: "5%", size: "w-6 h-6" },
    { color: "#f5d45d", bottom: "10%", right: "8%", size: "w-10 h-10" },
  ];

  return (
    <Section background="pink">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative">
        {/* Decorative Squares */}
        {decorativeSquares.map((square, index) => (
          <div
            key={index}
            className={`absolute ${square.size} rounded-sm opacity-70 hidden lg:block`}
            style={{
              backgroundColor: square.color,
              ...(square.top && { top: square.top }),
              ...(square.bottom && { bottom: square.bottom }),
              ...(square.left && { left: square.left }),
              ...(square.right && { right: square.right }),
            }}
          />
        ))}

        {/* Left: Image */}
        <div className="relative z-10 hidden lg:block">
          <img
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=800&q=80"
            alt="Contact us"
            className="rounded-lg shadow-lg w-full"
          />
        </div>

        {/* Right: Contact Form */}
        <div className="relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Get In Touch
            </h2>
            <p className="text-white text-lg">
              Leave your details below and one of our experts will contact you shortly!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-white mb-2">
                Name <span className="text-white">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 rounded-md border border-white/30 bg-white/90 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-white mb-2">
                E-mail <span className="text-white">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="ex: myname@example.com"
                className="w-full px-4 py-3 rounded-md border border-white/30 bg-white/90 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-white mb-2">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-4 py-3 rounded-md border border-white/30 bg-white/90 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-white mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full px-4 py-3 rounded-md border border-white/30 bg-white/90 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent resize-none"
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              variant="secondary"
              size="lg"
              className="w-full"
              disabled={status === "submitting"}
            >
              {status === "submitting" ? "Sending..." : "Send Message"}
            </Button>

            {/* Success Message */}
            {status === "success" && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                <p className="font-medium">✓ Thank you! We'll be in touch soon.</p>
              </div>
            )}

            {/* Error Message */}
            {status === "error" && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                <p className="font-medium">✗ {errorMessage || "Something went wrong. Please try again."}</p>
                <p className="text-sm mt-1">Check the browser console for details.</p>
              </div>
            )}

            {/* Debug info */}
            {process.env.NODE_ENV === "development" && (
              <div className="bg-gray-100 border border-gray-300 text-gray-700 px-4 py-3 rounded text-xs">
                <p>Status: {status}</p>
                <p>Endpoint: https://formspree.io/f/mdkyqykl</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </Section>
  );
}

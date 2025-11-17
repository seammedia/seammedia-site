"use client";

import { useState } from "react";
import Section from "./ui/Section";
import Button from "./ui/Button";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Replace with actual form submission (Formspree, serverless function, etc.)
    // Example Formspree integration:
    // const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(formData),
    // });

    console.log("Form submission:", formData);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }, 1000);
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
                value={formData.name}
                onChange={handleChange}
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
                value={formData.email}
                onChange={handleChange}
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
                value={formData.phone}
                onChange={handleChange}
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
                value={formData.message}
                onChange={handleChange}
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
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>

            {/* Success Message */}
            {submitStatus === "success" && (
              <p className="text-white text-center font-medium">
                Thank you! We'll be in touch soon.
              </p>
            )}
          </form>
        </div>
      </div>
    </Section>
  );
}

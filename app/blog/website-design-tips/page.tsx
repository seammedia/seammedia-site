import { Metadata } from "next";
import Section from "@/components/ui/Section";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Top 5 Website Design Tips | Seam Media Blog",
  description:
    "Learn the essential principles of effective website design that will help your site stand out and convert visitors.",
};

export default function WebsiteDesignTipsPage() {
  return (
    <>
      {/* Blog Post Header */}
      <Section background="gray">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/blog"
            className="text-[#f5b5b5] hover:text-[#e8a5a5] font-medium mb-4 inline-block transition-colors"
          >
            ← Back to Blog
          </Link>
          <span className="text-sm font-medium text-[#f5b5b5] uppercase tracking-wide">
            Web Design
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-2 mb-4">
            Top 5 Website Design Tips
          </h1>
          <p className="text-gray-600">Published on March 15, 2024</p>
        </div>
      </Section>

      {/* Blog Post Content */}
      <Section background="white">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            In today's digital landscape, your website is often the first
            impression potential customers have of your business. A
            well-designed website can make the difference between a visitor
            bouncing away or converting into a loyal customer. Here are our top
            5 website design tips to help your site stand out.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
            1. Prioritize Mobile Responsiveness
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            With over 60% of web traffic coming from mobile devices, ensuring
            your website looks and functions perfectly on all screen sizes is
            non-negotiable. A mobile-responsive design automatically adjusts to
            fit the screen it's being viewed on, providing an optimal user
            experience whether on a phone, tablet, or desktop.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Test your website on multiple devices and browsers to ensure
            consistency. Pay special attention to touch-friendly navigation,
            readable text sizes, and properly sized buttons for mobile users.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
            2. Keep Your Navigation Simple and Intuitive
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Visitors should be able to find what they're looking for within 3
            clicks. A clear, logical navigation structure helps users find
            information quickly and reduces frustration. Stick to standard menu
            locations (top of the page or hamburger menu for mobile) and use
            clear, descriptive labels.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Avoid overwhelming users with too many menu options. If you have a
            lot of content, consider using dropdown menus or a mega menu to
            organize it hierarchically.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
            3. Optimize Your Loading Speed
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Speed matters. Studies show that 40% of users will abandon a website
            that takes more than 3 seconds to load. Fast loading times not only
            improve user experience but also boost your search engine rankings.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Optimize images by compressing them without sacrificing quality, use
            browser caching, minimize HTTP requests, and consider using a
            Content Delivery Network (CDN). Tools like Google PageSpeed Insights
            can help identify areas for improvement.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
            4. Use Clear Call-to-Actions (CTAs)
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Every page on your website should have a purpose and guide users
            toward a specific action. Whether it's "Contact Us," "Get a Quote,"
            or "Learn More," your CTAs should be visually prominent and use
            action-oriented language.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Use contrasting colors to make CTAs stand out, ensure they're large
            enough to be easily clickable, and place them strategically
            throughout your content where users are most likely to take action.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
            5. Maintain Consistent Branding
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Your website should be an extension of your brand identity.
            Consistent use of colors, fonts, imagery, and tone of voice across
            all pages helps build trust and makes your brand more memorable.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Create a style guide that documents your brand colors, typography,
            image style, and voice. This ensures consistency even as your
            website grows and evolves over time.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
            Ready to Transform Your Website?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Implementing these design tips can significantly improve your
            website's performance and user experience. At Seam Media, we
            specialize in creating beautiful, functional websites that drive
            results.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            Whether you're starting from scratch or looking to refresh your
            existing site, our team can help bring your vision to life.{" "}
            <Link
              href="/contact"
              className="text-[#f5b5b5] hover:text-[#e8a5a5] font-medium transition-colors"
            >
              Contact us today
            </Link>{" "}
            to discuss your project.
          </p>
        </div>
      </Section>
    </>
  );
}

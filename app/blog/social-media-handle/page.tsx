import Section from "@/components/ui/Section";
import Link from "next/link";
import Image from "next/image";
import { createMetadata } from "@/lib/seo";
import { BlogPostingStructuredData, StructuredData } from "@/components/StructuredData";

const faqs = [
  {
    q: "Is a handle the same as a username?",
    a: "Yes. Handle and username mean the same thing: the unique name after the @ symbol that identifies your account. Your display name is separate and is the name shown in bold on your profile.",
  },
  {
    q: "How do I find my social media handle?",
    a: "Open your own profile on the app. On Instagram, TikTok and X, the handle is the @ name shown on your profile and in your profile link. On Facebook and LinkedIn business pages, look at the end of your page's web address.",
  },
  {
    q: "Can I change my handle?",
    a: "Most platforms let you change it in your profile or account settings, as long as the new name is not already taken. Changing it breaks old tags and printed references, so update your website, signage and email signature at the same time.",
  },
  {
    q: "What if the handle I want is taken?",
    a: "Add something that still describes your business, such as your trade, your suburb or region, or a word like \"official\". Use the same variation on every platform so customers only have to remember one name.",
  },
];

export const metadata = createMetadata({
  title: "What Is a Social Media Handle? Meaning and Examples",
  description:
    "A social media handle is your @ username on a platform. What it means, how it differs from a display name, examples and tips for a business handle.",
  path: "/blog/social-media-handle",
  type: "article",
});

export default function SocialMediaHandlePage() {
  return (
    <>
      <BlogPostingStructuredData
        title="What Is a Social Media Handle? Meaning and Examples"
        description="A social media handle is your @ username on a platform. What it means, how it differs from a display name, examples and tips for a business handle."
        path="/blog/social-media-handle"
        datePublished="2024-11-19"
      />
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: { "@type": "Answer", text: faq.a },
          })),
        }}
      />
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
            Social Media
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-2 mb-4">
            What Is a Social Media Handle?
          </h1>
          <p className="text-gray-600">Published on November 19, 2024</p>
        </div>
      </Section>

      {/* Featured Image */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <div className="relative w-full aspect-[16/10] mb-12 rounded-lg overflow-hidden">
            <Image
              src="/images/what-is-a-handle-on-social-media.png"
              alt="Instagram and Facebook social media icons"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Blog Post Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              If you're navigating the world of social media for your business,
              you've likely heard the term "handle" thrown around. But what
              exactly is a social media handle, and why does it matter? Let's
              break down everything you need to know about this crucial element
              of your online presence.
            </p>

            <div className="rounded-lg border-l-4 border-[#5e7986] bg-gray-50 p-6 mb-8">
              <p className="text-gray-800 leading-relaxed m-0">
                <strong>Quick answer:</strong> a social media handle is the
                unique username that starts with @ on platforms like
                Instagram, TikTok and X, for example @seammedia. People use it
                to find, tag and mention your account. It is different from
                your display name, which does not need to be unique.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
              What is a Social Media Handle?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              A social media handle is your unique username on a social media
              platform. It's the name that appears after the "@" symbol and
              identifies you across the platform. For example, on Instagram,
              @seammedia is our handle. Think of it as your digital address on
              each social media platform.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Your handle is different from your display name. While your
              display name can be changed easily and doesn't need to be unique,
              your handle must be one-of-a-kind on each platform. This
              uniqueness is what makes handles so important for building your
              brand identity online.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
              Why Your Handle Matters
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Your social media handle is more than just a username, it's a
              vital part of your brand identity. Here's why it's so important:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>
                <strong>Brand Recognition:</strong> A consistent handle across
                platforms makes it easier for customers to find and recognise
                your business
              </li>
              <li>
                <strong>Discoverability:</strong> People use handles to tag and
                mention businesses, increasing your visibility
              </li>
              <li>
                <strong>Professionalism:</strong> A well-chosen handle gives
                your business credibility and makes you appear established
              </li>
              <li>
                <strong>Marketing:</strong> Your handle appears in all your
                social media marketing materials, from business cards to email
                signatures
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
              Best Practices for Choosing a Handle
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Selecting the right handle for your business is crucial. Here are
              our top tips:
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-3">
              1. Keep It Consistent
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Try to use the same handle across all social media platforms. This
              makes it easier for customers to find you and helps build brand
              recognition. If your preferred handle is taken on one platform,
              consider variations that are still recognisable (like adding
              "official," your location, or industry).
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-3">
              2. Make It Memorable
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Choose a handle that's easy to remember and spell. Avoid complex
              spellings, excessive numbers, or special characters that make it
              hard for people to find you. Simple is almost always better.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-3">
              3. Keep It Short
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Shorter handles are easier to remember and take up less space in
              marketing materials. They're also more likely to be available
              across multiple platforms. Aim for 15 characters or fewer if
              possible.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-3">
              4. Reflect Your Brand
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Your handle should ideally include your business name or clearly
              relate to what you do. This helps people immediately understand
              who you are when they see your handle. For instance, @SeamMedia
              clearly identifies our business.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-3">
              5. Check Availability Early
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Before settling on a business name, check if the handle is
              available on major social platforms. This can save you headaches
              down the track and ensure brand consistency from day one.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
              Common Handle Mistakes to Avoid
            </h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>
                Using different handles on different platforms (confuses your
                audience)
              </li>
              <li>
                Including too many numbers or special characters (hard to
                remember)
              </li>
              <li>
                Making it too long or complex (difficult to type and share)
              </li>
              <li>
                Using a handle that's too generic (gets lost among competitors)
              </li>
              <li>
                Choosing a handle that doesn't relate to your business (missed
                branding opportunity)
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
              Handles Across Different Platforms
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              While the concept is the same, handles work slightly differently
              across platforms:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>
                <strong>Instagram and X (formerly Twitter):</strong> Handles are preceded by
                @ and are used for tagging and mentions
              </li>
              <li>
                <strong>Facebook:</strong> Uses a custom URL (facebook.com/
                yourbusiness) instead of a traditional handle
              </li>
              <li>
                <strong>TikTok:</strong> Similar to Instagram, uses @ handles
                for identification
              </li>
              <li>
                <strong>LinkedIn:</strong> Uses custom URLs (linkedin.com/
                company/yourbusiness) for business pages
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
              Handle, Username or Display Name?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              These terms get mixed up, so here is how they fit together for a
              business account:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>
                <strong>Handle or username:</strong> the unique @ name, such as
                @seammedia. Only one account can have it on each platform.
              </li>
              <li>
                <strong>Display name:</strong> the readable name shown on your
                profile, such as &quot;Seam Media&quot;. Many accounts can share
                the same display name.
              </li>
              <li>
                <strong>Profile link:</strong> the web address built from your
                handle, which is what you put on your website, quotes and
                email signature.
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-6">
              For a local business, a made-up handle such as @smithplumbing or
              @smithplumbingfrankston is easier to find than a nickname or a
              string of numbers. Pick one version and use it everywhere, so a
              customer who sees your van, a post or your Google Business
              Profile can search the same name and land on your account.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
              Social Media Handle FAQs
            </h2>
            {faqs.map((faq) => (
              <div key={faq.q} className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.a}</p>
              </div>
            ))}

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
              Ready to Build Your Social Media Presence?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Choosing the right social media handles is just the first step in
              building a strong online presence. At Seam Media, we help
              businesses across Melbourne develop comprehensive social media
              strategies that drive real results.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              From setting up your social media accounts with the perfect
              handles to managing your ongoing content and engagement, we're
              here to help your business thrive online. See how our{" "}
              <Link
                href="/social-media"
                className="text-[#5e7986] hover:text-[#405e6b] font-medium underline transition-colors"
              >
                social media management
              </Link>{" "}
              works, compare the{" "}
              <Link
                href="/social-media-packages"
                className="text-[#5e7986] hover:text-[#405e6b] font-medium underline transition-colors"
              >
                social media packages
              </Link>
              , or{" "}
              <Link
                href="/contact"
                className="text-[#f5b5b5] hover:text-[#e8a5a5] font-medium transition-colors"
              >
                contact us
              </Link>{" "}
              to discuss how we can help grow your social media presence.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}

import { Metadata } from "next";
import Section from "@/components/ui/Section";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | Seam Media",
  description:
    "Digital marketing tips, insights, and industry news from the Seam Media team.",
};

export default function BlogPage() {
  const blogPosts = [
    {
      title: "Top 5 Website Design Tips",
      excerpt:
        "Learn the essential principles of effective website design that will help your site stand out and convert visitors.",
      slug: "website-design-tips",
      date: "March 15, 2024",
      category: "Web Design",
    },
    {
      title: "Top 5 Benefits of Leasing A Website",
      excerpt:
        "Discover why leasing a website might be the perfect solution for your business, from cost savings to flexibility.",
      slug: "leasing-website-benefits",
      date: "March 10, 2024",
      category: "Web Design",
    },
    {
      title: "SEO Melbourne – Small Business Top 5 Tips",
      excerpt:
        "Practical SEO strategies that Melbourne small businesses can implement today to improve their local search rankings.",
      slug: "seo-melbourne-tips",
      date: "March 5, 2024",
      category: "SEO",
    },
    {
      title: "The Benefits of Setting Up Google Business",
      excerpt:
        "Learn how a Google Business Profile can boost your local visibility and attract more customers to your business.",
      slug: "google-business-benefits",
      date: "February 28, 2024",
      category: "SEO",
    },
    {
      title: "Ranking your business locally on Google",
      excerpt:
        "A comprehensive guide to improving your local Google rankings and getting found by customers in your area.",
      slug: "ranking-locally-google",
      date: "February 20, 2024",
      category: "SEO",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Section background="gray">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our Blog
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Digital marketing tips, insights, and industry news
          </p>
        </div>
      </Section>

      {/* Blog Posts Grid */}
      <Section background="white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Placeholder Image */}
              <div className="h-48 bg-gradient-to-br from-[#f5b5b5] to-[#b5a5d5]" />

              <div className="p-6">
                {/* Category */}
                <span className="text-sm font-medium text-[#f5b5b5] uppercase tracking-wide">
                  {post.category}
                </span>

                {/* Title */}
                <h2 className="text-xl font-bold text-gray-900 mt-2 mb-3">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-[#f5b5b5] transition-colors"
                  >
                    {post.title}
                  </Link>
                </h2>

                {/* Excerpt */}
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Date & Read More */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-[#f5b5b5] hover:text-[#e8a5a5] font-medium transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}

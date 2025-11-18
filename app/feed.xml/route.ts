import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://www.seammedia.com.au';

  const blogPosts = [
    {
      title: 'Top 5 Website Design Tips',
      slug: 'website-design-tips',
      description: 'Learn the essential principles of effective website design that will help your site stand out and convert visitors.',
      category: 'Web Design',
      pubDate: 'Mon, 15 Mar 2024 00:00:00 GMT',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&h=630&fit=crop',
      content: 'In today\'s digital landscape, your website is often the first impression potential customers have of your business. A well-designed website can make the difference between a visitor bouncing away or converting into a loyal customer.'
    },
    {
      title: 'Top 5 Benefits of Leasing A Website',
      slug: 'leasing-website-benefits',
      description: 'Discover why leasing a website might be the perfect solution for your business, offering flexibility and professional results without the upfront costs.',
      category: 'Web Design',
      pubDate: 'Wed, 20 Mar 2024 00:00:00 GMT',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&fit=crop',
      content: 'Website leasing is becoming an increasingly popular option for businesses looking to establish or upgrade their online presence without the significant upfront investment of purchasing a custom website outright.'
    },
    {
      title: 'SEO Melbourne – Small Business Top 5 Tips',
      slug: 'seo-melbourne-tips',
      description: 'Essential SEO strategies for Melbourne small businesses to improve local search rankings and attract more customers.',
      category: 'SEO',
      pubDate: 'Fri, 22 Mar 2024 00:00:00 GMT',
      image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=1200&h=630&fit=crop',
      content: 'For small businesses in Melbourne, competing in the digital marketplace can feel overwhelming. However, with the right SEO strategies, you can significantly improve your online visibility and attract more local customers.'
    },
    {
      title: 'The Benefits of Setting Up Google Business',
      slug: 'google-business-benefits',
      description: 'Learn how Google Business Profile can boost your local visibility, build trust, and drive more customers to your business.',
      category: 'Digital Marketing',
      pubDate: 'Mon, 25 Mar 2024 00:00:00 GMT',
      image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1200&h=630&fit=crop',
      content: 'In today\'s digital-first world, having a strong online presence is crucial for any business. One of the most powerful and free tools available is Google Business Profile (formerly Google My Business).'
    },
    {
      title: 'Ranking your business locally on Google',
      slug: 'ranking-locally-google',
      description: 'Master local SEO with our comprehensive guide to ranking higher in Google\'s local search results and Google Maps.',
      category: 'SEO',
      pubDate: 'Thu, 28 Mar 2024 00:00:00 GMT',
      image: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=1200&h=630&fit=crop',
      content: 'For local businesses, appearing in Google\'s local search results can be the difference between thriving and merely surviving. When potential customers search for services "near me" or in their area, you want your business to be front and center.'
    },
  ];

  const rssItems = blogPosts
    .map(
      (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${baseUrl}/blog/${post.slug}</link>
      <guid isPermaLink="true">${baseUrl}/blog/${post.slug}</guid>
      <description><![CDATA[<img src="${post.image}" alt="${post.title}" /><br/><br/>${post.description}<br/><br/>${post.content}]]></description>
      <category>${post.category}</category>
      <pubDate>${post.pubDate}</pubDate>
      <enclosure url="${post.image}" type="image/jpeg" length="0" />
    </item>`
    )
    .join('');

  const rssFeed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Seam Media Blog</title>
    <link>${baseUrl}/blog</link>
    <description>Digital marketing insights, tips, and strategies from Seam Media - Melbourne's leading digital marketing agency.</description>
    <language>en-AU</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml" />
    <image>
      <url>${baseUrl}/logo.png</url>
      <title>Seam Media Blog</title>
      <link>${baseUrl}/blog</link>
    </image>${rssItems}
  </channel>
</rss>`;

  return new NextResponse(rssFeed, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate',
    },
  });
}

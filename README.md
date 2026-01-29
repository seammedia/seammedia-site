# Seam Media - Digital Marketing Agency Website

A modern, responsive website for Seam Media built with Next.js 16, TypeScript, and Tailwind CSS v4. This site recreates the original Seam Media design from archived sources with improved performance and modern web standards.

## 🚀 Features

- **Modern Stack**: Built with Next.js 14, TypeScript, and Tailwind CSS
- **Fully Responsive**: Mobile-first design that works on all devices
- **SEO Optimized**: Meta tags, semantic HTML, and optimized page structure
- **Fast Performance**: Optimized images, code splitting, and efficient loading
- **Contact Form**: Ready-to-integrate contact form (placeholder included)
- **Client Logos**: Showcase your client portfolio
- **Testimonials**: Display client feedback and reviews
- **Services Grid**: Comprehensive service offerings display
- **Blog Ready**: Blog structure prepared for content

## 📁 Project Structure

```
seam-media/
├── app/                    # Next.js 14 App Router
│   ├── about/             # About page
│   ├── blog/              # Blog listing page
│   ├── clients/           # Clients page
│   ├── contact/           # Contact page
│   ├── services/          # Services page
│   ├── layout.tsx         # Root layout (Header/Footer)
│   ├── page.tsx           # Home page
│   ├── not-found.tsx      # 404 page
│   └── globals.css        # Global styles + Tailwind
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   │   ├── Button.tsx
│   │   └── Section.tsx
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── ServicesGrid.tsx
│   ├── ServiceCard.tsx
│   ├── DataDriven.tsx
│   ├── WhyChooseUs.tsx
│   ├── Testimonials.tsx
│   ├── ClientLogos.tsx
│   └── ContactForm.tsx
├── lib/                   # Utility functions
│   └── utils.ts
├── public/               # Static assets
│   └── images/          # Image files
│       ├── clients/     # Client logos
│       └── services/    # Service icons
└── package.json         # Dependencies
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. **Clone the repository**:
   ```bash
   cd /Users/heathmaes/seam-media
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to:
   ```
   http://localhost:3000
   ```

## 🎨 Customization

### Brand Colors

The brand colors are defined in `app/globals.css`:

```css
--color-pink: #f5b5b5;
--color-coral: #e8a5a5;
--color-blue: #5865f2;
--color-purple: #b5a5d5;
--color-yellow: #f5d45d;
--color-green: #a5d5b5;
```

### Adding Images

1. **Hero Background**: Replace the Unsplash URL in `components/Hero.tsx` with your ocean/water background image
2. **Client Logos**: Add logo files to `public/images/clients/`
3. **Service Icons**: Add custom icons to `public/images/services/`
4. **Section Images**: Replace Unsplash URLs in components with your own images

### Contact Form Integration

The contact form in `components/ContactForm.tsx` currently logs to console. To integrate with a service:

**Option 1: Formspree** (Recommended for simple setup)
```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });
  // Handle response
};
```

**Option 2: Next.js API Route**
1. Create `app/api/contact/route.ts`
2. Add your email service integration (Sendgrid, Resend, etc.)
3. Update the form to POST to `/api/contact`

## 📦 Building for Production

```bash
npm run build
npm start
```

## 🚀 Deploying to Vercel

### Method 1: Via Vercel Dashboard

1. Push your code to GitHub:
   ```bash
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/seam-media.git
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js and configure build settings
6. Click "Deploy"

### Method 2: Via Vercel CLI

```bash
npm install -g vercel
vercel login
vercel
```

Follow the prompts to deploy.

### Adding a Custom Domain

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain (e.g., seammedia.com.au)
4. Update your DNS records as instructed by Vercel

## 📝 Environment Variables

If you add any API keys or secrets, create a `.env.local` file:

```bash
# Example for Formspree
NEXT_PUBLIC_FORMSPREE_ID=your_form_id

# Example for email service
EMAIL_API_KEY=your_api_key
```

**Never commit `.env.local` to Git!** It's already in `.gitignore`.

## 🎯 TODO / Next Steps

- [ ] Add actual client logo images to `public/images/clients/`
- [ ] Replace placeholder images with real brand photos
- [ ] Set up contact form integration (Formspree/API route)
- [ ] Add Google Analytics or tracking
- [ ] Create individual service detail pages
- [ ] Add blog post content
- [ ] Set up sitemap generation
- [ ] Configure robots.txt
- [ ] Add Open Graph images for social sharing
- [ ] Optimize images (use Next.js Image component where applicable)

## 📄 Pages Overview

### Home (`/`)
- Hero section with ocean background
- Services grid (8 services)
- Data-driven results section
- Why choose us with checkmarks
- Testimonials
- Client logos
- Contact form

### Services (`/services`)
- Service overview with detailed grid
- Call-to-action to contact

### About (`/about`)
- Company story
- Values and approach
- Team information (ready to add)

### Contact (`/contact`)
- Contact information (email, phone, location)
- Contact form
- Map integration ready

### Clients (`/clients`)
- Client logos showcase
- Testimonials
- Case studies ready

### Blog (`/blog`)
- Blog post listing
- Individual blog posts ready to add

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎓 Key Learnings & Best Practices

### 1. Hero Section Alignment
- Use `px-6 lg:px-12` on the outer `max-w-7xl` container to match navigation padding
- This ensures hero text aligns with the logo at the same left margin
- Pattern: Navigation and hero should share the same container padding structure

### 2. CSS Specificity Issues
Global CSS rules can override Tailwind utility classes. We fixed:
- `h1-h6 { color: var(--foreground) }` prevented `text-white` from working
- `a { color: inherit }` prevented navigation links from being white
- Solution: Remove color declarations from global element selectors

### 3. Deployment & Caching
- Vercel automatically deploys on git push to main branch
- Browser caching can show old versions - always test in incognito mode
- Hard refresh: `Cmd + Shift + R` (Mac) or `Ctrl + F5` (Windows)
- Check Vercel deployment logs to confirm latest commit is deployed

### 4. Tailwind CSS v4 Compatibility
- Uses `@import "tailwindcss"` instead of separate CSS files
- Includes built-in preflight/reset - don't add your own
- Uses `@theme inline` for custom CSS variables
- No `tailwind.config.ts` file needed for basic setup

## 📚 Tech Stack

- **Framework**: Next.js 16.0.3 (App Router with Turbopack)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4
- **React**: React 19.2.0
- **Deployment**: Vercel (automatic via GitHub integration)
- **Package Manager**: npm

## ⚠️ Important Tailwind CSS v4 Considerations

### CSS Reset Conflicts
**CRITICAL**: Do NOT use aggressive CSS resets like this in `globals.css`:

```css
/* ❌ DON'T DO THIS - Conflicts with Tailwind */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

**Why?** This universal selector strips ALL padding/margin from every element and will:
- Break Tailwind utility classes (`py-*`, `px-*`, `justify-center`, etc.)
- Cause spacing inconsistencies throughout the site
- Require inline style hacks to override

**Solution**: Tailwind v4 includes its own built-in preflight/reset. Let Tailwind handle it.

### Global Style Overrides
Be careful with global element selectors in `globals.css`:

```css
/* ⚠️ This can override Tailwind text color classes */
h1, h2, h3, h4, h5, h6 {
  color: var(--foreground); /* Don't set color here */
}

/* ⚠️ This can override Tailwind text color on links */
a {
  color: inherit; /* Don't set color here */
}
```

**Best Practice**: Only set font-weight, line-height, and font-family in global element rules. Let Tailwind classes control colors.

### Flexbox Centering
When centering with flexbox, if Tailwind classes aren't working, use inline styles as a fallback:

```tsx
<div
  className="flex flex-wrap gap-8"
  style={{
    justifyContent: 'center',  // Explicit inline style
    display: 'flex',
    flexWrap: 'wrap'
  }}
>
```

### Service Card Layout Pattern
For centered, responsive card grids:

```tsx
<section className="bg-gray-50 pt-16 pb-24 px-4">
  <div className="max-w-7xl mx-auto w-full">
    <div
      className="flex flex-wrap gap-8"
      style={{ justifyContent: 'center' }}
    >
      {items.map((item) => (
        <div
          key={item.id}
          style={{
            width: '280px',
            maxWidth: '320px',
            flexShrink: 0
          }}
        >
          <Card {...item} />
        </div>
      ))}
    </div>
  </div>
</section>
```

**Key Points**:
- Use `max-w-7xl mx-auto` for centered container
- Inline `justifyContent: 'center'` ensures centering works
- Fixed card widths (280px-320px) for consistency
- `flexShrink: 0` prevents cards from shrinking

## 🐛 Troubleshooting

### Port already in use
```bash
# Kill process on port 3000
kill -9 $(lsof -ti:3000)
# Or use a different port
npm run dev -- -p 3001
```

### Build errors
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

## 📞 Support

For questions or issues:
- Check the [Next.js documentation](https://nextjs.org/docs)
- Check the [Tailwind CSS documentation](https://tailwindcss.com/docs)
- Review the [Vercel deployment docs](https://vercel.com/docs)

## 🔒 Hidden/Unlisted Pages

### Social Media Packages (`/social-media-packages`)
A pricing page for social media management packages, not linked in the navigation menu. Used for sending directly to leads.

**URL**: `https://www.seammedia.com.au/social-media-packages`

**Packages**:
- **Basic** ($199/month): 1-2 posts per week, no contracts, basic graphic design, weekly content calendar, email support
- **Pro** ($399/month): 2-3 posts per week, no contracts, custom graphic design, weekly content calendar, priority email support
- **Max** ($599/month): 3-4 posts per week, no contracts, premium graphic design, paid ad management, weekly content calendar, phone & email support

**Stripe Integration**:
Each package "Get Started" button links to a Stripe payment link:
- Basic: `https://buy.stripe.com/6oU4gA1wN3cc0Qr05J0Fj0y`
- Pro: `https://buy.stripe.com/9B6cN6a3j000eHh4lZ0Fj0z`
- Max: `https://buy.stripe.com/cNi14o3EV00056H3hV0Fj0A`

**Creating New Hidden Pages**:
1. Create a new folder in `app/` (e.g., `app/your-hidden-page/`)
2. Add a `page.tsx` file with your content
3. Do NOT add links to the page in `Header.tsx` or navigation
4. Share the direct URL with intended recipients

**Page Structure**:
The social media packages page reuses components from `/social-media` with additions:
- Custom `Packages` component with pricing cards
- Package data includes: name, price, period, description, features array, popular flag, CTA text, and Stripe link
- Contact form dropdown updated to show package options

### Key Implementation Details

**Adding Stripe Payment Links to Pricing Cards**:
```tsx
const packages = [
  {
    name: "Basic",
    price: "$199",
    period: "/month",
    description: "Description here",
    features: ["Feature 1", "Feature 2"],
    popular: false,
    cta: "Get Started",
    link: "https://buy.stripe.com/YOUR_LINK_ID",
  },
  // ... more packages
];

// In the JSX:
<a href={pkg.link} className="...">
  {pkg.cta}
</a>
```

**Styling the "Most Popular" Package**:
```tsx
{pkg.popular && (
  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
    <span className="bg-pink-500 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
      Most Popular
    </span>
  </div>
)}
```

The popular package also gets enhanced styling:
- `scale-105` for slight enlargement
- `shadow-2xl shadow-pink-500/10` for glow effect
- `border-pink-500/30` for accent border
- Pink gradient background

### Support Tier Pattern

All package pages (social media, website maintenance, etc.) follow a consistent support tier structure:

| Tier | Support Level | Description |
|------|---------------|-------------|
| Basic/Essential | Email support | Standard email response times |
| Pro/Professional | Priority email support | Faster email response, higher priority |
| Max/Business | Phone & email support | Direct phone access plus priority email |

This pattern ensures consistency across all service offerings and clear value progression between tiers.

## 📄 License

This project is for Seam Media. All rights reserved.

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**

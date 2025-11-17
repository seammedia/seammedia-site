# Seam Media - Digital Marketing Agency Website

A modern, responsive website for Seam Media built with Next.js 14, TypeScript, and Tailwind CSS. This site recreates the original Seam Media design from archived sources with improved performance and modern web standards.

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

## 📚 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Deployment**: Vercel (recommended)
- **Package Manager**: npm

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

## 📄 License

This project is for Seam Media. All rights reserved.

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**

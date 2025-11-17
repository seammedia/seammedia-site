# Seam Media - Complete Setup & Deployment Guide

This guide will walk you through setting up a GitHub repository and deploying your Seam Media website to Vercel.

## 📋 Prerequisites

Before you begin, make sure you have:
- [x] A GitHub account (sign up at [github.com](https://github.com))
- [x] A Vercel account (sign up at [vercel.com](https://vercel.com))
- [x] Git installed on your computer
- [x] The Seam Media project on your local machine

## 🗂️ Step 1: Create a GitHub Repository

### Option A: Via GitHub Website

1. **Go to GitHub** and log in to your account
2. **Click the "+" icon** in the top right corner
3. **Select "New repository"**
4. **Fill in the details**:
   - Repository name: `seam-media`
   - Description: "Seam Media - Digital Marketing Agency Website"
   - Visibility: Choose "Private" or "Public"
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
5. **Click "Create repository"**

### Option B: Via GitHub CLI

```bash
# Install GitHub CLI (if not already installed)
brew install gh  # macOS
# or download from https://cli.github.com/

# Login to GitHub
gh auth login

# Create repository
gh repo create seam-media --private --source=. --remote=origin --push
```

## 🚀 Step 2: Push Code to GitHub

### First Time Setup

```bash
# Navigate to your project directory
cd /Users/heathmaes/seam-media

# Initialize git (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit - Seam Media website"

# Add GitHub remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/seam-media.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Verify Upload

1. Go to `https://github.com/YOUR_USERNAME/seam-media`
2. You should see all your files uploaded

## 🌐 Step 3: Deploy to Vercel

### Method 1: Via Vercel Dashboard (Recommended)

1. **Go to [vercel.com](https://vercel.com)** and log in
2. **Click "Add New..."** → **"Project"**
3. **Import Git Repository**:
   - If this is your first time, click "Import Git Repository"
   - Connect your GitHub account if not already connected
   - Select the `seam-media` repository
4. **Configure Project**:
   - **Project Name**: `seam-media` (or your preference)
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `.next` (auto-detected)
   - **Install Command**: `npm install` (auto-detected)
5. **Environment Variables** (skip for now, add later if needed)
6. **Click "Deploy"**

### Method 2: Via Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy (from project directory)
cd /Users/heathmaes/seam-media
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? Select your account
# - Link to existing project? No
# - What's your project's name? seam-media
# - In which directory is your code located? ./
# - Want to override the settings? No

# For production deployment
vercel --prod
```

## 🎯 Step 4: Verify Deployment

1. **Check Deployment Status**:
   - Vercel will show build logs
   - Wait for "Ready" status (usually 1-2 minutes)

2. **Visit Your Site**:
   - Vercel provides a URL like: `https://seam-media.vercel.app`
   - Or: `https://seam-media-YOUR_USERNAME.vercel.app`

3. **Test All Pages**:
   - [ ] Home page loads correctly
   - [ ] Services page works
   - [ ] About page displays
   - [ ] Contact page and form render
   - [ ] Clients page shows
   - [ ] Blog page appears
   - [ ] Navigation works
   - [ ] Footer displays correctly

## 🌍 Step 5: Add Custom Domain (Optional)

### If you own seammedia.com.au (or any domain):

1. **In Vercel Dashboard**:
   - Go to your project
   - Click "Settings" → "Domains"
   - Click "Add"
   - Enter your domain: `seammedia.com.au`
   - Click "Add"

2. **Configure DNS** (at your domain registrar):

   **Option A: Use Vercel Nameservers** (Recommended)
   - Vercel will provide nameservers (e.g., ns1.vercel-dns.com)
   - Update your domain's nameservers at your registrar
   - Wait for DNS propagation (can take 24-48 hours)

   **Option B: Use A/CNAME Records**
   - Add an A record: `@ → 76.76.21.21`
   - Add a CNAME record: `www → cname.vercel-dns.com`
   - Wait for DNS propagation

3. **Verify**:
   - Once DNS propagates, visit your custom domain
   - Vercel automatically provisions SSL certificate

## 📝 Step 6: Make Updates

### Local Development Workflow

```bash
# Make changes to your code
# ...

# Test locally
npm run dev

# Commit changes
git add .
git commit -m "Description of changes"

# Push to GitHub
git push origin main

# Vercel automatically deploys the update!
```

### Automatic Deployments

- **Every push to `main`** triggers a production deployment
- **Pull requests** create preview deployments
- **Rollbacks** are available in Vercel dashboard

## 🔧 Step 7: Essential Configuration

### Add Environment Variables (if needed)

1. **In Vercel Dashboard**:
   - Go to Settings → Environment Variables
   - Add variables like:
     ```
     NEXT_PUBLIC_FORMSPREE_ID=your_form_id
     NEXT_PUBLIC_GA_ID=your_google_analytics_id
     ```
   - Click "Save"
   - Redeploy for changes to take effect

### Configure Analytics

**Google Analytics:**
```bash
# Install package
npm install @next/third-parties

# Add to layout.tsx
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
      </body>
    </html>
  )
}
```

### Set up Contact Form

**Using Formspree:**
1. Go to [formspree.io](https://formspree.io)
2. Create a free account
3. Create a new form
4. Get your form endpoint ID
5. Update `components/ContactForm.tsx`:
   ```typescript
   const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
     method: "POST",
     headers: { "Content-Type": "application/json" },
     body: JSON.stringify(formData),
   });
   ```

## 📊 Step 8: Monitor Performance

### Vercel Analytics (Built-in)

1. Go to your project in Vercel
2. Click "Analytics" tab
3. Enable Web Analytics (free)
4. View real-time performance metrics

### Lighthouse Scores

```bash
# Test locally
npm run build
npm start

# Open Chrome DevTools
# Go to Lighthouse tab
# Run audit
```

## 🔒 Security Best Practices

### Protect Sensitive Data

1. **Never commit**:
   - API keys
   - Passwords
   - Private keys
   - `.env.local` files

2. **Use Environment Variables**:
   - Store secrets in Vercel dashboard
   - Access via `process.env.VARIABLE_NAME`

3. **Review Dependencies**:
   ```bash
   npm audit
   npm audit fix
   ```

## 📋 Maintenance Checklist

### Weekly
- [ ] Check Vercel deployments for errors
- [ ] Monitor site performance
- [ ] Review contact form submissions

### Monthly
- [ ] Update dependencies: `npm update`
- [ ] Run security audit: `npm audit`
- [ ] Check Lighthouse scores
- [ ] Review analytics data

### Quarterly
- [ ] Update major dependencies
- [ ] Review and optimize images
- [ ] Update content (blog posts, testimonials)
- [ ] Backup repository

## 🆘 Troubleshooting

### Deployment Fails

**Check build logs in Vercel:**
```bash
# Common fixes:
# 1. Clear Next.js cache
rm -rf .next

# 2. Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# 3. Test build locally
npm run build
```

### Domain Not Working

1. **Check DNS settings** at your registrar
2. **Wait for propagation** (up to 48 hours)
3. **Clear browser cache**
4. **Check Vercel domain settings**

### Git Push Issues

```bash
# If you get "remote rejected" errors:
git pull origin main --rebase
git push origin main

# If you get authentication errors:
# Use Personal Access Token instead of password
# Generate at: github.com → Settings → Developer settings → Personal access tokens
```

## 📞 Support Resources

- **Vercel Documentation**: [vercel.com/docs](https://vercel.com/docs)
- **Next.js Documentation**: [nextjs.org/docs](https://nextjs.org/docs)
- **GitHub Help**: [docs.github.com](https://docs.github.com)
- **Vercel Community**: [github.com/vercel/vercel/discussions](https://github.com/vercel/vercel/discussions)

## ✅ Final Checklist

Before going live, ensure:

- [ ] All pages load without errors
- [ ] Images display correctly
- [ ] Contact form works (test submission)
- [ ] Navigation links work
- [ ] Mobile responsive design works
- [ ] SEO meta tags are correct
- [ ] Custom domain configured (if applicable)
- [ ] SSL certificate active (automatic with Vercel)
- [ ] Analytics tracking installed
- [ ] 404 page works
- [ ] Performance is optimized (Lighthouse > 90)

---

**Congratulations! Your Seam Media website is now live! 🎉**

For ongoing updates, simply:
1. Make changes locally
2. Test with `npm run dev`
3. Commit and push to GitHub
4. Vercel auto-deploys!

# Remittra Landing Page

A modern, responsive landing page for Remittra fintech application built with Next.js, TypeScript, and TailwindCSS.

## Live Demo
[Insert your deployed link here - Vercel/Netlify]

## Features Implemented

###  Hero Section
- Cyan blue background (#00BFFF) with animated decorative elements
- Clean white tagline: "Your All-in-One Multi-Currency Wallet" 
- Call-to-action button with hover scale and shadow animations
- Responsive typography that scales beautifully across devices

###  Features Section  
- Responsive grid layout (1→2→4 columns on mobile→tablet→desktop)
- Four feature cards as specified:
  - **Multi-Currency Wallet** - Currency management with multiple currency support
  - **Ajo Savings Groups** - Traditional savings circles with modern fintech
  - **Virtual Cards** - Instant virtual card generation for online purchases  
  - **P2P Transfers** - Cross-border money transfers with low fees
- Each card includes icon, title, and descriptive text
- Smooth hover animations with lift and shadow effects

###  Footer Section
- **Left**: Remittra logo (clean text-based design)
- **Center**: Navigation links (About · Careers · Contact) 
- **Right**: Social media icons (LinkedIn, Twitter, Instagram)
- Fully responsive with mobile-first stacking

###  Technical Implementation
- **Reusable Components**: Button, Card, Hero, Features, CallToAction, Footer
- **Mobile-first responsive design** using TailwindCSS utilities
- **Clean typography** with Inter font for excellent readability
- **TypeScript** implementation with proper type safety
- **Performance optimized** with Next.js App Router
- **Accessibility features** with proper ARIA labels and semantic markup

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## Setup Instructions

1. **Clone the repository**
```bash
git clone [your-repo-url]
cd remittra-landing
```

2. **Install dependencies**
```bash
npm install
```

3. **Run development server**
```bash
npm run dev
```

4. **Open in browser**
```
http://localhost:3000
```

##  Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify
```bash
# Build the project
npm run build

# Deploy dist folder to Netlify
```

##  Project Structure

```
remittra-landing/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── ui/
│       │   ├── Button.tsx
│       │   └── Card.tsx
│       ├── Hero.tsx
│       ├── Features.tsx
│       ├── CallToAction.tsx
│       └── Footer.tsx
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

##  Design Decisions

- **Color Palette**: Used the specified cyan blue (#00BFFF) as primary with complementary whites and grays
- **Typography**: Inter font for modern, clean readability across all screen sizes  
- **Component Architecture**: Modular, reusable components following React best practices
- **Animations**: Subtle hover effects and transitions to enhance user experience without being distracting
- **Responsive Design**: Mobile-first approach ensuring excellent experience on all devices

## Custom Features Added

- Smooth scroll behavior and fade-in animations
- Enhanced button variants (primary, secondary, outline)  
- Gradient backgrounds and decorative elements
- Comprehensive TypeScript interfaces
- SEO optimized with proper meta tags
- Accessibility improvements with ARIA labels

##  Responsive Breakpoints

- **Mobile**: < 768px (1 column grid)
- **Tablet**: 768px - 1024px (2 column grid) 
- **Desktop**: > 1024px (4 column grid)

---

**Built for Remittra Frontend Developer Position - Stage 1**

*Demonstrating expertise in React, TypeScript, TailwindCSS, responsive design, and modern web development practices.*
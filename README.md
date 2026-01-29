# Aikyam — Sacred Digital Harmony

A modern, fully responsive website for Aikyam, India's priest-led spiritual ecosystem. Built with Next.js, React, Tailwind CSS, and Framer Motion for a stunning, interactive experience.

## Features

- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Sticky Navigation**: Beautiful header with smooth scroll detection
- **Interactive Components**: Animated sections with Framer Motion
- **SEO Optimized**: Dynamic sitemap, robots.txt, and metadata
- **Production Ready**: Performance optimizations, security headers, and compression
- **Multiple Pages**: Home, About, Contact, Privacy Policy, Terms of Service
- **Modern UI**: Purple and gold color scheme with engaging animations

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Type Safety**: TypeScript
- **Forms**: React Hook Form

## Project Structure

```
.
├── app/
│   ├── page.tsx                 # Home page
│   ├── about/                   # About page
│   ├── contact/                 # Contact page
│   ├── privacy/                 # Privacy Policy page
│   ├── terms/                   # Terms of Service page
│   ├── api/
│   │   ├── sitemap/             # Dynamic sitemap generation
│   │   └── robots/              # Dynamic robots.txt
│   ├── layout.tsx               # Root layout with metadata
│   └── globals.css              # Global styles
├── components/
│   ├── aikyam/                  # App-specific components
│   │   ├── Header.tsx           # Sticky header with navigation
│   │   ├── HeroSection.tsx      # Hero with animations
│   │   ├── CoreBelief.tsx       # Core values section
│   │   ├── Features.tsx         # Features showcase
│   │   ├── PriestLed.tsx        # Priest authentication
│   │   ├── AikyamAI.tsx         # AI features
│   │   ├── DevoteeJourney.tsx   # Journey timeline
│   │   ├── TemplesAndPriests.tsx# Network overview
│   │   ├── Careers.tsx          # Job listings
│   │   ├── ClosingInvocation.tsx# Closing section
│   │   └── Footer.tsx           # Footer with links
│   └── ui/                      # shadcn/ui components
├── public/
│   ├── sitemap.xml              # Static sitemap
│   └── robots.txt               # Robot crawler rules
├── next.config.mjs              # Next.js configuration
├── tailwind.config.ts           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
├── package.json                 # Dependencies
├── .env.example                 # Environment variables template
└── README.md                    # This file
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd aikyam
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Copy environment variables:
```bash
cp .env.example .env.local
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Building for Production

### Development Build
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm start
```

### Preview Production Build
```bash
npm run build
npm start
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Go to [Vercel Dashboard](https://vercel.com)
3. Click "New Project" and select your GitHub repository
4. Configure environment variables in Vercel dashboard
5. Click "Deploy"

The site will automatically build and deploy on every push to main.

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Deploy the `.next` folder to your hosting provider

### Environment Variables

Create a `.env.local` file with:
```
NEXT_PUBLIC_APP_NAME=Aikyam
NEXT_PUBLIC_APP_DOMAIN=https://yourdomain.com
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=your-analytics-id
NEXT_PUBLIC_CONTACT_EMAIL=hello@aikyam.in
NEXT_PUBLIC_API_URL=https://api.yourdomain.com
```

## Features & Components

### Header Component
- Sticky navigation with scroll detection
- Responsive mobile menu
- Smooth animations
- Navigation links to all sections

### Home Page Sections
1. **Hero Section** - Full-screen intro with call-to-action buttons
2. **Core Belief** - Mission statement and values
3. **Features** - Four main features with icons
4. **Priest-Led** - Authenticity and verification details
5. **Aikyam AI** - AI preservation features
6. **Devotee Journey** - 5-step process timeline
7. **Temples & Priests** - Network overview and stats
8. **Careers** - Job openings and culture
9. **Closing Invocation** - Spiritual closing section

### Additional Pages
- **About** - Company story, values, mission, and vision
- **Contact** - Contact form, information, and FAQ
- **Privacy Policy** - Data privacy details
- **Terms of Service** - Legal terms

## Performance Optimizations

- Image optimization with WebP and AVIF formats
- Production source maps disabled
- SWC minification enabled
- Gzip compression
- Cache headers optimization
- Lazy loading for animations

## Security Headers

The site includes:
- X-Content-Type-Options: nosniff
- X-Frame-Options: DENY
- X-XSS-Protection: 1; mode=block
- Referrer-Policy: strict-origin-when-cross-origin
- Permissions-Policy: geolocation=(), microphone=(), camera=()

## SEO Features

- Dynamic sitemap generation
- Robots.txt configuration
- Open Graph meta tags
- Twitter Card support
- Structured data ready
- Mobile-responsive design
- Fast page load times

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Customization

### Colors
Edit `/app/globals.css` to customize the color scheme:
```css
@theme inline {
  --color-purple-900: #581c87;
  --color-yellow-400: #facc15;
  /* ... more colors */
}
```

### Fonts
Update `/app/layout.tsx` to change fonts:
```tsx
import { YourFont } from 'next/font/google'
const font = YourFont({ subsets: ['latin'] })
```

### Content
Edit component files in `/components/aikyam/` to update content

## Performance Metrics

Target metrics:
- Lighthouse Performance: 90+
- Lighthouse Accessibility: 95+
- Lighthouse Best Practices: 95+
- Lighthouse SEO: 100

## Troubleshooting

### Build Errors
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Port Already in Use
```bash
# Use a different port
npm run dev -- -p 3001
```

### Dependencies Issues
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
```

## Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## License

© 2024 Aikyam. All rights reserved.

## Support

For support, contact: hello@aikyam.in

## Deployment Checklist

- [ ] Environment variables configured
- [ ] Domain name configured
- [ ] SSL certificate enabled
- [ ] Analytics integrated
- [ ] Contact form backend connected
- [ ] Email notifications configured
- [ ] Backup strategy in place
- [ ] CDN configured
- [ ] Monitoring set up
- [ ] Security headers verified

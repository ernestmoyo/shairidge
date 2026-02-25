# Shairidge Website

Professional website for Shairidge Financial Advisors and Business Consultants built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Responsive Design** - Works perfectly on mobile, tablet, and desktop
- **Modern UI** - Contemporary minimalist design with professional styling
- **Fast Performance** - Optimized with Next.js static generation and image optimization
- **SEO Optimized** - Meta tags, sitemap, robots.txt, and structured data
- **Contact Form** - Fully functional contact form with validation and email integration
- **WhatsApp Integration** - Floating widget and CTA buttons for easy communication
- **Professional Pages**:
  - Home page with hero section and service overview
  - Services page with detailed offerings
  - Team page with member profiles
  - Contact page with multiple communication options

## 📋 Prerequisites

- Node.js 18+ and npm
- Git

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd shairidge
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.example .env.local
   ```

   Edit `.env.local` with your actual configuration:
   - WhatsApp phone number
   - Email service credentials (SMTP)
   - Google Analytics ID (optional)

4. **Run development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📧 Email Configuration

The website uses Nodemailer for email delivery. Configure it in `.env.local`:

**Using Gmail:**
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-specific-password
CONTACT_EMAIL=inquiries@shairidge.com
CONTACT_PHONE=+1-234-567-8900
```

**Using Gmail App Password:**
1. Enable 2-factor authentication on your Google account
2. Generate an App Password (16 characters)
3. Use this as `SMTP_PASS`

**Using Other SMTP Services:**
- Update `SMTP_HOST` and `SMTP_PORT` accordingly
- Use your service credentials

## 📱 WhatsApp Integration

Configure WhatsApp in `.env.local`:
```
NEXT_PUBLIC_WHATSAPP_NUMBER=+1234567890
NEXT_PUBLIC_WHATSAPP_MESSAGE=Hello Shairidge, I'm interested in your services
```

## 🏗️ Project Structure

```
src/
├── app/
│   ├── (pages)/
│   │   ├── services/page.tsx
│   │   ├── team/page.tsx
│   │   └── contact/page.tsx
│   ├── api/
│   │   └── contact/route.ts
│   ├── layout.tsx
│   ├── page.tsx
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── cards/ (ServiceCard, TeamCard)
│   ├── forms/ (ContactForm)
│   ├── layout/ (Header, Footer)
│   ├── sections/ (HeroSection, etc.)
│   └── common/ (Button, WhatsAppWidget, Animations)
├── lib/
│   ├── constants.ts
│   ├── validations.ts
│   ├── email.ts
│   └── utils.ts
├── types/
│   └── business.ts
└── styles/
    └── globals.css
```

## 🧪 Development

- **Build project**: `npm run build`
- **Start production server**: `npm run start`
- **Lint code**: `npm run lint`
- **Type check**: `npm run type-check`

## 📊 Google Analytics

To enable Google Analytics:

1. Create a Google Analytics property at [analytics.google.com](https://analytics.google.com)
2. Get your measurement ID (format: `G-XXXXXXXXXX`)
3. Add to `.env.local`:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push code to GitHub**
   ```bash
   git remote add origin <github-url>
   git push -u origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Add environment variables in project settings
   - Click "Deploy"

3. **Configure domain**
   - In Vercel dashboard, go to "Domains"
   - Add custom domain (shairidge.com)
   - Update DNS records (instructions provided by Vercel)

### Environment Variables for Production

Set these in Vercel project settings:
```
NEXT_PUBLIC_WHATSAPP_NUMBER
NEXT_PUBLIC_WHATSAPP_MESSAGE
NEXT_PUBLIC_GA_ID
NEXT_PUBLIC_SITE_URL=https://shairidge.com
SMTP_HOST
SMTP_PORT
SMTP_SECURE
SMTP_USER
SMTP_PASS
CONTACT_EMAIL
CONTACT_PHONE
```

## 📝 Content Management

### Update Services

Edit `public/data/services.json`:
```json
{
  "id": "service-id",
  "name": "Service Name",
  "title": "Short Title",
  "icon": "IconName",
  "description": "Detailed description...",
  "benefits": ["Benefit 1", "Benefit 2", "Benefit 3"],
  "slug": "service-slug"
}
```

### Update Team Members

Edit `public/data/team.json`:
```json
{
  "id": "member-id",
  "name": "Full Name",
  "title": "Job Title",
  "bio": "Bio text...",
  "image": "/images/team/photo.jpg",
  "expertise": ["Expertise 1", "Expertise 2"],
  "linkedinUrl": "https://linkedin.com/in/username"
}
```

### Update Contact Info

Edit `src/lib/constants.ts` and update `CONTACT_INFO` object

## 🎨 Customization

### Colors

Primary colors are defined in:
- `tailwind.config.ts` - Update theme colors
- `src/styles/globals.css` - CSS variables

Current palette:
- Primary Blue: `#1e3a8a`
- Secondary Teal: `#0d9488`
- Accent Gold: `#d97706`

### Logo

Replace `public/logo.svg` with your own logo design

### Typography

Fonts are configured in:
- `src/app/layout.tsx` - Google Fonts imports
- `tailwind.config.ts` - Font family variables

## 🔒 Security

- Form submissions are rate-limited (5 per IP per hour)
- CSRF protection through Next.js API routes
- Environment variables kept secure with `.env.local`
- Input validation with Zod schema

## 📞 Contact Form Workflow

1. User fills and submits form
2. Client-side validation with React Hook Form
3. Server-side validation with Zod
4. Rate limiting check
5. Email sent to business inbox
6. Confirmation email sent to user
7. Success/error response sent to user

## 🐛 Troubleshooting

**Contact form not sending emails?**
- Check SMTP credentials in `.env.local`
- Verify email service allows less secure apps (Gmail)
- Check firewall/ISP blocking SMTP port

**Images not loading?**
- Ensure image paths are correct in public folder
- Check image formats (JPG, PNG, SVG supported)

**Build errors?**
- Clear `.next` folder: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules && npm install`
- Check TypeScript errors: `npm run type-check`

## 📄 License

Private project for Shairidge

## 📧 Support

For issues or questions, contact the development team.

---

**Last Updated**: February 2025
**Built with Next.js 14** ⚡

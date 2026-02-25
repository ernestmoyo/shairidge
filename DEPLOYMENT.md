# 🚀 Deployment Guide - Shairidge Website

Complete step-by-step instructions for deploying the Shairidge website to Vercel.

## Prerequisites

- GitHub account (for version control)
- Vercel account (free at [vercel.com](https://vercel.com))
- Domain name (shairidge.com - already registered)
- Email service configured (Gmail, SendGrid, etc.)
- WhatsApp Business Account (optional but recommended)

## Step-by-Step Deployment

### 1. Prepare GitHub Repository

#### First Time Setup:

```bash
cd c:\Users\ernes\Documents\Projects\shairidge

# Initialize git if not already done
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Complete Shairidge website"

# Add GitHub remote
git remote add origin https://github.com/YOUR_USERNAME/shairidge.git

# Push to GitHub
git branch -M main
git push -u origin main
```

#### Subsequent Updates:

```bash
# Make changes to files
# Stage and commit
git add .
git commit -m "Your commit message"

# Push to GitHub
git push origin main
```

### 2. Connect to Vercel

#### Option A: Using Vercel UI (Easiest)

1. Go to [vercel.com](https://vercel.com)
2. Sign up / Log in with GitHub
3. Click "New Project"
4. Select your GitHub repository `shairidge`
5. Click "Import"
6. Vercel will auto-detect Next.js framework
7. Click "Deploy"

#### Option B: Using Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy from project directory
cd c:\Users\ernes\Documents\Projects\shairidge
vercel

# Follow prompts to:
# - Link to Vercel account
# - Confirm project name
# - Confirm build settings
# - Confirm root directory (.)
```

### 3. Configure Environment Variables

After initial deployment:

1. Go to **Project Settings** → **Environment Variables**
2. Add all variables from `.env.example`:

**WhatsApp Configuration:**
```
NEXT_PUBLIC_WHATSAPP_NUMBER = +1234567890
NEXT_PUBLIC_WHATSAPP_MESSAGE = Hello Shairidge, I'm interested in your services
```

**Email Configuration (Choose one SMTP service):**

**Gmail SMTP:**
```
SMTP_HOST = smtp.gmail.com
SMTP_PORT = 587
SMTP_SECURE = false
SMTP_USER = your-email@gmail.com
SMTP_PASS = your-app-specific-password
CONTACT_EMAIL = inquiries@shairidge.com
CONTACT_PHONE = +1-234-567-8900
```

**SendGrid:**
```
SMTP_HOST = smtp.sendgrid.net
SMTP_PORT = 587
SMTP_SECURE = false
SMTP_USER = apikey
SMTP_PASS = SG.your-sendgrid-api-key
CONTACT_EMAIL = inquiries@shairidge.com
CONTACT_PHONE = +1-234-567-8900
```

**Google Analytics (Optional):**
```
NEXT_PUBLIC_GA_ID = G-XXXXXXXXXX
```

**Site Configuration:**
```
NEXT_PUBLIC_SITE_URL = https://shairidge.com
```

3. Click "Save"
4. Redeploy project: **Settings** → **Git** → Scroll down → **Deploy** button

### 4. Set Up Custom Domain

1. In Vercel, go to **Settings** → **Domains**
2. Click "Add Domain"
3. Enter: `shairidge.com`
4. Choose one of the options:

**Option A: Using Vercel Nameservers (Easiest)**
- Vercel will provide nameservers
- Go to your domain registrar
- Update nameservers to Vercel's
- Wait 24-48 hours for propagation

**Option B: Using CNAME (If using current DNS provider)**
- Vercel provides CNAME record
- Add CNAME in your DNS provider:
  - Name: `www`
  - Value: `cname.vercel-dns.com`
- Add A record for root:
  - Name: `@`
  - Value: `76.76.19.165`

5. Click "Verify" once DNS is updated

### 5. Configure Email Service

#### Gmail Setup (Free, Limited):

1. Enable 2-Factor Authentication on your Gmail account
2. Go to [myaccount.google.com/app-passwords](https://myaccount.google.com/app-passwords)
3. Generate an "App Password" for Mail
4. Copy the 16-character password
5. Use this as `SMTP_PASS` in environment variables

⚠️ **Limitation**: Gmail allows ~500 emails/day. For high volume, use SendGrid.

#### SendGrid Setup (Free Tier, 100 emails/day):

1. Create free account at [sendgrid.com](https://sendgrid.com)
2. Verify sender email
3. Create API key in Settings → API Keys
4. Copy API key
5. Use credentials in environment variables

### 6. Test Email Functionality

After deployment:

1. Visit [https://shairidge.com/contact](https://shairidge.com/contact)
2. Fill out contact form with test data
3. Submit form
4. Check your email (CONTACT_EMAIL)
5. Verify you received the form submission

### 7. Enable Auto-Deployments

Vercel automatically deploys on each push to GitHub:

1. Make a small code change locally
2. Commit and push to GitHub
3. Watch deployment in Vercel dashboard
4. Takes ~2-3 minutes

### 8. Monitor and Analytics

**Vercel Monitoring:**
- Go to **Analytics** tab
- Monitor page performance
- Check Core Web Vitals
- View error logs

**Google Analytics:**
1. Set up GA property at [analytics.google.com](https://analytics.google.com)
2. Get Measurement ID (G-XXXXXXXXXX)
3. Add to `NEXT_PUBLIC_GA_ID` environment variable
4. After 24 hours, view traffic data in GA

## Post-Deployment Checklist

- [ ] Domain resolves to Shairidge website (`shairidge.com`)
- [ ] All pages load without errors
- [ ] Contact form submits successfully
- [ ] Email received for form submission
- [ ] WhatsApp button works (opens WhatsApp)
- [ ] Mobile responsive design works
- [ ] No console errors (check Developer Tools)
- [ ] Site is HTTPS/SSL enabled
- [ ] Sitemap is accessible (`/sitemap.xml`)
- [ ] Robots.txt is accessible (`/robots.txt`)
- [ ] Google Analytics tracking (if enabled)

## Common Issues & Fixes

### **Domain not resolving**
- **Cause**: DNS propagation takes 24-48 hours
- **Fix**: Wait and clear browser cache (Ctrl+Shift+Delete)

### **Contact form not sending emails**
- **Cause**: SMTP credentials incorrect or service blocked
- **Solutions**:
  - Verify credentials in environment variables
  - For Gmail: Ensure app password (not regular password)
  - For Gmail: Check "Less secure app access" is enabled (older accounts)
  - For SendGrid: Verify sender email is confirmed

### **Site showing old content**
- **Cause**: Browser cache
- **Fix**: Hard refresh (Ctrl+Shift+R)

### **Build failing**
- **Cause**: Environment variables missing or code issues
- **Fix**: Check build logs in Vercel → Deployments → Failed build → View logs

### **WhatsApp link not working**
- **Cause**: WhatsApp phone number format incorrect
- **Fix**: Ensure number includes country code: `+1234567890`

## Updating Content

### Update Services:
```bash
# Edit file
nano public/data/services.json

# Commit and push
git add public/data/services.json
git commit -m "Update services"
git push origin main

# Vercel auto-deploys in ~2-3 minutes
```

### Update Team:
```bash
# Edit file
nano public/data/team.json

# Commit and push
git add public/data/team.json
git commit -m "Update team members"
git push origin main
```

### Update Contact Info:
```bash
# Edit file
nano src/lib/constants.ts

# Update CONTACT_INFO object

git add src/lib/constants.ts
git commit -m "Update contact information"
git push origin main
```

## Maintenance

### Monthly Tasks:
- Monitor error logs in Vercel
- Check analytics in Vercel dashboard
- Check Google Analytics for traffic trends
- Verify email delivery working

### Quarterly Tasks:
- Update team/service photos
- Review and update content
- Check for dependency updates
- Test contact form functionality

### Annual Tasks:
- Review and renew SSL certificates (auto-renewed by Vercel)
- Update privacy policy if applicable
- Archive old analytics data

## Rollback to Previous Version

If something breaks:

```bash
# View deployment history
vercel list

# Rollback to previous version
vercel rollback

# Or redeploy specific commit
git log  # find commit hash
git revert <commit-hash>
git push origin main
```

## Performance Optimization

### Monitor Core Web Vitals:
1. Vercel Dashboard → Analytics
2. Google Analytics → Web Vitals
3. Lighthouse score goal: > 90

### Optimization Tips:
- Limit image sizes
- Use WebP format when possible
- Minimize JavaScript
- Enable caching headers
- Use CDN (included with Vercel)

## Support & Resources

- **Vercel Documentation**: https://vercel.com/docs
- **Next.js Documentation**: https://nextjs.org/docs
- **GitHub Help**: https://docs.github.com
- **Google Analytics Help**: https://support.google.com/analytics
- **Nodemailer Documentation**: https://nodemailer.com

---

**Deployment Status**: ✅ Ready to Deploy
**Last Updated**: February 2025
**Next Review**: Quarterly

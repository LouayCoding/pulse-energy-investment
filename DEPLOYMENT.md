# 🚀 Deployment Guide - Pulse Energy Investment Platform

## Pre-Deployment Checklist

- [ ] Update Discord Webhook URL in environment variables
- [ ] Change password if needed (default: NDIUN8943)
- [ ] Test all forms and validation locally
- [ ] Test digital signature on mobile and desktop
- [ ] Verify Discord notifications are working
- [ ] Review all content for accuracy

## Quick Deploy Options

### Option 1: Vercel (Recommended - 5 minutes)

**Why Vercel?**
- Zero-config Next.js deployment
- Automatic HTTPS
- Global CDN
- Serverless functions
- Free tier available

**Steps:**
1. Push code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Add environment variables:
   ```
   DISCORD_WEBHOOK_URL=your_webhook_url
   INVESTMENT_PASSWORD=NDIUN8943
   ```
6. Click "Deploy"
7. Done! Your site is live.

**Custom Domain:**
- Go to Project Settings > Domains
- Add your domain (e.g., invest.pulse-energy.nl)
- Follow DNS configuration steps

---

### Option 2: Netlify (Alternative - 5 minutes)

**Steps:**
1. Push code to GitHub
2. Visit [netlify.com](https://netlify.com)
3. Click "Add new site" > "Import an existing project"
4. Select your repository
5. Configure:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Add environment variables in Site Settings
7. Deploy!

---

### Option 3: Docker (Self-Hosted)

**Dockerfile:**
```dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --production

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

**docker-compose.yml:**
```yaml
version: '3.8'
services:
  pulse-energy:
    build: .
    ports:
      - "3000:3000"
    environment:
      - DISCORD_WEBHOOK_URL=${DISCORD_WEBHOOK_URL}
      - INVESTMENT_PASSWORD=${INVESTMENT_PASSWORD}
    restart: unless-stopped
```

**Deploy:**
```bash
docker-compose up -d
```

---

### Option 4: VPS/Server (Full Control)

**Requirements:**
- Node.js 20+
- PM2 (process manager)
- Nginx (reverse proxy)

**Setup:**
```bash
# Install dependencies
npm install

# Build
npm run build

# Install PM2
npm install -g pm2

# Start with PM2
pm2 start npm --name "pulse-energy" -- start

# Save PM2 config
pm2 save
pm2 startup
```

**Nginx Configuration:**
```nginx
server {
    listen 80;
    server_name invest.pulse-energy.nl;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

## Environment Variables

### Required Variables

```env
# Discord Webhook - REQUIRED for notifications
DISCORD_WEBHOOK_URL=https://discord.com/api/webhooks/xxxxx/xxxxx

# Password - REQUIRED for access control
INVESTMENT_PASSWORD=NDIUN8943
```

### How to Get Discord Webhook URL

1. Open your Discord server
2. Go to **Server Settings** > **Integrations**
3. Click **Webhooks** > **New Webhook**
4. Name it "Pulse Energy Investments"
5. Select the channel where you want notifications
6. Click **Copy Webhook URL**
7. Paste into your environment variables

---

## Post-Deployment Steps

### 1. Test the Application

- [ ] Visit your deployed URL
- [ ] Enter password (NDIUN8943)
- [ ] Fill out investor form
- [ ] Draw signature
- [ ] Submit proposal
- [ ] Verify Discord notification received

### 2. SSL/HTTPS Configuration

**Vercel/Netlify:** Automatic SSL included ✅

**Self-Hosted:**
```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx

# Get SSL certificate
sudo certbot --nginx -d invest.pulse-energy.nl

# Auto-renewal (Certbot handles this automatically)
```

### 3. Custom Domain Setup

**DNS Records:**
```
Type    Name    Value
A       @       your_server_ip
A       www     your_server_ip

# Or for Vercel/Netlify:
CNAME   @       yourproject.vercel.app
CNAME   www     yourproject.vercel.app
```

### 4. Performance Optimization

**Already Included:**
- ✅ Next.js automatic code splitting
- ✅ Image optimization
- ✅ Font optimization
- ✅ Minified CSS/JS
- ✅ Gzip compression

**Additional (Optional):**
- Add CDN (Cloudflare)
- Enable caching headers
- Use edge functions

---

## Monitoring & Analytics

### Discord Notifications

Every proposal submission sends a rich embed with:
- Investor information
- Investment amount
- Timestamp
- Unique reference number

### Error Logging

Add error tracking (optional):
```bash
npm install @sentry/nextjs
```

Configure in `next.config.js`:
```javascript
const { withSentryConfig } = require('@sentry/nextjs');

module.exports = withSentryConfig(
  nextConfig,
  { silent: true }
);
```

---

## Troubleshooting

### Build Fails

**Error:** "Module not found"
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Discord Webhook Not Working

1. Check webhook URL is correct
2. Verify webhook is not deleted in Discord
3. Check environment variable is set correctly
4. Test webhook with curl:
```bash
curl -X POST "YOUR_WEBHOOK_URL" \
  -H "Content-Type: application/json" \
  -d '{"content":"Test message"}'
```

### Password Not Working

1. Check `INVESTMENT_PASSWORD` environment variable
2. Verify no extra spaces in .env file
3. Restart application after changing env vars

### Mobile Display Issues

1. Clear browser cache
2. Check viewport meta tag is present
3. Test on multiple devices
4. Use Chrome DevTools device emulation

---

## Security Best Practices

### Production Environment

- [ ] Use strong, unique password
- [ ] Never commit `.env.local` to git
- [ ] Use HTTPS only
- [ ] Enable CORS restrictions
- [ ] Add rate limiting
- [ ] Monitor Discord webhook for abuse
- [ ] Regular dependency updates

### Rate Limiting (Optional)

Add to API route:
```typescript
// app/api/submit-proposal/route.ts
import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5 // max 5 requests per window
});
```

---

## Backup & Recovery

### Database Backup

This application is stateless - all data goes to Discord.

**Backup Strategy:**
1. Export Discord channel messages regularly
2. Save webhook URLs securely
3. Keep copy of environment variables

### Code Backup

```bash
# Push to GitHub
git push origin main

# Create backup branch
git checkout -b backup-$(date +%Y%m%d)
git push origin backup-$(date +%Y%m%d)
```

---

## Support & Maintenance

### Regular Updates

```bash
# Check for updates
npm outdated

# Update dependencies
npm update

# Update to latest major versions
npx npm-check-updates -u
npm install
```

### Monitoring Checklist

- [ ] Check Discord notifications weekly
- [ ] Monitor application logs
- [ ] Test forms monthly
- [ ] Review submissions
- [ ] Update content as needed
- [ ] Security patches

---

## Cost Estimates

### Vercel (Free Tier)
- ✅ Free for hobby projects
- Unlimited bandwidth
- 100 GB-hours/month

### Netlify (Free Tier)
- ✅ Free for personal projects
- 100 GB bandwidth/month
- 300 build minutes/month

### VPS (Self-Hosted)
- DigitalOcean: $6/month
- Hetzner: €4/month
- Linode: $5/month

### Domain
- .nl domain: ~€10/year
- .com domain: ~$12/year

**Total Cost (Vercel + Domain): ~€10/year** 🎉

---

## Questions?

For deployment support, contact:
- **Technical**: rachid@pulse-energy.nl
- **Phone**: +31 6 41237903
- **Website**: pulse-energy.nl

---

**Last Updated:** November 2025  
**Version:** 1.0.0

# Pulse Energy - Investment Proposal Platform

A professional, secure Next.js application for presenting investment proposals with digital signature capabilities and real-time Discord notifications.

## ✨ Features

- **🔐 Password Protection**: Secure access control (NDIUN8943)
- **📱 Fully Responsive**: Mobile-first design, works on all devices
- **✍️ Digital Signatures**: Touch-enabled signature canvas
- **🔔 Discord Notifications**: Instant proposal alerts via webhook
- **🎨 Professional UX**: Clean, minimal design with smooth animations
- **✅ Form Validation**: Real-time validation and error handling
- **⚡ TypeScript**: Full type safety and IntelliSense support
- **🚀 Production Ready**: Optimized for deployment

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Signatures**: React Signature Canvas
- **Language**: TypeScript
- **Fonts**: Lexend & Montserrat (via Next.js Font Optimization)

## 📦 Installation

### 1. Clone the Repository
```bash
git clone <repository-url>
cd pulse-energy-investment
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Copy `env.example` to `.env.local` and update the values:

```bash
cp env.example .env.local
```

Edit `.env.local`:
```env
DISCORD_WEBHOOK_URL=https://discord.com/api/webhooks/YOUR_WEBHOOK_ID/YOUR_WEBHOOK_TOKEN
INVESTMENT_PASSWORD=NDIUN8943
```

**Getting a Discord Webhook URL:**
1. Open Discord Server Settings
2. Go to Integrations > Webhooks
3. Create New Webhook
4. Copy the Webhook URL

### 4. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables:
   - `DISCORD_WEBHOOK_URL`
   - `INVESTMENT_PASSWORD`
4. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/pulse-energy-investment)

### Deploy to Netlify

1. Push your code to GitHub
2. Import project in [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `.next`
5. Add environment variables
6. Deploy!

### Self-Hosted Deployment

```bash
# Build for production
npm run build

# Start production server
npm start
```

Server will run on port 3000 by default.

## 🔐 Security

- Password protection on entry
- Environment variables for sensitive data
- No-index meta tags for privacy
- Secure form validation

## 📱 Responsive Design

- Mobile-first approach
- Touch-friendly signature canvas
- Adaptive layouts for all screen sizes
- Print-friendly styling

## 🔔 Discord Integration

When an investment proposal is submitted, a rich embed is sent to Discord containing:
- Investor information
- Investment details
- Submission timestamp
- Reference number

## 🎨 Design System

- **Primary Font**: Lexend (body text)
- **Heading Font**: Montserrat (headings)
- **Signature Font**: Dancing Script (signatures)
- **Color Scheme**: Blue-based palette with Pulse branding

## 📄 Document Structure

1. **Executive Summary**: Company overview and urgent production needs
2. **Key Terms**: Investment amount, valuation, ownership
3. **Market Opportunity**: Distribution channels and market analysis
4. **Financial Projections**: 5-year revenue and EBITDA forecasts
5. **Exit Strategy**: Return scenarios and exit options
6. **Signature Section**: Digital signature capture
7. **Submit Section**: Final submission with validation

## 🚀 Deployment

Build for production:
```bash
npm run build
npm start
```

## 📝 Environment Variables

```env
DISCORD_WEBHOOK_URL=your_discord_webhook_url
INVESTMENT_PASSWORD=NDIUN8943
```

## 🤝 Contributing

This is a private investment document. Contributions are restricted to authorized personnel only.

## 📞 Contact

For technical support or questions:
- **Company**: Pulse Energy B.V.
- **Website**: pulse-energy.nl
- **Phone**: +31 6 41237903

---

© 2024 Pulse Energy B.V. All rights reserved. Confidential investment proposal.

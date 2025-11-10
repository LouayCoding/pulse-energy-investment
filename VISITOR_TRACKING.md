# 👁️ Visitor Tracking - Pulse Energy Investment Platform

## Overview

Automatische visitor tracking via Discord webhooks met real-time notificaties voor elke bezoeker en actie op de investment portal.

## 🔔 Tracked Events

### 1. **Initial Visit (Password Page)**
Wordt getriggerd zodra iemand de website bezoekt.

**Informatie:**
- 🌐 IP Address
- ⏰ Timestamp (Amsterdam timezone)
- 📱 Device Type (Mobile/Desktop)
- 🌍 Browser (Chrome, Firefox, Safari, etc.)
- 💻 Operating System
- 🔗 Referrer (waar vandaan)
- 📍 Approximate Location (van timezone)
- 🔐 Status: "Password Page"

### 2. **Successful Authentication**
Wanneer iemand het juiste wachtwoord invoert.

**Extra Informatie:**
- 🔐 Status: "Authenticated - Viewing Proposal"
- Alle basis visitor info

### 3. **Started Filling Form**
Wanneer iemand begint met invullen van het investeerders formulier.

**Extra Informatie:**
- 🔐 Status: "Started Filling Investment Form"
- Betekent: Serieuze interesse!

### 4. **Proposal Submitted**
Via de bestaande submit webhook (andere notificatie).

**Volledige Informatie:**
- Alle investeerder gegevens
- Digital signature
- Investment details

## 📊 Discord Notifications

### Voorbeeld Notificatie:

```
👁️ NEW VISITOR ON INVESTMENT PORTAL
Someone has accessed the Pulse Energy investment proposal

🌐 IP Address: 213.127.45.123
⏰ Time: 10/11/2024, 14:23:45
📱 Device: Desktop
🌍 Browser: Chrome
💻 OS: Windows
🔗 Referrer: Direct Access
📍 Location: Amsterdam
🔐 Access Stage: Password Page
```

## 🔧 Technical Implementation

### Hardcoded Webhook
```typescript
const DISCORD_WEBHOOK = 'https://discord.com/api/webhooks/1437532846758826116/...'
```

### API Route
`/api/track-visitor` - POST endpoint

### Tracking Triggers
1. **Password Page**: `useEffect` on mount
2. **Authentication**: After successful login
3. **Form Start**: On first character in name field
4. **Submission**: Separate webhook (existing)

## 🛡️ Privacy & Security

### IP Address Handling
- **Fortigate/WAF**: Checks `X-Forwarded-For` header
- **Direct**: Falls back to `X-Real-IP`
- **Privacy**: No IP is stored, only sent to Discord

### User Agent Parsing
- Device detection (Mobile/Desktop)
- Browser identification
- OS detection
- No fingerprinting or tracking cookies

### Location Approximation
- Based on timezone (e.g., "Europe/Amsterdam" → "Amsterdam")
- No GPS or precise geolocation
- Privacy-friendly approach

## 📈 Analytics Value

### Conversion Funnel Tracking

```
Landing (Password Page)
    ↓ [X% authenticate]
Viewing Proposal
    ↓ [X% start form]
Filling Form
    ↓ [X% complete]
Submission
```

### Key Metrics
- **Total Visitors**: How many people access the page
- **Authentication Rate**: % who enter correct password
- **Engagement Rate**: % who start filling form
- **Conversion Rate**: % who complete submission

### Business Intelligence
- **Peak Hours**: When do most visitors come?
- **Device Split**: Mobile vs Desktop usage
- **Referral Sources**: Where do visitors come from?
- **Drop-off Points**: Where do people leave?

## 🎯 Use Cases

### 1. Immediate Alerts
Get instant Discord ping when someone visits your investment portal.

### 2. Competitor Tracking
See if competitors or other VCs are checking your proposal.

### 3. Follow-up Timing
Know when someone was active to time your follow-up calls.

### 4. Security Monitoring
Detect unusual access patterns or potential security issues.

### 5. Marketing Attribution
Track which marketing channels drive the most qualified visitors.

## 🔍 Example Visitor Journey

```
14:23:45 - 👁️ NEW VISITOR (Amsterdam, Chrome, Desktop)
14:24:12 - 🔓 AUTHENTICATED (Same visitor)
14:25:03 - ✍️ STARTED FILLING FORM
14:27:45 - 🚀 PROPOSAL SUBMITTED
         → Name: John Doe
         → Email: john@example.com
         → Amount: €500,000
```

## ⚙️ Configuration

### No Environment Variables Needed
Webhook URL is hardcoded in `/app/api/track-visitor/route.ts`

### Customization Options

**Change Webhook:**
```typescript
const DISCORD_WEBHOOK = 'your_new_webhook_url'
```

**Add More Tracking Points:**
```typescript
fetch('/api/track-visitor', {
  method: 'POST',
  body: JSON.stringify({
    location: 'Amsterdam',
    stage: 'Your Custom Event',
  }),
})
```

**Disable Tracking:**
Comment out the tracking calls in:
- `components/PasswordProtection.tsx`
- `components/InvestmentProposal.tsx`

## 🚀 Production Deployment

### Works Out of the Box
- ✅ No additional setup needed
- ✅ Works on Vercel, Netlify, etc.
- ✅ Serverless function compatible
- ✅ No database required

### Performance Impact
- **Minimal**: Async fetch, doesn't block UI
- **Fast**: Single webhook call per event
- **Reliable**: Error handling prevents crashes

## 📝 Best Practices

### 1. Monitor Discord Channel
Set up a dedicated channel for visitor tracking:
```
#pulse-visitors
```

### 2. Notification Management
Use Discord's notification settings:
- Desktop notifications for submissions
- Mobile push for new visitors
- Mute during off-hours if needed

### 3. Data Analysis
Export Discord messages weekly to analyze patterns:
- Visitor trends
- Conversion rates
- Peak activity times

### 4. Privacy Compliance
Inform visitors about tracking in your privacy policy:
```
"We collect visitor analytics including IP addresses 
and browser information for security and analytics purposes."
```

## 🔒 Security Considerations

### Webhook Protection
- **Never commit** the webhook URL to public repos
- **Rotate webhook** if exposed
- **Monitor** for abuse in Discord server audit log

### Rate Limiting
Consider adding rate limiting to prevent spam:
```typescript
// TODO: Add rate limiting per IP
const rateLimiter = new Map()
```

### Error Handling
All tracking calls have try-catch blocks to prevent:
- App crashes from webhook failures
- User experience disruption
- Data loss

## 📞 Support

For questions about visitor tracking:
- **Technical**: Check Discord webhook settings
- **Issues**: Verify webhook URL is correct
- **Privacy**: Review GDPR compliance documentation

---

**Last Updated:** November 2025  
**Version:** 1.0.0

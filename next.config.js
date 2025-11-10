/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    DISCORD_WEBHOOK_URL: process.env.DISCORD_WEBHOOK_URL || 'https://discord.com/api/webhooks/placeholder',
  },
}

module.exports = nextConfig

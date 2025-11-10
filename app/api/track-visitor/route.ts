import { NextRequest, NextResponse } from 'next/server'

const DISCORD_WEBHOOK = 'https://discord.com/api/webhooks/1437532846758826116/v0NzAh2KZ8cr7yfMBzwvk-0c1z18hyF4omPM4xq5a9h46MLQmvp8-FiwMXQv_age3Jfe'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    
    // Get visitor information
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'Unknown'
    
    const userAgent = request.headers.get('user-agent') || 'Unknown'
    const referer = request.headers.get('referer') || 'Direct'
    const timestamp = new Date().toISOString()
    
    // Parse user agent for device info
    const isMobile = /Mobile|Android|iPhone|iPad/i.test(userAgent)
    const browser = userAgent.match(/(Chrome|Firefox|Safari|Edge|Opera)/i)?.[0] || 'Unknown'
    const os = userAgent.match(/(Windows|Mac|Linux|Android|iOS)/i)?.[0] || 'Unknown'
    
    // Create Discord embed
    const embed = {
      title: '👁️ NEW VISITOR ON INVESTMENT PORTAL',
      description: 'Someone has accessed the Pulse Energy investment proposal',
      color: 0x3b82f6, // Blue color
      fields: [
        {
          name: '🌐 IP Address',
          value: ip,
          inline: true
        },
        {
          name: '⏰ Time',
          value: new Date().toLocaleString('nl-NL', { 
            timeZone: 'Europe/Amsterdam',
            dateStyle: 'short',
            timeStyle: 'medium'
          }),
          inline: true
        },
        {
          name: '📱 Device',
          value: isMobile ? 'Mobile/Tablet' : 'Desktop',
          inline: true
        },
        {
          name: '🌍 Browser',
          value: browser,
          inline: true
        },
        {
          name: '💻 OS',
          value: os,
          inline: true
        },
        {
          name: '🔗 Referrer',
          value: referer === 'Direct' ? 'Direct Access' : referer,
          inline: true
        },
        {
          name: '📍 Location',
          value: data.location || 'Unknown',
          inline: true
        },
        {
          name: '🔐 Access Stage',
          value: data.stage || 'Landing Page',
          inline: true
        }
      ],
      timestamp: timestamp,
      footer: {
        text: 'Pulse Energy Visitor Tracking'
      }
    }

    // Send to Discord
    const discordResponse = await fetch(DISCORD_WEBHOOK, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        embeds: [embed],
        username: 'Pulse Visitor Tracker',
      }),
    })

    if (!discordResponse.ok) {
      console.error('Discord webhook failed:', await discordResponse.text())
    }

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error('Visitor tracking error:', error)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}

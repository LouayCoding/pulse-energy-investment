import { NextRequest, NextResponse } from 'next/server'
import { SubmissionData, DiscordEmbed } from '@/types'

export async function POST(request: NextRequest) {
  try {
    const data: SubmissionData = await request.json()
    
    // Validate required fields
    const requiredFields = ['name', 'address', 'nationality', 'phone', 'email', 'signature']
    for (const field of requiredFields) {
      if (!data[field as keyof SubmissionData]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        )
      }
    }

    // Create Discord embed
    const embed: DiscordEmbed = {
      title: '🚀 NEW INVESTMENT PROPOSAL SUBMITTED',
      description: `**Pulse Energy B.V.** has received a new investment proposal for **€${data.investmentAmount.toLocaleString()}**`,
      color: 0x2563eb, // Pulse blue color
      fields: [
        {
          name: '👤 Investor Information',
          value: `**Name:** ${data.name}\n**Nationality:** ${data.nationality}\n**Email:** ${data.email}\n**Phone:** ${data.phone}`,
          inline: false
        },
        {
          name: '📍 Address',
          value: data.address,
          inline: false
        },
        {
          name: '💰 Investment Details',
          value: `**Amount:** €${data.investmentAmount.toLocaleString()}\n**Ownership:** ${data.ownershipPercentage}%\n**Valuation:** €1,640,000 (post-money)`,
          inline: true
        },
        {
          name: '📅 Submission Details',
          value: `**Date:** ${new Date(data.timestamp).toLocaleString('en-GB')}\n**Status:** Pending Review\n**Reference:** PE-${Date.now().toString().slice(-6)}`,
          inline: true
        }
      ],
      timestamp: data.timestamp,
      footer: {
        text: 'Pulse Energy Investment Portal • Confidential'
      }
    }

    // Send to Discord webhook
    const webhookUrl = process.env.DISCORD_WEBHOOK_URL
    if (!webhookUrl) {
      console.error('Discord webhook URL not configured')
      return NextResponse.json(
        { error: 'Webhook not configured' },
        { status: 500 }
      )
    }

    const discordResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        embeds: [embed],
        username: 'Pulse Energy Bot'
      }),
    })

    if (!discordResponse.ok) {
      const errorText = await discordResponse.text()
      console.error('Failed to send Discord notification:', {
        status: discordResponse.status,
        statusText: discordResponse.statusText,
        error: errorText
      })
      
      // Continue even if Discord fails - don't block the submission
      console.warn('Discord notification failed, but submission recorded')
    }

    // Generate reference number
    const referenceNumber = `PE-${Date.now().toString().slice(-6)}`
    
    // Log submission for audit trail (this always happens)
    console.log('Investment proposal submitted:', {
      reference: referenceNumber,
      name: data.name,
      email: data.email,
      amount: data.investmentAmount,
      timestamp: data.timestamp,
      discordSent: discordResponse.ok
    })

    return NextResponse.json({ 
      success: true, 
      message: 'Proposal submitted successfully',
      reference: referenceNumber,
      notificationSent: discordResponse.ok
    })

  } catch (error) {
    console.error('Submission error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

import type { Metadata } from 'next'
import { Montserrat, Lexend } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['300', '400', '500', '600', '700', '800'],
})

const lexend = Lexend({
  subsets: ['latin'],
  variable: '--font-lexend',
  weight: ['300', '400', '500', '600'],
})

export const metadata: Metadata = {
  title: 'Pulse Energy - Investment Proposal',
  description: 'Professional investment proposal for Pulse Energy B.V. - €500,000 investment opportunity',
  keywords: 'investment, energy drinks, Pulse Energy, Netherlands, funding',
  robots: 'noindex, nofollow', // Keep private
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${lexend.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="font-lexend bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  )
}

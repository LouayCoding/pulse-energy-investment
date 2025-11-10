export interface InvestorData {
  name: string
  address: string
  nationality: string
  phone: string
  email: string
  date: string
}

export interface SubmissionData extends InvestorData {
  signature: string
  timestamp: string
  investmentAmount: number
  ownershipPercentage: number
}

export interface DiscordEmbed {
  title: string
  description: string
  color: number
  fields: Array<{
    name: string
    value: string
    inline?: boolean
  }>
  timestamp: string
  footer: {
    text: string
  }
}

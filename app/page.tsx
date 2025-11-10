'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import PasswordProtection from '@/components/PasswordProtection'
import InvestmentProposal from '@/components/InvestmentProposal'

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  if (!isAuthenticated) {
    return <PasswordProtection onAuthenticated={() => setIsAuthenticated(true)} />
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <InvestmentProposal />
    </motion.div>
  )
}

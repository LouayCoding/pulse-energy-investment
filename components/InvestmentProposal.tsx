'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import SignatureCanvas from 'react-signature-canvas'
import { CheckCircle2 } from 'lucide-react'
import Header from './sections/Header'
import ExecutiveSummary from './sections/ExecutiveSummary'
import KeyTerms from './sections/KeyTerms'
import MarketOpportunity from './sections/MarketOpportunity'
import FinancialProjections from './sections/FinancialProjections'
import ExitStrategy from './sections/ExitStrategy'
import SignatureSection from './sections/SignatureSection'
import SubmitSection from './sections/SubmitSection'
import { InvestorData } from '@/types'

export default function InvestmentProposal() {
  const [investorData, setInvestorData] = useState<InvestorData>({
    name: '',
    address: '',
    nationality: '',
    phone: '',
    email: '',
    date: new Date().toLocaleDateString('en-GB'),
  })
  
  const [hasSignature, setHasSignature] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const signatureRef = useRef<SignatureCanvas>(null)

  const handleInputChange = async (field: keyof InvestorData, value: string) => {
    setInvestorData(prev => {
      const newData = { ...prev, [field]: value }
      
      // Track when user starts filling form (only once)
      if (field === 'name' && value.length === 1 && !prev.name) {
        try {
          const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
          const location = timezone.split('/')[1]?.replace(/_/g, ' ') || 'Unknown'
          
          fetch('/api/track-visitor', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              location,
              stage: 'Started Filling Investment Form',
            }),
          })
        } catch (error) {
          console.error('Form tracking error:', error)
        }
      }
      
      return newData
    })
  }

  const handleSignature = () => {
    if (signatureRef.current) {
      const isEmpty = signatureRef.current.isEmpty()
      setHasSignature(!isEmpty)
    }
  }

  const clearSignature = () => {
    if (signatureRef.current) {
      signatureRef.current.clear()
      setHasSignature(false)
    }
  }

  const handleSubmit = async () => {
    if (!isFormValid()) return

    setIsSubmitting(true)

    try {
      const signatureData = signatureRef.current?.toDataURL()
      
      const submissionData = {
        ...investorData,
        signature: signatureData,
        timestamp: new Date().toISOString(),
        investmentAmount: 500000,
        ownershipPercentage: 30.5,
      }

      // Send to Discord webhook
      const response = await fetch('/api/submit-proposal', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      })

      if (response.ok) {
        setIsSubmitted(true)
      } else {
        throw new Error('Submission failed')
      }
    } catch (error) {
      console.error('Submission error:', error)
      alert('There was an error submitting your proposal. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const isFormValid = (): boolean => {
    return !!(
      investorData.name.trim() &&
      investorData.address.trim() &&
      investorData.nationality.trim() &&
      investorData.phone.trim() &&
      investorData.email.trim() &&
      hasSignature
    )
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="min-h-screen bg-gray-50 flex items-center justify-center p-4"
      >
        <div className="pulse-card text-center max-w-md">
          <div className="flex justify-center mb-4">
            <CheckCircle2 className="w-24 h-24 text-green-500" />
          </div>
          <h2 className="font-montserrat text-2xl font-bold text-gray-900 mb-4">
            Proposal Submitted Successfully!
          </h2>
          <p className="text-gray-600 mb-6">
            Thank you for your interest in Pulse Energy. We have received your investment proposal 
            and will be in touch within 24 hours.
          </p>
          <div className="text-sm text-gray-500">
            <p>Confirmation sent to: {investorData.email}</p>
            <p>Reference: PE-{Date.now().toString().slice(-6)}</p>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8 sm:py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Header />
          
          <div className="space-y-6 sm:space-y-8 lg:space-y-12">
            <ExecutiveSummary />
            <KeyTerms />
            <MarketOpportunity />
            <FinancialProjections />
            <ExitStrategy />
            
            <SignatureSection
              investorData={investorData}
              onInputChange={handleInputChange}
              signatureRef={signatureRef}
              hasSignature={hasSignature}
              onSignature={handleSignature}
              onClearSignature={clearSignature}
            />
            
            <SubmitSection
              isFormValid={isFormValid()}
              isSubmitting={isSubmitting}
              onSubmit={handleSubmit}
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

'use client'

import { motion } from 'framer-motion'
import { RefObject } from 'react'
import SignatureCanvas from 'react-signature-canvas'
import { InvestorData } from '@/types'
import { Check } from 'lucide-react'

interface SignatureSectionProps {
  investorData: InvestorData
  onInputChange: (field: keyof InvestorData, value: string) => void
  signatureRef: RefObject<SignatureCanvas>
  hasSignature: boolean
  onSignature: () => void
  onClearSignature: () => void
}

export default function SignatureSection({
  investorData,
  onInputChange,
  signatureRef,
  hasSignature,
  onSignature,
  onClearSignature,
}: SignatureSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="pulse-card"
    >
      <h2 className="font-montserrat text-3xl font-bold text-gray-900 mb-8">
        Signatures
      </h2>
      
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Founder Section */}
        <div className="bg-gray-50 p-6 rounded-xl">
          <h3 className="font-montserrat text-lg font-bold text-center text-gray-800 mb-6">
            Founder & CEO
          </h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-1">Full Name:</label>
              <input
                type="text"
                value="Rachid El Arcoubi"
                className="pulse-input bg-gray-100"
                readOnly
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-1">Title:</label>
              <input
                type="text"
                value="CEO & Statutory Director"
                className="pulse-input bg-gray-100"
                readOnly
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-1">Company:</label>
              <input
                type="text"
                value="Pulse Energy B.V."
                className="pulse-input bg-gray-100"
                readOnly
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-1">Date:</label>
              <input
                type="text"
                value={new Date().toLocaleDateString('en-GB')}
                className="pulse-input bg-gray-100"
                readOnly
              />
            </div>
            
            <div className="mt-6">
              <div className="font-montserrat text-lg text-center text-gray-700 py-4 italic">
                Rachid El Arcoubi
              </div>
              <div className="border-b-2 border-gray-400 mb-2"></div>
              <p className="text-center text-xs text-gray-500">Digital Signature</p>
            </div>
          </div>
        </div>

        {/* Investor Section */}
        <div className="bg-gray-50 p-6 rounded-xl">
          <h3 className="font-montserrat text-lg font-bold text-center text-gray-800 mb-6">
            Investor Information
          </h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-1">Full Legal Name: *</label>
              <input
                type="text"
                value={investorData.name}
                onChange={(e) => onInputChange('name', e.target.value)}
                className="pulse-input"
                placeholder="Enter your full legal name as on ID"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-1">Complete Address: *</label>
              <input
                type="text"
                value={investorData.address}
                onChange={(e) => onInputChange('address', e.target.value)}
                className="pulse-input"
                placeholder="Street, City, Postal Code, Country"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-1">Nationality: *</label>
              <input
                type="text"
                value={investorData.nationality}
                onChange={(e) => onInputChange('nationality', e.target.value)}
                className="pulse-input"
                placeholder="Country of citizenship"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-1">Phone Number: *</label>
              <input
                type="tel"
                value={investorData.phone}
                onChange={(e) => onInputChange('phone', e.target.value)}
                className="pulse-input"
                placeholder="+XX XXX XXX XXXX"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-1">Email Address: *</label>
              <input
                type="email"
                value={investorData.email}
                onChange={(e) => onInputChange('email', e.target.value)}
                className="pulse-input"
                placeholder="your.email@domain.com"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-1">Date of Signing: *</label>
              <input
                type="text"
                value={investorData.date}
                className="pulse-input bg-gray-100"
                readOnly
              />
            </div>
            
            <div className="mt-6">
              <label className="block text-sm font-semibold text-gray-600 mb-2">Digital Signature: *</label>
              <p className="text-xs text-gray-500 mb-3">
                Sign with your mouse, finger, or stylus in the box below:
              </p>
              
              <div className="border border-gray-300 rounded-xl bg-white">
                <SignatureCanvas
                  ref={signatureRef}
                  canvasProps={{
                    className: 'signature-canvas w-full h-32',
                  }}
                  onEnd={onSignature}
                />
              </div>
              
              <div className="flex gap-3 mt-3">
                <button
                  type="button"
                  onClick={onClearSignature}
                  className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors text-sm"
                >
                  Clear
                </button>
                {hasSignature && (
                  <div className="px-4 py-2 bg-green-100 text-green-800 rounded-lg text-sm flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    <span>Signature captured</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Investment Confirmation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mt-8 bg-gray-50 p-8 rounded-xl"
      >
        <h3 className="font-montserrat text-xl font-bold text-center text-gray-900 mb-4">
          Investment Confirmation
        </h3>
        <p className="text-center text-gray-700 mb-6">
          By signing this document, I confirm my intention to invest <strong>€500,000</strong> in Pulse Energy B.V. 
          for a <strong>30.5% equity stake</strong> under the terms outlined in this proposal. 
          I understand this is a binding commitment subject to due diligence and formal documentation.
        </p>
        
        <div className="bg-white rounded-xl p-6">
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div className="space-y-1">
              <p><strong>Investment Amount:</strong> €500,000</p>
              <p><strong>Ownership Percentage:</strong> 30.5%</p>
              <p><strong>Share Type:</strong> Ordinary shares (€1.00 nominal)</p>
            </div>
            <div className="space-y-1">
              <p><strong>Pre-Money Valuation:</strong> €1,140,000</p>
              <p><strong>Post-Money Valuation:</strong> €1,640,000</p>
              <p><strong>Expected Closing:</strong> Within 30 days</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bank Details Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-8 bg-blue-50 p-8 rounded-xl"
      >
        <h3 className="font-montserrat text-xl font-bold text-center text-gray-900 mb-6">
          Bank Transfer Details
        </h3>
        <p className="text-center text-gray-700 mb-6 text-sm">
          Please transfer the investment amount to the following account:
        </p>
        
        <div className="bg-white rounded-xl p-6 max-w-2xl mx-auto">
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="space-y-3">
              <div>
                <p className="text-gray-600 text-xs uppercase tracking-wide mb-1">Account Holder</p>
                <p className="font-semibold text-gray-900">R. El Arcoubi</p>
              </div>
              <div>
                <p className="text-gray-600 text-xs uppercase tracking-wide mb-1">Bank Name</p>
                <p className="font-semibold text-gray-900">ABN AMRO Bank</p>
              </div>
              <div>
                <p className="text-gray-600 text-xs uppercase tracking-wide mb-1">IBAN</p>
                <p className="font-mono font-semibold text-gray-900">NL07 ABNA 0147 8724 72</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <div>
                <p className="text-gray-600 text-xs uppercase tracking-wide mb-1">BIC/SWIFT</p>
                <p className="font-mono font-semibold text-gray-900">ABNANL2A</p>
              </div>
              <div>
                <p className="text-gray-600 text-xs uppercase tracking-wide mb-1">Reference</p>
                <p className="font-semibold text-gray-900">Investment Pulse Energy</p>
              </div>
              <div>
                <p className="text-gray-600 text-xs uppercase tracking-wide mb-1">Amount</p>
                <p className="font-bold text-green-600 text-lg">€500,000</p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-500 text-center">
              <strong>Important:</strong> Please include the reference "Investment Pulse Energy" in your transfer description.
            </p>
          </div>
          <div className="mt-4 p-3 bg-blue-50 rounded-lg">
            <p className="text-xs text-blue-800 text-center">
              <strong>Note:</strong> Upon incorporation of Pulse Energy B.V., transfers will be made to the corporate bank account.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.section>
  )
}

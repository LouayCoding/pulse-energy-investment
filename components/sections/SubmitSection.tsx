'use client'

import { motion } from 'framer-motion'

interface SubmitSectionProps {
  isFormValid: boolean
  isSubmitting: boolean
  onSubmit: () => void
}

export default function SubmitSection({ isFormValid, isSubmitting, onSubmit }: SubmitSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-xl p-8 lg:p-12 text-center"
    >
      <motion.div
        initial={{ scale: 0.9 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="font-montserrat text-3xl font-bold text-gray-900 mb-4">
          Submit Investment Proposal
        </h2>
        
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          Please review all information above and ensure your signature is complete before submitting. 
          Upon submission, this proposal will be sent directly to Pulse Energy management for review.
        </p>
        
        <motion.button
          whileHover={isFormValid ? { scale: 1.05 } : {}}
          whileTap={isFormValid ? { scale: 0.95 } : {}}
          onClick={onSubmit}
          disabled={!isFormValid || isSubmitting}
          className={`
            px-12 py-4 rounded-lg font-montserrat font-semibold text-lg transition-all duration-200
            ${isFormValid && !isSubmitting
              ? 'bg-gray-900 hover:bg-black text-white'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }
          `}
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
              Submitting Proposal...
            </div>
          ) : (
            'Submit Investment Proposal'
          )}
        </motion.button>
        
        {!isFormValid && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-red-600 text-sm mt-4"
          >
            Please complete all required fields and provide your signature before submitting.
          </motion.p>
        )}
        
        <div className="mt-8 text-sm text-gray-600 space-y-2">
          <p>
            <strong>What happens next:</strong>
          </p>
          <div className="max-w-xl mx-auto text-left">
            <ol className="list-decimal list-inside space-y-1">
              <li>Your proposal is instantly sent to Pulse Energy management via secure notification</li>
              <li>You'll receive email confirmation within 5 minutes</li>
              <li>Management will review and respond within 24 hours</li>
              <li>Due diligence and formal documentation process begins upon mutual agreement</li>
            </ol>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-gray-50 rounded-xl text-xs text-gray-500">
          <p>
            By submitting, you confirm all information is accurate and you agree to the terms outlined above. 
            This proposal is confidential and legally binding upon acceptance.
          </p>
        </div>
      </motion.div>
    </motion.section>
  )
}

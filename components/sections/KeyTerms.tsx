'use client'

import { motion } from 'framer-motion'

export default function KeyTerms() {
  const terms = [
    { label: 'Investment Amount', value: '€500,000', color: 'text-pulse-800' },
    { label: 'Ownership Stake', value: '30.5%', color: 'text-pulse-800' },
    { label: 'Pre-Money Valuation', value: '€1,140,000', color: 'text-pulse-800' },
    { label: 'Post-Money Valuation', value: '€1,640,000', color: 'text-pulse-800' },
  ]

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-xl p-8 lg:p-12"
    >
      <motion.h2
        initial={{ scale: 0.9 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        className="font-montserrat text-3xl font-bold text-gray-900 text-center mb-10"
      >
        Investment Terms
      </motion.h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {terms.map((term, index) => (
          <motion.div
            key={term.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-50 p-6 rounded-xl text-center hover:bg-gray-100 transition-all duration-300"
          >
            <div className="font-lexend text-xs font-medium text-gray-600 uppercase tracking-wide mb-3">
              {term.label}
            </div>
            <div className={`font-montserrat text-3xl font-bold ${term.color}`}>
              {term.value}
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-8 text-center"
      >
        <div className="bg-gray-50 rounded-xl p-5 inline-block">
          <p className="text-sm text-gray-700 leading-relaxed">
            <strong className="text-gray-900">Share Structure:</strong> Ordinary shares (€1.00 nominal) • 
            <strong className="text-gray-900"> Lock-up:</strong> 24 months • 
            <strong className="text-gray-900"> Anti-dilution:</strong> Weighted average protection
          </p>
        </div>
      </motion.div>
    </motion.section>
  )
}

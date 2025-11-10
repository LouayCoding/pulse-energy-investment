'use client'

import { motion } from 'framer-motion'
import { Store } from 'lucide-react'

export default function MarketOpportunity() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="pulse-card"
    >
      <h2 className="font-montserrat text-3xl font-bold text-gray-900 mb-8">
        Market Opportunity & Distribution
      </h2>
      
      <div className="bg-green-50 p-6 rounded-xl mb-6">
        <h3 className="font-montserrat text-lg font-bold text-green-800 mb-4 flex items-center gap-2">
          <Store className="h-5 w-5" />
          Current Retail Presence
        </h3>
        <p className="text-green-700 mb-4">
          Pulse Energy® has successfully secured distribution agreements with the Netherlands' three largest supermarket chains:
        </p>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div className="bg-white p-4 rounded-xl">
            <div className="font-semibold text-green-800">Albert Heijn</div>
            <div className="text-green-600">~850+ locations nationwide</div>
          </div>
          <div className="bg-white p-4 rounded-xl">
            <div className="font-semibold text-green-800">Jumbo</div>
            <div className="text-green-600">~700+ stores across Netherlands</div>
          </div>
          <div className="bg-white p-4 rounded-xl">
            <div className="font-semibold text-green-800">Plus</div>
            <div className="text-green-600">~270+ retail locations</div>
          </div>
        </div>
        <div className="mt-4 p-4 bg-green-100 rounded-xl">
          <p className="font-semibold text-green-800">
            <strong>Total Market Reach:</strong> 1,800+ retail locations representing over 70% of Netherlands supermarket coverage
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="font-montserrat text-lg font-semibold text-gray-800 mb-4">Market Dynamics</h3>
          <ul className="space-y-3 text-sm text-gray-700">
            <li className="flex items-start">
              <span className="text-pulse-500 mr-2">▶</span>
              Netherlands energy drink market valued at €200+ million annually
            </li>
            <li className="flex items-start">
              <span className="text-pulse-500 mr-2">▶</span>
              Growing consumer preference for premium, functional beverages
            </li>
            <li className="flex items-start">
              <span className="text-pulse-500 mr-2">▶</span>
              Strong brand recognition potential in Benelux region
            </li>
            <li className="flex items-start">
              <span className="text-pulse-500 mr-2">▶</span>
              Established supply chain and production partnerships
            </li>
            <li className="flex items-start">
              <span className="text-pulse-500 mr-2">▶</span>
              Scalable business model for European expansion
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-montserrat text-lg font-semibold text-gray-800 mb-4">Competitive Advantages</h3>
          <ul className="space-y-3 text-sm text-gray-700">
            <li className="flex items-start">
              <span className="text-pulse-500 mr-2">▶</span>
              Registered Pulse Energy® trademark protection
            </li>
            <li className="flex items-start">
              <span className="text-pulse-500 mr-2">▶</span>
              Exclusive retail distribution agreements secured
            </li>
            <li className="flex items-start">
              <span className="text-pulse-500 mr-2">▶</span>
              Premium positioning in growing market segment
            </li>
            <li className="flex items-start">
              <span className="text-pulse-500 mr-2">▶</span>
              Founder's established retailer relationships
            </li>
            <li className="flex items-start">
              <span className="text-pulse-500 mr-2">▶</span>
              First-mover advantage in premium Dutch energy drinks
            </li>
          </ul>
        </div>
      </div>
    </motion.section>
  )
}

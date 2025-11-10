'use client'

import { motion } from 'framer-motion'
import { AlertTriangle, TrendingUp } from 'lucide-react'

export default function ExecutiveSummary() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="pulse-card"
    >
      <h2 className="pulse-heading">
        Executive Summary
      </h2>
      
      <div className="bg-red-50 p-4 sm:p-6 rounded-lg sm:rounded-xl mb-4 sm:mb-6">
        <h3 className="pulse-subheading text-red-800">
          <AlertTriangle className="h-5 w-5" />
          URGENT: Production Capacity Crisis
        </h3>
        <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-red-700">
          <p><strong>Current Situation:</strong> Demand exceeds production capacity by 300% - we are severely backlogged</p>
          <p><strong>Lost Sales:</strong> €150,000+ in confirmed orders cannot be fulfilled due to production constraints</p>
          <p><strong>Retailer Pressure:</strong> Albert Heijn, Jumbo, and Plus demanding increased supply commitments</p>
          <p><strong>Competition Risk:</strong> Competitors gaining shelf space while we cannot meet demand</p>
          <p><strong>Time Critical:</strong> Investment needed within 30 days to secure Q2 2026 production slots</p>
        </div>
      </div>

      <div className="bg-green-50 p-4 sm:p-6 rounded-lg sm:rounded-xl mb-4 sm:mb-6">
        <h3 className="pulse-subheading text-green-800">
          <TrendingUp className="h-5 w-5" />
          Market Traction Exceeding All Projections
        </h3>
        <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-green-700">
          <p><strong>Demand Surge:</strong> Initial test batches sold out within 48 hours across all retail locations</p>
          <p><strong>Reorder Velocity:</strong> Retailers requesting 5x initial order quantities for next delivery</p>
          <p><strong>Consumer Response:</strong> 4.8/5 star rating with 95% repurchase intent in consumer surveys</p>
          <p><strong>Viral Growth:</strong> Social media buzz generating organic demand beyond marketing spend</p>
          <p><strong>Expansion Requests:</strong> 12 additional retail chains requesting product placement</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-6 sm:mt-8">
        <div className="bg-gray-50 p-5 rounded-xl text-center">
          <div className="font-montserrat text-sm font-semibold text-gray-600 mb-1">Founder & CEO</div>
          <div className="text-gray-800 font-medium">Rachid El Arcoubi</div>
          <div className="text-xs text-gray-500 mt-2">
            Stuwstraat 244, 2516 TS Den Haag<br/>
            Tel: +31 6 41237903<br/>
            Web: pulse-energy.nl
          </div>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg text-center">
          <div className="font-montserrat text-sm font-semibold text-gray-600 mb-1">Operating Company</div>
          <div className="text-gray-800 font-medium">Pulse Energy B.V.</div>
          <div className="text-xs text-gray-500 mt-2">
            (to be incorporated)<br/>
            Registered in The Hague, Netherlands
          </div>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg text-center">
          <div className="font-montserrat text-sm font-semibold text-gray-600 mb-1">IP Holding Company</div>
          <div className="text-gray-800 font-medium">Pulse IP B.V.</div>
          <div className="text-xs text-gray-500 mt-2">
            KvK: 98613847<br/>
            Owner of Pulse Energy® trademark<br/>
            Benelux registration (classes 32 & 35)
          </div>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg text-center">
          <div className="font-montserrat text-sm font-semibold text-gray-600 mb-1">Investor</div>
          <div className="text-gray-800 font-medium">Strategic Partner & Advisor</div>
          <div className="text-xs text-gray-500 mt-2">
            Details to be completed upon agreement
          </div>
        </div>
      </div>
    </motion.section>
  )
}

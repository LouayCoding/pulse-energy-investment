'use client'

import { motion } from 'framer-motion'

export default function ExitStrategy() {
  const scenarios = [
    { valuation: '€3,000,000', investorReturn: '€915,000', multiple: '1.8x', irr: '12.8%' },
    { valuation: '€5,000,000', investorReturn: '€1,525,000', multiple: '3.1x', irr: '25.0%' },
    { valuation: '€8,000,000', investorReturn: '€2,440,000', multiple: '4.9x', irr: '37.5%' },
  ]

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="pulse-card"
    >
      <h2 className="font-montserrat text-3xl font-bold text-gray-900 mb-8">
        Exit Strategy & Returns
      </h2>
      
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <h3 className="font-montserrat text-lg font-semibold text-gray-800 mb-4">Exit Timeline</h3>
          <ul className="space-y-3 text-sm text-gray-700">
            <li className="flex items-start">
              <span className="text-pulse-500 mr-2">▶</span>
              <strong>Evaluation Period:</strong> Strategic options from month 24
            </li>
            <li className="flex items-start">
              <span className="text-pulse-500 mr-2">▶</span>
              <strong>Target Horizon:</strong> 3-5 years depending on traction
            </li>
            <li className="flex items-start">
              <span className="text-pulse-500 mr-2">▶</span>
              <strong>Milestone Reviews:</strong> Annual strategic assessments
            </li>
            <li className="flex items-start">
              <span className="text-pulse-500 mr-2">▶</span>
              <strong>Market Conditions:</strong> Flexible timing based on opportunities
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-montserrat text-lg font-semibold text-gray-800 mb-4">Exit Routes</h3>
          <ul className="space-y-3 text-sm text-gray-700">
            <li className="flex items-start">
              <span className="text-pulse-500 mr-2">▶</span>
              <strong>Strategic Sale:</strong> Trade buyer acquisition
            </li>
            <li className="flex items-start">
              <span className="text-pulse-500 mr-2">▶</span>
              <strong>Financial Buyer:</strong> Secondary sale to PE/VC
            </li>
            <li className="flex items-start">
              <span className="text-pulse-500 mr-2">▶</span>
              <strong>Management Buyback:</strong> Subject to solvency tests
            </li>
            <li className="flex items-start">
              <span className="text-pulse-500 mr-2">▶</span>
              <strong>Gradual Sell-down:</strong> Following liquidity events
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-xl">
        <h3 className="font-montserrat text-lg font-bold text-blue-900 mb-4">Return Scenarios (Illustrative)</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-white">
                <th className="text-left p-3 font-montserrat font-semibold">Exit Valuation</th>
                <th className="text-right p-3 font-montserrat font-semibold">Investor Return</th>
                <th className="text-right p-3 font-montserrat font-semibold">Multiple</th>
                <th className="text-right p-3 font-montserrat font-semibold">IRR (5 years)</th>
              </tr>
            </thead>
            <tbody>
              {scenarios.map((scenario, index) => (
                <motion.tr
                  key={scenario.valuation}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="border-b border-blue-100"
                >
                  <td className="p-3 font-montserrat font-bold text-pulse-600">{scenario.valuation}</td>
                  <td className="p-3 text-right font-montserrat font-bold text-green-600">{scenario.investorReturn}</td>
                  <td className="p-3 text-right font-semibold">{scenario.multiple}</td>
                  <td className="p-3 text-right font-semibold">{scenario.irr}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 text-xs text-blue-800">
          <p><strong>Note:</strong> Projections are illustrative and based on comparable transactions in the FMCG sector. Actual returns may vary significantly based on market conditions and company performance.</p>
        </div>
      </div>
    </motion.section>
  )
}

'use client'

import { motion } from 'framer-motion'

export default function FinancialProjections() {
  const projections = [
    { year: '2025', revenue: '€205,000', units: '170,800', ebitda: '-€7,500', margin: '-3.7%' },
    { year: '2026', revenue: '€525,000', units: '437,500', ebitda: '€73,500', margin: '14.0%' },
    { year: '2027', revenue: '€930,000', units: '775,000', ebitda: '€195,300', margin: '21.0%' },
    { year: '2028', revenue: '€1,460,000', units: '1,216,700', ebitda: '€367,920', margin: '25.2%' },
    { year: '2029', revenue: '€2,150,000', units: '1,791,700', ebitda: '€602,000', margin: '28.0%' },
  ]

  const useOfProceeds = [
    { category: 'URGENT: Production Scale-Up', amount: '€300,000', percentage: '60%', color: 'bg-red-100 text-red-800' },
    { category: 'Marketing & Promotion', amount: '€100,000', percentage: '20%', color: 'bg-blue-100 text-blue-800' },
    { category: 'Logistics & Distribution', amount: '€75,000', percentage: '15%', color: 'bg-green-100 text-green-800' },
    { category: 'Working Capital', amount: '€25,000', percentage: '5%', color: 'bg-gray-100 text-gray-800' },
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
        Financial Projections
      </h2>
      
      {/* Use of Proceeds */}
      <div className="mb-8">
        <h3 className="font-montserrat text-lg font-semibold text-gray-800 mb-4">Use of Investment (€500,000)</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {useOfProceeds.map((item, index) => (
            <motion.div
              key={item.category}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-5 rounded-xl ${item.color}`}
            >
              <div className="font-semibold text-sm mb-1">{item.category}</div>
              <div className="text-xl font-bold">{item.amount}</div>
              <div className="text-sm opacity-75">{item.percentage}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 5-Year Projections */}
      <div className="mb-8">
        <h3 className="font-montserrat text-lg font-semibold text-gray-800 mb-4">5-Year Revenue Projections</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left p-3 font-montserrat font-semibold">Year</th>
                <th className="text-right p-3 font-montserrat font-semibold">Revenue</th>
                <th className="text-right p-3 font-montserrat font-semibold">Units Sold</th>
                <th className="text-right p-3 font-montserrat font-semibold">EBITDA</th>
                <th className="text-right p-3 font-montserrat font-semibold">Margin</th>
              </tr>
            </thead>
            <tbody>
              {projections.map((row, index) => (
                <motion.tr
                  key={row.year}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="border-b border-gray-100 hover:bg-gray-50"
                >
                  <td className="p-3 font-semibold">{row.year}</td>
                  <td className="p-3 text-right font-montserrat font-bold text-pulse-600">{row.revenue}</td>
                  <td className="p-3 text-right">{row.units}</td>
                  <td className={`p-3 text-right font-semibold ${row.ebitda.includes('-') ? 'text-red-600' : 'text-green-600'}`}>
                    {row.ebitda}
                  </td>
                  <td className={`p-3 text-right ${row.margin.includes('-') ? 'text-red-600' : 'text-green-600'}`}>
                    {row.margin}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Break-Even Analysis */}
      <div className="bg-green-50 p-6 rounded-xl">
        <h3 className="font-montserrat text-lg font-bold text-green-800 mb-4">Break-Even Analysis</h3>
        <div className="grid md:grid-cols-2 gap-6 text-sm text-green-700">
          <div>
            <p><strong>Break-Even Point:</strong> Month 8 (Q1 2026) at €85,000 monthly revenue</p>
            <p><strong>Cash Flow Positive:</strong> Month 10 with sustained €95,000+ monthly sales</p>
          </div>
          <div>
            <p><strong>Investment Payback:</strong> 18 months from first sales (Q4 2026)</p>
            <p><strong>Unit Economics:</strong> €0.30 gross margin per unit at scale</p>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

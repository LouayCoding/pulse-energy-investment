'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function Header() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center bg-white rounded-lg sm:rounded-xl p-6 sm:p-8 lg:p-16 mb-6 sm:mb-8 shadow-sm"
    >
      <motion.h1
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="font-montserrat text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 mb-3 tracking-tight"
      >
        PULSE ENERGY
      </motion.h1>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="w-16 sm:w-24 h-1 bg-gray-900 mx-auto mb-4 sm:mb-6"
      />
      
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="font-montserrat text-lg sm:text-xl lg:text-2xl font-medium text-gray-700 mb-3 sm:mb-4"
      >
        Investment Proposal & Term Sheet
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-gray-600 text-sm sm:text-base lg:text-lg mb-4 sm:mb-6"
      >
        Energy Drink Brand • Netherlands Market
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700"
      >
        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
        {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
      </motion.div>
      
      {/* Contact Information */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200"
      >
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 text-xs sm:text-sm">
          <div className="flex flex-col items-center gap-1">
            <p className="font-semibold text-gray-900">Rachid El Arcoubi</p>
            <p className="text-gray-600">CEO & Founder</p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="flex items-center gap-2 text-gray-600">
              <Phone className="w-4 h-4" />
              <span>+31 6 41237903</span>
            </div>
            <p className="text-gray-500 text-xs">(WhatsApp)</p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="flex items-center gap-2 text-gray-600">
              <Mail className="w-4 h-4" />
              <span>info@pulse-energy.nl</span>
            </div>
            <p className="text-gray-500 text-xs">Response within 4h</p>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-500 italic">
          <MapPin className="w-3 h-3" />
          <span>Stuwstraat 244, 2516 TS Den Haag, Nederland</span>
        </div>
      </motion.div>
    </motion.div>
  )
}

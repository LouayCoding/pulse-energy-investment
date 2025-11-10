'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface PasswordProtectionProps {
  onAuthenticated: () => void
}

export default function PasswordProtection({ onAuthenticated }: PasswordProtectionProps) {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  // Track visitor on component mount
  useEffect(() => {
    const trackVisitor = async () => {
      try {
        // Get approximate location from timezone
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
        const location = timezone.split('/')[1]?.replace(/_/g, ' ') || 'Unknown'
        
        await fetch('/api/track-visitor', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            location,
            stage: 'Password Page',
          }),
        })
      } catch (error) {
        console.error('Tracking error:', error)
      }
    }

    trackVisitor()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    if (password === 'NDIUN8943') {
      // Track successful authentication
      try {
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
        const location = timezone.split('/')[1]?.replace(/_/g, ' ') || 'Unknown'
        
        await fetch('/api/track-visitor', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            location,
            stage: 'Authenticated - Viewing Proposal',
          }),
        })
      } catch (error) {
        console.error('Auth tracking error:', error)
      }
      
      onAuthenticated()
    } else {
      setError('Invalid password. Please try again.')
      setPassword('')
    }
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="pulse-card text-center">
          <motion.div
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="mb-8">
              <h1 className="font-montserrat text-4xl font-bold text-gray-900 mb-2">
                PULSE ENERGY
              </h1>
              <div className="w-16 h-1 bg-gray-900 mx-auto mb-4"></div>
              <p className="text-gray-600">
                Investment Proposal
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Enter Access Code
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pulse-input"
                  placeholder="••••••••"
                  required
                  disabled={isLoading}
                />
                {error && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-sm mt-2"
                  >
                    {error}
                  </motion.p>
                )}
              </div>

              <button
                type="submit"
                disabled={isLoading || !password}
                className="w-full pulse-button disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Verifying...
                  </div>
                ) : (
                  'Access Proposal'
                )}
              </button>
            </form>

            <div className="mt-6 text-xs text-gray-500">
              <p>This document contains confidential information.</p>
              <p>Authorized access only.</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-6 text-xs text-gray-400"
        >
          <p>Pulse Energy B.V. • Confidential Investment Proposal</p>
          <p>© {new Date().getFullYear()} All rights reserved</p>
        </motion.div>
      </motion.div>
    </div>
  )
}

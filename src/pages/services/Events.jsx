// src/pages/services/Events.jsx
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaCalendarAlt, FaEnvelope } from 'react-icons/fa'
import HeroCanvas from '../../components/three/HeroCanvas'

const Events = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const targetDate = new Date()
    targetDate.setDate(targetDate.getDate() + 30) // 30 days from now

    const timer = setInterval(() => {
      const now = new Date()
      const difference = targetDate - now

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden">
      <HeroCanvas />
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <FaCalendarAlt className="text-accent mx-auto mb-6" size={64} />
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">
              Coming Soon
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Premium Event Planning Services
            </p>
            
            {/* Countdown Timer */}
            <div className="flex justify-center gap-4 mb-12">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="bg-white/10 backdrop-blur-md rounded-xl p-4 min-w-[80px]">
                  <div className="text-3xl md:text-4xl font-bold text-white">{value}</div>
                  <div className="text-sm text-gray-300 capitalize">{unit}</div>
                </div>
              ))}
            </div>

            {/* Notify Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-accent text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-accent/90 transition shadow-lg inline-flex items-center space-x-2"
            >
              <FaEnvelope />
              <span>Notify Me</span>
            </motion.button>

            {/* Contact Info */}
            <div className="mt-12 text-white">
              <p className="text-gray-300">For inquiries:</p>
              <p className="text-lg">📞 7871715084</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Events
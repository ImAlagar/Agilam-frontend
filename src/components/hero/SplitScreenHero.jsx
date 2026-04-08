// src/components/hero/SplitScreenHero.jsx
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { FiChevronRight, FiPlay, FiAward, FiUsers, FiClock } from 'react-icons/fi'

const SplitScreenHero = () => {
  const navigate = useNavigate()
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "Government Services",
      subtitle: "Made Simple & Fast",
      description: "Get all certificates, PAN, PF and more in record time",
      bgImage: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&h=800&fit=crop",
      color: "from-blue-600 to-cyan-600"
    },
    {
      title: "Creative Studio",
      subtitle: "Frame Your Memories",
      description: "Professional photo frames, restoration & design services",
      bgImage: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1200&h=800&fit=crop",
      color: "from-purple-600 to-pink-600"
    },
    {
      title: "Insurance Solutions",
      subtitle: "Secure Your Future",
      description: "Best health, life & vehicle insurance plans",
      bgImage: "https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?w=1200&h=800&fit=crop",
      color: "from-green-600 to-emerald-600"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const stats = [
    { icon: FiUsers, value: "5000+", label: "Happy Customers" },
    { icon: FiAward, value: "98%", label: "Satisfaction Rate" },
    { icon: FiClock, value: "24/7", label: "Support Available" }
  ]

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image Slider */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide].bgImage})` }}
          />
          <div className={`absolute inset-0 bg-gradient-to-r ${slides[currentSlide].color} opacity-90`} />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm mb-6">
                    {slides[currentSlide].title}
                  </span>
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
                    {slides[currentSlide].title}
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                      {slides[currentSlide].subtitle}
                    </span>
                  </h1>
                  <p className="text-xl text-white/90 mb-8 max-w-lg">
                    {slides[currentSlide].description}
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('/services/online')}
                  className="bg-white text-gray-900 px-8 py-3 rounded-full text-lg font-semibold hover:shadow-xl transition flex items-center gap-2"
                >
                  Get Started
                  <FiChevronRight />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white/10 transition flex items-center gap-2"
                >
                  <FiPlay />
                  Watch Demo
                </motion.button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <stat.icon className="text-white/70 mb-2" size={24} />
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-white/70">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Content - Animated Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">Why Choose Us?</h3>
                <div className="space-y-4">
                  {[
                    "✨ 10+ Years of Experience",
                    "⚡ 24-Hour Service Delivery",
                    "💯 100% Customer Satisfaction",
                    "🏆 Best Service Provider Award",
                    "📍 Located in West Tambaram"
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      className="flex items-center gap-3 text-white"
                    >
                      <div className="w-2 h-2 bg-green-400 rounded-full" />
                      <span>{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Slide Indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  currentSlide === index 
                    ? 'w-12 h-2 bg-white' 
                    : 'w-2 h-2 bg-white/50 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SplitScreenHero
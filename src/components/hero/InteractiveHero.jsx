// src/components/hero/InteractiveHero.jsx
import React, { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { FiArrowRight, FiStar, FiTrendingUp, FiShield } from 'react-icons/fi'

const InteractiveHero = () => {
  const navigate = useNavigate()
  const containerRef = useRef(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"])

  const handleMouseMove = (event) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (rect) {
      const xPos = (event.clientX - rect.left) / rect.width - 0.5
      const yPos = (event.clientY - rect.top) / rect.height - 0.5
      setMousePosition({ x: xPos, y: yPos })
      x.set(xPos)
      y.set(yPos)
    }
  }

  const floatingCards = [
    { icon: FiStar, title: "5,000+", subtitle: "Happy Clients", color: "from-yellow-400 to-orange-500", delay: 0 },
    { icon: FiTrendingUp, title: "98%", subtitle: "Success Rate", color: "from-green-400 to-emerald-500", delay: 0.1 },
    { icon: FiShield, title: "24/7", subtitle: "Support", color: "from-blue-400 to-cyan-500", delay: 0.2 }
  ]

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-primary to-gray-900"
    >
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/5"
            style={{
              width: Math.random() * 300 + 50,
              height: Math.random() * 300 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                animate={{ rotateX, rotateY }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm mb-6">
                  🚀 Trusted Since 2020
                </span>
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                  Your Daily Needs,
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                    One Solution
                  </span>
                </h1>
                
                <p className="text-lg text-white/80 mb-8 max-w-lg">
                  From government certificates to creative studio and insurance - we've got you covered with fast, reliable, and affordable services.
                </p>

                <div className="flex flex-wrap gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate('/services/online')}
                    className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:shadow-xl transition flex items-center gap-2 group"
                  >
                    Get Started
                    <FiArrowRight className="group-hover:translate-x-1 transition" />
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate('/contact')}
                    className="border-2 border-white/30 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white/10 transition"
                  >
                    Contact Us
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Content - Floating Cards */}
            <div className="relative hidden lg:block" style={{ perspective: "1000px" }}>
              <motion.div
                animate={{ rotateX, rotateY }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                style={{ transformStyle: "preserve-3d" }}
                className="relative"
              >
                {/* Main Floating Card */}
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-2xl"
                >
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <span className="text-4xl">🎯</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Why Agilam?</h3>
                    <p className="text-white/70">Your trusted partner for all services</p>
                  </div>
                  
                  <div className="space-y-4">
                    {floatingCards.map((card, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + card.delay }}
                        className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition"
                      >
                        <div className={`w-12 h-12 bg-gradient-to-r ${card.color} rounded-lg flex items-center justify-center`}>
                          <card.icon className="text-white" size={24} />
                        </div>
                        <div>
                          <div className="text-xl font-bold text-white">{card.title}</div>
                          <div className="text-sm text-white/60">{card.subtitle}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InteractiveHero
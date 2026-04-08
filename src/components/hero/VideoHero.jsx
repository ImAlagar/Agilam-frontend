// src/components/hero/VideoHero.jsx
import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { FiArrowRight, FiPlay, FiPause } from 'react-icons/fi'

const VideoHero = () => {
  const navigate = useNavigate()
  const [isPlaying, setIsPlaying] = React.useState(true)
  const videoRef = React.useRef(null)

  const togglePlay = () => {
    if (isPlaying) {
      videoRef.current.pause()
    } else {
      videoRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: 'brightness(0.4)' }}
      >
        <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-background-with-moving-lines-41098-large.mp4" type="video/mp4" />
      </video>

      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80 mix-blend-multiply" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm mb-6">
                Welcome to Agilam Services
              </span>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Your One-Stop Solution for
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                  All Daily Needs
                </span>
              </h1>
              
              <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
                Government Services • Creative Studio • Insurance Solutions • Event Planning
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('/services/online')}
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition flex items-center gap-2"
                >
                  Explore Services
                  <FiArrowRight />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={togglePlay}
                  className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/30 transition flex items-center gap-2"
                >
                  {isPlaying ? <FiPause /> : <FiPlay />}
                  {isPlaying ? 'Pause' : 'Play'} Background
                </motion.button>
              </div>

              {/* Scroll Indicator */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
              >
                <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                  <div className="w-1 h-2 bg-white rounded-full mt-2 animate-bounce" />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoHero
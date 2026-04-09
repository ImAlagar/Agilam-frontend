// src/pages/About.jsx
import React, { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform,useInView  } from 'framer-motion'
import { FiTarget, FiEye, FiUser, FiAward, FiPlay, FiPause, FiVolume2, FiVolumeX } from 'react-icons/fi'
import SectionTitle from '../components/ui/SectionTitle'

// Import your local video
import aboutVideo from '../assets/video/video.mp4'


// Animated Counter Component - Numbers increase one by one
const AnimatedCounter = ({ target, suffix = "", prefix = "", duration = 2 }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      let start = 0
      const increment = target / (duration * 60)
      const timer = setInterval(() => {
        start += increment
        if (start >= target) {
          setCount(target)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)
      return () => clearInterval(timer)
    }
  }, [isInView, target, duration])

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  )
}

const About = () => {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)
  const [videoError, setVideoError] = useState(false)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95])

  useEffect(() => {
    if (videoRef.current && !videoError) {
      videoRef.current.play().catch(e => {
        console.log("Video play error:", e)
        setVideoError(true)
      })
    }
  }, [videoError])

  const togglePlay = () => {
    if (videoRef.current && !videoError) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current && !videoError) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

 const stats = [
    { 
      value: 5000, 
      suffix: "+", 
      label: "Happy Customers", 
      color: "from-yellow-400 to-orange-500"
    },
    { 
      value: 50, 
      suffix: "+", 
      label: "Services Offered", 
      color: "from-green-400 to-emerald-500"
    },
    { 
      value: 98, 
      suffix: "%", 
      label: "Success Rate", 
      color: "from-blue-400 to-cyan-500"
    },
    { 
      value: 24, 
      suffix: "/7", 
      label: "Support Available", 
      color: "from-purple-400 to-pink-500"
    },
  ]
  return (
    <div>
      {/* Hero Section with Local Video Background - FIXED */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          {!videoError ? (
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              style={{ filter: 'brightness(0.4) contrast(1.1)' }}
              onError={() => setVideoError(true)}
            >
              <source src={aboutVideo} type="video/mp4" />
            </video>
          ) : (
            // Fallback gradient background if video fails to load
            <div className="w-full h-full bg-gradient-to-br from-primary to-secondary"></div>
          )}
          
          {/* Animated Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-secondary/80 mix-blend-multiply" />
          
          {/* Video Controls - Only show if video loaded successfully */}
          {!videoError && (
            <div className="absolute bottom-6 right-44 z-20 flex gap-3">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={togglePlay}
                className="bg-white/20 backdrop-blur-md text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
                aria-label={isPlaying ? "Pause video" : "Play video"}
              >
                {isPlaying ? <FiPause size={20} /> : <FiPlay size={20} />}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleMute}
                className="bg-white/20 backdrop-blur-md text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
                aria-label={isMuted ? "Unmute video" : "Mute video"}
              >
                {isMuted ? <FiVolumeX size={20} /> : <FiVolume2 size={20} />}
              </motion.button>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="relative z-10 container-custom text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ opacity, scale }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="inline-block mb-6"
            >

            </motion.div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Agilam</span> Services
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Your Trusted Partner for All Services Since 2020
            </p>
            
            {/* Scroll Indicator */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="absolute left-1/2 transform -translate-x-1/2 cursor-pointer"
              onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            >
              <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                <div className="w-1 h-2 bg-white rounded-full mt-2 animate-bounce" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

     {/* Stats Counter Section - Numbers increase when scrolling */}
      <section className="py-20 bg-white relative z-10">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden bg-white rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Animated Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Animated Counter - Numbers increase one by one */}
                <div className="text-5xl md:text-6xl font-bold text-gray-800 mb-3">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} duration={2} />
                </div>
                
                <div className="text-lg font-semibold text-gray-700 mb-2">{stat.label}</div>
                <div className="text-sm text-gray-500">+{stat.value.toLocaleString()} {stat.label.toLowerCase()}</div>
                
                {/* Decorative Line */}
                <div className={`w-16 h-1 bg-gradient-to-r ${stat.color} rounded-full mx-auto mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section with Animation */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-4">
                Our Journey
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                The Story Behind <span className="text-primary">Agilam</span>
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Agilam is a multi-service center located in West Tambaram, offering comprehensive solutions including Online Services, Insurance Solutions, and Creative Studio works.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Founded by an Engineering Graduate with a vision to simplify daily service needs, we strive to provide fast, reliable, and affordable services to our community.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">5+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">5000+ Happy Clients</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">24/7 Support</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=500&fit=crop" 
                  alt="Our Team"
                  className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                  <p className="text-white font-semibold">Our Dedicated Team</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision with Cards */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FiEye className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To become the most trusted multi-service center, providing seamless access to essential services under one roof, making life easier for our community.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-secondary/5 to-transparent rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-secondary to-accent rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FiTarget className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To deliver fast, reliable, and affordable services with exceptional customer satisfaction, ensuring every interaction leaves a positive impact.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Section with Animation */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionTitle title="Meet Our Founder" subtitle="The Visionary Behind Agilam" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-r from-gray-50 to-white rounded-3xl p-8 md:p-12 shadow-xl">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="relative">
                  <div className="w-40 h-40 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center shadow-2xl">
                    <span className="text-6xl">👨‍💼</span>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center border-4 border-white">
                    <span className="text-white text-xs">✓</span>
                  </div>
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 text-gray-800">Engineering Graduate</h3>
                  <p className="text-primary font-semibold mb-4">Founder & CEO, Agilam Services</p>
                  <p className="text-gray-600 leading-relaxed">
                    With a background in engineering and a passion for service excellence, our founder established Agilam Services to bridge the gap between government services and the common people, making essential services accessible to all. His vision has transformed thousands of lives through reliable and affordable services.
                  </p>
                  
                  <div className="flex flex-wrap gap-4 mt-6 justify-center md:justify-start">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>10+ Years Experience</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span>5000+ Happy Clients</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span>50+ Services</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="container-custom text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Experience Our Services?</h2>
            <p className="text-lg mb-6 opacity-90">Join thousands of satisfied customers who trust Agilam Services</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/contact'}
              className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-300"
            >
              Get in Touch Today
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About
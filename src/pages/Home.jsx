// src/pages/Home.jsx - Choose one of the heroes
import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { FiZap, FiShield, FiDollarSign, FiGrid, FiPhone, FiMapPin } from 'react-icons/fi'
import { FaLaptopCode, FaShieldAlt, FaCamera, FaCalendarAlt } from 'react-icons/fa'
import SplitScreenHero from '../components/hero/SplitScreenHero' // Option 1
import ServiceCard from '../components/ui/ServiceCard'
import SectionTitle from '../components/ui/SectionTitle'

const Home = () => {
  const navigate = useNavigate()

  const services = [
    { icon: FaLaptopCode, title: 'Online Services', description: 'Government certificates, PAN, PF & more', route: '/services/online', color: 'primary' },
    { icon: FaShieldAlt, title: 'Insurance Solutions', description: 'Health, Life & Vehicle Insurance', route: '/services/insurance', color: 'secondary' },
    { icon: FaCamera, title: 'Creative Studio', description: 'Photo frames, restoration & design', route: '/services/studio', color: 'accent' },
    { icon: FaCalendarAlt, title: 'Event Planners', description: 'Premium event planning services', route: '/services/events', color: 'primary' },
  ]

  const features = [
    { icon: FiZap, title: 'Fast Processing', description: 'Quick turnaround time for all services' },
    { icon: FiShield, title: 'Trusted Service', description: '100% reliable and authentic' },
    { icon: FiDollarSign, title: 'Affordable Pricing', description: 'Best rates in the industry' },
    { icon: FiGrid, title: 'One-stop Solution', description: 'All services under one roof' },
  ]

  return (
    <div className="overflow-hidden">
      {/* Hero Section - Choose your preferred hero */}
      <SplitScreenHero /> {/* Or VideoHero / InteractiveHero */}
      
      {/* Rest of your sections remain the same */}
      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionTitle title="Our Services" subtitle="What We Offer" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <SectionTitle title="Why Choose Us" subtitle="Our Features" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
                  <feature.icon className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlight Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">All Services Under One Roof</h2>
            <p className="text-xl mb-8 opacity-90">Experience convenience like never before</p>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Get in Touch</h3>
                <p className="text-gray-600 mb-6">Visit us or call for any assistance</p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <FiPhone className="text-secondary" size={24} />
                    <span className="text-lg">7871715084</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FiMapPin className="text-secondary" size={24} />
                    <span className="text-lg">West Tambaram, Chennai</span>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  onClick={() => navigate('/contact')}
                  className="mt-6 bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition"
                >
                  Contact Us
                </motion.button>
              </div>
              <div className="relative h-64 md:h-auto">
                <img 
                  src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=600&h=400&fit=crop" 
                  alt="Customer Service"
                  className="rounded-2xl object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
// src/pages/About.jsx
import React from 'react'
import { motion } from 'framer-motion'
import { FiTarget, FiEye, FiUser, FiAward } from 'react-icons/fi'
import SectionTitle from '../components/ui/SectionTitle'

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary pt-32 pb-20 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Agilam Services</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Your Trusted Partner for All Services
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Agilam is a multi-service center located in West Tambaram, offering comprehensive solutions including Online Services, Insurance Solutions, and Creative Studio works.
              </p>
              <p className="text-gray-600">
                Founded by an Engineering Graduate with a vision to simplify daily service needs, we strive to provide fast, reliable, and affordable services to our community.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop" 
                alt="Our Team"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-xl"
            >
              <FiEye className="text-primary mb-4" size={48} />
              <h3 className="text-2xl font-bold mb-3">Our Vision</h3>
              <p className="text-gray-600">
                To become the most trusted multi-service center, providing seamless access to essential services under one roof.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-xl"
            >
              <FiTarget className="text-secondary mb-4" size={48} />
              <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
              <p className="text-gray-600">
                To deliver fast, reliable, and affordable services with exceptional customer satisfaction.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionTitle title="Meet Our Founder" />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-block p-3 bg-primary/10 rounded-full mb-4">
              <FiUser className="text-primary" size={48} />
            </div>
            <h3 className="text-2xl font-bold mb-2">Engineering Graduate</h3>
            <p className="text-gray-600 mb-4">
              Founder & CEO, Agilam Services
            </p>
            <p className="text-gray-600">
              With a background in engineering and a passion for service excellence, our founder established Agilam Services to bridge the gap between government services and the common people, making essential services accessible to all.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About
// src/components/ui/SectionTitle.jsx
import React from 'react'
import { motion } from 'framer-motion'

const SectionTitle = ({ title, subtitle, centered = true }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`mb-12 ${centered ? 'text-center' : ''}`}
    >
      {subtitle && (
        <p className="text-secondary font-semibold mb-2">{subtitle}</p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
        {title}
      </h2>
      {centered && (
        <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
      )}
    </motion.div>
  )
}

export default SectionTitle
// src/components/ui/ServiceCard.jsx
import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const ServiceCard = ({ icon: Icon, title, description, route, color = 'primary' }) => {
  const navigate = useNavigate()
  const colorClasses = {
    primary: 'hover:border-primary',
    secondary: 'hover:border-secondary',
    accent: 'hover:border-accent'
  }

  return (
    <motion.div
      whileHover={{ y: -10 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`bg-white rounded-2xl shadow-xl p-6 cursor-pointer transition-all duration-300 border-2 border-transparent ${colorClasses[color]} hover:shadow-2xl`}
      onClick={() => route && navigate(route)}
    >
      <div className={`text-${color} mb-4`}>
        {Icon && <Icon size={48} />}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  )
}

export default ServiceCard
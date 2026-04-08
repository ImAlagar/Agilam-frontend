// src/pages/services/Insurance.jsx
import React from 'react'
import { motion } from 'framer-motion'
import { FaHeartbeat, FaLifeRing, FaCar, FaShieldAlt, FaCheckCircle } from 'react-icons/fa'
import SectionTitle from '../../components/ui/SectionTitle'

const Insurance = () => {
  const categories = [
    {
      title: "Health Insurance",
      icon: FaHeartbeat,
      color: "from-red-500 to-pink-500",
      features: [
        "Individual & Family Plans",
        "Cashless Hospitalization",
        "Critical Illness Cover",
        "Maternity Benefits",
        "Annual Health Checkup"
      ]
    },
    {
      title: "Life Insurance",
      icon: FaLifeRing,
      color: "from-blue-500 to-cyan-500",
      features: [
        "Term Plans",
        "Child Plans",
        "Retirement Plans",
        "ULIP Plans",
        "Guaranteed Returns"
      ]
    },
    {
      title: "Vehicle Insurance",
      icon: FaCar,
      color: "from-green-500 to-emerald-500",
      features: [
        "Car & Bike Insurance",
        "Instant Renewal",
        "Quick Claim Support",
        "Zero Depreciation Cover",
        "24/7 Roadside Assistance"
      ]
    }
  ]

  const partners = [
    "HDFC ERGO", "ICICI Lombard", "Bajaj Allianz", "Star Health", "Tata AIG", "SBI Life"
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 pt-32 pb-20">
        <div className="container-custom text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Secure Your <span className="text-accent">Future</span> Today
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              Health, Life & Vehicle Insurance Made Easy
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionTitle title="Insurance Solutions" subtitle="Choose Your Plan" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className={`bg-gradient-to-r ${category.color} p-6 text-white`}>
                  <category.icon size={48} />
                  <h3 className="text-2xl font-bold mt-2">{category.title}</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {category.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <FaCheckCircle className="text-green-500" size={16} />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="w-full mt-6 bg-primary text-white py-2 rounded-lg hover:bg-primary/90 transition">
                    Get Quote
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <SectionTitle title="Trusted Partners" subtitle="We Work With" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-4 text-center shadow-md"
              >
                <FaShieldAlt className="text-primary mx-auto mb-2" size={32} />
                <p className="font-semibold text-sm">{partner}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container-custom text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get the Best Plan Today</h2>
            <p className="text-lg mb-6">Compare and choose from top insurance providers</p>
            <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Contact Advisor
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Insurance
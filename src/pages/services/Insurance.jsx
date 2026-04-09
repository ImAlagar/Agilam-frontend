import React from 'react'
import { motion } from 'framer-motion'
import { FaHeartbeat, FaLifeRing, FaCar, FaShieldAlt } from 'react-icons/fa'
import SectionTitle from '../../components/ui/SectionTitle'
import ServiceCard from '../../components/ui/ServiceCard'

const Insurance = () => {

  const categories = [
    {
      title: "Health Insurance",
      icon: FaHeartbeat,
      color: "primary",
      items: [
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
      color: "secondary",
      items: [
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
      color: "accent",
      items: [
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

      {/* Categories Section (UPDATED) */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionTitle title="Insurance Solutions" subtitle="Choose Your Plan" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
            {categories.map((category, index) => (
              <ServiceCard key={index} {...category} />
            ))}
          </div>

        </div>
      </section>

      {/* Partners Section */}
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
                className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get the Best Plan Today
            </h2>
            <p className="text-lg mb-6">
              Compare and choose from top insurance providers
            </p>
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
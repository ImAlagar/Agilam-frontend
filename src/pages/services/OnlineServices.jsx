import React from 'react'
import { motion } from 'framer-motion'
import { 
  FiFileText, FiCreditCard, FiUsers, FiUserCheck, 
  FiHome, FiMap
} from 'react-icons/fi'
import SectionTitle from '../../components/ui/SectionTitle'
import ServiceCard from '../../components/ui/ServiceCard'

const OnlineServices = () => {

  const serviceCategories = [
    {
      title: "E-Sevai Certificates",
      icon: FiFileText,
      color: "primary",
      items: [
        "Income Certificate",
        "Community Certificate",
        "Nativity Certificate",
        "Marriage Certificate",
        "Legal Heir Certificate",
        "OBC Certificate"
      ]
    },
    {
      title: "PAN Services",
      icon: FiCreditCard,
      color: "secondary",
      items: [
        "New PAN Card",
        "Name Correction",
        "DOB Correction",
        "E-PAN Download",
        "PAN Reprint"
      ]
    },
    {
      title: "PF Services",
      icon: FiUsers,
      color: "accent",
      items: [
        "UAN Activation",
        "Balance Check",
        "PF Transfer",
        "Claim Settlement"
      ]
    },
    {
      title: "Voter Services",
      icon: FiUserCheck,
      color: "primary",
      items: [
        "New Voter ID",
        "Correction & Download",
        "Aadhaar Linking"
      ]
    },
    {
      title: "Ration Services",
      icon: FiHome,
      color: "secondary",
      items: [
        "New Smart Card",
        "Address Change",
        "Name Inclusion"
      ]
    },
    {
      title: "Land & Property",
      icon: FiMap,
      color: "accent",
      items: [
        "TSLA",
        "Encumbrance Certificate",
        "E-Patta Download"
      ]
    }
  ]

  return (
    <div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-secondary/10 pt-32 pb-20">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-800">
              Government Services <span className="text-primary">Made Simple</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Fast, Easy & Trusted Online Services
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section (UPDATED) */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionTitle title="Our Services" subtitle="Comprehensive Solutions" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
            {serviceCategories.map((category, index) => (
              <ServiceCard key={index} {...category} />
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
              Need Any Certificate?
            </h2>
            <p className="text-lg mb-6">
              Get it done quickly with our expert assistance
            </p>
            <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Contact Now
            </button>
          </motion.div>
        </div>
      </section>

    </div>
  )
}

export default OnlineServices
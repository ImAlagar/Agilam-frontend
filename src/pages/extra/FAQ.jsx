// src/pages/extra/FAQ.jsx
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiPlus, FiMinus } from 'react-icons/fi'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer Online Government Services (certificates, PAN, PF), Insurance Solutions (Health, Life, Vehicle), and Creative Studio services (photo frames, restoration, design)."
    },
    {
      question: "How long does it take to get a certificate?",
      answer: "Most certificates are processed within 5-7 working days. Some services like PAN card may take 10-15 days depending on government processing."
    },
    {
      question: "Do you provide home service?",
      answer: "Yes, we provide doorstep service for certain services. Please contact us for more details about home service availability."
    },
    {
      question: "What are your business hours?",
      answer: "We are open Monday to Saturday from 9:00 AM to 8:00 PM, and Sunday from 10:00 AM to 4:00 PM."
    },
    {
      question: "How can I track my application status?",
      answer: "You can call us directly at 7871715084 or visit our center to check the status of your application."
    },
    {
      question: "Do you offer bulk discounts?",
      answer: "Yes, we offer special discounts for bulk orders and corporate clients. Please contact us for a custom quote."
    }
  ]

  return (
    <div>
      <section className="bg-gradient-to-r from-primary to-secondary pt-32 pb-20 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-xl">Find answers to common questions about our services</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-100 transition"
                >
                  <span className="font-semibold text-left">{faq.question}</span>
                  {openIndex === index ? <FiMinus /> : <FiPlus />}
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-4 text-gray-600"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default FAQ
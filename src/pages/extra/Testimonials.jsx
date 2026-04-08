// src/pages/extra/Testimonials.jsx
import React from 'react'
import { motion } from 'framer-motion'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'
import SectionTitle from '../../components/ui/SectionTitle'

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      position: "Business Owner",
      rating: 5,
      text: "Excellent service! Got my PAN card delivered in just 3 days. Very professional team.",
      image: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      name: "Priya Srinivasan",
      position: "Home Maker",
      rating: 5,
      text: "The photo frame I ordered was beautiful. Great quality and timely delivery.",
      image: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
      name: "Suresh Babu",
      position: "Software Engineer",
      rating: 5,
      text: "Best place for insurance needs. They helped me choose the right health insurance plan.",
      image: "https://randomuser.me/api/portraits/men/2.jpg"
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">What Our Clients Say</h1>
            <p className="text-xl">Trusted by hundreds of satisfied customers</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition"
              >
                <FaQuoteLeft className="text-primary/30 mb-4" size={32} />
                <p className="text-gray-600 mb-4">{testimonial.text}</p>
                <div className="flex items-center space-x-2 mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>
                <div className="flex items-center space-x-3 mt-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.position}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Testimonials
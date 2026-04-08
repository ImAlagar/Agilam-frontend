// src/pages/extra/Gallery.jsx
import React from 'react'
import { motion } from 'framer-motion'
import SectionTitle from '../../components/ui/SectionTitle'

const Gallery = () => {
  const galleryItems = [
    "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop",
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Gallery</h1>
            <p className="text-xl">Take a look at our creative works</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
              >
                <img src={item} alt={`Gallery ${index + 1}`} className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white text-lg font-semibold">View Details</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Gallery
// src/pages/services/Studio.jsx
import React from 'react'
import { motion } from 'framer-motion'
import { 
  FiCamera, FiImage, FiBox, FiLayers, 
  FiPrinter, FiRefreshCw, FiActivity, FiPenTool,
  FiUser, FiBook, FiGrid, FiDroplet
} from 'react-icons/fi'
import SectionTitle from '../../components/ui/SectionTitle'

const Studio = () => {
  const services = [
    { icon: FiCamera, name: "Customized Photo Frames" },
    { icon: FiImage, name: "Photo Collage Frames" },
    { icon: FiBox, name: "Wooden Frames" },
    { icon: FiLayers, name: "MDF Frames" },
    { icon: FiGrid, name: "3D & Acrylic Frames" },
    { icon: FiPrinter, name: "Mug Photo Printing" },
    { icon: FiRefreshCw, name: "Old Photo Restoration" },
    { icon: FiActivity, name: "Black & White to Color" },
    { icon: FiPenTool, name: "Logo Design" },
    { icon: FiUser, name: "Passport Size Photo" },
    { icon: FiBook, name: "Photo Album Design" },
  ]

  const galleryImages = [
    "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=400&h=300&fit=crop",
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 to-gray-700 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container-custom text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
              Frame Your <span className="text-accent">Memories</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Creative Photo & Design Studio
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionTitle title="Our Services" subtitle="What We Offer" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-xl transition-all cursor-pointer"
              >
                <service.icon className="text-primary mx-auto mb-3" size={36} />
                <h3 className="font-semibold text-gray-800">{service.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <SectionTitle title="Our Gallery" subtitle="Recent Works" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer"
              >
                <img src={image} alt={`Gallery ${index + 1}`} className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <FiCamera className="text-white" size={32} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Create Your Memories Today</h2>
            <p className="text-lg mb-6">Let us help you preserve your precious moments</p>
            <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Book Now
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Studio
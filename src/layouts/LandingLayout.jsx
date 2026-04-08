// src/layouts/LandingLayout.jsx
import React from 'react'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import WhatsAppButton from '../components/common/WhatsAppButton'

const LandingLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default LandingLayout
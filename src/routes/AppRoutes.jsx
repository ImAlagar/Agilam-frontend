// src/routes/AppRoutes.jsx
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import LandingLayout from '../layouts/LandingLayout'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import OnlineServices from '../pages/services/OnlineServices'
import Studio from '../pages/services/Studio'
import Insurance from '../pages/services/Insurance'
import Events from '../pages/services/Events'
import Gallery from '../pages/extra/Gallery'
import Testimonials from '../pages/extra/Testimonials'
import FAQ from '../pages/extra/FAQ'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout><Home /></MainLayout>} />
      <Route path="/about" element={<MainLayout><About /></MainLayout>} />
      <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />
      <Route path="/gallery" element={<MainLayout><Gallery /></MainLayout>} />
      <Route path="/testimonials" element={<MainLayout><Testimonials /></MainLayout>} />
      <Route path="/faq" element={<MainLayout><FAQ /></MainLayout>} />
      <Route path="/services/online" element={<LandingLayout><OnlineServices /></LandingLayout>} />
      <Route path="/services/studio" element={<LandingLayout><Studio /></LandingLayout>} />
      <Route path="/services/insurance" element={<LandingLayout><Insurance /></LandingLayout>} />
      <Route path="/services/events" element={<LandingLayout><Events /></LandingLayout>} />
    </Routes>
  )
}

export default AppRoutes
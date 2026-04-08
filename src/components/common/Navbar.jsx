// src/components/common/Navbar.jsx
import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [hoveredItem, setHoveredItem] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', hasDropdown: true },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ]

  const serviceLinks = [
    { name: 'Online Services', path: '/services/online', description: 'Government certificates & documents' },
    { name: 'Creative Studio', path: '/services/studio', description: 'Photo frames & design' },
    { name: 'Insurance Solutions', path: '/services/insurance', description: 'Health, Life & Vehicle' },
    { name: 'Event Planners', path: '/services/events', description: 'Coming Soon' },
  ]

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' 
          : 'bg-gradient-to-r from-primary/90 to-secondary/90 backdrop-blur-sm py-5'
      }`}>
        <div className="container-custom">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="group relative">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center transform transition group-hover:scale-110">
                  <span className="text-white font-bold text-xl">A</span>
                </div>
                <div>
                  <span className={`text-2xl font-bold transition-colors ${
                    scrolled ? 'text-gray-800' : 'text-white'
                  }`}>
                    Agilam
                    <span className="text-yellow-400">Services</span>
                  </span>
                  <p className={`text-xs transition-colors ${
                    scrolled ? 'text-gray-500' : 'text-white/80'
                  }`}>
                    All-in-One Solutions
                  </p>
                </div>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <div 
                  key={link.name} 
                  className="relative"
                  onMouseEnter={() => setHoveredItem(link.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {link.hasDropdown ? (
                    <div
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                    >
                      <button className={`relative px-2 py-2 text-base font-medium transition-colors duration-300 ${
                        scrolled 
                          ? 'text-gray-700 hover:text-primary' 
                          : 'text-white/90 hover:text-white'
                      }`}>
                        Services
                        <FiChevronDown className={`inline-block ml-1 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} size={14} />
                        
                        {/* Hover Underline */}
                        {hoveredItem === link.name && (
                          <motion.div
                            layoutId="hoverUnderline"
                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-yellow-400"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.3 }}
                          />
                        )}
                      </button>
                      
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100"
                        >
                          <div className="p-2">
                            {serviceLinks.map((service) => (
                              <Link
                                key={service.name}
                                to={service.path}
                                className="block px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-primary/5 hover:to-secondary/5 transition-all duration-300"
                              >
                                <div className="font-semibold text-gray-800 hover:text-primary transition">
                                  {service.name}
                                </div>
                                <p className="text-xs text-gray-500 mt-1">{service.description}</p>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={link.path}
                      className={`relative px-2 py-2 text-base font-medium transition-colors duration-300 ${
                        location.pathname === link.path
                          ? scrolled ? 'text-primary' : 'text-white'
                          : scrolled 
                            ? 'text-gray-700 hover:text-primary' 
                            : 'text-white/90 hover:text-white'
                      }`}
                    >
                      {link.name}
                      
                      {/* Active Page Underline - Stays permanently */}
                      {location.pathname === link.path && (
                        <motion.div
                          layoutId="activeUnderline"
                          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-yellow-400"
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                      )}
                      
                      {/* Hover Underline - Appears on hover, disappears on leave */}
                      {hoveredItem === link.name && location.pathname !== link.path && (
                        <motion.div
                          layoutId="hoverUnderline"
                          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-yellow-400/60"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          exit={{ scaleX: 0 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </Link>
                  )}
                </div>
              ))}
              
              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`ml-2 px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  scrolled
                    ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg hover:shadow-xl'
                    : 'bg-white text-primary hover:bg-gray-100'
                }`}
                onClick={() => window.location.href = '/contact'}
              >
                Get Quote
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden p-2 rounded-lg transition-all duration-300 ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, x: '100%' }}
        animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : '100%' }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-white shadow-2xl z-40 md:hidden ${isOpen ? 'block' : 'pointer-events-none'}`}
      >
        <div className="pt-20 pb-6 px-6 h-full overflow-y-auto">
          {/* Mobile Logo */}
          <div className="flex items-center gap-3 mb-8 pb-4 border-b border-gray-100">
            <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-2xl">A</span>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-800">
                Agilam<span className="text-primary">Services</span>
              </div>
              <p className="text-xs text-gray-500">All-in-One Solutions</p>
            </div>
          </div>

          {/* Mobile Navigation Links */}
          <div className="space-y-2">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.hasDropdown ? (
                  <div>
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className="flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition"
                    >
                      <span className="font-medium">Services</span>
                      <FiChevronDown className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {servicesOpen && (
                      <div className="ml-4 mt-2 space-y-2">
                        {serviceLinks.map((service) => (
                          <Link
                            key={service.name}
                            to={service.path}
                            className="block px-4 py-2 text-gray-600 hover:text-primary hover:bg-gray-50 rounded-lg transition"
                            onClick={() => setIsOpen(false)}
                          >
                            <div className="font-medium">{service.name}</div>
                            <p className="text-xs text-gray-400">{service.description}</p>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    className={`block px-4 py-3 rounded-lg transition ${
                      location.pathname === link.path
                        ? 'text-primary font-semibold bg-primary/5'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile CTA */}
          <div className="mt-8 pt-6 border-t border-gray-100">
            <button
              className="w-full bg-gradient-to-r from-primary to-secondary text-white py-3 rounded-xl font-semibold shadow-lg"
              onClick={() => {
                window.location.href = '/contact'
                setIsOpen(false)
              }}
            >
              Get a Free Quote
            </button>
            
            {/* Contact Info */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500">Need help?</p>
              <p className="text-lg font-semibold text-primary">7871715084</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
        />
      )}
    </>
  )
}

export default Navbar
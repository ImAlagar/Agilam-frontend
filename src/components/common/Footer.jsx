// src/components/common/Footer.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import { FiMapPin, FiPhone, FiMail, FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-primary">Agilam</span>
              <span className="text-secondary">Services</span>
            </h3>
            <p className="text-gray-400">
              Your one-stop solution for all daily needs - Government Services, Insurance, and Creative Studio.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-secondary transition">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-secondary transition">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-secondary transition">Contact</Link></li>
              <li><Link to="/gallery" className="text-gray-400 hover:text-secondary transition">Gallery</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services/online" className="text-gray-400 hover:text-secondary transition">Online Services</Link></li>
              <li><Link to="/services/studio" className="text-gray-400 hover:text-secondary transition">Creative Studio</Link></li>
              <li><Link to="/services/insurance" className="text-gray-400 hover:text-secondary transition">Insurance</Link></li>
              <li><Link to="/services/events" className="text-gray-400 hover:text-secondary transition">Event Planners</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-gray-400">
                <FiMapPin className="text-secondary" />
                <span>West Tambaram, Chennai</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <FiPhone className="text-secondary" />
                <span>7871715084</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <FiMail className="text-secondary" />
                <span>contact@agilam.com</span>
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-secondary transition"><FiFacebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-secondary transition"><FiInstagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-secondary transition"><FiTwitter size={20} /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center text-gray-400">
          <p>&copy; 2024 Agilam Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
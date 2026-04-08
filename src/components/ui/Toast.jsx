// src/components/ui/Toast.jsx
import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiCheckCircle, FiAlertCircle, FiInfo, FiXCircle } from 'react-icons/fi'

const Toast = ({ message, type = 'success', isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(onClose, 5000)
      return () => clearTimeout(timer)
    }
  }, [isVisible, onClose])

  const icons = {
    success: <FiCheckCircle className="text-green-500" size={20} />,
    error: <FiXCircle className="text-red-500" size={20} />,
    warning: <FiAlertCircle className="text-yellow-500" size={20} />,
    info: <FiInfo className="text-blue-500" size={20} />
  }

  const bgColors = {
    success: 'bg-green-50 border-green-200',
    error: 'bg-red-50 border-red-200',
    warning: 'bg-yellow-50 border-yellow-200',
    info: 'bg-blue-50 border-blue-200'
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          className={`fixed bottom-6 right-6 z-50 flex items-center space-x-3 px-4 py-3 rounded-lg shadow-lg border ${bgColors[type]}`}
        >
          {icons[type]}
          <span className="text-gray-700">{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Toast
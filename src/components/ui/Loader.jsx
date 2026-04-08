// src/components/ui/Loader.jsx
import React from 'react'
import { motion } from 'framer-motion'

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 360],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "loop"
        }}
        className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full"
      />
    </div>
  )
}

export default Loader

// components/ui/TypingEffect.tsx
'use client'
import { motion } from 'framer-motion'
import React, { useState, useEffect } from 'react'

const roles = [
  'AI Engineer',
  'RAG Builder',
  'Full-Stack Developer',
  'Data Storyteller',
]

const TypingEffect: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const TYPING_SPEED = 100
  const DELETING_SPEED = 50
  const PAUSE_END = 1500

  useEffect(() => {
    if (subIndex === roles[roleIndex].length + 1 && !isDeleting) {
      setTimeout(() => setIsDeleting(true), PAUSE_END)
    } else if (subIndex === 0 && isDeleting) {
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1))
    }, isDeleting ? DELETING_SPEED : TYPING_SPEED)

    return () => clearTimeout(timeout)
  }, [subIndex, isDeleting, roleIndex])

  const currentText = roles[roleIndex].substring(0, subIndex)

  return (
    <motion.span
      className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-mono font-extrabold text-neon-blue inline-block"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {currentText}
      {/* Animated Cursor */}
      <motion.span
        className="inline-block w-2 bg-neon-blue h-full ml-1 align-bottom"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
      />
    </motion.span>
  )
}

export default TypingEffect

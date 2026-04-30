import React from 'react'
import { motion } from 'framer-motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'

export default function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
  className = '',
  once = true,
}) {
  const reduced = useReducedMotion()

  const variants = {
    hidden: reduced
      ? { opacity: 0 }
      : {
          opacity: 0,
          y: direction === 'up' ? 30 : direction === 'down' ? -30 : 0,
          x: direction === 'left' ? 30 : direction === 'right' ? -30 : 0,
        },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: reduced ? 0.3 : 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.25 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

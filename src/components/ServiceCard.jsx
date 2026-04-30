import React from 'react'
import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'

export default function ServiceCard({ service, index }) {
  const Icon = Icons[service.icon] || Icons.Star

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, rotate: 0.3 }}
      className={`group relative rounded-2xl p-6 border transition-all duration-300 cursor-default ${
        service.highlight
          ? 'bg-brand-blue text-white border-brand-blue shadow-[0_8px_30px_rgba(42,95,165,0.3)]'
          : 'bg-white text-brand-darkblue border-brand-blue/10 hover:border-brand-blue/30 hover:shadow-[0_8px_30px_rgba(42,95,165,0.12)]'
      }`}
    >
      {/* Icon */}
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 ${
          service.highlight ? 'bg-white/20' : 'bg-brand-sky'
        }`}
      >
        <Icon
          className={`w-6 h-6 ${service.highlight ? 'text-white' : 'text-brand-blue'}`}
          strokeWidth={1.8}
        />
      </div>

      {/* Title */}
      <h3
        className={`font-display font-semibold text-lg mb-2 leading-snug ${
          service.highlight ? 'text-white' : 'text-brand-darkblue'
        }`}
      >
        {service.title}
      </h3>

      {/* Description */}
      <p
        className={`font-body text-sm leading-relaxed ${
          service.highlight ? 'text-white/80' : 'text-brand-gray/70'
        }`}
      >
        {service.description}
      </p>

      {/* Hover accent line */}
      <div
        className={`absolute bottom-0 left-6 right-6 h-0.5 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 ${
          service.highlight ? 'bg-white/40' : 'bg-brand-blue'
        }`}
      />
    </motion.div>
  )
}

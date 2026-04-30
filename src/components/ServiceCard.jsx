import React from 'react'
import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import { brand } from '../data/siteContent'

// Cycles through all 4 palette colors
const ICON_COLORS = [
  { text: 'text-brand-cyan',   bg: 'bg-cyan-50' },
  { text: 'text-brand-orange', bg: 'bg-orange-50' },
  { text: 'text-brand-yellow', bg: 'bg-yellow-50' },
  { text: 'text-brand-pink',   bg: 'bg-pink-50' },
]

export default function ServiceCard({ service, index }) {
  const Icon = Icons[service.icon] || Icons.Star
  const palette = ICON_COLORS[index % ICON_COLORS.length]
  const whatsappText = `Hi! I'd like to know more about your "${service.title}" service.`

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative flex flex-col rounded-2xl p-5 border transition-all duration-300 cursor-default ${
        service.highlight
          ? 'bg-brand-darkblue text-white border-brand-darkblue shadow-[0_8px_30px_rgba(10,39,72,0.35)]'
          : 'bg-white text-brand-darkblue border-gray-100 hover:border-brand-cyan/30 hover:shadow-[0_12px_36px_rgba(18,197,212,0.14)] hover:-translate-y-1'
      }`}
    >
      {/* Highlight glow for featured card */}
      {service.highlight && (
        <div
          className="absolute inset-0 rounded-2xl opacity-30 pointer-events-none"
          style={{ background: 'radial-gradient(circle at top right, #12C5D4, transparent 60%)' }}
        />
      )}

      {/* Icon */}
      <div
        className={`w-11 h-11 rounded-xl flex items-center justify-center mb-3.5 transition-transform duration-300 group-hover:scale-110 ${
          service.highlight ? 'bg-white/15' : `${palette.bg}`
        }`}
      >
        <Icon
          className={`w-5 h-5 ${service.highlight ? 'text-brand-cyan' : palette.text}`}
          strokeWidth={1.8}
        />
      </div>

      {/* Title */}
      <h3
        className={`font-display font-semibold text-base mb-1.5 leading-snug ${
          service.highlight ? 'text-white' : 'text-brand-darkblue'
        }`}
      >
        {service.title}
      </h3>

      {/* Description */}
      <p
        className={`font-body text-sm leading-relaxed flex-1 ${
          service.highlight ? 'text-white/70' : 'text-brand-gray/65'
        }`}
      >
        {service.description}
      </p>

      {/* Enquire link */}
      <a
        href={`https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(whatsappText)}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-3.5 inline-flex items-center gap-1 text-xs font-semibold font-body transition-colors ${
          service.highlight
            ? 'text-brand-cyan/70 hover:text-brand-cyan'
            : `${palette.text} opacity-60 hover:opacity-100`
        }`}
      >
        Enquire
        <Icons.ArrowRight className="w-3 h-3" />
      </a>

      {/* Bottom accent */}
      <div
        className={`absolute bottom-0 left-5 right-5 h-0.5 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 ${
          service.highlight ? 'bg-brand-cyan' : `bg-${palette.text.replace('text-', '')}`
        }`}
      />
    </motion.div>
  )
}

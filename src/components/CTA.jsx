import React from 'react'
import { motion } from 'framer-motion'
import { Phone, MessageCircle, ArrowRight } from 'lucide-react'
import { brand } from '../data/siteContent'

export default function CTA() {
  const whatsappLink = `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(
    'Hi! I\'d like to get a customized Andaman tour package quote.'
  )}`

  return (
    <section className="relative overflow-hidden py-20">
      {/* Animated ocean gradient background */}
      <div className="absolute inset-0 ocean-gradient" />

      {/* Glowing pulse overlay */}
      <motion.div
        className="absolute inset-0"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          background: 'radial-gradient(ellipse at center, rgba(74,127,193,0.4) 0%, transparent 70%)',
        }}
      />

      {/* Wave pattern */}
      <div className="absolute inset-0 wave-bg opacity-20" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-white/80 text-xs font-mono tracking-[0.2em] uppercase">
              Booking Lines Open Now
            </span>
          </div>

          <h2 className="font-display font-bold text-white text-4xl sm:text-5xl md:text-6xl mb-4 leading-tight">
            Your Island Adventure
            <span className="block text-blue-200">Starts With One Call</span>
          </h2>
          <p className="font-body text-white/70 text-lg max-w-xl mx-auto mb-10">
            Talk to our local experts. Get a personalized itinerary and quote within 2 hours — completely free.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href={`tel:${brand.phone}`}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="group flex items-center gap-3 px-8 py-4 bg-white text-brand-blue font-bold font-body rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)] transition-all duration-200"
            >
              <Phone className="w-5 h-5" />
              <span>{brand.phoneDisplay}</span>
              <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
            </motion.a>

            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="group flex items-center gap-3 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold font-body rounded-2xl shadow-[0_8px_30px_rgba(34,197,94,0.3)] hover:shadow-[0_12px_40px_rgba(34,197,94,0.4)] transition-all duration-200"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              Chat on WhatsApp
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

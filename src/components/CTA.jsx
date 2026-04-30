import React from 'react'
import { motion } from 'framer-motion'
import { Phone, MessageCircle, ArrowRight } from 'lucide-react'
import { brand } from '../data/siteContent'

export default function CTA() {
  const whatsappLink = `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(
    "Hi! I'd like to get a customized Andaman tour package quote."
  )}`

  return (
    <section className="relative overflow-hidden py-20">
      {/* Deep navy background */}
      <div className="absolute inset-0 premium-dark" />

      {/* Palette color glows */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          background:
            'radial-gradient(ellipse at 30% 50%, rgba(18,197,212,0.2) 0%, transparent 55%), radial-gradient(ellipse at 70% 50%, rgba(212,43,107,0.15) 0%, transparent 55%)',
        }}
      />

      {/* Palette stripe bar at top */}
      <div className="absolute top-0 left-0 right-0 h-1 palette-stripe opacity-80" />

      {/* Wave pattern */}
      <div className="absolute inset-0 wave-bg opacity-15" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          {/* Live badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-cyan/30 bg-brand-cyan/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
            <span className="text-brand-cyan text-xs font-mono font-semibold tracking-[0.2em] uppercase">
              Booking Lines Open Now
            </span>
          </div>

          <h2 className="font-display font-bold text-white text-4xl sm:text-5xl md:text-6xl mb-4 leading-tight">
            Your Island Adventure
            <span className="block text-brand-cyan">Starts With One Call</span>
          </h2>
          <p className="font-body text-white/65 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Talk to our local experts. Get a personalized itinerary and quote within 2 hours —
            completely free.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Primary: orange call button */}
            <motion.a
              href={`tel:${brand.phone}`}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="group flex items-center gap-3 px-8 py-4 bg-brand-orange hover:bg-orange-600 text-white font-bold font-body rounded-2xl shadow-orange hover:shadow-[0_12px_40px_rgba(240,85,40,0.5)] transition-all duration-200"
            >
              <Phone className="w-5 h-5" />
              <span>{brand.phoneDisplay}</span>
              <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
            </motion.a>

            {/* Secondary: WhatsApp green */}
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

      {/* Palette stripe bar at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 palette-stripe opacity-80" />
    </section>
  )
}

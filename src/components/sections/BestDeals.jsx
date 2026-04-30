import React from 'react'
import { motion } from 'framer-motion'
import { Star, ArrowRight, Zap, MessageCircle, Clock } from 'lucide-react'
import { bestDeals, brand } from '../../data/siteContent'
import ScrollReveal from '../ui/ScrollReveal'

export default function BestDeals() {
  return (
    <section id="deals" className="py-24 premium-dark relative overflow-hidden">
      {/* Ambient glows */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 15% 50%, rgba(26,111,255,0.18) 0%, transparent 55%), radial-gradient(ellipse at 85% 50%, rgba(0,191,165,0.14) 0%, transparent 55%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <ScrollReveal className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-orange/15 border border-brand-orange/40 mb-5">
            <Zap className="w-3.5 h-3.5 text-brand-orange fill-brand-orange" />
            <span className="font-mono text-xs text-brand-orange font-semibold tracking-[0.2em] uppercase">
              Limited Time Offers
            </span>
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4 leading-tight">
            Best Deals{' '}
            <span className="text-brand-yellow">Right Now</span>
          </h2>
          <p className="font-body text-white/55 max-w-xl mx-auto text-lg leading-relaxed">
            Handpicked packages with exclusive pricing — book before they're gone.
          </p>
        </ScrollReveal>

        {/* Deal cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {bestDeals.map((deal, index) => (
            <ScrollReveal key={deal.id} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-3xl overflow-hidden h-[520px] cursor-pointer shadow-premium"
              >
                {/* Photo */}
                <img
                  src={deal.image}
                  alt={deal.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 photo-card-overlay" />

                {/* Top badges */}
                <div className="absolute top-4 left-4 right-4 flex items-start justify-between">
                  <span className="px-3 py-1.5 rounded-full text-xs font-semibold font-body bg-brand-pink text-white shadow-pink">
                    {deal.badge}
                  </span>
                  <span className="px-3 py-1.5 rounded-full text-xs font-bold font-body bg-brand-yellow text-brand-darkblue shadow-yellow">
                    {deal.saving}
                  </span>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  {/* Meta */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-mono text-[10px] text-white/50 uppercase tracking-wider bg-white/10 px-2 py-1 rounded-md">
                      {deal.category}
                    </span>
                    <span className="flex items-center gap-1 font-body text-xs text-amber-400 font-semibold">
                      <Star className="w-3 h-3 fill-amber-400" />
                      {deal.rating}
                      <span className="text-white/40 font-normal">({deal.reviews})</span>
                    </span>
                    <span className="flex items-center gap-1 font-body text-xs text-white/40">
                      <Clock className="w-3 h-3" />
                      {deal.nights}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-white text-xl mb-3 leading-snug">
                    {deal.title}
                  </h3>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {deal.highlights.slice(0, 3).map((h) => (
                      <span
                        key={h}
                        className="px-2.5 py-1 rounded-lg text-[11px] font-body font-medium bg-white/10 text-white/80 border border-white/10"
                      >
                        {h}
                      </span>
                    ))}
                    {deal.highlights.length > 3 && (
                      <span className="px-2.5 py-1 rounded-lg text-[11px] font-body font-medium bg-white/10 text-white/60">
                        +{deal.highlights.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Price + CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div>
                      <span className="font-body text-white/40 text-sm line-through mr-2">
                        {deal.originalPrice}
                      </span>
                      <div className="flex items-baseline gap-1">
                        <span className="font-display font-bold text-white text-2xl">
                          {deal.price}
                        </span>
                        <span className="font-body text-white/45 text-xs">/ person</span>
                      </div>
                    </div>
                    <a
                      href={`https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(
                        `Hi! I'm interested in the "${deal.title}" package. Please share full details and availability.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 bg-brand-orange hover:bg-orange-600 text-white text-sm font-semibold font-body rounded-xl transition-all duration-200 active:scale-95 shadow-orange"
                    >
                      Book Now
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <ScrollReveal className="text-center mt-12">
          <p className="font-body text-white/40 mb-4 text-sm">
            Don't see what you're looking for?
          </p>
          <a
            href={`https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(
              'Hi! I need a custom Andaman package. Can you help me build one?'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-semibold font-body rounded-xl hover:bg-white/10 transition-all duration-200 text-sm"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            Customize Your Own Package
          </a>
        </ScrollReveal>
      </div>
    </section>
  )
}

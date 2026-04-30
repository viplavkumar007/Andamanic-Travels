import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { testimonials } from '../../data/siteContent'
import ScrollReveal from '../ui/ScrollReveal'

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-amber-400 fill-amber-400' : 'text-gray-200 fill-gray-200'}`}
        />
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((c) => (c + 1) % testimonials.length)

  const t = testimonials[current]

  return (
    <section id="testimonials" className="py-24 bg-brand-light relative overflow-hidden">
      {/* Background decoration */}
      <div
        className="absolute inset-0 opacity-5 wave-bg"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-blue/20 bg-white mb-4">
            <span className="font-mono text-xs text-brand-blue font-medium tracking-[0.15em] uppercase">
              Traveler Stories
            </span>
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-brand-darkblue mb-4">
            What Our Guests Say
          </h2>
          <p className="font-body text-brand-gray/70 max-w-xl mx-auto">
            Real experiences from real travelers who trusted us with their Andaman adventures.
          </p>
        </ScrollReveal>

        {/* Main testimonial display */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-3xl shadow-[0_4px_40px_rgba(42,95,165,0.1)] border border-brand-blue/10 overflow-hidden">
            {/* Quote decoration */}
            <div className="absolute top-6 right-8 text-brand-blue/5">
              <Quote className="w-24 h-24 fill-current" />
            </div>

            <div className="p-8 sm:p-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    {/* Avatar */}
                    <div className="w-14 h-14 rounded-2xl bg-brand-blue flex items-center justify-center shrink-0">
                      <span className="font-display font-bold text-white text-lg">{t.avatar}</span>
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-brand-darkblue text-lg">{t.name}</h3>
                      <p className="font-body text-xs text-brand-gray/60">{t.location} · {t.trip}</p>
                    </div>
                    <div className="ml-auto">
                      <StarRating rating={t.rating} />
                    </div>
                  </div>

                  <blockquote className="font-body text-brand-gray/80 text-base sm:text-lg leading-relaxed italic">
                    "{t.text}"
                  </blockquote>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="px-8 sm:px-12 pb-8 flex items-center justify-between">
              {/* Dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    aria-label={`View testimonial ${i + 1}`}
                    className={`rounded-full transition-all duration-300 ${
                      i === current
                        ? 'w-6 h-2 bg-brand-blue'
                        : 'w-2 h-2 bg-brand-blue/20 hover:bg-brand-blue/40'
                    }`}
                  />
                ))}
              </div>

              {/* Arrows */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-xl border border-brand-blue/15 flex items-center justify-center text-brand-blue hover:bg-brand-sky active:scale-95 transition-all"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-xl bg-brand-blue flex items-center justify-center text-white hover:bg-brand-darkblue active:scale-95 transition-all"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mini cards row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mt-8">
          {testimonials.map((t, i) => (
            <motion.button
              key={i}
              onClick={() => setCurrent(i)}
              whileHover={{ y: -2 }}
              className={`text-left p-4 rounded-2xl border transition-all duration-200 ${
                i === current
                  ? 'border-brand-blue bg-white shadow-[0_4px_16px_rgba(42,95,165,0.15)]'
                  : 'border-brand-blue/10 bg-white/60 hover:bg-white hover:border-brand-blue/25'
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 rounded-lg bg-brand-blue/10 flex items-center justify-center">
                  <span className="font-display font-bold text-brand-blue text-xs">{t.avatar}</span>
                </div>
                <StarRating rating={t.rating} />
              </div>
              <p className="font-body text-xs font-semibold text-brand-darkblue leading-snug">{t.name}</p>
              <p className="font-body text-[10px] text-brand-gray/50 mt-0.5">{t.location}</p>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  )
}

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
          className={`w-4 h-4 ${
            i < rating ? 'text-amber-400 fill-amber-400' : 'text-gray-200 fill-gray-200'
          }`}
        />
      ))}
    </div>
  )
}

function Avatar({ person }) {
  const [imgError, setImgError] = useState(false)

  if (!imgError && person.photo) {
    return (
      <img
        src={person.photo}
        alt={person.name}
        className="w-14 h-14 rounded-2xl object-cover"
        onError={() => setImgError(true)}
      />
    )
  }

  return (
    <div className="w-14 h-14 rounded-2xl bg-brand-blue flex items-center justify-center shrink-0">
      <span className="font-display font-bold text-white text-base">{person.avatar}</span>
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
      <div className="absolute inset-0 opacity-[0.03] wave-bg" aria-hidden="true" />
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(26,111,255,0.3), transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <ScrollReveal className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-blue/20 bg-white mb-5 shadow-sm">
            <span className="font-mono text-xs text-brand-blue font-semibold tracking-[0.15em] uppercase">
              Traveler Stories
            </span>
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-brand-darkblue mb-4 leading-tight">
            What Our Guests Say
          </h2>
          <p className="font-body text-brand-gray/65 max-w-xl mx-auto text-lg leading-relaxed">
            Real experiences from real travelers who trusted us with their Andaman adventures.
          </p>
        </ScrollReveal>

        {/* Main testimonial display */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-3xl shadow-[0_8px_48px_rgba(26,111,255,0.1)] border border-brand-blue/8 overflow-hidden">
            {/* Large quote decoration */}
            <div className="absolute top-6 right-8 text-brand-blue/5">
              <Quote className="w-28 h-28 fill-current" />
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
                  {/* Reviewer info */}
                  <div className="flex items-start gap-4 mb-6">
                    <Avatar person={t} />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display font-bold text-brand-darkblue text-lg leading-snug truncate">
                        {t.name}
                      </h3>
                      <p className="font-body text-xs text-brand-gray/55 mt-0.5">
                        {t.location} · {t.trip}
                      </p>
                    </div>
                    <div className="shrink-0">
                      <StarRating rating={t.rating} />
                    </div>
                  </div>

                  <blockquote className="font-body text-brand-gray/75 text-base sm:text-lg leading-relaxed italic">
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

        {/* Mini reviewer cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mt-8">
          {testimonials.map((reviewer, i) => (
            <motion.button
              key={i}
              onClick={() => setCurrent(i)}
              whileHover={{ y: -3 }}
              className={`text-left p-4 rounded-2xl border transition-all duration-200 ${
                i === current
                  ? 'border-brand-blue bg-white shadow-[0_4px_20px_rgba(26,111,255,0.15)]'
                  : 'border-brand-blue/10 bg-white/70 hover:bg-white hover:border-brand-blue/25'
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 rounded-lg overflow-hidden shrink-0">
                  {reviewer.photo ? (
                    <img
                      src={reviewer.photo}
                      alt={reviewer.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none'
                        e.target.nextSibling.style.display = 'flex'
                      }}
                    />
                  ) : null}
                  <div
                    className="w-7 h-7 rounded-lg bg-brand-blue/10 flex items-center justify-center"
                    style={{ display: reviewer.photo ? 'none' : 'flex' }}
                  >
                    <span className="font-display font-bold text-brand-blue text-[10px]">
                      {reviewer.avatar}
                    </span>
                  </div>
                </div>
                <StarRating rating={reviewer.rating} />
              </div>
              <p className="font-body text-xs font-semibold text-brand-darkblue leading-snug truncate">
                {reviewer.name}
              </p>
              <p className="font-body text-[10px] text-brand-gray/45 mt-0.5 truncate">
                {reviewer.location}
              </p>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  )
}

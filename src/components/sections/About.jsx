import React from 'react'
import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import { about } from '../../data/siteContent'
import ScrollReveal from '../ui/ScrollReveal'

export default function About() {
  const photos = about.photos

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative blob */}
      <div
        className="absolute -right-48 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.04] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #1A6FFF 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Photo grid */}
          <ScrollReveal direction="right">
            <div className="relative">
              {/* 2×2 photo grid */}
              <div className="grid grid-cols-2 gap-3">
                {/* Large top-left photo */}
                <div className="col-span-1 row-span-2">
                  <div className="relative h-72 sm:h-80 rounded-3xl overflow-hidden shadow-xl">
                    <img
                      src={photos[0].src}
                      alt={photos[0].alt}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/30 to-transparent" />
                  </div>
                </div>

                {/* Top-right photo */}
                <div className="relative h-[140px] sm:h-[152px] rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={photos[1].src}
                    alt={photos[1].alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/20 to-transparent" />
                </div>

                {/* Bottom-right photos row */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="relative h-28 rounded-2xl overflow-hidden shadow-md">
                    <img
                      src={photos[2].src}
                      alt={photos[2].alt}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/20 to-transparent" />
                  </div>
                  <div className="relative h-28 rounded-2xl overflow-hidden shadow-md">
                    <img
                      src={photos[3].src}
                      alt={photos[3].alt}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/20 to-transparent" />
                  </div>
                </div>
              </div>

              {/* Floating stat cards */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl p-4 border border-brand-blue/10"
              >
                <p className="font-mono text-[10px] text-brand-blue/50 uppercase tracking-wider mb-0.5">
                  Est.
                </p>
                <p className="font-display font-bold text-2xl text-brand-darkblue">2014</p>
                <p className="font-body text-xs text-brand-gray/55 mt-0.5">Serving Travelers</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -top-4 -right-4 bg-brand-blue rounded-2xl shadow-xl p-4"
              >
                <p className="font-display font-bold text-2xl text-white">5000+</p>
                <p className="font-body text-xs text-white/65 mt-0.5">Happy Travelers</p>
              </motion.div>
            </div>
          </ScrollReveal>

          {/* Right: Content */}
          <div>
            <ScrollReveal delay={0.1}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-blue/20 bg-brand-sky mb-5">
                <span className="font-mono text-xs text-brand-blue font-semibold tracking-[0.15em] uppercase">
                  Our Story
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <h2 className="font-display font-bold text-4xl sm:text-5xl text-brand-darkblue mb-6 leading-tight">
                {about.headline.split('\n').map((line, i) => (
                  <span
                    key={i}
                    className={i === 1 ? 'block text-brand-blue' : 'block'}
                  >
                    {line}
                  </span>
                ))}
              </h2>
            </ScrollReveal>

            <div className="space-y-4 mb-8">
              {about.body.map((para, i) => (
                <ScrollReveal key={i} delay={0.3 + i * 0.1}>
                  <p className="font-body text-brand-gray/70 leading-relaxed text-[15px]">
                    {para}
                  </p>
                </ScrollReveal>
              ))}
            </div>

            {/* Features grid */}
            <div className="grid grid-cols-2 gap-3">
              {about.features.map((feat, i) => {
                const Icon = Icons[feat.icon] || Icons.Star
                return (
                  <ScrollReveal key={feat.label} delay={0.5 + i * 0.08}>
                    <div className="flex items-center gap-3 p-3.5 rounded-xl bg-brand-sky border border-brand-blue/10 hover:border-brand-blue/25 transition-colors">
                      <div className="w-9 h-9 rounded-lg bg-brand-blue/12 flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-brand-blue" />
                      </div>
                      <span className="font-body text-sm font-semibold text-brand-darkblue leading-snug">
                        {feat.label}
                      </span>
                    </div>
                  </ScrollReveal>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import React from 'react'
import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import { about } from '../../data/siteContent'
import ScrollReveal from '../ui/ScrollReveal'

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative blob */}
      <div
        className="absolute -right-32 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-5"
        style={{ background: 'radial-gradient(circle, #2A5FA5 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Visual */}
          <ScrollReveal direction="right">
            <div className="relative">
              {/* Main image / graphic */}
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-brand-sky to-brand-blue/20 aspect-[4/3] flex items-center justify-center">
                {/* Decorative island scene */}
                <svg viewBox="0 0 500 375" className="w-full h-full p-8" aria-hidden="true">
                  {/* Sky */}
                  <defs>
                    <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#d6e8f7"/>
                      <stop offset="100%" stopColor="#2A5FA5" stopOpacity="0.3"/>
                    </linearGradient>
                    <linearGradient id="seaGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#2A5FA5"/>
                      <stop offset="100%" stopColor="#1a3d6e"/>
                    </linearGradient>
                  </defs>
                  <rect width="500" height="375" fill="url(#skyGrad)" rx="20"/>
                  <ellipse cx="80" cy="100" rx="30" ry="30" fill="white" opacity="0.9"/>
                  {/* Ocean */}
                  <path d="M0 220 Q125 200 250 220 Q375 240 500 220 L500 375 L0 375Z" fill="url(#seaGrad)"/>
                  {/* Island */}
                  <ellipse cx="250" cy="225" rx="110" ry="20" fill="#c8a96e"/>
                  <ellipse cx="250" cy="220" rx="95" ry="16" fill="#d4b77a"/>
                  {/* Trees */}
                  {[220, 250, 275].map((x, i) => (
                    <g key={i} transform={`translate(${x},160)`}>
                      <line x1="0" y1="0" x2="0" y2="60" stroke="#5a3e1b" strokeWidth="5" strokeLinecap="round"/>
                      <path d="M-20,-10 Q0,-35 20,-10 Q0,-5 -20,-10Z" fill="#2A5FA5" opacity="0.9"/>
                      <path d="M-15,-20 Q0,-42 15,-20 Q0,-15 -15,-20Z" fill="#1a3d6e"/>
                      <path d="M-10,-30 Q0,-48 10,-30 Q0,-26 -10,-30Z" fill="#4A7FC1"/>
                    </g>
                  ))}
                  {/* Waves */}
                  <path d="M20 260 Q80 250 140 260 Q200 270 260 260 Q320 250 380 260 Q440 270 490 260" stroke="white" strokeWidth="2" fill="none" opacity="0.4" strokeLinecap="round"/>
                  <path d="M0 285 Q70 275 140 285 Q210 295 280 285 Q350 275 420 285 Q460 290 500 285" stroke="white" strokeWidth="1.5" fill="none" opacity="0.3" strokeLinecap="round"/>
                  {/* Birds */}
                  {[[160,80],[180,68],[200,80]].map(([x,y],i) => (
                    <path key={i} d={`M${x},${y} Q${x+8},${y-6} ${x+16},${y}`} stroke="#1a3d6e" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.5"/>
                  ))}
                </svg>
              </div>

              {/* Floating stats cards */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 border border-brand-blue/10"
              >
                <p className="font-mono text-xs text-brand-blue/60 uppercase tracking-wide mb-1">Est.</p>
                <p className="font-display font-bold text-2xl text-brand-darkblue">2014</p>
                <p className="font-body text-xs text-brand-gray/60">Serving Travelers</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -top-4 -right-4 bg-brand-blue rounded-2xl shadow-xl p-4"
              >
                <p className="font-display font-bold text-2xl text-white">5000+</p>
                <p className="font-body text-xs text-white/70">Happy Travelers</p>
              </motion.div>
            </div>
          </ScrollReveal>

          {/* Right: Content */}
          <div>
            <ScrollReveal delay={0.1}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-blue/20 bg-brand-sky mb-4">
                <span className="font-mono text-xs text-brand-blue font-medium tracking-[0.15em] uppercase">
                  Our Story
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <h2 className="font-display font-bold text-4xl sm:text-5xl text-brand-darkblue mb-6 leading-tight">
                {about.headline.split('\n').map((line, i) => (
                  <span key={i} className={i === 1 ? 'block text-brand-blue' : 'block'}>
                    {line}
                  </span>
                ))}
              </h2>
            </ScrollReveal>

            <div className="space-y-4 mb-8">
              {about.body.map((para, i) => (
                <ScrollReveal key={i} delay={0.3 + i * 0.1}>
                  <p className="font-body text-brand-gray/75 leading-relaxed">{para}</p>
                </ScrollReveal>
              ))}
            </div>

            {/* Features grid */}
            <div className="grid grid-cols-2 gap-3">
              {about.features.map((feat, i) => {
                const Icon = Icons[feat.icon] || Icons.Star
                return (
                  <ScrollReveal key={feat.label} delay={0.5 + i * 0.08}>
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-brand-sky border border-brand-blue/10">
                      <div className="w-9 h-9 rounded-lg bg-brand-blue/10 flex items-center justify-center shrink-0">
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

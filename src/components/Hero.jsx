import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, MessageCircle, Phone, Star, Shield, Clock } from 'lucide-react'
import { brand, hero } from '../data/siteContent'
import { useReducedMotion } from '../hooks/useReducedMotion'

const heroVideo = '/Screen_Recording_20260430_140926_Chrome.mp4'

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.2 } },
}

const item = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  const reduced = useReducedMotion()
  const videoRef = useRef(null)
  const [videoError, setVideoError] = useState(false)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => setVideoError(true))
    }
  }, [])

  const scrollDown = () => {
    document.getElementById('deals')?.scrollIntoView({ behavior: 'smooth' })
  }

  const whatsappLink = `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(
    "Hi! I'm interested in an Andaman tour package. Please share details."
  )}`

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {!videoError ? (
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full min-w-full object-cover"
            autoPlay
            muted
            defaultMuted
            loop
            playsInline
            preload="auto"
            onError={() => setVideoError(true)}
            aria-hidden="true"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
        ) : (
          <div className="w-full h-full tropical-gradient" />
        )}

        {/* Cinematic dark overlay */}
        <div className="absolute inset-0 video-overlay" />

        {/* Subtle vignette edges */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              'radial-gradient(ellipse at center, transparent 50%, rgba(6,20,43,0.7) 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 text-center">
        <motion.div
          variants={reduced ? {} : stagger}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Trust badge */}
          <motion.div variants={reduced ? {} : item} className="mb-7">
            <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md shadow-lg">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-white/90 text-xs font-body font-semibold tracking-[0.18em] uppercase">
                {hero.badge}
              </span>
            </div>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            variants={reduced ? {} : item}
            className="font-display font-bold text-white leading-[0.92] tracking-tight mb-4"
            style={{ fontSize: 'clamp(3rem, 9vw, 7rem)' }}
          >
            {hero.headline.split('\n').map((line, i) => (
              <span key={i} className="block">
                {i === 0 ? (
                  line
                ) : (
                  <span className="text-brand-cyan">{line}</span>
                )}
              </span>
            ))}
          </motion.h1>

          <motion.p
            variants={reduced ? {} : item}
            className="font-display italic text-blue-200/75 text-xl sm:text-2xl md:text-3xl mb-6 tracking-wide"
          >
            {hero.subheadline}
          </motion.p>

          <motion.p
            variants={reduced ? {} : item}
            className="font-body text-white/65 text-base sm:text-lg max-w-2xl mb-10 leading-relaxed"
          >
            {hero.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={reduced ? {} : item}
            className="flex flex-col sm:flex-row items-center gap-4 mb-14"
          >
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="group flex items-center gap-2.5 px-8 py-4 bg-brand-orange text-white font-semibold font-body rounded-2xl hover:bg-orange-600 active:scale-95 transition-all duration-200 shadow-orange hover:shadow-[0_12px_40px_rgba(240,85,40,0.6)] focus:outline-none focus:ring-2 focus:ring-white text-base"
            >
              <Phone className="w-4 h-4" />
              Plan My Trip
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-8 py-4 bg-white/12 backdrop-blur-sm border border-white/25 text-white font-semibold font-body rounded-2xl hover:bg-white/22 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white text-base"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              WhatsApp Us
            </a>
          </motion.div>

          {/* Trust bar */}
          <motion.div variants={reduced ? {} : item} className="flex flex-wrap items-center justify-center gap-5 mb-12">
            {[
              { icon: Star, text: '4.9★ Rated', sub: 'by 5000+ travelers' },
              { icon: Shield, text: '100% Verified', sub: 'local operators' },
              { icon: Clock, text: '24/7 Support', sub: 'on-ground team' },
            ].map(({ icon: Icon, text, sub }) => (
              <div key={text} className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/8 backdrop-blur-sm border border-white/10">
                <Icon className="w-4 h-4 text-brand-cyan shrink-0" />
                <div className="text-left">
                  <div className="text-white text-xs font-semibold font-body leading-none">{text}</div>
                  <div className="text-white/45 text-[10px] font-body mt-0.5">{sub}</div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Stats bar */}
          <motion.div
            variants={reduced ? {} : item}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-5 w-full max-w-2xl"
          >
            {hero.stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center py-4 px-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/12"
              >
                <span className="font-display font-bold text-white text-2xl sm:text-3xl leading-none">
                  {stat.value}
                </span>
                <span className="font-body text-white/55 text-[11px] mt-1.5 tracking-wide text-center leading-snug">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 text-white/40 hover:text-white/80 transition-colors duration-200"
        aria-label="Scroll to deals"
      >
        <span className="font-mono text-[10px] tracking-[0.25em] uppercase">Explore</span>
        <motion.div
          animate={reduced ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </button>
    </section>
  )
}

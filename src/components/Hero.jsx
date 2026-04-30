import React, { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, MessageCircle, Phone } from 'lucide-react'
import { brand, hero } from '../data/siteContent'
import { useReducedMotion } from '../hooks/useReducedMotion'
import heroVideo from '../assets/WhatsApp Video 2026-04-30 at 11.13.54.mp4'

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
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
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
  }

  const whatsappLink = `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(
    'Hi! I\'m interested in an Andaman tour package. Please share details.'
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
            className="w-full h-full object-cover"
            autoPlay
            muted
            defaultMuted
            loop
            playsInline
            preload="auto"
            onError={() => setVideoError(true)}
            aria-hidden="true"
          >
            {/* 
              ⚠️  REPLACE THE src BELOW WITH YOUR ACTUAL ANDAMAN VIDEO FILE
              Place your video file in: public/andaman-hero.mp4
              Then change src to: /andaman-hero.mp4
            */}
            <source src={heroVideo} type="video/mp4" />
            {/* Fallback message for screen readers */}
            Your browser does not support the video tag.
          </video>
        ) : (
          /* Fallback gradient when video fails */
          <div className="w-full h-full ocean-gradient" />
        )}

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 video-overlay" />

        {/* Subtle grid overlay for industrial feel */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center">
        <motion.div
          variants={reduced ? {} : stagger}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Logo badge */}
          <motion.div variants={reduced ? {} : item} className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-white/90 text-xs font-mono font-medium tracking-[0.2em] uppercase">
                Andaman's Trusted Travel Partner
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={reduced ? {} : item}
            className="font-display font-bold text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight mb-4"
          >
            {hero.headline.split('\n').map((line, i) => (
              <span key={i} className="block">
                {i === 0 ? (
                  line
                ) : (
                  <span className="text-[#7ab3e0]">{line}</span>
                )}
              </span>
            ))}
          </motion.h1>

          <motion.p
            variants={reduced ? {} : item}
            className="font-display italic text-blue-200/80 text-2xl sm:text-3xl md:text-4xl mb-6"
          >
            {hero.subheadline}
          </motion.p>

          <motion.p
            variants={reduced ? {} : item}
            className="font-body text-white/70 text-base sm:text-lg max-w-2xl mb-10 leading-relaxed"
          >
            {hero.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={reduced ? {} : item}
            className="flex flex-col sm:flex-row items-center gap-4 mb-16"
          >
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="group flex items-center gap-2 px-8 py-4 bg-brand-blue text-white font-semibold font-body rounded-2xl hover:bg-brand-darkblue active:scale-95 transition-all duration-200 shadow-[0_8px_30px_rgba(42,95,165,0.5)] hover:shadow-[0_12px_40px_rgba(42,95,165,0.7)] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
            >
              <Phone className="w-4 h-4" />
              Plan My Trip
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold font-body rounded-2xl hover:bg-white/20 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              WhatsApp Us
            </a>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            variants={reduced ? {} : item}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 w-full max-w-3xl"
          >
            {hero.stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10"
              >
                <span className="font-display font-bold text-white text-2xl sm:text-3xl">
                  {stat.value}
                </span>
                <span className="font-body text-white/60 text-xs mt-1 tracking-wide text-center">
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/50 hover:text-white transition-colors"
        aria-label="Scroll to services"
      >
        <span className="font-mono text-xs tracking-[0.2em] uppercase">Explore</span>
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

import React from 'react'
import { motion } from 'framer-motion'
import ServiceCard from '../ServiceCard'
import { services } from '../../data/siteContent'
import ScrollReveal from '../ui/ScrollReveal'

export default function Services() {
  return (
    <section id="services" className="py-24 bg-brand-light relative">
      {/* Subtle wave top */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-blue/20 bg-brand-sky mb-4">
            <span className="font-mono text-xs text-brand-blue font-medium tracking-[0.15em] uppercase">
              What We Offer
            </span>
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-brand-darkblue mb-4">
            Everything You Need
            <span className="block text-brand-blue">for the Perfect Andaman Trip</span>
          </h2>
          <p className="font-body text-brand-gray/70 max-w-2xl mx-auto text-lg">
            From the moment you land to the moment you leave — we handle every detail so you can focus on the experience.
          </p>
        </ScrollReveal>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

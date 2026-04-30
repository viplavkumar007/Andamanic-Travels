import React from 'react'
import ServiceCard from '../ServiceCard'
import { services } from '../../data/siteContent'
import ScrollReveal from '../ui/ScrollReveal'

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white relative">
      {/* Top gradient fade */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-brand-light to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <ScrollReveal className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-blue/20 bg-brand-sky mb-5">
            <span className="font-mono text-xs text-brand-blue font-semibold tracking-[0.15em] uppercase">
              What We Offer
            </span>
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-brand-darkblue mb-4 leading-tight">
            Everything for Your{' '}
            <span className="text-brand-blue block sm:inline">Perfect Andaman Trip</span>
          </h2>
          <p className="font-body text-brand-gray/65 max-w-2xl mx-auto text-lg leading-relaxed">
            From the moment you land to the moment you leave — we handle every detail so you
            can focus on the experience.
          </p>
        </ScrollReveal>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Bottom trust strip */}
        <ScrollReveal className="mt-14">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 p-6 rounded-2xl bg-brand-sky border border-brand-blue/10">
            {[
              { num: '5000+', label: 'Happy Travelers' },
              { num: '100+', label: 'Tour Packages' },
              { num: '10+', label: 'Years Experience' },
              { num: '4.9★', label: 'Average Rating' },
            ].map(({ num, label }) => (
              <div key={label} className="text-center">
                <div className="font-display font-bold text-2xl text-brand-blue">{num}</div>
                <div className="font-body text-xs text-brand-gray/60 mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

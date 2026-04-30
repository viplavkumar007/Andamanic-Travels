import React from 'react'
import { Phone, MessageCircle, Mail, MapPin, Clock } from 'lucide-react'
import ContactForm from '../ContactForm'
import { brand, contact } from '../../data/siteContent'
import ScrollReveal from '../ui/ScrollReveal'

export default function Contact({ addToast }) {
  const whatsappLink = `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(contact.whatsappMessage)}`

  return (
    <section id="contact" className="py-24 bg-brand-light relative overflow-hidden">
      {/* Top gradient */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <ScrollReveal className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-blue/20 bg-white mb-4">
            <span className="font-mono text-xs text-brand-blue font-medium tracking-[0.15em] uppercase">
              Get In Touch
            </span>
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-brand-darkblue mb-4">
            {contact.headline}
          </h2>
          <p className="font-body text-brand-gray/70 max-w-xl mx-auto">{contact.subtext}</p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Left: Contact info */}
          <div className="lg:col-span-2 space-y-5">
            {/* Quick contact cards */}
            <ScrollReveal delay={0.1}>
              <a
                href={`tel:${brand.phone}`}
                className="group flex items-center gap-4 p-5 bg-white rounded-2xl border border-brand-blue/10 hover:border-brand-blue/30 hover:shadow-[0_4px_20px_rgba(42,95,165,0.12)] transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-blue flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-mono text-xs text-brand-blue/60 uppercase tracking-wide mb-0.5">Call Us</p>
                  <p className="font-body font-bold text-brand-darkblue">{brand.phoneDisplay}</p>
                  <p className="font-body text-xs text-brand-gray/50">Mon–Sun, 8am–9pm IST</p>
                </div>
              </a>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-5 bg-green-50 rounded-2xl border border-green-100 hover:border-green-300 hover:shadow-[0_4px_20px_rgba(34,197,94,0.15)] transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-5 h-5 text-white fill-white" />
                </div>
                <div>
                  <p className="font-mono text-xs text-green-600/70 uppercase tracking-wide mb-0.5">WhatsApp</p>
                  <p className="font-body font-bold text-green-800">{brand.phoneDisplay}</p>
                  <p className="font-body text-xs text-green-700/50">Fastest response guaranteed</p>
                </div>
              </a>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <a
                href={`mailto:${brand.email}`}
                className="group flex items-center gap-4 p-5 bg-white rounded-2xl border border-brand-blue/10 hover:border-brand-blue/30 hover:shadow-[0_4px_20px_rgba(42,95,165,0.12)] transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-sky flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5 text-brand-blue" />
                </div>
                <div>
                  <p className="font-mono text-xs text-brand-blue/60 uppercase tracking-wide mb-0.5">Email</p>
                  <p className="font-body font-bold text-brand-darkblue text-sm break-all">{brand.email}</p>
                  <p className="font-body text-xs text-brand-gray/50">Reply within 4 hours</p>
                </div>
              </a>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-brand-blue/10">
                <div className="w-12 h-12 rounded-xl bg-brand-sky flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-brand-blue" />
                </div>
                <div>
                  <p className="font-mono text-xs text-brand-blue/60 uppercase tracking-wide mb-0.5">Location</p>
                  <p className="font-body font-bold text-brand-darkblue text-sm">{brand.location}</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.5}>
              <div className="flex items-center gap-4 p-5 bg-brand-blue rounded-2xl">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-mono text-xs text-white/60 uppercase tracking-wide mb-0.5">Support Hours</p>
                  <p className="font-body font-bold text-white text-sm">24/7 On-Ground Support</p>
                  <p className="font-body text-xs text-white/60">We're always here for you</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Form */}
          <ScrollReveal delay={0.15} className="lg:col-span-3">
            <div className="bg-white rounded-3xl border border-brand-blue/10 shadow-[0_4px_40px_rgba(42,95,165,0.08)] p-8 sm:p-10">
              <div className="mb-6">
                <h3 className="font-display font-bold text-2xl text-brand-darkblue mb-1">
                  Request a Free Quote
                </h3>
                <p className="font-body text-brand-gray/60 text-sm">
                  Fill in the form and we'll craft your perfect Andaman itinerary.
                </p>
                <div className="mt-4 flex flex-col sm:flex-row gap-3">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold font-body rounded-xl transition-colors duration-200"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    Request on WhatsApp
                  </a>
                  <a
                    href={`mailto:${brand.email}?subject=${encodeURIComponent('Request for a Free Quote')}&body=${encodeURIComponent('Hi Andamanic Travelopedia,%0D%0A%0D%0AI would like a free quote for an Andaman tour package. Please share the details.%0D%0A%0D%0AThanks.')}`}
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-brand-sky hover:bg-brand-sky/80 text-brand-darkblue font-semibold font-body rounded-xl transition-colors duration-200"
                  >
                    <Mail className="w-4 h-4" />
                    Request by Email
                  </a>
                </div>
              </div>
              <ContactForm addToast={addToast} />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

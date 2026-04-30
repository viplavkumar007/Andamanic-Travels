import React from 'react'
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube, Heart } from 'lucide-react'
import { brand, nav, services } from '../data/siteContent'
import Logo from './ui/Logo'

export default function Footer() {
  const year = new Date().getFullYear()

  const quickLinks = nav
  const serviceLinks = services.slice(0, 7)

  return (
    <footer className="bg-brand-navy text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Logo size={82} showText={true} light={true} />
            <p className="font-body text-white/50 text-sm mt-4 leading-relaxed max-w-xs">
              Your trusted local partner for Andaman travel experiences. Crafting island journeys since 2014.
            </p>

            {/* Contact details */}
            <div className="mt-6 space-y-3">
              <a
                href={`tel:${brand.phone}`}
                className="flex items-center gap-3 text-white/60 hover:text-white transition-colors text-sm font-body"
              >
                <Phone className="w-4 h-4 shrink-0 text-brand-lightblue" />
                {brand.phoneDisplay}
              </a>
              <a
                href={`mailto:${brand.email}`}
                className="flex items-center gap-3 text-white/60 hover:text-white transition-colors text-sm font-body break-all"
              >
                <Mail className="w-4 h-4 shrink-0 text-brand-lightblue" />
                {brand.email}
              </a>
              <div className="flex items-start gap-3 text-white/60 text-sm font-body">
                <MapPin className="w-4 h-4 shrink-0 text-brand-lightblue mt-0.5" />
                {brand.location}
              </div>
            </div>

            {/* Social */}
            <div className="flex items-center gap-3 mt-6">
              {[
                { href: brand.instagram, Icon: Instagram, label: 'Instagram' },
                { href: brand.facebook, Icon: Facebook, label: 'Facebook' },
                { href: brand.youtube, Icon: Youtube, label: 'YouTube' },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-white/10 hover:bg-brand-blue flex items-center justify-center transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-[0.15em] text-white/40 mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="font-body text-sm text-white/60 hover:text-white transition-colors underline-slide"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-[0.15em] text-white/40 mb-5">
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((s) => (
                <li key={s.id}>
                  <a
                    href="#services"
                    onClick={(e) => {
                      e.preventDefault()
                      document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="font-body text-sm text-white/60 hover:text-white transition-colors underline-slide"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Island destinations */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-[0.15em] text-white/40 mb-5">
              Island Destinations
            </h4>
            <ul className="space-y-2.5">
              {[
                'Havelock Island (Swaraj Dweep)',
                'Neil Island (Shaheed Dweep)',
                'Baratang Island',
                'Ross Island',
                'Radhanagar Beach',
                'Little Andaman',
                'Diglipur',
                'North Bay Island',
              ].map((dest) => (
                <li key={dest}>
                  <span className="font-body text-sm text-white/50">{dest}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-white/30 text-center sm:text-left">
            © {year} Andamanic Travelopedia. All rights reserved.
          </p>
          <p className="font-body text-xs text-white/30 flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-red-400 fill-red-400" /> for the Andaman Islands
          </p>
        </div>
      </div>
    </footer>
  )
}

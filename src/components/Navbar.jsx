import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import Logo from './ui/Logo'
import { brand, nav } from '../data/siteContent'
import { useScrolled } from '../hooks/useScrollSpy'

export default function Navbar({ activeSection }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const scrolled = useScrolled(60)

  const handleNavClick = (href) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'glass shadow-[0_2px_24px_rgba(42,95,165,0.12)] border-b border-brand-blue/10'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => { e.preventDefault(); handleNavClick('#hero') }}
              aria-label="Andamanic Travelopedia Home"
            >
              <Logo size={scrolled ? 48 : 56} showText={true} light={!scrolled} />
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {nav.map((item) => {
                const sectionId = item.href.replace('#', '')
                const isActive = activeSection === sectionId
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(item.href) }}
                    className={`relative px-4 py-2 text-sm font-semibold font-body transition-colors duration-200 rounded-lg underline-slide ${
                      scrolled
                        ? isActive
                          ? 'text-brand-blue'
                          : 'text-brand-darkblue hover:text-brand-blue'
                        : isActive
                        ? 'text-white'
                        : 'text-white/80 hover:text-white'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute inset-0 rounded-lg bg-brand-blue/10"
                        style={{ zIndex: -1 }}
                      />
                    )}
                  </a>
                )
              })}
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={`tel:${brand.phone}`}
                className={`flex items-center gap-2 text-sm font-semibold font-body transition-colors ${
                  scrolled ? 'text-brand-blue hover:text-brand-darkblue' : 'text-white/80 hover:text-white'
                }`}
              >
                <Phone className="w-4 h-4" />
                {brand.phoneDisplay}
              </a>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
                className="px-5 py-2.5 bg-brand-blue text-white text-sm font-semibold font-body rounded-xl hover:bg-brand-darkblue active:scale-95 transition-all duration-200 shadow-md hover:shadow-brand-blue/30 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2"
              >
                Get a Quote
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                scrolled ? 'text-brand-darkblue hover:bg-brand-sky' : 'text-white hover:bg-white/10'
              }`}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-16 sm:top-20 z-40 glass border-b border-brand-blue/10 shadow-xl md:hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(item.href) }}
                  className="px-4 py-3 text-brand-darkblue font-semibold font-body rounded-xl hover:bg-brand-sky transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-2 pt-3 border-t border-brand-blue/10 flex flex-col gap-2">
                <a
                  href={`tel:${brand.phone}`}
                  className="flex items-center gap-2 px-4 py-3 text-brand-blue font-semibold font-body"
                >
                  <Phone className="w-4 h-4" />
                  {brand.phoneDisplay}
                </a>
                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
                  className="px-4 py-3 bg-brand-blue text-white font-semibold font-body rounded-xl text-center"
                >
                  Get a Free Quote
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

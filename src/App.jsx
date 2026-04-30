import React, { useState, useCallback } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BestDeals from './components/sections/BestDeals'
import Packages from './components/sections/Packages'
import Services from './components/sections/Services'
import About from './components/sections/About'
import Testimonials from './components/sections/Testimonials'
import FAQ from './components/sections/FAQ'
import Contact from './components/sections/Contact'
import CTA from './components/CTA'
import Footer from './components/Footer'
import Toast from './components/ui/Toast'
import WhatsAppFloat from './components/ui/WhatsAppFloat'
import { useScrollSpy } from './hooks/useScrollSpy'

const SECTION_IDS = ['hero', 'deals', 'packages', 'services', 'about', 'testimonials', 'faq', 'contact']

export default function App() {
  const activeSection = useScrollSpy(SECTION_IDS, 120)
  const [toasts, setToasts] = useState([])

  const addToast = useCallback((message, type = 'success') => {
    const id = Date.now()
    setToasts((prev) => [...prev, { id, message, type }])
  }, [])

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }, [])

  return (
    <div className="min-h-screen bg-brand-light">
      <a
        href="#deals"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-brand-blue focus:text-white focus:rounded-xl font-body font-semibold"
      >
        Skip to main content
      </a>

      <Navbar activeSection={activeSection} />

      <main>
        <Hero />
        <BestDeals />
        <Packages />
        <Services />
        <About />
        <Testimonials />
        <CTA />
        <FAQ />
        <Contact addToast={addToast} />
      </main>

      <Footer />
      <WhatsAppFloat />
      <Toast toasts={toasts} removeToast={removeToast} />
    </div>
  )
}

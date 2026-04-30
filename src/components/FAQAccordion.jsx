import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function FAQAccordion({ faq, index }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
        open
          ? 'border-brand-blue bg-brand-sky/50 shadow-[0_4px_20px_rgba(42,95,165,0.1)]'
          : 'border-brand-blue/10 bg-white hover:border-brand-blue/30'
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded-2xl"
        aria-expanded={open}
        id={`faq-btn-${index}`}
        aria-controls={`faq-panel-${index}`}
      >
        <span className="font-body font-semibold text-brand-darkblue text-sm sm:text-base pr-4">
          {faq.q}
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0"
        >
          <ChevronDown
            className={`w-5 h-5 transition-colors ${open ? 'text-brand-blue' : 'text-brand-gray/40'}`}
          />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`faq-panel-${index}`}
            role="region"
            aria-labelledby={`faq-btn-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="px-6 pb-5">
              <div className="w-10 h-0.5 bg-brand-blue/30 rounded mb-3" />
              <p className="font-body text-brand-gray/80 text-sm leading-relaxed">{faq.a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

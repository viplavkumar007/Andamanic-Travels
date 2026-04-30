import React from 'react'
import FAQAccordion from '../FAQAccordion'
import { faqs } from '../../data/siteContent'
import ScrollReveal from '../ui/ScrollReveal'

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-blue/20 bg-brand-sky mb-4">
            <span className="font-mono text-xs text-brand-blue font-medium tracking-[0.15em] uppercase">
              Common Questions
            </span>
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-brand-darkblue mb-4">
            Frequently Asked Questions
          </h2>
          <p className="font-body text-brand-gray/70 max-w-xl mx-auto">
            Everything you need to know about visiting the Andaman Islands with us.
          </p>
        </ScrollReveal>

        {/* FAQ list */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <FAQAccordion key={index} faq={faq} index={index} />
          ))}
        </div>

        {/* Still have questions */}
        <ScrollReveal delay={0.2} className="mt-12 text-center">
          <div className="inline-flex flex-col items-center gap-3 p-8 rounded-3xl bg-brand-sky border border-brand-blue/10">
            <p className="font-body text-brand-darkblue font-semibold">Still have questions?</p>
            <p className="font-body text-brand-gray/70 text-sm">
              Our team is available 24/7 to help you plan the perfect trip.
            </p>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="px-6 py-3 bg-brand-blue text-white font-semibold font-body text-sm rounded-xl hover:bg-brand-darkblue active:scale-95 transition-all"
            >
              Ask Us Anything
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

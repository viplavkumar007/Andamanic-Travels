import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, Users, Building2, Check, ArrowRight, MessageCircle } from 'lucide-react'
import { packages, brand } from '../../data/siteContent'
import ScrollReveal from '../ui/ScrollReveal'

const PACKAGE_IMAGE_FALLBACK =
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80'

const HONEYMOON_PACKAGE_IMAGE =
  'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=80'

function getPackageImage(pkg) {
  if (pkg.id === 'c2') {
    return HONEYMOON_PACKAGE_IMAGE
  }

  return pkg.image
}

function formatPackagePrice(price) {
  const digitsOnly = String(price).replace(/[^0-9,]/g, '')
  return digitsOnly ? `Rs. ${digitsOnly}` : price
}

const TABS = [
  {
    id: 'couple',
    label: 'Couple Deals',
    icon: Heart,
    accent: 'coral',
    activeBg: 'bg-brand-coral',
    activeText: 'text-white',
    tagBg: 'bg-brand-coral',
    checkColor: 'text-brand-coral',
    btnBg: 'bg-brand-coral hover:bg-orange-500',
  },
  {
    id: 'family',
    label: 'Family Packages',
    icon: Users,
    accent: 'teal',
    activeBg: 'bg-brand-teal',
    activeText: 'text-white',
    tagBg: 'bg-brand-teal',
    checkColor: 'text-brand-teal',
    btnBg: 'bg-brand-teal hover:bg-teal-600',
  },
  {
    id: 'group',
    label: 'Group Packages',
    icon: Building2,
    accent: 'blue',
    activeBg: 'bg-brand-blue',
    activeText: 'text-white',
    tagBg: 'bg-brand-blue',
    checkColor: 'text-brand-blue',
    btnBg: 'bg-brand-blue hover:bg-brand-darkblue',
  },
]

function PackageCard({ pkg, tab }) {
  const whatsappText = `Hi! I'm interested in the "${pkg.title}" package (${pkg.nights}). Please share details and availability.`
  const displayPrice = formatPackagePrice(pkg.price)

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="group flex flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
    >
      <div className="relative h-52 shrink-0 overflow-hidden">
        <img
          src={getPackageImage(pkg)}
          alt={pkg.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
          onError={(event) => {
            event.currentTarget.onerror = null
            event.currentTarget.src = PACKAGE_IMAGE_FALLBACK
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        <div className="absolute top-3 left-3">
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold font-body text-white shadow-lg ${tab.tagBg}`}
          >
            {pkg.badge}
          </span>
        </div>

        <div className="absolute bottom-3 right-3">
          <span className="rounded-lg bg-white/90 px-2.5 py-1 text-xs font-semibold font-body text-brand-darkblue backdrop-blur-sm">
            {pkg.nights}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="mb-3 text-lg font-display font-bold leading-snug text-brand-darkblue">
          {pkg.title}
        </h3>

        <div className="mb-4 flex-1 space-y-1.5">
          {pkg.highlights.map((highlight) => (
            <div key={highlight} className="flex items-center gap-2">
              <Check className={`h-3.5 w-3.5 shrink-0 ${tab.checkColor}`} />
              <span className="text-xs font-body leading-snug text-brand-gray/70">{highlight}</span>
            </div>
          ))}
        </div>

        <div className="mb-4 flex flex-wrap gap-1.5">
          {pkg.includes.map((included) => (
            <span
              key={included}
              className="rounded-md border border-brand-blue/10 bg-brand-sky px-2.5 py-0.5 text-[10px] font-semibold font-body text-brand-blue"
            >
              {included}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between border-t border-gray-100 pt-4">
          <div>
            <div className="mb-0.5 text-[11px] font-body text-brand-gray/50">{pkg.priceNote}</div>
            <div className="text-2xl font-display font-bold text-brand-darkblue">{displayPrice}</div>
          </div>
          <a
            href={`https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(whatsappText)}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-sm font-semibold font-body text-white transition-all duration-200 active:scale-95 ${tab.btnBg}`}
          >
            Book Now
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default function Packages() {
  const [activeTab, setActiveTab] = useState('couple')

  const tab = TABS.find((t) => t.id === activeTab)
  const currentPackages = packages[activeTab] || []

  return (
    <section id="packages" className="relative overflow-hidden bg-brand-light py-24">
      <div
        className="absolute top-0 left-0 right-0 h-2 opacity-60"
        style={{
          background:
            activeTab === 'couple'
              ? 'linear-gradient(90deg, transparent, #FF6B4A, transparent)'
              : activeTab === 'family'
                ? 'linear-gradient(90deg, transparent, #00BFA5, transparent)'
                : 'linear-gradient(90deg, transparent, #1A6FFF, transparent)',
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mb-12 text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-blue/20 bg-white px-4 py-1.5 shadow-sm">
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.15em] text-brand-blue">
              Tour Packages
            </span>
          </div>
          <h2 className="mb-4 text-4xl font-display font-bold leading-tight text-brand-darkblue sm:text-5xl">
            Packages for <span className="text-brand-blue">Every Traveler</span>
          </h2>
          <p className="mx-auto max-w-xl text-lg font-body leading-relaxed text-brand-gray/65">
            Handcrafted itineraries for couples, families, and groups - with flexible pricing and
            inclusions.
          </p>
        </ScrollReveal>

        <div className="mb-10 flex justify-center">
          <div className="flex items-center gap-2 rounded-2xl border border-gray-200 bg-white p-1.5 shadow-sm">
            {TABS.map((t) => {
              const Icon = t.icon
              const isActive = activeTab === t.id

              return (
                <button
                  key={t.id}
                  onClick={() => setActiveTab(t.id)}
                  className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold font-body transition-all duration-200 focus:outline-none ${
                    isActive
                      ? `${t.activeBg} ${t.activeText} shadow-md`
                      : 'text-brand-gray/60 hover:bg-brand-sky hover:text-brand-darkblue'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{t.label}</span>
                  <span className="sm:hidden">{t.label.split(' ')[0]}</span>
                </button>
              )
            })}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {currentPackages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} tab={tab} />
            ))}
          </motion.div>
        </AnimatePresence>

        <ScrollReveal className="mt-10 text-center">
          <p className="mb-4 text-sm font-body text-brand-gray/50">
            All packages are fully customizable - contact us for group discounts
          </p>
          <a
            href={`https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(
              'Hi! I need a fully custom Andaman package. Can you help?'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-brand-blue/20 px-6 py-3 text-sm font-semibold font-body text-brand-blue transition-all duration-200 hover:bg-brand-sky"
          >
            <MessageCircle className="h-4 w-4" />
            Build a Custom Package
          </a>
        </ScrollReveal>
      </div>
    </section>
  )
}

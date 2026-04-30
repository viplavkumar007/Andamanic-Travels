import React, { useState } from 'react'
import { Send } from 'lucide-react'
import { brand, contact } from '../data/siteContent'

const initialForm = {
  name: '',
  email: '',
  phone: '',
  destination: '',
  travelers: '',
  message: '',
}

function validate(form) {
  const errors = {}
  if (!form.name.trim()) errors.name = 'Name is required'
  if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Valid email is required'
  }
  if (!form.phone.trim() || !/^[6-9]\d{9}$/.test(form.phone.replace(/\s/g, ''))) {
    errors.phone = 'Valid 10-digit Indian mobile number required'
  }
  if (!form.message.trim()) errors.message = 'Please describe your requirements'
  return errors
}

function buildEnquiryDetails(form) {
  return [
    `Name: ${form.name}`,
    `Phone: ${form.phone}`,
    `Email: ${form.email}`,
    `Trip Type: ${form.destination || 'Not specified'}`,
    `Travelers: ${form.travelers || 'Not specified'}`,
    `Requirements: ${form.message}`,
  ].join('\n')
}

export default function ContactForm({ addToast }) {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate(form)
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }

    const details = buildEnquiryDetails(form)
    const whatsappText = `${contact.whatsappMessage}\n\n${details}`
    const whatsappLink = `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(whatsappText)}`
    const mailSubject = 'Request for a Free Quote'
    const mailBody = `Hi Andamanic Travelopedia,

I would like a free quote for an Andaman tour package.

${details}

Thanks.`
    const mailtoLink = `mailto:${brand.email}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`

    window.open(whatsappLink, '_blank', 'noopener,noreferrer')
    window.location.href = mailtoLink

    addToast('Opening WhatsApp and email with your enquiry details.', 'success')
    setForm(initialForm)
  }

  const inputClass = (field) =>
    `w-full px-4 py-3 font-body text-sm bg-white border rounded-xl transition-all duration-200 outline-none placeholder-gray-400 text-brand-darkblue ${
      errors[field]
        ? 'border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-200'
        : 'border-brand-blue/15 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20'
    }`

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-xs font-semibold font-body text-brand-darkblue/70 mb-1.5 uppercase tracking-wide">
            Full Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Rahul Sharma"
            value={form.name}
            onChange={handleChange}
            className={inputClass('name')}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && (
            <p id="name-error" className="text-red-500 text-xs mt-1 font-body">{errors.name}</p>
          )}
        </div>
        <div>
          <label htmlFor="phone" className="block text-xs font-semibold font-body text-brand-darkblue/70 mb-1.5 uppercase tracking-wide">
            Phone Number *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="9876543210"
            value={form.phone}
            onChange={handleChange}
            className={inputClass('phone')}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
          />
          {errors.phone && (
            <p id="phone-error" className="text-red-500 text-xs mt-1 font-body">{errors.phone}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-xs font-semibold font-body text-brand-darkblue/70 mb-1.5 uppercase tracking-wide">
          Email Address *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="rahul@example.com"
          value={form.email}
          onChange={handleChange}
          className={inputClass('email')}
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {errors.email && (
          <p id="email-error" className="text-red-500 text-xs mt-1 font-body">{errors.email}</p>
        )}
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="destination" className="block text-xs font-semibold font-body text-brand-darkblue/70 mb-1.5 uppercase tracking-wide">
            Trip Type
          </label>
          <select
            id="destination"
            name="destination"
            value={form.destination}
            onChange={handleChange}
            className={`${inputClass('destination')} cursor-pointer`}
          >
            <option value="">Select package type</option>
            <option>Honeymoon Package</option>
            <option>Family Package</option>
            <option>Adventure Package</option>
            <option>Group / Corporate</option>
            <option>Budget Package</option>
            <option>Luxury Package</option>
            <option>Custom Itinerary</option>
          </select>
        </div>
        <div>
          <label htmlFor="travelers" className="block text-xs font-semibold font-body text-brand-darkblue/70 mb-1.5 uppercase tracking-wide">
            No. of Travelers
          </label>
          <select
            id="travelers"
            name="travelers"
            value={form.travelers}
            onChange={handleChange}
            className={`${inputClass('travelers')} cursor-pointer`}
          >
            <option value="">Select</option>
            <option>1 (Solo)</option>
            <option>2 (Couple)</option>
            <option>3-5 (Small Group)</option>
            <option>6-10</option>
            <option>11-20</option>
            <option>20+ (Large Group)</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-semibold font-body text-brand-darkblue/70 mb-1.5 uppercase tracking-wide">
          Your Requirements *
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us your travel dates, budget, special requests..."
          value={form.message}
          onChange={handleChange}
          className={`${inputClass('message')} resize-none`}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message && (
          <p id="message-error" className="text-red-500 text-xs mt-1 font-body">{errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-brand-blue text-white font-semibold font-body rounded-xl hover:bg-brand-darkblue active:scale-[0.98] transition-all duration-200 shadow-md hover:shadow-brand-blue/30 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2"
      >
        <Send className="w-4 h-4" />
        Send Enquiry - Free Quote
      </button>

      <p className="text-center text-xs text-brand-gray/50 font-body">
        We open WhatsApp and email with your enquiry details.
      </p>
    </form>
  )
}

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X } from 'lucide-react'
import { brand } from '../../data/siteContent'

export default function WhatsAppFloat() {
  const [tooltip, setTooltip] = useState(false)

  const link = `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(
    'Hi! I\'d like to enquire about an Andaman tour package.'
  )}`

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {tooltip && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.9 }}
            className="bg-white rounded-2xl shadow-xl border border-green-100 px-4 py-3 max-w-[200px] text-right"
          >
            <p className="font-body text-xs font-semibold text-green-800">Chat with us!</p>
            <p className="font-body text-xs text-gray-500 mt-0.5">Usually replies within minutes</p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        onHoverStart={() => setTooltip(true)}
        onHoverEnd={() => setTooltip(false)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-[0_4px_20px_rgba(34,197,94,0.4)] hover:shadow-[0_8px_30px_rgba(34,197,94,0.5)] flex items-center justify-center text-white transition-colors"
      >
        <MessageCircle className="w-7 h-7 fill-white" />
      </motion.a>
    </div>
  )
}

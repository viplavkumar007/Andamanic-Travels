import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, XCircle, X } from 'lucide-react'

export default function Toast({ toasts, removeToast }) {
  return (
    <div
      className="fixed top-4 right-4 z-[9999] flex flex-col gap-2 max-w-xs w-full"
      aria-live="polite"
      aria-atomic="false"
    >
      <AnimatePresence>
        {toasts.map((toast) => (
          <ToastItem key={toast.id} toast={toast} onRemove={removeToast} />
        ))}
      </AnimatePresence>
    </div>
  )
}

function ToastItem({ toast, onRemove }) {
  useEffect(() => {
    const timer = setTimeout(() => onRemove(toast.id), 4500)
    return () => clearTimeout(timer)
  }, [toast.id, onRemove])

  return (
    <motion.div
      initial={{ opacity: 0, x: 80, scale: 0.9 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: 80, scale: 0.9 }}
      className={`flex items-start gap-3 p-4 rounded-xl shadow-xl border ${
        toast.type === 'success'
          ? 'bg-white border-green-200 text-green-800'
          : 'bg-white border-red-200 text-red-800'
      }`}
      role="alert"
    >
      {toast.type === 'success' ? (
        <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
      ) : (
        <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
      )}
      <p className="text-sm font-medium flex-1 font-body">{toast.message}</p>
      <button
        onClick={() => onRemove(toast.id)}
        className="text-gray-400 hover:text-gray-600 transition-colors"
        aria-label="Dismiss"
      >
        <X className="w-4 h-4" />
      </button>
    </motion.div>
  )
}

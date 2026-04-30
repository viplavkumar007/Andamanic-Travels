import React from 'react'
import logoImage from '../../assets/andamanic-logo.jpeg'

export default function Logo({ size = 48, showText = true, light = false }) {
  return (
    <div className="flex items-center gap-3">
      <div
        className={`relative shrink-0 overflow-hidden rounded-full p-[3px] ${
          light
            ? 'bg-white/20 ring-1 ring-white/35 shadow-[0_10px_30px_rgba(7,19,38,0.22)]'
            : 'bg-white ring-1 ring-brand-blue/15 shadow-[0_10px_24px_rgba(42,95,165,0.16)]'
        }`}
        style={{ width: size, height: size }}
      >
        <img
          src={logoImage}
          alt="Andamanic Travelopedia Logo"
          className="h-full w-full rounded-full object-cover"
        />
      </div>

      {showText && (
        <div className="flex flex-col leading-tight">
          <span
            className={`font-display font-bold text-xl tracking-tight ${light ? 'text-white' : 'text-brand-darkblue'}`}
          >
            Andamanic
          </span>
          <span
            className={`font-body text-xs font-semibold uppercase tracking-[0.2em] ${light ? 'text-blue-200' : 'text-brand-blue'}`}
          >
            Travelopedia
          </span>
        </div>
      )}
    </div>
  )
}

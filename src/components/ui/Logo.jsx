import React from 'react'
import logoImage from '../../assets/andamanic-logo.jpeg'

export default function Logo({ size = 52, showText = true, light = false }) {
  return (
    <div className="flex items-center gap-3">
      <div
        className={`relative shrink-0 overflow-hidden rounded-full ${
          light
            ? 'ring-2 ring-white/30 shadow-[0_6px_24px_rgba(0,0,0,0.3)]'
            : 'ring-2 ring-brand-blue/20 shadow-[0_6px_20px_rgba(26,111,255,0.2)]'
        }`}
        style={{ width: size, height: size, padding: '2px' }}
      >
        <img
          src={logoImage}
          alt="Andamanic Travelopedia"
          className="h-full w-full rounded-full object-cover"
        />
      </div>

      {showText && (
        <div className="flex flex-col leading-none">
          <span
            className={`font-display font-bold text-[1.1rem] tracking-tight leading-tight ${
              light ? 'text-white' : 'text-brand-darkblue'
            }`}
          >
            Andamanic
          </span>
          <span
            className={`font-body text-[10px] font-semibold uppercase tracking-[0.22em] mt-0.5 ${
              light ? 'text-brand-cyan' : 'text-brand-cyan'
            }`}
          >
            Travelopedia
          </span>
        </div>
      )}
    </div>
  )
}

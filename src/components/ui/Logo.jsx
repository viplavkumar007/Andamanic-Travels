import React from 'react'

export default function Logo({ size = 48, showText = true, light = false }) {
  return (
    <div className="flex items-center gap-3">
      {/* SVG recreation of Andamanic Travelopedia logo */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Andamanic Travelopedia Logo"
      >
        {/* Outer ring */}
        <circle cx="60" cy="60" r="57" stroke={light ? '#fff' : '#1a3d6e'} strokeWidth="3.5" fill="white"/>
        {/* Inner globe circle */}
        <circle cx="60" cy="60" r="44" fill="#2A5FA5"/>
        {/* Globe lines (latitude/longitude) */}
        <path d="M16 60 Q38 52 60 60 Q82 68 104 60" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" fill="none"/>
        <path d="M16 45 Q38 38 60 45 Q82 52 104 45" stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="none"/>
        <path d="M20 75 Q40 68 60 75 Q80 82 100 75" stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="none"/>
        {/* Large A watermark */}
        <text x="60" y="78" textAnchor="middle" fontFamily="serif" fontWeight="800" fontSize="58" fill="rgba(255,255,255,0.18)" letterSpacing="-2">A</text>
        {/* Horizon line */}
        <rect x="16" y="64" width="88" height="1.5" fill="rgba(255,255,255,0.3)" rx="1"/>
        {/* Ocean waves */}
        <path d="M16 72 Q28 66 40 72 Q52 78 64 72 Q76 66 88 72 Q96 76 104 72" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        <path d="M24 80 Q34 74 44 80 Q54 86 64 80 Q74 74 84 80 Q92 84 100 80" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <path d="M30 88 Q40 82 50 88 Q60 94 70 88 Q80 82 90 88" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        {/* Moon/sun */}
        <circle cx="32" cy="55" r="6" fill="white"/>
        {/* Palm trees */}
        <line x1="80" y1="64" x2="80" y2="82" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <line x1="88" y1="64" x2="88" y2="84" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <path d="M74 60 Q78 55 83 56 Q80 62 74 60Z" fill="white"/>
        <path d="M82 56 Q86 50 91 52 Q88 58 82 56Z" fill="white"/>
        <path d="M86 58 Q91 54 95 57 Q91 62 86 58Z" fill="white"/>
        <path d="M75 62 Q80 58 84 60 Q81 65 75 62Z" fill="white"/>
        <path d="M87 59 Q90 55 93 58 Q90 62 87 59Z" fill="white"/>
        {/* Birds */}
        <path d="M48 53 Q51 50 54 53" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        <path d="M55 48 Q58 45 61 48" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        {/* Clip to inner circle */}
        <circle cx="60" cy="60" r="44" fill="none" stroke="#1a3d6e" strokeWidth="2.5"/>
        {/* Inner dark ring */}
        <circle cx="60" cy="60" r="49" fill="none" stroke={light ? '#fff' : '#1a3d6e'} strokeWidth="3"/>
        {/* Dots at 4 cardinal positions */}
        <circle cx="11" cy="60" r="4" fill={light ? '#fff' : '#1a3d6e'}/>
        <circle cx="109" cy="60" r="4" fill={light ? '#fff' : '#1a3d6e'}/>
        <circle cx="13" cy="77" r="4" fill={light ? '#fff' : '#1a3d6e'}/>
        <circle cx="107" cy="77" r="4" fill={light ? '#fff' : '#1a3d6e'}/>
        {/* Top text arc - ANDAMANIC */}
        <path id="topArc" d="M 18,60 A 42,42 0 0,1 102,60" fill="none"/>
        <text fontFamily="'DM Sans', sans-serif" fontWeight="700" fontSize="11.5" letterSpacing="3.5" fill={light ? '#fff' : '#1a3d6e'}>
          <textPath href="#topArc" startOffset="10%">ANDAMANIC</textPath>
        </text>
        {/* Bottom text arc - TRAVELOPEDIA */}
        <path id="bottomArc" d="M 18,60 A 42,42 0 0,0 102,60" fill="none"/>
        <text fontFamily="'DM Sans', sans-serif" fontWeight="700" fontSize="11" letterSpacing="2.5" fill={light ? '#fff' : '#1a3d6e'}>
          <textPath href="#bottomArc" startOffset="7%">TRAVELOPEDIA</textPath>
        </text>
      </svg>

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

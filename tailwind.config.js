/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#1A6FFF',       // Deep ocean blue (nav, cards, text accents)
          darkblue: '#0A2748',   // Deep premium navy (headings, body)
          lightblue: '#5B9BF8',  // Medium blue
          sky: '#E8F7FA',        // Very light cyan tint background
          navy: '#06142B',       // Very dark navy (footer bg)
          // ── Palette Colors ──────────────────────────────────────
          cyan: '#12C5D4',       // Palette Cyan  (water, icons, logo accent)
          yellow: '#F8C400',     // Palette Yellow (badges, price highlights)
          orange: '#F05528',     // Palette Orange (CTAs, Book Now, action buttons)
          pink: '#D42B6B',       // Palette Pink  (Best Seller, premium badges)
          // ── Legacy aliases kept for compatibility ──────────────
          teal: '#12C5D4',       // = brand-cyan
          coral: '#F05528',      // = brand-orange
          gold: '#F8C400',       // = brand-yellow
          // ─────────────────────────────────────────────────────
          accent: '#E8F7FA',     // Pale cyan accent bg
          gray: '#4B5563',       // Body text gray
          light: '#F5FBFD',      // Page background
        }
      },
      fontFamily: {
        display: ['Sora', 'Manrope', 'system-ui', 'sans-serif'],
        body: ['Manrope', 'system-ui', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'wave-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2312C5D4' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        'tropical-gradient': 'linear-gradient(135deg, #0A2748 0%, #1A6FFF 45%, #12C5D4 100%)',
        'coral-gradient': 'linear-gradient(135deg, #F05528 0%, #F07A28 100%)',
        'teal-gradient': 'linear-gradient(135deg, #12C5D4 0%, #0BA8B6 100%)',
        'pink-gradient': 'linear-gradient(135deg, #D42B6B 0%, #B52260 100%)',
        'yellow-gradient': 'linear-gradient(135deg, #F8C400 0%, #F5A800 100%)',
        'premium-gradient': 'linear-gradient(135deg, #06142B 0%, #0A2748 100%)',
        'palette-gradient': 'linear-gradient(180deg, #12C5D4 0%, #F8C400 33%, #F05528 66%, #D42B6B 100%)',
      },
      boxShadow: {
        'orange': '0 8px 30px rgba(240, 85, 40, 0.4)',
        'cyan': '0 8px 30px rgba(18, 197, 212, 0.4)',
        'pink': '0 8px 30px rgba(212, 43, 107, 0.4)',
        'yellow': '0 8px 30px rgba(248, 196, 0, 0.35)',
        'blue': '0 8px 30px rgba(26, 111, 255, 0.35)',
        'premium': '0 20px 60px rgba(6, 20, 43, 0.3)',
        // legacy aliases
        'coral': '0 8px 30px rgba(240, 85, 40, 0.4)',
        'teal': '0 8px 30px rgba(18, 197, 212, 0.4)',
      }
    },
  },
  plugins: [],
}

# Andamanic Travelopedia — Website

A modern, responsive single-page website for **Andamanic Travelopedia** built with:
- **React 18** + **Vite**
- **Tailwind CSS** for styling
- **Framer Motion** for animations

---

## 🚀 Local Development

### Prerequisites
- Node.js 18+ (https://nodejs.org)
- npm 9+

### Setup & Run

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open in browser
# http://localhost:5173
```

---

## 🎬 Adding Your Andaman Hero Video

Place your Andaman video file in the `public/` folder:

```
public/
  andaman-hero.mp4   ← Your Andaman video here
```

The video is already referenced in `src/components/Hero.jsx` at:
```jsx
<source src="/andaman-hero.mp4" type="video/mp4" />
```

**Recommended video specs:**
- Format: MP4 (H.264)
- Duration: 15–60 seconds (looping)
- Resolution: 1920×1080 or higher
- File size: < 20MB for fast loading

If the video fails to load, a beautiful blue ocean gradient fallback is shown automatically.

---

## ✏️ Customizing Content

All website text, services, testimonials, FAQs, and contact info lives in one file:

```
src/data/siteContent.js
```

Edit this file to update:
- Business details (phone, email, location)
- Hero text and stats
- Services list
- About section content
- Testimonials
- FAQ questions and answers

---

## 📁 Project Structure

```
andamanic-travelopedia/
├── public/
│   └── andaman-hero.mp4          ← ADD YOUR VIDEO HERE
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Logo.jsx           SVG logo recreation
│   │   │   ├── Toast.jsx          Notification toasts
│   │   │   ├── ScrollReveal.jsx   Animation wrapper
│   │   │   └── WhatsAppFloat.jsx  Floating WA button
│   │   ├── sections/
│   │   │   ├── Services.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Testimonials.jsx
│   │   │   ├── FAQ.jsx
│   │   │   └── Contact.jsx
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── ServiceCard.jsx
│   │   ├── FAQAccordion.jsx
│   │   ├── ContactForm.jsx
│   │   ├── CTA.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── siteContent.js         ← ALL content lives here
│   ├── hooks/
│   │   ├── useScrollSpy.js
│   │   └── useReducedMotion.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## 🌐 Deployment

### Vercel (Recommended — Free)

1. Push project to GitHub
2. Go to https://vercel.com → New Project
3. Import your GitHub repo
4. Framework: **Vite** (auto-detected)
5. Click **Deploy**

Done! Vercel auto-deploys on every push.

### Netlify (Alternative — Free)

1. Build the project: `npm run build`
2. Go to https://netlify.com → Sites → "Deploy manually"
3. Drag & drop the `dist/` folder
4. Live instantly!

**Or via CLI:**
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

---

## 📞 Contact Form Integration

The contact form currently simulates a submission. To make it actually send data:

**Option 1: Formspree (Free, no backend needed)**
1. Create account at https://formspree.io
2. Replace the simulated `await` in `ContactForm.jsx` with:
```js
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form),
})
```

**Option 2: EmailJS (Free)**
1. Create account at https://emailjs.com
2. Install: `npm install @emailjs/browser`
3. Replace the simulated fetch with EmailJS send

---

## 🔧 Build for Production

```bash
npm run build
# Output in dist/ folder
```

---

## 📱 Features

- ✅ Fully responsive (mobile-first)
- ✅ Video hero background (with fallback)
- ✅ Sticky navbar with active section highlight
- ✅ Smooth scroll navigation
- ✅ Framer Motion scroll animations
- ✅ Service cards with hover effects
- ✅ Interactive testimonial carousel
- ✅ FAQ accordion with smooth height animation
- ✅ Contact form with inline validation
- ✅ Toast notifications
- ✅ Floating WhatsApp button
- ✅ CTA strip with pulse glow animation
- ✅ Accessible (ARIA, keyboard nav, reduced motion)
- ✅ SEO meta tags
- ✅ Google Fonts (Playfair Display + DM Sans)

// src/data/siteContent.js
// ─── Single source of truth for all site content ───────────────────────────

export const brand = {
  name: "Andamanic Travelopedia",
  tagline: "Your Gateway to Paradise",
  shortName: "Andamanic",
  phone: "7736092854",
  phoneDisplay: "+91 77360 92854",
  whatsapp: "917736092854",
  email: "Andamanictravelopedia@gmail.com",
  location: "Port Blair, Andaman & Nicobar Islands",
  instagram: "https://instagram.com/andamanictravelopedia",
  facebook: "https://facebook.com/andamanictravelopedia",
  youtube: "https://youtube.com/@andamanictravelopedia",
  mapEmbed: "https://maps.google.com/maps?q=Port+Blair+Andaman&output=embed",
  colors: {
    primary: "#2A5FA5",
    secondary: "#1a3d6e",
    accent: "#4A7FC1",
  },
  // Replace this with your actual Andaman video URL (YouTube embed or direct MP4)
  heroVideoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", // REPLACE with actual Andaman video
  heroVideoYoutube: "https://www.youtube.com/embed/6eVbQ3-w9kQ?autoplay=1&mute=1&loop=1&playlist=6eVbQ3-w9kQ&controls=0&showinfo=0&rel=0", // REPLACE with Andaman video ID
};

export const nav = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  headline: "Discover the\nUntouched Paradise",
  subheadline: "of the Andaman Islands",
  description:
    "Customized tour packages crafted with local expertise. From pristine beaches to underwater wonders — we make every journey unforgettable.",
  cta: { primary: "Plan My Trip", secondary: "WhatsApp Us" },
  stats: [
    { value: "5000+", label: "Happy Travelers" },
    { value: "100+", label: "Tour Packages" },
    { value: "10+", label: "Years Experience" },
    { value: "4.9★", label: "Average Rating" },
  ],
};

export const services = [
  {
    id: 1,
    icon: "Map",
    title: "Customized Tour Packages",
    description:
      "Tailored itineraries crafted around your timeline, budget, and dream experiences in the Andaman Islands.",
    highlight: true,
  },
  {
    id: 2,
    icon: "Hotel",
    title: "Hotel & Resort Bookings",
    description:
      "Handpicked accommodations from luxury resorts to budget stays — best rates guaranteed.",
  },
  {
    id: 3,
    icon: "Ship",
    title: "Ferry & Cruise Ticketing",
    description:
      "Hassle-free inter-island ferry and cruise bookings with confirmed seats and priority boarding.",
  },
  {
    id: 4,
    icon: "Car",
    title: "Airport Transfers & Transport",
    description:
      "Comfortable, reliable transfers from airport to hotel and seamless local transportation throughout your trip.",
  },
  {
    id: 5,
    icon: "Eye",
    title: "Sightseeing & Excursions",
    description:
      "Expert-guided tours to Cellular Jail, Ross Island, Baratang, Neil Island, and all iconic landmarks.",
  },
  {
    id: 6,
    icon: "Waves",
    title: "Adventure Activities",
    description:
      "Scuba diving, snorkeling, sea-walking, jet-skiing, and island trekking — thrill awaits at every turn.",
  },
  {
    id: 7,
    icon: "Heart",
    title: "Honeymoon Packages",
    description:
      "Romantic beachside escapes, sunset cruises, and intimate dinners for couples beginning their forever.",
  },
  {
    id: 8,
    icon: "Users",
    title: "Group & Corporate Tours",
    description:
      "Large group management, corporate retreats, team building, and MICE travel with dedicated support.",
  },
  {
    id: 9,
    icon: "FileText",
    title: "Permit & Documentation",
    description:
      "Expert assistance for Restricted Area Permits (RAP), tribal permits, and all required travel documents.",
  },
  {
    id: 10,
    icon: "Headphones",
    title: "24/7 On-Ground Support",
    description:
      "Dedicated local support team available round the clock to ensure your trip is smooth and stress-free.",
  },
  {
    id: 11,
    icon: "Compass",
    title: "Island Hopping Packages",
    description:
      "Explore Havelock, Neil, Baratang, Little Andaman and more with our curated island-to-island packages.",
  },
  {
    id: 12,
    icon: "Star",
    title: "Luxury Travel Experiences",
    description:
      "Premium resorts, private transfers, exclusive dining, and VIP experiences for discerning travelers.",
  },
];

export const about = {
  headline: "Born in the Islands,\nBuilt for Travelers",
  body: [
    "Andamanic Travelopedia was founded by islanders who grew up exploring every beach, reef, and hidden cove the Andamans offer. We don't just sell tours — we share our home.",
    "With over a decade of on-ground experience, our team brings unmatched local knowledge to every itinerary. From the iconic Radhanagar Beach to the untouched shores of Little Andaman, we know where the magic lives.",
    "We believe travel should be seamless, personal, and transformative. Every package is crafted with care, every detail coordinated, and every traveler treated like family.",
  ],
  features: [
    { icon: "Shield", label: "100% Verified Partners" },
    { icon: "Clock", label: "24/7 Local Support" },
    { icon: "Award", label: "Certified Tour Operators" },
    { icon: "ThumbsUp", label: "5000+ Happy Guests" },
  ],
};

export const testimonials = [
  {
    name: "Priya & Rahul Sharma",
    location: "Delhi",
    trip: "Honeymoon Package · 7 Nights",
    rating: 5,
    text: "Our Andaman honeymoon was pure magic. Every detail was perfectly arranged — the beach resort, the sunset cruise, even the scuba session. Andamanic Travelopedia made our dream trip a reality without any stress.",
    avatar: "PR",
  },
  {
    name: "Vikram Nair",
    location: "Bangalore",
    trip: "Family Package · 5 Nights",
    rating: 5,
    text: "Traveled with my family of 6 including elderly parents. The team arranged everything from airport pickup to wheelchair assistance at Cellular Jail. Exceptional attention to every family member's needs!",
    avatar: "VN",
  },
  {
    name: "Sneha Patel",
    location: "Mumbai",
    trip: "Adventure Package · 4 Nights",
    rating: 5,
    text: "Scuba diving at Havelock was life-changing! The guides were certified professionals who made first-timers like me feel completely safe. The island-hopping schedule was perfectly paced.",
    avatar: "SP",
  },
  {
    name: "TechCorp India",
    location: "Hyderabad",
    trip: "Corporate Retreat · 50 People",
    rating: 5,
    text: "Organized a 50-person corporate team trip and everything was flawlessly executed. Ferry bookings, hotel rooms, team activities, group dinners — all managed without a single hiccup. Will book again!",
    avatar: "TC",
  },
  {
    name: "Arun & Family",
    location: "Chennai",
    trip: "Budget Package · 6 Nights",
    rating: 5,
    text: "Got a premium experience within our modest budget. They know exactly which islands to visit, where to eat authentic seafood, and how to get the best value without missing anything.",
    avatar: "AF",
  },
];

export const faqs = [
  {
    q: "What is the best time to visit Andaman?",
    a: "October to May is ideal, with November–February being peak season with calm seas and clear skies. We operate year-round and can advise on the best package based on your travel dates.",
  },
  {
    q: "Do I need a permit to visit Andaman?",
    a: "Indian citizens do not need a permit for most areas. Foreign nationals require a Restricted Area Permit (RAP) for certain islands. We handle all permit documentation as part of our service.",
  },
  {
    q: "How do I reach the Andaman Islands?",
    a: "Veer Savarkar International Airport in Port Blair has direct flights from Chennai, Delhi, Mumbai, Kolkata, and Bengaluru. We can assist with flight bookings and coordinate your complete arrival experience.",
  },
  {
    q: "Can you customize a package to my exact budget?",
    a: "Absolutely. Our specialty is bespoke travel. Share your group size, duration, and budget and we'll craft an itinerary that maximizes every rupee, whether you're looking for luxury or a budget-friendly escape.",
  },
  {
    q: "Are the adventure activities safe for beginners?",
    a: "Yes. All our water sports and adventure partners are PADI-certified and follow strict safety protocols. Activities like scuba diving and sea-walking include full briefings and expert guides, making them safe for first-timers.",
  },
  {
    q: "What is your cancellation and refund policy?",
    a: "We offer flexible cancellation with refunds based on notice period. Full refund for cancellations 30+ days prior, partial refund within 15–30 days. Emergency cancellations are handled case-by-case. Full details provided at booking.",
  },
  {
    q: "Do you offer last-minute bookings?",
    a: "We try our best to accommodate last-minute requests. Contact us on WhatsApp for urgent bookings and our team will confirm availability within the hour.",
  },
];

export const contact = {
  headline: "Ready to Explore Paradise?",
  subtext: "Get a free, customized quote within 2 hours. No commitment required.",
  whatsappMessage: "Hi! I'm interested in booking an Andaman tour package. Could you share details?",
};

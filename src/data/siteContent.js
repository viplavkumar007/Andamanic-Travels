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
    primary: "#1A6FFF",
    secondary: "#0A2748",
    accent: "#00BFA5",
    coral: "#FF6B4A",
    gold: "#F59E0B",
  },
};

export const nav = [
  { label: "Deals", href: "#deals" },
  { label: "Packages", href: "#packages" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  badge: "Andaman's #1 Trusted Travel Partner",
  headline: "Discover Your\nIsland Paradise",
  subheadline: "in the Andaman Islands",
  description:
    "Handcrafted tour packages by local experts. Pristine beaches, turquoise waters & unforgettable memories — tailored just for you.",
  cta: { primary: "Plan My Trip", secondary: "WhatsApp Us" },
  stats: [
    { value: "5000+", label: "Happy Travelers" },
    { value: "100+", label: "Tour Packages" },
    { value: "10+", label: "Years Experience" },
    { value: "4.9★", label: "Average Rating" },
  ],
};

// ─── Best Deals ────────────────────────────────────────────────────────────

export const bestDeals = [
  {
    id: "bd1",
    title: "Ultimate Andaman Experience",
    nights: "7 Nights / 8 Days",
    originalPrice: "₹55,999",
    price: "₹42,999",
    saving: "Save ₹13,000",
    image:
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=900&q=80",
    badge: "🏆 Best Seller",
    category: "All Inclusive",
    rating: 4.9,
    reviews: 312,
    highlights: [
      "Havelock Luxury Resort",
      "Neil Island Tour",
      "Scuba Diving",
      "Private Beach Dinner",
      "All Water Sports",
      "Airport Transfers",
    ],
  },
  {
    id: "bd2",
    title: "Honeymoon Special Package",
    nights: "5 Nights / 6 Days",
    originalPrice: "₹36,999",
    price: "₹28,999",
    saving: "Save ₹8,000",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
    badge: "❤️ Most Popular",
    category: "Couples",
    rating: 4.8,
    reviews: 187,
    highlights: [
      "Beachfront Resort Stay",
      "Sunset Cruise",
      "Couple Spa Session",
      "Candlelit Dinner",
      "Snorkeling",
      "Airport Transfers",
    ],
  },
  {
    id: "bd3",
    title: "Family Adventure Pack",
    nights: "6 Nights / 7 Days",
    originalPrice: "₹42,000",
    price: "₹32,999",
    saving: "Save ₹9,000",
    image:
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=900&q=80",
    badge: "👨‍👩‍👧 Family Pick",
    category: "Family",
    rating: 4.9,
    reviews: 241,
    highlights: [
      "3 Islands Tour",
      "Glass Bottom Boat",
      "Elephant Beach",
      "Cellular Jail Visit",
      "Jet Skiing",
      "All Ferry Tickets",
    ],
  },
];

// ─── Package Categories ────────────────────────────────────────────────────

export const packages = {
  couple: [
    {
      id: "c1",
      title: "Romantic Andaman Escape",
      nights: "5N / 6D",
      price: "₹28,999",
      priceNote: "per person",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=80",
      badge: "Best Seller",
      highlights: [
        "Havelock Island Stay",
        "Sunset Beach Dinner",
        "Snorkeling Trip",
        "Couple Spa Session",
      ],
      includes: ["Hotel", "Ferry", "Transfers", "Breakfast"],
    },
    {
      id: "c2",
      title: "Honeymoon Paradise",
      nights: "7N / 8D",
      price: "₹42,999",
      priceNote: "per person",
      image:
        "https://images.unsplash.com/photo-1540541338537-71d7efdef0f9?auto=format&fit=crop&w=700&q=80",
      badge: "Premium",
      highlights: [
        "Luxury Beach Resort",
        "Private Island Tour",
        "Scuba Diving",
        "Candlelit Dinner",
      ],
      includes: ["5-Star Hotel", "Ferry", "Transfers", "All Meals"],
    },
    {
      id: "c3",
      title: "Sunset Bliss Package",
      nights: "3N / 4D",
      price: "₹18,999",
      priceNote: "per person",
      image:
        "https://images.unsplash.com/photo-1559494007-9f5847c49d94?auto=format&fit=crop&w=700&q=80",
      badge: "Budget Pick",
      highlights: [
        "Port Blair Tour",
        "Ross Island Visit",
        "Sea Walk",
        "Beach BBQ Night",
      ],
      includes: ["Hotel", "Sightseeing", "Transfers", "Breakfast"],
    },
  ],
  family: [
    {
      id: "f1",
      title: "Family Fun Andaman",
      nights: "5N / 6D",
      price: "₹24,999",
      priceNote: "per person",
      image:
        "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=700&q=80",
      badge: "Most Popular",
      highlights: [
        "Port Blair + Havelock",
        "Family Snorkeling",
        "Cellular Jail",
        "Water Sports",
      ],
      includes: ["Hotel", "Ferry", "Transfers", "Breakfast"],
    },
    {
      id: "f2",
      title: "3-Island Family Explorer",
      nights: "7N / 8D",
      price: "₹34,999",
      priceNote: "per person",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=700&q=80",
      badge: "Best Value",
      highlights: [
        "Havelock + Neil + PB",
        "Glass-Bottom Boat",
        "Jet Skiing",
        "Island Picnic",
      ],
      includes: ["Hotel", "All Ferries", "Transfers", "Breakfast"],
    },
    {
      id: "f3",
      title: "Quick Family Getaway",
      nights: "3N / 4D",
      price: "₹15,999",
      priceNote: "per person",
      image:
        "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=700&q=80",
      badge: "Weekend Special",
      highlights: [
        "Corbyn's Cove Beach",
        "Ross & North Bay",
        "Sea Walk",
        "Sound & Light Show",
      ],
      includes: ["Hotel", "Sightseeing", "Transfers", "Breakfast"],
    },
  ],
  group: [
    {
      id: "g1",
      title: "Group Adventure Trip",
      nights: "5N / 6D",
      price: "₹19,999",
      priceNote: "per person (min 10)",
      image:
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=700&q=80",
      badge: "Best for Groups",
      highlights: [
        "Scuba Diving",
        "Sea Walking",
        "Island Hopping",
        "Bonfire Night",
      ],
      includes: ["Hotel", "Ferry", "Transfers", "Breakfast"],
    },
    {
      id: "g2",
      title: "Corporate Retreat",
      nights: "4N / 5D",
      price: "₹22,999",
      priceNote: "per person (min 20)",
      image:
        "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=700&q=80",
      badge: "Corporate",
      highlights: [
        "Team Building Activities",
        "Resort Conference Hall",
        "Gala Dinner",
        "Group Water Sports",
      ],
      includes: ["5-Star Hotel", "Ferry", "Transfers", "All Meals"],
    },
    {
      id: "g3",
      title: "Friends Island Trip",
      nights: "6N / 7D",
      price: "₹28,999",
      priceNote: "per person (min 6)",
      image:
        "https://images.unsplash.com/photo-1543731068-7e0f5beff43a?auto=format&fit=crop&w=700&q=80",
      badge: "Friends Favorite",
      highlights: [
        "Full Island Coverage",
        "Night Fishing",
        "Beach Party",
        "All Water Sports",
      ],
      includes: ["Hotel", "All Ferries", "Transfers", "Breakfast"],
    },
  ],
};

// ─── Services (What We Offer) ──────────────────────────────────────────────

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
      "Comfortable, reliable transfers from airport to hotel and seamless local transportation throughout.",
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

// ─── About ────────────────────────────────────────────────────────────────

export const about = {
  headline: "Born in the Islands,\nBuilt for Travelers",
  body: [
    "Andamanic Travelopedia was founded by islanders who grew up exploring every beach, reef, and hidden cove the Andamans offer. We don't just sell tours — we share our home.",
    "With over a decade of on-ground experience, our team brings unmatched local knowledge to every itinerary. From iconic Radhanagar Beach to the untouched shores of Little Andaman, we know where the magic lives.",
    "We believe travel should be seamless, personal, and transformative. Every package is crafted with care, every detail coordinated, and every traveler treated like family.",
  ],
  features: [
    { icon: "Shield", label: "100% Verified Partners" },
    { icon: "Clock", label: "24/7 Local Support" },
    { icon: "Award", label: "Certified Tour Operators" },
    { icon: "ThumbsUp", label: "5000+ Happy Guests" },
  ],
  photos: [
    {
      src: "https://images.unsplash.com/photo-1559494007-9f5847c49d94?auto=format&fit=crop&w=700&q=80",
      alt: "Radhanagar Beach, Havelock Island",
    },
    {
      src: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=500&q=80",
      alt: "Luxury beach resort pool",
    },
    {
      src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80",
      alt: "Tropical beach sunset",
    },
    {
      src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=500&q=80",
      alt: "Underwater snorkeling and scuba",
    },
  ],
};

// ─── Testimonials ─────────────────────────────────────────────────────────

export const testimonials = [
  {
    name: "Priya & Rahul Sharma",
    location: "Delhi",
    trip: "Honeymoon Package · 7 Nights",
    rating: 5,
    text: "Our Andaman honeymoon was pure magic. Every detail was perfectly arranged — the beach resort, the sunset cruise, even the scuba session. Andamanic Travelopedia made our dream trip a reality without any stress.",
    avatar: "PR",
    photo: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=100&h=100&q=80",
  },
  {
    name: "Vikram Nair",
    location: "Bangalore",
    trip: "Family Package · 5 Nights",
    rating: 5,
    text: "Traveled with my family of 6 including elderly parents. The team arranged everything from airport pickup to wheelchair assistance at Cellular Jail. Exceptional attention to every family member's needs!",
    avatar: "VN",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80",
  },
  {
    name: "Sneha Patel",
    location: "Mumbai",
    trip: "Adventure Package · 4 Nights",
    rating: 5,
    text: "Scuba diving at Havelock was life-changing! The guides were certified professionals who made first-timers like me feel completely safe. The island-hopping schedule was perfectly paced.",
    avatar: "SP",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80",
  },
  {
    name: "TechCorp India",
    location: "Hyderabad",
    trip: "Corporate Retreat · 50 People",
    rating: 5,
    text: "Organized a 50-person corporate team trip and everything was flawlessly executed. Ferry bookings, hotel rooms, team activities, group dinners — all managed without a single hiccup. Will book again!",
    avatar: "TC",
    photo: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=100&h=100&q=80",
  },
  {
    name: "Arun & Family",
    location: "Chennai",
    trip: "Budget Package · 6 Nights",
    rating: 5,
    text: "Got a premium experience within our modest budget. They know exactly which islands to visit, where to eat authentic seafood, and how to get the best value without missing anything.",
    avatar: "AF",
    photo: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=100&h=100&q=80",
  },
];

// ─── FAQs ─────────────────────────────────────────────────────────────────

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

// ─── Contact ──────────────────────────────────────────────────────────────

export const contact = {
  headline: "Ready to Explore Paradise?",
  subtext: "Get a free, customized quote within 2 hours. No commitment required.",
  whatsappMessage:
    "Hi! I'm interested in booking an Andaman tour package. Could you share details?",
};

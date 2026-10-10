export const site = {
  name: "Iai-Neh Homestay",
  shortName: "Iai-Neh",
  tagline: "A peaceful homestay in Smit, Meghalaya",
  description:
    "Stay at Iai-Neh Homestay in Smit, Meghalaya for warm local hospitality, homemade food and a peaceful village experience.",
  phone: "+91 96125 29072",
  whatsapp: "919612529072",
  address: "The way to Chandara Park, Lum-Kynsai, Smit, Meghalaya 793015",
  mapUrl: "https://maps.app.goo.gl/UAWKx8fR1GRy2ugX8?g_st=ac",
  googleReviews: 67,
  rating: 4.9,
  coordinates: { lat: 25.6105, lng: 91.5532 },
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://www.example.com",
  nav: [
    ["Home", "/"],
    ["Stay", "/rooms"],
    ["Experience", "/experiences"],
    ["Gallery", "/gallery"],
    ["Journal", "/blog"],
    ["Contact", "/contact"],
  ],
};

export const amenities = [
  {
    icon: "⌂",
    title: "Homely atmosphere",
    text: "A quiet, comfortable place designed around the feeling of being at home.",
  },
  {
    icon: "♨",
    title: "Homemade local food",
    text: "Enjoy authentic home-style meals and the flavours of Meghalaya.",
  },
  {
    icon: "♡",
    title: "Warm hospitality",
    text: "Guests often mention the kind, helpful and welcoming hosts.",
  },
  {
    icon: "⌖",
    title: "Peaceful village setting",
    text: "Slow down in Smit and enjoy a quieter side of Meghalaya.",
  },
  {
    icon: "✦",
    title: "Local guidance",
    text: "Get practical help and local stories from people who know the area.",
  },
  {
    icon: "◌",
    title: "Nearby food options",
    text: "The area has convenient options for eating nearby when you want variety.",
  },
];

export const rooms = [
  {
    slug: "the-homestay-room",
    name: "The Homestay Room",
    description:
      "A comfortable base for travellers who want a peaceful Smit stay with the warmth of a local home.",
    image: "/images/Image3.jpeg",
    alt: "Warmly furnished homestay bedroom with natural light",
    features: [
      "Comfortable sleeping space",
      "Quiet surroundings",
      "Homely atmosphere",
      "Local host support",
    ],
  },
  {
    slug: "the-family-stay",
    name: "The Family Stay",
    description:
      "A relaxed option for couples, families or friends looking for a slower Meghalaya experience.",
    image: "/images/Image6.jpeg",
    alt: "Bright comfortable guest room prepared for travellers",
    features: [
      "Relaxed setting",
      "Comfort-focused",
      "Local food available",
      "Village experience",
    ],
  },
];

export const faqs = [
  {
    q: "Where is Iai-Neh Homestay located?",
    a: "Iai-Neh Homestay is on the way to Chandara Park in Lum-Kynsai, Smit, Meghalaya 793015.",
  },
  {
    q: "How can I book a stay?",
    a: "For direct bookings and availability, message Iai-Neh Homestay on WhatsApp. The host can confirm dates, guests and stay details with you directly.",
  },
  {
    q: "Does the homestay serve local food?",
    a: "Yes. Homemade authentic local meals are one of the experiences guests frequently appreciate.",
  },
  {
    q: "Is Iai-Neh Homestay suitable for a peaceful getaway?",
    a: "Yes. The homestay is positioned as a quiet village stay in Smit, away from the feel of a busy city hotel.",
  },
  {
    q: "Can the host help with local information?",
    a: "Guests have highlighted the helpful and friendly hosts, including their willingness to share local guidance and stories.",
  },
];

export const posts = [
  {
    slug: "a-slow-travel-guide-to-smit-meghalaya",
    title: "A Slow Travel Guide to Smit, Meghalaya",
    excerpt:
      "Why Smit is worth experiencing when you want to see a quieter, more local side of Meghalaya.",
    date: "2026-09-18",
    category: "Smit Guide",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=82",
    alt: "Green mountain landscape representing a peaceful Meghalaya journey",
  },
  {
    slug: "what-to-expect-from-a-meghalaya-homestay",
    title: "What to Expect From a Meghalaya Homestay",
    excerpt:
      "A practical look at the small details that make a local homestay different from a standard hotel.",
    date: "2026-09-12",
    category: "Travel Notes",
    image:
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1400&q=82",
    alt: "Cozy guest room prepared for a homestay stay",
  },
  {
    slug: "local-food-and-the-meghalaya-homestay-experience",
    title: "Local Food and the Meghalaya Homestay Experience",
    excerpt:
      "Food is often one of the best ways to understand a place. Here is why home-style meals matter when travelling in Meghalaya.",
    date: "2026-09-05",
    category: "Food & Culture",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1400&q=82",
    alt: "Home-style meal representing local food and hospitality",
  },
];

export function whatsappLink(
  message = "Hi, I would like to enquire about staying at Iai-Neh Homestay.",
) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

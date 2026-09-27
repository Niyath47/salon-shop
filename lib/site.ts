// ─── EDIT EVERYTHING ABOUT THE SALON HERE ───
// Drop stock photos into /public/gallery/ named:
//   gallery-1.jpg … gallery-6.jpg  (lookbook)
//   hero.jpg                        (optional cinematic backdrop)
// They appear automatically — no code changes needed.

export const site = {
  name: "Maison Lumière",
  tagline: "Hair · Color · Ritual",
  est: "EST. 2019",
  phone: "+1 (203) 555-0147",
  phoneHref: "tel:+12035550147",
  address: "248 Elm Street, New Haven, CT 06511",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=hair+salon+New+Haven+CT",
  instagram: "@maisonlumiere",
  hours: [
    { d: "Tue — Fri", h: "9:00 AM — 7:00 PM" },
    { d: "Saturday", h: "9:00 AM — 5:00 PM" },
    { d: "Sun — Mon", h: "Closed" },
  ],
};

export type Service = { name: string; desc: string; price: string; time: string };

export const serviceGroups: { title: string; note: string; items: Service[] }[] = [
  {
    title: "Cut & Finish",
    note: "Consultation included with every appointment",
    items: [
      { name: "Signature Cut", desc: "Cleanse, precision cut, blowout finish", price: "$65+", time: "60 min" },
      { name: "Restyle / Transformation", desc: "Full consultation + dramatic change", price: "$95+", time: "90 min" },
      { name: "Blowout", desc: "Wash, silk blow-dry, soft style", price: "$45+", time: "45 min" },
      { name: "Updo / Event Style", desc: "Bridal, editorial, evening", price: "$85+", time: "60 min" },
    ],
  },
  {
    title: "Color",
    note: "Balayage, lived-in blondes & rich brunettes",
    items: [
      { name: "Single Process", desc: "Root touch-up, all-over gloss", price: "$80+", time: "90 min" },
      { name: "Partial Foil", desc: "Face-frame brightness, toner finish", price: "$140+", time: "2 hr" },
      { name: "Full Balayage", desc: "Hand-painted dimension + gloss + cut", price: "$220+", time: "3 hr" },
      { name: "Gloss / Toner", desc: "Shine, tone correction, refresh", price: "$55+", time: "30 min" },
    ],
  },
  {
    title: "Rituals",
    note: "Treatments & finishing touches",
    items: [
      { name: "Kérastase Ritual", desc: "Deep repair masque + scalp massage", price: "$40+", time: "30 min" },
      { name: "Scalp Detox", desc: "Exfoliate, steam, rebalance", price: "$50+", time: "40 min" },
      { name: "Brow Sculpt", desc: "Shape, tint, finish", price: "$35+", time: "25 min" },
    ],
  },
];

export type GallerySlot = {
  src: string;
  label: string;
  span: "tall" | "wide" | "std";
  /** object-position for the photo inside its frame (default centers) */
  pos?: string;
};

export const gallerySlots: GallerySlot[] = [
  { src: "/gallery/gallery-1.jpg", label: "The Chair", span: "tall" },
  // portrait photo in a wide frame → anchor top so head/hair survive the crop
  { src: "/gallery/gallery-2.jpg", label: "Lived-in Blonde", span: "wide", pos: "object-top" },
  { src: "/gallery/gallery-3.jpg", label: "Precision Cut", span: "std" },
  { src: "/gallery/gallery-4.jpg", label: "The Backbar", span: "std" },
  { src: "/gallery/gallery-5.jpg", label: "Bridal Morning", span: "wide" },
  { src: "/gallery/gallery-6.jpg", label: "Detail", span: "tall" },
];

export const heroImage = "/gallery/hero.jpg";

export const marqueeWords = [
  "Precision Cutting",
  "Lived-in Color",
  "Balayage",
  "Silk Blowouts",
  "Bridal",
  "Gloss Rituals",
];

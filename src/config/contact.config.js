/**
 * ============================================================
 *  DigiMarket DIGITAL AGENCY — CENTRAL CONFIGURATION
 *  Single source of truth for branding, contact info, and defaults
 * ============================================================
 */

export const SITE_NAME = "DigiMarket";

export const AGENCY = {
  name: "DigiMarket",
  legalName: "DigiMarket Digital Agency",
  tagline: "Digital Engineering for Businesses That Want to Grow",
  type: "Digital Engineering / Digital Growth Agency",
  origin: "Kannur, Kerala",
  regionsServed: ["India", "UAE", "Oman", "Qatar", "Saudi Arabia"],
  stats: [
    { value: "9+", label: "Years Experience" },
    { value: "100+", label: "Websites Delivered" },
    { value: "50+", label: "Active Clients" },
    { value: "99.9%", label: "Infrastructure Uptime" },
  ],
};

export const CONTACT = {
  phone: "+91 98765 43210",
  phoneRaw: "+919876543210",
  whatsapp: "+919876543210",
  email: "hello@digimarket.in",
  address: "Kuthuparamba, Kannur, Kerala, India",
  location: "Kuthuparamba, Kannur, Kerala",
  mapsUrl: "https://maps.google.com/?q=Kuthuparamba,Kannur,Kerala",
  businessHours: "Mon – Sat: 9:00 AM – 7:00 PM IST",
};

export const SOCIAL = {
  instagram: "https://instagram.com",
  linkedin: "https://linkedin.com",
  facebook: "https://facebook.com",
  whatsapp: `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
    "Hi DigiMarket, I would like to discuss a project."
  )}`,
};

export const WHATSAPP_URL = SOCIAL.whatsapp;

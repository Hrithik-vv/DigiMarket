import mongoose from 'mongoose';

const settingsSchema = new mongoose.Schema(
  {
    siteName: {
      type: String,
      default: 'DigiMarket',
      trim: true,
    },
    legalName: {
      type: String,
      default: 'DigiMarket Digital Agency',
      trim: true,
    },
    tagline: {
      type: String,
      default: 'Digital Engineering for Businesses That Want to Grow',
      trim: true,
    },
    businessDescription: {
      type: String,
      default:
        'DigiMarket is a premier digital engineering and growth agency, helping businesses across India and the GCC with web development, digital marketing, cloud infrastructure, and branding.',
      trim: true,
    },
    contactEmail: {
      type: String,
      default: 'hello@digimarket.in',
      trim: true,
      lowercase: true,
    },
    contactPhone: {
      type: String,
      default: '+91 98765 43210',
      trim: true,
    },
    contactPhoneRaw: {
      type: String,
      default: '+919876543210',
      trim: true,
    },
    whatsappNumber: {
      type: String,
      default: '+919876543210',
      trim: true,
    },
    whatsappMessage: {
      type: String,
      default: 'Hi DigiMarket, I would like to discuss a project.',
      trim: true,
    },
    address: {
      type: String,
      default: 'Kuthuparamba, Kannur, Kerala, India',
      trim: true,
    },
    location: {
      type: String,
      default: 'Kuthuparamba, Kannur, Kerala',
      trim: true,
    },
    businessHours: {
      type: String,
      default: 'Mon – Sat: 9:00 AM – 7:00 PM IST',
      trim: true,
    },
    socialInstagram: {
      type: String,
      default: 'https://instagram.com',
      trim: true,
    },
    socialLinkedin: {
      type: String,
      default: 'https://linkedin.com',
      trim: true,
    },
    socialFacebook: {
      type: String,
      default: 'https://facebook.com',
      trim: true,
    },
    footerCopyright: {
      type: String,
      default: '© 2026 DigiMarket Digital Agency. All rights reserved.',
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Settings = mongoose.model('Settings', settingsSchema);
export default Settings;

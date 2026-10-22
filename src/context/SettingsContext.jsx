import { createContext, useContext, useState, useEffect } from 'react';
import { SITE_NAME, AGENCY, CONTACT, SOCIAL } from '../config/contact.config';

const defaultSettings = {
  siteName: SITE_NAME,
  legalName: AGENCY.legalName,
  tagline: AGENCY.tagline,
  businessDescription: 'DigiMarket is a digital engineering agency helping businesses across India and the GCC.',
  contactEmail: CONTACT.email,
  contactPhone: CONTACT.phone,
  contactPhoneRaw: CONTACT.phoneRaw,
  whatsappNumber: CONTACT.whatsapp,
  whatsappMessage: 'Hi DigiMarket, I would like to discuss a project.',
  address: CONTACT.address,
  location: CONTACT.location,
  businessHours: CONTACT.businessHours,
  socialInstagram: SOCIAL.instagram,
  socialLinkedin: SOCIAL.linkedin,
  socialFacebook: SOCIAL.facebook,
  footerCopyright: `© ${new Date().getFullYear()} ${SITE_NAME} Digital Agency. All rights reserved.`,
};

const SettingsContext = createContext({
  settings: defaultSettings,
  loading: false,
  refreshSettings: () => {},
});

export function SettingsProvider({ children }) {
  const [settings, setSettings] = useState(defaultSettings);
  const [loading, setLoading] = useState(true);

  const fetchSettings = async () => {
    try {
      const res = await fetch('/api/settings');
      if (res.ok) {
        const data = await res.json();
        if (data.success && data.data) {
          setSettings({
            ...defaultSettings,
            ...data.data,
          });
        }
      }
    } catch (err) {
      // Gracefully maintain default fallback
      console.warn('Unable to load dynamic settings from backend, using central fallback:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSettings();
  }, []);

  return (
    <SettingsContext.Provider value={{ settings, loading, refreshSettings: fetchSettings }}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  return useContext(SettingsContext);
}

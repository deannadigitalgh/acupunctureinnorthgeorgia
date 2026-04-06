/**
 * Centralized Configuration for Acupuncture in North Georgia
 * 
 * This module contains all site-wide constants and configuration values.
 * Update any value here, and it will automatically reflect across ALL pages.
 * 
 * Non-technical users: Edit this file to update contact info, hours, etc.
 */

// ==================== CONTACT INFORMATION ====================

export const PRACTICE = {
  name: 'Acupuncture in North Georgia',
  founderName: 'Deanna Stennett',
  tagline: 'A Natural Approach to Healing',
} as const;

export const PHONE = {
  main: '+14109619033',           // Primary phone number (E.164 format for tel: links)
  formatted: '(410) 961-9033',    // Human-readable format
} as const;

export const OFFICES = {
  ellijay: {
    addressLine1: '11 Kiker Street',
    city: 'Ellijay',
    state: 'GA',
    zipCode: '30540',
    fullAddress: '11 Kiker Street, Ellijay, GA 30540',
    phone: PHONE.main,
    formattedPhone: PHONE.formatted,
  },
  blairsville: {
    addressLine1: '563 Gainesville Hwy',
    city: 'Blairsville',
    state: 'GA',
    zipCode: '30512',
    fullAddress: '563 Gainesville Hwy, Blairsville, GA 30512',
    phone: PHONE.main,
    formattedPhone: PHONE.formatted,
  },
} as const;

export const HOURS = {
  weekdays: '10:00 AM - 6:00 PM',
  weekend: 'By Appointment',
  fullDescription: 'Monday - Friday: 10:00 AM - 6:00 PM | Saturday & Sunday: By Appointment',
} as const;

// ==================== LOCATION / GEOGRAPHY ====================

export const SERVICE_AREAS = [
  { name: 'Ellijay', distance: 'Primary Location' },
  { name: 'Blairsville', distance: 'Primary Location' },
  { name: 'Blue Ridge', distance: '15 minutes' },
  { name: 'Dahlonega', distance: '30 minutes' },
  { name: 'Jasper', distance: '25 minutes' },
  { name: 'Helen', distance: '20 minutes' },
  { name: 'Tallulah Falls', distance: '18 minutes' },
] as const;

export const GEO_COORDINATES = {
  ellijay: { lat: 34.8657, lng: -84.8290 },
  blairsville: { lat: 34.7453, lng: -83.9501 },
} as const;

// ==================== SEO CONFIGURATION ====================

export const DOMAIN = 'https://acupunctureinnorthgeorgia.com';

export const PRIMARY_KEYWORDS = [
  'acupuncture in Georgia',
  'alternative medicine in Georgia',
  'holistic medicine in Georgia',
  'acupuncture near me',
  'alternative medicine near me',
  'holistic medicine near me',
] as const;

// ==================== BUSINESS DETAILS ====================

export const PRICING = {
  firstVisit: { duration: '90 minutes', price: '$130' },
  followUp: { duration: '60 minutes', price: '$90' },
} as const;

export const SERVICES = [
  {
    title: 'Acupuncture',
    description: 'Traditional Chinese Medicine and Five-Element Acupuncture to restore balance and find your center. Specializing in pain relief, stress reduction, and holistic healing. Includes cupping, moxibustion, heat therapy, Gua Sha, and Western herbology (herbal) therapy.',
    icon: '🌿' as const,
  },
  {
    title: 'NAET Allergy Treatment',
    description: 'Safe, holistic, non-invasive technique to help stop your body from reacting to allergies. Heal your body as a whole by balancing your energies.',
    icon: '🍃' as const,
  },
  {
    title: 'Facial Rejuvenation',
    description: 'Natural anti-aging treatment using fine needles to stimulate collagen production and improve facial circulation. Part of comprehensive acupuncture services including cupping, moxibustion, heat therapy, Gua Sha, and Western herbology.',
    icon: '✨' as const,
  },
] as const;

// ==================== BOOKING / SCHEDULING ====================

export const CAL_COM = {
  // Your Cal.com profile URL (without https://cal.com/)
  calLink: 'deannastennett/newacuellijay', // Profile/event type slug
  
  // For inline embed - the div ID that will contain the calendar
  containerId: 'my-cal-inline-newacuellijay',
  
  // IMPORTANT: Cal.com uses a separate namespace for the API calls
  // This is different from the container ID!
  // See src/pages/index.astro for the official embed code
  apiNamespace: 'newacuellijay',
  
  // Layout options
  layout: 'month_view' as const,
} as const;

/**
 * Get Cal.com embed script tag only (for non-Astro contexts)
 */
export function getCalEmbedScript(): string {
  return `
    <div style="width:100%;height:600px;overflow:auto;border-radius:8px;background:#fff;" id="${CAL_COM.containerId}"></div>
    <script src="https://app.cal.com/embed/embed.js" defer></script>
    <script>
      window.Cal = window.Cal || function() { 
        const cal = window.Cal; 
        if (!cal.loaded) { 
          cal.ns = {}; 
          cal.q = cal.q || []; 
          cal.loaded = true; 
        } 
      };
      Cal("init", "${CAL_COM.containerId}", {origin: "https://app.cal.com"});
      Cal.ns.${CAL_COM.containerId}("inline", {
        elementOrSelector: "#${CAL_COM.containerId}",
        config: { layout: "${CAL_COM.layout}", useSlotsViewOnSmallScreen: "true" },
        calLink: "${CAL_COM.calLink}"
      });
    </script>
  `.trim();
}

// ==================== SOCIAL & CONTACT FORMS ====================

export const EMAIL = {
  contactFormAction: '/api/contact',
} as const;

// ==================== HELPERS ====================

/**
 * Get full phone number with tel: protocol for clickable links
 */
export function getPhoneLink(phone: string = PHONE.main): string {
  return `tel:${phone}`;
}

/**
 * Format address for display (with line breaks)
 */
export function formatAddress(address: typeof OFFICES.ellijay): string {
  return `${address.addressLine1}<br/>${address.city}, ${address.state} ${address.zipCode}`;
}

/**
 * Get Google Maps embed URL for an office location
 */
export function getMapsEmbedUrl(office: 'ellijay' | 'blairsville'): string {
  const address = OFFICES[office].fullAddress.replace(/ /g, '+');
  return `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3334.567890123456!2d${GEO_COORDINATES[office].lng}!3d${GEO_COORDINATES[office].lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0:0x0000000000000001!2s${address}!5e0!3m2!1sen!2sus!4v1234567890`;
}

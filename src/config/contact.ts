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
  weekdays: '9:00 AM - 5:00 PM',
  weekend: 'By Appointment',
  fullDescription: 'Monday - Friday: 9:00 AM - 5:00 PM | Saturday & Sunday: By Appointment',
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
    description: 'Traditional Chinese Medicine and Five-Element Acupuncture to restore balance and find your center. Specializing in pain relief, stress reduction, and holistic healing.',
    icon: '🌿' as const,
  },
  {
    title: 'NAET Allergy Treatment',
    description: 'Safe, holistic, non-invasive technique to help stop your body from reacting to allergies. Heal your body as a whole by balancing your energies.',
    icon: '🍃' as const,
  },
  {
    title: 'Facial Rejuvenation',
    description: 'Insertion of paper-thin needles through strategic points on the face to increase blood flow, boost collagen production, and remove dead skin cells.',
    icon: '✨' as const,
  },
] as const;

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

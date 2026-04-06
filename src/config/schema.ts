/**
 * Schema markup for LocalBusiness (Multiple Locations)
 */

export const schema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "Acupuncture in North Georgia",
  "alternateName": "North Ga Acupuncture",
  "image": "https://acupunctureinnorthgeorgia.com/logo.svg",
  "description": "Deanna Stennett - Licensed Acupuncturist with 30+ years of experience providing Traditional Chinese Medicine, Five-Element Acupuncture, NAET allergy treatment, and Facial Rejuvenation in Ellijay and Blairsville, Georgia.",
  "url": "https://acupunctureinnorthgeorgia.com",
  "telephone": "+14109619033",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": ["11 Kiker Street", "563 Gainesville Hwy"],
    "addressLocality": ["Ellijay", "Blairsville"],
    "addressRegion": "GA",
    "postalCode": ["30540", "30512"],
    "addressCountry": "US"
  },
  "geo": [
    {
      "@type": "GeoCoordinates",
      "latitude": 34.8657,
      "longitude": -84.8290
    },
    {
      "@type": "GeoCoordinates",
      "latitude": 34.7453,
      "longitude": -83.9501
    }
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "10:00",
      "closes": "18:00"
    }
  ],
  "priceRange": "$$",
  "acceptsReservations": true,
  "areaServed": [
    {
      "@type": "Place",
      "name": "Ellijay, GA"
    },
    {
      "@type": "Place",
      "name": "Blairsville, GA"
    },
    {
      "@type": "Place",
      "name": "Blue Ridge, GA"
    },
    {
      "@type": "Place",
      "name": "Dahlonega, GA"
    },
    {
      "@type": "Place",
      "name": "Jasper, GA"
    },
    {
      "@type": "Place",
      "name": "Helen, GA"
    },
    {
      "@type": "Place",
      "name": "Tallulah Falls, GA"
    }
  ],
  "founder": {
    "@type": "Person",
    "name": "Deanna Stennett",
    "jobTitle": "Licensed Acupuncturist",
    "description": "Georgia licensed acupuncturist with over 30 years of experience. Nationally Certified by the NCCAOM. Clinical supervisor for 20 years at Maryland University of Integrative Health (MUIH). Adjunct Professor in the didactic portion of the Acupuncture Program for 20 years. Author of 'Poetry of the Body: Stories about Acupuncture Points'."
  },
  "sameAs": [
    "https://www.facebook.com/profile.php?id=100077036743165"
  ]
};

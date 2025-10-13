import type { PageContext } from 'vite-plugin-ssr/types';

// Define the LocalBusiness JSON-LD Schema
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "name": "Red Rock Cleans",
  "description": "Secure and compliant government facility cleaning in Las Vegas",
  "serviceType": "Government Facility Cleaning",
  "url": "https://redrockcleans.com/las-vegas/government-facility-cleaning/",
  "telephone": "(702) 508-0098",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "4536 W Warm Springs Rd",
    "addressLocality": "Las Vegas",
    "addressRegion": "NV",
    "postalCode": "89118",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 36.1147,
    "longitude": -115.1728
  },
  "openingHours": "Mo-Su 08:00-18:00",
  "priceRange": "$$",
  "paymentAccepted": "Cash, Credit Card, Check",
  "currenciesAccepted": "USD",
  "areaServed": [
    {
      "@type": "City",
      "name": "Las Vegas",
      "containedInPlace": {
        "@type": "State",
        "name": "Nevada"
      }
    },
    {
      "@type": "City",
      "name": "Henderson",
      "containedInPlace": {
        "@type": "State",
        "name": "Nevada"
      }
    },
    {
      "@type": "City",
      "name": "North Las Vegas",
      "containedInPlace": {
        "@type": "State",
        "name": "Nevada"
      }
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Government Facility Cleaning Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Public Lobby & Office Cleaning",
          "description": "Professional cleaning of reception areas, waiting rooms, and administrative offices that represent government services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Secure Area & Courtroom Cleaning",
          "description": "Specialized protocols for cleaning sensitive or restricted areas including courtrooms and confidential spaces"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Security-Cleared Personnel Services",
          "description": "All staff undergo rigorous background checks and security clearances for government facility access"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "GSA Compliant Cleaning",
          "description": "Adherence to all local, state, and federal standards including GSA compliance when applicable"
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "150"
  },
  "sameAs": [
    "https://www.facebook.com/redrockcleans",
    "https://www.instagram.com/redrockcleans"
  ]
};

export const onBeforeRender = (pageContext: PageContext) => {
  return {
    pageContext: {
      title: "Government Facility Cleaning Las Vegas | Red Rock Cleans",
      description: "Secure and compliant government facility cleaning in Las Vegas. Red Rock Cleans provides discreet, professional cleaning for municipal and federal buildings by security-cleared staff.",
      jsonLdSchema: localBusinessSchema
    }
  };
};

import type { PageContext } from 'vite-plugin-ssr/types';

// Define the LocalBusiness JSON-LD Schema
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "name": "Red Rock Cleans",
  "description": "Professional deep cleaning services on Oahu",
  "serviceType": "Deep Cleaning Service",
  "url": "https://redrockcleans.com/oahu/deep-cleaning-services/",
  "telephone": "(808) 909-8801",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1326 Alapai Street",
    "addressLocality": "Honolulu",
    "addressRegion": "HI",
    "postalCode": "96813",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 21.3099,
    "longitude": -157.8581
  },
  "openingHours": "Mo-Su 08:00-18:00",
  "priceRange": "$$",
  "paymentAccepted": "Cash, Credit Card, Check",
  "currenciesAccepted": "USD",
  "areaServed": [
    {
      "@type": "City",
      "name": "Honolulu",
      "containedInPlace": {
        "@type": "State",
        "name": "Hawaii"
      }
    },
    {
      "@type": "City",
      "name": "Aiea",
      "containedInPlace": {
        "@type": "State",
        "name": "Hawaii"
      }
    },
    {
      "@type": "City",
      "name": "Kailua",
      "containedInPlace": {
        "@type": "State",
        "name": "Hawaii"
      }
    },
    {
      "@type": "City",
      "name": "Ewa Beach",
      "containedInPlace": {
        "@type": "State",
        "name": "Hawaii"
      }
    },
    {
      "@type": "City",
      "name": "Kapolei",
      "containedInPlace": {
        "@type": "State",
        "name": "Hawaii"
      }
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Deep Cleaning Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Deep Cleaning",
          "description": "Intensive cleaning service including inside cabinets, appliances, baseboards, light fixtures, and detailed sanitization for thorough home restoration"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Spring Cleaning",
          "description": "Comprehensive seasonal cleaning service to refresh and restore your home on Oahu"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Intensive House Cleaning",
          "description": "Top-to-bottom cleaning service that tackles built-up grime and creates a healthier living environment"
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
      title: "Deep Cleaning Service Oahu | Red Rock Cleans",
      description: "Restore your home's sparkle with our thorough deep cleaning service on Oahu. Red Rock Cleans tackles built-up grime for a truly refreshed home in Honolulu and beyond. Get your free quote!",
      jsonLdSchema: localBusinessSchema
    }
  };
};

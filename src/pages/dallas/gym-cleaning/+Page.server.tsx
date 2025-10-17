import type { PageContext } from 'vite-plugin-ssr/types';

// Define the LocalBusiness JSON-LD Schema
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "name": "Red Rock Cleans",
  "description": "Professional gym cleaning services in Dallas",
  "serviceType": "Gym Cleaning",
  "url": "https://redrockcleans.com/dallas/gym-cleaning/",
  "telephone": "(972) 992-2576",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "18383 Preston Road # 202",
    "addressLocality": "Dallas",
    "addressRegion": "TX",
    "postalCode": "75252",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 32.7767,
    "longitude": -96.7970
  },
  "openingHours": "Mo-Su 08:00-18:00",
  "priceRange": "$$",
  "paymentAccepted": "Cash, Credit Card, Check",
  "currenciesAccepted": "USD",
  "areaServed": [
    {
      "@type": "City",
      "name": "Dallas",
      "containedInPlace": {
        "@type": "State",
        "name": "Texas"
      }
    },
    {
      "@type": "City",
      "name": "Plano",
      "containedInPlace": {
        "@type": "State",
        "name": "Texas"
      }
    },
    {
      "@type": "City",
      "name": "Frisco",
      "containedInPlace": {
        "@type": "State",
        "name": "Texas"
      }
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Gym Cleaning Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Fitness Equipment Disinfection",
          "description": "Thorough sanitization of workout machines, weights, and all fitness equipment"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Locker Room Sanitation",
          "description": "Deep cleaning and disinfection of locker rooms, showers, and changing areas"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Gym Facility Cleaning",
          "description": "Comprehensive cleaning for health clubs, fitness centers, and athletic facilities"
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
      title: "Gym Cleaning in Dallas | Red Rock Cleans",
      description: "Professional gym cleaning in Dallas. Red Rock Cleans provides hygienic fitness center and health club sanitation, including equipment disinfection and locker room cleaning in Plano and Frisco.",
      jsonLdSchema: localBusinessSchema
    }
  };
};


import type { PageContext } from 'vite-plugin-ssr/types';

// Define the LocalBusiness JSON-LD Schema
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "name": "Red Rock Cleans",
  "description": "Professional school cleaning services in Dallas",
  "serviceType": "School Cleaning",
  "url": "https://redrockcleans.com/dallas/school-cleaning/",
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
    "name": "School Cleaning Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Classroom Disinfection",
          "description": "Thorough cleaning and disinfection of classrooms, desks, and high-touch surfaces"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Cafeteria & Restroom Sanitation",
          "description": "Intensive sanitation protocols for critical areas to prevent illness spread"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Educational Facility Janitorial",
          "description": "Comprehensive janitorial services including floor care, trash removal, and facility maintenance"
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "95"
  },
  "sameAs": [
    "https://www.facebook.com/redrockcleans",
    "https://www.instagram.com/redrockcleans"
  ]
};

export const onBeforeRender = (pageContext: PageContext) => {
  return {
    pageContext: {
      title: "School Cleaning Services in Dallas | Red Rock Cleans",
      description: "Professional school cleaning services in Dallas. Red Rock Cleans provides a safe and healthy learning environment for students in Plano, Frisco, and across the Dallas area.",
      jsonLdSchema: localBusinessSchema
    }
  };
};


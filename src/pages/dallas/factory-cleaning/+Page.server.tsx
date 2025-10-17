import type { PageContext } from 'vite-plugin-ssr/types';

// Define the LocalBusiness JSON-LD Schema
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "name": "Red Rock Cleans",
  "description": "Heavy-duty factory cleaning services in Dallas",
  "serviceType": "Factory Cleaning",
  "url": "https://redrockcleans.com/dallas/factory-cleaning/",
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
    "name": "Factory Cleaning Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Production Floor Cleaning",
          "description": "Heavy-duty sweeping, scrubbing, and degreasing of factory floors"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Machinery Degreasing",
          "description": "Safe cleaning and degreasing of production equipment and machinery"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Industrial Facility Cleaning",
          "description": "Comprehensive OSHA-compliant cleaning for manufacturing facilities"
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
      title: "Factory Cleaning in Dallas | Red Rock Cleans",
      description: "Heavy-duty factory cleaning in Dallas. Red Rock Cleans offers comprehensive cleaning for manufacturing plants in Plano, Frisco, and across the Dallas area to ensure safety and productivity.",
      jsonLdSchema: localBusinessSchema
    }
  };
};


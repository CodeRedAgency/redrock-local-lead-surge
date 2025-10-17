import type { PageContext } from 'vite-plugin-ssr/types';

// Define the LocalBusiness JSON-LD Schema
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "name": "Red Rock Cleans",
  "description": "Heavy-duty industrial cleaning services in Dallas",
  "serviceType": "Industrial Cleaning Services",
  "url": "https://redrockcleans.com/dallas/industrial-cleaning/",
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
  "priceRange": "$$-$$$",
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
    "name": "Industrial Cleaning Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Equipment Degreasing",
          "description": "Industrial-strength degreasing and cleaning of manufacturing equipment and machinery"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Structural Cleaning",
          "description": "High-reach cleaning of ceilings, beams, pipes, and overhead structures"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Industrial Floor Restoration",
          "description": "Heavy-duty floor cleaning, stripping, and sealing for industrial facilities"
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
      title: "Industrial Cleaning Services in Dallas | Red Rock Cleans",
      description: "Heavy-duty industrial cleaning services in Dallas. Red Rock Cleans provides OSHA compliant cleaning for manufacturing plants, equipment, and industrial facilities to ensure safety and uptime.",
      jsonLdSchema: localBusinessSchema
    }
  };
};


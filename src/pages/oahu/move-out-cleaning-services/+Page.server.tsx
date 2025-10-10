import type { PageContext } from 'vite-plugin-ssr/types';

// Define the LocalBusiness JSON-LD Schema
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "name": "Red Rock Cleans",
  "description": "Professional move out cleaning services on Oahu",
  "serviceType": "Move Out Cleaning Service",
  "url": "https://redrockcleans.com/oahu/move-out-cleaning-services/",
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
    "name": "Move Out Cleaning Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Move Out Cleaning",
          "description": "Comprehensive move out cleaning service including inside appliances, cabinets, baseboards, and all areas required for security deposit return"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "End of Tenancy Cleaning",
          "description": "Professional end-of-tenancy cleaning service for renters and property managers on Oahu"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Military Housing Check-out Cleaning",
          "description": "Specialized cleaning service for military housing check-outs and base housing inspections"
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
      title: "Move Out Cleaning Service Oahu | Red Rock Cleans",
      description: "Secure your deposit with our reliable move out cleaning service on Oahu. Red Rock Cleans provides thorough end-of-tenancy cleaning for renters and sellers in Honolulu and beyond. Book today!",
      jsonLdSchema: localBusinessSchema
    }
  };
};

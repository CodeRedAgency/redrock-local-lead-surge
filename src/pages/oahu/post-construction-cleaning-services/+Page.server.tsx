import type { PageContext } from 'vite-plugin-ssr/types';

// Define the LocalBusiness JSON-LD Schema
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "name": "Red Rock Cleans",
  "description": "Professional post construction cleaning services on Oahu",
  "serviceType": "Post Construction Cleaning Service",
  "url": "https://redrockcleans.com/oahu/post-construction-cleaning-services/",
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
      "name": "Kapolei",
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
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Post Construction Cleaning Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Post Construction Cleaning",
          "description": "Comprehensive post construction cleanup including debris removal, fine dust removal, window cleaning, and final detailing for new builds and renovations"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Construction Cleanup",
          "description": "Professional construction site cleanup service for contractors and developers on Oahu"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Final Construction Clean",
          "description": "Detailed final cleaning service to prepare properties for occupancy and final inspections"
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
      title: "Post Construction Cleaning Service Oahu | Red Rock Cleans",
      description: "Professional post construction cleaning on Oahu. Red Rock Cleans handles all construction cleanup for new builds and renovations in Honolulu and beyond. Get a detailed quote today!",
      jsonLdSchema: localBusinessSchema
    }
  };
};

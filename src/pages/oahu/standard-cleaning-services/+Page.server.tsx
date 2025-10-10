import type { PageContext } from 'vite-plugin-ssr/types';

// Define the LocalBusiness JSON-LD Schema
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "name": "Red Rock Cleans",
  "description": "Professional standard cleaning services on Oahu",
  "serviceType": "Standard Cleaning Service",
  "url": "https://redrockcleans.com/oahu/standard-cleaning-services/",
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
    "name": "Standard Cleaning Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Standard Cleaning",
          "description": "Regular recurring cleaning service including dusting, vacuuming, mopping, and sanitizing for consistent home maintenance"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Recurring Cleaning Service",
          "description": "Weekly, bi-weekly, or monthly cleaning services for ongoing home maintenance on Oahu"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Maid Service",
          "description": "Professional maid services for residential cleaning including kitchen, bathroom, and living area maintenance"
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
      title: "Standard Cleaning Service Oahu | Red Rock Cleans",
      description: "Keep your home consistently beautiful with our reliable standard cleaning service on Oahu. Red Rock Cleans offers flexible maid services in Honolulu and beyond. Get your free quote!",
      jsonLdSchema: localBusinessSchema
    }
  };
};

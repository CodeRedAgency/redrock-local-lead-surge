import type { PageContext } from 'vite-plugin-ssr/types';

// Define the LocalBusiness JSON-LD Schema
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "name": "Red Rock Cleans",
  "description": "Professional Airbnb cleaning services on Oahu",
  "serviceType": "Airbnb Cleaning Service",
  "url": "https://redrockcleans.com/oahu/airbnb-cleaning-services/",
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
      "name": "Waikiki",
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
    "name": "Airbnb Cleaning Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Airbnb Cleaning",
          "description": "Professional turnover cleaning service for vacation rentals including sanitization, laundry, restocking, and guest preparation"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Vacation Rental Cleaning",
          "description": "Comprehensive cleaning service for short-term rental properties on Oahu"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "STR Turnover Service",
          "description": "Reliable short-term rental turnover cleaning with quick turnaround times for guest satisfaction"
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
      title: "Airbnb Cleaning Service Oahu | Red Rock Cleans",
      description: "Get 5-star reviews with our reliable Airbnb cleaning service on Oahu. Red Rock Cleans offers automated turnover cleaning for vacation rentals in Honolulu, Waikiki, and beyond.",
      jsonLdSchema: localBusinessSchema
    }
  };
};

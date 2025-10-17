import type { PageContext } from 'vite-plugin-ssr/types';

// Define the LocalBusiness JSON-LD Schema
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "name": "Red Rock Cleans",
  "description": "Professional showroom cleaning services in Dallas",
  "serviceType": "Showroom Cleaning Services",
  "url": "https://redrockcleans.com/dallas/showroom-cleaning/",
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
    "name": "Showroom Cleaning Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Floor Polishing & Care",
          "description": "Professional floor polishing for tile, concrete, and hardwood showroom floors"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Product Display Cleaning",
          "description": "Careful, lint-free cleaning of vehicles, furniture, and other high-value products"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Window & Glass Cleaning",
          "description": "Streak-free cleaning for large plate glass windows and showroom displays"
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "110"
  },
  "sameAs": [
    "https://www.facebook.com/redrockcleans",
    "https://www.instagram.com/redrockcleans"
  ]
};

export const onBeforeRender = (pageContext: PageContext) => {
  return {
    pageContext: {
      title: "Showroom Cleaning Services in Dallas | Red Rock Cleans",
      description: "Professional showroom cleaning in Dallas. Red Rock Cleans enhances your product presentation with meticulous cleaning for car dealerships, furniture stores, and more in Plano and Frisco.",
      jsonLdSchema: localBusinessSchema
    }
  };
};


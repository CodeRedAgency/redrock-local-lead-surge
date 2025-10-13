import type { PageContext } from 'vite-plugin-ssr/types';

// Define the LocalBusiness JSON-LD Schema
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "name": "Red Rock Cleans",
  "description": "Professional gym cleaning in Las Vegas",
  "serviceType": "Gym Cleaning",
  "url": "https://redrockcleans.com/las-vegas/gym-cleaning/",
  "telephone": "(702) 508-0098",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "4536 W Warm Springs Rd",
    "addressLocality": "Las Vegas",
    "addressRegion": "NV",
    "postalCode": "89118",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 36.1147,
    "longitude": -115.1728
  },
  "openingHours": "Mo-Su 08:00-18:00",
  "priceRange": "$$",
  "paymentAccepted": "Cash, Credit Card, Check",
  "currenciesAccepted": "USD",
  "areaServed": [
    {
      "@type": "City",
      "name": "Las Vegas",
      "containedInPlace": {
        "@type": "State",
        "name": "Nevada"
      }
    },
    {
      "@type": "City",
      "name": "Henderson",
      "containedInPlace": {
        "@type": "State",
        "name": "Nevada"
      }
    },
    {
      "@type": "City",
      "name": "Summerlin",
      "containedInPlace": {
        "@type": "State",
        "name": "Nevada"
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
          "name": "Equipment Disinfection",
          "description": "Meticulous disinfection of all workout machines, weights, and high-touch surfaces"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Locker Room & Shower Cleaning",
          "description": "Deep cleaning, sanitizing, and deodorizing to prevent mold, mildew, and odors"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Group Fitness Studio Cleaning",
          "description": "Cleaning specialized flooring, mirrors, and props used in fitness classes"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Anti-Viral Gym Cleaning",
          "description": "Professional protocols designed to stop the spread of bacteria and viruses"
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
      title: "Gym Cleaning Las Vegas | Red Rock Cleans",
      description: "Professional gym cleaning in Las Vegas. Red Rock Cleans provides hygienic fitness center and health club sanitation, including equipment disinfection and locker room cleaning in Henderson and Summerlin.",
      jsonLdSchema: localBusinessSchema
    }
  };
};

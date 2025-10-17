import type { OnBeforeRenderAsync } from 'vite-plugin-ssr/types';

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "name": "Red Rock Cleans",
  "description": "Professional Airbnb cleaning service in Dallas. We provide reliable turnover cleaning services for vacation rentals, short-term rentals, and Airbnb properties throughout the Dallas area.",
  "url": "https://www.redrockcleans.com",
  "telephone": "(972) 992-2576",
  "email": "info@redrockcleans.com",
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
    "latitude": 33.0198,
    "longitude": -96.6989
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "University Park"
    },
    {
      "@type": "City", 
      "name": "Highland Park"
    },
    {
      "@type": "City",
      "name": "Uptown Dallas"
    },
    {
      "@type": "City",
      "name": "Downtown Dallas"
    },
    {
      "@type": "City",
      "name": "Preston Hollow"
    },
    {
      "@type": "City",
      "name": "Plano"
    },
    {
      "@type": "City",
      "name": "Frisco"
    },
    {
      "@type": "City",
      "name": "Prosper"
    }
  ],
  "serviceType": "Airbnb Cleaning Service",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Airbnb Cleaning Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Turnover Cleaning",
          "description": "Complete turnover cleaning including sanitization, laundry, restocking, and professional staging for guest arrivals"
        }
      },
      {
        "@type": "Offer", 
        "itemOffered": {
          "@type": "Service",
          "name": "Calendar Integration",
          "description": "Automated scheduling that syncs with Airbnb booking calendars for seamless turnover coordination"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Guest Amenity Restocking",
          "description": "Restocking of guest essentials and amenities to maintain brand standards and guest satisfaction"
        }
      }
    ]
  },
  "priceRange": "$$",
  "openingHours": "Mo-Su 08:00-18:00",
  "image": "https://www.redrockcleans.com/src/assets/hero-residential.jpg",
  "logo": "https://www.redrockcleans.com/src/assets/logo.png",
  "sameAs": [
    "https://www.facebook.com/redrockcleans",
    "https://www.instagram.com/redrockcleans"
  ]
};

export const onBeforeRender: OnBeforeRenderAsync = async () => {
  return {
    pageContext: {
      title: "Airbnb Cleaning Service in Dallas | Red Rock Cleans",
      description: "Get 5-star reviews with our reliable Airbnb cleaning service in Dallas. Red Rock Cleans offers automated turnover cleaning for vacation rentals in Uptown, Plano, and beyond.",
      jsonLdSchema
    }
  };
};

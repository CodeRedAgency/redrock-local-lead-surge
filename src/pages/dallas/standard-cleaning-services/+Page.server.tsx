import type { OnBeforeRenderAsync } from 'vite-plugin-ssr/types';

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "name": "Red Rock Cleans",
  "description": "Professional standard cleaning service in Dallas. We provide reliable recurring cleaning services that keep your home consistently clean and beautiful, giving you more time to enjoy your life.",
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
  "serviceType": "Standard Cleaning Service",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Standard Cleaning Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Regular House Cleaning",
          "description": "Weekly, bi-weekly, or monthly standard cleaning including dusting, vacuuming, mopping, kitchen and bathroom cleaning"
        }
      },
      {
        "@type": "Offer", 
        "itemOffered": {
          "@type": "Service",
          "name": "Dallas-Specific Maintenance",
          "description": "Standard cleaning tailored for Dallas homes including window sill maintenance, ceiling fan cleaning, and urban-specific upkeep"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Flexible Scheduling",
          "description": "Recurring cleaning service with flexible scheduling options to fit your Dallas lifestyle and preferences"
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
      title: "Standard Cleaning Service Dallas | Red Rock Cleans",
      description: "Keep your Dallas home consistently beautiful with our reliable standard cleaning service. We offer flexible maid services in Plano, Frisco, and beyond. Get your free quote!",
      jsonLdSchema
    }
  };
};

import type { OnBeforeRenderAsync } from 'vite-plugin-ssr/types';

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "name": "Red Rock Cleans",
  "description": "Professional post construction cleaning service in Dallas. We provide comprehensive construction cleanup services for new builds, renovations, and construction projects throughout the Dallas area.",
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
  "serviceType": "Post Construction Cleaning Service",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Post Construction Cleaning Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Construction Debris Removal",
          "description": "Complete removal of construction debris, materials, and fine drywall dust from all surfaces and areas"
        }
      },
      {
        "@type": "Offer", 
        "itemOffered": {
          "@type": "Service",
          "name": "Final Detailing & Safety",
          "description": "Comprehensive final cleaning including fixture polishing, HVAC cleaning, and safety inspections for move-in readiness"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Commercial & Residential Cleanup",
          "description": "Post construction cleaning services for both commercial developments and residential construction projects"
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
      title: "Post Construction Cleaning Service Dallas | Red Rock Cleans",
      description: "Professional post construction cleaning service in Dallas. Red Rock Cleans handles construction cleanup for new builds and renovations in Plano, Frisco, and beyond. Get a detailed quote today!",
      jsonLdSchema
    }
  };
};

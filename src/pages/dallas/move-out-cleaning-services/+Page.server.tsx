import type { OnBeforeRenderAsync } from 'vite-plugin-ssr/types';

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "name": "Red Rock Cleans",
  "description": "Professional move out cleaning service in Dallas. We provide thorough end-of-tenancy cleaning services for renters and homeowners preparing properties for sale throughout the Dallas area.",
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
  "serviceType": "Move Out Cleaning Service",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Move Out Cleaning Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Kitchen & Appliance Deep Clean",
          "description": "Comprehensive kitchen cleaning including inside oven, refrigerator, cabinets, and all appliances for inspection readiness"
        }
      },
      {
        "@type": "Offer", 
        "itemOffered": {
          "@type": "Service",
          "name": "Comprehensive Surface Cleaning",
          "description": "Thorough cleaning of all surfaces including baseboards, closets, light fixtures, and bathrooms for deposit security"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Deposit-Focused Cleaning",
          "description": "Specialized cleaning checklist designed to meet landlord requirements and maximize security deposit returns"
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
      title: "Move Out Cleaning Service Dallas | Red Rock Cleans",
      description: "Secure your deposit with our reliable move out cleaning service in Dallas. We provide thorough end-of-tenancy cleaning in Plano, Frisco, and beyond. Book today!",
      jsonLdSchema
    }
  };
};

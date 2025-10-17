import type { OnBeforeRenderAsync } from 'vite-plugin-ssr/types';

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "name": "Red Rock Cleans",
  "description": "Professional deep cleaning service in Dallas. We provide thorough deep cleaning services that tackle built-up grime, allergens, and dust to restore your home's sparkle and create a healthier living environment.",
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
  "serviceType": "Deep Cleaning Service",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Deep Cleaning Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Intensive Surface Cleaning",
          "description": "Comprehensive deep cleaning including baseboards, inside appliances, light fixtures, grout scrubbing, and detailed surface cleaning"
        }
      },
      {
        "@type": "Offer", 
        "itemOffered": {
          "@type": "Service",
          "name": "Dallas-Specific Deep Clean",
          "description": "Specialized deep cleaning for Dallas homes including dust and pollution removal, window track cleaning, and HVAC maintenance"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Health-Focused Deep Cleaning",
          "description": "Deep cleaning focused on removing allergens, dust, and pollutants to create a healthier living environment for families"
        }
      }
    ]
  },
  "priceRange": "$$",
  "openingHours": "Mo-Su 08:00-18:00",
  "image": "https://www.redrockcleans.com/src/assets/service-products.jpg",
  "logo": "https://www.redrockcleans.com/src/assets/logo.png",
  "sameAs": [
    "https://www.facebook.com/redrockcleans",
    "https://www.instagram.com/redrockcleans"
  ]
};

export const onBeforeRender: OnBeforeRenderAsync = async () => {
  return {
    pageContext: {
      title: "Deep Cleaning Service in Dallas | Red Rock Cleans",
      description: "Restore your home's sparkle with our thorough deep cleaning service in Dallas. We tackle built-up grime for a truly refreshed home in Plano, Frisco, and beyond. Get your free quote!",
      jsonLdSchema
    }
  };
};

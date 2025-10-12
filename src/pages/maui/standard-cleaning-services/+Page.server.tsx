import type { OnBeforeRenderAsync } from 'vite-plugin-ssr/types';

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "name": "Red Rock Cleans",
  "description": "Professional standard cleaning service on Maui. We provide reliable recurring cleaning services that keep your home consistently clean and beautiful, giving you more time to enjoy the island lifestyle.",
  "url": "https://www.redrockcleans.com",
  "telephone": "(808) 909-3038",
  "email": "info@redrockcleans.com",
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
  "areaServed": [
    {
      "@type": "City",
      "name": "Wailea"
    },
    {
      "@type": "City", 
      "name": "Makena"
    },
    {
      "@type": "City",
      "name": "Kihei"
    },
    {
      "@type": "City",
      "name": "Kapalua"
    },
    {
      "@type": "City",
      "name": "Ka'anapali"
    },
    {
      "@type": "City",
      "name": "Lahaina"
    },
    {
      "@type": "City",
      "name": "Spreckelsville"
    },
    {
      "@type": "City",
      "name": "Pa'ia"
    },
    {
      "@type": "City",
      "name": "Kuau"
    },
    {
      "@type": "City",
      "name": "Ha'iku"
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
          "name": "Maui-Specific Maintenance",
          "description": "Standard cleaning tailored for Maui homes including lanai cleaning, window sill maintenance, and island-specific upkeep"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Flexible Scheduling",
          "description": "Recurring cleaning service with flexible scheduling options to fit your Maui lifestyle and preferences"
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
      title: "Standard Cleaning Service Maui | Red Rock Cleans",
      description: "Keep your Maui home consistently beautiful with our reliable standard cleaning service. We offer flexible maid services in Wailea, Kihei, and beyond. Get your free quote!",
      jsonLdSchema
    }
  };
};

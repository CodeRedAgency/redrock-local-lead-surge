import type { OnBeforeRenderAsync } from 'vite-plugin-ssr/types';

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "name": "Red Rock Cleans",
  "description": "Professional deep cleaning service on Maui. We provide thorough deep cleaning services that tackle built-up grime, allergens, and dust to restore your home's sparkle and create a healthier living environment.",
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
  "serviceType": "Deep Cleaning Service",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Deep Cleaning Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Comprehensive Deep Cleaning",
          "description": "Intensive deep cleaning including baseboards, inside appliances, light fixtures, grout scrubbing, and removing sand and salt buildup"
        }
      },
      {
        "@type": "Offer", 
        "itemOffered": {
          "@type": "Service",
          "name": "Maui-Specific Deep Clean",
          "description": "Specialized deep cleaning for Maui homes including salt and sand removal, window track cleaning, and HVAC maintenance"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Health-Focused Deep Cleaning",
          "description": "Deep cleaning focused on removing allergens, dust, and pollutants to create a healthier living environment"
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
      title: "Deep Cleaning Service Maui | Red Rock Cleans",
      description: "Restore your home's sparkle with our thorough deep cleaning service on Maui. Red Rock Cleans tackles built-up grime for a truly refreshed home in Wailea, Lahaina, and beyond. Get your free quote!",
      jsonLdSchema
    }
  };
};

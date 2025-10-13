import type { PageContext } from "vite-plugin-ssr/types";

export { onBeforeRender };

async function onBeforeRender(pageContext: PageContext) {
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "Red Rock Cleans",
    "description": "Professional restaurant cleaning on Maui. Red Rock Cleans helps you pass health inspections and earn 5-star reviews with comprehensive kitchen and dining room cleaning in Lahaina and Kihei.",
    "url": "https://redrockcleans.com/maui/restaurant-cleaning",
    "telephone": "(808) 909-3038",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1326 Alapai Street",
      "addressLocality": "Honolulu",
      "addressRegion": "HI",
      "postalCode": "96813",
      "addressCountry": "US"
    },
    "serviceType": "Restaurant Cleaning",
    "areaServed": {
      "@type": "State",
      "name": "Hawaii"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Restaurant Cleaning Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Kitchen Cleaning",
            "description": "Deep cleaning and degreasing of commercial kitchen equipment and surfaces"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Front-of-House Cleaning",
            "description": "Dining room, entryway, and guest area cleaning services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Bar Area Cleaning",
            "description": "Comprehensive bar and beverage service area sanitation"
          }
        }
      ]
    }
  };

  return {
    pageContext: {
      title: "Restaurant Cleaning Maui | Red Rock Cleans",
      description: "Professional restaurant cleaning on Maui. Red Rock Cleans helps you pass health inspections and earn 5-star reviews with comprehensive kitchen and dining room cleaning in Lahaina and Kihei.",
      jsonLdSchema
    }
  };
}

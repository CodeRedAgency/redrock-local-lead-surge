import type { PageContext } from "vite-plugin-ssr/types";

export { onBeforeRender };

async function onBeforeRender(pageContext: PageContext) {
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "Red Rock Cleans",
    "description": "Professional church cleaning services on Maui. Red Rock Cleans provides respectful, detailed cleaning for places of worship in Wailea, Lahaina, and across the island.",
    "url": "https://redrockcleans.com/maui/church-cleaning",
    "telephone": "(808) 909-3038",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1326 Alapai Street",
      "addressLocality": "Honolulu",
      "addressRegion": "HI",
      "postalCode": "96813",
      "addressCountry": "US"
    },
    "serviceType": "Church Cleaning",
    "areaServed": {
      "@type": "State",
      "name": "Hawaii"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Church Cleaning Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Sanctuary Cleaning",
            "description": "Professional cleaning services for church sanctuaries and worship spaces"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Fellowship Hall Cleaning",
            "description": "Professional cleaning services for church fellowship halls and gathering spaces"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Chapel Cleaning",
            "description": "Professional cleaning services for chapels and prayer rooms"
          }
        }
      ]
    }
  };

  return {
    pageContext: {
      title: "Church Cleaning Maui | Red Rock Cleans",
      description: "Professional church cleaning services on Maui. Red Rock Cleans provides respectful, detailed cleaning for places of worship in Wailea, Lahaina, and across the island.",
      jsonLdSchema
    }
  };
}

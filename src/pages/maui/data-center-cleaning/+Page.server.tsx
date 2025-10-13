import type { PageContext } from "vite-plugin-ssr/types";

export { onBeforeRender };

async function onBeforeRender(pageContext: PageContext) {
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "Red Rock Cleans",
    "description": "Specialized data center cleaning on Maui. Red Rock Cleans offers ISO 14644-1 compliant server room, sub-floor, and critical environment cleaning to ensure uptime.",
    "url": "https://redrockcleans.com/maui/data-center-cleaning",
    "telephone": "(808) 909-3038",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1326 Alapai Street",
      "addressLocality": "Honolulu",
      "addressRegion": "HI",
      "postalCode": "96813",
      "addressCountry": "US"
    },
    "serviceType": "Data Center Cleaning",
    "areaServed": {
      "@type": "State",
      "name": "Hawaii"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Data Center Cleaning Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Server Room Cleaning",
            "description": "ISO 14644-1 compliant server room and critical environment cleaning services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Raised Floor Cleaning",
            "description": "Specialized sub-floor and plenum cleaning for data centers"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Equipment Detailing",
            "description": "Anti-static cleaning of server racks and IT equipment"
          }
        }
      ]
    }
  };

  return {
    pageContext: {
      title: "Data Center Cleaning Maui | Red Rock Cleans",
      description: "Specialized data center cleaning on Maui. Red Rock Cleans offers ISO 14644-1 compliant server room, sub-floor, and critical environment cleaning to ensure uptime.",
      jsonLdSchema
    }
  };
}

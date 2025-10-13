import type { PageContext } from "vite-plugin-ssr/types";

export { onBeforeRender };

async function onBeforeRender(pageContext: PageContext) {
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "Red Rock Cleans",
    "description": "Professional school cleaning services on Maui. Red Rock Cleans provides a safe and healthy learning environment for students in Kihei, Lahaina, and across the island.",
    "url": "https://redrockcleans.com/maui/school-cleaning",
    "telephone": "(808) 909-3038",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1326 Alapai Street",
      "addressLocality": "Honolulu",
      "addressRegion": "HI",
      "postalCode": "96813",
      "addressCountry": "US"
    },
    "serviceType": "School Cleaning",
    "areaServed": {
      "@type": "State",
      "name": "Hawaii"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "School Cleaning Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Classroom Disinfection",
            "description": "Professional sanitization of all classroom surfaces, desks, and learning materials"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Hallway and Common Area Cleaning",
            "description": "High-traffic floor care and sanitization of lockers and common surfaces"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cafeteria and Restroom Sanitization",
            "description": "Intensive sanitation protocols for critical hygiene areas in schools"
          }
        }
      ]
    }
  };

  return {
    pageContext: {
      title: "School Cleaning Services Maui | Red Rock Cleans",
      description: "Professional school cleaning services on Maui. Red Rock Cleans provides a safe and healthy learning environment for students in Kihei, Lahaina, and across the island.",
      jsonLdSchema
    }
  };
}


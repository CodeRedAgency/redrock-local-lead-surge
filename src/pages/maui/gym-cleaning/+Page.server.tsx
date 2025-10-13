import type { PageContext } from "vite-plugin-ssr/types";

export { onBeforeRender };

async function onBeforeRender(pageContext: PageContext) {
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "Red Rock Cleans",
    "description": "Professional gym cleaning on Maui. Red Rock Cleans provides hygienic fitness center and health club sanitation, including equipment disinfection and locker room cleaning in Kihei and Lahaina.",
    "url": "https://redrockcleans.com/maui/gym-cleaning",
    "telephone": "(808) 909-3038",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1326 Alapai Street",
      "addressLocality": "Honolulu",
      "addressRegion": "HI",
      "postalCode": "96813",
      "addressCountry": "US"
    },
    "serviceType": "Gym Cleaning",
    "areaServed": {
      "@type": "State",
      "name": "Hawaii"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Gym Cleaning Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Equipment Disinfection",
            "description": "Professional sanitization of all fitness equipment and high-touch surfaces"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Locker Room Cleaning",
            "description": "Deep cleaning and sanitization of locker rooms and shower facilities"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Group Fitness Studio Cleaning",
            "description": "Specialized cleaning for yoga studios, spin rooms, and group fitness areas"
          }
        }
      ]
    }
  };

  return {
    pageContext: {
      title: "Gym Cleaning Maui | Red Rock Cleans",
      description: "Professional gym cleaning on Maui. Red Rock Cleans provides hygienic fitness center and health club sanitation, including equipment disinfection and locker room cleaning in Kihei and Lahaina.",
      jsonLdSchema
    }
  };
}

import type { PageContext } from "vite-plugin-ssr/types";

export { onBeforeRender };

async function onBeforeRender(pageContext: PageContext) {
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "Red Rock Cleans",
    "description": "Professional showroom cleaning on Maui. Red Rock Cleans enhances your product presentation with meticulous cleaning for car dealerships, furniture stores, and more in Wailea and Lahaina.",
    "url": "https://redrockcleans.com/maui/showroom-cleaning",
    "telephone": "(808) 909-3038",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1326 Alapai Street",
      "addressLocality": "Honolulu",
      "addressRegion": "HI",
      "postalCode": "96813",
      "addressCountry": "US"
    },
    "serviceType": "Showroom Cleaning Services",
    "areaServed": {
      "@type": "State",
      "name": "Hawaii"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Showroom Cleaning Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Floor Care & Polishing",
            "description": "Professional buffing and polishing for tile, concrete, hardwood, and epoxy showroom floors"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Window & Glass Cleaning",
            "description": "Streak-free cleaning for large plate glass windows and display cases"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Product & Display Dusting",
            "description": "Careful, lint-free dusting of all products, vehicles, and merchandise"
          }
        }
      ]
    }
  };

  return {
    pageContext: {
      title: "Showroom Cleaning Services Maui | Red Rock Cleans",
      description: "Professional showroom cleaning on Maui. Red Rock Cleans enhances your product presentation with meticulous cleaning for car dealerships, furniture stores, and more in Wailea and Lahaina.",
      jsonLdSchema
    }
  };
}


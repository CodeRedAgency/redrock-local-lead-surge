import type { PageContext } from "vite-plugin-ssr/types";

export { onBeforeRender };

async function onBeforeRender(pageContext: PageContext) {
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "Red Rock Cleans",
    "description": "Professional retail store cleaning on Maui. Red Rock Cleans helps enhance your brand image and customer experience with spotless storefronts and sales floors in Wailea, Lahaina, and beyond.",
    "url": "https://redrockcleans.com/maui/retail-cleaning",
    "telephone": "(808) 909-3038",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1326 Alapai Street",
      "addressLocality": "Honolulu",
      "addressRegion": "HI",
      "postalCode": "96813",
      "addressCountry": "US"
    },
    "serviceType": "Retail Store Cleaning",
    "areaServed": {
      "@type": "State",
      "name": "Hawaii"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Retail Store Cleaning Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Sales Floor Cleaning",
            "description": "Comprehensive floor care, display dusting, and fixture maintenance"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Storefront Window Cleaning",
            "description": "Professional streak-free window and glass cleaning services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Retail Store Sanitization",
            "description": "High-touch surface disinfection and fitting room cleaning"
          }
        }
      ]
    }
  };

  return {
    pageContext: {
      title: "Retail Store Cleaning Maui | Red Rock Cleans",
      description: "Professional retail store cleaning on Maui. Red Rock Cleans helps enhance your brand image and customer experience with spotless storefronts and sales floors in Wailea, Lahaina, and beyond.",
      jsonLdSchema
    }
  };
}

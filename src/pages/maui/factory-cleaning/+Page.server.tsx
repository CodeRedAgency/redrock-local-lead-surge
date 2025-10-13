import type { PageContext } from "vite-plugin-ssr/types";

export { onBeforeRender };

async function onBeforeRender(pageContext: PageContext) {
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "Red Rock Cleans",
    "description": "Professional factory cleaning on Maui. Red Rock Cleans offers heavy-duty cleaning for manufacturing plants in Lahaina, Kihei, and beyond to ensure safety and productivity.",
    "url": "https://redrockcleans.com/maui/factory-cleaning",
    "telephone": "(808) 909-3038",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1326 Alapai Street",
      "addressLocality": "Honolulu",
      "addressRegion": "HI",
      "postalCode": "96813",
      "addressCountry": "US"
    },
    "serviceType": "Factory Cleaning",
    "areaServed": {
      "@type": "State",
      "name": "Hawaii"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Factory Cleaning Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Production Floor Cleaning",
            "description": "Heavy-duty sweeping, scrubbing, and degreasing for manufacturing floors"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Machinery Cleaning",
            "description": "Safe cleaning and degreasing of production equipment"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "High-Dusting Services",
            "description": "Structural and overhead cleaning for factory facilities"
          }
        }
      ]
    }
  };

  return {
    pageContext: {
      title: "Factory Cleaning Maui | Red Rock Cleans",
      description: "Professional factory cleaning on Maui. Red Rock Cleans offers heavy-duty cleaning for manufacturing plants in Lahaina, Kihei, and beyond to ensure safety and productivity.",
      jsonLdSchema
    }
  };
}

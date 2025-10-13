import type { PageContext } from "vite-plugin-ssr/types";

export { onBeforeRender };

async function onBeforeRender(pageContext: PageContext) {
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "Red Rock Cleans",
    "description": "Heavy-duty industrial cleaning services on Maui. Red Rock Cleans provides OSHA compliant cleaning for manufacturing plants, equipment, and industrial facilities to ensure safety and uptime.",
    "url": "https://redrockcleans.com/maui/industrial-cleaning",
    "telephone": "(808) 909-3038",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1326 Alapai Street",
      "addressLocality": "Honolulu",
      "addressRegion": "HI",
      "postalCode": "96813",
      "addressCountry": "US"
    },
    "serviceType": "Industrial Cleaning Services",
    "areaServed": {
      "@type": "State",
      "name": "Hawaii"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Industrial Cleaning Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Equipment & Machinery Degreasing",
            "description": "Industrial-strength degreasing for production machinery and equipment"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Floor Decontamination",
            "description": "Heavy-duty scrubbing and restoration of industrial flooring"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "High-Surface Cleaning",
            "description": "Structural and overhead cleaning for industrial facilities"
          }
        }
      ]
    }
  };

  return {
    pageContext: {
      title: "Industrial Cleaning Services Maui | Red Rock Cleans",
      description: "Heavy-duty industrial cleaning services on Maui. Red Rock Cleans provides OSHA compliant cleaning for manufacturing plants, equipment, and industrial facilities to ensure safety and uptime.",
      jsonLdSchema
    }
  };
}

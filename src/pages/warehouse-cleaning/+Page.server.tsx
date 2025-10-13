import type { PageContext } from "vite-plugin-ssr/types";

export { onBeforeRender };

async function onBeforeRender(pageContext: PageContext) {
  // Define the Organization JSON-LD Schema for Warehouse Cleaning
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Red Rock Cleans",
    "description": "Professional warehouse cleaning services by Red Rock Cleans. We improve safety and efficiency with comprehensive floor scrubbing, high-bay dusting, and more for logistics centers.",
    "url": "https://redrockcleans.com/warehouse-cleaning/",
    "logo": "https://redrockcleans.com/src/assets/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-888-805-1733",
      "contactType": "customer service"
    },
    "sameAs": [
      "https://www.facebook.com/redrockcleans",
      "https://www.instagram.com/redrockcleans",
      "https://www.linkedin.com/company/redrockcleans"
    ],
    "service": {
      "@type": "Service",
      "name": "Warehouse Cleaning",
      "serviceType": "Industrial Warehouse Cleaning",
      "description": "Professional cleaning services for warehouses, distribution centers, and logistics facilities, including industrial floor scrubbing, high-bay dusting, pallet rack cleaning, loading dock maintenance, and OSHA-compliant safety standards to improve operational efficiency and workplace safety.",
      "areaServed": [
        { "@type": "City", "name": "Las Vegas" },
        { "@type": "City", "name": "Dallas" },
        { "@type": "City", "name": "South Florida" },
        { "@type": "City", "name": "Columbus Ohio" },
        { "@type": "City", "name": "Maui" },
        { "@type": "City", "name": "Oahu" }
      ],
      "hoursAvailable": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "06:00",
          "closes": "22:00"
        }
      ],
      "provider": {
        "@type": "Organization",
        "name": "Red Rock Cleans"
      },
      "offers": {
        "@type": "Offer",
        "priceCurrency": "USD",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "priceType": "fixed",
          "unitText": "hour",
          "price": "Negotiable based on scope"
        }
      }
    }
  };

  return {
    pageContext: {
      title: "Warehouse Cleaning Services | Red Rock Cleans",
      description: "Professional warehouse cleaning services. Red Rock Cleans improves safety and efficiency with comprehensive floor scrubbing, high-bay dusting, and more for logistics centers.",
      jsonLdSchema
    }
  };
}

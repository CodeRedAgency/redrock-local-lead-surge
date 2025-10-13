import type { PageContext } from "vite-plugin-ssr/types";

export { onBeforeRender };

async function onBeforeRender(pageContext: PageContext) {
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "Red Rock Cleans",
    "description": "Professional warehouse cleaning on Maui. Red Rock Cleans improves safety and efficiency with comprehensive floor scrubbing, high-bay dusting, and more for logistics centers.",
    "url": "https://redrockcleans.com/maui/warehouse-cleaning",
    "telephone": "(808) 909-3038",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1326 Alapai Street",
      "addressLocality": "Honolulu",
      "addressRegion": "HI",
      "postalCode": "96813",
      "addressCountry": "US"
    },
    "serviceType": "Warehouse Cleaning",
    "areaServed": {
      "@type": "State",
      "name": "Hawaii"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Warehouse Cleaning Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Floor Scrubbing & Sweeping",
            "description": "Industrial-grade floor cleaning for concrete warehouse floors"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "High-Bay & Racking Dusting",
            "description": "Specialized cleaning of ceilings, beams, and pallet racks using lift equipment"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Loading Dock Cleaning",
            "description": "Maintenance of high-traffic receiving and shipping areas"
          }
        }
      ]
    }
  };

  return {
    pageContext: {
      title: "Warehouse Cleaning Maui | Red Rock Cleans",
      description: "Professional warehouse cleaning on Maui. Red Rock Cleans improves safety and efficiency with comprehensive floor scrubbing, high-bay dusting, and more for logistics centers.",
      jsonLdSchema
    }
  };
}


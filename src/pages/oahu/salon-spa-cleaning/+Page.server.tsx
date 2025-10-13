import type { PageContext } from "vite-plugin-ssr/types";

export { onBeforeRender };

async function onBeforeRender(pageContext: PageContext) {
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "Red Rock Cleans",
    "description": "Professional salon and spa cleaning on Oahu. Red Rock Cleans ensures a pristine, hygienic, and relaxing environment for hair salons, day spas, and medispas in Honolulu and Waikiki.",
    "url": "https://redrockcleans.com/oahu/salon-spa-cleaning",
    "telephone": "(808) 909-8801",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1326 Alapai Street",
      "addressLocality": "Honolulu",
      "addressRegion": "HI",
      "postalCode": "96813",
      "addressCountry": "US"
    },
    "serviceType": "Salon and Spa Cleaning",
    "areaServed": {
      "@type": "State",
      "name": "Hawaii"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Salon and Spa Cleaning Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Salon Cleaning",
            "description": "Professional cleaning services for hair salons and barber shops"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Spa Cleaning",
            "description": "Professional cleaning services for day spas and medispas"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Nail Salon Cleaning",
            "description": "Professional cleaning services for nail salons and pedicure stations"
          }
        }
      ]
    }
  };

  return {
    pageContext: {
      title: "Salon & Spa Cleaning Oahu | Red Rock Cleans",
      description: "Professional salon and spa cleaning on Oahu. Red Rock Cleans ensures a pristine, hygienic, and relaxing environment for hair salons, day spas, and medispas in Honolulu and Waikiki.",
      jsonLdSchema
    }
  };
}


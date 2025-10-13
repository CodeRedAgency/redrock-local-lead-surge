import type { PageContext } from "vite-plugin-ssr/types";

export { onBeforeRender };

async function onBeforeRender(pageContext: PageContext) {
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "Red Rock Cleans",
    "description": "Professional salon and spa cleaning on Maui. Red Rock Cleans ensures a pristine, hygienic, and relaxing environment for hair salons, day spas, and medispas in Wailea, Lahaina, and beyond.",
    "url": "https://redrockcleans.com/maui/salon-spa-cleaning",
    "telephone": "(808) 909-3038",
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
            "name": "Treatment Room Sanitization",
            "description": "Comprehensive cleaning and disinfection of massage tables, facial beds, and styling areas"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Nail Station & Pedicure Chair Cleaning",
            "description": "Deep cleaning and disinfection of foot baths and manicure stations"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Reception Area Maintenance",
            "description": "Spotless cleaning of waiting areas and client-facing spaces"
          }
        }
      ]
    }
  };

  return {
    pageContext: {
      title: "Salon & Spa Cleaning Maui | Red Rock Cleans",
      description: "Professional salon and spa cleaning on Maui. Red Rock Cleans ensures a pristine, hygienic, and relaxing environment for hair salons, day spas, and medispas in Wailea, Lahaina, and beyond.",
      jsonLdSchema
    }
  };
}


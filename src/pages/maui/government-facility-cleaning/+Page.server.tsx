import type { PageContext } from "vite-plugin-ssr/types";

export { onBeforeRender };

async function onBeforeRender(pageContext: PageContext) {
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "Red Rock Cleans",
    "description": "Secure and compliant government facility cleaning on Maui. Red Rock Cleans provides discreet, professional cleaning for municipal and federal buildings by security-cleared staff.",
    "url": "https://redrockcleans.com/maui/government-facility-cleaning",
    "telephone": "(808) 909-3038",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1326 Alapai Street",
      "addressLocality": "Honolulu",
      "addressRegion": "HI",
      "postalCode": "96813",
      "addressCountry": "US"
    },
    "serviceType": "Government Facility Cleaning",
    "areaServed": {
      "@type": "State",
      "name": "Hawaii"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Government Facility Cleaning Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Municipal Building Cleaning",
            "description": "Professional cleaning for government offices and public facilities"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Federal Office Cleaning",
            "description": "GSA-compliant cleaning services for federal government buildings"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Courthouse Cleaning",
            "description": "Secure cleaning services for courtrooms and judicial facilities"
          }
        }
      ]
    }
  };

  return {
    pageContext: {
      title: "Government Facility Cleaning Maui | Red Rock Cleans",
      description: "Secure and compliant government facility cleaning on Maui. Red Rock Cleans provides discreet, professional cleaning for municipal and federal buildings by security-cleared staff.",
      jsonLdSchema
    }
  };
}

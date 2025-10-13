import type { PageContext } from "vite-plugin-ssr/types";

export { onBeforeRender };

async function onBeforeRender(pageContext: PageContext) {
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "Red Rock Cleans",
    "description": "Specialized medical office cleaning on Maui. Red Rock Cleans provides HIPAA and OSHA compliant cleaning for clinics and healthcare facilities in Wailea, Lahaina, and beyond.",
    "url": "https://redrockcleans.com/maui/medical-office-cleaning",
    "telephone": "(808) 909-3038",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1326 Alapai Street",
      "addressLocality": "Honolulu",
      "addressRegion": "HI",
      "postalCode": "96813",
      "addressCountry": "US"
    },
    "serviceType": "Medical Office Cleaning",
    "areaServed": {
      "@type": "State",
      "name": "Hawaii"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Medical Office Cleaning Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Terminal Cleaning",
            "description": "Comprehensive disinfection between patients in exam rooms"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Waiting Room Sanitation",
            "description": "High-touch surface disinfection in patient waiting areas"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Healthcare Facility Cleaning",
            "description": "HIPAA and OSHA compliant cleaning for medical facilities"
          }
        }
      ]
    }
  };

  return {
    pageContext: {
      title: "Medical Office Cleaning Maui | Red Rock Cleans",
      description: "Specialized medical office cleaning on Maui. Red Rock Cleans provides HIPAA and OSHA compliant cleaning for clinics and healthcare facilities in Wailea, Lahaina, and beyond.",
      jsonLdSchema
    }
  };
}

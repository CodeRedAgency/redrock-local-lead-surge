import type { PageContext } from "vite-plugin-ssr/types";

export { onBeforeRender };

async function onBeforeRender(pageContext: PageContext) {
  // Define the Organization JSON-LD Schema for Medical Office Cleaning
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Red Rock Cleans",
    "description": "Specialized medical office cleaning services by Red Rock Cleans. HIPAA and OSHA compliant cleaning for clinics and healthcare facilities to ensure patient safety.",
    "url": "https://redrockcleans.com/medical-office-cleaning/",
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
      "name": "Medical Office Cleaning",
      "serviceType": "Healthcare Facility Cleaning",
      "description": "Professional cleaning services for medical offices, clinics, and healthcare facilities, including HIPAA and OSHA compliant protocols, hospital-grade disinfection, and specialized training in infection control.",
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
      title: "Medical Office Cleaning Services | Red Rock Cleans",
      description: "Specialized medical office cleaning services. Red Rock Cleans provides HIPAA and OSHA compliant cleaning for clinics and healthcare facilities to ensure patient safety. Learn more.",
      jsonLdSchema
    }
  };
}

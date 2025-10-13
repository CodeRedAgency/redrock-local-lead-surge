import type { PageContext } from "vite-plugin-ssr/types";

export { onBeforeRender };

async function onBeforeRender(pageContext: PageContext) {
  // Define the Organization JSON-LD Schema for Salon and Spa Cleaning
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Red Rock Cleans",
    "description": "Professional salon and spa cleaning services by Red Rock Cleans. We ensure pristine, hygienic, and relaxing environments for hair salons, day spas, nail salons, and medispas.",
    "url": "https://redrockcleans.com/salon-spa-cleaning/",
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
      "name": "Salon and Spa Cleaning",
      "serviceType": "Beauty and Wellness Facility Cleaning",
      "description": "Professional cleaning services for hair salons, day spas, nail salons, medispas, and barber shops, including treatment room disinfection, equipment sanitization, reception area maintenance, and health code compliance to create pristine, relaxing environments for clients.",
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
      title: "Salon & Spa Cleaning Services | Red Rock Cleans",
      description: "Professional salon and spa cleaning services. Red Rock Cleans ensures pristine, hygienic, and relaxing environments for hair salons, day spas, nail salons, and medispas.",
      jsonLdSchema
    }
  };
}

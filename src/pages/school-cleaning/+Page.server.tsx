import type { PageContext } from "vite-plugin-ssr/types";

export { onBeforeRender };

async function onBeforeRender(pageContext: PageContext) {
  // Define the Organization JSON-LD Schema for School Cleaning
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Red Rock Cleans",
    "description": "Professional school cleaning services by Red Rock Cleans. We provide a safe and healthy learning environment for students and staff with our comprehensive janitorial services.",
    "url": "https://redrockcleans.com/school-cleaning/",
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
      "name": "School Cleaning",
      "serviceType": "Educational Facility Cleaning",
      "description": "Professional cleaning services for schools, universities, and educational facilities, including classroom cleaning, gymnasium maintenance, cafeteria sanitization, and specialized lab cleaning with green, non-toxic products safe for students and staff.",
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
      title: "School Cleaning Services | Red Rock Cleans",
      description: "Professional school cleaning services. Red Rock Cleans provides a safe and healthy learning environment for students and staff with our comprehensive janitorial services.",
      jsonLdSchema
    }
  };
}

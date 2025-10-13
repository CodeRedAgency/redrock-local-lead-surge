import type { PageContext } from "vite-plugin-ssr/types";

export { onBeforeRender };

async function onBeforeRender(pageContext: PageContext) {
  // Define the Organization JSON-LD Schema for Showroom Cleaning
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Red Rock Cleans",
    "description": "Professional showroom cleaning services by Red Rock Cleans. We enhance your product presentation and client experience with meticulous cleaning for car dealerships, furniture stores, and more.",
    "url": "https://redrockcleans.com/showroom-cleaning/",
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
      "name": "Showroom Cleaning",
      "serviceType": "Showroom and Display Cleaning",
      "description": "Professional cleaning services for showrooms, car dealerships, furniture stores, and luxury retail spaces, including floor polishing, window cleaning, product display maintenance, and client area sanitization to enhance product presentation and create premium client experiences.",
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
      title: "Showroom Cleaning Services | Red Rock Cleans",
      description: "Professional showroom cleaning services. Red Rock Cleans enhances your product presentation and client experience with meticulous cleaning for car dealerships, furniture stores, and more.",
      jsonLdSchema
    }
  };
}

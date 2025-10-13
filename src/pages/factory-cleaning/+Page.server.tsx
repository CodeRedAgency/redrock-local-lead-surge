import type { PageContext } from "vite-plugin-ssr/types";

export { onBeforeRender };

async function onBeforeRender(pageContext: PageContext) {
  // Define the Organization JSON-LD Schema for Factory Cleaning
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Red Rock Cleans",
    "description": "Professional factory cleaning services providing heavy-duty cleaning for manufacturing plants to ensure safety, compliance, and productivity",
    "url": "https://redrockcleans.com/factory-cleaning/",
    "telephone": "(888) 805-1733",
    "email": "info@redrockcleans.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "service": {
      "@type": "Service",
      "name": "Factory Cleaning",
      "serviceType": "Industrial Cleaning",
      "description": "Professional cleaning services for factories, manufacturing plants, and industrial facilities",
      "provider": {
        "@type": "Organization",
        "name": "Red Rock Cleans"
      },
      "areaServed": [
        "Las Vegas, NV",
        "Dallas, TX", 
        "South Florida, FL",
        "Columbus, OH",
        "Maui, HI",
        "Oahu, HI"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Factory Cleaning Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Production Floor Cleaning",
              "description": "Heavy-duty floor degreasing, scrubbing, and pressure washing for manufacturing environments"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Machinery & Equipment Cleaning",
              "description": "Professional cleaning and degreasing of industrial machinery and production equipment"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "High-Dusting & Overhead Cleaning",
              "description": "Ceiling, beam, ductwork, and overhead structure cleaning for industrial facilities"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Industrial Waste Management",
              "description": "Hazardous material cleanup, waste removal, and compliance documentation for manufacturing facilities"
            }
          }
        ]
      }
    },
    "priceRange": "$$$",
    "openingHours": "Mo-Su 00:00-23:59",
    "image": "https://www.redrockcleans.com/src/assets/hero-commercial.jpg",
    "logo": "https://www.redrockcleans.com/src/assets/logo.png",
    "sameAs": [
      "https://www.facebook.com/redrockcleans",
      "https://www.instagram.com/redrockcleans",
      "https://www.linkedin.com/company/redrockcleans"
    ]
  };

  return {
    pageContext: {
      title: "Factory Cleaning Services | Red Rock Cleans",
      description: "Professional factory cleaning services. Red Rock Cleans provides heavy-duty cleaning for manufacturing plants to ensure safety, compliance, and productivity. Learn more.",
      jsonLdSchema
    }
  };
}

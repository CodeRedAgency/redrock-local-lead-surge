import type { PageContext } from "vite-plugin-ssr/types";

export { onBeforeRender };

async function onBeforeRender(pageContext: PageContext) {
  // Define the Organization JSON-LD Schema for Data Center Cleaning
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Red Rock Cleans",
    "description": "Specialized data center cleaning services providing professional server room, sub-floor, and critical environment cleaning to prevent downtime and protect sensitive hardware",
    "url": "https://redrockcleans.com/data-center-cleaning/",
    "telephone": "(888) 805-1733",
    "email": "info@redrockcleans.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "service": {
      "@type": "Service",
      "name": "Data Center Cleaning",
      "serviceType": "Critical Environment Cleaning",
      "description": "Professional cleaning services for data centers, server rooms, and critical infrastructure facilities",
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
        "name": "Data Center Cleaning Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Server Room Cleaning",
              "description": "Professional cleaning of server racks, cabinets, and equipment using anti-static procedures and HEPA-filtered equipment"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Sub-Floor Plenum Cleaning",
              "description": "Specialized cleaning of raised floors, sub-floor areas, and infrastructure to prevent contamination"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Critical Environment Cleaning",
              "description": "ISO 14644-1 compliant cleaning protocols for mission-critical facilities and cleanroom environments"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Data Hall Decontamination",
              "description": "Comprehensive cleaning of data halls, air vents, filters, and cooling systems to maintain optimal performance"
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
      title: "Data Center Cleaning Services | Red Rock Cleans",
      description: "Specialized data center cleaning services. Red Rock Cleans provides professional server room, sub-floor, and critical environment cleaning to prevent downtime. Learn more.",
      jsonLdSchema
    }
  };
}

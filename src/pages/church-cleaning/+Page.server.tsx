import type { PageContext } from "vite-plugin-ssr/types";

export { onBeforeRender };

async function onBeforeRender(pageContext: PageContext) {
  // Define the Organization JSON-LD Schema for Church Cleaning
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Red Rock Cleans",
    "description": "Professional church cleaning services providing respectful, detailed cleaning for sanctuaries, fellowship halls, and all places of worship",
    "url": "https://redrockcleans.com/church-cleaning/",
    "telephone": "(888) 805-1733",
    "email": "info@redrockcleans.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "service": {
      "@type": "Service",
      "name": "Church Cleaning",
      "serviceType": "Religious Facility Cleaning",
      "description": "Professional cleaning services for churches, sanctuaries, fellowship halls, and places of worship",
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
        "name": "Church Cleaning Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Sanctuary Cleaning",
              "description": "Gentle, respectful cleaning of worship areas including pews, altars, and sacred spaces"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Fellowship Hall Maintenance",
              "description": "Kitchen, dining, and community area cleaning for church events and gatherings"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Classroom & Office Cleaning",
              "description": "Educational and administrative area maintenance for church programs"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Specialized Religious Facility Cleaning",
              "description": "Care for musical instruments, baptismal fonts, and other sacred items"
            }
          }
        ]
      }
    },
    "priceRange": "$$",
    "openingHours": "Mo-Su 08:00-18:00",
    "image": "https://www.redrockcleans.com/src/assets/hero-residential.jpg",
    "logo": "https://www.redrockcleans.com/src/assets/logo.png",
    "sameAs": [
      "https://www.facebook.com/redrockcleans",
      "https://www.instagram.com/redrockcleans",
      "https://www.linkedin.com/company/redrockcleans"
    ]
  };

  return {
    pageContext: {
      title: "Church Cleaning Services | Red Rock Cleans",
      description: "Professional church cleaning services by Red Rock Cleans. We provide respectful, detailed cleaning for sanctuaries, fellowship halls, and all places of worship. Learn more.",
      jsonLdSchema
    }
  };
}

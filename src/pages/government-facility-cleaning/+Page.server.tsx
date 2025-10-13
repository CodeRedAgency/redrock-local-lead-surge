import type { PageContext } from "vite-plugin-ssr/types";

export { onBeforeRender };

async function onBeforeRender(pageContext: PageContext) {
  // Define the Organization JSON-LD Schema for Government Facility Cleaning
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Red Rock Cleans",
    "description": "Secure and compliant government facility cleaning services providing discreet, professional cleaning for municipal, federal, and public buildings by security-cleared staff",
    "url": "https://redrockcleans.com/government-facility-cleaning/",
    "telephone": "(888) 805-1733",
    "email": "info@redrockcleans.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "service": {
      "@type": "Service",
      "name": "Government Facility Cleaning",
      "serviceType": "Secure Facility Cleaning",
      "description": "Professional cleaning services for government facilities, municipal buildings, and public offices with security-cleared personnel",
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
        "name": "Government Facility Cleaning Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Municipal Building Cleaning",
              "description": "Professional cleaning services for city halls, municipal offices, and local government facilities with security-cleared staff"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Federal Office Cleaning",
              "description": "Secure cleaning services for federal buildings and government offices with strict confidentiality protocols and compliance reporting"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Courthouse Cleaning",
              "description": "Specialized cleaning for courthouses, courtrooms, and judicial facilities with evidence-safe protocols and secure document handling"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Public Building Sanitation",
              "description": "Comprehensive cleaning services for public buildings, libraries, and community facilities with GSA compliance and detailed reporting"
            }
          }
        ]
      }
    },
    "priceRange": "$$$",
    "openingHours": "Mo-Fr 06:00-22:00",
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
      title: "Government Facility Cleaning Services | Red Rock Cleans",
      description: "Secure and compliant government facility cleaning. Red Rock Cleans provides discreet, professional cleaning for municipal, federal, and public buildings by security-cleared staff.",
      jsonLdSchema
    }
  };
}

import type { PageContext } from "vite-plugin-ssr/types";

export { onBeforeRender };

async function onBeforeRender(pageContext: PageContext) {
  // Define the Organization JSON-LD Schema for Gym Cleaning
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Red Rock Cleans",
    "description": "Professional gym cleaning and sanitation services providing comprehensive fitness center cleaning to keep members safe and satisfied",
    "url": "https://redrockcleans.com/gym-cleaning/",
    "telephone": "(888) 805-1733",
    "email": "info@redrockcleans.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "service": {
      "@type": "Service",
      "name": "Gym Cleaning",
      "serviceType": "Fitness Center Cleaning",
      "description": "Professional cleaning and sanitation services for gyms, fitness centers, and health clubs",
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
        "name": "Gym Cleaning Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Equipment & Workout Area Cleaning",
              "description": "Comprehensive cleaning and disinfection of gym equipment, free weights, cardio machines, and workout areas"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Locker Room & Shower Sanitization",
              "description": "Deep cleaning and sanitization of locker rooms, showers, and wet areas with mold and mildew prevention"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Group Fitness Studio Cleaning",
              "description": "Specialized cleaning for group fitness studios, yoga rooms, and multi-purpose spaces with floor and equipment sanitization"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Reception & Common Area Maintenance",
              "description": "Front desk, reception area, and common space cleaning to create welcoming first impressions for members"
            }
          }
        ]
      }
    },
    "priceRange": "$$",
    "openingHours": "Mo-Su 05:00-23:00",
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
      title: "Gym Cleaning Services | Red Rock Cleans",
      description: "Professional gym cleaning and sanitation services. Red Rock Cleans helps keep your members safe and satisfied with comprehensive fitness center cleaning. Learn more.",
      jsonLdSchema
    }
  };
}

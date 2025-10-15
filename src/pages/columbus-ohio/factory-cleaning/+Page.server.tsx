import type { PageContext } from "vite-plugin-ssr/types";

export { onBeforeRender };

async function onBeforeRender(pageContext: PageContext) {
  // Define the LocalBusiness JSON-LD Schema
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "Red Rock Cleans",
    "description": "Professional factory cleaning in Columbus, Ohio. Heavy-duty cleaning for manufacturing plants in Dublin, Westerville, and beyond to ensure safety and productivity.",
    "url": "https://redrockcleans.com/columbus-ohio/factory-cleaning/",
    "telephone": "(380) 235-3135",
    "email": "info@redrockcleans.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "6605 Longshore Street Suite 240-320",
      "addressLocality": "Dublin",
      "addressRegion": "OH",
      "postalCode": "43017",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "40.0992",
      "longitude": "-83.1141"
    },
    "openingHours": "Mo-Su 00:00-23:59",
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "40.0992",
        "longitude": "-83.1141"
      },
      "geoRadius": "50000"
    },
    "serviceType": "Factory Cleaning",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Factory Cleaning Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Production Floor Cleaning",
            "description": "Heavy-duty sweeping, scrubbing, and degreasing of factory floors and production areas"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Machinery & Equipment Cleaning",
            "description": "Safe cleaning and degreasing of production equipment and manufacturing machinery"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "High-Dusting & Structural Cleaning",
            "description": "Cleaning of ceilings, rafters, pipes, and overhead structures in manufacturing facilities"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "OSHA Compliant Cleaning",
            "description": "Factory cleaning services that meet OSHA safety standards and compliance requirements"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Industrial Debris Removal",
            "description": "Removal of manufacturing waste, debris, and contaminants from production facilities"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Manufacturing Facility Maintenance",
            "description": "Regular maintenance cleaning programs for Columbus manufacturing plants and factories"
          }
        }
      ]
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Dublin",
        "containedInPlace": {
          "@type": "State",
          "name": "Ohio"
        }
      },
      {
        "@type": "City",
        "name": "Upper Arlington",
        "containedInPlace": {
          "@type": "State",
          "name": "Ohio"
        }
      },
      {
        "@type": "City",
        "name": "Powell",
        "containedInPlace": {
          "@type": "State",
          "name": "Ohio"
        }
      },
      {
        "@type": "City",
        "name": "Lewis Center",
        "containedInPlace": {
          "@type": "State",
          "name": "Ohio"
        }
      },
      {
        "@type": "City",
        "name": "Worthington",
        "containedInPlace": {
          "@type": "State",
          "name": "Ohio"
        }
      },
      {
        "@type": "City",
        "name": "New Albany",
        "containedInPlace": {
          "@type": "State",
          "name": "Ohio"
        }
      },
      {
        "@type": "City",
        "name": "Bexley",
        "containedInPlace": {
          "@type": "State",
          "name": "Ohio"
        }
      },
      {
        "@type": "City",
        "name": "German Village",
        "containedInPlace": {
          "@type": "State",
          "name": "Ohio"
        }
      },
      {
        "@type": "City",
        "name": "Short North",
        "containedInPlace": {
          "@type": "State",
          "name": "Ohio"
        }
      },
      {
        "@type": "City",
        "name": "Victorian Village",
        "containedInPlace": {
          "@type": "State",
          "name": "Ohio"
        }
      },
      {
        "@type": "City",
        "name": "Hilliard",
        "containedInPlace": {
          "@type": "State",
          "name": "Ohio"
        }
      },
      {
        "@type": "City",
        "name": "Westerville",
        "containedInPlace": {
          "@type": "State",
          "name": "Ohio"
        }
      }
    ],
    "priceRange": "$$$",
    "paymentAccepted": ["Cash", "Check", "Credit Card"],
    "currenciesAccepted": "USD",
    "sameAs": [
      "https://www.facebook.com/redrockcleans",
      "https://www.instagram.com/redrockcleans",
      "https://www.linkedin.com/company/redrockcleans"
    ]
  };

  return {
    pageContext: {
      title: "Factory Cleaning Columbus Ohio | Red Rock Cleans",
      description: "Professional factory cleaning in Columbus, OH. Red Rock Cleans offers heavy-duty cleaning for manufacturing plants in Dublin, Westerville, and beyond to ensure safety and productivity.",
      jsonLdSchema
    }
  };
}


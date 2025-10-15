import type { PageContext } from "vite-plugin-ssr/types";

export { onBeforeRender };

async function onBeforeRender(pageContext: PageContext) {
  // Define the LocalBusiness JSON-LD Schema
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "Red Rock Cleans",
    "description": "Heavy-duty industrial cleaning services in Columbus, Ohio. OSHA compliant cleaning for manufacturing plants and facilities in Dublin, Westerville, and beyond.",
    "url": "https://redrockcleans.com/columbus-ohio/industrial-cleaning/",
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
    "serviceType": "Industrial Cleaning Services",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Industrial Cleaning Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Equipment & Machinery Degreasing",
            "description": "Heavy-duty degreasing and cleaning of industrial equipment and production machinery"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "High-Surface & Structural Cleaning",
            "description": "Cleaning of ceilings, beams, pipes, and overhead structures in industrial facilities"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Industrial Floor Decontamination",
            "description": "Heavy-duty scrubbing, stripping, and sealing of industrial flooring"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "OSHA Compliant Industrial Cleaning",
            "description": "Safety-focused industrial cleaning that meets OSHA regulations and standards"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Manufacturing Facility Cleaning",
            "description": "Comprehensive cleaning services for manufacturing plants and production facilities"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Industrial Pressure Washing",
            "description": "High-pressure cleaning for exterior surfaces, equipment, and loading areas"
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
      title: "Industrial Cleaning Services Columbus Ohio | Red Rock Cleans",
      description: "Heavy-duty industrial cleaning services in Columbus, OH. Red Rock Cleans provides OSHA compliant cleaning for manufacturing plants and facilities in Dublin, Westerville, and beyond.",
      jsonLdSchema
    }
  };
}


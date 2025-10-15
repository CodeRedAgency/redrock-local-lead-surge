import type { PageContext } from "vite-plugin-ssr/types";

export { onBeforeRender };

async function onBeforeRender(pageContext: PageContext) {
  // Define the LocalBusiness JSON-LD Schema
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "Red Rock Cleans",
    "description": "Professional warehouse cleaning in Columbus, Ohio. Comprehensive floor scrubbing, high-bay dusting, and more for logistics centers to improve safety and efficiency.",
    "url": "https://redrockcleans.com/columbus-ohio/warehouse-cleaning/",
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
    "serviceType": "Warehouse Cleaning",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Warehouse Cleaning Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Warehouse Floor Scrubbing",
            "description": "Industrial-grade floor scrubbing and sweeping for warehouse concrete floors"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "High-Bay Dusting",
            "description": "Cleaning of warehouse ceilings, beams, and elevated pallet racking systems"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Loading Dock Cleaning",
            "description": "Maintenance of loading docks, receiving areas, and high-traffic warehouse zones"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Distribution Center Cleaning",
            "description": "Comprehensive cleaning for distribution centers and fulfillment facilities"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "OSHA Compliant Cleaning",
            "description": "Warehouse cleaning services that meet OSHA safety and compliance standards"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Warehouse Office Cleaning",
            "description": "Cleaning of warehouse offices, break rooms, and employee facilities"
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
    "priceRange": "$$",
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
      title: "Warehouse Cleaning Columbus Ohio | Red Rock Cleans",
      description: "Professional warehouse cleaning in Columbus, OH. Red Rock Cleans improves safety and efficiency with comprehensive floor scrubbing, high-bay dusting, and more for logistics centers.",
      jsonLdSchema
    }
  };
}


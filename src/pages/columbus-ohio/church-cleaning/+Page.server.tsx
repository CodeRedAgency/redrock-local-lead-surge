import type { PageContext } from "vite-plugin-ssr/types";

export { onBeforeRender };

async function onBeforeRender(pageContext: PageContext) {
  // Define the LocalBusiness JSON-LD Schema
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "Red Rock Cleans",
    "description": "Professional church cleaning services in Columbus, Ohio. Respectful, detailed cleaning for places of worship in Dublin, Upper Arlington, and across the area.",
    "url": "https://redrockcleans.com/columbus-ohio/church-cleaning/",
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
    "serviceType": "Church Cleaning",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Church Cleaning Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Sanctuary Cleaning",
            "description": "Respectful cleaning of worship areas, pews, altars, and sacred spaces"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Fellowship Hall Cleaning",
            "description": "Complete cleaning of fellowship halls and community gathering spaces"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Church Restroom Sanitization",
            "description": "Thorough sanitization of church restrooms and facilities"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Religious Facility Deep Cleaning",
            "description": "Comprehensive deep cleaning for churches and places of worship"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Church Kitchen Cleaning",
            "description": "Professional cleaning of church kitchens and food preparation areas"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Special Event Cleaning",
            "description": "Pre and post-event cleaning for religious ceremonies and gatherings"
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
      title: "Church Cleaning Columbus Ohio | Red Rock Cleans",
      description: "Professional church cleaning services in Columbus, OH. Red Rock Cleans provides respectful, detailed cleaning for places of worship in Dublin, Upper Arlington, and across the area.",
      jsonLdSchema
    }
  };
}


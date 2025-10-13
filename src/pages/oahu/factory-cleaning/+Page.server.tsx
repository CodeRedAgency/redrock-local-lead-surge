import { PageContext } from "vite-plugin-ssr/types";

// Define the LocalBusiness JSON-LD Schema
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "name": "Red Rock Cleans",
  "description": "Professional factory cleaning on Oahu. Red Rock Cleans offers heavy-duty cleaning for manufacturing plants in Honolulu, Kapolei, and beyond to ensure safety and productivity.",
  "url": "https://redrockcleans.com/oahu/factory-cleaning",
  "telephone": "(808) 909-8801",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1326 Alapai Street",
    "addressLocality": "Honolulu",
    "addressRegion": "HI",
    "postalCode": "96813",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "21.3099",
    "longitude": "-157.8581"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Honolulu",
      "containedInPlace": {
        "@type": "State",
        "name": "Hawaii"
      }
    },
    {
      "@type": "City",
      "name": "Kapolei",
      "containedInPlace": {
        "@type": "State",
        "name": "Hawaii"
      }
    },
    {
      "@type": "City",
      "name": "Aiea",
      "containedInPlace": {
        "@type": "State",
        "name": "Hawaii"
      }
    },
    {
      "@type": "City",
      "name": "Pearl City",
      "containedInPlace": {
        "@type": "State",
        "name": "Hawaii"
      }
    },
    {
      "@type": "City",
      "name": "Waipahu",
      "containedInPlace": {
        "@type": "State",
        "name": "Hawaii"
      }
    },
    {
      "@type": "City",
      "name": "Ewa Beach",
      "containedInPlace": {
        "@type": "State",
        "name": "Hawaii"
      }
    },
    {
      "@type": "City",
      "name": "Mililani",
      "containedInPlace": {
        "@type": "State",
        "name": "Hawaii"
      }
    },
    {
      "@type": "City",
      "name": "Kailua",
      "containedInPlace": {
        "@type": "State",
        "name": "Hawaii"
      }
    },
    {
      "@type": "City",
      "name": "Kaneohe",
      "containedInPlace": {
        "@type": "State",
        "name": "Hawaii"
      }
    },
    {
      "@type": "City",
      "name": "Hawaii Kai",
      "containedInPlace": {
        "@type": "State",
        "name": "Hawaii"
      }
    },
    {
      "@type": "City",
      "name": "Makakilo",
      "containedInPlace": {
        "@type": "State",
        "name": "Hawaii"
      }
    },
    {
      "@type": "City",
      "name": "Waikiki",
      "containedInPlace": {
        "@type": "State",
        "name": "Hawaii"
      }
    },
    {
      "@type": "City",
      "name": "Waimanalo",
      "containedInPlace": {
        "@type": "State",
        "name": "Hawaii"
      }
    },
    {
      "@type": "City",
      "name": "Waialae",
      "containedInPlace": {
        "@type": "State",
        "name": "Hawaii"
      }
    }
  ],
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
          "description": "Heavy-duty sweeping, scrubbing, and degreasing of concrete floors"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Machinery & Equipment Cleaning",
          "description": "Safely cleaning and degreasing production equipment"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "High-Dusting & Structural Cleaning",
          "description": "Cleaning ceilings, pipes, and rafters to remove accumulated dust and debris"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Common Areas & Restrooms Cleaning",
          "description": "Detail services for break rooms, offices, and sanitation facilities"
        }
      }
    ]
  },
  "priceRange": "$$",
  "paymentAccepted": ["Cash", "Check", "Credit Card", "Invoice"],
  "openingHours": "Mo-Fr 06:00-18:00,Sa 07:00-16:00",
  "sameAs": [
    "https://www.facebook.com/redrockcleans",
    "https://www.instagram.com/redrockcleans",
    "https://www.linkedin.com/company/redrockcleans"
  ]
};

export { onBeforeRender };

async function onBeforeRender(pageContext: PageContext) {
  return {
    pageContext: {
      title: "Factory Cleaning Oahu | Red Rock Cleans",
      description: "Professional factory cleaning on Oahu. Red Rock Cleans offers heavy-duty cleaning for manufacturing plants in Honolulu, Kapolei, and beyond to ensure safety and productivity.",
      jsonLdSchema: localBusinessSchema
    }
  };
}

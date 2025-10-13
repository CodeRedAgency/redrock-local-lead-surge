import { PageContext } from "vite-plugin-ssr/types";

// Define the LocalBusiness JSON-LD Schema
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "name": "Red Rock Cleans",
  "description": "Secure and compliant government facility cleaning on Oahu. Red Rock Cleans provides discreet, professional cleaning for municipal and federal buildings in Honolulu and across the island by security-cleared staff.",
  "url": "https://redrockcleans.com/oahu/government-facility-cleaning",
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
  "serviceType": "Government Facility Cleaning",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Government Facility Cleaning Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Public Lobbies & Offices Cleaning",
          "description": "Maintaining a professional public image with thorough cleaning of reception areas, waiting rooms, and administrative offices"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Secure Areas & Courtrooms Cleaning",
          "description": "Protocols for cleaning sensitive or restricted areas with security and confidentiality measures"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Common Areas & Restrooms Cleaning",
          "description": "High-traffic sanitation for break rooms, conference areas, and public restrooms"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Security-Cleared Personnel Services",
          "description": "Background-checked staff with security clearances for sensitive government facilities"
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
      title: "Government Facility Cleaning Oahu | Red Rock Cleans",
      description: "Secure and compliant government facility cleaning on Oahu. Red Rock Cleans provides discreet, professional cleaning for municipal and federal buildings in Honolulu and across the island by security-cleared staff.",
      jsonLdSchema: localBusinessSchema
    }
  };
}

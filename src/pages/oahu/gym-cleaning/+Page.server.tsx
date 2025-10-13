import { PageContext } from "vite-plugin-ssr/types";

// Define the LocalBusiness JSON-LD Schema
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "name": "Red Rock Cleans",
  "description": "Professional gym cleaning on Oahu. Red Rock Cleans provides hygienic fitness center and health club sanitation, including equipment disinfection and locker room cleaning in Honolulu and Kailua.",
  "url": "https://redrockcleans.com/oahu/gym-cleaning",
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
  "serviceType": "Gym Cleaning",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Gym Cleaning Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Workout & Equipment Areas Cleaning",
          "description": "Sanitizing all fitness equipment, mats, and benches with gym-safe disinfectants"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Locker Rooms & Showers Cleaning",
          "description": "Deep cleaning, sanitizing, and deodorizing to prevent mold, mildew, and odors"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Group Fitness Studios Cleaning",
          "description": "Cleaning specialized flooring, mirrors, and props for yoga, Pilates, and group classes"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Reception & High-Traffic Zones Cleaning",
          "description": "Maintaining a sparkling first impression and disinfecting entry points, front desk, and common areas"
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
      title: "Gym Cleaning Oahu | Red Rock Cleans",
      description: "Professional gym cleaning on Oahu. Red Rock Cleans provides hygienic fitness center and health club sanitation, including equipment disinfection and locker room cleaning in Honolulu and Kailua.",
      jsonLdSchema: localBusinessSchema
    }
  };
}

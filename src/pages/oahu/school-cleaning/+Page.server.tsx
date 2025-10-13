import { PageContext } from "vite-plugin-ssr/types";

export async function onBeforeRender(pageContext: PageContext) {
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "Red Rock Cleans",
    "description": "Professional school cleaning services on Oahu",
    "url": "https://redrockcleans.com/oahu/school-cleaning/",
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
      "Aiea",
      "Ewa Beach", 
      "Hawaii Kai",
      "Honolulu",
      "Kailua",
      "Kapolei",
      "Makakilo",
      "Mililani",
      "Pearl City",
      "Waialae",
      "Waikiki",
      "Waimanalo",
      "Waipahu"
    ],
    "serviceType": "School Cleaning",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "School Cleaning Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "School Cleaning",
            "description": "Professional school cleaning services including classroom disinfection, cafeteria sanitation, gymnasium cleaning, and restroom maintenance"
          }
        }
      ]
    },
    "sameAs": [
      "https://www.facebook.com/redrockcleans",
      "https://www.instagram.com/redrockcleans",
      "https://www.linkedin.com/company/redrockcleans"
    ]
  };

  return {
    pageContext: {
      title: "School Cleaning Services Oahu | Red Rock Cleans",
      description: "Professional school cleaning services on Oahu. Red Rock Cleans provides a safe and healthy learning environment for students in Honolulu, Kailua, and across the island.",
      jsonLdSchema
    }
  };
}


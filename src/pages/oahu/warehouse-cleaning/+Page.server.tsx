import { PageContext } from "vite-plugin-ssr/types";

export async function onBeforeRender(pageContext: PageContext) {
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "Red Rock Cleans",
    "description": "Professional warehouse cleaning services on Oahu",
    "url": "https://redrockcleans.com/oahu/warehouse-cleaning/",
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
    "serviceType": "Warehouse Cleaning",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Warehouse Cleaning Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Warehouse Cleaning",
            "description": "Professional warehouse cleaning services including floor scrubbing, high-bay dusting, pallet rack cleaning, and loading dock maintenance"
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
      title: "Warehouse Cleaning Oahu | Red Rock Cleans",
      description: "Professional warehouse cleaning on Oahu. Red Rock Cleans improves safety and efficiency with comprehensive floor scrubbing, high-bay dusting, and more for logistics centers in Honolulu and Kapolei.",
      jsonLdSchema
    }
  };
}


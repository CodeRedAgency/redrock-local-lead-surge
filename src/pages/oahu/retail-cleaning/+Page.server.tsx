import { PageContext } from "vite-plugin-ssr/types";

export async function onBeforeRender(pageContext: PageContext) {
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "Red Rock Cleans",
    "description": "Professional retail store cleaning services on Oahu",
    "url": "https://redrockcleans.com/oahu/retail-cleaning/",
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
    "serviceType": "Retail Store Cleaning",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Retail Store Cleaning Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Retail Store Cleaning",
            "description": "Professional retail store cleaning services including floor care, window cleaning, fitting room maintenance, and display case cleaning"
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
      title: "Retail Store Cleaning Oahu | Red Rock Cleans",
      description: "Professional retail store cleaning on Oahu. Red Rock Cleans helps enhance your brand image and customer experience with spotless storefronts and sales floors in Honolulu, Waikiki, and beyond.",
      jsonLdSchema
    }
  };
}


import { PageContext } from "vite-plugin-ssr/types";

export async function onBeforeRender(pageContext: PageContext) {
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "Red Rock Cleans",
    "description": "Professional showroom cleaning services on Oahu",
    "url": "https://redrockcleans.com/oahu/showroom-cleaning/",
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
    "serviceType": "Showroom Cleaning Services",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Showroom Cleaning Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Showroom Cleaning",
            "description": "Professional showroom cleaning services including floor polishing, window cleaning, product dusting, and client area maintenance"
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
      title: "Showroom Cleaning Services Oahu | Red Rock Cleans",
      description: "Professional showroom cleaning on Oahu. Red Rock Cleans enhances your product presentation with meticulous cleaning for car dealerships, furniture stores, and more in Honolulu and Waikiki.",
      jsonLdSchema
    }
  };
}


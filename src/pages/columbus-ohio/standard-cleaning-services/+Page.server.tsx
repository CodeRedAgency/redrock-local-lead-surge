import type { PageContext } from "vite-plugin-ssr/types";

export { onBeforeRender };

async function onBeforeRender(pageContext: PageContext) {
  // Define the LocalBusiness JSON-LD Schema
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "Red Rock Cleans",
    "description": "Professional standard cleaning services in Columbus, Ohio",
    "url": "https://redrockcleans.com/columbus-ohio/standard-cleaning-services/",
    "telephone": "(380) 235-3135",
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
    "serviceType": "Standard Cleaning Service",
    "areaServed": [
      "Columbus, OH",
      "Dublin, OH",
      "Upper Arlington, OH",
      "Powell, OH",
      "Lewis Center, OH",
      "Worthington, OH",
      "New Albany, OH",
      "Bexley, OH",
      "German Village, OH",
      "Short North, OH",
      "Victorian Village, OH",
      "Hilliard, OH",
      "Westerville, OH"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Standard Cleaning Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Standard Cleaning Service",
            "description": "Regular recurring cleaning service including dusting, vacuuming, mopping, and sanitizing"
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
      title: "Standard Cleaning Service Columbus Ohio | Red Rock Cleans",
      description: "Keep your Columbus home consistently beautiful with our reliable standard cleaning service. We offer flexible maid services in Dublin, Upper Arlington, and beyond. Get your free quote!",
      jsonLdSchema
    }
  };
}

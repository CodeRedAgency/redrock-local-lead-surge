import type { PageContext } from "vite-plugin-ssr/types";

export { onBeforeRender };

async function onBeforeRender(pageContext: PageContext) {
  // Define the LocalBusiness JSON-LD Schema
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "Red Rock Cleans",
    "description": "Professional post construction cleaning services in Columbus, Ohio",
    "url": "https://redrockcleans.com/columbus-ohio/post-construction-cleaning-services/",
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
    "serviceType": "Post Construction Cleaning Service",
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
      "name": "Post Construction Cleaning Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Post Construction Cleaning Service",
            "description": "Comprehensive post construction cleaning including debris removal, dust cleanup, window cleaning, fixture polishing, and final inspection-ready cleaning for new builds and renovations"
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
      title: "Post Construction Cleaning Service Columbus Ohio | Red Rock Cleans",
      description: "Professional post construction cleaning in Columbus, OH. Red Rock Cleans handles construction cleanup for new builds and renovations in Dublin, Upper Arlington, and beyond. Get a detailed quote!",
      jsonLdSchema
    }
  };
}

import type { PageContext } from "vite-plugin-ssr/types";

export { onBeforeRender };

async function onBeforeRender(pageContext: PageContext) {
  // Define the LocalBusiness JSON-LD Schema
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "Red Rock Cleans",
    "description": "Professional deep cleaning services in Columbus, Ohio",
    "url": "https://redrockcleans.com/columbus-ohio/deep-cleaning-services/",
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
    "serviceType": "Deep Cleaning Service",
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
      "name": "Deep Cleaning Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Deep Cleaning Service",
            "description": "Comprehensive deep cleaning including inside cabinets, appliances, baseboards, light fixtures, and detailed grout scrubbing"
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
      title: "Deep Cleaning Service in Columbus Ohio | Red Rock Cleans",
      description: "Restore your home's sparkle with our thorough deep cleaning service in Columbus, OH. We tackle built-up grime for a truly refreshed home in Dublin, Upper Arlington, and beyond.",
      jsonLdSchema
    }
  };
}

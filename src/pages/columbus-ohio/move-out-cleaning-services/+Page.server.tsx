import type { PageContext } from "vite-plugin-ssr/types";

export { onBeforeRender };

async function onBeforeRender(pageContext: PageContext) {
  // Define the LocalBusiness JSON-LD Schema
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "Red Rock Cleans",
    "description": "Professional move out cleaning services in Columbus, Ohio",
    "url": "https://redrockcleans.com/columbus-ohio/move-out-cleaning-services/",
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
    "serviceType": "Move Out Cleaning Service",
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
      "name": "Move Out Cleaning Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Move Out Cleaning Service",
            "description": "Comprehensive end-of-tenancy cleaning including inside oven, refrigerator, cabinets, baseboards, and detailed cleaning to secure security deposits"
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
      title: "Move Out Cleaning Service in Columbus Ohio | Red Rock Cleans",
      description: "Secure your deposit with our reliable move out cleaning service in Columbus, OH. We provide thorough end-of-tenancy cleaning in Dublin, Upper Arlington, and beyond. Book today!",
      jsonLdSchema
    }
  };
}

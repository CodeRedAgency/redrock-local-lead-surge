import type { PageContext } from "vite-plugin-ssr/types";

export { onBeforeRender };

async function onBeforeRender(pageContext: PageContext) {
  // Define the LocalBusiness JSON-LD Schema
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "Red Rock Cleans",
    "description": "Professional Airbnb cleaning services in Columbus, Ohio",
    "url": "https://redrockcleans.com/columbus-ohio/airbnb-cleaning-services/",
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
    "serviceType": "Airbnb Cleaning Service",
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
      "name": "Airbnb Cleaning Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Airbnb Cleaning Service",
            "description": "Comprehensive Airbnb turnover cleaning including sanitizing, laundry, restocking guest essentials, staging, and quality assurance for vacation rental properties"
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
      title: "Airbnb Cleaning Service in Columbus Ohio | Red Rock Cleans",
      description: "Get 5-star reviews with our reliable Airbnb cleaning service in Columbus, OH. Red Rock Cleans offers automated turnover cleaning for vacation rentals in Dublin, the Short North, and beyond.",
      jsonLdSchema
    }
  };
}

import type { PageContextServer } from 'vite-plugin-ssr/types';

export { onBeforeRender };

async function onBeforeRender(pageContext: PageContextServer) {
  // Define the LocalBusiness JSON-LD Schema
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "Red Rock Cleans",
    "description": "Professional Airbnb cleaning services in Las Vegas",
    "serviceType": "Airbnb Cleaning Services",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "4536 W Warm Springs Rd",
      "addressLocality": "Las Vegas",
      "addressRegion": "NV",
      "postalCode": "89118",
      "addressCountry": "US"
    },
    "telephone": "(702) 508-0098",
    "url": "https://redrockcleans.com",
    "priceRange": "$$",
    "areaServed": [
      "Las Vegas",
      "Henderson",
      "North Las Vegas",
      "Paradise",
      "Enterprise",
      "Spring Valley",
      "Summerlin South",
      "Sunrise Manor",
      "Winchester",
      "Anthem",
      "Green Valley North",
      "Lake Las Vegas",
      "MacDonald Ranch",
      "Mountain's Edge",
      "Seven Hills",
      "Silverado Ranch",
      "Whitney"
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 36.1699,
        "longitude": -115.1398
      },
      "geoRadius": "50000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Airbnb Cleaning Services Las Vegas",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Airbnb Cleaning Services",
            "description": "Professional cleaning services for Airbnb and vacation rental properties in Las Vegas"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Vacation Rental Turnover Cleaning",
            "description": "Same-day turnover cleaning for vacation rental properties in Las Vegas"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "STR Cleaning Services",
            "description": "Short-term rental cleaning services for Las Vegas properties"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150"
    },
    "openingHours": "Mo-Su 06:00-22:00",
    "sameAs": [
      "https://www.facebook.com/redrockcleans/",
      "https://twitter.com/redrockcleans/",
      "https://www.instagram.com/red_rock_cleaning/",
      "http://www.linkedin.com/company/red-rock-cleaning/",
      "https://www.youtube.com/@redrockcleaning7597/"
    ]
  };

  return {
    pageContext: {
      title: "Airbnb Cleaning Services Las Vegas | Red Rock Cleans",
      description: "5-star Airbnb cleaning services in Las Vegas. Red Rock Cleans offers reliable, automated turnover cleaning for vacation rentals to impress every guest. Get your free instant quote today!",
      jsonLdSchema: jsonLdSchema
    }
  };
}

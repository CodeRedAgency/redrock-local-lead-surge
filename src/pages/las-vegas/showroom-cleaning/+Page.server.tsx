export { onBeforeRender };

function onBeforeRender() {
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "Red Rock Cleans",
    "description": "Professional showroom cleaning services in Las Vegas. Red Rock Cleans enhances your product presentation with meticulous cleaning for car dealerships, furniture stores, and more.",
    "url": "https://redrockcleans.com/las-vegas/showroom-cleaning/",
    "telephone": "(702) 508-0098",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "4536 W Warm Springs Rd",
      "addressLocality": "Las Vegas",
      "addressRegion": "NV",
      "postalCode": "89118",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "36.0840",
      "longitude": "-115.1537"
    },
    "areaServed": [
      "Las Vegas",
      "Henderson", 
      "North Las Vegas",
      "Summerlin",
      "Anthem",
      "Enterprise",
      "Green Valley North",
      "Lake Las Vegas",
      "MacDonald Ranch",
      "Mountain's Edge",
      "Paradise",
      "Seven Hills",
      "Silverado Ranch",
      "Spring Valley",
      "Summerlin South",
      "Sunrise Manor",
      "Whitney",
      "Winchester"
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
            "name": "Car Dealership Cleaning",
            "description": "Professional cleaning services for automotive showrooms and dealerships"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Furniture Showroom Cleaning",
            "description": "Meticulous cleaning for furniture stores and home goods showrooms"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Luxury Retail Cleaning",
            "description": "Premium cleaning services for high-end retail showrooms"
          }
        }
      ]
    },
    "openingHours": "Mo-Fr 08:00-18:00,Sa 09:00-16:00",
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127"
    }
  };

  return {
    pageContext: {
      title: "Showroom Cleaning Services Las Vegas | Red Rock Cleans",
      description: "Professional showroom cleaning in Las Vegas. Red Rock Cleans enhances your product presentation with meticulous cleaning for car dealerships, furniture stores, and more.",
      jsonLdSchema
    }
  };
}

export { onBeforeRender };

function onBeforeRender() {
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "Red Rock Cleans",
    "description": "Professional warehouse cleaning in Las Vegas. Red Rock Cleans improves safety and efficiency with comprehensive floor scrubbing, high-bay dusting, and more for logistics centers.",
    "url": "https://redrockcleans.com/las-vegas/warehouse-cleaning/",
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
    "serviceType": "Warehouse Cleaning",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Warehouse Cleaning Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Floor Scrubbing & Sweeping",
            "description": "Industrial-grade floor cleaning for concrete warehouse floors"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "High-Bay & Racking Dusting",
            "description": "Cleaning hard-to-reach ceilings, beams, and pallet racks"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Loading Dock Cleaning",
            "description": "Comprehensive cleaning of high-traffic loading areas"
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
      title: "Warehouse Cleaning Las Vegas | Red Rock Cleans",
      description: "Professional warehouse cleaning in Las Vegas. Red Rock Cleans improves safety and efficiency with comprehensive floor scrubbing, high-bay dusting, and more for logistics centers.",
      jsonLdSchema
    }
  };
}

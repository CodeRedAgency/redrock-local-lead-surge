export { onBeforeRender };

function onBeforeRender() {
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "Red Rock Cleans",
    "description": "Professional salon and spa cleaning in Las Vegas. Red Rock Cleans ensures a pristine, hygienic, and relaxing environment for hair salons, day spas, and medispas in Summerlin, Henderson, and beyond.",
    "url": "https://redrockcleans.com/las-vegas/salon-spa-cleaning/",
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
    "serviceType": "Salon and Spa Cleaning",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Salon and Spa Cleaning Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Hair Salon Cleaning",
            "description": "Comprehensive cleaning and sanitization for hair salons and barber shops"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Spa Cleaning",
            "description": "Specialized cleaning for day spas, medispas, and wellness centers"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Nail Salon Cleaning",
            "description": "Deep cleaning and disinfection for nail salons and manicure stations"
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
      title: "Salon & Spa Cleaning Las Vegas | Red Rock Cleans",
      description: "Professional salon and spa cleaning in Las Vegas. Red Rock Cleans ensures a pristine, hygienic, and relaxing environment for hair salons, day spas, and medispas in Summerlin, Henderson, and beyond.",
      jsonLdSchema
    }
  };
}

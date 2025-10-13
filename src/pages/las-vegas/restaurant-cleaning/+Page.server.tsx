const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "name": "Red Rock Cleans",
  "description": "Professional restaurant cleaning services in Las Vegas, Nevada. Specializing in commercial kitchen cleaning, dining room cleaning, and health code compliance for restaurants.",
  "url": "https://redrockcleans.com",
  "telephone": "(702) 508-0098",
  "email": "info@redrockcleans.com",
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
    "latitude": "36.1147",
    "longitude": "-115.1728"
  },
  "openingHours": "Mo-Su 00:00-23:59",
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "36.1147",
      "longitude": "-115.1728"
    },
    "geoRadius": "50000"
  },
  "serviceType": "Restaurant Cleaning",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Restaurant Cleaning Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Front-of-House Cleaning",
          "description": "Complete cleaning of dining areas, entryways, windows, and customer-facing spaces"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Commercial Kitchen Cleaning",
          "description": "Deep cleaning of food prep surfaces, equipment, floors, and all kitchen areas"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Bar Area Cleaning",
          "description": "Sanitizing taps, cleaning behind the bar, and maintaining floor mats"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Restaurant Restroom Cleaning",
          "description": "Intensive sanitation and restocking to meet guest expectations"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Health Code Compliance Cleaning",
          "description": "Cleaning services designed to help restaurants pass health inspections"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Kitchen Degreasing Services",
          "description": "Removal of hazardous grease buildup in commercial kitchens and exhaust systems"
        }
      }
    ]
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Las Vegas",
      "containedInPlace": {
        "@type": "State",
        "name": "Nevada"
      }
    },
    {
      "@type": "City",
      "name": "Henderson",
      "containedInPlace": {
        "@type": "State",
        "name": "Nevada"
      }
    },
    {
      "@type": "City",
      "name": "North Las Vegas",
      "containedInPlace": {
        "@type": "State",
        "name": "Nevada"
      }
    },
    {
      "@type": "City",
      "name": "Summerlin",
      "containedInPlace": {
        "@type": "State",
        "name": "Nevada"
      }
    }
  ],
  "priceRange": "$$",
  "paymentAccepted": ["Cash", "Check", "Credit Card"],
  "currenciesAccepted": "USD"
};

export { localBusinessSchema };

export const onBeforeRender = () => {
  return {
    pageContext: {
      title: "Restaurant Cleaning Las Vegas | Red Rock Cleans",
      description: "Professional restaurant cleaning in Las Vegas. Red Rock Cleans helps you pass health inspections and earn 5-star reviews with comprehensive kitchen and dining room cleaning.",
      jsonLdSchema: localBusinessSchema
    }
  };
};

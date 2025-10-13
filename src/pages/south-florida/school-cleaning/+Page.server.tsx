const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "name": "Red Rock Cleans",
  "description": "Professional school cleaning services in South Florida. Red Rock Cleans provides a safe and healthy learning environment for students in Fort Lauderdale, Weston, and across Broward County.",
  "url": "https://redrockcleans.com",
  "telephone": "(954) 469-8881",
  "email": "info@redrockcleans.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "4032 Pinewood Lane",
    "addressLocality": "Weston",
    "addressRegion": "FL",
    "postalCode": "33331",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "26.1003",
    "longitude": "-80.3997"
  },
  "openingHours": "Mo-Su 00:00-23:59",
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "26.1003",
      "longitude": "-80.3997"
    },
    "geoRadius": "50000"
  },
  "serviceType": "School Cleaning",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "School Cleaning Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Classroom Disinfection",
          "description": "Thorough disinfection of desks, chairs, whiteboards, and all high-touch surfaces"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Cafeteria Sanitization",
          "description": "Food-safe cleaning and sanitization of cafeteria facilities"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Gymnasium Cleaning",
          "description": "Specialized cleaning of large-scale spaces and athletic equipment"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Restroom Deep Cleaning",
          "description": "Intensive sanitation protocols for school restroom facilities"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Daycare & Preschool Cleaning",
          "description": "Child-safe cleaning for early learning centers using non-toxic products"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Educational Facility Janitorial Services",
          "description": "Complete janitorial services for schools and educational institutions"
        }
      }
    ]
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Fort Lauderdale",
      "containedInPlace": {
        "@type": "State",
        "name": "Florida"
      }
    },
    {
      "@type": "City",
      "name": "Weston",
      "containedInPlace": {
        "@type": "State",
        "name": "Florida"
      }
    },
    {
      "@type": "City",
      "name": "Hollywood",
      "containedInPlace": {
        "@type": "State",
        "name": "Florida"
      }
    },
    {
      "@type": "City",
      "name": "Pembroke Pines",
      "containedInPlace": {
        "@type": "State",
        "name": "Florida"
      }
    },
    {
      "@type": "City",
      "name": "Miramar",
      "containedInPlace": {
        "@type": "State",
        "name": "Florida"
      }
    },
    {
      "@type": "City",
      "name": "Plantation",
      "containedInPlace": {
        "@type": "State",
        "name": "Florida"
      }
    },
    {
      "@type": "City",
      "name": "Davie",
      "containedInPlace": {
        "@type": "State",
        "name": "Florida"
      }
    },
    {
      "@type": "City",
      "name": "Sunrise",
      "containedInPlace": {
        "@type": "State",
        "name": "Florida"
      }
    },
    {
      "@type": "City",
      "name": "Aventura",
      "containedInPlace": {
        "@type": "State",
        "name": "Florida"
      }
    },
    {
      "@type": "City",
      "name": "Broward County",
      "containedInPlace": {
        "@type": "State",
        "name": "Florida"
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
      title: "School Cleaning Services South Florida | Red Rock Cleans",
      description: "Professional school cleaning services in South Florida. Red Rock Cleans provides a safe and healthy learning environment for students in Fort Lauderdale, Weston, and across Broward County.",
      jsonLdSchema: localBusinessSchema
    }
  };
};


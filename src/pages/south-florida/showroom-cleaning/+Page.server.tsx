const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "name": "Red Rock Cleans",
  "description": "Professional showroom cleaning in South Florida. Red Rock Cleans enhances your product presentation with meticulous cleaning for car dealerships and luxury retail in Fort Lauderdale and Weston.",
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
  "serviceType": "Showroom Cleaning Services",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Showroom Cleaning Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Automotive Showroom Cleaning",
          "description": "Specialized cleaning for car dealerships and luxury automotive showrooms"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Furniture Showroom Cleaning",
          "description": "Careful cleaning for furniture and home goods display environments"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Showroom Floor Polishing",
          "description": "Professional floor polishing to achieve mirror-like finishes"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Window & Display Glass Cleaning",
          "description": "Streak-free cleaning for plate glass windows and display cases"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Product Display Dusting",
          "description": "Lint-free dusting and cleaning of showroom products and merchandise"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Client Lounge Cleaning",
          "description": "Maintaining pristine reception areas and client consultation spaces"
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
      "name": "Aventura",
      "containedInPlace": {
        "@type": "State",
        "name": "Florida"
      }
    },
    {
      "@type": "City",
      "name": "Las Olas",
      "containedInPlace": {
        "@type": "State",
        "name": "Florida"
      }
    },
    {
      "@type": "City",
      "name": "Sunny Isles Beach",
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
      title: "Showroom Cleaning Services South Florida | Red Rock Cleans",
      description: "Professional showroom cleaning in South Florida. Red Rock Cleans enhances your product presentation with meticulous cleaning for car dealerships and luxury retail in Fort Lauderdale and Weston.",
      jsonLdSchema: localBusinessSchema
    }
  };
};


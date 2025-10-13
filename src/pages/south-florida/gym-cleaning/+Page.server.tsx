const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "name": "Red Rock Cleans",
  "description": "Professional gym cleaning in South Florida. Hygienic fitness center and health club sanitation, including equipment disinfection and locker room cleaning in Fort Lauderdale and Weston.",
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
  "serviceType": "Gym Cleaning",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Gym Cleaning Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Fitness Equipment Disinfection",
          "description": "Thorough sanitization of all workout machines, weights, and fitness equipment"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Locker Room Cleaning",
          "description": "Deep cleaning and sanitization of locker rooms, showers, and changing areas"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Group Fitness Studio Cleaning",
          "description": "Specialized cleaning for yoga, spin, and group fitness studios"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Health Club Sanitation",
          "description": "Comprehensive sanitation services for health clubs and fitness centers"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Anti-Viral Gym Cleaning",
          "description": "EPA-registered disinfectants for virus and bacteria elimination"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "High-Traffic Area Sanitization",
          "description": "Cleaning and disinfection of reception areas and common spaces"
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
      title: "Gym Cleaning South Florida | Red Rock Cleans",
      description: "Professional gym cleaning in South Florida. Red Rock Cleans provides hygienic fitness center and health club sanitation, including equipment disinfection and locker room cleaning in Fort Lauderdale and Weston.",
      jsonLdSchema: localBusinessSchema
    }
  };
};


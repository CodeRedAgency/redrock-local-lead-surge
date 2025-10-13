const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "name": "Red Rock Cleans",
  "description": "Professional church cleaning services in South Florida. Respectful, detailed cleaning for places of worship in Fort Lauderdale, Weston, and across Broward County.",
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
  "serviceType": "Church Cleaning",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Church Cleaning Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Sanctuary Cleaning",
          "description": "Respectful cleaning of worship areas, pews, altars, and sacred spaces"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Fellowship Hall Cleaning",
          "description": "Complete cleaning of fellowship halls and community gathering spaces"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Church Restroom Sanitization",
          "description": "Thorough sanitization of church restrooms and facilities"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Religious Facility Deep Cleaning",
          "description": "Comprehensive deep cleaning for churches and places of worship"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Church Kitchen Cleaning",
          "description": "Professional cleaning of church kitchens and food preparation areas"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Special Event Cleaning",
          "description": "Pre and post-event cleaning for religious ceremonies and gatherings"
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
      "name": "Pembroke Pines",
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
      title: "Church Cleaning South Florida | Red Rock Cleans",
      description: "Professional church cleaning services in South Florida. Red Rock Cleans provides respectful, detailed cleaning for places of worship in Fort Lauderdale, Weston, and across the region.",
      jsonLdSchema: localBusinessSchema
    }
  };
};


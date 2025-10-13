const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "name": "Red Rock Cleans",
  "description": "Specialized data center cleaning in South Florida. ISO 14644-1 compliant server room, sub-floor, and critical environment cleaning in Fort Lauderdale and Weston.",
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
  "serviceType": "Data Center Cleaning",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Data Center Cleaning Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Raised Floor Cleaning",
          "description": "HEPA-filtered cleaning of raised floors and sub-floor plenum spaces"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Server Rack Cleaning",
          "description": "Anti-static cleaning of server racks, equipment, and cable management systems"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Critical Environment Cleaning",
          "description": "ISO 14644-1 compliant cleanroom cleaning for data centers"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "HVAC System Cleaning",
          "description": "Cleaning of CRAC units, air handlers, and cooling infrastructure"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Environmental Surface Disinfection",
          "description": "Comprehensive cleaning of walls, ceilings, and access control areas"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Contamination Control Services",
          "description": "Particle counting, verification, and compliance documentation"
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
      "name": "Miramar",
      "containedInPlace": {
        "@type": "State",
        "name": "Florida"
      }
    }
  ],
  "priceRange": "$$$",
  "paymentAccepted": ["Cash", "Check", "Credit Card"],
  "currenciesAccepted": "USD"
};

export { localBusinessSchema };

export const onBeforeRender = () => {
  return {
    pageContext: {
      title: "Data Center Cleaning South Florida | Red Rock Cleans",
      description: "Specialized data center cleaning in South Florida. Red Rock Cleans offers ISO 14644-1 compliant server room, sub-floor, and critical environment cleaning in Fort Lauderdale and Weston to ensure uptime.",
      jsonLdSchema: localBusinessSchema
    }
  };
};


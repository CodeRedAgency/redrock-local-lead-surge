const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "name": "Red Rock Cleans",
  "description": "Professional factory cleaning in South Florida. Heavy-duty cleaning for manufacturing plants in Fort Lauderdale, Weston, and beyond to ensure safety and productivity.",
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
  "serviceType": "Factory Cleaning",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Factory Cleaning Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Production Floor Cleaning",
          "description": "Heavy-duty sweeping, scrubbing, and degreasing of factory floors"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Machinery Cleaning & Degreasing",
          "description": "Safe cleaning of production equipment and manufacturing machinery"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "High-Dusting Services",
          "description": "Cleaning of ceilings, pipes, rafters, and overhead structures"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "OSHA Compliant Cleaning",
          "description": "Factory cleaning services that meet OSHA safety standards"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Industrial Waste Removal",
          "description": "Proper handling and disposal of manufacturing waste and debris"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Common Area Cleaning",
          "description": "Cleaning of break rooms, offices, and restrooms in manufacturing facilities"
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
  "priceRange": "$$$",
  "paymentAccepted": ["Cash", "Check", "Credit Card"],
  "currenciesAccepted": "USD"
};

export { localBusinessSchema };

export const onBeforeRender = () => {
  return {
    pageContext: {
      title: "Factory Cleaning South Florida | Red Rock Cleans",
      description: "Professional factory cleaning in South Florida. Red Rock Cleans offers heavy-duty cleaning for manufacturing plants in Fort Lauderdale, Weston, and beyond to ensure safety and productivity.",
      jsonLdSchema: localBusinessSchema
    }
  };
};


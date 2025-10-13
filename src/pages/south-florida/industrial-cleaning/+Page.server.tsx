const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "name": "Red Rock Cleans",
  "description": "Heavy-duty industrial cleaning services in South Florida. OSHA compliant cleaning for manufacturing plants and industrial facilities in Fort Lauderdale and beyond.",
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
  "serviceType": "Industrial Cleaning Services",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Industrial Cleaning Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Equipment and Machinery Degreasing",
          "description": "Industrial-strength degreasing of production machinery and equipment"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "High-Surface Structural Cleaning",
          "description": "Cleaning of ceilings, beams, pipes, and overhead structures"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Industrial Floor Decontamination",
          "description": "Heavy-duty scrubbing, stripping, and sealing of industrial floors"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Manufacturing Facility Cleaning",
          "description": "Comprehensive cleaning for manufacturing plants and production facilities"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "OSHA Compliant Industrial Cleaning",
          "description": "Safety-focused cleaning services that meet all OSHA regulations"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Industrial Plant Deep Cleaning",
          "description": "Intensive deep cleaning for processing plants and industrial facilities"
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
      "name": "Hollywood",
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
    }
  ],
  "priceRange": "$$$",
  "paymentAccepted": ["Cash", "Check", "Credit Card", "Purchase Order"],
  "currenciesAccepted": "USD"
};

export { localBusinessSchema };

export const onBeforeRender = () => {
  return {
    pageContext: {
      title: "Industrial Cleaning Services South Florida | Red Rock Cleans",
      description: "Heavy-duty industrial cleaning services in South Florida. Red Rock Cleans provides OSHA compliant cleaning for manufacturing plants and industrial facilities in Fort Lauderdale and beyond.",
      jsonLdSchema: localBusinessSchema
    }
  };
};


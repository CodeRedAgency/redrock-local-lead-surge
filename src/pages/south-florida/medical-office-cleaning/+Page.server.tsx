const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "name": "Red Rock Cleans",
  "description": "Specialized medical office cleaning in South Florida. Red Rock Cleans provides HIPAA and OSHA compliant cleaning for clinics and healthcare facilities in Fort Lauderdale, Weston, and beyond.",
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
  "serviceType": "Medical Office Cleaning",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Medical Office Cleaning Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Exam Room Terminal Cleaning",
          "description": "Thorough disinfection of exam and procedure rooms between patients following healthcare protocols"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "HIPAA Compliant Cleaning",
          "description": "Medical facility cleaning with strict adherence to HIPAA privacy and security requirements"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Healthcare Infection Control",
          "description": "EPA-approved, hospital-grade disinfection to eliminate healthcare-associated pathogens"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Clinic Sanitation Services",
          "description": "Comprehensive cleaning for medical clinics, dental offices, and healthcare practices"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "OSHA Standards Cleaning",
          "description": "Compliant cleaning following OSHA bloodborne pathogen and safety protocols"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Medical Waiting Room Disinfection",
          "description": "High-touch surface sanitization in waiting areas to protect patients and staff"
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
      title: "Medical Office Cleaning South Florida | Red Rock Cleans",
      description: "Specialized medical office cleaning in South Florida. Red Rock Cleans provides HIPAA and OSHA compliant cleaning for clinics and healthcare facilities in Fort Lauderdale, Weston, and beyond.",
      jsonLdSchema: localBusinessSchema
    }
  };
};


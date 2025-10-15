const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "name": "Red Rock Cleans",
  "description": "Professional salon and spa cleaning in South Florida. Red Rock Cleans ensures a pristine, hygienic, and relaxing environment for hair salons, day spas, and medispas in Fort Lauderdale and Weston.",
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
  "serviceType": "Salon and Spa Cleaning",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Salon & Spa Cleaning Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Hair Salon Cleaning",
          "description": "Professional cleaning and sanitization of hair styling stations and salon floors"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Nail Salon Cleaning",
          "description": "Deep cleaning and disinfection of manicure and pedicure stations"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Spa Treatment Room Cleaning",
          "description": "Sanitization of massage rooms, facial rooms, and spa treatment areas"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Pedicure Chair Disinfection",
          "description": "Thorough cleaning and sanitization of pedicure chairs and foot baths"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Reception Area Cleaning",
          "description": "Maintenance of spotless lobbies and waiting areas for first impressions"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "MediSpa Cleaning",
          "description": "Professional cleaning for medical spas with strict hygiene protocols"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Barber Shop Cleaning",
          "description": "Specialized cleaning for barber shops and men's grooming facilities"
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
      title: "Salon & Spa Cleaning South Florida | Red Rock Cleans",
      description: "Professional salon and spa cleaning in South Florida. Red Rock Cleans ensures a pristine, hygienic, and relaxing environment for hair salons, day spas, and medispas in Fort Lauderdale and Weston.",
      jsonLdSchema: localBusinessSchema
    }
  };
};



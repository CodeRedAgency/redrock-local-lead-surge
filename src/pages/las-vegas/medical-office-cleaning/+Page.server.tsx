import type { PageContext } from 'vite-plugin-ssr/types';

// Define the LocalBusiness JSON-LD Schema
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "name": "Red Rock Cleans",
  "description": "Specialized medical office cleaning in Las Vegas",
  "serviceType": "Medical Office Cleaning",
  "url": "https://redrockcleans.com/las-vegas/medical-office-cleaning/",
  "telephone": "(702) 508-0098",
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
    "latitude": 36.1147,
    "longitude": -115.1728
  },
  "openingHours": "Mo-Su 08:00-18:00",
  "priceRange": "$$",
  "paymentAccepted": "Cash, Credit Card, Check",
  "currenciesAccepted": "USD",
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
      "name": "Summerlin",
      "containedInPlace": {
        "@type": "State",
        "name": "Nevada"
      }
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Medical Office Cleaning Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "HIPAA & OSHA Compliant Cleaning",
          "description": "Rigorous adherence to all regulatory standards for medical facilities"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Advanced Infection Control",
          "description": "Use of EPA-approved, hospital-grade disinfectants to combat pathogens"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Exam Room Terminal Cleaning",
          "description": "Terminal cleaning protocols between patients for infection prevention"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Waiting Room Disinfection",
          "description": "Disinfecting high-touch surfaces to protect patients and staff"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Bloodborne Pathogen Training",
          "description": "Specialized training in cross-contamination prevention for medical facilities"
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "150"
  },
  "sameAs": [
    "https://www.facebook.com/redrockcleans",
    "https://www.instagram.com/redrockcleans"
  ]
};

export const onBeforeRender = (pageContext: PageContext) => {
  return {
    pageContext: {
      title: "Medical Office Cleaning Las Vegas | Red Rock Cleans",
      description: "Specialized medical office cleaning in Las Vegas. Red Rock Cleans provides HIPAA and OSHA compliant cleaning for clinics and healthcare facilities in Henderson, Summerlin, and beyond.",
      jsonLdSchema: localBusinessSchema
    }
  };
};

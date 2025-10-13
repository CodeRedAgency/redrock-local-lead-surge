import type { PageContext } from 'vite-plugin-ssr/types';

// Define the LocalBusiness JSON-LD Schema
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "name": "Red Rock Cleans",
  "description": "Heavy-duty industrial cleaning services in Las Vegas",
  "serviceType": "Industrial Cleaning Services",
  "url": "https://redrockcleans.com/las-vegas/industrial-cleaning/",
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
      "name": "North Las Vegas",
      "containedInPlace": {
        "@type": "State",
        "name": "Nevada"
      }
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Industrial Cleaning Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Equipment & Machinery Degreasing",
          "description": "Removing tough grease and grime from production machinery using specialized industrial cleaning solutions"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "High-Surface & Structural Cleaning",
          "description": "Cleaning ceilings, support beams, pipes, and other hard-to-reach areas using specialized equipment"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Floor Decontamination & Restoration",
          "description": "Heavy-duty scrubbing, stripping, and sealing of industrial flooring for safety and efficiency"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Confined Space Cleaning",
          "description": "Certified approach to safely cleaning tanks, silos, and other confined spaces with proper safety equipment"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "OSHA Compliant Cleaning",
          "description": "Rigorous adherence to safety regulations to protect workforce and ensure compliance standards"
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
      title: "Industrial Cleaning Services Las Vegas | Red Rock Cleans",
      description: "Heavy-duty industrial cleaning services in Las Vegas. Red Rock Cleans provides OSHA compliant cleaning for manufacturing plants, equipment, and industrial facilities to ensure safety and uptime.",
      jsonLdSchema: localBusinessSchema
    }
  };
};

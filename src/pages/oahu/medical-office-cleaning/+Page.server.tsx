import type { PageContextBuiltIn } from 'vite-plugin-ssr';

export async function onBeforeRender(pageContext: PageContextBuiltIn) {
  const title = "Medical Office Cleaning Oahu | Red Rock Cleans";
  const description = "Specialized medical office cleaning on Oahu. Red Rock Cleans provides HIPAA and OSHA compliant cleaning for clinics and healthcare facilities in Honolulu, Kailua, and beyond.";

  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "Red Rock Cleans",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1326 Alapai Street",
      "addressLocality": "Honolulu",
      "addressRegion": "HI",
      "postalCode": "96813",
      "addressCountry": "US"
    },
    "telephone": "(808) 909-8801",
    "url": "https://redrockcleans.com/oahu/medical-office-cleaning",
    "serviceType": "Medical Office Cleaning",
    "areaServed": [
      {
        "@type": "City",
        "name": "Aiea"
      },
      {
        "@type": "City",
        "name": "Ewa Beach"
      },
      {
        "@type": "City",
        "name": "Hawaii Kai"
      },
      {
        "@type": "City",
        "name": "Honolulu"
      },
      {
        "@type": "City",
        "name": "Kailua"
      },
      {
        "@type": "City",
        "name": "Kapolei"
      },
      {
        "@type": "City",
        "name": "Makakilo"
      },
      {
        "@type": "City",
        "name": "Mililani"
      },
      {
        "@type": "City",
        "name": "Pearl City"
      },
      {
        "@type": "City",
        "name": "Waialae"
      },
      {
        "@type": "City",
        "name": "Waikiki"
      },
      {
        "@type": "City",
        "name": "Waimanalo"
      },
      {
        "@type": "City",
        "name": "Waipahu"
      }
    ],
    "image": "https://redrockcleans.com/static/service-products.jpg",
    "priceRange": "$$$",
    "description": description
  };

  return {
    pageContext: {
      title,
      description,
      jsonLdSchema,
    },
  };
}

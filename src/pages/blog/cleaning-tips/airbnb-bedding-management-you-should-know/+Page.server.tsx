import type { PageContext } from "vite-plugin-ssr/types";

export { onBeforeRender };

async function onBeforeRender(pageContext: PageContext) {
  // Define the Article JSON-LD Schema
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Airbnb Bedding Management You Should Know",
    "description": "Master Airbnb bedding management with expert tips on selecting, maintaining, and rotating quality linens for 5-star guest reviews and efficient turnover operations.",
    "author": {
      "@type": "Organization",
      "name": "Red Rock Cleans"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Red Rock Cleans",
      "logo": {
        "@type": "ImageObject",
        "url": "https://redrockcleans.com/logo.png"
      }
    },
    "datePublished": "2025-10-17",
    "dateModified": "2025-10-17",
    "image": "https://redrockcleans.com/src/assets/hero-residential.jpg",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://redrockcleans.com/blog/cleaning-tips/airbnb-bedding-management-you-should-know/"
    },
    "articleSection": "Cleaning Tips",
    "keywords": [
      "Airbnb bedding management",
      "vacation rental linens",
      "Airbnb cleaning services",
      "turnover cleaning",
      "bedding rotation",
      "linen care",
      "Airbnb hosting tips"
    ],
    "about": [
      {
        "@type": "Thing",
        "name": "Airbnb hosting"
      },
      {
        "@type": "Thing",
        "name": "Bedding management"
      },
      {
        "@type": "Thing",
        "name": "Vacation rental cleaning"
      }
    ]
  };

  return {
    pageContext: {
      title: "Airbnb Bedding Management You Should Know | Red Rock Cleans",
      description: "Master Airbnb bedding management with expert tips on selecting, maintaining, and rotating linens for 5-star guest reviews and efficient turnover operations.",
      jsonLdSchema
    }
  };
}


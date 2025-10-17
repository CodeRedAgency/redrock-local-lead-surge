import type { PageContext } from "vite-plugin-ssr/types";

export { onBeforeRender };

async function onBeforeRender(pageContext: PageContext) {
  // Define the Article JSON-LD Schema
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Carpet Cleaning to Remove Flea Infestation: A Step-by-Step Guide",
    "description": "Dealing with a flea infestation? Our step-by-step guide shows you how professional carpet cleaning can help eradicate fleas from your home for good.",
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
    "datePublished": "2024-08-20",
    "dateModified": "2024-08-20",
    "image": "https://images.unsplash.com/photo-1581578731548-c64695cc6952",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://redrockcleans.com/blog/cleaning-tips/carpet-cleaning-to-remove-flea-infestation/"
    },
    "articleSection": "Cleaning Tips",
    "keywords": [
      "carpet cleaning for fleas",
      "flea infestation removal",
      "how to remove fleas from carpet",
      "professional flea treatment",
      "deep cleaning for fleas",
      "flea removal guide",
      "carpet flea extermination",
      "pet flea treatment"
    ],
    "about": [
      {
        "@type": "Thing",
        "name": "Flea control"
      },
      {
        "@type": "Thing",
        "name": "Carpet cleaning"
      },
      {
        "@type": "Thing",
        "name": "Pest management"
      },
      {
        "@type": "Thing",
        "name": "Deep cleaning"
      }
    ]
  };

  return {
    pageContext: {
      title: "Carpet Cleaning to Remove Flea Infestation: A Step-by-Step Guide | Red Rock Cleans",
      description: "Dealing with a flea infestation? Our step-by-step guide shows you how professional carpet cleaning can help eradicate fleas from your home for good.",
      jsonLdSchema
    }
  };
}


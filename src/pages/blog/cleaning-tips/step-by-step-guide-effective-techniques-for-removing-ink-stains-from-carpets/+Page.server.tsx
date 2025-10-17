import type { PageContext } from "vite-plugin-ssr/types";

export { onBeforeRender };

async function onBeforeRender(pageContext: PageContext) {
  // Define the Article JSON-LD Schema
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Step-by-Step Guide: Effective Techniques for Removing Ink Stains from Carpets",
    "description": "Don't panic over ink stains! Follow our step-by-step guide to effectively remove ink from carpets and learn when to call the professionals for stubborn spots.",
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
    "datePublished": "2025-10-18",
    "dateModified": "2025-10-18",
    "image": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=80",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://redrockcleans.com/blog/cleaning-tips/step-by-step-guide-effective-techniques-for-removing-ink-stains-from-carpets/"
    },
    "articleSection": "Cleaning Tips",
    "keywords": [
      "remove ink stains carpet",
      "ink stain removal",
      "carpet stain removal",
      "remove ink from carpet",
      "ink stain cleaning",
      "carpet cleaning tips",
      "deep cleaning services",
      "professional stain removal",
      "ballpoint pen stain removal",
      "permanent marker removal"
    ],
    "about": [
      {
        "@type": "Thing",
        "name": "Carpet stain removal"
      },
      {
        "@type": "Thing",
        "name": "Ink stain treatment"
      },
      {
        "@type": "Thing",
        "name": "Professional carpet cleaning"
      }
    ]
  };

  return {
    pageContext: {
      title: "Step-by-Step Guide: Effective Techniques for Removing Ink Stains from Carpets | Red Rock Cleans",
      description: "Don't panic over ink stains! Follow our step-by-step guide to effectively remove ink from carpets and learn when to call the professionals for stubborn spots.",
      jsonLdSchema
    }
  };
}


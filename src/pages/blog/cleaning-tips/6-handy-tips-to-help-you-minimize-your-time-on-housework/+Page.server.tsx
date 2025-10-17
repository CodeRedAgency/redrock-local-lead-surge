import type { PageContext } from "vite-plugin-ssr/types";

export { onBeforeRender };

async function onBeforeRender(pageContext: PageContext) {
  // Define the Article JSON-LD Schema
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "6 Handy Tips to Help You Minimize Your Time on Housework",
    "description": "Tired of endless chores? Discover 6 handy tips to help you minimize your time on housework and reclaim your free time.",
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
    "datePublished": "2023-09-05",
    "dateModified": "2023-09-05",
    "image": "https://images.unsplash.com/photo-1556909172-54557c7e4fb7",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://redrockcleans.com/blog/cleaning-tips/6-handy-tips-to-help-you-minimize-your-time-on-housework/"
    },
    "articleSection": "Cleaning Tips",
    "keywords": [
      "minimize housework time",
      "cleaning tips",
      "housework hacks",
      "time-saving cleaning",
      "efficient cleaning",
      "reduce cleaning time",
      "standard cleaning services",
      "deep cleaning services"
    ],
    "about": [
      {
        "@type": "Thing",
        "name": "Housework efficiency"
      },
      {
        "@type": "Thing",
        "name": "Time management"
      },
      {
        "@type": "Thing",
        "name": "Home cleaning"
      }
    ]
  };

  return {
    pageContext: {
      title: "6 Handy Tips to Help You Minimize Your Time on Housework | Red Rock Cleans",
      description: "Tired of endless chores? Discover 6 handy tips to help you minimize your time on housework and reclaim your free time.",
      jsonLdSchema
    }
  };
}


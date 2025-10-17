import type { PageContext } from "vite-plugin-ssr/types";

export { onBeforeRender };

async function onBeforeRender(pageContext: PageContext) {
  // Define the Article JSON-LD Schema
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "The Science of Spring Cleaning: Why It Boosts Your Mood and Health",
    "description": "Discover the science of spring cleaning! Learn how decluttering and a deep clean can improve your mood, health, and focus. Get our ultimate checklist.",
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
    "datePublished": "2024-03-15",
    "dateModified": "2024-03-15",
    "image": "https://images.unsplash.com/photo-1484101403633-562f891dc89a",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://redrockcleans.com/blog/cleaning-tips/the-science-of-spring-cleaning/"
    },
    "articleSection": "Cleaning Tips",
    "keywords": [
      "science of spring cleaning",
      "spring cleaning benefits",
      "mental health cleaning",
      "decluttering reduces stress",
      "indoor air quality",
      "deep cleaning services",
      "spring cleaning checklist",
      "cleaning and mood",
      "health benefits of cleaning"
    ],
    "about": [
      {
        "@type": "Thing",
        "name": "Spring cleaning"
      },
      {
        "@type": "Thing",
        "name": "Mental health"
      },
      {
        "@type": "Thing",
        "name": "Indoor air quality"
      },
      {
        "@type": "Thing",
        "name": "Deep cleaning"
      }
    ]
  };

  return {
    pageContext: {
      title: "The Science of Spring Cleaning: Why It Boosts Your Mood and Health | Red Rock Cleans",
      description: "Discover the science of spring cleaning! Learn how decluttering and a deep clean can improve your mood, health, and focus. Get our ultimate checklist.",
      jsonLdSchema
    }
  };
}


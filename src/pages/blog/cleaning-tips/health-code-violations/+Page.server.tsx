import type { PageContext } from "vite-plugin-ssr/types";

export { onBeforeRender };

async function onBeforeRender(pageContext: PageContext) {
  // Define the Article JSON-LD Schema
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Navigating Health Code Violations: A Commercial Cleaning Guide",
    "description": "Learn how to avoid and address health code violations in your business. Discover the role of professional commercial cleaning in maintaining compliance with health regulations and preventing costly fines.",
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
    "image": "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1600&h=800&fit=crop&q=80",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://redrockcleans.com/blog/cleaning-tips/health-code-violations/"
    },
    "articleSection": "Cleaning Tips",
    "keywords": [
      "health code violations",
      "commercial cleaning",
      "restaurant cleaning",
      "health code compliance",
      "business cleaning",
      "health inspection",
      "food safety",
      "professional cleaning services"
    ],
    "about": [
      {
        "@type": "Thing",
        "name": "Health code compliance"
      },
      {
        "@type": "Thing",
        "name": "Commercial cleaning"
      },
      {
        "@type": "Thing",
        "name": "Business regulations"
      }
    ]
  };

  return {
    pageContext: {
      title: "Navigating Health Code Violations: A Commercial Cleaning Guide | Red Rock Cleans",
      description: "Learn how to avoid and address health code violations in your business. Discover the role of professional commercial cleaning in maintaining compliance.",
      jsonLdSchema
    }
  };
}


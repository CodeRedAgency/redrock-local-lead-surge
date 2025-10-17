import type { PageContext } from "vite-plugin-ssr/types";

export { onBeforeRender };

async function onBeforeRender(pageContext: PageContext) {
  // Define the Article JSON-LD Schema
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Grill Maintenance 101: The Ultimate Guide to Cleaning Your Outdoor Grill",
    "description": "Master grill maintenance with our ultimate guide. Learn how to clean your outdoor grill for better taste, longer life, and a healthier cooking experience.",
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
    "image": "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=1920&q=80",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://redrockcleans.com/blog/cleaning-tips/grill-maintenance-101-the-ultimate-guide-to-cleaning-your-outdoor-grill/"
    },
    "articleSection": "Cleaning Tips",
    "keywords": [
      "grill cleaning guide",
      "grill maintenance",
      "outdoor grill cleaning",
      "BBQ cleaning",
      "grill care",
      "deep cleaning services",
      "grill deep clean",
      "grill hygiene",
      "gas grill cleaning",
      "charcoal grill maintenance"
    ],
    "about": [
      {
        "@type": "Thing",
        "name": "Grill maintenance"
      },
      {
        "@type": "Thing",
        "name": "Outdoor cooking equipment"
      },
      {
        "@type": "Thing",
        "name": "Deep cleaning"
      }
    ]
  };

  return {
    pageContext: {
      title: "Grill Maintenance 101: The Ultimate Guide to Cleaning Your Outdoor Grill | Red Rock Cleans",
      description: "Master grill maintenance with our ultimate guide. Learn how to clean your outdoor grill for better taste, longer life, and a healthier cooking experience.",
      jsonLdSchema
    }
  };
}


import type { PageContext } from "vite-plugin-ssr/types";

export { onBeforeRender };

async function onBeforeRender(pageContext: PageContext) {
  // Define the Article JSON-LD Schema
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Your Essential Guide to the Ultimate Move-Out Cleaning Checklist",
    "description": "Our ultimate move-out cleaning checklist ensures you get your security deposit back. Follow our room-by-room guide for a perfect clean, or hire our pros to do it for you.",
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
    "datePublished": "2022-07-12",
    "dateModified": "2025-10-18",
    "image": "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&q=80",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://redrockcleans.com/blog/cleaning-tips/your-essential-guide-to-the-ultimate-move-out-cleaning-checklist/"
    },
    "articleSection": "Cleaning Tips",
    "keywords": [
      "move out cleaning checklist",
      "move out cleaning",
      "rental cleaning checklist",
      "security deposit cleaning",
      "apartment move out cleaning",
      "end of lease cleaning",
      "move out cleaning services",
      "deposit back guarantee",
      "rental property cleaning",
      "landlord inspection cleaning"
    ],
    "about": [
      {
        "@type": "Thing",
        "name": "Move-out cleaning"
      },
      {
        "@type": "Thing",
        "name": "Rental property maintenance"
      },
      {
        "@type": "Thing",
        "name": "Security deposit recovery"
      }
    ]
  };

  return {
    pageContext: {
      title: "Your Essential Guide to the Ultimate Move-Out Cleaning Checklist | Red Rock Cleans",
      description: "Our ultimate move-out cleaning checklist ensures you get your security deposit back. Follow our room-by-room guide for a perfect clean, or hire our pros to do it for you.",
      jsonLdSchema
    }
  };
}


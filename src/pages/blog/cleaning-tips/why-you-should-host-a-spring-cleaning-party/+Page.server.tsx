import type { PageContext } from "vite-plugin-ssr/types";

export { onBeforeRender };

async function onBeforeRender(pageContext: PageContext) {
  // Define the Article JSON-LD Schema
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Get It Done Together: Why You Should Host a Spring Cleaning Party",
    "description": "Turn spring cleaning into a fun social event with friends. Learn how to plan a spring cleaning party, divide tasks efficiently, and when to call in professional cleaners for the tough jobs.",
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
    "datePublished": "2023-04-22",
    "dateModified": "2023-04-22",
    "image": "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=1600&h=800&fit=crop&q=80",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://redrockcleans.com/blog/cleaning-tips/why-you-should-host-a-spring-cleaning-party/"
    },
    "articleSection": "Cleaning Tips",
    "keywords": [
      "spring cleaning party",
      "host a spring cleaning party",
      "cleaning with friends",
      "spring cleaning tips",
      "deep cleaning services",
      "group cleaning",
      "home organization party"
    ],
    "about": [
      {
        "@type": "Thing",
        "name": "Spring cleaning"
      },
      {
        "@type": "Thing",
        "name": "Home organization"
      },
      {
        "@type": "Thing",
        "name": "Social events"
      }
    ]
  };

  return {
    pageContext: {
      title: "Get It Done Together: Why You Should Host a Spring Cleaning Party | Red Rock Cleans",
      description: "Turn spring cleaning into a fun event! Learn why you should host a spring cleaning party and how to plan one, plus when to call in the pros for tough jobs.",
      jsonLdSchema
    }
  };
}


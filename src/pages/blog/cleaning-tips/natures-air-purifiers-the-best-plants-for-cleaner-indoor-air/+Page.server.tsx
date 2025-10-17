import type { PageContext } from "vite-plugin-ssr/types";

export { onBeforeRender };

async function onBeforeRender(pageContext: PageContext) {
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Nature's Air Purifiers: The Best Plants for Cleaner Indoor Air",
    author: {
      "@type": "Organization",
      name: "Red Rock Cleans"
    },
    description: "Discover the best houseplants for naturally purifying your indoor air. Our guide covers top plants, care tips, and how cleaning complements their benefits.",
    datePublished: "2023-11-01",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1500&q=80",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://redrockcleans.com/blog/cleaning-tips/natures-air-purifiers-the-best-plants-for-cleaner-indoor-air/"
    },
    articleSection: "Cleaning Tips",
    keywords: [
      "Best Plants for Clean Air",
      "air purifying plants",
      "houseplants for air quality",
      "indoor air improvement",
      "nasa clean air study",
      "standard cleaning services",
      "deep cleaning services",
      "healthy home"
    ],
    about: [
      { "@type": "Thing", name: "Air purifying plants" },
      { "@type": "Thing", name: "Indoor air quality" },
      { "@type": "Thing", name: "Home cleaning" }
    ]
  };

  return {
    pageContext: {
      title: "Nature's Air Purifiers: The Best Plants for Cleaner Indoor Air | Red Rock Cleans",
      description: "Discover the best houseplants for naturally purifying your indoor air. Our guide covers top plants, care tips, and how cleaning complements their benefits.",
      jsonLdSchema
    }
  };
}

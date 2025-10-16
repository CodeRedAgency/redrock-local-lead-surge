type JsonLd = Record<string, any>;

const jsonLdSchema: JsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Commercial Cleaning Cost Estimator | Red Rock Cleans",
  "url": "https://www.redrockcleans.com/commercial-cleaning-cost-estimator/",
  "description": "Get a free ballpark estimate for your commercial cleaning needs. Our calculator helps you budget for office, warehouse, or facility cleaning based on industry standards.",
  "mainEntity": {
    "@type": "HowTo",
    "name": "How to use the Commercial Cleaning Cost Estimator",
    "step": [
      { "@type": "HowToStep", "name": "Select Facility Type" },
      { "@type": "HowToStep", "name": "Enter Facility Details" },
      { "@type": "HowToStep", "name": "Choose Service Frequency" },
      { "@type": "HowToStep", "name": "Review National and Local Cost Estimates" }
    ]
  }
};

export async function onBeforeRender() {
  const pageContext = {
    title: "Commercial Cleaning Cost Estimator | Red Rock Cleans",
    description:
      "Get a free ballpark estimate for your commercial cleaning needs. Our calculator helps you budget for office, warehouse, or facility cleaning based on industry standards.",
    jsonLdSchema,
  };

  return { pageContext };
}

export { jsonLdSchema };



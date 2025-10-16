type JsonLd = Record<string, any>;

const jsonLdSchema: JsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Commercial Cleaning Time Estimator | Red Rock Cleans",
  "url": "https://www.redrockcleans.com/commercial-cleaning-time-estimator/",
  "description": "Use our free tool to instantly estimate the time required to professionally clean your office, warehouse, or facility based on ISSA industry standards. Get your estimate in seconds!",
  "mainEntity": {
    "@type": "HowTo",
    "name": "How to use the Commercial Cleaning Time Estimator",
    "step": [
      { "@type": "HowToStep", "name": "Select Facility Type" },
      { "@type": "HowToStep", "name": "Enter Facility Details" },
      { "@type": "HowToStep", "name": "Choose Service Frequency" },
      { "@type": "HowToStep", "name": "View Estimated Cleaning Time" }
    ]
  }
};

export async function onBeforeRender() {
  const pageContext = {
    title: "Commercial Cleaning Time Estimator | Red Rock Cleans",
    description:
      "Use our free tool to instantly estimate the time required to professionally clean your office, warehouse, or facility based on ISSA industry standards. Get your estimate in seconds!",
    jsonLdSchema,
  };

  return { pageContext };
}

export { jsonLdSchema };



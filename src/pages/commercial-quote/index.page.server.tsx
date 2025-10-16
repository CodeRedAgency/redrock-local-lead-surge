type JsonLd = Record<string, any>;

const jsonLdSchema: JsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Request a Commercial Cleaning Quote | Red Rock Cleans",
  "url": "https://www.redrockcleans.com/commercial-quote/",
  "description": "Request a free, no-obligation quote for your business. Red Rock Cleans provides custom proposals for office, industrial, medical, and other commercial cleaning services.",
};

export async function onBeforeRender() {
  const pageContext = {
    title: "Request a Commercial Cleaning Quote | Red Rock Cleans",
    description:
      "Request a free, no-obligation quote for your business. Red Rock Cleans provides custom proposals for office, industrial, medical, and other commercial cleaning services.",
    jsonLdSchema,
  };

  return { pageContext };
}

export { jsonLdSchema };



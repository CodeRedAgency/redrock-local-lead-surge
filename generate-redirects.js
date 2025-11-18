const fs = require('fs');

const vercel = JSON.parse(fs.readFileSync('vercel.json', 'utf8'));

const redirects = vercel.redirects.map(r => {
  let dest = r.destination;
  
  // Handle root redirects
  if (dest === '/') {
    dest = '/en';
  } 
  // Keep Spanish routes as-is
  else if (dest.startsWith('/es/')) {
    // Already correct
  }
  // Keep external URLs as-is
  else if (dest.startsWith('http')) {
    // Already correct
  }
  // Add /en/ prefix to all other routes
  else if (!dest.match(/^\/(en|es)\//)) {
    dest = '/en' + dest;
  }
  
  return {
    source: r.source,
    destination: dest,
    permanent: r.permanent,
  };
});

const config = `import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
${redirects.map(r => `      {
        source: "${r.source}",
        destination: "${r.destination}",
        permanent: ${r.permanent},
      }`).join(',\n')}
    ];
  },
};

export default nextConfig;
`;

fs.writeFileSync('my-next-app/next.config.ts', config);
console.log(`✅ Created next.config.ts with ${redirects.length} redirects`);



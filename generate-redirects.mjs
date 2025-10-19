// generate-redirects.mjs
import fs from 'fs';
import path from 'path';

const csvPath = path.resolve('redirects.csv');
const vercelPath = path.resolve('vercel.json');

function extractPath(url) {
  try {
    // handle malformed new URLs with double slash (//..)
    url = url.replace('https://www.redrockcleans.com//', 'https://www.redrockcleans.com/');
    const u = new URL(url.trim());
    // always start from the first slash
    return u.pathname.endsWith('/') ? u.pathname : u.pathname + '/';
  } catch {
    // fallback if not a valid URL
    if (url.startsWith('https://www.redrockcleans.com/')) {
      let pathOnly = url.replace('https://www.redrockcleans.com', '');
      if (!pathOnly.startsWith('/')) pathOnly = '/' + pathOnly;
      if (!pathOnly.endsWith('/')) pathOnly = pathOnly + '/';
      return pathOnly;
    }
    return url;
  }
}

// Step 1: Read vercel.json (or create empty object)
let vercelConfig = {};
if (fs.existsSync(vercelPath)) {
  try {
    vercelConfig = JSON.parse(fs.readFileSync(vercelPath, 'utf8'));
  } catch {
    vercelConfig = {};
  }
}

// Step 2: Read and parse redirects.csv
const csvText = fs.readFileSync(csvPath, 'utf8');
const lines = csvText.split(/\r?\n/);
const redirects = [];
for (let i = 1; i < lines.length; i++) {
  if (!lines[i].trim()) continue;
  const split = lines[i].split(',');
  if (split.length < 2) continue;
  const source = extractPath(split[0]);
  const destination = extractPath(split[1]);
  redirects.push({ source, destination, permanent: true });
}

// Step 3: Update vercel.json config
vercelConfig.redirects = redirects;

// Step 4: Write to vercel.json
fs.writeFileSync(vercelPath, JSON.stringify(vercelConfig, null, 2));
console.log(`Successfully updated vercel.json with ${redirects.length} redirects.`);



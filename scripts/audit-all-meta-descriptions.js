import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const results = [];
const descriptions = new Map(); // Track duplicate descriptions

function extractMetaDescription(content, filePath) {
  // Look for meta name="description" content="..."
  const metaRegex = /<meta\s+name=["']description["']\s+content=["']([^"']+)["']/gi;
  const matches = [...content.matchAll(metaRegex)];
  
  if (matches.length === 0) {
    return null;
  }
  
  // Get the description
  let description = matches[0][1];
  
  // Check if it's using i18n
  const isI18n = content.includes('t("pageDescriptions') || 
                 content.includes('t("services.') ||
                 content.includes('{t(');
  
  return {
    description,
    isI18n,
    rawMatch: matches[0][0]
  };
}

function scanDirectory(dir) {
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      scanDirectory(fullPath);
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      
      // Only process files that have Helmet or meta tags
      if (content.includes('<Helmet>') || content.includes('meta name="description"')) {
        const metaInfo = extractMetaDescription(content, fullPath);
        const relativePath = path.relative(path.join(__dirname, '..'), fullPath);
        
        if (metaInfo) {
          const entry = {
            file: relativePath,
            description: metaInfo.description,
            isI18n: metaInfo.isI18n,
            length: metaInfo.description.length
          };
          
          results.push(entry);
          
          // Track duplicates
          if (!descriptions.has(metaInfo.description)) {
            descriptions.set(metaInfo.description, []);
          }
          descriptions.get(metaInfo.description).push(relativePath);
        } else if (content.includes('<Helmet>')) {
          results.push({
            file: relativePath,
            description: 'MISSING',
            isI18n: false,
            length: 0
          });
        }
      }
    }
  }
}

// Start scanning
const pagesDir = path.join(__dirname, '..', 'src', 'pages');
scanDirectory(pagesDir);

// Generate report
console.log('=== META DESCRIPTION AUDIT REPORT ===\n');
console.log(`Total pages scanned: ${results.length}\n`);

// Missing descriptions
const missing = results.filter(r => r.description === 'MISSING');
console.log(`\n📋 MISSING DESCRIPTIONS (${missing.length}):`);
missing.forEach(r => console.log(`  - ${r.file}`));

// Duplicate descriptions
console.log(`\n\n🔄 DUPLICATE DESCRIPTIONS:`);
let duplicateCount = 0;
for (const [desc, files] of descriptions.entries()) {
  if (files.length > 1) {
    duplicateCount++;
    console.log(`\n"${desc.substring(0, 100)}${desc.length > 100 ? '...' : ''}"`);
    console.log(`  Used in ${files.length} files:`);
    files.forEach(f => console.log(`    - ${f}`));
  }
}
console.log(`\nTotal duplicate descriptions: ${duplicateCount}`);

// Descriptions too long (over 160 characters)
const tooLong = results.filter(r => r.length > 160 && r.description !== 'MISSING');
console.log(`\n\n📏 DESCRIPTIONS TOO LONG (>${160} chars) (${tooLong.length}):`);
tooLong.forEach(r => console.log(`  - ${r.file} (${r.length} chars)`));

// Descriptions too short (under 120 characters)
const tooShort = results.filter(r => r.length < 120 && r.description !== 'MISSING');
console.log(`\n\n📏 DESCRIPTIONS TOO SHORT (<120 chars) (${tooShort.length}):`);
tooShort.forEach(r => console.log(`  - ${r.file} (${r.length} chars)`));

// Not using i18n
const notI18n = results.filter(r => !r.isI18n && r.description !== 'MISSING');
console.log(`\n\n🌐 NOT USING I18N (${notI18n.length}):`);
notI18n.forEach(r => console.log(`  - ${r.file}`));

// Export to JSON
fs.writeFileSync(
  path.join(__dirname, '..', 'meta-description-full-audit.json'),
  JSON.stringify({ results, duplicates: Array.from(descriptions.entries()).filter(([_, files]) => files.length > 1) }, null, 2)
);

console.log(`\n\n✅ Full audit results saved to meta-description-full-audit.json`);


import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to recursively get all .tsx files
function getAllTsxFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      getAllTsxFiles(filePath, fileList);
    } else if (file.endsWith('.tsx')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Function to extract URL path from file path
function getUrlPath(filePath, projectRoot) {
  const pagesDir = path.join(projectRoot, 'src', 'pages');
  let relativePath = path.relative(pagesDir, filePath);
  
  // Convert Windows paths to forward slashes
  relativePath = relativePath.replace(/\\/g, '/');
  
  // Handle special cases
  if (relativePath === 'Index.tsx') return '/';
  if (relativePath.includes('index.page.tsx')) {
    relativePath = relativePath.replace('/index.page.tsx', '');
  }
  if (relativePath.includes('+Page.tsx')) {
    relativePath = relativePath.replace('/+Page.tsx', '');
  }
  if (relativePath.includes('+Page.server.tsx')) {
    return null; // Skip server files
  }
  
  // Handle location files
  if (relativePath.startsWith('locations/')) {
    const locationMap = {
      'SouthFloridaHome.tsx': '/south-florida',
      'SouthFloridaCalculator.tsx': '/south-florida-calculator',
      'SouthFloridaBooking.tsx': '/book-now-south-florida',
      'LasVegasHome.tsx': '/las-vegas',
      'LasVegasCalculator.tsx': '/las-vegas-calculator',
      'LasVegasBooking.tsx': '/book-now-las-vegas',
      'OahuHome.tsx': '/oahu',
      'OahuCalculator.tsx': '/oahu-calculator',
      'OahuBooking.tsx': '/book-now-oahu',
      'MauiHome.tsx': '/maui',
      'MauiCalculator.tsx': '/maui-calculator',
      'MauiBooking.tsx': '/book-now-maui',
      'ColumbusHome.tsx': '/columbus-ohio',
      'ColumbusCalculator.tsx': '/columbus-ohio-calculator',
      'ColumbusBooking.tsx': '/book-now-columbus-ohio',
      'DallasHome.tsx': '/dallas',
      'DallasCalculator.tsx': '/dallas-calculator',
      'DallasBooking.tsx': '/book-now-dallas',
    };
    
    const filename = relativePath.replace('locations/', '');
    return locationMap[filename] || null;
  }
  
  // Remove .tsx extension
  relativePath = relativePath.replace('.tsx', '');
  
  // Convert PascalCase to kebab-case for main page files
  if (!relativePath.includes('/')) {
    relativePath = relativePath
      .replace(/([A-Z])/g, '-$1')
      .toLowerCase()
      .replace(/^-/, '');
  }
  
  return '/' + relativePath;
}

// Function to extract meta information from file content
function extractMetaInfo(content, filePath) {
  const result = {
    title: null,
    description: null,
    hasHelmet: false
  };
  
  // Check if file uses Helmet
  if (content.includes('Helmet')) {
    result.hasHelmet = true;
    
    // Extract title - looking for patterns like <title>...</title>
    const titleMatch = content.match(/<title[^>]*>([^<]+)<\/title>/);
    if (titleMatch) {
      result.title = titleMatch[1].trim();
    } else {
      // Check for translated titles
      const titleTransMatch = content.match(/<title>\{t\("([^"]+)",\s*\{[^}]*defaultValue:\s*"([^"]+)"/);
      if (titleTransMatch) {
        result.title = titleTransMatch[2].trim();
      }
    }
    
    // Extract description - looking for patterns like <meta name="description" content="..." />
    const descMatch = content.match(/<meta\s+name="description"\s+content="([^"]+)"/);
    if (descMatch) {
      result.description = descMatch[1].trim();
    } else {
      // Check for translated descriptions
      const descTransMatch = content.match(/<meta\s+name="description"\s+content=\{t\("([^"]+)",\s*\{[^}]*defaultValue:\s*"([^"]+)"/);
      if (descTransMatch) {
        result.description = descTransMatch[2].trim();
      }
    }
  }
  
  return result;
}

// Main execution
console.log('🔍 Auditing Meta Descriptions for Red Rock Cleans\n');

const projectRoot = path.join(__dirname, '..');
const pagesDir = path.join(projectRoot, 'src', 'pages');
const allFiles = getAllTsxFiles(pagesDir);

const auditResults = [];

allFiles.forEach(filePath => {
  const content = fs.readFileSync(filePath, 'utf-8');
  const urlPath = getUrlPath(filePath, projectRoot);
  
  if (!urlPath) return; // Skip files we can't map to URLs
  
  const metaInfo = extractMetaInfo(content, filePath);
  
  auditResults.push({
    file: path.relative(projectRoot, filePath),
    url: urlPath,
    hasHelmet: metaInfo.hasHelmet,
    title: metaInfo.title,
    description: metaInfo.description,
    descriptionLength: metaInfo.description ? metaInfo.description.length : 0,
    needsOptimization: !metaInfo.description || metaInfo.description.length < 120 || metaInfo.description.length > 158
  });
});

// Sort by URL
auditResults.sort((a, b) => a.url.localeCompare(b.url));

// Generate report
console.log('📊 META DESCRIPTION AUDIT REPORT\n');
console.log('='.repeat(100));

let withDescription = 0;
let withoutDescription = 0;
let needsOptimization = 0;

auditResults.forEach(result => {
  if (result.description) {
    withDescription++;
    if (result.needsOptimization) {
      needsOptimization++;
    }
  } else {
    withoutDescription++;
  }
  
  console.log(`\nURL: ${result.url}`);
  console.log(`File: ${result.file}`);
  console.log(`Title: ${result.title || '❌ MISSING'}`);
  console.log(`Description: ${result.description || '❌ MISSING'}`);
  
  if (result.description) {
    console.log(`Length: ${result.descriptionLength} chars ${result.descriptionLength < 120 ? '⚠️ TOO SHORT' : result.descriptionLength > 158 ? '⚠️ TOO LONG' : '✅ GOOD'}`);
  }
  
  console.log('-'.repeat(100));
});

console.log('\n📈 SUMMARY STATISTICS');
console.log('='.repeat(100));
console.log(`Total Pages: ${auditResults.length}`);
console.log(`With Meta Description: ${withDescription} (${Math.round(withDescription/auditResults.length*100)}%)`);
console.log(`Without Meta Description: ${withoutDescription} (${Math.round(withoutDescription/auditResults.length*100)}%)`);
console.log(`Needs Optimization: ${needsOptimization} (${Math.round(needsOptimization/auditResults.length*100)}%)`);

// Save detailed JSON report
const jsonReport = {
  auditDate: new Date().toISOString(),
  totalPages: auditResults.length,
  statistics: {
    withDescription,
    withoutDescription,
    needsOptimization
  },
  pages: auditResults
};

fs.writeFileSync('meta-description-audit.json', JSON.stringify(jsonReport, null, 2));
console.log('\n✅ Detailed report saved to: meta-description-audit.json');

// Generate CSV for easy review
const csv = [
  ['URL', 'File', 'Has Description', 'Current Description', 'Length', 'Status'].join(',')
];

auditResults.forEach(result => {
  csv.push([
    result.url,
    result.file,
    result.description ? 'Yes' : 'No',
    result.description ? `"${result.description.replace(/"/g, '""')}"` : '',
    result.descriptionLength,
    result.needsOptimization ? 'Needs Optimization' : 'OK'
  ].join(','));
});

fs.writeFileSync('meta-description-audit.csv', csv.join('\n'));
console.log('✅ CSV report saved to: meta-description-audit.csv');


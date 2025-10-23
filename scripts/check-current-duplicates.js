import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// List of English pages from the duplicate CSV (lines 2-172)
const duplicatePages = [
  'src/pages/about/+Page.tsx',
  'src/pages/FAQ.tsx',
  'src/pages/ResidentialCleaning.tsx',
  'src/pages/CommercialCleaning.tsx',
  'src/pages/church-cleaning/+Page.tsx',
  'src/pages/data-center-cleaning/+Page.tsx',
  'src/pages/industrial-cleaning/+Page.tsx',
  'src/pages/factory-cleaning/+Page.tsx',
  'src/pages/government-facility-cleaning/+Page.tsx',
  'src/pages/gym-cleaning/+Page.tsx',
  'src/pages/medical-office-cleaning/+Page.tsx',
  'src/pages/general-retail-cleaning/+Page.tsx',
  'src/pages/school-cleaning/+Page.tsx',
  'src/pages/showroom-cleaning/+Page.tsx',
  'src/pages/warehouse-cleaning/+Page.tsx',
  'src/pages/salon-spa-cleaning/+Page.tsx',
  'src/pages/restaurant-cleaning/+Page.tsx',
  'src/pages/standard-cleaning-services/+Page.tsx',
  'src/pages/deep-cleaning-services/+Page.tsx',
  'src/pages/AirbnbCleaning.tsx',
  'src/pages/PostConstruction.tsx',
  'src/pages/MoveOutCleaning.tsx',
  'src/pages/CommercialCleaningEstimator.tsx',
  'src/pages/commercial-cleaning-time-estimator/index.page.tsx',
  'src/pages/commercial-cleaning-cost-estimator/index.page.tsx',
  'src/pages/commercial-quote/index.page.tsx',
  'src/pages/Contact.tsx',
  'src/pages/TermsAndConditions.tsx',
  'src/pages/PrivacyPolicy.tsx',
  'src/pages/Sitemap.tsx',
  'src/pages/Blog.tsx',
  'src/pages/StandardVsDeep.tsx',
  'src/pages/HiringRequirements.tsx',
  'src/pages/HiringApplicationNew.tsx',
];

// Check each file
console.log('Checking English pages for titles...\n');
console.log('='.repeat(80));

const homePageTitle = 'Red Rock Cleaning - Trusted Local Cleaning Experts';
let duplicatesFound = 0;
let missingTitles = 0;

duplicatePages.forEach(filePath => {
  const fullPath = path.join(__dirname, '..', filePath);
  
  try {
    if (!fs.existsSync(fullPath)) {
      console.log(`❌ File not found: ${filePath}`);
      return;
    }
    
    const content = fs.readFileSync(fullPath, 'utf8');
    
    // Check if it has Helmet
    if (!content.includes('Helmet')) {
      console.log(`⚠️  Missing Helmet: ${filePath}`);
      missingTitles++;
      return;
    }
    
    // Extract title
    const titleMatch = content.match(/<title>(.*?)<\/title>/);
    
    if (!titleMatch) {
      console.log(`⚠️  Has Helmet but no title: ${filePath}`);
      missingTitles++;
      return;
    }
    
    const title = titleMatch[1].trim();
    
    if (title === homePageTitle) {
      console.log(`🔴 DUPLICATE: ${filePath}`);
      console.log(`   Title: "${title}"\n`);
      duplicatesFound++;
    } else {
      console.log(`✅ Unique: ${filePath}`);
      console.log(`   Title: "${title}"\n`);
    }
    
  } catch (error) {
    console.log(`❌ Error reading ${filePath}: ${error.message}`);
  }
});

console.log('='.repeat(80));
console.log(`\nSUMMARY:`);
console.log(`Pages with duplicate homepage title: ${duplicatesFound}`);
console.log(`Pages missing Helmet/title: ${missingTitles}`);
console.log(`Total issues: ${duplicatesFound + missingTitles}`);


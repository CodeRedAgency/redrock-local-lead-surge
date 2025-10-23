// Script to generate SEO-optimized meta descriptions
// Optimal length: 120-155 characters
// Must include: location + service + value proposition/CTA

const locations = {
  'south-florida': { name: 'South Florida', cities: 'Fort Lauderdale & Weston' },
  'las-vegas': { name: 'Las Vegas', cities: 'Las Vegas & Henderson' },
  'oahu': { name: 'Oahu', cities: 'Honolulu & Oahu' },
  'maui': { name: 'Maui', cities: 'Maui' },
  'dallas': { name: 'Dallas', cities: 'Dallas & Plano' },
  'columbus-ohio': { name: 'Columbus', cities: 'Columbus Ohio' }
};

const services = {
  'standard-cleaning': {
    short: 'Standard Cleaning',
    desc: 'Regular maintenance cleaning for consistent freshness'
  },
  'deep-cleaning': {
    short: 'Deep Cleaning',
    desc: 'Thorough cleaning for every corner of your space'
  },
  'airbnb-cleaning': {
    short: 'Airbnb Cleaning',
    desc: 'Fast turnovers with guest-ready results every time'
  },
  'move-out-cleaning': {
    short: 'Move-Out Cleaning',
    desc: 'Complete cleaning to secure your full security deposit'
  },
  'post-construction-cleaning': {
    short: 'Post-Construction',
    desc: 'Thorough cleanup after renovation or construction projects'
  }
};

const commercialServices = {
  'church-cleaning': {
    short: 'Church Cleaning',
    desc: 'Respectful, thorough cleaning for places of worship'
  },
  'data-center-cleaning': {
    short: 'Data Center Cleaning',
    desc: 'Specialized cleaning to protect critical infrastructure'
  },
  'factory-cleaning': {
    short: 'Factory Cleaning',
    desc: 'Heavy-duty industrial cleaning for manufacturing facilities'
  },
  'government-facility-cleaning': {
    short: 'Government Facility Cleaning',
    desc: 'Secure, compliant cleaning for municipal buildings'
  },
  'gym-cleaning': {
    short: 'Gym Cleaning',
    desc: 'Sanitized equipment and facilities for member safety'
  },
  'industrial-cleaning': {
    short: 'Industrial Cleaning',
    desc: 'Heavy-duty cleaning for warehouses and factories'
  },
  'medical-office-cleaning': {
    short: 'Medical Office Cleaning',
    desc: 'HIPAA-compliant cleaning for healthcare facilities'
  },
  'restaurant-cleaning': {
    short: 'Restaurant Cleaning',
    desc: 'Food-safe cleaning to maintain health code compliance'
  },
  'retail-cleaning': {
    short: 'Retail Store Cleaning',
    desc: 'Pristine spaces that enhance customer experience'
  },
  'salon-spa-cleaning': {
    short: 'Salon & Spa Cleaning',
    desc: 'Hygienic, luxurious environments for client relaxation'
  },
  'school-cleaning': {
    short: 'School Cleaning',
    desc: 'Safe, healthy learning environments for students'
  },
  'showroom-cleaning': {
    short: 'Showroom Cleaning',
    desc: 'Spotless displays that showcase your products perfectly'
  },
  'warehouse-cleaning': {
    short: 'Warehouse Cleaning',
    desc: 'Efficient cleaning to maximize safety and productivity'
  }
};

const descriptions = {};

// Generate location-specific service descriptions
for (const [locKey, locData] of Object.entries(locations)) {
  for (const [svcKey, svcData] of Object.entries(services)) {
    const key = `${locKey}-${svcKey}`;
    const desc = `${svcData.short} in ${locData.name} | ${svcData.desc}. Professional service in ${locData.cities}. Book today!`;
    descriptions[key] = desc;
  }
  
  for (const [svcKey, svcData] of Object.entries(commercialServices)) {
    const key = `${locKey}-${svcKey}`;
    const desc = `${svcData.short} in ${locData.name} | ${svcData.desc}. Trusted by businesses in ${locData.cities}.`;
    descriptions[key] = desc;
  }
}

// Print all descriptions with their character counts
console.log('=== OPTIMIZED META DESCRIPTIONS ===\n');
console.log('Generated', Object.keys(descriptions).length, 'descriptions\n');

// Group by character length
const byLength = {
  optimal: [],
  tooLong: [],
  tooShort: []
};

for (const [key, desc] of Object.entries(descriptions)) {
  const length = desc.length;
  if (length >= 120 && length <= 155) {
    byLength.optimal.push({ key, desc, length });
  } else if (length > 155) {
    byLength.tooLong.push({ key, desc, length });
  } else {
    byLength.tooShort.push({ key, desc, length });
  }
}

console.log(`✅ Optimal length (120-155 chars): ${byLength.optimal.length}`);
console.log(`⚠️  Too long (>155 chars): ${byLength.tooLong.length}`);
console.log(`⚠️  Too short (<120 chars): ${byLength.tooShort.length}`);

// Show examples
console.log('\n\n=== EXAMPLES ===\n');
const examples = Object.entries(descriptions).slice(0, 5);
for (const [key, desc] of examples) {
  console.log(`${key}:`);
  console.log(`  "${desc}"`);
  console.log(`  (${desc.length} chars)\n`);
}

// Export as JSON
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

fs.writeFileSync(
  path.join(__dirname, '..', 'optimized-descriptions.json'),
  JSON.stringify({
    descriptions,
    stats: {
      total: Object.keys(descriptions).length,
      optimal: byLength.optimal.length,
      tooLong: byLength.tooLong.length,
      tooShort: byLength.tooShort.length
    },
    tooLong: byLength.tooLong,
    tooShort: byLength.tooShort
  }, null, 2)
);

console.log('\n✅ Saved to optimized-descriptions.json');


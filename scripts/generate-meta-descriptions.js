import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, '..');

// Load audit data
const auditData = JSON.parse(
  fs.readFileSync(path.join(projectRoot, 'meta-description-audit.json'), 'utf-8')
);

// Location mappings
const locationData = {
  'south-florida': {
    name: 'South Florida',
    cities: 'Fort Lauderdale, Weston, and Miami',
    shortCities: 'Fort Lauderdale & Weston',
    emoji: '☀️'
  },
  'las-vegas': {
    name: 'Las Vegas',
    cities: 'Las Vegas, Henderson, and Summerlin',
    shortCities: 'Las Vegas & Henderson',
    emoji: '🎰'
  },
  'oahu': {
    name: 'Oahu',
    cities: 'Honolulu, Waikiki, and Kailua',
    shortCities: 'Honolulu & Waikiki',
    emoji: '🌺'
  },
  'maui': {
    name: 'Maui',
    cities: 'Wailea, Lahaina, and Kihei',
    shortCities: 'Wailea & Lahaina',
    emoji: '🏝️'
  },
  'columbus-ohio': {
    name: 'Columbus Ohio',
    cities: 'Columbus, Dublin, and Upper Arlington',
    shortCities: 'Columbus & Dublin',
    emoji: '🏈'
  },
  'dallas': {
    name: 'Dallas',
    cities: 'Dallas, Plano, and Frisco',
    shortCities: 'Dallas & Plano',
    emoji: '🤠'
  }
};

// Service type mappings
const serviceDescriptions = {
  'standard-cleaning': {
    action: 'Maintain a spotless home',
    service: 'standard cleaning',
    benefit: 'regular maintenance',
    cta: 'Schedule your recurring service!'
  },
  'deep-cleaning': {
    action: 'Get a truly deep clean',
    service: 'deep cleaning',
    benefit: 'top-to-bottom scrubbing',
    cta: 'Book your deep clean today!'
  },
  'airbnb-cleaning': {
    action: 'Earn 5-star guest reviews',
    service: 'Airbnb cleaning',
    benefit: 'fast turnover service',
    cta: 'Book automated turnover cleaning!'
  },
  'move-out-cleaning': {
    action: 'Get your deposit back',
    service: 'move-out cleaning',
    benefit: 'end-of-lease perfection',
    cta: 'Secure your full deposit!'
  },
  'post-construction-cleaning': {
    action: 'Make your space move-in ready',
    service: 'post-construction cleaning',
    benefit: 'dust & debris removal',
    cta: 'Get your free quote!'
  },
  'church-cleaning': {
    action: 'Keep your place of worship pristine',
    service: 'church cleaning',
    benefit: 'respectful, detailed service',
    cta: 'Request a consultation!'
  },
  'data-center-cleaning': {
    action: 'Protect your critical infrastructure',
    service: 'data center cleaning',
    benefit: 'ISO-compliant cleanroom service',
    cta: 'Ensure uptime with expert cleaning!'
  },
  'factory-cleaning': {
    action: 'Keep your facility safe & productive',
    service: 'factory cleaning',
    benefit: 'heavy-duty industrial service',
    cta: 'Get a custom quote!'
  },
  'government-facility-cleaning': {
    action: 'Maintain secure facilities',
    service: 'government cleaning',
    benefit: 'security-cleared staff',
    cta: 'Schedule a consultation!'
  },
  'gym-cleaning': {
    action: 'Keep members healthy & happy',
    service: 'gym cleaning',
    benefit: 'equipment disinfection',
    cta: 'Boost member retention!'
  },
  'industrial-cleaning': {
    action: 'Maintain OSHA compliance',
    service: 'industrial cleaning',
    benefit: 'heavy-duty solutions',
    cta: 'Schedule your service!'
  },
  'medical-office-cleaning': {
    action: 'Ensure patient safety',
    service: 'medical office cleaning',
    benefit: 'HIPAA-compliant service',
    cta: 'Protect your patients!'
  },
  'restaurant-cleaning': {
    action: 'Pass health inspections',
    service: 'restaurant cleaning',
    benefit: 'kitchen & dining sanitation',
    cta: 'Earn 5-star reviews!'
  },
  'retail-cleaning': {
    action: 'Impress every customer',
    service: 'retail cleaning',
    benefit: 'spotless storefronts',
    cta: 'Enhance your brand!'
  },
  'salon-spa-cleaning': {
    action: 'Create a relaxing atmosphere',
    service: 'salon & spa cleaning',
    benefit: 'pristine, hygienic service',
    cta: 'Delight your clients!'
  },
  'school-cleaning': {
    action: 'Provide a healthy learning environment',
    service: 'school cleaning',
    benefit: 'safe for students',
    cta: 'Protect your students!'
  },
  'showroom-cleaning': {
    action: 'Showcase products perfectly',
    service: 'showroom cleaning',
    benefit: 'meticulous presentation',
    cta: 'Impress every visitor!'
  },
  'warehouse-cleaning': {
    action: 'Improve safety & efficiency',
    service: 'warehouse cleaning',
    benefit: 'floor-to-ceiling service',
    cta: 'Get your free estimate!'
  }
};

// Generate optimized meta description
function generateMetaDescription(page) {
  const url = page.url;
  const currentLength = page.descriptionLength;
  
  // If description is already good (120-158 chars), keep it
  if (!page.needsOptimization && page.description) {
    return {
      url: url,
      currentDescription: page.description,
      currentLength: currentLength,
      optimizedDescription: page.description,
      optimizedLength: currentLength,
      status: '✅ Already Optimized',
      reasoning: 'Current description is within optimal range'
    };
  }

  let optimized = '';
  let reasoning = '';

  // Homepage
  if (url === '/') {
    optimized = 'Professional cleaning services in South Florida, Las Vegas, Hawaii, Columbus, and Dallas. Residential, commercial, and Airbnb cleaning. Book online today!';
    reasoning = 'Homepage: Multi-location overview with clear services and CTA';
  }
  
  // About pages
  else if (url.includes('about')) {
    optimized = 'Learn about Red Rock Cleans\' commitment to excellence in residential and commercial cleaning across South Florida, Las Vegas, Hawaii, Columbus, and Dallas.';
    reasoning = 'About page: Trust-building with locations';
  }
  
  // Blog listing
  else if (url === '/blog') {
    optimized = 'Expert cleaning tips, tricks, and guides from Red Rock Cleans professionals. Learn how to maintain a cleaner, healthier home and workspace. Read our blog!';
    reasoning = 'Blog listing: SEO-friendly with benefit-focused CTA';
  }
  
  // Individual blog posts
  else if (url.includes('/blog/cleaning-tips/')) {
    if (url.includes('6-handy-tips')) {
      optimized = 'Tired of endless chores? Discover 6 handy tips to minimize your time on housework and reclaim your free time. Read our time-saving cleaning guide!';
      reasoning = 'Blog post: Benefit-focused with natural CTA';
    } else if (url.includes('move-out-cleaning-checklist')) {
      optimized = 'Get your security deposit back with our ultimate move-out cleaning checklist. Room-by-room guide for perfect results. Free PDF download!';
      reasoning = 'Blog post: Problem-solution with value add';
    } else if (url.includes('ink-stains')) {
      optimized = 'Don\'t panic over ink stains! Our step-by-step guide shows effective techniques for removing ink from carpets. Professional tips included!';
      reasoning = 'Blog post: Reassuring tone with expert positioning';
    } else {
      // Keep existing if good, otherwise shorten
      optimized = page.description?.substring(0, 155) + '...' || 'Expert cleaning advice from Red Rock Cleans professionals. Learn proven techniques and tips for a cleaner, healthier space. Read our complete guide!';
      reasoning = 'Blog post: Shortened or generic optimized version';
    }
  }
  
  // Location home pages
  else if (url === '/south-florida' || url === '/las-vegas' || url === '/oahu' || url === '/maui' || url === '/columbus-ohio' || url === '/dallas') {
    const location = url.substring(1);
    const loc = locationData[location];
    optimized = `Premium house cleaning in ${loc.shortCities} by Red Rock Cleans. Residential, commercial, and vacation rental services. Book online today!`;
    reasoning = `Location home: City-specific with service types and CTA`;
  }
  
  // Booking pages
  else if (url.includes('book-now-')) {
    const location = url.replace('/book-now-', '');
    const loc = locationData[location];
    optimized = `Book professional cleaning in ${loc.name} instantly. Easy online scheduling for home, office, and Airbnb cleaning. Get your free quote now!`;
    reasoning = 'Booking page: Convenience-focused with CTA';
  }
  
  // Calculator pages
  else if (url.includes('-calculator')) {
    const location = url.replace('/', '').replace('-calculator', '');
    const loc = locationData[location];
    optimized = `Get an instant cleaning quote for ${loc.name}. Calculate costs for house, office, and vacation rental cleaning. Free estimate in seconds!`;
    reasoning = 'Calculator page: Speed and value proposition';
  }
  
  // Location + Service pages (e.g., /las-vegas/deep-cleaning-services)
  else if (url.split('/').length === 3) {
    const parts = url.split('/');
    const location = parts[1];
    const service = parts[2].replace('-services', '');
    
    const loc = locationData[location];
    const svc = serviceDescriptions[service];
    
    if (loc && svc) {
      optimized = `${svc.action} with Red Rock Cleans' ${svc.service} in ${loc.shortCities}. Professional ${svc.benefit}. ${svc.cta}`;
      reasoning = `Location + Service: Benefit-driven with location and CTA`;
    } else {
      // Fallback for unmapped services
      optimized = `Professional ${service.replace(/-/g, ' ')} services in ${loc?.name || 'your area'} by Red Rock Cleans. Trusted local experts. Get your free quote today!`;
      reasoning = 'Location + Service: Generic fallback';
    }
  }
  
  // General service pages (no location)
  else if (url.includes('cleaning') && !url.includes('blog')) {
    const serviceName = url.substring(1).replace(/-/g, ' ').replace('services', '').trim();
    
    if (url.includes('standard-cleaning')) {
      optimized = 'Keep your home spotless with Red Rock Cleans\' standard cleaning service. Regular maintenance for consistent freshness. Schedule your recurring service!';
    } else if (url.includes('deep-cleaning')) {
      optimized = 'Get a truly deep clean from Red Rock Cleans. Top-to-bottom scrubbing tackles built-up grime for maximum freshness. Book your deep clean today!';
    } else if (url.includes('airbnb-cleaning')) {
      optimized = 'Earn 5-star reviews with Red Rock Cleans\' Airbnb cleaning service. Fast turnover, consistent quality, guest-ready results. Automate your turnovers!';
    } else if (url.includes('move-out')) {
      optimized = 'Get your full security deposit back with Red Rock Cleans\' move-out cleaning. Thorough end-of-lease cleaning guaranteed. Book your move-out clean!';
    } else if (url.includes('post-construction')) {
      optimized = 'Make your space move-in ready with Red Rock Cleans\' post-construction cleaning. We remove all dust and debris. Get your free detailed quote!';
    } else if (url.includes('residential')) {
      optimized = 'Professional residential cleaning services for your home. From regular maintenance to deep cleaning, Red Rock Cleans keeps your house spotless. Book now!';
    } else if (url.includes('commercial')) {
      optimized = 'Professional commercial cleaning for offices, retail spaces, and businesses. Red Rock Cleans maintains a pristine workplace. Request your free estimate!';
    } else {
      optimized = `Professional ${serviceName} services by Red Rock Cleans. Trusted experts delivering exceptional results across all locations. Get your free quote today!`;
    }
    reasoning = 'General service page: Service-specific benefits with CTA';
  }
  
  // Contact pages
  else if (url.includes('contact')) {
    optimized = 'Contact Red Rock Cleans for professional cleaning in South Florida, Las Vegas, Hawaii, Columbus, and Dallas. Call, email, or book online. Free quotes!';
    reasoning = 'Contact page: Multi-channel with locations';
  }
  
  // FAQ page
  else if (url.includes('faq')) {
    optimized = 'Find answers to common questions about Red Rock Cleans\' services, pricing, scheduling, and policies. Get the information you need before booking!';
    reasoning = 'FAQ page: Helpful resource positioning';
  }
  
  // Sitemap
  else if (url.includes('sitemap')) {
    optimized = 'Browse Red Rock Cleans\' complete sitemap. Find all cleaning services, locations, resources, and pages. Quickly navigate to what you need!';
    reasoning = 'Sitemap: Navigation utility';
  }
  
  // Privacy & Legal
  else if (url.includes('privacy')) {
    optimized = 'Read Red Rock Cleans\' privacy policy. Learn how we collect, use, and protect your personal information when you use our website and services.';
    reasoning = 'Privacy: Trust and transparency';
  } else if (url.includes('terms')) {
    optimized = 'Review Red Rock Cleans\' terms and conditions. Important information about using our website and booking our professional cleaning services.';
    reasoning = 'Terms: Legal clarity';
  }
  
  // Hiring pages
  else if (url.includes('hiring') || url.includes('contractor')) {
    optimized = 'Join the Red Rock Cleans team! Learn about requirements, benefits, and how to apply as a professional cleaning contractor. Start your application today!';
    reasoning = 'Hiring: Recruitment focused';
  }
  
  // Estimator tools
  else if (url.includes('estimator') || url.includes('cost') || url.includes('time')) {
    optimized = 'Get instant estimates for commercial cleaning costs and time. Red Rock Cleans\' free calculator uses industry standards. Plan your budget confidently!';
    reasoning = 'Tool page: Utility and value';
  }
  
  // Default fallback for any unmapped pages
  else {
    optimized = page.description || 'Professional cleaning services by Red Rock Cleans. Trusted experts serving South Florida, Las Vegas, Hawaii, Columbus, and Dallas. Book online today!';
    reasoning = 'Fallback: Keep existing or use generic optimized';
  }
  
  // Ensure length is within bounds (120-158 chars)
  if (optimized.length > 158) {
    // Intelligently trim - try to remove the CTA first if too long
    const parts = optimized.split('. ');
    if (parts.length > 2) {
      optimized = parts.slice(0, -1).join('. ') + '.';
    }
    // If still too long, hard truncate
    if (optimized.length > 158) {
      optimized = optimized.substring(0, 155) + '...';
    }
  } else if (optimized.length < 120) {
    // If too short, consider adding location or benefit
    if (optimized.length < 100) {
      optimized += ' Get your free quote today!';
    }
  }
  
  return {
    url: url,
    currentDescription: page.description || '❌ MISSING',
    currentLength: currentLength,
    optimizedDescription: optimized,
    optimizedLength: optimized.length,
    status: optimized.length >= 120 && optimized.length <= 158 ? '✅ Optimized' : '⚠️ Needs Review',
    reasoning: reasoning
  };
}

// Process all pages
console.log('🎯 Generating Optimized Meta Descriptions for Red Rock Cleans\n');
console.log('='.repeat(120));

const results = auditData.pages
  .filter(page => !page.file.includes('.server.tsx')) // Skip server files
  .map(page => generateMetaDescription(page));

// Statistics
const stats = {
  total: results.length,
  optimized: results.filter(r => r.status === '✅ Optimized').length,
  alreadyGood: results.filter(r => r.status === '✅ Already Optimized').length,
  needsReview: results.filter(r => r.status === '⚠️ Needs Review').length
};

// Display results
results.forEach(result => {
  console.log(`\n${result.status} ${result.url}`);
  console.log(`Current: ${result.currentDescription}`);
  console.log(`  Length: ${result.currentLength} chars`);
  console.log(`\nOptimized: ${result.optimizedDescription}`);
  console.log(`  Length: ${result.optimizedLength} chars ${result.optimizedLength >= 120 && result.optimizedLength <= 158 ? '✅' : '⚠️'}`);
  console.log(`Reasoning: ${result.reasoning}`);
  console.log('-'.repeat(120));
});

// Summary
console.log('\n📊 GENERATION SUMMARY');
console.log('='.repeat(120));
console.log(`Total Pages Processed: ${stats.total}`);
console.log(`Newly Optimized: ${stats.optimized}`);
console.log(`Already Good: ${stats.alreadyGood}`);
console.log(`Needs Review: ${stats.needsReview}`);
console.log(`Success Rate: ${Math.round((stats.optimized + stats.alreadyGood) / stats.total * 100)}%`);

// Save results
const outputPath = path.join(projectRoot, 'meta-descriptions-optimized.json');
fs.writeFileSync(outputPath, JSON.stringify({ 
  generated: new Date().toISOString(),
  statistics: stats,
  results: results 
}, null, 2));
console.log(`\n✅ Results saved to: meta-descriptions-optimized.json`);

// Create CSV for easy import
const csvLines = [
  ['URL', 'File', 'Current Description', 'Current Length', 'Optimized Description', 'Optimized Length', 'Status', 'Reasoning'].join(',')
];

results.forEach(r => {
  const page = auditData.pages.find(p => p.url === r.url);
  csvLines.push([
    r.url,
    page?.file || '',
    `"${(r.currentDescription || '').replace(/"/g, '""')}"`,
    r.currentLength,
    `"${r.optimizedDescription.replace(/"/g, '""')}"`,
    r.optimizedLength,
    r.status,
    `"${r.reasoning.replace(/"/g, '""')}"`
  ].join(','));
});

fs.writeFileSync(path.join(projectRoot, 'meta-descriptions-optimized.csv'), csvLines.join('\n'));
console.log('✅ CSV export saved to: meta-descriptions-optimized.csv');

console.log('\n🎉 Meta description generation complete!');
console.log('\nNext steps:');
console.log('  1. Review the generated descriptions in meta-descriptions-optimized.csv');
console.log('  2. Make any adjustments to align with your brand voice');
console.log('  3. Use the implementation script to update your codebase');


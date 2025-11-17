#!/usr/bin/env node

/**
 * Extract content from Vite project service pages and convert to JSON
 * 
 * This script reads TSX files from src/pages/[location]/[service]/+Page.tsx
 * and extracts structured content to data/location-services/[location]-[service].json
 */

const fs = require('fs');
const path = require('path');

const cheerio = require('cheerio');

// Configuration
const SOURCE_DIR = path.join(__dirname, '..', 'src', 'pages');
const OUTPUT_DIR = path.join(__dirname, '..', 'my-next-app', 'data', 'location-services');

// Location mappings
const LOCATION_MAP = {
  'las-vegas': { name: 'Las Vegas', slug: 'las-vegas', phone: '(702) 508-0098' },
  'maui': { name: 'Maui', slug: 'maui', phone: '(808) 909-3038' },
  'oahu': { name: 'Oahu', slug: 'oahu', phone: '(808) 909-8801' },
  'south-florida': { name: 'South Florida', slug: 'south-florida', phone: '(954) 469-8881' },
  'columbus-ohio': { name: 'Columbus Ohio', slug: 'columbus-ohio', phone: '(380) 235-3135' },
  'dallas': { name: 'Dallas', slug: 'dallas', phone: '(972) 992-2576' },
};

// Service name mappings
const SERVICE_MAP = {
  'standard-cleaning-services': 'Standard Cleaning Services',
  'deep-cleaning-services': 'Deep Cleaning Services',
  'airbnb-cleaning-services': 'Airbnb Cleaning Services',
  'move-out-cleaning-services': 'Move Out Cleaning Services',
  'post-construction-cleaning-services': 'Post Construction Cleaning Services',
  'church-cleaning': 'Church Cleaning',
  'data-center-cleaning': 'Data Center Cleaning',
  'factory-cleaning': 'Factory Cleaning',
  'government-facility-cleaning': 'Government Facility Cleaning',
  'gym-cleaning': 'Gym Cleaning',
  'industrial-cleaning': 'Industrial Cleaning',
  'medical-office-cleaning': 'Medical Office Cleaning',
  'restaurant-cleaning': 'Restaurant Cleaning',
  'retail-cleaning': 'Retail Cleaning',
  'salon-spa-cleaning': 'Salon Spa Cleaning',
  'school-cleaning': 'School Cleaning',
  'showroom-cleaning': 'Showroom Cleaning',
  'warehouse-cleaning': 'Warehouse Cleaning',
};

/**
 * Extract text content from JSX/TSX string
 */
function extractTextFromJSX(jsxString) {
  // Remove JSX expressions like {variable}, {t('key')}, etc.
  let text = jsxString.replace(/\{[^}]*\}/g, '');
  // Remove JSX tags but keep text content
  text = text.replace(/<[^>]+>/g, '');
  // Clean up whitespace
  text = text.replace(/\s+/g, ' ').trim();
  return text;
}

/**
 * Extract hero section content using cheerio
 */
function extractHeroSection(fileContent) {
  const hero = {
    h1: '',
    subtitle: '',
    image: '',
    imageAlt: '',
  };

  try {
    // Use cheerio to parse JSX-like HTML
    const $ = cheerio.load(fileContent, { xml: { decodeEntities: false } });
    
    // Extract H1 from hero section
    const h1 = $('h1').first().text().trim();
    if (h1) {
      hero.h1 = h1.replace(/\{[^}]*\}/g, '').replace(/\s+/g, ' ').trim();
    }

    // Extract subtitle/paragraph from hero section (look for p with text-xl class)
    const subtitle = $('p.text-xl, p[class*="text-xl"]').first().text().trim();
    if (subtitle) {
      hero.subtitle = subtitle.replace(/\{[^}]*\}/g, '').replace(/\s+/g, ' ').trim();
    }

    // Extract hero image
    const img = $('img').first();
    if (img.length) {
      hero.image = img.attr('src') || '';
      hero.imageAlt = img.attr('alt') || '';
    }
  } catch (error) {
    // Fallback to regex if cheerio fails
    const h1Match = fileContent.match(/<h1[^>]*>([^<]+)<\/h1>/);
    if (h1Match) {
      hero.h1 = extractTextFromJSX(h1Match[1]);
    }

    const subtitleMatch = fileContent.match(/<p[^>]*className[^>]*text-xl[^>]*>([^<]+)<\/p>/);
    if (subtitleMatch) {
      hero.subtitle = extractTextFromJSX(subtitleMatch[1]);
    }

    const imgMatch = fileContent.match(/<img[^>]*src=["']([^"']+)["'][^>]*alt=["']([^"']+)["']/);
    if (imgMatch) {
      hero.image = imgMatch[1];
      hero.imageAlt = imgMatch[2];
    }
  }

  return hero;
}

/**
 * Extract metadata from Helmet component using cheerio
 */
function extractMetadata(fileContent) {
  const metadata = {
    title: '',
    description: '',
  };

  try {
    const $ = cheerio.load(fileContent, { xml: { decodeEntities: false } });
    
    // Extract title from Helmet
    const title = $('title').first().text().trim();
    if (title) {
      metadata.title = title.replace(/\{[^}]*\}/g, '').trim();
    }

    // Extract description from meta tag
    const desc = $('meta[name="description"]').attr('content');
    if (desc) {
      metadata.description = desc;
    }
  } catch (error) {
    // Fallback to regex
    const titleMatch = fileContent.match(/<title[^>]*>([^<]+)<\/title>/);
    if (titleMatch) {
      metadata.title = extractTextFromJSX(titleMatch[1]);
    }

    const descMatch = fileContent.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["']/);
    if (descMatch) {
      metadata.description = descMatch[1];
    }
  }

  return metadata;
}

/**
 * Extract trust/benefits section
 */
function extractTrustSection(fileContent) {
  const trust = {
    title: '',
    items: [],
  };

  // Find trust section by looking for h2 with "Trust" or "Why" keywords
  const trustSectionMatch = fileContent.match(/<h2[^>]*>(Why[^<]+Trust[^<]+|A Clean[^<]+)<\/h2>/);
  if (trustSectionMatch) {
    trust.title = extractTextFromJSX(trustSectionMatch[1]);
  }

  // Extract card items (benefits/features)
  const cardMatches = fileContent.matchAll(/<Card[^>]*>[\s\S]*?<h3[^>]*>([^<]+)<\/h3>[\s\S]*?<p[^>]*>([^<]+)<\/p>/g);
  for (const match of cardMatches) {
    trust.items.push({
      icon: 'shield', // Default icon, could be extracted from icon components
      title: extractTextFromJSX(match[1]),
      description: extractTextFromJSX(match[2]),
    });
  }

  return trust.items.length > 0 ? trust : null;
}

/**
 * Extract areas served section
 */
function extractAreasServed(fileContent) {
  const areasServed = {
    title: '',
    neighborhoods: [],
  };

  // Extract neighborhoods array from the file
  const neighborhoodsMatch = fileContent.match(/const neighborhoods\s*=\s*\[([\s\S]*?)\];/);
  if (neighborhoodsMatch) {
    try {
      // Try to parse as JavaScript array
      const neighborhoodsCode = neighborhoodsMatch[1];
      // Use eval in a safe way (only for trusted source files)
      const neighborhoods = eval(`[${neighborhoodsCode}]`);
      
      areasServed.neighborhoods = neighborhoods.map(n => ({
        id: n.id || '',
        name: n.name || '',
        description: n.description || '',
        faq: n.faq || [],
        testimonial: n.testimonial || undefined,
      }));

      // Extract title
      const titleMatch = fileContent.match(/<h2[^>]*>Areas We Serve[^<]*<\/h2>/);
      if (titleMatch) {
        areasServed.title = extractTextFromJSX(titleMatch[0]);
      } else {
        areasServed.title = 'Areas We Serve';
      }
    } catch (error) {
      console.warn(`Could not parse neighborhoods array: ${error.message}`);
    }
  }

  return areasServed.neighborhoods.length > 0 ? areasServed : null;
}

/**
 * Extract FAQ section
 */
function extractFAQ(fileContent) {
  const faq = {
    title: 'Frequently Asked Questions',
    items: [],
  };

  // Extract FAQ items from Accordion components
  const faqMatches = fileContent.matchAll(/<AccordionItem[^>]*>[\s\S]*?<h3[^>]*>([^<]+)<\/h3>[\s\S]*?<p[^>]*>([^<]+)<\/p>/g);
  for (const match of faqMatches) {
    faq.items.push({
      question: extractTextFromJSX(match[1]),
      answer: extractTextFromJSX(match[2]),
    });
  }

  return faq.items.length > 0 ? faq : null;
}

/**
 * Extract other services section
 */
function extractOtherServices(fileContent, location) {
  const otherServices = {
    title: '',
    description: '',
    services: [],
  };

  // Extract title
  const titleMatch = fileContent.match(/<h2[^>]*>Other[^<]*Services[^<]*<\/h2>/);
  if (titleMatch) {
    otherServices.title = extractTextFromJSX(titleMatch[0]);
  }

  // Extract description
  const descMatch = fileContent.match(/<p[^>]*text-xl[^>]*>([^<]+)<\/p>/);
  if (descMatch) {
    otherServices.description = extractTextFromJSX(descMatch[1]);
  }

  // Extract service links
  const linkMatches = fileContent.matchAll(/<Link[^>]*to=["']([^"']+)["'][^>]*>[\s\S]*?<h3[^>]*>([^<]+)<\/h3>[\s\S]*?<p[^>]*>([^<]+)<\/p>/g);
  for (const match of linkMatches) {
    otherServices.services.push({
      name: extractTextFromJSX(match[2]),
      description: extractTextFromJSX(match[3]),
      href: match[1].startsWith('/') ? `/en${match[1]}` : `/en/${location}${match[1]}`,
    });
  }

  return otherServices.services.length > 0 ? otherServices : null;
}

/**
 * Extract CTA section
 */
function extractCTA(fileContent, location) {
  const cta = {
    title: '',
    description: '',
    primaryButton: {
      text: '',
      href: '',
    },
    secondaryButton: undefined,
  };

  // Extract CTA title
  const titleMatch = fileContent.match(/<h2[^>]*>([^<]+)<\/h2>/);
  if (titleMatch) {
    cta.title = extractTextFromJSX(titleMatch[1]);
  }

  // Extract CTA description
  const descMatch = fileContent.match(/<p[^>]*text-xl[^>]*opacity-90[^>]*>([^<]+)<\/p>/);
  if (descMatch) {
    cta.description = extractTextFromJSX(descMatch[1]);
  }

  // Extract buttons
  const buttonMatches = fileContent.matchAll(/<Button[^>]*>[\s\S]*?<Link[^>]*to=["']([^"']+)["'][^>]*>[\s\S]*?([^<]+)<\/Link>/g);
  const buttons = Array.from(buttonMatches);
  if (buttons.length > 0) {
    cta.primaryButton = {
      text: extractTextFromJSX(buttons[0][2]),
      href: buttons[0][1].startsWith('/') ? `/en${buttons[0][1]}` : `/en/${location}${buttons[0][1]}`,
    };
  }
  if (buttons.length > 1) {
    cta.secondaryButton = {
      text: extractTextFromJSX(buttons[1][2]),
      href: buttons[1][1].startsWith('/') ? `/en${buttons[1][1]}` : `/en/${location}${buttons[1][1]}`,
    };
  }

  return cta;
}

/**
 * Get location info from file path
 */
function getLocationFromPath(filePath) {
  const parts = filePath.split(path.sep);
  const locationIndex = parts.findIndex(p => LOCATION_MAP[p]);
  if (locationIndex !== -1) {
    return LOCATION_MAP[parts[locationIndex]];
  }
  return null;
}

/**
 * Get service name from file path
 */
function getServiceFromPath(filePath) {
  const parts = filePath.split(path.sep);
  const serviceDir = parts.find(p => SERVICE_MAP[p]);
  if (serviceDir) {
    return { slug: serviceDir, name: SERVICE_MAP[serviceDir] };
  }
  return null;
}

/**
 * Process a single TSX file
 */
function processFile(filePath) {
  try {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    
    const location = getLocationFromPath(filePath);
    const service = getServiceFromPath(filePath);
    
    if (!location || !service) {
      console.warn(`Skipping ${filePath}: Could not determine location or service`);
      return null;
    }

    console.log(`Processing: ${location.name} - ${service.name}`);

    // Extract all sections
    const metadata = extractMetadata(fileContent);
    const hero = extractHeroSection(fileContent);
    const trust = extractTrustSection(fileContent);
    const areasServed = extractAreasServed(fileContent);
    const faq = extractFAQ(fileContent);
    const otherServices = extractOtherServices(fileContent, location.slug);
    const cta = extractCTA(fileContent, location.slug);

    // Build the JSON structure
    const jsonData = {
      metadata: {
        title: metadata.title || `${service.name} ${location.name} | Red Rock Cleans`,
        description: metadata.description || `Professional ${service.name.toLowerCase()} in ${location.name}. Get your free quote!`,
      },
      hero: {
        h1: hero.h1 || `${service.name} in ${location.name}`,
        subtitle: hero.subtitle || `Professional ${service.name.toLowerCase()} services for ${location.name}.`,
        ...(hero.image && { image: hero.image }),
        ...(hero.imageAlt && { imageAlt: hero.imageAlt }),
      },
      ...(trust && { trust }),
      ...(areasServed && { areasServed }),
      ...(otherServices && { otherServices }),
      ...(faq && { faq }),
      cta: cta.title ? cta : {
        title: `Ready to Experience the Red Rock Cleans Difference?`,
        description: `Join thousands of satisfied ${location.name} residents who trust Red Rock Cleans for reliable, professional ${service.name.toLowerCase()}.`,
        primaryButton: {
          text: 'Schedule Your Cleaning',
          href: `/en/book-now-${location.slug}`,
        },
        secondaryButton: {
          text: 'Get Free Quote',
          href: `/en/${location.slug}-calculator`,
        },
      },
      location: {
        name: location.name,
        slug: location.slug,
        bookingUrl: `/en/book-now-${location.slug}`,
        calculatorUrl: `/en/${location.slug}-calculator`,
        loginUrl: `https://customer-portal.maidily.com/red-rock-cleans-${location.slug}/sign-in`,
      },
    };

    return {
      filename: `${location.slug}-${service.slug}.json`,
      data: jsonData,
    };
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return null;
  }
}

/**
 * Find all service page files recursively
 */
function findServicePages(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      findServicePages(filePath, fileList);
    } else if (file === '+Page.tsx' || file === '+Page.tsx') {
      // Check if this is a location-specific service page
      const locationMatch = filePath.match(/[\\/](las-vegas|maui|oahu|south-florida|columbus-ohio|dallas)[\\/]/);
      if (locationMatch) {
        fileList.push(filePath);
      }
    }
  });

  return fileList;
}

/**
 * Main function
 */
function main() {
  console.log('Starting content extraction...\n');

  // Ensure output directory exists
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  // Find all service page files
  const serviceFiles = findServicePages(SOURCE_DIR);
  console.log(`Found ${serviceFiles.length} service page files\n`);

  let processed = 0;
  let skipped = 0;

  // Process each file
  serviceFiles.forEach(filePath => {
    const result = processFile(filePath);
    
    if (result) {
      const outputPath = path.join(OUTPUT_DIR, result.filename);
      fs.writeFileSync(outputPath, JSON.stringify(result.data, null, 2));
      console.log(`✓ Created: ${result.filename}\n`);
      processed++;
    } else {
      skipped++;
    }
  });

  console.log(`\n=== Summary ===`);
  console.log(`Processed: ${processed}`);
  console.log(`Skipped: ${skipped}`);
  console.log(`Total: ${serviceFiles.length}`);
}

// Run the script
if (require.main === module) {
  main();
}

module.exports = { processFile, extractHeroSection, extractMetadata };


import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Optimal meta descriptions (120-155 chars)
const descriptions = {
  // Location-specific services
  'south-florida/standard-cleaning-services': 'Professional standard cleaning in South Florida. Regular maintenance for homes in Fort Lauderdale & Weston. Book your service today!',
  'south-florida/deep-cleaning-services': 'Deep cleaning service in South Florida. Tackle built-up grime for a truly refreshed home in Fort Lauderdale & Weston. Book now!',
  'south-florida/airbnb-cleaning-services': 'Fast Airbnb cleaning in South Florida. Guest-ready turnovers in Fort Lauderdale & Weston. Professional vacation rental service.',
  'south-florida/move-out-cleaning-services': 'Move-out cleaning in South Florida. Secure your deposit with thorough cleaning in Fort Lauderdale & Weston. Book today!',
  'south-florida/post-construction-cleaning-services': 'Post-construction cleaning in South Florida. Remove dust & debris after renovations in Fort Lauderdale & Weston. Schedule now!',
  
  'las-vegas/standard-cleaning-services': 'Professional standard cleaning in Las Vegas. Reliable maintenance for homes in Las Vegas & Henderson. Schedule your service now!',
  'las-vegas/deep-cleaning-services': 'Deep cleaning service in Las Vegas. Restore your home sparkle with thorough cleaning in Las Vegas & Henderson. Book today!',
  'las-vegas/airbnb-cleaning-services': 'Las Vegas Airbnb cleaning services. Quick turnovers with guest-ready results in Las Vegas & Henderson. Book your cleaning!',
  'las-vegas/move-out-cleaning-services': 'Move-out cleaning in Las Vegas. Ensure you get your deposit back with thorough cleaning in Las Vegas & Henderson. Book now!',
  'las-vegas/post-construction-cleaning-services': 'Post-construction cleaning in Las Vegas. Professional cleanup after renovations in Las Vegas & Henderson. Contact us today!',
  
  'oahu/standard-cleaning-services': 'Standard cleaning services in Oahu. Consistent maintenance for Honolulu & Oahu homes. Professional Hawaiian cleaning service!',
  'oahu/deep-cleaning-services': 'Deep cleaning service in Oahu. Tackle built-up grime for a truly refreshed Hawaiian home in Honolulu. Book your service today!',
  'oahu/airbnb-cleaning-services': 'Oahu Airbnb cleaning services. Fast turnovers for vacation rentals in Honolulu & Oahu. Guest-ready results every time!',
  'oahu/move-out-cleaning-services': 'Move-out cleaning in Oahu. Get your full deposit back with comprehensive cleaning in Honolulu & Oahu. Book your service today!',
  'oahu/post-construction-cleaning-services': 'Post-construction cleaning in Oahu. Remove dust & debris after renovations in Honolulu. Professional Hawaiian service.',
  
  'maui/standard-cleaning-services': 'Maui standard cleaning services. Regular maintenance for your Hawaiian paradise. Professional cleaning in Maui. Book today!',
  'maui/deep-cleaning-services': 'Deep cleaning service in Maui. Restore your Hawaiian home sparkle with thorough, comprehensive cleaning. Book your service today!',
  'maui/airbnb-cleaning-services': 'Professional Airbnb cleaning in Maui. Quick turnovers for vacation rentals with guest-ready results. Schedule your service!',
  'maui/move-out-cleaning-services': 'Move-out cleaning in Maui. Secure your security deposit with thorough end-of-lease cleaning. Professional Hawaiian service!',
  'maui/post-construction-cleaning-services': 'Post-construction cleaning in Maui. Professional cleanup after renovations & construction. Remove all dust and debris today!',
  
  'dallas/standard-cleaning-services': 'Standard cleaning services in Dallas. Consistent maintenance for homes in Dallas, Plano & Frisco. Book your cleaning today!',
  'dallas/deep-cleaning-services': 'Deep cleaning service in Dallas. Tackle built-up grime for truly refreshed homes in Dallas, Plano & Frisco. Book today!',
  'dallas/airbnb-cleaning-services': 'Dallas Airbnb cleaning services. Fast turnovers with guest-ready results in Dallas, Plano & Frisco. Professional service!',
  'dallas/move-out-cleaning-services': 'Move-out cleaning in Dallas. Get your full deposit back with comprehensive cleaning in Dallas, Plano & Frisco. Book now!',
  'dallas/post-construction-cleaning-services': 'Post-construction cleaning in Dallas. Professional cleanup after renovations in Dallas, Plano & Frisco. Call for a quote!',
  
  'columbus-ohio/standard-cleaning-services': 'Columbus Ohio standard cleaning. Regular maintenance for your home. Professional residential cleaning services. Book today!',
  'columbus-ohio/deep-cleaning-services': 'Deep cleaning service in Columbus Ohio. Restore your home sparkle with thorough, comprehensive cleaning. Book your service!',
  'columbus-ohio/airbnb-cleaning-services': 'Columbus Ohio Airbnb cleaning. Quick turnovers for vacation rentals. Professional service ensures guest-ready results!',
  'columbus-ohio/move-out-cleaning-services': 'Move-out cleaning in Columbus Ohio. Secure your deposit with comprehensive end-of-lease cleaning. Schedule your service!',
  'columbus-ohio/post-construction-cleaning-services': 'Post-construction cleaning in Columbus Ohio. Remove dust & debris after renovations. Professional cleanup service available!',
  
  // Commercial services for all locations
  'south-florida/church-cleaning': 'South Florida church cleaning. Respectful, thorough cleaning for places of worship in Fort Lauderdale & Weston. Book today!',
  'south-florida/data-center-cleaning': 'Data center cleaning in South Florida. Protect critical infrastructure with specialized cleaning. Fort Lauderdale service!',
  'south-florida/factory-cleaning': 'Factory cleaning in South Florida. Heavy-duty industrial cleaning for manufacturing facilities in Fort Lauderdale. Book now!',
  'south-florida/government-facility-cleaning': 'Government facility cleaning in South Florida. Secure, compliant cleaning for municipal buildings. Fort Lauderdale service!',
  'south-florida/gym-cleaning': 'Gym cleaning services in South Florida. Sanitized equipment & facilities for Fort Lauderdale & Weston fitness centers!',
  'south-florida/industrial-cleaning': 'Industrial cleaning in South Florida. Heavy-duty cleaning for warehouses & factories in Fort Lauderdale & Weston area!',
  'south-florida/medical-office-cleaning': 'Medical office cleaning in South Florida. HIPAA-compliant service for Fort Lauderdale & Weston healthcare facilities today!',
  'south-florida/restaurant-cleaning': 'Restaurant cleaning in South Florida. Food-safe service maintaining health code compliance. Fort Lauderdale & Weston area!',
  'south-florida/retail-cleaning': 'Retail store cleaning in South Florida. Pristine spaces enhancing customer experience. Fort Lauderdale & Weston locations!',
  'south-florida/salon-spa-cleaning': 'Salon & spa cleaning in South Florida. Hygienic, luxurious environments for Fort Lauderdale & Weston beauty businesses!',
  'south-florida/school-cleaning': 'School cleaning in South Florida. Safe, healthy learning environments for students in Fort Lauderdale & Weston schools!',
  'south-florida/showroom-cleaning': 'Showroom cleaning in South Florida. Spotless displays showcasing your products perfectly. Fort Lauderdale & Weston service!',
  'south-florida/warehouse-cleaning': 'Warehouse cleaning in South Florida. Efficient service maximizing safety & productivity. Fort Lauderdale & Weston area!',
  
  // Las Vegas Commercial
  'las-vegas/church-cleaning': 'Las Vegas church cleaning. Respectful, thorough cleaning for places of worship in Las Vegas & Henderson. Book your service!',
  'las-vegas/data-center-cleaning': 'Data center cleaning in Las Vegas. Protect critical infrastructure with specialized cleaning in Las Vegas & Henderson.',
  'las-vegas/factory-cleaning': 'Factory cleaning in Las Vegas. Heavy-duty industrial cleaning for manufacturing facilities in Las Vegas & Henderson today!',
  'las-vegas/government-facility-cleaning': 'Government facility cleaning in Las Vegas. Secure, compliant cleaning for municipal buildings in Las Vegas & Henderson.',
  'las-vegas/gym-cleaning': 'Gym cleaning services in Las Vegas. Sanitized equipment & facilities for Las Vegas & Henderson fitness centers. Book today!',
  'las-vegas/industrial-cleaning': 'Industrial cleaning in Las Vegas. Heavy-duty cleaning for warehouses & factories in Las Vegas & Henderson. Call us today!',
  'las-vegas/medical-office-cleaning': 'Medical office cleaning in Las Vegas. HIPAA-compliant service for Las Vegas & Henderson healthcare facilities. Book today!',
  'las-vegas/restaurant-cleaning': 'Restaurant cleaning in Las Vegas. Food-safe service maintaining health code compliance in Las Vegas & Henderson. Book now!',
  'las-vegas/retail-cleaning': 'Retail store cleaning in Las Vegas. Pristine spaces enhancing customer experience in Las Vegas & Henderson. Book today!',
  'las-vegas/salon-spa-cleaning': 'Salon & spa cleaning in Las Vegas. Hygienic, luxurious environments for Las Vegas & Henderson beauty businesses. Book now!',
  'las-vegas/school-cleaning': 'School cleaning in Las Vegas. Safe, healthy learning environments for students in Las Vegas & Henderson schools. Book today!',
  'las-vegas/showroom-cleaning': 'Showroom cleaning in Las Vegas. Spotless displays showcasing your products perfectly in Las Vegas & Henderson. Book now!',
  'las-vegas/warehouse-cleaning': 'Warehouse cleaning in Las Vegas. Efficient service maximizing safety & productivity in Las Vegas & Henderson. Book today!',
  
  // Oahu Commercial
  'oahu/church-cleaning': 'Oahu church cleaning. Respectful, thorough cleaning for places of worship in Honolulu & Oahu. Professional Hawaiian service!',
  'oahu/data-center-cleaning': 'Data center cleaning in Oahu. Protect critical infrastructure with specialized cleaning in Honolulu. Hawaiian expertise!',
  'oahu/factory-cleaning': 'Factory cleaning in Oahu. Heavy-duty industrial cleaning for manufacturing facilities in Honolulu. Professional service!',
  'oahu/government-facility-cleaning': 'Government facility cleaning in Oahu. Secure, compliant cleaning for municipal buildings in Honolulu. Professional service!',
  'oahu/gym-cleaning': 'Gym cleaning services in Oahu. Sanitized equipment & facilities for Honolulu fitness centers. Professional Hawaiian service!',
  'oahu/industrial-cleaning': 'Industrial cleaning in Oahu. Heavy-duty cleaning for warehouses & factories in Honolulu. Professional Hawaiian service today!',
  'oahu/medical-office-cleaning': 'Medical office cleaning in Oahu. HIPAA-compliant service for Honolulu healthcare facilities. Professional Hawaiian service!',
  'oahu/restaurant-cleaning': 'Restaurant cleaning in Oahu. Food-safe service maintaining health code compliance in Honolulu. Professional Hawaiian service!',
  'oahu/retail-cleaning': 'Retail store cleaning in Oahu. Pristine spaces enhancing customer experience in Honolulu. Professional Hawaiian service!',
  'oahu/salon-spa-cleaning': 'Salon & spa cleaning in Oahu. Hygienic, luxurious environments for Honolulu beauty businesses. Professional Hawaiian service!',
  'oahu/school-cleaning': 'School cleaning in Oahu. Safe, healthy learning environments for students in Honolulu schools. Professional Hawaiian service!',
  'oahu/showroom-cleaning': 'Showroom cleaning in Oahu. Spotless displays showcasing your products perfectly in Honolulu. Professional Hawaiian service!',
  'oahu/warehouse-cleaning': 'Warehouse cleaning in Oahu. Efficient service maximizing safety & productivity in Honolulu. Professional Hawaiian service!',
  
  // Maui Commercial
  'maui/church-cleaning': 'Maui church cleaning. Respectful, thorough cleaning for places of worship. Professional Hawaiian service on Maui. Book today!',
  'maui/data-center-cleaning': 'Data center cleaning in Maui. Protect critical infrastructure with specialized cleaning. Professional Hawaiian service!',
  'maui/factory-cleaning': 'Factory cleaning in Maui. Heavy-duty industrial cleaning for manufacturing facilities. Professional Hawaiian service!',
  'maui/government-facility-cleaning': 'Government facility cleaning in Maui. Secure, compliant cleaning for municipal buildings. Professional Hawaiian service!',
  'maui/gym-cleaning': 'Gym cleaning services in Maui. Sanitized equipment & facilities for Maui fitness centers. Professional Hawaiian service today!',
  'maui/industrial-cleaning': 'Industrial cleaning in Maui. Heavy-duty cleaning for warehouses & factories. Professional Hawaiian service. Book your service!',
  'maui/medical-office-cleaning': 'Medical office cleaning in Maui. HIPAA-compliant service for Maui healthcare facilities. Professional Hawaiian service today!',
  'maui/restaurant-cleaning': 'Restaurant cleaning in Maui. Food-safe service maintaining health code compliance. Professional Hawaiian service. Book today!',
  'maui/retail-cleaning': 'Retail store cleaning in Maui. Pristine spaces enhancing customer experience. Professional Hawaiian service. Book your service!',
  'maui/salon-spa-cleaning': 'Salon & spa cleaning in Maui. Hygienic, luxurious environments for Maui beauty businesses. Professional Hawaiian service today!',
  'maui/school-cleaning': 'School cleaning in Maui. Safe, healthy learning environments for students in Maui schools. Professional Hawaiian service!',
  'maui/showroom-cleaning': 'Showroom cleaning in Maui. Spotless displays showcasing your products perfectly. Professional Hawaiian service. Book today!',
  'maui/warehouse-cleaning': 'Warehouse cleaning in Maui. Efficient service maximizing safety & productivity. Professional Hawaiian service. Book today!',
  
  // Dallas Commercial
  'dallas/church-cleaning': 'Dallas church cleaning. Respectful, thorough cleaning for places of worship in Dallas, Plano & Frisco. Book your service today!',
  'dallas/data-center-cleaning': 'Data center cleaning in Dallas. Protect critical infrastructure with specialized cleaning in Dallas, Plano & Frisco. Book now!',
  'dallas/factory-cleaning': 'Factory cleaning in Dallas. Heavy-duty industrial cleaning for manufacturing facilities in Dallas, Plano & Frisco. Book today!',
  'dallas/government-facility-cleaning': 'Government facility cleaning in Dallas. Secure, compliant cleaning for municipal buildings in Dallas, Plano & Frisco.',
  'dallas/gym-cleaning': 'Gym cleaning services in Dallas. Sanitized equipment & facilities for Dallas, Plano & Frisco fitness centers. Book today!',
  'dallas/industrial-cleaning': 'Industrial cleaning in Dallas. Heavy-duty cleaning for warehouses & factories in Dallas, Plano & Frisco. Book your service!',
  'dallas/medical-office-cleaning': 'Medical office cleaning in Dallas. HIPAA-compliant service for Dallas, Plano & Frisco healthcare facilities. Book today!',
  'dallas/restaurant-cleaning': 'Restaurant cleaning in Dallas. Food-safe service maintaining health code compliance in Dallas, Plano & Frisco. Book today!',
  'dallas/retail-cleaning': 'Retail store cleaning in Dallas. Pristine spaces enhancing customer experience in Dallas, Plano & Frisco. Book today!',
  'dallas/salon-spa-cleaning': 'Salon & spa cleaning in Dallas. Hygienic, luxurious environments for Dallas, Plano & Frisco beauty businesses. Book today!',
  'dallas/school-cleaning': 'School cleaning in Dallas. Safe, healthy learning environments for students in Dallas, Plano & Frisco schools. Book today!',
  'dallas/showroom-cleaning': 'Showroom cleaning in Dallas. Spotless displays showcasing your products perfectly in Dallas, Plano & Frisco. Book today!',
  'dallas/warehouse-cleaning': 'Warehouse cleaning in Dallas. Efficient service maximizing safety & productivity in Dallas, Plano & Frisco. Book today!',
  
  // Columbus Ohio Commercial
  'columbus-ohio/church-cleaning': 'Columbus Ohio church cleaning. Respectful, thorough cleaning for places of worship in Columbus. Professional service today!',
  'columbus-ohio/data-center-cleaning': 'Data center cleaning in Columbus Ohio. Protect critical infrastructure with specialized cleaning. Professional service!',
  'columbus-ohio/factory-cleaning': 'Factory cleaning in Columbus Ohio. Heavy-duty industrial cleaning for manufacturing facilities. Professional service today!',
  'columbus-ohio/government-facility-cleaning': 'Government facility cleaning in Columbus Ohio. Secure, compliant cleaning for municipal buildings. Professional service!',
  'columbus-ohio/gym-cleaning': 'Gym cleaning services in Columbus Ohio. Sanitized equipment & facilities for Columbus fitness centers. Book your service!',
  'columbus-ohio/industrial-cleaning': 'Industrial cleaning in Columbus Ohio. Heavy-duty cleaning for warehouses & factories. Professional service. Book today!',
  'columbus-ohio/medical-office-cleaning': 'Medical office cleaning in Columbus Ohio. HIPAA-compliant service for Columbus healthcare facilities. Book your service today!',
  'columbus-ohio/restaurant-cleaning': 'Restaurant cleaning in Columbus Ohio. Food-safe service maintaining health code compliance in Columbus. Book your service!',
  'columbus-ohio/retail-cleaning': 'Retail store cleaning in Columbus Ohio. Pristine spaces enhancing customer experience in Columbus. Book your service today!',
  'columbus-ohio/salon-spa-cleaning': 'Salon & spa cleaning in Columbus Ohio. Hygienic, luxurious environments for Columbus beauty businesses. Book your service!',
  'columbus-ohio/school-cleaning': 'School cleaning in Columbus Ohio. Safe, healthy learning environments for students in Columbus schools. Book your service!',
  'columbus-ohio/showroom-cleaning': 'Showroom cleaning in Columbus Ohio. Spotless displays showcasing your products perfectly in Columbus. Book your service!',
  'columbus-ohio/warehouse-cleaning': 'Warehouse cleaning in Columbus Ohio. Efficient service maximizing safety & productivity in Columbus. Book your service!',
  
  // Base commercial service pages
  'church-cleaning': 'Professional church cleaning services. Respectful, thorough cleaning for places of worship. Trusted by congregations nationwide!',
  'data-center-cleaning': 'Data center cleaning services. Protect critical infrastructure with specialized cleaning protocols. Professional service available!',
  'factory-cleaning': 'Factory cleaning services. Heavy-duty industrial cleaning for manufacturing facilities. Maintain safety & productivity. Call now!',
  'government-facility-cleaning': 'Government facility cleaning services. Secure, compliant cleaning for municipal & federal buildings. Professional service available!',
  'gym-cleaning': 'Gym & fitness center cleaning. Sanitized equipment & facilities ensuring member safety. Professional cleaning protocols. Book today!',
  'industrial-cleaning': 'Industrial cleaning services. Heavy-duty cleaning for warehouses, factories & facilities. Maximize safety & efficiency. Call now!',
  'medical-office-cleaning': 'Medical office cleaning services. HIPAA-compliant cleaning for healthcare facilities. Ensure patient safety. Book your service!',
  'restaurant-cleaning': 'Restaurant cleaning services. Food-safe cleaning maintaining health code compliance. Professional service for dining establishments!',
  'general-retail-cleaning': 'Retail store cleaning services. Pristine spaces enhancing customer experience. Professional cleaning for retail businesses. Book now!',
  'salon-spa-cleaning': 'Salon & spa cleaning services. Hygienic, luxurious environments for beauty businesses. Professional cleaning. Schedule your service!',
  'school-cleaning': 'School cleaning services. Safe, healthy learning environments for students & staff. Professional janitorial services. Call today!',
  'showroom-cleaning': 'Showroom cleaning services. Spotless displays showcasing your products perfectly. Professional cleaning for car dealers & showrooms!',
  'warehouse-cleaning': 'Warehouse cleaning services. Efficient cleaning maximizing safety & productivity. Professional industrial cleaning. Book your service!',
  
  // Base service pages
  'standard-cleaning-services': 'Professional standard cleaning services. Regular maintenance to keep your home or office consistently fresh and clean. Book today!',
  'deep-cleaning-services': 'Expert deep cleaning services. Thorough top-to-bottom cleaning for homes and businesses. Transform your space today!',
  'airbnb-cleaning-services': 'Professional Airbnb & vacation rental cleaning. Fast turnovers with guest-ready results. Trusted by hosts nationwide. Book now!',
  'move-out-cleaning-services': 'Move-out cleaning services. Get your full security deposit back with comprehensive end-of-lease cleaning. Book your service!',
  'post-construction-cleaning-services': 'Post-construction cleaning services. Professional cleanup removing dust & debris after renovations. Get your space move-in ready!',
  
  // Location home pages & calculators & booking
  'locations/SouthFloridaHome': 'Professional cleaning services in South Florida. Residential & vacation rental cleaning in Fort Lauderdale & Weston. Book today!',
  'locations/SouthFloridaCalculator': 'Get an instant cleaning quote in South Florida. Calculate costs for Fort Lauderdale & Weston cleaning services. Free estimate!',
  'locations/SouthFloridaBooking': 'Book cleaning services in South Florida. Easy online booking for Fort Lauderdale & Weston. Schedule your service today!',
  
  'locations/LasVegasHome': 'Las Vegas professional cleaning services. Residential & commercial cleaning in Las Vegas & Henderson. Quality you can trust!',
  'locations/LasVegasCalculator': 'Get an instant cleaning quote in Las Vegas. Calculate costs for Las Vegas & Henderson cleaning services. Free online estimate!',
  'locations/LasVegasBooking': 'Book cleaning services in Las Vegas. Easy online booking for Las Vegas & Henderson homes and businesses. Schedule today!',
  
  'locations/OahuHome': 'Oahu cleaning services. Professional residential & vacation rental cleaning in Honolulu. Experience premium Hawaiian service!',
  'locations/OahuCalculator': 'Get an instant cleaning quote in Oahu. Calculate costs for Honolulu & Oahu cleaning services. Free online estimate today!',
  'locations/OahuBooking': 'Book cleaning services in Oahu. Easy online booking for Honolulu residential & vacation rental cleaning. Schedule today!',
  
  'locations/MauiHome': 'Maui professional cleaning services. Vacation rental, deep & recurring cleaning for your Hawaiian paradise. Schedule today!',
  'locations/MauiCalculator': 'Get an instant cleaning quote in Maui. Calculate costs for Maui cleaning services. Free online estimate for your home today!',
  'locations/MauiBooking': 'Book cleaning services in Maui. Easy online booking for vacation rental & residential cleaning in Maui. Schedule today!',
  
  'locations/DallasHome': 'Dallas professional cleaning services. Residential & commercial packages in Dallas, Plano & Frisco. Reliable service you trust!',
  'locations/DallasCalculator': 'Get an instant cleaning quote in Dallas. Calculate costs for Dallas, Plano & Frisco cleaning services. Free online estimate!',
  'locations/DallasBooking': 'Book cleaning services in Dallas. Easy online booking for Dallas, Plano & Frisco homes and businesses. Schedule today!',
  
  'locations/ColumbusHome': 'Columbus Ohio cleaning services. Professional house & office cleaning with easy online booking. Reliable, quality service!',
  'locations/ColumbusCalculator': 'Get an instant cleaning quote in Columbus Ohio. Calculate costs for Columbus cleaning services. Free online estimate today!',
  'locations/ColumbusBooking': 'Book cleaning services in Columbus Ohio. Easy online booking for Columbus homes and offices. Schedule your service today!',
  
  // Estimators & Quote pages
  'commercial-cleaning-cost-estimator': 'Calculate commercial cleaning costs instantly. Get accurate quotes for office & business cleaning. Free online cost estimator!',
  'commercial-cleaning-time-estimator': 'Estimate commercial cleaning time. Plan your schedule with our professional time calculator. Accurate service time estimates!',
  'commercial-quote': 'Request a commercial cleaning quote. Get personalized pricing for your facility. Professional service tailored to your needs!',
  
  // Contact page
  'contact': 'Contact Red Rock Cleaning. Phone numbers & addresses for all locations including South Florida, Las Vegas, Hawaii, Dallas & Columbus.',
  
  // Blog posts
  'blog/cleaning-tips/6-handy-tips-to-help-you-minimize-your-time-on-housework': '6 tips to minimize housework time. Practical strategies to reduce cleaning time and reclaim your free time. Read expert advice!',
  'blog/cleaning-tips/step-by-step-guide-effective-techniques-for-removing-ink-stains-from-carpets': 'How to remove ink stains from carpets. Step-by-step guide with effective techniques. Professional carpet cleaning tips & tricks!',
  'blog/cleaning-tips/grill-maintenance-101-the-ultimate-guide-to-cleaning-your-outdoor-grill': 'Ultimate guide to cleaning your outdoor grill. Maintenance tips for better flavor & longer grill life. Master grill cleaning today!',
  'blog/cleaning-tips/natures-air-purifiers-the-best-plants-for-cleaner-indoor-air': 'Best air-purifying plants for your home. Natural ways to improve indoor air quality. Combine with cleaning for healthier living!',
  'blog/cleaning-tips/the-science-of-spring-cleaning': 'The science of spring cleaning. How decluttering & deep cleaning improve mood, health & focus. Get the ultimate checklist!',
  'blog/cleaning-tips/why-you-should-host-a-spring-cleaning-party': 'Why host a spring cleaning party? Turn cleaning into a fun event with friends. Get tips & know when to call professionals!',
  'blog/cleaning-tips/carpet-cleaning-to-remove-flea-infestation': 'Remove flea infestations from carpets. Professional carpet cleaning guide to eliminate fleas from your home. Effective solutions!',
  'blog/cleaning-tips/your-essential-guide-to-the-ultimate-move-out-cleaning-checklist': 'Ultimate move-out cleaning checklist. Room-by-room guide to secure your security deposit. Professional tips for perfect results!',
  'blog/cleaning-tips/health-code-violations': 'How to avoid health code violations. Learn the role of professional commercial cleaning in maintaining compliance. Essential guide!',
  'blog/cleaning-tips/airbnb-bedding-management-you-should-know': 'Airbnb bedding management guide. Best practices for keeping linens fresh & guest-ready between bookings. Expert hosting tips!',
};

// Function to update a file's meta description
function updateMetaDescription(filePath, newDescription) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Pattern to match meta description
  const metaPattern = /<meta\s+name=["']description["']\s+content=["']([^"']+)["']\s*\/>/i;
  
  const match = content.match(metaPattern);
  if (match) {
    const oldDesc = match[1];
    const newMeta = `<meta name="description" content="${newDescription}" />`;
    content = content.replace(metaPattern, newMeta);
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Updated: ${filePath}`);
    console.log(`   Old (${oldDesc.length} chars): ${oldDesc.substring(0, 60)}...`);
    console.log(`   New (${newDescription.length} chars): ${newDescription.substring(0, 60)}...`);
    return true;
  }
  
  return false;
}

// Scan and update files
function processDirectory(dir) {
  const items = fs.readdirSync(dir);
  let updateCount = 0;
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      updateCount += processDirectory(fullPath);
    } else if ((item.endsWith('.tsx') || item === '+Page.tsx') && fs.statSync(fullPath).isFile()) {
      const relativePath = path.relative(path.join(__dirname, '..', 'src', 'pages'), fullPath);
      const normalizedPath = relativePath.replace(/\\/g, '/').replace('/+Page.tsx', '').replace('.tsx', '');
      
      if (descriptions[normalizedPath]) {
        if (updateMetaDescription(fullPath, descriptions[normalizedPath])) {
          updateCount++;
        }
      }
    }
  }
  
  return updateCount;
}

// Start processing
const pagesDir = path.join(__dirname, '..', 'src', 'pages');
console.log('=== UPDATING META DESCRIPTIONS ===\n');
console.log(`Processing: ${pagesDir}\n`);

const totalUpdated = processDirectory(pagesDir);

console.log(`\n\n=== COMPLETE ===`);
console.log(`Total files updated: ${totalUpdated}`);
console.log(`\nNote: Files using i18n will need to be updated in common.json files.`);


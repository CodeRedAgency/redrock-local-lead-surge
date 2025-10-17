import { GeneralNavigation } from "@/components/GeneralNavigation";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";
import { Calendar, ArrowLeft, Flame, CheckCircle, Sparkles, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const GrillMaintenanceGuidePage = () => {
  return (
    <>
      <Helmet>
        <title>Grill Maintenance 101: The Ultimate Guide to Cleaning Your Outdoor Grill | Red Rock Cleans</title>
        <meta name="description" content="Master grill maintenance with our ultimate guide. Learn how to clean your outdoor grill for better taste, longer life, and a healthier cooking experience." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <GeneralNavigation />
        
        <main className="flex-grow">
          {/* Hero Section with Unsplash Image */}
          <section className="relative py-24 md:py-32 overflow-hidden">
            <div className="absolute inset-0">
              <img 
                src="https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=1920&q=80" 
                alt="Person grilling on a clean outdoor grill"
                className="w-full h-full object-cover scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto">
                <Link 
                  to="/blog" 
                  className="inline-flex items-center text-muted-foreground hover:text-primary mb-6 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Blog
                </Link>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-4">
                  <Calendar className="w-4 h-4" />
                  <span>October 18, 2025</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                  Grill Maintenance 101: The Ultimate Guide to Cleaning Your Outdoor Grill
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Keep your grill in top shape with expert cleaning tips that enhance flavor, extend equipment life, and ensure safe outdoor cooking all season long.
                </p>
              </div>
            </div>
          </section>

          {/* Article Content */}
          <article className="py-12 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-prose mx-auto">
                <p className="text-lg leading-relaxed mb-6">
                  There's something magical about cooking outdoors—the sizzle of steaks hitting hot grates, the aroma of smoke and seasoning wafting through your backyard, and the gathering of friends and family around the grill. But that magic quickly fades when you lift the lid to reveal grates caked with last month's burnt residue, grease dripping everywhere, and questionable gunk accumulating in every corner.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  A clean grill isn't just about aesthetics—it's about food safety, cooking performance, and protecting your investment. Whether you've got a high-end gas grill or a trusty charcoal kettle, proper maintenance ensures better-tasting food, prevents flare-ups, and extends your grill's lifespan by years. This comprehensive guide will walk you through everything you need to know about cleaning and maintaining your outdoor grill, from quick after-use care to deep seasonal cleaning.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6">Why Regular Grill Cleaning Matters</h2>
                
                <p className="text-lg leading-relaxed mb-6">
                  Before diving into the "how," let's understand the "why." Grill maintenance goes far beyond keeping your equipment looking presentable.
                </p>

                <h3 className="text-2xl font-semibold mt-8 mb-4">Health and Food Safety</h3>

                <p className="text-lg leading-relaxed mb-6">
                  Old grease and food particles aren't just unsightly—they're breeding grounds for bacteria. Carbonized residue from previous cookouts can transfer unwanted flavors to your food and potentially harbor harmful pathogens. Regular cleaning ensures every meal is cooked in a sanitary environment, protecting your family from foodborne illness.
                </p>

                <h3 className="text-2xl font-semibold mt-8 mb-4">Better Cooking Performance</h3>

                <p className="text-lg leading-relaxed mb-6">
                  A clean grill heats more evenly and efficiently. Grease buildup blocks airflow in charcoal grills and clogs burners in gas grills, causing hot spots and cold zones that result in unevenly cooked food. Clean grates also provide better sear marks and prevent food from sticking, giving you restaurant-quality results right in your backyard.
                </p>

                <h3 className="text-2xl font-semibold mt-8 mb-4">Equipment Longevity and Durability</h3>

                <p className="text-lg leading-relaxed mb-6">
                  Grills are significant investments, often costing hundreds or thousands of dollars. Accumulated grease and acidic food residue cause corrosion and deterioration of grates, burners, and other components. Regular maintenance can extend your grill's functional life from 5 years to 15+ years, making cleaning one of the best returns on investment for any outdoor equipment.
                </p>

                <h3 className="text-2xl font-semibold mt-8 mb-4">Fire Safety</h3>

                <p className="text-lg leading-relaxed mb-6">
                  Grease fires are a genuine hazard. Excessive grease buildup in drip pans and on burners can ignite, causing dangerous flare-ups or even full-blown fires. A clean grill significantly reduces this risk, keeping your outdoor cooking safe for everyone.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6">Essential Grill Cleaning Tools and Supplies</h2>

                <p className="text-lg leading-relaxed mb-6">
                  Having the right tools makes grill cleaning faster, easier, and more effective. Here's what you'll need in your grill maintenance arsenal:
                </p>

                <ul className="list-none space-y-3 mb-6 ml-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-lg"><strong>Wire grill brush:</strong> Choose one with sturdy bristles (stainless steel for durability) and ensure bristles are secure—loose bristles can stick to food</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-lg"><strong>Grill scraper:</strong> Metal or wood scrapers work great for stubborn residue on grates</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-lg"><strong>Stainless steel scouring pads:</strong> For scrubbing tough buildup on various surfaces</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-lg"><strong>Microfiber cloths or paper towels:</strong> For wiping down surfaces and applying cleaning solutions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-lg"><strong>Bucket and warm soapy water:</strong> Mild dish soap and water handle most cleaning tasks</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-lg"><strong>Degreaser spray:</strong> Specialized grill degreasers cut through tough grease quickly</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-lg"><strong>Baking soda and vinegar:</strong> Natural alternatives for gentle yet effective cleaning</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-lg"><strong>Disposable aluminum drip pans:</strong> Makes cleanup easier by simply replacing dirty pans</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-lg"><strong>Gloves:</strong> Protect your hands from grease, grime, and cleaning chemicals</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-lg"><strong>Vacuum or shop vac:</strong> For removing ash from charcoal grills</span>
                  </li>
                </ul>

                <h2 className="text-3xl font-bold mt-12 mb-6">Daily/After-Use Cleaning: The 10-Minute Routine</h2>

                <p className="text-lg leading-relaxed mb-6">
                  The easiest way to keep your grill in great shape is to clean it after every use. This quick routine prevents buildup and makes deep cleaning much easier when the time comes.
                </p>

                <h3 className="text-2xl font-semibold mt-8 mb-4">Step 1: Burn Off Residue (5 minutes)</h3>

                <p className="text-lg leading-relaxed mb-6">
                  After you've finished cooking and removed all food, crank your grill to high heat and close the lid. Let it run for 10-15 minutes. This "burn off" method carbonizes any remaining food particles, grease, and sauce, turning them into ash that's easy to brush away. This process also sterilizes the grates through high heat.
                </p>

                <h3 className="text-2xl font-semibold mt-8 mb-4">Step 2: Brush the Grates (3 minutes)</h3>

                <p className="text-lg leading-relaxed mb-6">
                  Once the burn-off is complete, turn off the heat and let the grill cool slightly—you want grates warm but not scorching. Use your grill brush to scrub the grates thoroughly, working in long strokes along the direction of the grates. The carbonized residue should flake off easily. For stubborn spots, use a grill scraper at an angle to dislodge stuck-on bits.
                </p>

                <h3 className="text-2xl font-semibold mt-8 mb-4">Step 3: Oil the Grates (2 minutes)</h3>

                <p className="text-lg leading-relaxed mb-6">
                  While the grates are still warm, lightly oil them with a high-heat cooking oil (canola, vegetable, or grapeseed oil work great). Fold a paper towel, dip it in oil, and use tongs to rub it across the grates. This creates a protective layer that prevents rust and keeps food from sticking during your next cookout. It also helps maintain the "seasoning" of your grates, similar to cast iron cookware.
                </p>

                <h3 className="text-2xl font-semibold mt-8 mb-4">Step 4: Quick Exterior Wipe (Optional, 2 minutes)</h3>

                <p className="text-lg leading-relaxed mb-6">
                  If grease or sauce splattered on the exterior during cooking, quickly wipe it down with a damp cloth. Fresh grease comes off easily, but once it bakes on in the sun, removal becomes much harder.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  This 10-15 minute post-cooking routine is all it takes to keep your grill in good daily condition. Make it a habit, and you'll rarely face stubborn buildup or overwhelming cleaning sessions.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6">Deep Cleaning: Seasonal or Quarterly Maintenance</h2>

                <p className="text-lg leading-relaxed mb-6">
                  Even with diligent after-use cleaning, grills need thorough deep cleaning 2-4 times per year—typically at the start and end of grilling season, and once or twice during peak usage months. This comprehensive cleaning addresses areas the daily routine doesn't reach.
                </p>

                <h3 className="text-2xl font-semibold mt-8 mb-4">Step 1: Disassemble for Access</h3>

                <p className="text-lg leading-relaxed mb-6">
                  Start by disconnecting gas grills from their fuel source (close the propane valve and disconnect the tank). Remove cooking grates, heat deflectors or flavorizer bars, burner covers, and any other removable components. Consult your grill's manual if you're unsure what comes apart—most components lift out easily once you know how.
                </p>

                <h3 className="text-2xl font-semibold mt-8 mb-4">Step 2: Deep Clean the Grates</h3>

                <p className="text-lg leading-relaxed mb-6">
                  For truly clean grates, you need more than a quick brush. Fill a large bucket or your utility sink with hot water and dish soap. Submerge the grates and let them soak for 30 minutes to an hour—this loosens baked-on grease. Then scrub thoroughly with a stainless steel pad or heavy-duty brush. For extremely stubborn buildup, make a paste of baking soda and water, apply it to problem areas, and let it sit for 15 minutes before scrubbing.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  Alternatively, some people swear by the "trash bag method": place grates in a heavy-duty garbage bag, spray liberally with oven cleaner or ammonia-based degreaser, seal the bag, and let it sit overnight. The fumes break down the grease, making it wipe away easily the next day. Rinse thoroughly after this treatment.
                </p>

                <h3 className="text-2xl font-semibold mt-8 mb-4">Step 3: Clean Burners and Heat Distribution Components</h3>

                <p className="text-lg leading-relaxed mb-6">
                  Inspect your burners (gas grills) or vents (charcoal grills) for clogs. Use a thin wire or pipe cleaner to clear burner holes—clogged burners cause uneven heating and yellow flames instead of blue. Brush or wipe heat deflectors, lava rocks, or ceramic briquettes to remove grease buildup.
                </p>

                <h3 className="text-2xl font-semibold mt-8 mb-4">Step 4: Scrub the Interior Firebox</h3>

                <p className="text-lg leading-relaxed mb-6">
                  The inside of your grill collects the most grease and carbon buildup. Use a grill scraper or putty knife to scrape heavy deposits from the interior walls and bottom. For gas grills, remove debris from the bottom tray. For charcoal grills, vacuum out all ash and charcoal remnants using a shop vac. Once loose debris is removed, spray the interior with degreaser, let it sit for 10-15 minutes, then scrub with scouring pads and rinse or wipe clean.
                </p>

                <h3 className="text-2xl font-semibold mt-8 mb-4">Step 5: Clean and Replace the Drip Pan</h3>

                <p className="text-lg leading-relaxed mb-6">
                  The drip pan catches all the grease and drippings, making it the grimiest part of your grill. If using disposable aluminum pans, simply replace them—this is by far the easiest approach. If your grill has a permanent drip tray, remove it and scrub it thoroughly with hot soapy water and a degreaser. For baked-on grease, let it soak, then use a metal scraper or steel wool to remove stubborn deposits.
                </p>

                <h3 className="text-2xl font-semibold mt-8 mb-4">Step 6: Clean the Exterior</h3>

                <p className="text-lg leading-relaxed mb-6">
                  Don't neglect the outside of your grill. For stainless steel exteriors, use a specialized stainless steel cleaner or a mixture of vinegar and water, wiping in the direction of the grain to avoid scratches. For painted surfaces, warm soapy water works well. Clean control knobs, handles, and side tables. If your grill has a built-in thermometer, wipe the glass face carefully to maintain visibility.
                </p>

                <h3 className="text-2xl font-semibold mt-8 mb-4">Step 7: Inspect and Reassemble</h3>

                <p className="text-lg leading-relaxed mb-6">
                  Before putting everything back together, inspect all components for damage. Look for rust on grates, cracks in burners, holes in heat deflectors, or worn gaskets. Replace any damaged parts—this preventive maintenance prevents bigger problems down the line. Once everything is clean and in good condition, reassemble your grill, oil the grates, and it's ready for action.
                </p>

                <h3 className="text-2xl font-semibold mt-8 mb-4">When to Call in the Professionals</h3>

                <p className="text-lg leading-relaxed mb-6">
                  Let's be honest: deep cleaning a grill is labor-intensive, time-consuming, and often quite messy. It's a project that easily takes 2-4 hours, requires disassembly knowledge, involves harsh chemicals, and leaves you covered in grease and grime. Not everyone has the time, physical ability, or inclination for this level of scrubbing.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  This is where professional <Link to="/deep-cleaning-services" className="text-primary hover:underline font-semibold">Deep Cleaning Services</Link> become invaluable. Professional cleaners have industrial-grade degreasers, specialized equipment, and the expertise to disassemble and thoroughly clean every component of your grill without damaging anything. They can tackle years of accumulated buildup, restore your grill to like-new condition, and handle the messy work while you focus on more enjoyable activities.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  Many homeowners schedule professional deep cleaning at the beginning of grilling season, giving them a pristine starting point. They then maintain it with the simple after-use cleaning routine, reserving professional help for the intensive seasonal deep clean. It's a practical approach that keeps your grill in top condition without sacrificing your entire weekend to scrubbing.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  Professional services are especially valuable for high-end grills, built-in outdoor kitchen installations, or if you're preparing to sell your home and want the grill looking its absolute best. The investment in professional cleaning often costs less than replacing corroded or damaged components that result from neglect.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6">Tips for Preventing Future Buildup</h2>

                <p className="text-lg leading-relaxed mb-6">
                  The best cleaning strategy is preventing excessive mess in the first place. These proactive habits minimize buildup and make both daily and deep cleaning significantly easier.
                </p>

                <ul className="list-none space-y-3 mb-6 ml-4">
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-lg"><strong>Line drip pans with aluminum foil:</strong> This creates a disposable barrier that catches grease and debris. Simply remove and replace the foil periodically for effortless cleanup</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-lg"><strong>Empty drip pans regularly:</strong> Don't let grease accumulate for months. Check after every few cookouts and empty when half full</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-lg"><strong>Use a grill mat or tray for messy foods:</strong> Fatty meats, marinated items, and saucy foods create the most mess. Using a perforated grill mat or grilling tray catches drips while still allowing smoke flavor</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-lg"><strong>Never skip the post-cooking brush:</strong> Those 5 minutes of brushing while the grill is still hot prevent hours of scrubbing later</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-lg"><strong>Keep your grill covered:</strong> A quality grill cover protects from rain, dust, pollen, and bird droppings, keeping both the interior and exterior cleaner between uses</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-lg"><strong>Trim excess fat from meats:</strong> While fat adds flavor, excessive dripping creates unnecessary grease buildup. Trim to a reasonable amount</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-lg"><strong>Apply sauces at the end:</strong> Sugary BBQ sauces and marinades burn and create stubborn residue. Apply them during the last few minutes of cooking rather than throughout</span>
                  </li>
                </ul>

                <h2 className="text-3xl font-bold mt-12 mb-6">Special Considerations for Different Grill Types</h2>

                <h3 className="text-2xl font-semibold mt-8 mb-4">Gas Grills</h3>

                <p className="text-lg leading-relaxed mb-6">
                  Pay extra attention to burner maintenance. Check connections for gas leaks using soapy water—bubbles indicate a leak that needs addressing immediately. Clean venturi tubes (the tubes connecting to burners) to prevent spider webs and debris from blocking gas flow. Inspect ignition systems and replace batteries in electronic igniters as needed.
                </p>

                <h3 className="text-2xl font-semibold mt-8 mb-4">Charcoal Grills</h3>

                <p className="text-lg leading-relaxed mb-6">
                  Empty ash after every use—accumulated ash blocks airflow and makes temperature control difficult. Check vents regularly to ensure they open and close smoothly. If using a kettle grill, clean the inside of the lid where smoke deposits accumulate.
                </p>

                <h3 className="text-2xl font-semibold mt-8 mb-4">Pellet Grills</h3>

                <p className="text-lg leading-relaxed mb-6">
                  These require more frequent deep cleaning due to ash accumulation from wood pellets. Vacuum out the firepot, clean the heat diffuser, and ensure the auger system is free of sawdust buildup. Follow manufacturer guidelines for maintaining the digital components and temperature probes.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6">Creating Your Grill Maintenance Schedule</h2>

                <p className="text-lg leading-relaxed mb-6">
                  Consistency is key to effortless grill maintenance. Create a simple schedule that fits your usage patterns:
                </p>

                <ul className="list-disc list-inside space-y-2 mb-6 ml-4 text-lg">
                  <li><strong>After Every Use:</strong> Burn off and brush grates, oil when cool (10 minutes)</li>
                  <li><strong>Weekly (during heavy use):</strong> Quick inspection and drip pan check (5 minutes)</li>
                  <li><strong>Monthly:</strong> Light interior cleaning and exterior wipe-down (30 minutes)</li>
                  <li><strong>Quarterly or Seasonally:</strong> Full deep cleaning or professional service (2-4 hours or outsourced)</li>
                  <li><strong>Start/End of Season:</strong> Comprehensive inspection, parts replacement, deep clean</li>
                </ul>

                <p className="text-lg leading-relaxed mb-6">
                  This tiered approach keeps maintenance manageable. The quick daily and weekly routines prevent major buildup, while the seasonal deep cleans address what the lighter maintenance misses.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6">Beyond the Grill: Complete Outdoor Space Maintenance</h2>

                <p className="text-lg leading-relaxed mb-6">
                  A pristine grill looks even better when it's part of a clean, well-maintained outdoor entertaining area. While you're focused on grill maintenance, don't overlook the surrounding space—patio furniture, outdoor cushions, deck surfaces, and outdoor kitchens all benefit from regular cleaning.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  For homeowners who love hosting but want to spend their time entertaining rather than cleaning, <Link to="/standard-cleaning-services" className="text-primary hover:underline font-semibold">Standard Cleaning Services</Link> can help maintain your entire outdoor entertaining area. Professional cleaners can handle deck sweeping, furniture wiping, cushion cleaning, and general outdoor space tidiness, ensuring your backyard is always guest-ready.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  Many clients find that pairing professional outdoor cleaning with their grill maintenance creates a comprehensive solution—your entire entertaining space stays pristine while you focus on perfecting your grilling skills and enjoying time with loved ones.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6">The Bottom Line: Clean Grill, Great Food, Longer Life</h2>

                <p className="text-lg leading-relaxed mb-6">
                  Grill maintenance doesn't have to be overwhelming. With a consistent after-use routine and seasonal deep cleaning (whether DIY or professional), you'll enjoy better-tasting food, safer cooking conditions, and equipment that lasts for many seasons to come.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  The choice between DIY and professional cleaning depends on your available time, physical ability, and personal preferences. Some grill enthusiasts genuinely enjoy the meditative process of deep cleaning their equipment. Others recognize their time is better spent perfecting recipes, spending time with family, or pursuing other passions.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  Regardless of which path you choose, the important thing is maintaining your grill regularly. A well-maintained grill is a joy to use, produces superior food, and provides years of reliable service. Whether you're grilling once a week or hosting daily summer cookouts, these maintenance practices ensure your grill is always ready to deliver delicious results.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  So fire up that clean grill, gather your favorite people, and enjoy the outdoor cooking experience the way it's meant to be—focused on great food and even better company, not worrying about the state of your equipment.
                </p>

                {/* Call to Action Card */}
                <Card className="mt-12 border-primary/20">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Flame className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">Tired of Tough Grill Grime?</CardTitle>
                    <CardDescription className="text-base">
                      Let our professional deep cleaning team restore your grill to like-new condition. Get back to grilling without the scrubbing!
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button size="lg" className="w-full" asChild>
                      <Link to="/">
                        <Sparkles className="w-5 h-5 mr-2" />
                        Get a Deep Cleaning Quote
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </article>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default GrillMaintenanceGuidePage;


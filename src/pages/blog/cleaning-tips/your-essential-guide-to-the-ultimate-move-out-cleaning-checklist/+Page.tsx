import { GeneralNavigation } from "@/components/GeneralNavigation";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";
import Hreflang from "@/components/Hreflang";
import { Calendar, ArrowLeft, CheckSquare, Home, Sparkles, Clock, DollarSign, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const MoveOutCleaningChecklistPage = () => {
  return (
    <>
      <Helmet>
        <title>Move-Out Cleaning Checklist: Complete Guide | Red Rock Cleans</title>
        <meta name="description" content="Our ultimate move-out cleaning checklist ensures you get your security deposit back. Follow our room-by-room guide for a perfect clean, or hire our pros to do it for you." />
      </Helmet>
      <Hreflang />
      
      <div className="min-h-screen flex flex-col">
        <GeneralNavigation />
        
        <main className="flex-grow">
          {/* Hero Section with Unsplash Image */}
          <section className="relative py-24 md:py-32 overflow-hidden">
            <div className="absolute inset-0">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&q=80" 
                alt="Happy person packing boxes in a clean, empty room"
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
                  <span>July 12, 2022</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                  Your Essential Guide to the Ultimate Move-Out Cleaning Checklist
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Secure your full security deposit and leave a lasting impression with this comprehensive room-by-room move-out cleaning guide. Every detail covered, nothing overlooked.
                </p>
              </div>
            </div>
          </section>

          {/* Article Content */}
          <article className="py-12 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-prose mx-auto">
                <p className="text-lg leading-relaxed mb-6">
                  Moving out of a rental property is one of life's most stressful experiences. Between coordinating movers, updating addresses, transferring utilities, and managing a thousand other details, the last thing you want to worry about is losing part of your security deposit due to inadequate cleaning. Yet that's exactly what happens to countless renters every year—not because they didn't clean, but because they didn't clean thoroughly enough or missed critical areas that landlords and property managers scrutinize.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  A comprehensive move-out clean isn't just about courtesy—it's about protecting your financial interests. Security deposits often represent a month's rent or more, which could be $1,000, $2,000, or even higher in many markets. That's substantial money you can't afford to forfeit. Beyond the financial considerations, leaving a property in excellent condition maintains positive landlord references, which become invaluable when applying for your next rental.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  This guide provides the ultimate move-out cleaning checklist that landlords and property managers actually use when conducting final inspections. Follow every item meticulously, and you'll leave your rental in pristine, deposit-securing condition. Let's ensure you get every dollar of your deposit back.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6">Before You Start: Essential Tools & Preparation</h2>
                
                <p className="text-lg leading-relaxed mb-6">
                  Proper preparation makes the difference between an exhausting, frustrating cleaning marathon and an efficient, systematic process. Before you tackle any cleaning tasks, gather these essential supplies:
                </p>

                <ul className="list-disc list-inside space-y-2 mb-6 ml-4 text-lg">
                  <li>All-purpose cleaner and disinfectant spray</li>
                  <li>Glass cleaner for windows and mirrors</li>
                  <li>Heavy-duty degreaser for kitchen surfaces</li>
                  <li>Bathroom cleaner with mold/mildew remover</li>
                  <li>Carpet stain remover and vacuum cleaner</li>
                  <li>Mop, bucket, broom, and dustpan</li>
                  <li>Scrub brushes (various sizes), sponges, and microfiber cloths</li>
                  <li>Step ladder for reaching high areas</li>
                  <li>Trash bags and boxes for disposing of unwanted items</li>
                  <li>Rubber gloves to protect your hands</li>
                </ul>

                <p className="text-lg leading-relaxed mb-6">
                  <strong>Pro Tip:</strong> Start cleaning after you've moved all furniture and boxes out. Cleaning around belongings means you'll miss spots and have to re-clean later. A completely empty space allows you to see every surface and ensures nothing gets overlooked.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6">The Room-by-Room Ultimate Checklist</h2>

                <p className="text-lg leading-relaxed mb-6">
                  Now let's dive into the comprehensive, room-by-room checklist that covers every surface, fixture, and often-forgotten detail. Property managers use similar checklists during final inspections, so following this ensures you meet—and exceed—their standards.
                </p>

                <h3 className="text-2xl font-semibold mt-8 mb-4">Kitchen: The Most Critical Room</h3>

                <p className="text-lg leading-relaxed mb-6">
                  Kitchens receive the most scrutiny during move-out inspections because they accumulate the most grease, grime, and residue. This room can make or break your deposit return.
                </p>

                <ul className="list-none space-y-2 mb-6 ml-4">
                  <li className="flex items-start">
                    <CheckSquare className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-lg"><strong>Appliances (Deep Clean):</strong> Remove all oven racks and clean inside oven, including walls, door, and bottom. Clean stovetop burners and drip pans (or replace if necessary). Clean refrigerator interior and exterior, including rubber door seals. Pull out refrigerator and stove to clean behind and underneath them. Clean microwave inside and out. Clean dishwasher interior, filter, and door seals.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckSquare className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-lg"><strong>Cabinets & Drawers:</strong> Wipe down interior and exterior of all cabinets. Clean cabinet hardware (handles, knobs). Remove any shelf liner and clean shelves. Wipe inside all drawers and remove crumbs.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckSquare className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-lg"><strong>Counters & Sink:</strong> Clean and sanitize all countertops. Scrub sink basin and faucet until shining. Clean around faucet base where grime accumulates. Polish chrome fixtures. Clean garbage disposal.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckSquare className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-lg"><strong>Walls & Backsplash:</strong> Degrease and wipe down all walls, especially around cooking areas. Clean backsplash tiles and grout. Remove any hooks, nails, or command strips and fill holes.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckSquare className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-lg"><strong>Floors:</strong> Sweep and mop thoroughly, including corners and under where appliances were. Clean baseboards along floor edges.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckSquare className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-lg"><strong>Light Fixtures:</strong> Remove and wash light covers. Wipe down ceiling fixtures. Replace any burnt-out bulbs.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckSquare className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-lg"><strong>Ventilation:</strong> Clean range hood inside and out. Clean or replace range hood filter. Wipe exhaust fan covers.</span>
                  </li>
                </ul>

                <h3 className="text-2xl font-semibold mt-8 mb-4">Bathrooms: Second Most Important</h3>

                <p className="text-lg leading-relaxed mb-6">
                  Bathrooms are hygiene-critical spaces that landlords expect to be spotless and sanitized. Any signs of mold, mildew, or soap scum can result in cleaning charges.
                </p>

                <ul className="list-none space-y-2 mb-6 ml-4">
                  <li className="flex items-start">
                    <CheckSquare className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-lg"><strong>Shower/Tub:</strong> Scrub tub basin, walls, and shower floor. Remove all soap scum and water stains. Clean grout lines and re-caulk if moldy or damaged. Clean shower doors or curtain tracks. Polish chrome fixtures and showerhead. Clean drain and remove hair/debris.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckSquare className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-lg"><strong>Toilet:</strong> Scrub inside bowl thoroughly, including under the rim. Clean outside of toilet, including base and behind tank. Clean toilet seat, lid, and hinges. Disinfect flush handle.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckSquare className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-lg"><strong>Sink & Vanity:</strong> Scrub sink basin and polish faucets. Clean around faucet base and handles. Wipe down countertops. Clean inside and outside of vanity cabinets and drawers. Polish mirrors until streak-free.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckSquare className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-lg"><strong>Walls & Floors:</strong> Wipe down all walls and remove any mold or mildew. Clean tile grout. Sweep and mop floors thoroughly. Clean baseboards. Remove and clean floor vents.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckSquare className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-lg"><strong>Accessories:</strong> Clean light fixtures and replace bulbs. Wipe down towel bars and toilet paper holders. Clean exhaust fan cover and interior.</span>
                  </li>
                </ul>

                <h3 className="text-2xl font-semibold mt-8 mb-4">Bedrooms: Don't Overlook These Details</h3>

                <p className="text-lg leading-relaxed mb-6">
                  While bedrooms may seem simpler to clean, they contain numerous details that inspectors check carefully.
                </p>

                <ul className="list-none space-y-2 mb-6 ml-4">
                  <li className="flex items-start">
                    <CheckSquare className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-lg"><strong>Walls:</strong> Remove all nails, screws, hooks, and command strips. Fill all holes with spackle and touch up paint if necessary. Wipe down walls to remove scuff marks and fingerprints. Clean around light switches and door handles.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckSquare className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-lg"><strong>Closets:</strong> Vacuum or sweep closet floors. Wipe down closet shelving and hanging rods. Clean inside and outside of closet doors. Remove any shelf liner or contact paper.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckSquare className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-lg"><strong>Windows:</strong> Clean inside and outside of all window panes. Wipe down window sills and tracks (remove debris). Clean window frames and screens. Dust blinds or wash curtains if provided.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckSquare className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-lg"><strong>Doors:</strong> Wipe down both sides of doors. Clean door frames and trim. Polish door handles and hardware. Clean around door hinges.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckSquare className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-lg"><strong>Floors:</strong> Vacuum carpets thoroughly, including edges and corners. Treat any carpet stains. If hardwood or laminate, sweep and mop. Clean baseboards and remove dust and cobwebs from corners.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckSquare className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-lg"><strong>Ceiling:</strong> Dust ceiling fans and light fixtures. Replace any burnt-out bulbs. Remove cobwebs from corners and ceiling.</span>
                  </li>
                </ul>

                <h3 className="text-2xl font-semibold mt-8 mb-4">Living Areas, Dining Rooms & Hallways</h3>

                <p className="text-lg leading-relaxed mb-6">
                  Common living spaces require the same attention to detail as bedrooms but often have additional features that need cleaning.
                </p>

                <ul className="list-none space-y-2 mb-6 ml-4">
                  <li className="flex items-start">
                    <CheckSquare className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-lg"><strong>Walls & Ceilings:</strong> Fill all holes from picture frames, shelves, or decorations. Touch up paint as needed. Wipe down walls, especially high-traffic areas. Clean around light switches, thermostats, and outlets.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckSquare className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-lg"><strong>Windows & Doors:</strong> Same thorough cleaning as bedrooms. Pay special attention to sliding glass doors and patio doors.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckSquare className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-lg"><strong>Floors:</strong> Vacuum all carpeted areas, including under where furniture sat (indentations indicate uncleaned areas). Clean all hard flooring surfaces. Steam clean carpets if heavily soiled or stained.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckSquare className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-lg"><strong>Fireplaces:</strong> If applicable, remove ashes and debris. Clean glass doors. Wipe down mantel and surrounding tile or brick.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckSquare className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-lg"><strong>Baseboards & Trim:</strong> Wipe down all baseboards throughout living areas. Clean door and window trim. Remove scuff marks.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckSquare className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-lg"><strong>Lighting:</strong> Clean all light fixtures, ceiling fans, and lamps. Replace burnt-out bulbs. Dust chandeliers if present.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckSquare className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-lg"><strong>Air Vents:</strong> Remove vent covers and wash them. Vacuum inside ducts as far as possible. Wipe down vent covers before replacing.</span>
                  </li>
                </ul>

                <h2 className="text-3xl font-bold mt-12 mb-6">Don't Forget These Commonly Missed Spots!</h2>

                <p className="text-lg leading-relaxed mb-6">
                  Even diligent cleaners overlook these areas—but property managers don't. Make sure you check every single one:
                </p>

                <ul className="list-disc list-inside space-y-2 mb-6 ml-4 text-lg">
                  <li><strong>Inside medicine cabinets and vanity drawers</strong> – Wipe down completely</li>
                  <li><strong>Top of refrigerator</strong> – Dust and grease accumulate here</li>
                  <li><strong>Behind and under appliances</strong> – Where dust bunnies hide</li>
                  <li><strong>Window tracks and sills</strong> – Often filled with debris and dead bugs</li>
                  <li><strong>Door frames and tops of doors</strong> – Dust collects on horizontal surfaces</li>
                  <li><strong>Light switch plates and outlet covers</strong> – Can be removed and washed</li>
                  <li><strong>Inside dishwasher</strong> – Including the filter and door seals</li>
                  <li><strong>Washing machine and dryer</strong> – Lint trap, drum, and exterior</li>
                  <li><strong>Garage or storage areas</strong> – Sweep, dispose of trash, remove oil stains</li>
                  <li><strong>Outdoor spaces</strong> – Balconies, patios, and entryways (sweep and clean)</li>
                  <li><strong>Inside kitchen cabinets (top shelves)</strong> – Easy to forget but checked during inspections</li>
                  <li><strong>Grout lines</strong> – In bathrooms and kitchens</li>
                  <li><strong>Dryer vent hose</strong> – Disconnect and clean lint buildup</li>
                  <li><strong>Return air vents</strong> – Large vents that return air to HVAC system</li>
                </ul>

                <h2 className="text-3xl font-bold mt-12 mb-6">The Professional Advantage: When to Hire a Move-Out Cleaning Service</h2>

                <p className="text-lg leading-relaxed mb-6">
                  Now let's address the reality: this checklist is comprehensive for a reason. A thorough move-out clean typically requires 6-10 hours of intensive labor for an average-sized apartment, and considerably more for larger homes. That's an entire day (or two) of physically demanding work during what's already one of the most stressful periods of your life.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  Consider what's already on your plate: coordinating movers, packing your entire household, updating your address with dozens of organizations, transferring utilities, managing the logistics of your actual moving day, unpacking at your new place, and potentially starting a new job or getting children settled in new schools. Adding a full day of intensive cleaning to this overwhelming schedule is often the breaking point.
                </p>

                <h3 className="text-2xl font-semibold mt-8 mb-4">The Time & Energy Equation</h3>

                <p className="text-lg leading-relaxed mb-6">
                  Let's do the math. If you value your time at even a modest $25 per hour, an 8-hour cleaning session represents $200 worth of your time—not to mention the physical exhaustion and stress. Professional <Link to="/move-out-cleaning-services" className="text-primary hover:underline font-semibold">Move Out Cleaning Services</Link> typically cost a comparable amount (sometimes less, sometimes slightly more depending on property size), but they bring multiple team members with commercial-grade equipment and years of experience knowing exactly what landlords inspect.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  The value proposition becomes even clearer when you factor in what's at stake: your entire security deposit. If you're exhausted, rushed, or simply miss critical areas during your DIY clean, you could lose $500, $1,000, or more from your deposit. Professional cleaning services guarantee the job is done right, providing you with peace of mind and often offering re-clean guarantees if the landlord finds any issues.
                </p>

                <h3 className="text-2xl font-semibold mt-8 mb-4">The "Surefire Deposit Recovery" Method</h3>

                <p className="text-lg leading-relaxed mb-6">
                  Professional cleaning companies specializing in <Link to="/move-out-cleaning-services" className="text-primary hover:underline font-semibold">Move Out Cleaning Services</Link> understand the exact standards property managers demand because they work with them regularly. They know which areas receive the most scrutiny. They have specialized tools—high-powered vacuums, commercial steam cleaners, professional-grade degreasers—that achieve results far beyond what household supplies can accomplish.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  Most importantly, professional cleaners approach the task with fresh energy and objective eyes. After weeks of packing and moving stress, you're exhausted and can barely see the dirt anymore. Professionals arrive fresh, work systematically through their proven checklist, and ensure nothing gets overlooked. Many services provide documented proof of cleaning with photos or detailed reports, which can be invaluable if any deposit disputes arise.
                </p>

                <h3 className="text-2xl font-semibold mt-8 mb-4">When Professional Cleaning Isn't Optional</h3>

                <p className="text-lg leading-relaxed mb-6">
                  There are certain situations where professional cleaning services transition from "smart choice" to "essential requirement":
                </p>

                <ul className="list-none space-y-3 mb-6 ml-4">
                  <li className="flex items-start">
                    <Shield className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-lg"><strong>Pet damage or odors:</strong> Professional-grade enzyme treatments and deep carpet cleaning are necessary to remove pet stains and smells that DIY methods can't fully eliminate</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-lg"><strong>Smoke residue:</strong> Cigarette or cooking smoke creates stubborn film on walls, ceilings, and fixtures requiring specialized cleaning solutions</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-lg"><strong>Mold or mildew issues:</strong> Professional remediation ensures proper removal and prevents future growth</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-lg"><strong>Multiple years of accumulated buildup:</strong> The longer you've lived somewhere, the more hidden grime accumulates in hard-to-reach places</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-lg"><strong>Physical limitations:</strong> If you have mobility issues, injuries, or health conditions that make intensive cleaning difficult or unsafe</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-lg"><strong>Tight timelines:</strong> When you have only a day or two between moving out and final inspection</span>
                  </li>
                </ul>

                <h3 className="text-2xl font-semibold mt-8 mb-4">The Smart Investment in Your Future</h3>

                <p className="text-lg leading-relaxed mb-6">
                  Think of professional move-out cleaning as an investment, not an expense. You're investing in:
                </p>

                <ul className="list-none space-y-3 mb-6 ml-4">
                  <li className="flex items-start">
                    <DollarSign className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-lg"><strong>Maximizing your deposit return:</strong> Recover the full amount instead of losing hundreds to cleaning charges</span>
                  </li>
                  <li className="flex items-start">
                    <Clock className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-lg"><strong>Saving valuable time:</strong> 6-10 hours you can dedicate to other moving priorities or simply reducing stress</span>
                  </li>
                  <li className="flex items-start">
                    <Home className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-lg"><strong>Maintaining positive landlord relationships:</strong> Excellent references for future rental applications</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-lg"><strong>Peace of mind:</strong> Guaranteed professional results instead of worrying whether you did enough</span>
                  </li>
                </ul>

                <p className="text-lg leading-relaxed mb-6">
                  Professional <Link to="/move-out-cleaning-services" className="text-primary hover:underline font-semibold">Move Out Cleaning Services</Link> remove the stress, uncertainty, and physical burden from your moving process. You hand over the keys knowing with complete confidence that your property is in immaculate condition, ready to pass any inspection. For most people facing a move, that peace of mind alone is worth the investment.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6">Final Thoughts: Your Deposit, Your Choice</h2>

                <p className="text-lg leading-relaxed mb-6">
                  Whether you choose to tackle this comprehensive checklist yourself or hire professionals to handle it, the key is ensuring every item gets addressed. Nothing on this list is optional from a landlord's perspective—each item represents an area they'll inspect, and any deficiency can result in deposit deductions.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  If you go the DIY route, print this checklist, and systematically work through each room and task. Give yourself plenty of time—don't attempt to complete everything in one marathon session. Take before and after photos of every room and area as documentation of your work.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  If you choose professional cleaning services, you're making a strategic decision to protect your deposit, save time, and reduce stress during an already overwhelming transition. Either way, the goal is the same: getting your full security deposit back and leaving on the best possible terms.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  Moving is hard enough. Don't let cleaning become the reason you lose money or create unnecessary stress. Use this guide, make the decision that's right for your situation, and move forward confidently knowing your old rental is in pristine condition.
                </p>

                {/* Call to Action Card */}
                <Card className="mt-12 border-primary/20">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Home className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">Moving? Let Us Handle the Dirty Work.</CardTitle>
                    <CardDescription className="text-base">
                      Guarantee your full deposit return and eliminate move-out stress. Our professional team ensures every detail is perfect, so you can focus on your exciting new beginning.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button size="lg" className="w-full" asChild>
                      <Link to="/">
                        <Sparkles className="w-5 h-5 mr-2" />
                        Book Your Move Out Clean
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

export default MoveOutCleaningChecklistPage;


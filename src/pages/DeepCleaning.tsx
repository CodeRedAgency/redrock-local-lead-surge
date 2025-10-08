import { GeneralNavigation } from "@/components/GeneralNavigation";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";
import { Check, Sparkles, Shield } from "lucide-react";

const DeepCleaning = () => {
  return (
    <>
      <Helmet>
        <title>Deep Cleaning Services | Red Rock Cleaning</title>
        <meta name="description" content="Comprehensive deep cleaning services that reach every corner. Perfect for seasonal cleaning, move-in/out, or thorough home sanitization." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <GeneralNavigation />
        
        <main className="flex-grow py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-5xl font-bold mb-6">Deep Cleaning Services</h1>
                <p className="text-xl text-muted-foreground">
                  Intensive, detailed cleaning that transforms your space from top to bottom
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-card p-6 rounded-lg shadow-md text-center">
                  <Sparkles className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Thorough Clean</h3>
                  <p className="text-muted-foreground">Every corner, every surface</p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-md text-center">
                  <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Health Focused</h3>
                  <p className="text-muted-foreground">Eliminate allergens and bacteria</p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-md text-center">
                  <Check className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Move-In Ready</h3>
                  <p className="text-muted-foreground">Perfect for transitions</p>
                </div>
              </div>

              <div className="bg-card p-8 rounded-lg shadow-lg mb-12">
                <h2 className="text-3xl font-bold mb-6 text-primary">Complete Deep Cleaning Checklist</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Kitchen Deep Clean</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Inside oven, refrigerator, and dishwasher</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Inside and outside all cabinets</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Degrease range hood and backsplash</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Clean baseboards and corners</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Detailed grout cleaning</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Bathroom Deep Clean</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Scrub and sanitize grout lines</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Deep clean shower doors and tracks</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Descale fixtures and showerheads</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Clean inside cabinets and drawers</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Detailed baseboard cleaning</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Living Areas</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Clean ceiling fans and light fixtures</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Wipe down walls and doors</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Clean window sills and tracks</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Vacuum behind and under furniture</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Detailed baseboard and molding</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Additional Services</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Clean inside closets</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Dust vents and air returns</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Wipe down switches and outlets</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Polish all hardware</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Remove cobwebs from ceilings</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-primary text-primary-foreground p-8 rounded-lg text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">When to Schedule Deep Cleaning</h2>
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div>
                    <h3 className="font-bold mb-2">Seasonal Refresh</h3>
                    <p>Every 3-6 months for a thorough reset</p>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Move In/Out</h3>
                    <p>Start fresh or leave spotless</p>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Special Events</h3>
                    <p>Before hosting or after construction</p>
                  </div>
                </div>
              </div>

              <div className="bg-muted/30 p-8 rounded-lg text-center">
                <h2 className="text-3xl font-bold mb-4">Schedule Your Deep Clean</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Transform your space with our comprehensive deep cleaning service.
                </p>
                <a href="tel:+18888051733" className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                  Call (888) 805-1733
                </a>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default DeepCleaning;

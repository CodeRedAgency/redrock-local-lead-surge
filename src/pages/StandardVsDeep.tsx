import { GeneralNavigation } from "@/components/GeneralNavigation";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";
import { Check } from "lucide-react";

const StandardVsDeep = () => {
  return (
    <>
      <Helmet>
        <title>Standard vs Deep Cleaning - What's the Difference? | Red Rock Cleaning</title>
        <meta name="description" content="Understand the differences between standard and deep cleaning services to choose the right option for your home or business." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <GeneralNavigation />
        
        <main className="flex-grow py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-5xl font-bold mb-6">Standard vs Deep Cleaning</h1>
                <p className="text-xl text-muted-foreground">
                  Choose the right cleaning service for your needs
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Standard Cleaning */}
                <div className="bg-card p-8 rounded-lg shadow-lg">
                  <h2 className="text-3xl font-bold mb-6 text-primary">Standard Cleaning</h2>
                  <p className="text-muted-foreground mb-6">
                    Perfect for regular maintenance and keeping your space consistently clean. Ideal for weekly, bi-weekly, or monthly schedules.
                  </p>
                  
                  <h3 className="text-xl font-semibold mb-4">What's Included:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>Dusting all surfaces</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>Vacuuming and mopping floors</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>Bathroom cleaning and sanitizing</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>Kitchen surface cleaning</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>Trash removal</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>Making beds</span>
                    </li>
                  </ul>
                </div>

                {/* Deep Cleaning */}
                <div className="bg-card p-8 rounded-lg shadow-lg border-2 border-primary">
                  <h2 className="text-3xl font-bold mb-6 text-primary">Deep Cleaning</h2>
                  <p className="text-muted-foreground mb-6">
                    A comprehensive, detailed cleaning that reaches every corner. Recommended every 3-6 months or for move-in/move-out situations.
                  </p>
                  
                  <h3 className="text-xl font-semibold mb-4">Everything in Standard Plus:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>Baseboards and molding cleaning</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>Inside cabinets and drawers</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>Oven and refrigerator deep clean</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>Window sills and tracks</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>Light fixtures and ceiling fans</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>Behind and under furniture</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>Detailed grout scrubbing</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-12 bg-muted/30 p-8 rounded-lg text-center">
                <h2 className="text-3xl font-bold mb-4">Not Sure Which to Choose?</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Contact us for a personalized recommendation based on your specific needs.
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

export default StandardVsDeep;

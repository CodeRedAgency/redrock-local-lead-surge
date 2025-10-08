import { GeneralNavigation } from "@/components/GeneralNavigation";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";
import { Check, HardHat, Sparkles, Shield } from "lucide-react";

const PostConstruction = () => {
  return (
    <>
      <Helmet>
        <title>Post Construction Cleaning Services | Red Rock Cleaning</title>
        <meta name="description" content="Specialized post-construction cleaning to remove dust, debris, and make your newly built or renovated space move-in ready." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <GeneralNavigation />
        
        <main className="flex-grow py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-5xl font-bold mb-6">Post Construction Cleaning</h1>
                <p className="text-xl text-muted-foreground">
                  Professional cleaning after construction, renovation, or remodeling projects
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-card p-6 rounded-lg shadow-md text-center">
                  <HardHat className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Construction Ready</h3>
                  <p className="text-muted-foreground">Specialized equipment & techniques</p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-md text-center">
                  <Sparkles className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Move-In Ready</h3>
                  <p className="text-muted-foreground">From construction site to home</p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-md text-center">
                  <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Safety First</h3>
                  <p className="text-muted-foreground">Proper dust and debris removal</p>
                </div>
              </div>

              <div className="bg-card p-8 rounded-lg shadow-lg mb-12">
                <h2 className="text-3xl font-bold mb-6 text-primary">Three-Phase Cleaning Process</h2>
                
                <div className="space-y-8">
                  <div className="border-l-4 border-primary pl-6">
                    <h3 className="text-2xl font-bold mb-4">Phase 1: Rough Clean</h3>
                    <p className="text-muted-foreground mb-4">Initial cleanup during construction phase</p>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Remove large debris and materials</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Sweep and vacuum floors</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Remove stickers and labels</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Dust surfaces and fixtures</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-primary pl-6">
                    <h3 className="text-2xl font-bold mb-4">Phase 2: Deep Clean</h3>
                    <p className="text-muted-foreground mb-4">Detailed cleaning after construction is complete</p>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Remove all dust from surfaces and vents</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Clean windows, tracks, and sills</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Scrub grout and tile</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Clean all fixtures and hardware</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Wipe down walls, doors, and trim</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-primary pl-6">
                    <h3 className="text-2xl font-bold mb-4">Phase 3: Final Touch</h3>
                    <p className="text-muted-foreground mb-4">Final polish for move-in readiness</p>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Polish all surfaces and fixtures</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Final vacuum and mop</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Touch-up cleaning of all areas</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Final inspection walkthrough</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-muted/30 p-8 rounded-lg mb-12">
                <h2 className="text-3xl font-bold mb-6 text-center">What We Remove</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-card p-4 rounded-lg text-center">
                    <p className="font-semibold">Construction Dust</p>
                  </div>
                  <div className="bg-card p-4 rounded-lg text-center">
                    <p className="font-semibold">Paint Overspray</p>
                  </div>
                  <div className="bg-card p-4 rounded-lg text-center">
                    <p className="font-semibold">Adhesive Residue</p>
                  </div>
                  <div className="bg-card p-4 rounded-lg text-center">
                    <p className="font-semibold">Drywall Dust</p>
                  </div>
                  <div className="bg-card p-4 rounded-lg text-center">
                    <p className="font-semibold">Sawdust</p>
                  </div>
                  <div className="bg-card p-4 rounded-lg text-center">
                    <p className="font-semibold">Stickers & Labels</p>
                  </div>
                  <div className="bg-card p-4 rounded-lg text-center">
                    <p className="font-semibold">Concrete Residue</p>
                  </div>
                  <div className="bg-card p-4 rounded-lg text-center">
                    <p className="font-semibold">Debris</p>
                  </div>
                </div>
              </div>

              <div className="bg-primary text-primary-foreground p-8 rounded-lg text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Perfect For</h2>
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div>
                    <h3 className="font-bold mb-2">New Construction</h3>
                    <p>Brand new homes and buildings</p>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Renovations</h3>
                    <p>Kitchen, bath, or whole home remodels</p>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Commercial Projects</h3>
                    <p>Office build-outs and retail spaces</p>
                  </div>
                </div>
              </div>

              <div className="bg-card p-8 rounded-lg shadow-lg text-center">
                <h2 className="text-3xl font-bold mb-4">Ready to Make It Move-In Ready?</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Let us transform your construction site into a beautiful, clean space.
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

export default PostConstruction;

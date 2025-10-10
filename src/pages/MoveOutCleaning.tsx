import { GeneralNavigation } from "@/components/GeneralNavigation";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroResidential from "@/assets/hero-residential.jpg";

const MoveOutCleaning = () => {
  return (
    <>
      <Helmet>
        <title>Move Out Cleaning Services | Red Rock Cleaning</title>
        <meta name="description" content="Professional move out cleaning services. Get your security deposit back with our thorough move-out cleaning. Available in South Florida, Las Vegas, Hawaii, Columbus Ohio, and Dallas." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <GeneralNavigation />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative h-[500px] flex items-center justify-center">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${heroResidential})` }}
            >
              <div className="absolute inset-0 bg-black/50" />
            </div>
            <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Move Out Cleaning Services</h1>
              <p className="text-xl md:text-2xl mb-8">
                Get your security deposit back with our thorough move-out cleaning
              </p>
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                <Link to="/">Get a Quote</Link>
              </Button>
            </div>
          </section>

          {/* Services Details */}
          <section className="py-20 bg-muted/20">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12">Complete Move Out Cleaning</h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-card p-8 rounded-lg shadow-md">
                    <h3 className="text-2xl font-bold mb-4">Kitchen Deep Clean</h3>
                    <p className="text-muted-foreground mb-4">
                      Leave your kitchen spotless with our comprehensive move-out kitchen cleaning service.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Inside and outside of all appliances</li>
                      <li>• Cabinet interiors and exteriors</li>
                      <li>• Countertops and backsplash cleaning</li>
                      <li>• Sink and faucet deep cleaning</li>
                      <li>• Floor cleaning and mopping</li>
                    </ul>
                  </div>

                  <div className="bg-card p-8 rounded-lg shadow-md">
                    <h3 className="text-2xl font-bold mb-4">Bathroom Deep Clean</h3>
                    <p className="text-muted-foreground mb-4">
                      Ensure bathrooms are thoroughly sanitized and ready for the next tenant.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Toilet deep cleaning and sanitization</li>
                      <li>• Shower/tub scrubbing and sanitizing</li>
                      <li>• Vanity and mirror cleaning</li>
                      <li>• Floor and wall tile cleaning</li>
                      <li>• Cabinet interior cleaning</li>
                    </ul>
                  </div>

                  <div className="bg-card p-8 rounded-lg shadow-md">
                    <h3 className="text-2xl font-bold mb-4">Living Areas</h3>
                    <p className="text-muted-foreground mb-4">
                      Comprehensive cleaning of all living spaces to meet landlord requirements.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Carpet vacuuming and spot cleaning</li>
                      <li>• Hard floor mopping and polishing</li>
                      <li>• Baseboard and trim cleaning</li>
                      <li>• Window and window sill cleaning</li>
                      <li>• Light fixture dusting</li>
                    </ul>
                  </div>

                  <div className="bg-card p-8 rounded-lg shadow-md">
                    <h3 className="text-2xl font-bold mb-4">Additional Services</h3>
                    <p className="text-muted-foreground mb-4">
                      Extra services to ensure your move-out cleaning meets all requirements.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Interior cabinet and drawer cleaning</li>
                      <li>• Wall spot cleaning and touch-ups</li>
                      <li>• Light switch and outlet cleaning</li>
                      <li>• Door and door frame cleaning</li>
                      <li>• Closet and storage area cleaning</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-12">Why Choose Red Rock for Move Out Cleaning?</h2>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🏠</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Security Deposit Protection</h3>
                    <p className="text-muted-foreground">Our thorough cleaning helps ensure you get your full security deposit back.</p>
                  </div>

                  <div className="text-center">
                    <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">⚡</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Fast Turnaround</h3>
                    <p className="text-muted-foreground">We work efficiently to clean your space quickly without compromising quality.</p>
                  </div>

                  <div className="text-center">
                    <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">✅</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Landlord Approved</h3>
                    <p className="text-muted-foreground">Our cleaning standards meet the requirements of most landlords and property managers.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-primary/5">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold mb-6">Ready to Move Out with Confidence?</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Get a quote for professional move-out cleaning and secure your security deposit.
              </p>
              <Button size="lg" asChild>
                <Link to="/">Get Your Quote</Link>
              </Button>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default MoveOutCleaning;

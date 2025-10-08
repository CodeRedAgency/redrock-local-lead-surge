import { GeneralNavigation } from "@/components/GeneralNavigation";
import { Footer } from "@/components/Footer";
import { LocationSelector } from "@/components/LocationSelector";
import { TrustSection } from "@/components/TrustSection";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";
import heroResidential from "@/assets/hero-residential.jpg";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Red Rock Cleaning - Premium Multi-Location Cleaning Services</title>
        <meta name="description" content="Professional cleaning services across South Florida, Las Vegas, Hawaii, Columbus Ohio, and Dallas. Residential, commercial, and vacation rental cleaning." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <GeneralNavigation />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative py-20 md:py-32 overflow-hidden">
            <div className="absolute inset-0">
              <img 
                src={heroResidential} 
                alt="Professional cleaning services"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/60"></div>
            </div>
            
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-3xl mx-auto text-center space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Premium Cleaning Services Across Multiple Locations
                </h1>
                <p className="text-xl text-muted-foreground">
                  Professional residential, commercial, and vacation rental cleaning services you can trust
                </p>
                <div className="pt-6">
                  <p className="text-lg font-semibold mb-4">Select Your Location to Get Started</p>
                </div>
              </div>
            </div>
          </section>
          
          <LocationSelector />
          
          <section className="py-20 bg-primary/5">
            <div className="container mx-auto px-4 text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Why Choose Red Rock Cleaning?</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We're a multi-location premium cleaning service dedicated to excellence. Whether you need 
                cleaning for your home, office, or vacation rental, our professional teams deliver 
                exceptional results every time.
              </p>
            </div>
          </section>
          
          <TrustSection />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Index;

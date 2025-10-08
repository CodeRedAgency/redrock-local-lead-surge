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
          <section className="relative py-24 md:py-40 overflow-hidden">
            <div className="absolute inset-0">
              <img 
                src={heroResidential} 
                alt="Professional cleaning services"
                className="w-full h-full object-cover scale-105 animate-[subtle-zoom_20s_ease-in-out_infinite]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/98 via-background/90 to-background/70"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
            </div>
            
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center space-y-8">
                <div className="inline-block">
                  <span className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent font-medium text-sm mb-6 animate-fade-in">
                    <span className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse"></span>
                    Premium Multi-Location Service
                  </span>
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight tracking-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
                  Elevate Your Space with
                  <span className="block mt-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
                    Premium Cleaning
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
                  Experience excellence in residential, commercial, and vacation rental cleaning services
                </p>
                <div className="pt-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                  <p className="text-lg font-semibold mb-4 text-foreground/90">Select Your Location to Get Started</p>
                </div>
              </div>
            </div>
          </section>
          
          <LocationSelector />
          
          <section className="py-24 bg-gradient-to-b from-secondary/30 to-background relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--accent)/0.05),transparent_50%)]"></div>
            <div className="container mx-auto px-4 text-center space-y-8 relative z-10">
              <div className="inline-block">
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium text-sm mb-4">
                  The Red Rock Difference
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Why Choose Red Rock Cleaning?</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
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

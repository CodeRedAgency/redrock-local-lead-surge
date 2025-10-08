import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { LocationHero } from "@/components/LocationHero";
import { ServicesSection } from "@/components/ServicesSection";
import { TrustSection } from "@/components/TrustSection";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";

const DallasHome = () => {
  const loginUrl = "https://customer-portal.maidily.com/red-rock-cleans-dallas/sign-in";
  
  return (
    <>
      <Helmet>
        <title>Dallas House Cleaning Services | Red Rock Cleaning</title>
        <meta name="description" content="Premium residential and commercial cleaning packages in Dallas. Professional, reliable cleaning services you can trust." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Navigation loginUrl={loginUrl} />
        
        <main className="flex-grow">
          <LocationHero
            location="Dallas"
            title="Premium Cleaning Services in Dallas"
            subtitle="Professional residential and commercial cleaning packages tailored to the Dallas area"
            phone="(972) 992-2576"
            bookingUrl="/book-now-dallas"
          />
          
          <ServicesSection />
          
          <section className="py-12 bg-primary/5">
            <div className="container mx-auto px-4 text-center space-y-6">
              <h2 className="text-3xl font-bold">Transform Your Space Today</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Get an instant quote with our online calculator or book your cleaning service now
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="cta">
                  <a href="/dallas">Get a Quote</a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href={loginUrl} target="_blank" rel="noopener noreferrer">
                    Customer Login
                  </a>
                </Button>
              </div>
            </div>
          </section>
          
          <TrustSection />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default DallasHome;

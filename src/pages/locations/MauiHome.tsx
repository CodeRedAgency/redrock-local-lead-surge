import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { LocationHero } from "@/components/LocationHero";
import { ServicesSection } from "@/components/ServicesSection";
import { TrustSection } from "@/components/TrustSection";
import { BeforeAfterSection } from "@/components/BeforeAfterSection";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";

const MauiHome = () => {
  const loginUrl = "https://customer-portal.maidily.com/red-rock-cleans-dallas/sign-in";
  
  return (
    <>
      <Helmet>
        <title>Maui House Cleaning Services | Red Rock Cleaning</title>
        <meta name="description" content="Professional vacation rental, deep, and recurring cleaning services in Maui. Premium cleaning for your Hawaiian paradise." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Navigation loginUrl={loginUrl} />
        
        <main className="flex-grow">
          <LocationHero
            location="Maui"
            title="Premium Cleaning Services in Maui"
            subtitle="Professional vacation rental, deep, and recurring cleaning services throughout Maui"
            phone="(808) 909-3038"
            bookingUrl="/book-now-maui"
            imageType="vacation"
          />
          
          <ServicesSection />
          
          <BeforeAfterSection bookingUrl="/book-now-maui" />
          
          <section className="py-12 bg-primary/5">
            <div className="container mx-auto px-4 text-center space-y-6">
              <h2 className="text-3xl font-bold">Keep Your Paradise Pristine</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Get an instant quote with our online calculator or book your cleaning service now
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="cta">
                  <a href="/maui">Get a Quote</a>
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

export default MauiHome;

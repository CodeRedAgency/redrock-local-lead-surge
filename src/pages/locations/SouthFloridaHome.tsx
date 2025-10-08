import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { LocationHero } from "@/components/LocationHero";
import { ServicesSection } from "@/components/ServicesSection";
import { TrustSection } from "@/components/TrustSection";
import { BeforeAfterSection } from "@/components/BeforeAfterSection";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";

const SouthFloridaHome = () => {
  const loginUrl = "https://customer-portal.maidily.com/red-rock-cleans-fort-lauderdale/sign-in";
  
  return (
    <>
      <Helmet>
        <title>Professional House Cleaning Services in South Florida | Red Rock Cleaning</title>
        <meta name="description" content="Premium residential and vacation rental cleaning services in South Florida, Weston, and Fort Lauderdale. Book your professional cleaning service today." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Navigation loginUrl={loginUrl} />
        
        <main className="flex-grow">
          <LocationHero
            location="South Florida"
            title="Premium Cleaning Services in South Florida"
            subtitle="Professional residential and vacation rental cleaning in Weston, Fort Lauderdale, and surrounding areas"
            phone="(954) 469-8881"
            bookingUrl="/book-now-southflorida"
            imageType="vacation"
          />
          
          <ServicesSection />
          
          <BeforeAfterSection bookingUrl="/book-now-southflorida" />
          
          <section className="py-12 bg-primary/5">
            <div className="container mx-auto px-4 text-center space-y-6">
              <h2 className="text-3xl font-bold">Ready to Experience a Cleaner Home?</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Get an instant quote with our online calculator or book your cleaning service now
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="cta">
                  <a href="/south-florida">Get a Quote</a>
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

export default SouthFloridaHome;

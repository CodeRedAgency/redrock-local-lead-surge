import { LasVegasNavigation } from "@/components/LasVegasNavigation";
import { Footer } from "@/components/Footer";
import { LocationHero } from "@/components/LocationHero";
import { ServicesSection } from "@/components/ServicesSection";
import { TrustSection } from "@/components/TrustSection";
import { BeforeAfterSection } from "@/components/BeforeAfterSection";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";

const LasVegasHome = () => {
  const loginUrl = "https://customer-portal.maidily.com/red-rock-cleans-vegas/sign-in";
  const bookingUrl = "/book-now-vegas";
  
  return (
    <>
      <Helmet>
        <title>Las Vegas House Cleaning Services | Red Rock Cleaning</title>
        <meta name="description" content="Professional residential and commercial cleaning services in Las Vegas and Henderson. Reliable, quality cleaning you can trust." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <LasVegasNavigation loginUrl={loginUrl} bookingUrl={bookingUrl} />
        
        <main className="flex-grow">
          <LocationHero
            location="Las Vegas"
            title="Premium Cleaning Services in Las Vegas"
            subtitle="Professional residential, commercial, and specialized cleaning in Las Vegas and Henderson"
            phone="(702) 508-0098"
            bookingUrl={bookingUrl}
            imageType="residential"
          />
          
          <ServicesSection />
          
          <BeforeAfterSection bookingUrl={bookingUrl} />
          
          <section className="py-12 bg-primary/5">
            <div className="container mx-auto px-4 text-center space-y-6">
              <h2 className="text-3xl font-bold">Ready to Experience a Cleaner Space?</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Get an instant quote with our online calculator or book your cleaning service now
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="cta">
                  <a href="/las-vegas-calculator">Get a Quote</a>
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

export default LasVegasHome;

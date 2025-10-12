import { ColumbusNavigation } from "@/components/ColumbusNavigation";
import { Footer } from "@/components/Footer";
import { LocationHero } from "@/components/LocationHero";
import { ServicesSection } from "@/components/ServicesSection";
import { TrustSection } from "@/components/TrustSection";
import { BeforeAfterSection } from "@/components/BeforeAfterSection";
import { LocalLocationSelector } from "@/components/LocalLocationSelector";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";

const ColumbusHome = () => {
  const loginUrl = "https://customer-portal.maidily.com/red-rock-cleans-ohio/sign-in";
  const bookingUrl = "/book-now-columbus-ohio";
  
  return (
    <>
      <Helmet>
        <title>Columbus Ohio House Cleaning Services | Red Rock Cleaning</title>
        <meta name="description" content="Professional house and office cleaning in Columbus Ohio. Reliable service with easy online booking. Experience quality you can trust." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <ColumbusNavigation loginUrl={loginUrl} bookingUrl={bookingUrl} />
        
        <main className="flex-grow">
          <LocationHero
            location="Columbus Ohio"
            title="Premium Cleaning Services in Columbus"
            subtitle="Professional house and office cleaning with reliable service and easy online booking"
            phone="(380) 235-3135"
            bookingUrl={bookingUrl}
            imageType="residential"
          />
          
          <ServicesSection />
          
          <BeforeAfterSection bookingUrl={bookingUrl} />
          
          <section className="py-12 bg-primary/5">
            <div className="container mx-auto px-4 text-center space-y-6">
              <h2 className="text-3xl font-bold">Experience Reliable Cleaning Service</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Get an instant quote with our online calculator or book your cleaning service now
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="cta">
                  <a href="/columbus-ohio-calculator">Get a Quote</a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href={loginUrl} target="_blank" rel="noopener noreferrer">
                    Customer Login
                  </a>
                </Button>
              </div>
            </div>
          </section>
          
          <LocalLocationSelector currentLocation="columbus-ohio" />
          
          <TrustSection />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default ColumbusHome;

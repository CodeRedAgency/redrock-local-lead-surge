import { OahuNavigation } from "@/components/OahuNavigation";
import { Footer } from "@/components/Footer";
import { LocationHero } from "@/components/LocationHero";
import { OahuServicesSection } from "@/components/OahuServicesSection";
import { TrustSection } from "@/components/TrustSection";
import { BeforeAfterSection } from "@/components/BeforeAfterSection";
import { OahuAreasServed } from "@/components/OahuAreasServed";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";

const OahuHome = () => {
  const loginUrl = "https://customer-portal.maidily.com/red-rock-cleans-vegas/sign-in";
  const bookingUrl = "/book-now-oahu";
  
  return (
    <>
      <Helmet>
        <title>Oahu House Cleaning Services | Red Rock Cleaning</title>
        <meta name="description" content="Professional residential and vacation rental cleaning services in Oahu and Honolulu. Experience premium Hawaiian cleaning services." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <OahuNavigation loginUrl={loginUrl} bookingUrl={bookingUrl} />
        
        <main className="flex-grow">
          <LocationHero
            location="Oahu"
            title="Premium Cleaning Services in Oahu"
            subtitle="Professional residential and vacation rental cleaning in Honolulu and throughout Oahu"
            phone="(808) 909-8801"
            bookingUrl={bookingUrl}
            imageType="residential"
          />
          
          <OahuServicesSection />
          
          <BeforeAfterSection bookingUrl={bookingUrl} />
          
          <section className="py-12 bg-primary/5">
            <div className="container mx-auto px-4 text-center space-y-6">
              <h2 className="text-3xl font-bold">Ready for a Spotless Space?</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Get an instant quote with our online calculator or book your cleaning service now
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="cta">
                  <a href="/oahu-calculator">Get a Quote</a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href={loginUrl} target="_blank" rel="noopener noreferrer">
                    Customer Login
                  </a>
                </Button>
              </div>
            </div>
          </section>
          
          <OahuAreasServed />
          
          <TrustSection />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default OahuHome;

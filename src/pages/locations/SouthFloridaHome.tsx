import { SouthFloridaNavigation } from "@/components/SouthFloridaNavigation";
import { Footer } from "@/components/Footer";
import { LocationHero } from "@/components/LocationHero";
import { SouthFloridaServicesSection } from "@/components/SouthFloridaServicesSection";
import { TrustSection } from "@/components/TrustSection";
import { BeforeAfterSection } from "@/components/BeforeAfterSection";
import { SouthFloridaAreasServed } from "@/components/SouthFloridaAreasServed";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";
import Hreflang from "@/components/Hreflang";
import { useTranslation } from "react-i18next";

const SouthFloridaHome = () => {
  const loginUrl = "https://customer-portal.maidily.com/red-rock-cleans-fort-lauderdale/sign-in";
  const bookingUrl = "/book-now-south-florida";
  
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t("locations.southFlorida.title", { defaultValue: "Professional House Cleaning Services in South Florida | Red Rock Cleaning" })}</title>
        <meta name="description" content={t("locations.southFlorida.description", { defaultValue: "Premium residential and vacation rental cleaning services in South Florida, Weston, and Fort Lauderdale. Book your professional cleaning service today." })} />
      </Helmet>
      <Hreflang />
      
      <div className="min-h-screen flex flex-col">
        <SouthFloridaNavigation loginUrl={loginUrl} bookingUrl={bookingUrl} />
        
        <main className="flex-grow">
          <LocationHero
            location="South Florida"
            title="Premium Cleaning Services in South Florida"
            subtitle="Professional residential and vacation rental cleaning in Weston, Fort Lauderdale, and surrounding areas"
            phone="(954) 469-8881"
            bookingUrl={bookingUrl}
            imageType="residential"
          />
          
          <SouthFloridaServicesSection />
          
          <BeforeAfterSection bookingUrl={bookingUrl} />
          
          <section className="py-12 bg-primary/5">
            <div className="container mx-auto px-4 text-center space-y-6">
              <h2 className="text-3xl font-bold">{t("locations.cta.title", { defaultValue: "Ready to Experience a Cleaner Home?" })}</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {t("locations.cta.copy", { defaultValue: "Get an instant quote with our online calculator or book your cleaning service now" })}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="cta">
                  <a href="/south-florida-calculator">{t("cta.getQuote", { defaultValue: "Get a Quote" })}</a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href={loginUrl} target="_blank" rel="noopener noreferrer">
                    {t("locations.customerLogin", { defaultValue: "Customer Login" })}
                  </a>
                </Button>
              </div>
            </div>
          </section>
          
          <SouthFloridaAreasServed />
          
          <TrustSection />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default SouthFloridaHome;

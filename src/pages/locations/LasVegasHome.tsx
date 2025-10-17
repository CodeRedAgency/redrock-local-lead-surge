import { LasVegasNavigation } from "@/components/LasVegasNavigation";
import { Footer } from "@/components/Footer";
import { LocationHero } from "@/components/LocationHero";
import { LasVegasServicesSection } from "@/components/LasVegasServicesSection";
import { TrustSection } from "@/components/TrustSection";
import { BeforeAfterSection } from "@/components/BeforeAfterSection";
import { LasVegasAreasServed } from "@/components/LasVegasAreasServed";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";
import Hreflang from "@/components/Hreflang";
import { useTranslation } from "react-i18next";

const LasVegasHome = () => {
  const loginUrl = "https://customer-portal.maidily.com/red-rock-cleans-vegas/sign-in";
  const bookingUrl = "/book-now-las-vegas";
  
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t("locations.lasVegas.title", { defaultValue: "Las Vegas House Cleaning Services | Red Rock Cleaning" })}</title>
        <meta name="description" content={t("locations.lasVegas.description", { defaultValue: "Professional residential and commercial cleaning services in Las Vegas and Henderson. Reliable, quality cleaning you can trust." })} />
      </Helmet>
      <Hreflang />
      
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
          
          <LasVegasServicesSection />
          
          <BeforeAfterSection bookingUrl={bookingUrl} />
          
          <section className="py-12 bg-primary/5">
            <div className="container mx-auto px-4 text-center space-y-6">
              <h2 className="text-3xl font-bold">{t("locations.cta.title", { defaultValue: "Ready to Experience a Cleaner Home?" })}</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {t("locations.cta.copy", { defaultValue: "Get an instant quote with our online calculator or book your cleaning service now" })}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="cta">
                  <a href="/las-vegas-calculator">{t("cta.getQuote", { defaultValue: "Get a Quote" })}</a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href={loginUrl} target="_blank" rel="noopener noreferrer">
                    {t("locations.customerLogin", { defaultValue: "Customer Login" })}
                  </a>
                </Button>
              </div>
            </div>
          </section>
          
          <LasVegasAreasServed />
          
          <TrustSection />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default LasVegasHome;

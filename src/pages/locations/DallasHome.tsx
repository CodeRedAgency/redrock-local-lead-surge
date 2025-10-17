import { DallasNavigation } from "@/components/DallasNavigation";
import { Footer } from "@/components/Footer";
import { LocationHero } from "@/components/LocationHero";
import { DallasServicesSection } from "@/components/DallasServicesSection";
import { TrustSection } from "@/components/TrustSection";
import { BeforeAfterSection } from "@/components/BeforeAfterSection";
import { DallasAreasServed } from "@/components/DallasAreasServed";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";
import Hreflang from "@/components/Hreflang";
import { useTranslation } from "react-i18next";

const DallasHome = () => {
  const loginUrl = "https://customer-portal.maidily.com/red-rock-cleans-dallas/sign-in";
  const bookingUrl = "/book-now-dallas";
  
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t("locations.dallas.title", { defaultValue: "Dallas House Cleaning Services | Red Rock Cleaning" })}</title>
        <meta name="description" content={t("locations.dallas.description", { defaultValue: "Premium residential and commercial cleaning packages in Dallas. Professional, reliable cleaning services you can trust." })} />
      </Helmet>
      <Hreflang />
      
      <div className="min-h-screen flex flex-col">
        <DallasNavigation loginUrl={loginUrl} bookingUrl={bookingUrl} />
        
        <main className="flex-grow">
          <LocationHero
            location="Dallas"
            title="Premium Cleaning Services in Dallas"
            subtitle="Professional residential and commercial cleaning packages tailored to the Dallas area"
            phone="(972) 992-2576"
            bookingUrl={bookingUrl}
            imageType="residential"
          />
          
          <DallasServicesSection />
          
          <BeforeAfterSection bookingUrl={bookingUrl} />
          
          <section className="py-12 bg-primary/5">
            <div className="container mx-auto px-4 text-center space-y-6">
              <h2 className="text-3xl font-bold">{t("locations.cta.title", { defaultValue: "Ready to Experience a Cleaner Home?" })}</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {t("locations.cta.copy", { defaultValue: "Get an instant quote with our online calculator or book your cleaning service now" })}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="cta">
                  <a href="/dallas-calculator">{t("cta.getQuote", { defaultValue: "Get a Quote" })}</a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href={loginUrl} target="_blank" rel="noopener noreferrer">
                    {t("locations.customerLogin", { defaultValue: "Customer Login" })}
                  </a>
                </Button>
              </div>
            </div>
          </section>
          
          <DallasAreasServed />
          
          <TrustSection />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default DallasHome;

import { OahuNavigation } from "@/components/OahuNavigation";
import { Footer } from "@/components/Footer";
import { LocationHero } from "@/components/LocationHero";
import { OahuServicesSection } from "@/components/OahuServicesSection";
import { TrustSection } from "@/components/TrustSection";
import { BeforeAfterSection } from "@/components/BeforeAfterSection";
import { OahuAreasServed } from "@/components/OahuAreasServed";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";
import Hreflang from "@/components/Hreflang";
import { useTranslation } from "react-i18next";

const OahuHome = () => {
  const loginUrl = "https://customer-portal.maidily.com/red-rock-cleans-vegas/sign-in";
  const bookingUrl = "/book-now-oahu";
  
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t("locations.oahu.title", { defaultValue: "Oahu House Cleaning Services | Red Rock Cleaning" })}</title>
        <meta name="description" content={t("locations.oahu.description", { defaultValue: "Professional residential and vacation rental cleaning services in Oahu and Honolulu. Experience premium Hawaiian cleaning services." })} />
      </Helmet>
      <Hreflang />
      
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
              <h2 className="text-3xl font-bold">{t("locations.cta.title", { defaultValue: "Ready to Experience a Cleaner Home?" })}</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {t("locations.cta.copy", { defaultValue: "Get an instant quote with our online calculator or book your cleaning service now" })}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="cta">
                  <a href="/oahu-calculator">{t("cta.getQuote", { defaultValue: "Get a Quote" })}</a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href={loginUrl} target="_blank" rel="noopener noreferrer">
                    {t("locations.customerLogin", { defaultValue: "Customer Login" })}
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

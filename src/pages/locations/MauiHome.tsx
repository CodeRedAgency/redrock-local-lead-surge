import { MauiNavigation } from "@/components/MauiNavigation";
import { Footer } from "@/components/Footer";
import { LocationHero } from "@/components/LocationHero";
import { MauiServicesSection } from "@/components/MauiServicesSection";
import { TrustSection } from "@/components/TrustSection";
import { BeforeAfterSection } from "@/components/BeforeAfterSection";
import { MauiAreasServed } from "@/components/MauiAreasServed";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";
import Hreflang from "@/components/Hreflang";
import { useTranslation } from "react-i18next";

const MauiHome = () => {
  const loginUrl = "https://customer-portal.maidily.com/red-rock-cleans-maui/sign-in";
  const bookingUrl = "/book-now-maui";
  
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t("locations.maui.title", { defaultValue: "Maui House Cleaning Services | Red Rock Cleaning" })}</title>
        <meta name="description" content={t("locations.maui.description", { defaultValue: "Professional vacation rental, deep, and recurring cleaning services in Maui. Premium cleaning for your Hawaiian paradise." })} />
      </Helmet>
      <Hreflang />
      
      <div className="min-h-screen flex flex-col">
        <MauiNavigation loginUrl={loginUrl} bookingUrl={bookingUrl} />
        
        <main className="flex-grow">
          <LocationHero
            location="Maui"
            title="Premium Cleaning Services in Maui"
            subtitle="Professional vacation rental, deep, and recurring cleaning services throughout Maui"
            phone="(808) 909-3038"
            bookingUrl={bookingUrl}
            imageType="residential"
          />
          
          <MauiServicesSection />
          
          <BeforeAfterSection bookingUrl={bookingUrl} />
          
          <section className="py-12 bg-primary/5">
            <div className="container mx-auto px-4 text-center space-y-6">
              <h2 className="text-3xl font-bold">{t("locations.cta.title", { defaultValue: "Ready to Experience a Cleaner Home?" })}</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {t("locations.cta.copy", { defaultValue: "Get an instant quote with our online calculator or book your cleaning service now" })}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="cta">
                  <a href="/maui-calculator">{t("cta.getQuote", { defaultValue: "Get a Quote" })}</a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href={loginUrl} target="_blank" rel="noopener noreferrer">
                    {t("locations.customerLogin", { defaultValue: "Customer Login" })}
                  </a>
                </Button>
              </div>
            </div>
          </section>
          
          <MauiAreasServed />
          
          <TrustSection />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default MauiHome;

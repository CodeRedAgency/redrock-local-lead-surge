import { GeneralNavigation } from "@/components/GeneralNavigation";
import { Footer } from "@/components/Footer";
import { ServiceLocationCards } from "@/components/ServiceLocationCards";
import { Helmet } from "react-helmet";
import Hreflang from "@/components/Hreflang";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroVacation from "@/assets/hero-vacation.jpg";
import { AirbnbChecklistSection } from "@/components/AirbnbChecklistSection";

const AirbnbCleaning = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t("pageTitles.airbnbCleaning", { defaultValue: "Airbnb & Vacation Rental Cleaning | Red Rock Cleaning" })}</title>
        <meta name="description" content={t("pageDescriptions.airbnbCleaning", { defaultValue: "Specialized Airbnb and vacation rental cleaning services. Ensure satisfied guests with spotless turnovers every time." })} />
      </Helmet>
      <Hreflang />
      
      <div className="min-h-screen flex flex-col">
        <GeneralNavigation />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative h-[500px] flex items-center justify-center">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${heroVacation})` }}
            >
              <div className="absolute inset-0 bg-black/50" />
            </div>
            <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">{t("services.airbnb.heading", { defaultValue: "Airbnb Cleaning Services" })}</h1>
              <p className="text-xl md:text-2xl mb-8">
                {t("services.airbnb.tagline", { defaultValue: "Professional turnover cleaning for vacation rentals and short-term properties" })}
              </p>
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                <Link to="/">{t("cta.getQuote", { defaultValue: "Get a Quote" })}</Link>
              </Button>
            </div>
          </section>

          <AirbnbChecklistSection />

          {/* Why Choose Us */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-12">{t("services.airbnb.why.title", { defaultValue: "Why Hosts Choose Red Rock?" })}</h2>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">⚡</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{t("services.airbnb.why.quick.title", { defaultValue: "Quick Turnovers" })}</h3>
                    <p className="text-muted-foreground">{t("services.airbnb.why.quick.copy", { defaultValue: "Same-day service available to maximize your booking potential." })}</p>
                  </div>

                  <div className="text-center">
                    <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">⭐</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{t("services.airbnb.why.fivestar.title", { defaultValue: "5-Star Standards" })}</h3>
                    <p className="text-muted-foreground">{t("services.airbnb.why.fivestar.copy", { defaultValue: "Every clean meets guest-ready standards for great reviews." })}</p>
                  </div>

                  <div className="text-center">
                    <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🤝</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{t("services.airbnb.why.reliable.title", { defaultValue: "Reliable Partners" })}</h3>
                    <p className="text-muted-foreground">{t("services.airbnb.why.reliable.copy", { defaultValue: "Trusted by hundreds of hosts. We show up on time, every time." })}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-primary/5">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold mb-6">{t("services.airbnb.cta.title", { defaultValue: "Ready to Maximize Your Rental Income?" })}</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                {t("services.airbnb.cta.copy", { defaultValue: "Get a quote for professional Airbnb cleaning services today." })}
              </p>
              <Button size="lg" asChild>
                <Link to="/">{t("cta.getQuote", { defaultValue: "Get Your Quote" })}</Link>
              </Button>
            </div>
          </section>
        </main>
        
        <ServiceLocationCards 
          servicePath="/airbnb-cleaning-services" 
          serviceTitle={t("services.airbnb.heading", { defaultValue: "Airbnb Cleaning Services" })}
        />
        
        <Footer />
      </div>
    </>
  );
};

export default AirbnbCleaning;

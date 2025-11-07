import { GeneralNavigation } from "@/components/GeneralNavigation";
import { Footer } from "@/components/Footer";
import { ServiceLocationCards } from "@/components/ServiceLocationCards";
import { Helmet } from "react-helmet";
import Hreflang from "@/components/Hreflang";
import { useTranslation } from "react-i18next";
import { Check, Clock, Star, Users } from "lucide-react";
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
        
        <main className="flex-grow py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-5xl font-bold mb-6">{t("services.airbnb.heading", { defaultValue: "Airbnb Cleaning Services" })}</h1>
                <p className="text-xl text-muted-foreground">
                  {t("services.airbnb.tagline", { defaultValue: "Professional turnover cleaning for vacation rentals and short-term properties" })}
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-6 mb-12">
                <div className="bg-card p-6 rounded-lg shadow-md text-center">
                  <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">{t("services.airbnb.quick.title", { defaultValue: "Quick Turnover" })}</h3>
                  <p className="text-muted-foreground">{t("services.airbnb.quick.copy", { defaultValue: "Same-day service available" })}</p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-md text-center">
                  <Star className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">{t("services.airbnb.fivestar.title", { defaultValue: "5-Star Ready" })}</h3>
                  <p className="text-muted-foreground">{t("services.airbnb.fivestar.copy", { defaultValue: "Guest-ready standards" })}</p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-md text-center">
                  <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">{t("services.airbnb.host.title", { defaultValue: "Host Partners" })}</h3>
                  <p className="text-muted-foreground">{t("services.airbnb.host.copy", { defaultValue: "Trusted by hundreds" })}</p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-md text-center">
                  <Check className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">{t("services.airbnb.quality.title", { defaultValue: "Quality Checked" })}</h3>
                  <p className="text-muted-foreground">{t("services.airbnb.quality.copy", { defaultValue: "Every clean verified" })}</p>
                </div>
              </div>

              <AirbnbChecklistSection />

              <div className="bg-primary text-primary-foreground p-8 rounded-lg mb-12">
                <h2 className="text-3xl font-bold mb-6 text-center">{t("services.airbnb.why.title", { defaultValue: "Why Hosts Choose Us" })}</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-3">{t("services.airbnb.why.flex.title", { defaultValue: "Flexible Scheduling" })}</h3>
                    <p>{t("services.airbnb.why.flex.copy", { defaultValue: "Last-minute bookings? No problem. We work around your check-in/check-out times." })}</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-3">{t("services.airbnb.why.quality.title", { defaultValue: "Consistent Quality" })}</h3>
                    <p>{t("services.airbnb.why.quality.copy", { defaultValue: "Every clean meets the same high standard, ensuring great guest reviews." })}</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-3">{t("services.airbnb.why.care.title", { defaultValue: "Property Care" })}</h3>
                    <p>{t("services.airbnb.why.care.copy", { defaultValue: "We treat your property with care and report any issues immediately." })}</p>
                  </div>
                </div>
              </div>

              <div className="bg-muted/30 p-8 rounded-lg text-center">
                <h2 className="text-3xl font-bold mb-4">{t("services.airbnb.cta.title", { defaultValue: "Partner With Us" })}</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  {t("services.airbnb.cta.copy", { defaultValue: "Let us handle the cleaning so you can focus on being a great host." })}
                </p>
                <a href="tel:+18888051733" className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                  {t("cta.phone")}
                </a>
              </div>
            </div>
          </div>
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

import { GeneralNavigation } from "@/components/GeneralNavigation";
import { Footer } from "@/components/Footer";
import { ServiceLocationCards } from "@/components/ServiceLocationCards";
import { Helmet } from "react-helmet";
import Hreflang from "@/components/Hreflang";
import { useTranslation } from "react-i18next";
import { Check, Clock, Sparkles } from "lucide-react";
import { StandardCleaningChecklistSection } from "@/components/StandardCleaningChecklistSection";

const StandardCleaning = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t("pageTitles.standardCleaning", { defaultValue: "Standard Cleaning Services | Red Rock Cleaning" })}</title>
        <meta name="description" content={t("pageDescriptions.standardCleaning", { defaultValue: "Comprehensive standard cleaning services for your home or business. Regular, professional cleaning that keeps your space fresh and inviting." })} />
      </Helmet>
      <Hreflang />
      
      <div className="min-h-screen flex flex-col">
        <GeneralNavigation />
        
        <main className="flex-grow py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-5xl font-bold mb-6">{t("services.standard.heading", { defaultValue: "Servicios de limpieza estándar" })}</h1>
                <p className="text-xl text-muted-foreground">
                  {t("services.standard.tagline", { defaultValue: "Limpieza de mantenimiento regular para mantener su espacio siempre fresco y limpio" })}
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-card p-6 rounded-lg shadow-md text-center">
                  <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">{t("services.standard.flex.title", { defaultValue: "Flexible Scheduling" })}</h3>
                  <p className="text-muted-foreground">{t("services.standard.flex.copy", { defaultValue: "Weekly, bi-weekly, or monthly options" })}</p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-md text-center">
                  <Sparkles className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">{t("services.standard.team.title", { defaultValue: "Professional Team" })}</h3>
                  <p className="text-muted-foreground">{t("services.standard.team.copy", { defaultValue: "Trained and experienced cleaners" })}</p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-md text-center">
                  <Check className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">{t("services.standard.quality.title", { defaultValue: "Quality Guaranteed" })}</h3>
                  <p className="text-muted-foreground">{t("services.standard.quality.copy", { defaultValue: "100% satisfaction promise" })}</p>
                </div>
              </div>

              <StandardCleaningChecklistSection />

              <div className="bg-muted/30 p-8 rounded-lg text-center">
                <h2 className="text-3xl font-bold mb-4">{t("services.standard.cta.title", { defaultValue: "Ready to Get Started?" })}</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  {t("services.standard.cta.copy", { defaultValue: "Book your standard cleaning service today and enjoy a consistently clean space." })}
                </p>
                <a href="tel:+18888051733" className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                  {t("cta.phone")}
                </a>
              </div>
            </div>
          </div>
        </main>
        
        <ServiceLocationCards 
          servicePath="/standard-cleaning-services" 
          serviceTitle={t("services.standard.heading", { defaultValue: "Standard Cleaning Services" })}
        />
        
        <Footer />
      </div>
    </>
  );
};

export default StandardCleaning;

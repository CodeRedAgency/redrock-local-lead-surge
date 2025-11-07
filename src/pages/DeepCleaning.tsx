import { GeneralNavigation } from "@/components/GeneralNavigation";
import { Footer } from "@/components/Footer";
import { ServiceLocationCards } from "@/components/ServiceLocationCards";
import { Helmet } from "react-helmet";
import Hreflang from "@/components/Hreflang";
import { useTranslation } from "react-i18next";
import { Check, Sparkles, Shield } from "lucide-react";
import { DeepCleaningChecklistSection } from "@/components/DeepCleaningChecklistSection";

const DeepCleaning = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t("pageTitles.deepCleaning", { defaultValue: "Deep Cleaning Services | Red Rock Cleaning" })}</title>
        <meta name="description" content={t("pageDescriptions.deepCleaning", { defaultValue: "Comprehensive deep cleaning services that reach every corner. Perfect for seasonal cleaning, move-in/out, or thorough home sanitization." })} />
      </Helmet>
      <Hreflang />
      
      <div className="min-h-screen flex flex-col">
        <GeneralNavigation />
        
        <main className="flex-grow py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-5xl font-bold mb-6">{t("services.deep.heading", { defaultValue: "Deep Cleaning Services" })}</h1>
                <p className="text-xl text-muted-foreground">
                  {t("services.deep.tagline", { defaultValue: "Intensive, detailed cleaning that transforms your space from top to bottom" })}
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-card p-6 rounded-lg shadow-md text-center">
                  <Sparkles className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">{t("services.deep.thorough.title", { defaultValue: "Thorough Clean" })}</h3>
                  <p className="text-muted-foreground">{t("services.deep.thorough.copy", { defaultValue: "Every corner, every surface" })}</p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-md text-center">
                  <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">{t("services.deep.health.title", { defaultValue: "Health Focused" })}</h3>
                  <p className="text-muted-foreground">{t("services.deep.health.copy", { defaultValue: "Eliminate allergens and bacteria" })}</p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-md text-center">
                  <Check className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">{t("services.deep.movein.title", { defaultValue: "Move-In Ready" })}</h3>
                  <p className="text-muted-foreground">{t("services.deep.movein.copy", { defaultValue: "Perfect for transitions" })}</p>
                </div>
              </div>

              <DeepCleaningChecklistSection />

              <div className="bg-primary text-primary-foreground p-8 rounded-lg text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">{t("services.deep.when.title", { defaultValue: "When to Schedule Deep Cleaning" })}</h2>
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div>
                    <h3 className="font-bold mb-2">{t("services.deep.when.seasonal.title", { defaultValue: "Seasonal Refresh" })}</h3>
                    <p>{t("services.deep.when.seasonal.copy", { defaultValue: "Every 3-6 months for a thorough reset" })}</p>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">{t("services.deep.when.move.title", { defaultValue: "Move In/Out" })}</h3>
                    <p>{t("services.deep.when.move.copy", { defaultValue: "Start fresh or leave spotless" })}</p>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">{t("services.deep.when.events.title", { defaultValue: "Special Events" })}</h3>
                    <p>{t("services.deep.when.events.copy", { defaultValue: "Before hosting or after construction" })}</p>
                  </div>
                </div>
              </div>

              <div className="bg-muted/30 p-8 rounded-lg text-center">
                <h2 className="text-3xl font-bold mb-4">{t("services.deep.cta.title", { defaultValue: "Schedule Your Deep Clean" })}</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  {t("services.deep.cta.copy", { defaultValue: "Transform your space with our comprehensive deep cleaning service." })}
                </p>
                <a href="tel:+18888051733" className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                  {t("cta.phone")}
                </a>
              </div>
            </div>
          </div>
        </main>
        
        <ServiceLocationCards 
          servicePath="/deep-cleaning-services" 
          serviceTitle={t("services.deep.heading", { defaultValue: "Deep Cleaning Services" })}
        />
        
        <Footer />
      </div>
    </>
  );
};

export default DeepCleaning;

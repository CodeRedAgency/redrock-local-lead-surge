import { GeneralNavigation } from "@/components/GeneralNavigation";
import { Footer } from "@/components/Footer";
import { ServiceLocationCards } from "@/components/ServiceLocationCards";
import { Helmet } from "react-helmet";
import Hreflang from "@/components/Hreflang";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import deepCleaningImg from "@/assets/deep-cleaning.jpg";
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
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative h-[500px] flex items-center justify-center">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${deepCleaningImg})` }}
            >
              <div className="absolute inset-0 bg-black/50" />
            </div>
            <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">{t("services.deep.heading", { defaultValue: "Deep Cleaning Services" })}</h1>
              <p className="text-xl md:text-2xl mb-8">
                {t("services.deep.tagline", { defaultValue: "Intensive, detailed cleaning that transforms your space from top to bottom" })}
              </p>
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                <Link to="/">{t("cta.getQuote", { defaultValue: "Get a Quote" })}</Link>
              </Button>
            </div>
          </section>

          <DeepCleaningChecklistSection />

          {/* Why Choose Us */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-12">{t("services.deep.why.title", { defaultValue: "Why Choose Red Rock for Deep Cleaning?" })}</h2>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">✨</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{t("services.deep.why.thorough.title", { defaultValue: "Comprehensive Cleaning" })}</h3>
                    <p className="text-muted-foreground">{t("services.deep.why.thorough.copy", { defaultValue: "We clean every corner, every surface, from top to bottom." })}</p>
                  </div>

                  <div className="text-center">
                    <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🛡️</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{t("services.deep.why.health.title", { defaultValue: "Health Focused" })}</h3>
                    <p className="text-muted-foreground">{t("services.deep.why.health.copy", { defaultValue: "Eliminate allergens, bacteria, and deep-seated grime." })}</p>
                  </div>

                  <div className="text-center">
                    <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🏠</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{t("services.deep.why.transform.title", { defaultValue: "Total Transformation" })}</h3>
                    <p className="text-muted-foreground">{t("services.deep.why.transform.copy", { defaultValue: "Perfect for seasonal refreshes or move-in/out situations." })}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-primary/5">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold mb-6">{t("services.deep.cta.title", { defaultValue: "Ready for a Complete Transformation?" })}</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                {t("services.deep.cta.copy", { defaultValue: "Get a quote for professional deep cleaning services today." })}
              </p>
              <Button size="lg" asChild>
                <Link to="/">{t("cta.getQuote", { defaultValue: "Get Your Quote" })}</Link>
              </Button>
            </div>
          </section>
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

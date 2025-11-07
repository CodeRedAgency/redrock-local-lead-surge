import { GeneralNavigation } from "@/components/GeneralNavigation";
import { Footer } from "@/components/Footer";
import { ServiceLocationCards } from "@/components/ServiceLocationCards";
import { Helmet } from "react-helmet";
import Hreflang from "@/components/Hreflang";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroResidential from "@/assets/hero-residential.jpg";
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
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative h-[500px] flex items-center justify-center">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${heroResidential})` }}
            >
              <div className="absolute inset-0 bg-black/50" />
            </div>
            <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">{t("services.standard.heading", { defaultValue: "Standard Cleaning Services" })}</h1>
              <p className="text-xl md:text-2xl mb-8">
                {t("services.standard.tagline", { defaultValue: "Regular, professional cleaning that keeps your space fresh and inviting" })}
              </p>
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                <Link to="/">{t("cta.getQuote", { defaultValue: "Get a Quote" })}</Link>
              </Button>
            </div>
          </section>

          <StandardCleaningChecklistSection />

          {/* Why Choose Us */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-12">{t("services.standard.why.title", { defaultValue: "Why Choose Red Rock for Standard Cleaning?" })}</h2>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">⏰</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{t("services.standard.why.flexible.title", { defaultValue: "Flexible Scheduling" })}</h3>
                    <p className="text-muted-foreground">{t("services.standard.why.flexible.copy", { defaultValue: "Weekly, bi-weekly, or monthly options to fit your lifestyle." })}</p>
                  </div>

                  <div className="text-center">
                    <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">✨</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{t("services.standard.why.consistent.title", { defaultValue: "Consistent Quality" })}</h3>
                    <p className="text-muted-foreground">{t("services.standard.why.consistent.copy", { defaultValue: "Same high standards every visit with trained professionals." })}</p>
                  </div>

                  <div className="text-center">
                    <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">💯</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{t("services.standard.why.satisfaction.title", { defaultValue: "100% Satisfaction" })}</h3>
                    <p className="text-muted-foreground">{t("services.standard.why.satisfaction.copy", { defaultValue: "We stand behind our work with a satisfaction guarantee." })}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-primary/5">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold mb-6">{t("services.standard.cta.title", { defaultValue: "Ready for a Consistently Clean Space?" })}</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                {t("services.standard.cta.copy", { defaultValue: "Get a quote for professional standard cleaning services today." })}
              </p>
              <Button size="lg" asChild>
                <Link to="/">{t("cta.getQuote", { defaultValue: "Get Your Quote" })}</Link>
              </Button>
            </div>
          </section>
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

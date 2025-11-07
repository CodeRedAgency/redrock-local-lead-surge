import { GeneralNavigation } from "@/components/GeneralNavigation";
import { Footer } from "@/components/Footer";
import { ServiceLocationCards } from "@/components/ServiceLocationCards";
import { Helmet } from "react-helmet";
import Hreflang from "@/components/Hreflang";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import heroResidential from "@/assets/hero-residential.jpg";
import { MoveOutChecklistSection } from "@/components/MoveOutChecklistSection";
import { useLocationGuard } from "@/hooks/use-location-guard";
import { LocationPromptModal } from "@/components/LocationPromptModal";
import { useLocationContext } from "@/contexts/LocationContext";

const MoveOutCleaning = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const guardLocation = useLocationGuard();
  const { showPrompt, setShowPrompt } = useLocationContext();

  const handleGetQuote = (e: React.MouseEvent) => {
    e.preventDefault();
    guardLocation(() => {
      navigate("/");
    });
  };

  return (
    <>
      <Helmet>
        <title>{t("pageTitles.moveOut", { defaultValue: "Move-Out Cleaning Services | Red Rock Cleaning" })}</title>
        <meta name="description" content={t("pageDescriptions.moveOut", { defaultValue: "Comprehensive move-out cleaning services. Get your full deposit back with our professional checklist and thorough service." })} />
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
              <h1 className="text-5xl md:text-6xl font-bold mb-6">{t("services.moveout.heading", { defaultValue: "Move Out Cleaning Services" })}</h1>
              <p className="text-xl md:text-2xl mb-8">
                {t("services.moveout.tagline", { defaultValue: "Get your security deposit back with our thorough move-out cleaning" })}
              </p>
              <Button size="lg" onClick={handleGetQuote} className="bg-primary hover:bg-primary/90">
                {t("cta.getQuote", { defaultValue: "Get a Quote" })}
              </Button>
            </div>
          </section>

          <MoveOutChecklistSection />

          {/* Why Choose Us */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-12">{t("services.moveout.why.title", { defaultValue: "Why Choose Red Rock for Move Out Cleaning?" })}</h2>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🏠</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{t("services.moveout.why.deposit.title", { defaultValue: "Security Deposit Protection" })}</h3>
                    <p className="text-muted-foreground">{t("services.moveout.why.deposit.copy", { defaultValue: "Our thorough cleaning helps ensure you get your full security deposit back." })}</p>
                  </div>

                  <div className="text-center">
                    <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">⚡</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{t("services.moveout.why.fast.title", { defaultValue: "Fast Turnaround" })}</h3>
                    <p className="text-muted-foreground">{t("services.moveout.why.fast.copy", { defaultValue: "We work efficiently to clean your space quickly without compromising quality." })}</p>
                  </div>

                  <div className="text-center">
                    <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">✅</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{t("services.moveout.why.approved.title", { defaultValue: "Landlord Approved" })}</h3>
                    <p className="text-muted-foreground">{t("services.moveout.why.approved.copy", { defaultValue: "Our cleaning standards meet the requirements of most landlords and property managers." })}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-primary/5">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold mb-6">{t("services.moveout.cta.title", { defaultValue: "Ready to Move Out with Confidence?" })}</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                {t("services.moveout.cta.copy", { defaultValue: "Get a quote for professional move-out cleaning and secure your security deposit." })}
              </p>
              <Button size="lg" onClick={handleGetQuote}>
                {t("cta.getQuote", { defaultValue: "Get Your Quote" })}
              </Button>
            </div>
          </section>
        </main>
        
        <LocationPromptModal isOpen={showPrompt} onClose={() => setShowPrompt(false)} />
        
        <ServiceLocationCards 
          servicePath="/move-out-cleaning-services" 
          serviceTitle={t("services.moveout.heading", { defaultValue: "Move Out Cleaning Services" })}
        />
        
        <Footer />
      </div>
    </>
  );
};

export default MoveOutCleaning;

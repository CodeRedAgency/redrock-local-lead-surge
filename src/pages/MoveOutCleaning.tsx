import { GeneralNavigation } from "@/components/GeneralNavigation";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";
import Hreflang from "@/components/Hreflang";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroResidential from "@/assets/hero-residential.jpg";

const MoveOutCleaning = () => {
  const { t } = useTranslation();
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
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                <Link to="/">{t("cta.getQuote", { defaultValue: "Get a Quote" })}</Link>
              </Button>
            </div>
          </section>

          {/* Services Details */}
          <section className="py-20 bg-muted/20">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12">{t("services.moveout.complete.title", { defaultValue: "Complete Move Out Cleaning" })}</h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-card p-8 rounded-lg shadow-md">
                    <h3 className="text-2xl font-bold mb-4">{t("services.moveout.sections.kitchen.title", { defaultValue: "Kitchen Deep Clean" })}</h3>
                    <p className="text-muted-foreground mb-4">
                      {t("services.moveout.sections.kitchen.copy", { defaultValue: "Leave your kitchen spotless with our comprehensive move-out kitchen cleaning service." })}
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• {t("services.moveout.sections.kitchen.i1", { defaultValue: "Inside and outside of all appliances" })}</li>
                      <li>• {t("services.moveout.sections.kitchen.i2", { defaultValue: "Cabinet interiors and exteriors" })}</li>
                      <li>• {t("services.moveout.sections.kitchen.i3", { defaultValue: "Countertops and backsplash cleaning" })}</li>
                      <li>• {t("services.moveout.sections.kitchen.i4", { defaultValue: "Sink and faucet deep cleaning" })}</li>
                      <li>• {t("services.moveout.sections.kitchen.i5", { defaultValue: "Floor cleaning and mopping" })}</li>
                    </ul>
                  </div>

                  <div className="bg-card p-8 rounded-lg shadow-md">
                    <h3 className="text-2xl font-bold mb-4">{t("services.moveout.sections.bath.title", { defaultValue: "Bathroom Deep Clean" })}</h3>
                    <p className="text-muted-foreground mb-4">
                      {t("services.moveout.sections.bath.copy", { defaultValue: "Ensure bathrooms are thoroughly sanitized and ready for the next tenant." })}
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• {t("services.moveout.sections.bath.i1", { defaultValue: "Toilet deep cleaning and sanitization" })}</li>
                      <li>• {t("services.moveout.sections.bath.i2", { defaultValue: "Shower/tub scrubbing and sanitizing" })}</li>
                      <li>• {t("services.moveout.sections.bath.i3", { defaultValue: "Vanity and mirror cleaning" })}</li>
                      <li>• {t("services.moveout.sections.bath.i4", { defaultValue: "Floor and wall tile cleaning" })}</li>
                      <li>• {t("services.moveout.sections.bath.i5", { defaultValue: "Cabinet interior cleaning" })}</li>
                    </ul>
                  </div>

                  <div className="bg-card p-8 rounded-lg shadow-md">
                    <h3 className="text-2xl font-bold mb-4">{t("services.moveout.sections.living.title", { defaultValue: "Living Areas" })}</h3>
                    <p className="text-muted-foreground mb-4">
                      {t("services.moveout.sections.living.copy", { defaultValue: "Comprehensive cleaning of all living spaces to meet landlord requirements." })}
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• {t("services.moveout.sections.living.i1", { defaultValue: "Carpet vacuuming and spot cleaning" })}</li>
                      <li>• {t("services.moveout.sections.living.i2", { defaultValue: "Hard floor mopping and polishing" })}</li>
                      <li>• {t("services.moveout.sections.living.i3", { defaultValue: "Baseboard and trim cleaning" })}</li>
                      <li>• {t("services.moveout.sections.living.i4", { defaultValue: "Window and window sill cleaning" })}</li>
                      <li>• {t("services.moveout.sections.living.i5", { defaultValue: "Light fixture dusting" })}</li>
                    </ul>
                  </div>

                  <div className="bg-card p-8 rounded-lg shadow-md">
                    <h3 className="text-2xl font-bold mb-4">{t("services.moveout.sections.additional.title", { defaultValue: "Additional Services" })}</h3>
                    <p className="text-muted-foreground mb-4">
                      {t("services.moveout.sections.additional.copy", { defaultValue: "Extra services to ensure your move-out cleaning meets all requirements." })}
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• {t("services.moveout.sections.additional.i1", { defaultValue: "Interior cabinet and drawer cleaning" })}</li>
                      <li>• {t("services.moveout.sections.additional.i2", { defaultValue: "Wall spot cleaning and touch-ups" })}</li>
                      <li>• {t("services.moveout.sections.additional.i3", { defaultValue: "Light switch and outlet cleaning" })}</li>
                      <li>• {t("services.moveout.sections.additional.i4", { defaultValue: "Door and door frame cleaning" })}</li>
                      <li>• {t("services.moveout.sections.additional.i5", { defaultValue: "Closet and storage area cleaning" })}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

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
              <Button size="lg" asChild>
                <Link to="/">{t("cta.getQuote", { defaultValue: "Get Your Quote" })}</Link>
              </Button>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default MoveOutCleaning;

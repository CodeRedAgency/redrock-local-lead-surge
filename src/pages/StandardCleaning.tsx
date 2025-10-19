import { GeneralNavigation } from "@/components/GeneralNavigation";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";
import Hreflang from "@/components/Hreflang";
import { useTranslation } from "react-i18next";
import { Check, Clock, Sparkles } from "lucide-react";

const StandardCleaning = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t("services.standard.title", { defaultValue: "Servicios de limpieza estándar | Red Rock Cleaning" })}</title>
        <meta name="description" content={t("services.standard.description", { defaultValue: "Servicios de limpieza estándar regular para mantener un hogar u oficina impecable. Limpiadores profesionales para un mantenimiento constante y confiable." })} />
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

              <div className="bg-card p-8 rounded-lg shadow-lg mb-12">
                <h2 className="text-3xl font-bold mb-6 text-primary">{t("services.standard.included.title", { defaultValue: "What's Included" })}</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">{t("services.standard.included.allRooms", { defaultValue: "All Rooms" })}</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>{t("services.standard.included.dust", { defaultValue: "Dust all accessible surfaces" })}</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>{t("services.standard.included.vacuum", { defaultValue: "Vacuum carpets and rugs" })}</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>{t("services.standard.included.mop", { defaultValue: "Mop hard floors" })}</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>{t("services.standard.included.trash", { defaultValue: "Empty trash bins" })}</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>{t("services.standard.included.handles", { defaultValue: "Wipe door handles and switches" })}</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">{t("services.standard.included.kitchen", { defaultValue: "Kitchen" })}</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>{t("services.standard.included.ctops", { defaultValue: "Clean countertops and backsplash" })}</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>{t("services.standard.included.appliances", { defaultValue: "Clean outside of appliances" })}</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>{t("services.standard.included.sink", { defaultValue: "Clean sink and faucet" })}</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>{t("services.standard.included.cabinets", { defaultValue: "Wipe cabinet fronts" })}</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">{t("services.standard.included.bathrooms", { defaultValue: "Bathrooms" })}</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>{t("services.standard.included.toilet", { defaultValue: "Scrub and sanitize toilet" })}</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>{t("services.standard.included.shower", { defaultValue: "Clean shower and tub" })}</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>{t("services.standard.included.bathSink", { defaultValue: "Clean sink and counters" })}</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>{t("services.standard.included.mirrors", { defaultValue: "Polish mirrors and fixtures" })}</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">{t("services.standard.included.bedrooms", { defaultValue: "Bedrooms" })}</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>{t("services.standard.included.beds", { defaultValue: "Make beds and change linens" })}</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>{t("services.standard.included.dustFurniture", { defaultValue: "Dust furniture and decor" })}</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>{t("services.standard.included.vacuumUnder", { defaultValue: "Vacuum under accessible areas" })}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

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
        
        <Footer />
      </div>
    </>
  );
};

export default StandardCleaning;

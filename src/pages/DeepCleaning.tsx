import { GeneralNavigation } from "@/components/GeneralNavigation";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";
import Hreflang from "@/components/Hreflang";
import { useTranslation } from "react-i18next";
import { Check, Sparkles, Shield } from "lucide-react";

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

              <div className="bg-card p-8 rounded-lg shadow-lg mb-12">
                <h2 className="text-3xl font-bold mb-6 text-primary">{t("services.deep.checklist.title", { defaultValue: "Complete Deep Cleaning Checklist" })}</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">{t("services.deep.checklist.kitchen", { defaultValue: "Kitchen Deep Clean" })}</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>{t("services.deep.checklist.kitchen1", { defaultValue: "Inside oven, refrigerator, and dishwasher" })}</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>{t("services.deep.checklist.kitchen2", { defaultValue: "Inside and outside all cabinets" })}</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>{t("services.deep.checklist.kitchen3", { defaultValue: "Degrease range hood and backsplash" })}</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>{t("services.deep.checklist.kitchen4", { defaultValue: "Clean baseboards and corners" })}</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>{t("services.deep.checklist.kitchen5", { defaultValue: "Detailed grout cleaning" })}</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">{t("services.deep.checklist.bath", { defaultValue: "Bathroom Deep Clean" })}</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>{t("services.deep.checklist.bath1", { defaultValue: "Scrub and sanitize grout lines" })}</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>{t("services.deep.checklist.bath2", { defaultValue: "Deep clean shower doors and tracks" })}</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>{t("services.deep.checklist.bath3", { defaultValue: "Descale fixtures and showerheads" })}</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>{t("services.deep.checklist.bath4", { defaultValue: "Clean inside cabinets and drawers" })}</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>{t("services.deep.checklist.bath5", { defaultValue: "Detailed baseboard cleaning" })}</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">{t("services.deep.checklist.living", { defaultValue: "Living Areas" })}</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>{t("services.deep.checklist.living1", { defaultValue: "Clean ceiling fans and light fixtures" })}</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>{t("services.deep.checklist.living2", { defaultValue: "Wipe down walls and doors" })}</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>{t("services.deep.checklist.living3", { defaultValue: "Clean window sills and tracks" })}</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>{t("services.deep.checklist.living4", { defaultValue: "Vacuum behind and under furniture" })}</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>{t("services.deep.checklist.living5", { defaultValue: "Detailed baseboard and molding" })}</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">{t("services.deep.checklist.additional", { defaultValue: "Additional Services" })}</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>{t("services.deep.checklist.add1", { defaultValue: "Clean inside closets" })}</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>{t("services.deep.checklist.add2", { defaultValue: "Dust vents and air returns" })}</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>{t("services.deep.checklist.add3", { defaultValue: "Wipe down switches and outlets" })}</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>{t("services.deep.checklist.add4", { defaultValue: "Polish all hardware" })}</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>{t("services.deep.checklist.add5", { defaultValue: "Remove cobwebs from ceilings" })}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

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
        
        <Footer />
      </div>
    </>
  );
};

export default DeepCleaning;

import { GeneralNavigation } from "@/components/GeneralNavigation";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";
import Hreflang from "@/components/Hreflang";
import { useTranslation } from "react-i18next";
import { StandardCleaningChecklistSection } from "@/components/StandardCleaningChecklistSection";
import { DeepCleaningChecklistSection } from "@/components/DeepCleaningChecklistSection";
import { AirbnbChecklistSection } from "@/components/AirbnbChecklistSection";
import { MoveOutChecklistSection } from "@/components/MoveOutChecklistSection";

const ResidentialServicesChecklist = () => {
  const { t } = useTranslation();
  
  return (
    <>
      <Helmet>
        <title>{t("pageTitles.residentialChecklists", { defaultValue: "Residential Cleaning Services Checklists | Red Rock Cleaning" })}</title>
        <meta name="description" content={t("pageDescriptions.residentialChecklists", { defaultValue: "Compare all our residential cleaning services in one place. View detailed checklists for Standard, Deep, Airbnb, Move-Out, and Post-Construction cleaning services." })} />
      </Helmet>
      <Hreflang />
      
      <div className="min-h-screen flex flex-col">
        <GeneralNavigation />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  {t("residentialChecklists.title", { defaultValue: "Residential Cleaning Services Checklists" })}
                </h1>
                <p className="text-xl text-muted-foreground">
                  {t("residentialChecklists.subtitle", { defaultValue: "Compare all our comprehensive cleaning services in one place. Each checklist shows exactly what's included in every service." })}
                </p>
              </div>
            </div>
          </section>

          {/* Standard Cleaning Checklist */}
          <section className="relative">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
            <StandardCleaningChecklistSection
              sectionClassName="py-20 bg-background"
            />
          </section>

          {/* Deep Cleaning Checklist */}
          <section className="relative">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
            <DeepCleaningChecklistSection
              sectionClassName="py-20 bg-muted/30"
            />
          </section>

          {/* Airbnb Cleaning Checklist */}
          <section className="relative">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
            <AirbnbChecklistSection
              sectionClassName="py-20 bg-background"
            />
          </section>

          {/* Move Out Cleaning Checklist */}
          <section className="relative">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
            <MoveOutChecklistSection
              sectionClassName="py-20 bg-muted/30"
            />
          </section>

          {/* Post Construction Cleaning Checklist */}
          <section className="relative">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
            <section className="py-20 bg-background">
              <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                  <header className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                      {t("checklists.postConstruction.title", { defaultValue: "Post-Construction Cleaning Checklist" })}
                    </h2>
                    <p className="text-lg text-muted-foreground">
                      {t("checklists.postConstruction.intro", { defaultValue: "Our post-construction cleaning process removes all dust, debris, and construction residue to leave your new or renovated space move-in ready." })}
                    </p>
                  </header>

                  <div className="space-y-8">
                    {/* Three-Phase Process */}
                    <div className="bg-card p-8 rounded-2xl shadow-md border border-border">
                      <h3 className="text-2xl font-semibold mb-6 text-primary">Three-Phase Cleaning Process</h3>
                      
                      <div className="space-y-6">
                        {/* Phase 1 */}
                        <div className="border-l-4 border-primary pl-6">
                          <h4 className="text-xl font-bold mb-3">Phase 1: Rough Clean</h4>
                          <p className="text-muted-foreground mb-3">Initial cleanup during construction phase</p>
                          <ul className="checklist-list space-y-2">
                            <li className="checklist-item">Remove large debris and materials</li>
                            <li className="checklist-item">Sweep and vacuum floors</li>
                            <li className="checklist-item">Remove stickers and labels</li>
                            <li className="checklist-item">Dust surfaces and fixtures</li>
                          </ul>
                        </div>

                        {/* Phase 2 */}
                        <div className="border-l-4 border-primary pl-6">
                          <h4 className="text-xl font-bold mb-3">Phase 2: Deep Clean</h4>
                          <p className="text-muted-foreground mb-3">Detailed cleaning after construction is complete</p>
                          <ul className="checklist-list space-y-2">
                            <li className="checklist-item">Remove all dust from surfaces and vents</li>
                            <li className="checklist-item">Clean windows, tracks, and sills</li>
                            <li className="checklist-item">Scrub grout and tile</li>
                            <li className="checklist-item">Clean all fixtures and hardware</li>
                            <li className="checklist-item">Wipe down walls, doors, and trim</li>
                          </ul>
                        </div>

                        {/* Phase 3 */}
                        <div className="border-l-4 border-primary pl-6">
                          <h4 className="text-xl font-bold mb-3">Phase 3: Final Touch</h4>
                          <p className="text-muted-foreground mb-3">Final polish for move-in readiness</p>
                          <ul className="checklist-list space-y-2">
                            <li className="checklist-item">Polish all surfaces and fixtures</li>
                            <li className="checklist-item">Final vacuum and mop</li>
                            <li className="checklist-item">Touch-up cleaning of all areas</li>
                            <li className="checklist-item">Final inspection walkthrough</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* What We Remove */}
                    <div className="bg-muted/30 p-8 rounded-2xl">
                      <h3 className="text-2xl font-semibold mb-6 text-center">What We Remove</h3>
                      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="bg-card p-4 rounded-lg text-center border border-border">
                          <p className="font-semibold">Construction Dust</p>
                        </div>
                        <div className="bg-card p-4 rounded-lg text-center border border-border">
                          <p className="font-semibold">Paint Overspray</p>
                        </div>
                        <div className="bg-card p-4 rounded-lg text-center border border-border">
                          <p className="font-semibold">Adhesive Residue</p>
                        </div>
                        <div className="bg-card p-4 rounded-lg text-center border border-border">
                          <p className="font-semibold">Drywall Dust</p>
                        </div>
                        <div className="bg-card p-4 rounded-lg text-center border border-border">
                          <p className="font-semibold">Sawdust</p>
                        </div>
                        <div className="bg-card p-4 rounded-lg text-center border border-border">
                          <p className="font-semibold">Stickers & Labels</p>
                        </div>
                        <div className="bg-card p-4 rounded-lg text-center border border-border">
                          <p className="font-semibold">Concrete Residue</p>
                        </div>
                        <div className="bg-card p-4 rounded-lg text-center border border-border">
                          <p className="font-semibold">Debris</p>
                        </div>
                      </div>
                    </div>

                    {/* Note */}
                    <div className="text-center">
                      <p className="font-semibold text-muted-foreground">
                        Note: Checklist is a guideline and some projects may require additional time.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-primary/5">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t("residentialChecklists.cta.title", { defaultValue: "Ready to Get Started?" })}
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                {t("residentialChecklists.cta.copy", { defaultValue: "Choose the service that fits your needs and get a quote today. Our professional team is ready to make your space spotless." })}
              </p>
              <a 
                href="tel:+18888051733" 
                className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity"
              >
                Call (888) 805-1733
              </a>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default ResidentialServicesChecklist;


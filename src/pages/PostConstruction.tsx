import { GeneralNavigation } from "@/components/GeneralNavigation";
import { Footer } from "@/components/Footer";
import { ServiceLocationCards } from "@/components/ServiceLocationCards";
import { Helmet } from "react-helmet";
import Hreflang from "@/components/Hreflang";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import heroCommercial from "@/assets/hero-commercial.jpg";

const PostConstruction = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t("pageTitles.postConstruction", { defaultValue: "Post-Construction Cleaning Services | Red Rock Cleaning" })}</title>
        <meta name="description" content={t("pageDescriptions.postConstruction", { defaultValue: "Professional post-construction cleaning services. We remove dust and debris to leave your new space move-in ready." })} />
      </Helmet>
      <Hreflang />
      
      <div className="min-h-screen flex flex-col">
        <GeneralNavigation />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative h-[500px] flex items-center justify-center">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${heroCommercial})` }}
            >
              <div className="absolute inset-0 bg-black/50" />
            </div>
            <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">{t("services.post.heading", { defaultValue: "Post-Construction Cleaning" })}</h1>
              <p className="text-xl md:text-2xl mb-8">
                {t("services.post.tagline", { defaultValue: "Professional cleaning after construction, renovation, or remodeling projects" })}
              </p>
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                <Link to="/">{t("cta.getQuote", { defaultValue: "Get a Quote" })}</Link>
              </Button>
            </div>
          </section>

          {/* Three-Phase Process */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="bg-card p-8 rounded-lg shadow-lg mb-12">
                  <h2 className="text-3xl font-bold mb-6 text-primary">{t("services.post.process.title", { defaultValue: "Three-Phase Cleaning Process" })}</h2>
                  
                  <div className="space-y-8">
                  <div className="border-l-4 border-primary pl-6">
                    <h3 className="text-2xl font-bold mb-4">{t("services.post.process.p1.title", { defaultValue: "Phase 1: Rough Clean" })}</h3>
                    <p className="text-muted-foreground mb-4">{t("services.post.process.p1.copy", { defaultValue: "Initial cleanup during construction phase" })}</p>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>{t("services.post.process.p1.i1", { defaultValue: "Remove large debris and materials" })}</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>{t("services.post.process.p1.i2", { defaultValue: "Sweep and vacuum floors" })}</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>{t("services.post.process.p1.i3", { defaultValue: "Remove stickers and labels" })}</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>{t("services.post.process.p1.i4", { defaultValue: "Dust surfaces and fixtures" })}</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-primary pl-6">
                    <h3 className="text-2xl font-bold mb-4">{t("services.post.process.p2.title", { defaultValue: "Phase 2: Deep Clean" })}</h3>
                    <p className="text-muted-foreground mb-4">{t("services.post.process.p2.copy", { defaultValue: "Detailed cleaning after construction is complete" })}</p>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>{t("services.post.process.p2.i1", { defaultValue: "Remove all dust from surfaces and vents" })}</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>{t("services.post.process.p2.i2", { defaultValue: "Clean windows, tracks, and sills" })}</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>{t("services.post.process.p2.i3", { defaultValue: "Scrub grout and tile" })}</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>{t("services.post.process.p2.i4", { defaultValue: "Clean all fixtures and hardware" })}</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>{t("services.post.process.p2.i5", { defaultValue: "Wipe down walls, doors, and trim" })}</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-primary pl-6">
                    <h3 className="text-2xl font-bold mb-4">{t("services.post.process.p3.title", { defaultValue: "Phase 3: Final Touch" })}</h3>
                    <p className="text-muted-foreground mb-4">{t("services.post.process.p3.copy", { defaultValue: "Final polish for move-in readiness" })}</p>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>{t("services.post.process.p3.i1", { defaultValue: "Polish all surfaces and fixtures" })}</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>{t("services.post.process.p3.i2", { defaultValue: "Final vacuum and mop" })}</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>{t("services.post.process.p3.i3", { defaultValue: "Touch-up cleaning of all areas" })}</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>{t("services.post.process.p3.i4", { defaultValue: "Final inspection walkthrough" })}</span>
                      </li>
                    </ul>
                  </div>
                </div>
                </div>

                <div className="bg-muted/30 p-8 rounded-lg mb-12">
                  <h2 className="text-3xl font-bold mb-6 text-center">{t("services.post.remove.title", { defaultValue: "What We Remove" })}</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-card p-4 rounded-lg text-center">
                    <p className="font-semibold">{t("services.post.remove.r1", { defaultValue: "Construction Dust" })}</p>
                  </div>
                  <div className="bg-card p-4 rounded-lg text-center">
                    <p className="font-semibold">{t("services.post.remove.r2", { defaultValue: "Paint Overspray" })}</p>
                  </div>
                  <div className="bg-card p-4 rounded-lg text-center">
                    <p className="font-semibold">{t("services.post.remove.r3", { defaultValue: "Adhesive Residue" })}</p>
                  </div>
                  <div className="bg-card p-4 rounded-lg text-center">
                    <p className="font-semibold">{t("services.post.remove.r4", { defaultValue: "Drywall Dust" })}</p>
                  </div>
                  <div className="bg-card p-4 rounded-lg text-center">
                    <p className="font-semibold">{t("services.post.remove.r5", { defaultValue: "Sawdust" })}</p>
                  </div>
                  <div className="bg-card p-4 rounded-lg text-center">
                    <p className="font-semibold">{t("services.post.remove.r6", { defaultValue: "Stickers & Labels" })}</p>
                  </div>
                  <div className="bg-card p-4 rounded-lg text-center">
                    <p className="font-semibold">{t("services.post.remove.r7", { defaultValue: "Concrete Residue" })}</p>
                  </div>
                  <div className="bg-card p-4 rounded-lg text-center">
                    <p className="font-semibold">{t("services.post.remove.r8", { defaultValue: "Debris" })}</p>
                  </div>
                </div>
                </div>

                <div className="bg-primary text-primary-foreground p-8 rounded-lg text-center">
                  <h2 className="text-3xl font-bold mb-4">{t("services.post.perfectFor.title", { defaultValue: "Perfect For" })}</h2>
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div>
                    <h3 className="font-bold mb-2">{t("services.post.perfectFor.n1.title", { defaultValue: "New Construction" })}</h3>
                    <p>{t("services.post.perfectFor.n1.copy", { defaultValue: "Brand new homes and buildings" })}</p>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">{t("services.post.perfectFor.n2.title", { defaultValue: "Renovations" })}</h3>
                    <p>{t("services.post.perfectFor.n2.copy", { defaultValue: "Kitchen, bath, or whole home remodels" })}</p>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">{t("services.post.perfectFor.n3.title", { defaultValue: "Commercial Projects" })}</h3>
                    <p>{t("services.post.perfectFor.n3.copy", { defaultValue: "Office build-outs and retail spaces" })}</p>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-12">{t("services.post.why.title", { defaultValue: "Why Choose Red Rock for Post-Construction Cleaning?" })}</h2>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🛠️</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{t("services.post.why.specialized.title", { defaultValue: "Specialized Equipment" })}</h3>
                    <p className="text-muted-foreground">{t("services.post.why.specialized.copy", { defaultValue: "Industrial-grade tools and techniques for construction debris." })}</p>
                  </div>

                  <div className="text-center">
                    <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">✨</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{t("services.post.why.movein.title", { defaultValue: "Move-In Ready" })}</h3>
                    <p className="text-muted-foreground">{t("services.post.why.movein.copy", { defaultValue: "We transform construction sites into beautiful, clean spaces." })}</p>
                  </div>

                  <div className="text-center">
                    <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🏗️</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{t("services.post.why.experience.title", { defaultValue: "Construction Experience" })}</h3>
                    <p className="text-muted-foreground">{t("services.post.why.experience.copy", { defaultValue: "Years of experience with contractors and new builds." })}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-primary/5">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold mb-6">{t("services.post.cta.title", { defaultValue: "Ready to Make It Move-In Ready?" })}</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                {t("services.post.cta.copy", { defaultValue: "Get a quote for professional post-construction cleaning services." })}
              </p>
              <Button size="lg" asChild>
                <Link to="/">{t("cta.getQuote", { defaultValue: "Get Your Quote" })}</Link>
              </Button>
            </div>
          </section>
        </main>
        
        <ServiceLocationCards 
          servicePath="/post-construction-cleaning-services" 
          serviceTitle={t("services.post.heading", { defaultValue: "Post Construction Cleaning Services" })}
        />
        
        <Footer />
      </div>
    </>
  );
};

export default PostConstruction;

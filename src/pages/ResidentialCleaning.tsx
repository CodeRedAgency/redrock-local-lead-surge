import { GeneralNavigation } from "@/components/GeneralNavigation";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroResidential from "@/assets/hero-residential.jpg";
import { useTranslation } from "react-i18next";

const ResidentialCleaning = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t("pageTitles.residential", { defaultValue: "Residential House Cleaning Services | Red Rock Cleaning" })}</title>
        <meta name="description" content={t("pageDescriptions.residential", { defaultValue: "Professional residential cleaning services for your home. From regular maintenance to deep cleaning, we keep your house spotless." })} />
      </Helmet>
      
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
              <h1 className="text-5xl md:text-6xl font-bold mb-6">{t("pageHeadings.residential.h1", { defaultValue: "Residential Cleaning Services" })}</h1>
              <p className="text-xl md:text-2xl mb-8">
                {t("pageHeadings.residential.subtitle", { defaultValue: "Professional home cleaning that fits your lifestyle" })}
              </p>
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                <Link to="/">Get a Quote</Link>
              </Button>
            </div>
          </section>

          {/* Services Details */}
          <section className="py-20 bg-muted/20">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12">Our Residential Services</h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-card p-8 rounded-lg shadow-md">
                    <h3 className="text-2xl font-bold mb-4">Regular House Cleaning</h3>
                    <p className="text-muted-foreground mb-4">
                      Keep your home consistently clean with our regular maintenance service. Perfect for busy families 
                      and professionals who want to come home to a spotless space.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Kitchen and bathroom cleaning</li>
                      <li>• Dusting and vacuuming</li>
                      <li>• Floor mopping</li>
                      <li>• Surface sanitization</li>
                    </ul>
                  </div>

                  <div className="bg-card p-8 rounded-lg shadow-md">
                    <h3 className="text-2xl font-bold mb-4">Deep Cleaning</h3>
                    <p className="text-muted-foreground mb-4">
                      A thorough, intensive cleaning that reaches every corner of your home. Ideal for seasonal cleaning 
                      or preparing for special occasions.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Detailed appliance cleaning</li>
                      <li>• Baseboard and trim cleaning</li>
                      <li>• Window and blind cleaning</li>
                      <li>• Cabinet and drawer interiors</li>
                    </ul>
                  </div>

                  <div className="bg-card p-8 rounded-lg shadow-md">
                    <h3 className="text-2xl font-bold mb-4">Move In/Out Cleaning</h3>
                    <p className="text-muted-foreground mb-4">
                      Starting fresh or leaving a property? Our move-in/out service ensures every space is pristine 
                      for the next chapter.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Empty home deep clean</li>
                      <li>• Carpet cleaning available</li>
                      <li>• Interior cabinet cleaning</li>
                      <li>• Wall spot cleaning</li>
                    </ul>
                  </div>

                  <div className="bg-card p-8 rounded-lg shadow-md">
                    <h3 className="text-2xl font-bold mb-4">Vacation Rental Cleaning</h3>
                    <p className="text-muted-foreground mb-4">
                      Specialized turnover cleaning for short-term rentals. Fast, thorough service to keep your 
                      guests happy and reviews glowing.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Quick turnaround times</li>
                      <li>• Linen service available</li>
                      <li>• Restocking assistance</li>
                      <li>• Pre-guest inspections</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-primary/5">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold mb-6">Ready for a Cleaner Home?</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Choose your location and get an instant quote for professional residential cleaning services.
              </p>
              <Button size="lg" asChild>
                <Link to="/">Select Your Location</Link>
              </Button>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default ResidentialCleaning;

import { GeneralNavigation } from "@/components/GeneralNavigation";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";
import Hreflang from "@/components/Hreflang";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { Shield, Cog, Wrench, Droplets, Truck, Square, Zap, HardHat, Building } from "lucide-react";
import heroCommercial from "@/assets/hero-commercial.jpg";

const IndustrialCleaningPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t("commercial.industrial.title", { defaultValue: "Industrial Cleaning Services | Red Rock Cleans" })}</title>
        <meta
          name="description"
          content={t("commercial.industrial.description", {
            defaultValue:
              "Heavy-duty industrial cleaning services for factories, plants, and warehouses. OSHA-compliant cleaning to protect workers, equipment, and uptime.",
          })}
        />
      </Helmet>
      <Hreflang />

      <div className="min-h-screen flex flex-col">
        <GeneralNavigation />

        <main className="flex-grow">
          {/* Hero */}
          <section className="relative h-[500px] flex items-center justify-center">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroCommercial})` }}>
              <div className="absolute inset-0 bg-black/50" />
            </div>
            <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                {t("commercial.industrial.heading", { defaultValue: "Professional Industrial Cleaning Services" })}
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                {t("commercial.industrial.tagline", {
                  defaultValue: "Safety-first, OSHA-compliant cleaning for manufacturing, processing, and logistics facilities",
                })}
              </p>
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                <Link to="/commercial-quote">{t("cta.getQuote", { defaultValue: "Get a Quote" })}</Link>
              </Button>
            </div>
          </section>

          {/* Why it matters */}
          <section className="py-20 bg-muted/20">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <p className="text-xl text-muted-foreground">
                    {t("commercial.industrial.intro", {
                      defaultValue:
                        "Industrial environments demand specialized cleaning to meet safety standards, protect equipment, and avoid downtime. Our trained team follows strict protocols for heavy-duty facilities.",
                    })}
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-12">
                  <div className="bg-card p-6 rounded-lg shadow-md text-center">
                    <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">OSHA Compliance</h3>
                    <p className="text-muted-foreground">Safety-first procedures and documentation</p>
                  </div>
                  <div className="bg-card p-6 rounded-lg shadow-md text-center">
                    <Cog className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">Uptime Protection</h3>
                    <p className="text-muted-foreground">Reduce breakdowns and keep operations running</p>
                  </div>
                  <div className="bg-card p-6 rounded-lg shadow-md text-center">
                    <Wrench className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">Equipment Care</h3>
                    <p className="text-muted-foreground">Cleaning methods that protect machinery</p>
                  </div>
                </div>

                {/* Capabilities */}
                <h2 className="text-3xl font-bold mb-6 text-primary">Our Industrial Capabilities</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                  <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6 text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                        <Droplets className="w-6 h-6" />
                      </div>
                      <h3 className="font-bold mb-2">Machinery Degreasing</h3>
                      <p className="text-muted-foreground text-sm">Safe removal of grease and contaminants</p>
                    </CardContent>
                  </Card>
                  <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6 text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                        <Truck className="w-6 h-6" />
                      </div>
                      <h3 className="font-bold mb-2">High-Surface Cleaning</h3>
                      <p className="text-muted-foreground text-sm">Beams, piping, ducts, and structures</p>
                    </CardContent>
                  </Card>
                  <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6 text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                        <Square className="w-6 h-6" />
                      </div>
                      <h3 className="font-bold mb-2">Floor Decontamination</h3>
                      <p className="text-muted-foreground text-sm">Scrubbing, stripping, sealing, anti-slip</p>
                    </CardContent>
                  </Card>
                  <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6 text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                        <Zap className="w-6 h-6" />
                      </div>
                      <h3 className="font-bold mb-2">Confined Space Cleaning</h3>
                      <p className="text-muted-foreground text-sm">Certified procedures for tanks and silos</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Other solutions */}
                <div className="bg-muted/30 p-8 rounded-lg mb-12">
                  <h2 className="text-3xl font-bold mb-6">Related Industrial & Commercial Services</h2>
                  <div className="grid md:grid-cols-3 gap-6">
                    <Link to="/factory-cleaning" className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                      <h3 className="text-xl font-bold mb-2">Factory Cleaning</h3>
                      <p className="text-muted-foreground">Heavy-duty cleaning for manufacturing plants</p>
                    </Link>
                    <Link to="/warehouse-cleaning" className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                      <h3 className="text-xl font-bold mb-2">Warehouse Cleaning</h3>
                      <p className="text-muted-foreground">Floor care, high-bay dusting, docks, and more</p>
                    </Link>
                    <Link to="/data-center-cleaning" className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                      <h3 className="text-xl font-bold mb-2">Data Center Cleaning</h3>
                      <p className="text-muted-foreground">Protect critical infrastructure and uptime</p>
                    </Link>
                  </div>
                </div>

                {/* Find by location */}
                <div className="bg-card p-8 rounded-lg shadow-lg mb-12">
                  <h2 className="text-3xl font-bold mb-6 text-primary">Find Industrial Cleaning Near You</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Link to="/las-vegas/industrial-cleaning/" className="bg-muted p-4 rounded-lg hover:bg-muted/80 transition-colors text-center font-medium">Las Vegas</Link>
                    <Link to="/dallas/industrial-cleaning/" className="bg-muted p-4 rounded-lg hover:bg-muted/80 transition-colors text-center font-medium">Dallas</Link>
                    <Link to="/south-florida/industrial-cleaning/" className="bg-muted p-4 rounded-lg hover:bg-muted/80 transition-colors text-center font-medium">South Florida</Link>
                    <Link to="/columbus-ohio/industrial-cleaning/" className="bg-muted p-4 rounded-lg hover:bg-muted/80 transition-colors text-center font-medium">Columbus, Ohio</Link>
                    <Link to="/maui/industrial-cleaning/" className="bg-muted p-4 rounded-lg hover:bg-muted/80 transition-colors text-center font-medium">Maui</Link>
                    <Link to="/oahu/industrial-cleaning/" className="bg-muted p-4 rounded-lg hover:bg-muted/80 transition-colors text-center font-medium">Oahu</Link>
                  </div>
                </div>

                {/* FAQ */}
                <div className="bg-muted/30 p-8 rounded-lg mb-12">
                  <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>What is industrial cleaning?</AccordionTrigger>
                      <AccordionContent>
                        Industrial cleaning uses specialized methods and equipment to safely clean heavy-duty facilities while meeting safety and compliance requirements.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Can you work around production schedules?</AccordionTrigger>
                      <AccordionContent>
                        Yes. We coordinate cleaning during maintenance windows, shutdowns, or off-peak hours to minimize disruption.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>Do you provide documentation?</AccordionTrigger>
                      <AccordionContent>
                        We can provide logs and documentation to support OSHA and internal compliance.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>

                {/* CTA */}
                <div className="bg-primary/5 p-8 rounded-lg text-center">
                  <h2 className="text-3xl font-bold mb-4">Ready to Elevate Safety and Efficiency?</h2>
                  <p className="text-xl text-muted-foreground mb-8">Get a tailored quote for professional industrial cleaning services.</p>
                  <Button size="lg" asChild>
                    <Link to="/commercial-quote">Find Your Location & Get a Quote</Link>
                  </Button>
                  <div className="mt-8">
                    <img src={heroCommercial} alt="Industrial cleaning at a manufacturing facility by Red Rock Cleans" className="max-w-4xl mx-auto rounded-lg shadow-lg" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default IndustrialCleaningPage;



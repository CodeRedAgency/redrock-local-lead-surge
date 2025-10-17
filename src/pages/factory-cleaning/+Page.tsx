import { GeneralNavigation } from "@/components/GeneralNavigation";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";
import Hreflang from "@/components/Hreflang";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, Shield, Zap, Factory } from "lucide-react";
import heroCommercial from "@/assets/hero-commercial.jpg";

const FactoryCleaningPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t("commercial.factory.title", { defaultValue: "Factory Cleaning Services | Red Rock Cleans" })}</title>
        <meta name="description" content={t("commercial.factory.description", { defaultValue: "Professional factory cleaning services. Red Rock Cleans provides heavy-duty cleaning for manufacturing plants to ensure safety, compliance, and productivity. Learn more." })} />
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
              <h1 className="text-5xl md:text-6xl font-bold mb-6">{t("commercial.factory.heading", { defaultValue: "Professional Factory Cleaning Services" })}</h1>
              <p className="text-xl md:text-2xl mb-8">
                {t("commercial.factory.tagline", { defaultValue: "Heavy-duty cleaning for manufacturing plants and industrial facilities" })}
              </p>
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                <Link to="/commercial-quote">{t("cta.getQuote", { defaultValue: "Get a Quote" })}</Link>
              </Button>
            </div>
          </section>

          {/* Services Details */}
          <section className="py-20 bg-muted/20">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <p className="text-xl text-muted-foreground">
                    A clean factory is a safe and productive factory. Specialized cleaning for industrial environments ensures workplace safety, regulatory compliance, and optimal production efficiency. Professional factory cleaning maintains your facility's standards while protecting your workforce and equipment.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-12">
                  <div className="bg-card p-6 rounded-lg shadow-md text-center">
                    <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">OSHA Compliance</h3>
                    <p className="text-muted-foreground">Meeting safety standards and regulations</p>
                  </div>
                  <div className="bg-card p-6 rounded-lg shadow-md text-center">
                    <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">Equipment Protection</h3>
                    <p className="text-muted-foreground">Prolonging machinery life and performance</p>
                  </div>
                  <div className="bg-card p-6 rounded-lg shadow-md text-center">
                    <Factory className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">Production Efficiency</h3>
                    <p className="text-muted-foreground">Maintaining optimal manufacturing conditions</p>
                  </div>
                </div>

                <div className="bg-card p-8 rounded-lg shadow-lg mb-12">
                  <h2 className="text-3xl font-bold mb-6 text-primary">Our Factory Cleaning Checklist</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Floor & Surface Cleaning</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span>Floor degreasing and scrubbing</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span>Production floor deep cleaning</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span>High-pressure washing</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span>Drain and gutter cleaning</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span>Spill containment and cleanup</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-4">High-Dusting & Overhead Cleaning</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span>Ceiling and beam cleaning</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span>Ductwork and ventilation cleaning</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span>Pipe and conduit cleaning</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span>Light fixture and fixture cleaning</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span>Cobweb and dust removal</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-4">Machinery & Equipment Cleaning</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span>Machine cleaning and degreasing</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span>Equipment exterior cleaning</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span>Conveyor belt cleaning</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span>Control panel and electrical cleaning</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span>Tool and workstation cleaning</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-4">Waste Management & Disposal</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span>Industrial waste removal</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span>Hazardous material cleanup</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span>Recycling and sorting assistance</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span>Container and bin cleaning</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span>Compliance documentation</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-primary text-primary-foreground p-8 rounded-lg mb-12">
                  <h2 className="text-3xl font-bold mb-4">Enhancing Safety, Compliance, and Productivity</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Meeting OSHA Safety Standards</h3>
                      <p className="mb-4">
                        Professional factory cleaning ensures compliance with OSHA regulations, reducing workplace hazards and preventing accidents. Clean facilities minimize slip-and-fall risks and maintain clear emergency pathways.
                      </p>
                      <h3 className="text-xl font-semibold mb-3">Reducing Accident Risks</h3>
                      <p>
                        Regular cleaning removes debris, spills, and obstacles that can cause workplace injuries. A clean environment promotes safe working conditions and reduces liability concerns.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Prolonging Equipment Life</h3>
                      <p className="mb-4">
                        Clean machinery operates more efficiently and lasts longer. Regular cleaning prevents buildup that can cause overheating, corrosion, and mechanical failures, reducing maintenance costs.
                      </p>
                      <h3 className="text-xl font-semibold mb-3">Improving Employee Morale</h3>
                      <p>
                        A clean, well-maintained workplace boosts employee satisfaction and productivity. Workers take pride in their environment and are more likely to maintain cleanliness standards.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card p-8 rounded-lg shadow-lg mb-12">
                  <h2 className="text-3xl font-bold mb-6 text-primary">Find Factory Cleaning In Your Area</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Link 
                      to="/las-vegas/factory-cleaning/" 
                      className="bg-muted p-4 rounded-lg hover:bg-muted/80 transition-colors text-center font-medium"
                    >
                      Las Vegas
                    </Link>
                    <Link 
                      to="/dallas/factory-cleaning/" 
                      className="bg-muted p-4 rounded-lg hover:bg-muted/80 transition-colors text-center font-medium"
                    >
                      Dallas
                    </Link>
                    <Link 
                      to="/south-florida/factory-cleaning/" 
                      className="bg-muted p-4 rounded-lg hover:bg-muted/80 transition-colors text-center font-medium"
                    >
                      South Florida
                    </Link>
                    <Link 
                      to="/columbus-ohio/factory-cleaning/" 
                      className="bg-muted p-4 rounded-lg hover:bg-muted/80 transition-colors text-center font-medium"
                    >
                      Columbus, Ohio
                    </Link>
                    <Link 
                      to="/maui/factory-cleaning/" 
                      className="bg-muted p-4 rounded-lg hover:bg-muted/80 transition-colors text-center font-medium"
                    >
                      Maui
                    </Link>
                    <Link 
                      to="/oahu/factory-cleaning/" 
                      className="bg-muted p-4 rounded-lg hover:bg-muted/80 transition-colors text-center font-medium"
                    >
                      Oahu
                    </Link>
                  </div>
                </div>

                <div className="bg-muted/30 p-8 rounded-lg mb-12">
                  <h2 className="text-3xl font-bold mb-6">Our Other Industrial & Commercial Solutions</h2>
                  <div className="grid md:grid-cols-3 gap-6">
                    <Link 
                      to="/data-center-cleaning" 
                      className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                    >
                      <h3 className="text-xl font-bold mb-2">Data Center Cleaning</h3>
                      <p className="text-muted-foreground">
                        Specialized cleaning for server rooms and critical infrastructure facilities.
                      </p>
                    </Link>
                    <Link 
                      to="/commercial-cleaning" 
                      className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                    >
                      <h3 className="text-xl font-bold mb-2">Commercial Cleaning</h3>
                      <p className="text-muted-foreground">
                        Professional office and business cleaning services for all commercial properties.
                      </p>
                    </Link>
                    <Link 
                      to="/church-cleaning" 
                      className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                    >
                      <h3 className="text-xl font-bold mb-2">Church Cleaning</h3>
                      <p className="text-muted-foreground">
                        Respectful and thorough cleaning services for places of worship.
                      </p>
                    </Link>
                  </div>
                </div>

                <div className="bg-card p-8 rounded-lg shadow-lg mb-12">
                  <h2 className="text-3xl font-bold mb-6 text-primary">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">What is industrial cleaning and how does it differ from regular cleaning?</h3>
                      <p className="text-muted-foreground">
                        Industrial cleaning involves specialized techniques, equipment, and chemicals designed for heavy-duty environments like factories and manufacturing plants. It requires expertise in handling industrial waste, working around machinery, and meeting OSHA safety standards that regular commercial cleaning doesn't address.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">How often should a factory be professionally cleaned?</h3>
                      <p className="text-muted-foreground">
                        Most factories require weekly professional cleaning, with daily maintenance for high-traffic production areas. Heavy manufacturing facilities may need more frequent service, while lighter operations might schedule bi-weekly cleaning. The frequency depends on your industry, production volume, and cleanliness requirements.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">What safety protocols do you follow during factory cleaning?</h3>
                      <p className="text-muted-foreground">
                        We follow strict OSHA guidelines, use proper personal protective equipment, and implement lockout/tagout procedures when working around machinery. Our team is trained in industrial safety, hazardous material handling, and emergency response protocols to ensure worker safety and facility protection.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Do you provide compliance documentation for industrial cleaning?</h3>
                      <p className="text-muted-foreground">
                        Yes, we provide detailed cleaning logs, safety compliance reports, and documentation to meet OSHA requirements and industry standards. This includes waste disposal records, chemical usage documentation, and safety protocol adherence verification for your facility's compliance needs.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-primary/5 p-8 rounded-lg text-center">
                  <h2 className="text-3xl font-bold mb-4">Ready to Enhance Your Factory's Safety and Efficiency?</h2>
                  <p className="text-xl text-muted-foreground mb-8">
                    Choose your location and get a specialized quote for professional factory cleaning services.
                  </p>
                  <Button size="lg" asChild>
                  <Link to="/commercial-quote">Find Your Location & Get a Quote</Link>
                  </Button>
                </div>

                <div className="mt-12 text-center">
                  <img 
                    src={heroCommercial} 
                    alt="A clean and well-organized factory floor after professional cleaning by Red Rock Cleans"
                    className="max-w-4xl mx-auto rounded-lg shadow-lg"
                  />
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

export default FactoryCleaningPage;

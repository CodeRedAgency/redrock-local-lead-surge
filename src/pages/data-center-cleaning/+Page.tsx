import { GeneralNavigation } from "@/components/GeneralNavigation";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, Shield, Zap, Building } from "lucide-react";
import heroCommercial from "@/assets/hero-commercial.jpg";

const DataCenterCleaningPage = () => {
  return (
    <>
      <Helmet>
        <title>Data Center Cleaning Services | Red Rock Cleans</title>
        <meta name="description" content="Specialized data center cleaning services. Red Rock Cleans provides professional server room, sub-floor, and critical environment cleaning to prevent downtime. Learn more." />
      </Helmet>
      
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
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Specialized Data Center Cleaning Services</h1>
              <p className="text-xl md:text-2xl mb-8">
                Protecting critical infrastructure with precision cleaning protocols
              </p>
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                <Link to="/commercial-quote">Get a Quote</Link>
              </Button>
            </div>
          </section>

          {/* Services Details */}
          <section className="py-20 bg-muted/20">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <p className="text-xl text-muted-foreground">
                    Specialized cleaning in data centers is critical to prevent downtime, protect sensitive hardware, and maintain optimal operating conditions. Professional data center cleaning ensures your critical infrastructure remains secure, efficient, and compliant with industry standards.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-12">
                  <div className="bg-card p-6 rounded-lg shadow-md text-center">
                    <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">ISO 14644-1 Standards</h3>
                    <p className="text-muted-foreground">Compliant with international cleanroom standards</p>
                  </div>
                  <div className="bg-card p-6 rounded-lg shadow-md text-center">
                    <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">Anti-Static Procedures</h3>
                    <p className="text-muted-foreground">Preventing electrostatic damage to sensitive equipment</p>
                  </div>
                  <div className="bg-card p-6 rounded-lg shadow-md text-center">
                    <Building className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">Critical Environment</h3>
                    <p className="text-muted-foreground">Specialized protocols for mission-critical facilities</p>
                  </div>
                </div>

                <div className="bg-card p-8 rounded-lg shadow-lg mb-12">
                  <h2 className="text-3xl font-bold mb-6 text-primary">Our Data Center Cleaning Protocol</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Server Room & Equipment Cleaning</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span>HEPA-filtered vacuums for particle removal</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span>Anti-static solutions and microfiber cloths</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span>Server rack and cabinet cleaning</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span>Cable management and organization</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span>Air vent and filter cleaning</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-4">Sub-Floor & Infrastructure</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span>Raised floor cleaning and maintenance</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span>Sub-floor plenum decontamination</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span>Data hall floor cleaning</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span>Under-floor cable and conduit cleaning</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span>Drain and drainage system maintenance</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-4">Critical Environment Standards</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span>ISO 14644-1 cleanroom compliance</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span>Particle count monitoring and control</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span>Contamination prevention protocols</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span>Documentation and compliance reporting</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span>Temperature and humidity monitoring</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-4">Safety & Security Protocols</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span>Background-checked and security-cleared staff</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span>24/7 access with proper authorization</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span>Minimal disruption to operations</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span>Confidentiality and data protection</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span>Emergency response and contingency plans</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-primary text-primary-foreground p-8 rounded-lg mb-12">
                  <h2 className="text-3xl font-bold mb-4">Why Professional Data Center Cleaning is Non-Negotiable</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Preventing Contamination & Hardware Failure</h3>
                      <p className="mb-4">
                        Dust, particles, and contaminants can cause equipment overheating, electrical failures, and data loss. Professional cleaning removes these threats before they impact your critical systems.
                      </p>
                      <h3 className="text-xl font-semibold mb-3">Improving Cooling Efficiency</h3>
                      <p>
                        Clean air vents, filters, and equipment surfaces ensure optimal airflow and cooling performance, reducing energy costs and extending hardware lifespan.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Ensuring Compliance & Standards</h3>
                      <p className="mb-4">
                        Meeting ISO 14644-1 standards and industry regulations is essential for data center operations. Professional cleaning ensures compliance and provides necessary documentation.
                      </p>
                      <h3 className="text-xl font-semibold mb-3">Protecting Critical Infrastructure</h3>
                      <p>
                        Your data center is the backbone of your operations. Professional cleaning protects this critical infrastructure, ensuring maximum uptime and operational reliability.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card p-8 rounded-lg shadow-lg mb-12">
                  <h2 className="text-3xl font-bold mb-6 text-primary">Find Data Center Cleaning In Your Area</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Link 
                      to="/las-vegas/data-center-cleaning/" 
                      className="bg-muted p-4 rounded-lg hover:bg-muted/80 transition-colors text-center font-medium"
                    >
                      Las Vegas
                    </Link>
                    <Link 
                      to="/dallas/data-center-cleaning/" 
                      className="bg-muted p-4 rounded-lg hover:bg-muted/80 transition-colors text-center font-medium"
                    >
                      Dallas
                    </Link>
                    <Link 
                      to="/south-florida/data-center-cleaning/" 
                      className="bg-muted p-4 rounded-lg hover:bg-muted/80 transition-colors text-center font-medium"
                    >
                      South Florida
                    </Link>
                    <Link 
                      to="/columbus-ohio/data-center-cleaning/" 
                      className="bg-muted p-4 rounded-lg hover:bg-muted/80 transition-colors text-center font-medium"
                    >
                      Columbus, Ohio
                    </Link>
                    <Link 
                      to="/maui/data-center-cleaning/" 
                      className="bg-muted p-4 rounded-lg hover:bg-muted/80 transition-colors text-center font-medium"
                    >
                      Maui
                    </Link>
                    <Link 
                      to="/oahu/data-center-cleaning/" 
                      className="bg-muted p-4 rounded-lg hover:bg-muted/80 transition-colors text-center font-medium"
                    >
                      Oahu
                    </Link>
                  </div>
                </div>

                <div className="bg-muted/30 p-8 rounded-lg mb-12">
                  <h2 className="text-3xl font-bold mb-6">Our Other Commercial Cleaning Solutions</h2>
                  <div className="grid md:grid-cols-3 gap-6">
                    <Link 
                      to="/commercial-cleaning/" 
                      className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                    >
                      <h3 className="text-xl font-bold mb-2">Commercial Cleaning</h3>
                      <p className="text-muted-foreground">
                        Professional office and business cleaning services for all commercial properties.
                      </p>
                    </Link>
                    <Link 
                      to="/church-cleaning/" 
                      className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                    >
                      <h3 className="text-xl font-bold mb-2">Church Cleaning</h3>
                      <p className="text-muted-foreground">
                        Respectful and thorough cleaning services for places of worship and religious facilities.
                      </p>
                    </Link>
                    <Link 
                      to="/post-construction-cleaning/" 
                      className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                    >
                      <h3 className="text-xl font-bold mb-2">Post-Construction Cleaning</h3>
                      <p className="text-muted-foreground">
                        Specialized cleaning after construction or renovation projects.
                      </p>
                    </Link>
                  </div>
                </div>

                <div className="bg-card p-8 rounded-lg shadow-lg mb-12">
                  <h2 className="text-3xl font-bold mb-6 text-primary">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">What is data center cleaning and why is it critical?</h3>
                      <p className="text-muted-foreground">
                        Data center cleaning involves specialized protocols to remove dust, particles, and contaminants from server rooms, sub-floors, and critical infrastructure. It's essential for preventing hardware failures, maintaining optimal cooling, and ensuring compliance with industry standards like ISO 14644-1.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">How often should data centers be professionally cleaned?</h3>
                      <p className="text-muted-foreground">
                        Most data centers require monthly professional cleaning, with more frequent service for high-traffic areas. Critical environments may need weekly or bi-weekly cleaning depending on contamination levels, equipment density, and operational requirements.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">What safety protocols are used during data center cleaning?</h3>
                      <p className="text-muted-foreground">
                        Our staff undergoes background checks and security clearance. We use anti-static procedures, HEPA-filtered equipment, and follow strict protocols to minimize operational disruption while ensuring equipment safety and data security.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Do you provide compliance documentation for data center cleaning?</h3>
                      <p className="text-muted-foreground">
                        Yes, we provide detailed documentation including particle count reports, cleaning logs, and compliance certificates to meet ISO 14644-1 standards and other industry requirements for your data center operations.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-primary/5 p-8 rounded-lg text-center">
                  <h2 className="text-3xl font-bold mb-4">Ready to Protect Your Critical Infrastructure?</h2>
                  <p className="text-xl text-muted-foreground mb-8">
                    Choose your location and get a specialized quote for professional data center cleaning services.
                  </p>
                  <Button size="lg" asChild>
                    <Link to="/commercial-quote">Find Your Location & Get a Quote</Link>
                  </Button>
                </div>

                <div className="mt-12 text-center">
                  <img 
                    src={heroCommercial} 
                    alt="A clean and secure data center after professional cleaning by Red Rock Cleans"
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

export default DataCenterCleaningPage;

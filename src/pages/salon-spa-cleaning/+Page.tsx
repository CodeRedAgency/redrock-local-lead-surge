import { GeneralNavigation } from "@/components/GeneralNavigation";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { Flower2, Hand, FileCheck, Scissors, Droplets, Sofa, Bath, Smile, Sparkles, Cloud } from "lucide-react";
import heroCommercial from "@/assets/hero-commercial.jpg";

const SalonSpaCleaningPage = () => {
  return (
    <>
      <Helmet>
        <title>Salon & Spa Cleaning Services | Red Rock Cleans</title>
        <meta name="description" content="Professional salon and spa cleaning services. Red Rock Cleans ensures pristine, hygienic, and relaxing environments for hair salons, day spas, nail salons, and medispas." />
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
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Pristine Salon & Spa Cleaning for Ultimate Client Relaxation</h1>
              <p className="text-xl md:text-2xl mb-8">
                Transform your salon or spa into a sanctuary of cleanliness, luxury, and tranquility
              </p>
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                <Link to="/">Get a Quote</Link>
              </Button>
            </div>
          </section>

          {/* Introduction */}
          <section className="py-20 bg-muted/20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <p className="text-xl text-muted-foreground mb-12">
                  In salons and spas, cleanliness is not just about hygiene, but also about creating a luxurious, relaxing, and trustworthy environment for clients. Our specialized salon and spa cleaning services ensure every surface gleams, every treatment room feels pristine, and every client experiences the ultimate in comfort and care.
                </p>

                {/* Elevating Your Client's Experience */}
                <div className="mb-16">
                  <h2 className="text-3xl font-bold mb-8 text-center">Elevating Your Client's Experience</h2>
                  <div className="grid md:grid-cols-3 gap-6">
                    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 hover:border-primary/50">
                      <CardContent className="p-6 text-center">
                        <div className="mb-4">
                          <Flower2 className="w-12 h-12 text-primary mx-auto group-hover:animate-pulse transition-all duration-300" />
                        </div>
                        <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">Serene & Inviting Atmosphere</h3>
                        <p className="text-sm text-muted-foreground">
                          Cleanliness contributes to the overall relaxation and luxury experience, creating an environment where clients can unwind and feel pampered in a spotless, tranquil setting.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 hover:border-primary/50">
                      <CardContent className="p-6 text-center">
                        <div className="mb-4">
                          <Hand className="w-12 h-12 text-primary mx-auto group-hover:animate-pulse transition-all duration-300" />
                        </div>
                        <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">Strict Hygiene & Disinfection</h3>
                        <p className="text-sm text-muted-foreground">
                          Comprehensive practices to prevent cross-contamination in high-touch areas and treatment zones, ensuring the highest standards of hygiene and client safety.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 hover:border-primary/50">
                      <CardContent className="p-6 text-center">
                        <div className="mb-4">
                          <FileCheck className="w-12 h-12 text-primary mx-auto group-hover:animate-pulse transition-all duration-300" />
                        </div>
                        <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">Health Code Compliance Assurance</h3>
                        <p className="text-sm text-muted-foreground">
                          Strict adherence to industry health and sanitation regulations, ensuring your salon or spa meets and exceeds all required standards for health inspections.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Our Comprehensive Salon & Spa Cleaning Checklist */}
                <div className="mb-16">
                  <h2 className="text-3xl font-bold mb-8 text-center">Our Comprehensive Salon & Spa Cleaning Checklist</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 hover:border-primary/50">
                      <CardContent className="p-6 text-center">
                        <div className="mb-4">
                          <Scissors className="w-12 h-12 text-primary mx-auto group-hover:animate-pulse transition-all duration-300" />
                        </div>
                        <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">Treatment & Styling Rooms</h3>
                        <ul className="text-sm text-muted-foreground space-y-2 text-left">
                          <li>• Surface sanitization</li>
                          <li>• Equipment disinfection</li>
                          <li>• Hair and product residue removal</li>
                          <li>• Towel and linen management</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 hover:border-primary/50">
                      <CardContent className="p-6 text-center">
                        <div className="mb-4">
                          <Droplets className="w-12 h-12 text-primary mx-auto group-hover:animate-pulse transition-all duration-300" />
                        </div>
                        <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">Nail Stations & Pedicure Chairs</h3>
                        <ul className="text-sm text-muted-foreground space-y-2 text-left">
                          <li>• Foot bath deep cleaning</li>
                          <li>• Tool disinfection</li>
                          <li>• Station sanitization</li>
                          <li>• Product organization</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 hover:border-primary/50">
                      <CardContent className="p-6 text-center">
                        <div className="mb-4">
                          <Sofa className="w-12 h-12 text-primary mx-auto group-hover:animate-pulse transition-all duration-300" />
                        </div>
                        <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">Reception & Waiting Areas</h3>
                        <ul className="text-sm text-muted-foreground space-y-2 text-left">
                          <li>• Spotless first impressions</li>
                          <li>• Magazine and brochure care</li>
                          <li>• Seating sanitization</li>
                          <li>• Floor and surface polishing</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 hover:border-primary/50">
                      <CardContent className="p-6 text-center">
                        <div className="mb-4">
                          <Bath className="w-12 h-12 text-primary mx-auto group-hover:animate-pulse transition-all duration-300" />
                        </div>
                        <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">Restrooms & Changing Areas</h3>
                        <ul className="text-sm text-muted-foreground space-y-2 text-left">
                          <li>• Intensive sanitization</li>
                          <li>• Towel and amenity restocking</li>
                          <li>• Fixture and surface cleaning</li>
                          <li>• Locker area maintenance</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* The Difference a Professional Clean Makes */}
                <div className="bg-primary text-primary-foreground p-8 rounded-lg mb-12">
                  <h2 className="text-3xl font-bold mb-8 text-center">The Difference a Professional Clean Makes</h2>
                  <div className="grid md:grid-cols-3 gap-8 text-center">
                    <div>
                      <div className="mb-4">
                        <Smile className="w-16 h-16 mx-auto animate-pulse" />
                      </div>
                      <div className="text-6xl font-bold mb-2">98%</div>
                      <h3 className="text-xl font-semibold mb-2">Client Satisfaction Boost</h3>
                      <p className="text-primary-foreground/80">
                        Clients notice and appreciate the pristine condition of your salon or spa
                      </p>
                    </div>
                    <div>
                      <div className="mb-4">
                        <Sparkles className="w-16 h-16 mx-auto animate-pulse" />
                      </div>
                      <div className="text-6xl font-bold mb-2">100%</div>
                      <h3 className="text-xl font-semibold mb-2">Hygiene Standard Score</h3>
                      <p className="text-primary-foreground/80">
                        Meeting and exceeding all health department and industry standards
                      </p>
                    </div>
                    <div>
                      <div className="mb-4">
                        <Cloud className="w-16 h-16 mx-auto animate-pulse" />
                      </div>
                      <div className="text-6xl font-bold mb-2">95%</div>
                      <h3 className="text-xl font-semibold mb-2">Stress-Free Environment</h3>
                      <p className="text-primary-foreground/80">
                        Creating a tranquil, relaxing atmosphere for both clients and staff
                      </p>
                    </div>
                  </div>
                </div>

                {/* Find Salon & Spa Cleaning In Your Area */}
                <div className="bg-card p-8 rounded-lg shadow-lg mb-12">
                  <h2 className="text-3xl font-bold mb-6 text-primary">Find Salon & Spa Cleaning In Your Area</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Link 
                      to="/las-vegas/salon-spa-cleaning/" 
                      className="bg-muted p-4 rounded-lg hover:bg-muted/80 transition-colors text-center font-medium"
                    >
                      Las Vegas
                    </Link>
                    <Link 
                      to="/dallas/salon-spa-cleaning/" 
                      className="bg-muted p-4 rounded-lg hover:bg-muted/80 transition-colors text-center font-medium"
                    >
                      Dallas
                    </Link>
                    <Link 
                      to="/south-florida/salon-spa-cleaning/" 
                      className="bg-muted p-4 rounded-lg hover:bg-muted/80 transition-colors text-center font-medium"
                    >
                      South Florida
                    </Link>
                    <Link 
                      to="/columbus-ohio/salon-spa-cleaning/" 
                      className="bg-muted p-4 rounded-lg hover:bg-muted/80 transition-colors text-center font-medium"
                    >
                      Columbus, Ohio
                    </Link>
                    <Link 
                      to="/maui/salon-spa-cleaning/" 
                      className="bg-muted p-4 rounded-lg hover:bg-muted/80 transition-colors text-center font-medium"
                    >
                      Maui
                    </Link>
                    <Link 
                      to="/oahu/salon-spa-cleaning/" 
                      className="bg-muted p-4 rounded-lg hover:bg-muted/80 transition-colors text-center font-medium"
                    >
                      Oahu
                    </Link>
                  </div>
                </div>

                {/* FAQ Section */}
                <div className="bg-muted/30 p-8 rounded-lg mb-12">
                  <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>What cleaning products do you use for salons and spas?</AccordionTrigger>
                      <AccordionContent>
                        We use professional-grade, EPA-approved disinfectants and sanitizers specifically designed for salon and spa environments. Our products are safe for use around clients and staff while effectively eliminating bacteria, viruses, and other pathogens that can cause infections.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>How do you handle cleaning around expensive salon equipment?</AccordionTrigger>
                      <AccordionContent>
                        Our team is trained to work carefully around valuable salon and spa equipment. We use appropriate cleaning methods and products for each type of equipment, coordinate with your staff for proper handling, and follow manufacturer guidelines to ensure equipment safety and longevity.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>Do you clean during business hours or after closing?</AccordionTrigger>
                      <AccordionContent>
                        We typically clean during off-hours to minimize disruption to your business and client experience. However, we can provide light maintenance cleaning during business hours for common areas like reception and restrooms without interfering with your services.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                      <AccordionTrigger>How do you ensure compliance with health department regulations?</AccordionTrigger>
                      <AccordionContent>
                        Our team is trained in health department requirements and industry best practices. We follow strict protocols for disinfection, use approved cleaning products, maintain detailed cleaning logs, and ensure all areas meet or exceed health inspection standards.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>

                {/* Call to Action */}
                <div className="text-center py-12 bg-primary/5 rounded-lg shadow-inner">
                  <h2 className="text-4xl font-bold mb-6">Ready to Elevate Your Salon or Spa Experience?</h2>
                  <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                    Choose your location to get a tailored quote for professional salon and spa cleaning services.
                  </p>
                  <Button size="lg" asChild>
                    <Link to="/">Find Your Location & Get a Quote</Link>
                  </Button>
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

export default SalonSpaCleaningPage;

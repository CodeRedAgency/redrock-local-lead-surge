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
import { Shield, Clock, Package, Wrench, Users, Truck, Monitor, HardHat, Forklift } from "lucide-react";
import heroCommercial from "@/assets/hero-commercial.jpg";

const WarehouseCleaningPage = () => {
  return (
    <>
      <Helmet>
        <title>Warehouse Cleaning Services | Red Rock Cleans</title>
        <meta name="description" content="Professional warehouse cleaning services. Red Rock Cleans improves safety and efficiency with comprehensive floor scrubbing, high-bay dusting, and more for logistics centers." />
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
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Efficient & Safe Warehouse Cleaning Services</h1>
              <p className="text-xl md:text-2xl mb-8">
                Maximize productivity and ensure worker safety with our specialized industrial cleaning solutions
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
                  A clean and organized warehouse is essential for operational efficiency, employee safety, and protecting inventory. Our specialized warehouse cleaning services ensure your logistics operations run smoothly while maintaining the highest standards of cleanliness and safety compliance.
                </p>

                {/* Optimizing Your Logistics Environment */}
                <div className="mb-16">
                  <h2 className="text-3xl font-bold mb-8 text-center">Optimizing Your Logistics Environment</h2>
                  <div className="grid md:grid-cols-3 gap-6">
                    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 hover:border-primary/50">
                      <CardContent className="p-6 text-center">
                        <div className="mb-4">
                          <Shield className="w-12 h-12 text-primary mx-auto group-hover:animate-pulse transition-all duration-300" />
                        </div>
                        <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">Enhancing Workplace Safety</h3>
                        <p className="text-sm text-muted-foreground">
                          Clear, hazard-free floors and comprehensive compliance with OSHA standards create a safe working environment that protects your employees and reduces workplace accidents.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 hover:border-primary/50">
                      <CardContent className="p-6 text-center">
                        <div className="mb-4">
                          <Clock className="w-12 h-12 text-primary mx-auto group-hover:animate-pulse transition-all duration-300" />
                        </div>
                        <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">Boosting Operational Efficiency</h3>
                        <p className="text-sm text-muted-foreground">
                          Clean, marked floors and organized spaces speed up operations, reduce equipment downtime, and improve workflow efficiency throughout your warehouse operations.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 hover:border-primary/50">
                      <CardContent className="p-6 text-center">
                        <div className="mb-4">
                          <Package className="w-12 h-12 text-primary mx-auto group-hover:animate-pulse transition-all duration-300" />
                        </div>
                        <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">Protecting Valuable Inventory</h3>
                        <p className="text-sm text-muted-foreground">
                          Controlling dust and debris prevents product damage, contamination, and spoilage, ensuring your inventory maintains its quality and value throughout the storage and distribution process.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Our Comprehensive Warehouse Cleaning Checklist */}
                <div className="mb-16">
                  <h2 className="text-3xl font-bold mb-8 text-center">Our Comprehensive Warehouse Cleaning Checklist</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 hover:border-primary/50">
                      <CardContent className="p-6 text-center">
                        <div className="mb-4">
                          <Wrench className="w-12 h-12 text-primary mx-auto group-hover:animate-pulse transition-all duration-300" />
                        </div>
                        <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">Floor Scrubbing & Sweeping</h3>
                        <ul className="text-sm text-muted-foreground space-y-2 text-left">
                          <li>• Industrial-grade floor scrubbers</li>
                          <li>• Concrete floor polishing</li>
                          <li>• Debris and dust removal</li>
                          <li>• Floor marking maintenance</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 hover:border-primary/50">
                      <CardContent className="p-6 text-center">
                        <div className="mb-4">
                          <Users className="w-12 h-12 text-primary mx-auto group-hover:animate-pulse transition-all duration-300" />
                        </div>
                        <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">High-Bay & Racking Dusting</h3>
                        <ul className="text-sm text-muted-foreground space-y-2 text-left">
                          <li>• Ceiling and beam cleaning</li>
                          <li>• Pallet rack dusting</li>
                          <li>• High-reach equipment use</li>
                          <li>• Safety system maintenance</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 hover:border-primary/50">
                      <CardContent className="p-6 text-center">
                        <div className="mb-4">
                          <Truck className="w-12 h-12 text-primary mx-auto group-hover:animate-pulse transition-all duration-300" />
                        </div>
                        <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">Loading Docks & Common Areas</h3>
                        <ul className="text-sm text-muted-foreground space-y-2 text-left">
                          <li>• Loading dock cleaning</li>
                          <li>• High-traffic area maintenance</li>
                          <li>• Equipment cleaning</li>
                          <li>• Safety barrier maintenance</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 hover:border-primary/50">
                      <CardContent className="p-6 text-center">
                        <div className="mb-4">
                          <Monitor className="w-12 h-12 text-primary mx-auto group-hover:animate-pulse transition-all duration-300" />
                        </div>
                        <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">Offices & Employee Restrooms</h3>
                        <ul className="text-sm text-muted-foreground space-y-2 text-left">
                          <li>• Administrative area cleaning</li>
                          <li>• Break room sanitization</li>
                          <li>• Restroom maintenance</li>
                          <li>• Locker area cleaning</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* The Impact of a Professionally Cleaned Warehouse */}
                <div className="bg-primary text-primary-foreground p-8 rounded-lg mb-12">
                  <h2 className="text-3xl font-bold mb-8 text-center">The Impact of a Professionally Cleaned Warehouse</h2>
                  <div className="grid md:grid-cols-3 gap-8 text-center">
                    <div>
                      <div className="mb-4">
                        <Package className="w-16 h-16 mx-auto animate-pulse" />
                      </div>
                      <div className="text-6xl font-bold mb-2">2M+</div>
                      <h3 className="text-xl font-semibold mb-2">Square Feet Cleaned</h3>
                      <p className="text-primary-foreground/80">
                        Extensive experience maintaining large-scale warehouse facilities
                      </p>
                    </div>
                    <div>
                      <div className="mb-4">
                        <HardHat className="w-16 h-16 mx-auto animate-pulse" />
                      </div>
                      <div className="text-6xl font-bold mb-2">95%</div>
                      <h3 className="text-xl font-semibold mb-2">Safety Incidents Prevented</h3>
                      <p className="text-primary-foreground/80">
                        Clean floors and organized spaces significantly reduce workplace accidents
                      </p>
                    </div>
                    <div>
                      <div className="mb-4">
                        <Forklift className="w-16 h-16 mx-auto animate-pulse" />
                      </div>
                      <div className="text-6xl font-bold mb-2">40%</div>
                      <h3 className="text-xl font-semibold mb-2">More Efficient Operations</h3>
                      <p className="text-primary-foreground/80">
                        Clean warehouses improve workflow speed and equipment performance
                      </p>
                    </div>
                  </div>
                </div>

                {/* Find Warehouse Cleaning In Your Area */}
                <div className="bg-card p-8 rounded-lg shadow-lg mb-12">
                  <h2 className="text-3xl font-bold mb-6 text-primary">Find Warehouse Cleaning In Your Area</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Link 
                      to="/las-vegas/warehouse-cleaning/" 
                      className="bg-muted p-4 rounded-lg hover:bg-muted/80 transition-colors text-center font-medium"
                    >
                      Las Vegas
                    </Link>
                    <Link 
                      to="/dallas/warehouse-cleaning/" 
                      className="bg-muted p-4 rounded-lg hover:bg-muted/80 transition-colors text-center font-medium"
                    >
                      Dallas
                    </Link>
                    <Link 
                      to="/south-florida/warehouse-cleaning/" 
                      className="bg-muted p-4 rounded-lg hover:bg-muted/80 transition-colors text-center font-medium"
                    >
                      South Florida
                    </Link>
                    <Link 
                      to="/columbus-ohio/warehouse-cleaning/" 
                      className="bg-muted p-4 rounded-lg hover:bg-muted/80 transition-colors text-center font-medium"
                    >
                      Columbus, Ohio
                    </Link>
                    <Link 
                      to="/maui/warehouse-cleaning/" 
                      className="bg-muted p-4 rounded-lg hover:bg-muted/80 transition-colors text-center font-medium"
                    >
                      Maui
                    </Link>
                    <Link 
                      to="/oahu/warehouse-cleaning/" 
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
                      <AccordionTrigger>What equipment do you use for warehouse cleaning?</AccordionTrigger>
                      <AccordionContent>
                        We use industrial-grade equipment including ride-on floor scrubbers, high-reach cleaning equipment, and specialized tools for cleaning high-bay areas. Our equipment is designed to handle large-scale warehouse operations efficiently and safely.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>How do you ensure OSHA compliance in warehouses?</AccordionTrigger>
                      <AccordionContent>
                        Our team is trained in OSHA standards and follows strict safety protocols. We maintain clear walkways, properly mark hazardous areas, ensure proper lighting, and follow all regulations for workplace safety and cleanliness standards.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>Can you work around our operating schedule?</AccordionTrigger>
                      <AccordionContent>
                        Yes, we understand that warehouses operate 24/7 in many cases. We can work during off-peak hours, weekends, or during scheduled maintenance windows to minimize disruption to your operations while maintaining cleanliness standards.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                      <AccordionTrigger>How do you handle cleaning around sensitive inventory?</AccordionTrigger>
                      <AccordionContent>
                        We coordinate with your staff to identify sensitive areas and products. We use appropriate cleaning methods and products, provide protective coverings when needed, and follow your specific protocols for handling different types of inventory safely.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>

                {/* Call to Action */}
                <div className="text-center py-12 bg-primary/5 rounded-lg shadow-inner">
                  <h2 className="text-4xl font-bold mb-6">Ready to Optimize Your Warehouse Operations?</h2>
                  <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                    Choose your location to get a tailored quote for professional warehouse cleaning services.
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

export default WarehouseCleaningPage;

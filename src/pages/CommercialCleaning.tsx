import { GeneralNavigation } from "@/components/GeneralNavigation";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroCommercial from "@/assets/hero-commercial.jpg";

const CommercialCleaning = () => {
  return (
    <>
      <Helmet>
        <title>Commercial Office Cleaning Services | Red Rock Cleaning</title>
        <meta name="description" content="Professional commercial cleaning services for offices, retail spaces, and businesses. Maintain a pristine workplace environment." />
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
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Commercial Cleaning Services</h1>
              <p className="text-xl md:text-2xl mb-8">
                Professional cleaning solutions for businesses of all sizes
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
                <h2 className="text-4xl font-bold text-center mb-12">Commercial Cleaning Solutions</h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-card p-8 rounded-lg shadow-md">
                    <h3 className="text-2xl font-bold mb-4">Office Cleaning</h3>
                    <p className="text-muted-foreground mb-4">
                      Create a productive work environment with our comprehensive office cleaning services. 
                      Scheduled to minimize disruption to your business operations.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Workspace and desk cleaning</li>
                      <li>• Conference room maintenance</li>
                      <li>• Break room and kitchen cleaning</li>
                      <li>• Restroom sanitization</li>
                    </ul>
                  </div>

                  <div className="bg-card p-8 rounded-lg shadow-md">
                    <h3 className="text-2xl font-bold mb-4">Retail Space Cleaning</h3>
                    <p className="text-muted-foreground mb-4">
                      First impressions matter. Keep your retail space welcoming and spotless for customers 
                      with our specialized retail cleaning services.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Floor and display cleaning</li>
                      <li>• Window and glass cleaning</li>
                      <li>• Fitting room maintenance</li>
                      <li>• Customer area upkeep</li>
                    </ul>
                  </div>

                  <div className="bg-card p-8 rounded-lg shadow-md">
                    <h3 className="text-2xl font-bold mb-4">Medical Office Cleaning</h3>
                    <p className="text-muted-foreground mb-4">
                      Healthcare facilities require specialized attention. Our medical office cleaning meets 
                      the highest standards of cleanliness and sanitation.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Medical-grade disinfection</li>
                      <li>• Waiting room maintenance</li>
                      <li>• Exam room sanitization</li>
                      <li>• Biohazard waste handling</li>
                    </ul>
                  </div>

                  <div className="bg-card p-8 rounded-lg shadow-md">
                    <h3 className="text-2xl font-bold mb-4">Janitorial Services</h3>
                    <p className="text-muted-foreground mb-4">
                      Comprehensive janitorial services for commercial properties. Daily, weekly, or monthly 
                      service plans available to meet your needs.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Floor care and maintenance</li>
                      <li>• Trash and recycling removal</li>
                      <li>• Supply restocking</li>
                      <li>• Common area cleaning</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12">Why Businesses Choose Us</h2>
                
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-5xl font-bold text-primary mb-4">24/7</div>
                    <h3 className="text-xl font-semibold mb-2">Flexible Scheduling</h3>
                    <p className="text-muted-foreground">
                      Day, night, or weekend service to fit your business hours
                    </p>
                  </div>
                  
                  <div>
                    <div className="text-5xl font-bold text-primary mb-4">100%</div>
                    <h3 className="text-xl font-semibold mb-2">Satisfaction</h3>
                    <p className="text-muted-foreground">
                      Guaranteed quality with every service visit
                    </p>
                  </div>
                  
                  <div>
                    <div className="text-5xl font-bold text-primary mb-4">Eco</div>
                    <h3 className="text-xl font-semibold mb-2">Green Products</h3>
                    <p className="text-muted-foreground">
                      Safe, effective, and environmentally friendly solutions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-primary/5">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold mb-6">Ready to Elevate Your Workspace?</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Choose your location and get an instant quote for professional commercial cleaning services.
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

export default CommercialCleaning;

import { GeneralNavigation } from "@/components/GeneralNavigation";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";
import Hreflang from "@/components/Hreflang";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { ClipboardCheck, Sparkles, Utensils, DoorOpen, ChefHat, Wine, Droplets, Users, Star, Clock } from "lucide-react";
import heroCommercial from "@/assets/hero-commercial.jpg";

const RestaurantCleaningPage = () => {
  return (
    <>
      <Helmet>
        <title>Restaurant Cleaning Services | Red Rock Cleans</title>
        <meta name="description" content="Professional restaurant cleaning services. We help you pass health inspections and earn 5-star reviews with comprehensive kitchen and dining room cleaning." />
        <link rel="canonical" href="https://redrockcleans.com/restaurant-cleaning" />
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
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Restaurant Cleaning Services</h1>
              <p className="text-xl md:text-2xl mb-8">Health-code ready cleaning for kitchens, dining rooms, bars, and restrooms</p>
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                <Link to="/commercial-quote">Get a Quote</Link>
              </Button>
            </div>
          </section>

          {/* Health & Experience */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">Exceeding Health Standards</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6 text-center">
                      <ClipboardCheck className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Health Code & Inspection Ready</h3>
                      <p className="text-muted-foreground">We follow local health department guidelines and maintain detailed cleaning logs.</p>
                    </CardContent>
                  </Card>
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6 text-center">
                      <Sparkles className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Kitchen Degreasing & Safety</h3>
                      <p className="text-muted-foreground">Deep degreasing reduces fire risk and optimizes equipment performance.</p>
                    </CardContent>
                  </Card>
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6 text-center">
                      <Utensils className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Memorable Guest Ambiance</h3>
                      <p className="text-muted-foreground">Spotless front-of-house for a five-star dining experience.</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Checklist */}
          <section className="py-16 bg-muted/50">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">Our Restaurant Cleaning Checklist</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6 text-center">
                      <DoorOpen className="h-10 w-10 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-3">Front-of-House</h3>
                      <p className="text-muted-foreground text-sm">Dining areas, entryways, windows, and guest touchpoints</p>
                    </CardContent>
                  </Card>
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6 text-center">
                      <ChefHat className="h-10 w-10 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-3">Commercial Kitchens</h3>
                      <p className="text-muted-foreground text-sm">Prep surfaces, equipment, floors, hood & exhaust</p>
                    </CardContent>
                  </Card>
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6 text-center">
                      <Wine className="h-10 w-10 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-3">Bar Areas</h3>
                      <p className="text-muted-foreground text-sm">Taps, behind-bar, floor mats, and sanitization</p>
                    </CardContent>
                  </Card>
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6 text-center">
                      <Droplets className="h-10 w-10 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-3">Restrooms</h3>
                      <p className="text-muted-foreground text-sm">Sanitization, restocking, odor control</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Impact */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="bg-primary text-primary-foreground p-8 rounded-lg mb-12">
                  <h2 className="text-3xl font-bold mb-8 text-center">The Impact of Professional Cleaning</h2>
                  <div className="grid md:grid-cols-3 gap-8 text-center">
                    <div>
                      <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Users className="w-10 h-10" />
                      </div>
                      <div className="text-5xl font-bold mb-2">95%</div>
                      <h3 className="text-lg font-semibold mb-2">Positive Guest Impressions</h3>
                      <p className="opacity-80">Clean, welcoming spaces boost reviews and repeat visits</p>
                    </div>
                    <div>
                      <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Star className="w-10 h-10" />
                      </div>
                      <div className="text-5xl font-bold mb-2">100%</div>
                      <h3 className="text-lg font-semibold mb-2">Health Inspections Passed</h3>
                      <p className="opacity-80">Compliance through logs, protocols, and safety training</p>
                    </div>
                    <div>
                      <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Clock className="w-10 h-10" />
                      </div>
                      <div className="text-5xl font-bold mb-2">30+</div>
                      <h3 className="text-lg font-semibold mb-2">Hours Saved for Staff</h3>
                      <p className="opacity-80">Free your team to focus on service and guests</p>
                    </div>
                  </div>
                </div>

                {/* Find by location */}
                <div className="bg-card p-8 rounded-lg shadow-lg mb-12">
                  <h2 className="text-3xl font-bold mb-6 text-primary">Find Restaurant Cleaning Near You</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Link to="/las-vegas/restaurant-cleaning/" className="bg-muted p-4 rounded-lg hover:bg-muted/80 transition-colors text-center font-medium">Las Vegas</Link>
                    <Link to="/dallas/restaurant-cleaning/" className="bg-muted p-4 rounded-lg hover:bg-muted/80 transition-colors text-center font-medium">Dallas</Link>
                    <Link to="/south-florida/restaurant-cleaning/" className="bg-muted p-4 rounded-lg hover:bg-muted/80 transition-colors text-center font-medium">South Florida</Link>
                    <Link to="/columbus-ohio/restaurant-cleaning/" className="bg-muted p-4 rounded-lg hover:bg-muted/80 transition-colors text-center font-medium">Columbus, Ohio</Link>
                    <Link to="/maui/restaurant-cleaning/" className="bg-muted p-4 rounded-lg hover:bg-muted/80 transition-colors text-center font-medium">Maui</Link>
                    <Link to="/oahu/restaurant-cleaning/" className="bg-muted p-4 rounded-lg hover:bg-muted/80 transition-colors text-center font-medium">Oahu</Link>
                  </div>
                </div>

                {/* FAQ */}
                <div className="bg-muted/30 p-8 rounded-lg mb-12">
                  <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>How do you help restaurants pass health inspections?</AccordionTrigger>
                      <AccordionContent>We follow local health guidelines, use food-safe products, and provide documentation.</AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Can you work around our hours?</AccordionTrigger>
                      <AccordionContent>Yes. We schedule around service hours, events, and maintenance windows.</AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>What’s included in commercial kitchen cleaning?</AccordionTrigger>
                      <AccordionContent>Deep cleaning of prep areas, equipment sanitization, floors, hood and exhaust systems.</AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>

                {/* CTA */}
                <div className="text-center py-12 bg-primary/5 rounded-lg">
                  <h2 className="text-4xl font-bold mb-6">Ready to Elevate Your Restaurant’s Cleanliness?</h2>
                  <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">Choose your location to get a tailored quote for professional restaurant cleaning services.</p>
                  <Button size="lg" asChild>
                    <Link to="/commercial-quote">Find Your Location & Get a Quote</Link>
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

export default RestaurantCleaningPage;



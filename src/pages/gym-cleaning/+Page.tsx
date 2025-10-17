import { GeneralNavigation } from "@/components/GeneralNavigation";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";
import Hreflang from "@/components/Hreflang";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { Dumbbell, Droplets, Activity, Users, CheckCircle, Zap, Clock } from "lucide-react";
import heroCommercial from "@/assets/hero-commercial.jpg";

const GymCleaningPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t("commercial.gym.title", { defaultValue: "Gym Cleaning Services | Red Rock Cleans" })}</title>
        <meta name="description" content={t("commercial.gym.description", { defaultValue: "Professional gym and fitness center cleaning services. Sanitize equipment, locker rooms, and common areas with our specialized cleaning protocols." })} />
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
              <h1 className="text-5xl md:text-6xl font-bold mb-6">{t("commercial.gym.heading", { defaultValue: "Professional Gym Cleaning Services" })}</h1>
              <p className="text-xl md:text-2xl mb-8">
                {t("commercial.gym.tagline", { defaultValue: "Keep your fitness center clean, safe, and member-ready with our specialized gym cleaning protocols" })}
              </p>
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                <Link to="/commercial-quote">{t("cta.getQuote", { defaultValue: "Get a Quote" })}</Link>
              </Button>
            </div>
          </section>

          {/* Introduction */}
          <section className="py-20 bg-muted/20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <p className="text-xl text-muted-foreground mb-12">
                  A clean gym is essential for member satisfaction, health, and safety. Our specialized cleaning services ensure your fitness center maintains the highest standards of hygiene while creating a welcoming environment for your members. We understand the unique challenges of gym cleaning, from high-touch equipment to moisture-prone areas, and have developed comprehensive protocols to address every aspect of fitness facility hygiene.
                </p>

                {/* Interactive Cleaning Checklist Cards */}
                <div className="mb-16">
                  <h2 className="text-3xl font-bold mb-8 text-center">{t("commercial.gym.checklist.title", { defaultValue: "Our Comprehensive Gym Cleaning Checklist" })}</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                      <CardContent className="p-6 text-center">
                        <div className="mb-4">
                          <Dumbbell className="w-12 h-12 text-primary mx-auto" />
                        </div>
                        <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">{t("commercial.gym.checklist.workout.title", { defaultValue: "Workout & Equipment Areas" })}</h3>
                        <ul className="text-sm text-muted-foreground space-y-2 text-left">
                          <li>• {t("commercial.gym.checklist.workout.i1", { defaultValue: "Disinfecting free weights & dumbbells" })}</li>
                          <li>• {t("commercial.gym.checklist.workout.i2", { defaultValue: "Cardio machine sanitization" })}</li>
                          <li>• {t("commercial.gym.checklist.workout.i3", { defaultValue: "High-touch point cleaning" })}</li>
                          <li>• {t("commercial.gym.checklist.workout.i4", { defaultValue: "Cable & pulley system cleaning" })}</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                      <CardContent className="p-6 text-center">
                        <div className="mb-4">
                          <Droplets className="w-12 h-12 text-primary mx-auto" />
                        </div>
                        <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">{t("commercial.gym.checklist.locker.title", { defaultValue: "Locker Rooms & Showers" })}</h3>
                        <ul className="text-sm text-muted-foreground space-y-2 text-left">
                          <li>• {t("commercial.gym.checklist.locker.i1", { defaultValue: "Floor & wall sanitization" })}</li>
                          <li>• {t("commercial.gym.checklist.locker.i2", { defaultValue: "Bench & locker cleaning" })}</li>
                          <li>• {t("commercial.gym.checklist.locker.i3", { defaultValue: "Mold & mildew prevention" })}</li>
                          <li>• {t("commercial.gym.checklist.locker.i4", { defaultValue: "Ventilation cleaning" })}</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                      <CardContent className="p-6 text-center">
                        <div className="mb-4">
                          <Activity className="w-12 h-12 text-primary mx-auto" />
                        </div>
                        <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">Group Fitness Studios</h3>
                        <ul className="text-sm text-muted-foreground space-y-2 text-left">
                          <li>• Floor cleaning & sanitizing</li>
                          <li>• Mirror & glass cleaning</li>
                          <li>• Equipment disinfection</li>
                          <li>• Mat & prop sanitization</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                      <CardContent className="p-6 text-center">
                        <div className="mb-4">
                          <Users className="w-12 h-12 text-primary mx-auto" />
                        </div>
                        <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">Reception & Common Areas</h3>
                        <ul className="text-sm text-muted-foreground space-y-2 text-left">
                          <li>• Front desk sanitization</li>
                          <li>• Seating area cleaning</li>
                          <li>• Water fountain maintenance</li>
                          <li>• Vending machine cleaning</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Results Section */}
                <div className="bg-primary text-primary-foreground p-8 rounded-lg mb-12">
                  <h2 className="text-3xl font-bold mb-8 text-center">Proven Results for a Healthier Gym</h2>
                  <div className="grid md:grid-cols-3 gap-8 text-center">
                    <div>
                      <div className="mb-4">
                        <CheckCircle className="w-16 h-16 mx-auto" />
                      </div>
                      <div className="text-6xl font-bold mb-2">98%</div>
                      <h3 className="text-xl font-semibold mb-2">Members Satisfied</h3>
                      <p className="text-primary-foreground/80">
                        With our cleaning services and gym hygiene standards
                      </p>
                    </div>
                    <div>
                      <div className="mb-4">
                        <Zap className="w-16 h-16 mx-auto" />
                      </div>
                      <div className="text-6xl font-bold mb-2">99.9%</div>
                      <h3 className="text-xl font-semibold mb-2">Germs Eliminated</h3>
                      <p className="text-primary-foreground/80">
                        Through our comprehensive disinfection protocols
                      </p>
                    </div>
                    <div>
                      <div className="mb-4">
                        <Clock className="w-16 h-16 mx-auto" />
                      </div>
                      <div className="text-6xl font-bold mb-2">40+</div>
                      <h3 className="text-xl font-semibold mb-2">Hours Saved for Staff</h3>
                      <p className="text-primary-foreground/80">
                        Weekly cleaning time your team can focus on members
                      </p>
                    </div>
                  </div>
                </div>

                {/* Location Links */}
                <div className="bg-card p-8 rounded-lg shadow-lg mb-12">
                  <h2 className="text-3xl font-bold mb-6 text-primary">Find Gym Cleaning In Your Area</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Link 
                      to="/las-vegas/gym-cleaning/" 
                      className="bg-muted p-4 rounded-lg hover:bg-muted/80 transition-colors text-center font-medium"
                    >
                      Las Vegas
                    </Link>
                    <Link 
                      to="/dallas/gym-cleaning/" 
                      className="bg-muted p-4 rounded-lg hover:bg-muted/80 transition-colors text-center font-medium"
                    >
                      Dallas
                    </Link>
                    <Link 
                      to="/south-florida/gym-cleaning/" 
                      className="bg-muted p-4 rounded-lg hover:bg-muted/80 transition-colors text-center font-medium"
                    >
                      South Florida
                    </Link>
                    <Link 
                      to="/columbus-ohio/gym-cleaning/" 
                      className="bg-muted p-4 rounded-lg hover:bg-muted/80 transition-colors text-center font-medium"
                    >
                      Columbus, Ohio
                    </Link>
                    <Link 
                      to="/maui/gym-cleaning/" 
                      className="bg-muted p-4 rounded-lg hover:bg-muted/80 transition-colors text-center font-medium"
                    >
                      Maui
                    </Link>
                    <Link 
                      to="/oahu/gym-cleaning/" 
                      className="bg-muted p-4 rounded-lg hover:bg-muted/80 transition-colors text-center font-medium"
                    >
                      Oahu
                    </Link>
                  </div>
                </div>

                {/* Our Other Industrial & Commercial Solutions */}
                <div className="bg-card p-8 rounded-lg shadow-lg mb-12">
                  <h2 className="text-3xl font-bold mb-6 text-primary">Our Other Industrial & Commercial Solutions</h2>
                  <div className="grid md:grid-cols-3 gap-4">
                    <Link 
                      to="/data-center-cleaning"
                      className="bg-muted p-4 rounded-lg hover:bg-muted/80 transition-colors text-center font-medium"
                    >
                      Data Center Cleaning
                    </Link>
                    <Link 
                      to="/commercial-cleaning"
                      className="bg-muted p-4 rounded-lg hover:bg-muted/80 transition-colors text-center font-medium"
                    >
                      Commercial Cleaning
                    </Link>
                    <Link 
                      to="/factory-cleaning"
                      className="bg-muted p-4 rounded-lg hover:bg-muted/80 transition-colors text-center font-medium"
                    >
                      Factory Cleaning
                    </Link>
                  </div>
                </div>

                {/* FAQ Section */}
                <div className="bg-muted/30 p-8 rounded-lg mb-12">
                  <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>How often should gym equipment be cleaned and disinfected?</AccordionTrigger>
                      <AccordionContent>
                        Gym equipment should be cleaned and disinfected after each use by members, with deep cleaning performed daily. High-touch equipment like cardio machines and free weights require more frequent sanitization, while less frequently used equipment can be cleaned on a rotating schedule. We provide comprehensive cleaning protocols tailored to your gym's usage patterns.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>What cleaning products do you use for gym sanitation?</AccordionTrigger>
                      <AccordionContent>
                        We use EPA-approved disinfectants that are effective against bacteria, viruses, and fungi while being safe for gym equipment and members. Our products are non-corrosive to prevent damage to equipment surfaces and are formulated to work quickly to minimize downtime during cleaning operations.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>How do you handle cleaning during peak gym hours?</AccordionTrigger>
                      <AccordionContent>
                        We work around your peak hours to minimize disruption to your members. Our team uses efficient cleaning methods and equipment to clean quickly and quietly. We focus on high-touch areas during busy periods and perform deeper cleaning during off-peak hours or when the gym is closed.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                      <AccordionTrigger>Do you provide cleaning supplies for member use?</AccordionTrigger>
                      <AccordionContent>
                        Yes, we can provide and maintain cleaning stations throughout your gym with disinfectant sprays, paper towels, and sanitizing wipes for members to use before and after equipment use. This encourages member participation in maintaining cleanliness and helps reduce the spread of germs between professional cleanings.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>

                {/* Call to Action */}
                <div className="text-center py-12 bg-primary/5 rounded-lg shadow-inner">
                  <h2 className="text-4xl font-bold mb-6">Ready for Professional Gym Cleaning?</h2>
                  <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                    Choose your location to get a tailored quote for professional gym cleaning services.
                  </p>
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

export default GymCleaningPage;
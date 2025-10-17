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
import { FileText, Microscope, Award, Users, Stethoscope, Droplets, Cross, GraduationCap, Shield } from "lucide-react";
import heroCommercial from "@/assets/hero-commercial.jpg";

const MedicalOfficeCleaningPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t("commercial.medical.title", { defaultValue: "Medical Office Cleaning Services | Red Rock Cleans" })}</title>
        <meta name="description" content={t("commercial.medical.description", { defaultValue: "Specialized medical office cleaning services. Red Rock Cleans provides HIPAA and OSHA compliant cleaning for clinics and healthcare facilities to ensure patient safety. Learn more." })} />
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
              <h1 className="text-5xl md:text-6xl font-bold mb-6">{t("commercial.medical.heading", { defaultValue: "HIPAA & OSHA Compliant Medical Office Cleaning" })}</h1>
              <p className="text-xl md:text-2xl mb-8">
                {t("commercial.medical.tagline", { defaultValue: "Ensuring patient safety and trust through specialized healthcare facility cleaning protocols" })}
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
                  Patient safety and trust begin with a visibly clean and thoroughly disinfected environment. Our specialized medical office cleaning services go beyond standard commercial cleaning to meet the stringent requirements of healthcare facilities, ensuring compliance with HIPAA and OSHA regulations while maintaining the highest standards of infection control.
                </p>

                {/* A Higher Standard of Clean for Healthcare Facilities */}
                <div className="mb-16">
                  <h2 className="text-3xl font-bold mb-8 text-center">A Higher Standard of Clean for Healthcare Facilities</h2>
                  <div className="grid md:grid-cols-3 gap-6">
                    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 hover:border-primary/50">
                      <CardContent className="p-6 text-center">
                        <div className="mb-4">
                          <Shield className="w-12 h-12 text-primary mx-auto group-hover:animate-pulse transition-all duration-300" />
                        </div>
                        <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">HIPAA & OSHA Compliance</h3>
                        <p className="text-sm text-muted-foreground">
                          Our cleaning protocols are designed to meet strict regulatory standards, ensuring complete compliance with HIPAA privacy requirements and OSHA safety regulations for healthcare environments.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 hover:border-primary/50">
                      <CardContent className="p-6 text-center">
                        <div className="mb-4">
                          <Microscope className="w-12 h-12 text-primary mx-auto group-hover:animate-pulse transition-all duration-300" />
                        </div>
                        <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">Advanced Infection Control</h3>
                        <p className="text-sm text-muted-foreground">
                          We use EPA-approved, hospital-grade disinfectants and advanced cleaning techniques to eliminate pathogens and prevent cross-contamination in medical environments.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 hover:border-primary/50">
                      <CardContent className="p-6 text-center">
                        <div className="mb-4">
                          <GraduationCap className="w-12 h-12 text-primary mx-auto group-hover:animate-pulse transition-all duration-300" />
                        </div>
                        <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">Trained & Certified Staff</h3>
                        <p className="text-sm text-muted-foreground">
                          Our team receives specialized training in bloodborne pathogens, cross-contamination prevention, and medical facility cleaning protocols to ensure the highest safety standards.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Our Medical-Grade Cleaning Checklist */}
                <div className="mb-16">
                  <h2 className="text-3xl font-bold mb-8 text-center">Our Medical-Grade Cleaning Checklist</h2>
                  <div className="grid md:grid-cols-3 gap-6">
                    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 hover:border-primary/50">
                      <CardContent className="p-6 text-center">
                        <div className="mb-4">
                          <Users className="w-12 h-12 text-primary mx-auto group-hover:animate-pulse transition-all duration-300" />
                        </div>
                        <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">Waiting Rooms & Reception</h3>
                        <ul className="text-sm text-muted-foreground space-y-2 text-left">
                          <li>• High-touch surface disinfection</li>
                          <li>• Patient seating sanitization</li>
                          <li>• Reception desk cleaning</li>
                          <li>• Magazine and brochure sanitization</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 hover:border-primary/50">
                      <CardContent className="p-6 text-center">
                        <div className="mb-4">
                          <Stethoscope className="w-12 h-12 text-primary mx-auto group-hover:animate-pulse transition-all duration-300" />
                        </div>
                        <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">Exam & Procedure Rooms</h3>
                        <ul className="text-sm text-muted-foreground space-y-2 text-left">
                          <li>• Terminal cleaning protocols</li>
                          <li>• Medical equipment sanitization</li>
                          <li>• Exam table disinfection</li>
                          <li>• Biohazard waste handling</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 hover:border-primary/50">
                      <CardContent className="p-6 text-center">
                        <div className="mb-4">
                          <Droplets className="w-12 h-12 text-primary mx-auto group-hover:animate-pulse transition-all duration-300" />
                        </div>
                        <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">Restrooms & Common Areas</h3>
                        <ul className="text-sm text-muted-foreground space-y-2 text-left">
                          <li>• Intensive sanitation protocols</li>
                          <li>• Floor and wall disinfection</li>
                          <li>• Handwashing station maintenance</li>
                          <li>• Waste disposal management</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Our Proven Commitment to Health & Safety */}
                <div className="bg-primary text-primary-foreground p-8 rounded-lg mb-12">
                  <h2 className="text-3xl font-bold mb-8 text-center">Our Proven Commitment to Health & Safety</h2>
                  <div className="grid md:grid-cols-3 gap-8 text-center">
                    <div>
                      <div className="mb-4">
                        <Cross className="w-16 h-16 mx-auto animate-pulse" />
                      </div>
                      <div className="text-6xl font-bold mb-2">150+</div>
                      <h3 className="text-xl font-semibold mb-2">Healthcare Facilities Served</h3>
                      <p className="text-primary-foreground/80">
                        From small clinics to large medical centers
                      </p>
                    </div>
                    <div>
                      <div className="mb-4">
                        <GraduationCap className="w-16 h-16 mx-auto animate-pulse" />
                      </div>
                      <div className="text-6xl font-bold mb-2">100%</div>
                      <h3 className="text-xl font-semibold mb-2">Certified Technicians on Staff</h3>
                      <p className="text-primary-foreground/80">
                        All team members trained in healthcare cleaning protocols
                      </p>
                    </div>
                    <div>
                      <div className="mb-4">
                        <Shield className="w-16 h-16 mx-auto animate-pulse" />
                      </div>
                      <div className="text-6xl font-bold mb-2">99.9%</div>
                      <h3 className="text-xl font-semibold mb-2">Pathogen Reduction</h3>
                      <p className="text-primary-foreground/80">
                        Proven effectiveness of our disinfection protocols
                      </p>
                    </div>
                  </div>
                </div>

                {/* Find Medical Office Cleaning In Your Area */}
                <div className="bg-card p-8 rounded-lg shadow-lg mb-12">
                  <h2 className="text-3xl font-bold mb-6 text-primary">Find Medical Office Cleaning In Your Area</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Link 
                      to="/las-vegas/medical-office-cleaning/" 
                      className="bg-muted p-4 rounded-lg hover:bg-muted/80 transition-colors text-center font-medium"
                    >
                      Las Vegas
                    </Link>
                    <Link 
                      to="/dallas/medical-office-cleaning/" 
                      className="bg-muted p-4 rounded-lg hover:bg-muted/80 transition-colors text-center font-medium"
                    >
                      Dallas
                    </Link>
                    <Link 
                      to="/south-florida/medical-office-cleaning/" 
                      className="bg-muted p-4 rounded-lg hover:bg-muted/80 transition-colors text-center font-medium"
                    >
                      South Florida
                    </Link>
                    <Link 
                      to="/columbus-ohio/medical-office-cleaning/" 
                      className="bg-muted p-4 rounded-lg hover:bg-muted/80 transition-colors text-center font-medium"
                    >
                      Columbus, Ohio
                    </Link>
                    <Link 
                      to="/maui/medical-office-cleaning/" 
                      className="bg-muted p-4 rounded-lg hover:bg-muted/80 transition-colors text-center font-medium"
                    >
                      Maui
                    </Link>
                    <Link 
                      to="/oahu/medical-office-cleaning/" 
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
                      <AccordionTrigger>What makes medical office cleaning different from regular commercial cleaning?</AccordionTrigger>
                      <AccordionContent>
                        Medical office cleaning requires specialized protocols including terminal cleaning between patients, use of hospital-grade disinfectants, compliance with HIPAA privacy requirements, and adherence to OSHA safety standards. Our team is trained in bloodborne pathogen protocols and cross-contamination prevention.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Are your cleaning products safe for medical environments?</AccordionTrigger>
                      <AccordionContent>
                        Yes, we use only EPA-approved, hospital-grade disinfectants that are effective against bacteria, viruses, and fungi while being safe for medical equipment and sensitive healthcare environments. All products meet CDC guidelines for healthcare facility disinfection.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>How do you ensure HIPAA compliance during cleaning?</AccordionTrigger>
                      <AccordionContent>
                        Our team is trained in HIPAA compliance and follows strict protocols to protect patient privacy. We never access patient information, use secure disposal methods for sensitive materials, and maintain confidentiality agreements with all staff members.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                      <AccordionTrigger>What is terminal cleaning and when is it performed?</AccordionTrigger>
                      <AccordionContent>
                        Terminal cleaning is a thorough disinfection process performed after each patient visit in exam rooms and procedure areas. It includes cleaning all surfaces, equipment, and high-touch areas with hospital-grade disinfectants to prevent cross-contamination between patients.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>

                {/* Call to Action */}
                <div className="text-center py-12 bg-primary/5 rounded-lg shadow-inner">
                  <h2 className="text-4xl font-bold mb-6">Ready for Medical-Grade Cleaning?</h2>
                  <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                    Choose your location to get a tailored quote for professional medical office cleaning services.
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

export default MedicalOfficeCleaningPage;

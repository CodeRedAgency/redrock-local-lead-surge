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
import { Shield, Lock, FileText, Building, Users, Calendar, Award } from "lucide-react";
import heroCommercial from "@/assets/hero-commercial.jpg";

const GovernmentFacilityCleaningPage = () => {
  return (
    <>
      <Helmet>
        <title>Government Facility Cleaning Services | Red Rock Cleans</title>
        <meta name="description" content="Secure and compliant government facility cleaning. Red Rock Cleans provides discreet, professional cleaning for municipal, federal, and public buildings by security-cleared staff." />
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
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Secure & Compliant Government Facility Cleaning</h1>
              <p className="text-xl md:text-2xl mb-8">
                Discreet, professional cleaning for sensitive government and municipal buildings
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
                    Security, discretion, and reliability are paramount when cleaning sensitive government and municipal buildings. Our specialized government facility cleaning services ensure the highest standards of confidentiality, compliance, and professionalism while maintaining the integrity and security of your facility.
                  </p>
                </div>

                {/* Interactive Cards Section */}
                <div className="mb-16">
                  <h2 className="text-3xl font-bold mb-8 text-center">Our Commitment to Security and Excellence</h2>
                  <div className="grid md:grid-cols-3 gap-6">
                    <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <CardContent className="p-6 text-center">
                        <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-3">Security-Cleared Personnel</h3>
                        <p className="text-muted-foreground">
                          All staff undergo comprehensive background checks, security clearances, and ongoing vetting to ensure the highest level of trust and reliability for sensitive government facilities.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <CardContent className="p-6 text-center">
                        <Lock className="w-12 h-12 text-primary mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-3">Strict Confidentiality Protocols</h3>
                        <p className="text-muted-foreground">
                          We maintain the highest standards of discretion and privacy, with strict confidentiality agreements and protocols to protect sensitive information and maintain facility security.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <CardContent className="p-6 text-center">
                        <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-3">Compliance & Reporting</h3>
                        <p className="text-muted-foreground">
                          Full adherence to GSA standards, federal regulations, and detailed reporting requirements. We provide comprehensive documentation for all cleaning activities and compliance verification.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Cleaning Checklist */}
                <div className="bg-card p-8 rounded-lg shadow-lg mb-12">
                  <h2 className="text-3xl font-bold mb-6 text-primary">Our Government Facility Cleaning Checklist</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Public Areas & Reception</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start space-x-3">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span>Lobby and reception area cleaning</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span>Public restroom sanitization</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span>Waiting area maintenance</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span>Information desk cleaning</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span>Security checkpoint cleaning</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-4">Office Spaces & Work Areas</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start space-x-3">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span>Executive office cleaning</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span>Conference room maintenance</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span>Break room and kitchen cleaning</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span>Cubicle and workstation cleaning</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span>Filing room and storage cleaning</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-4">Specialized Areas</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start space-x-3">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span>Courtroom cleaning and maintenance</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span>Council chamber cleaning</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span>Archive and records room cleaning</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span>Emergency response center cleaning</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span>Secure document disposal</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-4">Security & Compliance</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start space-x-3">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span>Secure waste disposal protocols</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span>Access control compliance</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span>Document handling procedures</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span>Incident reporting and documentation</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span>Regular security audits and assessments</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Experience in Numbers */}
                <div className="bg-primary text-primary-foreground p-8 rounded-lg mb-12">
                  <h2 className="text-3xl font-bold mb-8 text-center">Our Experience in Numbers</h2>
                  <div className="grid md:grid-cols-3 gap-8 text-center">
                    <div>
                      <div className="text-5xl font-bold mb-2">150+</div>
                      <div className="flex items-center justify-center mb-2">
                        <Shield className="w-8 h-8 mr-2" />
                        <h3 className="text-xl font-semibold">Security Cleared Staff</h3>
                      </div>
                      <p className="text-primary-foreground/80">
                        Background-checked and security-cleared personnel ready to serve government facilities
                      </p>
                    </div>
                    <div>
                      <div className="text-5xl font-bold mb-2">75+</div>
                      <div className="flex items-center justify-center mb-2">
                        <Building className="w-8 h-8 mr-2" />
                        <h3 className="text-xl font-semibold">Facilities Maintained</h3>
                      </div>
                      <p className="text-primary-foreground/80">
                        Government buildings, municipal offices, and public facilities across multiple states
                      </p>
                    </div>
                    <div>
                      <div className="text-5xl font-bold mb-2">10+</div>
                      <div className="flex items-center justify-center mb-2">
                        <Award className="w-8 h-8 mr-2" />
                        <h3 className="text-xl font-semibold">Years of Compliant Service</h3>
                      </div>
                      <p className="text-primary-foreground/80">
                        Proven track record of maintaining security standards and regulatory compliance
                      </p>
                    </div>
                  </div>
                </div>

                {/* Location Links */}
                <div className="bg-card p-8 rounded-lg shadow-lg mb-12">
                  <h2 className="text-3xl font-bold mb-6 text-primary">Find Government Facility Cleaning In Your Area</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Link 
                      to="/las-vegas/government-facility-cleaning/" 
                      className="bg-muted p-4 rounded-lg hover:bg-muted/80 transition-colors text-center font-medium"
                    >
                      Las Vegas
                    </Link>
                    <Link 
                      to="/dallas/government-facility-cleaning/" 
                      className="bg-muted p-4 rounded-lg hover:bg-muted/80 transition-colors text-center font-medium"
                    >
                      Dallas
                    </Link>
                    <Link 
                      to="/south-florida/government-facility-cleaning/" 
                      className="bg-muted p-4 rounded-lg hover:bg-muted/80 transition-colors text-center font-medium"
                    >
                      South Florida
                    </Link>
                    <Link 
                      to="/columbus-ohio/government-facility-cleaning/" 
                      className="bg-muted p-4 rounded-lg hover:bg-muted/80 transition-colors text-center font-medium"
                    >
                      Columbus, Ohio
                    </Link>
                    <Link 
                      to="/maui/government-facility-cleaning/" 
                      className="bg-muted p-4 rounded-lg hover:bg-muted/80 transition-colors text-center font-medium"
                    >
                      Maui
                    </Link>
                    <Link 
                      to="/oahu/government-facility-cleaning/" 
                      className="bg-muted p-4 rounded-lg hover:bg-muted/80 transition-colors text-center font-medium"
                    >
                      Oahu
                    </Link>
                  </div>
                </div>

                {/* FAQ Section */}
                <div className="bg-muted/30 p-8 rounded-lg mb-12">
                  <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>What security clearances do your staff have for government facility cleaning?</AccordionTrigger>
                      <AccordionContent>
                        All our government facility cleaning staff undergo comprehensive background checks, including criminal history verification, employment verification, and reference checks. We work with federal and municipal security offices to ensure our personnel meet or exceed the clearance requirements for each specific facility and access level.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Do you comply with GSA standards and federal cleaning requirements?</AccordionTrigger>
                      <AccordionContent>
                        Yes, we maintain full compliance with GSA (General Services Administration) standards, federal cleaning regulations, and municipal requirements. Our cleaning protocols are designed to meet or exceed all government facility standards, and we provide detailed documentation for compliance verification and audit purposes.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>How do you ensure confidentiality and discretion in government buildings?</AccordionTrigger>
                      <AccordionContent>
                        We maintain strict confidentiality protocols including comprehensive non-disclosure agreements, secure document handling procedures, and discrete cleaning schedules. All staff are trained in maintaining privacy and security, and we implement access controls and incident reporting systems to ensure the highest level of discretion.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                      <AccordionTrigger>What specialized cleaning services do you provide for sensitive areas like courtrooms?</AccordionTrigger>
                      <AccordionContent>
                        For sensitive areas like courtrooms, council chambers, and secure offices, we provide specialized cleaning services including secure document disposal, evidence-safe cleaning protocols, and specialized equipment that doesn't interfere with sensitive electronics or confidential materials. We coordinate with facility security to ensure all cleaning activities meet security requirements.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>

                {/* CTA Section */}
                <div className="bg-primary/5 p-8 rounded-lg text-center">
                  <h2 className="text-3xl font-bold mb-4">Ready to Secure Professional Government Facility Cleaning?</h2>
                  <p className="text-xl text-muted-foreground mb-8">
                    Choose your location and get a confidential quote for secure, compliant government facility cleaning services.
                  </p>
                  <Button size="lg" asChild>
                    <Link to="/commercial-quote">Find Your Location & Get a Quote</Link>
                  </Button>
                </div>

                <div className="mt-12 text-center">
                  <img 
                    src={heroCommercial} 
                    alt="A clean and secure government facility lobby after professional cleaning by Red Rock Cleans"
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

export default GovernmentFacilityCleaningPage;

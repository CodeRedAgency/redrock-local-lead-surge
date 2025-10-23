import { ColumbusNavigation } from "@/components/ColumbusNavigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Shield, Lock, FileText, Building, Gavel, Users, ShieldCheck, Building2, CheckCircle2, Briefcase, Database, GraduationCap, Phone, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";

const cities = [
  {
    id: "dublin",
    name: "Dublin",
    description: "Dublin's municipal and government facilities trust our secure cleaning services to maintain professional, compliant environments with discretion and reliability that meets the stringent requirements of public buildings in this growing community.",
    faq: [
      {
        question: "Are your Dublin cleaners background-checked?",
        answer: "Yes, all team members assigned to Dublin government facilities undergo comprehensive background checks and security clearance processes to ensure the safety and security of sensitive areas."
      },
      {
        question: "Can you provide cleaning documentation for Dublin facilities?",
        answer: "Absolutely. We provide detailed cleaning logs, compliance reports, and documentation required for Dublin municipal audits and regulatory requirements."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our Dublin municipal building with the utmost professionalism and discretion. Their reliability is unmatched.",
      author: "Facilities Manager, Dublin Municipal Center"
    }
  },
  {
    id: "upper-arlington",
    name: "Upper Arlington",
    description: "Upper Arlington government buildings benefit from our professional cleaning services that combine security awareness with thorough cleaning protocols, ensuring public facilities remain pristine while maintaining strict confidentiality standards.",
    faq: [
      {
        question: "Do you clean courtrooms in Upper Arlington?",
        answer: "Yes, we provide specialized cleaning for courtrooms and sensitive areas in Upper Arlington, following strict protocols for handling confidential materials and restricted access zones."
      },
      {
        question: "What makes your Upper Arlington service secure?",
        answer: "Our Upper Arlington team follows strict chain-of-custody procedures, maintains confidentiality agreements, and uses secure communication channels for all facility coordination."
      }
    ],
    testimonial: {
      text: "The security and professionalism that Red Rock Cleans brings to our Upper Arlington facility is exactly what we need for sensitive government work.",
      author: "Administrator, Upper Arlington Government Office"
    }
  },
  {
    id: "powell",
    name: "Powell",
    description: "Powell's public facilities rely on our compliant government cleaning services that meet all regulatory requirements while delivering the thorough, professional cleaning that reflects well on municipal operations and public service.",
    faq: [
      {
        question: "Can you work around Powell government office hours?",
        answer: "Yes, we offer flexible scheduling for Powell facilities, including after-hours and weekend cleaning to minimize disruption to public services and government operations."
      },
      {
        question: "How do you ensure quality in Powell facilities?",
        answer: "We use detailed checklists, conduct quality inspections, and maintain open communication with Powell facility managers to ensure consistent, high-quality results."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Powell municipal building with consistency and professionalism. They understand the unique needs of government facilities.",
      author: "Operations Director, Powell City Services"
    }
  },
  {
    id: "lewis-center",
    name: "Lewis Center",
    description: "Lewis Center government facilities trust our secure cleaning protocols that protect sensitive information while maintaining the clean, professional environments that public servants and citizens expect from their local government buildings.",
    faq: [
      {
        question: "What areas do you clean in Lewis Center government buildings?",
        answer: "We clean all areas including public lobbies, offices, meeting rooms, secure areas, common spaces, restrooms, and exterior entrances at Lewis Center facilities."
      },
      {
        question: "Are you insured for Lewis Center government work?",
        answer: "Yes, we carry comprehensive insurance including general liability and workers' compensation specifically tailored for government facility cleaning in Lewis Center."
      }
    ],
    testimonial: {
      text: "Our Lewis Center facility has never been cleaner. Red Rock Cleans' attention to detail and security protocols give us complete confidence.",
      author: "Facility Supervisor, Lewis Center Municipal Services"
    }
  },
  {
    id: "worthington",
    name: "Worthington",
    description: "Worthington's historic government buildings benefit from our specialized cleaning services that combine traditional thoroughness with modern security protocols, maintaining the dignity and cleanliness expected of public institutions.",
    faq: [
      {
        question: "Do you clean historic government buildings in Worthington?",
        answer: "Yes, we're experienced with historic Worthington government buildings and adapt our cleaning methods to protect architectural features while maintaining security standards."
      },
      {
        question: "Can you handle confidential waste in Worthington?",
        answer: "Yes, we follow strict protocols for handling confidential waste and can coordinate with your Worthington facility's document destruction services."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans respects the historic nature of our Worthington government building while delivering modern, secure cleaning services. Excellent partnership.",
      author: "Building Manager, Worthington City Hall"
    }
  },
  {
    id: "new-albany",
    name: "New Albany",
    description: "New Albany's modern government facilities rely on our professional cleaning services that match the sophistication of these contemporary public buildings with security-conscious cleaning that protects sensitive operations.",
    faq: [
      {
        question: "Do you serve New Albany's municipal complex?",
        answer: "Yes, we regularly service New Albany's municipal facilities and understand the specific requirements of modern government buildings and public service centers."
      },
      {
        question: "How do you protect sensitive information in New Albany?",
        answer: "Our New Albany team never accesses computers, files, or documents, reports any unsecured materials to supervisors, and maintains strict non-disclosure agreements."
      }
    ],
    testimonial: {
      text: "The professionalism Red Rock Cleans brings to our New Albany government facility is exceptional. They understand the importance of discretion and security.",
      author: "Chief Administrator, New Albany Municipal Building"
    }
  },
  {
    id: "bexley",
    name: "Bexley",
    description: "Bexley government offices depend on our reliable cleaning services that maintain professional appearances while adhering to the strict confidentiality and security requirements essential for public sector operations.",
    faq: [
      {
        question: "Can you provide references for Bexley government work?",
        answer: "Yes, we can provide references from similar government facilities and municipal buildings in the Bexley area and throughout Columbus."
      },
      {
        question: "What certifications does your Bexley team hold?",
        answer: "Our Bexley team members hold appropriate security clearances, OSHA safety certifications, and specialized training for government facility cleaning."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been a trusted partner for our Bexley government office. Their reliability and security awareness are exactly what we need.",
      author: "Office Manager, Bexley City Offices"
    }
  },
  {
    id: "german-village",
    name: "German Village",
    description: "German Village government facilities benefit from our adaptable cleaning services that respect historic architecture while maintaining the security and professionalism required for public administration buildings.",
    faq: [
      {
        question: "Do you clean smaller government offices in German Village?",
        answer: "Yes, we serve government facilities of all sizes in German Village, from large municipal buildings to smaller administrative offices and public service centers."
      },
      {
        question: "How do you handle German Village's unique buildings?",
        answer: "We adapt our cleaning protocols for German Village's historic structures while maintaining the same high security and confidentiality standards required for government work."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans successfully maintains our German Village government office in this historic building. Professional service with security in mind.",
      author: "Administrator, German Village Community Office"
    }
  },
  {
    id: "short-north",
    name: "Short North",
    description: "Short North government offices trust our discreet cleaning services that maintain professional environments for public servants while respecting the confidential nature of government operations in this urban district.",
    faq: [
      {
        question: "Can you service Short North government buildings at night?",
        answer: "Yes, we offer after-hours and overnight cleaning for Short North government facilities to ensure security and minimize disruption to daytime operations."
      },
      {
        question: "How do you ensure accountability in Short North?",
        answer: "We maintain detailed cleaning logs, conduct regular quality inspections, and provide direct communication channels with Short North facility managers."
      }
    ],
    testimonial: {
      text: "Our Short North government office stays immaculate thanks to Red Rock Cleans. Their team understands the importance of discretion and reliability.",
      author: "Facilities Coordinator, Short North Municipal Office"
    }
  },
  {
    id: "victorian-village",
    name: "Victorian Village",
    description: "Victorian Village government facilities rely on our professional cleaning that combines respect for historic architecture with modern security protocols essential for public sector operations and community services.",
    faq: [
      {
        question: "Do you work with Victorian Village community centers?",
        answer: "Yes, we clean government-operated community centers and public facilities throughout Victorian Village, including administrative offices and public meeting spaces."
      },
      {
        question: "What security measures do you follow in Victorian Village?",
        answer: "Our Victorian Village team follows strict security protocols including sign-in/out procedures, restricted area access controls, and confidentiality agreements."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Victorian Village community center with professionalism and attention to security. We're very pleased with their service.",
      author: "Director, Victorian Village Community Services"
    }
  },
  {
    id: "hillard",
    name: "Hilliard",
    description: "Hilliard's expanding government infrastructure trusts our reliable cleaning services that scale with municipal growth while maintaining the consistent security and quality standards essential for public facilities.",
    faq: [
      {
        question: "Can you handle large Hilliard municipal complexes?",
        answer: "Yes, we have experience with large government facilities in Hilliard and can deploy appropriate staffing to handle extensive municipal buildings efficiently."
      },
      {
        question: "Do you provide emergency cleaning for Hilliard facilities?",
        answer: "Yes, we offer 24/7 emergency response for urgent cleaning needs at Hilliard government facilities, including weather events or unexpected situations."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been instrumental in maintaining our Hilliard municipal complex. Their professionalism and security awareness are outstanding.",
      author: "Facilities Director, Hilliard City Services"
    }
  },
  {
    id: "westerville",
    name: "Westerville",
    description: "Westerville government buildings benefit from our comprehensive cleaning services that support public administration with secure, thorough cleaning that maintains the professional standards expected by citizens and government officials.",
    faq: [
      {
        question: "Do you serve Westerville's city hall and police facilities?",
        answer: "Yes, we provide specialized cleaning for various Westerville government facilities including administrative buildings, public safety facilities, and community centers."
      },
      {
        question: "How do you coordinate with Westerville facility managers?",
        answer: "We maintain regular communication with Westerville managers, provide detailed reports, and adjust our services based on facility needs and special events."
      }
    ],
    testimonial: {
      text: "Our Westerville government facility has been beautifully maintained by Red Rock Cleans. Their understanding of government requirements sets them apart.",
      author: "City Manager, Westerville Municipal Building"
    }
  }
];

const GovernmentFacilityCleaningColumbusOhioPage = () => {
  const [openAccordion, setOpenAccordion] = useState<string>("");
  const [countersVisible, setCountersVisible] = useState(false);
  const [securityStaff, setSecurityStaff] = useState(0);
  const [publicFacilities, setPublicFacilities] = useState(0);
  const [yearsService, setYearsService] = useState(0);

  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash) {
      setOpenAccordion(hash);
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setCountersVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const counterSection = document.getElementById('counters-section');
    if (counterSection) {
      observer.observe(counterSection);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (countersVisible) {
      const duration = 2000;
      const steps = 60;
      const interval = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        
        setSecurityStaff(Math.floor(progress * 50));
        setPublicFacilities(Math.floor(progress * 75));
        setYearsService(Math.floor(progress * 15));

        if (step >= steps) {
          clearInterval(timer);
          setSecurityStaff(50);
          setPublicFacilities(75);
          setYearsService(15);
        }
      }, interval);

      return () => clearInterval(timer);
    }
  }, [countersVisible]);

  const handleAccordionChange = (value: string) => {
    setOpenAccordion(value);
    window.location.hash = value;
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Government Facility Cleaning Columbus | Red Rock Cleans</title>
        <meta name="description" content="Government facility cleaning in Columbus Ohio. Secure, compliant cleaning for municipal buildings. Professional service!" />
        <meta name="keywords" content="government facility cleaning Columbus Ohio, government cleaning near me, municipal building cleaning Columbus Ohio, federal office cleaning Dublin OH, courthouse cleaning Columbus, secure facility cleaning Columbus, GSA schedule cleaning Columbus Ohio, confidential cleaning services, discreet government cleaners Columbus, government cleaning contracts Columbus, cost of municipal cleaning Columbus, what is government facility cleaning Columbus, hire secure cleaners in Columbus" />
        <link rel="canonical" href="https://redrockcleans.com/columbus-ohio/government-facility-cleaning" />
      </Helmet>
      
      <ColumbusNavigation loginUrl="https://customer-portal.maidily.com/red-rock-cleans-columbus-ohio/sign-in" bookingUrl="/commercial-quote?location=columbus-ohio" />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/src/assets/hero-commercial.jpg" 
              alt="Professional government facility cleaning service in Columbus Ohio"
              className="w-full h-full object-cover scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                Secure & Compliant Government Facility Cleaning in Columbus, Ohio
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Security, discretion, and reliability are paramount when cleaning sensitive government and municipal buildings in Ohio's capital. Our professional cleaning team understands the unique requirements of public sector facilities, providing secure, compliant services that protect confidential information while maintaining the professional standards citizens expect. Trust Red Rock Cleans for government facility cleaning that meets the highest standards of security and service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="h-14 text-lg px-8" asChild>
                  <a href="tel:+13802353135">
                    <Phone className="w-5 h-5 mr-2" />
                    Call (380) 235-3135
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="h-14 text-lg px-8" asChild>
                  <Link to="/commercial-quote?location=columbus-ohio">
                    <Home className="w-5 h-5 mr-2" />
                    Get Free Quote
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* A Higher Standard of Trust Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                A Higher Standard of Trust for Public Facilities
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Security-Cleared Personnel</h3>
                      <p className="text-muted-foreground">
                        All team members assigned to Columbus government contracts undergo rigorous background checks and security clearance processes. We understand that public facilities require trustworthy personnel who can work in sensitive environments while maintaining the highest standards of integrity and professionalism.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Lock className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Strict Confidentiality Protocols</h3>
                      <p className="text-muted-foreground">
                        We're committed to absolute discretion when cleaning Columbus government facilities. Our team never accesses confidential documents, computers, or restricted areas without authorization. We maintain comprehensive non-disclosure agreements and follow chain-of-custody procedures to protect sensitive information.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Compliance & Detailed Reporting</h3>
                      <p className="text-muted-foreground">
                        We adhere to all local, state, and federal cleaning standards for Columbus government facilities. Our comprehensive documentation includes cleaning logs, quality assurance reports, and compliance certificates required for municipal audits, ensuring transparency and accountability in every service we provide.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Government Facility Cleaning Checklist Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Our Government Facility Cleaning Checklist
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Building className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">Public Lobbies & Offices</h3>
                      <p className="text-muted-foreground">
                        We maintain professional public images for Columbus government buildings with thorough cleaning of lobbies, reception areas, and administrative offices. Our services ensure that citizens and visitors encounter clean, welcoming environments that reflect the dignity of public service.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Gavel className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">Secure Areas & Courtrooms</h3>
                      <p className="text-muted-foreground">
                        Our Columbus team follows strict protocols when cleaning sensitive or restricted areas including courtrooms, evidence rooms, and secure government offices. We coordinate with facility security, respect access limitations, and maintain confidentiality throughout the cleaning process.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Users className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">Common Areas & Restrooms</h3>
                      <p className="text-muted-foreground">
                        High-traffic sanitation is essential in Columbus government facilities that serve the public daily. We provide thorough cleaning and disinfection of common areas, restrooms, break rooms, and public spaces, ensuring health and hygiene standards that protect both staff and citizens.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Our Commitment to Serving the Columbus Community Section */}
        <section id="counters-section" className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Our Commitment to Serving the Columbus Community
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <ShieldCheck className="h-16 w-16 mx-auto mb-4 opacity-90" />
                  <div className="text-5xl font-bold mb-2">{securityStaff}+</div>
                  <h3 className="text-xl font-semibold opacity-90">Security Cleared Staff</h3>
                </div>
                
                <div className="text-center">
                  <Building2 className="h-16 w-16 mx-auto mb-4 opacity-90" />
                  <div className="text-5xl font-bold mb-2">{publicFacilities}+</div>
                  <h3 className="text-xl font-semibold opacity-90">Public Facilities Maintained</h3>
                </div>
                
                <div className="text-center">
                  <CheckCircle2 className="h-16 w-16 mx-auto mb-4 opacity-90" />
                  <div className="text-5xl font-bold mb-2">{yearsService}+</div>
                  <h3 className="text-xl font-semibold opacity-90">Years of Compliant Service</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Areas We Serve Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Areas We Serve in Columbus, Ohio
              </h2>
              
              <Accordion type="single" value={openAccordion} onValueChange={handleAccordionChange} className="space-y-4">
                {cities.map((city) => (
                  <AccordionItem key={city.id} value={city.id} id={city.id} className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <div>
                        <h3 className="text-lg font-semibold">{city.name}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{city.description}</p>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold mb-2">Government Facility Cleaning in {city.name}</h4>
                          <p className="text-muted-foreground">
                            {city.description}
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-2">Frequently Asked Questions</h4>
                          <div className="space-y-2">
                            {city.faq.map((faq, index) => (
                              <div key={index}>
                                <p className="font-medium text-sm">{faq.question}</p>
                                <p className="text-muted-foreground text-sm">{faq.answer}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="bg-primary/5 p-4 rounded-lg">
                          <p className="italic text-sm mb-2">"{city.testimonial.text}"</p>
                          <p className="text-sm font-medium">- {city.testimonial.author}</p>
                        </div>
                        
                        <Button asChild className="w-full">
                          <Link to="/commercial-quote?location=columbus-ohio">
                            Contact Us for {city.name} Government Cleaning
                          </Link>
                        </Button>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Other Services Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">
                Other Specialized Commercial Cleaning in Columbus
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <Briefcase className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Medical Office Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Specialized cleaning for medical facilities and healthcare offices
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/columbus-ohio/medical-office-cleaning">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <Database className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Data Center Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      ISO-compliant cleaning for critical data center environments
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/columbus-ohio/data-center-cleaning">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <GraduationCap className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">School Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Professional cleaning services for educational facilities
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/columbus-ohio/school-cleaning">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Frequently Asked Questions
              </h2>
              <Accordion type="single" className="space-y-4">
                <AccordionItem value="what-included" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">What is included in government facility cleaning in Columbus Ohio?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Our comprehensive government facility cleaning in Columbus includes public area cleaning, office sanitization, restroom maintenance, floor care, window washing, secure area protocols, confidential waste handling, and detailed documentation. We provide services tailored to municipal buildings, courthouses, federal offices, and other public facilities with strict adherence to security and compliance requirements.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="security" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">How do you ensure security for Columbus government facilities?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      All team members undergo comprehensive background checks and security clearances for Columbus government work. We maintain strict confidentiality protocols, follow chain-of-custody procedures, respect access limitations, use secure communication channels, and never access confidential materials without authorization. Our staff signs non-disclosure agreements and receives ongoing training in security awareness and government facility protocols.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="contracts" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">How do government cleaning contracts work in Columbus Ohio?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      We work with Columbus government agencies to develop customized cleaning contracts that meet specific facility requirements, budgets, and security protocols. Our contracts include detailed service specifications, quality assurance measures, compliance documentation, and flexible terms. We can work with existing procurement processes and provide all necessary insurance, bonding, and certification documentation required for municipal contracts.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="compliance" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">What compliance standards do you meet for Columbus government facilities?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      We meet all local, state, and federal compliance standards for government facility cleaning in Columbus including OSHA safety regulations, EPA environmental guidelines, and facility-specific security requirements. We maintain comprehensive insurance, provide detailed documentation for audits, follow proper hazardous waste procedures, and can adapt to specialized requirements such as GSA schedules or agency-specific protocols.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Partner for Secure Government Facility Cleaning?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join Columbus government agencies that trust Red Rock Cleans for professional, compliant facility services
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
              <Link to="/commercial-quote?location=columbus-ohio">Request Your Facility Assessment Today</Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default GovernmentFacilityCleaningColumbusOhioPage;


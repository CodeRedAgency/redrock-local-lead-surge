import { ColumbusNavigation } from "@/components/ColumbusNavigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Shield, Microscope, Award, Sofa, Stethoscope, Droplets, Hospital, BadgeCheck, ShieldX, Database, Building2, GraduationCap, Phone, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";

const cities = [
  {
    id: "dublin",
    name: "Dublin",
    description: "Dublin's healthcare providers trust our HIPAA and OSHA compliant medical office cleaning to maintain pristine environments that protect patient safety and support quality care in this growing medical community.",
    faq: [
      {
        question: "Are your Dublin cleaners trained in medical facility protocols?",
        answer: "Yes, all team members servicing Dublin healthcare facilities receive specialized training in bloodborne pathogens, HIPAA compliance, and medical-grade disinfection protocols."
      },
      {
        question: "What disinfectants do you use in Dublin medical offices?",
        answer: "We use EPA-registered, hospital-grade disinfectants that are effective against a broad spectrum of pathogens while being safe for Dublin healthcare environments."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Dublin medical practice with the highest standards of cleanliness and compliance. Our patients notice the difference.",
      author: "Dr. Smith, Dublin Medical Center"
    }
  },
  {
    id: "upper-arlington",
    name: "Upper Arlington",
    description: "Upper Arlington medical facilities rely on our specialized cleaning services that combine infection control expertise with meticulous attention to detail, creating safe healthcare environments for patients and staff.",
    faq: [
      {
        question: "Can you work around Upper Arlington clinic hours?",
        answer: "Yes, we offer flexible scheduling for Upper Arlington medical offices, including after-hours and weekend cleaning to avoid disrupting patient care."
      },
      {
        question: "Do you clean dental offices in Upper Arlington?",
        answer: "Yes, we provide specialized cleaning for dental practices, understanding the unique requirements of dental operatories and sterilization areas in Upper Arlington."
      }
    ],
    testimonial: {
      text: "Our Upper Arlington dental practice has been beautifully maintained by Red Rock Cleans. Their understanding of healthcare cleaning is exceptional.",
      author: "Dr. Johnson, Upper Arlington Dental Care"
    }
  },
  {
    id: "powell",
    name: "Powell",
    description: "Powell healthcare facilities depend on our professional medical cleaning that meets regulatory standards while creating welcoming, hygienic environments that patients and families trust.",
    faq: [
      {
        question: "What is terminal cleaning in Powell medical offices?",
        answer: "Terminal cleaning is our intensive disinfection process used between patients in exam rooms and procedure areas, eliminating pathogens and preventing cross-contamination in Powell facilities."
      },
      {
        question: "How do you ensure quality in Powell medical facilities?",
        answer: "We use detailed medical cleaning checklists, conduct quality inspections, and maintain detailed logs to ensure consistent, compliant service in Powell healthcare offices."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans delivers the medical-grade cleaning our Powell clinic requires. Professional service that understands healthcare standards.",
      author: "Practice Manager, Powell Family Medicine"
    }
  },
  {
    id: "lewis-center",
    name: "Lewis Center",
    description: "Lewis Center medical practices trust our comprehensive cleaning services that protect patient health through advanced infection control and thorough sanitization of all healthcare touchpoints.",
    faq: [
      {
        question: "Are you insured for Lewis Center medical cleaning?",
        answer: "Yes, we carry comprehensive insurance including professional liability specifically for healthcare facility cleaning in Lewis Center."
      },
      {
        question: "Can you provide cleaning documentation for Lewis Center audits?",
        answer: "Absolutely. We maintain detailed cleaning logs, disinfectant usage records, and compliance documentation for your Lewis Center facility's regulatory requirements."
      }
    ],
    testimonial: {
      text: "Our Lewis Center medical office has never been cleaner. Red Rock Cleans brings healthcare cleaning expertise that gives us confidence.",
      author: "Office Manager, Lewis Center Health Center"
    }
  },
  {
    id: "worthington",
    name: "Worthington",
    description: "Worthington's medical community benefits from our specialized cleaning services that combine regulatory compliance with the thorough disinfection essential for protecting vulnerable patient populations.",
    faq: [
      {
        question: "Do you clean waiting rooms in Worthington medical offices?",
        answer: "Yes, we thoroughly disinfect all high-touch surfaces in Worthington waiting areas including chairs, magazines, doorknobs, and check-in areas to protect patients."
      },
      {
        question: "How do you prevent cross-contamination in Worthington facilities?",
        answer: "We use color-coded cleaning systems, separate equipment for different areas, and strict protocols to prevent pathogen transfer in Worthington medical offices."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans understands the importance of infection control in our Worthington practice. Their medical cleaning expertise is evident in every service.",
      author: "Dr. Williams, Worthington Internal Medicine"
    }
  },
  {
    id: "new-albany",
    name: "New Albany",
    description: "New Albany's upscale medical facilities rely on our premium cleaning services that match the sophistication of their practices with meticulous attention to healthcare cleaning standards and patient safety.",
    faq: [
      {
        question: "Do you clean specialty medical practices in New Albany?",
        answer: "Yes, we service general practices, dental offices, dermatology, pediatrics, and specialty medical facilities throughout New Albany with customized cleaning protocols."
      },
      {
        question: "What makes your New Albany medical cleaning different?",
        answer: "We combine healthcare cleaning expertise with understanding of patient experience, ensuring your New Albany facility is both medically clean and welcoming."
      }
    ],
    testimonial: {
      text: "Our New Albany medical spa maintains the highest cleanliness standards thanks to Red Rock Cleans. Professional service that understands healthcare environments.",
      author: "Director, New Albany Medical Aesthetics"
    }
  },
  {
    id: "bexley",
    name: "Bexley",
    description: "Bexley medical practices depend on our reliable cleaning services that maintain sterile healthcare environments through systematic disinfection and adherence to all medical facility cleaning regulations.",
    faq: [
      {
        question: "Can you clean exam rooms in Bexley medical offices?",
        answer: "Yes, we provide terminal cleaning of exam rooms between patients, using hospital-grade disinfectants to eliminate pathogens and ensure Bexley patient safety."
      },
      {
        question: "How do you handle HIPAA compliance in Bexley?",
        answer: "Our Bexley team never accesses patient information, respects privacy protocols, and maintains confidentiality agreements in compliance with HIPAA regulations."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our Bexley medical practice with professionalism and attention to healthcare cleaning standards. Highly recommended!",
      author: "Dr. Anderson, Bexley Family Practice"
    }
  },
  {
    id: "german-village",
    name: "German Village",
    description: "German Village healthcare facilities benefit from our adaptable medical cleaning services that maintain modern healthcare standards in unique historic settings while ensuring patient safety and regulatory compliance.",
    faq: [
      {
        question: "Can you clean smaller practices in German Village?",
        answer: "Yes, we serve medical offices of all sizes in German Village, from solo practices to multi-provider clinics, with professional healthcare cleaning."
      },
      {
        question: "Do you understand German Village's building challenges?",
        answer: "Yes, we adapt our medical cleaning methods for German Village's historic buildings while maintaining the same rigorous healthcare standards."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans successfully maintains our German Village medical office in this historic building. They understand both healthcare and unique spaces.",
      author: "Practice Administrator, German Village Medical Associates"
    }
  },
  {
    id: "short-north",
    name: "Short North",
    description: "Short North's diverse medical community trusts our professional cleaning services that maintain hygienic healthcare environments essential for urban practices serving varied patient populations.",
    faq: [
      {
        question: "Do you serve Short North wellness centers?",
        answer: "Yes, we clean medical offices, wellness centers, therapy practices, and integrated health facilities throughout Short North with appropriate protocols."
      },
      {
        question: "Can you accommodate Short North's busy schedules?",
        answer: "Absolutely. We offer flexible cleaning times including early morning, evening, and weekend service for busy Short North medical practices."
      }
    ],
    testimonial: {
      text: "Our Short North medical office stays impeccably clean thanks to Red Rock Cleans. They understand urban healthcare facility needs.",
      author: "Office Manager, Short North Health Collective"
    }
  },
  {
    id: "victorian-village",
    name: "Victorian Village",
    description: "Victorian Village medical practices rely on our professional cleaning that maintains healthcare standards while respecting the unique character of medical offices in this historic neighborhood.",
    faq: [
      {
        question: "What areas do you clean in Victorian Village medical offices?",
        answer: "We clean waiting rooms, exam rooms, procedure areas, restrooms, staff areas, and all common spaces in Victorian Village healthcare facilities."
      },
      {
        question: "How do you ensure consistent quality in Victorian Village?",
        answer: "We use the same trained team, detailed checklists, and regular quality assurance to ensure consistent results at your Victorian Village practice."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Victorian Village practice with professionalism and healthcare cleaning expertise. Excellent service.",
      author: "Dr. Martinez, Victorian Village Pediatrics"
    }
  },
  {
    id: "hillard",
    name: "Hilliard",
    description: "Hilliard's expanding medical community trusts our comprehensive cleaning services that support quality healthcare through meticulous disinfection and adherence to all medical facility regulations.",
    faq: [
      {
        question: "Do you serve Hilliard's medical complexes?",
        answer: "Yes, we regularly service medical offices in Hilliard's healthcare complexes and professional buildings with consistent, professional cleaning."
      },
      {
        question: "What training does your Hilliard team receive?",
        answer: "Our Hilliard medical cleaning team receives training in bloodborne pathogens, OSHA regulations, HIPAA compliance, and healthcare-specific disinfection protocols."
      }
    ],
    testimonial: {
      text: "Our Hilliard medical practice has been excellently maintained by Red Rock Cleans. Their healthcare cleaning expertise sets them apart.",
      author: "Practice Manager, Hilliard Women's Health"
    }
  },
  {
    id: "westerville",
    name: "Westerville",
    description: "Westerville medical facilities trust our specialized cleaning services to maintain safe, welcoming healthcare environments through professional disinfection and comprehensive facility maintenance.",
    faq: [
      {
        question: "Can you customize cleaning for Westerville practices?",
        answer: "Yes, we create customized cleaning plans based on your Westerville practice's specific needs, patient volume, and specialty requirements."
      },
      {
        question: "How do you coordinate with Westerville medical staff?",
        answer: "We maintain open communication with Westerville practice managers and adapt our schedules to minimize disruption to patient care."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provides the medical-grade cleaning our Westerville practice needs. Professional, reliable, and healthcare-focused service.",
      author: "Dr. Thompson, Westerville Medical Group"
    }
  }
];

const MedicalOfficeCleaningColumbusOhioPage = () => {
  const [openAccordion, setOpenAccordion] = useState<string>("");
  const [countersVisible, setCountersVisible] = useState(false);
  const [healthcareFacilities, setHealthcareFacilities] = useState(0);
  const [certifiedTechs, setCertifiedTechs] = useState(0);
  const [pathogenReduction, setPathogenReduction] = useState(0);

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
        
        setHealthcareFacilities(Math.floor(progress * 150));
        setCertifiedTechs(Math.floor(progress * 40));
        setPathogenReduction(Math.floor(progress * 99.9 * 10) / 10);

        if (step >= steps) {
          clearInterval(timer);
          setHealthcareFacilities(150);
          setCertifiedTechs(40);
          setPathogenReduction(99.9);
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
        <title>Medical Office Cleaning in Columbus Ohio | Red Rock Cleans</title>
        <meta name="description" content="Medical office cleaning in Columbus Ohio. HIPAA-compliant service for Columbus healthcare facilities. Book your service today!" />
        <meta name="keywords" content="medical office cleaning Columbus Ohio, medical office cleaning near me, clinic cleaning Columbus Ohio, dental office cleaning Dublin OH, healthcare cleaning Upper Arlington, best medical cleaners Columbus, HIPAA compliant cleaning Columbus, OSHA standards cleaning Columbus Ohio, exam room sanitation Dublin OH, terminal cleaning Columbus, medical office cleaning cost Columbus, clinic cleaning prices Columbus Ohio, what is terminal cleaning Columbus, hire medical cleaners in Columbus Ohio" />
        <link rel="canonical" href="https://redrockcleans.com/columbus-ohio/medical-office-cleaning" />
      </Helmet>
      
      <ColumbusNavigation loginUrl="https://customer-portal.maidily.com/red-rock-cleans-columbus-ohio/sign-in" bookingUrl="/commercial-quote?location=columbus-ohio" />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/src/assets/hero-commercial.jpg" 
              alt="Professional medical office cleaning service in Columbus Ohio"
              className="w-full h-full object-cover scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                HIPAA & OSHA Compliant Medical Office Cleaning in Columbus, Ohio
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                For healthcare providers in the Columbus area, patient safety and trust begin with a visibly clean and thoroughly disinfected environment. Our specialized medical office cleaning services protect your patients, staff, and reputation through advanced infection control and meticulous attention to healthcare cleaning standards. Trust Red Rock Cleans to maintain the pristine, compliant healthcare environment your practice deserves.
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

        {/* A Higher Standard of Clean Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                A Higher Standard of Clean for Columbus Healthcare
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">HIPAA & OSHA Compliance</h3>
                      <p className="text-muted-foreground">
                        Our commitment to all regulatory standards for Columbus medical facilities ensures your practice meets healthcare cleaning requirements. We follow strict protocols, maintain confidentiality, provide detailed documentation, and ensure every cleaning meets HIPAA privacy rules and OSHA safety regulations that protect your patients and staff.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Microscope className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Advanced Infection Control</h3>
                      <p className="text-muted-foreground">
                        Our use of EPA-approved, hospital-grade disinfectants combats pathogens in your Columbus healthcare facility. We employ terminal cleaning protocols, proper dwell times, and proven methods that eliminate bacteria, viruses, and fungi, creating the safest possible environment for your vulnerable patient populations.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Trained & Certified Staff</h3>
                      <p className="text-muted-foreground">
                        Our Columbus teams receive specialized training in bloodborne pathogens and cross-contamination prevention. Every team member understands healthcare cleaning protocols, infection control procedures, and the unique requirements of medical facilities, ensuring professional service that protects your practice and patients.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Our Medical-Grade Cleaning Checklist Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Our Medical-Grade Cleaning Checklist
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Sofa className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">Waiting Rooms & Reception</h3>
                      <p className="text-muted-foreground">
                        Disinfecting high-touch surfaces to protect patients and staff in your Columbus medical office. We thoroughly sanitize chairs, magazines, door handles, check-in counters, and all waiting area surfaces to prevent pathogen transmission and create a welcoming first impression for your patients.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Stethoscope className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">Exam & Procedure Rooms</h3>
                      <p className="text-muted-foreground">
                        Terminal cleaning protocols between patients in your Columbus facility. We use hospital-grade disinfectants on exam tables, equipment, counters, and all surfaces, ensuring proper dwell time and complete pathogen elimination to protect every patient who enters your treatment areas.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Droplets className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">Restrooms & Common Areas</h3>
                      <p className="text-muted-foreground">
                        Intensive sanitation to prevent germ spread throughout your Columbus medical practice. We thoroughly disinfect toilets, sinks, fixtures, and all surfaces in restrooms and common areas, using specialized healthcare cleaning methods that eliminate pathogens and maintain hygienic conditions.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Our Proven Commitment Section */}
        <section id="counters-section" className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Our Proven Commitment to Health & Safety
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <Hospital className="h-16 w-16 mx-auto mb-4 opacity-90" />
                  <div className="text-5xl font-bold mb-2">{healthcareFacilities}+</div>
                  <h3 className="text-xl font-semibold opacity-90">Healthcare Facilities Served</h3>
                </div>
                
                <div className="text-center">
                  <BadgeCheck className="h-16 w-16 mx-auto mb-4 opacity-90" />
                  <div className="text-5xl font-bold mb-2">{certifiedTechs}+</div>
                  <h3 className="text-xl font-semibold opacity-90">Certified Technicians on Staff</h3>
                </div>
                
                <div className="text-center">
                  <ShieldX className="h-16 w-16 mx-auto mb-4 opacity-90" />
                  <div className="text-5xl font-bold mb-2">{pathogenReduction}%</div>
                  <h3 className="text-xl font-semibold opacity-90">Pathogen Reduction</h3>
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
                          <h4 className="font-semibold mb-2">Medical Office Cleaning in {city.name}</h4>
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
                            Schedule {city.name} Medical Cleaning
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
                    <Building2 className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Government Facility Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Secure cleaning for government buildings and public facilities
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/columbus-ohio/government-facility-cleaning">Learn More</Link>
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
                    <h3 className="text-lg font-semibold">What is included in medical office cleaning in Columbus Ohio?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Our comprehensive medical office cleaning in Columbus includes waiting room disinfection, exam room terminal cleaning, restroom sanitization, floor care, window cleaning, high-touch surface disinfection, medical waste handling, and HVAC vent cleaning. We use hospital-grade disinfectants and follow strict protocols to ensure your healthcare facility meets all regulatory standards and protects patient health.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="cost" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">How much does medical office cleaning cost in Columbus Ohio?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Medical office cleaning costs in Columbus vary based on practice size, patient volume, cleaning frequency, and specialty requirements. Most medical offices invest between $500-$2,000 per month for professional cleaning services. We provide free consultations and customized quotes based on your Columbus practice's specific needs, ensuring competitive pricing for the specialized healthcare cleaning your facility requires.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="terminal" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">What is terminal cleaning in Columbus medical offices?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Terminal cleaning is our intensive disinfection process performed in exam and procedure rooms between patients at your Columbus medical facility. It involves using hospital-grade disinfectants with proper dwell time on all surfaces including exam tables, counters, equipment, and touchpoints to eliminate pathogens and prevent cross-contamination. This critical process protects patient safety and meets healthcare cleaning standards.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="compliance" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">Are you HIPAA and OSHA compliant for Columbus medical facilities?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Yes, all our Columbus medical cleaning services meet HIPAA and OSHA requirements. Our team members sign confidentiality agreements, never access patient information, follow proper bloodborne pathogen protocols, use appropriate PPE, and maintain detailed cleaning documentation. We provide the compliance support your Columbus medical practice needs for regulatory audits and patient safety standards.
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
              Ready to Protect Your Patients with Professional Medical Cleaning?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join Columbus healthcare providers that trust Red Rock Cleans for HIPAA and OSHA compliant cleaning
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
              <Link to="/commercial-quote?location=columbus-ohio">Schedule Your Medical Office Cleaning Today</Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default MedicalOfficeCleaningColumbusOhioPage;


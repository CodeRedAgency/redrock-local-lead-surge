import { DallasNavigation } from "@/components/DallasNavigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Shield, Microscope, Award, Armchair, Stethoscope, Droplets, Hospital, BadgeCheck, ShieldAlert, Cpu, Building2, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";

const neighborhoods = [
  {
    id: "university-park",
    name: "University Park",
    description: "Keep your University Park medical office safe, compliant, and pristine with our specialized healthcare cleaning services. We understand the critical importance of infection control and patient safety in this distinguished Dallas neighborhood's medical practices.",
    faq: [
      {
        question: "Are your cleaners HIPAA trained for University Park medical facilities?",
        answer: "Yes, all our team members are trained in HIPAA compliance, understand patient privacy requirements, and follow strict protocols when cleaning University Park healthcare facilities."
      },
      {
        question: "Can you work after hours in University Park medical offices?",
        answer: "Absolutely. We schedule our cleaning services during evenings or weekends to avoid disrupting patient care in University Park medical practices."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our University Park clinic with exceptional attention to infection control. Our patients notice the difference.",
      author: "Dr. Sarah M., University Park Family Medicine"
    }
  },
  {
    id: "highland-park",
    name: "Highland Park",
    description: "Professional medical office cleaning services for Highland Park healthcare facilities that demand the highest standards of hygiene and compliance. Our specialized protocols ensure your practice maintains patient trust and regulatory compliance.",
    faq: [
      {
        question: "What areas of Highland Park medical offices do you clean?",
        answer: "We clean all areas including waiting rooms, exam rooms, procedure rooms, restrooms, offices, and common areas throughout Highland Park medical facilities with terminal cleaning protocols."
      },
      {
        question: "Do you use medical-grade disinfectants in Highland Park?",
        answer: "Yes, we use EPA-approved, hospital-grade disinfectants that are effective against bloodborne pathogens and healthcare-associated infections in Highland Park facilities."
      }
    ],
    testimonial: {
      text: "Our Highland Park dental practice has never been cleaner. Red Rock Cleans understands healthcare sanitation requirements perfectly.",
      author: "Dr. Michael T., Highland Park Dental Associates"
    }
  },
  {
    id: "uptown-dallas",
    name: "Uptown Dallas",
    description: "Keep your Uptown Dallas medical practice operating at peak hygiene with our comprehensive healthcare cleaning services. We specialize in maintaining the clinical standards expected in this competitive urban healthcare market.",
    faq: [
      {
        question: "Do you clean both small and large medical practices in Uptown Dallas?",
        answer: "Yes, we provide medical office cleaning services for healthcare facilities of all sizes in Uptown Dallas, from solo practices to multi-specialty clinics."
      },
      {
        question: "What's included in your Uptown Dallas medical cleaning?",
        answer: "We provide terminal cleaning of exam rooms, waiting room disinfection, restroom sanitation, and high-touch surface cleaning with full OSHA and HIPAA compliance for Uptown Dallas facilities."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Uptown Dallas clinic to the highest medical standards. Their infection control focus is exceptional.",
      author: "Dr. Jennifer L., Uptown Dallas Internal Medicine"
    }
  },
  {
    id: "downtown-dallas",
    name: "Downtown Dallas",
    description: "Downtown Dallas medical facilities trust Red Rock Cleans for consistent, compliant cleaning that maintains patient safety and practice reputation. Our team understands the unique challenges of urban healthcare cleaning.",
    faq: [
      {
        question: "How far in advance should Downtown Dallas medical offices book cleaning?",
        answer: "We recommend booking at least one week in advance for regular cleaning, though we can accommodate urgent disinfection needs for Downtown Dallas healthcare facilities."
      },
      {
        question: "Do you provide cleaning supplies for Downtown Dallas medical offices?",
        answer: "Yes, we bring all medical-grade disinfectants, OSHA-compliant equipment, and safety supplies to every Downtown Dallas medical office appointment."
      }
    ],
    testimonial: {
      text: "As a Downtown Dallas practice manager, I trust Red Rock Cleans for their reliability and strict adherence to healthcare standards. Outstanding service!",
      author: "Amanda K., Practice Manager, Downtown Dallas Orthopedics"
    }
  },
  {
    id: "preston-hollow",
    name: "Preston Hollow",
    description: "Preston Hollow medical facilities enjoy professional, meticulous cleaning with our service that maintains the highest healthcare standards. We deliver premium medical-grade cleaning for this distinguished Dallas area's practices.",
    faq: [
      {
        question: "Do you service specialty medical practices in Preston Hollow?",
        answer: "Yes, we specialize in cleaning all types of medical facilities including surgical centers, specialty clinics, and multi-provider practices in Preston Hollow."
      },
      {
        question: "Can you work around Preston Hollow practice schedules?",
        answer: "Absolutely! We coordinate with your staff to schedule cleaning during closed hours or between patient sessions in Preston Hollow facilities."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Preston Hollow surgery center impeccably. Their terminal cleaning protocols and attention to detail are unmatched.",
      author: "Dr. Robert H., Preston Hollow Surgical Associates"
    }
  },
  {
    id: "plano",
    name: "Plano",
    description: "Plano medical facilities rely on our cleaning services for consistent infection control, compliance, and patient safety. As a major healthcare hub, Plano practices demand the highest standards—we deliver them consistently with certified staff.",
    faq: [
      {
        question: "What makes Red Rock Cleans different for Plano medical offices?",
        answer: "We're locally owned, fully insured, and our team is certified in bloodborne pathogen safety with extensive experience in Plano's diverse healthcare sector."
      },
      {
        question: "Do you offer emergency cleaning for Plano medical facilities?",
        answer: "Yes, we can provide rapid-response cleaning services for contamination events, biohazard cleanup, or urgent disinfection needs in Plano medical offices."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been cleaning our Plano clinic for three years. They understand our infection control requirements and deliver flawlessly.",
      author: "Dr. Lisa P., Plano Women's Health Center"
    }
  },
  {
    id: "frisco",
    name: "Frisco",
    description: "Frisco medical facilities enjoy consistent, professional healthcare cleaning that keeps practices safe and compliant. Our team serves Frisco's growing medical sector with expertise and reliability.",
    faq: [
      {
        question: "How long does medical office cleaning take in Frisco?",
        answer: "Most Frisco medical office cleanings take 2-4 hours depending on facility size, number of exam rooms, and specific disinfection requirements."
      },
      {
        question: "Do you work with Frisco medical practice management?",
        answer: "Yes, we coordinate closely with practice managers and clinical staff to ensure our cleaning meets your specific healthcare standards in Frisco facilities."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our Frisco pediatric practice beautifully. Their terminal cleaning and infection control are outstanding.",
      author: "Dr. Patricia G., Frisco Pediatric Group"
    }
  },
  {
    id: "prosper",
    name: "Prosper",
    description: "Prosper medical facilities trust our cleaning service for consistent patient safety and compliance. We bring medical-grade expertise to this growing Dallas area community's healthcare practices.",
    faq: [
      {
        question: "What cleaning protocols do you use in Prosper medical offices?",
        answer: "We use EPA-approved hospital-grade disinfectants, terminal cleaning protocols, OSHA-compliant procedures, and bloodborne pathogen safety standards for Prosper medical facilities."
      },
      {
        question: "Can you customize cleaning for Prosper medical practices?",
        answer: "Yes, we can customize our medical office cleaning service to focus on specific areas, infection control concerns, or specialty requirements for Prosper healthcare facilities."
      }
    ],
    testimonial: {
      text: "Working in Prosper, I appreciate Red Rock Cleans' expertise and reliability for our medical practice. Excellent healthcare cleaning service.",
      author: "Dr. James W., Prosper Family Care"
    }
  }
];

const MedicalOfficeCleaningDallasPage = () => {
  const [openItem, setOpenItem] = useState<string>("");
  const [countersInView, setCountersInView] = useState(false);

  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash && neighborhoods.some(n => n.id === hash)) {
      setOpenItem(hash);
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (hash && neighborhoods.some(n => n.id === hash)) {
        setOpenItem(hash);
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Counter animation effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setCountersInView(true);
        }
      },
      { threshold: 0.3 }
    );

    const counterSection = document.getElementById('counters-section');
    if (counterSection) {
      observer.observe(counterSection);
    }

    return () => {
      if (counterSection) {
        observer.unobserve(counterSection);
      }
    };
  }, []);

  const Counter = ({ end, label, icon: Icon, suffix = "" }: { end: number; label: string; icon: any; suffix?: string }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!countersInView) return;

      let startTime: number;
      const duration = 2000;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        // For decimal numbers, use one decimal place
        if (end < 10) {
          setCount(Math.floor(progress * end * 10) / 10);
        } else {
          setCount(Math.floor(progress * end));
        }

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }, [countersInView, end]);

    return (
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
          <Icon className="w-8 h-8" />
        </div>
        <div className="text-4xl md:text-5xl font-bold mb-2">
          {end < 10 ? count.toFixed(1) : count}{suffix}
        </div>
        <p className="text-muted-foreground">{label}</p>
      </div>
    );
  };

  return (
    <>
      <Helmet>
        <title>Medical Office Cleaning Dallas | Red Rock Cleans</title>
        <meta name="description" content="Specialized medical office cleaning in Dallas. Red Rock Cleans provides HIPAA and OSHA compliant cleaning for clinics and healthcare facilities in Plano, Frisco, and beyond." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <DallasNavigation />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative py-24 md:py-32 overflow-hidden">
            <div className="absolute inset-0">
              <img 
                src="/src/assets/hero-commercial.jpg" 
                alt="Professional medical office cleaning service in Dallas"
                className="w-full h-full object-cover scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                  HIPAA & OSHA Compliant Medical Office Cleaning in Dallas
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                  For healthcare providers in the Dallas metroplex, patient safety and trust begin with a visibly clean and thoroughly disinfected environment. Our specialized medical cleaning services ensure your practice meets all regulatory standards while providing the infection control your patients deserve.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="h-14 text-lg px-8" asChild>
                    <Link to="/book-now-dallas">
                      <Hospital className="w-5 h-5 mr-2" />
                      Schedule Medical Cleaning
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="h-14 text-lg px-8" asChild>
                    <Link to="/contact">
                      <Shield className="w-5 h-5 mr-2" />
                      Get Free Assessment
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* A Higher Standard of Clean for Dallas Healthcare */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  A Higher Standard of Clean for Dallas Healthcare
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Shield className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">HIPAA & OSHA Compliance</h3>
                      <p className="text-muted-foreground text-sm">
                        Our commitment to all regulatory standards for Dallas medical facilities ensures your practice stays compliant. We understand HIPAA privacy requirements and OSHA safety protocols, protecting both your patients and your reputation.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Fully Compliant →
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Microscope className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Advanced Infection Control</h3>
                      <p className="text-muted-foreground text-sm">
                        Our use of EPA-approved, hospital-grade disinfectants combats pathogens including MRSA, C. diff, and other healthcare-associated infections. We follow CDC guidelines for environmental infection control in your Dallas practice.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Medical-Grade →
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Award className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Trained & Certified Staff</h3>
                      <p className="text-muted-foreground text-sm">
                        Specialized training in bloodborne pathogens and cross-contamination prevention for our Dallas teams ensures safe, effective cleaning. All staff are background-checked, insured, and certified in healthcare cleaning protocols.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Expert Team →
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Our Medical-Grade Cleaning Checklist */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  Our Medical-Grade Cleaning Checklist
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Armchair className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Waiting Rooms & Reception</h3>
                      <p className="text-muted-foreground text-sm">
                        Disinfecting high-touch surfaces including door handles, chairs, magazines, check-in counters, and payment terminals protects patients and staff. First impressions matter—we ensure your Dallas waiting room is pristine and welcoming.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        First Contact →
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Stethoscope className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Exam & Procedure Rooms</h3>
                      <p className="text-muted-foreground text-sm">
                        Terminal cleaning protocols between patients ensure each exam room is disinfected and safe. We clean examination tables, sinks, counters, medical equipment surfaces, and all touchpoints in your Dallas facility.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Clinical Clean →
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Droplets className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Restrooms & Common Areas</h3>
                      <p className="text-muted-foreground text-sm">
                        Intensive sanitation prevents germ spread in restrooms, break rooms, and hallways. Our Dallas team uses hospital-grade disinfectants to eliminate bacteria, viruses, and other pathogens from all surfaces.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Total Sanitation →
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Our Proven Commitment to Health & Safety */}
          <section id="counters-section" className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  Our Proven Commitment to Health & Safety
                </h2>
                <div className="grid md:grid-cols-3 gap-12">
                  <Counter end={85} label="Healthcare Facilities Served" icon={Hospital} suffix="+" />
                  <Counter end={20} label="Certified Technicians on Staff" icon={BadgeCheck} />
                  <Counter end={99.9} label="99.9% Pathogen Reduction" icon={ShieldAlert} suffix="%" />
                </div>
              </div>
            </div>
          </section>

          {/* Areas We Serve in Dallas */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  Areas We Serve in Dallas
                </h2>
                <Accordion type="single" collapsible value={openItem} onValueChange={setOpenItem} className="space-y-4">
                  {neighborhoods.map((neighborhood) => (
                    <AccordionItem 
                      key={neighborhood.id} 
                      value={neighborhood.id} 
                      id={neighborhood.id}
                      className="border rounded-lg px-6"
                    >
                      <AccordionTrigger className="text-left hover:no-underline">
                        <div>
                          <h3 className="text-lg font-semibold">{neighborhood.name}</h3>
                          <p className="text-sm text-muted-foreground font-normal">
                            Professional medical office cleaning services
                          </p>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pt-4">
                        <div className="space-y-6">
                          <p className="text-muted-foreground leading-relaxed">
                            {neighborhood.description}
                          </p>
                          
                          <div className="space-y-4">
                            <h4 className="font-semibold">Local FAQ</h4>
                            {neighborhood.faq.map((item, index) => (
                              <div key={index} className="border-l-2 border-primary/20 pl-4">
                                <h5 className="font-medium text-sm">{item.question}</h5>
                                <p className="text-sm text-muted-foreground mt-1">{item.answer}</p>
                              </div>
                            ))}
                          </div>

                          <blockquote className="border-l-4 border-primary/30 pl-4 italic text-muted-foreground">
                            "{neighborhood.testimonial.text}"
                            <footer className="mt-2 text-sm font-medium not-italic">
                              — {neighborhood.testimonial.author}
                            </footer>
                          </blockquote>

                          <Button asChild className="w-full">
                            <Link to="/book-now-dallas">
                              Schedule Your {neighborhood.name} Medical Office Cleaning
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

          {/* Other Specialized Commercial Cleaning in Dallas */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  Other Specialized Commercial Cleaning in Dallas
                </h2>
                <p className="text-xl text-muted-foreground mb-12">
                  Beyond medical office cleaning, we offer specialized commercial cleaning services for all your Dallas facility needs.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <Link to="/dallas/data-center-cleaning/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors mb-4">
                        <Cpu className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Data Center Cleaning Services
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        ISO-compliant cleaning for critical infrastructure and server rooms in Dallas.
                      </p>
                    </div>
                  </Link>
                  <Link to="/dallas/government-facility-cleaning/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors mb-4">
                        <Building2 className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Government Facility Cleaning Services
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Secure, compliant cleaning for government buildings and facilities in Dallas.
                      </p>
                    </div>
                  </Link>
                  <Link to="/dallas/school-cleaning/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors mb-4">
                        <GraduationCap className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        School Cleaning Services
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Professional cleaning for educational facilities ensuring safe learning environments.
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  Frequently Asked Questions
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem value="item-1" className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <h3 className="text-lg font-semibold">What is terminal cleaning and when is it required?</h3>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <p className="text-muted-foreground">
                        Terminal cleaning is a thorough disinfection process performed in exam and procedure rooms between patients, especially after infectious disease cases or contamination events. Our Dallas team uses EPA-approved disinfectants to clean all surfaces, equipment, and touchpoints, ensuring each room is safe for the next patient. We follow CDC guidelines for environmental infection control in healthcare settings.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2" className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <h3 className="text-lg font-semibold">How do you ensure HIPAA compliance in Dallas medical offices?</h3>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <p className="text-muted-foreground">
                        All our Dallas cleaning staff are trained in HIPAA privacy requirements. We understand the importance of patient confidentiality and follow strict protocols: we don't touch or review patient information, respect privacy in exam areas, and maintain discretion about all aspects of your practice. Our team is background-checked and signs confidentiality agreements before working in any medical facility.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3" className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <h3 className="text-lg font-semibold">What disinfectants do you use in Dallas medical offices?</h3>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <p className="text-muted-foreground">
                        We use EPA-approved, hospital-grade disinfectants that are effective against bloodborne pathogens, MRSA, C. difficile, and other healthcare-associated infections. Our Dallas team selects appropriate products based on surface types and infection control needs. All disinfectants meet CDC and OSHA standards for healthcare settings and are safe for medical equipment and patient areas.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-4" className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <h3 className="text-lg font-semibold">Can you clean specialty medical practices in Dallas?</h3>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <p className="text-muted-foreground">
                        Yes, we have experience cleaning all types of Dallas medical facilities including dental offices, surgical centers, urgent care clinics, specialty practices (cardiology, dermatology, etc.), physical therapy centers, and multi-provider medical groups. We adapt our cleaning protocols to meet the specific infection control requirements of each specialty and can handle unique equipment or facility needs.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-20 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 text-center">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready for Medical-Grade Cleaning?
                </h2>
                <p className="text-xl mb-8 opacity-90">
                  Join the Dallas medical practices that trust Red Rock Cleans for HIPAA and OSHA compliant cleaning that protects patients and reputation.
                </p>
                <Button size="lg" variant="secondary" className="h-14 text-lg px-8" asChild>
                  <Link to="/book-now-dallas">
                    <Hospital className="w-5 h-5 mr-2" />
                    Schedule Your Medical Office Cleaning Today
                  </Link>
                </Button>
              </div>
            </div>
          </section>

          {/* Image Section */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <img 
                  src="/src/assets/hero-commercial.jpg" 
                  alt="A pristine and disinfected medical exam room in a Dallas clinic, cleaned by Red Rock Cleans"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default MedicalOfficeCleaningDallasPage;


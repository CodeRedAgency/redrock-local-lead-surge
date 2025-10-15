import { DallasNavigation } from "@/components/DallasNavigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Shield, Lock, FileText, Building, Gavel, Users, ShieldCheck, Building2, CheckCircle2, Stethoscope, Cpu, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";

const neighborhoods = [
  {
    id: "university-park",
    name: "University Park",
    description: "Keep your University Park government facilities secure and pristine with our professional cleaning services. We understand the unique requirements of municipal buildings, providing security-cleared staff and discreet service for this prestigious Dallas neighborhood.",
    faq: [
      {
        question: "Are your cleaners background-checked for government facilities in University Park?",
        answer: "Yes, all our team members undergo rigorous background checks and security clearances appropriate for government facility work in University Park and throughout Dallas."
      },
      {
        question: "Can you work around University Park government office hours?",
        answer: "Absolutely. We schedule our cleaning services during off-hours, evenings, or weekends to ensure minimal disruption to public services in University Park."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our University Park municipal office with the utmost professionalism and discretion. Their security protocols are exemplary.",
      author: "Patricia M., Facilities Director, University Park Municipal Building"
    }
  },
  {
    id: "highland-park",
    name: "Highland Park",
    description: "Professional government facility cleaning services for Highland Park public buildings that demand security, discretion, and compliance. Our comprehensive protocols ensure your municipal facilities maintain the highest standards.",
    faq: [
      {
        question: "What areas of Highland Park government buildings do you clean?",
        answer: "We clean all areas including public lobbies, offices, secure areas, courtrooms, common areas, and restrooms throughout Highland Park government facilities."
      },
      {
        question: "Do you provide documentation for Highland Park government contracts?",
        answer: "Yes, we provide detailed cleaning logs, compliance reports, and documentation as required for Highland Park municipal and government contracts."
      }
    ],
    testimonial: {
      text: "Our Highland Park government facility has never looked better. Red Rock Cleans understands security requirements and delivers consistently.",
      author: "Robert K., Building Manager, Highland Park Public Services"
    }
  },
  {
    id: "uptown-dallas",
    name: "Uptown Dallas",
    description: "Keep your Uptown Dallas government facilities operating securely with our comprehensive cleaning services. We specialize in maintaining public buildings while respecting security protocols and confidentiality requirements.",
    faq: [
      {
        question: "Do you clean both small and large government offices in Uptown Dallas?",
        answer: "Yes, we provide government facility cleaning services for public buildings of all sizes in Uptown Dallas, from small municipal offices to large federal facilities."
      },
      {
        question: "What's included in your Uptown Dallas government cleaning?",
        answer: "We provide comprehensive cleaning of public areas, offices, secure zones, courtrooms, and common facilities with full compliance documentation for Uptown Dallas locations."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Uptown Dallas government office to the highest standards. Their discretion and professionalism are exceptional.",
      author: "Linda S., Administrator, Uptown Dallas Federal Office"
    }
  },
  {
    id: "downtown-dallas",
    name: "Downtown Dallas",
    description: "Downtown Dallas government facilities trust Red Rock Cleans for consistent, secure cleaning that maintains public confidence and operational integrity. Our team understands the unique challenges of maintaining civic buildings in the city's core.",
    faq: [
      {
        question: "How far in advance should Downtown Dallas government facilities book cleaning?",
        answer: "We recommend booking at least two weeks in advance for comprehensive cleaning, though we can accommodate urgent needs for Downtown Dallas government facilities."
      },
      {
        question: "Do you provide cleaning supplies for Downtown Dallas government buildings?",
        answer: "Yes, we bring all professional-grade cleaning supplies, disinfectants, and security-approved equipment to every Downtown Dallas government facility appointment."
      }
    ],
    testimonial: {
      text: "As a Downtown Dallas facility manager, I trust Red Rock Cleans for their reliability and strict security protocols. Outstanding service!",
      author: "James H., Facility Manager, Downtown Dallas Municipal Complex"
    }
  },
  {
    id: "preston-hollow",
    name: "Preston Hollow",
    description: "Preston Hollow government facilities enjoy professional, discreet cleaning with our service that maintains security, compliance, and public trust. We deliver federal-grade cleaning for this distinguished Dallas area.",
    faq: [
      {
        question: "Do you service federal facilities in Preston Hollow?",
        answer: "Yes, we specialize in cleaning federal and municipal facilities and have the security clearances and protocols required for government buildings in Preston Hollow."
      },
      {
        question: "Can you work around Preston Hollow government security schedules?",
        answer: "Absolutely! We coordinate with security teams to schedule cleaning during approved times and follow all access protocols for Preston Hollow facilities."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Preston Hollow government facility impeccably. Their security clearances and professionalism are unmatched.",
      author: "Michelle D., Operations Manager, Preston Hollow Federal Building"
    }
  },
  {
    id: "plano",
    name: "Plano",
    description: "Plano government facilities rely on our cleaning service for consistent security, compliance, and public confidence. As a major municipal hub, Plano facilities demand the highest standards—we deliver them consistently with security-cleared staff.",
    faq: [
      {
        question: "What makes Red Rock Cleans different for Plano government facilities?",
        answer: "We're locally owned, fully insured, and our team is security-cleared with extensive experience in municipal and federal facility cleaning throughout Plano."
      },
      {
        question: "Do you offer emergency cleaning for Plano government buildings?",
        answer: "Yes, we can provide rapid-response cleaning services for urgent situations, security events, or emergency requirements in Plano government facilities."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been cleaning our Plano municipal building for two years. They understand our security requirements and deliver flawlessly.",
      author: "Sarah P., Facilities Coordinator, Plano City Hall"
    }
  },
  {
    id: "frisco",
    name: "Frisco",
    description: "Frisco government facilities enjoy consistent, professional cleaning that keeps public buildings secure and welcoming. Our team serves Frisco's growing municipal sector with expertise and discretion.",
    faq: [
      {
        question: "How long does government facility cleaning take in Frisco?",
        answer: "Most Frisco government facility cleanings take 3-6 hours depending on building size, security requirements, and specific cleaning protocols."
      },
      {
        question: "Do you work with Frisco municipal security teams?",
        answer: "Yes, we coordinate closely with security personnel and facility managers to ensure our cleaning complements your security protocols in Frisco facilities."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our Frisco government facility beautifully. Their security focus and professionalism are outstanding.",
      author: "David G., Building Supervisor, Frisco Municipal Services"
    }
  },
  {
    id: "prosper",
    name: "Prosper",
    description: "Prosper government facilities trust our cleaning service for consistent security and public confidence. We bring federal-grade expertise to this growing Dallas area community's municipal buildings.",
    faq: [
      {
        question: "What security protocols do you use in Prosper government facilities?",
        answer: "We follow federal and municipal security standards, maintain strict confidentiality, and provide security-cleared staff for all Prosper government facility cleaning."
      },
      {
        question: "Can you customize cleaning for Prosper government buildings?",
        answer: "Yes, we can customize our government facility cleaning service to meet specific security requirements, compliance needs, or operational priorities for Prosper facilities."
      }
    ],
    testimonial: {
      text: "Working in Prosper, I appreciate Red Rock Cleans' expertise and reliability for our municipal facility. Excellent secure cleaning service.",
      author: "Thomas B., Administrator, Prosper Town Hall"
    }
  }
];

const GovernmentFacilityCleaningDallasPage = () => {
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

  const Counter = ({ end, label, icon: Icon, suffix = "+" }: { end: number; label: string; icon: any; suffix?: string }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!countersInView) return;

      let startTime: number;
      const duration = 2000;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        setCount(Math.floor(progress * end));

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
          {count}{suffix}
        </div>
        <p className="text-muted-foreground">{label}</p>
      </div>
    );
  };

  return (
    <>
      <Helmet>
        <title>Government Facility Cleaning Dallas | Red Rock Cleans</title>
        <meta name="description" content="Secure and compliant government facility cleaning in Dallas. Red Rock Cleans provides discreet, professional cleaning for municipal and federal buildings in Plano and Frisco by security-cleared staff." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <DallasNavigation />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative py-24 md:py-32 overflow-hidden">
            <div className="absolute inset-0">
              <img 
                src="/src/assets/hero-commercial.jpg" 
                alt="Professional government facility cleaning service in Dallas"
                className="w-full h-full object-cover scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                  Secure & Compliant Government Facility Cleaning in Dallas
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                  Security, discretion, and reliability are paramount when cleaning sensitive government and municipal buildings across Dallas and surrounding areas. Our security-cleared team provides compliant, professional cleaning that maintains public trust and protects confidential operations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="h-14 text-lg px-8" asChild>
                    <Link to="/book-now-dallas">
                      <Building2 className="w-5 h-5 mr-2" />
                      Schedule Government Cleaning
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="h-14 text-lg px-8" asChild>
                    <Link to="/contact">
                      <Shield className="w-5 h-5 mr-2" />
                      Get Secure Quote
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* A Higher Standard of Trust for Public Facilities */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  A Higher Standard of Trust for Public Facilities
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Shield className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Security-Cleared Personnel</h3>
                      <p className="text-muted-foreground text-sm">
                        All staff assigned to government contracts in Dallas undergo rigorous background checks and security clearances. We understand the importance of trustworthy personnel in sensitive environments and maintain the highest vetting standards.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Thoroughly Vetted →
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Lock className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Strict Confidentiality Protocols</h3>
                      <p className="text-muted-foreground text-sm">
                        We're committed to discretion and the privacy of sensitive areas in your Dallas government facility. Our team follows strict confidentiality protocols and respects all security restrictions and clearance requirements.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Complete Discretion →
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <FileText className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Compliance & Detailed Reporting</h3>
                      <p className="text-muted-foreground text-sm">
                        We adhere to all local, state, and federal cleaning standards. Your Dallas facility receives comprehensive documentation, cleaning logs, and compliance reports as required for government contracts and audits.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Fully Documented →
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Our Government Facility Cleaning Checklist */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  Our Government Facility Cleaning Checklist
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Building className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Public Lobbies & Offices</h3>
                      <p className="text-muted-foreground text-sm">
                        Maintaining a professional public image is crucial for government facilities. We thoroughly clean reception areas, public-facing offices, and common spaces to ensure your Dallas facility makes the right impression on constituents and visitors.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Professional Image →
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Gavel className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Secure Areas & Courtrooms</h3>
                      <p className="text-muted-foreground text-sm">
                        Our protocols for cleaning sensitive or restricted areas ensure security compliance and confidentiality. We coordinate with security teams for access to courtrooms, secure offices, and classified areas in Dallas government facilities.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Secure Access →
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Users className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Common Areas & Restrooms</h3>
                      <p className="text-muted-foreground text-sm">
                        High-traffic sanitation is essential for public buildings. We maintain break rooms, restrooms, corridors, and common areas in your Dallas government facility to the highest hygiene standards, protecting employee and public health.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        High Standards →
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Our Commitment to Serving the Dallas Community */}
          <section id="counters-section" className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  Our Commitment to Serving the Dallas Community
                </h2>
                <div className="grid md:grid-cols-3 gap-12">
                  <Counter end={25} label="Security Cleared Staff" icon={ShieldCheck} />
                  <Counter end={40} label="Public Facilities Maintained" icon={Building2} />
                  <Counter end={8} label="Years of Compliant Service" icon={CheckCircle2} />
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
                            Professional government facility cleaning services
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
                              Schedule Your {neighborhood.name} Government Facility Cleaning
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
                  Beyond government facility cleaning, we offer specialized commercial cleaning services for all your Dallas facility needs.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <Link to="/dallas/medical-office-cleaning/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors mb-4">
                        <Stethoscope className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Medical Office Cleaning Services
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Specialized cleaning for healthcare facilities with strict hygiene standards in Dallas.
                      </p>
                    </div>
                  </Link>
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
                      <h3 className="text-lg font-semibold">What security clearances do your Dallas cleaners have for government facilities?</h3>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <p className="text-muted-foreground">
                        All our Dallas government facility cleaning team members undergo comprehensive background checks, including criminal history, identity verification, and employment verification. For federal facilities, we can provide staff with appropriate security clearances. We maintain strict confidentiality protocols and provide documentation as required for government contracts.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2" className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <h3 className="text-lg font-semibold">How do you handle cleaning in secure or restricted areas?</h3>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <p className="text-muted-foreground">
                        We coordinate closely with your Dallas facility's security team to follow all access protocols, badge requirements, and clearance procedures. Our staff can work under escort supervision, during specific time windows, or with appropriate security clearances for restricted areas. We document all cleaning activities and maintain strict confidentiality about secure spaces.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3" className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <h3 className="text-lg font-semibold">What documentation do you provide for government cleaning contracts?</h3>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <p className="text-muted-foreground">
                        We provide comprehensive documentation including detailed cleaning logs, compliance reports, staff credentials, insurance certificates, and cleaning checklists for your Dallas government facility. We can customize reporting to meet specific contract requirements, audit needs, or federal/state documentation standards. All reports are available electronically or in print as required.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-4" className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <h3 className="text-lg font-semibold">Are you experienced with GSA schedule cleaning contracts?</h3>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <p className="text-muted-foreground">
                        Yes, we have extensive experience with government contracts and GSA schedule requirements. Our Dallas team understands federal procurement processes, compliance standards, and the specific expectations for government facility cleaning. We can work within GSA contract terms and provide all necessary documentation, reporting, and compliance measures required for federal facilities.
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
                  Ready for Secure, Compliant Facility Cleaning?
                </h2>
                <p className="text-xl mb-8 opacity-90">
                  Join the Dallas government facilities that trust Red Rock Cleans for security-cleared, professional cleaning that maintains public confidence and operational integrity.
                </p>
                <Button size="lg" variant="secondary" className="h-14 text-lg px-8" asChild>
                  <Link to="/book-now-dallas">
                    <Building2 className="w-5 h-5 mr-2" />
                    Schedule Your Government Facility Cleaning Today
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
                  alt="The clean and secure lobby of a government building in Dallas after cleaning by Red Rock Cleans"
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

export default GovernmentFacilityCleaningDallasPage;


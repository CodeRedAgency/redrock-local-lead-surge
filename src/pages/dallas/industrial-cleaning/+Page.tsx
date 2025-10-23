import { DallasNavigation } from "@/components/DallasNavigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Shield, Clock, Wrench, SprayCan, Construction, Layers, ShieldCheck, GanttChartSquare, Factory, Warehouse, Building2, Sparkles, Phone, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';

const neighborhoods = [
  {
    id: "university-park",
    name: "University Park",
    description: "Keep your University Park industrial facility safe, compliant, and operating at peak performance with our heavy-duty cleaning services. We understand the critical importance of maintaining OSHA standards while minimizing operational disruption in this Dallas area.",
    faq: [
      {
        question: "Do you have experience with industrial cleaning in University Park?",
        answer: "Yes, our team specializes in heavy-duty industrial cleaning and has extensive experience servicing manufacturing plants and industrial facilities throughout University Park and Dallas."
      },
      {
        question: "Can you work around our University Park facility's production schedule?",
        answer: "Absolutely. We schedule our industrial cleaning services during shifts, off-hours, or planned downtime to ensure minimal disruption to your University Park operations."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our University Park industrial facility with exceptional professionalism. Their heavy-duty cleaning keeps our operations running smoothly.",
      author: "Richard M., Plant Manager, University Park Industrial Complex"
    }
  },
  {
    id: "highland-park",
    name: "Highland Park",
    description: "Professional industrial cleaning services for Highland Park facilities that demand safety, compliance, and operational excellence. Our specialized cleaning protocols ensure your equipment and workspace meet OSHA standards.",
    faq: [
      {
        question: "What areas of Highland Park industrial facilities do you clean?",
        answer: "We clean production floors, equipment, machinery, high surfaces, structural elements, break rooms, offices, and restrooms throughout Highland Park industrial facilities."
      },
      {
        question: "Do you use industrial-grade cleaning equipment in Highland Park?",
        answer: "Yes, we use heavy-duty degreasers, industrial vacuums, floor scrubbers, and specialized equipment designed for manufacturing environments in Highland Park."
      }
    ],
    testimonial: {
      text: "Our Highland Park industrial facility has never been cleaner. Red Rock Cleans understands heavy-duty cleaning requirements and delivers consistently.",
      author: "Susan K., Operations Manager, Highland Park Manufacturing"
    }
  },
  {
    id: "uptown-dallas",
    name: "Uptown Dallas",
    description: "Keep your Uptown Dallas industrial facility operating safely with our comprehensive cleaning services. We specialize in heavy-duty cleaning that supports worker safety and production efficiency in urban industrial settings.",
    faq: [
      {
        question: "Do you clean both large and small industrial facilities in Uptown Dallas?",
        answer: "Yes, we provide industrial cleaning services for facilities of all sizes in Uptown Dallas, from small manufacturing shops to large industrial plants."
      },
      {
        question: "What's included in your Uptown Dallas industrial cleaning?",
        answer: "We provide equipment degreasing, floor decontamination, high-surface cleaning, structural cleaning, and sanitation with full OSHA compliance for Uptown Dallas facilities."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Uptown Dallas industrial facility to the highest safety standards. Their commitment to compliance is exceptional.",
      author: "Mark T., Safety Director, Uptown Dallas Industrial Park"
    }
  },
  {
    id: "downtown-dallas",
    name: "Downtown Dallas",
    description: "Downtown Dallas industrial facilities trust Red Rock Cleans for consistent, professional cleaning that maintains safety standards and operational efficiency. Our team understands the unique challenges of urban industrial cleaning.",
    faq: [
      {
        question: "How far in advance should Downtown Dallas industrial facilities book cleaning?",
        answer: "We recommend booking at least two weeks in advance for comprehensive cleaning, though we can accommodate urgent needs for Downtown Dallas facilities."
      },
      {
        question: "Do you provide cleaning supplies for Downtown Dallas industrial facilities?",
        answer: "Yes, we bring all industrial-grade cleaning equipment, heavy-duty degreasers, and safety supplies to every Downtown Dallas facility appointment."
      }
    ],
    testimonial: {
      text: "As a Downtown Dallas facility manager, I trust Red Rock Cleans for their reliability and commitment to OSHA compliance. Outstanding service!",
      author: "Jennifer L., Facility Manager, Downtown Dallas Industrial Center"
    }
  },
  {
    id: "preston-hollow",
    name: "Preston Hollow",
    description: "Preston Hollow industrial facilities enjoy professional, heavy-duty cleaning with our service that maintains the highest safety and compliance standards. We deliver enterprise-grade cleaning for this distinguished Dallas area.",
    faq: [
      {
        question: "Do you service large manufacturing facilities in Preston Hollow?",
        answer: "Yes, we specialize in cleaning large-scale industrial facilities and have the equipment and expertise to handle complex manufacturing environments in Preston Hollow."
      },
      {
        question: "Can you work around Preston Hollow facility maintenance schedules?",
        answer: "Absolutely! We coordinate with your production team to schedule cleaning during planned maintenance windows or off-shift hours in Preston Hollow."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Preston Hollow industrial facility impeccably. Their heavy-duty cleaning expertise and safety focus are unmatched.",
      author: "David H., Operations Director, Preston Hollow Manufacturing Complex"
    }
  },
  {
    id: "plano",
    name: "Plano",
    description: "Plano industrial facilities rely on our cleaning services for consistent safety, compliance, and operational excellence. As a major manufacturing hub, Plano facilities demand the highest standards—we deliver them consistently.",
    faq: [
      {
        question: "What makes Red Rock Cleans different for Plano industrial facilities?",
        answer: "We're locally owned, fully insured, and our team is trained in OSHA standards with extensive experience in Plano's diverse manufacturing and industrial sector."
      },
      {
        question: "Do you offer emergency cleaning for Plano industrial facilities?",
        answer: "Yes, we can provide rapid-response cleaning services for spills, contamination events, or urgent operational requirements in Plano facilities."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been cleaning our Plano industrial facility for four years. They understand our safety requirements and operational needs perfectly.",
      author: "Carlos R., Plant Manager, Plano Manufacturing Plant"
    }
  },
  {
    id: "frisco",
    name: "Frisco",
    description: "Frisco industrial facilities enjoy consistent, professional cleaning that keeps production environments safe and efficient. Our team serves Frisco's growing industrial sector with heavy-duty expertise and reliability.",
    faq: [
      {
        question: "How long does industrial cleaning take in Frisco?",
        answer: "Most Frisco industrial facility cleanings take 6-10 hours depending on facility size, equipment complexity, and specific cleaning requirements."
      },
      {
        question: "Do you work with Frisco facility safety teams?",
        answer: "Yes, we coordinate closely with safety managers and production supervisors to ensure our cleaning supports your safety protocols in Frisco facilities."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our Frisco industrial facility beautifully. Their professionalism and OSHA compliance focus are outstanding.",
      author: "Patricia G., Safety Manager, Frisco Industrial Park"
    }
  },
  {
    id: "prosper",
    name: "Prosper",
    description: "Prosper industrial facilities trust our cleaning service for consistent safety and productivity support. We bring enterprise-grade heavy-duty cleaning expertise to this growing Dallas area community.",
    faq: [
      {
        question: "What cleaning protocols do you use in Prosper industrial facilities?",
        answer: "We follow OSHA guidelines, use industrial-grade equipment and degreasers, and implement safety protocols specific to manufacturing environments in Prosper."
      },
      {
        question: "Can you customize cleaning for Prosper industrial facilities?",
        answer: "Yes, we can customize our industrial cleaning service to focus on specific equipment, production areas, or safety concerns for Prosper facilities."
      }
    ],
    testimonial: {
      text: "Working in Prosper, I appreciate Red Rock Cleans' expertise and reliability for our industrial facility. Excellent heavy-duty cleaning service.",
      author: "Thomas B., Operations Manager, Prosper Industrial Complex"
    }
  }
];

const IndustrialCleaningDallasPage = () => {
  const { t } = useTranslation();
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
        <title>{t(`commercialServices.dallas.industrial.title`, { defaultValue: "Industrial Cleaning Services in Dallas | Red Rock Cleans" })}</title>
        <meta name="description" content={t(`commercialServices.dallas.industrial.description`, { defaultValue: "Industrial cleaning in Dallas. Heavy-duty cleaning for warehouses & factories in Dallas, Plano & Frisco. Book your service!" })} />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <DallasNavigation />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative py-24 md:py-32 overflow-hidden">
            <div className="absolute inset-0">
              <img 
                src="/src/assets/hero-commercial.jpg" 
                alt="Professional industrial cleaning service in Dallas"
                className="w-full h-full object-cover scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                  Heavy-Duty Industrial Cleaning Services in Dallas
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                  Our specialized industrial cleaning services ensure safety, meet OSHA standards, and maximize operational uptime for facilities across the Dallas metroplex. From equipment degreasing to structural cleaning, we deliver the heavy-duty expertise your manufacturing operation demands.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="h-14 text-lg px-8" asChild>
                    <a href="tel:+19729922576">
                      <Phone className="w-5 h-5 mr-2" />
                      Call (972) 992-2576
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="h-14 text-lg px-8" asChild>
                    <Link to="/commercial-quote?location=dallas">
                      <Home className="w-5 h-5 mr-2" />
                      Get Free Quote
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Prioritizing Safety, Compliance, and Uptime */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  Prioritizing Safety, Compliance, and Uptime
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Shield className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Ensuring OSHA Compliance</h3>
                      <p className="text-muted-foreground text-sm">
                        Our rigorous adherence to safety regulations protects your Dallas workforce and keeps your facility inspection-ready. We follow all OSHA guidelines for industrial cleaning, ensuring your operations meet or exceed federal safety standards.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Fully Compliant →
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Clock className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Maximizing Operational Uptime</h3>
                      <p className="text-muted-foreground text-sm">
                        Clean machinery and environments prevent costly breakdowns and production delays. Our Dallas industrial cleaning services work around your schedule to keep your operations running at peak efficiency without disruption.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Zero Downtime →
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Wrench className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Protecting Heavy Machinery</h3>
                      <p className="text-muted-foreground text-sm">
                        Our specialized techniques clean and degrease valuable equipment, extending its lifespan and preventing premature failure. We protect your Dallas facility's machinery investment with expert care and industrial-grade cleaning methods.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Equipment Protection →
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Our Industrial Cleaning Capabilities */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  Our Industrial Cleaning Capabilities
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <SprayCan className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Equipment & Machinery Degreasing</h3>
                      <p className="text-muted-foreground text-sm">
                        Removing tough grease, oil, and grime from production machinery using industrial-strength degreasers and specialized techniques. Our Dallas team restores equipment to optimal cleanliness without damaging sensitive components.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Deep Degreasing →
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Construction className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">High-Surface & Structural Cleaning</h3>
                      <p className="text-muted-foreground text-sm">
                        Cleaning ceilings, support beams, pipes, ductwork, and other hard-to-reach areas that accumulate dust and debris. Our high-reach equipment safely cleans overhead structures in your Dallas industrial facility.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Structural Clean →
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Layers className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Floor Decontamination & Restoration</h3>
                      <p className="text-muted-foreground text-sm">
                        Heavy-duty scrubbing, stripping, and sealing of industrial flooring removes embedded contaminants and restores surfaces. We handle concrete, epoxy, and specialized industrial flooring throughout Dallas facilities.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Floor Restoration →
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* The Red Rock Cleans Industrial Standard */}
          <section id="counters-section" className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  The Red Rock Cleans Industrial Standard
                </h2>
                <div className="grid md:grid-cols-3 gap-12">
                  <Counter end={100} label="OSHA Standards Met" icon={ShieldCheck} suffix="%" />
                  <Counter end={350} label="Heavy Machines Serviced" icon={GanttChartSquare} />
                  <Counter end={75} label="Industrial Sites Maintained" icon={Factory} />
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
                            Professional industrial cleaning services
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
                            <Link to="/commercial-quote?location=dallas">
                              Schedule Your {neighborhood.name} Industrial Cleaning
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

          {/* Other Commercial Cleaning Services in Dallas */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  Other Commercial Cleaning Services in Dallas
                </h2>
                <p className="text-xl text-muted-foreground mb-12">
                  Beyond industrial cleaning, we offer specialized commercial cleaning services for all your Dallas facility needs.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <Link to="/dallas/factory-cleaning/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors mb-4">
                        <Building2 className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Factory Cleaning Services
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Heavy-duty factory cleaning for manufacturing plants in Dallas.
                      </p>
                    </div>
                  </Link>
                  <Link to="/dallas/warehouse-cleaning/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors mb-4">
                        <Warehouse className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Warehouse Cleaning Services
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Professional warehouse and distribution center cleaning in Dallas.
                      </p>
                    </div>
                  </Link>
                  <Link to="/dallas/post-construction-cleaning-services/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors mb-4">
                        <Sparkles className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Post-Construction Cleaning Services
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Professional cleanup after construction and renovation projects in Dallas.
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
                      <h3 className="text-lg font-semibold">What makes industrial cleaning different from regular commercial cleaning?</h3>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <p className="text-muted-foreground">
                        Industrial cleaning requires heavy-duty equipment, specialized degreasers, OSHA compliance knowledge, and expertise in handling industrial contaminants. Our Dallas team is trained in safely cleaning manufacturing equipment, high structures, and industrial environments that regular commercial cleaners aren't equipped to handle. We understand the unique challenges of industrial facilities.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2" className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <h3 className="text-lg font-semibold">How do you ensure OSHA compliance in Dallas industrial facilities?</h3>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <p className="text-muted-foreground">
                        Our Dallas team is trained in OSHA standards for industrial cleaning, including proper PPE usage, hazard recognition, lockout/tagout procedures, and chemical handling. We follow all federal safety guidelines and provide documentation as needed. Our cleaning processes support your facility's OSHA compliance rather than creating new safety concerns.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3" className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <h3 className="text-lg font-semibold">Can you clean around active production in Dallas facilities?</h3>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <p className="text-muted-foreground">
                        Yes, we're experienced in working around active production following proper safety protocols. We coordinate with your Dallas facility's production team to schedule cleaning during shift changes, off-hours, or planned maintenance windows. For comprehensive equipment cleaning, we work during scheduled downtime to minimize operational disruption while ensuring thorough results.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-4" className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <h3 className="text-lg font-semibold">What types of industrial facilities do you service in Dallas?</h3>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <p className="text-muted-foreground">
                        We service a wide range of Dallas industrial facilities including manufacturing plants, production facilities, processing plants, industrial warehouses, distribution centers, and heavy equipment maintenance facilities. Our team has experience with food processing, metal fabrication, automotive, aerospace, and various other industrial sectors throughout the Dallas metroplex.
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
                  Ready for Industrial-Grade Cleaning?
                </h2>
                <p className="text-xl mb-8 opacity-90">
                  Join the Dallas industrial facilities that trust Red Rock Cleans for OSHA-compliant, heavy-duty cleaning that maximizes safety and uptime.
                </p>
                <Button size="lg" variant="secondary" className="h-14 text-lg px-8" asChild>
                  <Link to="/commercial-quote?location=dallas">
                    <Factory className="w-5 h-5 mr-2" />
                    Schedule Your Industrial Cleaning Today
                  </Link>
                </Button>
              </div>
            </div>
          </section>
      </main>
        
        <Footer />
      </div>
    </>
  );
};

export default IndustrialCleaningDallasPage;


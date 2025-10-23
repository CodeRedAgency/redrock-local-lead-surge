import { DallasNavigation } from "@/components/DallasNavigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Cpu, Award, Clock, Grid3X3, Server, SprayCan, Database, TrendingUp, ShieldCheck, Factory, Building2, Warehouse, Phone, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";

const neighborhoods = [
  {
    id: "university-park",
    name: "University Park",
    description: "Keep your University Park data center operating at peak performance with our specialized cleaning services. We understand the critical importance of contamination control in maintaining your mission-critical infrastructure in this prestigious Dallas neighborhood.",
    faq: [
      {
        question: "Do you have experience with data center cleaning in University Park?",
        answer: "Absolutely. Our team is trained in ISO 14644-1 cleanroom standards and has extensive experience servicing data centers and server rooms throughout University Park."
      },
      {
        question: "Can you work around our University Park data center's operational schedule?",
        answer: "Yes, we schedule our cleaning services during maintenance windows or off-peak hours to ensure zero disruption to your critical operations in University Park."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our University Park data center with exceptional precision. Their understanding of contamination control is outstanding.",
      author: "Michael T., IT Director, University Park Tech Facility"
    }
  },
  {
    id: "highland-park",
    name: "Highland Park",
    description: "Professional data center cleaning services for Highland Park facilities that demand the highest standards of cleanliness and contamination control. Our specialized team ensures your critical infrastructure remains pristine and operational.",
    faq: [
      {
        question: "What areas of Highland Park data centers do you clean?",
        answer: "We clean all areas including raised floors, sub-floor spaces, server racks, cooling systems, cable management areas, and environmental surfaces throughout Highland Park facilities."
      },
      {
        question: "Do you use anti-static cleaning methods in Highland Park?",
        answer: "Yes, we use specialized anti-static cleaning equipment and solutions to prevent electrostatic discharge that could damage sensitive electronics in Highland Park data centers."
      }
    ],
    testimonial: {
      text: "Our Highland Park data center has never been cleaner. Red Rock Cleans' attention to detail and compliance with industry standards is impressive.",
      author: "Sarah K., Facilities Manager, Highland Park Server Farm"
    }
  },
  {
    id: "uptown-dallas",
    name: "Uptown Dallas",
    description: "Keep your Uptown Dallas data center facilities operating flawlessly with our comprehensive cleaning protocol designed for critical environments. We specialize in contamination control for high-density computing environments in the heart of the city.",
    faq: [
      {
        question: "Do you clean both large and small data centers in Uptown Dallas?",
        answer: "Yes, we provide data center cleaning services for facilities of all sizes in Uptown Dallas, from small server rooms to enterprise-scale data centers."
      },
      {
        question: "What's included in your Uptown Dallas data center cleaning?",
        answer: "We provide raised floor cleaning, sub-floor vacuuming, server rack detailing, cable management cleaning, and environmental surface disinfection with ISO 14644-1 compliance."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Uptown Dallas data center to the highest standards. Their specialized approach protects our critical infrastructure.",
      author: "David R., CTO, Uptown Dallas Cloud Services"
    }
  },
  {
    id: "downtown-dallas",
    name: "Downtown Dallas",
    description: "Downtown Dallas data centers trust Red Rock Cleans for consistent, specialized cleaning services that maintain operational integrity and uptime. Our team understands the unique challenges of maintaining critical infrastructure in the city's business core.",
    faq: [
      {
        question: "How far in advance should Downtown Dallas data centers book cleaning?",
        answer: "We recommend booking at least two weeks in advance for comprehensive cleaning, though we can accommodate emergency cleaning needs for Downtown Dallas facilities."
      },
      {
        question: "Do you provide cleaning supplies for Downtown Dallas data centers?",
        answer: "Yes, we bring all specialized cleaning equipment, anti-static solutions, and HEPA-filtered vacuums to every Downtown Dallas data center appointment."
      }
    ],
    testimonial: {
      text: "As a Downtown Dallas data center manager, I trust Red Rock Cleans for their expertise and minimal-disruption approach. Exceptional service!",
      author: "Janet L., Data Center Manager, Downtown Dallas Financial Services"
    }
  },
  {
    id: "preston-hollow",
    name: "Preston Hollow",
    description: "Preston Hollow data centers enjoy pristine, enterprise-grade cleaning with our specialized service that maintains critical infrastructure to the highest industry standards. We protect your investment in this prestigious Dallas neighborhood.",
    faq: [
      {
        question: "Do you service enterprise data centers in Preston Hollow?",
        answer: "Yes, we specialize in cleaning enterprise-scale data centers and are experienced with complex cooling systems, cable management, and raised floor environments in Preston Hollow."
      },
      {
        question: "Can you work around Preston Hollow data center maintenance windows?",
        answer: "Absolutely! We coordinate closely with your IT team to schedule cleaning during planned maintenance windows to ensure zero operational disruption in Preston Hollow."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Preston Hollow data center to perfection. Their ISO compliance and contamination control expertise are unmatched.",
      author: "Robert M., VP of Operations, Preston Hollow Data Services"
    }
  },
  {
    id: "plano",
    name: "Plano",
    description: "Plano data centers rely on our specialized cleaning service for consistent contamination control and operational excellence. As a major tech hub, Plano facilities demand the highest standards—we deliver them consistently.",
    faq: [
      {
        question: "What makes Red Rock Cleans different for Plano data centers?",
        answer: "We're locally owned, fully insured, and our team is certified in ISO 14644-1 cleanroom standards with extensive experience in Plano's thriving tech sector."
      },
      {
        question: "Do you offer emergency cleaning for Plano data centers?",
        answer: "Yes, we can provide rapid-response cleaning services for contamination events, equipment failures, or emergency maintenance situations in Plano facilities."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been cleaning our Plano data center for two years. They understand our uptime requirements and deliver flawlessly.",
      author: "Lisa P., IT Infrastructure Director, Plano Technology Campus"
    }
  },
  {
    id: "frisco",
    name: "Frisco",
    description: "Frisco data centers enjoy consistent, high-quality specialized cleaning that keeps critical infrastructure operating at peak efficiency. Our team serves Frisco's rapidly growing tech sector with expertise and precision.",
    faq: [
      {
        question: "How long does data center cleaning take in Frisco?",
        answer: "Most Frisco data center cleanings take 4-8 hours depending on facility size, raised floor area, and specific contamination control requirements."
      },
      {
        question: "Do you work with Frisco data center IT teams?",
        answer: "Yes, we coordinate closely with IT staff and facilities managers to ensure our cleaning complements your operational requirements and maintenance schedules in Frisco."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our Frisco data center beautifully. Their specialized approach and professionalism are outstanding.",
      author: "Maria G., Facilities Director, Frisco Tech Center"
    }
  },
  {
    id: "prosper",
    name: "Prosper",
    description: "Prosper data centers trust our specialized cleaning service for consistent contamination control that supports their mission-critical operations. We bring enterprise-grade expertise to this growing Dallas area community.",
    faq: [
      {
        question: "What cleaning protocols do you use in Prosper data centers?",
        answer: "We follow ISO 14644-1 cleanroom standards, use HEPA-filtered equipment, anti-static solutions, and specialized raised floor cleaning techniques for Prosper facilities."
      },
      {
        question: "Can you customize cleaning for Prosper data centers?",
        answer: "Yes, we can customize our data center cleaning service to focus on specific contamination concerns, equipment types, or operational priorities for Prosper facilities."
      }
    ],
    testimonial: {
      text: "Living in Prosper, I appreciate Red Rock Cleans' expertise and reliability for our data center. Excellent specialized service.",
      author: "Thomas H., Data Center Operations Manager, Prosper Business Park"
    }
  }
];

const DataCenterCleaningDallasPage = () => {
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

  const Counter = ({ end, label, icon: Icon }: { end: number; label: string; icon: any }) => {
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
          {count}{end >= 95 ? '%' : '+'}
        </div>
        <p className="text-muted-foreground">{label}</p>
      </div>
    );
  };

  return (
    <>
      <Helmet>
        <title>Data Center Cleaning in Dallas | Red Rock Cleans</title>
        <meta name="description" content="Data center cleaning in Dallas. Protect critical infrastructure with specialized cleaning in Dallas, Plano & Frisco. Book now!" />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <DallasNavigation />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative py-24 md:py-32 overflow-hidden">
            <div className="absolute inset-0">
              <img 
                src="/src/assets/hero-commercial.jpg" 
                alt="Professional data center cleaning service in Dallas"
                className="w-full h-full object-cover scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                  Specialized Data Center Cleaning in Dallas
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                  Maintain data integrity and operational uptime for Dallas's thriving tech and business infrastructure. Our ISO 14644-1 compliant cleaning services protect your critical environments from contamination, ensuring maximum performance and reliability across the Dallas metroplex.
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

          {/* Protecting Dallas's Critical Infrastructure */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  Protecting Dallas's Critical Infrastructure
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Cpu className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Precision Contamination Control</h3>
                      <p className="text-muted-foreground text-sm">
                        Our specialized methods prevent dust, debris, and particulate matter from compromising sensitive hardware. Using HEPA-filtered vacuums and anti-static cleaning solutions, we protect your Dallas data center from the microscopic threats that cause equipment failure.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Clean & Protected →
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Award className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">ISO & Industry Compliance</h3>
                      <p className="text-muted-foreground text-sm">
                        We adhere to critical standards like ISO 14644-1 for cleanroom environments, ensuring your Dallas facility meets or exceeds industry requirements. Our certified specialists understand the stringent protocols required for data center operations.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Certified & Compliant →
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Clock className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Minimizing Downtime Risk</h3>
                      <p className="text-muted-foreground text-sm">
                        Proactive cleaning prevents overheating, equipment failures, and costly downtime. We work during your maintenance windows to keep your Dallas operations running smoothly without interruption to critical business functions.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Always Operational →
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Our Comprehensive Data Center Cleaning Protocol */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  Our Comprehensive Data Center Cleaning Protocol
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Grid3X3 className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Raised Floor & Sub-Floor Cleaning</h3>
                      <p className="text-muted-foreground text-sm">
                        Specialized HEPA vacuuming and cleaning beneath raised floors removes accumulated dust, debris, and contaminants that compromise airflow efficiency. Our Dallas team ensures your underfloor plenum is pristine, protecting cooling systems and preventing particulate recirculation.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Deep Clean →
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Server className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Server Rack & Equipment Detailing</h3>
                      <p className="text-muted-foreground text-sm">
                        Anti-static cleaning of server rack exteriors, cables, and equipment surfaces prevents electrostatic discharge while removing dust buildup. We meticulously detail all accessible surfaces in your Dallas data center to maintain optimal operating conditions.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Precision Detail →
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <SprayCan className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Environmental Surface Disinfection</h3>
                      <p className="text-muted-foreground text-sm">
                        Thorough cleaning of walls, ceilings, access doors, and environmental surfaces with appropriate solutions maintains cleanroom standards. Our Dallas specialists use industry-approved products that won't damage sensitive equipment or compromise air quality.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Total Environment →
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Our Commitment to Dallas's Digital Backbone */}
          <section id="counters-section" className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  Our Commitment to Dallas's Digital Backbone
                </h2>
                <div className="grid md:grid-cols-3 gap-12">
                  <Counter end={50} label="Data Centers Secured in TX" icon={Database} />
                  <Counter end={99} label="Uptime Percentage Maintained" icon={TrendingUp} />
                  <Counter end={15} label="Certified Cleanroom Specialists" icon={ShieldCheck} />
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
                            Professional data center cleaning services
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
                              Schedule Your {neighborhood.name} Data Center Cleaning
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
                  Beyond data center cleaning, we offer specialized commercial cleaning services for all your Dallas facility needs.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <Link to="/dallas/industrial-cleaning/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors mb-4">
                        <Factory className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Industrial Cleaning Services
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Specialized cleaning for manufacturing and industrial facilities across Dallas.
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
                      <h3 className="text-lg font-semibold">What makes data center cleaning different from regular commercial cleaning?</h3>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <p className="text-muted-foreground">
                        Data center cleaning requires specialized equipment, anti-static solutions, and ISO 14644-1 cleanroom compliance. Our Dallas team uses HEPA-filtered vacuums, works during maintenance windows, and follows strict contamination control protocols to protect sensitive equipment from dust, debris, and electrostatic discharge.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2" className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <h3 className="text-lg font-semibold">How often should Dallas data centers be professionally cleaned?</h3>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <p className="text-muted-foreground">
                        Most Dallas data centers benefit from quarterly deep cleaning with monthly maintenance cleaning. However, frequency depends on factors like facility size, equipment density, air filtration quality, and environmental conditions. We can assess your specific needs and recommend an optimal cleaning schedule.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3" className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <h3 className="text-lg font-semibold">Do you clean beneath raised floors in Dallas data centers?</h3>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <p className="text-muted-foreground">
                        Yes, sub-floor cleaning is a critical component of our data center cleaning protocol. We remove raised floor tiles and use HEPA-filtered vacuums to eliminate accumulated dust, debris, and contaminants from the underfloor plenum. This protects your cooling systems and prevents particulate recirculation throughout your Dallas facility.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-4" className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <h3 className="text-lg font-semibold">Are your cleaners certified and background-checked for data center access?</h3>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <p className="text-muted-foreground">
                        Absolutely. All our Dallas data center cleaning specialists undergo thorough background checks, are fully insured and bonded, and receive specialized training in ISO 14644-1 cleanroom standards. We understand the security and confidentiality requirements of critical infrastructure and maintain strict compliance protocols.
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
                  Ready to Protect Your Critical Infrastructure?
                </h2>
                <p className="text-xl mb-8 opacity-90">
                  Join the Dallas data centers that trust Red Rock Cleans for ISO-compliant, specialized cleaning that ensures uptime and operational excellence.
                </p>
                <Button size="lg" variant="secondary" className="h-14 text-lg px-8" asChild>
                  <Link to="/commercial-quote?location=dallas">
                    <Server className="w-5 h-5 mr-2" />
                    Schedule Your Data Center Cleaning Today
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

export default DataCenterCleaningDallasPage;


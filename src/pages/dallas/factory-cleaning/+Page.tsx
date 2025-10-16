import { DallasNavigation } from "@/components/DallasNavigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HardHat, Cog, ClipboardCheck, Layers, Wrench, Construction, Users, ShieldCheck, Clock, Factory, Warehouse, HardDrive, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";

const neighborhoods = [
  {
    id: "university-park",
    name: "University Park",
    description: "Keep your University Park manufacturing facility safe, compliant, and productive with our professional factory cleaning services. We understand the importance of maintaining a clean production environment that meets OSHA standards and supports operational excellence.",
    faq: [
      {
        question: "Do you have experience with factory cleaning in University Park?",
        answer: "Yes, our team is trained in heavy-duty industrial cleaning and has extensive experience servicing manufacturing facilities throughout University Park and the Dallas area."
      },
      {
        question: "Can you work around our University Park factory's production schedule?",
        answer: "Absolutely. We schedule our cleaning services during shifts, off-hours, or weekends to ensure zero disruption to your production operations in University Park."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our University Park manufacturing facility with exceptional professionalism. Our production floors have never been cleaner.",
      author: "Tom R., Plant Manager, University Park Manufacturing"
    }
  },
  {
    id: "highland-park",
    name: "Highland Park",
    description: "Professional factory cleaning services for Highland Park manufacturing facilities that demand safety, compliance, and operational efficiency. Our comprehensive cleaning protocols support your production goals while maintaining OSHA standards.",
    faq: [
      {
        question: "What areas of Highland Park factories do you clean?",
        answer: "We clean production floors, machinery, equipment, high-dusting areas, break rooms, offices, and restrooms throughout Highland Park manufacturing facilities."
      },
      {
        question: "Do you use industrial-grade cleaning equipment in Highland Park?",
        answer: "Yes, we use heavy-duty floor scrubbers, industrial vacuums, degreasers, and specialized equipment designed for manufacturing environments in Highland Park."
      }
    ],
    testimonial: {
      text: "Our Highland Park factory has never looked better. Red Rock Cleans understands industrial cleaning and delivers consistent results.",
      author: "Jennifer M., Operations Director, Highland Park Production Facility"
    }
  },
  {
    id: "uptown-dallas",
    name: "Uptown Dallas",
    description: "Keep your Uptown Dallas manufacturing facility operating safely with our comprehensive factory cleaning services. We specialize in heavy-duty cleaning that supports worker safety and production efficiency in urban industrial settings.",
    faq: [
      {
        question: "Do you clean both large and small factories in Uptown Dallas?",
        answer: "Yes, we provide factory cleaning services for manufacturing facilities of all sizes in Uptown Dallas, from small production shops to large industrial plants."
      },
      {
        question: "What's included in your Uptown Dallas factory cleaning?",
        answer: "We provide floor care, machinery degreasing, high-dusting, structural cleaning, and sanitation of common areas and restrooms with OSHA compliance."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Uptown Dallas factory to the highest standards. Their commitment to safety and quality is exceptional.",
      author: "David L., Safety Manager, Uptown Dallas Manufacturing"
    }
  },
  {
    id: "downtown-dallas",
    name: "Downtown Dallas",
    description: "Downtown Dallas manufacturing facilities trust Red Rock Cleans for consistent, professional factory cleaning that maintains safety standards and operational efficiency. Our team understands the unique challenges of urban industrial cleaning.",
    faq: [
      {
        question: "How far in advance should Downtown Dallas factories book cleaning?",
        answer: "We recommend booking at least one week in advance for comprehensive cleaning, though we can accommodate urgent cleaning needs for Downtown Dallas facilities."
      },
      {
        question: "Do you provide cleaning supplies for Downtown Dallas factories?",
        answer: "Yes, we bring all industrial-grade cleaning equipment, degreasers, and safety supplies to every Downtown Dallas factory cleaning appointment."
      }
    ],
    testimonial: {
      text: "As a Downtown Dallas plant supervisor, I appreciate Red Rock Cleans' reliability and attention to safety protocols. Outstanding service!",
      author: "Carlos H., Plant Supervisor, Downtown Dallas Industrial"
    }
  },
  {
    id: "preston-hollow",
    name: "Preston Hollow",
    description: "Preston Hollow manufacturing facilities enjoy professional, heavy-duty cleaning with our factory service that maintains safety, compliance, and productivity. We deliver enterprise-grade cleaning for this distinguished Dallas area.",
    faq: [
      {
        question: "Do you service large manufacturing facilities in Preston Hollow?",
        answer: "Yes, we specialize in cleaning large-scale production facilities and have the equipment and expertise to handle complex manufacturing environments in Preston Hollow."
      },
      {
        question: "Can you work around Preston Hollow factory shift schedules?",
        answer: "Absolutely! We coordinate with your production team to schedule cleaning during shift changes, off-hours, or weekends to minimize operational disruption in Preston Hollow."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Preston Hollow manufacturing facility impeccably. Their industrial cleaning expertise is unmatched.",
      author: "Michelle K., Facilities Director, Preston Hollow Manufacturing"
    }
  },
  {
    id: "plano",
    name: "Plano",
    description: "Plano manufacturing facilities rely on our factory cleaning service for consistent safety, compliance, and operational excellence. As a major industrial hub, Plano facilities demand the highest standards—we deliver them consistently.",
    faq: [
      {
        question: "What makes Red Rock Cleans different for Plano factories?",
        answer: "We're locally owned, fully insured, and our team is trained in OSHA standards with extensive experience in Plano's diverse manufacturing sector."
      },
      {
        question: "Do you offer emergency cleaning for Plano factories?",
        answer: "Yes, we can provide rapid-response cleaning services for spills, contamination events, or urgent production requirements in Plano facilities."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been cleaning our Plano factory for three years. They understand our safety requirements and deliver consistently.",
      author: "Robert P., Plant Manager, Plano Manufacturing Complex"
    }
  },
  {
    id: "frisco",
    name: "Frisco",
    description: "Frisco manufacturing facilities enjoy consistent, professional factory cleaning that keeps production environments safe and efficient. Our team serves Frisco's growing industrial sector with expertise and reliability.",
    faq: [
      {
        question: "How long does factory cleaning take in Frisco?",
        answer: "Most Frisco factory cleanings take 4-8 hours depending on facility size, production area square footage, and specific cleaning requirements."
      },
      {
        question: "Do you work with Frisco factory safety teams?",
        answer: "Yes, we coordinate closely with safety managers and production supervisors to ensure our cleaning supports your safety protocols in Frisco facilities."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our Frisco manufacturing facility exceptionally. Their professionalism and safety focus are outstanding.",
      author: "Amanda S., Operations Manager, Frisco Production Facility"
    }
  },
  {
    id: "prosper",
    name: "Prosper",
    description: "Prosper manufacturing facilities trust our factory cleaning service for consistent safety and productivity support. We bring enterprise-grade industrial cleaning expertise to this growing Dallas area community.",
    faq: [
      {
        question: "What cleaning protocols do you use in Prosper factories?",
        answer: "We follow OSHA guidelines, use industrial-grade equipment and degreasers, and implement safety protocols specific to manufacturing environments in Prosper."
      },
      {
        question: "Can you customize cleaning for Prosper factories?",
        answer: "Yes, we can customize our factory cleaning service to focus on specific production areas, safety concerns, or operational priorities for Prosper facilities."
      }
    ],
    testimonial: {
      text: "Working in Prosper, I appreciate Red Rock Cleans' expertise and reliability for our manufacturing facility. Excellent industrial cleaning service.",
      author: "James W., Production Director, Prosper Industrial Park"
    }
  }
];

const FactoryCleaningDallasPage = () => {
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
        <title>Factory Cleaning Dallas | Red Rock Cleans</title>
        <meta name="description" content="Heavy-duty factory cleaning in Dallas. Red Rock Cleans offers comprehensive cleaning for manufacturing plants in Plano, Frisco, and across the Dallas area to ensure safety and productivity." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <DallasNavigation />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative py-24 md:py-32 overflow-hidden">
            <div className="absolute inset-0">
              <img 
                src="/src/assets/hero-commercial.jpg" 
                alt="Professional factory cleaning service in Dallas"
                className="w-full h-full object-cover scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                  Professional Factory Cleaning in Dallas
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                  A clean, compliant factory is essential for worker safety, operational efficiency, and meeting production goals across the Dallas metroplex. Our heavy-duty cleaning services ensure your manufacturing facility maintains the highest standards of cleanliness, safety, and productivity.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="h-14 text-lg px-8" asChild>
                    <Link to="/commercial-quote?location=dallas">
                      <Factory className="w-5 h-5 mr-2" />
                      Schedule Factory Cleaning
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="h-14 text-lg px-8" asChild>
                    <Link to="/contact">
                      <HardHat className="w-5 h-5 mr-2" />
                      Get Free Estimate
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Enhancing Safety, Compliance, and Productivity */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  Enhancing Safety, Compliance, and Productivity
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <HardHat className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Prioritizing Worker Safety</h3>
                      <p className="text-muted-foreground text-sm">
                        Our focus is on removing hazards like spills, debris, and accumulated dust to reduce workplace accidents and meet OSHA standards. A clean factory floor means safer employees and fewer incidents across your Dallas manufacturing facility.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Safe & Compliant →
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Cog className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Boosting Production Efficiency</h3>
                      <p className="text-muted-foreground text-sm">
                        Clean machinery and organized workspaces prevent downtime and improve workflow. Our Dallas factory cleaning services keep your equipment running smoothly and your production lines operating at peak efficiency.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Maximum Uptime →
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <ClipboardCheck className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Upholding Industry Standards</h3>
                      <p className="text-muted-foreground text-sm">
                        We're committed to providing a level of cleanliness that meets industry-specific regulations and quality standards. Your Dallas facility stays compliant and inspection-ready with our comprehensive cleaning protocols.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Always Compliant →
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Our Comprehensive Factory Cleaning Protocol */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  Our Comprehensive Factory Cleaning Protocol
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Layers className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Production Floor Care</h3>
                      <p className="text-muted-foreground text-sm">
                        Heavy-duty sweeping, scrubbing, and degreasing of concrete floors remove oil, grease, and industrial residue. We use industrial floor scrubbers to maintain safe, slip-free surfaces across your Dallas facility.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Clean Floors →
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Wrench className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Machinery & Equipment Cleaning</h3>
                      <p className="text-muted-foreground text-sm">
                        Safely cleaning and degreasing production equipment prevents buildup that causes malfunctions. Our Dallas team uses appropriate degreasers and techniques to protect your machinery investment.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Equipment Care →
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Construction className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">High-Dusting & Structural Cleaning</h3>
                      <p className="text-muted-foreground text-sm">
                        Cleaning ceilings, pipes, rafters, and overhead structures removes accumulated dust and debris that can contaminate products. Our high-reach equipment handles the toughest overhead cleaning in Dallas factories.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Overhead Clean →
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
                        Complete services for break rooms, offices, locker rooms, and sanitation facilities within your Dallas factory ensure employee comfort and maintain professional standards throughout your facility.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Total Facility →
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Our Commitment to Dallas's Industries */}
          <section id="counters-section" className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  Our Commitment to Dallas's Industries
                </h2>
                <div className="grid md:grid-cols-3 gap-12">
                  <Counter end={100} label="Safety Standards Met" icon={ShieldCheck} suffix="%" />
                  <Counter end={500} label="Production Hours Saved" icon={Clock} />
                  <Counter end={250} label="Compliant Cleans Completed" icon={Factory} />
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
                            Professional factory cleaning services
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
                              Schedule Your {neighborhood.name} Factory Cleaning
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

          {/* Other Industrial & Commercial Services in Dallas */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  Other Industrial & Commercial Services in Dallas
                </h2>
                <p className="text-xl text-muted-foreground mb-12">
                  Beyond factory cleaning, we offer specialized industrial and commercial cleaning services for all your Dallas facility needs.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <Link to="/dallas/warehouse-cleaning/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors mb-4">
                        <Warehouse className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Warehouse Cleaning Services
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Professional warehouse and distribution center cleaning across Dallas.
                      </p>
                    </div>
                  </Link>
                  <Link to="/dallas/industrial-cleaning/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors mb-4">
                        <Drill className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Industrial Cleaning Services
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Heavy-duty cleaning for industrial facilities and plants in Dallas.
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
                      <h3 className="text-lg font-semibold">What makes factory cleaning different from regular commercial cleaning?</h3>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <p className="text-muted-foreground">
                        Factory cleaning requires specialized equipment, industrial-grade degreasers, and safety protocols for manufacturing environments. Our Dallas team is trained in OSHA standards, heavy-duty floor care, machinery cleaning, and handling industrial contaminants that regular commercial cleaners aren't equipped to manage.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2" className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <h3 className="text-lg font-semibold">How often should Dallas manufacturing facilities be professionally cleaned?</h3>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <p className="text-muted-foreground">
                        Most Dallas factories benefit from daily floor maintenance with weekly deep cleaning and monthly comprehensive services including high-dusting and structural cleaning. However, frequency depends on your production type, shift schedule, and industry regulations. We can assess your specific needs and recommend an optimal cleaning schedule.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3" className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <h3 className="text-lg font-semibold">Do you clean around active production equipment in Dallas factories?</h3>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <p className="text-muted-foreground">
                        Yes, we're experienced in cleaning around operating machinery following proper lockout/tagout procedures and safety protocols. We work closely with your Dallas facility's safety team to ensure cleaning activities don't disrupt production or compromise worker safety. We can also schedule comprehensive equipment cleaning during planned downtime.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-4" className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <h3 className="text-lg font-semibold">Are your cleaners trained in factory safety protocols?</h3>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <p className="text-muted-foreground">
                        Absolutely. All our Dallas factory cleaning team members undergo thorough background checks, OSHA safety training, and facility-specific orientation. They're trained in proper PPE usage, hazard recognition, chemical handling, and emergency procedures. We maintain strict safety standards to protect both our team and your employees.
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
                  Ready for a Safer, More Productive Factory?
                </h2>
                <p className="text-xl mb-8 opacity-90">
                  Join the Dallas manufacturing facilities that trust Red Rock Cleans for professional, OSHA-compliant factory cleaning that enhances safety and efficiency.
                </p>
                <Button size="lg" variant="secondary" className="h-14 text-lg px-8" asChild>
                  <Link to="/commercial-quote?location=dallas">
                    <Factory className="w-5 h-5 mr-2" />
                    Schedule Your Factory Cleaning Today
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
                  alt="A clean and safe factory floor in Dallas after professional cleaning by Red Rock Cleans"
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

export default FactoryCleaningDallasPage;


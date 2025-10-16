import { ColumbusNavigation } from "@/components/ColumbusNavigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HardHat, Cog, ClipboardCheck, Layers, Wrench, Construction, ShieldCheck, Clock, Factory, Warehouse, Hammer, Package } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";

const cities = [
  {
    id: "dublin",
    name: "Dublin",
    description: "Dublin's manufacturing sector relies on our professional factory cleaning services to maintain safe, compliant production environments that meet OSHA standards and support operational efficiency throughout this growing industrial area.",
    faq: [
      {
        question: "How do you ensure safety during Dublin factory cleaning?",
        answer: "We follow strict OSHA protocols, coordinate with your Dublin production team, and use lockout/tagout procedures when cleaning near machinery to ensure complete safety."
      },
      {
        question: "Can you clean around active production in Dublin?",
        answer: "Yes, we can schedule cleaning during shifts, breaks, or off-hours to minimize disruption to your Dublin manufacturing operations."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans transformed our Dublin factory floor. Their understanding of manufacturing environments and safety protocols is exceptional.",
      author: "Plant Manager, Dublin Manufacturing Facility"
    }
  },
  {
    id: "upper-arlington",
    name: "Upper Arlington",
    description: "Upper Arlington businesses trust our heavy-duty factory cleaning to maintain production spaces with comprehensive services that remove industrial debris, degrease equipment, and create safer work environments for manufacturing teams.",
    faq: [
      {
        question: "What equipment do you use for Upper Arlington factory cleaning?",
        answer: "We use industrial-grade sweepers, scrubbers, degreasers, and specialized equipment designed for heavy-duty manufacturing environment cleaning in Upper Arlington."
      },
      {
        question: "How do you handle chemical spills in Upper Arlington factories?",
        answer: "Our team is trained in hazmat procedures and can safely clean and remediate chemical spills according to EPA and OSHA guidelines for Upper Arlington facilities."
      }
    ],
    testimonial: {
      text: "The improvement in our Upper Arlington plant's cleanliness has directly impacted worker morale and safety scores. Highly recommend Red Rock Cleans!",
      author: "Safety Director, Upper Arlington Production Plant"
    }
  },
  {
    id: "powell",
    name: "Powell",
    description: "Powell's industrial facilities depend on our systematic factory cleaning that combines production floor care, machinery degreasing, and high-dusting services to maintain compliance and prevent costly production interruptions.",
    faq: [
      {
        question: "Can you clean manufacturing equipment in Powell?",
        answer: "Yes, we provide safe degreasing and cleaning of production equipment, following manufacturer guidelines and coordinating with your Powell maintenance team."
      },
      {
        question: "What's included in Powell factory floor cleaning?",
        answer: "Our service includes heavy-duty sweeping, scrubbing, degreasing, debris removal, and specialized cleaning of concrete and epoxy floors in Powell facilities."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans' systematic approach to our Powell factory cleaning has eliminated safety hazards and improved our overall facility conditions.",
      author: "Operations Manager, Powell Manufacturing Center"
    }
  },
  {
    id: "lewis-center",
    name: "Lewis Center",
    description: "Lewis Center manufacturing plants trust our comprehensive factory cleaning services that address production floors, equipment, and structural elements with heavy-duty methods designed for industrial environments.",
    faq: [
      {
        question: "How often should Lewis Center factories be cleaned?",
        answer: "Most Lewis Center facilities benefit from daily or weekly cleaning depending on production volume, with deep cleaning scheduled monthly or quarterly."
      },
      {
        question: "Do you provide emergency cleaning for Lewis Center factories?",
        answer: "Yes, we offer 24/7 emergency response for spills, accidents, or urgent cleaning needs at Lewis Center manufacturing facilities."
      }
    ],
    testimonial: {
      text: "Our Lewis Center production facility has never been cleaner. Red Rock Cleans delivers consistent, professional service every time.",
      author: "Facility Director, Lewis Center Industrial Park"
    }
  },
  {
    id: "worthington",
    name: "Worthington",
    description: "Worthington's industrial sector benefits from our professional factory cleaning that reduces workplace hazards, improves equipment longevity, and maintains the high standards required for efficient manufacturing operations.",
    faq: [
      {
        question: "Are your Worthington cleaners trained in factory safety?",
        answer: "Yes, all our Worthington factory cleaning team members are trained in OSHA regulations, lockout/tagout procedures, and industrial safety protocols."
      },
      {
        question: "Can you handle high-dusting in Worthington factories?",
        answer: "Absolutely. We specialize in high-dusting of rafters, pipes, and ceiling structures in Worthington manufacturing facilities using specialized equipment."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans' attention to detail in our Worthington factory is remarkable. They understand the unique challenges of manufacturing environments.",
      author: "Production Supervisor, Worthington Manufacturing"
    }
  },
  {
    id: "new-albany",
    name: "New Albany",
    description: "New Albany's modern manufacturing facilities rely on our advanced factory cleaning services that combine traditional heavy-duty cleaning with specialized techniques for maintaining state-of-the-art production environments.",
    faq: [
      {
        question: "Do you clean specialized manufacturing equipment in New Albany?",
        answer: "Yes, we work with your New Albany team to safely clean CNC machines, assembly lines, and specialized production equipment following proper protocols."
      },
      {
        question: "How do you ensure minimal disruption in New Albany factories?",
        answer: "We create customized cleaning schedules for New Albany facilities, working during maintenance windows or shift changes to minimize production impact."
      }
    ],
    testimonial: {
      text: "Our New Albany facility's cleanliness has improved dramatically since partnering with Red Rock Cleans. Professional and reliable service.",
      author: "Plant Engineer, New Albany Tech Manufacturing"
    }
  },
  {
    id: "bexley",
    name: "Bexley",
    description: "Bexley businesses depend on our thorough factory cleaning services that maintain safe production environments with systematic cleaning protocols designed to meet OSHA compliance and support manufacturing excellence.",
    faq: [
      {
        question: "What makes your Bexley factory cleaning different?",
        answer: "We combine industrial-strength cleaning with attention to safety protocols, ensuring your Bexley facility is both spotless and fully compliant with regulations."
      },
      {
        question: "Can you provide cleaning documentation for Bexley facilities?",
        answer: "Yes, we provide detailed cleaning logs, safety checklists, and compliance documentation for your Bexley facility records and audits."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been instrumental in maintaining our Bexley production facility. Their professionalism sets them apart.",
      author: "Quality Manager, Bexley Industrial Solutions"
    }
  },
  {
    id: "german-village",
    name: "German Village",
    description: "German Village's small-scale manufacturing and workshop spaces benefit from our adaptable factory cleaning services that provide heavy-duty cleaning for unique industrial environments in historic settings.",
    faq: [
      {
        question: "Can you clean smaller factories in German Village?",
        answer: "Yes, we serve facilities of all sizes in German Village, from large plants to small manufacturing workshops and production spaces."
      },
      {
        question: "How do you handle German Village's unique buildings?",
        answer: "We adapt our cleaning methods for German Village's historic structures while maintaining the same thorough industrial cleaning standards."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans successfully cleans our German Village workshop space. They understand our unique needs and deliver excellent results.",
      author: "Owner, German Village Metalworks"
    }
  },
  {
    id: "short-north",
    name: "Short North",
    description: "Short North's creative manufacturing spaces trust our flexible factory cleaning services that maintain clean, safe production environments for the artisan manufacturers and small-scale producers in this vibrant district.",
    faq: [
      {
        question: "Do you serve artisan manufacturers in Short North?",
        answer: "Yes, we work with craft breweries, food production, and artisan manufacturing facilities throughout Short North with customized cleaning protocols."
      },
      {
        question: "Can you accommodate Short North's irregular schedules?",
        answer: "Absolutely. We offer flexible scheduling including nights and weekends to accommodate the diverse Short North manufacturing community."
      }
    ],
    testimonial: {
      text: "Our Short North production facility stays spotless thanks to Red Rock Cleans. They're reliable and understand our specific needs.",
      author: "Head Brewer, Short North Craft Brewery"
    }
  },
  {
    id: "victorian-village",
    name: "Victorian Village",
    description: "Victorian Village manufacturing businesses benefit from our professional factory cleaning that combines industrial cleaning expertise with the flexibility needed for production facilities in this historic neighborhood.",
    faq: [
      {
        question: "Can you handle Victorian Village's older manufacturing buildings?",
        answer: "Yes, we're experienced with cleaning production facilities in Victorian Village's historic buildings while maintaining safety and cleanliness standards."
      },
      {
        question: "What cleaning methods work best in Victorian Village factories?",
        answer: "We use adaptable heavy-duty cleaning methods suitable for Victorian Village facilities, from traditional manufacturing to modern production spaces."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans transformed our Victorian Village production space. Their industrial cleaning expertise is matched by their flexibility.",
      author: "Operations Lead, Victorian Village Manufacturing Co."
    }
  },
  {
    id: "hillard",
    name: "Hilliard",
    description: "Hilliard's expanding industrial sector relies on our comprehensive factory cleaning services that maintain safe, compliant production environments with heavy-duty cleaning designed for high-volume manufacturing operations.",
    faq: [
      {
        question: "Do you serve Hilliard's industrial parks?",
        answer: "Yes, we regularly service manufacturing facilities throughout Hilliard's industrial parks with consistent, high-quality factory cleaning."
      },
      {
        question: "How do you ensure quality in Hilliard factories?",
        answer: "We use detailed checklists, conduct quality inspections, and maintain open communication with Hilliard facility managers to ensure satisfaction."
      }
    ],
    testimonial: {
      text: "Our Hilliard factory has never been safer or cleaner. Red Rock Cleans' systematic approach delivers consistent results every time.",
      author: "Safety Coordinator, Hilliard Manufacturing Complex"
    }
  },
  {
    id: "westerville",
    name: "Westerville",
    description: "Westerville manufacturing facilities trust our professional factory cleaning to maintain production environments that meet safety standards, improve efficiency, and support the operational excellence that defines Westerville industry.",
    faq: [
      {
        question: "What industries do you serve in Westerville?",
        answer: "We serve automotive, food production, packaging, and general manufacturing facilities throughout Westerville with specialized cleaning protocols for each."
      },
      {
        question: "Can you coordinate with Westerville facility managers?",
        answer: "Yes, we work closely with your Westerville management team to schedule cleaning around production schedules and maintenance requirements."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans' factory cleaning has significantly improved our Westerville plant's safety record. Professional service we can count on.",
      author: "Plant Manager, Westerville Automotive Parts"
    }
  }
];

const FactoryCleaningColumbusOhioPage = () => {
  const [openAccordion, setOpenAccordion] = useState<string>("");
  const [countersVisible, setCountersVisible] = useState(false);
  const [safetyStandards, setSafetyStandards] = useState(0);
  const [productionHours, setProductionHours] = useState(0);
  const [compliantCleans, setCompliantCleans] = useState(0);

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
        
        setSafetyStandards(Math.floor(progress * 100));
        setProductionHours(Math.floor(progress * 5000));
        setCompliantCleans(Math.floor(progress * 500));

        if (step >= steps) {
          clearInterval(timer);
          setSafetyStandards(100);
          setProductionHours(5000);
          setCompliantCleans(500);
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
        <title>Factory Cleaning Columbus Ohio | Red Rock Cleans</title>
        <meta name="description" content="Professional factory cleaning in Columbus, OH. Red Rock Cleans offers heavy-duty cleaning for manufacturing plants in Dublin, Westerville, and beyond to ensure safety and productivity." />
        <meta name="keywords" content="factory cleaning Columbus Ohio, factory cleaning near me, industrial cleaning Columbus Ohio, manufacturing plant cleaning Dublin OH, factory cleaning Westerville, heavy-duty factory cleaning Columbus, production floor cleaning Columbus, machinery degreasing Columbus, OSHA compliant cleaning Columbus, factory cleaning cost Columbus Ohio, industrial cleaning prices Dublin OH, what is factory cleaning Columbus, hire factory cleaners in Columbus Ohio" />
        <link rel="canonical" href="https://redrockcleans.com/columbus-ohio/factory-cleaning" />
      </Helmet>
      
      <ColumbusNavigation loginUrl="https://customer-portal.maidily.com/red-rock-cleans-columbus-ohio/sign-in" bookingUrl="/commercial-quote?location=columbus-ohio" />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/src/assets/hero-commercial.jpg" 
              alt="Professional factory cleaning service in Columbus Ohio"
              className="w-full h-full object-cover scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                Professional Factory Cleaning in Columbus, Ohio
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                A clean, compliant factory is essential for worker safety, operational efficiency, and meeting production goals. Our professional factory cleaning services help Columbus-area manufacturers maintain safe work environments, reduce downtime, and uphold industry standards. Trust Red Rock Cleans to deliver heavy-duty cleaning that keeps your production facility running at peak performance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="h-14 text-lg px-8" asChild>
                  <Link to="/commercial-quote?location=columbus-ohio">
                    <Factory className="w-5 h-5 mr-2" />
                    Schedule Factory Cleaning
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="h-14 text-lg px-8" asChild>
                  <Link to="/contact">
                    <ClipboardCheck className="w-5 h-5 mr-2" />
                    Get Free Assessment
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Enhancing Safety, Compliance, and Productivity Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Enhancing Safety, Compliance, and Productivity
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <HardHat className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Prioritizing Worker Safety</h3>
                      <p className="text-muted-foreground">
                        Our professional factory cleaning removes hazardous spills, debris, and contaminants that can cause workplace accidents in your Columbus facility. We follow strict OSHA protocols to create safer work environments, reducing injury risks and helping your manufacturing operation meet safety standards and compliance requirements.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Cog className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Boosting Production Efficiency</h3>
                      <p className="text-muted-foreground">
                        Clean machinery and organized workspaces prevent costly production downtime and improve workflow efficiency in Columbus factories. Our systematic cleaning keeps equipment running smoothly, reduces maintenance issues, and creates an environment where your team can focus on manufacturing excellence rather than cleaning up.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <ClipboardCheck className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Upholding Industry Standards</h3>
                      <p className="text-muted-foreground">
                        We're committed to providing factory cleaning that meets industry-specific regulations and compliance standards in Columbus. Whether you need food-grade cleaning, pharmaceutical-level sanitation, or general manufacturing cleanliness, our team delivers the quality and documentation required for audits and inspections.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Comprehensive Factory Cleaning Protocol Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Our Comprehensive Factory Cleaning Protocol
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Layers className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">Production Floor Care</h3>
                      <p className="text-muted-foreground">
                        Heavy-duty sweeping, scrubbing, and degreasing of concrete and epoxy floors removes industrial debris, oils, and contaminants from your Columbus production areas. We use industrial-grade equipment to tackle the toughest manufacturing messes, ensuring clean, slip-resistant surfaces that meet safety requirements.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Wrench className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">Machinery & Equipment Cleaning</h3>
                      <p className="text-muted-foreground">
                        Safe cleaning and degreasing of production equipment, assembly lines, and manufacturing machinery keeps your Columbus facility running smoothly. We coordinate with your maintenance team, follow lockout/tagout procedures, and use appropriate cleaning agents that won't damage sensitive equipment or void warranties.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Construction className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">High-Dusting & Structural Cleaning</h3>
                      <p className="text-muted-foreground">
                        Cleaning of ceilings, rafters, pipes, and overhead structures removes accumulated dust and debris that can contaminate production areas in your Columbus factory. Our high-dusting services improve air quality, prevent particle fallout onto products, and maintain the overall cleanliness of your manufacturing environment.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Our Commitment to Ohio's Industries Section */}
        <section id="counters-section" className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Our Commitment to Ohio's Industries
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <ShieldCheck className="h-16 w-16 mx-auto mb-4 opacity-90" />
                  <div className="text-5xl font-bold mb-2">{safetyStandards}%</div>
                  <h3 className="text-xl font-semibold opacity-90">Safety Standards Met</h3>
                </div>
                
                <div className="text-center">
                  <Clock className="h-16 w-16 mx-auto mb-4 opacity-90" />
                  <div className="text-5xl font-bold mb-2">{productionHours.toLocaleString()}+</div>
                  <h3 className="text-xl font-semibold opacity-90">Production Hours Saved</h3>
                </div>
                
                <div className="text-center">
                  <Factory className="h-16 w-16 mx-auto mb-4 opacity-90" />
                  <div className="text-5xl font-bold mb-2">{compliantCleans}+</div>
                  <h3 className="text-xl font-semibold opacity-90">Compliant Cleans Completed</h3>
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
                          <h4 className="font-semibold mb-2">Factory Cleaning Services in {city.name}</h4>
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
                            Schedule {city.name} Factory Cleaning
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
                Other Industrial & Commercial Services in Columbus
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <Warehouse className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Warehouse Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Professional cleaning services for distribution centers and warehouses
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/columbus-ohio/warehouse-cleaning">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <Cog className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Industrial Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Heavy-duty cleaning for industrial facilities and plants
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/columbus-ohio/industrial-cleaning">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <Hammer className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Post Construction Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Professional cleanup for construction and renovation projects
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/columbus-ohio/post-construction-cleaning-services">Learn More</Link>
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
                    <h3 className="text-lg font-semibold">What is included in factory cleaning in Columbus Ohio?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Our comprehensive factory cleaning in Columbus includes production floor sweeping and scrubbing, machinery and equipment degreasing, high-dusting of ceilings and structural elements, restroom and break room sanitization, office area cleaning, debris removal, and waste disposal. We follow OSHA safety protocols and can customize services based on your specific manufacturing requirements and industry standards.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="cost" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">How much does factory cleaning cost in Columbus Ohio?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Factory cleaning costs in Columbus vary based on facility size, production type, cleaning frequency, and specific requirements. Most facilities invest between $1,500-$8,000 per month for regular cleaning services. We provide free on-site assessments and customized quotes based on your Columbus manufacturing facility's unique needs, ensuring you receive the best value for professional industrial cleaning.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="safety" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">How do you ensure safety during Columbus factory cleaning?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Safety is our top priority for Columbus factory cleaning. Our team follows strict OSHA protocols, uses proper lockout/tagout procedures when cleaning near machinery, wears appropriate PPE, coordinates with your production and safety teams, and maintains clear communication throughout the cleaning process. All team members are trained in industrial safety and hazardous material handling for Columbus manufacturing environments.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="schedule" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">Can you clean around our Columbus production schedule?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Yes, we offer flexible scheduling to minimize disruption to your Columbus manufacturing operations. We can clean during shift changes, nights, weekends, or planned maintenance shutdowns. Our team works closely with your facility managers to create a cleaning schedule that maintains productivity while ensuring thorough cleaning of your factory environment.
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
              Ready to Improve Your Factory's Safety & Efficiency?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join Columbus manufacturers that trust Red Rock Cleans for professional, compliant factory cleaning
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
              <Link to="/commercial-quote?location=columbus-ohio">Schedule Your Factory Cleaning Today</Link>
            </Button>
          </div>
        </section>

        {/* Image Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <img 
                src="/src/assets/service-products.jpg" 
                alt="A clean and safe factory floor in Columbus, Ohio after professional cleaning by Red Rock Cleans"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default FactoryCleaningColumbusOhioPage;


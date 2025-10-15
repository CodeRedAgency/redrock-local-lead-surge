import { ColumbusNavigation } from "@/components/ColumbusNavigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Shield, Clock, Wrench, SprayCan, Construction, Layers, ShieldCheck, GanttChartSquare, Factory, Warehouse, HardHat, Hammer } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";

const cities = [
  {
    id: "dublin",
    name: "Dublin",
    description: "Dublin's industrial sector relies on our heavy-duty cleaning services to maintain safe, compliant facilities that meet OSHA standards while maximizing operational efficiency for manufacturing plants and industrial operations.",
    faq: [
      {
        question: "What types of Dublin industrial facilities do you service?",
        answer: "We serve manufacturing plants, warehouses, distribution centers, production facilities, and heavy industrial sites throughout Dublin with specialized cleaning protocols."
      },
      {
        question: "How do you ensure safety during Dublin industrial cleaning?",
        answer: "We follow strict OSHA protocols, use lockout/tagout procedures, coordinate with facility managers, and ensure all team members wear appropriate PPE for Dublin industrial sites."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans' industrial cleaning has significantly improved our Dublin plant's safety ratings. Their professionalism and attention to OSHA compliance is impressive.",
      author: "Safety Director, Dublin Manufacturing Facility"
    }
  },
  {
    id: "upper-arlington",
    name: "Upper Arlington",
    description: "Upper Arlington industrial facilities trust our comprehensive cleaning services that combine heavy-duty equipment degreasing with thorough facility maintenance, ensuring clean, safe work environments for industrial operations.",
    faq: [
      {
        question: "Can you clean around active Upper Arlington production?",
        answer: "Yes, we can schedule industrial cleaning during shifts, maintenance windows, or shutdowns to minimize disruption to your Upper Arlington operations."
      },
      {
        question: "What equipment do you use in Upper Arlington industrial facilities?",
        answer: "We use industrial-grade pressure washers, scrubbers, degreasers, and specialized equipment designed for heavy-duty cleaning in Upper Arlington plants."
      }
    ],
    testimonial: {
      text: "Our Upper Arlington facility has never been cleaner. Red Rock Cleans understands the unique challenges of industrial cleaning and delivers consistently.",
      author: "Plant Manager, Upper Arlington Industrial Park"
    }
  },
  {
    id: "powell",
    name: "Powell",
    description: "Powell's manufacturing sector depends on our specialized industrial cleaning that protects equipment, maintains cleanliness standards, and creates safer work environments through systematic heavy-duty cleaning protocols.",
    faq: [
      {
        question: "Do you provide emergency cleaning for Powell industrial sites?",
        answer: "Yes, we offer 24/7 emergency response for spills, accidents, or urgent cleaning needs at Powell manufacturing and industrial facilities."
      },
      {
        question: "How do you handle hazardous materials in Powell facilities?",
        answer: "Our Powell team is trained in hazmat procedures and follows EPA regulations for safe cleaning and disposal of industrial waste and hazardous materials."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans' industrial cleaning services have been essential to maintaining our Powell plant's operational efficiency. Highly recommended!",
      author: "Operations Manager, Powell Manufacturing Center"
    }
  },
  {
    id: "lewis-center",
    name: "Lewis Center",
    description: "Lewis Center industrial facilities benefit from our heavy-duty cleaning services that remove stubborn grease and grime, maintain equipment, and ensure compliance with safety regulations for optimal operations.",
    faq: [
      {
        question: "What's included in Lewis Center industrial cleaning?",
        answer: "Our service includes equipment degreasing, floor scrubbing and sealing, high-surface cleaning, structural cleaning, debris removal, and pressure washing for Lewis Center facilities."
      },
      {
        question: "How often should Lewis Center industrial sites be cleaned?",
        answer: "Most Lewis Center industrial facilities benefit from weekly or monthly deep cleaning, with daily maintenance cleaning depending on production volume."
      }
    ],
    testimonial: {
      text: "The difference in our Lewis Center plant since partnering with Red Rock Cleans is remarkable. They handle heavy-duty cleaning with expertise.",
      author: "Facility Director, Lewis Center Production Facility"
    }
  },
  {
    id: "worthington",
    name: "Worthington",
    description: "Worthington's industrial operations trust our professional cleaning services to maintain safe work environments, protect valuable machinery, and ensure regulatory compliance through thorough facility maintenance.",
    faq: [
      {
        question: "Are your Worthington crews trained in industrial safety?",
        answer: "Yes, all our Worthington industrial cleaning team members receive OSHA training, lockout/tagout certification, and specialized industrial cleaning instruction."
      },
      {
        question: "Can you clean overhead structures in Worthington facilities?",
        answer: "Absolutely. We specialize in high-surface cleaning including ceilings, beams, pipes, and overhead structures using specialized equipment in Worthington plants."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans delivers the industrial-grade cleaning our Worthington facility requires. Professional service that understands manufacturing environments.",
      author: "Maintenance Supervisor, Worthington Industrial Complex"
    }
  },
  {
    id: "new-albany",
    name: "New Albany",
    description: "New Albany's modern industrial facilities rely on our advanced cleaning services that maintain pristine production environments while protecting sophisticated equipment and meeting stringent cleanliness standards.",
    faq: [
      {
        question: "Do you service high-tech manufacturing in New Albany?",
        answer: "Yes, we serve high-tech and advanced manufacturing facilities in New Albany, adapting our cleaning methods for sensitive equipment and cleanroom requirements."
      },
      {
        question: "How do you minimize downtime in New Albany facilities?",
        answer: "We create efficient cleaning schedules, work during maintenance windows, and deploy appropriate team sizes to minimize impact on New Albany production operations."
      }
    ],
    testimonial: {
      text: "Our New Albany manufacturing facility requires specialized cleaning, and Red Rock Cleans delivers exactly what we need with precision and reliability.",
      author: "Operations Director, New Albany Tech Manufacturing"
    }
  },
  {
    id: "bexley",
    name: "Bexley",
    description: "Bexley industrial facilities depend on our comprehensive cleaning services that combine traditional heavy-duty cleaning with modern safety protocols, maintaining operational excellence and regulatory compliance.",
    faq: [
      {
        question: "What industries do you serve in Bexley?",
        answer: "We serve automotive, food processing, packaging, metal fabrication, and general manufacturing industries throughout Bexley with specialized cleaning protocols."
      },
      {
        question: "Can you provide cleaning documentation for Bexley facilities?",
        answer: "Yes, we maintain detailed cleaning logs, safety checklists, and compliance documentation for your Bexley facility's regulatory and audit requirements."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our Bexley plant with consistency and professionalism. Their industrial cleaning expertise shows in every service.",
      author: "Plant Engineer, Bexley Manufacturing Solutions"
    }
  },
  {
    id: "german-village",
    name: "German Village",
    description: "German Village's small-scale industrial and workshop facilities benefit from our adaptable cleaning services that deliver heavy-duty results for unique production environments in this historic area.",
    faq: [
      {
        question: "Can you clean smaller industrial facilities in German Village?",
        answer: "Yes, we serve industrial facilities of all sizes in German Village, from small workshops to larger manufacturing spaces with customized cleaning plans."
      },
      {
        question: "How do you adapt to German Village's unique buildings?",
        answer: "We adapt our industrial cleaning methods for German Village's historic structures while maintaining the same thorough cleaning and safety standards."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans successfully maintains our German Village workshop. They understand both industrial cleaning and the challenges of historic buildings.",
      author: "Owner, German Village Manufacturing Workshop"
    }
  },
  {
    id: "short-north",
    name: "Short North",
    description: "Short North's creative industrial and production spaces trust our flexible cleaning services that maintain clean, safe environments for artisan manufacturing and small-scale industrial operations.",
    faq: [
      {
        question: "Do you serve craft production facilities in Short North?",
        answer: "Yes, we work with craft breweries, food production, maker spaces, and artisan manufacturing throughout Short North with tailored cleaning protocols."
      },
      {
        question: "Can you accommodate Short North's varied schedules?",
        answer: "Absolutely. We offer flexible scheduling including nights, weekends, and custom timing to accommodate diverse Short North industrial operations."
      }
    ],
    testimonial: {
      text: "Our Short North production space stays spotless thanks to Red Rock Cleans. They understand the unique needs of small-scale industrial facilities.",
      author: "Manager, Short North Craft Brewery"
    }
  },
  {
    id: "victorian-village",
    name: "Victorian Village",
    description: "Victorian Village industrial and production facilities rely on our professional cleaning that combines heavy-duty capabilities with the flexibility needed for operations in this unique neighborhood.",
    faq: [
      {
        question: "What types of Victorian Village industrial sites do you clean?",
        answer: "We clean workshops, small manufacturing facilities, production spaces, and light industrial operations throughout Victorian Village with appropriate methods."
      },
      {
        question: "How do you handle Victorian Village's older buildings?",
        answer: "We adapt our industrial cleaning techniques for Victorian Village's historic structures while maintaining effectiveness and safety standards."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans brings industrial cleaning expertise to our Victorian Village facility. Professional service that respects our unique building.",
      author: "Operations Lead, Victorian Village Production Co."
    }
  },
  {
    id: "hillard",
    name: "Hilliard",
    description: "Hilliard's expanding industrial sector relies on our comprehensive cleaning services that maintain safe, efficient production environments with heavy-duty cleaning designed for high-volume industrial operations.",
    faq: [
      {
        question: "Do you serve Hilliard's industrial parks?",
        answer: "Yes, we regularly service industrial facilities throughout Hilliard's business and industrial parks with consistent, professional heavy-duty cleaning."
      },
      {
        question: "How do you ensure quality in Hilliard industrial facilities?",
        answer: "We use detailed checklists, conduct quality inspections, and maintain open communication with Hilliard facility managers to ensure consistent results."
      }
    ],
    testimonial: {
      text: "Our Hilliard industrial facility has been excellently maintained by Red Rock Cleans. Their systematic approach delivers reliable, thorough cleaning.",
      author: "Facility Manager, Hilliard Industrial Complex"
    }
  },
  {
    id: "westerville",
    name: "Westerville",
    description: "Westerville industrial facilities trust our professional cleaning services to maintain safe work environments that support operational excellence through specialized heavy-duty cleaning and equipment maintenance.",
    faq: [
      {
        question: "What makes your Westerville industrial cleaning different?",
        answer: "We combine industrial cleaning expertise with local knowledge, OSHA compliance focus, and customized service plans for each Westerville facility's unique needs."
      },
      {
        question: "Can you coordinate with Westerville facility schedules?",
        answer: "Yes, we work closely with Westerville facility managers to schedule cleaning around production schedules, maintenance windows, and operational requirements."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provides the industrial-strength cleaning our Westerville plant requires. Professional, reliable, and safety-focused service.",
      author: "Production Manager, Westerville Manufacturing"
    }
  }
];

const IndustrialCleaningColumbusOhioPage = () => {
  const [openAccordion, setOpenAccordion] = useState<string>("");
  const [countersVisible, setCountersVisible] = useState(false);
  const [oshaStandards, setOshaStandards] = useState(0);
  const [heavyMachines, setHeavyMachines] = useState(0);
  const [industrialSites, setIndustrialSites] = useState(0);

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
        
        setOshaStandards(Math.floor(progress * 100));
        setHeavyMachines(Math.floor(progress * 1000));
        setIndustrialSites(Math.floor(progress * 200));

        if (step >= steps) {
          clearInterval(timer);
          setOshaStandards(100);
          setHeavyMachines(1000);
          setIndustrialSites(200);
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
        <title>Industrial Cleaning Services Columbus Ohio | Red Rock Cleans</title>
        <meta name="description" content="Heavy-duty industrial cleaning services in Columbus, OH. Red Rock Cleans provides OSHA compliant cleaning for manufacturing plants and facilities in Dublin, Westerville, and beyond." />
        <meta name="keywords" content="industrial cleaning services Columbus Ohio, industrial cleaning near me, heavy duty cleaning Columbus Ohio, industrial cleaning Dublin OH, industrial cleaners Westerville, industrial equipment cleaning Columbus, manufacturing facility cleaning Columbus, plant deep cleaning Columbus Ohio, OSHA compliant cleaning services Columbus, industrial cleaning cost Columbus Ohio, industrial cleaning rates Columbus, what is industrial cleaning Columbus, hire industrial cleaners in Columbus Ohio" />
        <link rel="canonical" href="https://redrockcleans.com/columbus-ohio/industrial-cleaning" />
      </Helmet>
      
      <ColumbusNavigation loginUrl="https://customer-portal.maidily.com/red-rock-cleans-columbus-ohio/sign-in" bookingUrl="/book-now-columbus-ohio" />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/src/assets/hero-commercial.jpg" 
              alt="Professional industrial cleaning service in Columbus Ohio"
              className="w-full h-full object-cover scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                Heavy-Duty Industrial Cleaning Services in Columbus, Ohio
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Our specialized industrial cleaning services ensure safety, meet OSHA standards, and maximize operational uptime for facilities across the Columbus area. From manufacturing plants to heavy industrial sites, Red Rock Cleans delivers the heavy-duty cleaning expertise that protects your workforce, maintains equipment, and keeps your operations running smoothly. Trust us for industrial cleaning that meets the demanding requirements of modern manufacturing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="h-14 text-lg px-8" asChild>
                  <Link to="/book-now-columbus-ohio">
                    <Factory className="w-5 h-5 mr-2" />
                    Schedule Industrial Cleaning
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="h-14 text-lg px-8" asChild>
                  <Link to="/contact">
                    <ShieldCheck className="w-5 h-5 mr-2" />
                    Request Site Assessment
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Prioritizing Safety, Compliance, and Uptime Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Prioritizing Safety, Compliance, and Uptime
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Ensuring OSHA Compliance</h3>
                      <p className="text-muted-foreground">
                        Our rigorous adherence to OSHA safety regulations protects your Columbus workforce and ensures regulatory compliance. We follow strict safety protocols, use proper PPE, implement lockout/tagout procedures, and maintain detailed documentation that demonstrates your commitment to workplace safety and regulatory standards.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Maximizing Operational Uptime</h3>
                      <p className="text-muted-foreground">
                        Clean machinery and environments prevent costly breakdowns and production delays at your Columbus facility. Our strategic cleaning schedules work around your operations, minimizing disruption while maintaining the cleanliness standards that support continuous production and prevent equipment failures caused by contamination.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Wrench className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Protecting Heavy Machinery</h3>
                      <p className="text-muted-foreground">
                        Our specialized techniques clean and degrease valuable equipment in your Columbus plant, extending its lifespan and maintaining optimal performance. We use industrial-grade cleaning agents and methods specifically designed to remove tough contaminants without damaging sensitive components or voiding equipment warranties.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Our Industrial Cleaning Capabilities Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Our Industrial Cleaning Capabilities
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <SprayCan className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">Equipment & Machinery Degreasing</h3>
                      <p className="text-muted-foreground">
                        Removing tough grease and grime from production machinery in Columbus facilities using industrial-strength degreasers and specialized techniques. We safely clean CNC machines, assembly lines, conveyors, and all production equipment while following manufacturer guidelines and lockout/tagout procedures.
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
                      <h3 className="text-xl font-semibold mb-3">High-Surface & Structural Cleaning</h3>
                      <p className="text-muted-foreground">
                        Cleaning ceilings, support beams, pipes, and other hard-to-reach areas in your Columbus industrial facility. Our specialized equipment and trained technicians safely remove accumulated dust, debris, and contaminants from overhead structures that can compromise air quality and contaminate production areas.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Layers className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">Floor Decontamination & Restoration</h3>
                      <p className="text-muted-foreground">
                        Heavy-duty scrubbing, stripping, and sealing of industrial flooring in Columbus plants. We handle concrete, epoxy, and specialized industrial floors, removing oil stains, chemical residue, and embedded contaminants while restoring slip-resistant surfaces that meet safety standards.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* The Red Rock Cleans Industrial Standard Section */}
        <section id="counters-section" className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                The Red Rock Cleans Industrial Standard
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <ShieldCheck className="h-16 w-16 mx-auto mb-4 opacity-90" />
                  <div className="text-5xl font-bold mb-2">{oshaStandards}%</div>
                  <h3 className="text-xl font-semibold opacity-90">OSHA Standards Met</h3>
                </div>
                
                <div className="text-center">
                  <GanttChartSquare className="h-16 w-16 mx-auto mb-4 opacity-90" />
                  <div className="text-5xl font-bold mb-2">{heavyMachines.toLocaleString()}+</div>
                  <h3 className="text-xl font-semibold opacity-90">Heavy Machines Serviced</h3>
                </div>
                
                <div className="text-center">
                  <Factory className="h-16 w-16 mx-auto mb-4 opacity-90" />
                  <div className="text-5xl font-bold mb-2">{industrialSites}+</div>
                  <h3 className="text-xl font-semibold opacity-90">Industrial Sites Maintained</h3>
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
                          <h4 className="font-semibold mb-2">Industrial Cleaning Services in {city.name}</h4>
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
                          <Link to="/book-now-columbus-ohio">
                            Schedule {city.name} Industrial Cleaning
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
                Other Commercial Cleaning Services in Columbus
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <HardHat className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Factory Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Professional cleaning for manufacturing plants and production facilities
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/columbus-ohio/factory-cleaning">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <Warehouse className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Warehouse Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Professional cleaning for distribution centers and warehouses
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/columbus-ohio/warehouse-cleaning">Learn More</Link>
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
                    <h3 className="text-lg font-semibold">What is included in industrial cleaning services in Columbus Ohio?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Our comprehensive industrial cleaning in Columbus includes equipment and machinery degreasing, production floor scrubbing and sealing, high-surface and structural cleaning, pressure washing, debris removal, hazardous waste handling, and facility-wide sanitation. We follow OSHA safety protocols and can customize services based on your specific industrial requirements, production schedules, and compliance needs.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="cost" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">How much does industrial cleaning cost in Columbus Ohio?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Industrial cleaning costs in Columbus vary based on facility size, contamination level, equipment requirements, and cleaning frequency. Most industrial facilities invest between $2,000-$15,000 per month for regular cleaning services. We provide free on-site assessments and customized quotes based on your Columbus facility's specific needs, ensuring competitive pricing for the heavy-duty cleaning your operations require.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="safety" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">How do you ensure safety during Columbus industrial cleaning?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Safety is our top priority for Columbus industrial cleaning. Our team follows strict OSHA protocols, uses proper lockout/tagout procedures, wears appropriate PPE, coordinates with facility safety teams, and maintains clear communication throughout the cleaning process. All team members receive OSHA training, hazmat certification, and specialized industrial cleaning instruction to ensure the safest possible service at your Columbus facility.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="schedule" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">Can you clean around our Columbus production schedule?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Yes, we offer flexible scheduling to minimize disruption to your Columbus manufacturing operations. We can clean during shift changes, nights, weekends, planned maintenance shutdowns, or around active production. Our team works closely with your facility managers to create cleaning schedules that maintain productivity while ensuring thorough industrial cleaning of your Columbus facility.
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
              Ready to Enhance Your Industrial Facility's Safety & Efficiency?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join Columbus industrial facilities that trust Red Rock Cleans for professional, OSHA-compliant cleaning
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
              <Link to="/book-now-columbus-ohio">Schedule Your Industrial Cleaning Assessment</Link>
            </Button>
          </div>
        </section>

        {/* Image Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <img 
                src="/src/assets/service-products.jpg" 
                alt="A heavy-duty industrial facility in Columbus, Ohio after a thorough cleaning by Red Rock Cleans"
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

export default IndustrialCleaningColumbusOhioPage;


import { ColumbusNavigation } from "@/components/ColumbusNavigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Cpu, Award, Clock, Grid, Server, SprayCan, Database, TrendingUp, ShieldCheck, Building, Shield, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";

const cities = [
  {
    id: "dublin",
    name: "Dublin",
    description: "Dublin's growing tech sector relies on our specialized data center cleaning services to maintain critical infrastructure with ISO 14644-1 compliant cleaning protocols that protect sensitive equipment and ensure operational continuity.",
    faq: [
      {
        question: "What standards do you follow for data center cleaning in Dublin?",
        answer: "We follow ISO 14644-1 cleanroom standards and use anti-static cleaning methods specifically designed for critical environments in Dublin data centers."
      },
      {
        question: "How often should data centers in Dublin be professionally cleaned?",
        answer: "Most Dublin data centers require quarterly deep cleaning with monthly maintenance cleaning to maintain optimal conditions and prevent equipment degradation."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans' specialized cleaning has significantly reduced our Dublin data center's particle count. Their understanding of critical environments is unmatched.",
      author: "IT Director, Dublin Tech Campus"
    }
  },
  {
    id: "upper-arlington",
    name: "Upper Arlington",
    description: "Upper Arlington businesses trust our precision data center cleaning to protect their IT infrastructure with specialized techniques that prevent contamination and maintain cleanroom standards for optimal server performance.",
    faq: [
      {
        question: "Do you provide emergency cleaning for Upper Arlington data centers?",
        answer: "Yes, we offer 24/7 emergency response for critical contamination events or pre-audit cleaning needs in Upper Arlington facilities."
      },
      {
        question: "Can you work around our Upper Arlington data center operations?",
        answer: "Absolutely. We schedule cleaning during maintenance windows or off-peak hours to minimize impact on your Upper Arlington operations."
      }
    ],
    testimonial: {
      text: "The team's attention to detail during our Upper Arlington server room cleaning was exceptional. Zero downtime and pristine results.",
      author: "Facilities Manager, Upper Arlington Corporate Center"
    }
  },
  {
    id: "powell",
    name: "Powell",
    description: "Powell's expanding business district depends on our expert data center cleaning services that combine advanced contamination control with flexible scheduling to protect critical infrastructure without disrupting operations.",
    faq: [
      {
        question: "What equipment do you use for Powell data center cleaning?",
        answer: "We use HEPA-filtered vacuums, anti-static cleaning solutions, and specialized tools designed specifically for cleanroom and data center environments in Powell."
      },
      {
        question: "How do you prevent static damage in Powell data centers?",
        answer: "Our team uses grounded equipment, anti-static cleaning solutions, and proper ESD protocols to eliminate static risks during Powell data center cleaning."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans transformed our Powell server room. Their understanding of sub-floor cleaning and cable management is outstanding.",
      author: "Network Administrator, Powell Business Park"
    }
  },
  {
    id: "lewis-center",
    name: "Lewis Center",
    description: "Lewis Center data centers benefit from our comprehensive cleaning protocols that address raised floors, server racks, and environmental surfaces with precision methods designed to maintain uptime and equipment reliability.",
    faq: [
      {
        question: "Do you clean raised floors in Lewis Center data centers?",
        answer: "Yes, we specialize in raised floor and sub-floor cleaning, removing accumulated dust and debris that can affect cooling efficiency in Lewis Center facilities."
      },
      {
        question: "Are your cleaning methods safe for Lewis Center server equipment?",
        answer: "Absolutely. We use only anti-static, non-conductive cleaning materials specifically formulated for sensitive electronic equipment in Lewis Center data centers."
      }
    ],
    testimonial: {
      text: "Our Lewis Center data center has never been cleaner. Red Rock Cleans' systematic approach gave us confidence in their expertise.",
      author: "Data Center Manager, Lewis Center Enterprise Hub"
    }
  },
  {
    id: "worthington",
    name: "Worthington",
    description: "Worthington's technology infrastructure relies on our ISO-compliant data center cleaning that reduces particle counts, prevents equipment overheating, and maintains the pristine conditions required for mission-critical operations.",
    faq: [
      {
        question: "What certifications does your Worthington team hold?",
        answer: "Our Worthington data center cleaning team holds certifications in cleanroom protocols, ESD safety, and critical environment maintenance."
      },
      {
        question: "Can you provide cleaning documentation for Worthington audits?",
        answer: "Yes, we provide detailed cleaning reports, particle count measurements, and compliance documentation for your Worthington facility audits."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans' professionalism and expertise in our Worthington data center exceeded expectations. Highly recommended for critical environments.",
      author: "Chief Technology Officer, Worthington Financial Services"
    }
  },
  {
    id: "new-albany",
    name: "New Albany",
    description: "New Albany's corporate data centers trust our specialized cleaning services to maintain critical environment standards with precision contamination control that protects investments in sensitive computing infrastructure.",
    faq: [
      {
        question: "How do you handle cable management during New Albany cleaning?",
        answer: "We carefully clean around and beneath cable management systems in New Albany facilities, documenting any concerns and maintaining organizational integrity."
      },
      {
        question: "What's included in New Albany data center cleaning?",
        answer: "Our service includes raised floor cleaning, server exterior detailing, environmental surface cleaning, and sub-floor debris removal in New Albany facilities."
      }
    ],
    testimonial: {
      text: "The Red Rock Cleans team understood the sensitivity of our New Albany data center operations. Excellent communication and flawless execution.",
      author: "Operations Director, New Albany Tech Center"
    }
  },
  {
    id: "bexley",
    name: "Bexley",
    description: "Bexley businesses depend on our meticulous data center cleaning protocols that combine industry best practices with local expertise to ensure critical infrastructure remains operational and contamination-free.",
    faq: [
      {
        question: "Do you work with older data centers in Bexley?",
        answer: "Yes, we adapt our cleaning protocols for legacy systems and older facilities in Bexley, ensuring safe and effective cleaning regardless of infrastructure age."
      },
      {
        question: "How quickly can you respond to Bexley cleaning requests?",
        answer: "We typically schedule initial assessments within 48 hours and can mobilize emergency cleaning teams within 24 hours for Bexley facilities."
      }
    ],
    testimonial: {
      text: "Our historic Bexley building's server room needed specialized attention. Red Rock Cleans delivered exceptional results with careful planning.",
      author: "Facility Director, Bexley Professional Complex"
    }
  },
  {
    id: "german-village",
    name: "German Village",
    description: "German Village's unique blend of historic architecture and modern technology requires our adaptive data center cleaning approach that protects sensitive equipment while respecting the character of these distinctive spaces.",
    faq: [
      {
        question: "Can you clean small server rooms in German Village?",
        answer: "Yes, we service data centers of all sizes in German Village, from large facilities to small server rooms and network closets."
      },
      {
        question: "What makes German Village data center cleaning unique?",
        answer: "German Village facilities often require custom approaches due to historic building constraints, which our experienced team navigates expertly."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans successfully cleaned our German Village server room in a century-old building. Their flexibility and expertise were invaluable.",
      author: "IT Manager, German Village Design Firm"
    }
  },
  {
    id: "short-north",
    name: "Short North",
    description: "Short North's vibrant business community trusts our data center cleaning expertise to maintain critical infrastructure with precision methods that ensure uptime for the creative and tech businesses that define this district.",
    faq: [
      {
        question: "Do you serve creative agencies in Short North?",
        answer: "Yes, we work with advertising, design, and tech agencies throughout Short North, protecting their digital infrastructure with specialized cleaning."
      },
      {
        question: "Can you accommodate tight schedules in Short North?",
        answer: "We offer flexible scheduling including after-hours and weekend cleaning to accommodate busy Short North business operations."
      }
    ],
    testimonial: {
      text: "Our Short North agency's server room cooling improved dramatically after Red Rock Cleans' thorough sub-floor cleaning. Impressive results!",
      author: "Creative Director, Short North Digital Agency"
    }
  },
  {
    id: "victorian-village",
    name: "Victorian Village",
    description: "Victorian Village businesses benefit from our specialized data center cleaning that bridges historic charm with modern technology needs, ensuring critical systems remain protected and operational.",
    faq: [
      {
        question: "How do you handle Victorian Village's older buildings?",
        answer: "We adapt our cleaning protocols for Victorian Village's unique infrastructure while maintaining the same high standards for contamination control."
      },
      {
        question: "What if our Victorian Village facility has limited access?",
        answer: "Our team is experienced with challenging access situations common in Victorian Village and plans accordingly for equipment and personnel."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans navigated our Victorian Village building's quirks perfectly while delivering professional data center cleaning. Great team!",
      author: "Systems Administrator, Victorian Village Consulting Group"
    }
  },
  {
    id: "hillard",
    name: "Hilliard",
    description: "Hilliard's growing tech sector relies on our comprehensive data center cleaning services that maintain ISO cleanroom standards and protect critical infrastructure investments with proven contamination control methods.",
    faq: [
      {
        question: "Do you service Hilliard's industrial parks?",
        answer: "Yes, we regularly service data centers in Hilliard's business and industrial parks, providing consistent, high-quality critical environment cleaning."
      },
      {
        question: "What's your response time for Hilliard emergencies?",
        answer: "We maintain rapid response capabilities for Hilliard facilities, with emergency teams available 24/7 for critical contamination events."
      }
    ],
    testimonial: {
      text: "Our Hilliard data center's performance metrics improved after Red Rock Cleans' cleaning. Their systematic approach is exactly what we needed.",
      author: "Infrastructure Manager, Hilliard Tech Facility"
    }
  },
  {
    id: "westerville",
    name: "Westerville",
    description: "Westerville data centers trust our precision cleaning protocols to maintain optimal operating conditions with specialized techniques that remove contaminants, improve cooling efficiency, and extend equipment lifespan.",
    faq: [
      {
        question: "How do you ensure quality in Westerville data centers?",
        answer: "We use particle counters, detailed checklists, and photographic documentation to verify cleaning effectiveness in Westerville facilities."
      },
      {
        question: "Can you coordinate with our Westerville IT team?",
        answer: "Absolutely. We work closely with your Westerville IT staff to ensure cleaning schedules align with maintenance windows and operational requirements."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans' Westerville data center cleaning exceeded our expectations. Professional, thorough, and minimal disruption to operations.",
      author: "Data Center Supervisor, Westerville Business Solutions"
    }
  }
];

const DataCenterCleaningColumbusOhioPage = () => {
  const [openAccordion, setOpenAccordion] = useState<string>("");
  const [countersVisible, setCountersVisible] = useState(false);
  const [dataCenters, setDataCenters] = useState(0);
  const [uptime, setUptime] = useState(0);
  const [specialists, setSpecialists] = useState(0);

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
        
        setDataCenters(Math.floor(progress * 150));
        setUptime(Math.floor(progress * 99.9 * 10) / 10);
        setSpecialists(Math.floor(progress * 25));

        if (step >= steps) {
          clearInterval(timer);
          setDataCenters(150);
          setUptime(99.9);
          setSpecialists(25);
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
        <title>Data Center Cleaning Columbus Ohio | Red Rock Cleans</title>
        <meta name="description" content="Specialized data center cleaning in Columbus, OH. Red Rock Cleans offers ISO 14644-1 compliant server room, sub-floor, and critical environment cleaning in Dublin and New Albany to ensure uptime." />
        <meta name="keywords" content="data center cleaning Columbus Ohio, data center cleaning near me, server room cleaning Columbus Ohio, critical environment cleaning Dublin OH, raised floor cleaning New Albany, professional data center cleaners Columbus, ISO 14644-1 cleaning Columbus Ohio, anti-static cleaning Columbus, sub-floor cleaning Columbus, data center cleaning cost Columbus Ohio, data center maintenance services Columbus, data center cleaning checklist Columbus, hire data center cleaning services in Columbus" />
        <link rel="canonical" href="https://redrockcleans.com/columbus-ohio/data-center-cleaning" />
      </Helmet>
      
      <ColumbusNavigation loginUrl="https://customer-portal.maidily.com/red-rock-cleans-columbus-ohio/sign-in" bookingUrl="/book-now-columbus-ohio" />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/src/assets/hero-commercial.jpg" 
              alt="Professional data center cleaning service in Columbus Ohio"
              className="w-full h-full object-cover scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                Specialized Data Center Cleaning in Columbus, Ohio
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Maintaining data integrity and uptime is critical for businesses in Columbus and the Silicon Heartland. Our specialized cleaning services protect your critical infrastructure with ISO 14644-1 compliant protocols, preventing contamination and equipment failure. Trust Red Rock Cleans to keep your data center operating at peak performance with precision cleaning designed for mission-critical environments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="h-14 text-lg px-8" asChild>
                  <Link to="/book-now-columbus-ohio">
                    <ShieldCheck className="w-5 h-5 mr-2" />
                    Request Assessment
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="h-14 text-lg px-8" asChild>
                  <Link to="/contact">
                    <Database className="w-5 h-5 mr-2" />
                    Contact Our Team
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Protecting Ohio's Critical Infrastructure Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Protecting Ohio's Critical Infrastructure
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Cpu className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Precision Contamination Control</h3>
                      <p className="text-muted-foreground">
                        Our advanced cleaning methods eliminate dust particles and prevent static buildup that can compromise sensitive hardware in your Columbus data center. We use HEPA-filtered equipment and anti-static protocols to maintain pristine conditions that protect your critical IT infrastructure investments.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">ISO & Industry Compliance</h3>
                      <p className="text-muted-foreground">
                        We strictly adhere to ISO 14644-1 cleanroom standards and industry best practices for critical environment cleaning in Columbus. Our certified team follows documented protocols that meet or exceed regulatory requirements, providing the compliance documentation you need for audits and certifications.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Minimizing Downtime Risk</h3>
                      <p className="text-muted-foreground">
                        Proactive cleaning prevents equipment overheating and system failures that can cost your Columbus business thousands per hour. Our systematic approach removes contaminants before they impact performance, extending hardware lifespan and maintaining the uptime your operations depend on.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Comprehensive Data Center Cleaning Protocol Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Our Comprehensive Data Center Cleaning Protocol
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Grid className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">Raised Floor & Sub-Floor Cleaning</h3>
                      <p className="text-muted-foreground">
                        Specialized HEPA-filtered vacuuming removes accumulated dust and debris beneath raised floors in your Columbus data center. We clean cable pathways, inspect for moisture or pest issues, and ensure optimal airflow for cooling systems, preventing hotspots and equipment damage.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Server className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">Server Rack & Equipment Detailing</h3>
                      <p className="text-muted-foreground">
                        Anti-static cleaning of server exteriors, cable management systems, and equipment surfaces protects sensitive electronics in your Columbus facility. We carefully detail rack-mounted equipment, switches, routers, and cable runs using ESD-safe methods and materials designed for critical environments.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <SprayCan className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">Environmental Surface Disinfection</h3>
                      <p className="text-muted-foreground">
                        Comprehensive cleaning of walls, ceilings, lighting, HVAC vents, and access doors maintains cleanroom standards throughout your Columbus data center. We eliminate particle sources and prevent contamination from entering the critical zone, supporting consistent environmental conditions.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Our Commitment to the Silicon Heartland Section */}
        <section id="counters-section" className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Our Commitment to the Silicon Heartland
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <Database className="h-16 w-16 mx-auto mb-4 opacity-90" />
                  <div className="text-5xl font-bold mb-2">{dataCenters}+</div>
                  <h3 className="text-xl font-semibold opacity-90">Data Centers Secured in OH</h3>
                </div>
                
                <div className="text-center">
                  <TrendingUp className="h-16 w-16 mx-auto mb-4 opacity-90" />
                  <div className="text-5xl font-bold mb-2">{uptime}%</div>
                  <h3 className="text-xl font-semibold opacity-90">Uptime Percentage Maintained</h3>
                </div>
                
                <div className="text-center">
                  <ShieldCheck className="h-16 w-16 mx-auto mb-4 opacity-90" />
                  <div className="text-5xl font-bold mb-2">{specialists}+</div>
                  <h3 className="text-xl font-semibold opacity-90">Certified Cleanroom Specialists</h3>
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
                          <h4 className="font-semibold mb-2">Data Center Cleaning Services in {city.name}</h4>
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
                            Schedule {city.name} Data Center Assessment
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
                    <Building className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Industrial Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Professional cleaning services for manufacturing and industrial facilities
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/columbus-ohio/industrial-cleaning">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <Shield className="h-8 w-8 text-primary mx-auto mb-4" />
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
                    <h3 className="text-lg font-semibold">What's included in data center cleaning in Columbus Ohio?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Our comprehensive data center cleaning in Columbus includes raised floor and sub-floor vacuuming, server rack and equipment detailing with anti-static methods, cable management cleaning, environmental surface disinfection, HVAC vent cleaning, and particle count verification. We follow ISO 14644-1 protocols and provide detailed documentation of all cleaning activities.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="cost" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">How much does data center cleaning cost in Columbus Ohio?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Data center cleaning costs in Columbus vary based on facility size, contamination level, and cleaning frequency. Most facilities invest between $2,000-$10,000 per cleaning event, with quarterly maintenance programs offering the best value. We provide free on-site assessments and customized quotes based on your Columbus data center's specific requirements and compliance needs.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="frequency" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">How often should Columbus data centers be professionally cleaned?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Most Columbus data centers benefit from quarterly deep cleaning with monthly or bi-monthly maintenance cleaning. High-density facilities or those with elevated particle counts may require more frequent service. We recommend particle count monitoring between cleanings to establish the optimal schedule for your specific environment and maintain ISO compliance.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="standards" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">What cleaning standards do you follow for Columbus data centers?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      We follow ISO 14644-1 cleanroom standards, ANSI/TIA-942 data center standards, and manufacturer-specific guidelines for critical environment cleaning in Columbus. Our team uses ESD-safe equipment, HEPA-filtered vacuums, and anti-static cleaning solutions. We provide detailed cleaning reports and particle count documentation to verify compliance with industry standards.
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
              Protect Your Critical Infrastructure Today
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join Columbus businesses that trust Red Rock Cleans for ISO-compliant data center cleaning
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
              <Link to="/book-now-columbus-ohio">Schedule Your Data Center Assessment</Link>
            </Button>
          </div>
        </section>

        {/* Image Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <img 
                src="/src/assets/service-products.jpg" 
                alt="A pristine server room in a Columbus, Ohio data center after specialized cleaning by Red Rock Cleans"
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

export default DataCenterCleaningColumbusOhioPage;


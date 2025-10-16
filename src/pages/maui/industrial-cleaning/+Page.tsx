import { MauiNavigation } from "@/components/MauiNavigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Shield, Clock, Wrench, SprayCan, Construction, Layers, ShieldCheck, GanttChartSquare, Factory, MapPin, Calendar, Home, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import CountUp from "react-countup";

const towns = [
  {
    id: "wailea",
    name: "Wailea",
    description: "Wailea industrial facilities trust our heavy-duty cleaning services to maintain OSHA-compliant environments that protect workers, prevent equipment failures, and maximize operational efficiency.",
    faq: [
      {
        question: "Can you clean our Wailea industrial facility during downtime?",
        answer: "Yes, we schedule industrial cleaning during planned shutdowns, off-shifts, or weekends to minimize disruption to your operations while ensuring thorough decontamination and equipment cleaning."
      },
      {
        question: "What safety protocols do you follow in Wailea?",
        answer: "All technicians are OSHA-trained, use proper PPE, follow lockout/tagout procedures, and coordinate with your safety team to ensure compliant, accident-free cleaning services."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has maintained our Wailea industrial plant for four years. Their understanding of OSHA requirements and heavy equipment cleaning is unmatched.",
      author: "Safety Director, Wailea Industrial Complex"
    }
  },
  {
    id: "makena",
    name: "Makena",
    description: "Makena manufacturing plants rely on our specialized industrial cleaning to remove hazardous residues, prevent cross-contamination, and maintain the clean environment essential for quality production.",
    faq: [
      {
        question: "How do you handle hazardous materials in Makena?",
        answer: "We follow strict protocols for handling industrial waste and hazardous materials, using appropriate containment, PPE, and disposal methods in compliance with all environmental regulations."
      },
      {
        question: "Do you provide emergency cleaning in Makena?",
        answer: "Yes, we offer 24/7 emergency response for spills, contamination events, or urgent pre-inspection cleaning to ensure your facility meets compliance standards."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans' proactive approach to our Makena facility has reduced our safety incidents and improved our regulatory compliance record significantly.",
      author: "Plant Manager, Makena Manufacturing"
    }
  },
  {
    id: "kihei",
    name: "Kihei",
    description: "Kihei industrial sites benefit from our comprehensive cleaning services that address heavy machinery, production floors, and structural elements to ensure worker safety and operational efficiency.",
    faq: [
      {
        question: "What is included in Kihei industrial cleaning?",
        answer: "Our service includes equipment degreasing, floor decontamination, high-surface cleaning, structural washing, waste removal, and detailed documentation for OSHA compliance."
      },
      {
        question: "How often should Kihei facilities schedule cleaning?",
        answer: "We recommend weekly heavy-duty cleaning for production areas, monthly deep equipment cleaning, and quarterly structural cleaning for optimal safety and compliance."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans' systematic approach to industrial cleaning has transformed our Kihei facility's safety record and operational reliability.",
      author: "Operations Director, Kihei Industrial Park"
    }
  },
  {
    id: "kapalua",
    name: "Kapalua",
    description: "Kapalua industrial operations trust our OSHA-compliant cleaning services to maintain safe working environments while protecting valuable equipment from damaging buildup and contamination.",
    faq: [
      {
        question: "Are your Kapalua cleanings OSHA compliant?",
        answer: "Yes, all our industrial cleaning protocols adhere to OSHA safety standards, including proper signage, confined space procedures, and hazard communication requirements."
      },
      {
        question: "What makes your Kapalua service different?",
        answer: "We specialize in industrial environments with heavy-duty equipment, OSHA-trained staff, and protocols specifically designed for manufacturing and production facilities."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provides the level of industrial expertise our Kapalua facility requires. Their safety awareness and technical knowledge are exceptional.",
      author: "Facility Manager, Kapalua Industrial Center"
    }
  },
  {
    id: "kaanapali",
    name: "Ka'anapali",
    description: "Ka'anapali manufacturing facilities rely on our specialized services to remove industrial buildup, maintain equipment performance, and create safe working environments for all employees.",
    faq: [
      {
        question: "How do you minimize downtime in Ka'anapali?",
        answer: "We coordinate with your production schedule, use efficient cleaning methods, and deploy experienced teams to complete work quickly during planned maintenance windows."
      },
      {
        question: "Can you clean around operating machinery?",
        answer: "When necessary, our technicians can safely clean around operating equipment following strict safety protocols, though we recommend cleaning during shutdowns for optimal results."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has never caused a production delay at our Ka'anapali facility. Their efficiency and safety compliance are outstanding.",
      author: "Production Manager, Ka'anapali Manufacturing"
    }
  },
  {
    id: "lahaina",
    name: "Lahaina",
    description: "Lahaina industrial facilities benefit from our comprehensive cleaning that addresses production equipment, floors, structural elements, and all industrial surfaces to maintain safety and efficiency.",
    faq: [
      {
        question: "What cleaning methods do you use in Lahaina?",
        answer: "We use industrial-grade pressure washers, degreasers, HEPA vacuums, and specialized equipment designed for heavy-duty manufacturing environments and tough industrial residues."
      },
      {
        question: "Can you clean specialized industrial equipment?",
        answer: "Yes, we clean all types of industrial machinery following manufacturer specifications and your facility's maintenance procedures to protect equipment integrity."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans' expertise in industrial cleaning is evident in our Lahaina plant. Our equipment runs better and our safety metrics have improved dramatically.",
      author: "Maintenance Director, Lahaina Industrial Facility"
    }
  },
  {
    id: "spreckelsville",
    name: "Spreckelsville",
    description: "Spreckelsville industrial operations trust our precision cleaning services to maintain the safe, compliant environment essential for productive manufacturing operations.",
    faq: [
      {
        question: "How do you ensure quality in Spreckelsville?",
        answer: "We use detailed checklists, conduct safety inspections, provide comprehensive documentation, and maintain regular communication to ensure consistent, compliant service."
      },
      {
        question: "What are your rates for Spreckelsville industrial cleaning?",
        answer: "Pricing varies based on facility size, cleaning frequency, equipment types, and specific requirements. Contact us for a customized quote tailored to your industrial needs."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been instrumental in maintaining our Spreckelsville facility's compliance standards. Their systematic approach is exactly what industrial sites need.",
      author: "Compliance Officer, Spreckelsville Manufacturing"
    }
  },
  {
    id: "paia",
    name: "Pa'ia",
    description: "Pa'ia industrial sites rely on our expert cleaning services to eliminate hazards, maintain equipment performance, and create the safe environment that supports continuous production.",
    faq: [
      {
        question: "Do you serve small industrial facilities in Pa'ia?",
        answer: "Yes, we service industrial operations of all sizes, from small manufacturing shops to large production plants, with the same level of expertise and safety compliance."
      },
      {
        question: "What safety training do your Pa'ia teams have?",
        answer: "All technicians complete OSHA 30-hour training, confined space certification, hazmat awareness, and site-specific safety orientation before servicing industrial facilities."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans transformed our Pa'ia production facility from a compliance concern to a safety showcase. Their industrial cleaning expertise is evident in every detail.",
      author: "Safety Manager, Pa'ia Industrial Operations"
    }
  },
  {
    id: "kuau",
    name: "Kuau",
    description: "Kuau industrial facilities benefit from our specialized cleaning protocols designed to remove industrial contaminants while protecting equipment and ensuring worker safety.",
    faq: [
      {
        question: "How quickly can you respond in Kuau?",
        answer: "We offer same-day emergency response for critical situations and can schedule routine industrial maintenance within 48 hours of initial contact."
      },
      {
        question: "Do you provide cleaning documentation in Kuau?",
        answer: "Yes, we provide detailed service logs, safety compliance reports, before/after photos, and all documentation required for OSHA audits and inspections."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans' proactive approach to our Kuau facility has reduced our maintenance costs and improved our safety record. They're true industrial cleaning professionals.",
      author: "Plant Director, Kuau Industrial Complex"
    }
  },
  {
    id: "haiku",
    name: "Ha'iku",
    description: "Ha'iku manufacturing plants trust our OSHA-compliant cleaning services to maintain the safe, efficient environment essential for productive industrial operations.",
    faq: [
      {
        question: "What makes Ha'iku industrial facilities unique?",
        answer: "Ha'iku's industrial operations often have unique environmental challenges. We customize our protocols to address specific needs while maintaining OSHA compliance standards."
      },
      {
        question: "Can you train our staff in Ha'iku?",
        answer: "Yes, we offer training sessions on basic industrial housekeeping, spill response, and best practices for maintaining clean work areas between professional services."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been essential to our Ha'iku facility's success. Their understanding of industrial cleaning and safety requirements is exceptional.",
      author: "Operations Manager, Ha'iku Manufacturing Center"
    }
  }
];

const IndustrialCleaningMauiPage = () => {
  const [openAccordion, setOpenAccordion] = useState<string>("");

  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash) {
      setOpenAccordion(hash);
    }
  }, []);

  const handleAccordionChange = (value: string) => {
    setOpenAccordion(value);
    window.location.hash = value;
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Industrial Cleaning Services Maui | Red Rock Cleans</title>
        <meta name="description" content="Heavy-duty industrial cleaning services on Maui. Red Rock Cleans provides OSHA compliant cleaning for manufacturing plants, equipment, and industrial facilities to ensure safety and uptime." />
        <meta name="keywords" content="industrial cleaning near me, heavy duty cleaning Maui, industrial cleaning Kihei, industrial cleaners Lahaina, industrial equipment cleaning Maui, manufacturing facility cleaning Maui, plant deep cleaning Maui, OSHA compliant cleaning services Maui, industrial cleaning cost Maui, industrial cleaning rates Maui, what is industrial cleaning Maui, hire industrial cleaners in Maui" />
        <link rel="canonical" href="https://redrockcleans.com/maui/industrial-cleaning" />
      </Helmet>
      
      <MauiNavigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/src/assets/hero-commercial.jpg" 
              alt="Professional industrial cleaning service at a Maui manufacturing facility"
              className="w-full h-full object-cover scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                Heavy-Duty Industrial Cleaning Services on Maui
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Our specialized industrial cleaning services ensure safety, meet OSHA standards, and maximize operational uptime for facilities across Maui. From heavy equipment degreasing to structural cleaning and floor decontamination, we provide the comprehensive industrial cleaning that protects your workforce, extends machinery life, and keeps your production running at peak efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="h-14 text-lg px-8" asChild>
                  <Link to="/commercial-quote?location=maui">
                    <Calendar className="w-5 h-5 mr-2" />
                    Get Your Free Assessment
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="h-14 text-lg px-8" asChild>
                  <Link to="/contact">
                    <Home className="w-5 h-5 mr-2" />
                    Contact Us
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
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Ensuring OSHA Compliance</h3>
                      <p className="text-muted-foreground">
                        Our rigorous adherence to safety regulations protects your workforce and ensures your facility meets all OSHA standards. We maintain proper documentation, use compliant procedures, and create the safe environment your employees deserve.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Maximizing Operational Uptime</h3>
                      <p className="text-muted-foreground">
                        Clean machinery and environments prevent costly breakdowns and delays. Our scheduled maintenance cleaning removes contaminants that cause equipment failures, helping you avoid expensive downtime and production losses.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Wrench className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Protecting Heavy Machinery</h3>
                      <p className="text-muted-foreground">
                        Our specialized techniques clean and degrease valuable equipment without damage, extending machinery lifespan and protecting your capital investments. We follow manufacturer specifications for safe, effective cleaning.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Industrial Cleaning Capabilities Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Our Industrial Cleaning Capabilities
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <SprayCan className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Equipment & Machinery Degreasing</h3>
                      <p className="text-muted-foreground">
                        Removing tough grease and grime from production machinery using industrial-strength degreasers and specialized equipment. We clean all types of manufacturing equipment while protecting sensitive components and ensuring operational integrity.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Construction className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">High-Surface & Structural Cleaning</h3>
                      <p className="text-muted-foreground">
                        Cleaning ceilings, support beams, pipes, and other hard-to-reach areas to remove accumulated dust, debris, and contaminants. Our high-reach equipment and safety protocols ensure thorough cleaning at any height.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Layers className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Floor Decontamination & Restoration</h3>
                      <p className="text-muted-foreground">
                        Heavy-duty scrubbing, stripping, and sealing of industrial flooring to remove chemical residues, oil stains, and embedded contaminants. We restore floors to safe, compliant conditions that support your operations.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Red Rock Cleans Industrial Standard Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                The Red Rock Cleans Industrial Standard
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ShieldCheck className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    100%
                  </div>
                  <h3 className="text-lg font-semibold mb-2">OSHA Standards Met</h3>
                  <p className="text-muted-foreground text-sm">
                    Perfect compliance record across all Maui industrial facilities
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <GanttChartSquare className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    <CountUp end={500} duration={2} />+
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Heavy Machines Serviced</h3>
                  <p className="text-muted-foreground text-sm">
                    Industrial equipment cleaned and maintained across Maui
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Factory className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    <CountUp end={40} duration={2} />+
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Industrial Sites Maintained</h3>
                  <p className="text-muted-foreground text-sm">
                    Manufacturing and production facilities trust our services
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Areas We Serve Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Areas We Serve on Maui
              </h2>
              
              {/* Town Selector */}
              <div className="max-w-md mx-auto mb-12">
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    value={openAccordion}
                    onChange={(e) => {
                      const value = e.target.value;
                      setOpenAccordion(value);
                      window.location.hash = value;
                      // Scroll to the accordion item
                      setTimeout(() => {
                        const element = document.getElementById(value);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        }
                      }, 100);
                    }}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white text-gray-900"
                  >
                    <option value="">Select a Maui Town</option>
                    {towns.map((town) => (
                      <option key={town.id} value={town.id}>
                        {town.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              
              <Accordion type="single" value={openAccordion} onValueChange={handleAccordionChange} className="space-y-4">
                {towns.map((town) => (
                  <AccordionItem key={town.id} value={town.id} id={town.id} className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <div>
                        <h3 className="text-lg font-semibold">{town.name}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{town.description}</p>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold mb-2">Local Industrial Cleaning Services</h4>
                          <p className="text-muted-foreground">
                            {town.description}
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-2">Frequently Asked Questions</h4>
                          <div className="space-y-2">
                            {town.faq.map((faq, index) => (
                              <div key={index}>
                                <p className="font-medium text-sm">{faq.question}</p>
                                <p className="text-muted-foreground text-sm">{faq.answer}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="bg-primary/5 p-4 rounded-lg">
                          <p className="italic text-sm mb-2">"{town.testimonial.text}"</p>
                          <p className="text-sm font-medium">- {town.testimonial.author}</p>
                        </div>
                        
                        <Button asChild className="w-full">
                          <Link to="/commercial-quote?location=maui">
                            Get Industrial Cleaning Quote for {town.name}
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
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">
                Other Commercial Cleaning Services on Maui
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <Factory className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Factory Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Professional cleaning services for manufacturing and production facilities
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/maui/factory-cleaning">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <Building2 className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Post-Construction Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Thorough cleaning after construction and renovation projects
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/maui/post-construction-cleaning-services">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <Shield className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Government Facility Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Secure and compliant cleaning for government and municipal buildings
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/maui/government-facility-cleaning">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Frequently Asked Questions
              </h2>
              <Accordion type="single" className="space-y-4">
                <AccordionItem value="osha-compliance" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">Are your industrial cleaning services OSHA compliant?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Yes, all our industrial cleaning services adhere to OSHA safety standards. Our technicians complete OSHA 30-hour training, follow lockout/tagout procedures, use proper PPE, maintain hazard communication protocols, and coordinate with your facility's safety team to ensure fully compliant cleaning operations.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="equipment-safety" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">Can you clean industrial equipment without causing damage?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Absolutely. We use specialized industrial cleaning methods and products designed for heavy machinery. Our technicians are trained to follow manufacturer specifications, protect sensitive components, and use appropriate pressure and chemical concentrations to clean effectively without damaging expensive equipment.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="what-included" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">What's included in industrial cleaning services?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Our comprehensive industrial cleaning includes equipment and machinery degreasing, floor decontamination and restoration, high-surface and structural cleaning, production area maintenance, waste removal, confined space cleaning, and detailed OSHA compliance documentation. We customize our service based on your facility's specific industrial needs.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="cost" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">What is the cost of industrial cleaning on Maui?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Industrial cleaning costs vary based on facility size, equipment types, cleaning frequency, contamination levels, and specific safety requirements. We provide transparent, competitive pricing with detailed quotes. Most facilities find our services cost-effective when considering prevented downtime and extended equipment life. Contact us for a free assessment and customized proposal.
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
              Ready to Elevate Your Industrial Facility's Standards?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join Maui's leading manufacturers that trust Red Rock Cleans for OSHA-compliant industrial cleaning
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
              <Link to="/commercial-quote?location=maui">Get Your Free Industrial Cleaning Assessment</Link>
            </Button>
          </div>
        </section>

        {/* Image Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <img 
                src="/static/service-products.jpg" 
                alt="A heavy-duty industrial facility on Maui after a thorough cleaning by Red Rock Cleans"
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

export default IndustrialCleaningMauiPage;

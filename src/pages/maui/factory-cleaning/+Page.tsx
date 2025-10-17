import { MauiNavigation } from "@/components/MauiNavigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HardHat, Cog, ClipboardCheck, Layers, Wrench, Construction, ShieldCheck, Clock, Factory, MapPin, Calendar, Home, Warehouse, Building2, HardHatIcon, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import CountUp from "react-countup";

const towns = [
  {
    id: "wailea",
    name: "Wailea",
    description: "Wailea manufacturers and production facilities trust our professional factory cleaning services to maintain safe, compliant workspaces that support operational excellence and meet stringent industry standards.",
    faq: [
      {
        question: "Can you clean our Wailea factory during off-hours?",
        answer: "Yes, we schedule factory cleaning during your off-shift, weekends, or shutdown periods to ensure zero disruption to your production schedule and workflow."
      },
      {
        question: "Are your cleaners trained in Wailea factory safety protocols?",
        answer: "All our technicians are trained in OSHA safety standards, lockout/tagout procedures, and factory-specific safety protocols to work safely around industrial equipment."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our Wailea manufacturing facility for over two years. Their attention to safety and understanding of our production environment is exceptional.",
      author: "Facilities Manager, Wailea Manufacturing"
    }
  },
  {
    id: "makena",
    name: "Makena",
    description: "Makena industrial facilities rely on our heavy-duty cleaning services to remove production debris, degrease machinery, and maintain the clean, organized environment essential for efficient operations.",
    faq: [
      {
        question: "What factory cleaning services do you offer in Makena?",
        answer: "We provide production floor cleaning, machinery degreasing, high-dusting, waste removal, restroom sanitization, and specialized cleaning for manufacturing environments."
      },
      {
        question: "How do you handle hazardous materials in Makena?",
        answer: "We follow proper protocols for handling industrial waste, use appropriate PPE, and coordinate with your safety team for any hazardous material cleanup."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans understands the unique demands of our Makena production facility. Their systematic approach has improved our workspace organization and cleanliness.",
      author: "Production Supervisor, Makena Industrial"
    }
  },
  {
    id: "kihei",
    name: "Kihei",
    description: "Kihei factories benefit from our comprehensive cleaning protocols that address heavy-duty floor care, equipment maintenance, and compliance with industry-specific cleanliness standards.",
    faq: [
      {
        question: "What is included in Kihei factory cleaning?",
        answer: "Our service includes production floor sweeping and scrubbing, machinery cleaning and degreasing, high-dusting, loading dock cleaning, break room sanitization, and waste management."
      },
      {
        question: "How often should Kihei factories schedule cleaning?",
        answer: "We recommend daily production floor maintenance, weekly deep cleaning, and monthly high-dusting for optimal safety and compliance."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans' factory cleaning has significantly improved our Kihei facility's cleanliness and safety record. Their reliability is unmatched.",
      author: "Plant Manager, Kihei Manufacturing"
    }
  },
  {
    id: "kapalua",
    name: "Kapalua",
    description: "Kapalua production facilities trust our OSHA-compliant cleaning services to maintain safe working conditions while supporting continuous production and operational efficiency.",
    faq: [
      {
        question: "Are your Kapalua factory cleaning services OSHA compliant?",
        answer: "Yes, all our cleaning protocols adhere to OSHA standards for workplace safety, including proper signage, safe chemical handling, and hazard prevention."
      },
      {
        question: "What makes your Kapalua service different?",
        answer: "We specialize in industrial environments with heavy-duty equipment, trained technicians familiar with manufacturing settings, and flexible scheduling around your production."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provides the level of industrial cleaning our Kapalua facility requires. Their expertise in manufacturing environments is evident.",
      author: "Operations Director, Kapalua Production Center"
    }
  },
  {
    id: "kaanapali",
    name: "Ka'anapali",
    description: "Ka'anapali manufacturing plants rely on our specialized services to remove industrial debris, maintain equipment cleanliness, and support a productive work environment.",
    faq: [
      {
        question: "How do you minimize downtime in Ka'anapali?",
        answer: "We coordinate with your production schedule, work during planned downtime, and use efficient cleaning methods to ensure minimal impact on operations."
      },
      {
        question: "Can you clean around active production in Ka'anapali?",
        answer: "Yes, our technicians are trained to safely clean around operating equipment and active production areas while following all safety protocols."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has never caused a production delay at our Ka'anapali facility. Their professionalism and understanding of manufacturing needs are outstanding.",
      author: "Production Manager, Ka'anapali Manufacturing"
    }
  },
  {
    id: "lahaina",
    name: "Lahaina",
    description: "Lahaina factories benefit from our comprehensive cleaning that addresses production floors, machinery, and structural areas to ensure a safe, compliant manufacturing environment.",
    faq: [
      {
        question: "What cleaning methods do you use in Lahaina factories?",
        answer: "We use industrial-grade sweepers, scrubbers, pressure washers, and degreasers designed for manufacturing environments, plus HEPA vacuums for dust control."
      },
      {
        question: "Can you clean our production equipment?",
        answer: "Yes, we safely clean and degrease production equipment following manufacturer guidelines and your facility's lockout/tagout procedures."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans' attention to detail in our Lahaina factory has been remarkable. They understand the critical nature of maintaining a clean production environment.",
      author: "Facility Director, Lahaina Industrial Park"
    }
  },
  {
    id: "spreckelsville",
    name: "Spreckelsville",
    description: "Spreckelsville production facilities trust our precision cleaning services to maintain the organized, debris-free environment essential for quality manufacturing operations.",
    faq: [
      {
        question: "How do you ensure quality in Spreckelsville?",
        answer: "We use detailed checklists, conduct quality inspections, and provide documentation to ensure all cleaning meets your facility's standards and requirements."
      },
      {
        question: "What are your rates for Spreckelsville factories?",
        answer: "Pricing is based on facility size, cleaning frequency, and specific requirements. Contact us for a customized quote based on your manufacturing needs."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been instrumental in maintaining our Spreckelsville facility's cleanliness standards. Their systematic approach is exactly what we needed.",
      author: "Quality Manager, Spreckelsville Manufacturing"
    }
  },
  {
    id: "paia",
    name: "Pa'ia",
    description: "Pa'ia industrial facilities rely on our expert cleaning services to combat production debris and maintain the pristine conditions required for efficient manufacturing.",
    faq: [
      {
        question: "Do you serve small factories in Pa'ia?",
        answer: "Yes, we service manufacturing facilities of all sizes, from small production shops to large industrial plants, with the same level of expertise and attention to detail."
      },
      {
        question: "What safety protocols do you follow in Pa'ia?",
        answer: "All technicians follow OSHA guidelines, wear appropriate PPE, complete safety training, and coordinate with your facility's safety procedures."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans transformed our Pa'ia production floor from a constant concern to a showcase facility. Their industrial cleaning expertise is evident.",
      author: "Operations Manager, Pa'ia Manufacturing Solutions"
    }
  },
  {
    id: "kuau",
    name: "Kuau",
    description: "Kuau factories benefit from our specialized cleaning protocols designed to remove industrial contaminants while ensuring worker safety and supporting continuous production.",
    faq: [
      {
        question: "How quickly can you respond in Kuau?",
        answer: "We offer same-day emergency response for spills or contamination events and can schedule routine factory maintenance within 48 hours of contact."
      },
      {
        question: "Do you provide cleaning documentation in Kuau?",
        answer: "Yes, we provide detailed service reports, photographic documentation, and compliance records for your facility's safety and audit requirements."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans' proactive approach to our Kuau facility has reduced our safety incidents significantly. They're true industrial cleaning professionals.",
      author: "Safety Director, Kuau Production Facility"
    }
  },
  {
    id: "haiku",
    name: "Ha'iku",
    description: "Ha'iku manufacturing plants trust our OSHA-compliant cleaning services to maintain the safe, organized work environment essential for productive factory operations.",
    faq: [
      {
        question: "What makes Ha'iku factories unique?",
        answer: "Ha'iku's location presents unique challenges. We customize our protocols to address local environmental factors while maintaining industrial cleanliness standards."
      },
      {
        question: "Can you train our staff in Ha'iku?",
        answer: "Yes, we offer training sessions on basic industrial housekeeping and best practices for maintaining clean work areas between professional services."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been essential to our Ha'iku facility's success. Their understanding of industrial cleaning and safety requirements is exceptional.",
      author: "Plant Director, Ha'iku Manufacturing Center"
    }
  }
];

const FactoryCleaningMauiPage = () => {
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
        <title>Factory Cleaning Maui | Red Rock Cleans</title>
        <meta name="description" content="Professional factory cleaning on Maui. Red Rock Cleans offers heavy-duty cleaning for manufacturing plants in Lahaina, Kihei, and beyond to ensure safety and productivity." />
        <meta name="keywords" content="factory cleaning near me, industrial cleaning Maui, manufacturing plant cleaning Maui, factory cleaning Lahaina, heavy-duty factory cleaning Maui, production floor cleaning Maui, machinery degreasing Maui, OSHA compliant cleaning Maui, factory cleaning cost Maui, industrial cleaning prices Maui, what is factory cleaning Maui, hire factory cleaners in Maui" />
        <link rel="canonical" href="https://redrockcleans.com/maui/factory-cleaning" />
      </Helmet>
      
      <MauiNavigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/src/assets/hero-commercial.jpg" 
              alt="Professional factory cleaning service at a Maui manufacturing facility"
              className="w-full h-full object-cover scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                Professional Factory Cleaning on Maui
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                A clean, compliant factory is essential for worker safety, operational efficiency, and meeting production goals for businesses across Maui. Our professional factory cleaning services remove hazards, reduce downtime, and maintain the industry standards your manufacturing facility demands, allowing your team to focus on what they do best—producing quality products.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="h-14 text-lg px-8" asChild>
                  <Link to="/commercial-quote?location=maui">
                    <Calendar className="w-5 h-5 mr-2" />
                    Get Your Free Quote
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

        {/* Enhancing Safety, Compliance, and Productivity Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Enhancing Safety, Compliance, and Productivity
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <HardHat className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Prioritizing Worker Safety</h3>
                      <p className="text-muted-foreground">
                        Our focus on removing hazards like spills, debris, and tripping hazards helps reduce workplace accidents and creates a safer environment for your team. We meet OSHA standards and implement best practices to support your facility's safety record.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Cog className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Boosting Production Efficiency</h3>
                      <p className="text-muted-foreground">
                        Clean machinery and organized workspaces prevent unexpected downtime and improve workflow efficiency. Our systematic cleaning approach keeps your production line running smoothly by removing contaminants that can cause equipment failures.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <ClipboardCheck className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Upholding Industry Standards</h3>
                      <p className="text-muted-foreground">
                        We're committed to providing a level of cleanliness that meets industry-specific regulations and compliance requirements. Our documented cleaning protocols help support your facility's certifications and audit readiness.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Comprehensive Factory Cleaning Checklist Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Our Comprehensive Factory Cleaning Checklist
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Layers className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Production Floor Care</h3>
                      <p className="text-muted-foreground">
                        Heavy-duty sweeping, industrial scrubbing, and degreasing of concrete floors to remove oil, grease, and production residue. We use commercial-grade equipment designed for manufacturing environments to ensure thorough cleaning.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Wrench className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Machinery & Equipment Cleaning</h3>
                      <p className="text-muted-foreground">
                        Safe cleaning and degreasing of production equipment following lockout/tagout procedures and manufacturer guidelines. We remove buildup that affects performance while protecting sensitive components.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Construction className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">High-Dusting & Structural Cleaning</h3>
                      <p className="text-muted-foreground">
                        Cleaning ceilings, overhead pipes, rafters, and structural elements to remove accumulated dust and debris. This prevents contamination from falling onto production areas and improves air quality.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Commitment to Maui's Industries Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Our Commitment to Maui's Industries
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ShieldCheck className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    100%
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Safety Standards Met</h3>
                  <p className="text-muted-foreground text-sm">
                    Perfect OSHA compliance record across all Maui factory clients
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    <CountUp end={5000} duration={2} separator="," />+
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Production Hours Saved</h3>
                  <p className="text-muted-foreground text-sm">
                    Through preventive cleaning and reduced equipment downtime
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Factory className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    <CountUp end={150} duration={2} />+
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Compliant Cleans Completed</h3>
                  <p className="text-muted-foreground text-sm">
                    Manufacturing facilities maintained to industry standards
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
                          <h4 className="font-semibold mb-2">Local Factory Cleaning Services</h4>
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
                            Get Factory Cleaning Quote for {town.name}
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
                Other Industrial & Commercial Services on Maui
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <Warehouse className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Warehouse Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Professional cleaning services for warehouses and distribution centers
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/maui/warehouse-cleaning">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <Factory className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Industrial Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Specialized cleaning for industrial and heavy manufacturing facilities
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/maui/industrial-cleaning">Learn More</Link>
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
                    <h3 className="text-lg font-semibold">Are your factory cleaning services OSHA compliant?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Yes, all our cleaning protocols adhere to OSHA workplace safety standards. Our technicians are trained in proper safety procedures, hazard communication, lockout/tagout requirements, and use appropriate personal protective equipment. We provide proper signage during cleaning and follow all regulations for safe chemical handling and waste disposal.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="production-schedule" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">Can you work around our production schedule?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Absolutely. We understand that minimizing production disruption is critical. We schedule factory cleaning during your off-shifts, weekends, planned maintenance windows, or shutdown periods. Our flexible scheduling ensures your production line continues running while we maintain a clean, safe facility.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="what-included" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">What's included in factory cleaning on Maui?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Our comprehensive factory cleaning includes production floor sweeping and scrubbing, machinery cleaning and degreasing, high-dusting of rafters and overhead structures, loading dock cleaning, restroom and break room sanitization, waste management, and specialized cleaning based on your industry. We customize our service to meet your specific manufacturing environment and requirements.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="costs" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">What is the cost of factory cleaning in Maui?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Factory cleaning costs vary based on facility size, cleaning frequency, specific services required, and your industry's unique needs. We provide transparent, competitive pricing with customized quotes. Contact us for a free on-site assessment and detailed proposal tailored to your manufacturing facility's requirements.
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
              Ready to Improve Your Factory's Safety & Productivity?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join Maui's leading manufacturers who trust Red Rock Cleans for professional factory cleaning
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
              <Link to="/commercial-quote?location=maui">Get Your Free Factory Cleaning Quote</Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default FactoryCleaningMauiPage;

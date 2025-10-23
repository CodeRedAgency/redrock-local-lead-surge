import { SouthFloridaNavigation } from "@/components/SouthFloridaNavigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Shield, Clock, Wrench, Droplets, Construction, Layers, ShieldCheck, BarChart, Factory, MapPin, Calendar, Warehouse, HardHat, Building2, Phone, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { useTranslation } from 'react-i18next';

const cities = [
  {
    id: "aventura",
    name: "Aventura",
    description: "Aventura's industrial facilities trust our heavy-duty cleaning services to maintain OSHA-compliant environments that protect workers and maximize productivity.",
    faq: [
      {
        question: "Do you clean manufacturing plants in Aventura?",
        answer: "Yes, we specialize in comprehensive cleaning for manufacturing plants, production facilities, and all types of industrial operations in Aventura."
      },
      {
        question: "Can you work around Aventura production schedules?",
        answer: "Absolutely. We offer flexible scheduling including nights, weekends, and planned shutdowns to minimize disruption to your operations."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our Aventura industrial facility for years. Their attention to safety and compliance is exceptional.",
      author: "Plant Manager, Aventura Manufacturing"
    }
  },
  {
    id: "cooper-city",
    name: "Cooper City",
    description: "Cooper City industrial operations rely on our specialized cleaning to remove heavy contamination and maintain safe, efficient work environments.",
    faq: [
      {
        question: "What's included in Cooper City industrial cleaning?",
        answer: "Our service includes equipment degreasing, floor decontamination, high-surface cleaning, machinery maintenance, and complete facility sanitization."
      },
      {
        question: "Do you handle hazardous materials in Cooper City?",
        answer: "Yes, our team is trained in proper handling and disposal of industrial waste and hazardous materials following all regulations."
      }
    ],
    testimonial: {
      text: "Our Cooper City plant has never been cleaner or safer. Red Rock Cleans understands industrial environments.",
      author: "Safety Director, Cooper City Industrial Solutions"
    }
  },
  {
    id: "dania-beach",
    name: "Dania Beach",
    description: "Dania Beach industrial facilities benefit from our comprehensive cleaning protocols that ensure compliance and protect valuable equipment investments.",
    faq: [
      {
        question: "How do you ensure safety in Dania Beach facilities?",
        answer: "We follow strict OSHA protocols, use proper PPE, conduct safety assessments, and coordinate with your team to ensure safe cleaning operations."
      },
      {
        question: "Can you degrease heavy machinery in Dania Beach?",
        answer: "Yes, we use industrial-grade degreasers and specialized techniques to safely remove grease and grime from all types of heavy machinery."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans keeps our Dania Beach industrial facility in top condition. Professional, safe, and thorough every time.",
      author: "Operations Manager, Dania Beach Industrial Group"
    }
  },
  {
    id: "davie",
    name: "Davie",
    description: "Davie's industrial sector depends on our heavy-duty cleaning services to maintain productive, compliant facilities that meet the highest standards.",
    faq: [
      {
        question: "What's the cost of industrial cleaning in Davie?",
        answer: "Costs vary based on facility size and scope. Most Davie facilities invest $1,000-$5,000+ per service. We provide free customized quotes."
      },
      {
        question: "Do you clean processing plants in Davie?",
        answer: "Yes, we clean all types of processing facilities including food processing, chemical plants, and manufacturing operations."
      }
    ],
    testimonial: {
      text: "Our Davie processing plant passes every inspection thanks to Red Rock Cleans. Their industrial expertise is unmatched.",
      author: "Quality Manager, Davie Processing Systems"
    }
  },
  {
    id: "fort-lauderdale",
    name: "Fort Lauderdale",
    description: "Fort Lauderdale's industrial infrastructure relies on our specialized cleaning to protect equipment, ensure compliance, and maintain operational excellence.",
    faq: [
      {
        question: "Do you follow OSHA standards in Fort Lauderdale?",
        answer: "Absolutely. We strictly adhere to all OSHA regulations and maintain comprehensive documentation for compliance verification."
      },
      {
        question: "Can you handle large Fort Lauderdale facilities?",
        answer: "Yes, we service industrial facilities of all sizes with the equipment and trained staff needed for comprehensive cleaning."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Fort Lauderdale industrial complex to perfection. Their safety-first approach is exactly what we need.",
      author: "Facility Director, Fort Lauderdale Industrial Park"
    }
  },
  {
    id: "hallandale-beach",
    name: "Hallandale Beach",
    description: "Hallandale Beach industrial operations trust our thorough cleaning services to create safe environments and extend equipment lifespan.",
    faq: [
      {
        question: "How do you clean industrial floors in Hallandale Beach?",
        answer: "We use heavy-duty scrubbers, stripping equipment, and industrial-grade solutions to deep clean, decontaminate, and restore floors."
      },
      {
        question: "Do you provide emergency cleaning in Hallandale Beach?",
        answer: "Yes, we offer rapid response services for spills, accidents, or urgent industrial cleaning needs."
      }
    ],
    testimonial: {
      text: "Our Hallandale Beach facility's safety record has improved dramatically since partnering with Red Rock Cleans.",
      author: "EHS Manager, Hallandale Beach Manufacturing"
    }
  },
  {
    id: "hollywood",
    name: "Hollywood",
    description: "Hollywood's industrial facilities benefit from our specialized cleaning that reduces downtime, prevents equipment failure, and ensures regulatory compliance.",
    faq: [
      {
        question: "What equipment do you use in Hollywood facilities?",
        answer: "We use industrial floor scrubbers, pressure washers, high-reach equipment, and specialized cleaning tools for heavy-duty industrial cleaning."
      },
      {
        question: "Can you clean during Hollywood production hours?",
        answer: "We can work around operations, though we recommend scheduled downtime for optimal deep cleaning results and safety."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been essential to our Hollywood plant's operations. Professional, safe, and always reliable.",
      author: "Plant Superintendent, Hollywood Industrial Services"
    }
  },
  {
    id: "las-olas",
    name: "Las Olas",
    description: "Las Olas industrial businesses depend on our comprehensive cleaning services to maintain pristine, safe facilities that support efficient operations.",
    faq: [
      {
        question: "Do you clean high surfaces in Las Olas facilities?",
        answer: "Yes, we provide high-surface cleaning for ceilings, beams, pipes, and overhead structures using specialized equipment and safety protocols."
      },
      {
        question: "How do you prevent cross-contamination in Las Olas?",
        answer: "We use separate equipment for different areas, follow strict protocols, and employ proper cleaning sequences to prevent contamination spread."
      }
    ],
    testimonial: {
      text: "Our Las Olas industrial facility is maintained to the highest standards thanks to Red Rock Cleans. Exceptional service.",
      author: "Operations Chief, Las Olas Industrial Solutions"
    }
  },
  {
    id: "lauderdale-lakes",
    name: "Lauderdale Lakes",
    description: "Lauderdale Lakes industrial facilities rely on our systematic cleaning approach to ensure consistent safety and compliance standards.",
    faq: [
      {
        question: "What is industrial cleaning in Lauderdale Lakes?",
        answer: "Industrial cleaning involves heavy-duty cleaning of manufacturing facilities, equipment degreasing, floor restoration, and maintaining safe work environments."
      },
      {
        question: "Do you clean production equipment in Lauderdale Lakes?",
        answer: "Yes, we safely clean all types of production machinery, assembly equipment, and industrial tools following manufacturer specifications."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans keeps our Lauderdale Lakes plant running smoothly. Their industrial cleaning expertise is impressive.",
      author: "Production Manager, Lauderdale Lakes Manufacturing"
    }
  },
  {
    id: "lauderhill",
    name: "Lauderhill",
    description: "Lauderhill's industrial sector trusts our professional cleaning services to maintain safe, compliant facilities that maximize productivity.",
    faq: [
      {
        question: "How often should Lauderhill facilities be cleaned?",
        answer: "Most industrial facilities benefit from weekly deep cleaning with daily maintenance, though frequency depends on operations and contamination levels."
      },
      {
        question: "Can you handle chemical cleaning in Lauderhill?",
        answer: "Yes, we're equipped to handle industrial chemical cleaning and decontamination following all safety regulations."
      }
    ],
    testimonial: {
      text: "Our Lauderhill industrial facility has never been safer or cleaner. Red Rock Cleans delivers excellence consistently.",
      author: "Safety Coordinator, Lauderhill Industrial Group"
    }
  },
  {
    id: "margate",
    name: "Margate",
    description: "Margate industrial operations benefit from our heavy-duty cleaning that protects equipment investments and creates safer work environments.",
    faq: [
      {
        question: "What makes your Margate industrial cleaning effective?",
        answer: "We combine industrial-strength equipment, proven techniques, trained staff, and understanding of manufacturing environments for superior results."
      },
      {
        question: "Do you provide maintenance plans in Margate?",
        answer: "Yes, we offer customized preventive maintenance programs with scheduled industrial cleaning at optimal frequencies."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our Margate industrial complex for years. Reliable, professional, and safety-focused.",
      author: "Facility Manager, Margate Industrial Park"
    }
  },
  {
    id: "miramar",
    name: "Miramar",
    description: "Miramar's industrial facilities depend on our specialized cleaning to maintain OSHA compliance and protect valuable machinery from contamination.",
    faq: [
      {
        question: "How do you degrease equipment in Miramar?",
        answer: "We use industrial-grade degreasers, pressure washing, and specialized tools to safely remove heavy grease buildup from machinery and equipment."
      },
      {
        question: "Can you clean Miramar warehouses and plants?",
        answer: "Yes, we clean all types of industrial facilities including warehouses, manufacturing plants, processing facilities, and distribution centers."
      }
    ],
    testimonial: {
      text: "Our Miramar facility's uptime has improved since partnering with Red Rock Cleans. Their industrial cleaning is top-notch.",
      author: "Maintenance Director, Miramar Manufacturing Solutions"
    }
  },
  {
    id: "north-lauderdale",
    name: "North Lauderdale",
    description: "North Lauderdale industrial businesses trust our comprehensive cleaning services to reduce workplace hazards and maintain productive facilities.",
    faq: [
      {
        question: "What certifications do your North Lauderdale cleaners have?",
        answer: "Our industrial cleaning staff are trained in OSHA compliance, hazardous material handling, and proper use of industrial cleaning equipment."
      },
      {
        question: "Do you clean during North Lauderdale shutdowns?",
        answer: "Yes, we can maximize cleaning efficiency during planned shutdowns, maintenance windows, or facility closures."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans understands industrial operations. Our North Lauderdale plant is always clean, safe, and compliant.",
      author: "Plant Manager, North Lauderdale Industrial"
    }
  },
  {
    id: "pembroke-pines",
    name: "Pembroke Pines",
    description: "Pembroke Pines industrial infrastructure relies on our professional cleaning to ensure safety, extend equipment life, and maintain operational efficiency.",
    faq: [
      {
        question: "How do you ensure quality in Pembroke Pines?",
        answer: "We use detailed checklists, conduct regular inspections, provide comprehensive documentation, and maintain open communication with your team."
      },
      {
        question: "Can you clean specialized equipment in Pembroke Pines?",
        answer: "Yes, we clean all types of industrial equipment following manufacturer guidelines and using appropriate cleaning methods for each machine type."
      }
    ],
    testimonial: {
      text: "Our Pembroke Pines industrial facility has benefited tremendously from Red Rock Cleans' expertise. Outstanding service.",
      author: "Operations Director, Pembroke Pines Industrial Corp"
    }
  },
  {
    id: "plantation",
    name: "Plantation",
    description: "Plantation's industrial sector depends on our heavy-duty cleaning services to maintain pristine, compliant facilities that support business growth.",
    faq: [
      {
        question: "What's included in Plantation industrial cleaning rates?",
        answer: "Rates include equipment, labor, supplies, disposal, and documentation. We provide transparent pricing with no hidden fees."
      },
      {
        question: "Do you clean food processing plants in Plantation?",
        answer: "Yes, we clean food-grade facilities following FDA and health department standards with appropriate sanitization protocols."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Plantation processing plant to perfection. Their food-grade cleaning expertise is invaluable.",
      author: "Quality Director, Plantation Food Processing"
    }
  },
  {
    id: "southwest-ranches",
    name: "Southwest Ranches",
    description: "Southwest Ranches industrial facilities trust our systematic cleaning approach to protect equipment, ensure safety, and maintain productivity.",
    faq: [
      {
        question: "How long does industrial cleaning take in Southwest Ranches?",
        answer: "Cleaning time varies by facility size and scope. Most industrial sites require 6-24 hours depending on square footage and services needed."
      },
      {
        question: "Do you handle waste disposal in Southwest Ranches?",
        answer: "Yes, we properly collect, segregate, and dispose of industrial waste following all environmental regulations and best practices."
      }
    ],
    testimonial: {
      text: "Our Southwest Ranches industrial facility runs more efficiently thanks to Red Rock Cleans' thorough cleaning program.",
      author: "Plant Superintendent, Southwest Ranches Industries"
    }
  },
  {
    id: "sunny-isles-beach",
    name: "Sunny Isles Beach",
    description: "Sunny Isles Beach industrial operations rely on our specialized cleaning to combat coastal environmental challenges and maintain pristine facilities.",
    faq: [
      {
        question: "How do you handle coastal conditions in Sunny Isles Beach?",
        answer: "We use corrosion-resistant equipment and specialized methods to address salt air, humidity, and other coastal challenges affecting industrial facilities."
      },
      {
        question: "Can you clean industrial HVAC in Sunny Isles Beach?",
        answer: "Yes, we clean industrial ventilation systems, ductwork, and HVAC components as part of comprehensive facility maintenance."
      }
    ],
    testimonial: {
      text: "The coastal environment is tough on our Sunny Isles Beach facility. Red Rock Cleans keeps everything protected and clean.",
      author: "Facilities Chief, Sunny Isles Beach Industrial"
    }
  },
  {
    id: "sunrise",
    name: "Sunrise",
    description: "Sunrise industrial facilities benefit from our professional cleaning services that ensure compliance, protect equipment, and maximize operational uptime.",
    faq: [
      {
        question: "How do you hire industrial cleaners in Sunrise?",
        answer: "Contact us for a facility assessment and free quote. We'll create a customized cleaning plan and can typically begin service within 1-2 weeks."
      },
      {
        question: "Do you clean distribution centers in Sunrise?",
        answer: "Yes, we clean distribution centers, warehouses, and logistics facilities with appropriate protocols for these high-activity environments."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Sunrise distribution center to the highest standards. Professional, efficient, and reliable.",
      author: "Logistics Manager, Sunrise Distribution Solutions"
    }
  },
  {
    id: "tamarac",
    name: "Tamarac",
    description: "Tamarac's industrial sector trusts our heavy-duty cleaning expertise to maintain safe, efficient facilities that support their operations.",
    faq: [
      {
        question: "What's the industrial cleaning cost in Tamarac?",
        answer: "Most Tamarac facilities invest $1,000-$5,000+ per service depending on size and scope. We provide detailed, transparent quotes."
      },
      {
        question: "Can you provide references in Tamarac?",
        answer: "Yes, we can provide references from other industrial facilities we serve, demonstrating our track record of excellence and safety."
      }
    ],
    testimonial: {
      text: "Our Tamarac industrial facility has never been safer or more compliant. Red Rock Cleans exceeds expectations every time.",
      author: "Safety Manager, Tamarac Manufacturing Group"
    }
  },
  {
    id: "weston",
    name: "Weston",
    description: "Weston's industrial infrastructure depends on our professional cleaning services to maintain the exceptional standards that support operational excellence.",
    faq: [
      {
        question: "What makes your Weston industrial cleaning unique?",
        answer: "We combine heavy-duty industrial expertise, OSHA compliance knowledge, specialized equipment, and proven techniques for superior results."
      },
      {
        question: "Do you provide ongoing support in Weston?",
        answer: "Yes, we offer dedicated account management, regular quality reviews, emergency response, and ongoing consultation for Weston facilities."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been our Weston facility's cleaning partner for years. Their industrial expertise is essential to our operations.",
      author: "VP of Operations, Weston Industrial Solutions"
    }
  }
];

const IndustrialCleaningSouthFloridaPage = () => {
  const { t } = useTranslation();
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
        <title>{t(`commercialServices.southFlorida.industrial.title`, { defaultValue: "Industrial Cleaning Services South Florida | Red Rock Cleans" })}</title>
        <meta name="description" content={t(`commercialServices.southFlorida.industrial.description`, { defaultValue: "Industrial cleaning in South Florida. Heavy-duty cleaning for warehouses & factories in Fort Lauderdale & Weston area!" })} />
      </Helmet>
      
      <SouthFloridaNavigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/src/assets/hero-commercial.jpg" 
              alt="Professional industrial cleaning service in a South Florida manufacturing facility"
              className="w-full h-full object-cover scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                Heavy-Duty Industrial Cleaning Services in South Florida
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Our specialized industrial cleaning services ensure safety, meet OSHA standards, and maximize operational uptime for facilities across South Florida. From manufacturing plants to processing facilities, we provide the heavy-duty cleaning expertise that protects your equipment, maintains compliance, and creates safer work environments for your team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="h-14 text-lg px-8" asChild>
                  <a href="tel:+19544698881">
                    <Phone className="w-5 h-5 mr-2" />
                    Call (954) 469-8881
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="h-14 text-lg px-8" asChild>
                  <Link to="/commercial-quote?location=south-florida">
                    <Home className="w-5 h-5 mr-2" />
                    Get Free Quote
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
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Ensuring OSHA Compliance</h3>
                      <p className="text-muted-foreground">
                        Our rigorous adherence to OSHA safety regulations protects your workforce and ensures your South Florida facility meets all compliance requirements. We follow strict safety protocols, maintain comprehensive documentation, and conduct our cleaning operations with worker safety as the top priority, helping you avoid violations and maintain a safe workplace.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Maximizing Operational Uptime</h3>
                      <p className="text-muted-foreground">
                        Clean machinery and environments prevent costly breakdowns and production delays. Our systematic industrial cleaning removes contamination that can cause equipment failure, maintains optimal operating conditions, and ensures your South Florida facility runs at peak efficiency with minimal downtime, protecting your bottom line and production schedules.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Wrench className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Protecting Heavy Machinery</h3>
                      <p className="text-muted-foreground">
                        Our specialized techniques safely clean and degrease valuable equipment, extending its lifespan and protecting your investment. We use industrial-grade solutions and proven methods to remove grease, grime, and contamination from machinery without causing damage, ensuring your equipment performs optimally for years to come in South Florida's demanding environment.
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
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Droplets className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Equipment & Machinery Degreasing</h3>
                      <p className="text-muted-foreground">
                        We remove tough grease and grime from production machinery using industrial-strength degreasers and specialized equipment. Our technicians safely clean all types of manufacturing equipment, from CNC machines to assembly lines, ensuring optimal performance and preventing contamination buildup that can lead to costly failures.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Construction className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">High-Surface & Structural Cleaning</h3>
                      <p className="text-muted-foreground">
                        Our team cleans ceilings, support beams, pipes, ductwork, and other hard-to-reach areas using specialized high-reach equipment and safety protocols. We remove accumulated dust, debris, and contamination from overhead structures that can compromise air quality and create safety hazards in your South Florida industrial facility.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Layers className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Floor Decontamination & Restoration</h3>
                      <p className="text-muted-foreground">
                        We provide heavy-duty scrubbing, stripping, and sealing of industrial flooring using professional-grade equipment. Our floor restoration services remove years of contamination, restore slip-resistant surfaces, and protect your concrete, epoxy, or specialized industrial flooring from damage while ensuring safe walking surfaces for your workforce.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* The Red Rock Cleans Industrial Standard Section */}
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
                  <div className="text-4xl font-bold text-primary mb-2">100%</div>
                  <h3 className="text-lg font-semibold mb-2">OSHA Standards Met</h3>
                  <p className="text-muted-foreground text-sm">
                    All our industrial clients maintain full compliance through our cleaning
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BarChart className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    <CountUp end={500} duration={2} />+
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Heavy Machines Serviced</h3>
                  <p className="text-muted-foreground text-sm">
                    Industrial equipment cleaned and maintained across South Florida
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Factory className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    <CountUp end={150} duration={2} />+
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Industrial Sites Maintained</h3>
                  <p className="text-muted-foreground text-sm">
                    Manufacturing plants trust our heavy-duty cleaning expertise
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
                Areas We Serve in South Florida
              </h2>
              
              {/* City Selector */}
              <div className="max-w-md mx-auto mb-12">
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    value={openAccordion}
                    onChange={(e) => {
                      const value = e.target.value;
                      setOpenAccordion(value);
                      window.location.hash = value;
                      setTimeout(() => {
                        const element = document.getElementById(value);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        }
                      }, 100);
                    }}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white text-gray-900"
                  >
                    <option value="">Select a South Florida Area</option>
                    {cities.map((city) => (
                      <option key={city.id} value={city.id}>
                        {city.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              
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
                          <Link to="/commercial-quote?location=south-florida">
                            Get Industrial Cleaning Quote for {city.name}
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
                Other Commercial Cleaning Services in South Florida
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <HardHat className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Factory Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      OSHA compliant cleaning for manufacturing plants and factories
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/south-florida/factory-cleaning">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <Warehouse className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Warehouse Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Professional cleaning for warehouses and distribution centers
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/south-florida/warehouse-cleaning">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <Building2 className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Post-Construction Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Comprehensive cleaning after construction or renovation projects
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/south-florida/post-construction-cleaning-services">Learn More</Link>
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
                <AccordionItem value="what-is-industrial" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">What is industrial cleaning in South Florida?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Industrial cleaning in South Florida involves specialized heavy-duty cleaning for manufacturing plants, processing facilities, and industrial operations. This includes equipment and machinery degreasing, high-surface and structural cleaning, floor decontamination and restoration, industrial waste removal, OSHA-compliant cleaning procedures, and maintaining safe work environments. Our services are designed to handle the unique challenges of industrial facilities including heavy contamination, specialized equipment, and strict compliance requirements.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="cost" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">What's the industrial cleaning cost in South Florida?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Industrial cleaning costs in South Florida vary significantly based on facility size, contamination levels, equipment types, and cleaning frequency. Most facilities invest $1,000-$5,000+ per service session, while large manufacturing complexes may require $10,000-$25,000+ for comprehensive deep cleaning. Weekly maintenance cleaning is typically less expensive than periodic deep cleaning. We provide free, detailed quotes based on facility assessment, square footage, specific cleaning requirements, and your operational schedule.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="osha-compliance" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">Do you provide OSHA compliant cleaning services in South Florida?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Yes, all our industrial cleaning services strictly adhere to OSHA regulations and safety standards. We follow proper lockout/tagout procedures, use appropriate PPE for all staff, maintain detailed safety documentation and compliance records, conduct pre-cleaning safety assessments, coordinate with your safety team, and ensure proper handling of hazardous materials. Our goal is to help you maintain a safe, compliant workplace while achieving superior cleaning results.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="hire-cleaners" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">How do I hire industrial cleaners in South Florida?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Hiring industrial cleaners in South Florida is straightforward with Red Rock Cleans. Contact us for a comprehensive facility assessment where we evaluate your cleaning needs, equipment, and safety requirements. We'll provide a detailed proposal with transparent pricing, recommended cleaning frequency, and compliance documentation. Once approved, we conduct safety orientation with your team and can typically begin service within 1-2 weeks. We work flexibly around your production schedule to minimize operational disruption.
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
              Ready to Optimize Your Industrial Operations?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join South Florida manufacturers that trust Red Rock Cleans for heavy-duty industrial cleaning services
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
              <Link to="/commercial-quote">Get Your Free Industrial Cleaning Quote</Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default IndustrialCleaningSouthFloridaPage;


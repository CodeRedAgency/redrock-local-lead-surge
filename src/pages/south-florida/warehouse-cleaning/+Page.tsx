import { SouthFloridaNavigation } from "@/components/SouthFloridaNavigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HardHat, Forklift, Box, Layers, Construction, Truck, User, Package, ShieldCheck, Timer, MapPin, Calendar, Warehouse, Factory } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import CountUp from "react-countup";

const cities = [
  {
    id: "aventura",
    name: "Aventura",
    description: "Aventura's logistics facilities rely on our professional warehouse cleaning to maintain safe, organized distribution centers that maximize operational efficiency.",
    faq: [
      {
        question: "Do you offer scheduled warehouse cleaning in Aventura?",
        answer: "Yes, we provide daily, weekly, or custom cleaning schedules tailored to your Aventura warehouse's operational needs and shipping volumes."
      },
      {
        question: "Can you clean during warehouse operations in Aventura?",
        answer: "Absolutely. We work around your warehouse schedule, providing cleaning services during off-hours, shift changes, or operational downtime."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has transformed our Aventura warehouse. Our floors are spotless and our team works safer and more efficiently.",
      author: "Warehouse Manager, Aventura Distribution Center"
    }
  },
  {
    id: "cooper-city",
    name: "Cooper City",
    description: "Cooper City warehouses trust our heavy-duty cleaning services to keep floors clean, aisles clear, and inventory protected from dust and contamination.",
    faq: [
      {
        question: "What's included in Cooper City warehouse cleaning?",
        answer: "Our service includes floor scrubbing and sweeping, high-bay dusting, loading dock cleaning, restroom sanitization, and office area maintenance."
      },
      {
        question: "Do you clean pallet racks in Cooper City?",
        answer: "Yes, we're experienced in cleaning pallet racking systems, removing dust and debris that can contaminate inventory and affect air quality."
      }
    ],
    testimonial: {
      text: "Our Cooper City warehouse has never been cleaner. Red Rock Cleans understands the unique needs of logistics facilities.",
      author: "Operations Manager, Cooper City Logistics"
    }
  },
  {
    id: "dania-beach",
    name: "Dania Beach",
    description: "Dania Beach warehouses benefit from our comprehensive cleaning protocols that reduce workplace accidents and maintain compliance with safety regulations.",
    faq: [
      {
        question: "How do you ensure safety in Dania Beach warehouses?",
        answer: "We follow strict safety protocols, use proper PPE, coordinate with your safety team, and ensure all cleaning meets OSHA standards for warehouse environments."
      },
      {
        question: "Can you clean high ceilings in Dania Beach?",
        answer: "Yes, we're equipped with specialized high-reach equipment to safely clean high-bay ceilings, beams, and overhead structures."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans helped us pass our safety inspection with flying colors at our Dania Beach facility. Highly professional service.",
      author: "Safety Director, Dania Beach Distribution Co."
    }
  },
  {
    id: "davie",
    name: "Davie",
    description: "Davie's distribution facilities depend on our thorough warehouse cleaning to maintain operational efficiency and create safer working environments.",
    faq: [
      {
        question: "What's the cost of warehouse cleaning in Davie?",
        answer: "Costs vary based on facility size and cleaning frequency. Most Davie warehouses invest $600-$2,500 per cleaning. We provide free customized quotes."
      },
      {
        question: "Do you provide emergency cleaning in Davie?",
        answer: "Yes, we offer emergency response services for spills, accidents, or urgent cleaning needs at your Davie warehouse facility."
      }
    ],
    testimonial: {
      text: "Our Davie warehouse runs smoother thanks to Red Rock Cleans. Their attention to detail is exceptional.",
      author: "Distribution Supervisor, Davie Logistics Solutions"
    }
  },
  {
    id: "fort-lauderdale",
    name: "Fort Lauderdale",
    description: "Fort Lauderdale warehouses rely on our specialized cleaning to reduce downtime, improve safety, and maintain compliance with industry standards.",
    faq: [
      {
        question: "Do you follow OSHA standards in Fort Lauderdale?",
        answer: "Absolutely. We're well-versed in OSHA regulations and ensure all our cleaning procedures meet or exceed compliance requirements for warehouse facilities."
      },
      {
        question: "How often should warehouses be cleaned in Fort Lauderdale?",
        answer: "Most Fort Lauderdale warehouses benefit from daily floor maintenance with weekly deep cleaning, though frequency depends on operational volume."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans is our trusted partner for our Fort Lauderdale warehouse. Professional, reliable, and safety-focused.",
      author: "VP of Operations, Fort Lauderdale Distribution Group"
    }
  },
  {
    id: "hallandale-beach",
    name: "Hallandale Beach",
    description: "Hallandale Beach logistics facilities trust our heavy-duty cleaning services to maintain optimal working conditions and protect valuable inventory.",
    faq: [
      {
        question: "Can you clean concrete floors in Hallandale Beach?",
        answer: "Yes, we specialize in industrial floor scrubbing using professional-grade equipment that effectively cleans and maintains concrete warehouse floors."
      },
      {
        question: "What areas do you clean in Hallandale Beach warehouses?",
        answer: "We clean warehouse floors, high-bay areas, pallet racks, loading docks, break rooms, offices, restrooms, and employee common areas."
      }
    ],
    testimonial: {
      text: "Our Hallandale Beach facility has seen improved productivity since partnering with Red Rock Cleans. Excellent service.",
      author: "Facility Director, Hallandale Beach Warehousing"
    }
  },
  {
    id: "hollywood",
    name: "Hollywood",
    description: "Hollywood's logistics sector benefits from our systematic warehouse cleaning that enhances safety, reduces liability, and improves operational efficiency.",
    faq: [
      {
        question: "Do you provide cleaning reports in Hollywood?",
        answer: "Yes, we provide detailed cleaning reports and documentation to help maintain compliance records for inspections and audits."
      },
      {
        question: "Can you handle large Hollywood facilities?",
        answer: "Yes, we have the equipment and trained staff to service warehouses of all sizes, from small distribution centers to large logistics complexes."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Hollywood warehouse to perfection. Their warehouse cleaning expertise is unmatched.",
      author: "Facility Manager, Hollywood Logistics Systems"
    }
  },
  {
    id: "las-olas",
    name: "Las Olas",
    description: "Las Olas warehouses depend on our professional cleaning services to maintain pristine distribution environments and ensure workplace safety.",
    faq: [
      {
        question: "What cleaning methods do you use in Las Olas?",
        answer: "We use industrial-grade floor scrubbers, high-reach dusting equipment, and specialized cleaning systems for comprehensive warehouse cleaning."
      },
      {
        question: "Do you work weekends in Las Olas?",
        answer: "Yes, we offer flexible scheduling including nights, weekends, and holidays to accommodate your warehouse operational schedule."
      }
    ],
    testimonial: {
      text: "Our Las Olas warehouse facility has never looked better. Red Rock Cleans delivers consistent, quality results.",
      author: "Operations Chief, Las Olas Distribution Partners"
    }
  },
  {
    id: "lauderdale-lakes",
    name: "Lauderdale Lakes",
    description: "Lauderdale Lakes warehouses rely on our comprehensive cleaning protocols to minimize workplace hazards and maintain operational schedules.",
    faq: [
      {
        question: "How do you handle warehouse floor cleaning in Lauderdale Lakes?",
        answer: "We use heavy-duty sweeping and scrubbing methods to remove dirt, debris, and spills from concrete warehouse floors for safe, clean surfaces."
      },
      {
        question: "Can you clean high areas in Lauderdale Lakes?",
        answer: "Yes, we perform high-bay dusting of ceilings, beams, pipes, and overhead structures using specialized equipment and safety procedures."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans keeps our Lauderdale Lakes warehouse compliant and our workers safe. We couldn't ask for better service.",
      author: "Safety Manager, Lauderdale Lakes Distribution"
    }
  },
  {
    id: "lauderhill",
    name: "Lauderhill",
    description: "Lauderhill's logistics industry trusts our warehouse cleaning expertise to create safer, more productive distribution environments.",
    faq: [
      {
        question: "What makes your Lauderhill warehouse cleaning different?",
        answer: "We combine industrial-strength cleaning with deep understanding of warehouse environments, safety requirements, and logistics operations."
      },
      {
        question: "Do you clean break rooms in Lauderhill?",
        answer: "Yes, our service includes complete cleaning of break rooms, offices, restrooms, and all common areas within warehouse facilities."
      }
    ],
    testimonial: {
      text: "Our Lauderhill distribution facility runs more efficiently thanks to Red Rock Cleans' thorough cleaning program.",
      author: "Warehouse Superintendent, Lauderhill Logistics"
    }
  },
  {
    id: "margate",
    name: "Margate",
    description: "Margate warehouses benefit from our specialized cleaning that reduces contamination, prevents accidents, and improves workplace morale.",
    faq: [
      {
        question: "How quickly can you start in Margate?",
        answer: "We can typically begin service within 1-3 business days of your initial consultation and facility assessment."
      },
      {
        question: "Do you offer maintenance plans in Margate?",
        answer: "Yes, we provide customized preventive maintenance programs with scheduled cleaning at frequencies that match your operational needs."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our Margate warehouse for years. Reliable, professional, and always thorough.",
      author: "Distribution Manager, Margate Logistics Solutions"
    }
  },
  {
    id: "miramar",
    name: "Miramar",
    description: "Miramar's distribution facilities depend on our heavy-duty warehouse cleaning to maintain OSHA compliance and maximize operational efficiency.",
    faq: [
      {
        question: "What equipment do you use in Miramar warehouses?",
        answer: "We use industrial floor scrubbers, high-reach cleaning equipment, HEPA vacuums, and specialized cleaning tools for comprehensive warehouse maintenance."
      },
      {
        question: "Can you handle dust control in Miramar?",
        answer: "Yes, we specialize in controlling dust through regular floor cleaning, high-bay dusting, and air quality management techniques."
      }
    ],
    testimonial: {
      text: "Our Miramar facility's safety record has improved dramatically since partnering with Red Rock Cleans. Exceptional service.",
      author: "EHS Director, Miramar Distribution Group"
    }
  },
  {
    id: "north-lauderdale",
    name: "North Lauderdale",
    description: "North Lauderdale warehouses trust our systematic cleaning approach to reduce workplace accidents and maintain pristine distribution environments.",
    faq: [
      {
        question: "Do you clean during operations in North Lauderdale?",
        answer: "We can work around active operations, though we recommend scheduled downtime for optimal deep cleaning results and safety."
      },
      {
        question: "What's your response time for North Lauderdale emergencies?",
        answer: "We maintain rapid response capability and can typically deploy to North Lauderdale facilities within 2-4 hours for emergencies."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans understands the demands of our North Lauderdale warehouse operation. Always reliable and professional.",
      author: "Operations Director, North Lauderdale Logistics"
    }
  },
  {
    id: "pembroke-pines",
    name: "Pembroke Pines",
    description: "Pembroke Pines warehouses rely on our professional cleaning services to maintain safe, compliant facilities that support distribution goals.",
    faq: [
      {
        question: "How do you ensure quality in Pembroke Pines?",
        answer: "We use detailed checklists, conduct regular inspections, and maintain open communication with your team to ensure consistent quality."
      },
      {
        question: "Can you clean specialized areas in Pembroke Pines?",
        answer: "Yes, we clean warehouse floors, high-bay areas, clean rooms, quality control spaces, and all specialized logistics areas."
      }
    ],
    testimonial: {
      text: "Our Pembroke Pines warehouse has benefited tremendously from Red Rock Cleans' expertise. Operational efficiency is at an all-time high.",
      author: "Warehouse Manager, Pembroke Pines Distribution Corp"
    }
  },
  {
    id: "plantation",
    name: "Plantation",
    description: "Plantation's distribution facilities benefit from our thorough warehouse cleaning that reduces downtime and creates safer working conditions.",
    faq: [
      {
        question: "What certifications do your Plantation cleaners have?",
        answer: "Our technicians are trained in warehouse safety, OSHA compliance, proper use of industrial cleaning equipment, and logistics environment protocols."
      },
      {
        question: "Do you provide post-construction cleaning in Plantation?",
        answer: "Yes, we offer comprehensive post-construction and post-renovation cleaning for warehouse facilities and distribution center expansions."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans keeps our Plantation warehouse in top condition. Their logistics cleaning knowledge is impressive.",
      author: "Facility Director, Plantation Distribution Services"
    }
  },
  {
    id: "southwest-ranches",
    name: "Southwest Ranches",
    description: "Southwest Ranches warehouses trust our heavy-duty cleaning to maintain distribution floors, equipment, and facilities in optimal condition.",
    faq: [
      {
        question: "How long does warehouse cleaning take in Southwest Ranches?",
        answer: "Cleaning time varies by facility size and scope. Typical warehouses require 3-10 hours depending on square footage and services needed."
      },
      {
        question: "Do you handle waste disposal in Southwest Ranches?",
        answer: "Yes, we properly collect, segregate, and dispose of warehouse waste following all environmental regulations and best practices."
      }
    ],
    testimonial: {
      text: "Our Southwest Ranches distribution facility is safer and more efficient thanks to Red Rock Cleans' comprehensive cleaning program.",
      author: "VP of Logistics, Southwest Ranches Distribution"
    }
  },
  {
    id: "sunny-isles-beach",
    name: "Sunny Isles Beach",
    description: "Sunny Isles Beach warehouses rely on our specialized cleaning services to combat coastal environmental challenges and maintain pristine distribution areas.",
    faq: [
      {
        question: "How do you handle coastal conditions in Sunny Isles Beach?",
        answer: "We use corrosion-resistant equipment and specialized cleaning methods to address the unique challenges of coastal warehouse environments."
      },
      {
        question: "What's included in floor cleaning in Sunny Isles Beach?",
        answer: "We provide industrial floor scrubbing, sweeping, and maintenance that removes dirt, salt residue, and debris from warehouse concrete surfaces."
      }
    ],
    testimonial: {
      text: "The coastal environment is tough on our Sunny Isles Beach facility. Red Rock Cleans keeps everything clean and protected.",
      author: "Maintenance Chief, Sunny Isles Beach Warehousing"
    }
  },
  {
    id: "sunrise",
    name: "Sunrise",
    description: "Sunrise distribution centers depend on our professional warehouse cleaning to ensure compliance, safety, and maximum operational efficiency.",
    faq: [
      {
        question: "Do you offer continuous cleaning in Sunrise?",
        answer: "Yes, we can provide ongoing cleaning support with technicians on-site during operational hours for continuous facility maintenance."
      },
      {
        question: "How do you price warehouse cleaning in Sunrise?",
        answer: "We provide transparent, customized pricing based on facility size, cleaning frequency, and specific needs. Free quotes available."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been instrumental in maintaining our Sunrise warehouse's high standards. Outstanding service and results.",
      author: "Quality Manager, Sunrise Distribution Systems"
    }
  },
  {
    id: "tamarac",
    name: "Tamarac",
    description: "Tamarac warehouses benefit from our comprehensive cleaning protocols that enhance safety, reduce liability, and improve operational performance.",
    faq: [
      {
        question: "What safety measures do you follow in Tamarac?",
        answer: "We follow proper warehouse safety protocols, use appropriate PPE, coordinate with your safety team, and adhere to all OSHA regulations."
      },
      {
        question: "Can you clean during third shift in Tamarac?",
        answer: "Yes, we offer flexible scheduling including third shift, overnight, and weekend cleaning to minimize disruption to warehouse operations."
      }
    ],
    testimonial: {
      text: "Our Tamarac warehouse facility has never been safer or cleaner. Red Rock Cleans delivers excellence every time.",
      author: "Operations Manager, Tamarac Distribution Group"
    }
  },
  {
    id: "weston",
    name: "Weston",
    description: "Weston's logistics sector trusts our warehouse cleaning expertise to maintain safe, efficient distribution environments that support business growth.",
    faq: [
      {
        question: "What makes your Weston service unique?",
        answer: "We combine heavy-duty warehouse cleaning expertise with deep understanding of OSHA requirements and logistics best practices."
      },
      {
        question: "Do you provide ongoing support in Weston?",
        answer: "Yes, we offer scheduled maintenance programs, emergency response services, and ongoing consultation for your Weston warehouse facility."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been our Weston warehouse cleaning partner for years. Their expertise and reliability are essential to our operations.",
      author: "Warehouse Director, Weston Logistics Solutions"
    }
  }
];

const WarehouseCleaningSouthFloridaPage = () => {
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
        <title>Warehouse Cleaning South Florida | Red Rock Cleans</title>
        <meta name="description" content="Professional warehouse cleaning in South Florida. Red Rock Cleans improves safety and efficiency with comprehensive floor scrubbing, high-bay dusting, and more for logistics centers in Fort Lauderdale." />
        <meta name="keywords" content="warehouse cleaning South Florida, warehouse cleaning near me, industrial warehouse cleaning South Florida, distribution center cleaning Fort Lauderdale, warehouse floor scrubbing Hollywood FL, best warehouse cleaners South Florida, heavy duty warehouse cleaning Broward County, OSHA compliant warehouse cleaning, pallet rack cleaning South Florida, warehouse cleaning cost South Florida, commercial warehouse cleaning prices Fort Lauderdale, what is warehouse cleaning South Florida, hire warehouse cleaners in South Florida" />
        <link rel="canonical" href="https://redrockcleans.com/south-florida/warehouse-cleaning" />
      </Helmet>
      
      <SouthFloridaNavigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/src/assets/hero-commercial.jpg" 
              alt="Professional warehouse cleaning service in a South Florida logistics center"
              className="w-full h-full object-cover scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                Efficient & Safe Warehouse Cleaning in South Florida
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                For South Florida's vital logistics hubs, a clean and organized warehouse is essential for operational efficiency, employee safety, and protecting valuable inventory. Our specialized warehouse cleaning services help distribution centers maintain safe, compliant environments that maximize productivity and minimize workplace accidents.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="h-14 text-lg px-8" asChild>
                  <Link to="/book-now-southflorida">
                    <Calendar className="w-5 h-5 mr-2" />
                    Get Your Free Quote
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="h-14 text-lg px-8" asChild>
                  <Link to="/contact">
                    <Warehouse className="w-5 h-5 mr-2" />
                    Contact Us
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Optimizing Your South Florida Logistics Environment Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Optimizing Your South Florida Logistics Environment
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <HardHat className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Enhancing Workplace Safety</h3>
                      <p className="text-muted-foreground">
                        Our warehouse cleaning services prioritize removing hazards like spills, debris, and obstructions that can lead to workplace accidents. By maintaining clear, hazard-free floors and compliance with OSHA standards, we help you create a safer environment for your South Florida logistics team, reducing workers' compensation claims and protecting your workforce.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Forklift className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Boosting Operational Efficiency</h3>
                      <p className="text-muted-foreground">
                        Clean, clearly marked floors and organized spaces allow forklifts and warehouse staff to move more efficiently, speeding up logistics operations. Our systematic cleaning removes obstructions, maintains clear traffic lanes, and creates an environment where your team can focus on rapid order fulfillment rather than navigating cluttered, dirty spaces.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Box className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Protecting Valuable Inventory</h3>
                      <p className="text-muted-foreground">
                        Controlling dust, preventing pest infestations, and addressing humidity-related issues are critical for protecting stored products and inventory. Our comprehensive warehouse cleaning includes high-bay dusting, floor maintenance, and environmental controls that prevent product damage, reduce inventory loss, and maintain optimal storage conditions for your South Florida facility.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Comprehensive Warehouse Cleaning Checklist Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Our Comprehensive Warehouse Cleaning Checklist
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Layers className="h-10 w-10 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-3">Floor Scrubbing & Sweeping</h3>
                      <p className="text-muted-foreground text-sm">
                        Heavy-duty sweeping and industrial floor scrubbing using professional-grade equipment designed for large concrete warehouse floors. We remove dirt, debris, spills, and markings to maintain safe, clean surfaces that meet OSHA standards and support efficient forklift and pallet jack operations.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Construction className="h-10 w-10 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-3">High-Bay & Racking Dusting</h3>
                      <p className="text-muted-foreground text-sm">
                        Comprehensive cleaning of hard-to-reach ceilings, overhead beams, ventilation systems, and pallet racking structures. We use specialized high-reach equipment to safely remove accumulated dust and debris that can contaminate inventory, affect air quality, and create fire hazards in your South Florida warehouse.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Truck className="h-10 w-10 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-3">Loading Docks & Common Areas</h3>
                      <p className="text-muted-foreground text-sm">
                        Thorough cleaning of high-traffic loading docks, shipping and receiving areas, and warehouse common spaces. We ensure these critical zones remain clean, safe, and organized for efficient truck loading/unloading operations and smooth product flow through your distribution center.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <User className="h-10 w-10 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-3">Offices & Employee Restrooms</h3>
                      <p className="text-muted-foreground text-sm">
                        Complete cleaning of warehouse offices, administrative areas, break rooms, and employee restroom facilities. We ensure your staff has clean, comfortable spaces for administrative work, meals, and personal needs, contributing to improved morale and productivity in your facility.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Impact of Professionally Cleaned Warehouse Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                The Impact of a Professionally Cleaned Warehouse
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Package className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    <CountUp end={500000} duration={2} separator="," />+
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Square Feet Cleaned</h3>
                  <p className="text-muted-foreground text-sm">
                    South Florida warehouse space maintained monthly by our team
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ShieldCheck className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    <CountUp end={85} duration={2} />%
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Safety Incidents Prevented</h3>
                  <p className="text-muted-foreground text-sm">
                    Reduction in slip, trip, and fall accidents through our cleaning
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Timer className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    <CountUp end={30} duration={2} />%
                  </div>
                  <h3 className="text-lg font-semibold mb-2">More Efficient Operations</h3>
                  <p className="text-muted-foreground text-sm">
                    Average productivity improvement from cleaner, organized facilities
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
                          <h4 className="font-semibold mb-2">Warehouse Cleaning Services in {city.name}</h4>
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
                          <Link to="/book-now-southflorida">
                            Get Warehouse Cleaning Quote for {city.name}
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
                Other Industrial Cleaning Services in South Florida
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <Factory className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Factory Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Professional cleaning services for manufacturing plants and production facilities
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/south-florida/factory-cleaning">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <Warehouse className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Industrial Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Heavy-duty cleaning for industrial facilities and distribution centers
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/south-florida/industrial-cleaning">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <Construction className="h-8 w-8 text-primary mx-auto mb-4" />
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
                <AccordionItem value="what-is-warehouse-cleaning" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">What is warehouse cleaning in South Florida?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Warehouse cleaning in South Florida involves specialized services designed for large distribution and logistics facilities. This includes industrial floor scrubbing and sweeping of warehouse concrete surfaces, high-bay and pallet rack dusting to remove accumulated debris, loading dock and receiving area maintenance, office and employee restroom cleaning, inventory protection through dust and pest control, and ensuring OSHA compliance. Our services are tailored to meet the unique demands of South Florida's logistics sector.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="cost" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">How much does warehouse cleaning cost in South Florida?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Warehouse cleaning costs vary based on facility size, operational volume, and cleaning frequency. Most South Florida warehouses invest $600-$2,500 per cleaning session for small to medium facilities (50,000-150,000 sq ft), while large distribution centers may range from $3,000-$8,000+ depending on scope. We recommend daily floor maintenance with weekly deep cleaning for optimal results. Contact us for a free, customized quote based on your specific warehouse requirements.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="osha-compliance" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">Do you provide OSHA compliant warehouse cleaning in South Florida?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Yes, all our warehouse cleaning services are designed to meet or exceed OSHA requirements for workplace safety and cleanliness. We maintain clean walking and working surfaces to prevent slips, trips, and falls, ensure clear emergency exits and pathways, control dust and airborne particles, follow proper safety protocols when working around equipment, provide documentation for compliance audits, and train our staff in warehouse safety procedures. Our goal is to help you maintain a safe, compliant distribution environment.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="hire-cleaners" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">How do I hire warehouse cleaners in South Florida?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Hiring warehouse cleaners in South Florida is simple with Red Rock Cleans. Contact us for a free consultation and facility walkthrough. We'll evaluate your specific cleaning needs, operational schedule, square footage, and compliance requirements. Then we'll provide a detailed proposal with transparent pricing and a customized cleaning plan. Once approved, we can typically begin service within 1-3 business days. We offer flexible scheduling to work around your warehouse operations and shipping schedules.
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
              Ready to Optimize Your Warehouse Safety and Efficiency?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join South Florida warehouses that trust Red Rock Cleans for professional warehouse cleaning services
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
              <Link to="/commercial-quote">Get Your Free Warehouse Cleaning Quote</Link>
            </Button>
          </div>
        </section>

        {/* Image Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <img 
                src="/static/service-products.jpg" 
                alt="A large, clean warehouse in South Florida with polished floors, cleaned by Red Rock Cleans"
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

export default WarehouseCleaningSouthFloridaPage;


import { MauiNavigation } from "@/components/MauiNavigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HardHat, Box, Layers, Construction, Truck, User, Package, ShieldCheck, Timer, MapPin, Calendar, Home, Factory, Cog, HardDriveDownload, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import CountUp from "react-countup";

const towns = [
  {
    id: "wailea",
    name: "Wailea",
    description: "Wailea warehouse facilities trust our professional warehouse cleaning services to maintain safe, efficient operations that support the luxury retail and hospitality supply chains serving the area.",
    faq: [
      {
        question: "Can you clean our Wailea warehouse during off-hours?",
        answer: "Yes, we schedule warehouse cleaning during your facility's downtime, typically evening or weekend hours, to ensure zero disruption to receiving, shipping, and inventory operations."
      },
      {
        question: "What equipment do you use in Wailea warehouses?",
        answer: "We use industrial-grade floor scrubbers, high-reach dusting equipment, HEPA-filtered vacuums, and commercial cleaning solutions designed for large-scale warehouse environments."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has transformed our Wailea distribution center's safety and efficiency. Our OSHA inspections are stress-free now.",
      author: "Operations Manager, Wailea Logistics Hub"
    }
  },
  {
    id: "makena",
    name: "Makena",
    description: "Makena warehouses rely on our comprehensive cleaning services to eliminate dust, maintain clean floors, and create the organized environment that prevents accidents and protects inventory.",
    faq: [
      {
        question: "How do you handle high-bay cleaning in Makena?",
        answer: "We use specialized lift equipment and extended-reach tools to safely clean high ceilings, beams, HVAC systems, and pallet racking at any height without disrupting operations."
      },
      {
        question: "Do you provide emergency cleaning in Makena?",
        answer: "Yes, we offer rapid response cleaning for urgent situations such as spills, contamination events, pre-inspection preparation, or sudden safety concerns."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans' attention to detail in our Makena warehouse is outstanding. The floors and racking areas have never been cleaner or safer.",
      author: "Facility Director, Makena Storage Solutions"
    }
  },
  {
    id: "kihei",
    name: "Kihei",
    description: "Kihei warehouse facilities benefit from our specialized cleaning protocols that address concrete floors, loading docks, and all areas to ensure OSHA compliance and operational excellence.",
    faq: [
      {
        question: "What is included in Kihei warehouse cleaning?",
        answer: "Our service includes floor scrubbing and sweeping, high-bay and racking dusting, loading dock cleaning, office and restroom maintenance, trash removal, and specialized cleaning for any equipment or storage systems."
      },
      {
        question: "How often should Kihei warehouses schedule cleaning?",
        answer: "We recommend weekly floor maintenance for active warehouses, with monthly deep cleaning and quarterly high-bay dusting for optimal safety and efficiency."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans' systematic approach to our Kihei warehouse has dramatically reduced safety incidents and improved our operational flow.",
      author: "General Manager, Kihei Distribution Center"
    }
  },
  {
    id: "kapalua",
    name: "Kapalua",
    description: "Kapalua warehouse facilities trust our meticulous cleaning services to maintain the high standards expected in facilities supporting luxury resorts and premium retail operations.",
    faq: [
      {
        question: "Are your Kapalua warehouse cleanings eco-friendly?",
        answer: "Yes, we offer green cleaning options using environmentally responsible products that are effective at cleaning while being safe for workers, inventory, and the environment."
      },
      {
        question: "What makes your Kapalua warehouse service different?",
        answer: "We specialize in warehouse environments with staff trained in industrial cleaning safety, OSHA compliance, and maintaining the efficient, organized spaces that logistics operations require."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provides the level of cleanliness our Kapalua warehouse needs to support resort operations. Their professionalism is unmatched.",
      author: "Director, Kapalua Resort Supply Warehouse"
    }
  },
  {
    id: "kaanapali",
    name: "Ka'anapali",
    description: "Ka'anapali warehouses rely on our specialized services to eliminate dust, enhance safety, and create the organized environment that maximizes productivity and protects workers.",
    faq: [
      {
        question: "How do you maintain floor safety in Ka'anapali warehouses?",
        answer: "We use professional floor scrubbers and marking-safe cleaning solutions that remove grime and debris while preserving safety line markings and floor coatings essential for forklift operations."
      },
      {
        question: "Can you handle large warehouse facilities in Ka'anapali?",
        answer: "Yes, we have the staff, industrial equipment, and experience to efficiently clean warehouses of all sizes, from small storage facilities to large multi-bay distribution centers."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has never missed a cleaning at our Ka'anapali warehouse. Their reliability and thoroughness keep our facility safe and efficient.",
      author: "Operations Supervisor, Ka'anapali Wholesale Warehouse"
    }
  },
  {
    id: "lahaina",
    name: "Lahaina",
    description: "Lahaina warehouse facilities benefit from our comprehensive cleaning that addresses floors, high-bay areas, loading docks, and all zones to support efficient inter-island distribution.",
    faq: [
      {
        question: "What cleaning methods do you use in Lahaina warehouses?",
        answer: "We use industrial floor scrubbers, power sweepers, high-reach cleaning equipment, and OSHA-compliant cleaning methods designed specifically for warehouse and logistics environments."
      },
      {
        question: "Can you clean specialized warehouse types?",
        answer: "Yes, we clean all types of warehouses including cold storage facilities, food-grade warehouses, hazmat storage, general distribution centers, and e-commerce fulfillment centers with appropriate specialized protocols."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans' expertise in warehouse cleaning is evident in our Lahaina facility. Staff morale and productivity have improved significantly.",
      author: "Facility Manager, Lahaina Supply Depot"
    }
  },
  {
    id: "spreckelsville",
    name: "Spreckelsville",
    description: "Spreckelsville warehouse facilities trust our precision cleaning services to maintain the safe, organized environment that supports efficient logistics and protects valuable inventory.",
    faq: [
      {
        question: "How do you ensure quality in Spreckelsville warehouses?",
        answer: "We use detailed checklists, conduct safety inspections, provide photographic documentation, and maintain regular communication to ensure consistent service and OSHA compliance."
      },
      {
        question: "What are your rates for Spreckelsville warehouses?",
        answer: "Pricing is based on facility square footage, ceiling height, cleaning frequency, and specific services required. Contact us for a customized quote tailored to your warehouse's needs."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been instrumental in maintaining our Spreckelsville warehouse's safety standards. Their systematic approach is exactly what we needed.",
      author: "Owner, Spreckelsville Storage & Distribution"
    }
  },
  {
    id: "paia",
    name: "Pa'ia",
    description: "Pa'ia warehouses rely on our expert cleaning services to eliminate dust, maintain clear pathways, and create the safe environment that keeps operations running smoothly.",
    faq: [
      {
        question: "Do you serve small warehouses in Pa'ia?",
        answer: "Yes, we service warehouse facilities of all sizes, from small storage units to large multi-purpose distribution centers, with the same level of expertise and attention to safety."
      },
      {
        question: "What safety protocols do you follow in Pa'ia warehouses?",
        answer: "All technicians follow OSHA safety protocols, wear appropriate PPE, are trained in warehouse hazard awareness, and coordinate with your staff to ensure safe cleaning around active operations."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans transformed our Pa'ia warehouse from a cleaning concern to a competitive advantage. Our efficiency metrics have improved significantly.",
      author: "Manager, Pa'ia Equipment Warehouse"
    }
  },
  {
    id: "kuau",
    name: "Kuau",
    description: "Kuau warehouse facilities benefit from our specialized cleaning protocols designed to enhance safety while maintaining the clean, organized environment that supports smooth operations.",
    faq: [
      {
        question: "How quickly can you respond in Kuau?",
        answer: "We offer same-day emergency cleaning for urgent situations like major spills or safety hazards, and can schedule routine warehouse maintenance within 24-48 hours of initial contact."
      },
      {
        question: "Do you provide cleaning verification in Kuau?",
        answer: "Yes, we provide service reports, before/after photos, and safety compliance documentation to confirm thorough cleaning and adherence to OSHA standards."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans' proactive approach to our Kuau warehouse has eliminated safety violations. Our team operates with confidence in a clean environment.",
      author: "Director, Kuau Marine Supply Warehouse"
    }
  },
  {
    id: "haiku",
    name: "Ha'iku",
    description: "Ha'iku warehouses trust our comprehensive cleaning services to maintain the dust-free, organized environment that protects inventory, ensures safety, and supports efficient operations.",
    faq: [
      {
        question: "What makes Ha'iku warehouse cleaning unique?",
        answer: "Ha'iku's diverse industrial landscape requires specialized cleaning for everything from agricultural storage to retail distribution. We customize our protocols to address your specific inventory and operational needs."
      },
      {
        question: "Can you provide training in Ha'iku?",
        answer: "Yes, we offer training sessions on daily maintenance, spill response, and proper cleaning protocols to support ongoing warehouse cleanliness and safety between professional services."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been essential to our Ha'iku warehouse's success. Their understanding of industrial cleaning is exceptional.",
      author: "Owner, Ha'iku Agricultural Supply Warehouse"
    }
  }
];

const WarehouseCleaningMauiPage = () => {
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
        <title>Warehouse Cleaning Maui | Red Rock Cleans</title>
        <meta name="description" content="Warehouse cleaning in Maui. Efficient service maximizing safety & productivity. Professional Hawaiian service. Book today!" />
        <meta name="keywords" content="warehouse cleaning near me, industrial warehouse cleaning Maui, distribution center cleaning Maui, warehouse floor scrubbing Kihei, best warehouse cleaners Maui, heavy duty warehouse cleaning Maui, OSHA compliant warehouse cleaning, pallet rack cleaning Maui, warehouse cleaning cost Maui, commercial warehouse cleaning prices Maui, what is warehouse cleaning Maui, hire warehouse cleaners in Maui" />
        <link rel="canonical" href="https://redrockcleans.com/maui/warehouse-cleaning" />
      </Helmet>
      
      <MauiNavigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/src/assets/hero-commercial.jpg" 
              alt="Professional warehouse cleaning service at a Maui logistics facility"
              className="w-full h-full object-cover scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                Efficient & Safe Warehouse Cleaning on Maui
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                For Maui's logistics hubs, a clean and organized warehouse is essential for operational efficiency, employee safety, and protecting inventory from dust, pests, and environmental contamination. Our specialized warehouse cleaning services ensure that floors are hazard-free, high-bay areas are dust-controlled, and your entire facility meets OSHA standards while supporting the smooth flow of goods across the island and beyond.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="h-14 text-lg px-8" asChild>
                  <a href="tel:+18089093038">
                    <Phone className="w-5 h-5 mr-2" />
                    Call (808) 909-3038
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="h-14 text-lg px-8" asChild>
                  <Link to="/commercial-quote?location=maui">
                    <Home className="w-5 h-5 mr-2" />
                    Get Free Quote
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Optimizing Your Island Logistics Environment Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Optimizing Your Island Logistics Environment
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <HardHat className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Enhancing Workplace Safety</h3>
                      <p className="text-muted-foreground">
                        Clear, hazard-free floors and properly maintained walkways are fundamental to preventing workplace accidents and ensuring OSHA compliance. Our industrial cleaning removes debris, spills, and trip hazards while preserving safety line markings, creating the safe environment your team needs to work confidently and efficiently.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Truck className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Boosting Operational Efficiency</h3>
                      <p className="text-muted-foreground">
                        Clean, clearly marked floors and organized spaces significantly speed up receiving, picking, packing, and shipping operations—critical for inter-island logistics on Maui. Our thorough cleaning eliminates obstacles, improves visibility, and creates the streamlined environment that maximizes forklift safety and worker productivity.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Box className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Protecting Valuable Inventory</h3>
                      <p className="text-muted-foreground">
                        Controlling dust, preventing pest infiltration, and managing humidity-related issues through proper cleaning prevents product damage and reduces inventory loss. Our comprehensive warehouse cleaning protects your valuable goods from environmental contamination, ensuring products arrive to customers in pristine condition and reducing costly damage claims.
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
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Layers className="h-10 w-10 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-3">Floor Scrubbing & Sweeping</h3>
                      <p className="text-muted-foreground text-sm">
                        Using industrial-grade floor scrubbers and power sweepers to deep clean concrete floors, remove oil stains, eliminate dust, and maintain the clean, safe surfaces essential for forklift operations and worker safety. We preserve floor markings and coatings while achieving thorough cleanliness.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Construction className="h-10 w-10 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-3">High-Bay & Racking Dusting</h3>
                      <p className="text-muted-foreground text-sm">
                        Cleaning hard-to-reach ceilings, structural beams, HVAC systems, lighting fixtures, and pallet racks using specialized lift equipment and extended-reach tools. We control overhead dust accumulation that can contaminate inventory and create safety hazards, ensuring clean air and protected products.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Truck className="h-10 w-10 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-3">Loading Docks & Common Areas</h3>
                      <p className="text-muted-foreground text-sm">
                        Keeping high-traffic receiving and shipping areas clean, safe, and free of debris. We clean dock plates, sweep dock areas, remove cardboard and packing materials, and maintain the organized spaces critical for efficient loading and unloading operations.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <User className="h-10 w-10 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-3">Offices & Employee Restrooms</h3>
                      <p className="text-muted-foreground text-sm">
                        Maintaining clean, comfortable administrative areas, break rooms, and restroom facilities where warehouse staff can rest and work. We ensure these spaces are sanitized, restocked, and properly maintained to support employee well-being and morale.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* The Impact of a Professionally Cleaned Warehouse Section */}
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
                    Total warehouse space we maintain across Maui facilities
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
                    Reduction in slip, trip, and fall incidents through professional cleaning
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Timer className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    <CountUp end={20} duration={2} />%
                  </div>
                  <h3 className="text-lg font-semibold mb-2">More Efficient Operations</h3>
                  <p className="text-muted-foreground text-sm">
                    Average productivity improvement in professionally cleaned warehouses
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
                          <h4 className="font-semibold mb-2">Local Warehouse Cleaning Services</h4>
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
                            Get Warehouse Cleaning Quote for {town.name}
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
                Other Industrial Cleaning Services on Maui
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
                    <Cog className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Industrial Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Heavy-duty cleaning for industrial facilities and equipment
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/maui/industrial-cleaning">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <HardDriveDownload className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Post-Construction Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Specialized cleaning services for newly constructed facilities
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
                <AccordionItem value="what-is-warehouse-cleaning" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">What is warehouse cleaning and why is it important?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Warehouse cleaning is specialized industrial cleaning designed for large-scale storage and distribution facilities. It includes floor scrubbing, high-bay dusting, loading dock maintenance, and all services needed to maintain safe, efficient operations. On Maui, where warehouses support critical supply chains for tourism, retail, and local businesses, professional cleaning is essential for OSHA compliance, preventing accidents, protecting inventory, and ensuring smooth logistics operations.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="osha-compliance" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">How do you ensure OSHA compliance in warehouse cleaning?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      We follow all OSHA standards for warehouse safety including proper equipment lockout/tagout procedures, safety signage during cleaning, spill response protocols, and worker safety training. Our team uses industrial equipment properly, maintains clear exit pathways, preserves safety markings, and documents all cleaning activities to support your compliance records and inspections.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="schedule" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">Can you clean around our warehouse operations?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Absolutely. We schedule warehouse cleaning during your slowest operational periods, typically evening shifts, weekends, or between receiving cycles. For 24/7 operations, we can work in zones to clean sections systematically without disrupting your workflow. We coordinate closely with your warehouse management to ensure safety and minimize any impact on productivity.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="cost" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">What is the cost of warehouse cleaning on Maui?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Warehouse cleaning costs vary based on facility square footage, ceiling height, floor type, cleaning frequency, specialized services like high-bay dusting, and specific operational requirements. We provide transparent, competitive pricing with customized quotes for your facility. Most warehouses find our services to be a valuable investment that reduces accidents, protects inventory, improves efficiency, and ensures OSHA compliance. Contact us for a free assessment and detailed proposal tailored to your warehouse's needs.
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
              Ready to Enhance Your Warehouse Safety & Efficiency?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join Maui's leading logistics facilities that trust Red Rock Cleans for professional warehouse cleaning
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
              <Link to="/commercial-quote?location=maui">Get Your Free Warehouse Cleaning Assessment</Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default WarehouseCleaningMauiPage;


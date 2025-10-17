import { ColumbusNavigation } from "@/components/ColumbusNavigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HardHat, Forklift, Box, Layers, Construction, Truck, User, Package, ShieldCheck, Timer, Factory, Cog, Hammer, Phone, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";

const cities = [
  {
    id: "dublin",
    name: "Dublin",
    description: "Dublin's logistics and distribution centers trust Red Rock Cleans to maintain the clean, safe warehouse environments essential for efficient operations. Our professional warehouse cleaning services ensure your Dublin facility meets OSHA standards while supporting productivity and protecting valuable inventory.",
    faq: [
      {
        question: "Can you clean our Dublin warehouse after business hours?",
        answer: "Yes, we offer flexible scheduling for Dublin warehouses including evening, overnight, and weekend cleaning to ensure your facility is spotless without disrupting logistics operations."
      },
      {
        question: "Do you use industrial equipment for Dublin warehouse floors?",
        answer: "Absolutely. We use heavy-duty scrubbers, sweepers, and industrial cleaning equipment specifically designed for Dublin warehouse concrete floors to deliver efficient, thorough cleaning."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans keeps our Dublin distribution center running safely and efficiently. Their warehouse cleaning expertise is outstanding.",
      author: "Facilities Manager, Dublin Logistics Center"
    }
  },
  {
    id: "upper-arlington",
    name: "Upper Arlington",
    description: "Upper Arlington warehouse facilities rely on our comprehensive cleaning services that maintain the organized, safe environments essential for modern logistics operations. We understand that clean warehouses support efficiency and protect the valuable inventory your business depends on.",
    faq: [
      {
        question: "What makes your Upper Arlington warehouse cleaning different?",
        answer: "We combine industrial cleaning expertise with understanding of logistics operations, ensuring your Upper Arlington warehouse maintains the cleanliness that supports safety and efficiency."
      },
      {
        question: "Can you clean pallet racks in Upper Arlington warehouses?",
        answer: "Yes, we provide high-bay cleaning including pallet rack dusting and cleaning of hard-to-reach areas in Upper Arlington warehouses using appropriate equipment and safety protocols."
      }
    ],
    testimonial: {
      text: "Our Upper Arlington warehouse maintains excellent cleanliness thanks to Red Rock Cleans. They understand industrial facility needs.",
      author: "Operations Director, Upper Arlington Storage"
    }
  },
  {
    id: "powell",
    name: "Powell",
    description: "Powell warehouses depend on our professional cleaning services that create the safe, organized spaces where logistics operations thrive. From floor scrubbing to high-bay dusting, we maintain the comprehensive cleanliness Powell facilities require for optimal performance.",
    faq: [
      {
        question: "How do you handle Powell warehouse floor cleaning?",
        answer: "We use industrial scrubbers and sweepers for Powell warehouse floors, removing dirt, debris, and residue to maintain safe, clean concrete surfaces that support efficient forklift operations."
      },
      {
        question: "Can you clean Powell warehouse loading docks?",
        answer: "Yes, our Powell warehouse cleaning includes loading dock maintenance with sweeping, debris removal, and cleaning to keep these high-traffic areas safe and functional."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans delivers consistent warehouse cleaning for our Powell facility. Professional service that understands logistics operations.",
      author: "Warehouse Manager, Powell Distribution"
    }
  },
  {
    id: "lewis-center",
    name: "Lewis Center",
    description: "Lewis Center warehouse operations trust our specialized cleaning services to maintain the safe, compliant environments essential for protecting employees and inventory. Our experienced team ensures your Lewis Center facility stays clean, organized, and OSHA-compliant.",
    faq: [
      {
        question: "Are your Lewis Center warehouse cleaners OSHA trained?",
        answer: "Yes, our Lewis Center warehouse cleaning team receives OSHA safety training and understands the compliance requirements for industrial facilities and logistics operations."
      },
      {
        question: "What areas do you clean in Lewis Center warehouses?",
        answer: "We clean all areas including warehouse floors, high-bay ceilings, pallet racks, loading docks, offices, employee restrooms, and common areas in Lewis Center facilities."
      }
    ],
    testimonial: {
      text: "Our Lewis Center warehouse stays safe and organized thanks to Red Rock Cleans. They're reliable and safety-focused.",
      author: "Safety Director, Lewis Center Fulfillment"
    }
  },
  {
    id: "worthington",
    name: "Worthington",
    description: "Worthington warehouse facilities benefit from our professional cleaning that supports operational efficiency while maintaining the safety standards essential for modern logistics. We help Worthington businesses create the clean environments where productivity and safety go hand in hand.",
    faq: [
      {
        question: "How often should Worthington warehouses schedule cleaning?",
        answer: "Most Worthington warehouses benefit from regular cleaning schedules—daily sweeping, weekly scrubbing, and periodic deep cleaning based on activity levels and inventory types."
      },
      {
        question: "Do you clean Worthington warehouse offices?",
        answer: "Yes, we provide complete facility cleaning for Worthington warehouses including offices, break rooms, restrooms, and administrative areas in addition to warehouse spaces."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Worthington warehouse with professionalism and understanding of our operations. Highly recommended!",
      author: "General Manager, Worthington Supply Chain"
    }
  },
  {
    id: "new-albany",
    name: "New Albany",
    description: "New Albany's modern warehouse and distribution facilities demand the highest level of cleanliness and organization. Our premium warehouse cleaning services ensure New Albany logistics centers maintain the immaculate conditions that support efficient operations and protect valuable inventory.",
    faq: [
      {
        question: "Can you handle New Albany's advanced warehouse facilities?",
        answer: "Yes, we specialize in cleaning modern warehouse facilities in New Albany including automated centers, climate-controlled spaces, and high-tech distribution hubs with appropriate protocols."
      },
      {
        question: "Do you provide emergency warehouse cleaning in New Albany?",
        answer: "Yes, we offer emergency and on-call cleaning services for New Albany warehouses to handle spills, contamination, or urgent facility needs that affect operations."
      }
    ],
    testimonial: {
      text: "Our New Albany distribution center's cleanliness reflects Red Rock Cleans' commitment to excellence. They deliver premium industrial cleaning.",
      author: "Facilities Director, New Albany Logistics"
    }
  },
  {
    id: "bexley",
    name: "Bexley",
    description: "Bexley warehouse facilities trust our dependable cleaning services to maintain the safe, organized spaces essential for smooth operations. We treat every Bexley warehouse with the systematic approach it deserves, protecting inventory and supporting efficiency.",
    faq: [
      {
        question: "What warehouse equipment do you clean in Bexley?",
        answer: "We clean warehouse infrastructure in Bexley including floors, pallet racks, conveyor systems, loading equipment areas, and all surfaces while working around operational equipment."
      },
      {
        question: "How do you ensure quality in Bexley warehouse cleaning?",
        answer: "We use detailed checklists, conduct regular inspections, and maintain open communication with Bexley warehouse management to ensure consistent, high-quality industrial cleaning."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our Bexley warehouse with reliability and professionalism. Our facility always looks excellent.",
      author: "Operations Manager, Bexley Storage Solutions"
    }
  },
  {
    id: "german-village",
    name: "German Village",
    description: "German Village warehouse and storage facilities benefit from our adaptable cleaning services that maintain modern operational standards while working with unique building characteristics. We help German Village businesses keep warehouses clean, safe, and efficient.",
    faq: [
      {
        question: "Can you clean German Village warehouses in older buildings?",
        answer: "Yes, we adapt our cleaning methods for German Village's older warehouse buildings while maintaining the same rigorous cleanliness standards required for safe logistics operations."
      },
      {
        question: "Do you clean German Village storage facilities?",
        answer: "Yes, we provide professional cleaning for all warehouse and storage facilities in German Village including self-storage, commercial storage, and distribution spaces."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans successfully maintains our German Village warehouse in this historic building. They understand both industrial and unique spaces.",
      author: "Manager, German Village Storage"
    }
  },
  {
    id: "short-north",
    name: "Short North",
    description: "Short North's urban warehouse and fulfillment spaces trust our professional cleaning services to maintain the efficient operations essential for serving dense urban markets. From compact fulfillment centers to multi-floor warehouses, we keep Short North facilities clean and productive.",
    faq: [
      {
        question: "Do you serve Short North fulfillment centers?",
        answer: "Yes, we provide specialized cleaning for Short North fulfillment centers, e-commerce warehouses, and urban distribution facilities with understanding of space constraints and rapid operations."
      },
      {
        question: "Can you accommodate Short North's 24/7 operations?",
        answer: "Absolutely. We offer flexible scheduling for Short North warehouses including cleaning during shifts, overnight service, and coordination with continuous operations."
      }
    ],
    testimonial: {
      text: "Our Short North fulfillment center stays spotless thanks to Red Rock Cleans. They understand urban warehouse operations.",
      author: "Facility Manager, Short North Fulfillment"
    }
  },
  {
    id: "victorian-village",
    name: "Victorian Village",
    description: "Victorian Village warehouse facilities rely on our professional cleaning that maintains the safe, organized spaces essential for logistics success. Whether serving traditional warehouses or modern urban fulfillment centers, we deliver the cleanliness that supports operations.",
    faq: [
      {
        question: "What warehouse zones do you clean in Victorian Village?",
        answer: "We clean all warehouse zones in Victorian Village including receiving, storage, picking, packing, shipping areas, offices, and employee facilities for comprehensive coverage."
      },
      {
        question: "Do you provide Victorian Village weekend warehouse cleaning?",
        answer: "Yes, we provide weekend and flexible scheduling for Victorian Village warehouses to ensure facilities are clean without disrupting weekday operations."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Victorian Village warehouse with professionalism and attention to safety. Excellent industrial cleaning.",
      author: "Safety Manager, Victorian Village Warehouse"
    }
  },
  {
    id: "hillard",
    name: "Hilliard",
    description: "Hilliard's expanding warehouse and logistics community trusts our comprehensive cleaning services to maintain the safe, efficient facilities essential for modern supply chains. We protect Hilliard warehouse operations through systematic cleaning and safety-focused service.",
    faq: [
      {
        question: "Do you serve Hilliard's large warehouse complexes?",
        answer: "Yes, we have the capacity and experience to serve large warehouse complexes in Hilliard, from small distribution centers to massive logistics hubs with hundreds of thousands of square feet."
      },
      {
        question: "What training does your Hilliard warehouse team receive?",
        answer: "Our Hilliard team receives training in industrial cleaning, OSHA safety protocols, forklift awareness, and warehouse-specific procedures to ensure safe, effective service."
      }
    ],
    testimonial: {
      text: "Our Hilliard warehouse has been excellently maintained by Red Rock Cleans. Their industrial cleaning expertise shows in every detail.",
      author: "General Manager, Hilliard Distribution Center"
    }
  },
  {
    id: "westerville",
    name: "Westerville",
    description: "Westerville warehouse facilities trust our specialized cleaning services to maintain the safe, productive environments that support successful logistics operations. Our experienced team understands the comprehensive cleaning needs of Westerville industrial facilities.",
    faq: [
      {
        question: "Can you customize cleaning for Westerville warehouse types?",
        answer: "Yes, we create customized cleaning plans for Westerville warehouses based on size, inventory type, activity level, and specific operational requirements."
      },
      {
        question: "How do you coordinate with Westerville warehouse operations?",
        answer: "We maintain open communication with Westerville warehouse managers and adapt our schedules to minimize disruption while ensuring thorough cleaning of all areas."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provides the professional warehouse cleaning our Westerville facility needs. Reliable, thorough, and operations-focused service.",
      author: "Operations Director, Westerville Logistics"
    }
  }
];

const WarehouseCleaningColumbusOhioPage = () => {
  const [openAccordion, setOpenAccordion] = useState<string>("");
  const [countersVisible, setCountersVisible] = useState(false);
  const [squareFeet, setSquareFeet] = useState(0);
  const [safetyIncidents, setSafetyIncidents] = useState(0);
  const [efficiency, setEfficiency] = useState(0);

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
        
        setSquareFeet(Math.floor(progress * 2500000));
        setSafetyIncidents(Math.floor(progress * 450));
        setEfficiency(Math.floor(progress * 40));

        if (step >= steps) {
          clearInterval(timer);
          setSquareFeet(2500000);
          setSafetyIncidents(450);
          setEfficiency(40);
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
        <title>Warehouse Cleaning in Columbus Ohio | Red Rock Cleans</title>
        <meta name="description" content="Professional warehouse cleaning in Columbus, OH. Red Rock Cleans improves safety and efficiency with comprehensive floor scrubbing, high-bay dusting, and more for logistics centers." />
        <meta name="keywords" content="warehouse cleaning Columbus Ohio, warehouse cleaning near me, industrial warehouse cleaning Columbus Ohio, distribution center cleaning Dublin OH, warehouse floor scrubbing Westerville, best warehouse cleaners Columbus, heavy duty warehouse cleaning Columbus, OSHA compliant warehouse cleaning, pallet rack cleaning Columbus, warehouse cleaning cost Columbus Ohio, commercial warehouse cleaning prices Columbus, what is warehouse cleaning Columbus, hire warehouse cleaners in Columbus" />
        <link rel="canonical" href="https://redrockcleans.com/columbus-ohio/warehouse-cleaning" />
      </Helmet>
      
      <ColumbusNavigation loginUrl="https://customer-portal.maidily.com/red-rock-cleans-columbus-ohio/sign-in" bookingUrl="/commercial-quote?location=columbus-ohio" />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/src/assets/hero-commercial.jpg" 
              alt="Professional warehouse cleaning service in Columbus Ohio"
              className="w-full h-full object-cover scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                Efficient & Safe Warehouse Cleaning in Columbus, Ohio
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                For the vital logistics hubs in the Columbus area, a clean and organized warehouse is essential for operational efficiency, employee safety, and protecting inventory. Our specialized warehouse cleaning services maintain the pristine industrial environments where supply chains thrive, reducing accidents, improving productivity, and ensuring your Columbus facility meets OSHA compliance standards. Trust Red Rock Cleans to keep your warehouse running safely and efficiently.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="h-14 text-lg px-8" asChild>
                  <Link to="/commercial-quote?location=columbus-ohio">
                    <Package className="w-5 h-5 mr-2" />
                    Schedule Warehouse Cleaning
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="h-14 text-lg px-8" asChild>
                  <Link to="/contact">
                    <HardHat className="w-5 h-5 mr-2" />
                    Request Safety Assessment
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Optimizing Your Columbus Logistics Environment Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Optimizing Your Columbus Logistics Environment
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <HardHat className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Enhancing Workplace Safety</h3>
                      <p className="text-muted-foreground">
                        Clear, hazard-free floors and compliance with OSHA standards in your Columbus warehouse. We maintain slip-resistant surfaces, remove debris and spills, and ensure clear pathways that reduce workplace accidents, protect employees, and demonstrate your commitment to safety compliance that regulators and workers appreciate.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Forklift className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Boosting Operational Efficiency</h3>
                      <p className="text-muted-foreground">
                        Clean, marked floors and organized spaces speed up logistics in your Columbus warehouse. Well-maintained facilities support faster order picking, safer forklift operations, and improved inventory management, allowing your team to work efficiently without obstacles, delays, or safety concerns that slow productivity.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Box className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Protecting Valuable Inventory</h3>
                      <p className="text-muted-foreground">
                        Controlling dust and debris prevents product damage in your Columbus warehouse. Systematic cleaning protects stored goods from contamination, reduces packaging damage, and maintains the quality of inventory from receiving through shipping, safeguarding the valuable products your business depends on.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Our Comprehensive Warehouse Cleaning Checklist Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Our Comprehensive Warehouse Cleaning Checklist
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Layers className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">Floor Scrubbing & Sweeping</h3>
                      <p className="text-muted-foreground">
                        Using industrial-grade equipment for concrete floors in your Columbus warehouse. We employ heavy-duty scrubbers and sweepers that remove dirt, grime, and residue efficiently, maintaining clean, safe floors that support forklift operations and reduce dust throughout your facility.
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
                      <h3 className="text-xl font-semibold mb-3">High-Bay & Racking Dusting</h3>
                      <p className="text-muted-foreground">
                        Cleaning hard-to-reach ceilings, beams, and pallet racks in your Columbus warehouse. We use specialized equipment and safety protocols to remove accumulated dust and debris from elevated areas, improving air quality and preventing contamination of products stored below.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Truck className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">Loading Docks & Common Areas</h3>
                      <p className="text-muted-foreground">
                        Keeping high-traffic areas clean and safe in your Columbus warehouse. We maintain loading docks, receiving areas, and common spaces where debris accumulates quickly, ensuring these critical zones stay organized and functional for continuous operations.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <User className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">Offices & Employee Restrooms</h3>
                      <p className="text-muted-foreground">
                        Maintaining administrative and break areas in your Columbus warehouse. We clean offices, conference rooms, break rooms, and restrooms to provide comfortable, hygienic spaces for warehouse staff, supporting morale and demonstrating care for your team.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* The Impact of a Professionally Cleaned Warehouse Section */}
        <section id="counters-section" className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                The Impact of a Professionally Cleaned Warehouse
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <Package className="h-16 w-16 mx-auto mb-4 opacity-90" />
                  <div className="text-5xl font-bold mb-2">{squareFeet.toLocaleString()}+</div>
                  <h3 className="text-xl font-semibold opacity-90">Square Feet Cleaned</h3>
                </div>
                
                <div className="text-center">
                  <ShieldCheck className="h-16 w-16 mx-auto mb-4 opacity-90" />
                  <div className="text-5xl font-bold mb-2">{safetyIncidents}+</div>
                  <h3 className="text-xl font-semibold opacity-90">Safety Incidents Prevented</h3>
                </div>
                
                <div className="text-center">
                  <Timer className="h-16 w-16 mx-auto mb-4 opacity-90" />
                  <div className="text-5xl font-bold mb-2">{efficiency}%</div>
                  <h3 className="text-xl font-semibold opacity-90">More Efficient Operations</h3>
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
                          <h4 className="font-semibold mb-2">Warehouse Cleaning in {city.name}</h4>
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
                            Schedule {city.name} Warehouse Cleaning
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
                Other Industrial Cleaning Services in Columbus
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <Factory className="h-8 w-8 text-primary mx-auto mb-4" />
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
                      Comprehensive cleaning after construction and renovation projects
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
                    <h3 className="text-lg font-semibold">What is included in warehouse cleaning in Columbus Ohio?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Our comprehensive warehouse cleaning in Columbus includes floor scrubbing and sweeping, high-bay and pallet rack dusting, loading dock maintenance, office and restroom cleaning, trash removal, window cleaning, and high-touch surface disinfection. We use industrial-grade equipment and create customized cleaning plans that address all areas of your warehouse facility to maintain the safe, efficient environment your operations require.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="cost" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">How much does warehouse cleaning cost in Columbus Ohio?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Warehouse cleaning costs in Columbus vary based on facility size, service frequency, scope of work, and specific requirements. Most warehouses invest between $1,000-$10,000 per month for professional cleaning services depending on square footage and complexity. Smaller distribution centers typically have lower costs, while large fulfillment hubs with extensive square footage require more comprehensive services. We provide free consultations and customized quotes based on your Columbus warehouse's specific needs.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="osha" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">Is your Columbus warehouse cleaning OSHA compliant?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Yes, all our Columbus warehouse cleaning services follow OSHA guidelines and safety standards. Our team receives training in industrial facility safety, proper equipment operation, hazard awareness, and compliance protocols. We maintain clear walkways, remove slip hazards, follow proper chemical handling procedures, and use appropriate safety equipment to protect both our staff and your warehouse employees while ensuring your facility meets regulatory requirements.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="schedule" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">Can you clean our Columbus warehouse during off-hours?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Yes, we offer flexible scheduling for Columbus warehouses including evening, overnight, weekend, and shift-based cleaning to ensure your facility is spotless without disrupting logistics operations. Many Columbus warehouses prefer overnight cleaning to maintain productivity during business hours, while 24/7 operations benefit from our ability to work around active areas. We coordinate with your warehouse management to create cleaning schedules that support your operational needs.
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
              Ready to Optimize Your Warehouse with Professional Cleaning?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join Columbus warehouses that trust Red Rock Cleans for safe, efficient logistics facilities
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
              <Link to="/commercial-quote?location=columbus-ohio">Schedule Your Warehouse Cleaning Today</Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default WarehouseCleaningColumbusOhioPage;


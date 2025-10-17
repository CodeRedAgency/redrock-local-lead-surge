import { DallasNavigation } from "@/components/DallasNavigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HardHat, Forklift, Box, Layers, Construction, Truck, User, Package, ShieldCheck, Timer, Factory, Cog, Hammer, Phone, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";

const neighborhoods = [
  {
    id: "university-park",
    name: "University Park",
    description: "Keep your University Park warehouse operating safely and efficiently with our professional cleaning services. We understand the critical role clean logistics facilities play in Dallas's supply chain and deliver meticulous results that enhance safety and productivity.",
    faq: [
      {
        question: "Do you have experience with warehouse cleaning in University Park?",
        answer: "Yes, our team specializes in warehouse and distribution center cleaning with extensive experience servicing logistics facilities throughout University Park and Dallas."
      },
      {
        question: "Can you work around University Park warehouse operations?",
        answer: "Absolutely. We schedule our cleaning services during off-hours, weekends, or between shifts to avoid disrupting your University Park warehouse operations."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our University Park warehouse impeccably. Our floors are always clean and our safety record has never been better.",
      author: "Operations Manager Tom R., University Park Distribution Center"
    }
  },
  {
    id: "highland-park",
    name: "Highland Park",
    description: "Professional warehouse cleaning services for Highland Park logistics facilities that demand the highest standards of cleanliness and safety. Our comprehensive cleaning ensures your warehouse maintains operational excellence.",
    faq: [
      {
        question: "What areas of Highland Park warehouses do you clean?",
        answer: "We clean all areas including floors, high-bays, pallet racks, loading docks, offices, restrooms, and employee break areas throughout Highland Park warehouses."
      },
      {
        question: "Do you provide specialized floor scrubbing in Highland Park?",
        answer: "Yes, we use industrial-grade floor scrubbers and sweepers designed for large concrete warehouse floors in Highland Park facilities."
      }
    ],
    testimonial: {
      text: "Our Highland Park warehouse has never looked better. Red Rock Cleans understands logistics operations and delivers consistently exceptional results.",
      author: "Facility Manager Sarah M., Highland Park Storage Solutions"
    }
  },
  {
    id: "uptown-dallas",
    name: "Uptown Dallas",
    description: "Keep your Uptown Dallas warehouse operating at peak efficiency with our comprehensive cleaning services. We specialize in maintaining the high standards expected in Dallas's urban logistics centers.",
    faq: [
      {
        question: "Do you clean both small and large warehouses in Uptown Dallas?",
        answer: "Yes, we provide warehouse cleaning services for facilities of all sizes in Uptown Dallas, from small storage centers to large distribution hubs."
      },
      {
        question: "What's included in your Uptown Dallas warehouse cleaning?",
        answer: "We provide floor scrubbing, high-bay dusting, loading dock cleaning, office maintenance, and complete facility sanitation throughout your Uptown Dallas warehouse."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Uptown Dallas warehouse to the highest standards. Their floor cleaning and attention to safety are exceptional.",
      author: "David L., Supervisor, Uptown Dallas Logistics"
    }
  },
  {
    id: "downtown-dallas",
    name: "Downtown Dallas",
    description: "Downtown Dallas warehouses trust Red Rock Cleans for consistent, professional cleaning that maintains safety and operational efficiency. Our team understands the unique challenges of urban warehouse cleaning.",
    faq: [
      {
        question: "How far in advance should Downtown Dallas warehouses book cleaning?",
        answer: "We recommend booking at least one week in advance for regular cleaning, though we can accommodate urgent needs for Downtown Dallas facilities."
      },
      {
        question: "Do you provide cleaning equipment for Downtown Dallas warehouses?",
        answer: "Yes, we bring all industrial-grade cleaning equipment, floor scrubbers, and supplies to every Downtown Dallas warehouse appointment."
      }
    ],
    testimonial: {
      text: "As a Downtown Dallas warehouse supervisor, I trust Red Rock Cleans for their reliability and thorough approach. Outstanding service!",
      author: "Carlos M., Supervisor, Downtown Dallas Fulfillment Center"
    }
  },
  {
    id: "preston-hollow",
    name: "Preston Hollow",
    description: "Preston Hollow warehouses enjoy professional, meticulous cleaning with our service that maintains the highest operational standards. We deliver premium warehouse cleaning for this distinguished Dallas area's logistics facilities.",
    faq: [
      {
        question: "Do you service large distribution centers in Preston Hollow?",
        answer: "Yes, we specialize in cleaning large-scale warehouses and understand the operational demands of Preston Hollow distribution centers."
      },
      {
        question: "Can you work around Preston Hollow warehouse schedules?",
        answer: "Absolutely! We coordinate with facility managers to schedule cleaning during off-shifts or weekends in Preston Hollow warehouses."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Preston Hollow warehouse flawlessly. Their high-bay cleaning and floor care are unmatched in the Dallas area.",
      author: "Patricia H., Facility Director, Preston Hollow Industrial Park"
    }
  },
  {
    id: "plano",
    name: "Plano",
    description: "Plano warehouses rely on our cleaning services for consistent safety compliance, operational efficiency, and inventory protection. As a major logistics hub, Plano facilities demand the highest standards—we deliver them consistently.",
    faq: [
      {
        question: "What makes Red Rock Cleans different for Plano warehouses?",
        answer: "We're locally owned, fully insured, and our team is trained in OSHA-compliant warehouse cleaning with extensive experience in Plano's logistics sector."
      },
      {
        question: "Do you offer emergency cleaning for Plano warehouses?",
        answer: "Yes, we can provide rapid-response cleaning services for spills, contamination events, or urgent safety needs in Plano warehouse facilities."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been cleaning our Plano warehouse for five years. They understand logistics operations and deliver flawlessly every time.",
      author: "Robert K., General Manager, Plano Distribution Hub"
    }
  },
  {
    id: "frisco",
    name: "Frisco",
    description: "Frisco warehouses enjoy consistent, professional cleaning that keeps logistics operations running smoothly. Our team serves Frisco's growing industrial sector with expertise and reliability.",
    faq: [
      {
        question: "How long does warehouse cleaning take in Frisco?",
        answer: "Most Frisco warehouse cleanings take 4-8 hours depending on facility size, square footage, and specific cleaning requirements."
      },
      {
        question: "Do you work with Frisco warehouse management teams?",
        answer: "Yes, we coordinate closely with facility managers to ensure our cleaning meets your specific standards and doesn't disrupt operations in Frisco warehouses."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our Frisco warehouse beautifully. Their floor scrubbing and dock cleaning are outstanding.",
      author: "Rachel P., Operations Manager, Frisco Fulfillment Center"
    }
  },
  {
    id: "prosper",
    name: "Prosper",
    description: "Prosper warehouses trust our cleaning service for consistent safety and operational excellence. We bring professional warehouse cleaning expertise to this growing Dallas area community's logistics facilities.",
    faq: [
      {
        question: "What cleaning protocols do you use in Prosper warehouses?",
        answer: "We use OSHA-compliant cleaning methods, industrial floor scrubbers, and high-bay cleaning equipment designed for safe, efficient warehouse cleaning in Prosper facilities."
      },
      {
        question: "Can you customize cleaning for Prosper warehouses?",
        answer: "Yes, we can customize our warehouse cleaning service to focus on specific areas, equipment, or safety concerns for Prosper logistics facilities."
      }
    ],
    testimonial: {
      text: "Working in Prosper, I appreciate Red Rock Cleans' expertise and reliability for our warehouse. Excellent professional cleaning service.",
      author: "Thomas B., Facility Manager, Prosper Industrial Storage"
    }
  }
];

const WarehouseCleaningDallasPage = () => {
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
          {count.toLocaleString()}{suffix}
        </div>
        <p className="text-muted-foreground">{label}</p>
      </div>
    );
  };

  return (
    <>
      <Helmet>
        <title>Warehouse Cleaning in Dallas | Red Rock Cleans</title>
        <meta name="description" content="Professional warehouse cleaning in Dallas. Red Rock Cleans improves safety and efficiency with comprehensive floor scrubbing, high-bay dusting, and more for logistics centers in Plano and Frisco." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <DallasNavigation />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative py-24 md:py-32 overflow-hidden">
            <div className="absolute inset-0">
              <img 
                src="/src/assets/hero-commercial.jpg" 
                alt="Professional warehouse cleaning service in Dallas"
                className="w-full h-full object-cover scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                  Efficient & Safe Warehouse Cleaning in Dallas
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                  For Dallas's vital logistics hubs, a clean and organized warehouse is essential for operational efficiency, employee safety, and protecting valuable inventory. Our professional warehouse cleaning services ensure your facility operates at peak performance while maintaining the highest safety standards.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="h-14 text-lg px-8" asChild>
                    <a href="tel:+19729922576">
                      <Phone className="w-5 h-5 mr-2" />
                      Call (972) 992-2576
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="h-14 text-lg px-8" asChild>
                    <Link to="/commercial-quote?location=dallas">
                      <Home className="w-5 h-5 mr-2" />
                      Get Free Quote
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Optimizing Your Dallas Logistics Environment */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  Optimizing Your Dallas Logistics Environment
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <HardHat className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Enhancing Workplace Safety</h3>
                      <p className="text-muted-foreground text-sm">
                        Clear, hazard-free floors and compliance with OSHA standards. Our Dallas team removes debris, spills, and trip hazards to create a safer working environment for your warehouse staff.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Safety First →
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Forklift className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Boosting Operational Efficiency</h3>
                      <p className="text-muted-foreground text-sm">
                        Clean, marked floors and organized spaces speed up logistics. Our Dallas warehouse cleaning ensures smooth forklift operation and efficient material handling throughout your facility.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Maximize Efficiency →
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Box className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Protecting Valuable Inventory</h3>
                      <p className="text-muted-foreground text-sm">
                        Controlling dust and debris prevents product damage. We maintain clean conditions in your Dallas warehouse to protect your inventory investment and ensure product quality.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Protect Inventory →
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Our Comprehensive Warehouse Cleaning Checklist */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  Our Comprehensive Warehouse Cleaning Checklist
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Layers className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Floor Scrubbing & Sweeping</h3>
                      <p className="text-muted-foreground text-sm">
                        Using industrial-grade equipment for concrete floors. We use powerful floor scrubbers to remove dirt, oil, and debris from your Dallas warehouse floors, maintaining safe walking and forklift surfaces.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Clean Floors →
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Construction className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">High-Bay & Racking Dusting</h3>
                      <p className="text-muted-foreground text-sm">
                        Cleaning hard-to-reach ceilings, beams, and pallet racks. Our Dallas team uses specialized equipment to remove accumulated dust from high areas, improving air quality and safety.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        High-Bay Clean →
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Truck className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Loading Docks & Common Areas</h3>
                      <p className="text-muted-foreground text-sm">
                        Keeping high-traffic areas clean and safe. We maintain your Dallas warehouse's loading docks, shipping areas, and common spaces to ensure smooth operations and safety compliance.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Dock Cleaning →
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <User className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Offices & Employee Restrooms</h3>
                      <p className="text-muted-foreground text-sm">
                        Maintaining administrative and break areas. We clean your Dallas warehouse offices, break rooms, and restrooms to provide a professional environment for staff.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Employee Areas →
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* The Impact of a Professionally Cleaned Warehouse */}
          <section id="counters-section" className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  The Impact of a Professionally Cleaned Warehouse
                </h2>
                <div className="grid md:grid-cols-3 gap-12">
                  <Counter end={500000} label="Square Feet Cleaned" icon={Package} suffix="+" />
                  <Counter end={95} label="Safety Incidents Prevented" icon={ShieldCheck} suffix="%" />
                  <Counter end={25} label="More Efficient Operations" icon={Timer} suffix="%" />
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
                            Professional warehouse cleaning services
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
                              Schedule Your {neighborhood.name} Warehouse Cleaning
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

          {/* Other Industrial Cleaning Services in Dallas */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  Other Industrial Cleaning Services in Dallas
                </h2>
                <p className="text-xl text-muted-foreground mb-12">
                  Beyond warehouse cleaning, we offer specialized industrial cleaning services for all your Dallas facility needs.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <Link to="/dallas/factory-cleaning/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors mb-4">
                        <Factory className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Factory Cleaning Services
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Heavy-duty cleaning for manufacturing plants and production facilities.
                      </p>
                    </div>
                  </Link>
                  <Link to="/dallas/industrial-cleaning/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors mb-4">
                        <Cog className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Industrial Cleaning Services
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        OSHA compliant heavy-duty cleaning for industrial facilities.
                      </p>
                    </div>
                  </Link>
                  <Link to="/dallas/post-construction-cleaning-services/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors mb-4">
                        <Hammer className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Post-Construction Cleaning
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Thorough cleaning after construction or renovation projects.
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
                      <h3 className="text-lg font-semibold">What's included in warehouse cleaning services for Dallas facilities?</h3>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <p className="text-muted-foreground">
                        Our Dallas warehouse cleaning includes floor scrubbing and sweeping, high-bay and racking dusting, loading dock cleaning, restroom sanitation, office cleaning, trash removal, and spill cleanup. We use industrial-grade equipment including floor scrubbers, high-reach cleaning tools, and OSHA-compliant cleaning methods. Services are customized based on your warehouse size, operations, and specific needs.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2" className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <h3 className="text-lg font-semibold">How often should Dallas warehouses be professionally cleaned?</h3>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <p className="text-muted-foreground">
                        Most Dallas warehouses benefit from daily floor sweeping with weekly deep cleaning using floor scrubbers. High-bay and racking cleaning should be done monthly or quarterly. Loading docks may need daily cleaning depending on traffic. We can assess your facility size, operation type, and traffic patterns to recommend an optimal cleaning schedule that maintains safety and efficiency.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3" className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <h3 className="text-lg font-semibold">Will warehouse cleaning disrupt our Dallas operations?</h3>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <p className="text-muted-foreground">
                        No. We schedule cleaning during off-hours, weekends, or between shifts to minimize disruption to your Dallas warehouse operations. Our team works efficiently and can clean specific zones while others remain operational. We coordinate closely with facility managers to ensure our cleaning schedule aligns perfectly with your logistics operations.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-4" className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <h3 className="text-lg font-semibold">Are your warehouse cleaning methods OSHA compliant in Dallas?</h3>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <p className="text-muted-foreground">
                        Yes, absolutely. All our Dallas warehouse cleaning methods follow OSHA standards for workplace safety. Our team is trained in proper safety protocols, uses appropriate personal protective equipment, and follows regulations for hazard communication and spill response. We help maintain your facility's compliance with OSHA requirements while improving overall workplace safety.
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
                  Ready for Maximum Efficiency & Safety?
                </h2>
                <p className="text-xl mb-8 opacity-90">
                  Join the Dallas warehouses that trust Red Rock Cleans for professional logistics facility cleaning that enhances safety and productivity.
                </p>
                <Button size="lg" variant="secondary" className="h-14 text-lg px-8" asChild>
                  <Link to="/commercial-quote?location=dallas">
                    <Package className="w-5 h-5 mr-2" />
                    Schedule Your Warehouse Cleaning Today
                  </Link>
                </Button>
              </div>
            </div>
          </section>
      </main>
        
        <Footer />
      </div>
    </>
  );
};

export default WarehouseCleaningDallasPage;


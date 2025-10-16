import { LasVegasNavigation } from "@/components/LasVegasNavigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Clock, Shield, Star, Users, Calendar, Home, Sparkles, HardHat, Cog, ClipboardCheck, Square, Wrench, Truck, User, Building2, GraduationCap, Database } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";

const neighborhoods = [
  {
    id: "anthem",
    name: "Anthem",
    description: "Keep your Anthem factory operations running smoothly with our comprehensive factory cleaning services designed for manufacturing excellence and worker safety.",
    faq: [
      {
        question: "Do you understand the specific requirements for Anthem manufacturing facilities?",
        answer: "Absolutely. Our team is trained in OSHA standards and understands the critical nature of maintaining clean, safe manufacturing environments for optimal production."
      },
      {
        question: "Can you work around Anthem factory production schedules?",
        answer: "Yes, we schedule our cleaning services around your production shifts, maintenance windows, and operational requirements to minimize disruption to your manufacturing processes."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our Anthem factory with exceptional professionalism. Their understanding of manufacturing requirements and safety standards is outstanding.",
      author: "Production Manager, Anthem Manufacturing Facility"
    }
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "Professional factory cleaning services for Enterprise manufacturing facilities who demand the highest standards of cleanliness, safety, and operational efficiency.",
    faq: [
      {
        question: "What areas of Enterprise factories do you clean?",
        answer: "We clean all areas including production floors, machinery, equipment, high-dusting areas, common spaces, restrooms, and specialized manufacturing zones."
      },
      {
        question: "Do you provide flexible scheduling for Enterprise factories?",
        answer: "Yes, we work around your production schedules, shift changes, and can provide emergency cleaning services when needed for critical manufacturing operations."
      }
    ],
    testimonial: {
      text: "Our Enterprise factory has never been cleaner or safer. Red Rock Cleans respects our production requirements and provides excellent service around our manufacturing schedules.",
      author: "Operations Director, Enterprise Manufacturing Plant"
    }
  },
  {
    id: "green-valley-north",
    name: "Green Valley North",
    description: "Keep your Green Valley North manufacturing facilities pristine with our comprehensive factory cleaning service designed for industrial excellence and worker safety.",
    faq: [
      {
        question: "Do you clean both large and small factories in Green Valley North?",
        answer: "Yes, we provide factory cleaning services for facilities of all sizes, from small manufacturing shops to large industrial production facilities."
      },
      {
        question: "What's included in your Green Valley North factory cleaning?",
        answer: "We clean production floors, machinery, equipment, high-dusting areas, common spaces, and specialized manufacturing areas with appropriate industrial cleaning methods."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Green Valley North factory beautifully. Their precision and attention to manufacturing safety requirements are exceptional.",
      author: "Safety Coordinator, Green Valley North Manufacturing"
    }
  },
  {
    id: "henderson",
    name: "Henderson",
    description: "Henderson factories trust Red Rock Cleans for consistent, professional factory cleaning services that maintain their manufacturing facilities safely and efficiently year-round.",
    faq: [
      {
        question: "How far in advance should Henderson factories book cleaning?",
        answer: "We recommend booking at least one week in advance, though we can often accommodate shorter notice for emergency situations or production schedule changes."
      },
      {
        question: "Do you provide specialized equipment for Henderson factory cleaning?",
        answer: "Yes, we bring all specialized equipment including industrial floor scrubbers, high-pressure washers, and appropriate cleaning solutions for manufacturing environments."
      }
    ],
    testimonial: {
      text: "As a Henderson factory manager, I appreciate Red Rock Cleans' understanding of manufacturing needs. Highly recommended for industrial facilities!",
      author: "Factory Manager, Henderson Manufacturing District"
    }
  },
  {
    id: "lake-las-vegas",
    name: "Lake Las Vegas",
    description: "Lake Las Vegas factories enjoy pristine, professional cleaning with our factory cleaning service that maintains their manufacturing facilities to the highest safety standards.",
    faq: [
      {
        question: "Do you service high-end manufacturing facilities in Lake Las Vegas?",
        answer: "Yes, we specialize in cleaning premium manufacturing facilities and are experienced with sophisticated production equipment, cleanroom environments, and industrial safety protocols."
      },
      {
        question: "Can you work around Lake Las Vegas factory production schedules?",
        answer: "Absolutely! We offer flexible scheduling including maintenance windows, shift changes, and emergency services to accommodate your manufacturing requirements."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Lake Las Vegas factory to perfection. Their understanding of manufacturing processes and safety protocols is remarkable.",
      author: "Production Supervisor, Lake Las Vegas Manufacturing"
    }
  },
  {
    id: "las-vegas",
    name: "Las Vegas",
    description: "Las Vegas factories rely on our professional factory cleaning service for consistent, safe facility maintenance that ensures optimal production performance and worker safety.",
    faq: [
      {
        question: "What makes Red Rock Cleans different for Las Vegas factories?",
        answer: "We're locally owned, fully insured, and our team is specially trained in factory cleaning protocols, OSHA standards, and industrial safety requirements."
      },
      {
        question: "Do you offer emergency factory cleaning for Las Vegas?",
        answer: "Yes, we can often provide same-day or emergency cleaning services for critical situations, safety incidents, or post-production cleanup needs."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been cleaning our Las Vegas factory for three years. They understand our production needs and maintain our facility safely and efficiently.",
      author: "Operations Manager, Las Vegas Manufacturing Center"
    }
  },
  {
    id: "macdonald-ranch",
    name: "MacDonald Ranch",
    description: "MacDonald Ranch factories enjoy consistent, professional factory cleaning services that keep their manufacturing facilities spotless and operating at peak production efficiency.",
    faq: [
      {
        question: "How long does factory cleaning take in MacDonald Ranch?",
        answer: "Most MacDonald Ranch factory cleanings take 6-12 hours depending on facility size, complexity, and specific cleaning requirements for manufacturing operations."
      },
      {
        question: "Do you work with MacDonald Ranch factory staff?",
        answer: "Yes, we coordinate with your production staff and safety team to ensure our cleaning complements your manufacturing schedules and safety protocols."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our MacDonald Ranch factory beautifully. Their professional approach and attention to manufacturing safety are outstanding.",
      author: "Safety Manager, MacDonald Ranch Manufacturing"
    }
  },
  {
    id: "mountains-edge",
    name: "Mountain's Edge",
    description: "Mountain's Edge factories trust our professional factory cleaning service for consistent facility maintenance that complements their manufacturing operations and safety requirements.",
    faq: [
      {
        question: "What cleaning products do you use in Mountain's Edge factories?",
        answer: "We use industrial-grade, OSHA-approved cleaning products that are safe for manufacturing equipment and won't damage production machinery or create safety hazards."
      },
      {
        question: "Can you customize cleaning for Mountain's Edge factories?",
        answer: "Yes, we can customize our factory cleaning service to focus on specific areas, equipment types, or particular cleaning priorities based on your manufacturing requirements."
      }
    ],
    testimonial: {
      text: "Living in Mountain's Edge, I appreciate Red Rock Cleans' reliability and understanding of our factory's manufacturing requirements. Excellent service for industrial facilities.",
      author: "Production Coordinator, Mountain's Edge Manufacturing"
    }
  },
  {
    id: "north-las-vegas",
    name: "North Las Vegas",
    description: "North Las Vegas factories depend on our professional factory cleaning service for consistent, safe facility maintenance that keeps their manufacturing operations reliable and efficient.",
    faq: [
      {
        question: "Do you offer competitive rates for North Las Vegas factories?",
        answer: "Yes, we provide competitive rates for North Las Vegas factories while maintaining high-quality industrial cleaning standards and OSHA compliance requirements."
      },
      {
        question: "How do you ensure quality in North Las Vegas factory cleaning?",
        answer: "Every North Las Vegas factory cleaning is supervised by certified specialists and we guarantee compliance with OSHA standards and your specific manufacturing requirements."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our North Las Vegas factory clean and safe. Great value and excellent professional service for our manufacturing operations.",
      author: "Factory Supervisor, North Las Vegas Manufacturing Hub"
    }
  },
  {
    id: "paradise",
    name: "Paradise",
    description: "Paradise factories enjoy reliable professional factory cleaning services that maintain their facilities to the highest standards of cleanliness, safety, and manufacturing excellence.",
    faq: [
      {
        question: "Do you service diverse factory types in Paradise?",
        answer: "Yes, we provide professional cleaning services for all types of manufacturing facilities including automotive, electronics, food processing, and general industrial plants."
      },
      {
        question: "What's your cancellation policy for Paradise factories?",
        answer: "We require 24-hour notice for cancellations, but we're flexible for emergency situations and can reschedule around critical production maintenance windows."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our Paradise factory beautifully. Professional, safe, and thorough every time for our manufacturing operations.",
      author: "Operations Manager, Paradise Manufacturing Facility"
    }
  },
  {
    id: "seven-hills",
    name: "Seven Hills",
    description: "Seven Hills factories trust our professional factory cleaning service for consistent, safe facility maintenance that preserves their manufacturing operations and worker safety.",
    faq: [
      {
        question: "Do you service high-end manufacturing facilities in Seven Hills?",
        answer: "Yes, we have extensive experience cleaning premium manufacturing facilities, including those with sophisticated production equipment, cleanroom environments, and industrial safety protocols."
      },
      {
        question: "How do you ensure security in Seven Hills factories?",
        answer: "All our team members are background-checked, bonded, and insured. We respect the sensitive nature of your manufacturing operations and maintain strict confidentiality and security protocols."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Seven Hills factory to perfection. Their professionalism and understanding of manufacturing safety requirements are outstanding.",
      author: "Production Director, Seven Hills Manufacturing Campus"
    }
  },
  {
    id: "silverado-ranch",
    name: "Silverado Ranch",
    description: "Silverado Ranch factories rely on our professional factory cleaning service for consistent facility maintenance that keeps their manufacturing operations operating smoothly and safely.",
    faq: [
      {
        question: "Do you work around Silverado Ranch factory production schedules?",
        answer: "Yes, we can schedule cleanings around your production shifts, maintenance windows, and manufacturing requirements for your convenience and operational efficiency."
      },
      {
        question: "What if we're not satisfied with cleaning in Silverado Ranch?",
        answer: "We guarantee satisfaction and will return to address any concerns at no additional charge, understanding the critical nature of your manufacturing operations."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Silverado Ranch factory spotless and safe for over two years. Highly recommend their professional service for manufacturing facilities!",
      author: "Operations Manager, Silverado Ranch Manufacturing"
    }
  },
  {
    id: "spring-valley",
    name: "Spring Valley",
    description: "Spring Valley factories enjoy consistent, professional factory cleaning services that maintain their facilities clean and operating at optimal production performance year-round.",
    faq: [
      {
        question: "How often do Spring Valley factories schedule cleaning?",
        answer: "Most Spring Valley factories prefer weekly or bi-weekly cleaning, though we offer flexible scheduling based on your production requirements and manufacturing schedules."
      },
      {
        question: "Do you provide specialized cleaning for Spring Valley factories?",
        answer: "Yes, we offer both regular factory cleaning and specialized services for critical maintenance, post-production cleanup, and emergency remediation."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our Spring Valley factory beautifully. Professional, reliable, and always safe for our manufacturing operations.",
      author: "Safety Manager, Spring Valley Manufacturing"
    }
  },
  {
    id: "summerlin-south",
    name: "Summerlin South",
    description: "Summerlin South factories trust our professional factory cleaning service for consistent, high-quality facility maintenance that complements their premium manufacturing operations and safety excellence.",
    faq: [
      {
        question: "Do you service luxury manufacturing facilities in Summerlin South?",
        answer: "Yes, we specialize in cleaning high-end manufacturing facilities and are experienced with sophisticated production equipment, premium safety protocols, and industrial excellence standards."
      },
      {
        question: "Can you accommodate Summerlin South factory production schedules?",
        answer: "Absolutely! We're familiar with busy manufacturing operations and can work around critical production windows, equipment maintenance, and operational requirements."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Summerlin South factory to the highest standards. Exceptional professional service and deep understanding of manufacturing safety requirements.",
      author: "Production Director, Summerlin South Manufacturing"
    }
  },
  {
    id: "sunrise-manor",
    name: "Sunrise Manor",
    description: "Sunrise Manor factories depend on our professional factory cleaning service for consistent, safe facility maintenance that keeps their manufacturing operations spotless and operating efficiently.",
    faq: [
      {
        question: "Do you offer competitive rates for Sunrise Manor factories?",
        answer: "Yes, we provide competitive rates for Sunrise Manor factories while maintaining high professional cleaning standards and OSHA compliance with manufacturing requirements."
      },
      {
        question: "How reliable is your service in Sunrise Manor factories?",
        answer: "We're committed to reliability and have a strong track record of consistent, professional service in Sunrise Manor manufacturing facilities."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Sunrise Manor factory clean and safe. Great value and reliable professional service for our manufacturing operations.",
      author: "Operations Supervisor, Sunrise Manor Manufacturing"
    }
  },
  {
    id: "whitney",
    name: "Whitney",
    description: "Whitney factories enjoy professional factory cleaning services that maintain their facilities clean, safe, and ready for optimal manufacturing operations.",
    faq: [
      {
        question: "Do you work with diverse Whitney factory environments?",
        answer: "Yes, we're experienced with manufacturing facilities of all types and sizes, using professional cleaning practices appropriate for different industrial operations and safety requirements."
      },
      {
        question: "Can you schedule around Whitney factory production requirements?",
        answer: "Absolutely! We offer flexible scheduling including maintenance windows, shift changes, and emergency services around your critical manufacturing calendar."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our Whitney factory beautifully. Professional, trustworthy, and always safe for our manufacturing operations.",
      author: "Factory Manager, Whitney Manufacturing Facility"
    }
  },
  {
    id: "winchester",
    name: "Winchester",
    description: "Winchester factories trust our professional factory cleaning service for consistent, safe facility maintenance that keeps their manufacturing operations spotless and operating at peak performance year-round.",
    faq: [
      {
        question: "Do you service diverse factory types in Winchester?",
        answer: "Yes, we provide professional factory cleaning for all types of manufacturing facilities including automotive, aerospace, electronics, and general industrial plants."
      },
      {
        question: "How do you ensure quality in Winchester factory cleaning?",
        answer: "Every Winchester factory cleaning is supervised by certified specialists and we guarantee compliance with OSHA standards and your specific manufacturing safety requirements."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Winchester factory immaculate and safe. Reliable, professional, and excellent value for our manufacturing operations.",
      author: "Operations Manager, Winchester Manufacturing"
    }
  }
];

const FactoryCleaningLasVegasPage = () => {
  const [openItem, setOpenItem] = useState<string>("");

  useEffect(() => {
    const hash = window.location.hash.substring(1); // Remove the # symbol
    if (hash && neighborhoods.some(n => n.id === hash)) {
      setOpenItem(hash);
      // Scroll to the accordion section
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, []);

  // Listen for hash changes (when user navigates from dropdown)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (hash && neighborhoods.some(n => n.id === hash)) {
        setOpenItem(hash);
        // Scroll to the accordion section
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

  return (
    <>
      <Helmet>
        <title>Factory Cleaning Las Vegas | Red Rock Cleans</title>
        <meta name="description" content="Professional factory cleaning in Las Vegas. Red Rock Cleans offers heavy-duty cleaning for manufacturing plants in Henderson, North Las Vegas, and beyond to ensure safety and productivity." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <LasVegasNavigation />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative py-24 md:py-32 overflow-hidden">
            <div className="absolute inset-0">
              <img 
                src="/src/assets/hero-commercial.jpg" 
                alt="Professional factory cleaning service in a Las Vegas manufacturing facility"
                className="w-full h-full object-cover scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                  Professional Factory Cleaning in Las Vegas
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                  A clean, compliant factory is essential for worker safety, operational efficiency, and meeting production goals. Our Las Vegas factory cleaning services ensure your manufacturing facility operates at peak performance while maintaining the highest safety standards.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="h-14 text-lg px-8" asChild>
                    <Link to="/commercial-quote?location=las-vegas">
                      <Calendar className="w-5 h-5 mr-2" />
                      Schedule Factory Cleaning
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="h-14 text-lg px-8" asChild>
                    <Link to="/contact">
                      <Home className="w-5 h-5 mr-2" />
                      Get Free Quote
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Enhancing Safety, Compliance, and Productivity */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  Enhancing Safety, Compliance, and Productivity
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <HardHat className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Prioritizing Worker Safety</h3>
                      <p className="text-muted-foreground text-sm">
                        Our focus on removing hazards like spills and debris reduces accidents and helps meet OSHA standards. We ensure your Las Vegas factory maintains a safe environment for all workers.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Safety First →
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Cog className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Boosting Production Efficiency</h3>
                      <p className="text-muted-foreground text-sm">
                        Clean machinery and organized workspaces prevent downtime and improve workflow. Our factory cleaning services help your Las Vegas manufacturing facility operate at maximum efficiency.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Peak Performance →
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <ClipboardCheck className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Upholding Industry Standards</h3>
                      <p className="text-muted-foreground text-sm">
                        We provide a level of clean that meets industry-specific regulations and OSHA compliance standards. Our Las Vegas factory cleaning ensures your facility exceeds regulatory requirements.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Compliant & Certified →
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Our Comprehensive Factory Cleaning Checklist */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  Our Comprehensive Factory Cleaning Checklist
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Square className="w-6 h-6" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Production Floor Care</h3>
                      <p className="text-muted-foreground text-sm">
                        Heavy-duty sweeping, scrubbing, and degreasing of concrete floors to remove industrial contaminants and maintain safe walking surfaces.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Wrench className="w-6 h-6" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Machinery & Equipment Cleaning</h3>
                      <p className="text-muted-foreground text-sm">
                        Safe cleaning and degreasing of production equipment using industrial-grade solutions that won't damage machinery or create safety hazards.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Truck className="w-6 h-6" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">High-Dusting & Structural Cleaning</h3>
                      <p className="text-muted-foreground text-sm">
                        Cleaning ceilings, pipes, and rafters to remove accumulated dust and debris that can affect air quality and equipment performance.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Users className="w-6 h-6" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Common Areas & Restrooms</h3>
                      <p className="text-muted-foreground text-sm">
                        Comprehensive cleaning of break rooms, offices, and sanitation facilities within the factory to maintain a healthy work environment.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Our Commitment to Las Vegas Industry */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-12">
                  Our Commitment to Las Vegas Industry
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <HardHat className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-4xl font-bold text-primary mb-2">100%</div>
                    <h3 className="text-lg font-semibold mb-2">Safety Standards Met</h3>
                    <p className="text-muted-foreground text-sm">
                      Every factory cleaning meets or exceeds OSHA safety requirements and industry standards
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Clock className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-4xl font-bold text-primary mb-2">500+</div>
                    <h3 className="text-lg font-semibold mb-2">Production Hours Saved</h3>
                    <p className="text-muted-foreground text-sm">
                      Our efficient cleaning processes help reduce downtime and maximize manufacturing productivity
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-4xl font-bold text-primary mb-2">1,000+</div>
                    <h3 className="text-lg font-semibold mb-2">Compliant Cleans Completed</h3>
                    <p className="text-muted-foreground text-sm">
                      Track record of successful factory cleanings that meet all regulatory and safety requirements
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Areas We Serve in Las Vegas */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  Areas We Serve in Las Vegas
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
                            Professional factory cleaning services
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
                            <Link to="/commercial-quote?location=las-vegas">
                              Schedule Your {neighborhood.name} Factory Cleaning
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

          {/* Other Industrial & Commercial Services in Las Vegas */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  Other Industrial & Commercial Services in Las Vegas
                </h2>
                <p className="text-xl text-muted-foreground mb-12">
                  Beyond factory cleaning, we offer specialized industrial and commercial cleaning services to meet all your Las Vegas facility needs.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <Link to="/las-vegas/warehouse-cleaning/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors mb-4">
                        <Database className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Warehouse Cleaning Services
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Comprehensive cleaning for distribution centers, storage facilities, and industrial warehouses.
                      </p>
                    </div>
                  </Link>
                  <Link to="/las-vegas/industrial-cleaning/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors mb-4">
                        <Cog className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Industrial Cleaning Services
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Specialized cleaning for manufacturing facilities, processing plants, and industrial environments.
                      </p>
                    </div>
                  </Link>
                  <Link to="/las-vegas/post-construction-cleaning-services/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors mb-4">
                        <HardHat className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Post-Construction Cleaning Services
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Comprehensive cleanup after construction, renovation, or facility expansion projects.
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
                      <h3 className="text-lg font-semibold">What makes your factory cleaning service different?</h3>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <p className="text-muted-foreground">
                        We specialize in factory cleaning with training in OSHA standards, industrial safety protocols, and manufacturing requirements. Our team uses specialized equipment and follows strict procedures to protect your workers and equipment while maintaining the highest cleanliness standards.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2" className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <h3 className="text-lg font-semibold">How do you handle scheduling around factory production?</h3>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <p className="text-muted-foreground">
                        We work closely with your production staff to schedule cleaning during maintenance windows, shift changes, or when production lines are down. We can also provide emergency cleaning services for safety incidents or post-production cleanup needs. Our flexible approach ensures minimal disruption to your manufacturing operations.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3" className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <h3 className="text-lg font-semibold">What areas of the factory do you clean?</h3>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <p className="text-muted-foreground">
                        We clean all areas including production floors, machinery, equipment, high-dusting areas (ceilings, pipes, rafters), common spaces (break rooms, offices), and sanitation facilities. We use appropriate methods and equipment for each area to ensure safety and effectiveness while protecting your manufacturing equipment.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-4" className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <h3 className="text-lg font-semibold">Are your technicians trained for factory environments?</h3>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <p className="text-muted-foreground">
                        Yes, all our technicians are background-checked, bonded, and insured. They receive specialized training in factory cleaning protocols, OSHA standards, and industrial safety requirements. We understand the unique challenges of manufacturing environments and maintain strict safety protocols to protect your workers and operations.
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
                  Ready to Enhance Your Manufacturing Operations?
                </h2>
                <p className="text-xl mb-8 opacity-90">
                  Join the Las Vegas factories that trust Red Rock Cleans for professional, safe factory cleaning services that ensure optimal production performance and worker safety.
                </p>
                <Button size="lg" variant="secondary" className="h-14 text-lg px-8" asChild>
                  <Link to="/commercial-quote?location=las-vegas">
                    <Calendar className="w-5 h-5 mr-2" />
                    Schedule Your Factory Cleaning Today
                  </Link>
                </Button>
              </div>
            </div>
          </section>

          {/* Image Section */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <img 
                  src="/src/assets/service-products.jpg" 
                  alt="A clean and safe factory floor in Las Vegas after professional cleaning by Red Rock Cleans"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default FactoryCleaningLasVegasPage;

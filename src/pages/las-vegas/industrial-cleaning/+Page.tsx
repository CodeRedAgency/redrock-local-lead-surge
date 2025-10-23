import { LasVegasNavigation } from "@/components/LasVegasNavigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Clock, Shield, Star, Users, Calendar, Home, Sparkles, HardHat, Cog, Building, ClipboardCheck, Wrench, Droplets, Truck, Square, Zap, User, Building2, GraduationCap, ShoppingBag, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';

const neighborhoods = [
  {
    id: "anthem",
    name: "Anthem",
    description: "Keep your Anthem industrial facilities operating at peak efficiency with our comprehensive industrial cleaning services designed for safety, compliance, and operational excellence.",
    faq: [
      {
        question: "Do you understand the specific safety requirements for Anthem industrial facilities?",
        answer: "Absolutely. Our team is trained in industrial safety protocols and understands the critical importance of maintaining clean, compliant facilities for worker safety and operational efficiency."
      },
      {
        question: "Can you work around Anthem industrial operating schedules?",
        answer: "Yes, we schedule our cleaning services around your production schedules, maintenance windows, and operational requirements to minimize disruption to your industrial operations."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our Anthem industrial facility with exceptional safety standards. Their understanding of industrial requirements is outstanding.",
      author: "Plant Manager, Anthem Manufacturing"
    }
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "Professional industrial cleaning services for Enterprise manufacturing facilities who demand the highest standards of safety, compliance, and operational efficiency.",
    faq: [
      {
        question: "What areas of Enterprise industrial facilities do you clean?",
        answer: "We clean all areas including production equipment, machinery, floors, ceilings, confined spaces, and specialized industrial areas with appropriate safety protocols."
      },
      {
        question: "Do you provide flexible scheduling for Enterprise industrial facilities?",
        answer: "Yes, we work around your production schedules, maintenance windows, and can provide emergency cleaning services when needed for safety and operational requirements."
      }
    ],
    testimonial: {
      text: "Our Enterprise industrial facility has never been cleaner or more compliant. Red Rock Cleans respects our production schedules and provides excellent service around our operations.",
      author: "Operations Director, Enterprise Manufacturing"
    }
  },
  {
    id: "green-valley-north",
    name: "Green Valley North",
    description: "Keep your Green Valley North industrial facility pristine with our comprehensive industrial cleaning service designed for safety, compliance, and manufacturing excellence.",
    faq: [
      {
        question: "Do you clean both large and small industrial facilities in Green Valley North?",
        answer: "Yes, we provide industrial cleaning services for facilities of all sizes, from small manufacturing plants to large industrial complexes and processing facilities."
      },
      {
        question: "What's included in your Green Valley North industrial cleaning?",
        answer: "We clean production equipment, machinery, floors, ceilings, confined spaces, and specialized industrial areas with appropriate safety protocols and OSHA compliance."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Green Valley North industrial facility beautifully. Their precision and attention to safety requirements are exceptional.",
      author: "Facility Director, Green Valley North Manufacturing"
    }
  },
  {
    id: "henderson",
    name: "Henderson",
    description: "Henderson industrial facilities trust Red Rock Cleans for consistent, professional industrial cleaning services that maintain their manufacturing operations safely and efficiently year-round.",
    faq: [
      {
        question: "How far in advance should Henderson industrial facilities book cleaning?",
        answer: "We recommend booking at least one week in advance, though we can often accommodate shorter notice for emergency situations or critical maintenance windows."
      },
      {
        question: "Do you provide specialized equipment for Henderson industrial cleaning?",
        answer: "Yes, we bring all specialized equipment including high-pressure washers, industrial vacuums, safety equipment, and appropriate cleaning solutions for industrial facilities."
      }
    ],
    testimonial: {
      text: "As a Henderson industrial facility owner, I appreciate Red Rock Cleans' understanding of manufacturing needs. Highly recommended for industrial facilities!",
      author: "Facility Owner, Henderson Manufacturing"
    }
  },
  {
    id: "lake-las-vegas",
    name: "Lake Las Vegas",
    description: "Lake Las Vegas industrial facilities enjoy pristine, professional cleaning with our industrial cleaning service that maintains their manufacturing operations to the highest safety standards.",
    faq: [
      {
        question: "Do you service high-end industrial facilities in Lake Las Vegas?",
        answer: "Yes, we specialize in cleaning premium manufacturing facilities and are experienced with sophisticated equipment, luxury amenities, and high-end industrial standards."
      },
      {
        question: "Can you work around Lake Las Vegas industrial schedules?",
        answer: "Absolutely! We offer flexible scheduling including early morning, late evening, and emergency services to accommodate your production schedules and operational requirements."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Lake Las Vegas industrial facility to perfection. Their understanding of luxury manufacturing facilities and safety protocols is remarkable.",
      author: "General Manager, Lake Las Vegas Manufacturing"
    }
  },
  {
    id: "las-vegas",
    name: "Las Vegas",
    description: "Las Vegas industrial facilities rely on our professional industrial cleaning service for consistent, safe facility maintenance that ensures optimal operational efficiency and compliance.",
    faq: [
      {
        question: "What makes Red Rock Cleans different for Las Vegas industrial facilities?",
        answer: "We're locally owned, fully insured, and our team is specially trained in industrial cleaning protocols, safety compliance, and manufacturing facility requirements."
      },
      {
        question: "Do you offer emergency industrial cleaning for Las Vegas?",
        answer: "Yes, we can often provide same-day or emergency cleaning services for critical safety situations, equipment contamination, or post-incident cleanup needs."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been cleaning our Las Vegas industrial facility for three years. They understand our operational needs and maintain our facility safely and professionally.",
      author: "Operations Manager, Las Vegas Manufacturing"
    }
  },
  {
    id: "macdonald-ranch",
    name: "MacDonald Ranch",
    description: "MacDonald Ranch industrial facilities enjoy consistent, professional industrial cleaning services that keep their manufacturing operations spotless and operating at peak efficiency.",
    faq: [
      {
        question: "How long does industrial cleaning take in MacDonald Ranch?",
        answer: "Most MacDonald Ranch industrial cleanings take 6-12 hours depending on facility size, equipment complexity, and specific safety requirements for manufacturing operations."
      },
      {
        question: "Do you work with MacDonald Ranch industrial staff?",
        answer: "Yes, we coordinate with your manufacturing staff and management team to ensure our cleaning complements your production schedules and operational requirements."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our MacDonald Ranch industrial facility beautifully. Their professional approach and attention to safety are outstanding.",
      author: "Facility Manager, MacDonald Ranch Manufacturing"
    }
  },
  {
    id: "mountains-edge",
    name: "Mountain's Edge",
    description: "Mountain's Edge industrial facilities trust our professional industrial cleaning service for consistent facility maintenance that complements their manufacturing operations and safety requirements.",
    faq: [
      {
        question: "What cleaning products do you use in Mountain's Edge industrial facilities?",
        answer: "We use industrial-specific, equipment-safe cleaning products that are effective against grease, grime, and contaminants while protecting your manufacturing equipment and worker safety."
      },
      {
        question: "Can you customize cleaning for Mountain's Edge industrial facilities?",
        answer: "Yes, we can customize our industrial cleaning service to focus on specific areas, equipment types, or particular safety priorities based on your manufacturing facility requirements."
      }
    ],
    testimonial: {
      text: "Living in Mountain's Edge, I appreciate Red Rock Cleans' reliability and understanding of our industrial facility's safety requirements. Excellent service for manufacturing facilities.",
      author: "Facility Coordinator, Mountain's Edge Manufacturing"
    }
  },
  {
    id: "north-las-vegas",
    name: "North Las Vegas",
    description: "North Las Vegas industrial facilities depend on our professional industrial cleaning service for consistent, safe facility maintenance that keeps their manufacturing operations reliable and efficient.",
    faq: [
      {
        question: "Do you offer competitive rates for North Las Vegas industrial facilities?",
        answer: "Yes, we provide competitive rates for North Las Vegas industrial facilities while maintaining high-quality safety standards and manufacturing facility cleaning requirements."
      },
      {
        question: "How do you ensure quality in North Las Vegas industrial cleaning?",
        answer: "Every North Las Vegas industrial cleaning is supervised by certified specialists and we guarantee compliance with safety standards and your specific manufacturing facility requirements."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our North Las Vegas industrial facility clean and safe. Great value and excellent professional service for our manufacturing operations.",
      author: "Facility Supervisor, North Las Vegas Manufacturing Hub"
    }
  },
  {
    id: "paradise",
    name: "Paradise",
    description: "Paradise industrial facilities enjoy reliable professional industrial cleaning services that maintain their facilities to the highest standards of safety, compliance, and operational efficiency.",
    faq: [
      {
        question: "Do you service diverse industrial facility types in Paradise?",
        answer: "Yes, we provide professional cleaning services for all types of manufacturing facilities including traditional plants, specialized processing centers, and high-tech manufacturing facilities."
      },
      {
        question: "What's your cancellation policy for Paradise industrial facilities?",
        answer: "We require 24-hour notice for cancellations, but we're flexible for emergency situations and can reschedule around critical production events and manufacturing schedules."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our Paradise industrial facility beautifully. Professional, safe, and thorough every time for our manufacturing operations.",
      author: "Operations Manager, Paradise Manufacturing"
    }
  },
  {
    id: "seven-hills",
    name: "Seven Hills",
    description: "Seven Hills industrial facilities trust our professional industrial cleaning service for consistent, safe facility maintenance that preserves their manufacturing operations and compliance standards.",
    faq: [
      {
        question: "Do you service high-end industrial facilities in Seven Hills?",
        answer: "Yes, we have extensive experience cleaning premium manufacturing facilities, including those with sophisticated equipment, luxury amenities, and high-end industrial standards."
      },
      {
        question: "How do you ensure security in Seven Hills industrial facilities?",
        answer: "All our team members are background-checked, bonded, and insured. We respect the sensitive nature of your manufacturing operations and maintain strict confidentiality and security protocols."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Seven Hills industrial facility to perfection. Their professionalism and understanding of manufacturing facility safety requirements are outstanding.",
      author: "Facility Director, Seven Hills Manufacturing"
    }
  },
  {
    id: "silverado-ranch",
    name: "Silverado Ranch",
    description: "Silverado Ranch industrial facilities rely on our professional industrial cleaning service for consistent facility maintenance that keeps their manufacturing operations operating smoothly and safely.",
    faq: [
      {
        question: "Do you work around Silverado Ranch industrial schedules?",
        answer: "Yes, we can schedule cleanings around your production schedules, maintenance windows, and operational requirements for your convenience and manufacturing efficiency."
      },
      {
        question: "What if we're not satisfied with cleaning in Silverado Ranch?",
        answer: "We guarantee satisfaction and will return to address any concerns at no additional charge, understanding the critical nature of your manufacturing operations."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Silverado Ranch industrial facility spotless and safe for over two years. Highly recommend their professional service for manufacturing facilities!",
      author: "Operations Manager, Silverado Ranch Manufacturing"
    }
  },
  {
    id: "spring-valley",
    name: "Spring Valley",
    description: "Spring Valley industrial facilities enjoy consistent, professional industrial cleaning services that maintain their facilities clean and operating at optimal efficiency year-round.",
    faq: [
      {
        question: "How often do Spring Valley industrial facilities schedule cleaning?",
        answer: "Most Spring Valley industrial facilities prefer weekly or bi-weekly cleaning, though we offer flexible scheduling based on your operational requirements and production schedules."
      },
      {
        question: "Do you provide specialized cleaning for Spring Valley industrial facilities?",
        answer: "Yes, we offer both regular industrial cleaning and specialized services for critical safety maintenance, post-incident cleanup, and emergency decontamination."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our Spring Valley industrial facility beautifully. Professional, reliable, and always safe for our manufacturing operations.",
      author: "Facility Manager, Spring Valley Manufacturing"
    }
  },
  {
    id: "summerlin-south",
    name: "Summerlin South",
    description: "Summerlin South industrial facilities trust our professional industrial cleaning service for consistent, high-quality facility maintenance that complements their premium manufacturing operations and safety excellence.",
    faq: [
      {
        question: "Do you service luxury industrial facilities in Summerlin South?",
        answer: "Yes, we specialize in cleaning high-end manufacturing facilities and are experienced with sophisticated equipment, premium amenities, and luxury industrial standards."
      },
      {
        question: "Can you accommodate Summerlin South industrial schedules?",
        answer: "Absolutely! We're familiar with busy manufacturing operations and can work around critical operational windows, production schedules, and manufacturing program requirements."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Summerlin South industrial facility to the highest standards. Exceptional professional service and deep understanding of manufacturing facility safety requirements.",
      author: "General Manager, Summerlin South Manufacturing"
    }
  },
  {
    id: "sunrise-manor",
    name: "Sunrise Manor",
    description: "Sunrise Manor industrial facilities depend on our professional industrial cleaning service for consistent, safe facility maintenance that keeps their manufacturing operations spotless and operating efficiently.",
    faq: [
      {
        question: "Do you offer competitive rates for Sunrise Manor industrial facilities?",
        answer: "Yes, we provide competitive rates for Sunrise Manor industrial facilities while maintaining high professional cleaning standards and manufacturing facility safety compliance."
      },
      {
        question: "How reliable is your service in Sunrise Manor industrial facilities?",
        answer: "We're committed to reliability and have a strong track record of consistent, professional service in Sunrise Manor manufacturing facilities."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Sunrise Manor industrial facility clean and safe. Great value and reliable professional service for our manufacturing operations.",
      author: "Operations Supervisor, Sunrise Manor Manufacturing"
    }
  },
  {
    id: "whitney",
    name: "Whitney",
    description: "Whitney industrial facilities enjoy professional industrial cleaning services that maintain their facilities clean, safe, and ready for optimal manufacturing efficiency.",
    faq: [
      {
        question: "Do you work with diverse Whitney industrial environments?",
        answer: "Yes, we're experienced with manufacturing facilities of all types and sizes, using professional cleaning practices appropriate for different industrial operations and safety requirements."
      },
      {
        question: "Can you schedule around Whitney industrial operational requirements?",
        answer: "Absolutely! We offer flexible scheduling including early morning, late evening, and emergency services around your critical manufacturing calendar."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our Whitney industrial facility beautifully. Professional, trustworthy, and always safe for our manufacturing operations.",
      author: "Facility Manager, Whitney Manufacturing"
    }
  },
  {
    id: "winchester",
    name: "Winchester",
    description: "Winchester industrial facilities trust our professional industrial cleaning service for consistent, safe facility maintenance that keeps their manufacturing operations spotless and operating at peak performance year-round.",
    faq: [
      {
        question: "Do you service diverse industrial facility types in Winchester?",
        answer: "Yes, we provide professional industrial cleaning for all types of manufacturing facilities including traditional plants, specialized processing centers, and high-tech manufacturing facilities."
      },
      {
        question: "How do you ensure quality in Winchester industrial cleaning?",
        answer: "Every Winchester industrial cleaning is supervised by certified specialists and we guarantee compliance with safety standards and your specific manufacturing facility requirements."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Winchester industrial facility immaculate and safe. Reliable, professional, and excellent value for our manufacturing operations.",
      author: "Operations Manager, Winchester Manufacturing"
    }
  }
];

const IndustrialCleaningLasVegasPage = () => {
  const { t } = useTranslation();
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
        <title>{t(`commercialServices.lasVegas.industrial.title`, { defaultValue: "Industrial Cleaning Services Las Vegas | Red Rock Cleans" })}</title>
        <meta name="description" content={t(`commercialServices.lasVegas.industrial.description`, { defaultValue: "Industrial cleaning in Las Vegas. Heavy-duty cleaning for warehouses & factories in Las Vegas & Henderson. Call us today!" })} />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <LasVegasNavigation />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative py-24 md:py-32 overflow-hidden">
            <div className="absolute inset-0">
              <img 
                src="/src/assets/hero-commercial.jpg" 
                alt="Professional industrial cleaning service in a Las Vegas manufacturing facility"
                className="w-full h-full object-cover scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                  Heavy-Duty Industrial Cleaning Services in Las Vegas
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                  Our specialized industrial cleaning services ensure safety, meet OSHA standards, and maximize operational uptime for facilities across Las Vegas. We understand the critical importance of maintaining clean, compliant industrial environments.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="h-14 text-lg px-8" asChild>
                    <a href="tel:+17025080098">
                      <Phone className="w-5 h-5 mr-2" />
                      Call (702) 508-0098
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="h-14 text-lg px-8" asChild>
                    <Link to="/commercial-quote?location=las-vegas">
                      <Home className="w-5 h-5 mr-2" />
                      Get Free Quote
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Prioritizing Safety, Compliance, and Uptime */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  Prioritizing Safety, Compliance, and Uptime
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Shield className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Ensuring OSHA Compliance</h3>
                      <p className="text-muted-foreground text-sm">
                        Our rigorous adherence to safety regulations protects your workforce and ensures your Las Vegas industrial facility meets all OSHA standards for worker safety and environmental compliance.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Safe & Compliant →
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Cog className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Maximizing Operational Uptime</h3>
                      <p className="text-muted-foreground text-sm">
                        Clean machinery and environments prevent costly breakdowns and delays, ensuring your Las Vegas industrial facility operates at maximum efficiency and productivity.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Efficient & Productive →
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Wrench className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Protecting Heavy Machinery</h3>
                      <p className="text-muted-foreground text-sm">
                        Our specialized techniques clean and degrease valuable equipment, extending its lifespan and protecting your Las Vegas industrial facility's most critical assets.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Protected & Maintained →
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Our Industrial Cleaning Capabilities */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  Our Industrial Cleaning Capabilities
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Droplets className="w-6 h-6" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Equipment & Machinery Degreasing</h3>
                      <p className="text-muted-foreground text-sm">
                        Removing tough grease and grime from production machinery using specialized industrial cleaning solutions and techniques.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Truck className="w-6 h-6" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">High-Surface & Structural Cleaning</h3>
                      <p className="text-muted-foreground text-sm">
                        Cleaning ceilings, support beams, pipes, and other hard-to-reach areas using specialized equipment and safety protocols.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Square className="w-6 h-6" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Floor Decontamination & Restoration</h3>
                      <p className="text-muted-foreground text-sm">
                        Heavy-duty scrubbing, stripping, and sealing of industrial flooring to maintain safety and operational efficiency.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Zap className="w-6 h-6" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Confined Space Cleaning</h3>
                      <p className="text-muted-foreground text-sm">
                        Our certified approach to safely cleaning tanks, silos, and other confined spaces with proper safety equipment and protocols.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* The Red Rock Cleans Industrial Standard */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-12">
                  The Red Rock Cleans Industrial Standard
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <HardHat className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-4xl font-bold text-primary mb-2">100%</div>
                    <h3 className="text-lg font-semibold mb-2">OSHA Standards Met</h3>
                    <p className="text-muted-foreground text-sm">
                      Las Vegas industrial facilities consistently meet all OSHA safety requirements
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Cog className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-4xl font-bold text-primary mb-2">500+</div>
                    <h3 className="text-lg font-semibold mb-2">Heavy Machines Serviced</h3>
                    <p className="text-muted-foreground text-sm">
                      Our team has safely cleaned and maintained industrial equipment across Las Vegas
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Building className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-4xl font-bold text-primary mb-2">50+</div>
                    <h3 className="text-lg font-semibold mb-2">Industrial Sites Maintained</h3>
                    <p className="text-muted-foreground text-sm">
                      Consistently maintaining manufacturing facilities throughout the Las Vegas area
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
                            Professional industrial cleaning services
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
                              Schedule Your {neighborhood.name} Industrial Cleaning
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

          {/* Other Commercial Cleaning Services in Las Vegas */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  Other Commercial Cleaning Services in Las Vegas
                </h2>
                <p className="text-xl text-muted-foreground mb-12">
                  Beyond industrial cleaning, we offer specialized commercial cleaning services to meet all your Las Vegas facility needs.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <Link to="/las-vegas/factory-cleaning/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors mb-4">
                        <Building className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Factory Cleaning Services
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Specialized cleaning for manufacturing plants, production facilities, and industrial environments.
                      </p>
                    </div>
                  </Link>
                  <Link to="/las-vegas/warehouse-cleaning/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors mb-4">
                        <Truck className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Warehouse Cleaning Services
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Professional cleaning for warehouses, distribution centers, and storage facilities.
                      </p>
                    </div>
                  </Link>
                  <Link to="/las-vegas/post-construction-cleaning-services/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors mb-4">
                        <Wrench className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Post-Construction Cleaning Services
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Comprehensive cleanup for construction sites, renovation projects, and new builds.
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
                      <h3 className="text-lg font-semibold">What makes your industrial cleaning service different?</h3>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <p className="text-muted-foreground">
                        We specialize in industrial cleaning with training in OSHA compliance, safety protocols, and manufacturing facility requirements. Our team uses specialized equipment and follows strict procedures to protect your equipment while maintaining the highest safety standards for worker protection.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2" className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <h3 className="text-lg font-semibold">How do you handle scheduling around industrial operations?</h3>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <p className="text-muted-foreground">
                        We work closely with your facility management to schedule cleaning during maintenance windows, production shutdowns, or off-peak hours when worker safety is maximized. We can also provide emergency cleaning services for safety incidents or critical maintenance needs.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3" className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <h3 className="text-lg font-semibold">What areas of industrial facilities do you clean?</h3>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <p className="text-muted-foreground">
                        We clean all areas including production equipment, machinery, floors, ceilings, confined spaces, and specialized industrial areas. We use appropriate safety protocols and methods for each area to ensure safety and effectiveness while protecting your manufacturing equipment and worker health.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-4" className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <h3 className="text-lg font-semibold">Are your technicians certified for industrial environments?</h3>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <p className="text-muted-foreground">
                        Yes, all our technicians are background-checked, bonded, and insured. They receive specialized training in industrial cleaning protocols, OSHA compliance, and manufacturing facility safety requirements. We understand the unique challenges of industrial environments and maintain strict protocols to protect your workers and equipment.
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
                  Ready to Elevate Your Industrial Facility's Safety Standards?
                </h2>
                <p className="text-xl mb-8 opacity-90">
                  Join the Las Vegas industrial facilities that trust Red Rock Cleans for safe, professional cleaning services that ensure optimal operational efficiency and OSHA compliance.
                </p>
                <Button size="lg" variant="secondary" className="h-14 text-lg px-8" asChild>
                  <Link to="/commercial-quote?location=las-vegas">
                    <Calendar className="w-5 h-5 mr-2" />
                    Schedule Your Industrial Cleaning Today
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

export default IndustrialCleaningLasVegasPage;

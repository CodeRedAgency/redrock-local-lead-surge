import { LasVegasNavigation } from "@/components/LasVegasNavigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Clock, Shield, Star, Users, Calendar, Home, Sparkles, Microchip, Award, Database, Server, Droplets, HardHat, Building2, GraduationCap, Wrench, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";

const neighborhoods = [
  {
    id: "anthem",
    name: "Anthem",
    description: "Protect your Anthem data center's critical infrastructure with our specialized data center cleaning services designed for precision and compliance.",
    faq: [
      {
        question: "Do you understand the critical requirements for Anthem data center environments?",
        answer: "Absolutely. Our team is trained in ISO 14644-1 standards and understands the critical nature of maintaining clean, contaminant-free environments for data centers."
      },
      {
        question: "Can you work around Anthem data center operational schedules?",
        answer: "Yes, we schedule our cleaning services around your critical operations, maintenance windows, and peak usage times to minimize any disruption."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our Anthem data center with exceptional precision. Their understanding of critical infrastructure requirements is outstanding.",
      author: "IT Director, Anthem Technology Center"
    }
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "Professional data center cleaning services for Enterprise facilities who demand the highest standards of cleanliness and operational reliability.",
    faq: [
      {
        question: "What areas of Enterprise data centers do you clean?",
        answer: "We clean all areas including server rooms, raised floors, sub-floors, equipment racks, cable management areas, and environmental surfaces."
      },
      {
        question: "Do you provide flexible scheduling for Enterprise data centers?",
        answer: "Yes, we work around your operational schedules, maintenance windows, and can provide emergency cleaning services when needed."
      }
    ],
    testimonial: {
      text: "Our Enterprise data center has never been cleaner. Red Rock Cleans respects our operational requirements and provides excellent service around our critical schedules.",
      author: "Facilities Manager, Enterprise Data Solutions"
    }
  },
  {
    id: "green-valley-north",
    name: "Green Valley North",
    description: "Keep your Green Valley North data center facilities pristine with our comprehensive data center cleaning service designed for mission-critical environments.",
    faq: [
      {
        question: "Do you clean both large and small data centers in Green Valley North?",
        answer: "Yes, we provide data center cleaning services for facilities of all sizes, from small server rooms to large enterprise data centers."
      },
      {
        question: "What's included in your Green Valley North data center cleaning?",
        answer: "We clean raised floors, sub-floors, server racks, equipment surfaces, cable management, environmental surfaces, and specialized areas with appropriate methods."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Green Valley North data center beautifully. Their precision and attention to critical infrastructure requirements are exceptional.",
      author: "Operations Manager, Green Valley Tech Hub"
    }
  },
  {
    id: "henderson",
    name: "Henderson",
    description: "Henderson data centers trust Red Rock Cleans for consistent, specialized data center cleaning services that maintain their critical infrastructure beautifully year-round.",
    faq: [
      {
        question: "How far in advance should Henderson data centers book cleaning?",
        answer: "We recommend booking at least one week in advance, though we can often accommodate shorter notice for emergency situations or maintenance windows."
      },
      {
        question: "Do you provide specialized equipment for Henderson data center cleaning?",
        answer: "Yes, we bring all specialized equipment including anti-static vacuums, HEPA filtration systems, and appropriate cleaning solutions for data center environments."
      }
    ],
    testimonial: {
      text: "As a Henderson data center administrator, I appreciate Red Rock Cleans' understanding of critical infrastructure needs. Highly recommended for mission-critical facilities!",
      author: "Data Center Manager, Henderson Technology Park"
    }
  },
  {
    id: "lake-las-vegas",
    name: "Lake Las Vegas",
    description: "Lake Las Vegas data centers enjoy pristine, specialized cleaning with our data center cleaning service that maintains their critical infrastructure to the highest standards.",
    faq: [
      {
        question: "Do you service high-end data centers in Lake Las Vegas?",
        answer: "Yes, we specialize in cleaning premium data center facilities and are experienced with sophisticated cooling systems, raised floor environments, and critical infrastructure."
      },
      {
        question: "Can you work around Lake Las Vegas data center operational schedules?",
        answer: "Absolutely! We offer flexible scheduling including maintenance windows, off-peak hours, and emergency services to accommodate your operational requirements."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Lake Las Vegas data center to perfection. Their understanding of critical infrastructure and precision cleaning is remarkable.",
      author: "Technical Director, Lake Las Vegas Data Center"
    }
  },
  {
    id: "las-vegas",
    name: "Las Vegas",
    description: "Las Vegas data centers rely on our specialized data center cleaning service for consistent, professional facility maintenance that ensures optimal operational performance.",
    faq: [
      {
        question: "What makes Red Rock Cleans different for Las Vegas data centers?",
        answer: "We're locally owned, fully insured, and our team is specially trained in data center cleaning protocols, ISO standards, and critical infrastructure requirements."
      },
      {
        question: "Do you offer emergency data center cleaning for Las Vegas?",
        answer: "Yes, we can often provide same-day or emergency cleaning services for critical situations, equipment failures, or post-incident remediation."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been cleaning our Las Vegas data center for three years. They understand our critical needs and maintain our infrastructure beautifully.",
      author: "Operations Director, Las Vegas Technology Center"
    }
  },
  {
    id: "macdonald-ranch",
    name: "MacDonald Ranch",
    description: "MacDonald Ranch data centers enjoy consistent, specialized data center cleaning services that keep their critical infrastructure spotless and operating at peak performance.",
    faq: [
      {
        question: "How long does data center cleaning take in MacDonald Ranch?",
        answer: "Most MacDonald Ranch data center cleanings take 4-8 hours depending on facility size, complexity, and specific cleaning requirements."
      },
      {
        question: "Do you work with MacDonald Ranch data center staff?",
        answer: "Yes, we coordinate with your technical staff and facilities team to ensure our cleaning complements your maintenance schedules and operational requirements."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our MacDonald Ranch data center beautifully. Their specialized approach and attention to critical infrastructure are outstanding.",
      author: "Facilities Engineer, MacDonald Ranch Data Center"
    }
  },
  {
    id: "mountains-edge",
    name: "Mountain's Edge",
    description: "Mountain's Edge data centers trust our specialized data center cleaning service for consistent facility maintenance that complements their critical operational requirements.",
    faq: [
      {
        question: "What cleaning products do you use in Mountain's Edge data centers?",
        answer: "We use specialized, non-conductive cleaning products that are safe for electronic equipment and won't damage sensitive components or create static issues."
      },
      {
        question: "Can you customize cleaning for Mountain's Edge data centers?",
        answer: "Yes, we can customize our data center cleaning service to focus on specific areas, equipment types, or particular cleaning priorities based on your requirements."
      }
    ],
    testimonial: {
      text: "Living in Mountain's Edge, I appreciate Red Rock Cleans' reliability and understanding of our data center's critical requirements. Excellent service for mission-critical infrastructure.",
      author: "IT Manager, Mountain's Edge Technology Facility"
    }
  },
  {
    id: "north-las-vegas",
    name: "North Las Vegas",
    description: "North Las Vegas data centers depend on our specialized data center cleaning service for consistent, professional facility maintenance that keeps their critical infrastructure reliable and efficient.",
    faq: [
      {
        question: "Do you offer competitive rates for North Las Vegas data centers?",
        answer: "Yes, we provide competitive rates for North Las Vegas data centers while maintaining high-quality specialized cleaning standards and compliance requirements."
      },
      {
        question: "How do you ensure quality in North Las Vegas data center cleaning?",
        answer: "Every North Las Vegas data center cleaning is supervised by certified specialists and we guarantee compliance with industry standards and your specific requirements."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our North Las Vegas data center clean and operational. Great value and excellent specialized service for our critical infrastructure.",
      author: "Data Center Supervisor, North Las Vegas Tech Hub"
    }
  },
  {
    id: "paradise",
    name: "Paradise",
    description: "Paradise data centers enjoy reliable specialized data center cleaning services that maintain their facilities to the highest standards of cleanliness and operational excellence.",
    faq: [
      {
        question: "Do you service diverse data center types in Paradise?",
        answer: "Yes, we provide specialized cleaning services for all types of data centers including enterprise facilities, colocation centers, and specialized computing environments."
      },
      {
        question: "What's your cancellation policy for Paradise data centers?",
        answer: "We require 24-hour notice for cancellations, but we're flexible for emergency situations and can reschedule around critical maintenance windows."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our Paradise data center beautifully. Professional, specialized, and thorough every time for our critical infrastructure.",
      author: "Technical Operations Manager, Paradise Data Center"
    }
  },
  {
    id: "seven-hills",
    name: "Seven Hills",
    description: "Seven Hills data centers trust our specialized data center cleaning service for consistent, professional facility maintenance that preserves their critical infrastructure and operational reliability.",
    faq: [
      {
        question: "Do you service high-end data centers in Seven Hills?",
        answer: "Yes, we have extensive experience cleaning premium data center facilities, including those with sophisticated cooling systems, raised floors, and critical infrastructure."
      },
      {
        question: "How do you ensure security in Seven Hills data centers?",
        answer: "All our team members are background-checked, bonded, and insured. We respect the sensitive nature of your data center operations and maintain strict confidentiality and security protocols."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Seven Hills data center to perfection. Their professionalism and understanding of critical infrastructure requirements are outstanding.",
      author: "Data Center Director, Seven Hills Technology Campus"
    }
  },
  {
    id: "silverado-ranch",
    name: "Silverado Ranch",
    description: "Silverado Ranch data centers rely on our specialized data center cleaning service for consistent facility maintenance that keeps their critical infrastructure operating smoothly and efficiently.",
    faq: [
      {
        question: "Do you work around Silverado Ranch data center operational schedules?",
        answer: "Yes, we can schedule cleanings around your operational hours, maintenance windows, and critical system requirements for your convenience."
      },
      {
        question: "What if we're not satisfied with cleaning in Silverado Ranch?",
        answer: "We guarantee satisfaction and will return to address any concerns at no additional charge, understanding the critical nature of your data center operations."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Silverado Ranch data center spotless for over two years. Highly recommend their specialized service for critical infrastructure!",
      author: "Operations Manager, Silverado Ranch Data Center"
    }
  },
  {
    id: "spring-valley",
    name: "Spring Valley",
    description: "Spring Valley data centers enjoy consistent, specialized data center cleaning services that maintain their facilities clean and operating at optimal performance year-round.",
    faq: [
      {
        question: "How often do Spring Valley data centers schedule cleaning?",
        answer: "Most Spring Valley data centers prefer monthly or quarterly cleaning, though we offer flexible scheduling based on your operational requirements and environmental factors."
      },
      {
        question: "Do you provide specialized cleaning for Spring Valley data centers?",
        answer: "Yes, we offer both regular data center cleaning and specialized services for critical maintenance, post-construction cleanup, and emergency remediation."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our Spring Valley data center beautifully. Professional, reliable, and always specialized for our critical infrastructure needs.",
      author: "Facilities Manager, Spring Valley Data Center"
    }
  },
  {
    id: "summerlin-south",
    name: "Summerlin South",
    description: "Summerlin South data centers trust our specialized data center cleaning service for consistent, high-quality facility maintenance that complements their premium infrastructure and operational excellence.",
    faq: [
      {
        question: "Do you service luxury data centers in Summerlin South?",
        answer: "Yes, we specialize in cleaning high-end data center facilities and are experienced with sophisticated infrastructure, premium cooling systems, and critical operational requirements."
      },
      {
        question: "Can you accommodate Summerlin South data center operational schedules?",
        answer: "Absolutely! We're familiar with busy data center operations and can work around critical maintenance windows, system updates, and operational requirements."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Summerlin South data center to the highest standards. Exceptional specialized service and deep understanding of critical infrastructure requirements.",
      author: "Technical Director, Summerlin South Data Center"
    }
  },
  {
    id: "sunrise-manor",
    name: "Sunrise Manor",
    description: "Sunrise Manor data centers depend on our specialized data center cleaning service for consistent, professional facility maintenance that keeps their critical infrastructure spotless and operating efficiently.",
    faq: [
      {
        question: "Do you offer competitive rates for Sunrise Manor data centers?",
        answer: "Yes, we provide competitive rates for Sunrise Manor data centers while maintaining high specialized cleaning standards and compliance with critical infrastructure requirements."
      },
      {
        question: "How reliable is your service in Sunrise Manor data centers?",
        answer: "We're committed to reliability and have a strong track record of consistent, specialized service in Sunrise Manor critical infrastructure facilities."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Sunrise Manor data center clean and operational. Great value and reliable specialized service for our critical infrastructure.",
      author: "Operations Supervisor, Sunrise Manor Data Center"
    }
  },
  {
    id: "whitney",
    name: "Whitney",
    description: "Whitney data centers enjoy specialized data center cleaning services that maintain their facilities clean, operational, and ready for critical computing requirements.",
    faq: [
      {
        question: "Do you work with diverse Whitney data center environments?",
        answer: "Yes, we're experienced with data centers of all types and sizes, using specialized cleaning practices appropriate for different infrastructure and operational requirements."
      },
      {
        question: "Can you schedule around Whitney data center operational requirements?",
        answer: "Absolutely! We offer flexible scheduling including maintenance windows, off-peak hours, and emergency services around your critical operational calendar."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our Whitney data center beautifully. Professional, trustworthy, and always specialized for our critical infrastructure needs.",
      author: "Data Center Manager, Whitney Technology Facility"
    }
  },
  {
    id: "winchester",
    name: "Winchester",
    description: "Winchester data centers trust our specialized data center cleaning service for consistent, professional facility maintenance that keeps their critical infrastructure spotless and operating at peak performance year-round.",
    faq: [
      {
        question: "Do you service diverse data center types in Winchester?",
        answer: "Yes, we provide specialized data center cleaning for all types of facilities including enterprise data centers, colocation centers, and specialized computing environments."
      },
      {
        question: "How do you ensure quality in Winchester data center cleaning?",
        answer: "Every Winchester data center cleaning is supervised by certified specialists and we guarantee compliance with industry standards and your specific critical infrastructure requirements."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Winchester data center immaculate. Reliable, professional, and excellent specialized value for our critical infrastructure.",
      author: "Technical Operations Manager, Winchester Data Center"
    }
  }
];

const DataCenterCleaningLasVegasPage = () => {
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
        <title>Data Center Cleaning Las Vegas | Red Rock Cleans</title>
        <meta name="description" content="Specialized data center cleaning in Las Vegas. Red Rock Cleans offers ISO 14644-1 compliant server room, sub-floor, and critical environment cleaning to ensure uptime." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <LasVegasNavigation />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative py-24 md:py-32 overflow-hidden">
            <div className="absolute inset-0">
              <img 
                src="/src/assets/hero-commercial.jpg" 
                alt="Professional data center cleaning service in a critical Las Vegas server environment"
                className="w-full h-full object-cover scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                  Specialized Data Center Cleaning in Las Vegas
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                  Protect your critical infrastructure with precision, specialized cleaning that maintains data integrity and operational uptime. Our Las Vegas data center cleaning services ensure your mission-critical systems operate flawlessly in the desert climate.
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

          {/* Protecting Your Critical Infrastructure in the Desert Heat */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  Protecting Your Critical Infrastructure in the Desert Heat
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Microchip className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Precision Contamination Control</h3>
                      <p className="text-muted-foreground text-sm">
                        Our specialized methods prevent dust, debris, and static from compromising your critical hardware. We use anti-static equipment and HEPA filtration to maintain the cleanest possible environment for your Las Vegas data center.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Precision & Protection →
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Award className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">ISO & Industry Compliance</h3>
                      <p className="text-muted-foreground text-sm">
                        We adhere to critical standards including ISO 14644-1 for cleanroom environments and follow industry best practices for data center maintenance. Our team is trained in compliance requirements specific to Las Vegas data centers.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Certified & Compliant →
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Clock className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Minimizing Downtime Risk</h3>
                      <p className="text-muted-foreground text-sm">
                        Proactive cleaning prevents overheating and system failures in the Las Vegas climate. Our specialized approach reduces dust accumulation that can cause cooling system inefficiencies and hardware malfunctions.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Proactive & Reliable →
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Our Comprehensive Data Center Cleaning Protocol */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  Our Comprehensive Data Center Cleaning Protocol
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Database className="w-6 h-6" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Raised Floor & Sub-Floor Cleaning</h3>
                      <p className="text-muted-foreground text-sm">
                        Specialized vacuuming and cleaning beneath raised floors to remove accumulated dust, debris, and contaminants that can compromise cooling efficiency and air quality.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Server className="w-6 h-6" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Server Rack & Equipment Detailing</h3>
                      <p className="text-muted-foreground text-sm">
                        Anti-static cleaning of server exteriors, cables, and equipment surfaces using specialized tools and solutions that won't damage sensitive electronic components.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Droplets className="w-6 h-6" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Environmental Surface Disinfection</h3>
                      <p className="text-muted-foreground text-sm">
                        Cleaning walls, ceilings, and access doors with appropriate solutions that maintain air quality while preventing contamination of sensitive equipment areas.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <HardHat className="w-6 h-6" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Post-Construction & Remediation</h3>
                      <p className="text-muted-foreground text-sm">
                        Specialized services for new builds or after facility work, including debris removal, dust elimination, and restoration of cleanroom standards.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Our Commitment to Las Vegas' Digital Backbone */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-12">
                  Our Commitment to Las Vegas' Digital Backbone
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Database className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-4xl font-bold text-primary mb-2">25+</div>
                    <h3 className="text-lg font-semibold mb-2">Data Centers Secured in NV</h3>
                    <p className="text-muted-foreground text-sm">
                      Trusted by Las Vegas area data centers for critical infrastructure maintenance
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-4xl font-bold text-primary mb-2">99.99%</div>
                    <h3 className="text-lg font-semibold mb-2">Uptime Percentage Maintained</h3>
                    <p className="text-muted-foreground text-sm">
                      Our cleaning protocols help maintain optimal operational performance
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-4xl font-bold text-primary mb-2">100%</div>
                    <h3 className="text-lg font-semibold mb-2">Certified Cleanroom Specialists</h3>
                    <p className="text-muted-foreground text-sm">
                      All technicians trained in ISO standards and critical infrastructure protocols
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
                            Professional data center cleaning services
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
                              Schedule Your {neighborhood.name} Data Center Cleaning
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
                  Beyond data center cleaning, we offer specialized commercial cleaning services to meet all your Las Vegas facility needs.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <Link to="/las-vegas/industrial-cleaning/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors mb-4">
                        <Wrench className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Industrial Cleaning Services
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Specialized cleaning for manufacturing facilities, warehouses, and industrial environments.
                      </p>
                    </div>
                  </Link>
                  <Link to="/las-vegas/government-facility-cleaning/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors mb-4">
                        <Building2 className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Government Facility Cleaning Services
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Secure cleaning services for government buildings and public facilities.
                      </p>
                    </div>
                  </Link>
                  <Link to="/las-vegas/warehouse-cleaning/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors mb-4">
                        <Database className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Warehouse Cleaning Services
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Comprehensive cleaning for distribution centers and storage facilities.
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
                      <h3 className="text-lg font-semibold">What makes your data center cleaning service different?</h3>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <p className="text-muted-foreground">
                        We specialize in data center cleaning with training in ISO 14644-1 standards, anti-static protocols, and critical infrastructure requirements. Our team uses specialized equipment and follows strict procedures to protect your sensitive equipment while maintaining the highest cleanliness standards.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2" className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <h3 className="text-lg font-semibold">How do you handle scheduling around data center operations?</h3>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <p className="text-muted-foreground">
                        We work closely with your technical staff to schedule cleaning during maintenance windows, off-peak hours, or when systems are least critical. We can also provide emergency cleaning services for post-incident remediation or equipment failures. Our flexible approach ensures minimal disruption to your operations.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3" className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <h3 className="text-lg font-semibold">What areas of the data center do you clean?</h3>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <p className="text-muted-foreground">
                        We clean all areas including raised floors, sub-floors, server racks, equipment surfaces, cable management areas, environmental surfaces (walls, ceilings, doors), and specialized areas like cooling systems. We use appropriate methods and equipment for each area to ensure safety and effectiveness.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-4" className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <h3 className="text-lg font-semibold">Are your technicians certified and trustworthy for sensitive environments?</h3>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <p className="text-muted-foreground">
                        Yes, all our technicians are background-checked, bonded, and insured. They receive specialized training in data center cleaning protocols, ISO standards, and critical infrastructure requirements. We understand the sensitive nature of data center operations and maintain strict confidentiality and security protocols.
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
                  Ready to Protect Your Critical Infrastructure?
                </h2>
                <p className="text-xl mb-8 opacity-90">
                  Join the Las Vegas data centers that trust Red Rock Cleans for specialized, professional data center cleaning services that ensure optimal performance.
                </p>
                <Button size="lg" variant="secondary" className="h-14 text-lg px-8" asChild>
                  <Link to="/commercial-quote?location=las-vegas">
                    <Calendar className="w-5 h-5 mr-2" />
                    Schedule Your Data Center Cleaning Today
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
                  alt="A pristine server room in a Las Vegas data center after specialized cleaning by Red Rock Cleans"
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

export default DataCenterCleaningLasVegasPage;

import { LasVegasNavigation } from "@/components/LasVegasNavigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Clock, Shield, Star, Users, Calendar, Home, Sparkles, Lock, FileText, Building, Scale, User, Building2, GraduationCap, Database } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";

const neighborhoods = [
  {
    id: "anthem",
    name: "Anthem",
    description: "Keep your Anthem government facilities secure and pristine with our comprehensive government facility cleaning services designed for public safety and professional excellence.",
    faq: [
      {
        question: "Do you understand the security requirements for Anthem government facilities?",
        answer: "Absolutely. Our team is security-cleared and understands the critical nature of maintaining secure, confidential environments for government operations."
      },
      {
        question: "Can you work around Anthem government facility schedules?",
        answer: "Yes, we schedule our cleaning services around your operational hours, public access times, and security protocols to minimize disruption to government services."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our Anthem government facility with exceptional discretion and professionalism. Their understanding of security requirements is outstanding.",
      author: "Facilities Manager, Anthem Government Center"
    }
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "Professional government facility cleaning services for Enterprise municipal buildings who demand the highest standards of security, discretion, and operational reliability.",
    faq: [
      {
        question: "What areas of Enterprise government facilities do you clean?",
        answer: "We clean all areas including public lobbies, offices, secure areas, courtrooms, common spaces, restrooms, and specialized government zones with appropriate security protocols."
      },
      {
        question: "Do you provide flexible scheduling for Enterprise government facilities?",
        answer: "Yes, we work around your operational schedules, public hours, and can provide emergency cleaning services when needed for critical government operations."
      }
    ],
    testimonial: {
      text: "Our Enterprise government facility has never been cleaner or more secure. Red Rock Cleans respects our confidentiality requirements and provides excellent service around our public service schedules.",
      author: "Operations Director, Enterprise Municipal Building"
    }
  },
  {
    id: "green-valley-north",
    name: "Green Valley North",
    description: "Keep your Green Valley North government facilities pristine with our comprehensive government facility cleaning service designed for public safety and professional excellence.",
    faq: [
      {
        question: "Do you clean both large and small government facilities in Green Valley North?",
        answer: "Yes, we provide government facility cleaning services for facilities of all sizes, from small municipal offices to large government complexes."
      },
      {
        question: "What's included in your Green Valley North government facility cleaning?",
        answer: "We clean public areas, offices, secure zones, courtrooms, common spaces, and specialized government areas with appropriate security and confidentiality protocols."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Green Valley North government facility beautifully. Their precision and attention to security requirements are exceptional.",
      author: "Security Coordinator, Green Valley North Government Center"
    }
  },
  {
    id: "henderson",
    name: "Henderson",
    description: "Henderson government facilities trust Red Rock Cleans for consistent, professional government facility cleaning services that maintain their municipal buildings securely and efficiently year-round.",
    faq: [
      {
        question: "How far in advance should Henderson government facilities book cleaning?",
        answer: "We recommend booking at least one week in advance, though we can often accommodate shorter notice for emergency situations or special government events."
      },
      {
        question: "Do you provide specialized equipment for Henderson government facility cleaning?",
        answer: "Yes, we bring all specialized equipment including security-compliant cleaning tools and appropriate solutions for government environments."
      }
    ],
    testimonial: {
      text: "As a Henderson government facility manager, I appreciate Red Rock Cleans' understanding of security needs. Highly recommended for municipal facilities!",
      author: "Facilities Manager, Henderson Government District"
    }
  },
  {
    id: "lake-las-vegas",
    name: "Lake Las Vegas",
    description: "Lake Las Vegas government facilities enjoy pristine, professional cleaning with our government facility cleaning service that maintains their municipal buildings to the highest security standards.",
    faq: [
      {
        question: "Do you service high-end government facilities in Lake Las Vegas?",
        answer: "Yes, we specialize in cleaning premium government facilities and are experienced with sophisticated security protocols, confidential areas, and municipal excellence standards."
      },
      {
        question: "Can you work around Lake Las Vegas government facility schedules?",
        answer: "Absolutely! We offer flexible scheduling including after-hours cleaning, emergency services, and specialized protocols to accommodate your government requirements."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Lake Las Vegas government facility to perfection. Their understanding of security protocols and discretion is remarkable.",
      author: "Security Director, Lake Las Vegas Government Center"
    }
  },
  {
    id: "las-vegas",
    name: "Las Vegas",
    description: "Las Vegas government facilities rely on our professional government facility cleaning service for consistent, secure facility maintenance that ensures optimal public service performance.",
    faq: [
      {
        question: "What makes Red Rock Cleans different for Las Vegas government facilities?",
        answer: "We're locally owned, fully insured, and our team is security-cleared and specially trained in government cleaning protocols, confidentiality requirements, and public safety standards."
      },
      {
        question: "Do you offer emergency government facility cleaning for Las Vegas?",
        answer: "Yes, we can often provide same-day or emergency cleaning services for critical situations, security incidents, or post-event cleanup needs."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been cleaning our Las Vegas government facility for three years. They understand our security needs and maintain our facility professionally and discreetly.",
      author: "Operations Manager, Las Vegas Government Center"
    }
  },
  {
    id: "macdonald-ranch",
    name: "MacDonald Ranch",
    description: "MacDonald Ranch government facilities enjoy consistent, professional government facility cleaning services that keep their municipal buildings spotless and operating at peak public service efficiency.",
    faq: [
      {
        question: "How long does government facility cleaning take in MacDonald Ranch?",
        answer: "Most MacDonald Ranch government facility cleanings take 4-8 hours depending on facility size, complexity, and specific security requirements for government operations."
      },
      {
        question: "Do you work with MacDonald Ranch government facility staff?",
        answer: "Yes, we coordinate with your security staff and facilities team to ensure our cleaning complements your government schedules and confidentiality protocols."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our MacDonald Ranch government facility beautifully. Their professional approach and attention to security are outstanding.",
      author: "Security Manager, MacDonald Ranch Government Center"
    }
  },
  {
    id: "mountains-edge",
    name: "Mountain's Edge",
    description: "Mountain's Edge government facilities trust our professional government facility cleaning service for consistent facility maintenance that complements their municipal operations and security requirements.",
    faq: [
      {
        question: "What cleaning products do you use in Mountain's Edge government facilities?",
        answer: "We use government-approved, security-compliant cleaning products that are safe for sensitive areas and won't compromise confidentiality or create security hazards."
      },
      {
        question: "Can you customize cleaning for Mountain's Edge government facilities?",
        answer: "Yes, we can customize our government facility cleaning service to focus on specific areas, security zones, or particular cleaning priorities based on your municipal requirements."
      }
    ],
    testimonial: {
      text: "Living in Mountain's Edge, I appreciate Red Rock Cleans' reliability and understanding of our government facility's security requirements. Excellent service for municipal facilities.",
      author: "Operations Coordinator, Mountain's Edge Government Center"
    }
  },
  {
    id: "north-las-vegas",
    name: "North Las Vegas",
    description: "North Las Vegas government facilities depend on our professional government facility cleaning service for consistent, secure facility maintenance that keeps their municipal operations reliable and efficient.",
    faq: [
      {
        question: "Do you offer competitive rates for North Las Vegas government facilities?",
        answer: "Yes, we provide competitive rates for North Las Vegas government facilities while maintaining high-quality security-compliant cleaning standards and confidentiality requirements."
      },
      {
        question: "How do you ensure quality in North Las Vegas government facility cleaning?",
        answer: "Every North Las Vegas government facility cleaning is supervised by security-cleared specialists and we guarantee compliance with government standards and your specific security requirements."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our North Las Vegas government facility clean and secure. Great value and excellent professional service for our municipal operations.",
      author: "Facilities Supervisor, North Las Vegas Government Hub"
    }
  },
  {
    id: "paradise",
    name: "Paradise",
    description: "Paradise government facilities enjoy reliable professional government facility cleaning services that maintain their facilities to the highest standards of cleanliness, security, and public service excellence.",
    faq: [
      {
        question: "Do you service diverse government facility types in Paradise?",
        answer: "Yes, we provide professional cleaning services for all types of government facilities including municipal offices, courthouses, federal buildings, and general public service centers."
      },
      {
        question: "What's your cancellation policy for Paradise government facilities?",
        answer: "We require 24-hour notice for cancellations, but we're flexible for emergency situations and can reschedule around critical government operations and security protocols."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our Paradise government facility beautifully. Professional, secure, and thorough every time for our municipal operations.",
      author: "Operations Manager, Paradise Government Center"
    }
  },
  {
    id: "seven-hills",
    name: "Seven Hills",
    description: "Seven Hills government facilities trust our professional government facility cleaning service for consistent, secure facility maintenance that preserves their municipal operations and public safety.",
    faq: [
      {
        question: "Do you service high-end government facilities in Seven Hills?",
        answer: "Yes, we have extensive experience cleaning premium government facilities, including those with sophisticated security systems, confidential areas, and municipal excellence protocols."
      },
      {
        question: "How do you ensure security in Seven Hills government facilities?",
        answer: "All our team members are security-cleared, background-checked, bonded, and insured. We respect the sensitive nature of your government operations and maintain strict confidentiality and security protocols."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Seven Hills government facility to perfection. Their professionalism and understanding of security requirements are outstanding.",
      author: "Security Director, Seven Hills Government Campus"
    }
  },
  {
    id: "silverado-ranch",
    name: "Silverado Ranch",
    description: "Silverado Ranch government facilities rely on our professional government facility cleaning service for consistent facility maintenance that keeps their municipal operations operating smoothly and securely.",
    faq: [
      {
        question: "Do you work around Silverado Ranch government facility schedules?",
        answer: "Yes, we can schedule cleanings around your operational hours, public access times, and government requirements for your convenience and security."
      },
      {
        question: "What if we're not satisfied with cleaning in Silverado Ranch?",
        answer: "We guarantee satisfaction and will return to address any concerns at no additional charge, understanding the critical nature of your government operations."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Silverado Ranch government facility spotless and secure for over two years. Highly recommend their professional service for municipal facilities!",
      author: "Operations Manager, Silverado Ranch Government Center"
    }
  },
  {
    id: "spring-valley",
    name: "Spring Valley",
    description: "Spring Valley government facilities enjoy consistent, professional government facility cleaning services that maintain their facilities clean and operating at optimal public service performance year-round.",
    faq: [
      {
        question: "How often do Spring Valley government facilities schedule cleaning?",
        answer: "Most Spring Valley government facilities prefer daily or weekly cleaning, though we offer flexible scheduling based on your operational requirements and public service schedules."
      },
      {
        question: "Do you provide specialized cleaning for Spring Valley government facilities?",
        answer: "Yes, we offer both regular government facility cleaning and specialized services for critical maintenance, post-event cleanup, and emergency remediation."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our Spring Valley government facility beautifully. Professional, reliable, and always secure for our municipal operations.",
      author: "Security Manager, Spring Valley Government Center"
    }
  },
  {
    id: "summerlin-south",
    name: "Summerlin South",
    description: "Summerlin South government facilities trust our professional government facility cleaning service for consistent, high-quality facility maintenance that complements their premium municipal operations and security excellence.",
    faq: [
      {
        question: "Do you service luxury government facilities in Summerlin South?",
        answer: "Yes, we specialize in cleaning high-end government facilities and are experienced with sophisticated security protocols, premium confidentiality standards, and municipal excellence requirements."
      },
      {
        question: "Can you accommodate Summerlin South government facility schedules?",
        answer: "Absolutely! We're familiar with busy government operations and can work around critical operational windows, security protocols, and public service requirements."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Summerlin South government facility to the highest standards. Exceptional professional service and deep understanding of security requirements.",
      author: "Security Director, Summerlin South Government Center"
    }
  },
  {
    id: "sunrise-manor",
    name: "Sunrise Manor",
    description: "Sunrise Manor government facilities depend on our professional government facility cleaning service for consistent, secure facility maintenance that keeps their municipal operations spotless and operating efficiently.",
    faq: [
      {
        question: "Do you offer competitive rates for Sunrise Manor government facilities?",
        answer: "Yes, we provide competitive rates for Sunrise Manor government facilities while maintaining high professional cleaning standards and security compliance with municipal requirements."
      },
      {
        question: "How reliable is your service in Sunrise Manor government facilities?",
        answer: "We're committed to reliability and have a strong track record of consistent, professional service in Sunrise Manor government facilities."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Sunrise Manor government facility clean and secure. Great value and reliable professional service for our municipal operations.",
      author: "Operations Supervisor, Sunrise Manor Government Center"
    }
  },
  {
    id: "whitney",
    name: "Whitney",
    description: "Whitney government facilities enjoy professional government facility cleaning services that maintain their facilities clean, secure, and ready for optimal public service operations.",
    faq: [
      {
        question: "Do you work with diverse Whitney government facility environments?",
        answer: "Yes, we're experienced with government facilities of all types and sizes, using professional cleaning practices appropriate for different municipal operations and security requirements."
      },
      {
        question: "Can you schedule around Whitney government facility operational requirements?",
        answer: "Absolutely! We offer flexible scheduling including after-hours cleaning, emergency services, and specialized protocols around your critical government calendar."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our Whitney government facility beautifully. Professional, trustworthy, and always secure for our municipal operations.",
      author: "Facilities Manager, Whitney Government Center"
    }
  },
  {
    id: "winchester",
    name: "Winchester",
    description: "Winchester government facilities trust our professional government facility cleaning service for consistent, secure facility maintenance that keeps their municipal operations spotless and operating at peak performance year-round.",
    faq: [
      {
        question: "Do you service diverse government facility types in Winchester?",
        answer: "Yes, we provide professional government facility cleaning for all types of municipal facilities including offices, courthouses, federal buildings, and specialized public service centers."
      },
      {
        question: "How do you ensure quality in Winchester government facility cleaning?",
        answer: "Every Winchester government facility cleaning is supervised by security-cleared specialists and we guarantee compliance with government standards and your specific municipal security requirements."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Winchester government facility immaculate and secure. Reliable, professional, and excellent value for our municipal operations.",
      author: "Operations Manager, Winchester Government Center"
    }
  }
];

const GovernmentFacilityCleaningLasVegasPage = () => {
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
        <title>Government Facility Cleaning Las Vegas | Red Rock Cleans</title>
        <meta name="description" content="Secure and compliant government facility cleaning in Las Vegas. Red Rock Cleans provides discreet, professional cleaning for municipal and federal buildings by security-cleared staff." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <LasVegasNavigation />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative py-24 md:py-32 overflow-hidden">
            <div className="absolute inset-0">
              <img 
                src="/src/assets/hero-commercial.jpg" 
                alt="Professional government facility cleaning service in a Las Vegas municipal building"
                className="w-full h-full object-cover scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                  Secure & Compliant Government Facility Cleaning in Las Vegas
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                  Security, discretion, and reliability are paramount when cleaning sensitive government and municipal buildings. Our Las Vegas government facility cleaning services ensure your public facilities maintain the highest standards of cleanliness and confidentiality while serving the community.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="h-14 text-lg px-8" asChild>
                    <Link to="/commercial-quote?location=las-vegas">
                      <Calendar className="w-5 h-5 mr-2" />
                      Schedule Government Facility Cleaning
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

          {/* A Higher Standard of Trust for Public Facilities */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  A Higher Standard of Trust for Public Facilities
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Shield className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Security-Cleared Personnel</h3>
                      <p className="text-muted-foreground text-sm">
                        All staff assigned to government contracts in Las Vegas undergo rigorous background checks and security clearances. We ensure only trusted, vetted professionals access your sensitive facilities.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Vetted & Trusted →
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Lock className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Strict Confidentiality Protocols</h3>
                      <p className="text-muted-foreground text-sm">
                        Our commitment to discretion and privacy of sensitive areas ensures complete confidentiality. We understand the importance of maintaining security in government environments.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Confidential & Secure →
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <FileText className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Compliance & Detailed Reporting</h3>
                      <p className="text-muted-foreground text-sm">
                        We adhere to all local, state, and federal standards, including GSA compliance when applicable. Our detailed reporting ensures transparency and accountability in all cleaning operations.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Compliant & Accountable →
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Our Government Facility Cleaning Checklist */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  Our Government Facility Cleaning Checklist
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Building className="w-6 h-6" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Public Lobbies & Offices</h3>
                      <p className="text-muted-foreground text-sm">
                        Maintaining a professional public image with thorough cleaning of reception areas, waiting rooms, and administrative offices that represent your government services.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Scale className="w-6 h-6" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Secure Areas & Courtrooms</h3>
                      <p className="text-muted-foreground text-sm">
                        Specialized protocols for cleaning sensitive or restricted areas including courtrooms, secure offices, and confidential spaces with appropriate security measures.
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
                        High-traffic sanitation and maintenance of common areas, break rooms, and restroom facilities to ensure a clean, healthy environment for staff and visitors.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Our Commitment to Serving the Las Vegas Community */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-12">
                  Our Commitment to Serving the Las Vegas Community
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-4xl font-bold text-primary mb-2">100%</div>
                    <h3 className="text-lg font-semibold mb-2">Security Cleared Staff</h3>
                    <p className="text-muted-foreground text-sm">
                      Every team member undergoes comprehensive background checks and security clearances
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Building className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-4xl font-bold text-primary mb-2">50+</div>
                    <h3 className="text-lg font-semibold mb-2">Public Facilities Maintained</h3>
                    <p className="text-muted-foreground text-sm">
                      Trusted by Las Vegas area government facilities for secure, professional cleaning
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-4xl font-bold text-primary mb-2">10+</div>
                    <h3 className="text-lg font-semibold mb-2">Years of Compliant Service</h3>
                    <p className="text-muted-foreground text-sm">
                      Track record of successful government facility cleanings that meet all regulatory requirements
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
                            Professional government facility cleaning services
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
                              Schedule Your {neighborhood.name} Government Facility Cleaning
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

          {/* Other Specialized Commercial Cleaning in Las Vegas */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  Other Specialized Commercial Cleaning in Las Vegas
                </h2>
                <p className="text-xl text-muted-foreground mb-12">
                  Beyond government facilities, we offer specialized commercial cleaning services to meet all your Las Vegas facility needs.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <Link to="/las-vegas/medical-office-cleaning/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors mb-4">
                        <User className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Medical Office Cleaning Services
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Specialized cleaning for healthcare facilities, medical offices, and clinical environments.
                      </p>
                    </div>
                  </Link>
                  <Link to="/las-vegas/data-center-cleaning/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors mb-4">
                        <Database className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Data Center Cleaning Services
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Critical environment cleaning for server rooms, data centers, and IT facilities.
                      </p>
                    </div>
                  </Link>
                  <Link to="/las-vegas/school-cleaning/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors mb-4">
                        <GraduationCap className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        School Cleaning Services
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Educational facility cleaning for schools, universities, and learning environments.
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
                      <h3 className="text-lg font-semibold">What makes your government facility cleaning service different?</h3>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <p className="text-muted-foreground">
                        We specialize in government facility cleaning with security-cleared personnel, strict confidentiality protocols, and compliance with all local, state, and federal standards. Our team undergoes rigorous background checks and understands the unique security requirements of government environments.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2" className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <h3 className="text-lg font-semibold">How do you handle scheduling around government facility operations?</h3>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <p className="text-muted-foreground">
                        We work closely with your facilities staff to schedule cleaning during off-hours, maintenance windows, or when public access is limited. We can also provide emergency cleaning services for critical situations or special events. Our flexible approach ensures minimal disruption to your government operations.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3" className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <h3 className="text-lg font-semibold">What areas of government facilities do you clean?</h3>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <p className="text-muted-foreground">
                        We clean all areas including public lobbies, offices, secure areas, courtrooms, common spaces, restrooms, and specialized government zones. We use appropriate security protocols and confidentiality measures for each area to ensure safety and discretion while protecting sensitive information.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-4" className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <h3 className="text-lg font-semibold">Are your technicians trained for government facility environments?</h3>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <p className="text-muted-foreground">
                        Yes, all our technicians are security-cleared, background-checked, bonded, and insured. They receive specialized training in government cleaning protocols, confidentiality requirements, and security standards. We understand the unique challenges of government environments and maintain strict security protocols to protect your operations and sensitive information.
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
                  Ready to Secure Your Government Facility?
                </h2>
                <p className="text-xl mb-8 opacity-90">
                  Join the Las Vegas government facilities that trust Red Rock Cleans for secure, professional cleaning services that ensure optimal public service performance and confidentiality.
                </p>
                <Button size="lg" variant="secondary" className="h-14 text-lg px-8" asChild>
                  <Link to="/commercial-quote?location=las-vegas">
                    <Calendar className="w-5 h-5 mr-2" />
                    Schedule Your Government Facility Cleaning Today
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
                  alt="The clean and secure lobby of a government building in Las Vegas after cleaning by Red Rock Cleans"
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

export default GovernmentFacilityCleaningLasVegasPage;

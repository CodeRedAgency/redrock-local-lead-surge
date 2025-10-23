import { OahuNavigation } from "@/components/OahuNavigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Microchip, Award, Clock, Database, Activity, Shield, HardHat, Server, Droplets, CheckCircle, Calendar, DollarSign, Users, Sparkles, Heart, Phone, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';

const neighborhoods = [
  {
    id: "aiea",
    name: "Aiea",
    description: "Protect your Aiea data center's critical infrastructure with our specialized cleaning services designed for precision, compliance, and operational reliability in Oahu's unique climate.",
    faq: [
      {
        question: "Do you understand the critical requirements for Aiea data center environments?",
        answer: "Absolutely. Our team is trained in ISO 14644-1 standards and understands the critical nature of maintaining clean, contaminant-free environments for data centers in Oahu's humid climate."
      },
      {
        question: "Can you work around Aiea data center operational schedules?",
        answer: "Yes, we schedule our cleaning services around your critical operations, maintenance windows, and peak usage times to minimize any disruption to your Aiea facility."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our Aiea data center with exceptional precision. Their understanding of critical infrastructure requirements and Oahu's environmental challenges is outstanding.",
      author: "IT Director, Aiea Technology Center"
    }
  },
  {
    id: "ewa-beach",
    name: "Ewa Beach",
    description: "Professional data center cleaning services for Ewa Beach facilities who demand the highest standards of cleanliness and operational reliability in coastal environments.",
    faq: [
      {
        question: "How do you handle salt air contamination in Ewa Beach data centers?",
        answer: "We use specialized cleaning protocols to address salt air contamination, including anti-corrosive cleaning solutions and thorough environmental monitoring for Ewa Beach facilities."
      },
      {
        question: "Do you provide flexible scheduling for Ewa Beach data centers?",
        answer: "Yes, we work around your operational schedules, maintenance windows, and can provide emergency cleaning services when needed for your Ewa Beach facility."
      }
    ],
    testimonial: {
      text: "Our Ewa Beach data center has never been cleaner. Red Rock Cleans understands the unique challenges of coastal data center environments and provides excellent service.",
      author: "Facilities Manager, Ewa Beach Data Solutions"
    }
  },
  {
    id: "hawaii-kai",
    name: "Hawaii Kai",
    description: "Specialized data center cleaning services for Hawaii Kai facilities, ensuring optimal performance and compliance with industry standards while protecting critical infrastructure.",
    faq: [
      {
        question: "What cleaning standards do you follow for Hawaii Kai data centers?",
        answer: "We follow ISO 14644-1 cleanroom standards and industry best practices, with special attention to Hawaii Kai's environmental conditions and humidity control requirements."
      },
      {
        question: "Can you clean raised floors and sub-floors in Hawaii Kai data centers?",
        answer: "Yes, we provide comprehensive cleaning of raised floors, sub-floors, and all infrastructure areas critical to maintaining optimal airflow and cleanliness in Hawaii Kai facilities."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provides exceptional data center cleaning for our Hawaii Kai facility. Their attention to detail and compliance standards is exactly what we need.",
      author: "Operations Manager, Hawaii Kai Data Center"
    }
  },
  {
    id: "honolulu",
    name: "Honolulu",
    description: "Professional data center cleaning services for Honolulu's critical infrastructure, ensuring maximum uptime and compliance with industry standards in the heart of Oahu's business district.",
    faq: [
      {
        question: "Do you service large-scale Honolulu data centers?",
        answer: "Yes, we have experience with large-scale Honolulu data centers and can handle facilities of any size, from small server rooms to enterprise-level data centers."
      },
      {
        question: "How do you ensure minimal downtime during Honolulu data center cleaning?",
        answer: "We work closely with your Honolulu IT team to schedule cleaning during maintenance windows and use non-disruptive cleaning methods to minimize operational impact."
      }
    ],
    testimonial: {
      text: "The data center cleaning service for our Honolulu facility is professional and thorough. Red Rock Cleans understands the critical nature of our operations and delivers excellent results.",
      author: "Data Center Manager, Downtown Honolulu"
    }
  },
  {
    id: "kailua",
    name: "Kailua",
    description: "Specialized data center cleaning services for Kailua facilities, providing precision cleaning that protects critical infrastructure while maintaining operational excellence.",
    faq: [
      {
        question: "Do you use anti-static cleaning methods for Kailua data centers?",
        answer: "Yes, we use specialized anti-static cleaning products and methods to protect sensitive electronic equipment in your Kailua data center from static discharge damage."
      },
      {
        question: "Can you handle post-construction cleaning for new Kailua data centers?",
        answer: "Absolutely. We provide comprehensive post-construction cleaning services to prepare new Kailua data centers for operation, including debris removal and thorough sanitization."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our Kailua data center beautifully. Their specialized approach and attention to equipment safety is exactly what we needed.",
      author: "IT Supervisor, Kailua Technology Center"
    }
  },
  {
    id: "kapolei",
    name: "Kapolei",
    description: "Professional data center cleaning services for Kapolei facilities, ensuring optimal performance and compliance while protecting critical infrastructure in Oahu's growing technology sector.",
    faq: [
      {
        question: "Do you provide environmental monitoring during Kapolei data center cleaning?",
        answer: "Yes, we monitor temperature, humidity, and particulate levels during cleaning to ensure optimal conditions are maintained for your Kapolei data center equipment."
      },
      {
        question: "Can you clean server racks and equipment in Kapolei data centers?",
        answer: "Yes, we provide detailed cleaning of server racks, equipment exteriors, cable management systems, and all critical infrastructure in your Kapolei facility."
      }
    ],
    testimonial: {
      text: "The data center cleaning service for our Kapolei facility is thorough and professional. Red Rock Cleans respects our operational requirements and delivers consistent quality.",
      author: "Facilities Director, Kapolei Data Solutions"
    }
  },
  {
    id: "makakilo",
    name: "Makakilo",
    description: "Specialized data center cleaning services for Makakilo facilities, providing precision cleaning that ensures maximum uptime and protects critical infrastructure investments.",
    faq: [
      {
        question: "Do you understand the unique requirements of Makakilo data center environments?",
        answer: "Yes, we understand the specific requirements of Makakilo data center environments and tailor our cleaning protocols to address local environmental factors and operational needs."
      },
      {
        question: "Can you provide emergency data center cleaning services in Makakilo?",
        answer: "Yes, we offer emergency cleaning services for Makakilo data centers when critical situations arise, with rapid response times to address contamination or equipment issues."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provides excellent data center cleaning for our Makakilo facility. Their understanding of critical infrastructure requirements is outstanding.",
      author: "Operations Director, Makakilo Data Center"
    }
  },
  {
    id: "mililani",
    name: "Mililani",
    description: "Professional data center cleaning services for Mililani facilities, ensuring optimal performance and compliance with industry standards while maintaining operational excellence.",
    faq: [
      {
        question: "Do you follow ISO 14644-1 standards for Mililani data center cleaning?",
        answer: "Yes, we strictly adhere to ISO 14644-1 cleanroom standards and other relevant industry protocols for all Mililani data center cleaning services."
      },
      {
        question: "Can you work around Mililani data center maintenance schedules?",
        answer: "Absolutely. We coordinate with your Mililani IT and facilities teams to schedule cleaning during planned maintenance windows and operational downtime periods."
      }
    ],
    testimonial: {
      text: "Our Mililani data center has never been cleaner. Red Rock Cleans provides professional service that maintains our critical infrastructure to the highest standards.",
      author: "Data Center Manager, Mililani Technology Center"
    }
  },
  {
    id: "pearl-city",
    name: "Pearl City",
    description: "Specialized data center cleaning services for Pearl City facilities, providing precision cleaning that protects critical infrastructure while ensuring maximum operational reliability.",
    faq: [
      {
        question: "Do you clean sub-floor areas in Pearl City data centers?",
        answer: "Yes, we provide comprehensive cleaning of sub-floor areas, including cable management systems, under-floor airflow spaces, and all infrastructure components in Pearl City facilities."
      },
      {
        question: "Can you handle high-security Pearl City data centers?",
        answer: "Yes, we can accommodate security requirements for high-security Pearl City data centers, including background-checked personnel and security clearance protocols."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our Pearl City data center with exceptional precision. Their attention to detail and security protocols is exactly what we need.",
      author: "Security Manager, Pearl City Data Center"
    }
  },
  {
    id: "waialae",
    name: "Waialae",
    description: "Professional data center cleaning services for Waialae facilities, ensuring optimal performance and compliance while protecting critical infrastructure in Oahu's business community.",
    faq: [
      {
        question: "Do you provide detailed cleaning reports for Waialae data centers?",
        answer: "Yes, we provide comprehensive cleaning reports documenting all services performed, environmental conditions, and compliance verification for your Waialae data center."
      },
      {
        question: "Can you clean environmental surfaces in Waialae data centers?",
        answer: "Yes, we clean all environmental surfaces including walls, ceilings, access doors, and air handling equipment using appropriate cleaning solutions for Waialae facilities."
      }
    ],
    testimonial: {
      text: "The data center cleaning service for our Waialae facility is professional and thorough. Red Rock Cleans understands our compliance requirements and delivers excellent results.",
      author: "Compliance Officer, Waialae Data Solutions"
    }
  },
  {
    id: "waikiki",
    name: "Waikiki",
    description: "Specialized data center cleaning services for Waikiki facilities, providing precision cleaning that ensures maximum uptime and protects critical infrastructure in Oahu's tourism and business hub.",
    faq: [
      {
        question: "Do you understand the high-traffic requirements of Waikiki data centers?",
        answer: "Yes, we understand the unique requirements of Waikiki data centers serving high-traffic tourism and business operations, and tailor our services accordingly."
      },
      {
        question: "Can you provide flexible scheduling for Waikiki data centers?",
        answer: "Yes, we offer flexible scheduling options for Waikiki data centers, including after-hours and weekend cleaning to minimize disruption to critical operations."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provides excellent data center cleaning for our Waikiki facility. Their flexible scheduling and understanding of our operational needs is outstanding.",
      author: "Operations Manager, Waikiki Data Center"
    }
  },
  {
    id: "waimanalo",
    name: "Waimanalo",
    description: "Professional data center cleaning services for Waimanalo facilities, ensuring optimal performance and compliance while protecting critical infrastructure in Oahu's eastern region.",
    faq: [
      {
        question: "Do you provide comprehensive data center cleaning for Waimanalo facilities?",
        answer: "Yes, we provide comprehensive cleaning services for Waimanalo data centers, including all critical infrastructure areas and environmental surfaces."
      },
      {
        question: "Can you handle humidity control during Waimanalo data center cleaning?",
        answer: "Yes, we monitor and work within your humidity control parameters during cleaning to ensure optimal environmental conditions are maintained in your Waimanalo facility."
      }
    ],
    testimonial: {
      text: "Our Waimanalo data center has never been cleaner. Red Rock Cleans provides professional service that maintains our critical infrastructure to the highest standards.",
      author: "Facilities Manager, Waimanalo Data Center"
    }
  },
  {
    id: "waipahu",
    name: "Waipahu",
    description: "Specialized data center cleaning services for Waipahu facilities, providing precision cleaning that protects critical infrastructure while ensuring maximum operational reliability.",
    faq: [
      {
        question: "Do you provide post-construction cleaning for new Waipahu data centers?",
        answer: "Yes, we provide comprehensive post-construction cleaning services to prepare new Waipahu data centers for operation, including thorough debris removal and sanitization."
      },
      {
        question: "Can you clean server equipment exteriors in Waipahu data centers?",
        answer: "Yes, we provide detailed cleaning of server equipment exteriors, cable management systems, and all visible infrastructure using anti-static and equipment-safe cleaning methods."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our Waipahu data center with exceptional precision. Their specialized approach and attention to equipment safety is outstanding.",
      author: "IT Director, Waipahu Technology Center"
    }
  }
];

const DataCenterCleaningOahuPage = () => {
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
        <title>{t(`commercialServices.oahu.dataCenter.title`, { defaultValue: "Data Center Cleaning Oahu | Red Rock Cleans" })}</title>
        <meta name="description" content={t(`commercialServices.oahu.dataCenter.description`, { defaultValue: "Data center cleaning in Oahu. Protect critical infrastructure with specialized cleaning in Honolulu. Hawaiian expertise!" })} />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <OahuNavigation loginUrl="https://customer-portal.maidily.com/red-rock-cleans-oahu/sign-in" bookingUrl="/commercial-quote?location=oahu" />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative py-24 md:py-32 overflow-hidden">
            <div className="absolute inset-0">
              <img 
                src="/src/assets/hero-commercial.jpg" 
                alt="Professional data center cleaning service in a pristine Oahu server room with raised floors and critical infrastructure"
                className="w-full h-full object-cover scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                  Specialized Data Center Cleaning on Oahu
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                  Protect your island's critical digital infrastructure with our specialized data center cleaning services. We ensure maximum uptime and compliance while protecting your hardware from humidity, dust, and salt air contamination across Oahu.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="h-14 text-lg px-8" asChild>
                    <a href="tel:+18089098801">
                      <Phone className="w-5 h-5 mr-2" />
                      Call (808) 909-8801
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="h-14 text-lg px-8" asChild>
                    <Link to="/commercial-quote?location=oahu">
                      <Home className="w-5 h-5 mr-2" />
                      Get Free Quote
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Protecting Your Island's Critical Infrastructure */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  Protecting Your Island's Critical Infrastructure
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <Card className="group hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                        <Microchip className="w-8 h-8 text-primary" />
                      </div>
                      <CardTitle>Precision Contamination Control</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed">
                        Our specialized methods prevent dust, salt air, and static from compromising your hardware. We use anti-static cleaning protocols and environmental monitoring to protect sensitive equipment in Oahu's unique climate conditions.
                      </CardDescription>
                    </CardContent>
                  </Card>

                  <Card className="group hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                        <Award className="w-8 h-8 text-primary" />
                      </div>
                      <CardTitle>ISO & Industry Compliance</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed">
                        We strictly adhere to critical standards like ISO 14644-1 for cleanroom environments, ensuring your Oahu data center meets all regulatory requirements and industry best practices for critical infrastructure.
                      </CardDescription>
                    </CardContent>
                  </Card>

                  <Card className="group hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                        <Clock className="w-8 h-8 text-primary" />
                      </div>
                      <CardTitle>Minimizing Downtime Risk</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed">
                        Our proactive cleaning approach prevents overheating and system failures in Oahu's unique climate. We work around your operational schedules and maintenance windows to ensure continuous uptime.
                      </CardDescription>
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
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <Card className="group hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                        <Server className="w-8 h-8 text-primary" />
                      </div>
                      <CardTitle>Raised Floor & Sub-Floor Cleaning</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed">
                        Specialized vacuuming and cleaning beneath raised floors to remove accumulated dust, debris, and contaminants that can affect airflow and equipment performance.
                      </CardDescription>
                    </CardContent>
                  </Card>

                  <Card className="group hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                        <Database className="w-8 h-8 text-primary" />
                      </div>
                      <CardTitle>Server Rack & Equipment Detailing</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed">
                        Anti-static cleaning of server exteriors, cables, and equipment surfaces using specialized tools and cleaning solutions that protect sensitive electronic components.
                      </CardDescription>
                    </CardContent>
                  </Card>

                  <Card className="group hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                        <Droplets className="w-8 h-8 text-primary" />
                      </div>
                      <CardTitle>Environmental Surface Disinfection</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed">
                        Cleaning walls, ceilings, and access doors with appropriate solutions that maintain cleanliness standards while being safe for electronic equipment and personnel.
                      </CardDescription>
                    </CardContent>
                  </Card>

                  <Card className="group hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                        <HardHat className="w-8 h-8 text-primary" />
                      </div>
                      <CardTitle>Post-Construction & Remediation</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed">
                        Comprehensive cleaning services for new data center builds on Oahu, including construction debris removal, thorough sanitization, and preparation for equipment installation.
                      </CardDescription>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Our Commitment to Oahu's Digital Backbone */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  Our Commitment to Oahu's Digital Backbone
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center p-6 bg-muted/30 rounded-lg">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Database className="w-10 h-10 text-primary" />
                    </div>
                    <div className="text-4xl font-bold text-primary mb-2">50+</div>
                    <h3 className="text-xl font-semibold mb-3">Data Centers Secured on Oahu</h3>
                    <p className="text-muted-foreground">
                      We've successfully maintained critical infrastructure for data centers across the island, ensuring optimal performance and compliance.
                    </p>
                  </div>
                  <div className="text-center p-6 bg-muted/30 rounded-lg">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Activity className="w-10 h-10 text-primary" />
                    </div>
                    <div className="text-4xl font-bold text-primary mb-2">99.99%</div>
                    <h3 className="text-xl font-semibold mb-3">Uptime Percentage Maintained</h3>
                    <p className="text-muted-foreground">
                      Our proactive cleaning protocols help maintain exceptional uptime for Oahu's critical data center infrastructure.
                    </p>
                  </div>
                  <div className="text-center p-6 bg-muted/30 rounded-lg">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-10 h-10 text-primary" />
                    </div>
                    <div className="text-4xl font-bold text-primary mb-2">100%</div>
                    <h3 className="text-xl font-semibold mb-3">Certified Cleanroom Specialists</h3>
                    <p className="text-muted-foreground">
                      Our team is fully certified and trained in cleanroom protocols and critical environment maintenance standards.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Areas We Serve on Oahu */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  Areas We Serve on Oahu
                </h2>
                <Accordion type="single" collapsible value={openItem} onValueChange={setOpenItem} className="space-y-4">
                  {neighborhoods.map((neighborhood) => (
                    <AccordionItem 
                      key={neighborhood.id} 
                      value={neighborhood.id} 
                      id={neighborhood.id}
                      className="border rounded-lg px-6 bg-background"
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
                            <Link to="/commercial-quote?location=oahu">
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

          {/* Other Commercial Cleaning Services on Oahu */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  Other Commercial Cleaning Services on Oahu
                </h2>
                <p className="text-xl text-muted-foreground mb-12">
                  Beyond data center cleaning, we offer specialized commercial cleaning services to meet all your Oahu business needs.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <Link to="/oahu/industrial-cleaning/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Industrial Cleaning Services
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Specialized cleaning for industrial facilities including manufacturing plants and production environments.
                      </p>
                    </div>
                  </Link>
                  <Link to="/oahu/government-facility-cleaning/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Government Facility Cleaning
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Professional cleaning for government buildings and facilities with security clearance requirements.
                      </p>
                    </div>
                  </Link>
                  <Link to="/medical-office-cleaning" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Medical Office Cleaning
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Specialized cleaning for healthcare facilities with medical-grade sanitization and compliance.
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
                  <AccordionItem value="faq-1" className="border rounded-lg px-6 bg-background">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <h3 className="text-lg font-semibold">What is included in data center cleaning on Oahu?</h3>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground leading-relaxed">
                        Our data center cleaning service includes raised floor and sub-floor cleaning, server rack and equipment detailing, environmental surface disinfection, cable management cleaning, and comprehensive environmental monitoring to ensure optimal conditions for your critical infrastructure.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="faq-2" className="border rounded-lg px-6 bg-background">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <h3 className="text-lg font-semibold">How do you ensure compliance with data center cleaning standards?</h3>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground leading-relaxed">
                        We strictly follow ISO 14644-1 cleanroom standards and industry best practices. Our team is certified in cleanroom protocols, uses appropriate cleaning solutions, and provides detailed documentation of all cleaning activities to ensure full compliance with regulatory requirements.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="faq-3" className="border rounded-lg px-6 bg-background">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <h3 className="text-lg font-semibold">What is the cost of data center cleaning services on Oahu?</h3>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground leading-relaxed">
                        Data center cleaning costs vary based on facility size, complexity, frequency of service, and specific requirements. We offer competitive rates and can provide weekly, monthly, or on-demand service options. Contact us for a free, personalized quote for your Oahu data center.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="faq-4" className="border rounded-lg px-6 bg-background">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <h3 className="text-lg font-semibold">Can you work around our data center operational schedules?</h3>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground leading-relaxed">
                        Absolutely! We coordinate with your IT and facilities teams to schedule cleaning during maintenance windows, planned downtime, and off-peak hours. We use non-disruptive cleaning methods and can provide emergency cleaning services when critical situations arise.
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
                  Join Oahu data centers who trust Red Rock Cleans for specialized, compliant cleaning services that ensure maximum uptime and protect your critical digital infrastructure investments.
                </p>
                <Button size="lg" variant="secondary" className="h-14 text-lg px-8" asChild>
                  <Link to="/commercial-quote?location=oahu">
                    <Calendar className="w-5 h-5 mr-2" />
                    Schedule Your Data Center Cleaning Today
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

export default DataCenterCleaningOahuPage;

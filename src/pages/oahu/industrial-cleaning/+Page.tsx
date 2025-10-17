import { OahuNavigation } from "@/components/OahuNavigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Shield, Clock, Wrench, SprayCan, Building, Layers, CheckCircle, BarChart3, Factory, MapPin, Calendar, Phone, Award, Sparkles, Users, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import CountUp from "react-countup";

const neighborhoods = [
  {
    id: "aiea",
    name: "Aiea",
    description: "Aiea industrial facilities and manufacturing plants trust our professional industrial cleaning services for comprehensive facility maintenance that ensures safety, OSHA compliance, and optimal operational uptime in a competitive industrial environment.",
    faq: [
      {
        question: "Do you provide OSHA compliant cleaning for Aiea industrial facilities?",
        answer: "Yes, all our industrial cleaning services strictly adhere to OSHA safety regulations. Our team is trained in industrial safety protocols and uses specialized equipment to ensure complete compliance and worker protection."
      },
      {
        question: "What if we're not satisfied with industrial cleaning in Aiea?",
        answer: "We guarantee satisfaction and will return to address any concerns at no additional charge, understanding the critical nature of industrial operations and the importance of maintaining clean, safe facilities."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Aiea manufacturing facility spotless and OSHA compliant for over two years. Their attention to safety and detail is outstanding!",
      author: "Plant Manager, Aiea Manufacturing"
    }
  },
  {
    id: "ewa-beach",
    name: "Ewa Beach",
    description: "Ewa Beach industrial facilities rely on our professional industrial cleaning services for consistent, heavy-duty facility maintenance that keeps their manufacturing operations running safely and efficiently with minimal downtime.",
    faq: [
      {
        question: "How often do Ewa Beach industrial facilities schedule cleaning?",
        answer: "Most Ewa Beach industrial facilities prefer weekly or bi-weekly cleaning schedules, though we offer flexible scheduling based on your production requirements and operational needs."
      },
      {
        question: "Do you provide emergency cleaning services in Ewa Beach?",
        answer: "Yes, we offer emergency industrial cleaning services for unexpected situations, safety inspections, and urgent facility maintenance needs with rapid response times."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Ewa Beach industrial facility to perfection. Their professionalism and understanding of industrial safety requirements are outstanding.",
      author: "Operations Director, Ewa Beach Manufacturing"
    }
  },
  {
    id: "hawaii-kai",
    name: "Hawaii Kai",
    description: "Hawaii Kai industrial facilities trust our professional industrial cleaning services for comprehensive, heavy-duty facility maintenance that ensures optimal safety, compliance, and operational efficiency in the competitive industrial market.",
    faq: [
      {
        question: "Do you service high-tech manufacturing facilities in Hawaii Kai?",
        answer: "Yes, we have extensive experience cleaning sophisticated manufacturing facilities, including those with sensitive equipment, clean rooms, and high-tech production environments."
      },
      {
        question: "How do you ensure equipment safety in Hawaii Kai industrial facilities?",
        answer: "We use only industrial-safe cleaning products and follow manufacturer guidelines to ensure equipment longevity while maintaining the highest standards of cleanliness and safety."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Hawaii Kai manufacturing plant spotless and OSHA compliant for over two years. Highly recommend their professional industrial cleaning service!",
      author: "Facility Manager, Hawaii Kai Manufacturing"
    }
  },
  {
    id: "honolulu",
    name: "Honolulu",
    description: "Honolulu industrial facilities and manufacturing plants enjoy consistent, professional industrial cleaning services that maintain their facilities clean and operating at optimal safety and efficiency standards year-round.",
    faq: [
      {
        question: "Do you work around Honolulu industrial facility schedules?",
        answer: "Yes, we can schedule cleanings around your production hours, maintenance windows, and operational requirements to minimize disruption to your manufacturing operations."
      },
      {
        question: "What if we're not satisfied with industrial cleaning in Honolulu?",
        answer: "We guarantee satisfaction and will return to address any concerns at no additional charge, understanding the critical nature of industrial operations and facility safety."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Honolulu industrial facility to perfection. Their professionalism and understanding of industrial safety requirements are outstanding.",
      author: "Operations Director, Honolulu Manufacturing"
    }
  },
  {
    id: "kailua",
    name: "Kailua",
    description: "Kailua industrial facilities trust our professional industrial cleaning services for comprehensive, heavy-duty facility maintenance that ensures optimal safety, compliance, and operational efficiency in the competitive industrial market.",
    faq: [
      {
        question: "How often do Kailua industrial facilities schedule cleaning?",
        answer: "Most Kailua industrial facilities prefer weekly or bi-weekly cleaning schedules, though we offer flexible scheduling based on your production requirements and operational needs."
      },
      {
        question: "Do you provide emergency cleaning services in Kailua?",
        answer: "Yes, we offer emergency industrial cleaning services for unexpected situations, safety inspections, and urgent facility maintenance needs with rapid response times."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Kailua manufacturing facility spotless and OSHA compliant for over two years. Their attention to safety and detail is outstanding!",
      author: "Plant Manager, Kailua Manufacturing"
    }
  },
  {
    id: "kapolei",
    name: "Kapolei",
    description: "Kapolei industrial facilities rely on our professional industrial cleaning services for consistent, heavy-duty facility maintenance that keeps their manufacturing operations running safely and efficiently with minimal downtime.",
    faq: [
      {
        question: "Do you service high-tech manufacturing facilities in Kapolei?",
        answer: "Yes, we have extensive experience cleaning sophisticated manufacturing facilities, including those with sensitive equipment, clean rooms, and high-tech production environments."
      },
      {
        question: "How do you ensure equipment safety in Kapolei industrial facilities?",
        answer: "We use only industrial-safe cleaning products and follow manufacturer guidelines to ensure equipment longevity while maintaining the highest standards of cleanliness and safety."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Kapolei industrial facility to perfection. Their professionalism and understanding of industrial safety requirements are outstanding.",
      author: "Operations Director, Kapolei Manufacturing"
    }
  },
  {
    id: "makakilo",
    name: "Makakilo",
    description: "Makakilo industrial facilities trust our professional industrial cleaning services for comprehensive, heavy-duty facility maintenance that ensures optimal safety, compliance, and operational efficiency in the competitive industrial market.",
    faq: [
      {
        question: "Do you provide OSHA compliant cleaning for Makakilo industrial facilities?",
        answer: "Yes, all our industrial cleaning services strictly adhere to OSHA safety regulations. Our team is trained in industrial safety protocols and uses specialized equipment to ensure complete compliance and worker protection."
      },
      {
        question: "What if we're not satisfied with industrial cleaning in Makakilo?",
        answer: "We guarantee satisfaction and will return to address any concerns at no additional charge, understanding the critical nature of industrial operations and the importance of maintaining clean, safe facilities."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Makakilo manufacturing plant spotless and OSHA compliant for over two years. Highly recommend their professional industrial cleaning service!",
      author: "Facility Manager, Makakilo Manufacturing"
    }
  },
  {
    id: "mililani",
    name: "Mililani",
    description: "Mililani industrial facilities rely on our professional industrial cleaning services for consistent, heavy-duty facility maintenance that keeps their manufacturing operations running safely and efficiently with minimal downtime.",
    faq: [
      {
        question: "How often do Mililani industrial facilities schedule cleaning?",
        answer: "Most Mililani industrial facilities prefer weekly or bi-weekly cleaning schedules, though we offer flexible scheduling based on your production requirements and operational needs."
      },
      {
        question: "Do you provide emergency cleaning services in Mililani?",
        answer: "Yes, we offer emergency industrial cleaning services for unexpected situations, safety inspections, and urgent facility maintenance needs with rapid response times."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Mililani industrial facility to perfection. Their professionalism and understanding of industrial safety requirements are outstanding.",
      author: "Operations Director, Mililani Manufacturing"
    }
  },
  {
    id: "pearl-city",
    name: "Pearl City",
    description: "Pearl City industrial facilities trust our professional industrial cleaning services for comprehensive, heavy-duty facility maintenance that ensures optimal safety, compliance, and operational efficiency in the competitive industrial market.",
    faq: [
      {
        question: "Do you service high-tech manufacturing facilities in Pearl City?",
        answer: "Yes, we have extensive experience cleaning sophisticated manufacturing facilities, including those with sensitive equipment, clean rooms, and high-tech production environments."
      },
      {
        question: "How do you ensure equipment safety in Pearl City industrial facilities?",
        answer: "We use only industrial-safe cleaning products and follow manufacturer guidelines to ensure equipment longevity while maintaining the highest standards of cleanliness and safety."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Pearl City manufacturing facility spotless and OSHA compliant for over two years. Their attention to safety and detail is outstanding!",
      author: "Plant Manager, Pearl City Manufacturing"
    }
  },
  {
    id: "waialae",
    name: "Waialae",
    description: "Waialae industrial facilities and manufacturing plants enjoy consistent, professional industrial cleaning services that maintain their facilities clean and operating at optimal safety and efficiency standards year-round.",
    faq: [
      {
        question: "Do you work around Waialae industrial facility schedules?",
        answer: "Yes, we can schedule cleanings around your production hours, maintenance windows, and operational requirements to minimize disruption to your manufacturing operations."
      },
      {
        question: "What if we're not satisfied with industrial cleaning in Waialae?",
        answer: "We guarantee satisfaction and will return to address any concerns at no additional charge, understanding the critical nature of industrial operations and facility safety."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Waialae industrial facility to perfection. Their professionalism and understanding of industrial safety requirements are outstanding.",
      author: "Operations Director, Waialae Manufacturing"
    }
  },
  {
    id: "waikiki",
    name: "Waikiki",
    description: "Waikiki industrial facilities trust our professional industrial cleaning services for comprehensive, heavy-duty facility maintenance that ensures optimal safety, compliance, and operational efficiency in the competitive industrial market.",
    faq: [
      {
        question: "How often do Waikiki industrial facilities schedule cleaning?",
        answer: "Most Waikiki industrial facilities prefer weekly or bi-weekly cleaning schedules, though we offer flexible scheduling based on your production requirements and operational needs."
      },
      {
        question: "Do you provide emergency cleaning services in Waikiki?",
        answer: "Yes, we offer emergency industrial cleaning services for unexpected situations, safety inspections, and urgent facility maintenance needs with rapid response times."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Waikiki manufacturing facility spotless and OSHA compliant for over two years. Highly recommend their professional industrial cleaning service!",
      author: "Facility Manager, Waikiki Manufacturing"
    }
  },
  {
    id: "waimanalo",
    name: "Waimanalo",
    description: "Waimanalo industrial facilities rely on our professional industrial cleaning services for consistent, heavy-duty facility maintenance that keeps their manufacturing operations running safely and efficiently with minimal downtime.",
    faq: [
      {
        question: "Do you service high-tech manufacturing facilities in Waimanalo?",
        answer: "Yes, we have extensive experience cleaning sophisticated manufacturing facilities, including those with sensitive equipment, clean rooms, and high-tech production environments."
      },
      {
        question: "How do you ensure equipment safety in Waimanalo industrial facilities?",
        answer: "We use only industrial-safe cleaning products and follow manufacturer guidelines to ensure equipment longevity while maintaining the highest standards of cleanliness and safety."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Waimanalo industrial facility to perfection. Their professionalism and understanding of industrial safety requirements are outstanding.",
      author: "Operations Director, Waimanalo Manufacturing"
    }
  },
  {
    id: "waipahu",
    name: "Waipahu",
    description: "Waipahu industrial facilities trust our professional industrial cleaning services for comprehensive, heavy-duty facility maintenance that ensures optimal safety, compliance, and operational efficiency in the competitive industrial market.",
    faq: [
      {
        question: "Do you provide OSHA compliant cleaning for Waipahu industrial facilities?",
        answer: "Yes, all our industrial cleaning services strictly adhere to OSHA safety regulations. Our team is trained in industrial safety protocols and uses specialized equipment to ensure complete compliance and worker protection."
      },
      {
        question: "What if we're not satisfied with industrial cleaning in Waipahu?",
        answer: "We guarantee satisfaction and will return to address any concerns at no additional charge, understanding the critical nature of industrial operations and the importance of maintaining clean, safe facilities."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Waipahu manufacturing plant spotless and OSHA compliant for over two years. Their attention to safety and detail is outstanding!",
      author: "Plant Manager, Waipahu Manufacturing"
    }
  }
];

const IndustrialCleaningOahuPage = () => {
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
        <title>Industrial Cleaning Services Oahu | Red Rock Cleans</title>
        <meta name="description" content="Heavy-duty industrial cleaning services on Oahu. Red Rock Cleans provides OSHA compliant cleaning for manufacturing plants, equipment, and industrial facilities in Honolulu and Kapolei." />
        <meta name="keywords" content="industrial cleaning near me, heavy duty cleaning Oahu, industrial cleaning Honolulu, industrial cleaners Kapolei, industrial equipment cleaning Oahu, manufacturing facility cleaning Oahu, plant deep cleaning Honolulu, OSHA compliant cleaning services Oahu, industrial cleaning cost Oahu, industrial cleaning rates Honolulu, what is industrial cleaning Oahu, hire industrial cleaners in Oahu" />
        <link rel="canonical" href="https://redrockcleans.com/oahu/industrial-cleaning" />
      </Helmet>
      
      <OahuNavigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/src/assets/hero-commercial.jpg" 
              alt="Professional industrial cleaning service in a manufacturing facility on Oahu"
              className="w-full h-full object-cover scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                Heavy-Duty Industrial Cleaning Services on Oahu
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Our specialized industrial cleaning services ensure safety, meet OSHA standards, and maximize operational uptime for facilities across Oahu. From heavy machinery degreasing to structural cleaning, we provide the comprehensive industrial maintenance your facility needs to operate at peak efficiency.
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

        {/* Prioritizing Safety, Compliance, and Uptime Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Prioritizing Safety, Compliance, and Uptime
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Ensuring OSHA Compliance</h3>
                      <p className="text-muted-foreground">
                        Our rigorous adherence to safety regulations protects your workforce and ensures complete compliance. We follow all OSHA guidelines and maintain detailed safety protocols to keep your facility secure and legally compliant.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Maximizing Operational Uptime</h3>
                      <p className="text-muted-foreground">
                        Clean machinery and environments prevent costly breakdowns and delays. Our systematic cleaning approach ensures your production lines run smoothly, reducing downtime and maximizing your facility's operational efficiency.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Wrench className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Protecting Heavy Machinery</h3>
                      <p className="text-muted-foreground">
                        Our specialized techniques clean and degrease valuable equipment, extending its lifespan. We use industrial-grade cleaning solutions and follow manufacturer guidelines to ensure your machinery operates at peak performance.
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
                <Card className="hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <SprayCan className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Equipment & Machinery Degreasing</h3>
                      <p className="text-muted-foreground">
                        Removing tough grease and grime from production machinery with specialized industrial cleaning solutions. We safely degrease all equipment while protecting sensitive components and ensuring optimal performance.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Building className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">High-Surface & Structural Cleaning</h3>
                      <p className="text-muted-foreground">
                        Cleaning ceilings, support beams, pipes, and other hard-to-reach areas with specialized equipment. We ensure complete coverage of all structural elements to maintain a clean, safe industrial environment.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Layers className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Floor Decontamination & Restoration</h3>
                      <p className="text-muted-foreground">
                        Heavy-duty scrubbing, stripping, and sealing of industrial flooring to restore and protect surfaces. We handle concrete, epoxy, and specialized industrial flooring with professional-grade equipment and techniques.
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
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    <CountUp end={500} duration={2} />+
                  </div>
                  <h3 className="text-lg font-semibold mb-2">OSHA Standards Met</h3>
                  <p className="text-muted-foreground text-sm">
                    Oahu industrial facilities trust our specialized cleaning services
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    <CountUp end={1000} duration={2} />+
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Heavy Machines Serviced</h3>
                  <p className="text-muted-foreground text-sm">
                    Industrial equipment maintained across Oahu
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Factory className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    <CountUp end={75} duration={2} />+
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Industrial Sites Maintained</h3>
                  <p className="text-muted-foreground text-sm">
                    Manufacturing and industrial facilities across Oahu
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Areas We Serve on Oahu Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Areas We Serve on Oahu
              </h2>
              
              {/* Neighborhood Selector */}
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
                    <option value="">Select an Oahu Area</option>
                    {neighborhoods.map((neighborhood) => (
                      <option key={neighborhood.id} value={neighborhood.id}>
                        {neighborhood.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              
              <Accordion type="single" value={openAccordion} onValueChange={handleAccordionChange} className="space-y-4">
                {neighborhoods.map((neighborhood) => (
                  <AccordionItem key={neighborhood.id} value={neighborhood.id} id={neighborhood.id} className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <div>
                        <h3 className="text-lg font-semibold">{neighborhood.name}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{neighborhood.description}</p>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold mb-2">Local Industrial Cleaning Services</h4>
                          <p className="text-muted-foreground">
                            {neighborhood.description}
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-2">Frequently Asked Questions</h4>
                          <div className="space-y-2">
                            {neighborhood.faq.map((faq, index) => (
                              <div key={index}>
                                <p className="font-medium text-sm">{faq.question}</p>
                                <p className="text-muted-foreground text-sm">{faq.answer}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="bg-primary/5 p-4 rounded-lg">
                          <p className="italic text-sm mb-2">"{neighborhood.testimonial.text}"</p>
                          <p className="text-sm font-medium">- {neighborhood.testimonial.author}</p>
                        </div>
                        
                        <Button asChild className="w-full">
                          <Link to="/commercial-quote?location=oahu">
                            Get Industrial Cleaning Quote for {neighborhood.name}
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

        {/* Other Commercial Cleaning Services Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">
                Other Commercial Cleaning Services on Oahu
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <Factory className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Factory Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Specialized cleaning services for manufacturing facilities and production plants
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/oahu/factory-cleaning">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <Building className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Warehouse Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Professional cleaning services for warehouses and distribution centers
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/oahu/warehouse-cleaning">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <Sparkles className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Post Construction Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Specialized cleaning after construction and renovation projects
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/oahu/post-construction-cleaning-services">Learn More</Link>
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
                <AccordionItem value="osha-compliance" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">How do you ensure OSHA compliance in industrial cleaning?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      We follow all OSHA guidelines and maintain detailed safety protocols. Our team is trained in industrial safety procedures and uses specialized equipment and cleaning solutions that meet OSHA standards. We provide comprehensive safety documentation and ensure all cleaning activities comply with workplace safety regulations.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="equipment-safety" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">Are your cleaning methods safe for industrial equipment?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Yes, we use only industrial-safe cleaning products and follow manufacturer guidelines to ensure equipment longevity. Our team is trained in proper equipment cleaning techniques and uses specialized tools and solutions that effectively clean without damaging sensitive machinery or components.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="scheduling" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">Can you work around our production schedules?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Yes, we can schedule cleanings around your production hours, maintenance windows, and operational requirements. We offer flexible scheduling including early morning, late night, and weekend cleaning to minimize disruption to your manufacturing operations and maximize uptime.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="specialized-cleaning" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">What specialized industrial cleaning services do you provide?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      We provide comprehensive industrial cleaning including equipment degreasing, high-surface cleaning, floor decontamination, structural cleaning, and specialized facility maintenance. Our services cover everything from heavy machinery cleaning to ceiling and pipe cleaning, ensuring your entire facility meets industrial standards.
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
              Ready to Elevate Your Industrial Facility's Cleanliness Standards?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join dozens of Oahu industrial facilities that trust Red Rock Cleans for their heavy-duty cleaning needs
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
              <Link to="/commercial-quote?location=oahu">Get Your Free Industrial Cleaning Quote</Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default IndustrialCleaningOahuPage;

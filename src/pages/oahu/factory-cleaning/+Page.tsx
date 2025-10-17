import { OahuNavigation } from "@/components/OahuNavigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HardHat, Cog, ClipboardCheck, Wrench, Droplets, Users, Clock, CheckCircle, MapPin, Calendar, Phone, Building, Factory, Zap, Shield, Award, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import CountUp from "react-countup";

const neighborhoods = [
  {
    id: "aiea",
    name: "Aiea",
    description: "Aiea factories and manufacturing facilities trust our professional factory cleaning service for comprehensive facility maintenance that ensures optimal production efficiency and worker safety.",
    faq: [
      {
        question: "Do you work around Aiea factory production schedules?",
        answer: "Yes, we can schedule cleanings around your production hours, maintenance windows, and operational requirements to minimize downtime and maximize efficiency."
      },
      {
        question: "What if we're not satisfied with factory cleaning in Aiea?",
        answer: "We guarantee satisfaction and will return to address any concerns at no additional charge, understanding the critical nature of your manufacturing operations."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Aiea manufacturing facility spotless and OSHA compliant for over two years. Highly recommend their professional industrial cleaning service!",
      author: "Plant Manager, Aiea Manufacturing"
    }
  },
  {
    id: "ewa-beach",
    name: "Ewa Beach",
    description: "Ewa Beach industrial facilities rely on our professional factory cleaning service for consistent facility maintenance that keeps their manufacturing operations running smoothly and safely.",
    faq: [
      {
        question: "How often do Ewa Beach factories schedule cleaning?",
        answer: "Most Ewa Beach factories prefer weekly or monthly cleaning schedules, though we offer flexible scheduling based on your production requirements and operational needs."
      },
      {
        question: "Do you provide emergency cleaning services in Ewa Beach?",
        answer: "Yes, we offer emergency cleaning services for unexpected situations, OSHA inspection preparation, and urgent facility maintenance needs."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Ewa Beach factory to perfection. Their professionalism and understanding of industrial hygiene requirements are outstanding.",
      author: "Operations Director, Ewa Beach Manufacturing"
    }
  },
  {
    id: "hawaii-kai",
    name: "Hawaii Kai",
    description: "Hawaii Kai manufacturing plants trust our professional factory cleaning service for comprehensive facility maintenance that ensures optimal production efficiency and worker safety.",
    faq: [
      {
        question: "Do you service high-end manufacturing facilities in Hawaii Kai?",
        answer: "Yes, we have extensive experience cleaning premium manufacturing facilities, including those with sophisticated equipment, clean rooms, and high-end production standards."
      },
      {
        question: "How do you ensure OSHA compliance in Hawaii Kai factories?",
        answer: "All our team members are trained in OSHA protocols, use industrial-grade cleaning products, and follow strict safety standards to protect your workers and business."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Hawaii Kai manufacturing plant spotless and OSHA compliant for over two years. Highly recommend their professional service!",
      author: "Plant Manager, Hawaii Kai Manufacturing"
    }
  },
  {
    id: "honolulu",
    name: "Honolulu",
    description: "Honolulu factories and industrial facilities enjoy consistent, professional factory cleaning services that maintain their facilities clean and operating at optimal safety standards year-round.",
    faq: [
      {
        question: "Do you work around Honolulu factory production schedules?",
        answer: "Yes, we can schedule cleanings around your production hours, maintenance windows, and operational requirements to minimize downtime and maximize efficiency."
      },
      {
        question: "What if we're not satisfied with factory cleaning in Honolulu?",
        answer: "We guarantee satisfaction and will return to address any concerns at no additional charge, understanding the critical nature of your manufacturing operations."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Honolulu factory to perfection. Their professionalism and understanding of industrial hygiene requirements are outstanding.",
      author: "Operations Director, Honolulu Manufacturing"
    }
  },
  {
    id: "kailua",
    name: "Kailua",
    description: "Kailua manufacturing facilities trust our professional factory cleaning service for comprehensive facility maintenance that ensures optimal production efficiency and worker safety.",
    faq: [
      {
        question: "How often do Kailua factories schedule cleaning?",
        answer: "Most Kailua factories prefer weekly or monthly cleaning schedules, though we offer flexible scheduling based on your production requirements and operational needs."
      },
      {
        question: "Do you provide emergency cleaning services in Kailua?",
        answer: "Yes, we offer emergency cleaning services for unexpected situations, OSHA inspection preparation, and urgent facility maintenance needs."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Kailua manufacturing facility spotless and OSHA compliant for over two years. Highly recommend their professional industrial cleaning service!",
      author: "Plant Manager, Kailua Manufacturing"
    }
  },
  {
    id: "kapolei",
    name: "Kapolei",
    description: "Kapolei industrial facilities rely on our professional factory cleaning service for consistent facility maintenance that keeps their manufacturing operations running smoothly and safely.",
    faq: [
      {
        question: "Do you service high-end manufacturing facilities in Kapolei?",
        answer: "Yes, we have extensive experience cleaning premium manufacturing facilities, including those with sophisticated equipment, clean rooms, and high-end production standards."
      },
      {
        question: "How do you ensure OSHA compliance in Kapolei factories?",
        answer: "All our team members are trained in OSHA protocols, use industrial-grade cleaning products, and follow strict safety standards to protect your workers and business."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Kapolei factory to perfection. Their professionalism and understanding of industrial hygiene requirements are outstanding.",
      author: "Operations Director, Kapolei Manufacturing"
    }
  },
  {
    id: "makakilo",
    name: "Makakilo",
    description: "Makakilo manufacturing plants trust our professional factory cleaning service for comprehensive facility maintenance that ensures optimal production efficiency and worker safety.",
    faq: [
      {
        question: "Do you work around Makakilo factory production schedules?",
        answer: "Yes, we can schedule cleanings around your production hours, maintenance windows, and operational requirements to minimize downtime and maximize efficiency."
      },
      {
        question: "What if we're not satisfied with factory cleaning in Makakilo?",
        answer: "We guarantee satisfaction and will return to address any concerns at no additional charge, understanding the critical nature of your manufacturing operations."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Makakilo manufacturing facility spotless and OSHA compliant for over two years. Highly recommend their professional service!",
      author: "Plant Manager, Makakilo Manufacturing"
    }
  },
  {
    id: "mililani",
    name: "Mililani",
    description: "Mililani industrial facilities rely on our professional factory cleaning service for consistent facility maintenance that keeps their manufacturing operations running smoothly and safely.",
    faq: [
      {
        question: "How often do Mililani factories schedule cleaning?",
        answer: "Most Mililani factories prefer weekly or monthly cleaning schedules, though we offer flexible scheduling based on your production requirements and operational needs."
      },
      {
        question: "Do you provide emergency cleaning services in Mililani?",
        answer: "Yes, we offer emergency cleaning services for unexpected situations, OSHA inspection preparation, and urgent facility maintenance needs."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Mililani factory to perfection. Their professionalism and understanding of industrial hygiene requirements are outstanding.",
      author: "Operations Director, Mililani Manufacturing"
    }
  },
  {
    id: "pearl-city",
    name: "Pearl City",
    description: "Pearl City manufacturing facilities trust our professional factory cleaning service for comprehensive facility maintenance that ensures optimal production efficiency and worker safety.",
    faq: [
      {
        question: "Do you service high-end manufacturing facilities in Pearl City?",
        answer: "Yes, we have extensive experience cleaning premium manufacturing facilities, including those with sophisticated equipment, clean rooms, and high-end production standards."
      },
      {
        question: "How do you ensure OSHA compliance in Pearl City factories?",
        answer: "All our team members are trained in OSHA protocols, use industrial-grade cleaning products, and follow strict safety standards to protect your workers and business."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Pearl City manufacturing plant spotless and OSHA compliant for over two years. Highly recommend their professional industrial cleaning service!",
      author: "Plant Manager, Pearl City Manufacturing"
    }
  },
  {
    id: "waialae",
    name: "Waialae",
    description: "Waialae factories and industrial facilities enjoy consistent, professional factory cleaning services that maintain their facilities clean and operating at optimal safety standards year-round.",
    faq: [
      {
        question: "Do you work around Waialae factory production schedules?",
        answer: "Yes, we can schedule cleanings around your production hours, maintenance windows, and operational requirements to minimize downtime and maximize efficiency."
      },
      {
        question: "What if we're not satisfied with factory cleaning in Waialae?",
        answer: "We guarantee satisfaction and will return to address any concerns at no additional charge, understanding the critical nature of your manufacturing operations."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Waialae factory to perfection. Their professionalism and understanding of industrial hygiene requirements are outstanding.",
      author: "Operations Director, Waialae Manufacturing"
    }
  },
  {
    id: "waikiki",
    name: "Waikiki",
    description: "Waikiki manufacturing facilities trust our professional factory cleaning service for comprehensive facility maintenance that ensures optimal production efficiency and worker safety.",
    faq: [
      {
        question: "How often do Waikiki factories schedule cleaning?",
        answer: "Most Waikiki factories prefer weekly or monthly cleaning schedules, though we offer flexible scheduling based on your production requirements and operational needs."
      },
      {
        question: "Do you provide emergency cleaning services in Waikiki?",
        answer: "Yes, we offer emergency cleaning services for unexpected situations, OSHA inspection preparation, and urgent facility maintenance needs."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Waikiki manufacturing facility spotless and OSHA compliant for over two years. Highly recommend their professional service!",
      author: "Plant Manager, Waikiki Manufacturing"
    }
  },
  {
    id: "waimanalo",
    name: "Waimanalo",
    description: "Waimanalo industrial facilities rely on our professional factory cleaning service for consistent facility maintenance that keeps their manufacturing operations running smoothly and safely.",
    faq: [
      {
        question: "Do you service high-end manufacturing facilities in Waimanalo?",
        answer: "Yes, we have extensive experience cleaning premium manufacturing facilities, including those with sophisticated equipment, clean rooms, and high-end production standards."
      },
      {
        question: "How do you ensure OSHA compliance in Waimanalo factories?",
        answer: "All our team members are trained in OSHA protocols, use industrial-grade cleaning products, and follow strict safety standards to protect your workers and business."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Waimanalo factory to perfection. Their professionalism and understanding of industrial hygiene requirements are outstanding.",
      author: "Operations Director, Waimanalo Manufacturing"
    }
  },
  {
    id: "waipahu",
    name: "Waipahu",
    description: "Waipahu manufacturing plants trust our professional factory cleaning service for comprehensive facility maintenance that ensures optimal production efficiency and worker safety.",
    faq: [
      {
        question: "Do you work around Waipahu factory production schedules?",
        answer: "Yes, we can schedule cleanings around your production hours, maintenance windows, and operational requirements to minimize downtime and maximize efficiency."
      },
      {
        question: "What if we're not satisfied with factory cleaning in Waipahu?",
        answer: "We guarantee satisfaction and will return to address any concerns at no additional charge, understanding the critical nature of your manufacturing operations."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Waipahu manufacturing facility spotless and OSHA compliant for over two years. Highly recommend their professional industrial cleaning service!",
      author: "Plant Manager, Waipahu Manufacturing"
    }
  }
];

const FactoryCleaningOahuPage = () => {
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
        <title>Factory Cleaning Oahu | Red Rock Cleans</title>
        <meta name="description" content="Professional factory cleaning on Oahu. Red Rock Cleans offers heavy-duty cleaning for manufacturing plants in Honolulu, Kapolei, and beyond to ensure safety and productivity." />
        <meta name="keywords" content="factory cleaning near me, industrial cleaning Oahu, manufacturing plant cleaning Honolulu, factory cleaning Kapolei, heavy-duty factory cleaning Oahu, production floor cleaning Honolulu, machinery degreasing Oahu, OSHA compliant cleaning Oahu, factory cleaning cost Oahu, industrial cleaning prices Honolulu, what is factory cleaning Oahu, hire factory cleaners in Oahu" />
        <link rel="canonical" href="https://redrockcleans.com/oahu/factory-cleaning" />
      </Helmet>
      
      <OahuNavigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/src/assets/hero-commercial.jpg" 
              alt="Professional factory cleaning service in a manufacturing facility on Oahu"
              className="w-full h-full object-cover scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                Professional Factory Cleaning on Oahu
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                A clean, compliant factory is essential for worker safety, operational efficiency, and meeting production goals for businesses across Oahu. Our specialized factory cleaning services help manufacturing facilities maintain the highest standards of cleanliness and safety that industrial operations require.
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

        {/* Enhancing Safety, Compliance, and Productivity Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Enhancing Safety, Compliance, and Productivity
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <HardHat className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Prioritizing Worker Safety</h3>
                      <p className="text-muted-foreground">
                        Our focus on removing hazards like spills and debris reduces accidents and meets OSHA standards. We ensure all walkways are clear, equipment is properly maintained, and safety protocols are followed to protect your workforce.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Cog className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Boosting Production Efficiency</h3>
                      <p className="text-muted-foreground">
                        Clean machinery and organized workspaces prevent downtime and improve workflow. Our thorough cleaning protocols ensure equipment operates at peak performance and production lines run smoothly without interruption.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <ClipboardCheck className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Upholding Industry Standards</h3>
                      <p className="text-muted-foreground">
                        Our commitment to providing a level of clean that meets industry-specific regulations ensures compliance and peace of mind. We stay current with all safety and environmental standards to protect your business.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Comprehensive Factory Cleaning Checklist Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Our Comprehensive Factory Cleaning Checklist
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Building className="h-10 w-10 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-3">Production Floor Care</h3>
                      <p className="text-muted-foreground text-sm">
                        Heavy-duty sweeping, scrubbing, and degreasing of concrete floors. We remove oil stains, debris, and contaminants to maintain a safe and clean production environment.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Wrench className="h-10 w-10 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-3">Machinery & Equipment Cleaning</h3>
                      <p className="text-muted-foreground text-sm">
                        Safely cleaning and degreasing production equipment. We follow manufacturer guidelines to ensure equipment longevity while maintaining optimal performance and safety.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Factory className="h-10 w-10 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-3">High-Dusting & Structural Cleaning</h3>
                      <p className="text-muted-foreground text-sm">
                        Cleaning ceilings, pipes, and rafters to remove accumulated dust and debris. We ensure proper air quality and prevent contamination from overhead structures.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Users className="h-10 w-10 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-3">Common Areas & Restrooms</h3>
                      <p className="text-muted-foreground text-sm">
                        Detail services for break rooms, offices, and sanitation facilities within the factory. We maintain clean, comfortable spaces for your workforce while ensuring hygiene standards.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Our Commitment to Oahu's Industries Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Our Commitment to Oahu's Industries
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <HardHat className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    <CountUp end={500} duration={2} />+
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Safety Standards Met</h3>
                  <p className="text-muted-foreground text-sm">
                    Oahu factories trust our specialized cleaning services
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    <CountUp end={10000} duration={2} />+
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Production Hours Saved</h3>
                  <p className="text-muted-foreground text-sm">
                    Through efficient cleaning that minimizes downtime
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">100%</div>
                  <h3 className="text-lg font-semibold mb-2">Compliant Cleans Completed</h3>
                  <p className="text-muted-foreground text-sm">
                    All our factory clients meet OSHA and industry standards
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
                          <h4 className="font-semibold mb-2">Local Factory Cleaning Services</h4>
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
                            Get Factory Cleaning Quote for {neighborhood.name}
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

        {/* Other Industrial & Commercial Services Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">
                Other Industrial & Commercial Services on Oahu
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
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
                    <Factory className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Industrial Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Comprehensive cleaning services for industrial facilities
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/oahu/industrial-cleaning">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <Zap className="h-8 w-8 text-primary mx-auto mb-4" />
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
                    <h3 className="text-lg font-semibold">How do you ensure OSHA compliance in factory cleaning?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      We follow all OSHA guidelines and maintain detailed cleaning logs. Our team is trained in safety protocols and uses only industrial-grade cleaning products. We ensure all safety equipment is properly maintained and all cleaning procedures meet OSHA standards for worker protection.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="production-scheduling" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">Can you work around our production schedule?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Yes, we can schedule cleanings around your production hours, maintenance windows, and operational requirements. We offer flexible scheduling including early morning, late night, and weekend cleaning to minimize disruption to your manufacturing operations.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="equipment-cleaning" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">What's included in machinery and equipment cleaning?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Our machinery cleaning includes degreasing production equipment, cleaning control panels, sanitizing food-contact surfaces, and maintaining all manufacturing equipment. We follow manufacturer guidelines to ensure equipment longevity while maintaining optimal performance and safety.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="emergency-services" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">Do you offer emergency cleaning services?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Yes, we offer emergency cleaning services for unexpected situations, OSHA inspection preparation, and urgent facility maintenance needs. We understand that factories sometimes need immediate cleaning assistance, and we're available to help when you need us most.
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
              Ready to Elevate Your Factory's Cleanliness Standards?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join hundreds of Oahu factories that trust Red Rock Cleans for their industrial cleaning needs
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
              <Link to="/commercial-quote?location=oahu">Get Your Free Factory Cleaning Quote</Link>
            </Button>
          </div>
        </section>

        {/* Image Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <img 
                src="/static/service-products.jpg" 
                alt="A clean and safe factory floor on Oahu after professional cleaning by Red Rock Cleans"
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

export default FactoryCleaningOahuPage;

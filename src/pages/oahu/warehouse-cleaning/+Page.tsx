import { OahuNavigation } from "@/components/OahuNavigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  HardHat, 
  Forklift, 
  Box, 
  Layers, 
  Construction, 
  Truck, 
  User, 
  Package, 
  ShieldCheck, 
  Timer, 
  MapPin, 
  Phone,
  CheckCircle,
  ShoppingBag,
  Building,
  GraduationCap,
  Home
} from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import CountUp from "react-countup";

const neighborhoods = [
  {
    id: "aiea",
    name: "Aiea",
    description: "Aiea warehouses and distribution centers trust our professional warehouse cleaning services for comprehensive facility maintenance that ensures optimal operational efficiency, employee safety, and inventory protection in the competitive logistics market.",
    faq: [
      {
        question: "Do you provide OSHA compliant cleaning for Aiea warehouses?",
        answer: "Yes, all our warehouse cleaning services strictly adhere to OSHA standards and safety regulations. Our team is trained in industrial cleaning protocols and uses specialized equipment to ensure complete compliance and workplace safety."
      },
      {
        question: "What if we're not satisfied with warehouse cleaning in Aiea?",
        answer: "We guarantee satisfaction and will return to address any concerns at no additional charge, understanding the critical nature of warehouse operations and the importance of maintaining clean, safe working environments."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Aiea warehouse spotless and OSHA compliant for over two years. Their attention to detail and floor scrubbing is outstanding!",
      author: "Warehouse Manager, Aiea Distribution Center"
    }
  },
  {
    id: "ewa-beach",
    name: "Ewa Beach",
    description: "Ewa Beach warehouses and logistics facilities rely on our professional warehouse cleaning services for consistent facility maintenance that keeps their operations running safely and efficiently.",
    faq: [
      {
        question: "How often do Ewa Beach warehouses schedule cleaning?",
        answer: "Most Ewa Beach warehouses prefer daily or multiple-times-per-week cleaning schedules, though we offer flexible scheduling based on your operational requirements and inventory turnover."
      },
      {
        question: "Do you provide emergency cleaning services in Ewa Beach?",
        answer: "Yes, we offer emergency cleaning services for unexpected situations, safety inspections, and urgent facility maintenance needs with rapid response times."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Ewa Beach warehouse to perfection. Their professionalism and understanding of warehouse operations are outstanding.",
      author: "Operations Director, Ewa Beach Logistics"
    }
  },
  {
    id: "hawaii-kai",
    name: "Hawaii Kai",
    description: "Hawaii Kai warehouses and distribution centers trust our professional warehouse cleaning services for comprehensive facility maintenance that ensures optimal operational efficiency and competitive advantage in the logistics market.",
    faq: [
      {
        question: "Do you service high-volume warehouses in Hawaii Kai?",
        answer: "Yes, we have extensive experience cleaning various warehouse types, including high-volume distribution centers, cold storage facilities, and specialized logistics operations with unique cleaning requirements and high standards."
      },
      {
        question: "How do you ensure equipment safety in Hawaii Kai warehouses?",
        answer: "We use only warehouse-safe cleaning products and follow manufacturer guidelines to ensure equipment longevity while maintaining the highest standards of cleanliness and operational safety."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Hawaii Kai warehouse spotless and operation-ready for over two years. Highly recommend their professional service!",
      author: "Facility Manager, Hawaii Kai Distribution"
    }
  },
  {
    id: "honolulu",
    name: "Honolulu",
    description: "Honolulu warehouses and logistics centers enjoy consistent, professional warehouse cleaning services that maintain their facilities clean and operating at optimal efficiency and safety standards year-round.",
    faq: [
      {
        question: "Do you work around Honolulu warehouse schedules?",
        answer: "Yes, we can schedule cleanings around your operational hours, shipping schedules, and inventory management requirements to minimize disruption to your warehouse operations."
      },
      {
        question: "What if we're not satisfied with warehouse cleaning in Honolulu?",
        answer: "We guarantee satisfaction and will return to address any concerns at no additional charge, understanding the critical nature of warehouse operations and employee safety requirements."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Honolulu warehouse to perfection. Their professionalism and understanding of warehouse cleaning requirements are outstanding.",
      author: "General Manager, Honolulu Logistics Center"
    }
  },
  {
    id: "kailua",
    name: "Kailua",
    description: "Kailua warehouses and storage facilities trust our professional warehouse cleaning services for comprehensive facility maintenance that ensures optimal operational efficiency and competitive advantage in the local market.",
    faq: [
      {
        question: "How often do Kailua warehouses schedule cleaning?",
        answer: "Most Kailua warehouses prefer daily or multiple-times-per-week cleaning schedules, though we offer flexible scheduling based on your operational requirements and inventory turnover."
      },
      {
        question: "Do you provide emergency cleaning services in Kailua?",
        answer: "Yes, we offer emergency cleaning services for unexpected situations, safety inspections, and urgent facility maintenance needs with rapid response times."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Kailua warehouse spotless and operation-ready for over two years. Their attention to detail is outstanding!",
      author: "Warehouse Owner, Kailua Storage Solutions"
    }
  },
  {
    id: "kapolei",
    name: "Kapolei",
    description: "Kapolei warehouses and distribution centers rely on our professional warehouse cleaning services for consistent facility maintenance that keeps their operations running at optimal efficiency and safety standards.",
    faq: [
      {
        question: "Do you provide specialized cleaning for Kapolei warehouses?",
        answer: "Yes, we offer specialized warehouse cleaning services including floor scrubbing, high-bay dusting, pallet rack cleaning, and loading dock maintenance tailored to your specific operational environment."
      },
      {
        question: "What if we're not satisfied with warehouse cleaning in Kapolei?",
        answer: "We guarantee satisfaction and will return to address any concerns at no additional charge, understanding the critical nature of warehouse operations and employee safety."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Kapolei warehouse to perfection. Their professionalism and understanding of warehouse cleaning requirements are outstanding.",
      author: "Warehouse Manager, Kapolei Distribution Hub"
    }
  },
  {
    id: "makakilo",
    name: "Makakilo",
    description: "Makakilo warehouses and logistics facilities trust our professional warehouse cleaning services for comprehensive facility maintenance that ensures optimal operational efficiency and employee safety excellence.",
    faq: [
      {
        question: "How often do Makakilo warehouses schedule cleaning?",
        answer: "Most Makakilo warehouses prefer daily or multiple-times-per-week cleaning schedules, though we offer flexible scheduling based on your operational requirements and inventory turnover."
      },
      {
        question: "Do you provide emergency cleaning services in Makakilo?",
        answer: "Yes, we offer emergency cleaning services for unexpected situations, safety inspections, and urgent facility maintenance needs with rapid response times."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Makakilo warehouse spotless and operation-ready for over two years. Highly recommend their professional service!",
      author: "Warehouse Administrator, Makakilo Logistics"
    }
  },
  {
    id: "mililani",
    name: "Mililani",
    description: "Mililani warehouses and distribution centers enjoy consistent, professional warehouse cleaning services that maintain their facilities clean and operating at optimal efficiency and safety standards year-round.",
    faq: [
      {
        question: "Do you work around Mililani warehouse schedules?",
        answer: "Yes, we can schedule cleanings around your operational hours, shipping schedules, and inventory management requirements to minimize disruption to your warehouse operations."
      },
      {
        question: "What if we're not satisfied with warehouse cleaning in Mililani?",
        answer: "We guarantee satisfaction and will return to address any concerns at no additional charge, understanding the critical nature of warehouse operations and employee safety requirements."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Mililani warehouse to perfection. Their professionalism and understanding of warehouse cleaning requirements are outstanding.",
      author: "General Manager, Mililani Distribution Center"
    }
  },
  {
    id: "pearl-city",
    name: "Pearl City",
    description: "Pearl City warehouses and storage facilities trust our professional warehouse cleaning services for comprehensive facility maintenance that ensures optimal operational efficiency and competitive advantage in the local market.",
    faq: [
      {
        question: "Do you provide specialized cleaning for Pearl City warehouses?",
        answer: "Yes, we offer specialized warehouse cleaning services including floor scrubbing, high-bay dusting, pallet rack cleaning, and loading dock maintenance tailored to your specific operational environment."
      },
      {
        question: "How do you ensure equipment safety in Pearl City warehouses?",
        answer: "We use only warehouse-safe cleaning products and follow careful protocols to ensure equipment safety while maintaining the highest standards of cleanliness and operational efficiency."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Pearl City warehouse spotless and operation-ready for over two years. Their attention to detail is outstanding!",
      author: "Warehouse Manager, Pearl City Storage"
    }
  },
  {
    id: "waialae",
    name: "Waialae",
    description: "Waialae warehouses and logistics facilities rely on our professional warehouse cleaning services for consistent facility maintenance that keeps their operations running at optimal efficiency and safety standards.",
    faq: [
      {
        question: "How often do Waialae warehouses schedule cleaning?",
        answer: "Most Waialae warehouses prefer daily or multiple-times-per-week cleaning schedules, though we offer flexible scheduling based on your operational requirements and inventory turnover."
      },
      {
        question: "Do you provide emergency cleaning services in Waialae?",
        answer: "Yes, we offer emergency cleaning services for unexpected situations, safety inspections, and urgent facility maintenance needs with rapid response times."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Waialae warehouse to perfection. Their professionalism and understanding of warehouse cleaning requirements are outstanding.",
      author: "Warehouse Owner, Waialae Logistics"
    }
  },
  {
    id: "waikiki",
    name: "Waikiki",
    description: "Waikiki warehouses and distribution centers trust our professional warehouse cleaning services for comprehensive facility maintenance that ensures optimal operational efficiency and employee safety excellence in the competitive logistics market.",
    faq: [
      {
        question: "Do you service tourist-focused warehouses in Waikiki?",
        answer: "Yes, we have extensive experience cleaning various warehouse types, including tourist-focused distribution centers, hospitality supply warehouses, and specialized logistics operations with unique cleaning requirements and high standards."
      },
      {
        question: "How do you handle high tourist season cleaning in Waikiki?",
        answer: "We understand the unique challenges of tourist-heavy logistics environments and provide flexible scheduling, rapid response times, and specialized cleaning protocols to maintain pristine conditions during peak tourist seasons."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Waikiki warehouse spotless and operation-ready for over two years. Highly recommend their professional warehouse cleaning service!",
      author: "Warehouse Manager, Waikiki Distribution Center"
    }
  },
  {
    id: "waimanalo",
    name: "Waimanalo",
    description: "Waimanalo warehouses and storage facilities enjoy consistent, professional warehouse cleaning services that maintain their facilities clean and operating at optimal efficiency and safety standards year-round.",
    faq: [
      {
        question: "Do you work around Waimanalo warehouse schedules?",
        answer: "Yes, we can schedule cleanings around your operational hours, shipping schedules, and inventory management requirements to minimize disruption to your warehouse operations."
      },
      {
        question: "What if we're not satisfied with warehouse cleaning in Waimanalo?",
        answer: "We guarantee satisfaction and will return to address any concerns at no additional charge, understanding the critical nature of warehouse operations and employee safety requirements."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Waimanalo warehouse to perfection. Their professionalism and understanding of warehouse cleaning requirements are outstanding.",
      author: "Warehouse Owner, Waimanalo Storage"
    }
  },
  {
    id: "waipahu",
    name: "Waipahu",
    description: "Waipahu warehouses and distribution centers trust our professional warehouse cleaning services for comprehensive facility maintenance that ensures optimal operational efficiency and employee safety excellence.",
    faq: [
      {
        question: "Do you provide specialized cleaning for Waipahu warehouses?",
        answer: "Yes, we offer specialized warehouse cleaning services including floor scrubbing, high-bay dusting, pallet rack cleaning, and loading dock maintenance tailored to your specific operational environment and inventory patterns."
      },
      {
        question: "How do you ensure equipment safety in Waipahu warehouses?",
        answer: "We use only warehouse-safe cleaning products and follow careful protocols to ensure equipment safety while maintaining the highest standards of cleanliness and operational efficiency."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Waipahu warehouse spotless and operation-ready for over two years. Their attention to detail and floor scrubbing is outstanding!",
      author: "Warehouse Manager, Waipahu Distribution Hub"
    }
  }
];

export default function WarehouseCleaningOahuPage() {
  const [activeAccordion, setActiveAccordion] = useState<string>("");

  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash && neighborhoods.some(n => n.id === hash)) {
      setActiveAccordion(hash);
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Warehouse Cleaning Oahu | Red Rock Cleans</title>
        <meta name="description" content="Warehouse cleaning in Oahu. Efficient service maximizing safety & productivity in Honolulu. Professional Hawaiian service!" />
        <meta name="keywords" content="warehouse cleaning Oahu, warehouse cleaning near me, industrial warehouse cleaning Oahu, distribution center cleaning Honolulu, warehouse floor scrubbing Kapolei, best warehouse cleaners Oahu, heavy duty warehouse cleaning Oahu, OSHA compliant warehouse cleaning, pallet rack cleaning Honolulu, warehouse cleaning cost Oahu, commercial warehouse cleaning prices Honolulu, what is warehouse cleaning Oahu, hire warehouse cleaners in Oahu" />
        <link rel="canonical" href="https://redrockcleans.com/oahu/warehouse-cleaning/" />
      </Helmet>

      <OahuNavigation bookingUrl="/commercial-quote?location=oahu" />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/src/assets/hero-commercial.jpg" 
              alt="Professional warehouse cleaning service in Honolulu, Oahu"
              className="w-full h-full object-cover scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                Efficient & Safe Warehouse Cleaning on Oahu
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                For Oahu's vital logistics hubs, a clean and organized warehouse is essential for operational efficiency, employee safety, and protecting inventory. 
                Our professional warehouse cleaning services ensure your facility operates at peak performance while maintaining the highest safety standards.
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

        {/* Optimizing Your Island Logistics Environment */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Optimizing Your Island Logistics Environment
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <HardHat className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-4">Enhancing Workplace Safety</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        We maintain clear, hazard-free floors and ensure compliance with OSHA standards. 
                        Our comprehensive safety protocols protect your employees and reduce workplace incidents.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Forklift className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-4">Boosting Operational Efficiency</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Clean, marked floors and organized spaces speed up inter-island logistics operations. 
                        Our systematic approach ensures smooth workflow and faster inventory management.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Box className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-4">Protecting Valuable Inventory</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        We control dust, pests, and humidity-related issues to prevent product damage. 
                        Our specialized cleaning methods protect your inventory and maintain product quality.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Our Comprehensive Warehouse Cleaning Checklist */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Our Comprehensive Warehouse Cleaning Checklist
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <Card className="hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Layers className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-3">Floor Scrubbing & Sweeping</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Using industrial-grade equipment for concrete floors to maintain safety and cleanliness.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Construction className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-3">High-Bay & Racking Dusting</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Cleaning hard-to-reach ceilings, beams, and pallet racks to prevent dust accumulation.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Truck className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-3">Loading Docks & Common Areas</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Keeping high-traffic areas clean and safe for efficient operations.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <User className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-3">Offices & Employee Restrooms</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Maintaining administrative and break areas for employee comfort and productivity.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* The Impact of a Professionally Cleaned Warehouse */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                The Impact of a Professionally Cleaned Warehouse
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Package className="w-10 h-10 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Square Feet Cleaned</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    <CountUp end={2500000} duration={2} suffix="+" />
                  </div>
                  <p className="text-muted-foreground">square feet of warehouse space cleaned across Oahu</p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <ShieldCheck className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Safety Incidents Prevented</h3>
                  <div className="text-4xl font-bold text-green-600 mb-2">
                    <CountUp end={85} duration={2} suffix="%" />
                  </div>
                  <p className="text-muted-foreground">reduction in workplace accidents with professional cleaning</p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Timer className="w-10 h-10 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">More Efficient Operations</h3>
                  <div className="text-4xl font-bold text-purple-600 mb-2">
                    <CountUp end={40} duration={2} suffix="%" />
                  </div>
                  <p className="text-muted-foreground">improvement in operational efficiency with clean facilities</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Areas We Serve on Oahu */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Areas We Serve on Oahu
              </h2>
              <Accordion type="single" collapsible value={activeAccordion} onValueChange={setActiveAccordion} className="w-full">
                {neighborhoods.map((neighborhood) => (
                  <AccordionItem key={neighborhood.id} value={neighborhood.id} className="border border-gray-200 rounded-lg mb-4 bg-white">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <MapPin className="w-5 h-5 text-blue-600 mr-3" />
                        <span className="text-lg font-semibold">{neighborhood.name}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <div className="space-y-6">
                        <p className="text-muted-foreground leading-relaxed">{neighborhood.description}</p>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold mb-3">Frequently Asked Questions</h4>
                            <div className="space-y-3">
                              {neighborhood.faq.map((faq, index) => (
                                <div key={index} className="border-l-4 border-blue-200 pl-4">
                                  <p className="font-medium text-sm">{faq.question}</p>
                                  <p className="text-muted-foreground text-sm mt-1">{faq.answer}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold mb-3">Customer Testimonial</h4>
                            <div className="bg-blue-50 p-4 rounded-lg">
                              <p className="text-muted-foreground italic mb-3">"{neighborhood.testimonial.text}"</p>
                              <p className="text-muted-foreground text-sm font-medium">- {neighborhood.testimonial.author}</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="pt-4">
                          <Button className="w-full sm:w-auto" asChild>
                            <Link to="/commercial-quote?location=oahu">
                              <Phone className="w-4 h-4 mr-2" />
                              Book Warehouse Cleaning in {neighborhood.name}
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Other Industrial Cleaning Services on Oahu */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Other Industrial Cleaning Services on Oahu
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <Building className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Factory Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">Professional cleaning services for manufacturing facilities and production areas</p>
                    <Button variant="outline" size="sm" asChild>
                      <Link to="/oahu/factory-cleaning/">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <GraduationCap className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Industrial Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">Comprehensive industrial cleaning services for heavy-duty facilities</p>
                    <Button variant="outline" size="sm" asChild>
                      <Link to="/oahu/industrial-cleaning/">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <Construction className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Post Construction Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">Specialized cleaning services for post-construction cleanup and preparation</p>
                    <Button variant="outline" size="sm" asChild>
                      <Link to="/oahu/post-construction-cleaning-services/">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Frequently Asked Questions */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Frequently Asked Questions
              </h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border border-gray-200 rounded-lg mb-4 bg-white">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 rounded-lg">
                    <span className="text-lg font-semibold">What cleaning services do you provide for warehouses?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <p className="text-muted-foreground leading-relaxed">
                      We provide comprehensive warehouse cleaning services including floor scrubbing and sweeping, high-bay and racking dusting, 
                      loading dock cleaning, office and restroom maintenance, and specialized cleaning for different warehouse types including 
                      distribution centers, cold storage facilities, and manufacturing warehouses.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border border-gray-200 rounded-lg mb-4 bg-white">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 rounded-lg">
                    <span className="text-lg font-semibold">How often should warehouses be professionally cleaned?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <p className="text-muted-foreground leading-relaxed">
                      Most warehouses benefit from daily or multiple-times-per-week cleaning, especially high-traffic areas like loading docks and common areas. 
                      The frequency depends on operational volume, inventory turnover, and specific industry requirements.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border border-gray-200 rounded-lg mb-4 bg-white">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 rounded-lg">
                    <span className="text-lg font-semibold">Do you work around warehouse schedules?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <p className="text-muted-foreground leading-relaxed">
                      Yes, we offer flexible scheduling to work around your operational hours, shipping schedules, and inventory management requirements. 
                      We can provide cleaning services during off-hours, between shifts, or during low-activity periods to minimize disruption.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border border-gray-200 rounded-lg mb-4 bg-white">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 rounded-lg">
                    <span className="text-lg font-semibold">What if we're not satisfied with the warehouse cleaning service?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <p className="text-muted-foreground leading-relaxed">
                      We guarantee satisfaction and will return to address any concerns at no additional charge. 
                      We understand the critical nature of warehouse operations and employee safety and are committed to maintaining the highest standards.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}


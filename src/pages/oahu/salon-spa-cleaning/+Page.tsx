import { OahuNavigation } from "@/components/OahuNavigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Sparkles, Droplets, Heart, Scissors, Paintbrush, Sofa, ShowerHead, Smile, BadgeCheck, Wind, MapPin, Calendar, Home, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import CountUp from "react-countup";

const neighborhoods = [
  {
    id: "aiea",
    name: "Aiea",
    description: "Aiea salons and spas trust our professional cleaning service for maintaining pristine, hygienic environments that create the perfect atmosphere for client relaxation and beauty treatments.",
    faq: [
      {
        question: "Do you work around Aiea salon schedules?",
        answer: "Yes, we can schedule cleanings around your client appointments, special events, and operational requirements for your convenience and business efficiency."
      },
      {
        question: "What if we're not satisfied with cleaning in Aiea?",
        answer: "We guarantee satisfaction and will return to address any concerns at no additional charge, understanding the critical nature of your salon operations."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Aiea salon spotless and client-ready for over two years. Highly recommend their professional service!",
      author: "Salon Owner, Aiea Beauty"
    }
  },
  {
    id: "ewa-beach",
    name: "Ewa Beach",
    description: "Ewa Beach salons and spas enjoy consistent, professional cleaning services that maintain their facilities clean and operating at optimal hygiene standards year-round.",
    faq: [
      {
        question: "How often do Ewa Beach salons schedule cleaning?",
        answer: "Most Ewa Beach salons prefer daily or weekly cleaning, though we offer flexible scheduling based on your operational requirements and client volume."
      },
      {
        question: "Do you provide emergency cleaning services in Ewa Beach?",
        answer: "Yes, we offer emergency cleaning services for unexpected situations, health inspection preparation, and urgent facility maintenance needs."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Ewa Beach spa to perfection. Their professionalism and understanding of salon hygiene requirements are outstanding.",
      author: "Spa Director, Ewa Beach Wellness"
    }
  },
  {
    id: "hawaii-kai",
    name: "Hawaii Kai",
    description: "Hawaii Kai salons and spas rely on our professional cleaning service for consistent facility maintenance that keeps their beauty establishments operating smoothly and safely.",
    faq: [
      {
        question: "Do you service high-end salons in Hawaii Kai?",
        answer: "Yes, we have extensive experience cleaning premium salons and spas, including those with sophisticated equipment, luxury amenities, and high-end beauty standards."
      },
      {
        question: "How do you ensure hygiene standards in Hawaii Kai salons?",
        answer: "All our team members are trained in salon hygiene protocols, use beauty-safe cleaning products, and follow strict sanitation standards to protect your clients and business."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Hawaii Kai salon spotless and health inspection ready for over two years. Highly recommend their professional service!",
      author: "Salon Manager, Hawaii Kai Beauty"
    }
  },
  {
    id: "honolulu",
    name: "Honolulu",
    description: "Honolulu salons and spas trust our professional cleaning service for consistent facility maintenance that keeps their beauty establishments operating smoothly and safely.",
    faq: [
      {
        question: "Do you work around Honolulu salon schedules?",
        answer: "Yes, we can schedule cleanings around your client appointments, special events, and operational requirements for your convenience and business efficiency."
      },
      {
        question: "What if we're not satisfied with cleaning in Honolulu?",
        answer: "We guarantee satisfaction and will return to address any concerns at no additional charge, understanding the critical nature of your salon operations."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Honolulu spa to perfection. Their professionalism and understanding of salon hygiene requirements are outstanding.",
      author: "Spa Director, Honolulu Wellness"
    }
  },
  {
    id: "kailua",
    name: "Kailua",
    description: "Kailua salons and spas enjoy consistent, professional cleaning services that maintain their facilities clean and operating at optimal hygiene standards year-round.",
    faq: [
      {
        question: "How often do Kailua salons schedule cleaning?",
        answer: "Most Kailua salons prefer daily or weekly cleaning, though we offer flexible scheduling based on your operational requirements and client volume."
      },
      {
        question: "Do you provide emergency cleaning services in Kailua?",
        answer: "Yes, we offer emergency cleaning services for unexpected situations, health inspection preparation, and urgent facility maintenance needs."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Kailua salon spotless and client-ready for over two years. Highly recommend their professional service!",
      author: "Salon Owner, Kailua Beauty"
    }
  },
  {
    id: "kapolei",
    name: "Kapolei",
    description: "Kapolei salons and spas rely on our professional cleaning service for consistent facility maintenance that keeps their beauty establishments operating smoothly and safely.",
    faq: [
      {
        question: "Do you service high-end salons in Kapolei?",
        answer: "Yes, we have extensive experience cleaning premium salons and spas, including those with sophisticated equipment, luxury amenities, and high-end beauty standards."
      },
      {
        question: "How do you ensure hygiene standards in Kapolei salons?",
        answer: "All our team members are trained in salon hygiene protocols, use beauty-safe cleaning products, and follow strict sanitation standards to protect your clients and business."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Kapolei spa to perfection. Their professionalism and understanding of salon hygiene requirements are outstanding.",
      author: "Spa Director, Kapolei Wellness"
    }
  },
  {
    id: "makakilo",
    name: "Makakilo",
    description: "Makakilo salons and spas trust our professional cleaning service for consistent facility maintenance that keeps their beauty establishments operating smoothly and safely.",
    faq: [
      {
        question: "Do you work around Makakilo salon schedules?",
        answer: "Yes, we can schedule cleanings around your client appointments, special events, and operational requirements for your convenience and business efficiency."
      },
      {
        question: "What if we're not satisfied with cleaning in Makakilo?",
        answer: "We guarantee satisfaction and will return to address any concerns at no additional charge, understanding the critical nature of your salon operations."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Makakilo salon spotless and health inspection ready for over two years. Highly recommend their professional service!",
      author: "Salon Manager, Makakilo Beauty"
    }
  },
  {
    id: "mililani",
    name: "Mililani",
    description: "Mililani salons and spas enjoy consistent, professional cleaning services that maintain their facilities clean and operating at optimal hygiene standards year-round.",
    faq: [
      {
        question: "How often do Mililani salons schedule cleaning?",
        answer: "Most Mililani salons prefer daily or weekly cleaning, though we offer flexible scheduling based on your operational requirements and client volume."
      },
      {
        question: "Do you provide emergency cleaning services in Mililani?",
        answer: "Yes, we offer emergency cleaning services for unexpected situations, health inspection preparation, and urgent facility maintenance needs."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Mililani spa to perfection. Their professionalism and understanding of salon hygiene requirements are outstanding.",
      author: "Spa Director, Mililani Wellness"
    }
  },
  {
    id: "pearl-city",
    name: "Pearl City",
    description: "Pearl City salons and spas rely on our professional cleaning service for consistent facility maintenance that keeps their beauty establishments operating smoothly and safely.",
    faq: [
      {
        question: "Do you service high-end salons in Pearl City?",
        answer: "Yes, we have extensive experience cleaning premium salons and spas, including those with sophisticated equipment, luxury amenities, and high-end beauty standards."
      },
      {
        question: "How do you ensure hygiene standards in Pearl City salons?",
        answer: "All our team members are trained in salon hygiene protocols, use beauty-safe cleaning products, and follow strict sanitation standards to protect your clients and business."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Pearl City salon spotless and client-ready for over two years. Highly recommend their professional service!",
      author: "Salon Owner, Pearl City Beauty"
    }
  },
  {
    id: "waialae",
    name: "Waialae",
    description: "Waialae salons and spas trust our professional cleaning service for consistent facility maintenance that keeps their beauty establishments operating smoothly and safely.",
    faq: [
      {
        question: "Do you work around Waialae salon schedules?",
        answer: "Yes, we can schedule cleanings around your client appointments, special events, and operational requirements for your convenience and business efficiency."
      },
      {
        question: "What if we're not satisfied with cleaning in Waialae?",
        answer: "We guarantee satisfaction and will return to address any concerns at no additional charge, understanding the critical nature of your salon operations."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Waialae spa to perfection. Their professionalism and understanding of salon hygiene requirements are outstanding.",
      author: "Spa Director, Waialae Wellness"
    }
  },
  {
    id: "waikiki",
    name: "Waikiki",
    description: "Waikiki salons and spas enjoy consistent, professional cleaning services that maintain their facilities clean and operating at optimal hygiene standards year-round.",
    faq: [
      {
        question: "How often do Waikiki salons schedule cleaning?",
        answer: "Most Waikiki salons prefer daily or weekly cleaning, though we offer flexible scheduling based on your operational requirements and client volume."
      },
      {
        question: "Do you provide emergency cleaning services in Waikiki?",
        answer: "Yes, we offer emergency cleaning services for unexpected situations, health inspection preparation, and urgent facility maintenance needs."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Waikiki salon spotless and health inspection ready for over two years. Highly recommend their professional service!",
      author: "Salon Manager, Waikiki Beauty"
    }
  },
  {
    id: "waimanalo",
    name: "Waimanalo",
    description: "Waimanalo salons and spas rely on our professional cleaning service for consistent facility maintenance that keeps their beauty establishments operating smoothly and safely.",
    faq: [
      {
        question: "Do you service high-end salons in Waimanalo?",
        answer: "Yes, we have extensive experience cleaning premium salons and spas, including those with sophisticated equipment, luxury amenities, and high-end beauty standards."
      },
      {
        question: "How do you ensure hygiene standards in Waimanalo salons?",
        answer: "All our team members are trained in salon hygiene protocols, use beauty-safe cleaning products, and follow strict sanitation standards to protect your clients and business."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Waimanalo spa to perfection. Their professionalism and understanding of salon hygiene requirements are outstanding.",
      author: "Spa Director, Waimanalo Wellness"
    }
  },
  {
    id: "waipahu",
    name: "Waipahu",
    description: "Waipahu salons and spas trust our professional cleaning service for consistent facility maintenance that keeps their beauty establishments operating smoothly and safely.",
    faq: [
      {
        question: "Do you work around Waipahu salon schedules?",
        answer: "Yes, we can schedule cleanings around your client appointments, special events, and operational requirements for your convenience and business efficiency."
      },
      {
        question: "What if we're not satisfied with cleaning in Waipahu?",
        answer: "We guarantee satisfaction and will return to address any concerns at no additional charge, understanding the critical nature of your salon operations."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Waipahu salon spotless and client-ready for over two years. Highly recommend their professional service!",
      author: "Salon Owner, Waipahu Beauty"
    }
  }
];

const SalonSpaCleaningOahuPage = () => {
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
        <title>Salon & Spa Cleaning Oahu | Red Rock Cleans</title>
        <meta name="description" content="Professional salon and spa cleaning on Oahu. Red Rock Cleans ensures a pristine, hygienic, and relaxing environment for hair salons, day spas, and medispas in Honolulu and Waikiki." />
        <meta name="keywords" content="salon cleaning near me, spa cleaning Oahu, hair salon cleaning Honolulu, nail salon cleaning Waikiki, medispa cleaning Oahu, best salon cleaners Oahu, hygienic spa cleaning Honolulu, beauty salon sanitation, barber shop cleaning Oahu, salon cleaning cost Oahu, spa cleaning prices Honolulu, what is salon cleaning Oahu, hire spa cleaners in Oahu" />
        <link rel="canonical" href="https://redrockcleans.com/oahu/salon-spa-cleaning" />
      </Helmet>
      
      <OahuNavigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/src/assets/hero-commercial.jpg" 
              alt="Professional salon and spa cleaning service in a beautiful Oahu wellness establishment"
              className="w-full h-full object-cover scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                Pristine Salon & Spa Cleaning for Ultimate Client Relaxation on Oahu
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                In Oahu's wellness and beauty industry, cleanliness is key to creating a luxurious, relaxing, and trustworthy "aloha" experience for every client. Our specialized salon and spa cleaning services help you maintain the highest standards of hygiene and presentation that discerning clients expect.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="h-14 text-lg px-8" asChild>
                  <Link to="/book-now-oahu">
                    <Calendar className="w-5 h-5 mr-2" />
                    Get Your Free Quote
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="h-14 text-lg px-8" asChild>
                  <Link to="/contact">
                    <Home className="w-5 h-5 mr-2" />
                    Contact Us
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Elevating Your Client's Experience Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Elevating Your Client's Experience
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Sparkles className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Serene & Inviting Atmosphere</h3>
                      <p className="text-muted-foreground">
                        Immaculate cleanliness contributes to relaxation and a high-end feel. Our meticulous attention to detail ensures every surface sparkles, creating the perfect tranquil environment for your clients' wellness journey.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Droplets className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Strict Hygiene & Disinfection</h3>
                      <p className="text-muted-foreground">
                        Our practices prevent cross-contamination and meet Hawaii State Board of Barbering and Cosmetology standards. We use professional-grade disinfectants and follow strict protocols to ensure client safety and regulatory compliance.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Flawless First Impressions</h3>
                      <p className="text-muted-foreground">
                        A spotless reception and waiting area sets the tone for a premium experience. We ensure every detail is perfect, from sparkling floors to pristine treatment rooms, creating lasting positive impressions.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Comprehensive Checklist Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Our Comprehensive Salon & Spa Cleaning Checklist
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Scissors className="h-10 w-10 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-3">Treatment & Styling Rooms</h3>
                      <p className="text-muted-foreground text-sm">
                        Sanitizing surfaces, equipment, and managing hair/product residue. We ensure all styling stations, treatment tables, and equipment are thoroughly cleaned and disinfected between clients.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Paintbrush className="h-10 w-10 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-3">Nail Stations & Pedicure Chairs</h3>
                      <p className="text-muted-foreground text-sm">
                        Deep cleaning and disinfection of foot baths and manicure stations. We sanitize all nail tools, clean foot spas, and ensure all surfaces meet the highest hygiene standards.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Sofa className="h-10 w-10 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-3">Reception & Waiting Areas</h3>
                      <p className="text-muted-foreground text-sm">
                        Maintaining spotless first impressions, dusting, and floor care. We ensure all seating areas, reception desks, and waiting spaces are pristine and welcoming for your clients.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <ShowerHead className="h-10 w-10 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-3">Restrooms & Changing Areas</h3>
                      <p className="text-muted-foreground text-sm">
                        Intensive sanitization and restocking to luxury standards. We maintain all restroom facilities and changing areas to the highest standards of cleanliness and presentation.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* The Difference a Professional Clean Makes Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                The Difference a Professional Clean Makes
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Smile className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    <CountUp end={95} duration={2} />%
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Client Satisfaction Boost</h3>
                  <p className="text-muted-foreground text-sm">
                    Oahu salons and spas report increased client satisfaction
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BadgeCheck className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">100%</div>
                  <h3 className="text-lg font-semibold mb-2">Hygiene Standard Score</h3>
                  <p className="text-muted-foreground text-sm">
                    All our salon clients pass health inspections with flying colors
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Wind className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    <CountUp end={5000} duration={2} />+
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Stress-Free Environment</h3>
                  <p className="text-muted-foreground text-sm">
                    Happy clients served through our salon cleaning services across Oahu
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Areas We Serve Section */}
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
                          <h4 className="font-semibold mb-2">Local Salon & Spa Cleaning Services</h4>
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
                          <Link to="/book-now-oahu">
                            Get Salon & Spa Cleaning Quote for {neighborhood.name}
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
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">
                Other Commercial Cleaning Services on Oahu
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <ShoppingBag className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Retail Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Professional cleaning services for retail stores and shopping centers
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/oahu/retail-cleaning">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <Heart className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Medical Office Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Hygienic cleaning services for medical offices and medispas
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/oahu/medical-office-cleaning">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <Droplets className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Gym Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Hygienic cleaning services for fitness centers and health clubs
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/oahu/gym-cleaning">Learn More</Link>
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
                <AccordionItem value="hygiene-standards" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">How do you ensure salon hygiene standards?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      We follow all Hawaii State Board of Barbering and Cosmetology guidelines and maintain detailed cleaning logs. Our team is trained in salon hygiene protocols and uses only beauty-safe cleaning products. We ensure all surfaces that come into contact with clients are properly sanitized and all equipment is cleaned according to health department standards.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="scheduling" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">Can you work around our salon hours?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Yes, we can schedule cleanings around your client appointments, special events, and operational requirements. We offer flexible scheduling including early morning, late night, and weekend cleaning to minimize disruption to your business operations.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="treatment-rooms" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">What's included in treatment room cleaning?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Our treatment room cleaning includes sanitizing all surfaces, cleaning and disinfecting equipment, managing hair and product residue, sanitizing treatment tables and chairs, cleaning mirrors and lighting fixtures, and ensuring all tools and equipment are properly sanitized between clients.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="emergency-services" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">Do you offer emergency cleaning services?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Yes, we offer emergency cleaning services for unexpected situations, health inspection preparation, and urgent facility maintenance needs. We understand that salons and spas sometimes need immediate cleaning assistance, and we're available to help when you need us most.
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
              Ready to Elevate Your Salon & Spa's Cleanliness Standards?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join hundreds of Oahu salons and spas that trust Red Rock Cleans for their cleaning needs
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
              <Link to="/book-now-oahu">Get Your Free Salon & Spa Cleaning Quote</Link>
            </Button>
          </div>
        </section>

        {/* Image Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <img 
                src="/static/service-products.jpg" 
                alt="A serene and immaculate spa treatment room on Oahu, cleaned by Red Rock Cleans"
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

export default SalonSpaCleaningOahuPage;

import { LasVegasNavigation } from "@/components/LasVegasNavigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Clock, Shield, Star, Users, Calendar, Home, Sparkles, HardHat, Cog, Building, ClipboardCheck, Wrench, Droplets, Truck, Square, Zap, User, Building2, GraduationCap, ShoppingBag, FileText, Microscope, Award, Users2, Stethoscope, Heart, Cross, CheckCircle2, X, Utensils, ChefHat, Wine, DoorOpen, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { useTranslation } from 'react-i18next';

const neighborhoods = [
  {
    id: "anthem",
    name: "Anthem",
    description: "Anthem restaurants trust our professional restaurant cleaning service for consistent facility maintenance that keeps their dining establishments operating smoothly and safely.",
    faq: [
      {
        question: "Do you work around Anthem restaurant schedules?",
        answer: "Yes, we can schedule cleanings around your dining hours, special events, and operational requirements for your convenience and business efficiency."
      },
      {
        question: "What if we're not satisfied with cleaning in Anthem?",
        answer: "We guarantee satisfaction and will return to address any concerns at no additional charge, understanding the critical nature of your restaurant operations."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Anthem restaurant spotless and health inspection ready for over two years. Highly recommend their professional service!",
      author: "Restaurant Manager, Anthem Dining"
    }
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "Enterprise restaurants enjoy consistent, professional restaurant cleaning services that maintain their facilities clean and operating at optimal health standards year-round.",
    faq: [
      {
        question: "How often do Enterprise restaurants schedule cleaning?",
        answer: "Most Enterprise restaurants prefer daily or weekly cleaning, though we offer flexible scheduling based on your operational requirements and dining volume."
      },
      {
        question: "Do you provide emergency cleaning services in Enterprise?",
        answer: "Yes, we offer emergency cleaning services for unexpected situations, health inspection preparation, and urgent facility maintenance needs."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Enterprise restaurant to perfection. Their professionalism and understanding of restaurant hygiene requirements are outstanding.",
      author: "Operations Director, Enterprise Restaurant Group"
    }
  },
  {
    id: "green-valley-north",
    name: "Green Valley North",
    description: "Green Valley North restaurants rely on our professional restaurant cleaning service for consistent facility maintenance that keeps their dining establishments operating smoothly and safely.",
    faq: [
      {
        question: "Do you service high-end restaurants in Green Valley North?",
        answer: "Yes, we have extensive experience cleaning premium restaurants, including those with sophisticated equipment, luxury amenities, and high-end dining standards."
      },
      {
        question: "How do you ensure food safety in Green Valley North restaurants?",
        answer: "All our team members are trained in food safety protocols, use food-safe cleaning products, and follow strict hygiene standards to protect your customers and business."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Green Valley North restaurant spotless and health inspection ready for over two years. Highly recommend their professional service!",
      author: "Restaurant Manager, Green Valley North Dining"
    }
  },
  {
    id: "henderson",
    name: "Henderson",
    description: "Henderson restaurants trust our professional restaurant cleaning service for consistent facility maintenance that keeps their dining establishments operating smoothly and safely.",
    faq: [
      {
        question: "Do you work around Henderson restaurant schedules?",
        answer: "Yes, we can schedule cleanings around your dining hours, special events, and operational requirements for your convenience and business efficiency."
      },
      {
        question: "What if we're not satisfied with cleaning in Henderson?",
        answer: "We guarantee satisfaction and will return to address any concerns at no additional charge, understanding the critical nature of your restaurant operations."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Henderson restaurant to perfection. Their professionalism and understanding of restaurant hygiene requirements are outstanding.",
      author: "Operations Director, Henderson Restaurant Group"
    }
  },
  {
    id: "lake-las-vegas",
    name: "Lake Las Vegas",
    description: "Lake Las Vegas restaurants enjoy consistent, professional restaurant cleaning services that maintain their facilities clean and operating at optimal health standards year-round.",
    faq: [
      {
        question: "How often do Lake Las Vegas restaurants schedule cleaning?",
        answer: "Most Lake Las Vegas restaurants prefer daily or weekly cleaning, though we offer flexible scheduling based on your operational requirements and dining volume."
      },
      {
        question: "Do you provide emergency cleaning services in Lake Las Vegas?",
        answer: "Yes, we offer emergency cleaning services for unexpected situations, health inspection preparation, and urgent facility maintenance needs."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Lake Las Vegas restaurant spotless and health inspection ready for over two years. Highly recommend their professional service!",
      author: "Restaurant Manager, Lake Las Vegas Dining"
    }
  },
  {
    id: "las-vegas",
    name: "Las Vegas",
    description: "Las Vegas restaurants rely on our professional restaurant cleaning service for consistent facility maintenance that keeps their dining establishments operating smoothly and safely.",
    faq: [
      {
        question: "Do you service high-end restaurants in Las Vegas?",
        answer: "Yes, we have extensive experience cleaning premium restaurants, including those with sophisticated equipment, luxury amenities, and high-end dining standards."
      },
      {
        question: "How do you ensure food safety in Las Vegas restaurants?",
        answer: "All our team members are trained in food safety protocols, use food-safe cleaning products, and follow strict hygiene standards to protect your customers and business."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Las Vegas restaurant to perfection. Their professionalism and understanding of restaurant hygiene requirements are outstanding.",
      author: "Operations Director, Las Vegas Restaurant Group"
    }
  },
  {
    id: "macdonald-ranch",
    name: "MacDonald Ranch",
    description: "MacDonald Ranch restaurants trust our professional restaurant cleaning service for consistent facility maintenance that keeps their dining establishments operating smoothly and safely.",
    faq: [
      {
        question: "Do you work around MacDonald Ranch restaurant schedules?",
        answer: "Yes, we can schedule cleanings around your dining hours, special events, and operational requirements for your convenience and business efficiency."
      },
      {
        question: "What if we're not satisfied with cleaning in MacDonald Ranch?",
        answer: "We guarantee satisfaction and will return to address any concerns at no additional charge, understanding the critical nature of your restaurant operations."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our MacDonald Ranch restaurant spotless and health inspection ready for over two years. Highly recommend their professional service!",
      author: "Restaurant Manager, MacDonald Ranch Dining"
    }
  },
  {
    id: "mountains-edge",
    name: "Mountain's Edge",
    description: "Mountain's Edge restaurants enjoy consistent, professional restaurant cleaning services that maintain their facilities clean and operating at optimal health standards year-round.",
    faq: [
      {
        question: "How often do Mountain's Edge restaurants schedule cleaning?",
        answer: "Most Mountain's Edge restaurants prefer daily or weekly cleaning, though we offer flexible scheduling based on your operational requirements and dining volume."
      },
      {
        question: "Do you provide emergency cleaning services in Mountain's Edge?",
        answer: "Yes, we offer emergency cleaning services for unexpected situations, health inspection preparation, and urgent facility maintenance needs."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Mountain's Edge restaurant to perfection. Their professionalism and understanding of restaurant hygiene requirements are outstanding.",
      author: "Operations Director, Mountain's Edge Restaurant Group"
    }
  },
  {
    id: "north-las-vegas",
    name: "North Las Vegas",
    description: "North Las Vegas restaurants rely on our professional restaurant cleaning service for consistent facility maintenance that keeps their dining establishments operating smoothly and safely.",
    faq: [
      {
        question: "Do you service high-end restaurants in North Las Vegas?",
        answer: "Yes, we have extensive experience cleaning premium restaurants, including those with sophisticated equipment, luxury amenities, and high-end dining standards."
      },
      {
        question: "How do you ensure food safety in North Las Vegas restaurants?",
        answer: "All our team members are trained in food safety protocols, use food-safe cleaning products, and follow strict hygiene standards to protect your customers and business."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our North Las Vegas restaurant spotless and health inspection ready for over two years. Highly recommend their professional service!",
      author: "Restaurant Manager, North Las Vegas Dining"
    }
  },
  {
    id: "paradise",
    name: "Paradise",
    description: "Paradise restaurants trust our professional restaurant cleaning service for consistent facility maintenance that keeps their dining establishments operating smoothly and safely.",
    faq: [
      {
        question: "Do you work around Paradise restaurant schedules?",
        answer: "Yes, we can schedule cleanings around your dining hours, special events, and operational requirements for your convenience and business efficiency."
      },
      {
        question: "What if we're not satisfied with cleaning in Paradise?",
        answer: "We guarantee satisfaction and will return to address any concerns at no additional charge, understanding the critical nature of your restaurant operations."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Paradise restaurant to perfection. Their professionalism and understanding of restaurant hygiene requirements are outstanding.",
      author: "Operations Director, Paradise Restaurant Group"
    }
  },
  {
    id: "seven-hills",
    name: "Seven Hills",
    description: "Seven Hills restaurants enjoy consistent, professional restaurant cleaning services that maintain their facilities clean and operating at optimal health standards year-round.",
    faq: [
      {
        question: "How often do Seven Hills restaurants schedule cleaning?",
        answer: "Most Seven Hills restaurants prefer daily or weekly cleaning, though we offer flexible scheduling based on your operational requirements and dining volume."
      },
      {
        question: "Do you provide emergency cleaning services in Seven Hills?",
        answer: "Yes, we offer emergency cleaning services for unexpected situations, health inspection preparation, and urgent facility maintenance needs."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Seven Hills restaurant spotless and health inspection ready for over two years. Highly recommend their professional service!",
      author: "Restaurant Manager, Seven Hills Dining"
    }
  },
  {
    id: "silverado-ranch",
    name: "Silverado Ranch",
    description: "Silverado Ranch restaurants rely on our professional restaurant cleaning service for consistent facility maintenance that keeps their dining establishments operating smoothly and safely.",
    faq: [
      {
        question: "Do you service high-end restaurants in Silverado Ranch?",
        answer: "Yes, we have extensive experience cleaning premium restaurants, including those with sophisticated equipment, luxury amenities, and high-end dining standards."
      },
      {
        question: "How do you ensure food safety in Silverado Ranch restaurants?",
        answer: "All our team members are trained in food safety protocols, use food-safe cleaning products, and follow strict hygiene standards to protect your customers and business."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Silverado Ranch restaurant to perfection. Their professionalism and understanding of restaurant hygiene requirements are outstanding.",
      author: "Operations Director, Silverado Ranch Restaurant Group"
    }
  },
  {
    id: "spring-valley",
    name: "Spring Valley",
    description: "Spring Valley restaurants trust our professional restaurant cleaning service for consistent facility maintenance that keeps their dining establishments operating smoothly and safely.",
    faq: [
      {
        question: "Do you work around Spring Valley restaurant schedules?",
        answer: "Yes, we can schedule cleanings around your dining hours, special events, and operational requirements for your convenience and business efficiency."
      },
      {
        question: "What if we're not satisfied with cleaning in Spring Valley?",
        answer: "We guarantee satisfaction and will return to address any concerns at no additional charge, understanding the critical nature of your restaurant operations."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Spring Valley restaurant spotless and health inspection ready for over two years. Highly recommend their professional service!",
      author: "Restaurant Manager, Spring Valley Dining"
    }
  },
  {
    id: "summerlin-south",
    name: "Summerlin South",
    description: "Summerlin South restaurants enjoy consistent, professional restaurant cleaning services that maintain their facilities clean and operating at optimal health standards year-round.",
    faq: [
      {
        question: "How often do Summerlin South restaurants schedule cleaning?",
        answer: "Most Summerlin South restaurants prefer daily or weekly cleaning, though we offer flexible scheduling based on your operational requirements and dining volume."
      },
      {
        question: "Do you provide emergency cleaning services in Summerlin South?",
        answer: "Yes, we offer emergency cleaning services for unexpected situations, health inspection preparation, and urgent facility maintenance needs."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Summerlin South restaurant to perfection. Their professionalism and understanding of restaurant hygiene requirements are outstanding.",
      author: "Operations Director, Summerlin South Restaurant Group"
    }
  },
  {
    id: "sunrise-manor",
    name: "Sunrise Manor",
    description: "Sunrise Manor restaurants rely on our professional restaurant cleaning service for consistent facility maintenance that keeps their dining establishments operating smoothly and safely.",
    faq: [
      {
        question: "Do you service high-end restaurants in Sunrise Manor?",
        answer: "Yes, we have extensive experience cleaning premium restaurants, including those with sophisticated equipment, luxury amenities, and high-end dining standards."
      },
      {
        question: "How do you ensure food safety in Sunrise Manor restaurants?",
        answer: "All our team members are trained in food safety protocols, use food-safe cleaning products, and follow strict hygiene standards to protect your customers and business."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Sunrise Manor restaurant spotless and health inspection ready for over two years. Highly recommend their professional service!",
      author: "Restaurant Manager, Sunrise Manor Dining"
    }
  },
  {
    id: "whitney",
    name: "Whitney",
    description: "Whitney restaurants trust our professional restaurant cleaning service for consistent facility maintenance that keeps their dining establishments operating smoothly and safely.",
    faq: [
      {
        question: "Do you work around Whitney restaurant schedules?",
        answer: "Yes, we can schedule cleanings around your dining hours, special events, and operational requirements for your convenience and business efficiency."
      },
      {
        question: "What if we're not satisfied with cleaning in Whitney?",
        answer: "We guarantee satisfaction and will return to address any concerns at no additional charge, understanding the critical nature of your restaurant operations."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Whitney restaurant to perfection. Their professionalism and understanding of restaurant hygiene requirements are outstanding.",
      author: "Operations Director, Whitney Restaurant Group"
    }
  },
  {
    id: "winchester",
    name: "Winchester",
    description: "Winchester restaurants enjoy consistent, professional restaurant cleaning services that maintain their facilities clean and operating at optimal health standards year-round.",
    faq: [
      {
        question: "How often do Winchester restaurants schedule cleaning?",
        answer: "Most Winchester restaurants prefer daily or weekly cleaning, though we offer flexible scheduling based on your operational requirements and dining volume."
      },
      {
        question: "Do you provide emergency cleaning services in Winchester?",
        answer: "Yes, we offer emergency cleaning services for unexpected situations, health inspection preparation, and urgent facility maintenance needs."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Winchester restaurant spotless and health inspection ready for over two years. Highly recommend their professional service!",
      author: "Restaurant Manager, Winchester Dining"
    }
  }
];

const RestaurantCleaningLasVegasPage = () => {
  const { t } = useTranslation();
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
        <title>{t(`commercialServices.lasVegas.restaurant.title`, { defaultValue: "Restaurant Cleaning Las Vegas | Red Rock Cleans" })}</title>
        <meta name="description" content={t(`commercialServices.lasVegas.restaurant.description`, { defaultValue: "Restaurant cleaning in Las Vegas. Food-safe service maintaining health code compliance in Las Vegas & Henderson. Book now!" })} />
      </Helmet>
      
      <LasVegasNavigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/src/assets/hero-commercial.jpg" 
              alt="Professional restaurant cleaning service in a Las Vegas dining establishment"
              className="w-full h-full object-cover scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                Impeccable Restaurant Cleaning for 5-Star Experiences in Las Vegas
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                In the competitive Las Vegas dining scene, impeccable cleanliness is essential for earning top reviews, passing health inspections, and ensuring guest safety. Our specialized restaurant cleaning services help you maintain the highest standards of hygiene and presentation that discerning diners expect.
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

        {/* Exceeding Health Standards Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Exceeding Southern Nevada Health District Standards
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <ClipboardCheck className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Health Code & Inspection Ready</h3>
                      <p className="text-muted-foreground">
                        Our meticulous approach ensures your restaurant passes every health inspection with flying colors. We follow all Southern Nevada Health District guidelines and maintain detailed cleaning logs for your records.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Sparkles className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Kitchen Degreasing & Fire Safety</h3>
                      <p className="text-muted-foreground">
                        We focus on removing hazardous grease buildup in commercial kitchens, hoods, and exhaust systems. Our thorough degreasing reduces fire risks and ensures optimal equipment performance.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Utensils className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Unforgettable Guest Ambiance</h3>
                      <p className="text-muted-foreground">
                        A spotless front-of-house creates a welcoming, high-end atmosphere for diners. We ensure every surface sparkles, from dining tables to restrooms, creating the perfect backdrop for memorable dining experiences.
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
                Our Comprehensive Restaurant Cleaning Checklist
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <DoorOpen className="h-10 w-10 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-3">Front-of-House</h3>
                      <p className="text-muted-foreground text-sm">
                        Complete cleaning of dining areas, entryways, windows, and customer-facing spaces. We ensure every table, chair, and surface meets the highest standards of cleanliness and presentation.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <ChefHat className="h-10 w-10 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-3">Commercial Kitchens</h3>
                      <p className="text-muted-foreground text-sm">
                        Deep cleaning of food prep surfaces, equipment, floors, and all kitchen areas. We sanitize all surfaces that come into contact with food and ensure compliance with health department standards.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Wine className="h-10 w-10 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-3">Bar Areas</h3>
                      <p className="text-muted-foreground text-sm">
                        Sanitizing taps, cleaning behind the bar, and maintaining floor mats. We ensure all bar equipment is properly cleaned and sanitized, maintaining the highest standards for beverage service.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Droplets className="h-10 w-10 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-3">Restrooms</h3>
                      <p className="text-muted-foreground text-sm">
                        Intensive sanitation and restocking to meet guest expectations. We ensure all restroom facilities are spotless, well-stocked, and meet the highest standards of hygiene and presentation.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Recipe for Success Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Our Recipe for a Spotless Las Vegas Restaurant
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    <CountUp end={500} duration={2} />+
                  </div>
                  <h3 className="text-lg font-semibold mb-2">5-Star Reviews Supported</h3>
                  <p className="text-muted-foreground text-sm">
                    Las Vegas restaurants trust our specialized cleaning services
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">100%</div>
                  <h3 className="text-lg font-semibold mb-2">Health Inspections Passed</h3>
                  <p className="text-muted-foreground text-sm">
                    All our restaurant clients pass health inspections with flying colors
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Utensils className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    <CountUp end={10000} duration={2} />+
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Happy Diners Served</h3>
                  <p className="text-muted-foreground text-sm">
                    Through our restaurant cleaning services across Las Vegas
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
                Areas We Serve in Las Vegas
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
                    <option value="">Select a Las Vegas Area</option>
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
                          <h4 className="font-semibold mb-2">Local Restaurant Cleaning Services</h4>
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
                          <Link to="/commercial-quote?location=las-vegas">
                            Get Restaurant Cleaning Quote for {neighborhood.name}
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
                Other Commercial Cleaning Services in Las Vegas
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
                      <Link to="/las-vegas/retail-cleaning">Learn More</Link>
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
                      <Link to="/las-vegas/gym-cleaning">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <Building className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Showroom Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Specialized cleaning for automotive and retail showrooms
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/las-vegas/showroom-cleaning">Learn More</Link>
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
                <AccordionItem value="health-inspections" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">How do you help restaurants pass health inspections?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      We follow all Southern Nevada Health District guidelines and maintain detailed cleaning logs. Our team is trained in food safety protocols and uses only food-safe cleaning products. We ensure all surfaces that come into contact with food are properly sanitized and all equipment is cleaned according to health department standards.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="scheduling" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">Can you work around our restaurant hours?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Yes, we can schedule cleanings around your dining hours, special events, and operational requirements. We offer flexible scheduling including early morning, late night, and weekend cleaning to minimize disruption to your business operations.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="kitchen-cleaning" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">What's included in commercial kitchen cleaning?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Our commercial kitchen cleaning includes deep cleaning of all food prep surfaces, equipment sanitization, floor cleaning and degreasing, hood and exhaust system cleaning, and thorough sanitization of all surfaces that come into contact with food. We also clean and sanitize all kitchen equipment and appliances.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="emergency-services" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">Do you offer emergency cleaning services?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Yes, we offer emergency cleaning services for unexpected situations, health inspection preparation, and urgent facility maintenance needs. We understand that restaurants sometimes need immediate cleaning assistance, and we're available to help when you need us most.
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
              Ready to Elevate Your Restaurant's Cleanliness Standards?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join hundreds of Las Vegas restaurants that trust Red Rock Cleans for their cleaning needs
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
              <Link to="/commercial-quote?location=las-vegas">Get Your Free Restaurant Cleaning Quote</Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default RestaurantCleaningLasVegasPage;

import { OahuNavigation } from "@/components/OahuNavigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ClipboardCheck, Flame, Sparkles, DoorOpen, ChefHat, Droplets, Hand, Star, CheckCircle, Utensils, MapPin, Calendar, Phone, Users, Clock, Award, ShoppingBag, Building, GraduationCap, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import CountUp from "react-countup";

const neighborhoods = [
  {
    id: "aiea",
    name: "Aiea",
    description: "Aiea restaurants and dining establishments trust our professional restaurant cleaning services for comprehensive, health code-compliant facility maintenance that ensures guest satisfaction, regulatory compliance, and optimal dining environment standards.",
    faq: [
      {
        question: "Do you provide health code compliant cleaning for Aiea restaurants?",
        answer: "Yes, all our restaurant cleaning services strictly adhere to Hawaii Department of Health regulations and food safety standards. Our team is trained in restaurant cleaning protocols and uses specialized equipment to ensure complete compliance and health inspection readiness."
      },
      {
        question: "What if we're not satisfied with restaurant cleaning in Aiea?",
        answer: "We guarantee satisfaction and will return to address any concerns at no additional charge, understanding the critical nature of restaurant operations and the importance of maintaining clean, safe dining environments."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Aiea restaurant spotless and health code compliant for over two years. Their attention to detail and kitchen degreasing is outstanding!",
      author: "Restaurant Manager, Aiea Bistro"
    }
  },
  {
    id: "ewa-beach",
    name: "Ewa Beach",
    description: "Ewa Beach restaurants rely on our professional restaurant cleaning services for consistent, health code-compliant facility maintenance that keeps their dining establishments operating safely and efficiently with the highest standards of cleanliness.",
    faq: [
      {
        question: "How often do Ewa Beach restaurants schedule cleaning?",
        answer: "Most Ewa Beach restaurants prefer daily or multiple times per week cleaning schedules, though we offer flexible scheduling based on your dining volume and operational needs."
      },
      {
        question: "Do you provide emergency cleaning services in Ewa Beach?",
        answer: "Yes, we offer emergency restaurant cleaning services for unexpected situations, health inspections, and urgent facility maintenance needs with rapid response times."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Ewa Beach restaurant to perfection. Their professionalism and understanding of health code requirements are outstanding.",
      author: "Owner, Ewa Beach Grill"
    }
  },
  {
    id: "hawaii-kai",
    name: "Hawaii Kai",
    description: "Hawaii Kai restaurants trust our professional restaurant cleaning services for comprehensive, health code-compliant facility maintenance that ensures optimal guest satisfaction, regulatory compliance, and dining experience excellence in the competitive restaurant market.",
    faq: [
      {
        question: "Do you service fine dining establishments in Hawaii Kai?",
        answer: "Yes, we have extensive experience cleaning various restaurant types, including fine dining, casual dining, fast food, and specialty establishments with unique cleaning requirements and high standards."
      },
      {
        question: "How do you ensure kitchen equipment safety in Hawaii Kai restaurants?",
        answer: "We use only restaurant-safe cleaning products and follow manufacturer guidelines to ensure kitchen equipment safety while maintaining the highest standards of cleanliness and food safety."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Hawaii Kai restaurant spotless and health code compliant for over two years. Highly recommend their professional restaurant cleaning service!",
      author: "Chef, Hawaii Kai Restaurant"
    }
  },
  {
    id: "honolulu",
    name: "Honolulu",
    description: "Honolulu restaurants and dining establishments enjoy consistent, professional restaurant cleaning services that maintain their facilities clean and operating at optimal guest satisfaction and health code compliance standards year-round.",
    faq: [
      {
        question: "Do you work around Honolulu restaurant schedules?",
        answer: "Yes, we can schedule cleanings around your dining hours, kitchen prep times, and operational requirements to minimize disruption to your restaurant operations and guest service."
      },
      {
        question: "What if we're not satisfied with restaurant cleaning in Honolulu?",
        answer: "We guarantee satisfaction and will return to address any concerns at no additional charge, understanding the critical nature of restaurant operations and guest satisfaction requirements."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Honolulu restaurant to perfection. Their professionalism and understanding of health code requirements are outstanding.",
      author: "General Manager, Honolulu Dining"
    }
  },
  {
    id: "kailua",
    name: "Kailua",
    description: "Kailua restaurants trust our professional restaurant cleaning services for comprehensive, health code-compliant facility maintenance that ensures optimal guest satisfaction, regulatory compliance, and dining experience excellence in the competitive restaurant market.",
    faq: [
      {
        question: "How often do Kailua restaurants schedule cleaning?",
        answer: "Most Kailua restaurants prefer daily or multiple times per week cleaning schedules, though we offer flexible scheduling based on your dining volume and operational needs."
      },
      {
        question: "Do you provide emergency cleaning services in Kailua?",
        answer: "Yes, we offer emergency restaurant cleaning services for unexpected situations, health inspections, and urgent facility maintenance needs with rapid response times."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Kailua restaurant spotless and health code compliant for over two years. Their attention to detail and kitchen degreasing is outstanding!",
      author: "Restaurant Manager, Kailua Cafe"
    }
  },
  {
    id: "kapolei",
    name: "Kapolei",
    description: "Kapolei restaurants rely on our professional restaurant cleaning services for consistent, health code-compliant facility maintenance that keeps their dining establishments operating safely and efficiently with the highest standards of cleanliness.",
    faq: [
      {
        question: "Do you service fine dining establishments in Kapolei?",
        answer: "Yes, we have extensive experience cleaning various restaurant types, including fine dining, casual dining, fast food, and specialty establishments with unique cleaning requirements and high standards."
      },
      {
        question: "How do you ensure kitchen equipment safety in Kapolei restaurants?",
        answer: "We use only restaurant-safe cleaning products and follow manufacturer guidelines to ensure kitchen equipment safety while maintaining the highest standards of cleanliness and food safety."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Kapolei restaurant to perfection. Their professionalism and understanding of health code requirements are outstanding.",
      author: "Owner, Kapolei Eatery"
    }
  },
  {
    id: "makakilo",
    name: "Makakilo",
    description: "Makakilo restaurants trust our professional restaurant cleaning services for comprehensive, health code-compliant facility maintenance that ensures optimal guest satisfaction, regulatory compliance, and dining experience excellence in the competitive restaurant market.",
    faq: [
      {
        question: "Do you provide health code compliant cleaning for Makakilo restaurants?",
        answer: "Yes, all our restaurant cleaning services strictly adhere to Hawaii Department of Health regulations and food safety standards. Our team is trained in restaurant cleaning protocols and uses specialized equipment to ensure complete compliance and health inspection readiness."
      },
      {
        question: "What if we're not satisfied with restaurant cleaning in Makakilo?",
        answer: "We guarantee satisfaction and will return to address any concerns at no additional charge, understanding the critical nature of restaurant operations and the importance of maintaining clean, safe dining environments."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Makakilo restaurant spotless and health code compliant for over two years. Highly recommend their professional restaurant cleaning service!",
      author: "Chef, Makakilo Restaurant"
    }
  },
  {
    id: "mililani",
    name: "Mililani",
    description: "Mililani restaurants rely on our professional restaurant cleaning services for consistent, health code-compliant facility maintenance that keeps their dining establishments operating safely and efficiently with the highest standards of cleanliness.",
    faq: [
      {
        question: "How often do Mililani restaurants schedule cleaning?",
        answer: "Most Mililani restaurants prefer daily or multiple times per week cleaning schedules, though we offer flexible scheduling based on your dining volume and operational needs."
      },
      {
        question: "Do you provide emergency cleaning services in Mililani?",
        answer: "Yes, we offer emergency restaurant cleaning services for unexpected situations, health inspections, and urgent facility maintenance needs with rapid response times."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Mililani restaurant to perfection. Their professionalism and understanding of health code requirements are outstanding.",
      author: "General Manager, Mililani Dining"
    }
  },
  {
    id: "pearl-city",
    name: "Pearl City",
    description: "Pearl City restaurants trust our professional restaurant cleaning services for comprehensive, health code-compliant facility maintenance that ensures optimal guest satisfaction, regulatory compliance, and dining experience excellence in the competitive restaurant market.",
    faq: [
      {
        question: "Do you service fine dining establishments in Pearl City?",
        answer: "Yes, we have extensive experience cleaning various restaurant types, including fine dining, casual dining, fast food, and specialty establishments with unique cleaning requirements and high standards."
      },
      {
        question: "How do you ensure kitchen equipment safety in Pearl City restaurants?",
        answer: "We use only restaurant-safe cleaning products and follow manufacturer guidelines to ensure kitchen equipment safety while maintaining the highest standards of cleanliness and food safety."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Pearl City restaurant spotless and health code compliant for over two years. Their attention to detail and kitchen degreasing is outstanding!",
      author: "Restaurant Manager, Pearl City Bistro"
    }
  },
  {
    id: "waialae",
    name: "Waialae",
    description: "Waialae restaurants and dining establishments enjoy consistent, professional restaurant cleaning services that maintain their facilities clean and operating at optimal guest satisfaction and health code compliance standards year-round.",
    faq: [
      {
        question: "Do you work around Waialae restaurant schedules?",
        answer: "Yes, we can schedule cleanings around your dining hours, kitchen prep times, and operational requirements to minimize disruption to your restaurant operations and guest service."
      },
      {
        question: "What if we're not satisfied with restaurant cleaning in Waialae?",
        answer: "We guarantee satisfaction and will return to address any concerns at no additional charge, understanding the critical nature of restaurant operations and guest satisfaction requirements."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Waialae restaurant to perfection. Their professionalism and understanding of health code requirements are outstanding.",
      author: "Owner, Waialae Dining"
    }
  },
  {
    id: "waikiki",
    name: "Waikiki",
    description: "Waikiki restaurants trust our professional restaurant cleaning services for comprehensive, health code-compliant facility maintenance that ensures optimal guest satisfaction, regulatory compliance, and dining experience excellence in the competitive restaurant market.",
    faq: [
      {
        question: "How often do Waikiki restaurants schedule cleaning?",
        answer: "Most Waikiki restaurants prefer daily or multiple times per week cleaning schedules, though we offer flexible scheduling based on your dining volume and operational needs."
      },
      {
        question: "Do you provide emergency cleaning services in Waikiki?",
        answer: "Yes, we offer emergency restaurant cleaning services for unexpected situations, health inspections, and urgent facility maintenance needs with rapid response times."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Waikiki restaurant spotless and health code compliant for over two years. Highly recommend their professional restaurant cleaning service!",
      author: "Chef, Waikiki Restaurant"
    }
  },
  {
    id: "waimanalo",
    name: "Waimanalo",
    description: "Waimanalo restaurants rely on our professional restaurant cleaning services for consistent, health code-compliant facility maintenance that keeps their dining establishments operating safely and efficiently with the highest standards of cleanliness.",
    faq: [
      {
        question: "Do you service fine dining establishments in Waimanalo?",
        answer: "Yes, we have extensive experience cleaning various restaurant types, including fine dining, casual dining, fast food, and specialty establishments with unique cleaning requirements and high standards."
      },
      {
        question: "How do you ensure kitchen equipment safety in Waimanalo restaurants?",
        answer: "We use only restaurant-safe cleaning products and follow manufacturer guidelines to ensure kitchen equipment safety while maintaining the highest standards of cleanliness and food safety."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Waimanalo restaurant to perfection. Their professionalism and understanding of health code requirements are outstanding.",
      author: "General Manager, Waimanalo Eatery"
    }
  },
  {
    id: "waipahu",
    name: "Waipahu",
    description: "Waipahu restaurants trust our professional restaurant cleaning services for comprehensive, health code-compliant facility maintenance that ensures optimal guest satisfaction, regulatory compliance, and dining experience excellence in the competitive restaurant market.",
    faq: [
      {
        question: "Do you provide health code compliant cleaning for Waipahu restaurants?",
        answer: "Yes, all our restaurant cleaning services strictly adhere to Hawaii Department of Health regulations and food safety standards. Our team is trained in restaurant cleaning protocols and uses specialized equipment to ensure complete compliance and health inspection readiness."
      },
      {
        question: "What if we're not satisfied with restaurant cleaning in Waipahu?",
        answer: "We guarantee satisfaction and will return to address any concerns at no additional charge, understanding the critical nature of restaurant operations and the importance of maintaining clean, safe dining environments."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Waipahu restaurant spotless and health code compliant for over two years. Their attention to detail and kitchen degreasing is outstanding!",
      author: "Restaurant Manager, Waipahu Grill"
    }
  }
];

const RestaurantCleaningOahuPage = () => {
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
        <title>Restaurant Cleaning Oahu | Red Rock Cleans</title>
        <meta name="description" content="Professional restaurant cleaning on Oahu. Red Rock Cleans helps you pass health inspections and earn 5-star reviews with comprehensive kitchen and dining room cleaning in Honolulu and Waikiki." />
        <meta name="keywords" content="restaurant cleaning near me, commercial kitchen cleaning Oahu, bar cleaning Honolulu, dining room cleaning Waikiki, best restaurant cleaners Oahu, kitchen degreasing Honolulu, front of house cleaning Oahu, health code cleaning Oahu, restaurant cleaning cost Oahu, commercial kitchen cleaning prices Honolulu, restaurant cleaning checklist Oahu, hire restaurant cleaners in Oahu" />
        <link rel="canonical" href="https://redrockcleans.com/oahu/restaurant-cleaning" />
      </Helmet>
      
      <OahuNavigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/src/assets/hero-commercial.jpg" 
              alt="Professional restaurant cleaning service in a dining establishment on Oahu"
              className="w-full h-full object-cover scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                Impeccable Restaurant Cleaning for 5-Star Experiences on Oahu
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                In Oahu's competitive dining scene, cleanliness is just as important as the food and service for earning top reviews and ensuring guest safety. Our specialized restaurant cleaning services help you pass health inspections, maintain pristine dining environments, and create unforgettable guest experiences that keep diners coming back.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="h-14 text-lg px-8" asChild>
                  <Link to="/commercial-quote?location=oahu">
                    <Calendar className="w-5 h-5 mr-2" />
                    Get Your Free Quote
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="h-14 text-lg px-8" asChild>
                  <Link to="/contact">
                    <Phone className="w-5 h-5 mr-2" />
                    Contact Us
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Exceeding Hawaii Department of Health Standards Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Exceeding Hawaii Department of Health Standards
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <ClipboardCheck className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Health Code & Inspection Ready</h3>
                      <p className="text-muted-foreground">
                        Our meticulous approach to help you ace health inspections. We follow all Hawaii Department of Health regulations and food safety standards, ensuring your restaurant is always inspection-ready with detailed cleaning protocols and documentation.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Flame className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Kitchen Degreasing & Safety</h3>
                      <p className="text-muted-foreground">
                        Our focus on removing hazardous grease buildup in commercial kitchens. We use specialized degreasing products and techniques to eliminate grease from hoods, walls, equipment, and floors, reducing fire risks and maintaining a safe cooking environment.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Sparkles className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Unforgettable Guest Ambiance</h3>
                      <p className="text-muted-foreground">
                        How a spotless front-of-house creates a welcoming "aloha" atmosphere for diners. We ensure every surface sparkles, from dining tables to restrooms, creating the perfect first impression that enhances your guests' dining experience and encourages return visits.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Our Comprehensive Restaurant Cleaning Checklist Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Our Comprehensive Restaurant Cleaning Checklist
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <Card className="hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <DoorOpen className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Front-of-House</h3>
                      <p className="text-muted-foreground">
                        Cleaning dining areas, entryways, and windows. We ensure tables, chairs, floors, and all guest-facing areas are spotless, creating a welcoming atmosphere that enhances the dining experience and encourages positive reviews.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <ChefHat className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Commercial Kitchens</h3>
                      <p className="text-muted-foreground">
                        Deep cleaning food prep surfaces, equipment, and floors. We thoroughly sanitize all kitchen surfaces, equipment, and food preparation areas to meet health code standards and ensure food safety compliance.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Droplets className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Bar Areas</h3>
                      <p className="text-muted-foreground">
                        Sanitizing taps, cleaning behind the bar, and floor mats. We ensure all bar surfaces, equipment, and storage areas are thoroughly cleaned and sanitized to maintain beverage quality and hygiene standards.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Hand className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Restrooms</h3>
                      <p className="text-muted-foreground">
                        Intensive sanitation and restocking to meet guest expectations. We provide comprehensive restroom cleaning, sanitization, and restocking to ensure guest comfort and maintain the highest hygiene standards.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Our Recipe for a Spotless Oahu Restaurant Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Our Recipe for a Spotless Oahu Restaurant
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    <CountUp end={200} duration={2} />+
                  </div>
                  <h3 className="text-lg font-semibold mb-2">5-Star Reviews Supported</h3>
                  <p className="text-muted-foreground text-sm">
                    Oahu restaurants trust our cleaning services to maintain their reputation
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    <CountUp end={500} duration={2} />+
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Health Inspections Passed</h3>
                  <p className="text-muted-foreground text-sm">
                    Restaurants across Oahu with perfect health inspection records
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Utensils className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    <CountUp end={1000} duration={2} />+
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Happy Diners Served</h3>
                  <p className="text-muted-foreground text-sm">
                    Satisfied customers dining in our cleaned restaurants daily
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
                          <Link to="/commercial-quote?location=oahu">
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
                    <Award className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Gym Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Hygienic cleaning services for fitness centers and health clubs
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/oahu/gym-cleaning">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <Building className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Showroom Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Specialized cleaning services for showrooms and display areas
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/oahu/showroom-cleaning">Learn More</Link>
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
                      We follow all Hawaii Department of Health regulations and food safety standards. Our team is trained in restaurant cleaning protocols and uses specialized equipment to ensure complete compliance. We maintain detailed cleaning documentation and can provide inspection-ready reports to help you pass health inspections with confidence.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="kitchen-degreasing" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">What specialized cleaning do you provide for commercial kitchens?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      We provide comprehensive kitchen cleaning including hood degreasing, equipment sanitization, floor deep cleaning, and wall cleaning. Our specialized degreasing products and techniques eliminate grease buildup from all kitchen surfaces, reducing fire risks and maintaining food safety standards while ensuring equipment longevity.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="scheduling" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">Can you work around our restaurant's operating hours?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Yes, we can schedule cleanings around your dining hours, kitchen prep times, and operational requirements. We offer flexible scheduling including early morning, late evening, and overnight cleaning to minimize disruption to your restaurant operations and ensure your facility maintains the highest standards of cleanliness.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="front-of-house" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">What front-of-house cleaning services do you provide?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      We provide comprehensive front-of-house cleaning including dining area sanitization, table and chair cleaning, floor maintenance, window cleaning, entryway cleaning, and restroom sanitization. Our goal is to create a spotless, welcoming environment that enhances the guest dining experience and supports positive reviews.
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
              Join dozens of Oahu restaurants that trust Red Rock Cleans for their cleaning needs
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
              <Link to="/commercial-quote?location=oahu">Get Your Free Restaurant Cleaning Quote</Link>
            </Button>
          </div>
        </section>

        {/* Image Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <img 
                src="/static/service-products.jpg" 
                alt="An immaculate and empty upscale restaurant in Honolulu, cleaned by Red Rock Cleans"
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

export default RestaurantCleaningOahuPage;

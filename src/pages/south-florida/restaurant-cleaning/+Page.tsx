import { SouthFloridaNavigation } from "@/components/SouthFloridaNavigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ClipboardCheck, Flame, Sparkles, DoorOpen, ChefHat, Wine, Droplets, Star, CheckCircle, Utensils, MapPin, Calendar, Dumbbell, Building2, Building } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import CountUp from "react-countup";

const cities = [
  {
    id: "aventura",
    name: "Aventura",
    description: "Aventura restaurants trust our professional restaurant cleaning service for consistent facility maintenance that keeps their dining establishments operating smoothly and safely.",
    faq: [
      {
        question: "Do you work around Aventura restaurant schedules?",
        answer: "Yes, we can schedule cleanings around your dining hours, special events, and operational requirements for your convenience and business efficiency."
      },
      {
        question: "What if we're not satisfied with cleaning in Aventura?",
        answer: "We guarantee satisfaction and will return to address any concerns at no additional charge, understanding the critical nature of your restaurant operations."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Aventura restaurant spotless and health inspection ready for over two years. Highly recommend their professional service!",
      author: "Restaurant Manager, Aventura Dining"
    }
  },
  {
    id: "cooper-city",
    name: "Cooper City",
    description: "Cooper City restaurants enjoy consistent, professional restaurant cleaning services that maintain their facilities clean and operating at optimal health standards year-round.",
    faq: [
      {
        question: "How often do Cooper City restaurants schedule cleaning?",
        answer: "Most Cooper City restaurants prefer daily or weekly cleaning, though we offer flexible scheduling based on your operational requirements and dining volume."
      },
      {
        question: "Do you provide emergency cleaning services in Cooper City?",
        answer: "Yes, we offer emergency cleaning services for unexpected situations, health inspection preparation, and urgent facility maintenance needs."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Cooper City restaurant to perfection. Their professionalism and understanding of restaurant hygiene requirements are outstanding.",
      author: "Operations Director, Cooper City Restaurant Group"
    }
  },
  {
    id: "dania-beach",
    name: "Dania Beach",
    description: "Dania Beach restaurants rely on our professional restaurant cleaning service for consistent facility maintenance that keeps their dining establishments operating smoothly and safely.",
    faq: [
      {
        question: "Do you service high-end restaurants in Dania Beach?",
        answer: "Yes, we have extensive experience cleaning premium restaurants, including those with sophisticated equipment, luxury amenities, and high-end dining standards."
      },
      {
        question: "How do you ensure food safety in Dania Beach restaurants?",
        answer: "All our team members are trained in food safety protocols, use food-safe cleaning products, and follow strict hygiene standards to protect your customers and business."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Dania Beach restaurant spotless and health inspection ready for over two years. Highly recommend their professional service!",
      author: "Restaurant Manager, Dania Beach Dining"
    }
  },
  {
    id: "davie",
    name: "Davie",
    description: "Davie restaurants trust our professional restaurant cleaning service for consistent facility maintenance that keeps their dining establishments operating smoothly and safely.",
    faq: [
      {
        question: "Do you work around Davie restaurant schedules?",
        answer: "Yes, we can schedule cleanings around your dining hours, special events, and operational requirements for your convenience and business efficiency."
      },
      {
        question: "What if we're not satisfied with cleaning in Davie?",
        answer: "We guarantee satisfaction and will return to address any concerns at no additional charge, understanding the critical nature of your restaurant operations."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Davie restaurant to perfection. Their professionalism and understanding of restaurant hygiene requirements are outstanding.",
      author: "Operations Director, Davie Restaurant Group"
    }
  },
  {
    id: "fort-lauderdale",
    name: "Fort Lauderdale",
    description: "Fort Lauderdale restaurants enjoy consistent, professional restaurant cleaning services that maintain their facilities clean and operating at optimal health standards year-round.",
    faq: [
      {
        question: "How often do Fort Lauderdale restaurants schedule cleaning?",
        answer: "Most Fort Lauderdale restaurants prefer daily or weekly cleaning, though we offer flexible scheduling based on your operational requirements and dining volume."
      },
      {
        question: "Do you provide emergency cleaning services in Fort Lauderdale?",
        answer: "Yes, we offer emergency cleaning services for unexpected situations, health inspection preparation, and urgent facility maintenance needs."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Fort Lauderdale restaurant spotless and health inspection ready for over two years. Highly recommend their professional service!",
      author: "Restaurant Manager, Fort Lauderdale Dining"
    }
  },
  {
    id: "hallandale-beach",
    name: "Hallandale Beach",
    description: "Hallandale Beach restaurants rely on our professional restaurant cleaning service for consistent facility maintenance that keeps their dining establishments operating smoothly and safely.",
    faq: [
      {
        question: "Do you service high-end restaurants in Hallandale Beach?",
        answer: "Yes, we have extensive experience cleaning premium restaurants, including those with sophisticated equipment, luxury amenities, and high-end dining standards."
      },
      {
        question: "How do you ensure food safety in Hallandale Beach restaurants?",
        answer: "All our team members are trained in food safety protocols, use food-safe cleaning products, and follow strict hygiene standards to protect your customers and business."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Hallandale Beach restaurant to perfection. Their professionalism and understanding of restaurant hygiene requirements are outstanding.",
      author: "Operations Director, Hallandale Beach Restaurant Group"
    }
  },
  {
    id: "hollywood",
    name: "Hollywood",
    description: "Hollywood restaurants trust our professional restaurant cleaning service for consistent facility maintenance that keeps their dining establishments operating smoothly and safely.",
    faq: [
      {
        question: "Do you work around Hollywood restaurant schedules?",
        answer: "Yes, we can schedule cleanings around your dining hours, special events, and operational requirements for your convenience and business efficiency."
      },
      {
        question: "What if we're not satisfied with cleaning in Hollywood?",
        answer: "We guarantee satisfaction and will return to address any concerns at no additional charge, understanding the critical nature of your restaurant operations."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Hollywood restaurant spotless and health inspection ready for over two years. Highly recommend their professional service!",
      author: "Restaurant Manager, Hollywood Dining"
    }
  },
  {
    id: "las-olas",
    name: "Las Olas",
    description: "Las Olas restaurants enjoy consistent, professional restaurant cleaning services that maintain their facilities clean and operating at optimal health standards year-round.",
    faq: [
      {
        question: "How often do Las Olas restaurants schedule cleaning?",
        answer: "Most Las Olas restaurants prefer daily or weekly cleaning, though we offer flexible scheduling based on your operational requirements and dining volume."
      },
      {
        question: "Do you provide emergency cleaning services in Las Olas?",
        answer: "Yes, we offer emergency cleaning services for unexpected situations, health inspection preparation, and urgent facility maintenance needs."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Las Olas restaurant to perfection. Their professionalism and understanding of restaurant hygiene requirements are outstanding.",
      author: "Operations Director, Las Olas Restaurant Group"
    }
  },
  {
    id: "lauderdale-lakes",
    name: "Lauderdale Lakes",
    description: "Lauderdale Lakes restaurants rely on our professional restaurant cleaning service for consistent facility maintenance that keeps their dining establishments operating smoothly and safely.",
    faq: [
      {
        question: "Do you service high-end restaurants in Lauderdale Lakes?",
        answer: "Yes, we have extensive experience cleaning premium restaurants, including those with sophisticated equipment, luxury amenities, and high-end dining standards."
      },
      {
        question: "How do you ensure food safety in Lauderdale Lakes restaurants?",
        answer: "All our team members are trained in food safety protocols, use food-safe cleaning products, and follow strict hygiene standards to protect your customers and business."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Lauderdale Lakes restaurant spotless and health inspection ready for over two years. Highly recommend their professional service!",
      author: "Restaurant Manager, Lauderdale Lakes Dining"
    }
  },
  {
    id: "lauderhill",
    name: "Lauderhill",
    description: "Lauderhill restaurants trust our professional restaurant cleaning service for consistent facility maintenance that keeps their dining establishments operating smoothly and safely.",
    faq: [
      {
        question: "Do you work around Lauderhill restaurant schedules?",
        answer: "Yes, we can schedule cleanings around your dining hours, special events, and operational requirements for your convenience and business efficiency."
      },
      {
        question: "What if we're not satisfied with cleaning in Lauderhill?",
        answer: "We guarantee satisfaction and will return to address any concerns at no additional charge, understanding the critical nature of your restaurant operations."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Lauderhill restaurant to perfection. Their professionalism and understanding of restaurant hygiene requirements are outstanding.",
      author: "Operations Director, Lauderhill Restaurant Group"
    }
  },
  {
    id: "margate",
    name: "Margate",
    description: "Margate restaurants enjoy consistent, professional restaurant cleaning services that maintain their facilities clean and operating at optimal health standards year-round.",
    faq: [
      {
        question: "How often do Margate restaurants schedule cleaning?",
        answer: "Most Margate restaurants prefer daily or weekly cleaning, though we offer flexible scheduling based on your operational requirements and dining volume."
      },
      {
        question: "Do you provide emergency cleaning services in Margate?",
        answer: "Yes, we offer emergency cleaning services for unexpected situations, health inspection preparation, and urgent facility maintenance needs."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Margate restaurant spotless and health inspection ready for over two years. Highly recommend their professional service!",
      author: "Restaurant Manager, Margate Dining"
    }
  },
  {
    id: "miramar",
    name: "Miramar",
    description: "Miramar restaurants rely on our professional restaurant cleaning service for consistent facility maintenance that keeps their dining establishments operating smoothly and safely.",
    faq: [
      {
        question: "Do you service high-end restaurants in Miramar?",
        answer: "Yes, we have extensive experience cleaning premium restaurants, including those with sophisticated equipment, luxury amenities, and high-end dining standards."
      },
      {
        question: "How do you ensure food safety in Miramar restaurants?",
        answer: "All our team members are trained in food safety protocols, use food-safe cleaning products, and follow strict hygiene standards to protect your customers and business."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Miramar restaurant to perfection. Their professionalism and understanding of restaurant hygiene requirements are outstanding.",
      author: "Operations Director, Miramar Restaurant Group"
    }
  },
  {
    id: "north-lauderdale",
    name: "North Lauderdale",
    description: "North Lauderdale restaurants trust our professional restaurant cleaning service for consistent facility maintenance that keeps their dining establishments operating smoothly and safely.",
    faq: [
      {
        question: "Do you work around North Lauderdale restaurant schedules?",
        answer: "Yes, we can schedule cleanings around your dining hours, special events, and operational requirements for your convenience and business efficiency."
      },
      {
        question: "What if we're not satisfied with cleaning in North Lauderdale?",
        answer: "We guarantee satisfaction and will return to address any concerns at no additional charge, understanding the critical nature of your restaurant operations."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our North Lauderdale restaurant spotless and health inspection ready for over two years. Highly recommend their professional service!",
      author: "Restaurant Manager, North Lauderdale Dining"
    }
  },
  {
    id: "pembroke-pines",
    name: "Pembroke Pines",
    description: "Pembroke Pines restaurants enjoy consistent, professional restaurant cleaning services that maintain their facilities clean and operating at optimal health standards year-round.",
    faq: [
      {
        question: "How often do Pembroke Pines restaurants schedule cleaning?",
        answer: "Most Pembroke Pines restaurants prefer daily or weekly cleaning, though we offer flexible scheduling based on your operational requirements and dining volume."
      },
      {
        question: "Do you provide emergency cleaning services in Pembroke Pines?",
        answer: "Yes, we offer emergency cleaning services for unexpected situations, health inspection preparation, and urgent facility maintenance needs."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Pembroke Pines restaurant to perfection. Their professionalism and understanding of restaurant hygiene requirements are outstanding.",
      author: "Operations Director, Pembroke Pines Restaurant Group"
    }
  },
  {
    id: "plantation",
    name: "Plantation",
    description: "Plantation restaurants rely on our professional restaurant cleaning service for consistent facility maintenance that keeps their dining establishments operating smoothly and safely.",
    faq: [
      {
        question: "Do you service high-end restaurants in Plantation?",
        answer: "Yes, we have extensive experience cleaning premium restaurants, including those with sophisticated equipment, luxury amenities, and high-end dining standards."
      },
      {
        question: "How do you ensure food safety in Plantation restaurants?",
        answer: "All our team members are trained in food safety protocols, use food-safe cleaning products, and follow strict hygiene standards to protect your customers and business."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Plantation restaurant spotless and health inspection ready for over two years. Highly recommend their professional service!",
      author: "Restaurant Manager, Plantation Dining"
    }
  },
  {
    id: "southwest-ranches",
    name: "Southwest Ranches",
    description: "Southwest Ranches restaurants trust our professional restaurant cleaning service for consistent facility maintenance that keeps their dining establishments operating smoothly and safely.",
    faq: [
      {
        question: "Do you work around Southwest Ranches restaurant schedules?",
        answer: "Yes, we can schedule cleanings around your dining hours, special events, and operational requirements for your convenience and business efficiency."
      },
      {
        question: "What if we're not satisfied with cleaning in Southwest Ranches?",
        answer: "We guarantee satisfaction and will return to address any concerns at no additional charge, understanding the critical nature of your restaurant operations."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Southwest Ranches restaurant to perfection. Their professionalism and understanding of restaurant hygiene requirements are outstanding.",
      author: "Operations Director, Southwest Ranches Restaurant Group"
    }
  },
  {
    id: "sunny-isles-beach",
    name: "Sunny Isles Beach",
    description: "Sunny Isles Beach restaurants enjoy consistent, professional restaurant cleaning services that maintain their facilities clean and operating at optimal health standards year-round.",
    faq: [
      {
        question: "How often do Sunny Isles Beach restaurants schedule cleaning?",
        answer: "Most Sunny Isles Beach restaurants prefer daily or weekly cleaning, though we offer flexible scheduling based on your operational requirements and dining volume."
      },
      {
        question: "Do you provide emergency cleaning services in Sunny Isles Beach?",
        answer: "Yes, we offer emergency cleaning services for unexpected situations, health inspection preparation, and urgent facility maintenance needs."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Sunny Isles Beach restaurant spotless and health inspection ready for over two years. Highly recommend their professional service!",
      author: "Restaurant Manager, Sunny Isles Beach Dining"
    }
  },
  {
    id: "sunrise",
    name: "Sunrise",
    description: "Sunrise restaurants rely on our professional restaurant cleaning service for consistent facility maintenance that keeps their dining establishments operating smoothly and safely.",
    faq: [
      {
        question: "Do you service high-end restaurants in Sunrise?",
        answer: "Yes, we have extensive experience cleaning premium restaurants, including those with sophisticated equipment, luxury amenities, and high-end dining standards."
      },
      {
        question: "How do you ensure food safety in Sunrise restaurants?",
        answer: "All our team members are trained in food safety protocols, use food-safe cleaning products, and follow strict hygiene standards to protect your customers and business."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Sunrise restaurant to perfection. Their professionalism and understanding of restaurant hygiene requirements are outstanding.",
      author: "Operations Director, Sunrise Restaurant Group"
    }
  },
  {
    id: "tamarac",
    name: "Tamarac",
    description: "Tamarac restaurants trust our professional restaurant cleaning service for consistent facility maintenance that keeps their dining establishments operating smoothly and safely.",
    faq: [
      {
        question: "Do you work around Tamarac restaurant schedules?",
        answer: "Yes, we can schedule cleanings around your dining hours, special events, and operational requirements for your convenience and business efficiency."
      },
      {
        question: "What if we're not satisfied with cleaning in Tamarac?",
        answer: "We guarantee satisfaction and will return to address any concerns at no additional charge, understanding the critical nature of your restaurant operations."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Tamarac restaurant spotless and health inspection ready for over two years. Highly recommend their professional service!",
      author: "Restaurant Manager, Tamarac Dining"
    }
  },
  {
    id: "weston",
    name: "Weston",
    description: "Weston restaurants enjoy consistent, professional restaurant cleaning services that maintain their facilities clean and operating at optimal health standards year-round.",
    faq: [
      {
        question: "How often do Weston restaurants schedule cleaning?",
        answer: "Most Weston restaurants prefer daily or weekly cleaning, though we offer flexible scheduling based on your operational requirements and dining volume."
      },
      {
        question: "Do you provide emergency cleaning services in Weston?",
        answer: "Yes, we offer emergency cleaning services for unexpected situations, health inspection preparation, and urgent facility maintenance needs."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Weston restaurant to perfection. Their professionalism and understanding of restaurant hygiene requirements are outstanding.",
      author: "Operations Director, Weston Restaurant Group"
    }
  }
];

const RestaurantCleaningSouthFloridaPage = () => {
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
        <title>Restaurant Cleaning South Florida | Red Rock Cleans</title>
        <meta name="description" content="Professional restaurant cleaning in South Florida. Red Rock Cleans helps you pass health inspections and earn 5-star reviews with comprehensive kitchen and dining room cleaning." />
        <meta name="keywords" content="restaurant cleaning South Florida, restaurant cleaning near me, commercial kitchen cleaning South Florida, bar cleaning Fort Lauderdale, dining room cleaning Weston FL, best restaurant cleaners South Florida, kitchen degreasing Fort Lauderdale, front of house cleaning Broward County, health code cleaning South Florida, restaurant cleaning cost South Florida, commercial kitchen cleaning prices Fort Lauderdale, restaurant cleaning checklist South Florida, hire restaurant cleaners in South Florida" />
        <link rel="canonical" href="https://redrockcleans.com/south-florida/restaurant-cleaning" />
      </Helmet>
      
      <SouthFloridaNavigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/src/assets/hero-commercial.jpg" 
              alt="Professional restaurant cleaning service in a South Florida dining establishment"
              className="w-full h-full object-cover scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                Impeccable Restaurant Cleaning for 5-Star Experiences in South Florida
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                In South Florida's competitive dining scene, impeccable cleanliness is essential for earning top reviews, passing health inspections, and ensuring guest safety. Our specialized restaurant cleaning services help you maintain the highest standards of hygiene and presentation that discerning diners expect and health authorities demand.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="h-14 text-lg px-8" asChild>
                  <Link to="/book-now-southflorida">
                    <Calendar className="w-5 h-5 mr-2" />
                    Get Your Free Quote
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="h-14 text-lg px-8" asChild>
                  <Link to="/contact">
                    <Utensils className="w-5 h-5 mr-2" />
                    Contact Us
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Exceeding Health & Safety Standards Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Exceeding Health & Safety Standards
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <ClipboardCheck className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Health Code & Inspection Ready</h3>
                      <p className="text-muted-foreground">
                        Our meticulous approach ensures your restaurant passes every health inspection with flying colors. We follow all Florida Department of Health guidelines and maintain detailed cleaning logs for your records. Our team is trained in food safety protocols and uses only food-safe cleaning products to protect your customers and business reputation.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Flame className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Kitchen Degreasing & Fire Safety</h3>
                      <p className="text-muted-foreground">
                        We focus on removing hazardous grease buildup in commercial kitchens, hoods, and exhaust systems. Our thorough degreasing reduces fire risks and ensures optimal equipment performance. This critical service protects your staff, customers, and business investment while maintaining compliance with fire safety regulations throughout South Florida.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Sparkles className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Unforgettable Guest Ambiance</h3>
                      <p className="text-muted-foreground">
                        A spotless front-of-house creates a welcoming, high-end atmosphere for diners. We ensure every surface sparkles, from dining tables to restrooms, creating the perfect backdrop for memorable dining experiences. First impressions matter, and our cleaning services help you earn those coveted 5-star reviews and positive social media mentions.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Comprehensive Restaurant Cleaning Checklist Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Our Comprehensive Restaurant Cleaning Checklist
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <DoorOpen className="h-10 w-10 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-3">Front-of-House</h3>
                      <p className="text-muted-foreground text-sm">
                        Complete cleaning of dining areas, entryways, windows, and customer-facing spaces. We ensure every table, chair, and surface meets the highest standards of cleanliness and presentation for your guests.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
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
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
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
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
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
                Our Recipe for a Spotless South Florida Restaurant
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
                    South Florida restaurants trust our specialized cleaning services
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
                    Through our restaurant cleaning services across South Florida
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
                Areas We Serve in South Florida
              </h2>
              
              {/* City Selector */}
              <div className="max-w-md mx-auto mb-12">
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    value={openAccordion}
                    onChange={(e) => {
                      const value = e.target.value;
                      setOpenAccordion(value);
                      window.location.hash = value;
                      setTimeout(() => {
                        const element = document.getElementById(value);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        }
                      }, 100);
                    }}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white text-gray-900"
                  >
                    <option value="">Select a South Florida Area</option>
                    {cities.map((city) => (
                      <option key={city.id} value={city.id}>
                        {city.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              
              <Accordion type="single" value={openAccordion} onValueChange={handleAccordionChange} className="space-y-4">
                {cities.map((city) => (
                  <AccordionItem key={city.id} value={city.id} id={city.id} className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <div>
                        <h3 className="text-lg font-semibold">{city.name}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{city.description}</p>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold mb-2">Restaurant Cleaning Services in {city.name}</h4>
                          <p className="text-muted-foreground">
                            {city.description}
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-2">Frequently Asked Questions</h4>
                          <div className="space-y-2">
                            {city.faq.map((faq, index) => (
                              <div key={index}>
                                <p className="font-medium text-sm">{faq.question}</p>
                                <p className="text-muted-foreground text-sm">{faq.answer}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="bg-primary/5 p-4 rounded-lg">
                          <p className="italic text-sm mb-2">"{city.testimonial.text}"</p>
                          <p className="text-sm font-medium">- {city.testimonial.author}</p>
                        </div>
                        
                        <Button asChild className="w-full">
                          <Link to="/book-now-southflorida">
                            Get Restaurant Cleaning Quote for {city.name}
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
                Other Commercial Cleaning Services in South Florida
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <Building2 className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Data Center Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Specialized cleaning for sensitive technology environments
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/south-florida/data-center-cleaning">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <Dumbbell className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Gym Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Hygienic cleaning services for fitness centers and health clubs
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/south-florida/gym-cleaning">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <Building className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Government Facility Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Compliant cleaning for government offices and public facilities
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/south-florida/government-facility-cleaning">Learn More</Link>
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
                    <h3 className="text-lg font-semibold">How do you help restaurants pass health inspections in South Florida?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      We follow all Florida Department of Health guidelines and maintain detailed cleaning logs. Our team is trained in food safety protocols and uses only food-safe cleaning products. We ensure all surfaces that come into contact with food are properly sanitized and all equipment is cleaned according to health department standards. Our systematic approach covers every area inspectors check, from kitchen cleanliness to restroom sanitation.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="cost" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">What is the cost of restaurant cleaning in South Florida?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Restaurant cleaning costs vary based on facility size, cleaning frequency, and specific needs. Small cafes and quick-service restaurants typically invest $300-$800 per cleaning, mid-size restaurants $800-$1,500, and large fine dining establishments $1,500-$3,000+. Most South Florida restaurants prefer daily or nightly service with periodic deep cleaning. We provide free, detailed quotes customized to your restaurant's unique requirements and operational schedule.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="checklist" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">What's on a restaurant cleaning checklist in South Florida?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Our comprehensive restaurant cleaning checklist includes: front-of-house dining areas, tables, chairs, and floors; commercial kitchen deep cleaning including prep surfaces, equipment, and hood systems; bar area sanitization including taps, glasses, and floor mats; restroom intensive cleaning and restocking; entryway and window cleaning; grease trap and drain maintenance; and all high-touch surface disinfection. We also provide detailed documentation for health inspections and customize our checklist to your restaurant's specific needs.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="hire" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">How do I hire restaurant cleaners in South Florida?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Hiring professional restaurant cleaners starts with finding a company experienced in commercial food service cleaning. Look for providers with food safety training, proper licensing and insurance, and positive references from other restaurants. Contact Red Rock Cleans for a free consultation where we'll assess your facility, discuss your operational schedule, review our comprehensive cleaning protocols, and provide transparent pricing. We can schedule cleanings around your service hours, special events, and unique requirements to minimize disruption to your business.
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
              Join hundreds of South Florida restaurants that trust Red Rock Cleans for their cleaning needs
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
              <Link to="/commercial-quote">Get Your Free Restaurant Cleaning Quote</Link>
            </Button>
          </div>
        </section>

        {/* Image Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <img 
                src="/static/service-products.jpg" 
                alt="An immaculate and empty upscale restaurant in Fort Lauderdale, cleaned by Red Rock Cleans"
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

export default RestaurantCleaningSouthFloridaPage;


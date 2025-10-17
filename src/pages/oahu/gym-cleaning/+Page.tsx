import { OahuNavigation } from "@/components/OahuNavigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Wrench, Droplets, Shield, Activity, Sparkles, Heart, Users, Zap, Trophy, MapPin, Calendar, Phone, Award, Building, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import CountUp from "react-countup";

const neighborhoods = [
  {
    id: "aiea",
    name: "Aiea",
    description: "Aiea fitness centers and gyms trust our professional gym cleaning service for comprehensive facility sanitation that ensures member health, safety, and satisfaction in a competitive fitness market.",
    faq: [
      {
        question: "Do you use eco-friendly cleaning products in Aiea gyms?",
        answer: "Yes, we use environmentally safe, non-toxic cleaning products that are effective against germs while being safe for gym members and staff. Our products are approved for use in fitness facilities."
      },
      {
        question: "What if we're not satisfied with gym cleaning in Aiea?",
        answer: "We guarantee satisfaction and will return to address any concerns at no additional charge, understanding the critical nature of member experience and gym reputation."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Aiea gym spotless and germ-free for over two years. Our members consistently praise the cleanliness!",
      author: "Gym Manager, Aiea Fitness Center"
    }
  },
  {
    id: "ewa-beach",
    name: "Ewa Beach",
    description: "Ewa Beach fitness facilities rely on our professional gym cleaning service for consistent, hygienic facility maintenance that keeps their health clubs operating safely and attracting new members.",
    faq: [
      {
        question: "How often do Ewa Beach gyms schedule cleaning?",
        answer: "Most Ewa Beach gyms prefer daily or multiple-times-per-week cleaning schedules, though we offer flexible scheduling based on your member traffic and operational requirements."
      },
      {
        question: "Do you provide emergency cleaning services in Ewa Beach?",
        answer: "Yes, we offer emergency cleaning services for unexpected situations, health inspections, and urgent facility maintenance needs with rapid response times."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Ewa Beach gym to perfection. Their attention to detail and member safety is outstanding.",
      author: "Operations Director, Ewa Beach Health Club"
    }
  },
  {
    id: "hawaii-kai",
    name: "Hawaii Kai",
    description: "Hawaii Kai fitness centers trust our professional gym cleaning service for comprehensive, hygienic facility maintenance that ensures optimal member health and competitive advantage in the fitness market.",
    faq: [
      {
        question: "Do you service high-end fitness facilities in Hawaii Kai?",
        answer: "Yes, we have extensive experience cleaning premium fitness facilities, including luxury gyms, boutique studios, and high-end health clubs with sophisticated equipment and amenities."
      },
      {
        question: "How do you ensure equipment safety in Hawaii Kai gyms?",
        answer: "We use only gym-safe cleaning products and follow manufacturer guidelines to ensure equipment longevity while maintaining the highest standards of hygiene and member safety."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Hawaii Kai fitness center spotless and member-ready for over two years. Highly recommend their professional service!",
      author: "Facility Manager, Hawaii Kai Athletic Club"
    }
  },
  {
    id: "honolulu",
    name: "Honolulu",
    description: "Honolulu fitness centers and health clubs enjoy consistent, professional gym cleaning services that maintain their facilities clean and operating at optimal member satisfaction standards year-round.",
    faq: [
      {
        question: "Do you work around Honolulu gym schedules?",
        answer: "Yes, we can schedule cleanings around your peak hours, classes, and operational requirements to minimize disruption to member workouts and gym operations."
      },
      {
        question: "What if we're not satisfied with gym cleaning in Honolulu?",
        answer: "We guarantee satisfaction and will return to address any concerns at no additional charge, understanding the critical nature of member experience and gym reputation."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Honolulu gym to perfection. Their professionalism and understanding of fitness facility needs are outstanding.",
      author: "Operations Director, Honolulu Fitness Center"
    }
  },
  {
    id: "kailua",
    name: "Kailua",
    description: "Kailua fitness facilities trust our professional gym cleaning service for comprehensive, hygienic facility maintenance that ensures optimal member health and competitive advantage in the fitness market.",
    faq: [
      {
        question: "How often do Kailua gyms schedule cleaning?",
        answer: "Most Kailua gyms prefer daily or multiple-times-per-week cleaning schedules, though we offer flexible scheduling based on your member traffic and operational requirements."
      },
      {
        question: "Do you provide emergency cleaning services in Kailua?",
        answer: "Yes, we offer emergency cleaning services for unexpected situations, health inspections, and urgent facility maintenance needs with rapid response times."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Kailua health club spotless and germ-free for over two years. Our members consistently praise the cleanliness!",
      author: "Gym Manager, Kailua Health Club"
    }
  },
  {
    id: "kapolei",
    name: "Kapolei",
    description: "Kapolei fitness centers rely on our professional gym cleaning service for consistent, hygienic facility maintenance that keeps their health clubs operating safely and attracting new members.",
    faq: [
      {
        question: "Do you service high-end fitness facilities in Kapolei?",
        answer: "Yes, we have extensive experience cleaning premium fitness facilities, including luxury gyms, boutique studios, and high-end health clubs with sophisticated equipment and amenities."
      },
      {
        question: "How do you ensure equipment safety in Kapolei gyms?",
        answer: "We use only gym-safe cleaning products and follow manufacturer guidelines to ensure equipment longevity while maintaining the highest standards of hygiene and member safety."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Kapolei fitness center to perfection. Their attention to detail and member safety is outstanding.",
      author: "Operations Director, Kapolei Athletic Club"
    }
  },
  {
    id: "makakilo",
    name: "Makakilo",
    description: "Makakilo fitness facilities trust our professional gym cleaning service for comprehensive, hygienic facility maintenance that ensures optimal member health and competitive advantage in the fitness market.",
    faq: [
      {
        question: "Do you use eco-friendly cleaning products in Makakilo gyms?",
        answer: "Yes, we use environmentally safe, non-toxic cleaning products that are effective against germs while being safe for gym members and staff. Our products are approved for use in fitness facilities."
      },
      {
        question: "What if we're not satisfied with gym cleaning in Makakilo?",
        answer: "We guarantee satisfaction and will return to address any concerns at no additional charge, understanding the critical nature of member experience and gym reputation."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Makakilo gym spotless and member-ready for over two years. Highly recommend their professional service!",
      author: "Facility Manager, Makakilo Fitness Center"
    }
  },
  {
    id: "mililani",
    name: "Mililani",
    description: "Mililani fitness centers rely on our professional gym cleaning service for consistent, hygienic facility maintenance that keeps their health clubs operating safely and attracting new members.",
    faq: [
      {
        question: "How often do Mililani gyms schedule cleaning?",
        answer: "Most Mililani gyms prefer daily or multiple-times-per-week cleaning schedules, though we offer flexible scheduling based on your member traffic and operational requirements."
      },
      {
        question: "Do you provide emergency cleaning services in Mililani?",
        answer: "Yes, we offer emergency cleaning services for unexpected situations, health inspections, and urgent facility maintenance needs with rapid response times."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Mililani health club to perfection. Their professionalism and understanding of fitness facility needs are outstanding.",
      author: "Operations Director, Mililani Health Club"
    }
  },
  {
    id: "pearl-city",
    name: "Pearl City",
    description: "Pearl City fitness facilities trust our professional gym cleaning service for comprehensive, hygienic facility maintenance that ensures optimal member health and competitive advantage in the fitness market.",
    faq: [
      {
        question: "Do you service high-end fitness facilities in Pearl City?",
        answer: "Yes, we have extensive experience cleaning premium fitness facilities, including luxury gyms, boutique studios, and high-end health clubs with sophisticated equipment and amenities."
      },
      {
        question: "How do you ensure equipment safety in Pearl City gyms?",
        answer: "We use only gym-safe cleaning products and follow manufacturer guidelines to ensure equipment longevity while maintaining the highest standards of hygiene and member safety."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Pearl City athletic club spotless and germ-free for over two years. Our members consistently praise the cleanliness!",
      author: "Gym Manager, Pearl City Athletic Club"
    }
  },
  {
    id: "waialae",
    name: "Waialae",
    description: "Waialae fitness centers and health clubs enjoy consistent, professional gym cleaning services that maintain their facilities clean and operating at optimal member satisfaction standards year-round.",
    faq: [
      {
        question: "Do you work around Waialae gym schedules?",
        answer: "Yes, we can schedule cleanings around your peak hours, classes, and operational requirements to minimize disruption to member workouts and gym operations."
      },
      {
        question: "What if we're not satisfied with gym cleaning in Waialae?",
        answer: "We guarantee satisfaction and will return to address any concerns at no additional charge, understanding the critical nature of member experience and gym reputation."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Waialae fitness center to perfection. Their attention to detail and member safety is outstanding.",
      author: "Operations Director, Waialae Fitness Center"
    }
  },
  {
    id: "waikiki",
    name: "Waikiki",
    description: "Waikiki fitness facilities trust our professional gym cleaning service for comprehensive, hygienic facility maintenance that ensures optimal member health and competitive advantage in the fitness market.",
    faq: [
      {
        question: "How often do Waikiki gyms schedule cleaning?",
        answer: "Most Waikiki gyms prefer daily or multiple-times-per-week cleaning schedules, though we offer flexible scheduling based on your member traffic and operational requirements."
      },
      {
        question: "Do you provide emergency cleaning services in Waikiki?",
        answer: "Yes, we offer emergency cleaning services for unexpected situations, health inspections, and urgent facility maintenance needs with rapid response times."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Waikiki health club spotless and member-ready for over two years. Highly recommend their professional service!",
      author: "Facility Manager, Waikiki Health Club"
    }
  },
  {
    id: "waimanalo",
    name: "Waimanalo",
    description: "Waimanalo fitness centers rely on our professional gym cleaning service for consistent, hygienic facility maintenance that keeps their health clubs operating safely and attracting new members.",
    faq: [
      {
        question: "Do you service high-end fitness facilities in Waimanalo?",
        answer: "Yes, we have extensive experience cleaning premium fitness facilities, including luxury gyms, boutique studios, and high-end health clubs with sophisticated equipment and amenities."
      },
      {
        question: "How do you ensure equipment safety in Waimanalo gyms?",
        answer: "We use only gym-safe cleaning products and follow manufacturer guidelines to ensure equipment longevity while maintaining the highest standards of hygiene and member safety."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Waimanalo fitness center to perfection. Their professionalism and understanding of fitness facility needs are outstanding.",
      author: "Operations Director, Waimanalo Athletic Club"
    }
  },
  {
    id: "waipahu",
    name: "Waipahu",
    description: "Waipahu fitness facilities trust our professional gym cleaning service for comprehensive, hygienic facility maintenance that ensures optimal member health and competitive advantage in the fitness market.",
    faq: [
      {
        question: "Do you use eco-friendly cleaning products in Waipahu gyms?",
        answer: "Yes, we use environmentally safe, non-toxic cleaning products that are effective against germs while being safe for gym members and staff. Our products are approved for use in fitness facilities."
      },
      {
        question: "What if we're not satisfied with gym cleaning in Waipahu?",
        answer: "We guarantee satisfaction and will return to address any concerns at no additional charge, understanding the critical nature of member experience and gym reputation."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Waipahu gym spotless and germ-free for over two years. Our members consistently praise the cleanliness!",
      author: "Gym Manager, Waipahu Fitness Center"
    }
  }
];

const GymCleaningOahuPage = () => {
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
        <title>Gym Cleaning Oahu | Red Rock Cleans</title>
        <meta name="description" content="Professional gym cleaning on Oahu. Red Rock Cleans provides hygienic fitness center and health club sanitation, including equipment disinfection and locker room cleaning in Honolulu and Kailua." />
        <meta name="keywords" content="gym cleaning near me Oahu, fitness center cleaning Honolulu, health club sanitation Kailua, gym disinfection Oahu, professional gym cleaners Oahu, equipment disinfection Honolulu, locker room cleaning Oahu, anti-viral gym cleaning Oahu, gym cleaning cost Oahu, commercial gym cleaning prices Honolulu, gym cleaning checklist Oahu, how to keep a gym clean Oahu" />
        <link rel="canonical" href="https://redrockcleans.com/oahu/gym-cleaning" />
      </Helmet>
      
      <OahuNavigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/src/assets/hero-commercial.jpg" 
              alt="Professional gym cleaning service in a fitness center on Oahu"
              className="w-full h-full object-cover scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                Hygienic & Professional Gym Cleaning on Oahu
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                A visibly clean and thoroughly disinfected gym is paramount for member health, satisfaction, and retention in the competitive Oahu fitness market. Our specialized gym cleaning services help fitness centers maintain the highest standards of hygiene and cleanliness that health-conscious members expect.
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

        {/* Creating a Healthier Workout Environment Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Creating a Healthier Workout Environment
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Wrench className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Germ-Free Equipment</h3>
                      <p className="text-muted-foreground">
                        Meticulous disinfection of all workout machines, weights, and high-touch surfaces ensures members can focus on their fitness goals without health concerns. We use gym-safe, effective disinfectants that eliminate bacteria and viruses.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Droplets className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Fresh & Inviting Spaces</h3>
                      <p className="text-muted-foreground">
                        Clean locker rooms, showers, and common areas enhance the member experience and create a welcoming atmosphere. We eliminate odors, prevent mold and mildew, and maintain sparkling, fresh-smelling facilities.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Preventing Cross-Contamination</h3>
                      <p className="text-muted-foreground">
                        Protocols designed to stop the spread of bacteria and viruses in high-traffic zones protect member health. We follow strict cleaning sequences and use color-coded systems to prevent cross-contamination between areas.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Our Comprehensive Gym Cleaning Checklist Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Our Comprehensive Gym Cleaning Checklist
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Activity className="h-10 w-10 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-3">Workout & Equipment Areas</h3>
                      <p className="text-muted-foreground text-sm">
                        Sanitizing all fitness equipment, mats, and benches with gym-safe disinfectants. We clean cardio machines, weight equipment, and functional training areas to ensure member safety and equipment longevity.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Sparkles className="h-10 w-10 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-3">Locker Rooms & Showers</h3>
                      <p className="text-muted-foreground text-sm">
                        Deep cleaning, sanitizing, and deodorizing to prevent mold, mildew, and odors. We maintain clean, fresh locker rooms and showers that members can trust for their personal hygiene needs.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Heart className="h-10 w-10 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-3">Group Fitness Studios</h3>
                      <p className="text-muted-foreground text-sm">
                        Cleaning specialized flooring, mirrors, and props for yoga, Pilates, and group classes. We ensure studios are spotless and ready for classes, with proper ventilation and sanitization.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Users className="h-10 w-10 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-3">Reception & High-Traffic Zones</h3>
                      <p className="text-muted-foreground text-sm">
                        Maintaining a sparkling first impression and disinfecting entry points, front desk, and common areas. We ensure every member's first and last impression is of a clean, professional facility.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* The Red Rock Cleans Difference for Oahu Gyms Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                The Red Rock Cleans Difference for Oahu Gyms
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    <CountUp end={98} duration={2} />%
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Member Satisfaction Score</h3>
                  <p className="text-muted-foreground text-sm">
                    Oahu gyms trust our specialized cleaning services
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
                  <h3 className="text-lg font-semibold mb-2">Germ Reduction</h3>
                  <p className="text-muted-foreground text-sm">
                    Through our comprehensive disinfection protocols
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Trophy className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">5-Star</div>
                  <h3 className="text-lg font-semibold mb-2">Top-Rated Cleanliness</h3>
                  <p className="text-muted-foreground text-sm">
                    Consistently rated by Oahu fitness facilities
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
                          <h4 className="font-semibold mb-2">Local Gym Cleaning Services</h4>
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
                            Get Gym Cleaning Quote for {neighborhood.name}
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
                    <Shield className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Medical Office Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Professional cleaning services for medical facilities and healthcare centers
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/oahu/medical-office-cleaning">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <Building className="h-8 w-8 text-primary mx-auto mb-4" />
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
                    <h3 className="text-lg font-semibold mb-2">School Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Comprehensive cleaning services for educational facilities
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/oahu/school-cleaning">Learn More</Link>
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
                <AccordionItem value="cleaning-frequency" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">How often should gyms be professionally cleaned?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Most gyms benefit from daily cleaning, especially high-traffic areas like equipment zones and locker rooms. We recommend daily cleaning for peak hours, with deep cleaning 2-3 times per week depending on member volume and facility size.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="equipment-safety" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">Are your cleaning products safe for gym equipment?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Yes, we use only gym-safe cleaning products that are effective against germs while being safe for equipment surfaces and gym members. Our products are non-corrosive and follow manufacturer guidelines to ensure equipment longevity.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="disinfection-protocols" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">What disinfection protocols do you follow?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      We follow CDC guidelines and use EPA-approved disinfectants with appropriate contact times. Our protocols include color-coded cleaning systems, proper dwell times for disinfectants, and systematic coverage of all high-touch surfaces and equipment.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="scheduling" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">Can you work around gym schedules and peak hours?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Yes, we can schedule cleanings around your peak hours, classes, and operational requirements. We offer flexible scheduling including early morning, late night, and between-class cleaning to minimize disruption to member workouts and gym operations.
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
              Ready to Elevate Your Gym's Cleanliness Standards?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join dozens of Oahu fitness centers that trust Red Rock Cleans for their hygiene and cleanliness needs
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
              <Link to="/commercial-quote?location=oahu">Get Your Free Gym Cleaning Quote</Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default GymCleaningOahuPage;

import { LasVegasNavigation } from "@/components/LasVegasNavigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Clock, Shield, Star, Users, Calendar, Home, Sparkles, Dumbbell, Droplets, Bug, Activity, Zap, Square, User, Building2, GraduationCap, ShoppingBag, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";

const neighborhoods = [
  {
    id: "anthem",
    name: "Anthem",
    description: "Keep your Anthem gym sparkling clean and hygienic with our comprehensive gym cleaning services designed for member health and satisfaction in the competitive fitness market.",
    faq: [
      {
        question: "Do you understand the specific hygiene requirements for Anthem gyms?",
        answer: "Absolutely. Our team is trained in gym-specific cleaning protocols and understands the critical importance of maintaining clean, disinfected equipment and facilities for member health."
      },
      {
        question: "Can you work around Anthem gym operating hours?",
        answer: "Yes, we schedule our cleaning services around your peak hours, member schedules, and operational requirements to minimize disruption to your fitness programs."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our Anthem gym with exceptional hygiene standards. Their understanding of fitness facility requirements is outstanding.",
      author: "Gym Manager, Anthem Fitness Center"
    }
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "Professional gym cleaning services for Enterprise fitness facilities who demand the highest standards of cleanliness, hygiene, and member satisfaction.",
    faq: [
      {
        question: "What areas of Enterprise gyms do you clean?",
        answer: "We clean all areas including workout equipment, locker rooms, showers, group fitness studios, reception areas, and high-traffic zones with appropriate disinfectants."
      },
      {
        question: "Do you provide flexible scheduling for Enterprise gyms?",
        answer: "Yes, we work around your operating hours, peak times, and can provide emergency cleaning services when needed for member health and safety."
      }
    ],
    testimonial: {
      text: "Our Enterprise gym has never been cleaner or more hygienic. Red Rock Cleans respects our member schedules and provides excellent service around our fitness programs.",
      author: "Operations Director, Enterprise Health Club"
    }
  },
  {
    id: "green-valley-north",
    name: "Green Valley North",
    description: "Keep your Green Valley North gym pristine with our comprehensive gym cleaning service designed for member health and competitive fitness excellence.",
    faq: [
      {
        question: "Do you clean both large and small gyms in Green Valley North?",
        answer: "Yes, we provide gym cleaning services for facilities of all sizes, from boutique fitness studios to large health clubs and commercial gyms."
      },
      {
        question: "What's included in your Green Valley North gym cleaning?",
        answer: "We clean workout equipment, locker rooms, showers, group fitness areas, reception zones, and specialized fitness spaces with appropriate disinfectants and sanitizers."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Green Valley North gym beautifully. Their precision and attention to hygiene requirements are exceptional.",
      author: "Fitness Director, Green Valley North Gym"
    }
  },
  {
    id: "henderson",
    name: "Henderson",
    description: "Henderson gyms trust Red Rock Cleans for consistent, professional gym cleaning services that maintain their fitness facilities hygienically and efficiently year-round.",
    faq: [
      {
        question: "How far in advance should Henderson gyms book cleaning?",
        answer: "We recommend booking at least one week in advance, though we can often accommodate shorter notice for emergency situations or special events."
      },
      {
        question: "Do you provide specialized equipment for Henderson gym cleaning?",
        answer: "Yes, we bring all specialized equipment including disinfectant sprayers, microfiber cloths, and appropriate cleaning solutions for fitness equipment and facilities."
      }
    ],
    testimonial: {
      text: "As a Henderson gym owner, I appreciate Red Rock Cleans' understanding of fitness facility needs. Highly recommended for health clubs!",
      author: "Gym Owner, Henderson Fitness Center"
    }
  },
  {
    id: "lake-las-vegas",
    name: "Lake Las Vegas",
    description: "Lake Las Vegas gyms enjoy pristine, professional cleaning with our gym cleaning service that maintains their fitness facilities to the highest hygiene standards.",
    faq: [
      {
        question: "Do you service high-end gyms in Lake Las Vegas?",
        answer: "Yes, we specialize in cleaning premium fitness facilities and are experienced with sophisticated equipment, luxury amenities, and high-end health club standards."
      },
      {
        question: "Can you work around Lake Las Vegas gym schedules?",
        answer: "Absolutely! We offer flexible scheduling including early morning, late evening, and emergency services to accommodate your member schedules and operational requirements."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Lake Las Vegas gym to perfection. Their understanding of luxury fitness facilities and hygiene protocols is remarkable.",
      author: "General Manager, Lake Las Vegas Health Club"
    }
  },
  {
    id: "las-vegas",
    name: "Las Vegas",
    description: "Las Vegas gyms rely on our professional gym cleaning service for consistent, hygienic facility maintenance that ensures optimal member satisfaction and retention.",
    faq: [
      {
        question: "What makes Red Rock Cleans different for Las Vegas gyms?",
        answer: "We're locally owned, fully insured, and our team is specially trained in gym cleaning protocols, equipment disinfection, and fitness facility hygiene requirements."
      },
      {
        question: "Do you offer emergency gym cleaning for Las Vegas?",
        answer: "Yes, we can often provide same-day or emergency cleaning services for critical hygiene situations, equipment contamination, or post-event cleanup needs."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been cleaning our Las Vegas gym for three years. They understand our member needs and maintain our facility hygienically and professionally.",
      author: "Operations Manager, Las Vegas Fitness Center"
    }
  },
  {
    id: "macdonald-ranch",
    name: "MacDonald Ranch",
    description: "MacDonald Ranch gyms enjoy consistent, professional gym cleaning services that keep their fitness facilities spotless and operating at peak member satisfaction.",
    faq: [
      {
        question: "How long does gym cleaning take in MacDonald Ranch?",
        answer: "Most MacDonald Ranch gym cleanings take 4-8 hours depending on facility size, equipment complexity, and specific hygiene requirements for fitness operations."
      },
      {
        question: "Do you work with MacDonald Ranch gym staff?",
        answer: "Yes, we coordinate with your fitness staff and management team to ensure our cleaning complements your member schedules and operational requirements."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our MacDonald Ranch gym beautifully. Their professional approach and attention to hygiene are outstanding.",
      author: "Fitness Manager, MacDonald Ranch Gym"
    }
  },
  {
    id: "mountains-edge",
    name: "Mountain's Edge",
    description: "Mountain's Edge gyms trust our professional gym cleaning service for consistent facility maintenance that complements their fitness operations and member satisfaction requirements.",
    faq: [
      {
        question: "What cleaning products do you use in Mountain's Edge gyms?",
        answer: "We use gym-specific, equipment-safe cleaning products that are effective against bacteria and viruses while protecting your fitness equipment and member health."
      },
      {
        question: "Can you customize cleaning for Mountain's Edge gyms?",
        answer: "Yes, we can customize our gym cleaning service to focus on specific areas, equipment types, or particular hygiene priorities based on your fitness facility requirements."
      }
    ],
    testimonial: {
      text: "Living in Mountain's Edge, I appreciate Red Rock Cleans' reliability and understanding of our gym's hygiene requirements. Excellent service for fitness facilities.",
      author: "Gym Coordinator, Mountain's Edge Fitness Center"
    }
  },
  {
    id: "north-las-vegas",
    name: "North Las Vegas",
    description: "North Las Vegas gyms depend on our professional gym cleaning service for consistent, hygienic facility maintenance that keeps their fitness operations reliable and efficient.",
    faq: [
      {
        question: "Do you offer competitive rates for North Las Vegas gyms?",
        answer: "Yes, we provide competitive rates for North Las Vegas gyms while maintaining high-quality hygiene standards and fitness facility cleaning requirements."
      },
      {
        question: "How do you ensure quality in North Las Vegas gym cleaning?",
        answer: "Every North Las Vegas gym cleaning is supervised by certified specialists and we guarantee compliance with hygiene standards and your specific fitness facility requirements."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our North Las Vegas gym clean and hygienic. Great value and excellent professional service for our fitness operations.",
      author: "Gym Supervisor, North Las Vegas Fitness Hub"
    }
  },
  {
    id: "paradise",
    name: "Paradise",
    description: "Paradise gyms enjoy reliable professional gym cleaning services that maintain their facilities to the highest standards of cleanliness, hygiene, and member satisfaction.",
    faq: [
      {
        question: "Do you service diverse gym types in Paradise?",
        answer: "Yes, we provide professional cleaning services for all types of fitness facilities including traditional gyms, boutique studios, CrossFit boxes, and specialized training centers."
      },
      {
        question: "What's your cancellation policy for Paradise gyms?",
        answer: "We require 24-hour notice for cancellations, but we're flexible for emergency situations and can reschedule around critical member events and fitness programs."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our Paradise gym beautifully. Professional, hygienic, and thorough every time for our fitness operations.",
      author: "Operations Manager, Paradise Fitness Center"
    }
  },
  {
    id: "seven-hills",
    name: "Seven Hills",
    description: "Seven Hills gyms trust our professional gym cleaning service for consistent, hygienic facility maintenance that preserves their fitness operations and member satisfaction.",
    faq: [
      {
        question: "Do you service high-end gyms in Seven Hills?",
        answer: "Yes, we have extensive experience cleaning premium fitness facilities, including those with sophisticated equipment, luxury amenities, and high-end health club standards."
      },
      {
        question: "How do you ensure security in Seven Hills gyms?",
        answer: "All our team members are background-checked, bonded, and insured. We respect the sensitive nature of your fitness operations and maintain strict confidentiality and security protocols."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Seven Hills gym to perfection. Their professionalism and understanding of fitness facility hygiene requirements are outstanding.",
      author: "Fitness Director, Seven Hills Health Club"
    }
  },
  {
    id: "silverado-ranch",
    name: "Silverado Ranch",
    description: "Silverado Ranch gyms rely on our professional gym cleaning service for consistent facility maintenance that keeps their fitness operations operating smoothly and hygienically.",
    faq: [
      {
        question: "Do you work around Silverado Ranch gym schedules?",
        answer: "Yes, we can schedule cleanings around your operating hours, peak times, and member schedules for your convenience and operational efficiency."
      },
      {
        question: "What if we're not satisfied with cleaning in Silverado Ranch?",
        answer: "We guarantee satisfaction and will return to address any concerns at no additional charge, understanding the critical nature of your fitness operations."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Silverado Ranch gym spotless and hygienic for over two years. Highly recommend their professional service for fitness facilities!",
      author: "Operations Manager, Silverado Ranch Gym"
    }
  },
  {
    id: "spring-valley",
    name: "Spring Valley",
    description: "Spring Valley gyms enjoy consistent, professional gym cleaning services that maintain their facilities clean and operating at optimal member satisfaction year-round.",
    faq: [
      {
        question: "How often do Spring Valley gyms schedule cleaning?",
        answer: "Most Spring Valley gyms prefer daily or weekly cleaning, though we offer flexible scheduling based on your operational requirements and member usage patterns."
      },
      {
        question: "Do you provide specialized cleaning for Spring Valley gyms?",
        answer: "Yes, we offer both regular gym cleaning and specialized services for critical hygiene maintenance, post-event cleanup, and emergency disinfection."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our Spring Valley gym beautifully. Professional, reliable, and always hygienic for our fitness operations.",
      author: "Fitness Manager, Spring Valley Gym"
    }
  },
  {
    id: "summerlin-south",
    name: "Summerlin South",
    description: "Summerlin South gyms trust our professional gym cleaning service for consistent, high-quality facility maintenance that complements their premium fitness operations and member satisfaction excellence.",
    faq: [
      {
        question: "Do you service luxury gyms in Summerlin South?",
        answer: "Yes, we specialize in cleaning high-end fitness facilities and are experienced with sophisticated equipment, premium amenities, and luxury health club standards."
      },
      {
        question: "Can you accommodate Summerlin South gym schedules?",
        answer: "Absolutely! We're familiar with busy fitness operations and can work around critical operational windows, member schedules, and fitness program requirements."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Summerlin South gym to the highest standards. Exceptional professional service and deep understanding of fitness facility hygiene requirements.",
      author: "General Manager, Summerlin South Health Club"
    }
  },
  {
    id: "sunrise-manor",
    name: "Sunrise Manor",
    description: "Sunrise Manor gyms depend on our professional gym cleaning service for consistent, hygienic facility maintenance that keeps their fitness operations spotless and operating efficiently.",
    faq: [
      {
        question: "Do you offer competitive rates for Sunrise Manor gyms?",
        answer: "Yes, we provide competitive rates for Sunrise Manor gyms while maintaining high professional cleaning standards and fitness facility hygiene compliance."
      },
      {
        question: "How reliable is your service in Sunrise Manor gyms?",
        answer: "We're committed to reliability and have a strong track record of consistent, professional service in Sunrise Manor fitness facilities."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Sunrise Manor gym clean and hygienic. Great value and reliable professional service for our fitness operations.",
      author: "Operations Supervisor, Sunrise Manor Gym"
    }
  },
  {
    id: "whitney",
    name: "Whitney",
    description: "Whitney gyms enjoy professional gym cleaning services that maintain their facilities clean, hygienic, and ready for optimal member satisfaction.",
    faq: [
      {
        question: "Do you work with diverse Whitney gym environments?",
        answer: "Yes, we're experienced with fitness facilities of all types and sizes, using professional cleaning practices appropriate for different gym operations and hygiene requirements."
      },
      {
        question: "Can you schedule around Whitney gym operational requirements?",
        answer: "Absolutely! We offer flexible scheduling including early morning, late evening, and emergency services around your critical fitness calendar."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our Whitney gym beautifully. Professional, trustworthy, and always hygienic for our fitness operations.",
      author: "Gym Manager, Whitney Fitness Center"
    }
  },
  {
    id: "winchester",
    name: "Winchester",
    description: "Winchester gyms trust our professional gym cleaning service for consistent, hygienic facility maintenance that keeps their fitness operations spotless and operating at peak performance year-round.",
    faq: [
      {
        question: "Do you service diverse gym types in Winchester?",
        answer: "Yes, we provide professional gym cleaning for all types of fitness facilities including traditional gyms, specialized studios, CrossFit boxes, and boutique fitness centers."
      },
      {
        question: "How do you ensure quality in Winchester gym cleaning?",
        answer: "Every Winchester gym cleaning is supervised by certified specialists and we guarantee compliance with hygiene standards and your specific fitness facility requirements."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Winchester gym immaculate and hygienic. Reliable, professional, and excellent value for our fitness operations.",
      author: "Operations Manager, Winchester Fitness Center"
    }
  }
];

const GymCleaningLasVegasPage = () => {
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
        <title>Gym Cleaning Las Vegas | Red Rock Cleans</title>
        <meta name="description" content="Professional gym cleaning in Las Vegas. Red Rock Cleans provides hygienic fitness center and health club sanitation, including equipment disinfection and locker room cleaning in Henderson and Summerlin." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <LasVegasNavigation />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative py-24 md:py-32 overflow-hidden">
            <div className="absolute inset-0">
              <img 
                src="/src/assets/hero-commercial.jpg" 
                alt="Professional gym cleaning service in a Las Vegas fitness center"
                className="w-full h-full object-cover scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                  Hygienic & Professional Gym Cleaning in Las Vegas
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                  A visibly clean and thoroughly disinfected gym is paramount for member health, satisfaction, and retention in the competitive Las Vegas fitness market. Our professional gym cleaning services ensure your facility maintains the highest hygiene standards.
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

          {/* Creating a Healthier Workout Environment */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  Creating a Healthier Workout Environment
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Dumbbell className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Germ-Free Equipment</h3>
                      <p className="text-muted-foreground text-sm">
                        Meticulous disinfection of all workout machines, weights, and high-touch surfaces ensures your Las Vegas gym members can train safely without worrying about bacteria or viruses.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Safe & Sanitized →
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Droplets className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Fresh & Inviting Spaces</h3>
                      <p className="text-muted-foreground text-sm">
                        Clean locker rooms, showers, and common areas enhance the member experience and create a welcoming environment that encourages repeat visits to your Las Vegas fitness facility.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Welcoming & Clean →
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Bug className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Preventing Cross-Contamination</h3>
                      <p className="text-muted-foreground text-sm">
                        Our protocols are designed to stop the spread of bacteria and viruses in high-traffic zones, protecting your Las Vegas gym members and maintaining a healthy workout environment.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Protected & Healthy →
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Our Comprehensive Gym Cleaning Checklist */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  Our Comprehensive Gym Cleaning Checklist
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Activity className="w-6 h-6" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Workout & Equipment Areas</h3>
                      <p className="text-muted-foreground text-sm">
                        Sanitizing all fitness equipment, mats, and benches with gym-specific disinfectants to ensure member safety and equipment longevity.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Zap className="w-6 h-6" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Locker Rooms & Showers</h3>
                      <p className="text-muted-foreground text-sm">
                        Deep cleaning, sanitizing, and deodorizing to prevent mold, mildew, and odors while maintaining a fresh, hygienic environment.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Square className="w-6 h-6" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Group Fitness Studios</h3>
                      <p className="text-muted-foreground text-sm">
                        Cleaning specialized flooring, mirrors, and props used in yoga, Pilates, and group fitness classes to maintain a pristine workout environment.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Users className="w-6 h-6" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Reception & High-Traffic Zones</h3>
                      <p className="text-muted-foreground text-sm">
                        Maintaining a sparkling first impression and disinfecting entry points, front desks, and common areas where members gather.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* The Red Rock Cleans Difference for Las Vegas Gyms */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-12">
                  The Red Rock Cleans Difference for Las Vegas Gyms
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Dumbbell className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-4xl font-bold text-primary mb-2">98%</div>
                    <h3 className="text-lg font-semibold mb-2">Member Satisfaction Score</h3>
                    <p className="text-muted-foreground text-sm">
                      Las Vegas gym members consistently rate our cleaning services as excellent
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Bug className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
                    <h3 className="text-lg font-semibold mb-2">Germ Reduction</h3>
                    <p className="text-muted-foreground text-sm">
                      Our disinfecting protocols eliminate bacteria and viruses effectively
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Star className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-4xl font-bold text-primary mb-2">#1</div>
                    <h3 className="text-lg font-semibold mb-2">Top-Rated Cleanliness</h3>
                    <p className="text-muted-foreground text-sm">
                      Consistently ranked as the top gym cleaning service in Las Vegas
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
                            Professional gym cleaning services
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
                              Schedule Your {neighborhood.name} Gym Cleaning
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

          {/* Other Commercial Cleaning Services in Las Vegas */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  Other Commercial Cleaning Services in Las Vegas
                </h2>
                <p className="text-xl text-muted-foreground mb-12">
                  Beyond gym cleaning, we offer specialized commercial cleaning services to meet all your Las Vegas facility needs.
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
                  <Link to="/las-vegas/retail-cleaning/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors mb-4">
                        <ShoppingBag className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Retail Cleaning Services
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Professional cleaning for retail stores, shopping centers, and commercial spaces.
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
                      <h3 className="text-lg font-semibold">What makes your gym cleaning service different?</h3>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <p className="text-muted-foreground">
                        We specialize in gym cleaning with training in fitness facility protocols, equipment disinfection, and member health requirements. Our team uses specialized disinfectants and follows strict procedures to protect your equipment while maintaining the highest hygiene standards for member safety.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2" className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <h3 className="text-lg font-semibold">How do you handle scheduling around gym operations?</h3>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <p className="text-muted-foreground">
                        We work closely with your gym staff to schedule cleaning during off-peak hours, early morning, or late evening when member traffic is lowest. We can also provide emergency cleaning services for hygiene incidents or post-event cleanup. Our flexible approach ensures minimal disruption to your fitness programs.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3" className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <h3 className="text-lg font-semibold">What areas of the gym do you clean?</h3>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <p className="text-muted-foreground">
                        We clean all areas including workout equipment, locker rooms, showers, group fitness studios, reception areas, and high-traffic zones. We use appropriate disinfectants and methods for each area to ensure safety and effectiveness while protecting your fitness equipment and member health.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-4" className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <h3 className="text-lg font-semibold">Are your technicians trained for gym environments?</h3>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <p className="text-muted-foreground">
                        Yes, all our technicians are background-checked, bonded, and insured. They receive specialized training in gym cleaning protocols, equipment disinfection, and fitness facility hygiene requirements. We understand the unique challenges of gym environments and maintain strict protocols to protect your members and equipment.
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
                  Ready to Elevate Your Gym's Cleanliness Standards?
                </h2>
                <p className="text-xl mb-8 opacity-90">
                  Join the Las Vegas gyms that trust Red Rock Cleans for hygienic, professional cleaning services that ensure optimal member satisfaction and retention.
                </p>
                <Button size="lg" variant="secondary" className="h-14 text-lg px-8" asChild>
                  <Link to="/commercial-quote?location=las-vegas">
                    <Calendar className="w-5 h-5 mr-2" />
                    Schedule Your Gym Cleaning Today
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

export default GymCleaningLasVegasPage;

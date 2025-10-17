import { DallasNavigation } from "@/components/DallasNavigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ClipboardCheck, Flame, Sparkles, DoorOpen, ChefHat, GlassWater, Droplets, Star, CheckCircle, Utensils, Store, Dumbbell, Package, Phone, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";

const neighborhoods = [
  {
    id: "university-park",
    name: "University Park",
    description: "Keep your University Park restaurant pristine and health code compliant with our specialized cleaning services. We understand the high standards expected in this sophisticated Dallas neighborhood's dining establishments and deliver impeccable results.",
    faq: [
      {
        question: "Do you have experience with restaurant cleaning in University Park?",
        answer: "Yes, our team specializes in restaurant and commercial kitchen cleaning with extensive experience servicing dining establishments throughout University Park and Dallas."
      },
      {
        question: "Can you work after hours in University Park restaurants?",
        answer: "Absolutely. We schedule our cleaning services during closed hours, late nights, or early mornings to avoid disrupting service in your University Park establishment."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our University Park restaurant with exceptional attention to detail. Our health inspections are always flawless.",
      author: "Chef Marcus T., University Park Fine Dining"
    }
  },
  {
    id: "highland-park",
    name: "Highland Park",
    description: "Professional restaurant cleaning services for Highland Park dining establishments that demand the highest standards of hygiene and guest experience. Our comprehensive cleaning ensures your restaurant maintains its reputation and health code compliance.",
    faq: [
      {
        question: "What areas of Highland Park restaurants do you clean?",
        answer: "We clean all areas including front-of-house dining rooms, commercial kitchens, bars, restrooms, and storage areas throughout Highland Park restaurants."
      },
      {
        question: "Do you use food-safe cleaning products in Highland Park?",
        answer: "Yes, we use EPA-approved, food-safe cleaning products and degreasers that are effective yet safe for use in food service environments in Highland Park."
      }
    ],
    testimonial: {
      text: "Our Highland Park restaurant has never looked better. Red Rock Cleans understands the dining industry and delivers consistently exceptional results.",
      author: "Sarah M., Owner, Highland Park Bistro"
    }
  },
  {
    id: "uptown-dallas",
    name: "Uptown Dallas",
    description: "Keep your Uptown Dallas restaurant operating at peak cleanliness with our comprehensive dining establishment cleaning services. We specialize in maintaining the high standards expected in this competitive urban dining market.",
    faq: [
      {
        question: "Do you clean both small and large restaurants in Uptown Dallas?",
        answer: "Yes, we provide restaurant cleaning services for dining establishments of all sizes in Uptown Dallas, from intimate cafes to large restaurants and bars."
      },
      {
        question: "What's included in your Uptown Dallas restaurant cleaning?",
        answer: "We provide kitchen degreasing, dining room cleaning, bar sanitation, restroom deep cleaning, and floor care throughout your Uptown Dallas establishment."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Uptown Dallas restaurant to the highest standards. Their kitchen degreasing and attention to detail are exceptional.",
      author: "David L., Manager, Uptown Dallas Steakhouse"
    }
  },
  {
    id: "downtown-dallas",
    name: "Downtown Dallas",
    description: "Downtown Dallas restaurants trust Red Rock Cleans for consistent, professional cleaning that maintains health code compliance and guest satisfaction. Our team understands the unique challenges of urban dining establishment cleaning.",
    faq: [
      {
        question: "How far in advance should Downtown Dallas restaurants book cleaning?",
        answer: "We recommend booking at least one week in advance for regular cleaning, though we can accommodate urgent deep cleaning needs for Downtown Dallas establishments."
      },
      {
        question: "Do you provide cleaning supplies for Downtown Dallas restaurants?",
        answer: "Yes, we bring all professional-grade, food-safe cleaning supplies, degreasers, and sanitation products to every Downtown Dallas restaurant appointment."
      }
    ],
    testimonial: {
      text: "As a Downtown Dallas restaurant manager, I trust Red Rock Cleans for their reliability and thorough approach to kitchen and dining room sanitation. Outstanding!",
      author: "Jennifer K., Manager, Downtown Dallas Kitchen & Bar"
    }
  },
  {
    id: "preston-hollow",
    name: "Preston Hollow",
    description: "Preston Hollow restaurants enjoy professional, meticulous cleaning with our service that maintains the highest dining standards. We deliver premium restaurant cleaning for this distinguished Dallas area's fine dining establishments.",
    faq: [
      {
        question: "Do you service upscale restaurants in Preston Hollow?",
        answer: "Yes, we specialize in cleaning fine dining establishments and understand the premium standards expected by Preston Hollow restaurant patrons and owners."
      },
      {
        question: "Can you work around Preston Hollow restaurant service schedules?",
        answer: "Absolutely! We coordinate with your management team to schedule cleaning during closed hours or between service periods in Preston Hollow establishments."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Preston Hollow restaurant impeccably. Their kitchen deep cleaning and front-of-house care are unmatched.",
      author: "Chef Robert H., Preston Hollow Fine Cuisine"
    }
  },
  {
    id: "plano",
    name: "Plano",
    description: "Plano restaurants rely on our cleaning services for consistent health code compliance, guest satisfaction, and operational excellence. As a major dining destination, Plano establishments demand the highest standards—we deliver them consistently.",
    faq: [
      {
        question: "What makes Red Rock Cleans different for Plano restaurants?",
        answer: "We're locally owned, fully insured, and our team is trained in health code standards with extensive experience in Plano's diverse restaurant scene."
      },
      {
        question: "Do you offer emergency cleaning for Plano restaurants?",
        answer: "Yes, we can provide rapid-response cleaning services for health inspection prep, contamination events, or urgent sanitation needs in Plano establishments."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been cleaning our Plano restaurant for three years. They understand our health code requirements and deliver flawlessly every time.",
      author: "Lisa P., Owner, Plano Family Restaurant"
    }
  },
  {
    id: "frisco",
    name: "Frisco",
    description: "Frisco restaurants enjoy consistent, professional cleaning that keeps dining establishments spotless and compliant. Our team serves Frisco's growing restaurant sector with expertise and reliability.",
    faq: [
      {
        question: "How long does restaurant cleaning take in Frisco?",
        answer: "Most Frisco restaurant cleanings take 3-5 hours depending on establishment size, kitchen complexity, and specific cleaning requirements."
      },
      {
        question: "Do you work with Frisco restaurant management teams?",
        answer: "Yes, we coordinate closely with managers and chefs to ensure our cleaning meets your specific standards and doesn't disrupt operations in Frisco establishments."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our Frisco restaurant beautifully. Their kitchen degreasing and dining room care are outstanding.",
      author: "Patricia G., Manager, Frisco Italian Kitchen"
    }
  },
  {
    id: "prosper",
    name: "Prosper",
    description: "Prosper restaurants trust our cleaning service for consistent guest satisfaction and health code compliance. We bring professional restaurant cleaning expertise to this growing Dallas area community's dining scene.",
    faq: [
      {
        question: "What cleaning protocols do you use in Prosper restaurants?",
        answer: "We use food-safe degreasers, EPA-approved sanitizers, and follow health department guidelines for all cleaning in Prosper restaurant kitchens and dining areas."
      },
      {
        question: "Can you customize cleaning for Prosper restaurants?",
        answer: "Yes, we can customize our restaurant cleaning service to focus on specific areas, equipment, or health code concerns for Prosper dining establishments."
      }
    ],
    testimonial: {
      text: "Working in Prosper, I appreciate Red Rock Cleans' expertise and reliability for our restaurant. Excellent professional cleaning service.",
      author: "James W., Owner, Prosper Grill & Tavern"
    }
  }
];

const RestaurantCleaningDallasPage = () => {
  const [openItem, setOpenItem] = useState<string>("");
  const [countersInView, setCountersInView] = useState(false);

  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash && neighborhoods.some(n => n.id === hash)) {
      setOpenItem(hash);
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (hash && neighborhoods.some(n => n.id === hash)) {
        setOpenItem(hash);
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

  // Counter animation effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setCountersInView(true);
        }
      },
      { threshold: 0.3 }
    );

    const counterSection = document.getElementById('counters-section');
    if (counterSection) {
      observer.observe(counterSection);
    }

    return () => {
      if (counterSection) {
        observer.unobserve(counterSection);
      }
    };
  }, []);

  const Counter = ({ end, label, icon: Icon, suffix = "+" }: { end: number; label: string; icon: any; suffix?: string }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!countersInView) return;

      let startTime: number;
      const duration = 2000;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        setCount(Math.floor(progress * end));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }, [countersInView, end]);

    return (
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
          <Icon className="w-8 h-8" />
        </div>
        <div className="text-4xl md:text-5xl font-bold mb-2">
          {count}{suffix}
        </div>
        <p className="text-muted-foreground">{label}</p>
      </div>
    );
  };

  return (
    <>
      <Helmet>
        <title>Restaurant Cleaning in Dallas | Red Rock Cleans</title>
        <meta name="description" content="Professional restaurant cleaning in Dallas. Red Rock Cleans helps you pass health inspections and earn 5-star reviews with comprehensive kitchen and dining room cleaning." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <DallasNavigation />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative py-24 md:py-32 overflow-hidden">
            <div className="absolute inset-0">
              <img 
                src="/src/assets/hero-commercial.jpg" 
                alt="Professional restaurant cleaning service in Dallas"
                className="w-full h-full object-cover scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                  Impeccable Restaurant Cleaning for 5-Star Experiences in Dallas
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                  In the competitive Dallas dining scene, impeccable cleanliness is essential for earning top reviews, passing health inspections, and ensuring guest safety. Our specialized restaurant cleaning services help you maintain the pristine standards your patrons expect and health inspectors demand.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="h-14 text-lg px-8" asChild>
                    <a href="tel:+19729922576">
                      <Phone className="w-5 h-5 mr-2" />
                      Call (972) 992-2576
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="h-14 text-lg px-8" asChild>
                    <Link to="/commercial-quote?location=dallas">
                      <Home className="w-5 h-5 mr-2" />
                      Get Free Quote
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Exceeding Health & Safety Standards */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  Exceeding Health & Safety Standards
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <ClipboardCheck className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Health Code & Inspection Ready</h3>
                      <p className="text-muted-foreground text-sm">
                        Our meticulous approach helps you ace health inspections with confidence. We clean to Dallas health department standards, ensuring every surface, piece of equipment, and dining area meets or exceeds code requirements.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Inspection Ready →
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Flame className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Kitchen Degreasing & Fire Safety</h3>
                      <p className="text-muted-foreground text-sm">
                        Our focus on removing hazardous grease buildup in commercial kitchens protects your Dallas restaurant from fire hazards. We deep clean hoods, exhausts, grills, and fryers to maintain safety and pass fire inspections.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Safe & Clean →
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Sparkles className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Unforgettable Guest Ambiance</h3>
                      <p className="text-muted-foreground text-sm">
                        A spotless front-of-house creates a welcoming, high-end atmosphere for diners. Our Dallas team ensures your dining room, bar, and restrooms make the perfect first and lasting impression on guests.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Guest Experience →
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Our Comprehensive Restaurant Cleaning Checklist */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  Our Comprehensive Restaurant Cleaning Checklist
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <DoorOpen className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Front-of-House</h3>
                      <p className="text-muted-foreground text-sm">
                        Cleaning dining areas, tables, chairs, entryways, windows, and host stations. We ensure your Dallas restaurant's first impression is always impeccable with spotless dining spaces.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Dining Clean →
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <ChefHat className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Commercial Kitchens</h3>
                      <p className="text-muted-foreground text-sm">
                        Deep cleaning food prep surfaces, equipment, ovens, grills, fryers, and floors. Our Dallas team uses food-safe degreasers to eliminate buildup and maintain health code compliance.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Kitchen Deep Clean →
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <GlassWater className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Bar Areas</h3>
                      <p className="text-muted-foreground text-sm">
                        Sanitizing taps, cleaning behind the bar, detailing glassware areas, and maintaining floor mats. We keep your Dallas bar spotless and ready to serve.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Bar Sanitation →
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Droplets className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Restrooms</h3>
                      <p className="text-muted-foreground text-sm">
                        Intensive sanitation and restocking to meet guest expectations. Our Dallas team ensures your restaurant restrooms maintain the high standards your patrons deserve.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Restroom Excellence →
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Our Recipe for a Spotless Dallas Restaurant */}
          <section id="counters-section" className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  Our Recipe for a Spotless Dallas Restaurant
                </h2>
                <div className="grid md:grid-cols-3 gap-12">
                  <Counter end={150} label="5-Star Reviews Supported" icon={Star} />
                  <Counter end={100} label="Health Inspections Passed" icon={CheckCircle} suffix="%" />
                  <Counter end={50000} label="Happy Diners Served" icon={Utensils} />
                </div>
              </div>
            </div>
          </section>

          {/* Areas We Serve in Dallas */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  Areas We Serve in Dallas
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
                            Professional restaurant cleaning services
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
                            <Link to="/commercial-quote?location=dallas">
                              Schedule Your {neighborhood.name} Restaurant Cleaning
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

          {/* Other Commercial Cleaning Services in Dallas */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  Other Commercial Cleaning Services in Dallas
                </h2>
                <p className="text-xl text-muted-foreground mb-12">
                  Beyond restaurant cleaning, we offer specialized commercial cleaning services for all your Dallas business needs.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <Link to="/dallas/retail-cleaning/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors mb-4">
                        <Store className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Retail Cleaning Services
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Professional cleaning for retail stores and shopping centers in Dallas.
                      </p>
                    </div>
                  </Link>
                  <Link to="/dallas/gym-cleaning/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors mb-4">
                        <Dumbbell className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Gym Cleaning Services
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Professional gym and fitness center cleaning to maintain hygienic workout environments.
                      </p>
                    </div>
                  </Link>
                  <Link to="/dallas/showroom-cleaning/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors mb-4">
                        <Package className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Showroom Cleaning Services
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Professional showroom cleaning to showcase products in pristine environments.
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
                      <h3 className="text-lg font-semibold">What's included in restaurant cleaning for Dallas establishments?</h3>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <p className="text-muted-foreground">
                        Our Dallas restaurant cleaning includes kitchen deep cleaning and degreasing, dining room sanitation, bar area cleaning, restroom intensive cleaning, floor care, and trash removal. We use food-safe products and follow health department guidelines to ensure your establishment stays compliant and guest-ready. Every service is customized to your restaurant's specific needs.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2" className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <h3 className="text-lg font-semibold">How often should Dallas restaurants be professionally cleaned?</h3>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <p className="text-muted-foreground">
                        Most Dallas restaurants benefit from daily light cleaning with comprehensive deep cleaning 2-3 times per week. High-volume establishments may require nightly deep cleaning. Kitchen hoods and equipment should be deep cleaned monthly or quarterly depending on usage. We can assess your specific needs and recommend an optimal cleaning schedule that maintains health code compliance.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3" className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <h3 className="text-lg font-semibold">Do you help Dallas restaurants prepare for health inspections?</h3>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <p className="text-muted-foreground">
                        Yes, we specialize in health inspection preparation for Dallas restaurants. Our team understands local health department standards and can provide pre-inspection deep cleaning to ensure your establishment is ready. We focus on critical areas inspectors check including food prep surfaces, storage areas, equipment cleanliness, and sanitation stations. Many of our clients schedule inspection-prep cleanings to ensure they pass with flying colors.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-4" className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <h3 className="text-lg font-semibold">Can you clean around our Dallas restaurant's operating hours?</h3>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <p className="text-muted-foreground">
                        Absolutely. We understand Dallas restaurants operate on varied schedules. We can clean during closed hours, late nights after service, early mornings before opening, or between lunch and dinner service. Our flexible scheduling ensures thorough cleaning without disrupting your operations or inconveniencing guests. We work with your management team to create a cleaning schedule that works best for your establishment.
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
                  Ready for 5-Star Cleanliness?
                </h2>
                <p className="text-xl mb-8 opacity-90">
                  Join the Dallas restaurants that trust Red Rock Cleans for health code compliance and impeccable dining experiences that earn rave reviews.
                </p>
                <Button size="lg" variant="secondary" className="h-14 text-lg px-8" asChild>
                  <Link to="/commercial-quote?location=dallas">
                    <Utensils className="w-5 h-5 mr-2" />
                    Schedule Your Restaurant Cleaning Today
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

export default RestaurantCleaningDallasPage;


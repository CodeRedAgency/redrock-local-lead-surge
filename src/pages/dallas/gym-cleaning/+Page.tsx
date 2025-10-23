import { DallasNavigation } from "@/components/DallasNavigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Dumbbell, ShowerHead, Shield, Bike, Droplets, User, Users, ThumbsUp, ShieldX, Trophy, Stethoscope, Store, GraduationCap, Phone, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';

const neighborhoods = [
  {
    id: "university-park",
    name: "University Park",
    description: "Keep your University Park gym or fitness center spotless and hygienic with our professional cleaning services. We understand that member health and satisfaction depend on pristine equipment and facilities in this health-conscious Dallas neighborhood.",
    faq: [
      {
        question: "Do you have experience with gym cleaning in University Park?",
        answer: "Yes, our team specializes in fitness facility cleaning and has extensive experience servicing gyms, health clubs, and fitness centers throughout University Park and Dallas."
      },
      {
        question: "Can you work around our University Park gym's operating hours?",
        answer: "Absolutely. We schedule our cleaning services during off-peak hours, early mornings, or late evenings to ensure minimal disruption to your University Park members."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our University Park fitness center with exceptional attention to detail. Our members consistently comment on how clean the gym is.",
      author: "Marcus T., Manager, University Park Fitness Club"
    }
  },
  {
    id: "highland-park",
    name: "Highland Park",
    description: "Professional gym cleaning services for Highland Park fitness facilities that demand the highest standards of hygiene and member satisfaction. Our comprehensive protocols ensure your equipment and facilities stay pristine.",
    faq: [
      {
        question: "What areas of Highland Park gyms do you clean?",
        answer: "We clean all areas including workout floors, equipment, locker rooms, showers, group fitness studios, reception areas, and all high-touch surfaces throughout Highland Park facilities."
      },
      {
        question: "Do you use gym-safe disinfectants in Highland Park?",
        answer: "Yes, we use EPA-approved disinfectants that are effective against viruses and bacteria while being safe for fitness equipment and won't damage surfaces in Highland Park gyms."
      }
    ],
    testimonial: {
      text: "Our Highland Park gym has never been cleaner. Red Rock Cleans understands the importance of sanitation in a fitness environment and delivers consistently.",
      author: "Sarah L., Owner, Highland Park Health Club"
    }
  },
  {
    id: "uptown-dallas",
    name: "Uptown Dallas",
    description: "Keep your Uptown Dallas fitness center operating at peak hygiene with our comprehensive gym cleaning services. We specialize in maintaining the high standards expected in this competitive urban fitness market.",
    faq: [
      {
        question: "Do you clean both large and small gyms in Uptown Dallas?",
        answer: "Yes, we provide gym cleaning services for fitness facilities of all sizes in Uptown Dallas, from boutique studios to large health clubs."
      },
      {
        question: "What's included in your Uptown Dallas gym cleaning?",
        answer: "We provide equipment disinfection, locker room sanitation, shower cleaning, floor care, and high-touch surface disinfection throughout your Uptown Dallas facility."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Uptown Dallas gym to the highest standards. Their focus on equipment sanitation and locker room hygiene is exceptional.",
      author: "David R., Director, Uptown Dallas Fitness Center"
    }
  },
  {
    id: "downtown-dallas",
    name: "Downtown Dallas",
    description: "Downtown Dallas fitness centers trust Red Rock Cleans for consistent, professional gym cleaning that maintains member health and satisfaction. Our team understands the unique challenges of high-traffic urban facilities.",
    faq: [
      {
        question: "How far in advance should Downtown Dallas gyms book cleaning?",
        answer: "We recommend booking at least one week in advance for comprehensive cleaning, though we can accommodate urgent sanitation needs for Downtown Dallas facilities."
      },
      {
        question: "Do you provide cleaning supplies for Downtown Dallas gyms?",
        answer: "Yes, we bring all professional-grade gym-safe disinfectants, equipment sanitizers, and cleaning supplies to every Downtown Dallas gym appointment."
      }
    ],
    testimonial: {
      text: "As a Downtown Dallas gym manager, I trust Red Rock Cleans for their reliability and thorough approach to fitness facility sanitation. Outstanding service!",
      author: "Jennifer M., Facility Manager, Downtown Dallas Athletic Club"
    }
  },
  {
    id: "preston-hollow",
    name: "Preston Hollow",
    description: "Preston Hollow fitness facilities enjoy professional, meticulous cleaning with our gym service that maintains the highest hygiene standards. We deliver premium cleaning for this distinguished Dallas area's health clubs.",
    faq: [
      {
        question: "Do you service luxury fitness clubs in Preston Hollow?",
        answer: "Yes, we specialize in cleaning high-end fitness facilities and understand the premium standards expected by Preston Hollow health club members."
      },
      {
        question: "Can you work around Preston Hollow gym class schedules?",
        answer: "Absolutely! We coordinate with your programming team to schedule cleaning around peak class times and member traffic in Preston Hollow facilities."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Preston Hollow health club impeccably. Their attention to detail and equipment care are unmatched.",
      author: "Robert H., General Manager, Preston Hollow Athletic Club"
    }
  },
  {
    id: "plano",
    name: "Plano",
    description: "Plano fitness centers rely on our gym cleaning service for consistent hygiene, member satisfaction, and equipment longevity. As a major fitness market, Plano facilities demand the highest standards—we deliver them consistently.",
    faq: [
      {
        question: "What makes Red Rock Cleans different for Plano gyms?",
        answer: "We're locally owned, fully insured, and our team is trained in fitness facility sanitation with extensive experience in Plano's competitive gym market."
      },
      {
        question: "Do you offer emergency cleaning for Plano gyms?",
        answer: "Yes, we can provide rapid-response cleaning services for sanitation emergencies, equipment spills, or urgent hygiene situations in Plano facilities."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been cleaning our Plano gym for two years. They understand our member expectations and deliver flawlessly every time.",
      author: "Lisa P., Operations Manager, Plano Fitness Complex"
    }
  },
  {
    id: "frisco",
    name: "Frisco",
    description: "Frisco fitness facilities enjoy consistent, professional gym cleaning that keeps workout environments hygienic and welcoming. Our team serves Frisco's growing fitness sector with expertise and reliability.",
    faq: [
      {
        question: "How long does gym cleaning take in Frisco?",
        answer: "Most Frisco gym cleanings take 3-5 hours depending on facility size, equipment quantity, and specific sanitation requirements."
      },
      {
        question: "Do you work with Frisco gym ownership teams?",
        answer: "Yes, we coordinate closely with managers and owners to ensure our cleaning meets your specific standards and member expectations in Frisco facilities."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our Frisco fitness center beautifully. Their equipment disinfection and locker room sanitation are outstanding.",
      author: "Amanda S., Director, Frisco Athletic Center"
    }
  },
  {
    id: "prosper",
    name: "Prosper",
    description: "Prosper fitness facilities trust our gym cleaning service for consistent member health and satisfaction. We bring professional-grade sanitation expertise to this growing Dallas area community's health clubs.",
    faq: [
      {
        question: "What cleaning protocols do you use in Prosper gyms?",
        answer: "We use EPA-approved disinfectants, systematic equipment sanitization, deep locker room cleaning, and high-touch surface protocols for Prosper fitness facilities."
      },
      {
        question: "Can you customize cleaning for Prosper gyms?",
        answer: "Yes, we can customize our gym cleaning service to focus on specific equipment types, member concerns, or facility priorities for Prosper fitness centers."
      }
    ],
    testimonial: {
      text: "Working in Prosper, I appreciate Red Rock Cleans' expertise and reliability for our fitness facility. Excellent gym cleaning service.",
      author: "James W., Owner, Prosper Health & Fitness"
    }
  }
];

const GymCleaningDallasPage = () => {
  const { t } = useTranslation();
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

  const Counter = ({ end, label, icon: Icon, suffix = "" }: { end: number; label: string; icon: any; suffix?: string }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!countersInView) return;

      let startTime: number;
      const duration = 2000;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        // For decimal numbers, use one decimal place
        if (end < 10) {
          setCount(Math.floor(progress * end * 10) / 10);
        } else {
          setCount(Math.floor(progress * end));
        }

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
          {end < 10 ? count.toFixed(1) : count}{suffix}
        </div>
        <p className="text-muted-foreground">{label}</p>
      </div>
    );
  };

  return (
    <>
      <Helmet>
        <title>{t(`commercialServices.dallas.gym.title`, { defaultValue: "Gym Cleaning in Dallas | Red Rock Cleans" })}</title>
        <meta name="description" content={t(`commercialServices.dallas.gym.description`, { defaultValue: "Gym cleaning services in Dallas. Sanitized equipment & facilities for Dallas, Plano & Frisco fitness centers. Book today!" })} />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <DallasNavigation />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative py-24 md:py-32 overflow-hidden">
            <div className="absolute inset-0">
              <img 
                src="/src/assets/hero-commercial.jpg" 
                alt="Professional gym cleaning service in Dallas"
                className="w-full h-full object-cover scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                  Hygienic & Professional Gym Cleaning in Dallas
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                  A visibly clean and thoroughly disinfected gym is paramount for member health, satisfaction, and retention in the competitive Dallas fitness market. Our specialized cleaning services ensure your facility maintains the highest hygiene standards, protecting your members and your reputation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="h-14 text-lg px-8" asChild>
                    <Link to="/commercial-quote?location=dallas">
                      <Dumbbell className="w-5 h-5 mr-2" />
                      Schedule Gym Cleaning
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="h-14 text-lg px-8" asChild>
                    <Link to="/contact">
                      <Shield className="w-5 h-5 mr-2" />
                      Get Free Quote
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Creating a Healthier Workout Environment in Dallas */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  Creating a Healthier Workout Environment in Dallas
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Dumbbell className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Germ-Free Equipment</h3>
                      <p className="text-muted-foreground text-sm">
                        Meticulous disinfection of all workout machines, weights, and high-touch surfaces ensures your Dallas members train in a hygienic environment. We use EPA-approved sanitizers that eliminate 99.9% of germs without damaging equipment.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Thoroughly Sanitized →
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <ShowerHead className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Fresh & Inviting Spaces</h3>
                      <p className="text-muted-foreground text-sm">
                        Clean locker rooms, showers, and common areas enhance the member experience at your Dallas fitness facility. Our deep cleaning eliminates odors, prevents mold, and creates a spa-like atmosphere that members love.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Sparkling Clean →
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Shield className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Preventing Cross-Contamination</h3>
                      <p className="text-muted-foreground text-sm">
                        Our protocols are designed to stop the spread of bacteria and viruses in high-traffic zones throughout your Dallas gym. Strategic disinfection timing and systematic cleaning patterns protect member health.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Health Protected →
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
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Bike className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Workout & Equipment Areas</h3>
                      <p className="text-muted-foreground text-sm">
                        Sanitizing all fitness equipment, cardio machines, weights, mats, and benches with gym-safe disinfectants. Every high-touch surface receives thorough attention in your Dallas facility.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Equipment Care →
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Droplets className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Locker Rooms & Showers</h3>
                      <p className="text-muted-foreground text-sm">
                        Deep cleaning, sanitizing, and deodorizing to prevent mold, mildew, and odors. Our Dallas team ensures your locker facilities are fresh, hygienic, and welcoming for every member.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Fresh Spaces →
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <User className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Group Fitness Studios</h3>
                      <p className="text-muted-foreground text-sm">
                        Cleaning specialized flooring, mirrors, and props used in classes. We ensure your Dallas yoga studios, spin rooms, and group fitness areas are pristine for every session.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Studio Clean →
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Users className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Reception & High-Traffic Zones</h3>
                      <p className="text-muted-foreground text-sm">
                        Maintaining a sparkling first impression and disinfecting entry points, front desks, and waiting areas. Your Dallas gym's reception area sets the tone for member satisfaction.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        First Impressions →
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* The Red Rock Cleans Difference for Dallas Gyms */}
          <section id="counters-section" className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  The Red Rock Cleans Difference for Dallas Gyms
                </h2>
                <div className="grid md:grid-cols-3 gap-12">
                  <Counter end={4.8} label="Member Satisfaction Score" icon={ThumbsUp} suffix="/5" />
                  <Counter end={99} label="99.9% Germ Reduction" icon={ShieldX} suffix=".9%" />
                  <Counter end={5} label="Top-Rated Cleanliness" icon={Trophy} suffix="/5" />
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
                            <Link to="/commercial-quote?location=dallas">
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

          {/* Other Commercial Cleaning Services in Dallas */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  Other Commercial Cleaning Services in Dallas
                </h2>
                <p className="text-xl text-muted-foreground mb-12">
                  Beyond gym cleaning, we offer specialized commercial cleaning services for all your Dallas facility needs.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <Link to="/dallas/medical-office-cleaning/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors mb-4">
                        <Stethoscope className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Medical Office Cleaning Services
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Specialized cleaning for healthcare facilities with strict hygiene standards in Dallas.
                      </p>
                    </div>
                  </Link>
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
                  <Link to="/dallas/school-cleaning/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors mb-4">
                        <GraduationCap className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        School Cleaning Services
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Professional cleaning for educational facilities ensuring safe learning environments.
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
                      <h3 className="text-lg font-semibold">What makes gym cleaning different from regular commercial cleaning?</h3>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <p className="text-muted-foreground">
                        Gym cleaning requires specialized disinfectants safe for fitness equipment, understanding of high-touch surfaces unique to fitness facilities, and protocols for preventing cross-contamination in high-traffic workout areas. Our Dallas team uses EPA-approved sanitizers that eliminate germs without damaging machines, rubber flooring, or other gym-specific surfaces.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2" className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <h3 className="text-lg font-semibold">How often should Dallas gyms be professionally cleaned?</h3>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <p className="text-muted-foreground">
                        Most Dallas gyms benefit from daily equipment sanitization with comprehensive deep cleaning 2-3 times per week. High-traffic facilities may require daily deep cleaning. Locker rooms and showers should be cleaned multiple times daily. We can assess your specific facility traffic and recommend an optimal cleaning schedule for your Dallas gym.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3" className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <h3 className="text-lg font-semibold">Do you clean locker rooms and showers in Dallas gyms?</h3>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <p className="text-muted-foreground">
                        Yes, locker room and shower sanitation is a specialty of ours. We deep clean and disinfect showers, toilets, sinks, benches, and lockers. Our Dallas team uses anti-mold treatments, odor eliminators, and hospital-grade disinfectants to ensure your locker facilities are fresh, hygienic, and welcoming. We pay special attention to preventing mold and mildew in wet areas.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-4" className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <h3 className="text-lg font-semibold">Can you work around our Dallas gym's operating hours?</h3>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <p className="text-muted-foreground">
                        Absolutely. We understand Dallas gyms operate on varied schedules, often with early morning and late evening hours. We can schedule cleaning during off-peak times, between class sessions, or after closing. Our flexible approach ensures minimal disruption to your members while maintaining the highest hygiene standards in your facility.
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
                  Ready for a Cleaner, Healthier Gym?
                </h2>
                <p className="text-xl mb-8 opacity-90">
                  Join the Dallas fitness facilities that trust Red Rock Cleans for professional gym cleaning that protects member health and satisfaction.
                </p>
                <Button size="lg" variant="secondary" className="h-14 text-lg px-8" asChild>
                  <Link to="/commercial-quote?location=dallas">
                    <Dumbbell className="w-5 h-5 mr-2" />
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

export default GymCleaningDallasPage;


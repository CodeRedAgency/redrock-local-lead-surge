import { DallasNavigation } from "@/components/DallasNavigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HeartHandshake, BookOpen, BadgeCheck, GraduationCap, Footprints, Medal, Droplets, User, Building, Calendar, Building2, Hospital, Dumbbell } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";

const neighborhoods = [
  {
    id: "university-park",
    name: "University Park",
    description: "Keep your University Park school safe and healthy with our professional cleaning services. We understand the high standards expected by Dallas educational institutions and deliver meticulous results that protect students and staff.",
    faq: [
      {
        question: "Do you have experience with school cleaning in University Park?",
        answer: "Yes, our team specializes in educational facility cleaning with extensive experience servicing schools, daycares, and preschools throughout University Park and Dallas."
      },
      {
        question: "Are your cleaning products safe for University Park schools?",
        answer: "Absolutely. We use green, non-toxic cleaning products that are EPA-approved and safe for children, meeting the highest standards for University Park educational environments."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our University Park school beautifully. Parents and teachers consistently comment on how clean and healthy our classrooms are.",
      author: "Principal Susan M., University Park Elementary"
    }
  },
  {
    id: "highland-park",
    name: "Highland Park",
    description: "Professional school cleaning services for Highland Park educational facilities that demand the highest standards of cleanliness and safety. Our comprehensive cleaning ensures your school maintains a healthy learning environment.",
    faq: [
      {
        question: "What areas of Highland Park schools do you clean?",
        answer: "We clean all areas including classrooms, labs, hallways, restrooms, cafeterias, gymnasiums, libraries, and administrative offices throughout Highland Park schools."
      },
      {
        question: "Are your staff background-checked in Highland Park?",
        answer: "Yes, all our cleaning staff undergo thorough background checks and are vetted professionals, ensuring the safety of Highland Park students and faculty."
      }
    ],
    testimonial: {
      text: "Our Highland Park school has never looked better. Red Rock Cleans understands educational environments and consistently delivers exceptional results.",
      author: "Facilities Manager Tom R., Highland Park Academy"
    }
  },
  {
    id: "uptown-dallas",
    name: "Uptown Dallas",
    description: "Keep your Uptown Dallas school operating at peak cleanliness with our comprehensive educational facility cleaning services. We specialize in maintaining the high standards expected in Dallas schools.",
    faq: [
      {
        question: "Do you clean both public and private schools in Uptown Dallas?",
        answer: "Yes, we provide school cleaning services for all educational facilities in Uptown Dallas, including public schools, private schools, daycares, and preschools."
      },
      {
        question: "What's included in your Uptown Dallas school cleaning?",
        answer: "We provide classroom disinfection, hallway floor care, restroom sanitation, cafeteria cleaning, and gymnasium maintenance throughout your Uptown Dallas educational facility."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Uptown Dallas school to the highest standards. Their attention to detail and safety protocols are exceptional.",
      author: "Director Maria L., Uptown Dallas Learning Center"
    }
  },
  {
    id: "downtown-dallas",
    name: "Downtown Dallas",
    description: "Downtown Dallas schools trust Red Rock Cleans for consistent, professional cleaning that maintains student health and learning excellence. Our team understands the unique challenges of urban educational facility cleaning.",
    faq: [
      {
        question: "How far in advance should Downtown Dallas schools book cleaning?",
        answer: "We recommend booking at least two weeks in advance for regular cleaning, though we can accommodate urgent needs for Downtown Dallas educational facilities."
      },
      {
        question: "Do you provide cleaning supplies for Downtown Dallas schools?",
        answer: "Yes, we bring all professional-grade, child-safe cleaning supplies and equipment to every Downtown Dallas school cleaning appointment."
      }
    ],
    testimonial: {
      text: "As a Downtown Dallas school administrator, I trust Red Rock Cleans for their reliability and thorough approach to educational facility cleaning. Outstanding!",
      author: "Assistant Principal James K., Downtown Dallas Preparatory"
    }
  },
  {
    id: "preston-hollow",
    name: "Preston Hollow",
    description: "Preston Hollow schools enjoy professional, meticulous cleaning with our service that maintains the highest educational standards. We deliver premium school cleaning for this distinguished Dallas area's educational institutions.",
    faq: [
      {
        question: "Do you service private schools in Preston Hollow?",
        answer: "Yes, we specialize in cleaning private educational institutions and understand the premium standards expected by Preston Hollow schools and their communities."
      },
      {
        question: "Can you work around Preston Hollow school schedules?",
        answer: "Absolutely! We coordinate with administrators to schedule cleaning during after-school hours, weekends, or school breaks in Preston Hollow institutions."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Preston Hollow school impeccably. Their classroom disinfection and facility care are unmatched in the Dallas area.",
      author: "Headmaster David H., Preston Hollow Academy"
    }
  },
  {
    id: "plano",
    name: "Plano",
    description: "Plano schools rely on our cleaning services for consistent student health, attendance improvement, and operational excellence. As a major educational hub, Plano institutions demand the highest standards—we deliver them consistently.",
    faq: [
      {
        question: "What makes Red Rock Cleans different for Plano schools?",
        answer: "We're locally owned, fully insured, and our team is trained in educational facility cleaning with extensive experience in Plano's diverse schools and daycares."
      },
      {
        question: "Do you offer emergency cleaning for Plano schools?",
        answer: "Yes, we can provide rapid-response cleaning services for illness outbreaks, contamination events, or urgent sanitation needs in Plano educational facilities."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been cleaning our Plano school for four years. They understand educational requirements and deliver flawlessly every time.",
      author: "Principal Nancy P., Plano Elementary School"
    }
  },
  {
    id: "frisco",
    name: "Frisco",
    description: "Frisco schools enjoy consistent, professional cleaning that keeps learning environments spotless and healthy. Our team serves Frisco's growing educational sector with expertise and reliability.",
    faq: [
      {
        question: "How long does school cleaning take in Frisco?",
        answer: "Most Frisco school cleanings take 4-6 hours depending on facility size, student population, and specific cleaning requirements."
      },
      {
        question: "Do you work with Frisco school district standards?",
        answer: "Yes, we coordinate with district administrators and facility managers to ensure our cleaning meets all standards and regulations for Frisco educational institutions."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our Frisco school beautifully. Their classroom care and sanitation protocols are outstanding.",
      author: "Superintendent Rachel G., Frisco Middle School"
    }
  },
  {
    id: "prosper",
    name: "Prosper",
    description: "Prosper schools trust our cleaning service for consistent student safety and learning excellence. We bring professional educational facility cleaning expertise to this growing Dallas area community's schools.",
    faq: [
      {
        question: "What cleaning protocols do you use in Prosper schools?",
        answer: "We use child-safe, EPA-approved products and follow best practices for classroom disinfection, floor care, and high-touch surface sanitation in Prosper schools."
      },
      {
        question: "Can you customize cleaning for Prosper schools?",
        answer: "Yes, we can customize our school cleaning service to focus on specific areas, concerns, or health requirements for Prosper educational facilities."
      }
    ],
    testimonial: {
      text: "Working in Prosper, I appreciate Red Rock Cleans' expertise and reliability for our school. Excellent professional cleaning service.",
      author: "Vice Principal Thomas W., Prosper High School"
    }
  }
];

const SchoolCleaningDallasPage = () => {
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
        <title>School Cleaning Services Dallas | Red Rock Cleans</title>
        <meta name="description" content="Professional school cleaning services in Dallas. Red Rock Cleans provides a safe and healthy learning environment for students in Plano, Frisco, and across the Dallas area." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <DallasNavigation />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative py-24 md:py-32 overflow-hidden">
            <div className="absolute inset-0">
              <img 
                src="/src/assets/hero-commercial.jpg" 
                alt="Professional school cleaning service in Dallas"
                className="w-full h-full object-cover scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                  Safe & Healthy School Cleaning Services in Dallas
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                  A clean school is fundamental to student health, attendance, and a positive learning environment for communities across the Dallas metroplex. Our professional school cleaning services ensure your educational facility provides the safe, healthy environment students and staff deserve.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="h-14 text-lg px-8" asChild>
                    <Link to="/commercial-quote?location=dallas">
                      <GraduationCap className="w-5 h-5 mr-2" />
                      Schedule School Cleaning
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="h-14 text-lg px-8" asChild>
                    <Link to="/contact">
                      <HeartHandshake className="w-5 h-5 mr-2" />
                      Get Free Quote
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* A Higher Standard for Student & Staff Well-being */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  A Higher Standard for Student & Staff Well-being
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <HeartHandshake className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Health & Safety First</h3>
                      <p className="text-muted-foreground text-sm">
                        Using green, non-toxic products to reduce germs and allergens. Our Dallas team prioritizes student and staff health with EPA-approved, child-safe cleaning solutions that protect without harsh chemicals.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Safe Products →
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <BookOpen className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Creating a Positive Learning Environment</h3>
                      <p className="text-muted-foreground text-sm">
                        A clean, distraction-free space improves student focus and faculty morale. Our Dallas school cleaning creates an environment where learning thrives and educators can teach effectively.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Learning Excellence →
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <BadgeCheck className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Trained & Vetted Professionals</h3>
                      <p className="text-muted-foreground text-sm">
                        All staff are background-checked for the safety and peace of mind of your Dallas school community. We ensure only trusted, trained professionals work in your educational facility.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Trusted Team →
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Our Comprehensive School Cleaning Checklist */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  Our Comprehensive School Cleaning Checklist
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <GraduationCap className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Classrooms & Labs</h3>
                      <p className="text-muted-foreground text-sm">
                        Disinfecting desks, chairs, and high-touch surfaces. We keep your Dallas classrooms germ-free and ready for learning with thorough sanitation of all student and teacher areas.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Classroom Care →
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Footprints className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Hallways & Common Areas</h3>
                      <p className="text-muted-foreground text-sm">
                        High-traffic floor care and locker cleaning. Our Dallas team maintains clean hallways and common spaces where students gather, ensuring safe passage throughout your school.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        High-Traffic Areas →
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Medal className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Gymnasiums & Auditoriums</h3>
                      <p className="text-muted-foreground text-sm">
                        Cleaning large-scale spaces and equipment. We maintain your Dallas school's athletic and performance areas to support student activities and community events.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Large Spaces →
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Droplets className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Restrooms & Cafeterias</h3>
                      <p className="text-muted-foreground text-sm">
                        Intensive sanitation protocols to prevent germ spread. We apply hospital-grade cleaning to these critical areas in your Dallas school to protect student health.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Critical Sanitation →
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* The Impact of a Professionally Cleaned School */}
          <section id="counters-section" className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  The Impact of a Professionally Cleaned School
                </h2>
                <div className="grid md:grid-cols-3 gap-12">
                  <Counter end={5000} label="Students & Staff Protected" icon={User} />
                  <Counter end={45} label="Educational Facilities Served" icon={Building} />
                  <Counter end={20} label="Improved Attendance Days" icon={Calendar} suffix="%" />
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
                            Professional school cleaning services
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
                              Schedule Your {neighborhood.name} School Cleaning
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
                  Beyond school cleaning, we offer specialized commercial cleaning services for all your Dallas facility needs.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <Link to="/dallas/government-facility-cleaning/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors mb-4">
                        <Building2 className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Government Facility Cleaning
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Secure and compliant cleaning for municipal and federal buildings.
                      </p>
                    </div>
                  </Link>
                  <Link to="/dallas/medical-office-cleaning/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors mb-4">
                        <Hospital className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Medical Office Cleaning
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        HIPAA and OSHA compliant cleaning for healthcare facilities.
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
                        Professional gym and fitness center cleaning for hygienic workout spaces.
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
                      <h3 className="text-lg font-semibold">What's included in school cleaning services for Dallas educational facilities?</h3>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <p className="text-muted-foreground">
                        Our Dallas school cleaning includes classroom disinfection, hallway and floor care, restroom sanitation, cafeteria cleaning, gymnasium maintenance, library dusting, administrative office cleaning, and trash removal. We use child-safe, EPA-approved products and customize our services based on your school's specific needs, size, and schedule.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2" className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <h3 className="text-lg font-semibold">How often should Dallas schools be professionally cleaned?</h3>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <p className="text-muted-foreground">
                        Most Dallas schools benefit from daily cleaning during the school year with comprehensive deep cleaning during breaks. High-touch areas like restrooms and cafeterias should be cleaned multiple times daily. We recommend weekly deep cleaning of classrooms and monthly deep cleaning of gymnasiums and auditoriums. We can assess your student population and facility needs to recommend an optimal schedule.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3" className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <h3 className="text-lg font-semibold">Are your cleaning products safe for children in Dallas schools?</h3>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <p className="text-muted-foreground">
                        Yes, absolutely. We exclusively use green, non-toxic, EPA-approved cleaning products that are safe for children and meet the highest standards for educational environments. Our Dallas team prioritizes student and staff health by avoiding harsh chemicals while still providing effective disinfection. All our products are specifically chosen for their safety in schools while maintaining powerful germ-killing capabilities.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-4" className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <h3 className="text-lg font-semibold">Are your staff background-checked for Dallas school cleaning?</h3>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <p className="text-muted-foreground">
                        Yes, all Red Rock Cleans staff assigned to Dallas schools undergo thorough background checks and are fully vetted professionals. We understand the critical importance of safety in educational environments and ensure only trusted, trained team members work in your school. Our staff also receives specialized training in educational facility cleaning protocols and child safety procedures.
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
                  Ready for a Healthier Learning Environment?
                </h2>
                <p className="text-xl mb-8 opacity-90">
                  Join the Dallas schools that trust Red Rock Cleans for safe, healthy educational facilities that support student success.
                </p>
                <Button size="lg" variant="secondary" className="h-14 text-lg px-8" asChild>
                  <Link to="/commercial-quote?location=dallas">
                    <GraduationCap className="w-5 h-5 mr-2" />
                    Schedule Your School Cleaning Today
                  </Link>
                </Button>
              </div>
            </div>
          </section>

          {/* Image Section */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <img 
                  src="/src/assets/hero-commercial.jpg" 
                  alt="A bright and sanitized classroom in a Dallas school, cleaned by Red Rock Cleans"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default SchoolCleaningDallasPage;


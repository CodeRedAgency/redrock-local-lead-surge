import { LasVegasNavigation } from "@/components/LasVegasNavigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  CheckCircle, 
  Clock, 
  Shield, 
  Star, 
  Users, 
  Calendar, 
  Home, 
  Heart, 
  BookOpen, 
  GraduationCap, 
  Monitor, 
  Building, 
  Activity, 
  Apple,
  School,
  User,
  ShoppingBag,
  Link as LinkIcon,
  MapPin
} from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";

const neighborhoods = [
  {
    id: "anthem",
    name: "Anthem",
    description: "Keep your Anthem school safe and healthy with our comprehensive school cleaning services designed for student well-being and educational excellence in the competitive Las Vegas market.",
    faq: [
      {
        question: "Do you understand the specific cleaning requirements for Anthem schools?",
        answer: "Absolutely. Our team is trained in school-specific cleaning protocols and understands the critical importance of maintaining clean, safe learning environments for student health and academic success."
      },
      {
        question: "Can you work around Anthem school schedules?",
        answer: "Yes, we schedule our cleaning services around school hours, extracurricular activities, and educational requirements to minimize disruption to your learning environment."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our Anthem school with exceptional cleanliness standards. Their understanding of educational facility requirements is outstanding.",
      author: "Principal, Anthem Elementary School"
    }
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "Professional school cleaning services for Enterprise educational facilities who demand the highest standards of cleanliness, student safety, and learning environment excellence.",
    faq: [
      {
        question: "What areas of Enterprise schools do you clean?",
        answer: "We clean all areas including classrooms, hallways, gymnasiums, restrooms, cafeterias, and common areas with appropriate school-grade cleaning products and safety protocols."
      },
      {
        question: "Do you provide flexible scheduling for Enterprise schools?",
        answer: "Yes, we work around your school hours, events, and can provide emergency cleaning services when needed for student safety and health."
      }
    ],
    testimonial: {
      text: "Our Enterprise school has never been cleaner or safer for students. Red Rock Cleans respects our educational schedules and provides excellent service around our learning programs.",
      author: "Facilities Director, Enterprise High School"
    }
  },
  {
    id: "green-valley-north",
    name: "Green Valley North",
    description: "Keep your Green Valley North school pristine with our comprehensive school cleaning service designed for student health and educational excellence.",
    faq: [
      {
        question: "Do you clean both public and private schools in Green Valley North?",
        answer: "Yes, we provide school cleaning services for all types of educational facilities, from elementary schools to high schools and specialized learning centers."
      },
      {
        question: "What's included in your Green Valley North school cleaning?",
        answer: "We clean classrooms, labs, hallways, gymnasiums, restrooms, cafeterias, and specialized educational spaces with appropriate cleaning products and safety protocols."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Green Valley North school beautifully. Their precision and attention to educational cleanliness requirements are exceptional.",
      author: "School Administrator, Green Valley North Middle School"
    }
  },
  {
    id: "henderson",
    name: "Henderson",
    description: "Henderson schools trust Red Rock Cleans for consistent, professional school cleaning services that maintain their facilities clean and student-ready year-round.",
    faq: [
      {
        question: "How far in advance should Henderson schools book cleaning?",
        answer: "We recommend booking at least one week in advance, though we can often accommodate shorter notice for emergency situations or special events."
      },
      {
        question: "Do you provide specialized equipment for Henderson school cleaning?",
        answer: "Yes, we bring all specialized equipment including floor scrubbers, disinfectant sprayers, and appropriate cleaning solutions for educational environments and student safety."
      }
    ],
    testimonial: {
      text: "As a Henderson school administrator, I appreciate Red Rock Cleans' understanding of educational facility needs. Highly recommended for schools!",
      author: "Principal, Henderson Elementary School"
    }
  },
  {
    id: "lake-las-vegas",
    name: "Lake Las Vegas",
    description: "Lake Las Vegas schools enjoy pristine, professional cleaning with our school cleaning service that maintains their facilities to the highest student safety standards.",
    faq: [
      {
        question: "Do you service private schools in Lake Las Vegas?",
        answer: "Yes, we specialize in cleaning premium educational facilities and are experienced with sophisticated school environments, luxury learning spaces, and high-end educational standards."
      },
      {
        question: "Can you work around Lake Las Vegas school schedules?",
        answer: "Absolutely! We offer flexible scheduling including early morning, late evening, and emergency services to accommodate your educational calendar and student safety requirements."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Lake Las Vegas school to perfection. Their understanding of educational facilities and safety protocols is remarkable.",
      author: "Headmaster, Lake Las Vegas Preparatory School"
    }
  },
  {
    id: "las-vegas",
    name: "Las Vegas",
    description: "Las Vegas schools rely on our professional school cleaning service for consistent, student-safe facility maintenance that ensures optimal learning environments and student health.",
    faq: [
      {
        question: "What makes Red Rock Cleans different for Las Vegas schools?",
        answer: "We're locally owned, fully insured, and our team is specially trained in school cleaning protocols, student safety requirements, and educational facility cleanliness standards."
      },
      {
        question: "Do you offer emergency school cleaning for Las Vegas?",
        answer: "Yes, we can often provide same-day or emergency cleaning services for critical student safety situations, health incidents, or post-event cleanup."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been cleaning our Las Vegas school for three years. They understand our student needs and maintain our facility safely and professionally.",
      author: "Superintendent, Las Vegas School District"
    }
  },
  {
    id: "macdonald-ranch",
    name: "MacDonald Ranch",
    description: "MacDonald Ranch schools enjoy consistent, professional school cleaning services that keep their facilities spotless and operating at peak student safety.",
    faq: [
      {
        question: "How long does school cleaning take in MacDonald Ranch?",
        answer: "Most MacDonald Ranch school cleanings take 4-8 hours depending on facility size, complexity, and specific safety requirements for educational operations."
      },
      {
        question: "Do you work with MacDonald Ranch school staff?",
        answer: "Yes, we coordinate with your educational staff and administration to ensure our cleaning complements your student schedules and learning requirements."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our MacDonald Ranch school beautifully. Their professional approach and attention to student safety are outstanding.",
      author: "School Manager, MacDonald Ranch Elementary"
    }
  },
  {
    id: "mountains-edge",
    name: "Mountain's Edge",
    description: "Mountain's Edge schools trust our professional school cleaning service for consistent facility maintenance that complements their educational operations and student safety requirements.",
    faq: [
      {
        question: "What cleaning products do you use in Mountain's Edge schools?",
        answer: "We use school-specific, student-safe cleaning products that are effective against germs and allergens while protecting your educational equipment and student health."
      },
      {
        question: "Can you customize cleaning for Mountain's Edge schools?",
        answer: "Yes, we can customize our school cleaning service to focus on specific areas, educational spaces, or particular safety priorities based on your school facility requirements."
      }
    ],
    testimonial: {
      text: "Living in Mountain's Edge, I appreciate Red Rock Cleans' reliability and understanding of our school's safety requirements. Excellent service for educational facilities.",
      author: "School Coordinator, Mountain's Edge High School"
    }
  },
  {
    id: "north-las-vegas",
    name: "North Las Vegas",
    description: "North Las Vegas schools depend on our professional school cleaning service for consistent, student-safe facility maintenance that keeps their educational operations reliable and efficient.",
    faq: [
      {
        question: "Do you offer competitive rates for North Las Vegas schools?",
        answer: "Yes, we provide competitive rates for North Las Vegas schools while maintaining high-quality safety standards and educational facility cleaning requirements."
      },
      {
        question: "How do you ensure quality in North Las Vegas school cleaning?",
        answer: "Every North Las Vegas school cleaning is supervised by certified specialists and we guarantee compliance with safety standards and your specific educational facility requirements."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our North Las Vegas school clean and student-safe. Great value and excellent professional service for our educational operations.",
      author: "School Supervisor, North Las Vegas Elementary"
    }
  },
  {
    id: "paradise",
    name: "Paradise",
    description: "Paradise schools enjoy reliable professional school cleaning services that maintain their facilities to the highest standards of cleanliness, student safety, and learning environment excellence.",
    faq: [
      {
        question: "Do you service diverse school types in Paradise?",
        answer: "Yes, we provide professional cleaning services for all types of educational facilities including elementary schools, middle schools, high schools, and specialized learning centers."
      },
      {
        question: "What's your cancellation policy for Paradise schools?",
        answer: "We require 24-hour notice for cancellations, but we're flexible for emergency situations and can reschedule around critical educational events and student programs."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our Paradise school beautifully. Professional, safe, and thorough every time for our educational operations.",
      author: "Operations Manager, Paradise High School"
    }
  },
  {
    id: "seven-hills",
    name: "Seven Hills",
    description: "Seven Hills schools trust our professional school cleaning service for consistent, student-safe facility maintenance that preserves their educational operations and student safety.",
    faq: [
      {
        question: "Do you service private schools in Seven Hills?",
        answer: "Yes, we have extensive experience cleaning premium educational facilities, including those with sophisticated learning environments, luxury amenities, and high-end school standards."
      },
      {
        question: "How do you ensure security in Seven Hills schools?",
        answer: "All our team members are background-checked, bonded, and insured. We respect the sensitive nature of your educational operations and maintain strict confidentiality and security protocols."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Seven Hills school to perfection. Their professionalism and understanding of educational facility safety requirements are outstanding.",
      author: "School Director, Seven Hills Academy"
    }
  },
  {
    id: "silverado-ranch",
    name: "Silverado Ranch",
    description: "Silverado Ranch schools rely on our professional school cleaning service for consistent facility maintenance that keeps their educational operations operating smoothly and student-safe.",
    faq: [
      {
        question: "Do you work around Silverado Ranch school schedules?",
        answer: "Yes, we can schedule cleanings around your school hours, extracurricular activities, and student schedules for your convenience and educational efficiency."
      },
      {
        question: "What if we're not satisfied with cleaning in Silverado Ranch?",
        answer: "We guarantee satisfaction and will return to address any concerns at no additional charge, understanding the critical nature of your educational operations."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Silverado Ranch school spotless and student-safe for over two years. Highly recommend their professional service for educational facilities!",
      author: "Operations Manager, Silverado Ranch Middle School"
    }
  },
  {
    id: "spring-valley",
    name: "Spring Valley",
    description: "Spring Valley schools enjoy consistent, professional school cleaning services that maintain their facilities clean and operating at optimal student safety year-round.",
    faq: [
      {
        question: "How often do Spring Valley schools schedule cleaning?",
        answer: "Most Spring Valley schools prefer daily or weekly cleaning, though we offer flexible scheduling based on your educational requirements and student safety patterns."
      },
      {
        question: "Do you provide specialized cleaning for Spring Valley schools?",
        answer: "Yes, we offer both regular school cleaning and specialized services for critical safety maintenance, post-event cleanup, and emergency cleaning."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our Spring Valley school beautifully. Professional, reliable, and always safe for our educational operations.",
      author: "School Manager, Spring Valley Elementary"
    }
  },
  {
    id: "summerlin-south",
    name: "Summerlin South",
    description: "Summerlin South schools trust our professional school cleaning service for consistent, high-quality facility maintenance that complements their premium educational operations and student safety excellence.",
    faq: [
      {
        question: "Do you service private schools in Summerlin South?",
        answer: "Yes, we specialize in cleaning high-end educational facilities and are experienced with sophisticated school environments, premium learning spaces, and luxury educational standards."
      },
      {
        question: "Can you accommodate Summerlin South school schedules?",
        answer: "Absolutely! We're familiar with busy educational operations and can work around critical operational windows, student schedules, and educational program requirements."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Summerlin South school to the highest standards. Exceptional professional service and deep understanding of educational facility safety requirements.",
      author: "Headmaster, Summerlin South Preparatory School"
    }
  },
  {
    id: "sunrise-manor",
    name: "Sunrise Manor",
    description: "Sunrise Manor schools depend on our professional school cleaning service for consistent, student-safe facility maintenance that keeps their educational operations spotless and operating efficiently.",
    faq: [
      {
        question: "Do you offer competitive rates for Sunrise Manor schools?",
        answer: "Yes, we provide competitive rates for Sunrise Manor schools while maintaining high professional cleaning standards and educational facility safety compliance."
      },
      {
        question: "How reliable is your service in Sunrise Manor schools?",
        answer: "We're committed to reliability and have a strong track record of consistent, professional service in Sunrise Manor educational facilities."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Sunrise Manor school clean and student-safe. Great value and reliable professional service for our educational operations.",
      author: "Operations Supervisor, Sunrise Manor Elementary"
    }
  },
  {
    id: "whitney",
    name: "Whitney",
    description: "Whitney schools enjoy professional school cleaning services that maintain their facilities clean, student-safe, and ready for optimal learning environments.",
    faq: [
      {
        question: "Do you work with diverse Whitney school environments?",
        answer: "Yes, we're experienced with educational facilities of all types and sizes, using professional cleaning practices appropriate for different school operations and safety requirements."
      },
      {
        question: "Can you schedule around Whitney school operational requirements?",
        answer: "Absolutely! We offer flexible scheduling including early morning, late evening, and emergency services around your critical educational calendar."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our Whitney school beautifully. Professional, trustworthy, and always safe for our educational operations.",
      author: "School Manager, Whitney High School"
    }
  },
  {
    id: "winchester",
    name: "Winchester",
    description: "Winchester schools trust our professional school cleaning service for consistent, student-safe facility maintenance that keeps their educational operations spotless and operating at peak performance year-round.",
    faq: [
      {
        question: "Do you service diverse school types in Winchester?",
        answer: "Yes, we provide professional school cleaning for all types of educational facilities including elementary schools, middle schools, high schools, and specialized learning centers."
      },
      {
        question: "How do you ensure quality in Winchester school cleaning?",
        answer: "Every Winchester school cleaning is supervised by certified specialists and we guarantee compliance with safety standards and your specific educational facility requirements."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Winchester school immaculate and student-safe. Reliable, professional, and excellent value for our educational operations.",
      author: "Operations Manager, Winchester Elementary School"
    }
  }
];

const SchoolCleaningLasVegasPage = () => {
  const [openItem, setOpenItem] = useState<string>("");
  const [counters, setCounters] = useState({
    studentsProtected: 0,
    facilitiesServed: 0,
    attendanceDays: 0
  });

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

  // Animate counters
  useEffect(() => {
    const animateCounters = () => {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;
      
      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        
        setCounters({
          studentsProtected: Math.floor(2500 * progress),
          facilitiesServed: Math.floor(45 * progress),
          attendanceDays: Math.floor(15 * progress)
        });
        
        if (step >= steps) {
          clearInterval(timer);
        }
      }, stepDuration);
    };

    // Start animation after component mounts
    const timer = setTimeout(animateCounters, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Helmet>
        <title>School Cleaning Services Las Vegas | Red Rock Cleans</title>
        <meta name="description" content="Professional school cleaning services in Las Vegas. Red Rock Cleans provides a safe and healthy learning environment for students in Henderson, Summerlin, and across Clark County." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <LasVegasNavigation />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative py-24 md:py-32 overflow-hidden">
            <div className="absolute inset-0">
              <img 
                src="/src/assets/hero-commercial.jpg" 
                alt="Professional school cleaning service in a Las Vegas educational facility"
                className="w-full h-full object-cover scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                  Safe & Healthy School Cleaning Services in Las Vegas
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                  A clean school is fundamental to student health, attendance, and creating a positive learning environment for communities across Las Vegas. Our professional school cleaning services ensure your educational facility maintains the highest standards of cleanliness and safety.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="h-14 text-lg px-8" asChild>
                    <Link to="/book-now-las-vegas">
                      <Calendar className="w-5 h-5 mr-2" />
                      Schedule School Cleaning
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="h-14 text-lg px-8" asChild>
                    <Link to="/contact">
                      <Home className="w-5 h-5 mr-2" />
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
                        <Heart className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Health & Safety First</h3>
                      <p className="text-muted-foreground text-sm">
                        Using green, non-toxic products to reduce germs and desert allergens, ensuring your Las Vegas students and staff breathe clean, healthy air throughout the school day.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Safe & Healthy →
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
                        A clean, distraction-free space improves student focus and faculty morale, creating an optimal learning environment that supports academic success in your Las Vegas school.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Focused & Motivated →
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Shield className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Trained & Vetted Professionals</h3>
                      <p className="text-muted-foreground text-sm">
                        All staff are background-checked for the safety and peace of mind of your Las Vegas school community, ensuring only trusted professionals enter your educational facility.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Trusted & Secure →
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
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Monitor className="w-6 h-6" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Classrooms & Labs</h3>
                      <p className="text-muted-foreground text-sm">
                        Disinfecting desks, chairs, and high-touch surfaces to create a clean, safe learning environment for students and teachers.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Building className="w-6 h-6" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Hallways & Common Areas</h3>
                      <p className="text-muted-foreground text-sm">
                        High-traffic floor care and locker cleaning to maintain a welcoming and safe environment for students moving between classes.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Activity className="w-6 h-6" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Gymnasiums & Auditoriums</h3>
                      <p className="text-muted-foreground text-sm">
                        Cleaning large-scale spaces and equipment to ensure safe, hygienic environments for physical education and school events.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Apple className="w-6 h-6" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Restrooms & Cafeterias</h3>
                      <p className="text-muted-foreground text-sm">
                        Intensive sanitation protocols to prevent germ spread and maintain the highest hygiene standards in high-risk areas.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* The Impact of a Professionally Cleaned School */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-12">
                  The Impact of a Professionally Cleaned School
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <GraduationCap className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-4xl font-bold text-primary mb-2">{counters.studentsProtected.toLocaleString()}</div>
                    <h3 className="text-lg font-semibold mb-2">Students & Staff Protected</h3>
                    <p className="text-muted-foreground text-sm">
                      Las Vegas students and staff benefit from our comprehensive cleaning and safety protocols
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <School className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-4xl font-bold text-primary mb-2">{counters.facilitiesServed}</div>
                    <h3 className="text-lg font-semibold mb-2">Educational Facilities Served</h3>
                    <p className="text-muted-foreground text-sm">
                      Schools across Las Vegas trust us for consistent, professional cleaning services
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Calendar className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-4xl font-bold text-primary mb-2">{counters.attendanceDays}%</div>
                    <h3 className="text-lg font-semibold mb-2">Improved Attendance Days</h3>
                    <p className="text-muted-foreground text-sm">
                      Clean schools contribute to better student attendance and reduced illness-related absences
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
                
                {/* Neighborhood Selector */}
                <div className="max-w-md mx-auto mb-12">
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <select
                      value={openItem}
                      onChange={(e) => {
                        const value = e.target.value;
                        setOpenItem(value);
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
                            <Link to="/book-now-las-vegas">
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

          {/* Other Commercial Cleaning Services in Las Vegas */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  Other Commercial Cleaning Services in Las Vegas
                </h2>
                <p className="text-xl text-muted-foreground mb-12">
                  Beyond school cleaning, we offer specialized commercial cleaning services to meet all your Las Vegas facility needs.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <Link to="/las-vegas/government-facility-cleaning/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors mb-4">
                        <Building className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Government Facility Cleaning Services
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Specialized cleaning for government buildings, offices, and public facilities.
                      </p>
                    </div>
                  </Link>
                  <Link to="/las-vegas/medical-office-cleaning/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors mb-4">
                        <User className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Medical Office Cleaning Services
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Professional cleaning for healthcare facilities, medical offices, and clinical environments.
                      </p>
                    </div>
                  </Link>
                  <Link to="/las-vegas/gym-cleaning/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors mb-4">
                        <Shield className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Gym Cleaning Services
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Hygienic cleaning for fitness centers, health clubs, and athletic facilities.
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
                      <h3 className="text-lg font-semibold">What makes your school cleaning service different?</h3>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <p className="text-muted-foreground">
                        We specialize in school cleaning with training in educational facility protocols, student safety requirements, and learning environment maintenance. Our team uses specialized cleaning products and follows strict procedures to protect your students and staff while maintaining the highest cleanliness standards for educational success.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2" className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <h3 className="text-lg font-semibold">How do you handle scheduling around school operations?</h3>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <p className="text-muted-foreground">
                        We work closely with your school administration to schedule cleaning during off-hours, early morning, or late evening when students are not present. We can also provide emergency cleaning services for health incidents or post-event cleanup. Our flexible approach ensures minimal disruption to your educational programs.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3" className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <h3 className="text-lg font-semibold">What areas of the school do you clean?</h3>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <p className="text-muted-foreground">
                        We clean all areas including classrooms, labs, hallways, gymnasiums, auditoriums, restrooms, cafeterias, and common areas. We use appropriate cleaning products and methods for each area to ensure effectiveness while protecting your educational equipment and student health.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-4" className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <h3 className="text-lg font-semibold">Are your technicians trained for school environments?</h3>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <p className="text-muted-foreground">
                        Yes, all our technicians are background-checked, bonded, and insured. They receive specialized training in school cleaning protocols, student safety requirements, and educational facility cleanliness standards. We understand the unique challenges of school environments and maintain strict protocols to protect your students and staff.
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
                  Ready to Create a Safer Learning Environment?
                </h2>
                <p className="text-xl mb-8 opacity-90">
                  Join the Las Vegas schools that trust Red Rock Cleans for professional cleaning services that ensure optimal student safety and learning environments.
                </p>
                <Button size="lg" variant="secondary" className="h-14 text-lg px-8" asChild>
                  <Link to="/book-now-las-vegas">
                    <Calendar className="w-5 h-5 mr-2" />
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
                  src="/src/assets/service-products.jpg" 
                  alt="A bright and sanitized classroom in a Las Vegas school, cleaned by Red Rock Cleans"
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

export default SchoolCleaningLasVegasPage;

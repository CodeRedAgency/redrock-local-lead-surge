import { ColumbusNavigation } from "@/components/ColumbusNavigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HeartHandshake, BookOpen, BadgeCheck, School, Footprints, Medal, Droplets, User, Building, Calendar, Building2, Hospital, Dumbbell } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";

const cities = [
  {
    id: "dublin",
    name: "Dublin",
    description: "Dublin's schools and educational facilities trust Red Rock Cleans to maintain the healthy, safe learning environments that support student success. Our professional school cleaning services protect students, teachers, and staff while creating the positive atmosphere that makes Dublin schools excellent.",
    faq: [
      {
        question: "Can you clean Dublin schools after hours?",
        answer: "Yes, we provide flexible scheduling for Dublin schools including evening and weekend cleaning to ensure facilities are spotless before students arrive without disrupting the school day."
      },
      {
        question: "Do you use safe cleaning products in Dublin schools?",
        answer: "Absolutely. All cleaning products used in Dublin educational facilities are green, non-toxic, and safe for children while providing effective disinfection and cleaning."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans keeps our Dublin school spotless. Parents and teachers notice the difference in cleanliness and air quality.",
      author: "Principal, Dublin Elementary School"
    }
  },
  {
    id: "upper-arlington",
    name: "Upper Arlington",
    description: "Upper Arlington schools rely on our comprehensive cleaning services to maintain the high standards their community expects. We understand that a clean school supports learning, reduces sick days, and demonstrates the commitment to excellence that defines Upper Arlington education.",
    faq: [
      {
        question: "What makes your Upper Arlington school cleaning different?",
        answer: "We combine educational facility expertise with understanding of community standards, ensuring your Upper Arlington school maintains the pristine environment that parents, students, and staff deserve."
      },
      {
        question: "Do you clean Upper Arlington private schools?",
        answer: "Yes, we provide professional cleaning for public schools, private schools, preschools, and all educational facilities throughout Upper Arlington with customized service plans."
      }
    ],
    testimonial: {
      text: "Our Upper Arlington school maintains exceptional cleanliness thanks to Red Rock Cleans. They understand educational facilities.",
      author: "Facilities Manager, Upper Arlington Schools"
    }
  },
  {
    id: "powell",
    name: "Powell",
    description: "Powell educational facilities depend on our reliable school cleaning services that create healthy learning spaces for students and productive work environments for teachers. We protect the Powell school community through thorough disinfection and meticulous attention to detail.",
    faq: [
      {
        question: "How do you handle Powell classroom disinfection?",
        answer: "We thoroughly disinfect all high-touch surfaces in Powell classrooms including desks, chairs, door handles, light switches, and shared materials using EPA-approved products safe for educational environments."
      },
      {
        question: "Can you clean Powell school gymnasiums?",
        answer: "Yes, our Powell school cleaning includes comprehensive gymnasium cleaning with floor care, equipment sanitizing, and locker room maintenance to support physical education and athletic programs."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans delivers consistent, reliable school cleaning for our Powell facility. Our students learn in a healthy, clean environment.",
      author: "Administrator, Powell Learning Center"
    }
  },
  {
    id: "lewis-center",
    name: "Lewis Center",
    description: "Lewis Center schools trust our specialized cleaning services to maintain the safe, healthy environments essential for student learning and development. Our experienced team protects the Lewis Center educational community through comprehensive sanitization and careful facility care.",
    faq: [
      {
        question: "Are your Lewis Center school cleaners background-checked?",
        answer: "Yes, all team members assigned to Lewis Center schools undergo comprehensive background checks and screening for the safety and peace of mind of your school community."
      },
      {
        question: "What areas do you clean in Lewis Center schools?",
        answer: "We clean all areas including classrooms, hallways, restrooms, cafeterias, gymnasiums, libraries, administrative offices, and common areas in Lewis Center educational facilities."
      }
    ],
    testimonial: {
      text: "Our Lewis Center school stays impeccably clean thanks to Red Rock Cleans. They're professional, reliable, and safety-focused.",
      author: "Director, Lewis Center Academy"
    }
  },
  {
    id: "worthington",
    name: "Worthington",
    description: "Worthington's educational community benefits from our professional school cleaning that supports student health, reduces absenteeism, and creates the positive learning environments that help Worthington students thrive academically and socially.",
    faq: [
      {
        question: "How often should Worthington schools schedule cleaning?",
        answer: "Most Worthington schools benefit from daily cleaning with deep cleaning scheduled during breaks, ensuring consistent facility maintenance throughout the school year."
      },
      {
        question: "Do you clean Worthington school cafeterias?",
        answer: "Yes, we provide intensive cafeteria cleaning for Worthington schools including table sanitizing, floor care, and food service area maintenance to meet health standards."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Worthington school with professionalism and attention to student safety. Highly recommended!",
      author: "Facilities Coordinator, Worthington Schools"
    }
  },
  {
    id: "new-albany",
    name: "New Albany",
    description: "New Albany's exceptional schools demand the highest level of cleanliness and care. Our premium school cleaning services ensure New Albany educational facilities maintain the pristine conditions that match the community's commitment to educational excellence and student well-being.",
    faq: [
      {
        question: "Can you handle New Albany's advanced educational facilities?",
        answer: "Yes, we specialize in cleaning modern educational facilities in New Albany including advanced labs, technology centers, and specialized learning spaces with appropriate protocols."
      },
      {
        question: "Do you provide emergency cleaning for New Albany schools?",
        answer: "Yes, we offer emergency and on-call cleaning services for New Albany schools to handle unexpected situations, illness outbreaks, or urgent facility needs."
      }
    ],
    testimonial: {
      text: "Our New Albany school's pristine condition reflects Red Rock Cleans' commitment to excellence. They deliver the premium service we require.",
      author: "Principal, New Albany Preparatory"
    }
  },
  {
    id: "bexley",
    name: "Bexley",
    description: "Bexley schools trust our dependable cleaning services to maintain the healthy learning environments that support student achievement and teacher effectiveness. We treat every Bexley educational facility with the care it deserves, protecting the community's investment in education.",
    faq: [
      {
        question: "What cleaning standards do you follow for Bexley schools?",
        answer: "We follow comprehensive school cleaning protocols that meet or exceed CDC guidelines and Ohio Department of Health standards for educational facilities in Bexley."
      },
      {
        question: "How do you ensure quality in Bexley school cleaning?",
        answer: "We use detailed checklists, conduct regular quality inspections, and maintain open communication with Bexley school administrators to ensure consistent, high-quality results."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our Bexley school with reliability and professionalism. Our facility always looks excellent.",
      author: "Administrator, Bexley City Schools"
    }
  },
  {
    id: "german-village",
    name: "German Village",
    description: "German Village educational facilities benefit from our adaptable school cleaning services that maintain modern health standards while respecting the unique character of buildings in this historic neighborhood. We support learning in German Village's special educational spaces.",
    faq: [
      {
        question: "Can you clean German Village schools in historic buildings?",
        answer: "Yes, we adapt our cleaning methods for German Village's historic school buildings while maintaining the same rigorous health and safety standards required for educational facilities."
      },
      {
        question: "Do you clean German Village preschools and daycares?",
        answer: "Yes, we provide specialized cleaning for preschools, daycares, and early learning centers in German Village with extra attention to child safety and hygiene."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans successfully maintains our German Village school in this historic building. They understand both education and unique spaces.",
      author: "Director, German Village Montessori"
    }
  },
  {
    id: "short-north",
    name: "Short North",
    description: "Short North's diverse educational community trusts our professional cleaning services to maintain the safe, healthy learning environments essential for urban education. From traditional schools to innovative learning centers, we keep Short North educational spaces pristine.",
    faq: [
      {
        question: "Do you serve Short North learning centers and tutoring facilities?",
        answer: "Yes, we clean schools, learning centers, tutoring facilities, and all educational spaces throughout Short North with appropriate protocols for each type of facility."
      },
      {
        question: "Can you accommodate Short North's varied school schedules?",
        answer: "Absolutely. We offer flexible scheduling for Short North educational facilities including evening, overnight, and weekend cleaning to work around diverse program schedules."
      }
    ],
    testimonial: {
      text: "Our Short North learning center stays spotlessly clean thanks to Red Rock Cleans. They understand urban educational facility needs.",
      author: "Manager, Short North Education Center"
    }
  },
  {
    id: "victorian-village",
    name: "Victorian Village",
    description: "Victorian Village schools rely on our professional cleaning that maintains healthy learning environments while respecting the neighborhood's character. Whether serving traditional schools or alternative education programs, we deliver the cleanliness that supports student success.",
    faq: [
      {
        question: "What school areas do you prioritize in Victorian Village?",
        answer: "We prioritize high-touch surfaces, restrooms, cafeterias, and common areas while thoroughly cleaning all spaces in Victorian Village schools to maintain comprehensive facility hygiene."
      },
      {
        question: "Do you provide Victorian Village summer cleaning?",
        answer: "Yes, we provide deep cleaning services during summer breaks for Victorian Village schools including intensive floor care, window cleaning, and facility refreshing."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Victorian Village school with professionalism and attention to student health. Excellent service.",
      author: "Principal, Victorian Village Elementary"
    }
  },
  {
    id: "hillard",
    name: "Hilliard",
    description: "Hilliard's expanding educational community trusts our comprehensive school cleaning services to maintain the healthy facilities that support growing enrollment and academic excellence. We protect Hilliard students and staff through meticulous cleaning and disinfection.",
    faq: [
      {
        question: "Do you serve Hilliard's large school campuses?",
        answer: "Yes, we have the capacity and experience to serve schools of all sizes in Hilliard, from small learning centers to large multi-building educational campuses."
      },
      {
        question: "What training does your Hilliard school cleaning team receive?",
        answer: "Our Hilliard team receives training in educational facility cleaning, child safety protocols, green cleaning methods, and proper disinfection techniques for schools."
      }
    ],
    testimonial: {
      text: "Our Hilliard school has been excellently maintained by Red Rock Cleans. Their school cleaning expertise makes a visible difference.",
      author: "Facilities Director, Hilliard Schools"
    }
  },
  {
    id: "westerville",
    name: "Westerville",
    description: "Westerville schools trust our specialized cleaning services to maintain the safe, welcoming environments that support student learning and teacher effectiveness. Our experienced team understands the comprehensive cleaning needs of Westerville's diverse educational facilities.",
    faq: [
      {
        question: "Can you customize cleaning for Westerville school needs?",
        answer: "Yes, we create customized cleaning plans for Westerville schools based on facility size, student population, program type, and specific requirements."
      },
      {
        question: "How do you coordinate with Westerville school staff?",
        answer: "We maintain open communication with Westerville school administrators and custodial staff, adapting our services to support facility needs and school schedules."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provides the professional school cleaning our Westerville facility needs. Reliable, thorough, and education-focused service.",
      author: "Administrator, Westerville Schools"
    }
  }
];

const SchoolCleaningColumbusOhioPage = () => {
  const [openAccordion, setOpenAccordion] = useState<string>("");
  const [countersVisible, setCountersVisible] = useState(false);
  const [studentsProtected, setStudentsProtected] = useState(0);
  const [facilitiesServed, setFacilitiesServed] = useState(0);
  const [attendanceDays, setAttendanceDays] = useState(0);

  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash) {
      setOpenAccordion(hash);
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setCountersVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const counterSection = document.getElementById('counters-section');
    if (counterSection) {
      observer.observe(counterSection);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (countersVisible) {
      const duration = 2000;
      const steps = 60;
      const interval = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        
        setStudentsProtected(Math.floor(progress * 25000));
        setFacilitiesServed(Math.floor(progress * 85));
        setAttendanceDays(Math.floor(progress * 12000));

        if (step >= steps) {
          clearInterval(timer);
          setStudentsProtected(25000);
          setFacilitiesServed(85);
          setAttendanceDays(12000);
        }
      }, interval);

      return () => clearInterval(timer);
    }
  }, [countersVisible]);

  const handleAccordionChange = (value: string) => {
    setOpenAccordion(value);
    window.location.hash = value;
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>School Cleaning Services Columbus Ohio | Red Rock Cleans</title>
        <meta name="description" content="Professional school cleaning services in Columbus, OH. Red Rock Cleans provides a safe and healthy learning environment for students in Dublin, Upper Arlington, and beyond." />
        <meta name="keywords" content="school cleaning services Columbus Ohio, school cleaning near me, janitorial services for schools Columbus, daycare cleaning Dublin OH, preschool cleaning Upper Arlington, Columbus school cleaning services, best school cleaners Columbus, educational facility cleaning Columbus Ohio, classroom disinfection, private school cleaning Columbus, school cleaning cost Columbus Ohio, school janitorial service prices Columbus, school cleaning checklist Columbus, hire school cleaners in Columbus" />
        <link rel="canonical" href="https://redrockcleans.com/columbus-ohio/school-cleaning" />
      </Helmet>
      
      <ColumbusNavigation loginUrl="https://customer-portal.maidily.com/red-rock-cleans-columbus-ohio/sign-in" bookingUrl="/commercial-quote?location=columbus-ohio" />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/src/assets/hero-commercial.jpg" 
              alt="Professional school cleaning service in Columbus Ohio"
              className="w-full h-full object-cover scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                Safe & Healthy School Cleaning Services in Columbus, Ohio
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                A clean school is fundamental to student health, attendance, and a positive learning environment for communities across the Columbus area. Our specialized school cleaning services protect students and staff through thorough disinfection, reduce illness-related absences, and create the pristine educational spaces that support academic excellence. Trust Red Rock Cleans to maintain the healthy schools where Columbus students thrive.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="h-14 text-lg px-8" asChild>
                  <Link to="/commercial-quote?location=columbus-ohio">
                    <School className="w-5 h-5 mr-2" />
                    Schedule School Cleaning
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="h-14 text-lg px-8" asChild>
                  <Link to="/contact">
                    <HeartHandshake className="w-5 h-5 mr-2" />
                    Request School Assessment
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* A Higher Standard for Student & Staff Well-being Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                A Higher Standard for Student & Staff Well-being
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <HeartHandshake className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Health & Safety First</h3>
                      <p className="text-muted-foreground">
                        Using green, non-toxic products to reduce germs and allergens in your Columbus school. We prioritize child-safe cleaning solutions that effectively eliminate pathogens while protecting students with asthma, allergies, and sensitivities, creating the healthy indoor air quality essential for learning and development.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Creating a Positive Learning Environment</h3>
                      <p className="text-muted-foreground">
                        A clean, distraction-free space improves student focus and faculty morale in Columbus schools. Research shows that students learn better in organized, sanitary environments while teachers feel more valued and effective when their classrooms and common areas are professionally maintained every day.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <BadgeCheck className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Trained & Vetted Professionals</h3>
                      <p className="text-muted-foreground">
                        All staff are background-checked for the safety and peace of mind of your Columbus school community. Every team member undergoes comprehensive screening, receives specialized training in educational facility cleaning, and understands the unique responsibility of protecting the students and staff in your care.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Our Comprehensive School Cleaning Checklist Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Our Comprehensive School Cleaning Checklist
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <School className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">Classrooms & Labs</h3>
                      <p className="text-muted-foreground">
                        Disinfecting desks, chairs, and high-touch surfaces in your Columbus school classrooms. We thoroughly sanitize learning spaces including whiteboards, door handles, light switches, shared materials, and all student contact points to prevent germ transmission and create healthy spaces where students focus on learning, not illness.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Footprints className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">Hallways & Common Areas</h3>
                      <p className="text-muted-foreground">
                        High-traffic floor care and locker cleaning in your Columbus school's busiest areas. We maintain safe, slip-resistant floors through regular cleaning and maintenance while sanitizing lockers, water fountains, and common spaces that see constant student traffic throughout the day.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Medal className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">Gymnasiums & Auditoriums</h3>
                      <p className="text-muted-foreground">
                        Cleaning large-scale spaces and equipment in your Columbus school's athletic and performance areas. We maintain gymnasiums with specialized floor care, clean locker rooms thoroughly, sanitize athletic equipment, and ensure auditoriums stay pristine for assemblies and performances that showcase student achievement.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Droplets className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">Restrooms & Cafeterias</h3>
                      <p className="text-muted-foreground">
                        Intensive sanitation protocols to prevent germ spread in your Columbus school's most critical areas. We thoroughly disinfect restrooms multiple times daily and maintain cafeterias with food-safe cleaning methods, protecting student health during meals and throughout the day when hygiene matters most.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* The Impact of a Professionally Cleaned School Section */}
        <section id="counters-section" className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                The Impact of a Professionally Cleaned School
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <User className="h-16 w-16 mx-auto mb-4 opacity-90" />
                  <div className="text-5xl font-bold mb-2">{studentsProtected.toLocaleString()}+</div>
                  <h3 className="text-xl font-semibold opacity-90">Students & Staff Protected</h3>
                </div>
                
                <div className="text-center">
                  <Building className="h-16 w-16 mx-auto mb-4 opacity-90" />
                  <div className="text-5xl font-bold mb-2">{facilitiesServed}+</div>
                  <h3 className="text-xl font-semibold opacity-90">Educational Facilities Served</h3>
                </div>
                
                <div className="text-center">
                  <Calendar className="h-16 w-16 mx-auto mb-4 opacity-90" />
                  <div className="text-5xl font-bold mb-2">{attendanceDays.toLocaleString()}+</div>
                  <h3 className="text-xl font-semibold opacity-90">Improved Attendance Days</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Areas We Serve Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Areas We Serve in Columbus, Ohio
              </h2>
              
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
                          <h4 className="font-semibold mb-2">School Cleaning in {city.name}</h4>
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
                          <Link to="/commercial-quote?location=columbus-ohio">
                            Schedule {city.name} School Cleaning
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
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">
                Other Commercial Cleaning Services in Columbus
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <Building2 className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Government Facility Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Secure cleaning for government buildings and public facilities
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/columbus-ohio/government-facility-cleaning">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <Hospital className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Medical Office Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      HIPAA compliant cleaning for healthcare facilities
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/columbus-ohio/medical-office-cleaning">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <Dumbbell className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Gym Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Hygienic cleaning and disinfection for fitness centers
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/columbus-ohio/gym-cleaning">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Frequently Asked Questions
              </h2>
              <Accordion type="single" className="space-y-4">
                <AccordionItem value="what-included" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">What is included in school cleaning in Columbus Ohio?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Our comprehensive school cleaning in Columbus includes classroom disinfection, hallway and common area maintenance, restroom sanitization, cafeteria cleaning, gymnasium care, window washing, floor care, locker cleaning, high-touch surface disinfection, and trash removal. We create customized cleaning plans that address all areas of your educational facility to maintain the healthy environment students and staff deserve.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="cost" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">How much does school cleaning cost in Columbus Ohio?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      School cleaning costs in Columbus vary based on facility size, student population, service frequency, and scope of cleaning needed. Most schools invest between $2,000-$10,000 per month for professional janitorial services. Smaller preschools and learning centers typically have lower costs, while large K-12 schools require more comprehensive cleaning. We provide free consultations and customized quotes based on your Columbus school's specific needs.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="safe" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">Are your cleaning products safe for Columbus schools?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Yes, all cleaning products used in Columbus schools are green, non-toxic, and safe for children while providing effective disinfection. We prioritize EPA-approved, child-safe solutions that eliminate germs without harsh chemicals, protecting students with asthma, allergies, and sensitivities. Our products meet or exceed all safety standards for educational facilities and indoor air quality.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="background" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">Are your Columbus school cleaners background-checked?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Yes, all team members assigned to Columbus schools undergo comprehensive background checks, screening, and verification for the safety and peace of mind of your school community. We understand the sacred trust placed in us when working in educational facilities and maintain the highest standards for staff selection, training, and supervision to protect the students and staff in your care.
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
              Ready to Create a Healthier Learning Environment?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join Columbus schools that trust Red Rock Cleans for safe, healthy educational facilities
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
              <Link to="/commercial-quote?location=columbus-ohio">Schedule Your School Cleaning Today</Link>
            </Button>
          </div>
        </section>

        {/* Image Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <img 
                src="/src/assets/service-products.jpg" 
                alt="A bright and sanitized classroom in a Columbus, Ohio school, cleaned by Red Rock Cleans"
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

export default SchoolCleaningColumbusOhioPage;


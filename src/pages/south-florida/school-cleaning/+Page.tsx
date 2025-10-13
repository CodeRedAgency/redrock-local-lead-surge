import { SouthFloridaNavigation } from "@/components/SouthFloridaNavigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HeartHandshake, BookOpen, BadgeCheck, School, Footprints, Medal, Droplets, Users, Building, Calendar, MapPin, Building2, Stethoscope, Dumbbell } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import CountUp from "react-countup";

const cities = [
  {
    id: "aventura",
    name: "Aventura",
    description: "Aventura schools and educational facilities trust our professional cleaning services to maintain safe, healthy learning environments for students and staff.",
    faq: [
      {
        question: "Do you clean private schools in Aventura?",
        answer: "Yes, we provide comprehensive cleaning for private schools, public schools, daycares, preschools, and all educational facilities in Aventura."
      },
      {
        question: "Can you work around Aventura school schedules?",
        answer: "Absolutely. We schedule cleaning during after-school hours, evenings, and weekends to avoid disrupting classes and educational activities."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has transformed our Aventura school. Parents and teachers constantly comment on how clean and healthy our facility is.",
      author: "Principal, Aventura Academy"
    }
  },
  {
    id: "cooper-city",
    name: "Cooper City",
    description: "Cooper City educational institutions rely on our specialized school cleaning to protect student health and create optimal learning environments.",
    faq: [
      {
        question: "What's included in school cleaning for Cooper City?",
        answer: "Our service includes classroom disinfection, restroom sanitization, cafeteria deep cleaning, floor care, and comprehensive sanitization of all high-touch surfaces."
      },
      {
        question: "How often should Cooper City schools be cleaned?",
        answer: "We recommend daily cleaning during the school year with periodic deep cleaning during breaks for comprehensive facility maintenance."
      }
    ],
    testimonial: {
      text: "Our Cooper City school has never been healthier. Red Rock Cleans understands educational environments and delivers exceptional results.",
      author: "Facility Manager, Cooper City School District"
    }
  },
  {
    id: "dania-beach",
    name: "Dania Beach",
    description: "Dania Beach schools benefit from our thorough cleaning that combats coastal humidity while maintaining fresh, sanitized classrooms and common areas.",
    faq: [
      {
        question: "How do you prevent mold in Dania Beach schools?",
        answer: "We use specialized products and techniques to address moisture, ensure proper ventilation, and prevent mold growth common in coastal educational facilities."
      },
      {
        question: "Do you clean daycares in Dania Beach?",
        answer: "Yes, we provide specialized cleaning for daycares and preschools with extra attention to safety, using child-safe, non-toxic cleaning products."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans keeps our Dania Beach school spotless despite the coastal challenges. Student attendance has improved significantly.",
      author: "Director, Dania Beach Learning Center"
    }
  },
  {
    id: "davie",
    name: "Davie",
    description: "Davie schools depend on our professional cleaning services to maintain the healthy, distraction-free environments where students thrive.",
    faq: [
      {
        question: "What is the cost of school cleaning in Davie?",
        answer: "Costs vary by facility size and frequency. Most Davie schools invest $500-$2,000 per cleaning. We provide free customized quotes."
      },
      {
        question: "Do you clean athletic facilities in Davie schools?",
        answer: "Yes, we clean gymnasiums, locker rooms, weight rooms, and all athletic facilities with appropriate sanitization for sports equipment."
      }
    ],
    testimonial: {
      text: "Our Davie school's illness rates have decreased since partnering with Red Rock Cleans. Parents appreciate our commitment to student health.",
      author: "Health Coordinator, Davie Elementary"
    }
  },
  {
    id: "fort-lauderdale",
    name: "Fort Lauderdale",
    description: "Fort Lauderdale educational institutions trust our comprehensive cleaning to protect student wellbeing and maintain professional learning environments.",
    faq: [
      {
        question: "How do you protect students during cleaning in Fort Lauderdale?",
        answer: "We use green, non-toxic products, clean after school hours, and follow strict safety protocols to ensure student and staff safety."
      },
      {
        question: "Can you provide emergency cleaning in Fort Lauderdale schools?",
        answer: "Yes, we offer rapid response cleaning for illness outbreaks, accidents, or urgent situations requiring immediate sanitization."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Fort Lauderdale campus to perfection. Their professionalism and educational facility expertise are outstanding.",
      author: "Superintendent, Fort Lauderdale School District"
    }
  },
  {
    id: "hallandale-beach",
    name: "Hallandale Beach",
    description: "Hallandale Beach schools benefit from our systematic cleaning that ensures every classroom and common area promotes student health and learning.",
    faq: [
      {
        question: "Do you clean computer labs in Hallandale Beach schools?",
        answer: "Yes, we carefully clean technology areas using appropriate products that safely disinfect computers, tablets, and electronic equipment."
      },
      {
        question: "How do you sanitize cafeterias in Hallandale Beach?",
        answer: "We use food-safe sanitizers, deep clean all surfaces, properly maintain food service areas, and ensure compliance with health standards."
      }
    ],
    testimonial: {
      text: "Our Hallandale Beach school shines thanks to Red Rock Cleans. They understand the unique needs of educational environments.",
      author: "Administrator, Hallandale Beach Charter School"
    }
  },
  {
    id: "hollywood",
    name: "Hollywood",
    description: "Hollywood schools rely on our professional cleaning to create safe, healthy environments where students focus on learning, not illness concerns.",
    faq: [
      {
        question: "What makes school cleaning different in Hollywood?",
        answer: "We understand educational environments require child-safe products, after-hours scheduling, and comprehensive sanitization to protect vulnerable populations."
      },
      {
        question: "Do you clean art and science labs in Hollywood schools?",
        answer: "Yes, we clean specialty classrooms including art studios, science labs, and music rooms with appropriate care for equipment and materials."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has elevated our Hollywood school's health standards. Our community trusts our commitment to cleanliness.",
      author: "Board Member, Hollywood School Board"
    }
  },
  {
    id: "las-olas",
    name: "Las Olas",
    description: "Las Olas private schools and academies trust our detailed cleaning services to maintain the premium educational environments their families expect.",
    faq: [
      {
        question: "Can you clean private academies in Las Olas?",
        answer: "Yes, we specialize in private school cleaning with the meticulous care and attention to detail expected in Las Olas' premium educational institutions."
      },
      {
        question: "How do you clean library and media centers in Las Olas?",
        answer: "We carefully dust shelves and books, clean technology, sanitize reading areas, and maintain the quiet, scholarly atmosphere students need."
      }
    ],
    testimonial: {
      text: "Our Las Olas academy exemplifies excellence, and Red Rock Cleans maintains that standard perfectly in our facilities.",
      author: "Headmaster, Las Olas Preparatory Academy"
    }
  },
  {
    id: "lauderdale-lakes",
    name: "Lauderdale Lakes",
    description: "Lauderdale Lakes schools benefit from our systematic cleaning approach that ensures consistent quality and healthy learning spaces.",
    faq: [
      {
        question: "Do you provide janitorial services for Lauderdale Lakes schools?",
        answer: "Yes, we offer complete janitorial services including daily maintenance, periodic deep cleaning, and emergency response for all educational facilities."
      },
      {
        question: "How do you ensure quality in Lauderdale Lakes schools?",
        answer: "We use detailed checklists, conduct regular inspections, and maintain close communication with administrators to ensure consistent excellence."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans keeps our Lauderdale Lakes school consistently clean and healthy. Reliable service we can always depend on.",
      author: "Facilities Director, Lauderdale Lakes Schools"
    }
  },
  {
    id: "lauderhill",
    name: "Lauderhill",
    description: "Lauderhill educational facilities trust our professional cleaning to protect student health and create environments conducive to learning and growth.",
    faq: [
      {
        question: "What's on a school cleaning checklist for Lauderhill?",
        answer: "Our checklist includes classrooms, restrooms, cafeterias, gymnasiums, hallways, offices, and all high-touch surfaces throughout the facility."
      },
      {
        question: "Do you provide summer deep cleaning in Lauderhill?",
        answer: "Yes, we offer comprehensive deep cleaning during summer breaks including floor stripping and waxing, carpet cleaning, and facility-wide sanitization."
      }
    ],
    testimonial: {
      text: "Our Lauderhill school's appearance and health standards have improved dramatically with Red Rock Cleans. Professional service that delivers results.",
      author: "Principal, Lauderhill Middle School"
    }
  },
  {
    id: "margate",
    name: "Margate",
    description: "Margate schools depend on our comprehensive cleaning services that create safe, healthy environments where students and teachers thrive.",
    faq: [
      {
        question: "How long does school cleaning take in Margate?",
        answer: "Cleaning time varies by facility size. Small schools typically take 3-4 hours, while larger campuses may require 6-8 hours of thorough cleaning."
      },
      {
        question: "Can you handle large Margate school campuses?",
        answer: "Yes, we service schools of all sizes from small preschools to large K-12 campuses with complete facility coverage."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our Margate school for years. Consistent quality and exceptional understanding of educational needs.",
      author: "Custodial Supervisor, Margate Elementary"
    }
  },
  {
    id: "miramar",
    name: "Miramar",
    description: "Miramar schools rely on our specialized cleaning protocols that maintain pristine facilities and protect the health of students and staff.",
    faq: [
      {
        question: "What cleaning products do you use in Miramar schools?",
        answer: "We use green, EPA-approved, non-toxic cleaning products that are effective against germs yet safe for children and the environment."
      },
      {
        question: "Do you clean special education facilities in Miramar?",
        answer: "Yes, we clean all educational facilities with special attention to the unique needs of special education classrooms and therapy areas."
      }
    ],
    testimonial: {
      text: "Our Miramar school's cleanliness standards have soared since partnering with Red Rock Cleans. Parents notice and appreciate the difference!",
      author: "PTA President, Miramar Charter School"
    }
  },
  {
    id: "north-lauderdale",
    name: "North Lauderdale",
    description: "North Lauderdale schools trust our thorough cleaning to maintain healthy learning environments that support student success and wellbeing.",
    faq: [
      {
        question: "How do you prevent illness spread in North Lauderdale schools?",
        answer: "We use hospital-grade disinfectants, focus on high-touch surfaces, properly sanitize restrooms and cafeterias, and follow CDC guidelines."
      },
      {
        question: "What's your response time for North Lauderdale schools?",
        answer: "We can typically respond to urgent cleaning needs within 24 hours and offer emergency services for critical situations."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans understands school environments. Our North Lauderdale campus has never been healthier or more conducive to learning.",
      author: "Assistant Principal, North Lauderdale High School"
    }
  },
  {
    id: "pembroke-pines",
    name: "Pembroke Pines",
    description: "Pembroke Pines educational facilities benefit from our professional cleaning that creates the safe, healthy environments students deserve.",
    faq: [
      {
        question: "Do you clean preschools in Pembroke Pines?",
        answer: "Yes, we specialize in preschool and daycare cleaning with extra attention to safety, using child-safe products and age-appropriate cleaning protocols."
      },
      {
        question: "How do you sanitize playground equipment in Pembroke Pines?",
        answer: "We thoroughly disinfect all outdoor play equipment using weather-resistant sanitizers that are safe for children yet effective against germs."
      }
    ],
    testimonial: {
      text: "Our Pembroke Pines preschool has become known for cleanliness. Red Rock Cleans delivers peace of mind for parents and staff.",
      author: "Director, Pembroke Pines Early Learning Center"
    }
  },
  {
    id: "plantation",
    name: "Plantation",
    description: "Plantation schools depend on our comprehensive cleaning to ensure every student enjoys a clean, safe learning environment that promotes health and academic success.",
    faq: [
      {
        question: "What areas receive special attention in Plantation schools?",
        answer: "We focus on classrooms, restrooms, cafeterias, water fountains, door handles, and all high-touch surfaces where germs commonly spread."
      },
      {
        question: "Can you clean during Plantation school hours?",
        answer: "We prefer after-hours cleaning to avoid disruption, but can accommodate special scheduling needs with minimal impact on students."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans keeps our Plantation school immaculate. Teacher and student satisfaction has improved since we started their service.",
      author: "Facility Coordinator, Plantation Schools"
    }
  },
  {
    id: "southwest-ranches",
    name: "Southwest Ranches",
    description: "Southwest Ranches schools trust our detailed cleaning services to maintain the premium learning environments their communities expect and deserve.",
    faq: [
      {
        question: "How long have you been cleaning Southwest Ranches schools?",
        answer: "We've been serving Southwest Ranches educational facilities for years, building expertise in the unique needs of this community's schools."
      },
      {
        question: "Do you offer green cleaning in Southwest Ranches schools?",
        answer: "Yes, we exclusively use eco-friendly, non-toxic cleaning products that are effective yet safe for children and the environment."
      }
    ],
    testimonial: {
      text: "Our Southwest Ranches school stands out for cleanliness. Red Rock Cleans is professional, reliable, and understands educational facilities.",
      author: "School Board Member, Southwest Ranches"
    }
  },
  {
    id: "sunny-isles-beach",
    name: "Sunny Isles Beach",
    description: "Sunny Isles Beach schools rely on our specialized cleaning that maintains healthy learning environments despite coastal environmental challenges.",
    faq: [
      {
        question: "How do you handle coastal conditions in Sunny Isles Beach schools?",
        answer: "We use products designed for coastal environments, address humidity and moisture issues, and prevent mold growth common in beachfront facilities."
      },
      {
        question: "What's included in classroom cleaning in Sunny Isles Beach?",
        answer: "We disinfect desks, chairs, whiteboards, technology, shelves, and all surfaces, plus floor care and window cleaning for bright learning spaces."
      }
    ],
    testimonial: {
      text: "The coastal environment is challenging for schools. Red Rock Cleans keeps our Sunny Isles Beach campus healthy and pristine year-round.",
      author: "Maintenance Director, Sunny Isles Beach Academy"
    }
  },
  {
    id: "sunrise",
    name: "Sunrise",
    description: "Sunrise educational institutions benefit from our professional cleaning that creates healthy, welcoming learning environments that support student achievement.",
    faq: [
      {
        question: "How do you price school cleaning in Sunrise?",
        answer: "We provide transparent pricing based on facility size, cleaning frequency, and specific needs. Most Sunrise schools invest $500-$2,000 per service."
      },
      {
        question: "Do you clean vocational schools in Sunrise?",
        answer: "Yes, we clean all educational facilities including vocational schools, technical centers, and specialty training facilities with appropriate protocols."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Sunrise campus to perfection. Our community appreciates our commitment to providing a healthy learning environment.",
      author: "Superintendent, Sunrise School District"
    }
  },
  {
    id: "tamarac",
    name: "Tamarac",
    description: "Tamarac schools trust our systematic cleaning to ensure consistent quality and the healthy environments that support educational excellence.",
    faq: [
      {
        question: "What makes your Tamarac school cleaning effective?",
        answer: "We combine green cleaning products, proven protocols, trained staff, background checks, and quality control to ensure superior, safe results."
      },
      {
        question: "Can you provide references in Tamarac?",
        answer: "Yes, we can provide references from other schools we serve, demonstrating our track record of excellence in educational facility cleaning."
      }
    ],
    testimonial: {
      text: "Our Tamarac school has never been cleaner or healthier. Red Rock Cleans exceeds expectations with every service.",
      author: "Principal, Tamarac Learning Academy"
    }
  },
  {
    id: "weston",
    name: "Weston",
    description: "Weston's premier schools depend on our professional cleaning to maintain the exceptional standards their communities demand for student health and safety.",
    faq: [
      {
        question: "How do you keep Weston schools germ-free?",
        answer: "We use hospital-grade disinfectants, follow CDC guidelines, focus on high-touch surfaces, and maintain comprehensive sanitization protocols."
      },
      {
        question: "Do you provide ongoing support in Weston?",
        answer: "Yes, we offer dedicated account management, regular quality reviews, and responsive service for all our Weston educational clients."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been our Weston school's cleaning partner for years. Their expertise and service quality are consistently excellent.",
      author: "Facilities Manager, Weston Academy"
    }
  }
];

const SchoolCleaningSouthFloridaPage = () => {
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
        <title>School Cleaning Services South Florida | Red Rock Cleans</title>
        <meta name="description" content="Professional school cleaning services in South Florida. Red Rock Cleans provides a safe and healthy learning environment for students in Fort Lauderdale, Weston, and across Broward County." />
        <meta name="keywords" content="school cleaning services South Florida, school cleaning near me, janitorial services for schools South Florida, daycare cleaning Fort Lauderdale, preschool cleaning Weston FL, Broward County school cleaning, best school cleaners South Florida, educational facility cleaning Fort Lauderdale, classroom disinfection South Florida, private school cleaning South Florida, school cleaning cost South Florida, school janitorial service prices Fort Lauderdale, school cleaning checklist South Florida, hire school cleaners in South Florida" />
        <link rel="canonical" href="https://redrockcleans.com/south-florida/school-cleaning" />
      </Helmet>
      
      <SouthFloridaNavigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/src/assets/hero-commercial.jpg" 
              alt="Professional school cleaning service in a South Florida educational facility"
              className="w-full h-full object-cover scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                Safe & Healthy School Cleaning Services in South Florida
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                A clean school is fundamental to student health, consistent attendance, and creating a positive learning environment. Throughout South Florida communities, our specialized school cleaning services protect students and staff by maintaining the safe, sanitized spaces where young minds grow, learn, and thrive every day.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="h-14 text-lg px-8" asChild>
                  <Link to="/book-now-south-florida">
                    <Calendar className="w-5 h-5 mr-2" />
                    Get Your Free Quote
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="h-14 text-lg px-8" asChild>
                  <Link to="/contact">
                    <School className="w-5 h-5 mr-2" />
                    Contact Us
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* A Higher Standard Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                A Higher Standard for Student & Staff Well-being
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <HeartHandshake className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Health & Safety First</h3>
                      <p className="text-muted-foreground">
                        We exclusively use green, EPA-approved, non-toxic cleaning products that are tough on germs but gentle on children and the environment. Our comprehensive approach significantly reduces allergens, bacteria, and viruses throughout South Florida schools, protecting vulnerable students and creating healthier learning spaces that support regular attendance and academic success.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Creating a Positive Learning Environment</h3>
                      <p className="text-muted-foreground">
                        A clean, organized, distraction-free classroom improves student focus and enhances teacher morale. When students aren't worried about cleanliness and teachers can concentrate on instruction rather than maintenance, learning flourishes. Our professional cleaning creates the welcoming, healthy environments where South Florida educators inspire and students achieve their full potential.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <BadgeCheck className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Trained & Vetted Professionals</h3>
                      <p className="text-muted-foreground">
                        All our team members undergo comprehensive background checks and specialized training in educational facility cleaning. We understand the unique responsibility of working in schools and maintain the highest standards of professionalism and trustworthiness. Your South Florida school community can have complete peace of mind knowing qualified, vetted professionals are caring for your facility.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Comprehensive School Cleaning Checklist Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Our Comprehensive School Cleaning Checklist
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <School className="h-10 w-10 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-3">Classrooms & Labs</h3>
                      <p className="text-muted-foreground text-sm">
                        Thorough disinfection of desks, chairs, whiteboards, computers, and all high-touch surfaces. Special care for science labs, art rooms, and technology centers to protect equipment while ensuring student safety.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Footprints className="h-10 w-10 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-3">Hallways & Common Areas</h3>
                      <p className="text-muted-foreground text-sm">
                        High-traffic floor care including sweeping, mopping, and polishing. Locker cleaning and sanitization, water fountain disinfection, and maintaining the shared spaces where students gather between classes.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Medal className="h-10 w-10 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-3">Gymnasiums & Auditoriums</h3>
                      <p className="text-muted-foreground text-sm">
                        Specialized cleaning of large-scale spaces including floor care, bleacher sanitization, and equipment disinfection. Maintaining the venues where students learn teamwork, celebrate achievements, and build school spirit.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Droplets className="h-10 w-10 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-3">Restrooms & Cafeterias</h3>
                      <p className="text-muted-foreground text-sm">
                        Intensive sanitation protocols to prevent germ spread in these critical areas. Food-safe cleaning in cafeterias and comprehensive restroom sanitization following the highest health standards.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                The Impact of a Professionally Cleaned School
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    <CountUp end={25000} duration={2} />+
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Students & Staff Protected</h3>
                  <p className="text-muted-foreground text-sm">
                    Across South Florida schools trusting our specialized cleaning services
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    <CountUp end={150} duration={2} />+
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Educational Facilities Served</h3>
                  <p className="text-muted-foreground text-sm">
                    Schools, daycares, preschools, and educational centers across South Florida
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    <CountUp end={30} duration={2} />%
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Improved Attendance Days</h3>
                  <p className="text-muted-foreground text-sm">
                    Schools report fewer illness-related absences with professional cleaning
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
                          <h4 className="font-semibold mb-2">School Cleaning Services in {city.name}</h4>
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
                          <Link to="/book-now-south-florida">
                            Get School Cleaning Quote for {city.name}
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
                    <h3 className="text-lg font-semibold mb-2">Government Facility Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Compliant cleaning for government offices and public facilities
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/south-florida/government-facility-cleaning">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <Stethoscope className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Medical Office Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Healthcare-grade cleaning for medical facilities and clinics
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/south-florida/medical-office-cleaning">Learn More</Link>
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
                <AccordionItem value="school-cleaning-checklist" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">What's on a school cleaning checklist in South Florida?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Our comprehensive school cleaning checklist includes: classroom disinfection (desks, chairs, whiteboards, computers, shelves), hallway and locker cleaning, restroom deep sanitization, cafeteria food-safe cleaning, gymnasium floor care and equipment sanitization, library and media center dusting, administrative office cleaning, water fountain disinfection, door handle and high-touch surface sanitization, floor care (sweeping, mopping, polishing), window cleaning, and trash removal. We customize our checklist to your specific facility needs and schedule periodic deep cleaning during breaks.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="cost" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">What is the cost of school cleaning in South Florida?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      School cleaning costs in South Florida vary based on facility size, cleaning frequency, and specific requirements. Small preschools and daycares typically invest $300-$600 per cleaning, elementary schools $600-$1,200, middle schools $1,000-$1,800, and high schools or large campuses $1,500-$3,000+. Most schools benefit from daily cleaning during the school year with comprehensive deep cleaning during summer breaks. We provide free, detailed quotes customized to your facility's square footage, student population, and specific cleaning needs.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="hire-cleaners" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">How do I hire school cleaners in South Florida?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Hiring professional school cleaners in South Florida starts with finding a company experienced in educational facility cleaning. Look for providers with background-checked staff, green cleaning certifications, educational references, and proper insurance. Contact Red Rock Cleans for a free consultation where we'll visit your school, assess your specific needs, discuss your schedule and budget, review our comprehensive cleaning and safety protocols, provide transparent pricing, and demonstrate our commitment to student and staff safety. We understand the unique requirements of schools and work around your academic calendar.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="safety" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">How do you ensure safety when cleaning South Florida schools?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Safety is our top priority in educational environments. All our staff undergo comprehensive background checks and specialized training in school cleaning protocols. We exclusively use green, EPA-approved, non-toxic cleaning products that are effective against germs yet safe for children. We schedule cleaning during after-school hours to minimize disruption and avoid contact with students. Our team follows strict security protocols, maintains confidentiality, and works closely with school administration to ensure complete safety and peace of mind for your South Florida educational community.
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
              Join South Florida schools that trust Red Rock Cleans for safe, professional cleaning services
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
              <Link to="/book-now-south-florida">Get Your Free School Cleaning Quote</Link>
            </Button>
          </div>
        </section>

        {/* Image Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <img 
                src="/static/service-products.jpg" 
                alt="A bright and sanitized classroom in a South Florida school, cleaned by Red Rock Cleans"
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

export default SchoolCleaningSouthFloridaPage;


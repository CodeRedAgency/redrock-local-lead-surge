import { MauiNavigation } from "@/components/MauiNavigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HeartHandshake, BookOpen, BadgeCheck, School, Footprints, Medal, Droplets, User, Building, Calendar, MapPin, Home, Building2, Stethoscope, Dumbbell, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import CountUp from "react-countup";

const towns = [
  {
    id: "wailea",
    name: "Wailea",
    description: "Wailea schools and educational facilities trust our professional school cleaning services to maintain the safe, healthy learning environment that supports student well-being and academic excellence.",
    faq: [
      {
        question: "Can you clean our Wailea school during after-school hours?",
        answer: "Yes, we schedule school cleaning during non-instructional hours, typically after students leave or during weekends, to ensure zero disruption to classes and optimal cleanliness before the next school day."
      },
      {
        question: "What disinfectants do you use in Wailea schools?",
        answer: "We use EPA-approved, child-safe, non-toxic disinfectants that are effective against bacteria and viruses while being safe for student contact surfaces and the learning environment."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has transformed our Wailea school's cleanliness standards. Student attendance has improved and parents consistently compliment our facility's hygiene.",
      author: "Principal, Wailea Elementary School"
    }
  },
  {
    id: "makena",
    name: "Makena",
    description: "Makena educational facilities rely on our comprehensive cleaning services to eliminate germs, create safe classrooms, and maintain the pristine environment that fosters student learning and growth.",
    faq: [
      {
        question: "How do you handle classroom cleaning in Makena?",
        answer: "We meticulously disinfect all desks, chairs, learning materials, and high-touch surfaces using approved sanitizers that kill 99.9% of germs while being safe for children and educators."
      },
      {
        question: "Do you provide emergency cleaning in Makena schools?",
        answer: "Yes, we offer rapid response cleaning for urgent situations such as illness outbreaks, contamination events, or pre-inspection deep cleaning to ensure student safety."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans' attention to detail in our Makena school is outstanding. The classrooms and common areas have never looked better or felt safer.",
      author: "Facilities Director, Makena Academy"
    }
  },
  {
    id: "kihei",
    name: "Kihei",
    description: "Kihei schools benefit from our specialized school cleaning protocols that address high-traffic hallways, classrooms, and all facilities to ensure student health and create a positive learning environment.",
    faq: [
      {
        question: "What is included in Kihei school cleaning?",
        answer: "Our service includes classroom disinfection, hallway and common area cleaning, restroom sanitization, cafeteria deep cleaning, gymnasium maintenance, trash removal, and restocking of supplies."
      },
      {
        question: "How often should Kihei schools schedule cleaning?",
        answer: "We recommend daily cleaning for active schools, with weekly deep cleaning of specialized areas and monthly floor care for optimal hygiene and student safety."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans' systematic approach to our Kihei school has dramatically reduced sick days and improved our overall learning environment.",
      author: "Administrator, Kihei Educational Center"
    }
  },
  {
    id: "kapalua",
    name: "Kapalua",
    description: "Kapalua private schools trust our hygienic cleaning services to maintain the premium standards expected by families while ensuring thorough disinfection of all learning spaces.",
    faq: [
      {
        question: "Are your Kapalua school cleanings eco-friendly?",
        answer: "Yes, we offer green cleaning options using environmentally responsible, non-toxic products that are effective against pathogens while being safe for children and the environment."
      },
      {
        question: "What makes your Kapalua school service different?",
        answer: "We specialize in educational facilities with staff trained in child-safe cleaning protocols, background checks for security, and maintaining the premium standards private schools require."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provides the level of cleanliness our Kapalua families expect from a premier educational institution. Their professionalism and care are unmatched.",
      author: "Head of School, Kapalua Preparatory Academy"
    }
  },
  {
    id: "kaanapali",
    name: "Ka'anapali",
    description: "Ka'anapali schools rely on our specialized services to eliminate bacteria, reduce illness transmission, and create the clean, healthy environment that supports student success.",
    faq: [
      {
        question: "How do you prevent cross-contamination in Ka'anapali schools?",
        answer: "We use color-coded cleaning systems, separate equipment for different areas like restrooms and classrooms, and follow strict protocols to prevent the spread of germs throughout the school."
      },
      {
        question: "Can you handle large school facilities in Ka'anapali?",
        answer: "Yes, we have the vetted staff, equipment, and experience to efficiently clean schools of all sizes, from small preschools to large multi-building campuses."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has never missed a cleaning at our Ka'anapali school. Their reliability and thoroughness keep our students healthy and parents confident.",
      author: "Operations Manager, Ka'anapali Learning Center"
    }
  },
  {
    id: "lahaina",
    name: "Lahaina",
    description: "Lahaina educational facilities benefit from our comprehensive cleaning that addresses classrooms, labs, common areas, and all high-touch surfaces to protect student and staff health.",
    faq: [
      {
        question: "What cleaning methods do you use in Lahaina schools?",
        answer: "We use hospital-grade, child-safe disinfectants, HEPA-filtered vacuums, microfiber cleaning systems, and specialized floor care equipment designed for educational environments."
      },
      {
        question: "Can you clean specialized learning areas?",
        answer: "Yes, we clean all types of educational spaces including science labs, computer rooms, art studios, music rooms, libraries, and outdoor play areas with appropriate specialized protocols."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans' expertise in school cleaning is evident in our Lahaina facility. Teachers and parents constantly compliment us on how clean and safe everything is.",
      author: "Facility Director, Lahaina Elementary"
    }
  },
  {
    id: "spreckelsville",
    name: "Spreckelsville",
    description: "Spreckelsville schools trust our precision cleaning services to maintain the spotless, hygienic environment that supports student health and creates an optimal atmosphere for learning.",
    faq: [
      {
        question: "How do you ensure quality in Spreckelsville schools?",
        answer: "We use detailed checklists, conduct quality inspections, provide photographic documentation, and maintain regular communication with school administrators to ensure consistent, exceptional service."
      },
      {
        question: "What are your rates for Spreckelsville schools?",
        answer: "Pricing is based on school size, cleaning frequency, and specific services required. Contact us for a customized quote tailored to your educational facility's needs and budget."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been instrumental in maintaining our Spreckelsville school's high standards. Their systematic approach is exactly what we needed.",
      author: "Principal, Spreckelsville Community School"
    }
  },
  {
    id: "paia",
    name: "Pa'ia",
    description: "Pa'ia schools rely on our expert cleaning services to eliminate germs, reduce absenteeism, and create the welcoming atmosphere that keeps students engaged and parents satisfied.",
    faq: [
      {
        question: "Do you serve small schools in Pa'ia?",
        answer: "Yes, we service educational facilities of all sizes, from small daycares and preschools to large K-12 schools, with the same level of expertise and attention to detail."
      },
      {
        question: "What safety protocols do you follow in Pa'ia schools?",
        answer: "All technicians undergo background checks, follow strict hygiene protocols, wear appropriate PPE, use child-safe disinfectants, and are trained in proper school cleaning procedures."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans transformed our Pa'ia school from a cleaning concern to a competitive advantage. Parent satisfaction has improved significantly.",
      author: "Director, Pa'ia Montessori School"
    }
  },
  {
    id: "kuau",
    name: "Kuau",
    description: "Kuau educational facilities benefit from our specialized cleaning protocols designed to eliminate pathogens while creating the fresh, safe environment students and educators deserve.",
    faq: [
      {
        question: "How quickly can you respond in Kuau?",
        answer: "We offer same-day emergency cleaning for urgent situations and can schedule routine school maintenance within 24-48 hours of initial contact."
      },
      {
        question: "Do you provide cleaning verification in Kuau schools?",
        answer: "Yes, we provide service reports, before/after photos, and documentation to confirm thorough disinfection, cleanliness, and compliance with safety standards."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans' proactive approach to our Kuau school has reduced sick student complaints to nearly zero. They're true school cleaning professionals.",
      author: "Administrator, Kuau Elementary"
    }
  },
  {
    id: "haiku",
    name: "Ha'iku",
    description: "Ha'iku schools trust our comprehensive cleaning services to maintain the hygienic, odor-free environment that enhances the learning experience and supports student and staff well-being.",
    faq: [
      {
        question: "What makes Ha'iku school cleaning unique?",
        answer: "Ha'iku's unique educational facilities require specialized cleaning for both indoor classrooms and outdoor learning areas. We customize our protocols to address these specific needs."
      },
      {
        question: "Can you train our staff in Ha'iku?",
        answer: "Yes, we offer training sessions on basic school hygiene, spot cleaning between professional services, and proper facility maintenance to support ongoing cleanliness and safety."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been essential to our Ha'iku school's success. Their understanding of educational facility cleaning is exceptional.",
      author: "Principal, Ha'iku Public School"
    }
  }
];

const SchoolCleaningMauiPage = () => {
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
        <title>School Cleaning Services Maui | Red Rock Cleans</title>
        <meta name="description" content="Professional school cleaning services on Maui. Red Rock Cleans provides a safe and healthy learning environment for students in Kihei, Lahaina, and across the island." />
        <meta name="keywords" content="school cleaning near me, janitorial services for schools Maui, daycare cleaning Kihei, preschool cleaning Lahaina, Maui school cleaning services, best school cleaners Maui, educational facility cleaning Maui, classroom disinfection Maui, private school cleaning Wailea, school cleaning cost Maui, school janitorial service prices Maui, school cleaning checklist Maui, hire school cleaners in Maui" />
        <link rel="canonical" href="https://redrockcleans.com/maui/school-cleaning" />
      </Helmet>
      
      <MauiNavigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/src/assets/hero-commercial.jpg" 
              alt="Professional school cleaning service in a Maui educational facility"
              className="w-full h-full object-cover scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                Safe & Healthy School Cleaning Services on Maui
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                A clean school is fundamental to student health, attendance, and creating a positive learning environment for communities across Maui. Our specialized school cleaning services ensure that classrooms, hallways, and common areas are thoroughly disinfected and maintained, providing students, teachers, and families with the safe, hygienic spaces they deserve.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="h-14 text-lg px-8" asChild>
                  <a href="tel:+18089093038">
                    <Phone className="w-5 h-5 mr-2" />
                    Call (808) 909-3038
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="h-14 text-lg px-8" asChild>
                  <Link to="/commercial-quote?location=maui">
                    <Home className="w-5 h-5 mr-2" />
                    Get Free Quote
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
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <HeartHandshake className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Health & Safety First</h3>
                      <p className="text-muted-foreground">
                        We prioritize using green, non-toxic cleaning products that effectively reduce germs and allergens while being safe for children and staff. Our child-safe disinfectants eliminate 99.9% of bacteria and viruses, protecting the health of your entire school community without exposing them to harsh chemicals.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Creating a Positive Learning Environment</h3>
                      <p className="text-muted-foreground">
                        A clean, distraction-free space significantly improves student focus, engagement, and academic performance while boosting faculty morale. Our thorough cleaning creates the fresh, organized atmosphere that helps students concentrate on learning and teachers focus on instruction rather than cleanliness concerns.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <BadgeCheck className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Trained & Vetted Professionals</h3>
                      <p className="text-muted-foreground">
                        Every member of our team undergoes comprehensive background checks and specialized training in school cleaning protocols. We understand the sacred trust schools place in us, and we ensure complete safety and peace of mind for your Maui school community.
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
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <School className="h-10 w-10 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-3">Classrooms & Labs</h3>
                      <p className="text-muted-foreground text-sm">
                        Thorough disinfection of desks, chairs, learning materials, whiteboards, and all high-touch surfaces. We sanitize science lab equipment, computer keyboards, and shared educational tools to prevent the spread of illness while maintaining a conducive learning environment.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Footprints className="h-10 w-10 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-3">Hallways & Common Areas</h3>
                      <p className="text-muted-foreground text-sm">
                        High-traffic floor care including sweeping, mopping, and periodic deep cleaning. We clean and disinfect lockers, drinking fountains, door handles, handrails, and all common surfaces to maintain hygiene in the areas students pass through daily.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Medal className="h-10 w-10 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-3">Gymnasiums & Auditoriums</h3>
                      <p className="text-muted-foreground text-sm">
                        Specialized cleaning of large-scale spaces including floor maintenance, bleacher cleaning, and equipment sanitization. We ensure these multi-purpose facilities are ready for physical education, assemblies, performances, and community events with proper care for specialized flooring and equipment.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Droplets className="h-10 w-10 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-3">Restrooms & Cafeterias</h3>
                      <p className="text-muted-foreground text-sm">
                        Intensive sanitation protocols to prevent germ spread in the most critical hygiene areas. We deep clean toilets, sinks, cafeteria tables, food prep areas, and ensure all surfaces are thoroughly disinfected and restocked to maintain student health and meet food safety standards.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* The Impact of a Professionally Cleaned School Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                The Impact of a Professionally Cleaned School
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <User className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    <CountUp end={5000} duration={2} />+
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Students & Staff Protected</h3>
                  <p className="text-muted-foreground text-sm">
                    Through our comprehensive school cleaning services across Maui
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    <CountUp end={50} duration={2} />+
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Educational Facilities Served</h3>
                  <p className="text-muted-foreground text-sm">
                    Maui schools and daycares trust our specialized cleaning services
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    <CountUp end={2500} duration={2} />+
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Improved Attendance Days</h3>
                  <p className="text-muted-foreground text-sm">
                    Fewer sick days through our thorough disinfection and cleaning protocols
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
                Areas We Serve on Maui
              </h2>
              
              {/* Town Selector */}
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
                    <option value="">Select a Maui Town</option>
                    {towns.map((town) => (
                      <option key={town.id} value={town.id}>
                        {town.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              
              <Accordion type="single" value={openAccordion} onValueChange={handleAccordionChange} className="space-y-4">
                {towns.map((town) => (
                  <AccordionItem key={town.id} value={town.id} id={town.id} className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <div>
                        <h3 className="text-lg font-semibold">{town.name}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{town.description}</p>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold mb-2">Local School Cleaning Services</h4>
                          <p className="text-muted-foreground">
                            {town.description}
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-2">Frequently Asked Questions</h4>
                          <div className="space-y-2">
                            {town.faq.map((faq, index) => (
                              <div key={index}>
                                <p className="font-medium text-sm">{faq.question}</p>
                                <p className="text-muted-foreground text-sm">{faq.answer}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="bg-primary/5 p-4 rounded-lg">
                          <p className="italic text-sm mb-2">"{town.testimonial.text}"</p>
                          <p className="text-sm font-medium">- {town.testimonial.author}</p>
                        </div>
                        
                        <Button asChild className="w-full">
                          <Link to="/commercial-quote?location=maui">
                            Get School Cleaning Quote for {town.name}
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
                Other Commercial Cleaning Services on Maui
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <Building2 className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Government Facility Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Professional cleaning services for government buildings and public facilities
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/maui/government-facility-cleaning">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <Stethoscope className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Medical Office Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Hygienic cleaning services for medical offices and healthcare facilities
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/maui/medical-office-cleaning">Learn More</Link>
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
                      <Link to="/maui/gym-cleaning">Learn More</Link>
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
                <AccordionItem value="child-safe" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">Are your cleaning products safe for children?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Yes, we use EPA-approved, non-toxic, child-safe disinfectants that effectively kill 99.9% of bacteria and viruses while being completely safe for student contact surfaces. Our green cleaning products are free from harsh chemicals, reducing allergens and protecting the health of children with sensitivities or respiratory conditions.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="schedule" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">Can you clean around our school schedule?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Absolutely. We schedule school cleaning during non-instructional hours, typically after students leave, in the early morning before arrival, or during weekends. This ensures zero disruption to classes and learning activities while providing the thorough, deep cleaning your school needs. We work with your administration to create a cleaning schedule that fits your school's unique calendar and needs.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="background-checks" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">Are your staff background-checked?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Yes, every member of our cleaning team undergoes comprehensive background checks before being assigned to any educational facility. We understand that schools require the highest level of security and trust, and we take this responsibility seriously. All staff are trained, vetted, insured, and supervised to ensure the complete safety and peace of mind of your school community.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="cost" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">What is the cost of school cleaning on Maui?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      School cleaning costs vary based on facility size, number of classrooms, cleaning frequency, specific services required, and specialized areas like labs or gymnasiums. We provide transparent, competitive pricing with customized quotes for your school. Many schools find our services to be a valuable investment that reduces absenteeism, improves student performance, and enhances parent satisfaction. Contact us for a free assessment and detailed proposal.
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
              Join Maui schools that trust Red Rock Cleans for professional, child-safe cleaning services
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
              <Link to="/commercial-quote?location=maui">Get Your Free School Cleaning Assessment</Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default SchoolCleaningMauiPage;


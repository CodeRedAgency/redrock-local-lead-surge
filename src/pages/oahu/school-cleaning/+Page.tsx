import { OahuNavigation } from "@/components/OahuNavigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  HeartHandshake, 
  BookOpen, 
  BadgeCheck, 
  School, 
  Footprints, 
  Medal, 
  Droplets, 
  User, 
  Building, 
  Calendar, 
  MapPin, 
  Phone,
  CheckCircle,
  ShoppingBag,
  GraduationCap,
  Stethoscope,
  Home
} from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import CountUp from "react-countup";

const neighborhoods = [
  {
    id: "aiea",
    name: "Aiea",
    description: "Aiea schools and educational institutions trust our professional school cleaning services for comprehensive facility sanitation that ensures student health, safety, and optimal learning environments in the competitive educational market.",
    faq: [
      {
        question: "Do you use eco-friendly cleaning products in Aiea schools?",
        answer: "Yes, we use environmentally safe, non-toxic cleaning products that are effective against germs while being safe for students and staff. Our products are approved for use in educational facilities."
      },
      {
        question: "What if we're not satisfied with school cleaning in Aiea?",
        answer: "We guarantee satisfaction and will return to address any concerns at no additional charge, understanding the critical nature of student health and educational facility operations."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Aiea school spotless and germ-free for over two years. Our students and staff consistently praise the cleanliness!",
      author: "Principal, Aiea Elementary School"
    }
  },
  {
    id: "ewa-beach",
    name: "Ewa Beach",
    description: "Ewa Beach educational facilities rely on our professional school cleaning services for consistent, hygienic facility maintenance that keeps their schools operating safely and attracting families to the community.",
    faq: [
      {
        question: "How often do Ewa Beach schools schedule cleaning?",
        answer: "Most Ewa Beach schools prefer daily or multiple-times-per-week cleaning schedules, though we offer flexible scheduling based on your student population and operational requirements."
      },
      {
        question: "Do you provide emergency cleaning services in Ewa Beach?",
        answer: "Yes, we offer emergency cleaning services for unexpected situations, health inspections, and urgent facility maintenance needs with rapid response times."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Ewa Beach school to perfection. Their attention to detail and student safety is outstanding.",
      author: "Facilities Director, Ewa Beach High School"
    }
  },
  {
    id: "hawaii-kai",
    name: "Hawaii Kai",
    description: "Hawaii Kai schools trust our professional school cleaning services for comprehensive, hygienic facility maintenance that ensures optimal student health and competitive advantage in the educational market.",
    faq: [
      {
        question: "Do you service private schools in Hawaii Kai?",
        answer: "Yes, we have extensive experience cleaning various school types, including private schools, public schools, charter schools, and specialized educational facilities with unique cleaning requirements and high standards."
      },
      {
        question: "How do you ensure equipment safety in Hawaii Kai schools?",
        answer: "We use only school-safe cleaning products and follow manufacturer guidelines to ensure equipment longevity while maintaining the highest standards of hygiene and student safety."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Hawaii Kai school spotless and student-ready for over two years. Highly recommend their professional service!",
      author: "School Administrator, Hawaii Kai Academy"
    }
  },
  {
    id: "honolulu",
    name: "Honolulu",
    description: "Honolulu schools and educational institutions enjoy consistent, professional school cleaning services that maintain their facilities clean and operating at optimal student satisfaction standards year-round.",
    faq: [
      {
        question: "Do you work around Honolulu school schedules?",
        answer: "Yes, we can schedule cleanings around your school hours, events, and operational requirements to minimize disruption to educational activities and student learning."
      },
      {
        question: "What if we're not satisfied with school cleaning in Honolulu?",
        answer: "We guarantee satisfaction and will return to address any concerns at no additional charge, understanding the critical nature of student health and educational facility operations."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Honolulu school to perfection. Their professionalism and understanding of educational facility needs are outstanding.",
      author: "Operations Director, Honolulu School District"
    }
  },
  {
    id: "kailua",
    name: "Kailua",
    description: "Kailua schools trust our professional school cleaning services for comprehensive, hygienic facility maintenance that ensures optimal student health and competitive advantage in the educational market.",
    faq: [
      {
        question: "How often do Kailua schools schedule cleaning?",
        answer: "Most Kailua schools prefer daily or multiple-times-per-week cleaning schedules, though we offer flexible scheduling based on your student population and operational requirements."
      },
      {
        question: "Do you provide emergency cleaning services in Kailua?",
        answer: "Yes, we offer emergency cleaning services for unexpected situations, health inspections, and urgent facility maintenance needs with rapid response times."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Kailua school spotless and student-ready for over two years. Their attention to detail is outstanding!",
      author: "School Principal, Kailua Elementary"
    }
  },
  {
    id: "kapolei",
    name: "Kapolei",
    description: "Kapolei schools and educational centers rely on our professional school cleaning services for consistent facility maintenance that keeps their schools operating at optimal student satisfaction and health standards.",
    faq: [
      {
        question: "Do you provide specialized cleaning for Kapolei schools?",
        answer: "Yes, we offer specialized school cleaning services including classroom disinfection, cafeteria sanitation, gymnasium cleaning, and restroom maintenance tailored to your specific educational environment."
      },
      {
        question: "What if we're not satisfied with school cleaning in Kapolei?",
        answer: "We guarantee satisfaction and will return to address any concerns at no additional charge, understanding the critical nature of student health and educational facility operations."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Kapolei school to perfection. Their professionalism and understanding of school cleaning requirements are outstanding.",
      author: "Facilities Manager, Kapolei High School"
    }
  },
  {
    id: "makakilo",
    name: "Makakilo",
    description: "Makakilo educational institutions trust our professional school cleaning services for comprehensive facility maintenance that ensures optimal student health, safety, and learning environment excellence.",
    faq: [
      {
        question: "How often do Makakilo schools schedule cleaning?",
        answer: "Most Makakilo schools prefer daily or multiple-times-per-week cleaning schedules, though we offer flexible scheduling based on your student population and operational requirements."
      },
      {
        question: "Do you provide emergency cleaning services in Makakilo?",
        answer: "Yes, we offer emergency cleaning services for unexpected situations, health inspections, and urgent facility maintenance needs with rapid response times."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Makakilo school spotless and student-ready for over two years. Highly recommend their professional service!",
      author: "School Administrator, Makakilo Elementary"
    }
  },
  {
    id: "mililani",
    name: "Mililani",
    description: "Mililani schools and educational centers enjoy consistent, professional school cleaning services that maintain their facilities clean and operating at optimal student satisfaction and health standards year-round.",
    faq: [
      {
        question: "Do you work around Mililani school schedules?",
        answer: "Yes, we can schedule cleanings around your school hours, events, and operational requirements to minimize disruption to educational activities and student learning."
      },
      {
        question: "What if we're not satisfied with school cleaning in Mililani?",
        answer: "We guarantee satisfaction and will return to address any concerns at no additional charge, understanding the critical nature of student health and educational facility operations."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Mililani school to perfection. Their professionalism and understanding of educational facility needs are outstanding.",
      author: "Principal, Mililani High School"
    }
  },
  {
    id: "pearl-city",
    name: "Pearl City",
    description: "Pearl City schools trust our professional school cleaning services for comprehensive, hygienic facility maintenance that ensures optimal student health and competitive advantage in the educational market.",
    faq: [
      {
        question: "Do you provide specialized cleaning for Pearl City schools?",
        answer: "Yes, we offer specialized school cleaning services including classroom disinfection, cafeteria sanitation, gymnasium cleaning, and restroom maintenance tailored to your specific educational environment."
      },
      {
        question: "How do you ensure equipment safety in Pearl City schools?",
        answer: "We use only school-safe cleaning products and follow manufacturer guidelines to ensure equipment longevity while maintaining the highest standards of hygiene and student safety."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Pearl City school spotless and student-ready for over two years. Their attention to detail is outstanding!",
      author: "School Administrator, Pearl City Elementary"
    }
  },
  {
    id: "waialae",
    name: "Waialae",
    description: "Waialae schools rely on our professional school cleaning services for consistent facility maintenance that keeps their educational institutions operating at optimal student satisfaction and health standards.",
    faq: [
      {
        question: "How often do Waialae schools schedule cleaning?",
        answer: "Most Waialae schools prefer daily or multiple-times-per-week cleaning schedules, though we offer flexible scheduling based on your student population and operational requirements."
      },
      {
        question: "Do you provide emergency cleaning services in Waialae?",
        answer: "Yes, we offer emergency cleaning services for unexpected situations, health inspections, and urgent facility maintenance needs with rapid response times."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Waialae school to perfection. Their professionalism and understanding of school cleaning requirements are outstanding.",
      author: "Principal, Waialae Elementary School"
    }
  },
  {
    id: "waikiki",
    name: "Waikiki",
    description: "Waikiki schools and educational institutions trust our professional school cleaning services for comprehensive facility maintenance that ensures optimal student health, safety, and learning environment excellence in the competitive educational market.",
    faq: [
      {
        question: "Do you service international schools in Waikiki?",
        answer: "Yes, we have extensive experience cleaning various school types, including international schools, private academies, public schools, and specialized educational facilities with unique cleaning requirements and high standards."
      },
      {
        question: "How do you handle high tourist area cleaning in Waikiki?",
        answer: "We understand the unique challenges of schools in tourist-heavy areas and provide flexible scheduling, rapid response times, and specialized cleaning protocols to maintain pristine conditions during peak tourist seasons."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Waikiki school spotless and student-ready for over two years. Highly recommend their professional school cleaning service!",
      author: "School Director, Waikiki International School"
    }
  },
  {
    id: "waimanalo",
    name: "Waimanalo",
    description: "Waimanalo schools and educational centers enjoy consistent, professional school cleaning services that maintain their facilities clean and operating at optimal student satisfaction and health standards year-round.",
    faq: [
      {
        question: "Do you work around Waimanalo school schedules?",
        answer: "Yes, we can schedule cleanings around your school hours, events, and operational requirements to minimize disruption to educational activities and student learning."
      },
      {
        question: "What if we're not satisfied with school cleaning in Waimanalo?",
        answer: "We guarantee satisfaction and will return to address any concerns at no additional charge, understanding the critical nature of student health and educational facility operations."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Waimanalo school to perfection. Their professionalism and understanding of educational facility needs are outstanding.",
      author: "School Administrator, Waimanalo Elementary"
    }
  },
  {
    id: "waipahu",
    name: "Waipahu",
    description: "Waipahu schools trust our professional school cleaning services for comprehensive facility maintenance that ensures optimal student health, safety, and learning environment excellence.",
    faq: [
      {
        question: "Do you provide specialized cleaning for Waipahu schools?",
        answer: "Yes, we offer specialized school cleaning services including classroom disinfection, cafeteria sanitation, gymnasium cleaning, and restroom maintenance tailored to your specific educational environment and student population."
      },
      {
        question: "How do you ensure equipment safety in Waipahu schools?",
        answer: "We use only school-safe cleaning products and follow careful protocols to ensure equipment safety while maintaining the highest standards of hygiene and student health."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Waipahu school spotless and student-ready for over two years. Their attention to detail and classroom disinfection is outstanding!",
      author: "Principal, Waipahu High School"
    }
  }
];

export default function SchoolCleaningOahuPage() {
  const [activeAccordion, setActiveAccordion] = useState<string>("");

  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash && neighborhoods.some(n => n.id === hash)) {
      setActiveAccordion(hash);
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>School Cleaning Services Oahu | Red Rock Cleans</title>
        <meta name="description" content="School cleaning in Oahu. Safe, healthy learning environments for students in Honolulu schools. Professional Hawaiian service!" />
        <meta name="keywords" content="school cleaning services Oahu, school cleaning near me, janitorial services for schools Oahu, daycare cleaning Honolulu, preschool cleaning Kailua, Oahu school cleaning services, best school cleaners Oahu, educational facility cleaning Honolulu, classroom disinfection Oahu, private school cleaning Oahu, school cleaning cost Oahu, school janitorial service prices Honolulu, school cleaning checklist Oahu, hire school cleaners in Oahu" />
        <link rel="canonical" href="https://redrockcleans.com/oahu/school-cleaning/" />
      </Helmet>

      <OahuNavigation bookingUrl="/commercial-quote?location=oahu" />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/src/assets/hero-commercial.jpg" 
              alt="Professional school cleaning service in Honolulu, Oahu"
              className="w-full h-full object-cover scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                Safe & Healthy School Cleaning Services on Oahu
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                A clean school is fundamental to student health, attendance, and a positive learning environment for communities across Oahu. 
                Our professional school cleaning services ensure every educational facility provides a safe, healthy space where students can thrive and learn.
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

        {/* A Higher Standard for Student & Staff Well-being */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                A Higher Standard for Student & Staff Well-being
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <HeartHandshake className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-4">Health & Safety First</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        We use green, non-toxic products to reduce germs and allergens, creating a healthier environment 
                        for students and staff while maintaining the highest standards of cleanliness and safety.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-4">Creating a Positive Learning Environment</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        A clean, distraction-free space improves student focus and faculty morale. 
                        Our meticulous attention to detail ensures classrooms remain conducive to learning and academic success.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <BadgeCheck className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-4">Trained & Vetted Professionals</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        All staff are background-checked for the safety and peace of mind of your Oahu school community. 
                        Our team understands the unique needs of educational facilities and student safety requirements.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Our Comprehensive School Cleaning Checklist */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Our Comprehensive School Cleaning Checklist
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <Card className="hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <School className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-3">Classrooms & Labs</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Disinfecting desks, chairs, and high-touch surfaces to maintain a healthy learning environment.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Footprints className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-3">Hallways & Common Areas</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        High-traffic floor care and locker cleaning to keep busy areas spotless and safe.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Medal className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-3">Gymnasiums & Auditoriums</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Cleaning large-scale spaces and equipment to ensure safe physical activities and events.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Droplets className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-3">Restrooms & Cafeterias</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Intensive sanitation protocols to prevent germ spread and maintain hygiene standards.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* The Impact of a Professionally Cleaned School */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                The Impact of a Professionally Cleaned School
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <User className="w-10 h-10 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Students & Staff Protected</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    <CountUp end={98} duration={2} suffix="%" />
                  </div>
                  <p className="text-muted-foreground">reduction in illness-related absences with professional cleaning</p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Building className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Educational Facilities Served</h3>
                  <div className="text-4xl font-bold text-green-600 mb-2">
                    <CountUp end={150} duration={2} suffix="+" />
                  </div>
                  <p className="text-muted-foreground">schools across Oahu trust our professional cleaning services</p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Calendar className="w-10 h-10 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Improved Attendance Days</h3>
                  <div className="text-4xl font-bold text-purple-600 mb-2">
                    <CountUp end={25} duration={2} suffix="+" />
                  </div>
                  <p className="text-muted-foreground">additional learning days per year with cleaner facilities</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Areas We Serve on Oahu */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Areas We Serve on Oahu
              </h2>
              <Accordion type="single" collapsible value={activeAccordion} onValueChange={setActiveAccordion} className="w-full">
                {neighborhoods.map((neighborhood) => (
                  <AccordionItem key={neighborhood.id} value={neighborhood.id} className="border border-gray-200 rounded-lg mb-4 bg-white">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <MapPin className="w-5 h-5 text-blue-600 mr-3" />
                        <span className="text-lg font-semibold">{neighborhood.name}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <div className="space-y-6">
                        <p className="text-muted-foreground leading-relaxed">{neighborhood.description}</p>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold mb-3">Frequently Asked Questions</h4>
                            <div className="space-y-3">
                              {neighborhood.faq.map((faq, index) => (
                                <div key={index} className="border-l-4 border-blue-200 pl-4">
                                  <p className="font-medium text-sm">{faq.question}</p>
                                  <p className="text-muted-foreground text-sm mt-1">{faq.answer}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold mb-3">Customer Testimonial</h4>
                            <div className="bg-blue-50 p-4 rounded-lg">
                              <p className="text-muted-foreground italic mb-3">"{neighborhood.testimonial.text}"</p>
                              <p className="text-muted-foreground text-sm font-medium">- {neighborhood.testimonial.author}</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="pt-4">
                          <Button className="w-full sm:w-auto" asChild>
                            <Link to="/commercial-quote?location=oahu">
                              <Phone className="w-4 h-4 mr-2" />
                              Book School Cleaning in {neighborhood.name}
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Other Commercial Cleaning Services on Oahu */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Other Commercial Cleaning Services on Oahu
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <Building className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Government Facility Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">Professional cleaning services for government buildings and facilities</p>
                    <Button variant="outline" size="sm" asChild>
                      <Link to="/oahu/government-facility-cleaning/">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <Stethoscope className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Medical Office Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">Health code compliant cleaning for medical facilities and clinics</p>
                    <Button variant="outline" size="sm" asChild>
                      <Link to="/oahu/medical-office-cleaning/">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <GraduationCap className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Gym Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">Specialized fitness facility cleaning for health and wellness centers</p>
                    <Button variant="outline" size="sm" asChild>
                      <Link to="/oahu/gym-cleaning/">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Frequently Asked Questions */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Frequently Asked Questions
              </h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border border-gray-200 rounded-lg mb-4 bg-white">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 rounded-lg">
                    <span className="text-lg font-semibold">What cleaning services do you provide for schools?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <p className="text-muted-foreground leading-relaxed">
                      We provide comprehensive school cleaning services including classroom disinfection, cafeteria sanitation, 
                      gymnasium cleaning, restroom maintenance, hallway cleaning, and specialized cleaning for labs and auditoriums. 
                      All services use school-safe, eco-friendly products.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border border-gray-200 rounded-lg mb-4 bg-white">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 rounded-lg">
                    <span className="text-lg font-semibold">How often should schools be professionally cleaned?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <p className="text-muted-foreground leading-relaxed">
                      Most schools benefit from daily cleaning, especially high-traffic areas like cafeterias, restrooms, and common areas. 
                      Classrooms typically require daily or multiple-times-per-week cleaning depending on student population and usage patterns.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border border-gray-200 rounded-lg mb-4 bg-white">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 rounded-lg">
                    <span className="text-lg font-semibold">Do you work around school schedules?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <p className="text-muted-foreground leading-relaxed">
                      Yes, we offer flexible scheduling to work around your school hours, events, and operational requirements. 
                      We can provide cleaning services before school starts, after dismissal, or during low-activity periods to minimize disruption.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border border-gray-200 rounded-lg mb-4 bg-white">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 rounded-lg">
                    <span className="text-lg font-semibold">What if we're not satisfied with the school cleaning service?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <p className="text-muted-foreground leading-relaxed">
                      We guarantee satisfaction and will return to address any concerns at no additional charge. 
                      We understand the critical nature of student health and educational facility operations and are committed to maintaining the highest standards.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}


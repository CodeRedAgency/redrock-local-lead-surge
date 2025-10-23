import { OahuNavigation } from "@/components/OahuNavigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Shield, Lock, FileText, Building, Gavel, Users, CheckCircle, MapPin, Calendar, Phone, Clock, Award, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import CountUp from "react-countup";

const neighborhoods = [
  {
    id: "aiea",
    name: "Aiea",
    description: "Aiea government facilities and municipal buildings trust our professional government facility cleaning service for secure, compliant facility maintenance that ensures public safety and operational efficiency.",
    faq: [
      {
        question: "Do you provide security-cleared staff for Aiea government facilities?",
        answer: "Yes, all our staff assigned to government contracts undergo rigorous background checks and security clearance procedures to meet the highest standards of trust and reliability."
      },
      {
        question: "What if we're not satisfied with government cleaning in Aiea?",
        answer: "We guarantee satisfaction and will return to address any concerns at no additional charge, understanding the critical nature of public facility operations and citizen service."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Aiea municipal building spotless and secure for over two years. Their discretion and professionalism are outstanding!",
      author: "Facility Manager, Aiea Municipal Building"
    }
  },
  {
    id: "ewa-beach",
    name: "Ewa Beach",
    description: "Ewa Beach government facilities rely on our professional government facility cleaning service for consistent, secure facility maintenance that keeps their public buildings operating safely and efficiently.",
    faq: [
      {
        question: "How often do Ewa Beach government facilities schedule cleaning?",
        answer: "Most Ewa Beach government facilities prefer daily or weekly cleaning schedules, though we offer flexible scheduling based on your operational requirements and public access needs."
      },
      {
        question: "Do you provide emergency cleaning services in Ewa Beach?",
        answer: "Yes, we offer emergency cleaning services for unexpected situations, public health requirements, and urgent facility maintenance needs with security-cleared personnel."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Ewa Beach government facility to perfection. Their professionalism and understanding of public sector requirements are outstanding.",
      author: "Operations Director, Ewa Beach Government Center"
    }
  },
  {
    id: "hawaii-kai",
    name: "Hawaii Kai",
    description: "Hawaii Kai government facilities trust our professional government facility cleaning service for comprehensive, secure facility maintenance that ensures optimal public service and citizen safety.",
    faq: [
      {
        question: "Do you service high-security government facilities in Hawaii Kai?",
        answer: "Yes, we have extensive experience cleaning secure government facilities, including those with restricted access areas, confidential spaces, and high-security requirements."
      },
      {
        question: "How do you ensure confidentiality in Hawaii Kai government buildings?",
        answer: "All our team members are trained in confidentiality protocols, use secure cleaning procedures, and follow strict privacy standards to protect sensitive information and operations."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Hawaii Kai government building spotless and secure for over two years. Highly recommend their professional service!",
      author: "Security Manager, Hawaii Kai Government Facility"
    }
  },
  {
    id: "honolulu",
    name: "Honolulu",
    description: "Honolulu government facilities and municipal buildings enjoy consistent, professional government facility cleaning services that maintain their facilities clean and operating at optimal public service standards year-round.",
    faq: [
      {
        question: "Do you work around Honolulu government facility schedules?",
        answer: "Yes, we can schedule cleanings around your public hours, special events, and operational requirements to minimize disruption to citizen services and government operations."
      },
      {
        question: "What if we're not satisfied with government cleaning in Honolulu?",
        answer: "We guarantee satisfaction and will return to address any concerns at no additional charge, understanding the critical nature of public facility operations and citizen trust."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Honolulu government facility to perfection. Their professionalism and understanding of public sector requirements are outstanding.",
      author: "Operations Director, Honolulu Government Center"
    }
  },
  {
    id: "kailua",
    name: "Kailua",
    description: "Kailua government facilities trust our professional government facility cleaning service for comprehensive, secure facility maintenance that ensures optimal public service and citizen safety.",
    faq: [
      {
        question: "How often do Kailua government facilities schedule cleaning?",
        answer: "Most Kailua government facilities prefer daily or weekly cleaning schedules, though we offer flexible scheduling based on your operational requirements and public access needs."
      },
      {
        question: "Do you provide emergency cleaning services in Kailua?",
        answer: "Yes, we offer emergency cleaning services for unexpected situations, public health requirements, and urgent facility maintenance needs with security-cleared personnel."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Kailua municipal building spotless and secure for over two years. Highly recommend their professional government cleaning service!",
      author: "Facility Manager, Kailua Municipal Building"
    }
  },
  {
    id: "kapolei",
    name: "Kapolei",
    description: "Kapolei government facilities rely on our professional government facility cleaning service for consistent, secure facility maintenance that keeps their public buildings operating safely and efficiently.",
    faq: [
      {
        question: "Do you service high-security government facilities in Kapolei?",
        answer: "Yes, we have extensive experience cleaning secure government facilities, including those with restricted access areas, confidential spaces, and high-security requirements."
      },
      {
        question: "How do you ensure confidentiality in Kapolei government buildings?",
        answer: "All our team members are trained in confidentiality protocols, use secure cleaning procedures, and follow strict privacy standards to protect sensitive information and operations."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Kapolei government facility to perfection. Their professionalism and understanding of public sector requirements are outstanding.",
      author: "Security Manager, Kapolei Government Center"
    }
  },
  {
    id: "makakilo",
    name: "Makakilo",
    description: "Makakilo government facilities trust our professional government facility cleaning service for comprehensive, secure facility maintenance that ensures optimal public service and citizen safety.",
    faq: [
      {
        question: "Do you provide security-cleared staff for Makakilo government facilities?",
        answer: "Yes, all our staff assigned to government contracts undergo rigorous background checks and security clearance procedures to meet the highest standards of trust and reliability."
      },
      {
        question: "What if we're not satisfied with government cleaning in Makakilo?",
        answer: "We guarantee satisfaction and will return to address any concerns at no additional charge, understanding the critical nature of public facility operations and citizen service."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Makakilo municipal building spotless and secure for over two years. Their discretion and professionalism are outstanding!",
      author: "Facility Manager, Makakilo Municipal Building"
    }
  },
  {
    id: "mililani",
    name: "Mililani",
    description: "Mililani government facilities rely on our professional government facility cleaning service for consistent, secure facility maintenance that keeps their public buildings operating safely and efficiently.",
    faq: [
      {
        question: "How often do Mililani government facilities schedule cleaning?",
        answer: "Most Mililani government facilities prefer daily or weekly cleaning schedules, though we offer flexible scheduling based on your operational requirements and public access needs."
      },
      {
        question: "Do you provide emergency cleaning services in Mililani?",
        answer: "Yes, we offer emergency cleaning services for unexpected situations, public health requirements, and urgent facility maintenance needs with security-cleared personnel."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Mililani government facility to perfection. Their professionalism and understanding of public sector requirements are outstanding.",
      author: "Operations Director, Mililani Government Center"
    }
  },
  {
    id: "pearl-city",
    name: "Pearl City",
    description: "Pearl City government facilities trust our professional government facility cleaning service for comprehensive, secure facility maintenance that ensures optimal public service and citizen safety.",
    faq: [
      {
        question: "Do you service high-security government facilities in Pearl City?",
        answer: "Yes, we have extensive experience cleaning secure government facilities, including those with restricted access areas, confidential spaces, and high-security requirements."
      },
      {
        question: "How do you ensure confidentiality in Pearl City government buildings?",
        answer: "All our team members are trained in confidentiality protocols, use secure cleaning procedures, and follow strict privacy standards to protect sensitive information and operations."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Pearl City government building spotless and secure for over two years. Highly recommend their professional government cleaning service!",
      author: "Security Manager, Pearl City Government Facility"
    }
  },
  {
    id: "waialae",
    name: "Waialae",
    description: "Waialae government facilities and municipal buildings enjoy consistent, professional government facility cleaning services that maintain their facilities clean and operating at optimal public service standards year-round.",
    faq: [
      {
        question: "Do you work around Waialae government facility schedules?",
        answer: "Yes, we can schedule cleanings around your public hours, special events, and operational requirements to minimize disruption to citizen services and government operations."
      },
      {
        question: "What if we're not satisfied with government cleaning in Waialae?",
        answer: "We guarantee satisfaction and will return to address any concerns at no additional charge, understanding the critical nature of public facility operations and citizen trust."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Waialae government facility to perfection. Their professionalism and understanding of public sector requirements are outstanding.",
      author: "Operations Director, Waialae Government Center"
    }
  },
  {
    id: "waikiki",
    name: "Waikiki",
    description: "Waikiki government facilities trust our professional government facility cleaning service for comprehensive, secure facility maintenance that ensures optimal public service and citizen safety.",
    faq: [
      {
        question: "How often do Waikiki government facilities schedule cleaning?",
        answer: "Most Waikiki government facilities prefer daily or weekly cleaning schedules, though we offer flexible scheduling based on your operational requirements and public access needs."
      },
      {
        question: "Do you provide emergency cleaning services in Waikiki?",
        answer: "Yes, we offer emergency cleaning services for unexpected situations, public health requirements, and urgent facility maintenance needs with security-cleared personnel."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Waikiki municipal building spotless and secure for over two years. Highly recommend their professional service!",
      author: "Facility Manager, Waikiki Municipal Building"
    }
  },
  {
    id: "waimanalo",
    name: "Waimanalo",
    description: "Waimanalo government facilities rely on our professional government facility cleaning service for consistent, secure facility maintenance that keeps their public buildings operating safely and efficiently.",
    faq: [
      {
        question: "Do you service high-security government facilities in Waimanalo?",
        answer: "Yes, we have extensive experience cleaning secure government facilities, including those with restricted access areas, confidential spaces, and high-security requirements."
      },
      {
        question: "How do you ensure confidentiality in Waimanalo government buildings?",
        answer: "All our team members are trained in confidentiality protocols, use secure cleaning procedures, and follow strict privacy standards to protect sensitive information and operations."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Waimanalo government facility to perfection. Their professionalism and understanding of public sector requirements are outstanding.",
      author: "Security Manager, Waimanalo Government Center"
    }
  },
  {
    id: "waipahu",
    name: "Waipahu",
    description: "Waipahu government facilities trust our professional government facility cleaning service for comprehensive, secure facility maintenance that ensures optimal public service and citizen safety.",
    faq: [
      {
        question: "Do you provide security-cleared staff for Waipahu government facilities?",
        answer: "Yes, all our staff assigned to government contracts undergo rigorous background checks and security clearance procedures to meet the highest standards of trust and reliability."
      },
      {
        question: "What if we're not satisfied with government cleaning in Waipahu?",
        answer: "We guarantee satisfaction and will return to address any concerns at no additional charge, understanding the critical nature of public facility operations and citizen service."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Waipahu municipal building spotless and secure for over two years. Their discretion and professionalism are outstanding!",
      author: "Facility Manager, Waipahu Municipal Building"
    }
  }
];

const GovernmentFacilityCleaningOahuPage = () => {
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
        <title>Government Facility Cleaning Oahu | Red Rock Cleans</title>
        <meta name="description" content="Government facility cleaning in Oahu. Secure, compliant cleaning for municipal buildings in Honolulu. Professional service!" />
        <meta name="keywords" content="government cleaning near me Oahu, municipal building cleaning Honolulu, federal office cleaning Oahu, courthouse cleaning Honolulu, secure facility cleaning Oahu, GSA schedule cleaning Oahu, confidential cleaning services Honolulu, discreet government cleaners Oahu, government cleaning contracts Oahu, cost of municipal cleaning Honolulu, what is government facility cleaning Oahu, hire secure cleaners in Oahu" />
        <link rel="canonical" href="https://redrockcleans.com/oahu/government-facility-cleaning" />
      </Helmet>
      
      <OahuNavigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/src/assets/hero-commercial.jpg" 
              alt="Professional government facility cleaning service in a municipal building on Oahu"
              className="w-full h-full object-cover scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                Secure & Compliant Government Facility Cleaning on Oahu
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Security, discretion, and reliability are paramount when cleaning sensitive government and municipal buildings in Honolulu and across Oahu. Our specialized government facility cleaning services help public institutions maintain the highest standards of cleanliness, security, and citizen trust that government operations require.
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

        {/* A Higher Standard of Trust for Public Facilities Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                A Higher Standard of Trust for Public Facilities
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Security-Cleared Personnel</h3>
                      <p className="text-muted-foreground">
                        All staff assigned to government contracts on Oahu undergo rigorous background checks and security clearance procedures. We ensure only the most trustworthy professionals enter your sensitive facilities.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Lock className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Strict Confidentiality Protocols</h3>
                      <p className="text-muted-foreground">
                        Our commitment to discretion and the privacy of sensitive areas ensures that confidential information and operations remain protected. We follow strict protocols for handling sensitive materials and restricted areas.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Compliance & Detailed Reporting</h3>
                      <p className="text-muted-foreground">
                        Adherence to all local, state, and federal standards ensures your facility meets every requirement. We provide detailed reporting and documentation for all cleaning activities and compliance verification.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Our Government Facility Cleaning Checklist Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Our Government Facility Cleaning Checklist
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Building className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Public Lobbies & Offices</h3>
                      <p className="text-muted-foreground">
                        Maintaining a professional public image with thorough cleaning of reception areas, waiting rooms, and administrative offices. We ensure all public-facing areas reflect the dignity and professionalism of government service.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Gavel className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Secure Areas & Courtrooms</h3>
                      <p className="text-muted-foreground">
                        Our protocols for cleaning sensitive or restricted areas ensure security and confidentiality. We follow strict procedures for courtrooms, secure offices, and other restricted access areas with appropriate oversight.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Common Areas & Restrooms</h3>
                      <p className="text-muted-foreground">
                        High-traffic sanitation for break rooms, conference areas, and public restrooms. We maintain the highest standards of hygiene and cleanliness in all common areas to protect both staff and citizens.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Our Commitment to Serving the Oahu Community Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Our Commitment to Serving the Oahu Community
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    <CountUp end={150} duration={2} />+
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Security Cleared Staff</h3>
                  <p className="text-muted-foreground text-sm">
                    Oahu government facilities trust our specialized cleaning services
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    <CountUp end={75} duration={2} />+
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Public Facilities Maintained</h3>
                  <p className="text-muted-foreground text-sm">
                    Municipal and federal buildings across Oahu
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">5+</div>
                  <h3 className="text-lg font-semibold mb-2">Years of Compliant Service</h3>
                  <p className="text-muted-foreground text-sm">
                    Serving Oahu's government facilities with excellence
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
                          <h4 className="font-semibold mb-2">Local Government Facility Cleaning Services</h4>
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
                            Get Government Cleaning Quote for {neighborhood.name}
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

        {/* Other Specialized Commercial Cleaning Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">
                Other Specialized Commercial Cleaning on Oahu
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
                    <h3 className="text-lg font-semibold mb-2">Data Center Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Specialized cleaning services for data centers and IT facilities
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/oahu/data-center-cleaning">Learn More</Link>
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
                <AccordionItem value="security-clearance" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">Do your staff have security clearances for government facilities?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Yes, all our staff assigned to government contracts undergo rigorous background checks and security clearance procedures. We ensure only the most trustworthy professionals enter your sensitive facilities, and we maintain detailed records of all clearances and certifications.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="confidentiality" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">How do you ensure confidentiality in government buildings?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      We follow strict confidentiality protocols and have all staff sign non-disclosure agreements. Our team is trained to never discuss or record any information they may encounter, and we use secure procedures for handling sensitive materials and restricted areas.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="compliance" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">What compliance standards do you follow for government facilities?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      We adhere to all local, state, and federal standards including OSHA, EPA, and specific government facility requirements. We provide detailed reporting and documentation for all cleaning activities, maintain comprehensive compliance records, and stay current with all regulatory updates.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="scheduling" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">Can you work around government facility schedules?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Yes, we can schedule cleanings around your public hours, special events, and operational requirements. We offer flexible scheduling including early morning, late night, and weekend cleaning to minimize disruption to citizen services and government operations.
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
              Ready to Secure Your Government Facility's Cleanliness Standards?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join dozens of Oahu government facilities that trust Red Rock Cleans for their secure cleaning needs
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
              <Link to="/commercial-quote?location=oahu">Get Your Free Government Cleaning Quote</Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default GovernmentFacilityCleaningOahuPage;

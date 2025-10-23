import { OahuNavigation } from "@/components/OahuNavigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Shield, Microscope, Award, Sofa, Stethoscope, Hand, Building, CheckCircle, ShieldX, MapPin, Calendar, Phone, Users, Clock, CheckCircle2, Sparkles, FileText, GraduationCap, ShoppingBag, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import CountUp from "react-countup";

const neighborhoods = [
  {
    id: "aiea",
    name: "Aiea",
    description: "Aiea medical facilities and healthcare clinics trust our professional medical office cleaning services for comprehensive, HIPAA-compliant facility maintenance that ensures patient safety, regulatory compliance, and optimal healthcare environment standards.",
    faq: [
      {
        question: "Do you provide HIPAA compliant cleaning for Aiea medical facilities?",
        answer: "Yes, all our medical office cleaning services strictly adhere to HIPAA privacy regulations and OSHA safety standards. Our team is trained in healthcare cleaning protocols and uses specialized equipment to ensure complete compliance and patient privacy protection."
      },
      {
        question: "What if we're not satisfied with medical office cleaning in Aiea?",
        answer: "We guarantee satisfaction and will return to address any concerns at no additional charge, understanding the critical nature of healthcare environments and the importance of maintaining clean, safe medical facilities."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Aiea medical clinic spotless and HIPAA compliant for over two years. Their attention to infection control and detail is outstanding!",
      author: "Clinic Manager, Aiea Medical Center"
    }
  },
  {
    id: "ewa-beach",
    name: "Ewa Beach",
    description: "Ewa Beach medical facilities rely on our professional medical office cleaning services for consistent, healthcare-grade facility maintenance that keeps their clinics and medical offices operating safely and efficiently with the highest standards of cleanliness.",
    faq: [
      {
        question: "How often do Ewa Beach medical facilities schedule cleaning?",
        answer: "Most Ewa Beach medical facilities prefer daily or multiple times per week cleaning schedules, though we offer flexible scheduling based on your patient volume and healthcare operational needs."
      },
      {
        question: "Do you provide emergency cleaning services in Ewa Beach?",
        answer: "Yes, we offer emergency medical office cleaning services for unexpected situations, infection control incidents, and urgent healthcare facility maintenance needs with rapid response times."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Ewa Beach medical office to perfection. Their professionalism and understanding of healthcare safety requirements are outstanding.",
      author: "Office Manager, Ewa Beach Healthcare"
    }
  },
  {
    id: "hawaii-kai",
    name: "Hawaii Kai",
    description: "Hawaii Kai medical facilities trust our professional medical office cleaning services for comprehensive, healthcare-grade facility maintenance that ensures optimal patient safety, regulatory compliance, and infection control in the competitive healthcare market.",
    faq: [
      {
        question: "Do you service specialty medical practices in Hawaii Kai?",
        answer: "Yes, we have extensive experience cleaning various medical specialties, including dental offices, veterinary clinics, physical therapy centers, and other healthcare facilities with specialized cleaning requirements."
      },
      {
        question: "How do you ensure equipment safety in Hawaii Kai medical facilities?",
        answer: "We use only medical-grade cleaning products and follow manufacturer guidelines to ensure medical equipment safety while maintaining the highest standards of cleanliness and infection control."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Hawaii Kai medical practice spotless and OSHA compliant for over two years. Highly recommend their professional medical cleaning service!",
      author: "Practice Manager, Hawaii Kai Medical Group"
    }
  },
  {
    id: "honolulu",
    name: "Honolulu",
    description: "Honolulu medical facilities and healthcare clinics enjoy consistent, professional medical office cleaning services that maintain their facilities clean and operating at optimal patient safety and regulatory compliance standards year-round.",
    faq: [
      {
        question: "Do you work around Honolulu medical facility schedules?",
        answer: "Yes, we can schedule cleanings around your patient hours, medical procedures, and operational requirements to minimize disruption to your healthcare operations and patient care."
      },
      {
        question: "What if we're not satisfied with medical office cleaning in Honolulu?",
        answer: "We guarantee satisfaction and will return to address any concerns at no additional charge, understanding the critical nature of healthcare environments and patient safety requirements."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Honolulu medical clinic to perfection. Their professionalism and understanding of healthcare safety requirements are outstanding.",
      author: "Clinic Director, Honolulu Medical Center"
    }
  },
  {
    id: "kailua",
    name: "Kailua",
    description: "Kailua medical facilities trust our professional medical office cleaning services for comprehensive, healthcare-grade facility maintenance that ensures optimal patient safety, regulatory compliance, and infection control in the competitive healthcare market.",
    faq: [
      {
        question: "How often do Kailua medical facilities schedule cleaning?",
        answer: "Most Kailua medical facilities prefer daily or multiple times per week cleaning schedules, though we offer flexible scheduling based on your patient volume and healthcare operational needs."
      },
      {
        question: "Do you provide emergency cleaning services in Kailua?",
        answer: "Yes, we offer emergency medical office cleaning services for unexpected situations, infection control incidents, and urgent healthcare facility maintenance needs with rapid response times."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Kailua medical office spotless and HIPAA compliant for over two years. Their attention to infection control and detail is outstanding!",
      author: "Office Manager, Kailua Family Medicine"
    }
  },
  {
    id: "kapolei",
    name: "Kapolei",
    description: "Kapolei medical facilities rely on our professional medical office cleaning services for consistent, healthcare-grade facility maintenance that keeps their clinics and medical offices operating safely and efficiently with the highest standards of cleanliness.",
    faq: [
      {
        question: "Do you service specialty medical practices in Kapolei?",
        answer: "Yes, we have extensive experience cleaning various medical specialties, including dental offices, veterinary clinics, physical therapy centers, and other healthcare facilities with specialized cleaning requirements."
      },
      {
        question: "How do you ensure equipment safety in Kapolei medical facilities?",
        answer: "We use only medical-grade cleaning products and follow manufacturer guidelines to ensure medical equipment safety while maintaining the highest standards of cleanliness and infection control."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Kapolei medical practice to perfection. Their professionalism and understanding of healthcare safety requirements are outstanding.",
      author: "Practice Administrator, Kapolei Healthcare"
    }
  },
  {
    id: "makakilo",
    name: "Makakilo",
    description: "Makakilo medical facilities trust our professional medical office cleaning services for comprehensive, healthcare-grade facility maintenance that ensures optimal patient safety, regulatory compliance, and infection control in the competitive healthcare market.",
    faq: [
      {
        question: "Do you provide HIPAA compliant cleaning for Makakilo medical facilities?",
        answer: "Yes, all our medical office cleaning services strictly adhere to HIPAA privacy regulations and OSHA safety standards. Our team is trained in healthcare cleaning protocols and uses specialized equipment to ensure complete compliance and patient privacy protection."
      },
      {
        question: "What if we're not satisfied with medical office cleaning in Makakilo?",
        answer: "We guarantee satisfaction and will return to address any concerns at no additional charge, understanding the critical nature of healthcare environments and the importance of maintaining clean, safe medical facilities."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Makakilo medical clinic spotless and OSHA compliant for over two years. Highly recommend their professional medical cleaning service!",
      author: "Clinic Manager, Makakilo Medical Center"
    }
  },
  {
    id: "mililani",
    name: "Mililani",
    description: "Mililani medical facilities rely on our professional medical office cleaning services for consistent, healthcare-grade facility maintenance that keeps their clinics and medical offices operating safely and efficiently with the highest standards of cleanliness.",
    faq: [
      {
        question: "How often do Mililani medical facilities schedule cleaning?",
        answer: "Most Mililani medical facilities prefer daily or multiple times per week cleaning schedules, though we offer flexible scheduling based on your patient volume and healthcare operational needs."
      },
      {
        question: "Do you provide emergency cleaning services in Mililani?",
        answer: "Yes, we offer emergency medical office cleaning services for unexpected situations, infection control incidents, and urgent healthcare facility maintenance needs with rapid response times."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Mililani medical office to perfection. Their professionalism and understanding of healthcare safety requirements are outstanding.",
      author: "Office Manager, Mililani Healthcare"
    }
  },
  {
    id: "pearl-city",
    name: "Pearl City",
    description: "Pearl City medical facilities trust our professional medical office cleaning services for comprehensive, healthcare-grade facility maintenance that ensures optimal patient safety, regulatory compliance, and infection control in the competitive healthcare market.",
    faq: [
      {
        question: "Do you service specialty medical practices in Pearl City?",
        answer: "Yes, we have extensive experience cleaning various medical specialties, including dental offices, veterinary clinics, physical therapy centers, and other healthcare facilities with specialized cleaning requirements."
      },
      {
        question: "How do you ensure equipment safety in Pearl City medical facilities?",
        answer: "We use only medical-grade cleaning products and follow manufacturer guidelines to ensure medical equipment safety while maintaining the highest standards of cleanliness and infection control."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Pearl City medical practice spotless and HIPAA compliant for over two years. Their attention to infection control and detail is outstanding!",
      author: "Practice Manager, Pearl City Medical Group"
    }
  },
  {
    id: "waialae",
    name: "Waialae",
    description: "Waialae medical facilities and healthcare clinics enjoy consistent, professional medical office cleaning services that maintain their facilities clean and operating at optimal patient safety and regulatory compliance standards year-round.",
    faq: [
      {
        question: "Do you work around Waialae medical facility schedules?",
        answer: "Yes, we can schedule cleanings around your patient hours, medical procedures, and operational requirements to minimize disruption to your healthcare operations and patient care."
      },
      {
        question: "What if we're not satisfied with medical office cleaning in Waialae?",
        answer: "We guarantee satisfaction and will return to address any concerns at no additional charge, understanding the critical nature of healthcare environments and patient safety requirements."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Waialae medical clinic to perfection. Their professionalism and understanding of healthcare safety requirements are outstanding.",
      author: "Clinic Director, Waialae Medical Center"
    }
  },
  {
    id: "waikiki",
    name: "Waikiki",
    description: "Waikiki medical facilities trust our professional medical office cleaning services for comprehensive, healthcare-grade facility maintenance that ensures optimal patient safety, regulatory compliance, and infection control in the competitive healthcare market.",
    faq: [
      {
        question: "How often do Waikiki medical facilities schedule cleaning?",
        answer: "Most Waikiki medical facilities prefer daily or multiple times per week cleaning schedules, though we offer flexible scheduling based on your patient volume and healthcare operational needs."
      },
      {
        question: "Do you provide emergency cleaning services in Waikiki?",
        answer: "Yes, we offer emergency medical office cleaning services for unexpected situations, infection control incidents, and urgent healthcare facility maintenance needs with rapid response times."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Waikiki medical office spotless and OSHA compliant for over two years. Highly recommend their professional medical cleaning service!",
      author: "Office Manager, Waikiki Healthcare"
    }
  },
  {
    id: "waimanalo",
    name: "Waimanalo",
    description: "Waimanalo medical facilities rely on our professional medical office cleaning services for consistent, healthcare-grade facility maintenance that keeps their clinics and medical offices operating safely and efficiently with the highest standards of cleanliness.",
    faq: [
      {
        question: "Do you service specialty medical practices in Waimanalo?",
        answer: "Yes, we have extensive experience cleaning various medical specialties, including dental offices, veterinary clinics, physical therapy centers, and other healthcare facilities with specialized cleaning requirements."
      },
      {
        question: "How do you ensure equipment safety in Waimanalo medical facilities?",
        answer: "We use only medical-grade cleaning products and follow manufacturer guidelines to ensure medical equipment safety while maintaining the highest standards of cleanliness and infection control."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Waimanalo medical practice to perfection. Their professionalism and understanding of healthcare safety requirements are outstanding.",
      author: "Practice Administrator, Waimanalo Healthcare"
    }
  },
  {
    id: "waipahu",
    name: "Waipahu",
    description: "Waipahu medical facilities trust our professional medical office cleaning services for comprehensive, healthcare-grade facility maintenance that ensures optimal patient safety, regulatory compliance, and infection control in the competitive healthcare market.",
    faq: [
      {
        question: "Do you provide HIPAA compliant cleaning for Waipahu medical facilities?",
        answer: "Yes, all our medical office cleaning services strictly adhere to HIPAA privacy regulations and OSHA safety standards. Our team is trained in healthcare cleaning protocols and uses specialized equipment to ensure complete compliance and patient privacy protection."
      },
      {
        question: "What if we're not satisfied with medical office cleaning in Waipahu?",
        answer: "We guarantee satisfaction and will return to address any concerns at no additional charge, understanding the critical nature of healthcare environments and the importance of maintaining clean, safe medical facilities."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Waipahu medical clinic spotless and HIPAA compliant for over two years. Their attention to infection control and detail is outstanding!",
      author: "Clinic Manager, Waipahu Medical Center"
    }
  }
];

const MedicalOfficeCleaningOahuPage = () => {
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
        <title>Medical Office Cleaning Oahu | Red Rock Cleans</title>
        <meta name="description" content="Medical office cleaning in Oahu. HIPAA-compliant service for Honolulu healthcare facilities. Professional Hawaiian service!" />
        <meta name="keywords" content="medical office cleaning near me, clinic cleaning Honolulu, dental office cleaning Kailua, healthcare cleaning Oahu, best medical cleaners Oahu, HIPAA compliant cleaning Oahu, OSHA standards cleaning Oahu, exam room sanitation Honolulu, terminal cleaning Oahu, medical office cleaning cost Oahu, clinic cleaning prices Honolulu, what is terminal cleaning Oahu, hire medical cleaners in Oahu" />
        <link rel="canonical" href="https://redrockcleans.com/oahu/medical-office-cleaning" />
      </Helmet>
      
      <OahuNavigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/src/assets/hero-commercial.jpg" 
              alt="Professional medical office cleaning service in a healthcare facility on Oahu"
              className="w-full h-full object-cover scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                HIPAA & OSHA Compliant Medical Office Cleaning on Oahu
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                For healthcare providers on Oahu, patient safety and trust begin with a visibly clean and thoroughly disinfected environment. Our specialized medical office cleaning services ensure HIPAA compliance, OSHA standards, and advanced infection control protocols to protect your patients, staff, and practice reputation.
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

        {/* A Higher Standard of Clean for Oahu's Healthcare Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                A Higher Standard of Clean for Oahu's Healthcare
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">HIPAA & OSHA Compliance</h3>
                      <p className="text-muted-foreground">
                        Our commitment to all regulatory standards for Oahu medical facilities. We strictly adhere to HIPAA privacy regulations and OSHA safety standards, ensuring complete compliance with healthcare industry requirements and protecting patient confidentiality.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Microscope className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Advanced Infection Control</h3>
                      <p className="text-muted-foreground">
                        Our use of EPA-approved, hospital-grade disinfectants to combat pathogens. We employ advanced cleaning protocols and specialized equipment to eliminate bacteria, viruses, and other harmful microorganisms that can compromise patient safety.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Trained & Certified Staff</h3>
                      <p className="text-muted-foreground">
                        Specialized training in bloodborne pathogens and cross-contamination prevention for our Oahu teams. Our staff undergoes rigorous healthcare cleaning certification and ongoing education to maintain the highest standards of medical facility hygiene.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Our Medical-Grade Cleaning Checklist Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Our Medical-Grade Cleaning Checklist
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Sofa className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Waiting Rooms & Reception</h3>
                      <p className="text-muted-foreground">
                        Disinfecting high-touch surfaces to protect patients and staff. We thoroughly sanitize seating areas, reception desks, door handles, and all contact points to prevent the spread of germs and maintain a welcoming, safe environment for patients.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Stethoscope className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Exam & Procedure Rooms</h3>
                      <p className="text-muted-foreground">
                        Terminal cleaning protocols between patients. We follow strict medical-grade cleaning procedures for examination tables, medical equipment, and all surfaces to ensure complete sanitization and prevent cross-contamination between patient visits.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Hand className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Restrooms & Common Areas</h3>
                      <p className="text-muted-foreground">
                        Intensive sanitation to prevent germ spread. We provide comprehensive cleaning of restrooms, break rooms, and common areas using hospital-grade disinfectants to eliminate pathogens and maintain the highest hygiene standards throughout your facility.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Our Proven Commitment to Health & Safety Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Our Proven Commitment to Health & Safety
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    <CountUp end={150} duration={2} />+
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Healthcare Facilities Served</h3>
                  <p className="text-muted-foreground text-sm">
                    Medical offices and clinics across Oahu trust our specialized cleaning services
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    <CountUp end={25} duration={2} />+
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Certified Technicians on Staff</h3>
                  <p className="text-muted-foreground text-sm">
                    Healthcare cleaning specialists trained in medical facility protocols
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ShieldX className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    99.9%
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Pathogen Reduction</h3>
                  <p className="text-muted-foreground text-sm">
                    Hospital-grade disinfectants eliminate harmful microorganisms
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
                          <h4 className="font-semibold mb-2">Local Medical Office Cleaning Services</h4>
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
                            Get Medical Office Cleaning Quote for {neighborhood.name}
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

        {/* Other Specialized Commercial Cleaning Services Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">
                Other Specialized Commercial Cleaning on Oahu
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <Building className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Data Center Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Specialized cleaning services for data centers and server rooms
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/oahu/data-center-cleaning">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <Shield className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Government Facility Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Secure and compliant cleaning for government and municipal buildings
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/oahu/government-facility-cleaning">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <GraduationCap className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">School Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Professional cleaning services for educational facilities
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
                <AccordionItem value="hipaa-compliance" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">How do you ensure HIPAA compliance in medical office cleaning?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      We follow strict HIPAA privacy protocols and maintain detailed confidentiality agreements with all staff. Our team is trained in healthcare privacy requirements and uses secure cleaning practices that protect patient information while maintaining the highest standards of facility cleanliness and infection control.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="infection-control" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">What infection control measures do you implement?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      We use EPA-approved, hospital-grade disinfectants and follow CDC guidelines for infection control. Our staff is trained in bloodborne pathogen protocols, cross-contamination prevention, and terminal cleaning procedures to ensure complete elimination of harmful microorganisms and maintain a safe healthcare environment.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="medical-equipment" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">Are your cleaning methods safe for medical equipment?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Yes, we use only medical-grade cleaning products and follow manufacturer guidelines to ensure equipment safety. Our team is trained in proper medical equipment cleaning techniques and uses specialized tools and solutions that effectively disinfect without damaging sensitive medical devices or compromising their functionality.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="scheduling" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">Can you work around our patient schedule?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Yes, we can schedule cleanings around your patient hours, medical procedures, and operational requirements. We offer flexible scheduling including early morning, late evening, and weekend cleaning to minimize disruption to patient care and ensure your medical facility maintains the highest standards of cleanliness and safety.
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
              Ready to Elevate Your Medical Facility's Cleanliness Standards?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join dozens of Oahu healthcare providers that trust Red Rock Cleans for their medical office cleaning needs
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
              <Link to="/commercial-quote?location=oahu">Get Your Free Medical Office Cleaning Quote</Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default MedicalOfficeCleaningOahuPage;

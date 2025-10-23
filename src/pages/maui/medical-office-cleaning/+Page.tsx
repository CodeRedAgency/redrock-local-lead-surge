import { MauiNavigation } from "@/components/MauiNavigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Shield, Microscope, Award, Sofa, Stethoscope, Droplets, Hospital, BadgeCheck, ShieldX, MapPin, Calendar, Home, Server, Building, GraduationCap, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import CountUp from "react-countup";

const towns = [
  {
    id: "wailea",
    name: "Wailea",
    description: "Wailea medical practices trust Red Rock Cleans to maintain the pristine, compliant environment that reflects their commitment to patient health and safety.",
    faq: [
      {
        question: "Do you clean dental offices in Wailea?",
        answer: "Yes, we specialize in dental office cleaning with protocols designed for operatories, sterilization areas, and patient waiting rooms, using EPA-approved disinfectants that meet dental industry standards."
      },
      {
        question: "Are your Wailea services HIPAA compliant?",
        answer: "Absolutely. All our technicians are trained in HIPAA privacy protocols, sign confidentiality agreements, and follow strict procedures to protect patient information and medical environments."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has maintained our Wailea medical practice for three years. Their attention to infection control and professionalism is exceptional.",
      author: "Dr. Sarah Chen, Wailea Family Medicine"
    }
  },
  {
    id: "makena",
    name: "Makena",
    description: "Makena healthcare facilities rely on our OSHA-compliant cleaning services to maintain the infection-free environment essential for patient care and regulatory compliance.",
    faq: [
      {
        question: "What cleaning standards do you follow in Makena?",
        answer: "We adhere to CDC guidelines, OSHA bloodborne pathogen standards, and EPA disinfectant protocols to ensure your Makena facility meets all healthcare cleaning requirements."
      },
      {
        question: "Can you clean around our Makena clinic schedule?",
        answer: "Yes, we work around your patient schedule with evening, early morning, or weekend cleaning to ensure zero disruption to your medical operations."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans understands the unique needs of our Makena clinic. Their terminal cleaning between patients is always thorough and timely.",
      author: "Practice Manager, Makena Urgent Care"
    }
  },
  {
    id: "kihei",
    name: "Kihei",
    description: "Kihei medical offices benefit from our specialized exam room sanitation and terminal cleaning protocols that prevent cross-contamination and ensure patient safety.",
    faq: [
      {
        question: "What is terminal cleaning for Kihei medical offices?",
        answer: "Terminal cleaning is our comprehensive disinfection protocol between patients, focusing on all high-touch surfaces in exam rooms using hospital-grade, EPA-registered disinfectants proven against healthcare pathogens."
      },
      {
        question: "How often should Kihei clinics schedule cleaning?",
        answer: "We recommend daily cleaning for patient areas, with terminal cleaning between patients for exam rooms, and weekly deep cleaning for the entire facility to maintain optimal hygiene standards."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans' terminal cleaning protocols have helped our Kihei practice maintain a perfect safety record. Their staff is reliable and well-trained.",
      author: "Dr. Michael Torres, Kihei Pediatrics"
    }
  },
  {
    id: "kapalua",
    name: "Kapalua",
    description: "Kapalua healthcare providers trust our certified technicians to maintain the immaculate, compliant environment that supports quality patient care and builds trust.",
    faq: [
      {
        question: "Are your Kapalua teams certified?",
        answer: "Yes, all technicians servicing Kapalua medical facilities are certified in bloodborne pathogen protocols, HIPAA compliance, and healthcare environmental services best practices."
      },
      {
        question: "What makes your Kapalua service different?",
        answer: "We specialize exclusively in healthcare environments with medical-grade protocols, EPA-approved disinfectants, and staff trained specifically for clinical settings in Kapalua."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provides the level of professionalism our Kapalua medical spa requires. Their infection control knowledge is impressive.",
      author: "Director, Kapalua Wellness Center"
    }
  },
  {
    id: "kaanapali",
    name: "Ka'anapali",
    description: "Ka'anapali clinics rely on our advanced infection control methods and hospital-grade disinfectants to create the safe, healing environment patients expect.",
    faq: [
      {
        question: "Do you clean surgical centers in Ka'anapali?",
        answer: "Yes, we provide specialized cleaning for surgical and procedure rooms following strict aseptic protocols, using appropriate disinfectants, and maintaining detailed documentation for compliance."
      },
      {
        question: "Can you handle emergency cleanings in Ka'anapali?",
        answer: "Absolutely. We offer 24/7 emergency response for biological spills, contamination events, or urgent pre-inspection cleaning to ensure your Ka'anapali facility meets all standards."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans responded immediately when we needed emergency cleaning at our Ka'anapali clinic. Their professionalism under pressure was outstanding.",
      author: "Clinic Administrator, Ka'anapali Medical Group"
    }
  },
  {
    id: "lahaina",
    name: "Lahaina",
    description: "Lahaina healthcare facilities benefit from our comprehensive cleaning that addresses waiting rooms, exam rooms, and all clinical spaces with medical-grade precision.",
    faq: [
      {
        question: "What disinfectants do you use in Lahaina clinics?",
        answer: "We use EPA-registered, hospital-grade disinfectants proven effective against MRSA, C. diff, norovirus, and other healthcare pathogens, with appropriate dwell times for maximum efficacy."
      },
      {
        question: "How do you prevent cross-contamination in Lahaina?",
        answer: "We use color-coded microfiber systems, separate equipment for clinical vs. non-clinical areas, and strict protocols to prevent pathogen transfer between rooms and surfaces."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans' understanding of infection control has been invaluable to our Lahaina practice. They're not just cleaners—they're healthcare partners.",
      author: "Dr. Jennifer Wong, Lahaina Family Practice"
    }
  },
  {
    id: "spreckelsville",
    name: "Spreckelsville",
    description: "Spreckelsville medical practices trust our HIPAA and OSHA compliant services to maintain the pristine environment that reflects their commitment to patient care.",
    faq: [
      {
        question: "What are your Spreckelsville cleaning rates?",
        answer: "Medical office cleaning costs vary based on facility size, cleaning frequency, and specific requirements. We provide transparent pricing with detailed quotes. Most clinics find our services cost-effective considering the compliance and safety benefits."
      },
      {
        question: "Do you provide cleaning documentation in Spreckelsville?",
        answer: "Yes, we maintain detailed logs, provide certificates of service, and document all cleaning activities to support your compliance with healthcare regulations and inspection requirements."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been instrumental in maintaining our Spreckelsville dental practice's reputation for cleanliness. Their consistency is remarkable.",
      author: "Practice Manager, Spreckelsville Dental Care"
    }
  },
  {
    id: "paia",
    name: "Pa'ia",
    description: "Pa'ia clinics rely on our specialized training in bloodborne pathogens and cross-contamination prevention to ensure every surface meets healthcare standards.",
    faq: [
      {
        question: "Can you clean chiropractic offices in Pa'ia?",
        answer: "Yes, we clean all types of healthcare facilities including chiropractic offices, physical therapy clinics, and alternative medicine practices with appropriate protocols for each specialty."
      },
      {
        question: "What training do your Pa'ia teams have?",
        answer: "All technicians complete OSHA bloodborne pathogen training, HIPAA compliance certification, healthcare environmental services courses, and ongoing education in infection control best practices."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans transformed our Pa'ia clinic's cleanliness standards. Patients consistently comment on how clean and safe our facility feels.",
      author: "Dr. Robert Kim, Pa'ia Chiropractic Center"
    }
  },
  {
    id: "kuau",
    name: "Kuau",
    description: "Kuau healthcare providers benefit from our proven commitment to pathogen reduction and the pristine environment that builds patient confidence and trust.",
    faq: [
      {
        question: "How quickly can you start in Kuau?",
        answer: "We can typically begin service within 48 hours of initial contact, including a thorough facility assessment, protocol development, and staff orientation to your specific needs."
      },
      {
        question: "Do you clean veterinary clinics in Kuau?",
        answer: "Yes, we service veterinary practices with specialized protocols for animal healthcare environments, including appropriate disinfectants and cross-contamination prevention methods."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans' expertise in medical cleaning is evident in every detail. Our Kuau practice has never looked better or felt safer.",
      author: "Office Manager, Kuau Medical Associates"
    }
  },
  {
    id: "haiku",
    name: "Ha'iku",
    description: "Ha'iku medical offices trust Red Rock Cleans to maintain the HIPAA and OSHA compliant environment essential for quality healthcare delivery.",
    faq: [
      {
        question: "What makes Ha'iku medical cleaning unique?",
        answer: "Ha'iku's healthcare facilities often have unique layouts and specialties. We customize our protocols to address your specific clinical needs while maintaining all regulatory compliance standards."
      },
      {
        question: "Can you train our staff in Ha'iku?",
        answer: "Yes, we offer training sessions for your clinical staff on proper disinfection techniques, spill response, and maintaining clean environments between our professional cleaning visits."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been essential to our Ha'iku practice's success. Their medical cleaning expertise and reliability are unmatched on Maui.",
      author: "Dr. Lisa Martinez, Ha'iku Women's Health"
    }
  }
];

const MedicalOfficeCleaningMauiPage = () => {
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
        <title>Medical Office Cleaning Maui | Red Rock Cleans</title>
        <meta name="description" content="Medical office cleaning in Maui. HIPAA-compliant service for Maui healthcare facilities. Professional Hawaiian service today!" />
        <meta name="keywords" content="medical office cleaning near me, clinic cleaning Maui, dental office cleaning Lahaina, healthcare cleaning Wailea, best medical cleaners Maui, HIPAA compliant cleaning Maui, OSHA standards cleaning Maui, exam room sanitation Kihei, terminal cleaning Maui, medical office cleaning cost Maui, clinic cleaning prices Maui, what is terminal cleaning Maui, hire medical cleaners in Maui" />
        <link rel="canonical" href="https://redrockcleans.com/maui/medical-office-cleaning" />
      </Helmet>
      
      <MauiNavigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/src/assets/hero-commercial.jpg" 
              alt="Professional medical office cleaning service at a Maui healthcare facility"
              className="w-full h-full object-cover scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                HIPAA & OSHA Compliant Medical Office Cleaning on Maui
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                For healthcare providers on Maui, patient safety and trust begin with a visibly clean and thoroughly disinfected environment. Red Rock Cleans delivers specialized medical office cleaning that meets HIPAA privacy standards, OSHA regulations, and CDC guidelines—protecting your patients, staff, and reputation across Wailea, Lahaina, Kihei, and beyond.
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

        {/* A Higher Standard of Clean Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                A Higher Standard of Clean for Maui's Healthcare
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">HIPAA & OSHA Compliance</h3>
                      <p className="text-muted-foreground">
                        Our commitment to all regulatory standards ensures your Maui medical facility meets HIPAA privacy requirements and OSHA safety protocols. We maintain confidentiality, use proper PPE, and follow strict documentation procedures for complete compliance.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Microscope className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Advanced Infection Control</h3>
                      <p className="text-muted-foreground">
                        We use EPA-approved, hospital-grade disinfectants proven effective against MRSA, C. diff, norovirus, and other healthcare pathogens. Our protocols follow CDC guidelines to combat infection and protect vulnerable patients.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Trained & Certified Staff</h3>
                      <p className="text-muted-foreground">
                        Our Maui teams receive specialized training in bloodborne pathogens, cross-contamination prevention, HIPAA compliance, and healthcare environmental services. Every technician is certified and continuously educated on best practices.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Medical-Grade Cleaning Checklist Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Our Medical-Grade Cleaning Checklist
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Sofa className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Waiting Rooms & Reception</h3>
                      <p className="text-muted-foreground">
                        Disinfecting high-touch surfaces including door handles, check-in counters, chairs, magazines, and payment terminals to protect patients and staff. We create a welcoming first impression that builds confidence in your care.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Stethoscope className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Exam & Procedure Rooms</h3>
                      <p className="text-muted-foreground">
                        Terminal cleaning protocols between patients including comprehensive disinfection of exam tables, equipment, light switches, counters, and all touchpoints using EPA-registered healthcare disinfectants with appropriate dwell times.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Droplets className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Restrooms & Common Areas</h3>
                      <p className="text-muted-foreground">
                        Intensive sanitation of restrooms, staff break rooms, and common areas to prevent germ spread. We use color-coded microfiber systems and separate equipment to prevent cross-contamination between clinical and non-clinical spaces.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Proven Commitment Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Our Proven Commitment to Health & Safety
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Hospital className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    <CountUp end={85} duration={2} />+
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Healthcare Facilities Served</h3>
                  <p className="text-muted-foreground text-sm">
                    Medical, dental, and specialty practices trust our services
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BadgeCheck className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    100%
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Certified Technicians on Staff</h3>
                  <p className="text-muted-foreground text-sm">
                    Every team member is trained in healthcare cleaning protocols
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
                    Hospital-grade disinfectants proven against healthcare pathogens
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
                          <h4 className="font-semibold mb-2">Local Medical Office Cleaning Services</h4>
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
                            Get Medical Cleaning Quote for {town.name}
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
                Other Specialized Commercial Cleaning on Maui
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <Server className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Data Center Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      ISO-compliant cleaning for critical technology infrastructure
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/maui/data-center-cleaning">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <Building className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Government Facility Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Secure and compliant cleaning for government buildings
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/maui/government-facility-cleaning">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <GraduationCap className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">School Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Creating healthy and safe learning environments for students
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/maui/school-cleaning">Learn More</Link>
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
                    <h3 className="text-lg font-semibold">Are your medical office cleaning services HIPAA compliant?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Yes, all our medical office cleaning services are fully HIPAA compliant. Our technicians sign confidentiality agreements, receive HIPAA privacy training, and follow strict protocols to protect patient information. We never access medical records, respect privacy zones, and maintain the discretion essential for healthcare environments.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="terminal-cleaning" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">What is terminal cleaning for medical offices on Maui?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Terminal cleaning is our comprehensive disinfection protocol performed between patients in exam rooms. It includes thorough cleaning and disinfection of all high-touch surfaces—exam tables, equipment, light switches, counters, door handles—using EPA-registered, hospital-grade disinfectants with appropriate contact times to eliminate healthcare pathogens and prevent cross-contamination.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="what-included" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">What's included in medical office cleaning services?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Our comprehensive medical cleaning includes waiting room sanitation, exam room terminal cleaning, restroom intensive disinfection, high-touch surface sanitization, floor care, waste removal following medical protocols, and detailed documentation. We customize our service to your specialty—whether dental, primary care, specialty practice, or surgical center—using appropriate protocols and EPA-approved disinfectants.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="cost" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">What is the cost of medical office cleaning on Maui?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Medical office cleaning costs vary based on facility size, number of exam rooms, cleaning frequency, and specific compliance requirements. Most medical practices find our services cost-effective when considering reduced infection risk, improved patient satisfaction, and maintained compliance. We provide transparent pricing with detailed quotes. Contact us for a free assessment and customized proposal for your Maui healthcare facility.
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
              Join Maui's leading healthcare providers that trust Red Rock Cleans for HIPAA & OSHA compliant cleaning
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
              <Link to="/commercial-quote?location=maui">Get Your Free Medical Cleaning Assessment</Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default MedicalOfficeCleaningMauiPage;

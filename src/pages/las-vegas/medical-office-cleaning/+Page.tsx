import { LasVegasNavigation } from "@/components/LasVegasNavigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Clock, Shield, Star, Users, Calendar, Home, Sparkles, HardHat, Cog, Building, ClipboardCheck, Wrench, Droplets, Truck, Square, Zap, User, Building2, GraduationCap, ShoppingBag, FileText, Microscope, Award, Users2, Stethoscope, Heart, Cross, CheckCircle2, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";

const neighborhoods = [
  {
    id: "anthem",
    name: "Anthem",
    description: "Keep your Anthem medical office pristine and compliant with our comprehensive medical office cleaning services designed for patient safety and healthcare excellence.",
    faq: [
      {
        question: "Do you understand the specific requirements for Anthem medical offices?",
        answer: "Absolutely. Our team is trained in medical facility protocols and understands the critical importance of maintaining clean, compliant environments for patient safety and HIPAA compliance."
      },
      {
        question: "Can you work around Anthem medical office schedules?",
        answer: "Yes, we schedule our cleaning services around your patient appointments, medical procedures, and operational requirements to minimize disruption to your healthcare services."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our Anthem medical office with exceptional hygiene standards. Their understanding of healthcare requirements is outstanding.",
      author: "Office Manager, Anthem Medical Center"
    }
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "Professional medical office cleaning services for Enterprise healthcare facilities who demand the highest standards of cleanliness, compliance, and patient safety.",
    faq: [
      {
        question: "What areas of Enterprise medical offices do you clean?",
        answer: "We clean all areas including exam rooms, waiting areas, reception, restrooms, and specialized medical areas with appropriate disinfectants and safety protocols."
      },
      {
        question: "Do you provide flexible scheduling for Enterprise medical offices?",
        answer: "Yes, we work around your patient schedules, medical procedures, and can provide emergency cleaning services when needed for patient safety and infection control."
      }
    ],
    testimonial: {
      text: "Our Enterprise medical office has never been cleaner or more compliant. Red Rock Cleans respects our patient schedules and provides excellent service around our healthcare operations.",
      author: "Operations Director, Enterprise Healthcare"
    }
  },
  {
    id: "green-valley-north",
    name: "Green Valley North",
    description: "Keep your Green Valley North medical office pristine with our comprehensive medical office cleaning service designed for patient safety and healthcare excellence.",
    faq: [
      {
        question: "Do you clean both large and small medical offices in Green Valley North?",
        answer: "Yes, we provide medical office cleaning services for facilities of all sizes, from small private practices to large medical centers and specialty clinics."
      },
      {
        question: "What's included in your Green Valley North medical office cleaning?",
        answer: "We clean exam rooms, waiting areas, reception, restrooms, and specialized medical areas with appropriate disinfectants and HIPAA-compliant protocols."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Green Valley North medical office beautifully. Their precision and attention to healthcare requirements are exceptional.",
      author: "Facility Director, Green Valley North Medical"
    }
  },
  {
    id: "henderson",
    name: "Henderson",
    description: "Henderson medical offices trust Red Rock Cleans for consistent, professional medical office cleaning services that maintain their healthcare facilities safely and efficiently year-round.",
    faq: [
      {
        question: "How far in advance should Henderson medical offices book cleaning?",
        answer: "We recommend booking at least one week in advance, though we can often accommodate shorter notice for emergency situations or critical patient safety needs."
      },
      {
        question: "Do you provide specialized equipment for Henderson medical office cleaning?",
        answer: "Yes, we bring all specialized equipment including hospital-grade disinfectants, microfiber cloths, and appropriate cleaning solutions for medical facilities."
      }
    ],
    testimonial: {
      text: "As a Henderson medical office owner, I appreciate Red Rock Cleans' understanding of healthcare needs. Highly recommended for medical facilities!",
      author: "Practice Owner, Henderson Medical Center"
    }
  },
  {
    id: "lake-las-vegas",
    name: "Lake Las Vegas",
    description: "Lake Las Vegas medical offices enjoy pristine, professional cleaning with our medical office cleaning service that maintains their healthcare facilities to the highest hygiene standards.",
    faq: [
      {
        question: "Do you service high-end medical offices in Lake Las Vegas?",
        answer: "Yes, we specialize in cleaning premium medical facilities and are experienced with sophisticated equipment, luxury amenities, and high-end healthcare standards."
      },
      {
        question: "Can you work around Lake Las Vegas medical office schedules?",
        answer: "Absolutely! We offer flexible scheduling including early morning, late evening, and emergency services to accommodate your patient schedules and healthcare requirements."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Lake Las Vegas medical office to perfection. Their understanding of luxury healthcare facilities and hygiene protocols is remarkable.",
      author: "General Manager, Lake Las Vegas Medical Center"
    }
  },
  {
    id: "las-vegas",
    name: "Las Vegas",
    description: "Las Vegas medical offices rely on our professional medical office cleaning service for consistent, safe facility maintenance that ensures optimal patient safety and compliance.",
    faq: [
      {
        question: "What makes Red Rock Cleans different for Las Vegas medical offices?",
        answer: "We're locally owned, fully insured, and our team is specially trained in medical cleaning protocols, HIPAA compliance, and healthcare facility requirements."
      },
      {
        question: "Do you offer emergency medical office cleaning for Las Vegas?",
        answer: "Yes, we can often provide same-day or emergency cleaning services for critical patient safety situations, infection control, or post-procedure cleanup needs."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been cleaning our Las Vegas medical office for three years. They understand our patient needs and maintain our facility safely and professionally.",
      author: "Operations Manager, Las Vegas Medical Center"
    }
  },
  {
    id: "macdonald-ranch",
    name: "MacDonald Ranch",
    description: "MacDonald Ranch medical offices enjoy consistent, professional medical office cleaning services that keep their healthcare facilities spotless and operating at peak patient safety.",
    faq: [
      {
        question: "How long does medical office cleaning take in MacDonald Ranch?",
        answer: "Most MacDonald Ranch medical office cleanings take 4-8 hours depending on facility size, complexity, and specific hygiene requirements for healthcare operations."
      },
      {
        question: "Do you work with MacDonald Ranch medical office staff?",
        answer: "Yes, we coordinate with your healthcare staff and management team to ensure our cleaning complements your patient schedules and medical requirements."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our MacDonald Ranch medical office beautifully. Their professional approach and attention to hygiene are outstanding.",
      author: "Facility Manager, MacDonald Ranch Medical"
    }
  },
  {
    id: "mountains-edge",
    name: "Mountain's Edge",
    description: "Mountain's Edge medical offices trust our professional medical office cleaning service for consistent facility maintenance that complements their healthcare operations and patient safety requirements.",
    faq: [
      {
        question: "What cleaning products do you use in Mountain's Edge medical offices?",
        answer: "We use medical-grade, EPA-approved cleaning products that are effective against pathogens and bacteria while protecting your medical equipment and patient safety."
      },
      {
        question: "Can you customize cleaning for Mountain's Edge medical offices?",
        answer: "Yes, we can customize our medical office cleaning service to focus on specific areas, equipment types, or particular hygiene priorities based on your healthcare facility requirements."
      }
    ],
    testimonial: {
      text: "Living in Mountain's Edge, I appreciate Red Rock Cleans' reliability and understanding of our medical office's hygiene requirements. Excellent service for healthcare facilities.",
      author: "Office Coordinator, Mountain's Edge Medical"
    }
  },
  {
    id: "north-las-vegas",
    name: "North Las Vegas",
    description: "North Las Vegas medical offices depend on our professional medical office cleaning service for consistent, safe facility maintenance that keeps their healthcare operations reliable and efficient.",
    faq: [
      {
        question: "Do you offer competitive rates for North Las Vegas medical offices?",
        answer: "Yes, we provide competitive rates for North Las Vegas medical offices while maintaining high-quality hygiene standards and healthcare facility cleaning requirements."
      },
      {
        question: "How do you ensure quality in North Las Vegas medical office cleaning?",
        answer: "Every North Las Vegas medical office cleaning is supervised by certified specialists and we guarantee compliance with hygiene standards and your specific healthcare facility requirements."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our North Las Vegas medical office clean and safe. Great value and excellent professional service for our healthcare operations.",
      author: "Office Supervisor, North Las Vegas Medical Hub"
    }
  },
  {
    id: "paradise",
    name: "Paradise",
    description: "Paradise medical offices enjoy reliable professional medical office cleaning services that maintain their facilities to the highest standards of cleanliness, compliance, and patient safety.",
    faq: [
      {
        question: "Do you service diverse medical office types in Paradise?",
        answer: "Yes, we provide professional cleaning services for all types of healthcare facilities including general practices, specialty clinics, dental offices, and medical centers."
      },
      {
        question: "What's your cancellation policy for Paradise medical offices?",
        answer: "We require 24-hour notice for cancellations, but we're flexible for emergency situations and can reschedule around critical patient events and medical procedures."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our Paradise medical office beautifully. Professional, safe, and thorough every time for our healthcare operations.",
      author: "Operations Manager, Paradise Medical Center"
    }
  },
  {
    id: "seven-hills",
    name: "Seven Hills",
    description: "Seven Hills medical offices trust our professional medical office cleaning service for consistent, safe facility maintenance that preserves their healthcare operations and compliance standards.",
    faq: [
      {
        question: "Do you service high-end medical offices in Seven Hills?",
        answer: "Yes, we have extensive experience cleaning premium medical facilities, including those with sophisticated equipment, luxury amenities, and high-end healthcare standards."
      },
      {
        question: "How do you ensure security in Seven Hills medical offices?",
        answer: "All our team members are background-checked, bonded, and insured. We respect the sensitive nature of your healthcare operations and maintain strict confidentiality and security protocols."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Seven Hills medical office to perfection. Their professionalism and understanding of healthcare facility hygiene requirements are outstanding.",
      author: "Facility Director, Seven Hills Medical Center"
    }
  },
  {
    id: "silverado-ranch",
    name: "Silverado Ranch",
    description: "Silverado Ranch medical offices rely on our professional medical office cleaning service for consistent facility maintenance that keeps their healthcare operations operating smoothly and safely.",
    faq: [
      {
        question: "Do you work around Silverado Ranch medical office schedules?",
        answer: "Yes, we can schedule cleanings around your patient schedules, medical procedures, and operational requirements for your convenience and healthcare efficiency."
      },
      {
        question: "What if we're not satisfied with cleaning in Silverado Ranch?",
        answer: "We guarantee satisfaction and will return to address any concerns at no additional charge, understanding the critical nature of your healthcare operations."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Silverado Ranch medical office spotless and safe for over two years. Highly recommend their professional service for healthcare facilities!",
      author: "Operations Manager, Silverado Ranch Medical"
    }
  },
  {
    id: "spring-valley",
    name: "Spring Valley",
    description: "Spring Valley medical offices enjoy consistent, professional medical office cleaning services that maintain their facilities clean and operating at optimal patient safety year-round.",
    faq: [
      {
        question: "How often do Spring Valley medical offices schedule cleaning?",
        answer: "Most Spring Valley medical offices prefer daily or weekly cleaning, though we offer flexible scheduling based on your operational requirements and patient volume."
      },
      {
        question: "Do you provide specialized cleaning for Spring Valley medical offices?",
        answer: "Yes, we offer both regular medical office cleaning and specialized services for critical hygiene maintenance, post-procedure cleanup, and emergency disinfection."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our Spring Valley medical office beautifully. Professional, reliable, and always safe for our healthcare operations.",
      author: "Facility Manager, Spring Valley Medical"
    }
  },
  {
    id: "summerlin-south",
    name: "Summerlin South",
    description: "Summerlin South medical offices trust our professional medical office cleaning service for consistent, high-quality facility maintenance that complements their premium healthcare operations and patient safety excellence.",
    faq: [
      {
        question: "Do you service luxury medical offices in Summerlin South?",
        answer: "Yes, we specialize in cleaning high-end medical facilities and are experienced with sophisticated equipment, premium amenities, and luxury healthcare standards."
      },
      {
        question: "Can you accommodate Summerlin South medical office schedules?",
        answer: "Absolutely! We're familiar with busy healthcare operations and can work around critical operational windows, patient schedules, and medical procedure requirements."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Summerlin South medical office to the highest standards. Exceptional professional service and deep understanding of healthcare facility hygiene requirements.",
      author: "General Manager, Summerlin South Medical Center"
    }
  },
  {
    id: "sunrise-manor",
    name: "Sunrise Manor",
    description: "Sunrise Manor medical offices depend on our professional medical office cleaning service for consistent, safe facility maintenance that keeps their healthcare operations spotless and operating efficiently.",
    faq: [
      {
        question: "Do you offer competitive rates for Sunrise Manor medical offices?",
        answer: "Yes, we provide competitive rates for Sunrise Manor medical offices while maintaining high professional cleaning standards and healthcare facility hygiene compliance."
      },
      {
        question: "How reliable is your service in Sunrise Manor medical offices?",
        answer: "We're committed to reliability and have a strong track record of consistent, professional service in Sunrise Manor healthcare facilities."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Sunrise Manor medical office clean and safe. Great value and reliable professional service for our healthcare operations.",
      author: "Operations Supervisor, Sunrise Manor Medical"
    }
  },
  {
    id: "whitney",
    name: "Whitney",
    description: "Whitney medical offices enjoy professional medical office cleaning services that maintain their facilities clean, safe, and ready for optimal patient care.",
    faq: [
      {
        question: "Do you work with diverse Whitney medical office environments?",
        answer: "Yes, we're experienced with healthcare facilities of all types and sizes, using professional cleaning practices appropriate for different medical operations and hygiene requirements."
      },
      {
        question: "Can you schedule around Whitney medical office operational requirements?",
        answer: "Absolutely! We offer flexible scheduling including early morning, late evening, and emergency services around your critical healthcare calendar."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our Whitney medical office beautifully. Professional, trustworthy, and always safe for our healthcare operations.",
      author: "Office Manager, Whitney Medical Center"
    }
  },
  {
    id: "winchester",
    name: "Winchester",
    description: "Winchester medical offices trust our professional medical office cleaning service for consistent, safe facility maintenance that keeps their healthcare operations spotless and operating at peak performance year-round.",
    faq: [
      {
        question: "Do you service diverse medical office types in Winchester?",
        answer: "Yes, we provide professional medical office cleaning for all types of healthcare facilities including general practices, specialty clinics, dental offices, and medical centers."
      },
      {
        question: "How do you ensure quality in Winchester medical office cleaning?",
        answer: "Every Winchester medical office cleaning is supervised by certified specialists and we guarantee compliance with hygiene standards and your specific healthcare facility requirements."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Winchester medical office immaculate and safe. Reliable, professional, and excellent value for our healthcare operations.",
      author: "Operations Manager, Winchester Medical Center"
    }
  }
];

const MedicalOfficeCleaningLasVegasPage = () => {
  const [openItem, setOpenItem] = useState<string>("");

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

  return (
    <>
      <Helmet>
        <title>Medical Office Cleaning Las Vegas | Red Rock Cleans</title>
        <meta name="description" content="Specialized medical office cleaning in Las Vegas. Red Rock Cleans provides HIPAA and OSHA compliant cleaning for clinics and healthcare facilities in Henderson, Summerlin, and beyond." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <LasVegasNavigation />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative py-24 md:py-32 overflow-hidden">
            <div className="absolute inset-0">
              <img 
                src="/src/assets/hero-commercial.jpg" 
                alt="Professional medical office cleaning service in a Las Vegas healthcare facility"
                className="w-full h-full object-cover scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                  HIPAA & OSHA Compliant Medical Office Cleaning in Las Vegas
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                  For healthcare providers in Las Vegas, patient safety and trust begin with a visibly clean and thoroughly disinfected environment. Our specialized medical office cleaning services ensure your facility meets the highest standards of hygiene and compliance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="h-14 text-lg px-8" asChild>
                    <Link to="/book-now-las-vegas">
                      <Calendar className="w-5 h-5 mr-2" />
                      Schedule Medical Office Cleaning
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

          {/* A Higher Standard of Clean for Las Vegas Healthcare */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  A Higher Standard of Clean for Las Vegas Healthcare
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <FileText className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">HIPAA & OSHA Compliance</h3>
                      <p className="text-muted-foreground text-sm">
                        Our commitment to all regulatory standards ensures your Las Vegas medical facility meets HIPAA privacy requirements and OSHA safety protocols for optimal patient care.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Compliant & Secure →
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Microscope className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Advanced Infection Control</h3>
                      <p className="text-muted-foreground text-sm">
                        Our use of EPA-approved, hospital-grade disinfectants combats pathogens effectively, ensuring your Las Vegas medical office maintains the highest infection control standards.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Advanced & Effective →
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Award className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Trained & Certified Staff</h3>
                      <p className="text-muted-foreground text-sm">
                        Specialized training in bloodborne pathogens and cross-contamination prevention ensures our Las Vegas teams provide the safest possible cleaning for your medical facility.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Certified & Safe →
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Our Medical-Grade Cleaning Checklist */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  Our Medical-Grade Cleaning Checklist
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Users2 className="w-6 h-6" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Waiting Rooms & Reception</h3>
                      <p className="text-muted-foreground text-sm">
                        Disinfecting high-touch surfaces including chairs, counters, and door handles to protect patients and staff from cross-contamination.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Stethoscope className="w-6 h-6" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Exam & Procedure Rooms</h3>
                      <p className="text-muted-foreground text-sm">
                        Terminal cleaning protocols between patients including medical equipment, exam tables, and all surfaces to prevent infection transmission.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Heart className="w-6 h-6" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Restrooms & Common Areas</h3>
                      <p className="text-muted-foreground text-sm">
                        Intensive sanitation of restrooms and common areas to prevent germ spread and maintain a hygienic environment for patients and staff.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Our Proven Commitment to Health & Safety */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-12">
                  Our Proven Commitment to Health & Safety
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Cross className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-4xl font-bold text-primary mb-2">75+</div>
                    <h3 className="text-lg font-semibold mb-2">Healthcare Facilities Served</h3>
                    <p className="text-muted-foreground text-sm">
                      Las Vegas medical offices trust our specialized cleaning services
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-4xl font-bold text-primary mb-2">100%</div>
                    <h3 className="text-lg font-semibold mb-2">Certified Technicians on Staff</h3>
                    <p className="text-muted-foreground text-sm">
                      All our team members are trained in medical facility cleaning protocols
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <X className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
                    <h3 className="text-lg font-semibold mb-2">Pathogen Reduction</h3>
                    <p className="text-muted-foreground text-sm">
                      Our hospital-grade disinfectants eliminate harmful pathogens effectively
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
                            Professional medical office cleaning services
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
                              Schedule Your {neighborhood.name} Medical Office Cleaning
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

          {/* Other Specialized Commercial Cleaning in Las Vegas */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  Other Specialized Commercial Cleaning in Las Vegas
                </h2>
                <p className="text-xl text-muted-foreground mb-12">
                  Beyond medical office cleaning, we offer specialized commercial cleaning services to meet all your Las Vegas facility needs.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <Link to="/las-vegas/data-center-cleaning/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors mb-4">
                        <Building className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Data Center Cleaning Services
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Specialized cleaning for data centers, server rooms, and technology facilities.
                      </p>
                    </div>
                  </Link>
                  <Link to="/las-vegas/government-facility-cleaning/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors mb-4">
                        <Building2 className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Government Facility Cleaning Services
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Professional cleaning for government buildings, offices, and public facilities.
                      </p>
                    </div>
                  </Link>
                  <Link to="/las-vegas/school-cleaning/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors mb-4">
                        <GraduationCap className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        School Cleaning Services
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Educational facility cleaning for schools, universities, and learning environments.
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
                      <h3 className="text-lg font-semibold">What makes your medical office cleaning service different?</h3>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <p className="text-muted-foreground">
                        We specialize in medical office cleaning with training in HIPAA compliance, OSHA safety protocols, and healthcare facility requirements. Our team uses hospital-grade disinfectants and follows strict procedures to protect your patients while maintaining the highest hygiene standards for infection control.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2" className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <h3 className="text-lg font-semibold">How do you handle scheduling around medical office operations?</h3>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <p className="text-muted-foreground">
                        We work closely with your medical staff to schedule cleaning during off-peak hours, early morning, or late evening when patient traffic is lowest. We can also provide emergency cleaning services for infection control incidents or post-procedure cleanup. Our flexible approach ensures minimal disruption to your healthcare services.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3" className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <h3 className="text-lg font-semibold">What areas of medical offices do you clean?</h3>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <p className="text-muted-foreground">
                        We clean all areas including exam rooms, waiting areas, reception, restrooms, and specialized medical areas. We use appropriate disinfectants and methods for each area to ensure safety and effectiveness while protecting your medical equipment and patient health.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-4" className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <h3 className="text-lg font-semibold">Are your technicians certified for medical environments?</h3>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <p className="text-muted-foreground">
                        Yes, all our technicians are background-checked, bonded, and insured. They receive specialized training in medical cleaning protocols, HIPAA compliance, and healthcare facility safety requirements. We understand the unique challenges of medical environments and maintain strict protocols to protect your patients and staff.
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
                  Ready to Elevate Your Medical Office's Hygiene Standards?
                </h2>
                <p className="text-xl mb-8 opacity-90">
                  Join the Las Vegas medical offices that trust Red Rock Cleans for HIPAA-compliant, professional cleaning services that ensure optimal patient safety and facility compliance.
                </p>
                <Button size="lg" variant="secondary" className="h-14 text-lg px-8" asChild>
                  <Link to="/book-now-las-vegas">
                    <Calendar className="w-5 h-5 mr-2" />
                    Schedule Your Medical Office Cleaning Today
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
                  alt="A pristine and disinfected medical exam room in a Las Vegas clinic, cleaned by Red Rock Cleans"
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

export default MedicalOfficeCleaningLasVegasPage;

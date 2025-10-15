import { SouthFloridaNavigation } from "@/components/SouthFloridaNavigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Shield, Microscope, Award, Sofa, Stethoscope, Droplets, Hospital, BadgeCheck, ShieldCheck, MapPin, Calendar, Building2, School, Building } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import CountUp from "react-countup";

const cities = [
  {
    id: "aventura",
    name: "Aventura",
    description: "Aventura medical offices and clinics trust our HIPAA and OSHA compliant cleaning services to maintain the highest standards of patient safety and infection control.",
    faq: [
      {
        question: "How do you ensure HIPAA compliance in Aventura medical offices?",
        answer: "Our team is trained in HIPAA requirements, uses secure cleaning protocols, respects patient privacy, and maintains confidentiality of all medical facility information."
      },
      {
        question: "What disinfectants do you use in Aventura healthcare facilities?",
        answer: "We use EPA-approved, hospital-grade disinfectants that are effective against bloodborne pathogens, bacteria, and viruses while being safe for medical environments."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has transformed our Aventura clinic. Their attention to healthcare compliance and infection control is exceptional.",
      author: "Dr. Martinez, Aventura Medical Center"
    }
  },
  {
    id: "cooper-city",
    name: "Cooper City",
    description: "Cooper City healthcare providers rely on our specialized medical cleaning services that meet stringent regulatory standards and protect patient wellbeing.",
    faq: [
      {
        question: "Do you clean dental offices in Cooper City?",
        answer: "Yes, we provide specialized cleaning for dental offices including sterilization areas, operatories, waiting rooms, and all patient care zones."
      },
      {
        question: "How often should medical offices be cleaned in Cooper City?",
        answer: "We recommend daily cleaning with terminal cleaning between patients for exam rooms and weekly deep cleaning for comprehensive infection control."
      }
    ],
    testimonial: {
      text: "Our Cooper City dental practice has never been cleaner. Red Rock Cleans understands the unique needs of healthcare facilities.",
      author: "Office Manager, Cooper City Dental Associates"
    }
  },
  {
    id: "dania-beach",
    name: "Dania Beach",
    description: "Dania Beach medical facilities benefit from our comprehensive cleaning protocols that eliminate pathogens and create safe healing environments.",
    faq: [
      {
        question: "What is terminal cleaning in Dania Beach medical offices?",
        answer: "Terminal cleaning is the thorough disinfection of exam and procedure rooms between patients, including all surfaces, equipment, and high-touch areas to prevent cross-contamination."
      },
      {
        question: "Do you provide emergency medical cleaning in Dania Beach?",
        answer: "Yes, we offer rapid response cleaning for biohazard situations, spills, and urgent infection control needs in healthcare facilities."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans keeps our Dania Beach clinic spotless and compliant. Our patients consistently comment on the cleanliness.",
      author: "Dr. Johnson, Dania Beach Family Medicine"
    }
  },
  {
    id: "davie",
    name: "Davie",
    description: "Davie healthcare practices depend on our meticulous medical office cleaning that prioritizes patient safety and regulatory compliance.",
    faq: [
      {
        question: "What's included in medical office cleaning in Davie?",
        answer: "Our service includes exam room terminal cleaning, waiting area sanitization, restroom deep cleaning, medical waste handling, and high-touch surface disinfection."
      },
      {
        question: "How much does medical office cleaning cost in Davie?",
        answer: "Costs vary based on facility size and frequency. Most Davie medical offices invest $400-$1,500 per cleaning. We provide free customized quotes."
      }
    ],
    testimonial: {
      text: "Our Davie medical practice's infection rates have decreased since partnering with Red Rock Cleans. Highly professional service.",
      author: "Practice Administrator, Davie Healthcare Group"
    }
  },
  {
    id: "fort-lauderdale",
    name: "Fort Lauderdale",
    description: "Fort Lauderdale medical facilities trust our healthcare-grade cleaning services to protect patient health and maintain compliance with all regulatory standards.",
    faq: [
      {
        question: "Do you clean surgery centers in Fort Lauderdale?",
        answer: "Yes, we provide specialized cleaning for ambulatory surgery centers, including sterile processing areas, operating rooms, and recovery areas following strict protocols."
      },
      {
        question: "How do you prevent cross-contamination in Fort Lauderdale clinics?",
        answer: "We use color-coded systems, separate equipment for different zones, follow strict hand hygiene protocols, and use proper disinfection techniques for each area."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Fort Lauderdale clinic to perfection. Their understanding of medical facility requirements is outstanding.",
      author: "Medical Director, Fort Lauderdale Specialty Center"
    }
  },
  {
    id: "hallandale-beach",
    name: "Hallandale Beach",
    description: "Hallandale Beach healthcare providers benefit from our rigorous cleaning standards that ensure every surface is sanitized and patient-ready.",
    faq: [
      {
        question: "Are your cleaners trained in bloodborne pathogen safety in Hallandale Beach?",
        answer: "Yes, all our medical cleaning staff receive comprehensive training in bloodborne pathogen protocols, OSHA standards, and infection control procedures."
      },
      {
        question: "Do you clean chiropractic offices in Hallandale Beach?",
        answer: "Yes, we clean all types of healthcare facilities including chiropractic offices, physical therapy centers, and wellness clinics."
      }
    ],
    testimonial: {
      text: "Our Hallandale Beach patients notice the difference. Red Rock Cleans delivers healthcare-grade cleanliness consistently.",
      author: "Dr. Chen, Hallandale Beach Wellness Center"
    }
  },
  {
    id: "hollywood",
    name: "Hollywood",
    description: "Hollywood medical offices rely on our professional cleaning to create safe, welcoming environments that inspire patient confidence and trust.",
    faq: [
      {
        question: "What makes medical office cleaning different in Hollywood?",
        answer: "Medical cleaning requires EPA-registered disinfectants, trained staff in infection control, terminal cleaning protocols, and compliance with HIPAA, OSHA, and healthcare regulations."
      },
      {
        question: "Do you clean pediatric offices in Hollywood?",
        answer: "Yes, we provide specialized cleaning for pediatric offices with extra attention to play areas, toys, and child-friendly spaces using safe, effective disinfectants."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has elevated our Hollywood practice's standards. Our patients feel safe and comfortable in our spotless facility.",
      author: "Practice Manager, Hollywood Pediatrics"
    }
  },
  {
    id: "las-olas",
    name: "Las Olas",
    description: "Las Olas medical practices trust our detailed cleaning services that combine healthcare compliance with the premium experience patients expect.",
    faq: [
      {
        question: "Can you clean medical spas in Las Olas?",
        answer: "Yes, we clean medical spas, cosmetic surgery centers, and aesthetic practices following strict infection control and sanitation protocols."
      },
      {
        question: "How do you sanitize medical equipment in Las Olas?",
        answer: "We use appropriate EPA-approved disinfectants for medical surfaces and equipment, following manufacturer guidelines and healthcare standards for proper sanitation."
      }
    ],
    testimonial: {
      text: "Our Las Olas aesthetic practice shines thanks to Red Rock Cleans. They understand medical-grade cleanliness requirements perfectly.",
      author: "Medical Director, Las Olas Aesthetic Institute"
    }
  },
  {
    id: "lauderdale-lakes",
    name: "Lauderdale Lakes",
    description: "Lauderdale Lakes healthcare facilities benefit from our systematic cleaning approach that ensures consistent compliance and patient safety.",
    faq: [
      {
        question: "Do you follow CDC guidelines in Lauderdale Lakes medical offices?",
        answer: "Yes, we strictly follow CDC guidelines for healthcare facility cleaning, including proper disinfection, hand hygiene, and infection prevention protocols."
      },
      {
        question: "How do you ensure quality in Lauderdale Lakes?",
        answer: "We use detailed medical cleaning checklists, conduct regular compliance audits, and maintain open communication with healthcare administrators."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans keeps our Lauderdale Lakes clinic compliant and pristine. Reliable and knowledgeable healthcare cleaning service.",
      author: "Facility Manager, Lauderdale Lakes Medical Group"
    }
  },
  {
    id: "lauderhill",
    name: "Lauderhill",
    description: "Lauderhill medical practices trust our professional cleaning to protect patient health and maintain the sterile conditions healthcare demands.",
    faq: [
      {
        question: "What medical office cleaning checklist do you follow in Lauderhill?",
        answer: "We clean exam rooms, waiting areas, restrooms, staff areas, procedure rooms, sterilization areas, and all high-touch surfaces using healthcare-grade protocols."
      },
      {
        question: "Do you provide odor elimination in Lauderhill medical facilities?",
        answer: "Yes, we address odor sources through deep cleaning and use medical-grade air purification to maintain a fresh, clean environment."
      }
    ],
    testimonial: {
      text: "Our Lauderhill practice's patient satisfaction scores have improved thanks to Red Rock Cleans. Patients love the cleanliness.",
      author: "Dr. Patel, Lauderhill Internal Medicine"
    }
  },
  {
    id: "margate",
    name: "Margate",
    description: "Margate healthcare providers depend on our comprehensive medical cleaning services that create healing environments patients trust.",
    faq: [
      {
        question: "How do you disinfect exam rooms in Margate?",
        answer: "We use EPA-registered, hospital-grade disinfectants with proper dwell times, clean from clean to dirty areas, and terminal clean all surfaces between patients."
      },
      {
        question: "Can you handle large medical facilities in Margate?",
        answer: "Yes, we service medical facilities of all sizes from solo practices to large multi-specialty clinics and urgent care centers."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our Margate medical center for years. Consistent quality and exceptional healthcare compliance.",
      author: "Administrator, Margate Multi-Specialty Clinic"
    }
  },
  {
    id: "miramar",
    name: "Miramar",
    description: "Miramar medical offices rely on our specialized cleaning protocols that eliminate pathogens and maintain the highest infection control standards.",
    faq: [
      {
        question: "What disinfection standards do you follow in Miramar?",
        answer: "We follow EPA, CDC, and OSHA guidelines using hospital-grade disinfectants proven effective against bacteria, viruses, and bloodborne pathogens."
      },
      {
        question: "Do you clean physical therapy offices in Miramar?",
        answer: "Yes, we clean physical therapy, occupational therapy, and rehabilitation facilities with special attention to equipment, treatment areas, and exercise spaces."
      }
    ],
    testimonial: {
      text: "Our Miramar therapy center's cleanliness standards have soared since partnering with Red Rock Cleans. Patients notice the difference!",
      author: "Director, Miramar Physical Therapy & Rehabilitation"
    }
  },
  {
    id: "north-lauderdale",
    name: "North Lauderdale",
    description: "North Lauderdale healthcare facilities trust our thorough medical cleaning to maintain sanitary conditions that protect vulnerable patients.",
    faq: [
      {
        question: "How do you keep North Lauderdale medical offices infection-free?",
        answer: "We use proper disinfection techniques, terminal cleaning protocols, EPA-approved products, and trained staff following healthcare infection control standards."
      },
      {
        question: "What's your response time for North Lauderdale medical emergencies?",
        answer: "We can typically respond to urgent cleaning needs within 24 hours and offer emergency services for biohazard situations."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans understands medical facility cleanliness. Our North Lauderdale clinic has never been safer or more welcoming.",
      author: "Dr. Williams, North Lauderdale Family Health"
    }
  },
  {
    id: "pembroke-pines",
    name: "Pembroke Pines",
    description: "Pembroke Pines healthcare practices benefit from our professional cleaning that creates the sterile, safe environments patients expect.",
    faq: [
      {
        question: "Do you clean dermatology offices in Pembroke Pines?",
        answer: "Yes, we clean dermatology practices, including procedure rooms, laser treatment areas, and cosmetic service spaces with appropriate protocols."
      },
      {
        question: "How do you sanitize waiting areas in Pembroke Pines?",
        answer: "We disinfect all high-touch surfaces, chairs, magazines, toys, door handles, and reception areas using EPA-approved healthcare disinfectants."
      }
    ],
    testimonial: {
      text: "Our Pembroke Pines dermatology practice has become known for cleanliness. Red Rock Cleans delivers medical-grade results every time.",
      author: "Practice Owner, Pembroke Pines Dermatology"
    }
  },
  {
    id: "plantation",
    name: "Plantation",
    description: "Plantation medical facilities depend on our comprehensive healthcare cleaning to ensure every patient enjoys a safe, clean visit.",
    faq: [
      {
        question: "What areas receive special attention in Plantation medical offices?",
        answer: "We focus on exam rooms, procedure areas, waiting rooms, restrooms, sterilization zones, and all high-touch surfaces where pathogens spread."
      },
      {
        question: "Can you clean during Plantation clinic hours?",
        answer: "Yes, we can work during operating hours with minimal disruption or schedule after-hours cleaning based on your practice needs."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans keeps our Plantation medical practice spotless and compliant. Patient retention has improved significantly.",
      author: "Office Manager, Plantation Primary Care"
    }
  },
  {
    id: "southwest-ranches",
    name: "Southwest Ranches",
    description: "Southwest Ranches healthcare providers trust our detailed medical cleaning services that maintain the premium standards patients deserve.",
    faq: [
      {
        question: "How long does medical office cleaning take in Southwest Ranches?",
        answer: "Cleaning time varies by facility size and scope. Most medical offices require 2-4 hours depending on square footage and services needed."
      },
      {
        question: "Do you offer green medical cleaning in Southwest Ranches?",
        answer: "Yes, we offer eco-friendly options using EPA-registered green disinfectants that are effective yet environmentally responsible for healthcare settings."
      }
    ],
    testimonial: {
      text: "Our Southwest Ranches clinic patients love the cleanliness. Red Rock Cleans is professional, reliable, and healthcare-focused.",
      author: "Dr. Anderson, Southwest Ranches Medical Associates"
    }
  },
  {
    id: "sunny-isles-beach",
    name: "Sunny Isles Beach",
    description: "Sunny Isles Beach medical centers rely on our specialized healthcare cleaning that maintains pristine, infection-free environments.",
    faq: [
      {
        question: "How do you handle medical waste in Sunny Isles Beach facilities?",
        answer: "While we handle regular waste removal, we work with your medical waste service provider and follow proper protocols for handling sharps containers and biohazard materials."
      },
      {
        question: "Do you clean optometry offices in Sunny Isles Beach?",
        answer: "Yes, we clean optometry and ophthalmology practices with special attention to exam equipment, optical displays, and patient care areas."
      }
    ],
    testimonial: {
      text: "The coastal environment is challenging for medical equipment. Red Rock Cleans keeps our Sunny Isles Beach practice pristine despite humidity.",
      author: "Dr. Lee, Sunny Isles Beach Eye Center"
    }
  },
  {
    id: "sunrise",
    name: "Sunrise",
    description: "Sunrise healthcare practices benefit from our professional medical cleaning that creates hygienic, welcoming environments that inspire patient confidence.",
    faq: [
      {
        question: "How do you price medical office cleaning in Sunrise?",
        answer: "We provide transparent pricing based on facility size, cleaning frequency, and specific healthcare needs. Most Sunrise practices invest $400-$1,500 per service."
      },
      {
        question: "Do you clean urgent care centers in Sunrise?",
        answer: "Yes, we clean urgent care facilities, walk-in clinics, and emergency care centers following strict infection control and rapid turnaround protocols."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Sunrise urgent care to perfection. Our patient satisfaction scores for cleanliness are consistently excellent.",
      author: "Medical Director, Sunrise Urgent Care"
    }
  },
  {
    id: "tamarac",
    name: "Tamarac",
    description: "Tamarac medical offices trust our systematic healthcare cleaning to ensure consistent compliance standards that patients notice and appreciate.",
    faq: [
      {
        question: "What makes your Tamarac medical office cleaning effective?",
        answer: "We combine EPA-registered disinfectants, healthcare-trained staff, proven infection control protocols, and quality assurance to ensure superior results."
      },
      {
        question: "Can you provide references in Tamarac?",
        answer: "Yes, we can provide references from other medical facilities we serve, demonstrating our track record of healthcare cleaning excellence."
      }
    ],
    testimonial: {
      text: "Our Tamarac medical practice has never been cleaner or more compliant. Red Rock Cleans exceeds healthcare cleaning expectations.",
      author: "Facility Manager, Tamarac Medical Plaza"
    }
  },
  {
    id: "weston",
    name: "Weston",
    description: "Weston's premier medical practices depend on our professional healthcare cleaning to maintain the exceptional standards their patients demand.",
    faq: [
      {
        question: "How do you keep Weston medical offices pathogen-free?",
        answer: "We use hospital-grade disinfectants, follow CDC and OSHA guidelines, perform terminal cleaning between patients, and maintain detailed sanitation protocols."
      },
      {
        question: "Do you provide ongoing support in Weston?",
        answer: "Yes, we offer dedicated account management, regular compliance reviews, and responsive service for all our Weston healthcare clients."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been our Weston medical practice's cleaning partner for years. Their healthcare expertise is consistently excellent.",
      author: "Dr. Rodriguez, Weston Premier Medical Group"
    }
  }
];

const MedicalOfficeCleaningSouthFloridaPage = () => {
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
        <title>Medical Office Cleaning South Florida | Red Rock Cleans</title>
        <meta name="description" content="Specialized medical office cleaning in South Florida. Red Rock Cleans provides HIPAA and OSHA compliant cleaning for clinics and healthcare facilities in Fort Lauderdale, Weston, and beyond." />
        <meta name="keywords" content="medical office cleaning South Florida, medical office cleaning near me, clinic cleaning Fort Lauderdale, dental office cleaning Weston FL, healthcare cleaning South Florida, best medical cleaners South Florida, HIPAA compliant cleaning South Florida, OSHA standards cleaning Broward County, exam room sanitation Fort Lauderdale, terminal cleaning South Florida, medical office cleaning cost South Florida, clinic cleaning prices Fort Lauderdale, what is terminal cleaning South Florida, hire medical cleaners in South Florida" />
        <link rel="canonical" href="https://redrockcleans.com/south-florida/medical-office-cleaning" />
      </Helmet>
      
      <SouthFloridaNavigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/src/assets/hero-commercial.jpg" 
              alt="Professional medical office cleaning service in a South Florida healthcare facility"
              className="w-full h-full object-cover scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                HIPAA & OSHA Compliant Medical Office Cleaning in South Florida
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                For healthcare providers in South Florida, patient safety and trust begin with a visibly clean and thoroughly disinfected environment. Our specialized medical office cleaning services ensure your facility meets the highest standards of hygiene, regulatory compliance, and infection control that your patients deserve and health authorities demand.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="h-14 text-lg px-8" asChild>
                  <Link to="/book-now-southflorida">
                    <Calendar className="w-5 h-5 mr-2" />
                    Get Your Free Quote
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="h-14 text-lg px-8" asChild>
                  <Link to="/contact">
                    <Stethoscope className="w-5 h-5 mr-2" />
                    Contact Us
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
                A Higher Standard of Clean for South Florida Healthcare
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">HIPAA & OSHA Compliance</h3>
                      <p className="text-muted-foreground">
                        Our team is extensively trained in all regulatory standards governing South Florida medical facilities. We strictly adhere to HIPAA privacy requirements, OSHA safety protocols, and CDC infection control guidelines. Every member of our cleaning staff understands patient confidentiality and follows secure cleaning procedures to protect sensitive healthcare information while maintaining the highest standards of facility sanitation.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Microscope className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Advanced Infection Control</h3>
                      <p className="text-muted-foreground">
                        We utilize EPA-approved, hospital-grade disinfectants specifically designed to combat healthcare-associated pathogens including MRSA, C. diff, influenza, and other dangerous microorganisms. Our systematic approach includes proper dwell times, terminal cleaning protocols between patients, and color-coded systems to prevent cross-contamination. Every surface in your medical facility receives the level of disinfection necessary to protect vulnerable patients and staff.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Trained & Certified Staff</h3>
                      <p className="text-muted-foreground">
                        Our South Florida medical cleaning teams undergo specialized training in bloodborne pathogen safety, infection prevention techniques, and cross-contamination protocols. Each team member is certified in healthcare environmental services and stays current with the latest industry standards. We conduct regular training updates to ensure our staff maintains expertise in medical facility cleaning, understands the unique challenges of healthcare environments, and delivers consistent, compliant service.
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
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Sofa className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Waiting Rooms & Reception</h3>
                      <p className="text-muted-foreground">
                        First impressions matter in healthcare. We meticulously disinfect all high-touch surfaces in your waiting areas including door handles, check-in tablets, chairs, magazines, toys, and reception counters. Our cleaning protocols protect both patients and staff by eliminating pathogens before they can spread. We use medical-grade disinfectants safe for all ages while maintaining a welcoming, fresh environment that puts patients at ease from the moment they arrive.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Stethoscope className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Exam & Procedure Rooms</h3>
                      <p className="text-muted-foreground">
                        Terminal cleaning between every patient is our standard. We thoroughly disinfect exam tables, medical equipment, cabinets, countertops, sinks, and all touch points following strict healthcare protocols. Our systematic approach moves from clean to dirty areas, uses appropriate contact times for disinfectants, and ensures complete pathogen elimination. This critical service protects vulnerable patients and maintains the infection-free environment essential for quality healthcare delivery in South Florida.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Droplets className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Restrooms & Common Areas</h3>
                      <p className="text-muted-foreground">
                        Restrooms and staff areas receive intensive sanitation to prevent the spread of germs throughout your medical facility. We deep clean and disinfect all fixtures, floors, walls, door handles, and high-touch surfaces using EPA-registered healthcare disinfectants. Our protocols address South Florida's humidity challenges that can promote bacterial growth. We also maintain staff break rooms, consultation areas, and corridors to ensure a comprehensively clean environment throughout your entire healthcare practice.
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
                    <CountUp end={150} duration={2} />+
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Healthcare Facilities Served</h3>
                  <p className="text-muted-foreground text-sm">
                    Medical offices, clinics, and healthcare centers trust our specialized cleaning services across South Florida
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BadgeCheck className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    <CountUp end={50} duration={2} />+
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Certified Technicians on Staff</h3>
                  <p className="text-muted-foreground text-sm">
                    All trained in bloodborne pathogen safety and healthcare infection control protocols
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ShieldCheck className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
                  <h3 className="text-lg font-semibold mb-2">Pathogen Reduction</h3>
                  <p className="text-muted-foreground text-sm">
                    Our EPA-approved, hospital-grade disinfectants eliminate 99.9% of healthcare pathogens
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
                          <h4 className="font-semibold mb-2">Medical Office Cleaning Services in {city.name}</h4>
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
                          <Link to="/book-now-southflorida">
                            Get Medical Office Cleaning Quote for {city.name}
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
                Other Specialized Commercial Cleaning in South Florida
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <Building2 className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Data Center Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Specialized cleaning for sensitive technology environments
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/south-florida/data-center-cleaning">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <Building className="h-8 w-8 text-primary mx-auto mb-4" />
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
                    <School className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">School Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Safe, thorough cleaning for educational facilities
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/south-florida/school-cleaning">Learn More</Link>
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
                <AccordionItem value="terminal-cleaning" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">What is terminal cleaning in South Florida medical offices?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Terminal cleaning is the thorough, comprehensive disinfection of exam and procedure rooms between patient visits. This critical process involves cleaning and disinfecting all surfaces, equipment, and touchpoints using EPA-registered, hospital-grade disinfectants with proper contact times. We systematically clean from top to bottom and clean to dirty areas, ensuring complete pathogen elimination. Terminal cleaning is essential for preventing healthcare-associated infections and is a standard requirement in medical facilities across South Florida.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="cost" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">How much does medical office cleaning cost in South Florida?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Medical office cleaning costs in South Florida vary based on facility size, number of exam rooms, cleaning frequency, and specific healthcare requirements. Small practices (1-3 exam rooms) typically invest $400-$800 per cleaning, medium practices (4-8 rooms) $800-$1,200, and large multi-specialty clinics $1,200-$2,500+. Most medical facilities benefit from daily or nightly cleaning with terminal cleaning between patients. We provide free, detailed quotes customized to your specific healthcare cleaning needs, square footage, and regulatory compliance requirements.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="hire-medical-cleaners" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">How do I hire medical cleaners in South Florida?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Hiring professional medical cleaners in South Florida starts with finding a company specialized in healthcare facility cleaning. Look for providers with healthcare certifications, HIPAA compliance training, bloodborne pathogen protocols, and EPA-approved disinfectants. Verify they follow OSHA and CDC guidelines and have experience with medical facilities. Contact Red Rock Cleans for a free consultation and customized quote. We'll assess your facility, discuss your specific needs, provide transparent pricing, and create a cleaning schedule that works with your practice operations while ensuring complete regulatory compliance.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="hipaa-compliance" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">How do you ensure HIPAA compliance when cleaning South Florida medical offices?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      All our medical cleaning staff receive comprehensive HIPAA training and sign confidentiality agreements. We implement strict protocols to protect patient privacy including never accessing computers or medical records, maintaining confidentiality of any observed information, securing patient charts and documents, cleaning only when authorized, and following your facility's privacy procedures. Our team understands that patient trust depends on confidentiality, and we take our responsibility to protect healthcare information seriously while delivering thorough, compliant cleaning services throughout your South Florida medical practice.
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
              Ready to Elevate Your Medical Facility's Hygiene Standards?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join South Florida healthcare providers that trust Red Rock Cleans for professional medical office cleaning
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
              <Link to="/book-now-southflorida">Get Your Free Medical Office Cleaning Quote</Link>
            </Button>
          </div>
        </section>

        {/* Image Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <img 
                src="/static/service-products.jpg" 
                alt="A pristine and disinfected medical exam room in a South Florida clinic, cleaned by Red Rock Cleans"
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

export default MedicalOfficeCleaningSouthFloridaPage;


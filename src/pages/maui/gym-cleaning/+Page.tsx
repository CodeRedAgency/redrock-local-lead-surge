import { MauiNavigation } from "@/components/MauiNavigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Dumbbell, ShowerHead, Shield, Bike, Droplets, PersonStanding, ThumbsUp, ShieldX, Trophy, MapPin, Calendar, Home, Stethoscope, ShoppingBag, GraduationCap, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { useTranslation } from 'react-i18next';

const towns = [
  {
    id: "wailea",
    name: "Wailea",
    description: "Wailea fitness centers and health clubs trust our professional gym cleaning services to maintain the pristine, hygienic environments that keep members healthy, satisfied, and coming back.",
    faq: [
      {
        question: "Can you clean our Wailea gym during off-hours?",
        answer: "Yes, we schedule gym cleaning during your facility's closed hours, typically early morning or late evening, to ensure zero disruption to member workouts and optimal cleanliness before opening."
      },
      {
        question: "What disinfectants do you use in Wailea gyms?",
        answer: "We use EPA-approved, anti-viral disinfectants that are effective against bacteria, viruses, and fungi while being safe for fitness equipment and member contact surfaces."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has transformed our Wailea gym's cleanliness standards. Our member satisfaction scores have increased significantly since partnering with them.",
      author: "Manager, Wailea Fitness Club"
    }
  },
  {
    id: "makena",
    name: "Makena",
    description: "Makena gyms rely on our comprehensive cleaning services to eliminate germs, prevent odors, and create the fresh, inviting atmosphere that enhances the member experience.",
    faq: [
      {
        question: "How do you handle equipment cleaning in Makena?",
        answer: "We meticulously disinfect all workout equipment including cardio machines, weight benches, free weights, and yoga mats using approved sanitizers that kill 99.9% of germs without damaging equipment."
      },
      {
        question: "Do you provide emergency cleaning in Makena?",
        answer: "Yes, we offer rapid response cleaning for urgent situations such as spills, contamination events, or pre-inspection deep cleaning."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans' attention to detail in our Makena facility is outstanding. The locker rooms and equipment areas have never looked better.",
      author: "Owner, Makena Athletic Center"
    }
  },
  {
    id: "kihei",
    name: "Kihei",
    description: "Kihei fitness facilities benefit from our specialized gym cleaning protocols that address high-traffic workout areas, locker rooms, and all equipment to ensure member health and safety.",
    faq: [
      {
        question: "What is included in Kihei gym cleaning?",
        answer: "Our service includes equipment disinfection, locker room and shower sanitization, floor cleaning and deodorizing, mirror and glass cleaning, trash removal, and restocking of supplies."
      },
      {
        question: "How often should Kihei gyms schedule cleaning?",
        answer: "We recommend daily cleaning for high-traffic gyms, with weekly deep cleaning of locker rooms and monthly specialized floor care for optimal hygiene and member satisfaction."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans' systematic approach to our Kihei gym has dramatically reduced member complaints and improved our overall reputation.",
      author: "Director, Kihei Health & Fitness"
    }
  },
  {
    id: "kapalua",
    name: "Kapalua",
    description: "Kapalua wellness centers trust our hygienic cleaning services to maintain the luxury standards expected by members while ensuring thorough disinfection of all surfaces.",
    faq: [
      {
        question: "Are your Kapalua gym cleanings eco-friendly?",
        answer: "Yes, we offer green cleaning options using environmentally responsible products that are effective against pathogens while being safe for members and the environment."
      },
      {
        question: "What makes your Kapalua service different?",
        answer: "We specialize in fitness facilities with staff trained in proper equipment disinfection, anti-cross-contamination protocols, and maintaining the premium standards luxury gyms require."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provides the level of cleanliness our Kapalua members expect from a luxury fitness facility. Their professionalism is unmatched.",
      author: "General Manager, Kapalua Wellness Resort"
    }
  },
  {
    id: "kaanapali",
    name: "Ka'anapali",
    description: "Ka'anapali gyms rely on our specialized services to eliminate bacteria, reduce odors, and create the clean, fresh environment that encourages member retention.",
    faq: [
      {
        question: "How do you prevent cross-contamination in Ka'anapali?",
        answer: "We use color-coded cleaning systems, separate equipment for different areas, and follow strict protocols to prevent the spread of germs from locker rooms to workout areas."
      },
      {
        question: "Can you handle large facilities in Ka'anapali?",
        answer: "Yes, we have the staff, equipment, and experience to efficiently clean gyms of all sizes, from boutique studios to large multi-level fitness centers."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has never missed a cleaning at our Ka'anapali facility. Their reliability and thoroughness keep our members happy and healthy.",
      author: "Operations Manager, Ka'anapali Fitness Complex"
    }
  },
  {
    id: "lahaina",
    name: "Lahaina",
    description: "Lahaina fitness centers benefit from our comprehensive cleaning that addresses equipment, floors, locker rooms, and all high-touch surfaces to protect member health.",
    faq: [
      {
        question: "What cleaning methods do you use in Lahaina gyms?",
        answer: "We use hospital-grade disinfectants, HEPA-filtered vacuums, microfiber cleaning systems, and specialized floor care equipment designed for gym environments."
      },
      {
        question: "Can you clean specialized fitness areas?",
        answer: "Yes, we clean all types of fitness spaces including CrossFit boxes, yoga studios, spin rooms, swimming pools, and outdoor training areas."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans' expertise in gym cleaning is evident in our Lahaina facility. Members constantly compliment us on how clean and fresh everything is.",
      author: "Facility Director, Lahaina Fitness Studio"
    }
  },
  {
    id: "spreckelsville",
    name: "Spreckelsville",
    description: "Spreckelsville fitness facilities trust our precision cleaning services to maintain the spotless, hygienic environment that supports member health and fitness goals.",
    faq: [
      {
        question: "How do you ensure quality in Spreckelsville?",
        answer: "We use detailed checklists, conduct quality inspections, provide photographic documentation, and maintain regular communication to ensure consistent, exceptional service."
      },
      {
        question: "What are your rates for Spreckelsville gyms?",
        answer: "Pricing is based on facility size, cleaning frequency, and specific services required. Contact us for a customized quote tailored to your gym's needs."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been instrumental in maintaining our Spreckelsville gym's high standards. Their systematic approach is exactly what we needed.",
      author: "Owner, Spreckelsville Athletic Club"
    }
  },
  {
    id: "paia",
    name: "Pa'ia",
    description: "Pa'ia gyms rely on our expert cleaning services to eliminate germs, reduce equipment wear, and create the inviting atmosphere that keeps members engaged and motivated.",
    faq: [
      {
        question: "Do you serve small gyms in Pa'ia?",
        answer: "Yes, we service fitness facilities of all sizes, from small boutique studios to large multi-purpose gyms, with the same level of expertise and attention to detail."
      },
      {
        question: "What safety protocols do you follow in Pa'ia?",
        answer: "All technicians follow strict hygiene protocols, wear appropriate PPE, use EPA-approved disinfectants, and are trained in proper gym equipment cleaning procedures."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans transformed our Pa'ia gym from a cleaning concern to a competitive advantage. Member retention has improved significantly.",
      author: "Manager, Pa'ia CrossFit & Fitness"
    }
  },
  {
    id: "kuau",
    name: "Kuau",
    description: "Kuau fitness centers benefit from our specialized cleaning protocols designed to eliminate pathogens while preserving equipment and creating the fresh environment members expect.",
    faq: [
      {
        question: "How quickly can you respond in Kuau?",
        answer: "We offer same-day emergency cleaning for urgent situations and can schedule routine gym maintenance within 24-48 hours of initial contact."
      },
      {
        question: "Do you provide cleaning verification in Kuau?",
        answer: "Yes, we provide service reports, before/after photos, and ATP testing verification to confirm thorough disinfection and cleanliness."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans' proactive approach to our Kuau facility has reduced sick member complaints to nearly zero. They're true gym cleaning professionals.",
      author: "Director, Kuau Health & Performance"
    }
  },
  {
    id: "haiku",
    name: "Ha'iku",
    description: "Ha'iku gyms trust our comprehensive cleaning services to maintain the hygienic, odor-free environment that enhances the workout experience and supports member well-being.",
    faq: [
      {
        question: "What makes Ha'iku gyms unique?",
        answer: "Ha'iku's outdoor-focused fitness culture requires specialized cleaning for both indoor and outdoor training areas. We customize our protocols to address these unique needs."
      },
      {
        question: "Can you train our staff in Ha'iku?",
        answer: "Yes, we offer training sessions on basic gym hygiene, spot cleaning between professional services, and proper equipment maintenance to support ongoing cleanliness."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been essential to our Ha'iku gym's success. Their understanding of fitness facility cleaning is exceptional.",
      author: "Owner, Ha'iku Functional Fitness"
    }
  }
];

const GymCleaningMauiPage = () => {
  const { t } = useTranslation();
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
        <title>{t(`commercialServices.maui.gym.title`, { defaultValue: "Gym Cleaning Maui | Red Rock Cleans" })}</title>
        <meta name="description" content={t(`commercialServices.maui.gym.description`, { defaultValue: "Gym cleaning services in Maui. Sanitized equipment & facilities for Maui fitness centers. Professional Hawaiian service today!" })} />
      </Helmet>
      
      <MauiNavigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/src/assets/hero-commercial.jpg" 
              alt="Professional gym cleaning service at a Maui fitness center"
              className="w-full h-full object-cover scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                Hygienic & Professional Gym Cleaning on Maui
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                A visibly clean and thoroughly disinfected gym is paramount for member health, satisfaction, and retention in the competitive Maui fitness market. Our specialized cleaning services eliminate bacteria and viruses from equipment, locker rooms, and all high-touch surfaces—creating the fresh, hygienic environment that keeps your members motivated, healthy, and loyal to your facility.
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

        {/* Creating a Healthier Workout Environment Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Creating a Healthier Workout Environment
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Dumbbell className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Germ-Free Equipment</h3>
                      <p className="text-muted-foreground">
                        Meticulous disinfection of all workout machines, weights, and high-touch surfaces using hospital-grade, anti-viral solutions. We eliminate 99.9% of bacteria and viruses to protect your members' health and give them confidence in your facility's hygiene standards.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <ShowerHead className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Fresh & Inviting Spaces</h3>
                      <p className="text-muted-foreground">
                        Clean locker rooms, showers, and common areas enhance the member experience and create a positive first impression. Our deep cleaning and deodorizing services eliminate odors, prevent mold and mildew, and maintain the premium atmosphere your members expect.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Preventing Cross-Contamination</h3>
                      <p className="text-muted-foreground">
                        Our protocols are specifically designed to stop the spread of bacteria and viruses in high-traffic zones. We use color-coded systems, separate equipment for different areas, and follow strict procedures to prevent contamination between locker rooms, equipment areas, and common spaces.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Comprehensive Gym Cleaning Checklist Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Our Comprehensive Gym Cleaning Checklist
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Bike className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Workout & Equipment Areas</h3>
                      <p className="text-muted-foreground">
                        Sanitizing all fitness equipment including cardio machines, weight benches, free weights, resistance equipment, yoga mats, and exercise balls. We clean touchscreens, handles, grips, and all member contact points to ensure complete hygiene.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Droplets className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Locker Rooms & Showers</h3>
                      <p className="text-muted-foreground">
                        Deep cleaning, sanitizing, and deodorizing to prevent mold, mildew, and odors. We scrub tiles, clean drains, disinfect lockers and benches, restock supplies, and maintain the fresh, clean environment that members appreciate after their workouts.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <PersonStanding className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Group Fitness Studios</h3>
                      <p className="text-muted-foreground">
                        Cleaning specialized flooring, mirrors, sound systems, and props used in yoga, spin, Pilates, and group fitness classes. We ensure studios are pristine and ready for the next class, maintaining the professional atmosphere instructors and members expect.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Red Rock Cleans Difference Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                The Red Rock Cleans Difference for Maui Gyms
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ThumbsUp className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    <CountUp end={95} duration={2} />%
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Member Satisfaction Score</h3>
                  <p className="text-muted-foreground text-sm">
                    Gyms report dramatic increases in member satisfaction after partnering with us
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ShieldX className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    99.9%
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Germ Reduction</h3>
                  <p className="text-muted-foreground text-sm">
                    Our EPA-approved disinfectants eliminate bacteria, viruses, and fungi
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Trophy className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    #1
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Top-Rated Cleanliness</h3>
                  <p className="text-muted-foreground text-sm">
                    Consistently ranked highest for gym cleaning quality on Maui
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
                          <h4 className="font-semibold mb-2">Local Gym Cleaning Services</h4>
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
                            Get Gym Cleaning Quote for {town.name}
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
                    <ShoppingBag className="h-8 w-8 text-primary mx-auto mb-4" />
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
                    <GraduationCap className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">School Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Safe and healthy cleaning services for educational facilities
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
                <AccordionItem value="equipment-safety" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">Are your cleaning products safe for gym equipment?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Yes, we use EPA-approved disinfectants that are specifically formulated to kill 99.9% of bacteria and viruses while being safe for all types of fitness equipment. Our products won't damage surfaces, corrode metals, or leave harmful residues that could affect member safety or equipment longevity.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="schedule" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">Can you clean during our gym's operating hours?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      We typically recommend cleaning during closed hours for the most thorough service, but we can accommodate cleaning during operating hours if needed. We use efficient methods and proper signage to minimize disruption to members while maintaining safety. Most gyms prefer early morning or late evening cleaning for optimal results.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="checklist" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">What's included in your gym cleaning checklist?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Our comprehensive gym cleaning includes: equipment disinfection (cardio machines, weights, benches), locker room and shower deep cleaning, floor care and sanitization, mirror and glass cleaning, restroom sanitization, trash removal and restocking, deodorizing, and specialized cleaning for group fitness studios. We customize our checklist based on your facility's specific needs.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="cost" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">What is the cost of gym cleaning on Maui?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Gym cleaning costs vary based on facility size, cleaning frequency, specific services required, and the number of locker rooms and specialized areas. We provide transparent, competitive pricing with customized quotes for your facility. Most gyms find our services to be a valuable investment that improves member satisfaction and retention. Contact us for a free assessment and detailed proposal.
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
              Ready to Elevate Your Gym's Cleanliness Standards?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join Maui's leading fitness centers that trust Red Rock Cleans for professional gym cleaning
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
              <Link to="/commercial-quote?location=maui">Get Your Free Gym Cleaning Assessment</Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default GymCleaningMauiPage;

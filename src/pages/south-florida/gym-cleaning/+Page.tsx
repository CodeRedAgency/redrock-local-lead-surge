import { SouthFloridaNavigation } from "@/components/SouthFloridaNavigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Dumbbell, ShowerHead, Shield, Bike, Droplets, User, Users, ThumbsUp, ShieldCheck, Trophy, MapPin, Calendar, Heart, ShoppingBag, GraduationCap, Phone, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import CountUp from "react-countup";

const cities = [
  {
    id: "aventura",
    name: "Aventura",
    description: "Aventura fitness centers trust our professional gym cleaning to maintain hygienic workout environments that keep members healthy and satisfied.",
    faq: [
      {
        question: "How often should Aventura gyms be cleaned?",
        answer: "We recommend daily cleaning for high-traffic gyms with deep sanitization of equipment, locker rooms, and showers to ensure member safety and satisfaction."
      },
      {
        question: "Do you use gym-safe cleaning products in Aventura?",
        answer: "Yes, we use EPA-registered disinfectants that are effective against bacteria and viruses yet safe for fitness equipment and surfaces."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has transformed our Aventura gym. Member satisfaction has increased dramatically since we started their service.",
      author: "Fitness Director, Aventura Health Club"
    }
  },
  {
    id: "cooper-city",
    name: "Cooper City",
    description: "Cooper City health clubs rely on our comprehensive cleaning services to create safe, inviting environments that members love to visit.",
    faq: [
      {
        question: "What's included in Cooper City gym cleaning?",
        answer: "Our service includes equipment sanitization, locker room deep cleaning, shower disinfection, floor care, mirror cleaning, and high-touch surface sanitization."
      },
      {
        question: "Can you clean during Cooper City gym hours?",
        answer: "Yes, we offer flexible scheduling including during operating hours, after-hours, and early morning cleaning to suit your needs."
      }
    ],
    testimonial: {
      text: "Our Cooper City fitness center has never been cleaner. Red Rock Cleans understands the unique needs of gym environments.",
      author: "General Manager, Cooper City Fitness"
    }
  },
  {
    id: "dania-beach",
    name: "Dania Beach",
    description: "Dania Beach gyms benefit from our specialized cleaning protocols that combat South Florida's humidity while maintaining fresh, hygienic facilities.",
    faq: [
      {
        question: "How do you prevent odors in Dania Beach gyms?",
        answer: "We use professional deodorizers, deep clean locker rooms and showers, and address moisture issues to prevent mold, mildew, and unpleasant odors."
      },
      {
        question: "Do you disinfect all equipment in Dania Beach?",
        answer: "Yes, we thoroughly sanitize all cardio machines, weight equipment, benches, mats, and any surface members touch during their workouts."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans keeps our Dania Beach gym spotless and odor-free. Our members consistently comment on the cleanliness.",
      author: "Owner, Dania Beach Athletic Club"
    }
  },
  {
    id: "davie",
    name: "Davie",
    description: "Davie fitness facilities depend on our thorough gym cleaning to maintain the high standards members expect in South Florida's competitive fitness market.",
    faq: [
      {
        question: "What's the cost of gym cleaning in Davie?",
        answer: "Costs vary based on facility size and frequency. Most Davie gyms invest $300-$1,500 per cleaning. We provide free customized quotes."
      },
      {
        question: "Do you clean group fitness studios in Davie?",
        answer: "Yes, we clean yoga studios, spin rooms, and group fitness areas including specialized flooring, mirrors, props, and sound equipment."
      }
    ],
    testimonial: {
      text: "Our Davie fitness center's retention rate has improved since partnering with Red Rock Cleans. Members love the cleanliness.",
      author: "Operations Manager, Davie Fitness Solutions"
    }
  },
  {
    id: "fort-lauderdale",
    name: "Fort Lauderdale",
    description: "Fort Lauderdale's premier gyms trust our hygienic cleaning services to protect member health and maintain their competitive edge in the fitness industry.",
    faq: [
      {
        question: "How do you handle Fort Lauderdale's humidity issues?",
        answer: "We use anti-microbial treatments, ensure proper ventilation during cleaning, and address moisture-prone areas to prevent mold and bacteria growth."
      },
      {
        question: "Can you provide emergency cleaning in Fort Lauderdale?",
        answer: "Yes, we offer rapid response services for unexpected situations, health concerns, or urgent cleaning needs at your fitness facility."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Fort Lauderdale gym to the highest standards. Their attention to detail is exceptional.",
      author: "Facility Director, Fort Lauderdale Elite Fitness"
    }
  },
  {
    id: "hallandale-beach",
    name: "Hallandale Beach",
    description: "Hallandale Beach health clubs benefit from our comprehensive cleaning that ensures every workout surface is sanitized and member-ready.",
    faq: [
      {
        question: "Do you clean CrossFit gyms in Hallandale Beach?",
        answer: "Yes, we clean all types of fitness facilities including CrossFit boxes, boutique studios, traditional gyms, and specialized training centers."
      },
      {
        question: "How do you prevent cross-contamination in Hallandale Beach?",
        answer: "We use color-coded cleaning systems, separate equipment for different areas, and follow strict protocols to prevent spreading bacteria between zones."
      }
    ],
    testimonial: {
      text: "Our Hallandale Beach gym members constantly praise the cleanliness. Red Rock Cleans is worth every penny.",
      author: "Owner, Hallandale Beach Strength & Conditioning"
    }
  },
  {
    id: "hollywood",
    name: "Hollywood",
    description: "Hollywood fitness centers rely on our professional cleaning to create welcoming, hygienic environments that drive member loyalty and referrals.",
    faq: [
      {
        question: "What makes gym cleaning different in Hollywood?",
        answer: "We understand South Florida's climate challenges and use specialized protocols to combat humidity, bacteria, and odor issues unique to coastal gyms."
      },
      {
        question: "Do you clean saunas and steam rooms in Hollywood?",
        answer: "Yes, we provide specialized cleaning for saunas, steam rooms, and spa amenities using appropriate products and techniques for these environments."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has elevated our Hollywood fitness center's reputation. Members love our gym's cleanliness.",
      author: "General Manager, Hollywood Fitness Hub"
    }
  },
  {
    id: "las-olas",
    name: "Las Olas",
    description: "Las Olas boutique fitness studios trust our detailed cleaning services to maintain the premium experience their discerning members expect.",
    faq: [
      {
        question: "Can you clean boutique studios in Las Olas?",
        answer: "Yes, we specialize in boutique fitness studios including Pilates, yoga, barre, cycling, and other specialized workout environments."
      },
      {
        question: "How do you clean sensitive equipment in Las Olas?",
        answer: "We use appropriate cleaning solutions for each equipment type, following manufacturer guidelines to protect your investment while ensuring sanitation."
      }
    ],
    testimonial: {
      text: "Our Las Olas studio shines thanks to Red Rock Cleans. They understand the needs of premium fitness facilities.",
      author: "Studio Owner, Las Olas Wellness Center"
    }
  },
  {
    id: "lauderdale-lakes",
    name: "Lauderdale Lakes",
    description: "Lauderdale Lakes gyms benefit from our systematic cleaning approach that ensures consistent hygiene standards across all facility areas.",
    faq: [
      {
        question: "Do you clean 24-hour gyms in Lauderdale Lakes?",
        answer: "Yes, we provide flexible scheduling for 24-hour facilities, working during low-traffic periods to minimize disruption to members."
      },
      {
        question: "How do you ensure quality in Lauderdale Lakes?",
        answer: "We use detailed checklists, conduct regular inspections, and maintain open communication with management to ensure consistent excellence."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans keeps our Lauderdale Lakes gym fresh and clean around the clock. Reliable and professional service.",
      author: "Facility Manager, Lauderdale Lakes 24/7 Fitness"
    }
  },
  {
    id: "lauderhill",
    name: "Lauderhill",
    description: "Lauderhill health clubs trust our professional gym cleaning to protect member health and maintain the pristine conditions that drive retention.",
    faq: [
      {
        question: "What gym cleaning checklist do you follow in Lauderhill?",
        answer: "We clean equipment, locker rooms, showers, floors, mirrors, cardio areas, weight zones, group studios, reception, and all high-touch surfaces."
      },
      {
        question: "Do you provide odor elimination in Lauderhill?",
        answer: "Yes, we address odor sources through deep cleaning, proper ventilation, and professional deodorization treatments."
      }
    ],
    testimonial: {
      text: "Our Lauderhill fitness center's cleanliness is a major selling point thanks to Red Rock Cleans. Members notice the difference.",
      author: "Sales Director, Lauderhill Athletic Center"
    }
  },
  {
    id: "margate",
    name: "Margate",
    description: "Margate fitness facilities depend on our comprehensive cleaning services that create healthy workout environments members trust.",
    faq: [
      {
        question: "How often do you clean locker rooms in Margate?",
        answer: "We recommend daily locker room cleaning for gyms with multiple deep cleans per week to maintain hygiene in these high-moisture areas."
      },
      {
        question: "Can you handle large Margate facilities?",
        answer: "Yes, we service gyms of all sizes from boutique studios to large multi-level fitness complexes with complete facility coverage."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our Margate gym for years. Consistent quality and exceptional service.",
      author: "Owner, Margate Fitness Complex"
    }
  },
  {
    id: "miramar",
    name: "Miramar",
    description: "Miramar gyms rely on our specialized cleaning protocols that eliminate germs and create inviting environments that members love.",
    faq: [
      {
        question: "What disinfectants do you use in Miramar gyms?",
        answer: "We use EPA-registered, hospital-grade disinfectants that are effective against viruses and bacteria yet safe for equipment and members."
      },
      {
        question: "Do you clean yoga studios in Miramar?",
        answer: "Yes, we clean yoga and Pilates studios with special attention to mats, props, flooring, and the serene atmosphere these spaces require."
      }
    ],
    testimonial: {
      text: "Our Miramar gym's member satisfaction scores have soared since partnering with Red Rock Cleans. Highly recommended!",
      author: "General Manager, Miramar Wellness Club"
    }
  },
  {
    id: "north-lauderdale",
    name: "North Lauderdale",
    description: "North Lauderdale fitness centers trust our thorough gym cleaning to maintain sanitary conditions that protect member health and satisfaction.",
    faq: [
      {
        question: "How do you keep North Lauderdale gyms fresh?",
        answer: "We deep clean all areas, use professional air fresheners, address moisture sources, and ensure proper cleaning of high-odor areas."
      },
      {
        question: "What's your response time for North Lauderdale?",
        answer: "We can typically respond to cleaning needs within 24 hours and offer emergency services for urgent situations."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans understands gym cleanliness. Our North Lauderdale facility has never looked or smelled better.",
      author: "Operations Chief, North Lauderdale Fitness"
    }
  },
  {
    id: "pembroke-pines",
    name: "Pembroke Pines",
    description: "Pembroke Pines health clubs benefit from our professional cleaning that creates the hygienic environments members demand in today's fitness industry.",
    faq: [
      {
        question: "Do you clean pools and spas in Pembroke Pines?",
        answer: "While we don't handle chemical treatment, we clean pool decks, spa surrounds, and related facilities as part of comprehensive gym cleaning."
      },
      {
        question: "How do you sanitize equipment in Pembroke Pines?",
        answer: "We use appropriate disinfectants for each equipment type, ensuring thorough coverage of all touchpoints while protecting finishes."
      }
    ],
    testimonial: {
      text: "Our Pembroke Pines gym has become known for cleanliness. Red Rock Cleans delivers exceptional results every time.",
      author: "Facility Director, Pembroke Pines Athletic Club"
    }
  },
  {
    id: "plantation",
    name: "Plantation",
    description: "Plantation fitness facilities depend on our comprehensive gym cleaning to ensure every member enjoys a clean, safe workout experience.",
    faq: [
      {
        question: "What areas receive special attention in Plantation?",
        answer: "We focus on high-touch areas, locker rooms, showers, equipment, and any surface where bacteria and viruses commonly spread."
      },
      {
        question: "Can you clean during Plantation gym hours?",
        answer: "Yes, we can work during operating hours with minimal disruption or schedule after-hours cleaning based on your preference."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans keeps our Plantation fitness center spotless. Member retention has improved since we started their service.",
      author: "Owner, Plantation Health & Fitness"
    }
  },
  {
    id: "southwest-ranches",
    name: "Southwest Ranches",
    description: "Southwest Ranches gyms trust our detailed cleaning services to maintain the premium standards their members expect and deserve.",
    faq: [
      {
        question: "How long does gym cleaning take in Southwest Ranches?",
        answer: "Cleaning time varies by facility size and scope. Most gyms require 2-6 hours depending on square footage and services needed."
      },
      {
        question: "Do you offer green cleaning in Southwest Ranches?",
        answer: "Yes, we offer eco-friendly cleaning options using green-certified products that are effective yet environmentally responsible."
      }
    ],
    testimonial: {
      text: "Our Southwest Ranches gym members love the cleanliness. Red Rock Cleans is professional, reliable, and thorough.",
      author: "Manager, Southwest Ranches Fitness Studio"
    }
  },
  {
    id: "sunny-isles-beach",
    name: "Sunny Isles Beach",
    description: "Sunny Isles Beach fitness centers rely on our specialized cleaning that combats coastal humidity and maintains pristine workout environments.",
    faq: [
      {
        question: "How do you handle salt air in Sunny Isles Beach gyms?",
        answer: "We use corrosion-resistant methods and appropriate products to protect equipment while addressing the unique challenges of coastal facilities."
      },
      {
        question: "What's included in locker room cleaning in Sunny Isles Beach?",
        answer: "We deep clean showers, toilets, sinks, floors, lockers, benches, and all surfaces, plus deodorization and moisture control."
      }
    ],
    testimonial: {
      text: "The coastal environment is tough on our Sunny Isles Beach gym. Red Rock Cleans keeps everything pristine despite the challenges.",
      author: "Owner, Sunny Isles Beach Fitness Center"
    }
  },
  {
    id: "sunrise",
    name: "Sunrise",
    description: "Sunrise health clubs benefit from our professional gym cleaning that creates the hygienic, inviting environments that drive member satisfaction.",
    faq: [
      {
        question: "How do you price gym cleaning in Sunrise?",
        answer: "We provide transparent pricing based on facility size, cleaning frequency, and specific needs. Most Sunrise gyms invest $300-$1,500 per service."
      },
      {
        question: "Do you clean boxing gyms in Sunrise?",
        answer: "Yes, we clean all fitness facility types including boxing gyms, MMA studios, and combat sports training centers with appropriate protocols."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Sunrise gym to perfection. Our members consistently rate cleanliness as a top feature.",
      author: "General Manager, Sunrise Combat & Fitness"
    }
  },
  {
    id: "tamarac",
    name: "Tamarac",
    description: "Tamarac fitness facilities trust our systematic gym cleaning to ensure consistent hygiene standards that members notice and appreciate.",
    faq: [
      {
        question: "What makes your Tamarac gym cleaning effective?",
        answer: "We combine EPA-registered disinfectants, proven protocols, trained staff, and quality control measures to ensure superior results."
      },
      {
        question: "Can you provide references in Tamarac?",
        answer: "Yes, we can provide references from other fitness facilities we serve, demonstrating our track record of excellence."
      }
    ],
    testimonial: {
      text: "Our Tamarac fitness center has never been cleaner or more welcoming. Red Rock Cleans exceeds expectations.",
      author: "Facility Manager, Tamarac Wellness Center"
    }
  },
  {
    id: "weston",
    name: "Weston",
    description: "Weston's premier gyms depend on our professional cleaning services to maintain the exceptional standards their discerning members demand.",
    faq: [
      {
        question: "How do you keep Weston gyms germ-free?",
        answer: "We use hospital-grade disinfectants, follow CDC guidelines, clean high-touch surfaces frequently, and maintain detailed sanitation protocols."
      },
      {
        question: "Do you provide ongoing support in Weston?",
        answer: "Yes, we offer dedicated account management, regular quality reviews, and responsive service for all our Weston gym clients."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been our Weston gym's cleaning partner for years. Their service is consistently excellent and reliable.",
      author: "Owner, Weston Premium Fitness"
    }
  }
];

const GymCleaningSouthFloridaPage = () => {
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
        <title>Gym Cleaning South Florida | Red Rock Cleans</title>
        <meta name="description" content="Gym cleaning services in South Florida. Sanitized equipment & facilities for Fort Lauderdale & Weston fitness centers!" />
        <meta name="keywords" content="gym cleaning South Florida, gym cleaning near me, fitness center cleaning South Florida, health club sanitation Fort Lauderdale, gym disinfection Weston FL, professional gym cleaners South Florida, equipment disinfection Fort Lauderdale, locker room cleaning Broward County, anti-viral gym cleaning South Florida, gym cleaning cost South Florida, commercial gym cleaning prices Fort Lauderdale, gym cleaning checklist South Florida, how to keep a gym clean South Florida" />
        <link rel="canonical" href="https://redrockcleans.com/south-florida/gym-cleaning" />
      </Helmet>
      
      <SouthFloridaNavigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/src/assets/hero-commercial.jpg" 
              alt="Professional gym cleaning service in a South Florida fitness center"
              className="w-full h-full object-cover scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                Hygienic & Professional Gym Cleaning in South Florida
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                In South Florida's competitive fitness market, a visibly clean and thoroughly disinfected gym is paramount for member health, satisfaction, and retention. Our specialized gym cleaning services ensure every piece of equipment, locker room, and workout area meets the highest hygiene standards, creating the safe, inviting environment your members expect and deserve.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="h-14 text-lg px-8" asChild>
                  <a href="tel:+19544698881">
                    <Phone className="w-5 h-5 mr-2" />
                    Call (954) 469-8881
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="h-14 text-lg px-8" asChild>
                  <Link to="/commercial-quote?location=south-florida">
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
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Dumbbell className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Germ-Free Equipment</h3>
                      <p className="text-muted-foreground">
                        Our meticulous disinfection process targets all workout machines, weights, benches, and high-touch surfaces. Using EPA-registered, hospital-grade disinfectants, we eliminate bacteria, viruses, and fungi that can spread between members, ensuring every piece of equipment is safe and hygienic for the next user.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <ShowerHead className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Fresh & Inviting Spaces</h3>
                      <p className="text-muted-foreground">
                        Clean locker rooms, showers, and common areas are essential to the member experience. We deep clean these facilities to eliminate odors, prevent mold and mildew growth common in South Florida's humidity, and create the fresh, welcoming atmosphere that keeps members coming back and referring friends.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Preventing Cross-Contamination</h3>
                      <p className="text-muted-foreground">
                        Our protocols are specifically designed to stop the spread of bacteria and viruses in high-traffic zones. We use color-coded cleaning systems, separate equipment for different areas, and follow strict sanitation procedures to prevent cross-contamination and protect your members' health throughout your South Florida facility.
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
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Bike className="h-10 w-10 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-3">Workout & Equipment Areas</h3>
                      <p className="text-muted-foreground text-sm">
                        Comprehensive sanitization of all fitness equipment including cardio machines, weight equipment, benches, mats, resistance bands, and any surface members contact during workouts.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Droplets className="h-10 w-10 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-3">Locker Rooms & Showers</h3>
                      <p className="text-muted-foreground text-sm">
                        Deep cleaning, sanitizing, and deodorizing to prevent mold, mildew, and odors common in South Florida's humid climate. Complete disinfection of showers, toilets, sinks, lockers, and benches.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <User className="h-10 w-10 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-3">Group Fitness Studios</h3>
                      <p className="text-muted-foreground text-sm">
                        Specialized cleaning of yoga, spin, and group fitness studios including hardwood floors, mirrors, props, equipment, and sound systems with appropriate products for each surface type.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Users className="h-10 w-10 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-3">Reception & High-Traffic Zones</h3>
                      <p className="text-muted-foreground text-sm">
                        Maintaining a sparkling first impression with thorough cleaning of entrance areas, front desks, waiting areas, and all high-touch surfaces that greet your members.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* The Red Rock Cleans Difference Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                The Red Rock Cleans Difference for South Florida Gyms
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
                    Gyms using our services report higher member satisfaction with cleanliness
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ShieldCheck className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
                  <h3 className="text-lg font-semibold mb-2">Germ Reduction</h3>
                  <p className="text-muted-foreground text-sm">
                    Our EPA-registered disinfectants eliminate 99.9% of bacteria and viruses
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Trophy className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    <CountUp end={100} duration={2} />+
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Top-Rated Cleanliness</h3>
                  <p className="text-muted-foreground text-sm">
                    South Florida fitness centers trust our gym cleaning expertise
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
                          <h4 className="font-semibold mb-2">Gym Cleaning Services in {city.name}</h4>
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
                          <Link to="/commercial-quote?location=south-florida">
                            Get Gym Cleaning Quote for {city.name}
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
                    <Heart className="h-8 w-8 text-primary mx-auto mb-4" />
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
                    <ShoppingBag className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Retail Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Professional cleaning for retail stores and shopping centers
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/south-florida/retail-cleaning">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <GraduationCap className="h-8 w-8 text-primary mx-auto mb-4" />
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
                <AccordionItem value="gym-cleaning-checklist" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">What's on a gym cleaning checklist in South Florida?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Our comprehensive gym cleaning checklist includes: disinfection of all cardio and weight equipment, sanitization of benches, mats, and accessories, deep cleaning of locker rooms and showers, floor cleaning and mopping, mirror and glass cleaning, reception and common area maintenance, high-touch surface sanitization (door handles, light switches, water fountains), odor elimination and air freshener application, trash removal, and restocking of supplies. We also address South Florida-specific concerns like humidity control and mold prevention.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="cost" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">How much does gym cleaning cost in South Florida?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Gym cleaning costs in South Florida vary based on facility size, equipment quantity, and cleaning frequency. Small boutique studios typically invest $300-$600 per cleaning, medium-sized gyms $600-$1,200, and large fitness complexes $1,200-$2,500+. Most gyms benefit from daily or nightly cleaning with periodic deep cleaning. We provide free, customized quotes based on your specific needs, square footage, and service requirements.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="keep-clean" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">How to keep a gym clean in South Florida?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Keeping a South Florida gym clean requires: professional daily cleaning service to handle high traffic and humidity, EPA-registered disinfectants for equipment and high-touch surfaces, proper ventilation to prevent moisture buildup, regular deep cleaning of locker rooms and showers, immediate attention to spills and moisture, providing cleaning wipes for member use between sets, scheduled equipment maintenance and cleaning, air quality management and deodorization, and staff training on cleanliness standards. Our professional service handles all these elements systematically.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="anti-viral" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">Do you provide anti-viral gym cleaning in South Florida?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Yes, we provide comprehensive anti-viral gym cleaning services using EPA-registered disinfectants proven effective against viruses including COVID-19, influenza, and other pathogens. Our protocols include thorough disinfection of all equipment, high-touch surfaces, and common areas. We follow CDC guidelines and use hospital-grade products that eliminate 99.9% of viruses and bacteria while being safe for gym equipment and members. This is especially important in South Florida's year-round fitness season.
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
              Ready to Elevate Your Gym's Hygiene Standards?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join South Florida fitness centers that trust Red Rock Cleans for professional gym cleaning services
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
              <Link to="/commercial-quote">Get Your Free Gym Cleaning Quote</Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default GymCleaningSouthFloridaPage;


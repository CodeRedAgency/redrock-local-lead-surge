import { ColumbusNavigation } from "@/components/ColumbusNavigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Dumbbell, ShowerHead, Shield, Bike, Droplets, PersonStanding, Users, ThumbsUp, ShieldX, Trophy, Briefcase, Package, GraduationCap, Phone, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";

const cities = [
  {
    id: "dublin",
    name: "Dublin",
    description: "Dublin's thriving fitness community trusts our professional gym cleaning services to maintain hygienic workout environments that keep members healthy, satisfied, and coming back to their favorite health clubs and fitness centers.",
    faq: [
      {
        question: "How often should Dublin gyms be professionally cleaned?",
        answer: "Most Dublin fitness centers benefit from daily cleaning with deep cleaning services weekly or bi-weekly, depending on member traffic and facility size."
      },
      {
        question: "Do you clean all gym equipment in Dublin?",
        answer: "Yes, we sanitize all workout equipment including cardio machines, weight equipment, benches, mats, and high-touch surfaces throughout your Dublin gym."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has transformed our Dublin gym's cleanliness standards. Member feedback has been overwhelmingly positive since we started their service.",
      author: "Owner, Dublin Fitness Center"
    }
  },
  {
    id: "upper-arlington",
    name: "Upper Arlington",
    description: "Upper Arlington fitness facilities rely on our meticulous gym cleaning that combines thorough equipment disinfection with inviting locker room maintenance, creating the premium experience members expect from their health clubs.",
    faq: [
      {
        question: "What disinfectants do you use in Upper Arlington gyms?",
        answer: "We use EPA-registered, anti-viral disinfectants that are effective against bacteria and viruses while being safe for gym equipment and member health in Upper Arlington facilities."
      },
      {
        question: "Can you clean during Upper Arlington gym operating hours?",
        answer: "Yes, we can schedule cleaning during operating hours, between peak times, or after-hours to minimize disruption to your Upper Arlington members' workouts."
      }
    ],
    testimonial: {
      text: "Our Upper Arlington members constantly compliment the cleanliness of our facility. Red Rock Cleans is an essential partner in our success.",
      author: "Manager, Upper Arlington Health Club"
    }
  },
  {
    id: "powell",
    name: "Powell",
    description: "Powell gyms depend on our comprehensive cleaning services that maintain fresh, hygienic workout spaces where members feel confident in the cleanliness of equipment, locker rooms, and common areas.",
    faq: [
      {
        question: "Do you clean yoga studios in Powell gyms?",
        answer: "Yes, we provide specialized cleaning for yoga studios, Pilates rooms, and group fitness spaces including floor care and prop sanitization in Powell facilities."
      },
      {
        question: "How do you handle Powell gym locker rooms?",
        answer: "We deep clean and sanitize all locker room surfaces, showers, toilets, and floors, using specialized products to prevent mold, mildew, and odors in Powell gyms."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans' attention to detail in our Powell gym is impressive. From equipment to locker rooms, everything sparkles.",
      author: "Director, Powell Fitness Studio"
    }
  },
  {
    id: "lewis-center",
    name: "Lewis Center",
    description: "Lewis Center fitness centers trust our professional gym cleaning to create welcoming environments that attract and retain members through consistently high standards of cleanliness and hygiene.",
    faq: [
      {
        question: "What areas do you clean in Lewis Center gyms?",
        answer: "We clean all areas including workout floors, equipment, cardio zones, weight rooms, locker rooms, showers, group fitness studios, reception areas, and common spaces in Lewis Center facilities."
      },
      {
        question: "Are your cleaning products safe for Lewis Center gym members?",
        answer: "Yes, we use gym-safe disinfectants that are effective against germs while being safe for members with allergies or sensitivities in Lewis Center fitness centers."
      }
    ],
    testimonial: {
      text: "Our Lewis Center gym has never been cleaner. Red Rock Cleans understands the importance of hygiene in a fitness environment.",
      author: "Owner, Lewis Center CrossFit"
    }
  },
  {
    id: "worthington",
    name: "Worthington",
    description: "Worthington health clubs benefit from our systematic gym cleaning that reduces cross-contamination, maintains equipment, and creates the fresh, inviting atmosphere that keeps members motivated and satisfied.",
    faq: [
      {
        question: "How do you prevent odors in Worthington gym locker rooms?",
        answer: "We use specialized deodorizers and deep cleaning methods that eliminate odor-causing bacteria, combined with proper ventilation assessment for Worthington facilities."
      },
      {
        question: "Can you provide emergency cleaning for Worthington gyms?",
        answer: "Yes, we offer emergency cleaning services for unexpected situations, special events, or urgent sanitation needs at Worthington fitness centers."
      }
    ],
    testimonial: {
      text: "The difference in our Worthington gym's cleanliness is night and day. Red Rock Cleans delivers consistently excellent results.",
      author: "Manager, Worthington Athletic Club"
    }
  },
  {
    id: "new-albany",
    name: "New Albany",
    description: "New Albany's upscale fitness facilities rely on our premium gym cleaning services that match the sophistication of their spaces with meticulous attention to detail and member-focused cleanliness standards.",
    faq: [
      {
        question: "Do you serve boutique fitness studios in New Albany?",
        answer: "Yes, we work with boutique studios, large gyms, and specialized fitness facilities throughout New Albany, customizing our services to each unique environment."
      },
      {
        question: "What makes your New Albany gym cleaning different?",
        answer: "We combine specialized equipment disinfection knowledge with member experience focus, ensuring every touchpoint in your New Albany facility is spotless and safe."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our New Albany fitness center at the highest standards. Our members notice and appreciate the difference.",
      author: "Director, New Albany Wellness Center"
    }
  },
  {
    id: "bexley",
    name: "Bexley",
    description: "Bexley fitness centers trust our professional gym cleaning to maintain healthy workout environments that support member goals with consistently clean equipment, fresh locker rooms, and spotless common areas.",
    faq: [
      {
        question: "How do you sanitize Bexley gym equipment?",
        answer: "We use microfiber cloths and EPA-registered disinfectants to thoroughly sanitize all equipment surfaces, followed by proper dwell time for maximum germ elimination in Bexley gyms."
      },
      {
        question: "Do you provide quality assurance for Bexley gyms?",
        answer: "Yes, we conduct regular quality inspections and maintain detailed cleaning logs to ensure consistent, high-quality results at your Bexley fitness facility."
      }
    ],
    testimonial: {
      text: "Our Bexley gym members have commented on how clean everything is since we started with Red Rock Cleans. Excellent service!",
      author: "Owner, Bexley Training Center"
    }
  },
  {
    id: "german-village",
    name: "German Village",
    description: "German Village fitness studios benefit from our adaptable gym cleaning services that maintain hygienic workout spaces in unique settings while delivering the thorough sanitization members expect.",
    faq: [
      {
        question: "Can you clean smaller fitness studios in German Village?",
        answer: "Yes, we serve gyms of all sizes in German Village, from boutique studios to larger fitness centers, with customized cleaning plans for each facility."
      },
      {
        question: "How do you handle German Village's historic buildings?",
        answer: "We adapt our cleaning methods for German Village's unique structures while maintaining the same high standards of gym hygiene and equipment sanitization."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans keeps our German Village studio spotless. They understand the importance of cleanliness in creating a positive workout experience.",
      author: "Instructor, German Village Yoga Studio"
    }
  },
  {
    id: "short-north",
    name: "Short North",
    description: "Short North's vibrant fitness community trusts our gym cleaning services to maintain trendy, hygienic workout spaces that appeal to health-conscious urban members who expect premium cleanliness.",
    faq: [
      {
        question: "Do you clean cycling studios in Short North?",
        answer: "Yes, we specialize in cleaning indoor cycling studios, including bikes, floors, and ventilation systems that are unique to spin facilities in Short North."
      },
      {
        question: "Can you accommodate Short North's busy schedules?",
        answer: "Absolutely. We offer flexible cleaning times including early morning, late evening, and overnight service to work around your Short North gym's operating hours."
      }
    ],
    testimonial: {
      text: "Our Short North boutique gym stays immaculate thanks to Red Rock Cleans. Member retention has improved since we upgraded our cleaning service.",
      author: "Owner, Short North Barre Studio"
    }
  },
  {
    id: "victorian-village",
    name: "Victorian Village",
    description: "Victorian Village fitness facilities rely on our professional gym cleaning that creates welcoming, hygienic environments where members feel confident in the cleanliness of every surface they touch.",
    faq: [
      {
        question: "What's included in Victorian Village gym cleaning?",
        answer: "Our service includes equipment disinfection, floor care, locker room sanitization, shower cleaning, mirror polishing, and high-touch surface attention throughout Victorian Village facilities."
      },
      {
        question: "How do you ensure thoroughness in Victorian Village?",
        answer: "We use detailed checklists, quality inspections, and member feedback to ensure consistent, comprehensive cleaning at your Victorian Village fitness center."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has elevated our Victorian Village gym's cleanliness to a new level. We're proud to show off our facility to prospective members.",
      author: "Manager, Victorian Village Fitness Club"
    }
  },
  {
    id: "hillard",
    name: "Hilliard",
    description: "Hilliard gyms depend on our systematic cleaning services that reduce germs, maintain equipment, and create the fresh, inviting atmosphere essential for member satisfaction and business success.",
    faq: [
      {
        question: "How do you handle Hilliard gym's high-traffic areas?",
        answer: "We pay special attention to high-traffic zones like entrances, reception areas, and popular equipment, with frequent disinfection throughout the day if needed for Hilliard gyms."
      },
      {
        question: "Do you clean functional fitness areas in Hilliard?",
        answer: "Yes, we clean turf areas, rig equipment, slam ball zones, and other functional fitness spaces, including specialized equipment like battle ropes and sleds in Hilliard facilities."
      }
    ],
    testimonial: {
      text: "Our Hilliard gym's cleanliness has become a competitive advantage. Red Rock Cleans helps us stand out in a crowded market.",
      author: "Director, Hilliard Performance Center"
    }
  },
  {
    id: "westerville",
    name: "Westerville",
    description: "Westerville fitness centers trust our comprehensive gym cleaning to maintain healthy workout environments that support member wellness through consistently clean equipment, locker rooms, and training spaces.",
    faq: [
      {
        question: "Can you customize cleaning for Westerville gyms?",
        answer: "Yes, we create customized cleaning plans based on your Westerville facility's specific needs, member traffic patterns, and operational schedule."
      },
      {
        question: "How do you maintain consistency in Westerville?",
        answer: "We use the same trained team members, detailed checklists, and regular quality assurance to ensure consistent results at your Westerville gym every cleaning."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans is reliable, thorough, and understands our Westerville gym's needs. We couldn't ask for better cleaning partners.",
      author: "Owner, Westerville Strength & Conditioning"
    }
  }
];

const GymCleaningColumbusOhioPage = () => {
  const [openAccordion, setOpenAccordion] = useState<string>("");
  const [countersVisible, setCountersVisible] = useState(false);
  const [memberSatisfaction, setMemberSatisfaction] = useState(0);
  const [germReduction, setGermReduction] = useState(0);
  const [topRated, setTopRated] = useState(0);

  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash) {
      setOpenAccordion(hash);
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setCountersVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const counterSection = document.getElementById('counters-section');
    if (counterSection) {
      observer.observe(counterSection);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (countersVisible) {
      const duration = 2000;
      const steps = 60;
      const interval = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        
        setMemberSatisfaction(Math.floor(progress * 98));
        setGermReduction(Math.floor(progress * 99.9 * 10) / 10);
        setTopRated(Math.floor(progress * 5 * 10) / 10);

        if (step >= steps) {
          clearInterval(timer);
          setMemberSatisfaction(98);
          setGermReduction(99.9);
          setTopRated(5.0);
        }
      }, interval);

      return () => clearInterval(timer);
    }
  }, [countersVisible]);

  const handleAccordionChange = (value: string) => {
    setOpenAccordion(value);
    window.location.hash = value;
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Gym Cleaning in Columbus Ohio | Red Rock Cleans</title>
        <meta name="description" content="Professional gym cleaning in Columbus, OH. Red Rock Cleans provides hygienic fitness center sanitation, including equipment disinfection, in Dublin, Upper Arlington, and beyond." />
        <meta name="keywords" content="gym cleaning Columbus Ohio, gym cleaning near me, fitness center cleaning Columbus Ohio, health club sanitation Dublin OH, gym disinfection Upper Arlington, professional gym cleaners Columbus, equipment disinfection Columbus, locker room cleaning Columbus Ohio, anti-viral gym cleaning Columbus, gym cleaning cost Columbus Ohio, commercial gym cleaning prices Dublin OH, gym cleaning checklist Columbus, how to keep a gym clean Columbus" />
        <link rel="canonical" href="https://redrockcleans.com/columbus-ohio/gym-cleaning" />
      </Helmet>
      
      <ColumbusNavigation loginUrl="https://customer-portal.maidily.com/red-rock-cleans-columbus-ohio/sign-in" bookingUrl="/commercial-quote?location=columbus-ohio" />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/src/assets/hero-commercial.jpg" 
              alt="Professional gym cleaning service in Columbus Ohio"
              className="w-full h-full object-cover scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                Hygienic & Professional Gym Cleaning in Columbus, Ohio
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                A visibly clean and thoroughly disinfected gym is paramount for member health, satisfaction, and retention in the competitive Columbus fitness market. Our specialized gym cleaning services eliminate germs, maintain equipment, and create the fresh, inviting atmosphere that keeps members coming back. Trust Red Rock Cleans to deliver the hygienic workout environment your Columbus fitness center deserves.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="h-14 text-lg px-8" asChild>
                  <Link to="/commercial-quote?location=columbus-ohio">
                    <Dumbbell className="w-5 h-5 mr-2" />
                    Get Your Free Quote
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="h-14 text-lg px-8" asChild>
                  <Link to="/contact">
                    <Shield className="w-5 h-5 mr-2" />
                    Learn About Our Process
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
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Dumbbell className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Germ-Free Equipment</h3>
                      <p className="text-muted-foreground">
                        Meticulous disinfection of all workout machines, free weights, benches, and high-touch surfaces throughout your Columbus gym. We use EPA-registered, anti-viral disinfectants that eliminate bacteria and viruses while being safe for equipment and members, ensuring every piece of fitness equipment is ready for the next user.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <ShowerHead className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Fresh & Inviting Spaces</h3>
                      <p className="text-muted-foreground">
                        Clean locker rooms, showers, and common areas enhance the member experience at your Columbus fitness center. Our specialized cleaning prevents mold, mildew, and odors while creating the fresh, welcoming atmosphere that makes members proud to recommend your gym to friends and family.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Preventing Cross-Contamination</h3>
                      <p className="text-muted-foreground">
                        Our protocols are designed to stop the spread of bacteria and viruses in high-traffic zones throughout your Columbus gym. We use color-coded cleaning systems, proper disinfection techniques, and strategic cleaning schedules to minimize cross-contamination and protect member health.
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
                <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Bike className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold mb-3">Workout & Equipment Areas</h3>
                      <p className="text-muted-foreground text-sm">
                        Sanitizing all fitness equipment including cardio machines, weight racks, benches, mats, resistance bands, and all high-touch surfaces throughout your Columbus gym's training areas.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Droplets className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold mb-3">Locker Rooms & Showers</h3>
                      <p className="text-muted-foreground text-sm">
                        Deep cleaning, sanitizing, and deodorizing to prevent mold, mildew, and odors in your Columbus gym's locker rooms. Complete shower sanitization and drain maintenance included.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <PersonStanding className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold mb-3">Group Fitness Studios</h3>
                      <p className="text-muted-foreground text-sm">
                        Cleaning specialized flooring, mirrors, sound systems, and props for yoga, spin, Pilates, and group exercise studios throughout your Columbus fitness facility.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Users className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold mb-3">Reception & High-Traffic Zones</h3>
                      <p className="text-muted-foreground text-sm">
                        Maintaining a sparkling first impression and disinfecting entry points, reception desks, waiting areas, and all high-touch surfaces in your Columbus gym's public spaces.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* The Red Rock Cleans Difference Section */}
        <section id="counters-section" className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                The Red Rock Cleans Difference for Columbus Gyms
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <ThumbsUp className="h-16 w-16 mx-auto mb-4 opacity-90" />
                  <div className="text-5xl font-bold mb-2">{memberSatisfaction}%</div>
                  <h3 className="text-xl font-semibold opacity-90">Member Satisfaction Score</h3>
                </div>
                
                <div className="text-center">
                  <ShieldX className="h-16 w-16 mx-auto mb-4 opacity-90" />
                  <div className="text-5xl font-bold mb-2">{germReduction}%</div>
                  <h3 className="text-xl font-semibold opacity-90">Germ Reduction</h3>
                </div>
                
                <div className="text-center">
                  <Trophy className="h-16 w-16 mx-auto mb-4 opacity-90" />
                  <div className="text-5xl font-bold mb-2">{topRated.toFixed(1)}/5</div>
                  <h3 className="text-xl font-semibold opacity-90">Top-Rated Cleanliness</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Areas We Serve Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Areas We Serve in Columbus, Ohio
              </h2>
              
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
                          <Link to="/commercial-quote?location=columbus-ohio">
                            Get Quote for {city.name} Gym Cleaning
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
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">
                Other Commercial Cleaning Services in Columbus
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <Briefcase className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Medical Office Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Specialized cleaning for medical facilities and healthcare offices
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/columbus-ohio/medical-office-cleaning">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <Package className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Retail Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Professional cleaning services for retail stores and shopping centers
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/columbus-ohio/retail-cleaning">Learn More</Link>
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
                      <Link to="/columbus-ohio/school-cleaning">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Frequently Asked Questions
              </h2>
              <Accordion type="single" className="space-y-4">
                <AccordionItem value="what-included" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">What's included in gym cleaning in Columbus Ohio?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Our comprehensive gym cleaning in Columbus includes equipment disinfection (cardio machines, weights, benches), floor care, locker room and shower deep cleaning, mirror polishing, restroom sanitization, high-touch surface disinfection, trash removal, and deodorization. We also clean group fitness studios, reception areas, and common spaces to maintain a consistently hygienic environment throughout your facility.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="cost" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">How much does gym cleaning cost in Columbus Ohio?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Gym cleaning costs in Columbus vary based on facility size, member traffic, and cleaning frequency. Most fitness centers invest between $500-$2,500 per month for regular cleaning services. We offer customized quotes based on your Columbus gym's specific needs, square footage, and desired cleaning schedule. Daily, nightly, or deep cleaning options are available.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="frequency" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">How often should Columbus gyms be professionally cleaned?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Most Columbus fitness centers benefit from daily cleaning with weekly deep cleaning services. High-traffic gyms may require multiple daily cleanings, while boutique studios might need cleaning after each class session. We recommend a combination of daily maintenance cleaning and periodic deep cleaning to maintain optimal hygiene standards and member satisfaction at your Columbus fitness facility.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="disinfection" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">What disinfection methods do you use for Columbus gyms?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      We use EPA-registered, anti-viral disinfectants specifically formulated for gym equipment and fitness facilities in Columbus. Our cleaning protocols follow CDC guidelines and include proper dwell time for maximum effectiveness. We use microfiber cloths to prevent cross-contamination, color-coded systems for different areas, and specialized products for locker rooms to prevent mold, mildew, and odors while being safe for your members.
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
              Join Columbus fitness centers that trust Red Rock Cleans for professional, hygienic gym cleaning
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
              <Link to="/commercial-quote?location=columbus-ohio">Get Your Free Gym Cleaning Quote</Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default GymCleaningColumbusOhioPage;


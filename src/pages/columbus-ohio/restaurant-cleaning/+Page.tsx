import { ColumbusNavigation } from "@/components/ColumbusNavigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ClipboardCheck, Flame, Sparkles, DoorOpen, ChefHat, GlassWater, Droplets, Star, CheckCircle, Utensils, Store, Dumbbell, Armchair } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";

const cities = [
  {
    id: "dublin",
    name: "Dublin",
    description: "Dublin's thriving restaurant scene demands the highest standards of cleanliness. Our professional restaurant cleaning services help Dublin establishments maintain pristine kitchens and inviting dining spaces that earn 5-star reviews and pass health inspections with confidence.",
    faq: [
      {
        question: "Can you work around our Dublin restaurant's hours?",
        answer: "Yes, we offer flexible scheduling for Dublin restaurants including late-night and early morning cleaning to avoid disrupting your service hours and ensure your establishment is spotless before opening."
      },
      {
        question: "Do you clean commercial kitchens in Dublin?",
        answer: "Absolutely. We specialize in deep cleaning commercial kitchens in Dublin, including degreasing hoods, cleaning equipment, sanitizing prep surfaces, and maintaining floors to meet Ohio Department of Health standards."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our Dublin restaurant for over a year. Their attention to detail in the kitchen and dining room is exceptional.",
      author: "Restaurant Manager, Dublin Bistro"
    }
  },
  {
    id: "upper-arlington",
    name: "Upper Arlington",
    description: "Upper Arlington restaurants trust our comprehensive cleaning services to maintain the sophisticated ambiance their discerning diners expect. From elegant dining rooms to spotless commercial kitchens, we ensure every detail meets the highest standards.",
    faq: [
      {
        question: "What makes your Upper Arlington restaurant cleaning different?",
        answer: "We combine commercial kitchen expertise with understanding of front-of-house presentation, ensuring your Upper Arlington restaurant is both health-code compliant and beautifully maintained for guests."
      },
      {
        question: "Do you clean bar areas in Upper Arlington restaurants?",
        answer: "Yes, we provide comprehensive bar cleaning in Upper Arlington including sanitizing taps, cleaning behind the bar, removing sticky residue, and maintaining floor mats and drains."
      }
    ],
    testimonial: {
      text: "Our Upper Arlington restaurant maintains its upscale reputation thanks to Red Rock Cleans. They understand hospitality cleaning.",
      author: "Owner, Upper Arlington Fine Dining"
    }
  },
  {
    id: "powell",
    name: "Powell",
    description: "Powell's growing restaurant community relies on our professional cleaning services to maintain health code compliance while creating welcoming spaces that keep customers coming back. We understand the unique needs of Powell food service establishments.",
    faq: [
      {
        question: "How do you help Powell restaurants pass health inspections?",
        answer: "We follow comprehensive checklists aligned with Ohio Department of Health standards, focusing on critical areas inspectors examine including food prep surfaces, equipment sanitation, and proper waste management in Powell restaurants."
      },
      {
        question: "Can you handle grease buildup in Powell commercial kitchens?",
        answer: "Yes, our Powell restaurant cleaning includes professional degreasing of hoods, exhaust systems, walls, and equipment to reduce fire hazards and maintain a clean, safe kitchen environment."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans keeps our Powell restaurant inspection-ready at all times. Their commercial kitchen expertise is outstanding.",
      author: "Head Chef, Powell Eatery"
    }
  },
  {
    id: "lewis-center",
    name: "Lewis Center",
    description: "Lewis Center restaurants depend on our reliable cleaning services that maintain both kitchen sanitation and dining room appeal. Our experienced team ensures your establishment meets health codes while impressing every guest who walks through your doors.",
    faq: [
      {
        question: "Do you clean Lewis Center restaurant restrooms?",
        answer: "Yes, we provide intensive restroom cleaning for Lewis Center restaurants including sanitizing all fixtures, restocking supplies, and maintaining the spotless conditions your guests expect."
      },
      {
        question: "What's included in Lewis Center restaurant floor cleaning?",
        answer: "Our Lewis Center restaurant floor cleaning includes sweeping, mopping, degreasing, and specialized treatments for different flooring types in kitchens, dining areas, and restrooms."
      }
    ],
    testimonial: {
      text: "Our Lewis Center restaurant has never looked better. Red Rock Cleans delivers consistent, professional service that our staff and guests notice.",
      author: "Manager, Lewis Center Grill"
    }
  },
  {
    id: "worthington",
    name: "Worthington",
    description: "Worthington's diverse dining establishments trust our specialized restaurant cleaning that protects food safety while enhancing the guest experience. We handle everything from intimate cafes to bustling full-service restaurants with equal expertise.",
    faq: [
      {
        question: "How often should Worthington restaurants schedule professional cleaning?",
        answer: "Most Worthington restaurants benefit from daily or nightly cleaning services, with deep cleaning scheduled weekly or monthly depending on volume and concept."
      },
      {
        question: "Do you use food-safe cleaning products in Worthington restaurants?",
        answer: "Yes, all cleaning products used in Worthington food service areas are food-safe, EPA-approved, and meet Ohio Department of Health requirements for restaurant sanitation."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans understands the demands of our busy Worthington restaurant. They work efficiently and never compromise on quality.",
      author: "Owner, Worthington Family Restaurant"
    }
  },
  {
    id: "new-albany",
    name: "New Albany",
    description: "New Albany's upscale dining scene demands the highest level of cleanliness and presentation. Our premium restaurant cleaning services ensure your establishment maintains the sophisticated ambiance that matches your culinary excellence and discerning clientele.",
    faq: [
      {
        question: "Can you handle New Albany fine dining establishments?",
        answer: "Yes, we specialize in high-end restaurant cleaning for New Albany fine dining establishments, understanding the attention to detail required for upscale hospitality environments."
      },
      {
        question: "Do you provide emergency cleaning for New Albany restaurants?",
        answer: "Yes, we offer emergency and on-call cleaning services for New Albany restaurants to handle spills, equipment failures, or pre-inspection preparation."
      }
    ],
    testimonial: {
      text: "Our New Albany restaurant's reputation depends on impeccable cleanliness. Red Rock Cleans delivers the premium service we require.",
      author: "General Manager, New Albany Steakhouse"
    }
  },
  {
    id: "bexley",
    name: "Bexley",
    description: "Bexley restaurants benefit from our thorough cleaning services that maintain health department standards while preserving the welcoming atmosphere that makes neighborhood dining special. We treat every establishment with the care it deserves.",
    faq: [
      {
        question: "What areas do you clean in Bexley restaurants?",
        answer: "We clean all areas in Bexley restaurants including kitchens, prep areas, dining rooms, bars, entryways, restrooms, and exterior spaces to ensure complete facility cleanliness."
      },
      {
        question: "How do you ensure quality in Bexley restaurant cleaning?",
        answer: "We use detailed checklists, conduct quality inspections, and maintain open communication with Bexley restaurant management to ensure consistent, high-quality results."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our Bexley neighborhood restaurant with professionalism and reliability. Highly recommended!",
      author: "Owner, Bexley Cafe"
    }
  },
  {
    id: "german-village",
    name: "German Village",
    description: "German Village's historic dining establishments trust our adaptable restaurant cleaning services that maintain modern health standards while respecting unique building characteristics. From cozy bistros to bustling beer halls, we keep German Village restaurants spotless.",
    faq: [
      {
        question: "Can you clean German Village restaurants in historic buildings?",
        answer: "Yes, we adapt our cleaning methods for German Village's historic restaurant spaces while maintaining the same rigorous health and safety standards required by the Ohio Department of Health."
      },
      {
        question: "Do you handle German Village outdoor dining areas?",
        answer: "Yes, we clean German Village outdoor dining spaces including patios, sidewalk seating, and entrance areas to maintain the welcoming appearance that attracts diners."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans successfully maintains our German Village restaurant in this historic building. They understand both hospitality and unique spaces.",
      author: "Manager, German Village Gastropub"
    }
  },
  {
    id: "short-north",
    name: "Short North",
    description: "Short North's vibrant culinary scene demands professional cleaning that matches the energy and sophistication of this premier dining district. Our restaurant cleaning services help Short North establishments maintain the high standards that keep diners coming back.",
    faq: [
      {
        question: "Do you serve Short North bars and nightlife venues?",
        answer: "Yes, we provide specialized cleaning for Short North bars, lounges, and nightlife venues including comprehensive bar area cleaning, floor care, and restroom sanitation."
      },
      {
        question: "Can you accommodate Short North's late-night restaurant hours?",
        answer: "Absolutely. We offer flexible scheduling for Short North restaurants including late-night and overnight cleaning to work around extended service hours."
      }
    ],
    testimonial: {
      text: "Our Short North restaurant stays impeccably clean thanks to Red Rock Cleans. They understand the pace and standards of urban dining.",
      author: "Executive Chef, Short North Bistro"
    }
  },
  {
    id: "victorian-village",
    name: "Victorian Village",
    description: "Victorian Village restaurants rely on our professional cleaning that maintains food safety and guest appeal in this charming neighborhood. Whether you're running a cozy cafe or a full-service restaurant, we deliver the cleanliness your establishment deserves.",
    faq: [
      {
        question: "What kitchen equipment do you clean in Victorian Village restaurants?",
        answer: "We clean all commercial kitchen equipment in Victorian Village restaurants including ovens, ranges, fryers, grills, refrigeration units, prep tables, and dishwashing areas."
      },
      {
        question: "Do you provide day porter services for Victorian Village restaurants?",
        answer: "Yes, we can provide daytime maintenance services for busy Victorian Village restaurants to handle continuous cleaning needs during service hours."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Victorian Village restaurant with professionalism and attention to the details that matter. Excellent service.",
      author: "Owner, Victorian Village Brunch Spot"
    }
  },
  {
    id: "hillard",
    name: "Hilliard",
    description: "Hilliard's expanding restaurant community trusts our comprehensive cleaning services to maintain health code compliance and create inviting atmospheres. From quick-service to full-service dining, we understand Hilliard restaurant cleaning needs.",
    faq: [
      {
        question: "Do you serve Hilliard chain restaurants?",
        answer: "Yes, we work with both independent and chain restaurants in Hilliard, following brand standards and health code requirements to maintain consistent cleanliness."
      },
      {
        question: "What makes your Hilliard restaurant cleaning reliable?",
        answer: "We use the same trained team, detailed protocols, and quality assurance processes to ensure your Hilliard restaurant receives consistent, professional cleaning every service."
      }
    ],
    testimonial: {
      text: "Our Hilliard restaurant has been excellently maintained by Red Rock Cleans. Their restaurant cleaning expertise is evident in every service.",
      author: "General Manager, Hilliard Sports Bar"
    }
  },
  {
    id: "westerville",
    name: "Westerville",
    description: "Westerville dining establishments trust our specialized cleaning services to maintain safe, welcoming environments that earn positive reviews and pass inspections. Our experienced team understands the comprehensive cleaning needs of Westerville restaurants.",
    faq: [
      {
        question: "Can you customize cleaning for Westerville restaurant concepts?",
        answer: "Yes, we create customized cleaning plans for Westerville restaurants based on your specific concept, volume, and needs—from pizza shops to fine dining."
      },
      {
        question: "How do you coordinate with Westerville restaurant staff?",
        answer: "We maintain open communication with Westerville restaurant managers and adapt our schedules to minimize disruption while ensuring thorough cleaning of all areas."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provides the professional restaurant cleaning our Westerville establishment needs. Reliable, thorough, and hospitality-focused service.",
      author: "Owner, Westerville Italian Restaurant"
    }
  }
];

const RestaurantCleaningColumbusOhioPage = () => {
  const [openAccordion, setOpenAccordion] = useState<string>("");
  const [countersVisible, setCountersVisible] = useState(false);
  const [fiveStarReviews, setFiveStarReviews] = useState(0);
  const [healthInspections, setHealthInspections] = useState(0);
  const [happyDiners, setHappyDiners] = useState(0);

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
        
        setFiveStarReviews(Math.floor(progress * 250));
        setHealthInspections(Math.floor(progress * 100));
        setHappyDiners(Math.floor(progress * 50000));

        if (step >= steps) {
          clearInterval(timer);
          setFiveStarReviews(250);
          setHealthInspections(100);
          setHappyDiners(50000);
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
        <title>Restaurant Cleaning Columbus Ohio | Red Rock Cleans</title>
        <meta name="description" content="Professional restaurant cleaning in Columbus, OH. Red Rock Cleans helps you pass health inspections and earn 5-star reviews with comprehensive kitchen and dining room cleaning." />
        <meta name="keywords" content="restaurant cleaning Columbus Ohio, restaurant cleaning near me, commercial kitchen cleaning Columbus, bar cleaning Dublin OH, dining room cleaning Short North, German Village restaurant cleaning, best restaurant cleaners Columbus, kitchen degreasing Columbus Ohio, front of house cleaning, health code cleaning Columbus, restaurant cleaning cost Columbus Ohio, commercial kitchen cleaning prices, restaurant cleaning checklist Columbus, hire restaurant cleaners in Columbus" />
        <link rel="canonical" href="https://redrockcleans.com/columbus-ohio/restaurant-cleaning" />
      </Helmet>
      
      <ColumbusNavigation loginUrl="https://customer-portal.maidily.com/red-rock-cleans-columbus-ohio/sign-in" bookingUrl="/commercial-quote?location=columbus-ohio" />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/src/assets/hero-commercial.jpg" 
              alt="Professional restaurant cleaning service in Columbus Ohio"
              className="w-full h-full object-cover scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                Impeccable Restaurant Cleaning for 5-Star Experiences in Columbus
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                In the vibrant Columbus dining scene, from the Short North to German Village, cleanliness is essential for earning top reviews, passing health inspections, and ensuring guest safety. Our specialized restaurant cleaning services maintain pristine commercial kitchens and inviting dining spaces that keep customers coming back. Trust Red Rock Cleans to protect your reputation and exceed Ohio Department of Health standards.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="h-14 text-lg px-8" asChild>
                  <Link to="/commercial-quote?location=columbus-ohio">
                    <Utensils className="w-5 h-5 mr-2" />
                    Schedule Restaurant Cleaning
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="h-14 text-lg px-8" asChild>
                  <Link to="/contact">
                    <ClipboardCheck className="w-5 h-5 mr-2" />
                    Request Health Code Info
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Exceeding Ohio Department of Health Standards Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Exceeding Ohio Department of Health Standards
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <ClipboardCheck className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Health Code & Inspection Ready</h3>
                      <p className="text-muted-foreground">
                        Our meticulous approach helps you ace health inspections in Columbus. We focus on the critical areas inspectors examine, from food contact surfaces to proper waste management, ensuring your restaurant consistently meets and exceeds Ohio Department of Health standards with comprehensive cleaning protocols.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Flame className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Kitchen Degreasing & Fire Safety</h3>
                      <p className="text-muted-foreground">
                        Our focus on removing hazardous grease buildup in Columbus commercial kitchens protects your staff and guests. We professionally degrease hoods, exhaust systems, walls, and equipment to reduce fire hazards, maintain air quality, and keep your kitchen operating safely and efficiently every service.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Sparkles className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Unforgettable Guest Ambiance</h3>
                      <p className="text-muted-foreground">
                        A spotless front-of-house creates a welcoming, high-end atmosphere for diners in your Columbus restaurant. From gleaming windows to pristine dining areas, we ensure every guest's first impression matches your culinary excellence, supporting the 5-star reviews and repeat business you deserve.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Our Comprehensive Restaurant Cleaning Checklist Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Our Comprehensive Restaurant Cleaning Checklist
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <DoorOpen className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">Front-of-House</h3>
                      <p className="text-muted-foreground">
                        Cleaning dining areas, entryways, and windows in your Columbus restaurant to create an inviting first impression. We maintain spotless tables, chairs, floors, and decor while ensuring windows sparkle and entryways welcome guests with the professional presentation your establishment deserves.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <ChefHat className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">Commercial Kitchens</h3>
                      <p className="text-muted-foreground">
                        Deep cleaning food prep surfaces, equipment, and floors in your Columbus commercial kitchen. We sanitize cutting boards, counters, and utensil storage while degreasing cooking equipment, cleaning floors thoroughly, and maintaining the pristine conditions required for food safety and health code compliance.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <GlassWater className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">Bar Areas</h3>
                      <p className="text-muted-foreground">
                        Sanitizing taps, cleaning behind the bar, and maintaining floor mats in your Columbus bar area. We remove sticky residue, clean glassware storage, sanitize ice bins, and ensure your bar area maintains the cleanliness standards that keep patrons returning to your establishment.
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
                      <h3 className="text-xl font-semibold mb-3">Restrooms</h3>
                      <p className="text-muted-foreground">
                        Intensive sanitation and restocking to meet guest expectations in your Columbus restaurant restrooms. We thoroughly clean and disinfect all fixtures, maintain spotless floors, restock supplies, and ensure your restrooms reflect the quality standards of your dining experience.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Our Recipe for a Spotless Columbus Restaurant Section */}
        <section id="counters-section" className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Our Recipe for a Spotless Columbus Restaurant
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <Star className="h-16 w-16 mx-auto mb-4 opacity-90" />
                  <div className="text-5xl font-bold mb-2">{fiveStarReviews}+</div>
                  <h3 className="text-xl font-semibold opacity-90">5-Star Reviews Supported</h3>
                </div>
                
                <div className="text-center">
                  <CheckCircle className="h-16 w-16 mx-auto mb-4 opacity-90" />
                  <div className="text-5xl font-bold mb-2">{healthInspections}%</div>
                  <h3 className="text-xl font-semibold opacity-90">Health Inspections Passed</h3>
                </div>
                
                <div className="text-center">
                  <Utensils className="h-16 w-16 mx-auto mb-4 opacity-90" />
                  <div className="text-5xl font-bold mb-2">{happyDiners.toLocaleString()}+</div>
                  <h3 className="text-xl font-semibold opacity-90">Happy Diners Served</h3>
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
                          <h4 className="font-semibold mb-2">Restaurant Cleaning in {city.name}</h4>
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
                            Schedule {city.name} Restaurant Cleaning
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
                    <Store className="h-8 w-8 text-primary mx-auto mb-4" />
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
                    <Dumbbell className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Gym Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Hygienic cleaning and disinfection for fitness centers
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/columbus-ohio/gym-cleaning">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <Armchair className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Showroom Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Spotless cleaning for automotive and retail showrooms
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/columbus-ohio/showroom-cleaning">Learn More</Link>
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
                    <h3 className="text-lg font-semibold">What is included in restaurant cleaning in Columbus Ohio?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Our comprehensive restaurant cleaning in Columbus includes commercial kitchen deep cleaning, dining room maintenance, bar area sanitation, restroom cleaning, floor care, window washing, hood and exhaust cleaning, equipment degreasing, and food prep surface sanitization. We follow detailed checklists that address all areas inspectors examine to ensure your Columbus restaurant meets Ohio Department of Health standards.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="cost" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">How much does restaurant cleaning cost in Columbus Ohio?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Restaurant cleaning costs in Columbus vary based on size, concept, frequency, and scope of services. Most restaurants invest between $500-$3,000 per month for professional cleaning services. Quick-service establishments typically have lower costs, while full-service restaurants with extensive kitchens require more comprehensive cleaning. We provide free consultations and customized quotes for your Columbus restaurant's specific needs.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="schedule" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">Can you work around our Columbus restaurant's hours?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Yes, we offer flexible scheduling for Columbus restaurants including late-night, overnight, and early morning cleaning to avoid disrupting your service hours. We understand the demands of the restaurant industry and work around your schedule to ensure your establishment is spotless before opening. Many Columbus restaurants prefer nightly cleaning after close, while others schedule deep cleaning during slower periods or days when closed.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="inspections" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">How do you help Columbus restaurants pass health inspections?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      We help Columbus restaurants pass health inspections by following comprehensive cleaning protocols aligned with Ohio Department of Health standards. Our team focuses on critical areas inspectors examine including food contact surfaces, proper equipment sanitation, waste management, and overall facility cleanliness. We use food-safe, EPA-approved cleaning products and maintain detailed documentation to support your compliance efforts and ensure consistent inspection-ready conditions.
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
              Ready to Earn 5-Star Reviews with Professional Restaurant Cleaning?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join Columbus restaurants that trust Red Rock Cleans for health code compliance and unforgettable guest experiences
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
              <Link to="/commercial-quote?location=columbus-ohio">Schedule Your Restaurant Cleaning Today</Link>
            </Button>
          </div>
        </section>

        {/* Image Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <img 
                src="/src/assets/hero-commercial.jpg" 
                alt="An immaculate and empty upscale restaurant in Columbus, Ohio, cleaned by Red Rock Cleans"
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

export default RestaurantCleaningColumbusOhioPage;


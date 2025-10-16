import { MauiNavigation } from "@/components/MauiNavigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ClipboardCheck, Flame, Sparkles, DoorOpen, ChefHat, Droplets, Hand, Star, CheckCircle, Utensils, MapPin, Calendar, Home, Dumbbell, Stethoscope, School } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import CountUp from "react-countup";

const towns = [
  {
    id: "wailea",
    name: "Wailea",
    description: "Wailea restaurants trust Red Rock Cleans to maintain the pristine environment that matches their world-class cuisine and service, helping them earn consistent 5-star reviews from discerning diners.",
    faq: [
      {
        question: "Can you clean our Wailea restaurant after hours?",
        answer: "Yes, we schedule all restaurant cleaning during your closed hours—late night, early morning, or between shifts—to ensure zero disruption to your dining service and complete privacy for deep cleaning."
      },
      {
        question: "Do you help with health inspections in Wailea?",
        answer: "Absolutely. Our cleaning protocols are designed to meet Hawaii Department of Health standards. We focus on all inspection-critical areas and can provide emergency pre-inspection cleaning when needed."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been essential to maintaining our Wailea restaurant's reputation. Their kitchen degreasing is thorough, and they never miss a detail.",
      author: "Executive Chef, Wailea Fine Dining"
    }
  },
  {
    id: "makena",
    name: "Makena",
    description: "Makena dining establishments rely on our comprehensive restaurant cleaning that addresses both the pristine front-of-house presentation and the rigorous back-of-house sanitation essential for food safety.",
    faq: [
      {
        question: "What areas do you clean in Makena restaurants?",
        answer: "We provide complete restaurant cleaning including front-of-house (dining rooms, entryways, windows), commercial kitchens (prep areas, equipment, floors), bar areas, and restrooms with specialized protocols for each zone."
      },
      {
        question: "How often should Makena restaurants schedule cleaning?",
        answer: "We recommend nightly cleaning for dining areas and kitchens, weekly deep degreasing of kitchen equipment, and monthly comprehensive cleaning including hard-to-reach areas and hood systems."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans transformed our Makena restaurant's cleanliness standards. Our recent health inspection was perfect, and guests constantly comment on how clean everything looks.",
      author: "Restaurant Manager, Makena Coastal Grill"
    }
  },
  {
    id: "kihei",
    name: "Kihei",
    description: "Kihei restaurants benefit from our specialized kitchen degreasing and front-of-house cleaning that ensures every guest enjoys a safe, welcoming dining experience from arrival to departure.",
    faq: [
      {
        question: "What is kitchen degreasing in Kihei?",
        answer: "Kitchen degreasing is our intensive cleaning process that removes dangerous grease buildup from cooking equipment, exhaust hoods, floors, and walls using commercial-grade degreasers—essential for fire safety and health code compliance."
      },
      {
        question: "Can you clean our Kihei bar area?",
        answer: "Yes, we specialize in bar cleaning including sanitizing taps and dispensers, cleaning behind and under the bar, degreasing floor mats, and ensuring all glassware stations meet health standards."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans' attention to our Kihei restaurant's kitchen has been remarkable. Our grease buildup issues are completely resolved, and the team is always professional.",
      author: "Owner, Kihei Island Bistro"
    }
  },
  {
    id: "kapalua",
    name: "Kapalua",
    description: "Kapalua fine dining establishments trust our meticulous cleaning to create the unforgettable ambiance that matches their culinary excellence and enhances the complete dining experience.",
    faq: [
      {
        question: "How do you maintain Kapalua restaurant standards?",
        answer: "We use restaurant-specific cleaning protocols, food-safe sanitizers, and detailed checklists to ensure every surface meets health codes and aesthetic standards for fine dining environments."
      },
      {
        question: "What makes your Kapalua service different?",
        answer: "We specialize exclusively in restaurant environments with trained staff who understand the unique challenges of commercial kitchens, health inspections, and maintaining the impeccable presentation fine dining requires."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans understands the level of cleanliness our Kapalua restaurant requires. Their consistency and reliability have been invaluable to our operations.",
      author: "General Manager, Kapalua Bay Restaurant"
    }
  },
  {
    id: "kaanapali",
    name: "Ka'anapali",
    description: "Ka'anapali restaurants rely on our comprehensive cleaning that keeps dining rooms spotless, kitchens safe, and every guest touchpoint sanitized for the ultimate aloha dining experience.",
    faq: [
      {
        question: "Can you handle emergency cleaning in Ka'anapali?",
        answer: "Yes, we offer 24/7 emergency response for spills, contamination events, or urgent pre-inspection cleaning to ensure your Ka'anapali restaurant always meets health and safety standards."
      },
      {
        question: "Do you clean outdoor dining areas in Ka'anapali?",
        answer: "Absolutely. We clean all dining spaces including patios, lanais, and outdoor seating areas, addressing unique challenges like salt air residue and tropical weather exposure."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been a lifesaver for our Ka'anapali oceanfront restaurant. They handle the challenges of our location perfectly.",
      author: "Executive Chef, Ka'anapali Beachfront Dining"
    }
  },
  {
    id: "lahaina",
    name: "Lahaina",
    description: "Lahaina restaurants benefit from our proven expertise in maintaining the impeccable cleanliness that historic Front Street diners expect while meeting all modern health and safety regulations.",
    faq: [
      {
        question: "What are your Lahaina restaurant cleaning rates?",
        answer: "Restaurant cleaning costs vary based on size, service frequency, and specific needs. Most Lahaina restaurants find our services cost-effective when considering improved reviews, passed inspections, and reduced health risks. Contact us for a customized quote."
      },
      {
        question: "How do you prevent cross-contamination in Lahaina kitchens?",
        answer: "We use color-coded cleaning systems, separate equipment for food prep vs. floor areas, and strict protocols to prevent pathogen transfer—critical for food safety and health inspections."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has maintained our Lahaina restaurant for four years. Their kitchen cleaning is exceptional, and they've helped us maintain a perfect health inspection record.",
      author: "Owner, Lahaina Harbor Grille"
    }
  },
  {
    id: "spreckelsville",
    name: "Spreckelsville",
    description: "Spreckelsville dining establishments trust our health code-compliant cleaning to pass inspections consistently while creating the welcoming atmosphere that brings guests back again and again.",
    faq: [
      {
        question: "What products do you use in Spreckelsville restaurants?",
        answer: "We use food-safe, EPA-registered sanitizers and degreasers approved for commercial food service. All products are effective against foodborne pathogens while safe for use in dining environments."
      },
      {
        question: "Can you provide cleaning documentation in Spreckelsville?",
        answer: "Yes, we maintain detailed service logs and provide certificates documenting all cleaning activities—valuable for health inspections and demonstrating compliance with food safety regulations."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans' systematic approach has elevated our Spreckelsville restaurant's cleanliness to a new level. Our customers notice the difference.",
      author: "Restaurant Manager, Spreckelsville Cafe"
    }
  },
  {
    id: "paia",
    name: "Pa'ia",
    description: "Pa'ia restaurants rely on our specialized cleaning that addresses the unique challenges of island dining—from kitchen grease to salt air—while maintaining the laid-back charm guests love.",
    faq: [
      {
        question: "Do you clean small cafes in Pa'ia?",
        answer: "Yes, we service restaurants of all sizes, from small cafes to large dining establishments, with the same level of expertise and health code compliance tailored to your specific needs."
      },
      {
        question: "How quickly can you start in Pa'ia?",
        answer: "We can typically begin service within 48 hours of initial contact, including a thorough facility assessment and protocol development specific to your restaurant's requirements."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been perfect for our Pa'ia restaurant. They understand our vibe while delivering the deep cleaning our kitchen absolutely needs.",
      author: "Owner, Pa'ia Beach Cafe"
    }
  },
  {
    id: "kuau",
    name: "Kuau",
    description: "Kuau dining spots benefit from our comprehensive restaurant cleaning that ensures every meal is served in a spotless, safe environment that reflects the quality of your cuisine and service.",
    faq: [
      {
        question: "What's included in Kuau restaurant cleaning?",
        answer: "Our comprehensive service includes front-of-house cleaning (dining areas, entryways), commercial kitchen degreasing and sanitation, bar area cleaning, restroom intensive sanitation, and all health code-critical areas."
      },
      {
        question: "Can you work around our Kuau schedule?",
        answer: "Absolutely. We work during your closed hours with flexible scheduling for late nights, early mornings, or days you're closed to ensure zero impact on your dining service."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been essential to our Kuau restaurant's success. Their reliability and thoroughness are exactly what we need in a cleaning partner.",
      author: "Manager, Kuau Cove Eatery"
    }
  },
  {
    id: "haiku",
    name: "Ha'iku",
    description: "Ha'iku restaurants trust Red Rock Cleans to maintain the exceptional cleanliness standards that earn 5-star reviews and create the memorable dining experiences that build lasting reputations.",
    faq: [
      {
        question: "What makes Ha'iku restaurant cleaning unique?",
        answer: "Ha'iku's restaurants often have unique layouts and concepts. We customize our cleaning protocols to address your specific needs while maintaining all health code requirements and creating your desired atmosphere."
      },
      {
        question: "Can you train our staff in Ha'iku?",
        answer: "Yes, we offer training sessions for your restaurant staff on proper cleaning techniques, spill response, and maintaining clean standards between our professional deep cleaning services."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has transformed our Ha'iku restaurant. Our health inspection scores have improved dramatically, and the dining room has never looked better.",
      author: "Owner, Ha'iku Country Kitchen"
    }
  }
];

const RestaurantCleaningMauiPage = () => {
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
        <title>Restaurant Cleaning Maui | Red Rock Cleans</title>
        <meta name="description" content="Professional restaurant cleaning on Maui. Red Rock Cleans helps you pass health inspections and earn 5-star reviews with comprehensive kitchen and dining room cleaning in Lahaina and Kihei." />
        <meta name="keywords" content="restaurant cleaning near me, commercial kitchen cleaning Maui, bar cleaning Lahaina, dining room cleaning Wailea, best restaurant cleaners Maui, kitchen degreasing Kihei, front of house cleaning Maui, health code cleaning Maui, restaurant cleaning cost Maui, commercial kitchen cleaning prices Maui, restaurant cleaning checklist Maui, hire restaurant cleaners in Maui" />
        <link rel="canonical" href="https://redrockcleans.com/maui/restaurant-cleaning" />
      </Helmet>
      
      <MauiNavigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/src/assets/hero-commercial.jpg" 
              alt="Professional restaurant cleaning service at a Maui dining establishment"
              className="w-full h-full object-cover scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                Impeccable Restaurant Cleaning for 5-Star Experiences on Maui
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                In Maui's competitive dining scene, cleanliness is just as important as the food and service for earning top reviews and ensuring guest safety. Red Rock Cleans delivers comprehensive restaurant cleaning that helps you ace health inspections, create an unforgettable ambiance, and protect your reputation across Lahaina, Wailea, Kihei, and beyond.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="h-14 text-lg px-8" asChild>
                  <Link to="/commercial-quote?location=maui">
                    <Calendar className="w-5 h-5 mr-2" />
                    Get Your Free Restaurant Assessment
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="h-14 text-lg px-8" asChild>
                  <Link to="/contact">
                    <Home className="w-5 h-5 mr-2" />
                    Contact Us
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Exceeding Health Standards Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Exceeding Hawaii Department of Health Standards
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <ClipboardCheck className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Health Code & Inspection Ready</h3>
                      <p className="text-muted-foreground">
                        Our meticulous approach addresses all inspection-critical areas to help you ace health inspections. We follow Hawaii Department of Health standards and can provide emergency pre-inspection cleaning when needed.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Flame className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Kitchen Degreasing & Safety</h3>
                      <p className="text-muted-foreground">
                        Our focus on removing hazardous grease buildup from cooking equipment, exhaust hoods, floors, and walls ensures fire safety and health code compliance for your commercial kitchen.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Sparkles className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Unforgettable Guest Ambiance</h3>
                      <p className="text-muted-foreground">
                        A spotless front-of-house creates a welcoming "aloha" atmosphere for diners. From pristine dining rooms to gleaming entryways, we ensure every guest's first impression is perfect.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Restaurant Cleaning Checklist Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Our Comprehensive Restaurant Cleaning Checklist
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <DoorOpen className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Front-of-House</h3>
                      <p className="text-muted-foreground">
                        Cleaning dining areas, entryways, windows, host stands, and all guest touchpoints to create the pristine atmosphere that enhances every dining experience.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <ChefHat className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Commercial Kitchens</h3>
                      <p className="text-muted-foreground">
                        Deep cleaning food prep surfaces, cooking equipment, floors, exhaust hoods, and all kitchen areas with food-safe sanitizers and commercial-grade degreasers.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Droplets className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Bar Areas</h3>
                      <p className="text-muted-foreground">
                        Sanitizing taps and dispensers, cleaning behind and under the bar, degreasing floor mats, and ensuring all beverage service areas meet health standards.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Hand className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Restrooms</h3>
                      <p className="text-muted-foreground">
                        Intensive sanitation and restocking to meet guest expectations for cleanliness, including all fixtures, floors, and high-touch surfaces.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Recipe for Spotless Restaurant Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Our Recipe for a Spotless Maui Restaurant
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    <CountUp end={500} duration={2} />+
                  </div>
                  <h3 className="text-lg font-semibold mb-2">5-Star Reviews Supported</h3>
                  <p className="text-muted-foreground text-sm">
                    Maui restaurants trust our cleaning for guest satisfaction
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    100%
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Health Inspections Passed</h3>
                  <p className="text-muted-foreground text-sm">
                    Perfect compliance record across all Maui restaurants
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Utensils className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    <CountUp end={50000} duration={2} separator="," />+
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Happy Diners Served</h3>
                  <p className="text-muted-foreground text-sm">
                    Meals enjoyed in our spotlessly cleaned restaurants
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
                          <h4 className="font-semibold mb-2">Local Restaurant Cleaning Services</h4>
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
                            Get Restaurant Cleaning Quote for {town.name}
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
                    <Dumbbell className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Gym Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Hygienic fitness center cleaning and equipment sanitation
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/maui/gym-cleaning">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <Stethoscope className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Medical Office Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      HIPAA compliant cleaning for healthcare facilities
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/maui/medical-office-cleaning">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <School className="h-8 w-8 text-primary mx-auto mb-4" />
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
                <AccordionItem value="health-inspections" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">How do you help restaurants pass health inspections on Maui?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Our cleaning protocols are specifically designed to meet Hawaii Department of Health standards. We focus on all inspection-critical areas including food prep surfaces, equipment sanitation, proper waste disposal, and cross-contamination prevention. We also offer emergency pre-inspection cleaning and maintain detailed documentation to support your compliance efforts.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="kitchen-degreasing" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">What is kitchen degreasing and why is it important?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Kitchen degreasing is our intensive cleaning process that removes dangerous grease buildup from cooking equipment, exhaust hoods, floors, and walls using commercial-grade degreasers. It's critical for fire safety, health code compliance, and preventing equipment failures. We recommend weekly deep degreasing for most Maui commercial kitchens.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="what-included" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">What's included in restaurant cleaning services?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Our comprehensive restaurant cleaning includes front-of-house cleaning (dining areas, entryways, windows), commercial kitchen deep cleaning and degreasing, bar area sanitation, restroom intensive cleaning, floor care, and all health code-critical areas. We customize our service to your specific restaurant type and schedule all cleaning during your closed hours.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="cost" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">What is the cost of restaurant cleaning on Maui?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Restaurant cleaning costs vary based on restaurant size, service frequency, kitchen complexity, and specific requirements. Most Maui restaurants find our services cost-effective when considering improved guest reviews, passed health inspections, and reduced food safety risks. We provide transparent pricing with detailed quotes. Contact us for a free assessment and customized proposal for your restaurant.
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
              Ready to Elevate Your Restaurant's Cleanliness Standards?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join Maui's top-rated restaurants that trust Red Rock Cleans for impeccable cleanliness
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
              <Link to="/commercial-quote?location=maui">Get Your Free Restaurant Cleaning Assessment</Link>
            </Button>
          </div>
        </section>

        {/* Image Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <img 
                src="/static/service-products.jpg" 
                alt="An immaculate and empty upscale restaurant in Lahaina, Maui, cleaned by Red Rock Cleans"
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

export default RestaurantCleaningMauiPage;

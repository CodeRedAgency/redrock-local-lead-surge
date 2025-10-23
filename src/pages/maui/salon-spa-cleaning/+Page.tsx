import { MauiNavigation } from "@/components/MauiNavigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Sparkles, Droplets, Heart, Bed, Paintbrush, Sofa, ShowerHead, Smile, BadgeCheck, Wind, MapPin, Calendar, Home, ShoppingBag, Stethoscope, Dumbbell, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import CountUp from "react-countup";

const towns = [
  {
    id: "wailea",
    name: "Wailea",
    description: "Wailea luxury salons and spas trust our professional cleaning services to maintain the pristine, serene environments that deliver the ultimate relaxation experience for discerning clients.",
    faq: [
      {
        question: "Can you clean our Wailea spa during off-hours?",
        answer: "Yes, we schedule salon and spa cleaning during your facility's closed hours, typically evening or early morning, to ensure zero disruption to treatments and optimal presentation before opening."
      },
      {
        question: "What disinfectants do you use in Wailea spas?",
        answer: "We use EPA-approved, salon-safe disinfectants that meet Hawaii State Board of Barbering and Cosmetology standards while being gentle on surfaces and safe for client contact areas."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has transformed our Wailea day spa's cleanliness standards. Clients constantly compliment our immaculate facility, and we've never been more confident in our hygiene.",
      author: "Spa Director, Wailea Luxury Wellness"
    }
  },
  {
    id: "makena",
    name: "Makena",
    description: "Makena salons and spas rely on our comprehensive cleaning services to eliminate product residue, maintain hygiene, and create the tranquil atmosphere that keeps clients returning.",
    faq: [
      {
        question: "How do you handle product buildup in Makena salons?",
        answer: "We use specialized cleaning solutions designed to remove hair product residue, nail polish, and spa oils from all surfaces while protecting delicate fixtures and maintaining the luxury aesthetic."
      },
      {
        question: "Do you provide emergency cleaning in Makena?",
        answer: "Yes, we offer rapid response cleaning for urgent situations such as special events, VIP client visits, or pre-inspection preparation to ensure your facility is always presentation-ready."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans' attention to detail in our Makena salon is outstanding. Every treatment room, station, and surface gleams with cleanliness.",
      author: "Owner, Makena Hair & Beauty Studio"
    }
  },
  {
    id: "kihei",
    name: "Kihei",
    description: "Kihei beauty and wellness facilities benefit from our specialized cleaning protocols that address treatment rooms, styling stations, and all areas to ensure Hawaii Board standards and client satisfaction.",
    faq: [
      {
        question: "What is included in Kihei salon and spa cleaning?",
        answer: "Our service includes treatment room sanitization, styling station cleaning, nail station and pedicure chair disinfection, reception area maintenance, restroom deep cleaning, floor care, trash removal, and supply restocking."
      },
      {
        question: "How often should Kihei salons schedule cleaning?",
        answer: "We recommend daily light cleaning for active salons and spas, with weekly deep cleaning and monthly specialized services like upholstery cleaning for optimal hygiene and ambiance."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans' systematic approach to our Kihei medispa has dramatically improved our client feedback and created a competitive advantage.",
      author: "Director, Kihei Medical Spa"
    }
  },
  {
    id: "kapalua",
    name: "Kapalua",
    description: "Kapalua luxury spas trust our meticulous cleaning services to maintain the ultra-premium standards expected by high-end clientele while ensuring complete hygiene and serenity.",
    faq: [
      {
        question: "Are your Kapalua spa cleanings eco-friendly?",
        answer: "Yes, we offer green cleaning options using environmentally responsible, non-toxic products that are effective at cleaning while being safe for clients, staff, and the environment."
      },
      {
        question: "What makes your Kapalua spa service different?",
        answer: "We specialize in luxury wellness environments with staff trained in gentle product handling, delicate surface care, and maintaining the exceptional serenity and cleanliness that premium spas require."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provides the level of cleanliness our Kapalua clients expect from a world-class resort spa. Their professionalism and care are unmatched.",
      author: "Spa Manager, Kapalua Resort & Spa"
    }
  },
  {
    id: "kaanapali",
    name: "Ka'anapali",
    description: "Ka'anapali salons and spas rely on our specialized services to eliminate contaminants, enhance ambiance, and create the immaculate environment that builds client trust and loyalty.",
    faq: [
      {
        question: "How do you prevent cross-contamination in Ka'anapali spas?",
        answer: "We use color-coded cleaning systems, separate tools for different areas, and follow strict protocols to prevent the spread of bacteria between treatment rooms, nail stations, and common areas."
      },
      {
        question: "Can you handle large spa facilities in Ka'anapali?",
        answer: "Yes, we have the staff, equipment, and experience to efficiently clean spas of all sizes, from boutique salons to large multi-room resort wellness centers."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has never missed a cleaning at our Ka'anapali salon. Their reliability and thoroughness keep our facility looking pristine.",
      author: "Operations Manager, Ka'anapali Beauty Collective"
    }
  },
  {
    id: "lahaina",
    name: "Lahaina",
    description: "Lahaina beauty and wellness facilities benefit from our comprehensive cleaning that addresses all surfaces, equipment, and client areas to create the perfect sanctuary for relaxation.",
    faq: [
      {
        question: "What cleaning methods do you use in Lahaina salons?",
        answer: "We use hospital-grade disinfectants, microfiber cleaning systems, specialized equipment cleaners, and gentle yet effective methods designed specifically for salon and spa environments."
      },
      {
        question: "Can you clean specialized spa equipment?",
        answer: "Yes, we clean all types of spa equipment including massage tables, pedicure chairs, facial steamers, saunas, and hydrotherapy equipment with appropriate specialized care."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans' expertise in spa cleaning is evident in our Lahaina facility. Clients constantly comment on how fresh and inviting everything feels.",
      author: "Facility Director, Lahaina Wellness Center"
    }
  },
  {
    id: "spreckelsville",
    name: "Spreckelsville",
    description: "Spreckelsville salons and spas trust our precision cleaning services to maintain the spotless, tranquil environment that supports client relaxation and enhances brand reputation.",
    faq: [
      {
        question: "How do you ensure quality in Spreckelsville salons?",
        answer: "We use detailed checklists, conduct quality inspections, provide photographic documentation, and maintain regular communication to ensure consistent, exceptional service and hygiene standards."
      },
      {
        question: "What are your rates for Spreckelsville spas?",
        answer: "Pricing is based on facility size, number of treatment rooms and stations, cleaning frequency, and specific services required. Contact us for a customized quote tailored to your salon or spa's needs."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been instrumental in maintaining our Spreckelsville salon's high standards. Their systematic approach has elevated our brand image.",
      author: "Owner, Spreckelsville Hair Design"
    }
  },
  {
    id: "paia",
    name: "Pa'ia",
    description: "Pa'ia salons and spas rely on our expert cleaning services to eliminate residue, maintain hygiene, and create the welcoming atmosphere that keeps clients feeling pampered and valued.",
    faq: [
      {
        question: "Do you serve small salons in Pa'ia?",
        answer: "Yes, we service beauty and wellness facilities of all sizes, from small boutique salons to large multi-service spas, with the same level of expertise and attention to detail."
      },
      {
        question: "What safety protocols do you follow in Pa'ia salons?",
        answer: "All technicians follow strict hygiene protocols, wear appropriate PPE, use salon-safe cleaning products, and are trained in proper cleaning procedures for beauty and wellness facilities."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans transformed our Pa'ia salon from a cleaning concern to a competitive advantage. Our client retention has improved significantly.",
      author: "Manager, Pa'ia Natural Beauty Studio"
    }
  },
  {
    id: "kuau",
    name: "Kuau",
    description: "Kuau beauty and wellness facilities benefit from our specialized cleaning protocols designed to enhance hygiene while maintaining the serene environment that clients deserve.",
    faq: [
      {
        question: "How quickly can you respond in Kuau?",
        answer: "We offer same-day emergency cleaning for urgent situations and can schedule routine salon and spa maintenance within 24-48 hours of initial contact."
      },
      {
        question: "Do you provide cleaning verification in Kuau?",
        answer: "Yes, we provide service reports, before/after photos, and hygiene compliance documentation to confirm thorough cleaning and adherence to Hawaii State Board standards."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans' proactive approach to our Kuau spa has eliminated hygiene concerns. Clients feel completely safe and relaxed in our clean environment.",
      author: "Director, Kuau Wellness & Spa"
    }
  },
  {
    id: "haiku",
    name: "Ha'iku",
    description: "Ha'iku salons and spas trust our comprehensive cleaning services to maintain the pristine, odor-free environment that creates the perfect sanctuary for beauty and wellness treatments.",
    faq: [
      {
        question: "What makes Ha'iku salon cleaning unique?",
        answer: "Ha'iku's holistic wellness culture requires specialized cleaning for everything from traditional salons to natural spas. We customize our protocols to address your specific services and natural product requirements."
      },
      {
        question: "Can you provide training in Ha'iku?",
        answer: "Yes, we offer training sessions on daily maintenance, spot cleaning between professional services, and proper sanitation protocols to support ongoing cleanliness and Hawaii Board compliance."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been essential to our Ha'iku holistic spa's success. Their understanding of natural wellness facility cleaning is exceptional.",
      author: "Owner, Ha'iku Natural Healing Spa"
    }
  }
];

const SalonSpaCleaningMauiPage = () => {
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
        <title>Salon & Spa Cleaning Maui | Red Rock Cleans</title>
        <meta name="description" content="Salon & spa cleaning in Maui. Hygienic, luxurious environments for Maui beauty businesses. Professional Hawaiian service today!" />
        <meta name="keywords" content="salon cleaning near me, spa cleaning Maui, hair salon cleaning Lahaina, nail salon cleaning Wailea, medispa cleaning Maui, best salon cleaners Maui, hygienic spa cleaning Kihei, beauty salon sanitation, barber shop cleaning Maui, salon cleaning cost Maui, spa cleaning prices Maui, what is salon cleaning Maui, hire spa cleaners in Maui" />
        <link rel="canonical" href="https://redrockcleans.com/maui/salon-spa-cleaning" />
      </Helmet>
      
      <MauiNavigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/src/assets/hero-commercial.jpg" 
              alt="Professional salon and spa cleaning service at a Maui wellness facility"
              className="w-full h-full object-cover scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                Pristine Salon & Spa Cleaning for Ultimate Client Relaxation on Maui
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                In Maui's luxury wellness industry, cleanliness is the cornerstone of creating a serene, hygienic, and trustworthy "aloha" experience for every client who walks through your door. Our specialized salon and spa cleaning services ensure that every treatment room, styling station, and client area is immaculately maintained, meeting Hawaii State Board of Barbering and Cosmetology standards while creating the tranquil sanctuary your clients expect.
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

        {/* Elevating Your Client's Experience Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Elevating Your Client's Experience
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Sparkles className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Serene & Inviting Atmosphere</h3>
                      <p className="text-muted-foreground">
                        Immaculate cleanliness is fundamental to creating the relaxation and high-end feel that clients seek in their wellness experience. Our thorough cleaning eliminates visual distractions, controls odors, and creates the pristine environment where clients can truly unwind, resulting in better reviews, stronger loyalty, and premium pricing power.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Droplets className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Strict Hygiene & Disinfection</h3>
                      <p className="text-muted-foreground">
                        Preventing cross-contamination and meeting Hawaii State Board of Barbering and Cosmetology standards is non-negotiable in the beauty and wellness industry. We use professional-grade disinfectants and follow rigorous protocols to sanitize all surfaces, equipment, and tools, protecting your clients' health and your business's reputation.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Flawless First Impressions</h3>
                      <p className="text-muted-foreground">
                        A spotless reception and waiting area sets the tone for the entire client experience and immediately communicates the quality of care they'll receive. Our meticulous cleaning of entry spaces, seating areas, and client touchpoints creates the welcoming, luxurious first impression that converts visitors into loyal clients.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Comprehensive Salon & Spa Cleaning Checklist Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Our Comprehensive Salon & Spa Cleaning Checklist
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Bed className="h-10 w-10 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-3">Treatment & Styling Rooms</h3>
                      <p className="text-muted-foreground text-sm">
                        Comprehensive sanitization of massage tables, facial beds, styling chairs, and all surfaces. We remove hair, product residue, and oils while disinfecting equipment to ensure a clean, safe environment for every treatment and service.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Paintbrush className="h-10 w-10 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-3">Nail Stations & Pedicure Chairs</h3>
                      <p className="text-muted-foreground text-sm">
                        Deep cleaning and disinfection of foot baths, pedicure chairs, and manicure stations using specialized sanitizers. We thoroughly clean all surfaces, remove polish residue, and ensure whirlpool jets are properly sanitized to prevent bacterial growth.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Sofa className="h-10 w-10 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-3">Reception & Waiting Areas</h3>
                      <p className="text-muted-foreground text-sm">
                        Maintaining spotless first impressions through meticulous dusting, floor care, and surface cleaning. We ensure magazines are organized, seating is clean, and all touchpoints are sanitized to create the welcoming environment that sets the tone for client experiences.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <ShowerHead className="h-10 w-10 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-3">Restrooms & Changing Areas</h3>
                      <p className="text-muted-foreground text-sm">
                        Intensive sanitization and restocking to luxury spa standards. We deep clean all surfaces, ensure fresh towels and amenities are properly displayed, and maintain the impeccable hygiene standards that discerning wellness clients expect.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* The Difference a Professional Clean Makes Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                The Difference a Professional Clean Makes
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Smile className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    <CountUp end={92} duration={2} />%
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Client Satisfaction Boost</h3>
                  <p className="text-muted-foreground text-sm">
                    Average increase in client satisfaction scores in professionally cleaned spas
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BadgeCheck className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    <CountUp end={100} duration={2} />%
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Hygiene Standard Score</h3>
                  <p className="text-muted-foreground text-sm">
                    Full compliance with Hawaii State Board of Barbering and Cosmetology requirements
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Wind className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    <CountUp end={98} duration={2} />%
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Stress-Free Environment</h3>
                  <p className="text-muted-foreground text-sm">
                    Clients report feeling more relaxed in immaculately cleaned spa environments
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
                          <h4 className="font-semibold mb-2">Local Salon & Spa Cleaning Services</h4>
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
                            Get Salon & Spa Cleaning Quote for {town.name}
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
                    <ShoppingBag className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Retail Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Professional cleaning services for retail stores and shopping centers
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/maui/retail-cleaning">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <Stethoscope className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Medical Office Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Hygienic cleaning services for medical offices and medispas
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/maui/medical-office-cleaning">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <Dumbbell className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Gym Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Hygienic cleaning services for fitness centers and wellness clubs
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/maui/gym-cleaning">Learn More</Link>
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
                <AccordionItem value="what-is-salon-cleaning" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">What is salon and spa cleaning and why is it important?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Salon and spa cleaning is specialized commercial cleaning designed for beauty and wellness facilities including hair salons, day spas, nail salons, medispas, and barber shops. It goes beyond standard cleaning to address unique challenges like hair removal, product residue, and intensive disinfection requirements. On Maui, where the wellness industry serves both residents and tourists with high expectations, professional cleaning ensures compliance with Hawaii State Board of Barbering and Cosmetology standards while creating the serene, hygienic environment that builds client trust and loyalty.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="board-compliance" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">Do you meet Hawaii State Board requirements?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Yes, we follow all Hawaii State Board of Barbering and Cosmetology sanitation requirements including proper disinfection of all surfaces and equipment, prevention of cross-contamination, and use of EPA-approved disinfectants. Our team is trained in industry-specific protocols and can provide documentation to support your compliance during inspections.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="schedule" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">Can you clean around our salon hours?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Absolutely. We schedule salon and spa cleaning during your closed hours, typically evening after closing or early morning before opening, to ensure zero disruption to client services. For facilities with extended hours, we can work in phases to clean sections systematically. This allows our team to perform thorough cleaning and disinfection while ensuring your facility is pristine when clients arrive.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="cost" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">What is the cost of salon and spa cleaning on Maui?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Salon and spa cleaning costs vary based on facility size, number of treatment rooms and styling stations, cleaning frequency, specialized services like pedicure chair disinfection, and specific operational requirements. We provide transparent, competitive pricing with customized quotes for your facility. Most salons and spas find our services to be a valuable investment that enhances client satisfaction, ensures regulatory compliance, improves reviews, and supports premium pricing. Contact us for a free assessment and detailed proposal tailored to your salon or spa's needs.
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
              Ready to Create a More Serene Client Experience?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join Maui's leading salons and spas that trust Red Rock Cleans for pristine, professional cleaning
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
              <Link to="/commercial-quote?location=maui">Get Your Free Salon & Spa Cleaning Assessment</Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default SalonSpaCleaningMauiPage;


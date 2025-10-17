import { MauiNavigation } from "@/components/MauiNavigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Diamond, Sparkles, Handshake, SprayCan, Square, Car, Sofa, Users, DollarSign, Search, MapPin, Calendar, Home, ShoppingBag, Utensils, Building2, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import CountUp from "react-countup";

const towns = [
  {
    id: "wailea",
    name: "Wailea",
    description: "Wailea showrooms and luxury retail spaces trust our professional showroom cleaning services to maintain the pristine, impressive environments that showcase premium products and drive sales.",
    faq: [
      {
        question: "Can you clean our Wailea showroom during off-hours?",
        answer: "Yes, we schedule showroom cleaning during your facility's closed hours, typically early morning or late evening, to ensure zero disruption to customers and optimal presentation before opening."
      },
      {
        question: "What products do you use in Wailea luxury showrooms?",
        answer: "We use premium, streak-free cleaning solutions that are safe for all surfaces including glass, chrome, leather, and high-end finishes without leaving residue or damaging products."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has transformed our Wailea luxury car dealership's appearance. Our customers immediately notice the pristine environment, and it positively impacts our sales.",
      author: "General Manager, Wailea Premium Auto"
    }
  },
  {
    id: "makena",
    name: "Makena",
    description: "Makena showrooms rely on our comprehensive cleaning services to eliminate dust, polish surfaces, and create the flawless presentation that highlights product quality and craftsmanship.",
    faq: [
      {
        question: "How do you handle delicate product displays in Makena?",
        answer: "Our team is trained in gentle, lint-free cleaning techniques for delicate items, using microfiber cloths and appropriate products that clean without scratching or damaging valuable merchandise."
      },
      {
        question: "Do you provide emergency cleaning in Makena?",
        answer: "Yes, we offer rapid response cleaning for urgent situations such as VIP client visits, special events, or pre-inspection preparation to ensure your showroom is always presentation-ready."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans' attention to detail in our Makena furniture showroom is outstanding. Every piece looks its absolute best, and customers appreciate the pristine environment.",
      author: "Owner, Makena Fine Furnishings"
    }
  },
  {
    id: "kihei",
    name: "Kihei",
    description: "Kihei showroom facilities benefit from our specialized cleaning protocols that address floors, windows, displays, and all surfaces to ensure every product is showcased in the best possible light.",
    faq: [
      {
        question: "What is included in Kihei showroom cleaning?",
        answer: "Our service includes floor polishing, window and glass cleaning, product dusting, display case cleaning, client lounge maintenance, restroom sanitization, and trash removal."
      },
      {
        question: "How often should Kihei showrooms schedule cleaning?",
        answer: "We recommend daily light cleaning for high-traffic showrooms, with weekly deep cleaning and monthly floor polishing for optimal presentation and customer impressions."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans' systematic approach to our Kihei showroom has dramatically improved customer feedback and created a competitive advantage in our market.",
      author: "Director, Kihei Boat & Marine Showroom"
    }
  },
  {
    id: "kapalua",
    name: "Kapalua",
    description: "Kapalua luxury showrooms trust our meticulous cleaning services to maintain the ultra-premium standards expected by discerning clients while ensuring every surface gleams.",
    faq: [
      {
        question: "Are your Kapalua showroom cleanings eco-friendly?",
        answer: "Yes, we offer green cleaning options using environmentally responsible, non-toxic products that are effective at cleaning while being safe for products, staff, and customers."
      },
      {
        question: "What makes your Kapalua showroom service different?",
        answer: "We specialize in luxury retail environments with staff trained in careful product handling, premium surface care, and maintaining the exceptional standards high-end showrooms require."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provides the level of cleanliness our Kapalua clients expect from a premier luxury showroom. Their professionalism and care are unmatched.",
      author: "Sales Director, Kapalua Luxury Motors"
    }
  },
  {
    id: "kaanapali",
    name: "Ka'anapali",
    description: "Ka'anapali showrooms rely on our specialized services to eliminate dust, enhance product visibility, and create the immaculate environment that drives customer confidence and purchases.",
    faq: [
      {
        question: "How do you maintain shine in Ka'anapali showrooms?",
        answer: "We use professional-grade polishing equipment and specialized solutions for different flooring types to ensure consistent, mirror-like shine that enhances product presentation."
      },
      {
        question: "Can you handle large showroom facilities in Ka'anapali?",
        answer: "Yes, we have the staff, equipment, and experience to efficiently clean showrooms of all sizes, from boutique galleries to large multi-level automotive dealerships."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has never missed a cleaning at our Ka'anapali showroom. Their reliability and attention to detail keep our facility looking world-class.",
      author: "Operations Manager, Ka'anapali Premium Furnishings"
    }
  },
  {
    id: "lahaina",
    name: "Lahaina",
    description: "Lahaina showroom facilities benefit from our comprehensive cleaning that addresses floors, windows, products, and all client-facing areas to create the perfect buying environment.",
    faq: [
      {
        question: "What cleaning methods do you use in Lahaina showrooms?",
        answer: "We use streak-free glass cleaners, high-speed floor buffers, microfiber dusting systems, and specialized equipment designed specifically for showroom environments."
      },
      {
        question: "Can you clean specialized showroom types?",
        answer: "Yes, we clean all types of showrooms including automotive dealerships, furniture galleries, jewelry stores, boat showrooms, and luxury retail spaces with appropriate specialized care."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans' expertise in showroom cleaning is evident in our Lahaina facility. Customers constantly compliment us on how pristine and inviting everything looks.",
      author: "Facility Director, Lahaina Luxury Yachts"
    }
  },
  {
    id: "spreckelsville",
    name: "Spreckelsville",
    description: "Spreckelsville showroom facilities trust our precision cleaning services to maintain the spotless, professional environment that enhances brand perception and supports sales success.",
    faq: [
      {
        question: "How do you ensure quality in Spreckelsville showrooms?",
        answer: "We use detailed checklists, conduct quality inspections, provide photographic documentation, and maintain regular communication to ensure consistent, exceptional presentation."
      },
      {
        question: "What are your rates for Spreckelsville showrooms?",
        answer: "Pricing is based on facility size, cleaning frequency, and specific services required. Contact us for a customized quote tailored to your showroom's needs."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been instrumental in maintaining our Spreckelsville showroom's high standards. Their systematic approach has elevated our brand image.",
      author: "Owner, Spreckelsville Design Gallery"
    }
  },
  {
    id: "paia",
    name: "Pa'ia",
    description: "Pa'ia showrooms rely on our expert cleaning services to eliminate dust, enhance lighting, and create the inviting atmosphere that showcases products beautifully and drives customer engagement.",
    faq: [
      {
        question: "Do you serve small showrooms in Pa'ia?",
        answer: "Yes, we service showrooms of all sizes, from small boutique galleries to large multi-product facilities, with the same level of expertise and attention to detail."
      },
      {
        question: "What safety protocols do you follow in Pa'ia showrooms?",
        answer: "All technicians follow strict protocols to protect valuable merchandise, wear appropriate clean attire, use safe cleaning methods, and are fully insured for your peace of mind."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans transformed our Pa'ia showroom from a cleaning concern to a sales asset. Our conversion rates have improved significantly.",
      author: "Manager, Pa'ia Surf & Sport Showroom"
    }
  },
  {
    id: "kuau",
    name: "Kuau",
    description: "Kuau showroom facilities benefit from our specialized cleaning protocols designed to enhance product presentation while maintaining the professional environment that influences buying decisions.",
    faq: [
      {
        question: "How quickly can you respond in Kuau?",
        answer: "We offer same-day emergency cleaning for urgent situations and can schedule routine showroom maintenance within 24-48 hours of initial contact."
      },
      {
        question: "Do you provide cleaning verification in Kuau?",
        answer: "Yes, we provide service reports, before/after photos, and quality assurance documentation to confirm thorough cleaning and presentation standards."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans' proactive approach to our Kuau showroom has elevated our brand image. Customers consistently comment on how impressive our facility looks.",
      author: "Director, Kuau Marine Equipment Gallery"
    }
  },
  {
    id: "haiku",
    name: "Ha'iku",
    description: "Ha'iku showrooms trust our comprehensive cleaning services to maintain the pristine, dust-free environment that allows products to shine and creates lasting customer impressions.",
    faq: [
      {
        question: "What makes Ha'iku showroom cleaning unique?",
        answer: "Ha'iku's diverse retail landscape requires specialized cleaning for everything from vehicle showrooms to boutique galleries. We customize our protocols to address your specific products and presentation needs."
      },
      {
        question: "Can you provide training in Ha'iku?",
        answer: "Yes, we offer training sessions on daily maintenance, spot cleaning between professional services, and proper product care to support ongoing showroom excellence."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been essential to our Ha'iku showroom's success. Their understanding of luxury retail cleaning is exceptional.",
      author: "Owner, Ha'iku Premium Motorcycles"
    }
  }
];

const ShowroomCleaningMauiPage = () => {
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
        <title>Showroom Cleaning Services Maui | Red Rock Cleans</title>
        <meta name="description" content="Professional showroom cleaning on Maui. Red Rock Cleans enhances your product presentation with meticulous cleaning for car dealerships, furniture stores, and more in Wailea and Lahaina." />
        <meta name="keywords" content="showroom cleaning near me, car dealership cleaning Maui, furniture showroom cleaning Kihei, luxury retail cleaning Wailea, best showroom cleaners Maui, professional showroom cleaning Lahaina, showroom floor polishing Maui, immaculate dealership cleaning Maui, showroom cleaning cost Maui, dealership cleaning prices Maui, what is showroom cleaning Maui, hire showroom cleaners in Maui" />
        <link rel="canonical" href="https://redrockcleans.com/maui/showroom-cleaning" />
      </Helmet>
      
      <MauiNavigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/src/assets/hero-commercial.jpg" 
              alt="Professional showroom cleaning service at a Maui dealership"
              className="w-full h-full object-cover scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                Impeccable Showroom Cleaning to Showcase Your Maui Products
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                For high-value products on Maui, the showroom's cleanliness is a direct reflection of the product's quality and is crucial for influencing purchasing decisions for both kama'aina and visitors. Our meticulous showroom cleaning services ensure that every surface gleams, every product is dust-free, and your space creates the premium impression that drives customer confidence and sales.
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

        {/* Creating a Flawless Buying Environment Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Creating a Flawless Buying Environment
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Diamond className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Pristine Product Presentation</h3>
                      <p className="text-muted-foreground">
                        We ensure every product is completely free of dust, smudges, and fingerprints with meticulous, gentle cleaning techniques. Our attention to detail means that vehicles, furniture, jewelry, and all merchandise are presented in their absolute best condition, allowing their true quality and craftsmanship to shine through to potential buyers.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Sparkles className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Gleaming Floors & Surfaces</h3>
                      <p className="text-muted-foreground">
                        Perfectly polished floors and spotless surfaces that reflect luxury and attention to detail are essential for high-end showrooms. Our specialized floor care and surface polishing create the mirror-like shine that enhances lighting, showcases products beautifully, and immediately communicates quality to every customer who walks through your door.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Handshake className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">A Premium Client Experience</h3>
                      <p className="text-muted-foreground">
                        Clean, comfortable client lounges, spotless offices, and immaculate reception areas create the professional environment that builds trust and confidence. We ensure that every client-facing space reflects the same premium quality as your products, from waiting areas to sales offices, creating a cohesive luxury experience.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Comprehensive Showroom Cleaning Checklist Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Our Meticulous Showroom Cleaning Checklist
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <SprayCan className="h-10 w-10 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-3">Floor Care & Polishing</h3>
                      <p className="text-muted-foreground text-sm">
                        Specialized care for tile, concrete, hardwood, and epoxy floors including professional buffing, polishing, and protective coating application. We ensure your showroom floors maintain a consistent, high-gloss finish that reflects light beautifully and enhances the entire space.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Square className="h-10 w-10 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-3">Window & Glass Cleaning</h3>
                      <p className="text-muted-foreground text-sm">
                        Streak-free cleaning for large plate glass windows, display cases, and glass partitions using professional squeegees and solutions. Crystal-clear windows maximize natural light, enhance product visibility, and create the open, inviting atmosphere that draws customers into your showroom.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Car className="h-10 w-10 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-3">Product & Display Dusting</h3>
                      <p className="text-muted-foreground text-sm">
                        Careful, lint-free dusting of all products, vehicles, furniture, and merchandise using microfiber cloths and appropriate cleaning solutions. We treat each item with care, ensuring no scratches, streaks, or damage while removing every trace of dust, fingerprints, and environmental debris.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Sofa className="h-10 w-10 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-3">Client Lounges & Offices</h3>
                      <p className="text-muted-foreground text-sm">
                        Creating comfortable, impressive spaces where clients feel valued and relaxed during the sales process. We clean and maintain seating areas, coffee stations, restrooms, and sales offices to ensure every touchpoint reflects the premium quality your brand represents.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* The Impact of a Perfectly Clean Showroom Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                The Impact of a Perfectly Clean Showroom
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    <CountUp end={98} duration={2} />%
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Positive Client Impressions</h3>
                  <p className="text-muted-foreground text-sm">
                    Customers report positive first impressions in professionally cleaned showrooms
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    <CountUp end={25} duration={2} />%
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Increased Perceived Value</h3>
                  <p className="text-muted-foreground text-sm">
                    Average increase in perceived product value in pristine showroom environments
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    <CountUp end={100} duration={2} />%
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Attention to Detail Score</h3>
                  <p className="text-muted-foreground text-sm">
                    Our commitment to perfection in every aspect of showroom cleaning
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
                          <h4 className="font-semibold mb-2">Local Showroom Cleaning Services</h4>
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
                            Get Showroom Cleaning Quote for {town.name}
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
                    <Utensils className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Restaurant Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Specialized cleaning for restaurants and commercial kitchens
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/maui/restaurant-cleaning">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <Building2 className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Government Facility Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Professional cleaning services for government buildings and public facilities
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/maui/government-facility-cleaning">Learn More</Link>
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
                <AccordionItem value="what-is-showroom-cleaning" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">What is showroom cleaning and why is it important?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Showroom cleaning is specialized commercial cleaning designed for retail spaces that display high-value products such as vehicles, furniture, jewelry, or luxury goods. It goes beyond standard cleaning to ensure every surface gleams, products are dust-free, and the entire environment creates a premium impression. On Maui, where showrooms serve both local residents and visitors with high expectations, impeccable cleanliness directly impacts purchasing decisions and brand perception.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="products-safe" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">Are your cleaning products safe for luxury merchandise?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Yes, we use premium cleaning products specifically formulated for high-end retail environments. Our solutions are safe for all surfaces including glass, chrome, leather, wood, and delicate finishes. We never use harsh chemicals that could damage merchandise, and our team is trained in gentle handling techniques to protect your valuable products while achieving pristine cleanliness.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="schedule" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">Can you clean around our showroom hours?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Absolutely. We schedule showroom cleaning during your closed hours, typically early morning before opening or evening after close, to ensure zero disruption to customers and sales activities. This allows our team to perform thorough cleaning, floor polishing, and detail work without interfering with your business operations, ensuring your showroom is pristine when you open for business each day.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="cost" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">What is the cost of showroom cleaning on Maui?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Showroom cleaning costs vary based on facility size, floor type, number of products or vehicles, cleaning frequency, and specialized services like floor polishing or high-reach window cleaning. We provide transparent, competitive pricing with customized quotes for your specific showroom. Many businesses find our services to be a valuable investment that enhances sales, improves brand perception, and protects valuable inventory. Contact us for a free assessment and detailed proposal tailored to your showroom's needs.
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
              Ready to Elevate Your Showroom's Presentation?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join Maui's premier showrooms that trust Red Rock Cleans for immaculate cleaning services
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
              <Link to="/commercial-quote?location=maui">Get Your Free Showroom Cleaning Assessment</Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ShowroomCleaningMauiPage;


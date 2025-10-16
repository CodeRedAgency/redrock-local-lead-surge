import { SouthFloridaNavigation } from "@/components/SouthFloridaNavigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Diamond, Sparkles, Handshake, Droplets, Square, Car, Sofa, Users, DollarSign, Search, MapPin, Calendar, ShoppingBag, Utensils, Building } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import CountUp from "react-countup";

const cities = [
  {
    id: "aventura",
    name: "Aventura",
    description: "Aventura showrooms trust our professional cleaning services to maintain pristine display environments that showcase high-value products and impress discerning clients.",
    faq: [
      {
        question: "Do you clean luxury car dealerships in Aventura?",
        answer: "Yes, we specialize in dealership cleaning with meticulous care for luxury vehicles, display areas, and client lounges that match Aventura's premium standards."
      },
      {
        question: "Can you work around Aventura showroom hours?",
        answer: "Absolutely. We schedule cleaning during closed hours, evenings, and weekends to avoid disrupting sales activities and client visits."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has transformed our Aventura showroom. Clients constantly comment on how immaculate our vehicles and facility look.",
      author: "Sales Director, Aventura Luxury Auto"
    }
  },
  {
    id: "cooper-city",
    name: "Cooper City",
    description: "Cooper City showrooms rely on our comprehensive cleaning to create impressive display environments that help close sales and build brand reputation.",
    faq: [
      {
        question: "What's included in showroom cleaning for Cooper City?",
        answer: "Our service includes floor polishing, window cleaning, product dusting, display cleaning, client lounge maintenance, and comprehensive surface sanitization."
      },
      {
        question: "How often should Cooper City showrooms be cleaned?",
        answer: "We recommend daily or nightly cleaning to maintain pristine conditions, with periodic deep cleaning for floors and windows."
      }
    ],
    testimonial: {
      text: "Our Cooper City showroom has never looked better. Red Rock Cleans understands the importance of presentation in sales.",
      author: "Owner, Cooper City Furniture Gallery"
    }
  },
  {
    id: "dania-beach",
    name: "Dania Beach",
    description: "Dania Beach showrooms benefit from our specialized cleaning that combats coastal humidity while maintaining sparkling displays and immaculate presentation.",
    faq: [
      {
        question: "How do you handle salt air in Dania Beach showrooms?",
        answer: "We use specialized products designed for coastal environments to clean windows and prevent salt buildup on surfaces and products."
      },
      {
        question: "Do you clean boat showrooms in Dania Beach?",
        answer: "Yes, we clean all types of showrooms including marine, automotive, furniture, and luxury retail with appropriate care for each product type."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans keeps our Dania Beach showroom spotless despite the coastal challenges. Our displays shine like new.",
      author: "Manager, Dania Beach Marine Showroom"
    }
  },
  {
    id: "davie",
    name: "Davie",
    description: "Davie showrooms depend on our meticulous cleaning services to maintain the professional presentation that influences purchasing decisions.",
    faq: [
      {
        question: "What is the cost of showroom cleaning in Davie?",
        answer: "Costs vary by showroom size and frequency. Most Davie showrooms invest $400-$1,500 per cleaning. We provide free customized quotes."
      },
      {
        question: "Do you clean RV showrooms in Davie?",
        answer: "Yes, we clean recreational vehicle showrooms with special attention to both interior displays and exterior presentation of vehicles."
      }
    ],
    testimonial: {
      text: "Our Davie showroom's sales have increased since partnering with Red Rock Cleans. A clean showroom makes a huge difference!",
      author: "General Manager, Davie Auto Group"
    }
  },
  {
    id: "fort-lauderdale",
    name: "Fort Lauderdale",
    description: "Fort Lauderdale showrooms trust our professional cleaning to maintain the sophisticated environments that showcase luxury products and impress high-end clients.",
    faq: [
      {
        question: "How do you protect products during cleaning in Fort Lauderdale?",
        answer: "We use lint-free cloths, product-safe cleaners, and gentle techniques to clean around merchandise without causing any damage or scratches."
      },
      {
        question: "Can you provide emergency cleaning in Fort Lauderdale showrooms?",
        answer: "Yes, we offer rapid response cleaning for special events, VIP visits, or unexpected situations requiring immediate attention."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Fort Lauderdale showroom to perfection. Their attention to detail matches our luxury brand standards.",
      author: "Showroom Director, Fort Lauderdale European Motors"
    }
  },
  {
    id: "hallandale-beach",
    name: "Hallandale Beach",
    description: "Hallandale Beach showrooms benefit from our systematic cleaning that ensures every product is displayed in the best possible light.",
    faq: [
      {
        question: "Do you clean furniture showrooms in Hallandale Beach?",
        answer: "Yes, we clean furniture showrooms with careful attention to protecting upholstery, wood finishes, and delicate display pieces."
      },
      {
        question: "How do you polish showroom floors in Hallandale Beach?",
        answer: "We use professional floor polishing equipment and premium products to achieve the mirror-like finish that luxury showrooms demand."
      }
    ],
    testimonial: {
      text: "Our Hallandale Beach showroom shines thanks to Red Rock Cleans. They understand luxury retail presentation perfectly.",
      author: "Owner, Hallandale Beach Design Center"
    }
  },
  {
    id: "hollywood",
    name: "Hollywood",
    description: "Hollywood showrooms rely on our professional cleaning to create the pristine environments where products sell themselves through flawless presentation.",
    faq: [
      {
        question: "What makes showroom cleaning different in Hollywood?",
        answer: "We understand showrooms require meticulous dust control, streak-free glass, perfectly polished floors, and gentle product care to maintain premium presentation."
      },
      {
        question: "Do you clean electronics showrooms in Hollywood?",
        answer: "Yes, we clean technology showrooms using appropriate anti-static methods and products safe for sensitive electronic displays."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has elevated our Hollywood showroom's appearance. Our closing rate has improved with the enhanced presentation.",
      author: "Sales Manager, Hollywood Premium Appliances"
    }
  },
  {
    id: "las-olas",
    name: "Las Olas",
    description: "Las Olas luxury showrooms trust our detailed cleaning services to maintain the exceptional standards their high-end clientele expect.",
    faq: [
      {
        question: "Can you clean high-end retail showrooms on Las Olas?",
        answer: "Yes, we specialize in luxury showroom cleaning with the meticulous care and white-glove service expected in Las Olas' premium retail district."
      },
      {
        question: "How do you clean display cases in Las Olas showrooms?",
        answer: "We use professional glass cleaning techniques to ensure display cases are crystal clear, fingerprint-free, and showcase products beautifully."
      }
    ],
    testimonial: {
      text: "Our Las Olas showroom exemplifies luxury, and Red Rock Cleans maintains that standard flawlessly. Essential partners in our success.",
      author: "Boutique Manager, Las Olas Boulevard Luxury"
    }
  },
  {
    id: "lauderdale-lakes",
    name: "Lauderdale Lakes",
    description: "Lauderdale Lakes showrooms benefit from our systematic cleaning approach that ensures consistent quality and impressive presentation.",
    faq: [
      {
        question: "Do you clean appliance showrooms in Lauderdale Lakes?",
        answer: "Yes, we clean all types of showrooms including appliances, carefully cleaning stainless steel, glass, and display models."
      },
      {
        question: "How do you ensure quality in Lauderdale Lakes showrooms?",
        answer: "We use detailed checklists, conduct regular inspections, and maintain close communication with management to ensure excellence."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans keeps our Lauderdale Lakes showroom consistently pristine. Reliable service we can always depend on.",
      author: "Store Manager, Lauderdale Lakes Home Center"
    }
  },
  {
    id: "lauderhill",
    name: "Lauderhill",
    description: "Lauderhill showrooms trust our professional cleaning to maintain the immaculate conditions that enhance product value and drive sales.",
    faq: [
      {
        question: "What showroom cleaning checklist do you follow in Lauderhill?",
        answer: "We clean floors, windows, products, displays, client areas, offices, and all surfaces using showroom-specific protocols."
      },
      {
        question: "Do you provide weekend cleaning in Lauderhill?",
        answer: "Yes, we offer flexible scheduling including weekends and evenings to work around your showroom's operating hours."
      }
    ],
    testimonial: {
      text: "Our Lauderhill showroom's appearance has improved dramatically with Red Rock Cleans. Professional service that delivers results.",
      author: "Regional Manager, Lauderhill Auto Mall"
    }
  },
  {
    id: "margate",
    name: "Margate",
    description: "Margate showrooms depend on our comprehensive cleaning services that create the impressive environments where customers make purchasing decisions.",
    faq: [
      {
        question: "How long does showroom cleaning take in Margate?",
        answer: "Cleaning time varies by size. Small showrooms typically take 2-3 hours, while larger facilities may require 4-6 hours of thorough cleaning."
      },
      {
        question: "Can you handle large Margate showroom facilities?",
        answer: "Yes, we service showrooms of all sizes from boutique displays to large multi-acre dealership campuses with complete coverage."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our Margate showroom for years. Consistent quality and exceptional understanding of our needs.",
      author: "Owner, Margate Motorsports"
    }
  },
  {
    id: "miramar",
    name: "Miramar",
    description: "Miramar showrooms rely on our specialized cleaning protocols that maintain spotless displays and enhance the perceived value of products.",
    faq: [
      {
        question: "What cleaning products do you use in Miramar showrooms?",
        answer: "We use professional-grade, product-safe cleaners that are effective on dust and fingerprints yet gentle on vehicles, furniture, and merchandise."
      },
      {
        question: "Do you clean motorcycle showrooms in Miramar?",
        answer: "Yes, we clean motorcycle and powersports showrooms with special care for chrome, paint, and leather surfaces."
      }
    ],
    testimonial: {
      text: "Our Miramar showroom's presentation standards have soared since partnering with Red Rock Cleans. Clients notice the difference!",
      author: "Director, Miramar Luxury Collection"
    }
  },
  {
    id: "north-lauderdale",
    name: "North Lauderdale",
    description: "North Lauderdale showrooms trust our thorough cleaning to maintain the welcoming, pristine environments that facilitate successful sales.",
    faq: [
      {
        question: "How do you keep North Lauderdale showrooms dust-free?",
        answer: "We use specialized dust control methods, microfiber cloths, and systematic cleaning to maintain dust-free displays and surfaces."
      },
      {
        question: "What's your response time for North Lauderdale showrooms?",
        answer: "We can typically respond to cleaning needs within 24 hours and offer emergency services for urgent situations."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans understands showroom presentation. Our North Lauderdale facility has never looked better or been more inviting.",
      author: "Operations Manager, North Lauderdale Dealerships"
    }
  },
  {
    id: "pembroke-pines",
    name: "Pembroke Pines",
    description: "Pembroke Pines showrooms benefit from our professional cleaning that creates the immaculate environments where luxury products shine.",
    faq: [
      {
        question: "Do you clean jewelry showrooms in Pembroke Pines?",
        answer: "Yes, we clean jewelry and luxury retail showrooms with extreme care for delicate displays and high-value merchandise."
      },
      {
        question: "How do you clean showroom windows in Pembroke Pines?",
        answer: "We use professional streak-free techniques and premium products to ensure crystal-clear windows that maximize product visibility."
      }
    ],
    testimonial: {
      text: "Our Pembroke Pines showroom has become known for its pristine appearance. Red Rock Cleans delivers exceptional results.",
      author: "Showroom Manager, Pembroke Pines Premium Auto"
    }
  },
  {
    id: "plantation",
    name: "Plantation",
    description: "Plantation showrooms depend on our comprehensive cleaning to ensure every product is displayed in the best possible light for maximum sales impact.",
    faq: [
      {
        question: "What areas receive special attention in Plantation showrooms?",
        answer: "We focus on floors, windows, product displays, client lounges, reception areas, and all high-touch surfaces that clients see and touch."
      },
      {
        question: "Can you clean during Plantation showroom hours?",
        answer: "We prefer after-hours cleaning to avoid disruption, but can accommodate special scheduling needs with minimal impact on operations."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans keeps our Plantation showroom immaculate. Customer feedback about our facility has improved significantly.",
      author: "General Manager, Plantation Design Gallery"
    }
  },
  {
    id: "southwest-ranches",
    name: "Southwest Ranches",
    description: "Southwest Ranches showrooms trust our detailed cleaning services to maintain the premium presentation their upscale clientele expect.",
    faq: [
      {
        question: "How long have you been cleaning Southwest Ranches showrooms?",
        answer: "We've been serving Southwest Ranches showrooms for years, building expertise in luxury presentation and high-end facility maintenance."
      },
      {
        question: "Do you offer eco-friendly cleaning in Southwest Ranches?",
        answer: "Yes, we offer green cleaning options using environmentally responsible products that are effective yet safe for products and staff."
      }
    ],
    testimonial: {
      text: "Our Southwest Ranches showroom stands out for cleanliness. Red Rock Cleans is professional, reliable, and detail-oriented.",
      author: "Owner, Southwest Ranches Equestrian Center"
    }
  },
  {
    id: "sunny-isles-beach",
    name: "Sunny Isles Beach",
    description: "Sunny Isles Beach showrooms rely on our specialized cleaning that maintains pristine displays despite coastal environmental challenges.",
    faq: [
      {
        question: "How do you handle coastal conditions in Sunny Isles Beach showrooms?",
        answer: "We use products designed for coastal environments, addressing salt air, humidity, and moisture to protect displays and maintain clarity."
      },
      {
        question: "What's included in floor polishing in Sunny Isles Beach?",
        answer: "We provide complete floor care including cleaning, polishing, and buffing to achieve the mirror-like finish luxury showrooms require."
      }
    ],
    testimonial: {
      text: "The coastal environment is challenging. Red Rock Cleans keeps our Sunny Isles Beach showroom pristine and impressive year-round.",
      author: "Manager, Sunny Isles Beach Yacht Sales"
    }
  },
  {
    id: "sunrise",
    name: "Sunrise",
    description: "Sunrise showrooms benefit from our professional cleaning that creates impressive environments that enhance product appeal and close sales.",
    faq: [
      {
        question: "How do you price showroom cleaning in Sunrise?",
        answer: "We provide transparent pricing based on showroom size, cleaning frequency, and specific needs. Most Sunrise showrooms invest $400-$1,500 per service."
      },
      {
        question: "Do you clean commercial equipment showrooms in Sunrise?",
        answer: "Yes, we clean all showroom types including commercial equipment, using appropriate methods for industrial displays and machinery."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Sunrise showroom to perfection. Our clients consistently comment on our facility's immaculate appearance.",
      author: "Sales Director, Sunrise Commercial Equipment"
    }
  },
  {
    id: "tamarac",
    name: "Tamarac",
    description: "Tamarac showrooms trust our systematic cleaning to ensure consistent quality and the pristine presentation that influences buying decisions.",
    faq: [
      {
        question: "What makes your Tamarac showroom cleaning effective?",
        answer: "We combine professional equipment, proven protocols, product-safe cleaners, trained staff, and quality control to ensure superior results."
      },
      {
        question: "Can you provide references in Tamarac?",
        answer: "Yes, we can provide references from other showrooms we serve, demonstrating our track record of excellence in presentation cleaning."
      }
    ],
    testimonial: {
      text: "Our Tamarac showroom has never looked better or been more impressive. Red Rock Cleans exceeds expectations consistently.",
      author: "Facility Manager, Tamarac Auto Center"
    }
  },
  {
    id: "weston",
    name: "Weston",
    description: "Weston's premier showrooms depend on our professional cleaning to maintain the exceptional standards their luxury clientele demand.",
    faq: [
      {
        question: "How do you keep Weston showrooms spotless?",
        answer: "We use systematic cleaning methods, professional equipment, premium products, and trained staff following detailed protocols for consistent excellence."
      },
      {
        question: "Do you provide ongoing support in Weston?",
        answer: "Yes, we offer dedicated account management, regular quality reviews, and responsive service for all our Weston showroom clients."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been our Weston showroom's cleaning partner for years. Their expertise and quality are consistently outstanding.",
      author: "Owner, Weston Luxury Motors"
    }
  }
];

const ShowroomCleaningSouthFloridaPage = () => {
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
        <title>Showroom Cleaning Services South Florida | Red Rock Cleans</title>
        <meta name="description" content="Professional showroom cleaning in South Florida. Red Rock Cleans enhances your product presentation with meticulous cleaning for car dealerships and luxury retail in Fort Lauderdale and Weston." />
        <meta name="keywords" content="showroom cleaning services South Florida, showroom cleaning near me, car dealership cleaning South Florida, furniture showroom cleaning Fort Lauderdale, luxury retail cleaning Weston FL, best showroom cleaners South Florida, professional showroom cleaning Broward County, showroom floor polishing South Florida, immaculate dealership cleaning South Florida, showroom cleaning cost South Florida, dealership cleaning prices Fort Lauderdale, what is showroom cleaning South Florida, hire showroom cleaners in South Florida" />
        <link rel="canonical" href="https://redrockcleans.com/south-florida/showroom-cleaning" />
      </Helmet>
      
      <SouthFloridaNavigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/src/assets/hero-commercial.jpg" 
              alt="Professional showroom cleaning service in a South Florida facility"
              className="w-full h-full object-cover scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                Impeccable Showroom Cleaning to Showcase Your South Florida Products
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                For high-value products in South Florida's competitive market, your showroom's cleanliness is a direct reflection of your product's quality. An immaculate presentation environment is crucial for influencing purchasing decisions, building brand reputation, and justifying premium pricing. Our specialized showroom cleaning services ensure every product shines and every surface impresses discerning clients.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="h-14 text-lg px-8" asChild>
                  <Link to="/commercial-quote?location=south-florida">
                    <Calendar className="w-5 h-5 mr-2" />
                    Get Your Free Quote
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="h-14 text-lg px-8" asChild>
                  <Link to="/contact">
                    <Diamond className="w-5 h-5 mr-2" />
                    Contact Us
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
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Diamond className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Pristine Product Presentation</h3>
                      <p className="text-muted-foreground">
                        Every product in your South Florida showroom must be absolutely free of dust, smudges, fingerprints, and any imperfection. We use lint-free cloths and product-safe cleaning solutions to ensure vehicles, furniture, appliances, or luxury goods appear in showroom-new condition. This meticulous attention to detail ensures customers see products at their absolute best, maximizing perceived value and appeal.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Sparkles className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Gleaming Floors & Surfaces</h3>
                      <p className="text-muted-foreground">
                        Perfectly polished floors and spotless surfaces reflect light and luxury, creating the upscale atmosphere that justifies premium pricing. Our professional floor care achieves mirror-like finishes on tile, concrete, and hardwood. Every counter, desk, and surface sparkles, reinforcing your brand's commitment to quality. This comprehensive polish creates the wow factor that South Florida's discerning customers expect and appreciate.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Handshake className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">A Premium Client Experience</h3>
                      <p className="text-muted-foreground">
                        Client lounges, consultation offices, and reception areas must be as impressive as your products. We ensure comfortable seating is spotless, coffee stations are immaculate, restrooms are pristine, and every touchpoint reflects quality. These spaces where relationships are built and deals are closed deserve the same meticulous care as your display floor, creating a complete luxury experience.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Meticulous Showroom Cleaning Checklist Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Our Meticulous Showroom Cleaning Checklist
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Droplets className="h-10 w-10 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-3">Floor Care & Polishing</h3>
                      <p className="text-muted-foreground text-sm">
                        Specialized care for tile, concrete, or hardwood floors using professional polishing equipment. We achieve the mirror-like finish that luxury showrooms demand, reflecting products beautifully.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Square className="h-10 w-10 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-3">Window & Glass Cleaning</h3>
                      <p className="text-muted-foreground text-sm">
                        Streak-free cleaning for large plate glass windows and displays. Crystal-clear glass maximizes natural light, showcases products attractively, and creates an inviting entrance that draws customers inside.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Car className="h-10 w-10 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-3">Product & Display Dusting</h3>
                      <p className="text-muted-foreground text-sm">
                        Careful, lint-free dusting of all products using appropriate cloths and gentle techniques. We ensure vehicles, furniture, appliances, and merchandise remain pristine without scratches or damage.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Sofa className="h-10 w-10 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-3">Client Lounges & Offices</h3>
                      <p className="text-muted-foreground text-sm">
                        Creating comfortable and impressive spaces for clients including cleaning furniture, coffee stations, restrooms, and consultation areas where relationships are built and sales are closed.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Section */}
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
                    South Florida buyers rate showroom cleanliness as a top factor in purchase decisions
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    <CountUp end={15} duration={2} />%
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Increased Perceived Value</h3>
                  <p className="text-muted-foreground text-sm">
                    Clean showrooms command higher prices and close rates across South Florida
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">100%</div>
                  <h3 className="text-lg font-semibold mb-2">Attention to Detail Score</h3>
                  <p className="text-muted-foreground text-sm">
                    Our meticulous cleaning demonstrates the quality customers can expect from your brand
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
                          <h4 className="font-semibold mb-2">Showroom Cleaning Services in {city.name}</h4>
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
                            Get Showroom Cleaning Quote for {city.name}
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
                    <ShoppingBag className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Retail Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Professional cleaning services for retail stores and shopping centers
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/south-florida/retail-cleaning">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <Utensils className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Restaurant Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Professional kitchen and dining room cleaning services
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/south-florida/restaurant-cleaning">Learn More</Link>
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
                    <h3 className="text-lg font-semibold">What is showroom cleaning in South Florida?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Showroom cleaning in South Florida is specialized commercial cleaning focused on maintaining pristine display environments for high-value products. This includes meticulous floor polishing to achieve mirror-like finishes, streak-free window and glass cleaning, careful product dusting using lint-free methods, display case cleaning, client lounge and reception area maintenance, and comprehensive surface sanitization. The goal is to create an immaculate environment that enhances product presentation, builds brand reputation, and influences purchasing decisions through flawless cleanliness.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="cost" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">What is the cost of showroom cleaning in South Florida?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Showroom cleaning costs in South Florida vary based on facility size, product type, and cleaning frequency. Small showrooms (under 5,000 sq ft) typically invest $400-$800 per cleaning, medium showrooms (5,000-15,000 sq ft) $800-$1,500, and large dealerships or multi-level facilities $1,500-$3,000+. Most showrooms benefit from daily or nightly cleaning to maintain presentation standards, with periodic deep cleaning for floors and comprehensive detailing. We provide free, customized quotes based on your specific showroom size, product type, and quality standards.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="hire-cleaners" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">How do I hire showroom cleaners in South Florida?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Hiring professional showroom cleaners in South Florida starts with finding a company experienced in luxury retail and product presentation cleaning. Look for providers with showroom references, product-safe cleaning expertise, professional polishing equipment, and understanding of high-value merchandise care. Contact Red Rock Cleans for a free consultation where we'll visit your showroom, assess your specific needs and product types, discuss your schedule and presentation standards, review our specialized cleaning protocols, and provide transparent pricing. We understand the unique requirements of showrooms and work around your sales hours.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="product-protection" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">How do you protect products during showroom cleaning in South Florida?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Product protection is our highest priority during showroom cleaning. We use lint-free microfiber cloths that won't scratch surfaces, product-safe cleaning solutions appropriate for each material type (automotive paint, leather, wood, glass, stainless steel), gentle dusting techniques that avoid damage, protective covering when needed during floor work, and staff trained in careful merchandise handling. We never use harsh chemicals near products, always test cleaning solutions in inconspicuous areas first, and work systematically to ensure your valuable inventory remains in perfect, sale-ready condition throughout the South Florida cleaning process.
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
              Join South Florida showrooms that trust Red Rock Cleans for pristine product displays
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
              <Link to="/commercial-quote">Get Your Free Showroom Cleaning Quote</Link>
            </Button>
          </div>
        </section>

        {/* Image Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <img 
                src="/static/service-products.jpg" 
                alt="A pristine luxury car showroom in South Florida after professional cleaning by Red Rock Cleans"
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

export default ShowroomCleaningSouthFloridaPage;


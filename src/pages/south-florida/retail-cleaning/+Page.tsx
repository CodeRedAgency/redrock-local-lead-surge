import { SouthFloridaNavigation } from "@/components/SouthFloridaNavigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Sparkles, ShoppingCart, Shirt, Store, DoorClosed, Frame, Archive, Users, Star, Clock, MapPin, Calendar, Building, Utensils, Dumbbell } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import CountUp from "react-countup";

const cities = [
  {
    id: "aventura",
    name: "Aventura",
    description: "Aventura retail stores trust our professional retail cleaning services to maintain pristine shopping environments that enhance customer experience and drive sales.",
    faq: [
      {
        question: "Do you clean luxury boutiques in Aventura?",
        answer: "Yes, we specialize in luxury retail cleaning with meticulous attention to detail, understanding the high standards expected in Aventura's premium shopping destinations."
      },
      {
        question: "Can you work around our Aventura store hours?",
        answer: "Absolutely. We offer flexible scheduling including after-hours, early morning, and weekend cleaning to avoid disrupting your business operations."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has transformed our Aventura boutique. Customers constantly comment on how pristine and inviting our store looks.",
      author: "Store Manager, Aventura Fashion Boutique"
    }
  },
  {
    id: "cooper-city",
    name: "Cooper City",
    description: "Cooper City retailers rely on our comprehensive cleaning services to create inviting shopping spaces that keep customers coming back.",
    faq: [
      {
        question: "What's included in retail cleaning for Cooper City stores?",
        answer: "Our service includes floor care, window cleaning, fixture dusting, fitting room sanitization, restroom cleaning, and high-touch surface disinfection."
      },
      {
        question: "How often should Cooper City retail stores be cleaned?",
        answer: "Most stores benefit from daily or nightly cleaning, with periodic deep cleaning for floors and windows based on traffic volume."
      }
    ],
    testimonial: {
      text: "Our Cooper City store has never looked better. Red Rock Cleans understands retail and delivers exceptional results every time.",
      author: "Owner, Cooper City Home Goods"
    }
  },
  {
    id: "dania-beach",
    name: "Dania Beach",
    description: "Dania Beach retail establishments benefit from our specialized cleaning that combats coastal humidity while maintaining bright, welcoming storefronts.",
    faq: [
      {
        question: "How do you handle window cleaning in Dania Beach?",
        answer: "We use professional streak-free techniques and products specifically designed to combat salt air and humidity for crystal-clear storefront windows."
      },
      {
        question: "Do you clean small boutiques in Dania Beach?",
        answer: "Yes, we clean retail stores of all sizes from small boutiques to large shopping centers, customizing our service to your needs."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans keeps our Dania Beach storefront sparkling despite the coastal environment. Their attention to detail is outstanding.",
      author: "Retail Manager, Dania Beach Lifestyle Store"
    }
  },
  {
    id: "davie",
    name: "Davie",
    description: "Davie retailers depend on our meticulous cleaning services to maintain the professional appearance that customers expect in South Florida's competitive market.",
    faq: [
      {
        question: "What is the cost of retail cleaning in Davie?",
        answer: "Costs vary by store size and frequency. Most Davie retailers invest $200-$1,000 per cleaning. We provide free customized quotes."
      },
      {
        question: "Do you clean specialty stores in Davie?",
        answer: "Yes, we clean all types of retail including specialty shops, boutiques, sporting goods, electronics, and more with appropriate care for merchandise."
      }
    ],
    testimonial: {
      text: "Our Davie retail location's customer satisfaction scores improved after partnering with Red Rock Cleans. Clean stores mean happy shoppers!",
      author: "District Manager, Davie Retail Chain"
    }
  },
  {
    id: "fort-lauderdale",
    name: "Fort Lauderdale",
    description: "Fort Lauderdale's premier retailers trust our professional cleaning to maintain the sophisticated shopping environments that attract and retain customers.",
    faq: [
      {
        question: "How do you protect merchandise during cleaning in Fort Lauderdale?",
        answer: "We use gentle, appropriate cleaning methods, protect displays with covers when needed, and train staff in careful merchandise handling protocols."
      },
      {
        question: "Can you provide emergency cleaning in Fort Lauderdale?",
        answer: "Yes, we offer rapid response cleaning for spills, accidents, or unexpected situations that require immediate attention."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Fort Lauderdale flagship store to perfection. Their professionalism and retail expertise are exceptional.",
      author: "Store Director, Fort Lauderdale Luxury Retail"
    }
  },
  {
    id: "hallandale-beach",
    name: "Hallandale Beach",
    description: "Hallandale Beach retail stores benefit from our comprehensive cleaning that ensures every shopping space is pristine and welcoming.",
    faq: [
      {
        question: "Do you clean fitting rooms in Hallandale Beach stores?",
        answer: "Yes, we provide thorough sanitization of fitting rooms, mirrors, benches, and all surfaces to maintain the highest hygiene standards."
      },
      {
        question: "How do you handle floor care in Hallandale Beach retail?",
        answer: "We offer complete floor care including sweeping, mopping, polishing, carpet cleaning, and specialized treatments for various flooring types."
      }
    ],
    testimonial: {
      text: "Our Hallandale Beach store shines thanks to Red Rock Cleans. They understand what it takes to maintain a premium retail environment.",
      author: "Owner, Hallandale Beach Apparel Store"
    }
  },
  {
    id: "hollywood",
    name: "Hollywood",
    description: "Hollywood retailers rely on our professional cleaning to create the spotless, inviting atmospheres that enhance brand image and customer loyalty.",
    faq: [
      {
        question: "What makes retail cleaning different in Hollywood?",
        answer: "We understand high-traffic retail environments and use efficient cleaning methods that maintain appearance while minimizing disruption to operations."
      },
      {
        question: "Do you clean shopping centers in Hollywood?",
        answer: "Yes, we clean individual stores, shopping centers, and retail complexes with comprehensive service for all common areas and storefronts."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has elevated our Hollywood retail space. Our store is now a destination customers love to visit and shop.",
      author: "Marketing Director, Hollywood Retail Destination"
    }
  },
  {
    id: "las-olas",
    name: "Las Olas",
    description: "Las Olas boutiques and shops trust our detailed cleaning services to maintain the upscale appearance their discerning customers expect.",
    faq: [
      {
        question: "Can you clean high-end boutiques on Las Olas?",
        answer: "Yes, we specialize in luxury retail cleaning with the meticulous care and attention to detail required for Las Olas' premium shopping district."
      },
      {
        question: "How do you clean display cases in Las Olas stores?",
        answer: "We use specialized glass cleaning products and techniques to ensure display cases are streak-free, fingerprint-free, and showcase merchandise beautifully."
      }
    ],
    testimonial: {
      text: "Our Las Olas boutique exemplifies luxury, and Red Rock Cleans maintains that standard perfectly. They're an essential partner in our success.",
      author: "Boutique Owner, Las Olas Boulevard"
    }
  },
  {
    id: "lauderdale-lakes",
    name: "Lauderdale Lakes",
    description: "Lauderdale Lakes retail establishments benefit from our systematic cleaning approach that ensures consistent quality and customer-ready spaces.",
    faq: [
      {
        question: "Do you clean discount stores in Lauderdale Lakes?",
        answer: "Yes, we clean all retail formats from discount stores to specialty boutiques, adapting our service to your specific needs and budget."
      },
      {
        question: "How do you ensure quality in Lauderdale Lakes?",
        answer: "We use detailed checklists, conduct regular inspections, and maintain open communication with store management to ensure excellence."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans keeps our Lauderdale Lakes store consistently clean and welcoming. Reliable service we can always count on.",
      author: "Store Manager, Lauderdale Lakes Retail Center"
    }
  },
  {
    id: "lauderhill",
    name: "Lauderhill",
    description: "Lauderhill retailers trust our professional cleaning to maintain the pristine conditions that create positive shopping experiences and drive repeat business.",
    faq: [
      {
        question: "What's on a retail cleaning checklist for Lauderhill stores?",
        answer: "Our checklist includes floors, windows, fixtures, displays, fitting rooms, restrooms, stockrooms, and all high-touch surfaces throughout your store."
      },
      {
        question: "Do you provide weekend cleaning in Lauderhill?",
        answer: "Yes, we offer flexible scheduling including weekends, evenings, and early mornings to work around your operating hours."
      }
    ],
    testimonial: {
      text: "Our Lauderhill retail location's appearance has improved dramatically with Red Rock Cleans. Professional service that shows results.",
      author: "Regional Manager, Lauderhill Retail Group"
    }
  },
  {
    id: "margate",
    name: "Margate",
    description: "Margate retail stores depend on our comprehensive cleaning services that create inviting shopping environments customers enjoy.",
    faq: [
      {
        question: "How long does retail cleaning take in Margate?",
        answer: "Cleaning time varies by store size. Small boutiques typically take 1-2 hours, while larger stores may require 3-5 hours of thorough cleaning."
      },
      {
        question: "Can you handle large Margate retail locations?",
        answer: "Yes, we service retail stores of all sizes from small shops to large department stores with complete facility coverage."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our Margate store for years. Consistent quality and exceptional customer service.",
      author: "Owner, Margate Retail Establishment"
    }
  },
  {
    id: "miramar",
    name: "Miramar",
    description: "Miramar retailers rely on our specialized cleaning protocols that maintain spotless stores and enhance the customer shopping experience.",
    faq: [
      {
        question: "What cleaning products do you use in Miramar stores?",
        answer: "We use professional-grade, retail-safe cleaning products that are effective yet gentle on merchandise, fixtures, and various surfaces."
      },
      {
        question: "Do you clean electronics stores in Miramar?",
        answer: "Yes, we clean electronics retailers with special care for sensitive equipment and displays, using appropriate dust-free cleaning methods."
      }
    ],
    testimonial: {
      text: "Our Miramar store's cleanliness standards have soared since partnering with Red Rock Cleans. Customers notice and appreciate the difference!",
      author: "Store Director, Miramar Shopping Center"
    }
  },
  {
    id: "north-lauderdale",
    name: "North Lauderdale",
    description: "North Lauderdale retail businesses trust our thorough cleaning to maintain the welcoming environments that attract shoppers and boost sales.",
    faq: [
      {
        question: "How do you keep North Lauderdale stores dust-free?",
        answer: "We use systematic dusting methods, microfiber cloths, and appropriate tools to remove dust from all surfaces, fixtures, and displays."
      },
      {
        question: "What's your response time for North Lauderdale?",
        answer: "We can typically respond to cleaning needs within 24 hours and offer emergency services for urgent situations."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans understands retail. Our North Lauderdale location has never looked better or been more inviting to customers.",
      author: "Operations Manager, North Lauderdale Retail"
    }
  },
  {
    id: "pembroke-pines",
    name: "Pembroke Pines",
    description: "Pembroke Pines retailers benefit from our professional cleaning that creates the pristine shopping environments today's customers expect.",
    faq: [
      {
        question: "Do you clean clothing stores in Pembroke Pines?",
        answer: "Yes, we clean apparel retailers with special attention to protecting merchandise, cleaning fitting rooms, and maintaining dust-free environments."
      },
      {
        question: "How do you sanitize checkout areas in Pembroke Pines?",
        answer: "We thoroughly disinfect POS systems, counters, card readers, and all high-touch surfaces to protect both customers and staff."
      }
    ],
    testimonial: {
      text: "Our Pembroke Pines retail location has become known for cleanliness. Red Rock Cleans delivers exceptional results consistently.",
      author: "Franchise Owner, Pembroke Pines Retail Chain"
    }
  },
  {
    id: "plantation",
    name: "Plantation",
    description: "Plantation retail stores depend on our comprehensive cleaning to ensure every customer enjoys a spotless, welcoming shopping experience.",
    faq: [
      {
        question: "What areas receive special attention in Plantation stores?",
        answer: "We focus on high-traffic zones, entryways, windows, checkout areas, fitting rooms, and any surface customers see or touch."
      },
      {
        question: "Can you clean during Plantation store hours?",
        answer: "Yes, we can work during operating hours with minimal disruption or schedule after-hours cleaning based on your preference."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans keeps our Plantation retail space immaculate. Customer satisfaction has improved since we started their service.",
      author: "Store Manager, Plantation Shopping Plaza"
    }
  },
  {
    id: "southwest-ranches",
    name: "Southwest Ranches",
    description: "Southwest Ranches retailers trust our detailed cleaning services to maintain the premium appearance their customers appreciate.",
    faq: [
      {
        question: "How long have you been cleaning Southwest Ranches stores?",
        answer: "We've been serving Southwest Ranches retailers for years, building expertise in the unique needs of this market's retail sector."
      },
      {
        question: "Do you offer green cleaning in Southwest Ranches?",
        answer: "Yes, we offer eco-friendly cleaning options using green-certified products that are effective yet environmentally responsible."
      }
    ],
    testimonial: {
      text: "Our Southwest Ranches store stands out for cleanliness. Red Rock Cleans is professional, reliable, and thorough.",
      author: "Owner, Southwest Ranches Specialty Shop"
    }
  },
  {
    id: "sunny-isles-beach",
    name: "Sunny Isles Beach",
    description: "Sunny Isles Beach retail locations rely on our specialized cleaning that maintains pristine storefronts despite coastal environmental challenges.",
    faq: [
      {
        question: "How do you handle coastal conditions in Sunny Isles Beach?",
        answer: "We use products and techniques designed for coastal environments, addressing salt air, humidity, and other factors unique to beachfront retail."
      },
      {
        question: "What's included in storefront cleaning in Sunny Isles Beach?",
        answer: "We clean windows inside and out, entryways, sidewalk areas, signage, and all exterior surfaces to maximize curb appeal."
      }
    ],
    testimonial: {
      text: "The coastal environment is challenging for retail. Red Rock Cleans keeps our Sunny Isles Beach store looking pristine year-round.",
      author: "Manager, Sunny Isles Beach Luxury Retail"
    }
  },
  {
    id: "sunrise",
    name: "Sunrise",
    description: "Sunrise retail businesses benefit from our professional cleaning that creates inviting shopping environments that enhance customer experience.",
    faq: [
      {
        question: "How do you price retail cleaning in Sunrise?",
        answer: "We provide transparent pricing based on store size, cleaning frequency, and specific needs. Most Sunrise stores invest $200-$1,000 per service."
      },
      {
        question: "Do you clean shopping malls in Sunrise?",
        answer: "Yes, we clean individual stores within malls, kiosks, and can coordinate with property management for common area cleaning."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Sunrise retail location to perfection. Our customer reviews consistently mention our store's cleanliness.",
      author: "District Supervisor, Sunrise Retail Operations"
    }
  },
  {
    id: "tamarac",
    name: "Tamarac",
    description: "Tamarac retailers trust our systematic cleaning to ensure consistent quality and the pristine appearance that attracts customers.",
    faq: [
      {
        question: "What makes your Tamarac retail cleaning effective?",
        answer: "We combine professional-grade equipment, proven cleaning protocols, trained staff, and quality control measures to ensure superior results."
      },
      {
        question: "Can you provide references in Tamarac?",
        answer: "Yes, we can provide references from other retail stores we serve, demonstrating our track record of excellence in the area."
      }
    ],
    testimonial: {
      text: "Our Tamarac store has never been cleaner or more welcoming. Red Rock Cleans exceeds expectations with every service.",
      author: "Retail Manager, Tamarac Shopping District"
    }
  },
  {
    id: "weston",
    name: "Weston",
    description: "Weston's premier retailers depend on our professional cleaning to maintain the exceptional standards their discerning customers demand.",
    faq: [
      {
        question: "How do you keep Weston stores spotless?",
        answer: "We use systematic cleaning methods, professional equipment, quality products, and trained staff following detailed protocols for consistent excellence."
      },
      {
        question: "Do you provide ongoing support in Weston?",
        answer: "Yes, we offer dedicated account management, regular quality reviews, and responsive service for all our Weston retail clients."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been our Weston store's cleaning partner for years. Their retail expertise and service quality are consistently excellent.",
      author: "Owner, Weston Premium Retail"
    }
  }
];

const RetailCleaningSouthFloridaPage = () => {
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
        <title>Retail Store Cleaning South Florida | Red Rock Cleans</title>
        <meta name="description" content="Professional retail store cleaning in South Florida. Red Rock Cleans helps enhance your brand image with spotless storefronts and sales floors in Fort Lauderdale, Weston, and beyond." />
        <meta name="keywords" content="retail store cleaning South Florida, retail cleaning near me, store cleaning South Florida, boutique cleaning Fort Lauderdale, shop cleaning Weston FL, Broward County retail cleaning, best retail cleaners South Florida, commercial store cleaning Fort Lauderdale, storefront window cleaning South Florida, retail floor care South Florida, retail cleaning cost South Florida, store cleaning prices Fort Lauderdale, retail cleaning checklist South Florida, hire store cleaners in South Florida" />
        <link rel="canonical" href="https://redrockcleans.com/south-florida/retail-cleaning" />
      </Helmet>
      
      <SouthFloridaNavigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/src/assets/hero-commercial.jpg" 
              alt="Professional retail cleaning service in a South Florida store"
              className="w-full h-full object-cover scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                Pristine Retail Cleaning to Elevate Your South Florida Brand
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                In the competitive South Florida retail market, a customer's perception of your brand begins the moment they see your storefront. A spotless, inviting environment is crucial for creating positive shopping experiences that drive sales, build loyalty, and enhance your reputation. Our specialized retail cleaning services ensure your store always makes the best first impression.
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
                    <Store className="w-5 h-5 mr-2" />
                    Contact Us
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Creating an Unforgettable Shopping Experience Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Creating an Unforgettable Shopping Experience
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Sparkles className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Immaculate First Impressions</h3>
                      <p className="text-muted-foreground">
                        Crystal-clear entryways and sparkling windows are your store's invitation to customers. We ensure your storefront shines, attracting foot traffic and setting the tone for a premium shopping experience. Clean windows maximize natural light, showcase merchandise beautifully, and communicate professionalism that discerning South Florida shoppers notice and appreciate.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <ShoppingCart className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">A Healthy, Inviting Space</h3>
                      <p className="text-muted-foreground">
                        Today's customers expect more than visual cleanliness—they want hygiene assurance. We thoroughly disinfect high-touch areas including counters, POS systems, door handles, fitting room surfaces, and shopping cart handles. This comprehensive sanitization protects customer health, demonstrates care, and creates the safe, welcoming environment that encourages browsing and purchasing.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Shirt className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Protecting Your Merchandise</h3>
                      <p className="text-muted-foreground">
                        Your inventory is your investment. We employ meticulous dust and debris control throughout your store, using gentle yet effective methods that keep products pristine without causing damage. From clothing racks to display shelves, electronics to home goods, we ensure your merchandise remains in perfect condition, ready to delight customers and maximize sales potential.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Comprehensive Retail Cleaning Checklist Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Our Comprehensive Retail Cleaning Checklist
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Store className="h-10 w-10 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-3">Sales Floor & Displays</h3>
                      <p className="text-muted-foreground text-sm">
                        Complete floor care including polishing, carpet cleaning, and specialized treatments. Meticulous dusting of all fixtures, shelves, and displays to showcase merchandise beautifully and create an inviting shopping atmosphere.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <DoorClosed className="h-10 w-10 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-3">Fitting Rooms & Restrooms</h3>
                      <p className="text-muted-foreground text-sm">
                        Maintaining the highest standards of hygiene in these critical spaces. Thorough sanitization of all surfaces, mirrors, benches, and fixtures to ensure customer comfort and confidence throughout their shopping experience.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Frame className="h-10 w-10 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-3">Windows & Storefront</h3>
                      <p className="text-muted-foreground text-sm">
                        Streak-free glass cleaning that maximizes visibility and curb appeal. Professional techniques ensure your windows sparkle, your merchandise is showcased attractively, and your storefront invites customers inside.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Archive className="h-10 w-10 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-3">Back-of-House & Stockrooms</h3>
                      <p className="text-muted-foreground text-sm">
                        Keeping employee areas clean, organized, and safe. Thorough cleaning of stockrooms, break rooms, and office spaces to support staff productivity and maintain professional standards throughout your entire facility.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Impact of Professional Cleaning Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                The Impact of a Professionally Cleaned Store
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    <CountUp end={95} duration={2} />%
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Positive Customer Impressions</h3>
                  <p className="text-muted-foreground text-sm">
                    South Florida shoppers rate cleanliness as a top factor in their store experience
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    <CountUp end={5} duration={2} />★
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Enhanced Brand Image</h3>
                  <p className="text-muted-foreground text-sm">
                    Our clients consistently receive top ratings for store cleanliness and presentation
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    <CountUp end={20} duration={2} />+
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Hours Saved for Your Staff</h3>
                  <p className="text-muted-foreground text-sm">
                    Free your team to focus on customers and sales, not cleaning duties
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
                          <h4 className="font-semibold mb-2">Retail Cleaning Services in {city.name}</h4>
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
                            Get Retail Cleaning Quote for {city.name}
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
                    <Building className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Showroom Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Specialized cleaning for automotive and retail showrooms
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/south-florida/showroom-cleaning">Learn More</Link>
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
                    <Dumbbell className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Gym Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Hygienic cleaning services for fitness centers and health clubs
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/south-florida/gym-cleaning">Learn More</Link>
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
                <AccordionItem value="retail-cleaning-checklist" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">What's on a retail cleaning checklist in South Florida?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Our comprehensive retail cleaning checklist includes: floor care (sweeping, mopping, polishing, carpet cleaning), window and glass cleaning inside and out, fixture and shelf dusting, display case cleaning, fitting room sanitization, restroom deep cleaning, stockroom organization and cleaning, high-touch surface disinfection (door handles, POS systems, counters), trash removal, and restocking supplies. We customize our checklist to your specific store layout, merchandise type, and unique needs.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="cost" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">What is the cost of retail cleaning in South Florida?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Retail cleaning costs in South Florida vary based on store size, cleaning frequency, and specific requirements. Small boutiques (under 1,000 sq ft) typically invest $200-$400 per cleaning, medium stores (1,000-3,000 sq ft) $400-$800, and larger retail locations $800-$1,500+. Most stores benefit from daily or nightly cleaning with periodic deep cleaning for floors and windows. We provide free, detailed quotes customized to your store's square footage, layout, and operational needs.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="hire-cleaners" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">How do I hire store cleaners in South Florida?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Hiring professional store cleaners in South Florida starts with finding a company experienced in retail cleaning. Look for providers with retail references, proper licensing and insurance, and staff trained in merchandise protection. Contact Red Rock Cleans for a free consultation where we'll visit your store, assess your specific needs, discuss your operational schedule and preferences, review our comprehensive cleaning protocols, and provide transparent pricing. We can schedule cleanings around your store hours, special events, and peak seasons to minimize disruption while maintaining pristine conditions.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="merchandise-protection" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">How do you protect merchandise during cleaning in South Florida stores?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Protecting your merchandise is our top priority. Our staff receives specialized training in retail cleaning techniques that safeguard inventory. We use appropriate cleaning products for different surfaces and materials, carefully dust around merchandise without touching products unnecessarily, use protective coverings when needed during deep cleaning, work systematically to avoid accidental damage, and maintain clear communication about any special handling requirements for delicate or high-value items. Our gentle yet effective methods ensure your inventory remains in perfect, sale-ready condition.
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
              Ready to Elevate Your Retail Brand with Professional Cleaning?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join South Florida retailers that trust Red Rock Cleans for pristine stores that drive sales
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
              <Link to="/commercial-quote">Get Your Free Retail Cleaning Quote</Link>
            </Button>
          </div>
        </section>

        {/* Image Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <img 
                src="/static/service-products.jpg" 
                alt="A bright, clean luxury retail store in Fort Lauderdale, cleaned by Red Rock Cleans"
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

export default RetailCleaningSouthFloridaPage;


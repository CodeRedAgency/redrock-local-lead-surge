import { ColumbusNavigation } from "@/components/ColumbusNavigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Sparkles, ShoppingCart, Shirt, Store, AppWindow, PictureInPicture, Archive, Users, Star, Clock, Armchair, Utensils, Dumbbell } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";

const cities = [
  {
    id: "dublin",
    name: "Dublin",
    description: "Dublin's diverse retail landscape—from Bridge Street boutiques to suburban shopping centers—trusts Red Rock Cleans to maintain the pristine environments that keep customers coming back. Our professional retail cleaning services ensure your Dublin store always makes an excellent first impression.",
    faq: [
      {
        question: "Can you clean our Dublin retail store after hours?",
        answer: "Yes, we offer flexible scheduling for Dublin retail stores including evening and overnight cleaning to ensure your store is spotless before opening without disrupting business hours."
      },
      {
        question: "Do you clean windows and storefronts in Dublin?",
        answer: "Absolutely. We provide streak-free window and storefront cleaning for Dublin retail locations to maximize visibility and create inviting entryways that attract customers."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans keeps our Dublin boutique looking pristine. Our customers notice and comment on how clean our store always is.",
      author: "Owner, Dublin Fashion Boutique"
    }
  },
  {
    id: "upper-arlington",
    name: "Upper Arlington",
    description: "Upper Arlington's upscale retail establishments rely on our meticulous cleaning services to maintain the sophisticated presentation their discerning customers expect. We understand that in Upper Arlington, every detail of your store's cleanliness reflects your brand's commitment to quality.",
    faq: [
      {
        question: "What makes your Upper Arlington retail cleaning different?",
        answer: "We combine attention to detail with understanding of retail presentation, ensuring your Upper Arlington store maintains the upscale appearance that matches your brand and customer expectations."
      },
      {
        question: "Do you clean fitting rooms in Upper Arlington stores?",
        answer: "Yes, we provide thorough cleaning and disinfection of fitting rooms, mirrors, and all high-touch surfaces in Upper Arlington retail locations to ensure customer comfort and safety."
      }
    ],
    testimonial: {
      text: "Our Upper Arlington store maintains its luxury appearance thanks to Red Rock Cleans. They understand high-end retail cleaning.",
      author: "Manager, Upper Arlington Specialty Store"
    }
  },
  {
    id: "powell",
    name: "Powell",
    description: "Powell's growing retail community depends on our professional cleaning services to create welcoming shopping environments that enhance the customer experience. From sales floors to stockrooms, we keep Powell retail spaces pristine and inviting.",
    faq: [
      {
        question: "How do you handle Powell retail floor care?",
        answer: "We provide comprehensive floor care for Powell retail stores including sweeping, mopping, polishing hard surfaces, and vacuuming carpets to maintain attractive, safe shopping environments."
      },
      {
        question: "Can you dust displays in Powell retail stores?",
        answer: "Yes, our Powell retail cleaning includes careful dusting of all displays, shelving, and merchandise fixtures to keep products looking their best and free from debris."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans keeps our Powell store looking showroom-perfect every day. Professional service that understands retail needs.",
      author: "Owner, Powell Home Goods Store"
    }
  },
  {
    id: "lewis-center",
    name: "Lewis Center",
    description: "Lewis Center retailers trust our comprehensive cleaning services to maintain the clean, organized shopping spaces that drive sales and build customer loyalty. We protect your merchandise while creating the inviting atmosphere your business deserves.",
    faq: [
      {
        question: "Do you clean Lewis Center retail restrooms?",
        answer: "Yes, we provide thorough cleaning and sanitizing of retail restrooms in Lewis Center stores to ensure customer comfort and maintain the high cleanliness standards shoppers expect."
      },
      {
        question: "What's included in Lewis Center retail store cleaning?",
        answer: "Our Lewis Center retail cleaning includes sales floor care, fitting room sanitation, window cleaning, restroom maintenance, stockroom organization, and high-touch surface disinfection."
      }
    ],
    testimonial: {
      text: "Our Lewis Center store has never looked better. Red Rock Cleans delivers consistent, professional cleaning that our customers notice.",
      author: "Manager, Lewis Center Retail Shop"
    }
  },
  {
    id: "worthington",
    name: "Worthington",
    description: "Worthington's charming retail district benefits from our specialized store cleaning that preserves the welcoming character while maintaining modern cleanliness standards. We help Worthington retailers create shopping experiences that keep customers returning.",
    faq: [
      {
        question: "How often should Worthington retail stores schedule cleaning?",
        answer: "Most Worthington retail stores benefit from daily or nightly cleaning, with deep cleaning scheduled weekly or monthly based on foot traffic, store size, and merchandise type."
      },
      {
        question: "Do you use safe products in Worthington retail stores?",
        answer: "Yes, all cleaning products used in Worthington retail locations are safe for use around merchandise, customers, and staff while providing effective cleaning and disinfection."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans understands the unique needs of our Worthington retail space. They're reliable and thorough every visit.",
      author: "Owner, Worthington Gift Shop"
    }
  },
  {
    id: "new-albany",
    name: "New Albany",
    description: "New Albany's premium retail environments demand the highest level of cleanliness and presentation. Our luxury retail cleaning services ensure your New Albany store maintains the sophisticated appearance that reflects your brand's excellence and appeals to upscale shoppers.",
    faq: [
      {
        question: "Can you handle New Albany luxury retail stores?",
        answer: "Yes, we specialize in high-end retail cleaning for New Albany luxury stores, understanding the meticulous attention required for premium retail environments and expensive merchandise."
      },
      {
        question: "Do you provide daytime maintenance for New Albany stores?",
        answer: "Yes, we can provide daytime porter services for busy New Albany retail locations to handle continuous cleaning needs during operating hours without disrupting customers."
      }
    ],
    testimonial: {
      text: "Our New Albany store's pristine appearance is thanks to Red Rock Cleans. They deliver the premium cleaning service our brand requires.",
      author: "General Manager, New Albany Luxury Boutique"
    }
  },
  {
    id: "bexley",
    name: "Bexley",
    description: "Bexley's neighborhood retail shops trust our dependable cleaning services to maintain the welcoming environments that make local shopping special. We treat every Bexley store with the personalized attention it deserves, supporting the community retail experience.",
    faq: [
      {
        question: "What areas do you clean in Bexley retail stores?",
        answer: "We clean all areas in Bexley retail stores including sales floors, displays, fitting rooms, restrooms, entryways, windows, and back-of-house areas for complete store cleanliness."
      },
      {
        question: "How do you ensure quality in Bexley retail cleaning?",
        answer: "We use detailed checklists, conduct quality inspections, and maintain consistent teams for Bexley retail stores to ensure reliable, high-quality cleaning every service."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our Bexley shop with professionalism and care. Our store always looks welcoming for customers.",
      author: "Owner, Bexley Book Store"
    }
  },
  {
    id: "german-village",
    name: "German Village",
    description: "German Village's unique retail shops benefit from our adaptable cleaning services that maintain modern cleanliness standards while respecting the historic character of these special spaces. We help German Village retailers preserve charm while ensuring pristine shopping environments.",
    faq: [
      {
        question: "Can you clean German Village retail shops in historic buildings?",
        answer: "Yes, we adapt our cleaning methods for German Village's historic retail spaces while maintaining the same high standards that create inviting shopping environments."
      },
      {
        question: "Do you clean German Village storefront windows?",
        answer: "Yes, we provide professional window cleaning for German Village retail storefronts to maintain the clear, inviting displays that attract foot traffic in this popular shopping district."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans successfully maintains our German Village shop in this historic building. They understand both retail and unique spaces.",
      author: "Manager, German Village Antique Shop"
    }
  },
  {
    id: "short-north",
    name: "Short North",
    description: "Short North's vibrant retail scene demands professional cleaning that matches the energy and sophistication of Columbus's premier shopping district. Our retail cleaning services help Short North stores maintain the high standards that keep this neighborhood thriving as a retail destination.",
    faq: [
      {
        question: "Do you serve Short North boutiques and galleries?",
        answer: "Yes, we provide specialized cleaning for Short North boutiques, art galleries, and specialty retail stores with understanding of the unique needs of these upscale establishments."
      },
      {
        question: "Can you accommodate Short North's extended retail hours?",
        answer: "Absolutely. We offer flexible scheduling for Short North retailers including late-night and overnight cleaning to work around extended shopping hours and gallery events."
      }
    ],
    testimonial: {
      text: "Our Short North boutique stays impeccably clean thanks to Red Rock Cleans. They understand the presentation standards of urban retail.",
      author: "Owner, Short North Fashion Gallery"
    }
  },
  {
    id: "victorian-village",
    name: "Victorian Village",
    description: "Victorian Village retailers rely on our professional cleaning that maintains inviting shopping spaces in this charming neighborhood. Whether you're running a cozy boutique or specialty shop, we deliver the cleanliness that enhances the Victorian Village retail experience.",
    faq: [
      {
        question: "What retail fixtures do you clean in Victorian Village stores?",
        answer: "We clean all retail fixtures in Victorian Village stores including shelving, display cases, counters, racks, and specialty displays while protecting merchandise from dust and damage."
      },
      {
        question: "Do you handle Victorian Village store carpets and floors?",
        answer: "Yes, we provide comprehensive floor care for Victorian Village retailers including carpet vacuuming, hard floor cleaning, and specialized treatments for different flooring types."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Victorian Village shop with attention to the details that matter. Our customers notice the difference.",
      author: "Owner, Victorian Village Home Decor"
    }
  },
  {
    id: "hillard",
    name: "Hilliard",
    description: "Hilliard's expanding retail community trusts our comprehensive cleaning services to create the attractive shopping environments that drive business success. From national retailers to local shops, we maintain the cleanliness standards Hilliard customers expect.",
    faq: [
      {
        question: "Do you serve Hilliard chain retail locations?",
        answer: "Yes, we work with both independent and chain retailers in Hilliard, following brand standards and maintaining consistent cleanliness across locations."
      },
      {
        question: "What makes your Hilliard retail cleaning reliable?",
        answer: "We use consistent teams, detailed protocols, and quality assurance processes to ensure your Hilliard store receives dependable, professional cleaning every service."
      }
    ],
    testimonial: {
      text: "Our Hilliard store has been excellently maintained by Red Rock Cleans. Their retail cleaning expertise shows in every detail.",
      author: "Manager, Hilliard Sporting Goods"
    }
  },
  {
    id: "westerville",
    name: "Westerville",
    description: "Westerville retail establishments trust our specialized cleaning services to maintain the welcoming stores that build customer loyalty and drive sales. Our experienced team understands the comprehensive cleaning needs that keep Westerville retail spaces attractive and inviting.",
    faq: [
      {
        question: "Can you customize cleaning for Westerville retail stores?",
        answer: "Yes, we create customized cleaning plans for Westerville retailers based on your store size, merchandise type, foot traffic, and specific needs."
      },
      {
        question: "How do you coordinate with Westerville retail staff?",
        answer: "We maintain open communication with Westerville store managers and adapt our schedules to minimize disruption while ensuring thorough cleaning of all areas."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provides the professional retail cleaning our Westerville store needs. Reliable, thorough, and retail-focused service.",
      author: "Owner, Westerville Clothing Store"
    }
  }
];

const RetailCleaningColumbusOhioPage = () => {
  const [openAccordion, setOpenAccordion] = useState<string>("");
  const [countersVisible, setCountersVisible] = useState(false);
  const [customerImpressions, setCustomerImpressions] = useState(0);
  const [brandImage, setBrandImage] = useState(0);
  const [hoursSaved, setHoursSaved] = useState(0);

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
        
        setCustomerImpressions(Math.floor(progress * 95));
        setBrandImage(Math.floor(progress * 98));
        setHoursSaved(Math.floor(progress * 500));

        if (step >= steps) {
          clearInterval(timer);
          setCustomerImpressions(95);
          setBrandImage(98);
          setHoursSaved(500);
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
        <title>Retail Store Cleaning Columbus Ohio | Red Rock Cleans</title>
        <meta name="description" content="Professional retail store cleaning in Columbus, OH. Red Rock Cleans helps enhance your brand image with spotless storefronts and sales floors in Dublin, the Short North, and beyond." />
        <meta name="keywords" content="retail store cleaning Columbus Ohio, retail cleaning near me, store cleaning Columbus Ohio, boutique cleaning Short North, shop cleaning Dublin OH, Columbus retail cleaning services, best retail cleaners Columbus, commercial store cleaning Columbus, storefront window cleaning Columbus, retail floor care Columbus, retail cleaning cost Columbus Ohio, store cleaning prices Columbus, retail cleaning checklist Columbus, hire store cleaners in Columbus Ohio" />
        <link rel="canonical" href="https://redrockcleans.com/columbus-ohio/retail-cleaning" />
      </Helmet>
      
      <ColumbusNavigation loginUrl="https://customer-portal.maidily.com/red-rock-cleans-columbus-ohio/sign-in" bookingUrl="/book-now-columbus-ohio" />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/src/assets/hero-commercial.jpg" 
              alt="Professional retail store cleaning service in Columbus Ohio"
              className="w-full h-full object-cover scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                Pristine Retail Cleaning to Elevate Your Columbus Brand
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                In the competitive Columbus retail market, from Easton to the boutiques of the Short North, a customer's perception of your brand begins with a spotless environment. Our specialized retail cleaning services create the immaculate shopping spaces that attract customers, protect merchandise, and build lasting brand loyalty. Trust Red Rock Cleans to make every square foot of your store reflect excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="h-14 text-lg px-8" asChild>
                  <Link to="/book-now-columbus-ohio">
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Schedule Retail Cleaning
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="h-14 text-lg px-8" asChild>
                  <Link to="/contact">
                    <Sparkles className="w-5 h-5 mr-2" />
                    Request Store Assessment
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
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Sparkles className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Immaculate First Impressions</h3>
                      <p className="text-muted-foreground">
                        Crystal-clear entryways and windows attract foot traffic to your Columbus retail store. We ensure every customer's first glimpse of your store—from sparkling windows to spotless sidewalks—communicates quality, professionalism, and the inviting atmosphere that converts browsers into buyers.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <ShoppingCart className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">A Healthy, Inviting Space</h3>
                      <p className="text-muted-foreground">
                        Disinfection of high-touch areas like counters, POS systems, and door handles protects customers and staff in your Columbus store. Regular sanitization creates the safe, healthy shopping environment that builds trust and encourages customers to browse, try on merchandise, and return frequently.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Shirt className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Protecting Your Merchandise</h3>
                      <p className="text-muted-foreground">
                        Meticulous dust and debris control keeps products pristine in your Columbus retail space. Our careful cleaning methods protect merchandise from damage while ensuring every item looks its best on display, maintaining the product quality and presentation your customers expect.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Our Comprehensive Retail Cleaning Checklist Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Our Comprehensive Retail Cleaning Checklist
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Store className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">Sales Floor & Displays</h3>
                      <p className="text-muted-foreground">
                        Floor polishing, carpet care, and dusting all fixtures in your Columbus retail space. We maintain pristine sales floors that are safe to walk on and beautiful to see, while carefully dusting displays, shelving, and merchandise areas to keep every product looking showroom-perfect.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <AppWindow className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">Fitting Rooms & Restrooms</h3>
                      <p className="text-muted-foreground">
                        Maintaining the highest standards of hygiene in your Columbus store's private spaces. We thoroughly clean and disinfect fitting rooms, mirrors, and restrooms to ensure customer comfort and confidence, creating the spotless personal spaces that enhance the shopping experience.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <PictureInPicture className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">Windows & Storefront</h3>
                      <p className="text-muted-foreground">
                        Streak-free glass cleaning for maximum visibility of your Columbus retail displays. We ensure your storefront windows sparkle and showcase merchandise effectively, creating the clear, inviting views that attract foot traffic and convert passersby into customers.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Archive className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">Back-of-House & Stockrooms</h3>
                      <p className="text-muted-foreground">
                        Keeping employee areas clean and organized in your Columbus store. We maintain orderly stockrooms, break rooms, and back-of-house spaces that support efficient operations, protect inventory, and create a positive work environment for your retail staff.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* The Impact of a Professionally Cleaned Store Section */}
        <section id="counters-section" className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                The Impact of a Professionally Cleaned Store
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <Users className="h-16 w-16 mx-auto mb-4 opacity-90" />
                  <div className="text-5xl font-bold mb-2">{customerImpressions}%</div>
                  <h3 className="text-xl font-semibold opacity-90">Positive Customer Impressions</h3>
                </div>
                
                <div className="text-center">
                  <Star className="h-16 w-16 mx-auto mb-4 opacity-90" />
                  <div className="text-5xl font-bold mb-2">{brandImage}%</div>
                  <h3 className="text-xl font-semibold opacity-90">Enhanced Brand Image</h3>
                </div>
                
                <div className="text-center">
                  <Clock className="h-16 w-16 mx-auto mb-4 opacity-90" />
                  <div className="text-5xl font-bold mb-2">{hoursSaved}+</div>
                  <h3 className="text-xl font-semibold opacity-90">Hours Saved for Your Staff</h3>
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
                          <h4 className="font-semibold mb-2">Retail Store Cleaning in {city.name}</h4>
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
                          <Link to="/book-now-columbus-ohio">
                            Schedule {city.name} Retail Cleaning
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
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <Utensils className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Restaurant Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Professional kitchen and dining room cleaning for restaurants
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/columbus-ohio/restaurant-cleaning">Learn More</Link>
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
                    <h3 className="text-lg font-semibold">What is included in retail store cleaning in Columbus Ohio?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Our comprehensive retail store cleaning in Columbus includes sales floor care, window and storefront cleaning, fitting room sanitation, restroom maintenance, display and fixture dusting, carpet vacuuming, hard floor cleaning, high-touch surface disinfection, and stockroom organization. We create customized cleaning plans that address all areas of your retail space to maintain the pristine environment that attracts customers and builds brand loyalty.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="cost" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">How much does retail store cleaning cost in Columbus Ohio?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Retail store cleaning costs in Columbus vary based on store size, foot traffic, merchandise type, and service frequency. Most retail stores invest between $300-$2,000 per month for professional cleaning services. Smaller boutiques typically have lower costs, while larger stores or high-traffic retail spaces require more comprehensive cleaning. We provide free consultations and customized quotes based on your Columbus store's specific needs.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="schedule" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">Can you clean our Columbus retail store after hours?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Yes, we offer flexible scheduling for Columbus retail stores including evening, overnight, and early morning cleaning to ensure your store is spotless before opening without disrupting business hours or the shopping experience. Many Columbus retailers prefer nightly cleaning after close, while others schedule deep cleaning during slower periods or days when closed. We work around your schedule to deliver thorough cleaning at the most convenient time.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="merchandise" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">How do you protect merchandise during Columbus retail cleaning?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      We protect merchandise during Columbus retail cleaning through careful techniques, appropriate cleaning products, and trained staff who understand retail environments. Our team uses gentle dusting methods for displays, avoids overspray near products, and maintains awareness of valuable or delicate merchandise. We can also work around specific displays or coordinate with your staff to ensure all products remain pristine while we thoroughly clean your store.
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
              Ready to Elevate Your Brand with Pristine Retail Cleaning?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join Columbus retailers that trust Red Rock Cleans for spotless stores and unforgettable shopping experiences
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
              <Link to="/book-now-columbus-ohio">Schedule Your Retail Store Cleaning Today</Link>
            </Button>
          </div>
        </section>

        {/* Image Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <img 
                src="/src/assets/service-products.jpg" 
                alt="A bright, clean luxury retail store in Columbus, Ohio, cleaned by Red Rock Cleans"
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

export default RetailCleaningColumbusOhioPage;


import { DallasNavigation } from "@/components/DallasNavigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Sparkles, ShoppingCart, Shirt, Store, AppWindow, PictureInPicture2, Archive, Users, Star, Clock, Package, Utensils, Dumbbell } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";

const neighborhoods = [
  {
    id: "university-park",
    name: "University Park",
    description: "Elevate your University Park retail store's brand with our professional cleaning services. We understand the sophisticated standards expected in this prestigious Dallas neighborhood and deliver immaculate results that enhance your customer experience.",
    faq: [
      {
        question: "Do you have experience with retail cleaning in University Park?",
        answer: "Yes, our team specializes in retail store cleaning with extensive experience servicing boutiques, shops, and retail establishments throughout University Park and Dallas."
      },
      {
        question: "Can you work around University Park store hours?",
        answer: "Absolutely. We schedule our cleaning services during closed hours, early mornings, or late evenings to avoid disrupting your business operations in University Park."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our University Park boutique beautifully. Our customers always comment on how clean and inviting our store is.",
      author: "Amanda R., Owner, University Park Fashion Boutique"
    }
  },
  {
    id: "highland-park",
    name: "Highland Park",
    description: "Professional retail cleaning services for Highland Park stores that demand the highest standards of cleanliness. Our comprehensive cleaning ensures your retail space maintains its premium image and provides an exceptional shopping environment.",
    faq: [
      {
        question: "What areas of Highland Park retail stores do you clean?",
        answer: "We clean all areas including sales floors, fitting rooms, restrooms, windows, storefronts, and back-of-house areas throughout Highland Park retail establishments."
      },
      {
        question: "Do you clean luxury boutiques in Highland Park?",
        answer: "Yes, we specialize in cleaning high-end retail stores and understand the premium standards expected by Highland Park boutiques and their discerning clientele."
      }
    ],
    testimonial: {
      text: "Our Highland Park store has never looked better. Red Rock Cleans understands retail and delivers consistently exceptional results that impress our customers.",
      author: "Michael T., Manager, Highland Park Specialty Store"
    }
  },
  {
    id: "uptown-dallas",
    name: "Uptown Dallas",
    description: "Keep your Uptown Dallas retail store operating at peak cleanliness with our comprehensive store cleaning services. We specialize in maintaining the high standards expected in this competitive urban shopping district.",
    faq: [
      {
        question: "Do you clean both small boutiques and large stores in Uptown Dallas?",
        answer: "Yes, we provide retail cleaning services for stores of all sizes in Uptown Dallas, from intimate boutiques to large retail establishments and shopping centers."
      },
      {
        question: "What's included in your Uptown Dallas retail cleaning?",
        answer: "We provide floor care, window cleaning, fixture dusting, restroom sanitation, fitting room cleaning, and stockroom organization throughout your Uptown Dallas retail space."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Uptown Dallas store to the highest standards. Their attention to detail and reliability are exceptional for our retail environment.",
      author: "Jessica L., Owner, Uptown Dallas Home Goods Store"
    }
  },
  {
    id: "downtown-dallas",
    name: "Downtown Dallas",
    description: "Downtown Dallas retail stores trust Red Rock Cleans for consistent, professional cleaning that maintains brand image and customer satisfaction. Our team understands the unique challenges of urban retail store cleaning.",
    faq: [
      {
        question: "How far in advance should Downtown Dallas stores book cleaning?",
        answer: "We recommend booking at least one week in advance for regular cleaning, though we can accommodate urgent needs for Downtown Dallas retail establishments."
      },
      {
        question: "Do you provide cleaning supplies for Downtown Dallas stores?",
        answer: "Yes, we bring all professional-grade cleaning supplies, equipment, and products to every Downtown Dallas retail cleaning appointment."
      }
    ],
    testimonial: {
      text: "As a Downtown Dallas store manager, I trust Red Rock Cleans for their reliability and thorough approach to retail cleaning. Outstanding service!",
      author: "Carlos M., Manager, Downtown Dallas Clothing Store"
    }
  },
  {
    id: "preston-hollow",
    name: "Preston Hollow",
    description: "Preston Hollow retail stores enjoy professional, meticulous cleaning with our service that maintains the highest shopping standards. We deliver premium retail cleaning for this distinguished Dallas area's upscale stores.",
    faq: [
      {
        question: "Do you service upscale retail stores in Preston Hollow?",
        answer: "Yes, we specialize in cleaning luxury retail establishments and understand the premium standards expected by Preston Hollow store owners and their clientele."
      },
      {
        question: "Can you work around Preston Hollow store schedules?",
        answer: "Absolutely! We coordinate with your management team to schedule cleaning during closed hours or between business periods in Preston Hollow establishments."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Preston Hollow store impeccably. Their window cleaning and floor care are unmatched in the Dallas area.",
      author: "Patricia H., Owner, Preston Hollow Luxury Goods"
    }
  },
  {
    id: "plano",
    name: "Plano",
    description: "Plano retail stores rely on our cleaning services for consistent brand image, customer satisfaction, and operational excellence. As a major shopping destination, Plano establishments demand the highest standards—we deliver them consistently.",
    faq: [
      {
        question: "What makes Red Rock Cleans different for Plano retail stores?",
        answer: "We're locally owned, fully insured, and our team is trained in retail-specific cleaning with extensive experience in Plano's diverse shopping centers and boutiques."
      },
      {
        question: "Do you offer emergency cleaning for Plano stores?",
        answer: "Yes, we can provide rapid-response cleaning services for special events, grand openings, or urgent sanitation needs in Plano retail establishments."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been cleaning our Plano store for two years. They understand retail operations and deliver flawlessly every time.",
      author: "David K., Owner, Plano Electronics Store"
    }
  },
  {
    id: "frisco",
    name: "Frisco",
    description: "Frisco retail stores enjoy consistent, professional cleaning that keeps shopping environments spotless and inviting. Our team serves Frisco's growing retail sector with expertise and reliability.",
    faq: [
      {
        question: "How long does retail store cleaning take in Frisco?",
        answer: "Most Frisco retail cleanings take 2-4 hours depending on store size, floor type, and specific cleaning requirements."
      },
      {
        question: "Do you work with Frisco shopping center management?",
        answer: "Yes, we coordinate with property managers and store owners to ensure our cleaning meets all standards and doesn't disrupt operations in Frisco establishments."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our Frisco store beautifully. Their floor care and window cleaning are outstanding.",
      author: "Rachel P., Manager, Frisco Sporting Goods"
    }
  },
  {
    id: "prosper",
    name: "Prosper",
    description: "Prosper retail stores trust our cleaning service for consistent customer impressions and brand image. We bring professional retail cleaning expertise to this growing Dallas area community's shopping destinations.",
    faq: [
      {
        question: "What cleaning protocols do you use in Prosper retail stores?",
        answer: "We use retail-appropriate products and follow best practices for floor care, fixture dusting, window cleaning, and high-touch surface disinfection in Prosper stores."
      },
      {
        question: "Can you customize cleaning for Prosper stores?",
        answer: "Yes, we can customize our retail cleaning service to focus on specific areas, fixtures, or concerns for Prosper shopping establishments."
      }
    ],
    testimonial: {
      text: "Working in Prosper, I appreciate Red Rock Cleans' expertise and reliability for our store. Excellent professional cleaning service.",
      author: "Thomas B., Owner, Prosper Gift Shop"
    }
  }
];

const RetailCleaningDallasPage = () => {
  const [openItem, setOpenItem] = useState<string>("");
  const [countersInView, setCountersInView] = useState(false);

  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash && neighborhoods.some(n => n.id === hash)) {
      setOpenItem(hash);
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (hash && neighborhoods.some(n => n.id === hash)) {
        setOpenItem(hash);
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Counter animation effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setCountersInView(true);
        }
      },
      { threshold: 0.3 }
    );

    const counterSection = document.getElementById('counters-section');
    if (counterSection) {
      observer.observe(counterSection);
    }

    return () => {
      if (counterSection) {
        observer.unobserve(counterSection);
      }
    };
  }, []);

  const Counter = ({ end, label, icon: Icon, suffix = "+" }: { end: number; label: string; icon: any; suffix?: string }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!countersInView) return;

      let startTime: number;
      const duration = 2000;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        setCount(Math.floor(progress * end));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }, [countersInView, end]);

    return (
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
          <Icon className="w-8 h-8" />
        </div>
        <div className="text-4xl md:text-5xl font-bold mb-2">
          {count}{suffix}
        </div>
        <p className="text-muted-foreground">{label}</p>
      </div>
    );
  };

  return (
    <>
      <Helmet>
        <title>Retail Store Cleaning Dallas | Red Rock Cleans</title>
        <meta name="description" content="Professional retail store cleaning in Dallas. Red Rock Cleans helps enhance your brand image and customer experience with spotless storefronts and sales floors in Plano, Frisco, and beyond." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <DallasNavigation />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative py-24 md:py-32 overflow-hidden">
            <div className="absolute inset-0">
              <img 
                src="/src/assets/hero-commercial.jpg" 
                alt="Professional retail store cleaning service in Dallas"
                className="w-full h-full object-cover scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                  Pristine Retail Cleaning to Elevate Your Dallas Brand
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                  In the competitive Dallas retail market, a customer's perception of your brand begins with a spotless environment. Our professional retail cleaning services ensure your store makes the perfect first impression and provides an exceptional shopping experience that keeps customers coming back.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="h-14 text-lg px-8" asChild>
                    <Link to="/commercial-quote?location=dallas">
                      <Store className="w-5 h-5 mr-2" />
                      Schedule Store Cleaning
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="h-14 text-lg px-8" asChild>
                    <Link to="/contact">
                      <Sparkles className="w-5 h-5 mr-2" />
                      Get Free Quote
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Creating an Unforgettable Shopping Experience */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  Creating an Unforgettable Shopping Experience
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Sparkles className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Immaculate First Impressions</h3>
                      <p className="text-muted-foreground text-sm">
                        Crystal-clear entryways and windows attract foot traffic to your Dallas store. We ensure your storefront sparkles and invites customers inside with streak-free glass and spotless entry areas that showcase your brand.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Welcome Customers →
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <ShoppingCart className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">A Healthy, Inviting Space</h3>
                      <p className="text-muted-foreground text-sm">
                        Disinfection of high-touch areas like counters, POS systems, and door handles protects your customers and staff. Our Dallas team maintains a healthy shopping environment that builds trust and loyalty.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Safe Shopping →
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Shirt className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Protecting Your Merchandise</h3>
                      <p className="text-muted-foreground text-sm">
                        Meticulous dust and debris control keeps products pristine on your Dallas store shelves. We protect your inventory investment with careful cleaning that maintains product quality and presentation.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Product Care →
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Our Comprehensive Retail Cleaning Checklist */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  Our Comprehensive Retail Cleaning Checklist
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Store className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Sales Floor & Displays</h3>
                      <p className="text-muted-foreground text-sm">
                        Floor polishing, carpet care, and dusting all fixtures. We keep your Dallas retail sales floor gleaming and your product displays spotless to showcase your merchandise perfectly.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Sales Floor Care →
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <AppWindow className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Fitting Rooms & Restrooms</h3>
                      <p className="text-muted-foreground text-sm">
                        Maintaining the highest standards of hygiene in customer areas. Our Dallas team ensures these private spaces are immaculate, contributing to overall customer satisfaction.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Hygiene Excellence →
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <PictureInPicture2 className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Windows & Storefront</h3>
                      <p className="text-muted-foreground text-sm">
                        Streak-free glass cleaning for maximum visibility. We ensure your Dallas storefront windows showcase your products beautifully and attract passing customers.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Crystal Clear →
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Archive className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Back-of-House & Stockrooms</h3>
                      <p className="text-muted-foreground text-sm">
                        Keeping employee areas clean and organized. We maintain your Dallas store's back areas to create a professional work environment and protect inventory.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Staff Areas →
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* The Impact of a Professionally Cleaned Store */}
          <section id="counters-section" className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  The Impact of a Professionally Cleaned Store
                </h2>
                <div className="grid md:grid-cols-3 gap-12">
                  <Counter end={95} label="Positive Customer Impressions" icon={Users} suffix="%" />
                  <Counter end={100} label="Enhanced Brand Image" icon={Star} suffix="%" />
                  <Counter end={15} label="Hours Saved for Your Staff" icon={Clock} />
                </div>
              </div>
            </div>
          </section>

          {/* Areas We Serve in Dallas */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  Areas We Serve in Dallas
                </h2>
                <Accordion type="single" collapsible value={openItem} onValueChange={setOpenItem} className="space-y-4">
                  {neighborhoods.map((neighborhood) => (
                    <AccordionItem 
                      key={neighborhood.id} 
                      value={neighborhood.id} 
                      id={neighborhood.id}
                      className="border rounded-lg px-6"
                    >
                      <AccordionTrigger className="text-left hover:no-underline">
                        <div>
                          <h3 className="text-lg font-semibold">{neighborhood.name}</h3>
                          <p className="text-sm text-muted-foreground font-normal">
                            Professional retail store cleaning services
                          </p>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pt-4">
                        <div className="space-y-6">
                          <p className="text-muted-foreground leading-relaxed">
                            {neighborhood.description}
                          </p>
                          
                          <div className="space-y-4">
                            <h4 className="font-semibold">Local FAQ</h4>
                            {neighborhood.faq.map((item, index) => (
                              <div key={index} className="border-l-2 border-primary/20 pl-4">
                                <h5 className="font-medium text-sm">{item.question}</h5>
                                <p className="text-sm text-muted-foreground mt-1">{item.answer}</p>
                              </div>
                            ))}
                          </div>

                          <blockquote className="border-l-4 border-primary/30 pl-4 italic text-muted-foreground">
                            "{neighborhood.testimonial.text}"
                            <footer className="mt-2 text-sm font-medium not-italic">
                              — {neighborhood.testimonial.author}
                            </footer>
                          </blockquote>

                          <Button asChild className="w-full">
                            <Link to="/commercial-quote?location=dallas">
                              Schedule Your {neighborhood.name} Retail Cleaning
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

          {/* Other Commercial Cleaning Services in Dallas */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  Other Commercial Cleaning Services in Dallas
                </h2>
                <p className="text-xl text-muted-foreground mb-12">
                  Beyond retail cleaning, we offer specialized commercial cleaning services for all your Dallas business needs.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <Link to="/dallas/showroom-cleaning/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors mb-4">
                        <Package className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Showroom Cleaning Services
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Professional showroom cleaning to showcase products in pristine environments.
                      </p>
                    </div>
                  </Link>
                  <Link to="/dallas/restaurant-cleaning/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors mb-4">
                        <Utensils className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Restaurant Cleaning Services
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Professional restaurant and commercial kitchen cleaning for health code compliance.
                      </p>
                    </div>
                  </Link>
                  <Link to="/dallas/gym-cleaning/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors mb-4">
                        <Dumbbell className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Gym Cleaning Services
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Professional gym and fitness center cleaning to maintain hygienic workout environments.
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  Frequently Asked Questions
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem value="item-1" className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <h3 className="text-lg font-semibold">What's included in retail store cleaning for Dallas businesses?</h3>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <p className="text-muted-foreground">
                        Our Dallas retail cleaning includes sales floor care (sweeping, mopping, polishing), fixture and display dusting, window and storefront cleaning, fitting room and restroom sanitation, trash removal, and stockroom organization. We customize our services based on your store type, size, and specific needs to ensure your retail space always looks its best.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2" className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <h3 className="text-lg font-semibold">How often should Dallas retail stores be professionally cleaned?</h3>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <p className="text-muted-foreground">
                        Most Dallas retail stores benefit from daily light cleaning with comprehensive deep cleaning 2-3 times per week. High-traffic stores may require nightly deep cleaning, while boutiques might need 2-3 times weekly. Window cleaning is typically weekly or bi-weekly. We can assess your foot traffic, store size, and needs to recommend an optimal cleaning schedule.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3" className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <h3 className="text-lg font-semibold">Will retail cleaning disrupt my Dallas store operations?</h3>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <p className="text-muted-foreground">
                        No. We schedule cleaning during closed hours, early mornings before opening, or late evenings after closing to avoid disrupting your business operations and customer experience. Our Dallas team works efficiently and discreetly, and we can customize our schedule to match your store hours perfectly.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-4" className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <h3 className="text-lg font-semibold">Do you clean different types of retail stores in Dallas?</h3>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <p className="text-muted-foreground">
                        Yes, we have experience cleaning all types of Dallas retail establishments including clothing boutiques, electronics stores, gift shops, sporting goods stores, home goods stores, jewelry stores, and more. Each store type has unique needs, and we tailor our cleaning approach to protect your specific merchandise and maintain your brand's image.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-20 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 text-center">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Elevate Your Brand?
                </h2>
                <p className="text-xl mb-8 opacity-90">
                  Join the Dallas retail stores that trust Red Rock Cleans for impeccable cleanliness and exceptional customer experiences.
                </p>
                <Button size="lg" variant="secondary" className="h-14 text-lg px-8" asChild>
                  <Link to="/commercial-quote?location=dallas">
                    <Store className="w-5 h-5 mr-2" />
                    Schedule Your Retail Cleaning Today
                  </Link>
                </Button>
              </div>
            </div>
          </section>

          {/* Image Section */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <img 
                  src="/src/assets/hero-commercial.jpg" 
                  alt="A bright, clean luxury retail store in Dallas, cleaned by Red Rock Cleans"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default RetailCleaningDallasPage;


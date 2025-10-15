import { DallasNavigation } from "@/components/DallasNavigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Diamond, Sparkles, Handshake, SprayCan, Square, Car, Sofa, Users, DollarSign, Search, Store, Utensils, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";

const neighborhoods = [
  {
    id: "university-park",
    name: "University Park",
    description: "Elevate your University Park showroom's presentation with our professional cleaning services. We understand that in this prestigious Dallas neighborhood, every detail matters when showcasing high-value products to discerning clients.",
    faq: [
      {
        question: "Do you have experience with showroom cleaning in University Park?",
        answer: "Yes, our team specializes in showroom cleaning with extensive experience servicing car dealerships, furniture showrooms, and luxury retail spaces throughout University Park and Dallas."
      },
      {
        question: "Can you work around University Park showroom hours?",
        answer: "Absolutely. We schedule our cleaning services during closed hours, early mornings, or late evenings to avoid disrupting your business operations in University Park."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our University Park showroom impeccably. Our luxury vehicles have never looked better under these gleaming lights.",
      author: "Michael R., Manager, University Park Luxury Auto"
    }
  },
  {
    id: "highland-park",
    name: "Highland Park",
    description: "Professional showroom cleaning services for Highland Park businesses that demand perfection. Our comprehensive cleaning ensures your showroom reflects the premium quality of your products and brand.",
    faq: [
      {
        question: "What types of showrooms do you clean in Highland Park?",
        answer: "We clean all types including car dealerships, furniture showrooms, appliance stores, and luxury retail spaces throughout Highland Park."
      },
      {
        question: "Do you provide specialized floor care in Highland Park?",
        answer: "Yes, we specialize in polishing tile, concrete, and hardwood floors to create that mirror-like finish expected in Highland Park showrooms."
      }
    ],
    testimonial: {
      text: "Our Highland Park showroom has never looked better. Red Rock Cleans understands the luxury market and delivers consistently exceptional results.",
      author: "Jennifer T., Owner, Highland Park Furniture Gallery"
    }
  },
  {
    id: "uptown-dallas",
    name: "Uptown Dallas",
    description: "Keep your Uptown Dallas showroom operating at peak presentation with our comprehensive cleaning services. We specialize in maintaining the high standards expected in this competitive urban market.",
    faq: [
      {
        question: "Do you clean both large and small showrooms in Uptown Dallas?",
        answer: "Yes, we provide showroom cleaning services for spaces of all sizes in Uptown Dallas, from intimate boutique galleries to large automotive dealerships."
      },
      {
        question: "What's included in your Uptown Dallas showroom cleaning?",
        answer: "We provide floor polishing, window cleaning, product dusting, client lounge maintenance, and complete showroom sanitation throughout your Uptown Dallas space."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Uptown Dallas showroom to the highest standards. Their attention to detail and floor polishing are exceptional.",
      author: "David L., Manager, Uptown Dallas Design Center"
    }
  },
  {
    id: "downtown-dallas",
    name: "Downtown Dallas",
    description: "Downtown Dallas showrooms trust Red Rock Cleans for consistent, professional cleaning that maintains brand image and impresses clients. Our team understands the unique challenges of urban showroom cleaning.",
    faq: [
      {
        question: "How far in advance should Downtown Dallas showrooms book cleaning?",
        answer: "We recommend booking at least one week in advance for regular cleaning, though we can accommodate urgent needs for Downtown Dallas showrooms."
      },
      {
        question: "Do you provide cleaning supplies for Downtown Dallas showrooms?",
        answer: "Yes, we bring all professional-grade cleaning supplies, specialized equipment, and products to every Downtown Dallas showroom appointment."
      }
    ],
    testimonial: {
      text: "As a Downtown Dallas showroom manager, I trust Red Rock Cleans for their reliability and meticulous approach. Outstanding service!",
      author: "Carlos M., Manager, Downtown Dallas Appliance Gallery"
    }
  },
  {
    id: "preston-hollow",
    name: "Preston Hollow",
    description: "Preston Hollow showrooms enjoy professional, meticulous cleaning with our service that maintains the highest presentation standards. We deliver premium cleaning for this distinguished Dallas area's luxury showrooms.",
    faq: [
      {
        question: "Do you service luxury showrooms in Preston Hollow?",
        answer: "Yes, we specialize in cleaning high-end showrooms and understand the premium standards expected by Preston Hollow businesses and their clientele."
      },
      {
        question: "Can you work around Preston Hollow showroom schedules?",
        answer: "Absolutely! We coordinate with your management team to schedule cleaning during closed hours or between appointment periods in Preston Hollow."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Preston Hollow showroom flawlessly. Their floor polishing and product care are unmatched in the Dallas area.",
      author: "Patricia H., Owner, Preston Hollow European Motors"
    }
  },
  {
    id: "plano",
    name: "Plano",
    description: "Plano showrooms rely on our cleaning services for consistent client impressions and product presentation excellence. As a major business hub, Plano showrooms demand the highest standards—we deliver them consistently.",
    faq: [
      {
        question: "What makes Red Rock Cleans different for Plano showrooms?",
        answer: "We're locally owned, fully insured, and our team is trained in showroom-specific cleaning with extensive experience in Plano's diverse business sector."
      },
      {
        question: "Do you offer emergency cleaning for Plano showrooms?",
        answer: "Yes, we can provide rapid-response cleaning services for special events, grand openings, or urgent presentation needs in Plano showrooms."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been cleaning our Plano showroom for three years. They understand presentation is everything and deliver flawlessly every time.",
      author: "Robert K., General Manager, Plano Auto Gallery"
    }
  },
  {
    id: "frisco",
    name: "Frisco",
    description: "Frisco showrooms enjoy consistent, professional cleaning that keeps products showcased perfectly. Our team serves Frisco's growing commercial sector with expertise and reliability.",
    faq: [
      {
        question: "How long does showroom cleaning take in Frisco?",
        answer: "Most Frisco showroom cleanings take 3-5 hours depending on space size, product type, and specific cleaning requirements."
      },
      {
        question: "Do you work with Frisco showroom management teams?",
        answer: "Yes, we coordinate closely with managers to ensure our cleaning meets your specific standards and doesn't disrupt operations in Frisco showrooms."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our Frisco showroom beautifully. Their window cleaning and floor polishing are outstanding.",
      author: "Rachel P., Director, Frisco Home Furnishings"
    }
  },
  {
    id: "prosper",
    name: "Prosper",
    description: "Prosper showrooms trust our cleaning service for consistent client impressions and product presentation. We bring professional showroom cleaning expertise to this growing Dallas area community's businesses.",
    faq: [
      {
        question: "What cleaning protocols do you use in Prosper showrooms?",
        answer: "We use lint-free cloths, specialized floor polishing equipment, and streak-free glass cleaners designed for high-end product presentation in Prosper showrooms."
      },
      {
        question: "Can you customize cleaning for Prosper showrooms?",
        answer: "Yes, we can customize our showroom cleaning service to focus on specific products, areas, or presentation concerns for Prosper businesses."
      }
    ],
    testimonial: {
      text: "Working in Prosper, I appreciate Red Rock Cleans' expertise and reliability for our showroom. Excellent professional cleaning service.",
      author: "Thomas B., Owner, Prosper Outdoor Living Gallery"
    }
  }
];

const ShowroomCleaningDallasPage = () => {
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

  const Counter = ({ end, label, icon: Icon, suffix = "%" }: { end: number; label: string; icon: any; suffix?: string }) => {
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
        <title>Showroom Cleaning Services Dallas | Red Rock Cleans</title>
        <meta name="description" content="Professional showroom cleaning in Dallas. Red Rock Cleans enhances your product presentation with meticulous cleaning for car dealerships, furniture stores, and more in Plano and Frisco." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <DallasNavigation />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative py-24 md:py-32 overflow-hidden">
            <div className="absolute inset-0">
              <img 
                src="/src/assets/hero-commercial.jpg" 
                alt="Professional showroom cleaning service in Dallas"
                className="w-full h-full object-cover scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                  Impeccable Showroom Cleaning to Showcase Your Dallas Products
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                  For high-value products in Dallas, the showroom's cleanliness is a direct reflection of the product's quality. Our professional showroom cleaning services ensure your space makes the perfect impression and influences purchasing decisions in your favor, whether you're showcasing luxury vehicles, premium furniture, or high-end appliances.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="h-14 text-lg px-8" asChild>
                    <Link to="/book-now-dallas">
                      <Diamond className="w-5 h-5 mr-2" />
                      Schedule Showroom Cleaning
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

          {/* Creating a Flawless Buying Environment */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  Creating a Flawless Buying Environment
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Diamond className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Pristine Product Presentation</h3>
                      <p className="text-muted-foreground text-sm">
                        Ensuring every product is free of dust, smudges, and fingerprints. Our Dallas team uses lint-free cloths and specialized techniques to keep your high-value products looking showroom-perfect at all times.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Perfect Products →
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Sparkles className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Gleaming Floors & Surfaces</h3>
                      <p className="text-muted-foreground text-sm">
                        Perfectly polished floors and spotless surfaces that reflect luxury. Our Dallas showroom cleaning creates that mirror-like finish that enhances product presentation and impresses discerning clients.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Mirror Finish →
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Handshake className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">A Premium Client Experience</h3>
                      <p className="text-muted-foreground text-sm">
                        The importance of clean client lounges, offices, and reception areas. We ensure every client touchpoint in your Dallas showroom reflects the premium quality of your brand and products.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Client Comfort →
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Our Meticulous Showroom Cleaning Checklist */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  Our Meticulous Showroom Cleaning Checklist
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <SprayCan className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Floor Care & Polishing</h3>
                      <p className="text-muted-foreground text-sm">
                        Specialized care for tile, concrete, or hardwood floors. We use professional polishing equipment to create that gleaming finish that makes your Dallas showroom shine.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Floor Excellence →
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Square className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Window & Glass Cleaning</h3>
                      <p className="text-muted-foreground text-sm">
                        Streak-free cleaning for large plate glass windows and displays. Our Dallas team ensures crystal-clear views that showcase your products in the best possible light.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Crystal Clear →
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Car className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Product & Display Dusting</h3>
                      <p className="text-muted-foreground text-sm">
                        Careful, lint-free dusting of all products. We meticulously clean vehicles, furniture, appliances, and displays to ensure they look perfect for your Dallas clientele.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Product Care →
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Sofa className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Client Lounges & Offices</h3>
                      <p className="text-muted-foreground text-sm">
                        Creating a comfortable and impressive space for clients. We maintain your Dallas showroom's waiting areas and offices to the same high standards as your product floor.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Client Spaces →
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* The Impact of a Perfectly Clean Showroom */}
          <section id="counters-section" className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  The Impact of a Perfectly Clean Showroom
                </h2>
                <div className="grid md:grid-cols-3 gap-12">
                  <Counter end={98} label="Positive Client Impressions" icon={Users} />
                  <Counter end={35} label="Increased Perceived Value" icon={DollarSign} />
                  <Counter end={100} label="Attention to Detail Score" icon={Search} />
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
                            Professional showroom cleaning services
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
                            <Link to="/book-now-dallas">
                              Schedule Your {neighborhood.name} Showroom Cleaning
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
                  Beyond showroom cleaning, we offer specialized commercial cleaning services for all your Dallas business needs.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <Link to="/dallas/retail-cleaning/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors mb-4">
                        <Store className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Retail Store Cleaning
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Professional retail cleaning to enhance your brand image and customer experience.
                      </p>
                    </div>
                  </Link>
                  <Link to="/dallas/restaurant-cleaning/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors mb-4">
                        <Utensils className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Restaurant Cleaning
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Professional restaurant and commercial kitchen cleaning for health code compliance.
                      </p>
                    </div>
                  </Link>
                  <Link to="/dallas/government-facility-cleaning/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors mb-4">
                        <Building2 className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Government Facility Cleaning
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Secure and compliant cleaning for municipal and federal buildings.
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
                      <h3 className="text-lg font-semibold">What's included in showroom cleaning services for Dallas businesses?</h3>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <p className="text-muted-foreground">
                        Our Dallas showroom cleaning includes floor polishing, window and glass cleaning, product dusting (vehicles, furniture, appliances), display maintenance, client lounge cleaning, restroom sanitation, and trash removal. We use specialized equipment and lint-free materials to ensure your products look perfect. Services are customized based on your showroom type and specific presentation needs.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2" className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <h3 className="text-lg font-semibold">How often should Dallas showrooms be professionally cleaned?</h3>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <p className="text-muted-foreground">
                        Most Dallas showrooms benefit from daily light cleaning with comprehensive deep cleaning 2-3 times per week. High-traffic showrooms may require nightly deep cleaning. Floor polishing is typically weekly, while windows should be cleaned weekly or bi-weekly. We can assess your foot traffic, product type, and presentation standards to recommend an optimal cleaning schedule.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3" className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <h3 className="text-lg font-semibold">Will showroom cleaning damage our products in Dallas?</h3>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <p className="text-muted-foreground">
                        No. Our Dallas team is trained in careful handling of high-value products. We use lint-free microfiber cloths, appropriate cleaning solutions for each surface type, and gentle techniques that protect products while removing dust and fingerprints. We understand the value of your inventory and treat every item with the utmost care and respect.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-4" className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <h3 className="text-lg font-semibold">What types of showrooms do you clean in Dallas?</h3>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <p className="text-muted-foreground">
                        We clean all types of Dallas showrooms including automotive dealerships (luxury and standard), furniture galleries, appliance stores, home goods showrooms, jewelry stores, boat dealerships, RV showrooms, and more. Each showroom type has unique needs, and we tailor our cleaning approach to protect your specific products and maintain your brand's premium image.
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
                  Ready to Showcase Perfection?
                </h2>
                <p className="text-xl mb-8 opacity-90">
                  Join the Dallas showrooms that trust Red Rock Cleans for impeccable presentation and the perfect product showcase.
                </p>
                <Button size="lg" variant="secondary" className="h-14 text-lg px-8" asChild>
                  <Link to="/book-now-dallas">
                    <Diamond className="w-5 h-5 mr-2" />
                    Schedule Your Showroom Cleaning Today
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
                  alt="A pristine luxury car showroom in Dallas after professional cleaning by Red Rock Cleans"
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

export default ShowroomCleaningDallasPage;


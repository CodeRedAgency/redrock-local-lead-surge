import { DallasNavigation } from "@/components/DallasNavigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Sparkles, Droplets, Heart, Scissors, Paintbrush, Sofa, ShowerHead, Smile, BadgeCheck, Wind, Store, Hospital, Dumbbell } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";

const neighborhoods = [
  {
    id: "university-park",
    name: "University Park",
    description: "Elevate your University Park salon or spa with our professional cleaning services. We understand that in this prestigious Dallas neighborhood, your clients expect the highest standards of cleanliness and luxury.",
    faq: [
      {
        question: "Do you have experience with salon and spa cleaning in University Park?",
        answer: "Yes, our team specializes in beauty and wellness facility cleaning with extensive experience servicing hair salons, day spas, and medispas throughout University Park and Dallas."
      },
      {
        question: "Can you work around University Park salon hours?",
        answer: "Absolutely. We schedule our cleaning services during closed hours, early mornings, or late evenings to avoid disrupting your University Park salon or spa operations."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our University Park spa impeccably. Our clients always comment on how pristine and relaxing our environment is.",
      author: "Emily R., Owner, University Park Day Spa"
    }
  },
  {
    id: "highland-park",
    name: "Highland Park",
    description: "Professional salon and spa cleaning services for Highland Park beauty establishments that demand perfection. Our comprehensive cleaning ensures your facility maintains its premium image and provides a luxurious client experience.",
    faq: [
      {
        question: "What areas of Highland Park salons do you clean?",
        answer: "We clean all areas including treatment rooms, styling stations, nail areas, pedicure chairs, reception, waiting areas, restrooms, and staff areas throughout Highland Park salons and spas."
      },
      {
        question: "Do you meet TDLR standards in Highland Park?",
        answer: "Yes, we follow Texas Department of Licensing and Regulation standards for salon and spa sanitation to ensure your Highland Park facility meets all health and safety requirements."
      }
    ],
    testimonial: {
      text: "Our Highland Park salon has never looked better. Red Rock Cleans understands the beauty industry and delivers consistently exceptional results.",
      author: "Jennifer T., Manager, Highland Park Hair Studio"
    }
  },
  {
    id: "uptown-dallas",
    name: "Uptown Dallas",
    description: "Keep your Uptown Dallas salon or spa operating at peak presentation with our comprehensive cleaning services. We specialize in maintaining the high standards expected in this competitive urban beauty market.",
    faq: [
      {
        question: "Do you clean both salons and spas in Uptown Dallas?",
        answer: "Yes, we provide cleaning services for all types of beauty and wellness facilities in Uptown Dallas, including hair salons, day spas, medispas, nail salons, and barber shops."
      },
      {
        question: "What's included in your Uptown Dallas salon cleaning?",
        answer: "We provide styling station sanitation, treatment room disinfection, pedicure chair deep cleaning, reception area maintenance, and complete facility sanitation throughout your Uptown Dallas salon or spa."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Uptown Dallas medispa to the highest standards. Their attention to hygiene and detail are exceptional.",
      author: "Dr. Lisa M., Director, Uptown Dallas Medispa"
    }
  },
  {
    id: "downtown-dallas",
    name: "Downtown Dallas",
    description: "Downtown Dallas salons and spas trust Red Rock Cleans for consistent, professional cleaning that maintains client trust and satisfaction. Our team understands the unique challenges of urban beauty facility cleaning.",
    faq: [
      {
        question: "How far in advance should Downtown Dallas salons book cleaning?",
        answer: "We recommend booking at least one week in advance for regular cleaning, though we can accommodate urgent needs for Downtown Dallas salons and spas."
      },
      {
        question: "Do you provide cleaning supplies for Downtown Dallas salons?",
        answer: "Yes, we bring all professional-grade, salon-safe cleaning supplies and disinfectants to every Downtown Dallas beauty facility appointment."
      }
    ],
    testimonial: {
      text: "As a Downtown Dallas salon owner, I trust Red Rock Cleans for their reliability and thorough approach. Outstanding service!",
      author: "Carlos M., Owner, Downtown Dallas Beauty Bar"
    }
  },
  {
    id: "preston-hollow",
    name: "Preston Hollow",
    description: "Preston Hollow salons and spas enjoy professional, meticulous cleaning with our service that maintains the highest luxury standards. We deliver premium cleaning for this distinguished Dallas area's beauty establishments.",
    faq: [
      {
        question: "Do you service luxury spas in Preston Hollow?",
        answer: "Yes, we specialize in cleaning high-end spas and salons, understanding the premium standards expected by Preston Hollow beauty establishments and their discerning clientele."
      },
      {
        question: "Can you work around Preston Hollow salon schedules?",
        answer: "Absolutely! We coordinate with salon managers to schedule cleaning during closed hours or between appointment periods in Preston Hollow facilities."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Preston Hollow spa flawlessly. Their treatment room sanitation and attention to detail are unmatched.",
      author: "Patricia H., Spa Director, Preston Hollow Wellness Retreat"
    }
  },
  {
    id: "plano",
    name: "Plano",
    description: "Plano salons and spas rely on our cleaning services for consistent client satisfaction and hygiene excellence. As a major beauty destination, Plano establishments demand the highest standards—we deliver them consistently.",
    faq: [
      {
        question: "What makes Red Rock Cleans different for Plano salons?",
        answer: "We're locally owned, fully insured, and our team is trained in beauty industry-specific cleaning with extensive experience in Plano's diverse salon and spa sector."
      },
      {
        question: "Do you offer emergency cleaning for Plano salons?",
        answer: "Yes, we can provide rapid-response cleaning services for health inspections, special events, or urgent sanitation needs in Plano beauty facilities."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been cleaning our Plano salon for three years. They understand beauty industry standards and deliver flawlessly every time.",
      author: "Amanda K., Owner, Plano Hair & Nail Studio"
    }
  },
  {
    id: "frisco",
    name: "Frisco",
    description: "Frisco salons and spas enjoy consistent, professional cleaning that keeps beauty environments pristine and inviting. Our team serves Frisco's growing wellness sector with expertise and reliability.",
    faq: [
      {
        question: "How long does salon cleaning take in Frisco?",
        answer: "Most Frisco salon cleanings take 2-4 hours depending on facility size, number of stations, and specific cleaning requirements."
      },
      {
        question: "Do you work with Frisco salon management teams?",
        answer: "Yes, we coordinate closely with salon owners and managers to ensure our cleaning meets your specific standards and doesn't disrupt operations in Frisco facilities."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our Frisco spa beautifully. Their pedicure chair cleaning and treatment room sanitation are outstanding.",
      author: "Rachel P., Manager, Frisco Day Spa & Wellness"
    }
  },
  {
    id: "prosper",
    name: "Prosper",
    description: "Prosper salons and spas trust our cleaning service for consistent client impressions and hygiene standards. We bring professional beauty facility cleaning expertise to this growing Dallas area community's wellness businesses.",
    faq: [
      {
        question: "What cleaning protocols do you use in Prosper salons?",
        answer: "We use TDLR-compliant disinfection methods, salon-safe products, and specialized techniques for styling stations, treatment rooms, and pedicure equipment in Prosper facilities."
      },
      {
        question: "Can you customize cleaning for Prosper salons?",
        answer: "Yes, we can customize our salon and spa cleaning service to focus on specific areas, equipment, or hygiene concerns for Prosper beauty establishments."
      }
    ],
    testimonial: {
      text: "Working in Prosper, I appreciate Red Rock Cleans' expertise and reliability for our salon. Excellent professional cleaning service.",
      author: "Thomas B., Owner, Prosper Beauty Lounge"
    }
  }
];

const SalonSpaCleaningDallasPage = () => {
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
        <title>Salon & Spa Cleaning Dallas | Red Rock Cleans</title>
        <meta name="description" content="Professional salon and spa cleaning in Dallas. Red Rock Cleans ensures a pristine, hygienic, and relaxing environment for hair salons, day spas, and medispas in Plano, Frisco, and beyond." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <DallasNavigation />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative py-24 md:py-32 overflow-hidden">
            <div className="absolute inset-0">
              <img 
                src="/src/assets/hero-commercial.jpg" 
                alt="Professional salon and spa cleaning service in Dallas"
                className="w-full h-full object-cover scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                  Pristine Salon & Spa Cleaning for Ultimate Client Relaxation in Dallas
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                  In the competitive Dallas beauty and wellness industry, cleanliness is paramount for creating a luxurious, relaxing, and trustworthy experience for every client. Our professional salon and spa cleaning services ensure your facility provides the pristine environment that keeps clients coming back.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="h-14 text-lg px-8" asChild>
                    <Link to="/commercial-quote?location=dallas">
                      <Sparkles className="w-5 h-5 mr-2" />
                      Schedule Salon Cleaning
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="h-14 text-lg px-8" asChild>
                    <Link to="/contact">
                      <Heart className="w-5 h-5 mr-2" />
                      Get Free Quote
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Elevating Your Dallas Client's Experience */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  Elevating Your Dallas Client's Experience
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Sparkles className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Serene & Inviting Atmosphere</h3>
                      <p className="text-muted-foreground text-sm">
                        Immaculate cleanliness contributes to relaxation and a high-end feel. Our Dallas team creates the pristine environment that allows your clients to fully unwind and enjoy their beauty and wellness experience.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Pure Relaxation →
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Droplets className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Strict Hygiene & Disinfection</h3>
                      <p className="text-muted-foreground text-sm">
                        Practices to prevent cross-contamination and meet Texas Department of Licensing and Regulation (TDLR) standards. We use salon-safe disinfectants to ensure your Dallas facility meets all health requirements.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        TDLR Compliant →
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Heart className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Flawless First Impressions</h3>
                      <p className="text-muted-foreground text-sm">
                        A spotless reception and waiting area sets the tone for a premium experience. We ensure your Dallas salon or spa makes the perfect first impression that reflects your brand's luxury and professionalism.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Premium Welcome →
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Our Comprehensive Salon & Spa Cleaning Checklist */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  Our Comprehensive Salon & Spa Cleaning Checklist
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Scissors className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Treatment & Styling Rooms</h3>
                      <p className="text-muted-foreground text-sm">
                        Sanitizing surfaces, equipment, and managing hair/product residue. We thoroughly clean styling stations, treatment beds, and all equipment in your Dallas salon to maintain hygiene and presentation.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Station Sanitation →
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Paintbrush className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Nail Stations & Pedicure Chairs</h3>
                      <p className="text-muted-foreground text-sm">
                        Deep cleaning and disinfection of foot baths and manicure stations. Our Dallas team uses specialized techniques to clean pedicure equipment and ensure compliance with sanitation standards.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Nail Care Clean →
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Sofa className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Reception & Waiting Areas</h3>
                      <p className="text-muted-foreground text-sm">
                        Maintaining spotless first impressions, dusting, and floor care. We ensure your Dallas reception area is immaculate, welcoming, and reflects your salon's premium brand.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Perfect Welcome →
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <ShowerHead className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Restrooms & Changing Areas</h3>
                      <p className="text-muted-foreground text-sm">
                        Intensive sanitization and restocking to luxury standards. We maintain your Dallas spa's private areas to the highest standards of cleanliness and comfort.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Luxury Sanitation →
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* The Difference a Professional Clean Makes */}
          <section id="counters-section" className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  The Difference a Professional Clean Makes
                </h2>
                <div className="grid md:grid-cols-3 gap-12">
                  <Counter end={95} label="Client Satisfaction Boost" icon={Smile} />
                  <Counter end={100} label="Hygiene Standard Score" icon={BadgeCheck} />
                  <Counter end={98} label="Stress-Free Environment" icon={Wind} />
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
                            Professional salon and spa cleaning services
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
                              Schedule Your {neighborhood.name} Salon Cleaning
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
                  Beyond salon and spa cleaning, we offer specialized commercial cleaning services for all your Dallas business needs.
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
                  <Link to="/dallas/medical-office-cleaning/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors mb-4">
                        <Hospital className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Medical Office Cleaning
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        HIPAA compliant cleaning for medical offices and medispas.
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
                        Professional gym and fitness center cleaning for hygienic workout spaces.
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
                      <h3 className="text-lg font-semibold">What's included in salon and spa cleaning services for Dallas facilities?</h3>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <p className="text-muted-foreground">
                        Our Dallas salon and spa cleaning includes styling station sanitation, treatment room disinfection, pedicure chair deep cleaning, nail station sanitation, reception and waiting area maintenance, restroom deep cleaning, floor care, mirror and glass cleaning, and trash removal. We use salon-safe, TDLR-compliant disinfectants and customize services based on your facility type and specific needs.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2" className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <h3 className="text-lg font-semibold">How often should Dallas salons and spas be professionally cleaned?</h3>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <p className="text-muted-foreground">
                        Most Dallas salons and spas benefit from daily light cleaning with comprehensive deep cleaning 2-3 times per week. High-traffic facilities may require nightly deep cleaning. Pedicure chairs and nail stations need daily disinfection, while treatment rooms should be sanitized after each use. We can assess your client volume and services to recommend an optimal cleaning schedule.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3" className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <h3 className="text-lg font-semibold">Are your cleaning products safe for Dallas salons and spas?</h3>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <p className="text-muted-foreground">
                        Yes, absolutely. We use salon-safe, non-toxic cleaning products that are effective yet gentle on beauty equipment and safe for clients with sensitivities. Our Dallas team uses TDLR-compliant disinfectants that meet Texas health standards while being safe for use in beauty and wellness environments. All products are carefully selected to protect both your equipment and your clients.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-4" className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <h3 className="text-lg font-semibold">Do you clean all types of beauty facilities in Dallas?</h3>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <p className="text-muted-foreground">
                        Yes, we clean all types of Dallas beauty and wellness facilities including hair salons, day spas, medispas, nail salons, barbershops, massage studios, and beauty schools. Each facility type has unique needs, and we tailor our cleaning approach to your specific services, equipment, and hygiene requirements to ensure optimal results.
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
                  Ready for Ultimate Client Relaxation?
                </h2>
                <p className="text-xl mb-8 opacity-90">
                  Join the Dallas salons and spas that trust Red Rock Cleans for pristine cleanliness and exceptional client experiences.
                </p>
                <Button size="lg" variant="secondary" className="h-14 text-lg px-8" asChild>
                  <Link to="/commercial-quote?location=dallas">
                    <Sparkles className="w-5 h-5 mr-2" />
                    Schedule Your Salon Cleaning Today
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
                  alt="A serene and immaculate spa treatment room in Dallas, cleaned by Red Rock Cleans"
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

export default SalonSpaCleaningDallasPage;


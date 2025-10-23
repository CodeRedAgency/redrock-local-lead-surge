import { LasVegasNavigation } from "@/components/LasVegasNavigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  CheckCircle, 
  Clock, 
  Shield, 
  Star, 
  Users, 
  Calendar, 
  Home, 
  Sparkles, 
  ShoppingCart, 
  Shirt, 
  Store, 
  User, 
  Monitor, 
  Box,
  ShoppingBag,
  Link as LinkIcon,
  Phone
} from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import Hreflang from "@/components/Hreflang";
import { useTranslation } from 'react-i18next';

const neighborhoods = [
  {
    id: "anthem",
    name: "Anthem",
    description: "Keep your Anthem retail store pristine and customer-ready with our comprehensive retail cleaning services designed for brand excellence and customer satisfaction in the competitive retail market.",
    faq: [
      {
        question: "Do you understand the specific cleaning requirements for Anthem retail stores?",
        answer: "Absolutely. Our team is trained in retail-specific cleaning protocols and understands the critical importance of maintaining clean, inviting storefronts and sales floors for customer experience."
      },
      {
        question: "Can you work around Anthem retail operating hours?",
        answer: "Yes, we schedule our cleaning services around your peak hours, customer traffic, and operational requirements to minimize disruption to your retail operations."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our Anthem retail store with exceptional cleanliness standards. Their understanding of retail facility requirements is outstanding.",
      author: "Store Manager, Anthem Shopping Center"
    }
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "Professional retail cleaning services for Enterprise stores who demand the highest standards of cleanliness, customer experience, and brand presentation excellence.",
    faq: [
      {
        question: "What areas of Enterprise retail stores do you clean?",
        answer: "We clean all areas including sales floors, fitting rooms, restrooms, windows, storefronts, back-of-house areas, and high-traffic zones with appropriate retail-grade cleaning products."
      },
      {
        question: "Do you provide flexible scheduling for Enterprise retail stores?",
        answer: "Yes, we work around your operating hours, peak shopping times, and can provide emergency cleaning services when needed for customer experience and brand presentation."
      }
    ],
    testimonial: {
      text: "Our Enterprise retail store has never been cleaner or more customer-ready. Red Rock Cleans respects our customer schedules and provides excellent service around our retail operations.",
      author: "Operations Director, Enterprise Retail Center"
    }
  },
  {
    id: "green-valley-north",
    name: "Green Valley North",
    description: "Keep your Green Valley North retail store pristine with our comprehensive retail cleaning service designed for customer experience and competitive retail excellence.",
    faq: [
      {
        question: "Do you clean both large and small retail stores in Green Valley North?",
        answer: "Yes, we provide retail cleaning services for stores of all sizes, from boutique shops to large department stores and shopping centers."
      },
      {
        question: "What's included in your Green Valley North retail cleaning?",
        answer: "We clean sales floors, fitting rooms, restrooms, windows, storefronts, back-of-house areas, and specialized retail spaces with appropriate cleaning products and techniques."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Green Valley North retail store beautifully. Their precision and attention to retail cleanliness requirements are exceptional.",
      author: "Retail Director, Green Valley North Shopping Center"
    }
  },
  {
    id: "henderson",
    name: "Henderson",
    description: "Henderson retail stores trust Red Rock Cleans for consistent, professional retail cleaning services that maintain their facilities clean and customer-ready year-round.",
    faq: [
      {
        question: "How far in advance should Henderson retail stores book cleaning?",
        answer: "We recommend booking at least one week in advance, though we can often accommodate shorter notice for emergency situations or special events."
      },
      {
        question: "Do you provide specialized equipment for Henderson retail cleaning?",
        answer: "Yes, we bring all specialized equipment including floor polishers, window cleaning tools, and appropriate cleaning solutions for retail environments and customer areas."
      }
    ],
    testimonial: {
      text: "As a Henderson retail store owner, I appreciate Red Rock Cleans' understanding of retail facility needs. Highly recommended for shopping centers!",
      author: "Store Owner, Henderson Retail Plaza"
    }
  },
  {
    id: "lake-las-vegas",
    name: "Lake Las Vegas",
    description: "Lake Las Vegas retail stores enjoy pristine, professional cleaning with our retail cleaning service that maintains their facilities to the highest customer experience standards.",
    faq: [
      {
        question: "Do you service high-end retail stores in Lake Las Vegas?",
        answer: "Yes, we specialize in cleaning premium retail facilities and are experienced with sophisticated storefronts, luxury shopping environments, and high-end retail standards."
      },
      {
        question: "Can you work around Lake Las Vegas retail schedules?",
        answer: "Absolutely! We offer flexible scheduling including early morning, late evening, and emergency services to accommodate your customer schedules and operational requirements."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Lake Las Vegas retail store to perfection. Their understanding of luxury retail facilities and cleanliness protocols is remarkable.",
      author: "General Manager, Lake Las Vegas Shopping Center"
    }
  },
  {
    id: "las-vegas",
    name: "Las Vegas",
    description: "Las Vegas retail stores rely on our professional retail cleaning service for consistent, customer-ready facility maintenance that ensures optimal brand presentation and customer satisfaction.",
    faq: [
      {
        question: "What makes Red Rock Cleans different for Las Vegas retail stores?",
        answer: "We're locally owned, fully insured, and our team is specially trained in retail cleaning protocols, customer area maintenance, and retail facility cleanliness requirements."
      },
      {
        question: "Do you offer emergency retail cleaning for Las Vegas?",
        answer: "Yes, we can often provide same-day or emergency cleaning services for critical customer experience situations, post-event cleanup, or special retail events."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been cleaning our Las Vegas retail store for three years. They understand our customer needs and maintain our facility cleanly and professionally.",
      author: "Operations Manager, Las Vegas Shopping Center"
    }
  },
  {
    id: "macdonald-ranch",
    name: "MacDonald Ranch",
    description: "MacDonald Ranch retail stores enjoy consistent, professional retail cleaning services that keep their facilities spotless and operating at peak customer satisfaction.",
    faq: [
      {
        question: "How long does retail cleaning take in MacDonald Ranch?",
        answer: "Most MacDonald Ranch retail cleanings take 4-8 hours depending on store size, complexity, and specific cleanliness requirements for retail operations."
      },
      {
        question: "Do you work with MacDonald Ranch retail staff?",
        answer: "Yes, we coordinate with your retail staff and management team to ensure our cleaning complements your customer schedules and operational requirements."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our MacDonald Ranch retail store beautifully. Their professional approach and attention to cleanliness are outstanding.",
      author: "Retail Manager, MacDonald Ranch Shopping Center"
    }
  },
  {
    id: "mountains-edge",
    name: "Mountain's Edge",
    description: "Mountain's Edge retail stores trust our professional retail cleaning service for consistent facility maintenance that complements their retail operations and customer satisfaction requirements.",
    faq: [
      {
        question: "What cleaning products do you use in Mountain's Edge retail stores?",
        answer: "We use retail-specific, customer-safe cleaning products that are effective against dirt and grime while protecting your merchandise and customer health."
      },
      {
        question: "Can you customize cleaning for Mountain's Edge retail stores?",
        answer: "Yes, we can customize our retail cleaning service to focus on specific areas, merchandise types, or particular cleanliness priorities based on your retail facility requirements."
      }
    ],
    testimonial: {
      text: "Living in Mountain's Edge, I appreciate Red Rock Cleans' reliability and understanding of our retail store's cleanliness requirements. Excellent service for retail facilities.",
      author: "Store Coordinator, Mountain's Edge Retail Center"
    }
  },
  {
    id: "north-las-vegas",
    name: "North Las Vegas",
    description: "North Las Vegas retail stores depend on our professional retail cleaning service for consistent, customer-ready facility maintenance that keeps their retail operations reliable and efficient.",
    faq: [
      {
        question: "Do you offer competitive rates for North Las Vegas retail stores?",
        answer: "Yes, we provide competitive rates for North Las Vegas retail stores while maintaining high-quality cleanliness standards and retail facility cleaning requirements."
      },
      {
        question: "How do you ensure quality in North Las Vegas retail cleaning?",
        answer: "Every North Las Vegas retail cleaning is supervised by certified specialists and we guarantee compliance with cleanliness standards and your specific retail facility requirements."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our North Las Vegas retail store clean and customer-ready. Great value and excellent professional service for our retail operations.",
      author: "Store Supervisor, North Las Vegas Shopping Center"
    }
  },
  {
    id: "paradise",
    name: "Paradise",
    description: "Paradise retail stores enjoy reliable professional retail cleaning services that maintain their facilities to the highest standards of cleanliness, customer experience, and brand presentation.",
    faq: [
      {
        question: "Do you service diverse retail store types in Paradise?",
        answer: "Yes, we provide professional cleaning services for all types of retail facilities including clothing stores, electronics shops, grocery stores, and specialized retail centers."
      },
      {
        question: "What's your cancellation policy for Paradise retail stores?",
        answer: "We require 24-hour notice for cancellations, but we're flexible for emergency situations and can reschedule around critical customer events and retail programs."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our Paradise retail store beautifully. Professional, clean, and thorough every time for our retail operations.",
      author: "Operations Manager, Paradise Shopping Center"
    }
  },
  {
    id: "seven-hills",
    name: "Seven Hills",
    description: "Seven Hills retail stores trust our professional retail cleaning service for consistent, customer-ready facility maintenance that preserves their retail operations and customer satisfaction.",
    faq: [
      {
        question: "Do you service high-end retail stores in Seven Hills?",
        answer: "Yes, we have extensive experience cleaning premium retail facilities, including those with sophisticated storefronts, luxury shopping environments, and high-end retail standards."
      },
      {
        question: "How do you ensure security in Seven Hills retail stores?",
        answer: "All our team members are background-checked, bonded, and insured. We respect the sensitive nature of your retail operations and maintain strict confidentiality and security protocols."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Seven Hills retail store to perfection. Their professionalism and understanding of retail facility cleanliness requirements are outstanding.",
      author: "Retail Director, Seven Hills Shopping Center"
    }
  },
  {
    id: "silverado-ranch",
    name: "Silverado Ranch",
    description: "Silverado Ranch retail stores rely on our professional retail cleaning service for consistent facility maintenance that keeps their retail operations operating smoothly and customer-ready.",
    faq: [
      {
        question: "Do you work around Silverado Ranch retail schedules?",
        answer: "Yes, we can schedule cleanings around your operating hours, peak shopping times, and customer schedules for your convenience and operational efficiency."
      },
      {
        question: "What if we're not satisfied with cleaning in Silverado Ranch?",
        answer: "We guarantee satisfaction and will return to address any concerns at no additional charge, understanding the critical nature of your retail operations."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Silverado Ranch retail store spotless and customer-ready for over two years. Highly recommend their professional service for retail facilities!",
      author: "Operations Manager, Silverado Ranch Shopping Center"
    }
  },
  {
    id: "spring-valley",
    name: "Spring Valley",
    description: "Spring Valley retail stores enjoy consistent, professional retail cleaning services that maintain their facilities clean and operating at optimal customer satisfaction year-round.",
    faq: [
      {
        question: "How often do Spring Valley retail stores schedule cleaning?",
        answer: "Most Spring Valley retail stores prefer daily or weekly cleaning, though we offer flexible scheduling based on your operational requirements and customer traffic patterns."
      },
      {
        question: "Do you provide specialized cleaning for Spring Valley retail stores?",
        answer: "Yes, we offer both regular retail cleaning and specialized services for critical cleanliness maintenance, post-event cleanup, and emergency cleaning."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our Spring Valley retail store beautifully. Professional, reliable, and always clean for our retail operations.",
      author: "Retail Manager, Spring Valley Shopping Center"
    }
  },
  {
    id: "summerlin-south",
    name: "Summerlin South",
    description: "Summerlin South retail stores trust our professional retail cleaning service for consistent, high-quality facility maintenance that complements their premium retail operations and customer satisfaction excellence.",
    faq: [
      {
        question: "Do you service luxury retail stores in Summerlin South?",
        answer: "Yes, we specialize in cleaning high-end retail facilities and are experienced with sophisticated storefronts, premium shopping environments, and luxury retail standards."
      },
      {
        question: "Can you accommodate Summerlin South retail schedules?",
        answer: "Absolutely! We're familiar with busy retail operations and can work around critical operational windows, customer schedules, and retail program requirements."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Summerlin South retail store to the highest standards. Exceptional professional service and deep understanding of retail facility cleanliness requirements.",
      author: "General Manager, Summerlin South Shopping Center"
    }
  },
  {
    id: "sunrise-manor",
    name: "Sunrise Manor",
    description: "Sunrise Manor retail stores depend on our professional retail cleaning service for consistent, customer-ready facility maintenance that keeps their retail operations spotless and operating efficiently.",
    faq: [
      {
        question: "Do you offer competitive rates for Sunrise Manor retail stores?",
        answer: "Yes, we provide competitive rates for Sunrise Manor retail stores while maintaining high professional cleaning standards and retail facility cleanliness compliance."
      },
      {
        question: "How reliable is your service in Sunrise Manor retail stores?",
        answer: "We're committed to reliability and have a strong track record of consistent, professional service in Sunrise Manor retail facilities."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Sunrise Manor retail store clean and customer-ready. Great value and reliable professional service for our retail operations.",
      author: "Operations Supervisor, Sunrise Manor Shopping Center"
    }
  },
  {
    id: "whitney",
    name: "Whitney",
    description: "Whitney retail stores enjoy professional retail cleaning services that maintain their facilities clean, customer-ready, and ready for optimal customer satisfaction.",
    faq: [
      {
        question: "Do you work with diverse Whitney retail environments?",
        answer: "Yes, we're experienced with retail facilities of all types and sizes, using professional cleaning practices appropriate for different retail operations and cleanliness requirements."
      },
      {
        question: "Can you schedule around Whitney retail operational requirements?",
        answer: "Absolutely! We offer flexible scheduling including early morning, late evening, and emergency services around your critical retail calendar."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our Whitney retail store beautifully. Professional, trustworthy, and always clean for our retail operations.",
      author: "Store Manager, Whitney Shopping Center"
    }
  },
  {
    id: "winchester",
    name: "Winchester",
    description: "Winchester retail stores trust our professional retail cleaning service for consistent, customer-ready facility maintenance that keeps their retail operations spotless and operating at peak performance year-round.",
    faq: [
      {
        question: "Do you service diverse retail store types in Winchester?",
        answer: "Yes, we provide professional retail cleaning for all types of retail facilities including department stores, specialty shops, grocery stores, and boutique retail centers."
      },
      {
        question: "How do you ensure quality in Winchester retail cleaning?",
        answer: "Every Winchester retail cleaning is supervised by certified specialists and we guarantee compliance with cleanliness standards and your specific retail facility requirements."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Winchester retail store immaculate and customer-ready. Reliable, professional, and excellent value for our retail operations.",
      author: "Operations Manager, Winchester Shopping Center"
    }
  }
];

const RetailCleaningLasVegasPage = () => {
  const { t } = useTranslation();
  const [openItem, setOpenItem] = useState<string>("");
  const [counters, setCounters] = useState({
    impressions: 0,
    brandImage: 0,
    hoursSaved: 0
  });

  useEffect(() => {
    const hash = window.location.hash.substring(1); // Remove the # symbol
    if (hash && neighborhoods.some(n => n.id === hash)) {
      setOpenItem(hash);
      // Scroll to the accordion section
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, []);

  // Listen for hash changes (when user navigates from dropdown)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (hash && neighborhoods.some(n => n.id === hash)) {
        setOpenItem(hash);
        // Scroll to the accordion section
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

  // Animate counters
  useEffect(() => {
    const animateCounters = () => {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;
      
      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        
        setCounters({
          impressions: Math.floor(95 * progress),
          brandImage: Math.floor(89 * progress),
          hoursSaved: Math.floor(12 * progress)
        });
        
        if (step >= steps) {
          clearInterval(timer);
        }
      }, stepDuration);
    };

    // Start animation after component mounts
    const timer = setTimeout(animateCounters, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Helmet>
        <title>{t(`commercialServices.lasVegas.retail.title`, { defaultValue: "Retail Store Cleaning Las Vegas | Red Rock Cleans" })}</title>
        <meta name="description" content={t(`commercialServices.lasVegas.retail.description`, { defaultValue: "Retail store cleaning in Las Vegas. Pristine spaces enhancing customer experience in Las Vegas & Henderson. Book today!" })} />
      </Helmet>
      <Hreflang />
      
      <div className="min-h-screen flex flex-col">
        <LasVegasNavigation />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative py-24 md:py-32 overflow-hidden">
            <div className="absolute inset-0">
              <img 
                src="/src/assets/hero-commercial.jpg" 
                alt="Professional retail store cleaning service in a Las Vegas shopping center"
                className="w-full h-full object-cover scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                  Pristine Retail Cleaning to Elevate Your Las Vegas Brand
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                  In the competitive Las Vegas retail market, a customer's perception of your brand begins with a spotless environment, crucial for a positive shopping experience. Our professional retail cleaning services ensure your store maintains the highest standards of cleanliness and presentation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="h-14 text-lg px-8" asChild>
                    <a href="tel:+17025080098">
                      <Phone className="w-5 h-5 mr-2" />
                      Call (702) 508-0098
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="h-14 text-lg px-8" asChild>
                    <Link to="/commercial-quote?location=las-vegas">
                      <Home className="w-5 h-5 mr-2" />
                      Get Free Quote
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Creating an Unforgettable Customer Experience */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  Creating an Unforgettable Customer Experience
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Sparkles className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Immaculate First Impressions</h3>
                      <p className="text-muted-foreground text-sm">
                        Crystal-clear entryways and windows attract foot traffic and create an inviting atmosphere that draws customers into your Las Vegas retail store from the moment they approach.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Attract & Engage →
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <ShoppingCart className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">A Healthy Shopping Space</h3>
                      <p className="text-muted-foreground text-sm">
                        Disinfection of high-touch areas like counters, POS systems, and door handles ensures your Las Vegas customers can shop with confidence in a clean, hygienic environment.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Safe & Clean →
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
                        Meticulous dust and debris control keeps your products pristine and presentation-ready, ensuring your Las Vegas retail merchandise always looks its best for customers.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Pristine & Protected →
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
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Store className="w-6 h-6" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Sales Floor & Displays</h3>
                      <p className="text-muted-foreground text-sm">
                        Floor polishing, carpet care, and dusting all fixtures to create an inviting shopping environment that showcases your merchandise beautifully.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <User className="w-6 h-6" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Fitting Rooms & Restrooms</h3>
                      <p className="text-muted-foreground text-sm">
                        Maintaining the highest standards of hygiene in customer areas to ensure a comfortable and clean shopping experience for all visitors.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Monitor className="w-6 h-6" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Windows & Storefront</h3>
                      <p className="text-muted-foreground text-sm">
                        Streak-free glass cleaning for maximum visibility and curb appeal that draws customers into your Las Vegas retail location.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Box className="w-6 h-6" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Back-of-House & Stockrooms</h3>
                      <p className="text-muted-foreground text-sm">
                        Keeping employee areas clean and organized to maintain operational efficiency and create a professional working environment.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* The Impact of a Professionally Cleaned Store */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-12">
                  The Impact of a Professionally Cleaned Store
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-4xl font-bold text-primary mb-2">{counters.impressions}%</div>
                    <h3 className="text-lg font-semibold mb-2">Positive Customer Impressions</h3>
                    <p className="text-muted-foreground text-sm">
                      Las Vegas retail customers consistently rate clean stores higher in satisfaction
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Star className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-4xl font-bold text-primary mb-2">{counters.brandImage}%</div>
                    <h3 className="text-lg font-semibold mb-2">Enhanced Brand Image</h3>
                    <p className="text-muted-foreground text-sm">
                      Clean retail environments significantly improve brand perception and loyalty
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Clock className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-4xl font-bold text-primary mb-2">{counters.hoursSaved}</div>
                    <h3 className="text-lg font-semibold mb-2">Hours Saved for Your Staff</h3>
                    <p className="text-muted-foreground text-sm">
                      Professional cleaning frees up your team to focus on customer service and sales
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Areas We Serve in Las Vegas */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  Areas We Serve in Las Vegas
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
                            Professional retail cleaning services
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
                            <Link to="/commercial-quote?location=las-vegas">
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

          {/* Other Commercial Cleaning Services in Las Vegas */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  Other Commercial Cleaning Services in Las Vegas
                </h2>
                <p className="text-xl text-muted-foreground mb-12">
                  Beyond retail cleaning, we offer specialized commercial cleaning services to meet all your Las Vegas facility needs.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <Link to="/las-vegas/showroom-cleaning/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors mb-4">
                        <Store className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Showroom Cleaning Services
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Specialized cleaning for automotive showrooms, furniture stores, and display environments.
                      </p>
                    </div>
                  </Link>
                  <Link to="/las-vegas/restaurant-cleaning/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors mb-4">
                        <ShoppingBag className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Restaurant Cleaning Services
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Professional cleaning for restaurants, cafes, and food service establishments.
                      </p>
                    </div>
                  </Link>
                  <Link to="/las-vegas/gym-cleaning/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors mb-4">
                        <Shield className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Gym Cleaning Services
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Hygienic cleaning for fitness centers, health clubs, and athletic facilities.
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
                      <h3 className="text-lg font-semibold">What makes your retail cleaning service different?</h3>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <p className="text-muted-foreground">
                        We specialize in retail cleaning with training in store-specific protocols, customer area maintenance, and brand presentation requirements. Our team uses specialized cleaning products and follows strict procedures to protect your merchandise while maintaining the highest cleanliness standards for customer experience.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2" className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <h3 className="text-lg font-semibold">How do you handle scheduling around retail operations?</h3>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <p className="text-muted-foreground">
                        We work closely with your retail staff to schedule cleaning during off-peak hours, early morning, or late evening when customer traffic is lowest. We can also provide emergency cleaning services for customer experience incidents or post-event cleanup. Our flexible approach ensures minimal disruption to your retail operations.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3" className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <h3 className="text-lg font-semibold">What areas of the retail store do you clean?</h3>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <p className="text-muted-foreground">
                        We clean all areas including sales floors, fitting rooms, restrooms, windows, storefronts, back-of-house areas, and high-traffic zones. We use appropriate cleaning products and methods for each area to ensure effectiveness while protecting your merchandise and customer health.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-4" className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <h3 className="text-lg font-semibold">Are your technicians trained for retail environments?</h3>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <p className="text-muted-foreground">
                        Yes, all our technicians are background-checked, bonded, and insured. They receive specialized training in retail cleaning protocols, customer area maintenance, and retail facility cleanliness requirements. We understand the unique challenges of retail environments and maintain strict protocols to protect your customers and merchandise.
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
                  Ready to Elevate Your Retail Store's Cleanliness Standards?
                </h2>
                <p className="text-xl mb-8 opacity-90">
                  Join the Las Vegas retail stores that trust Red Rock Cleans for professional cleaning services that ensure optimal customer experience and brand presentation.
                </p>
                <Button size="lg" variant="secondary" className="h-14 text-lg px-8" asChild>
                  <Link to="/commercial-quote?location=las-vegas">
                    <Calendar className="w-5 h-5 mr-2" />
                    Schedule Your Retail Cleaning Today
                  </Link>
                </Button>
              </div>
            </div>
          </section>
      </main>
        
        <Footer />
      </div>
    </>
  );
};

export default RetailCleaningLasVegasPage;

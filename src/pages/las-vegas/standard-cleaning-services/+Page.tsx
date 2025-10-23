import { LasVegasNavigation } from "@/components/LasVegasNavigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Clock, Shield, Star, Users, Calendar, Home, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Hreflang from "@/components/Hreflang";
import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';

const neighborhoods = [
  {
    id: "anthem",
    name: "Anthem",
    description: "Keep your home in the beautiful Anthem master-planned community consistently fresh and clean with our reliable standard cleaning service.",
    faq: [
      {
        question: "How often do Anthem residents typically schedule cleaning?",
        answer: "Most Anthem homeowners prefer weekly or bi-weekly cleaning to maintain their beautiful homes at the highest standard."
      },
      {
        question: "Do you work with Anthem HOA requirements?",
        answer: "Yes, our team is familiar with Anthem community guidelines and ensures all cleaning practices comply with HOA standards."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our Anthem home for over a year. Their attention to detail is exceptional, and our home always looks pristine.",
      author: "Sarah M., Anthem Resident"
    }
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "Professional standard cleaning services for Enterprise residents who value a consistently clean and organized home environment.",
    faq: [
      {
        question: "What areas of Enterprise do you service?",
        answer: "We provide standard cleaning services throughout Enterprise, including all residential neighborhoods and communities."
      },
      {
        question: "Can you accommodate flexible scheduling in Enterprise?",
        answer: "Absolutely! We offer flexible scheduling options including weekly, bi-weekly, or monthly cleaning services."
      }
    ],
    testimonial: {
      text: "Living in Enterprise, I need reliable cleaning services. Red Rock Cleans has never disappointed - always punctual and thorough.",
      author: "Michael R., Enterprise Resident"
    }
  },
  {
    id: "green-valley-north",
    name: "Green Valley North",
    description: "Keep your Green Valley North home spotless with our comprehensive standard cleaning service designed for busy professionals and families.",
    faq: [
      {
        question: "Do you service condos in Green Valley North?",
        answer: "Yes, we provide standard cleaning services for both single-family homes and condominiums throughout Green Valley North."
      },
      {
        question: "What's included in your Green Valley North standard cleaning?",
        answer: "Our standard cleaning includes dusting, vacuuming, mopping, kitchen and bathroom cleaning, and trash removal."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans keeps our Green Valley North home immaculate. The team is professional and trustworthy - highly recommended!",
      author: "Jennifer L., Green Valley North Resident"
    }
  },
  {
    id: "henderson",
    name: "Henderson",
    description: "Henderson families trust Red Rock Cleans for consistent, high-quality standard cleaning services that keep their homes beautiful year-round.",
    faq: [
      {
        question: "How far in advance should Henderson residents book?",
        answer: "We recommend booking at least one week in advance, though we can often accommodate shorter notice for existing customers."
      },
      {
        question: "Do you provide cleaning supplies for Henderson homes?",
        answer: "Yes, we bring all professional-grade cleaning supplies and equipment to every Henderson cleaning appointment."
      }
    ],
    testimonial: {
      text: "As a busy Henderson mom, Red Rock Cleans has been a lifesaver. Our home is always clean and ready for family time.",
      author: "Amanda T., Henderson Resident"
    }
  },
  {
    id: "lake-las-vegas",
    name: "Lake Las Vegas",
    description: "Lake Las Vegas homeowners enjoy pristine, resort-quality cleaning with our standard service that maintains their luxury lifestyle standards.",
    faq: [
      {
        question: "Do you service luxury homes in Lake Las Vegas?",
        answer: "Absolutely! We specialize in cleaning luxury homes and are experienced with high-end finishes and delicate surfaces."
      },
      {
        question: "Can you work around Lake Las Vegas residents' schedules?",
        answer: "Yes, we offer flexible scheduling including weekend appointments to accommodate busy Lake Las Vegas professionals."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Lake Las Vegas home to the highest standards. Their attention to detail is remarkable.",
      author: "David K., Lake Las Vegas Resident"
    }
  },
  {
    id: "las-vegas",
    name: "Las Vegas",
    description: "Las Vegas residents rely on our standard cleaning service for consistent, professional home maintenance that fits their busy lifestyle.",
    faq: [
      {
        question: "What makes Red Rock Cleans different in Las Vegas?",
        answer: "We're locally owned, fully insured, and our team undergoes thorough background checks and training."
      },
      {
        question: "Do you offer same-day cleaning in Las Vegas?",
        answer: "We can often accommodate same-day service for existing customers, subject to availability."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been cleaning our Las Vegas home for two years. Reliable, professional, and always thorough.",
      author: "Lisa W., Las Vegas Resident"
    }
  },
  {
    id: "macdonald-ranch",
    name: "MacDonald Ranch",
    description: "MacDonald Ranch families enjoy consistent, high-quality standard cleaning services that keep their homes spotless and comfortable.",
    faq: [
      {
        question: "How long does a standard cleaning take in MacDonald Ranch?",
        answer: "Most MacDonald Ranch homes take 2-4 hours depending on size and specific cleaning requirements."
      },
      {
        question: "Do you work with pets in MacDonald Ranch homes?",
        answer: "Yes, we're experienced with pet-friendly cleaning and use safe products around your furry family members."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our MacDonald Ranch home beautifully. Professional service every time.",
      author: "Robert H., MacDonald Ranch Resident"
    }
  },
  {
    id: "mountains-edge",
    name: "Mountain's Edge",
    description: "Mountain's Edge residents trust our standard cleaning service for consistent home maintenance that complements their active lifestyle.",
    faq: [
      {
        question: "What cleaning products do you use in Mountain's Edge?",
        answer: "We use eco-friendly, professional-grade cleaning products that are safe for families and pets."
      },
      {
        question: "Can you customize cleaning for Mountain's Edge homes?",
        answer: "Yes, we can customize our standard cleaning service to focus on specific areas or tasks as needed."
      }
    ],
    testimonial: {
      text: "Living in Mountain's Edge, I appreciate Red Rock Cleans' reliability and attention to detail. Excellent service!",
      author: "Maria S., Mountain's Edge Resident"
    }
  },
  {
    id: "north-las-vegas",
    name: "North Las Vegas",
    description: "North Las Vegas families depend on our standard cleaning service for consistent, professional home maintenance that fits their budget and schedule.",
    faq: [
      {
        question: "Do you offer affordable rates for North Las Vegas?",
        answer: "Yes, we provide competitive rates for North Las Vegas residents while maintaining high-quality service standards."
      },
      {
        question: "How do you ensure quality in North Las Vegas?",
        answer: "Every North Las Vegas cleaning is supervised and we guarantee satisfaction with our quality assurance process."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our North Las Vegas home clean and organized. Great value and excellent service.",
      author: "Carlos M., North Las Vegas Resident"
    }
  },
  {
    id: "paradise",
    name: "Paradise",
    description: "Paradise residents enjoy reliable standard cleaning services that maintain their homes to the highest standards of cleanliness and comfort.",
    faq: [
      {
        question: "Do you service apartments in Paradise?",
        answer: "Yes, we provide standard cleaning services for both apartments and houses throughout Paradise."
      },
      {
        question: "What's your cancellation policy for Paradise?",
        answer: "We require 24-hour notice for cancellations, but we're flexible for emergencies and rescheduling."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our Paradise home beautifully. Professional, reliable, and thorough every time.",
      author: "Nancy P., Paradise Resident"
    }
  },
  {
    id: "seven-hills",
    name: "Seven Hills",
    description: "Seven Hills homeowners trust our standard cleaning service for consistent, professional home maintenance that preserves their property value.",
    faq: [
      {
        question: "Do you service luxury homes in Seven Hills?",
        answer: "Yes, we have extensive experience cleaning luxury homes and use appropriate products for high-end finishes."
      },
      {
        question: "How do you ensure security in Seven Hills?",
        answer: "All our team members are background-checked, bonded, and insured for your peace of mind."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Seven Hills home to perfection. Their professionalism and attention to detail are outstanding.",
      author: "Thomas R., Seven Hills Resident"
    }
  },
  {
    id: "silverado-ranch",
    name: "Silverado Ranch",
    description: "Silverado Ranch families rely on our standard cleaning service for consistent home maintenance that keeps their busy lives organized and stress-free.",
    faq: [
      {
        question: "Do you work around Silverado Ranch school schedules?",
        answer: "Yes, we can schedule cleanings around school hours and family schedules for your convenience."
      },
      {
        question: "What if I'm not satisfied with cleaning in Silverado Ranch?",
        answer: "We guarantee satisfaction and will return to address any concerns at no additional charge."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Silverado Ranch home spotless for over a year. Highly recommend their service!",
      author: "Patricia D., Silverado Ranch Resident"
    }
  },
  {
    id: "spring-valley",
    name: "Spring Valley",
    description: "Spring Valley residents enjoy consistent, professional standard cleaning services that maintain their homes clean and comfortable year-round.",
    faq: [
      {
        question: "How often do Spring Valley residents schedule cleaning?",
        answer: "Most Spring Valley customers prefer weekly or bi-weekly cleaning, though we offer flexible scheduling options."
      },
      {
        question: "Do you provide deep cleaning in Spring Valley?",
        answer: "Yes, we offer both standard and deep cleaning services throughout Spring Valley."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our Spring Valley home beautifully. Professional, reliable, and always thorough.",
      author: "Susan B., Spring Valley Resident"
    }
  },
  {
    id: "summerlin-south",
    name: "Summerlin South",
    description: "Summerlin South homeowners trust our standard cleaning service for consistent, high-quality home maintenance that complements their luxury lifestyle.",
    faq: [
      {
        question: "Do you service luxury homes in Summerlin South?",
        answer: "Yes, we specialize in cleaning luxury homes and are experienced with high-end finishes and delicate surfaces."
      },
      {
        question: "Can you accommodate Summerlin South HOA requirements?",
        answer: "Absolutely! We're familiar with Summerlin South HOA guidelines and ensure compliance with all requirements."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Summerlin South home to the highest standards. Exceptional service and attention to detail.",
      author: "James L., Summerlin South Resident"
    }
  },
  {
    id: "sunrise-manor",
    name: "Sunrise Manor",
    description: "Sunrise Manor families depend on our standard cleaning service for consistent, affordable home maintenance that keeps their homes spotless and comfortable.",
    faq: [
      {
        question: "Do you offer competitive rates for Sunrise Manor?",
        answer: "Yes, we provide affordable, competitive rates for Sunrise Manor residents while maintaining high service quality."
      },
      {
        question: "How reliable is your service in Sunrise Manor?",
        answer: "We're committed to reliability and have a strong track record of consistent service in Sunrise Manor."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Sunrise Manor home clean and organized. Great value and reliable service.",
      author: "Angela C., Sunrise Manor Resident"
    }
  },
  {
    id: "whitney",
    name: "Whitney",
    description: "Whitney residents enjoy professional standard cleaning services that maintain their homes clean, comfortable, and ready for family life.",
    faq: [
      {
        question: "Do you work with families in Whitney?",
        answer: "Yes, we're family-friendly and use safe, eco-friendly products that are safe for children and pets."
      },
      {
        question: "Can you schedule around Whitney work hours?",
        answer: "Absolutely! We offer flexible scheduling including early morning, evening, and weekend appointments."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our Whitney home beautifully. Professional, trustworthy, and always thorough.",
      author: "Kevin F., Whitney Resident"
    }
  },
  {
    id: "winchester",
    name: "Winchester",
    description: "Winchester residents trust our standard cleaning service for consistent, professional home maintenance that keeps their homes spotless year-round.",
    faq: [
      {
        question: "Do you service diverse home types in Winchester?",
        answer: "Yes, we provide standard cleaning for all types of homes including houses, condos, and townhomes in Winchester."
      },
      {
        question: "How do you ensure quality in Winchester?",
        answer: "Every Winchester cleaning is supervised and we guarantee satisfaction with our comprehensive quality assurance process."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Winchester home immaculate. Reliable, professional, and excellent value.",
      author: "Rachel G., Winchester Resident"
    }
  }
];

const StandardCleaningLasVegasPage = () => {
  const [openItem, setOpenItem] = useState<string>("");
  const { t } = useTranslation();

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

  return (
    <>
      <Helmet>
        <title>Standard Cleaning Service Las Vegas | Red Rock Cleans</title>
        <meta name="description" content="Professional standard cleaning in Las Vegas. Reliable maintenance for homes in Las Vegas & Henderson. Schedule your service now!" />
      </Helmet>
      <Hreflang />
      
      <div className="min-h-screen flex flex-col">
        <LasVegasNavigation />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative py-24 md:py-32 overflow-hidden">
            <div className="absolute inset-0">
              <img 
                src="/src/assets/hero-residential.jpg" 
                alt="Professional standard cleaning service in a modern Las Vegas home with Strip views"
                className="w-full h-full object-cover scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">{t('lv.standard.h1')}</h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                  Maintain a consistently clean home and free up time for the things that matter most. Our professional standard cleaning service keeps Las Vegas homes spotless with flexible scheduling that fits your busy lifestyle.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="h-14 text-lg px-8" asChild>
                    <Link to="/book-now-las-vegas">
                      <Calendar className="w-5 h-5 mr-2" />
                      {t('lv.standard.schedule')}
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="h-14 text-lg px-8" asChild>
                    <Link to="/las-vegas-calculator">
                      <Home className="w-5 h-5 mr-2" />
                      {t('lv.standard.quote')}
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Our Standard Cleaning Checklist */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t('lv.standard.checklistTitle')}</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <CheckCircle className="w-6 h-6 text-primary mr-3" />
                      Living Areas & Bedrooms
                    </h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Dust all surfaces, furniture, and decorative items
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Vacuum carpets and rugs thoroughly
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Mop hard floors with appropriate cleaner
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Clean mirrors and glass surfaces
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Empty trash and replace liners
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <CheckCircle className="w-6 h-6 text-primary mr-3" />
                      Kitchen & Bathrooms
                    </h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Clean and sanitize all countertops and sinks
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Wipe down appliances and cabinet fronts
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Scrub and sanitize toilets, showers, and tubs
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Clean mirrors and chrome fixtures
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Restock paper products and towels
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Why Las Vegas Residents Trust Red Rock Cleans */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t('lv.standard.whyTitle')}</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center p-6 bg-background rounded-lg shadow-sm">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Professional & Vetted Team</h3>
                    <p className="text-muted-foreground">
                      All our cleaners undergo thorough background checks, are fully insured, and receive ongoing training to ensure the highest standards.
                    </p>
                  </div>
                  <div className="text-center p-6 bg-background rounded-lg shadow-sm">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Clock className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Flexible Scheduling</h3>
                    <p className="text-muted-foreground">
                      Choose from weekly, bi-weekly, or monthly cleaning schedules that work with your busy Las Vegas lifestyle and commitments.
                    </p>
                  </div>
                  <div className="text-center p-6 bg-background rounded-lg shadow-sm">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Star className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Consistent Quality</h3>
                    <p className="text-muted-foreground">
                      Our systematic approach ensures every cleaning meets the same high standards, giving you peace of mind and a consistently spotless home.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Areas We Serve */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t('lv.standard.areasTitle')}</h2>
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
                            Professional standard cleaning services
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
                            <Link to="/book-now-las-vegas">
                              Schedule Your {neighborhood.name} Cleaning
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

          {/* Other Cleaning Services */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  Other Cleaning Services for Your Property in Las Vegas
                </h2>
                <p className="text-xl text-muted-foreground mb-12">
                  Beyond standard cleaning, we offer specialized services to meet all your Las Vegas property needs.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Link to="/las-vegas/deep-cleaning-services/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Deep Cleaning Services
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Comprehensive cleaning for move-ins, special occasions, or seasonal deep cleans.
                      </p>
                    </div>
                  </Link>
                  <Link to="/las-vegas/airbnb-cleaning-services/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Airbnb Cleaning Services
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Professional turnover cleaning for vacation rental properties.
                      </p>
                    </div>
                  </Link>
                  <Link to="/las-vegas/move-out-cleaning-services/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Move Out Cleaning Services
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Complete cleaning to secure your security deposit return.
                      </p>
                    </div>
                  </Link>
                  <Link to="/las-vegas/post-construction-cleaning-services/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Post Construction Cleaning Services
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Specialized cleaning after construction or renovation projects.
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t('lv.standard.faqTitle')}</h2>
                <div className="space-y-6">
                  <div className="border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3">How often should I schedule standard cleaning service?</h3>
                    <p className="text-muted-foreground">
                      Most Las Vegas residents find that weekly or bi-weekly cleaning works best to maintain a consistently clean home. We offer flexible scheduling to match your lifestyle and budget.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3">Do I need to provide cleaning supplies?</h3>
                    <p className="text-muted-foreground">
                      No, we bring all professional-grade cleaning supplies and equipment to every appointment. Our team is fully equipped with everything needed for a thorough standard cleaning.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3">What if I'm not satisfied with the cleaning?</h3>
                    <p className="text-muted-foreground">
                      We guarantee your satisfaction. If you're not completely happy with any aspect of our service, we'll return within 24 hours to make it right at no additional charge.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3">Are your cleaners insured and background-checked?</h3>
                    <p className="text-muted-foreground">
                      Yes, all our team members undergo thorough background checks, are fully insured and bonded, and receive ongoing training to ensure the highest standards of service and security.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-20 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 text-center">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  {t('lv.standard.finalCtaTitle')}
                </h2>
                <p className="text-xl mb-8 opacity-90">
                  Join thousands of satisfied Las Vegas residents who trust Red Rock Cleans for reliable, professional standard cleaning services.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" className="h-14 text-lg px-8" asChild>
                    <Link to="/book-now-las-vegas">
                      <Calendar className="w-5 h-5 mr-2" />
                      {t('lv.standard.schedule')}
                    </Link>
                  </Button>
                  <Button size="lg" variant="cta" className="h-14 text-lg px-8" asChild>
                    <Link to="/las-vegas-calculator">
                      <Home className="w-5 h-5 mr-2" />
                      {t('lv.standard.quote')}
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default StandardCleaningLasVegasPage;

import { ColumbusNavigation } from "@/components/ColumbusNavigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Clock, Shield, Star, Users, Calendar, Home, Sparkles, DollarSign, Key, RefreshCw, Heart, Clock4, Zap, HardHat, Hammer, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Hreflang from "@/components/Hreflang";
import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import { StandardCleaningChecklistSection } from "@/components/StandardCleaningChecklistSection";

const neighborhoods = [
  {
    id: "dublin",
    name: "Dublin",
    description: "Dublin homeowners trust our reliable standard cleaning service to maintain their luxury properties consistently clean and beautiful. We understand the high standards expected in this prestigious neighborhood and provide regular maintenance that keeps homes spotless week after week.",
    faq: [
      {
        question: "How flexible is scheduling for Dublin standard cleaning?",
        answer: "We offer flexible scheduling including weekly, bi-weekly, or monthly service to fit your lifestyle. We can work around your schedule and accommodate changes as needed."
      },
      {
        question: "Do you work with luxury properties for standard cleaning in Dublin?",
        answer: "Yes, we specialize in luxury property maintenance and are experienced with high-end finishes, premium materials, and the standards expected by homeowners in Dublin."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our Dublin home beautifully with their standard cleaning service. Reliable, professional, and our home always looks perfect!",
      author: "Sarah M., Dublin Homeowner"
    }
  },
  {
    id: "upper-arlington",
    name: "Upper Arlington",
    description: "Upper Arlington homeowners rely on our professional standard cleaning service to keep their luxury properties consistently clean and beautiful. We provide reliable recurring service that ensures your home stays pristine in this exclusive neighborhood where cleanliness is paramount.",
    faq: [
      {
        question: "Do you handle both luxury and standard homes for regular cleaning in Upper Arlington?",
        answer: "Yes, we provide standard cleaning services for both luxury properties and standard homes in Upper Arlington, adapting our service level to match your property's specific needs."
      },
      {
        question: "Can you coordinate with Upper Arlington homeowner schedules?",
        answer: "Absolutely! We work closely with Upper Arlington homeowners to schedule standard cleaning services around their lifestyle and availability."
      }
    ],
    testimonial: {
      text: "The standard cleaning service for our Upper Arlington home has been wonderful. Consistent, professional, and they really understand the challenges of luxury home maintenance!",
      author: "Michael R., Upper Arlington Property Owner"
    }
  },
  {
    id: "powell",
    name: "Powell",
    description: "Powell homeowners depend on our professional standard cleaning service to maintain their properties consistently clean and comfortable. We provide reliable recurring service that fits perfectly with the active Powell lifestyle where time is precious.",
    faq: [
      {
        question: "Do you service both apartments and houses for standard cleaning in Powell?",
        answer: "Yes, we specialize in standard cleaning for both apartments and houses in Powell, adapting our service to your specific property type and suburban living needs."
      },
      {
        question: "How do you handle quick turnovers in Powell?",
        answer: "Every Powell standard cleaning is optimized for efficiency, using streamlined processes and experienced teams to maintain cleanliness despite busy family schedules."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provides excellent standard cleaning for our Powell home. Consistent, reliable, and our home always feels fresh and clean!",
      author: "Jennifer L., Powell Homeowner"
    }
  },
  {
    id: "lewis-center",
    name: "Lewis Center",
    description: "Lewis Center homeowners trust our reliable standard cleaning service to maintain their properties consistently clean and comfortable. We understand the importance of meeting busy schedules and maintaining high standards in this growing community.",
    faq: [
      {
        question: "What makes Lewis Center standard cleaning different?",
        answer: "Lewis Center standard cleaning addresses the unique requirements of suburban properties, including family schedules, professional commitments, and the challenges of modern suburban living."
      },
      {
        question: "Do you offer flexible scheduling for Lewis Center?",
        answer: "Yes, we can accommodate various scheduling needs for Lewis Center properties, from weekly to monthly service, adapting to your busy family lifestyle."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been our go-to standard cleaning service for Lewis Center properties. Reliable, professional, and they understand family lifestyle challenges!",
      author: "Lisa W., Lewis Center Property Owner"
    }
  },
  {
    id: "worthington",
    name: "Worthington",
    description: "Worthington homeowners enjoy our comprehensive standard cleaning service that maintains their properties consistently clean and beautiful. Perfect for the upscale Worthington lifestyle where homes require regular maintenance to stay spotless.",
    faq: [
      {
        question: "Do you work with luxury properties for standard cleaning in Worthington?",
        answer: "Yes, we're experienced with luxury property maintenance and can provide standard cleaning services that meet the high standards expected by homeowners in Worthington properties."
      },
      {
        question: "Can you customize standard cleaning for Worthington properties?",
        answer: "Absolutely! We can adapt our cleaning checklist based on your Worthington property's unique features and specific maintenance requirements."
      }
    ],
    testimonial: {
      text: "The standard cleaning service for our Worthington home has been fantastic. Consistent, reliable, and our property always looks beautiful!",
      author: "Amanda T., Worthington Homeowner"
    }
  },
  {
    id: "new-albany",
    name: "New Albany",
    description: "New Albany homeowners trust our professional standard cleaning service to maintain their properties consistently clean and comfortable. We provide reliable service that meets the demands of this family-friendly area where regular maintenance is essential for busy families.",
    faq: [
      {
        question: "How do you handle large-scale standard cleaning in New Albany?",
        answer: "We're experienced with large-scale properties and can deploy multiple teams to handle extensive standard cleaning efficiently while maintaining quality standards."
      },
      {
        question: "What if I need to reschedule my New Albany standard cleaning?",
        answer: "We're flexible with rescheduling and work closely with New Albany homeowners to accommodate schedule changes while maintaining consistent service quality."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provides excellent standard cleaning for our New Albany home. They really understood our family's needs and our home always feels welcoming!",
      author: "David K., New Albany Homeowner"
    }
  },
  {
    id: "bexley",
    name: "Bexley",
    description: "Bexley homeowners depend on our reliable standard cleaning service to maintain their properties consistently clean and comfortable. We provide consistent, professional cleaning that ensures complete satisfaction and a perpetually tidy home in this historic neighborhood.",
    faq: [
      {
        question: "Do you service both historic and modern homes for standard cleaning in Bexley?",
        answer: "Yes, we provide comprehensive standard cleaning services for all types of properties including historic homes, modern residences, and mixed architectural styles."
      },
      {
        question: "How do you ensure consistency in Bexley standard cleaning?",
        answer: "Every Bexley standard cleaning follows our detailed checklist and includes a comprehensive quality assurance process to guarantee consistent, satisfactory results."
      }
    ],
    testimonial: {
      text: "The standard cleaning service for our Bexley home has been exceptional. Consistent, professional, and our family always enjoys coming home to a clean house!",
      author: "Robert H., Bexley Homeowner"
    }
  },
  {
    id: "german-village",
    name: "German Village",
    description: "German Village homeowners rely on our professional standard cleaning service to maintain their properties consistently clean and comfortable. We provide reliable service that helps families maintain healthy living environments in this historic and charming community.",
    faq: [
      {
        question: "Do you work around German Village family schedules?",
        answer: "Yes, we can schedule standard cleaning around family schedules and lifestyle commitments while maintaining professional service standards."
      },
      {
        question: "What's your cancellation policy for German Village standard cleaning?",
        answer: "We require 24-hour notice for cancellations, but we're flexible for family emergencies and always work to find alternative solutions that meet your timeline."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been amazing for our German Village family home. Their standard cleaning service helps us maintain a clean, healthy environment for our kids!",
      author: "Maria S., German Village Homeowner"
    }
  },
  {
    id: "short-north",
    name: "Short North",
    description: "Short North homeowners trust our professional standard cleaning service to maintain their urban properties consistently clean and comfortable. We understand the importance of meeting busy schedules and maintaining high standards in this vibrant arts district.",
    faq: [
      {
        question: "Do you service both apartments and condos for standard cleaning in Short North?",
        answer: "Yes, we specialize in standard cleaning for both apartments and condos in Short North, adapting our service to your specific property type and urban living needs."
      },
      {
        question: "How do you handle quick turnovers in Short North?",
        answer: "Every Short North standard cleaning is optimized for efficiency, using streamlined processes and experienced teams to maintain cleanliness despite busy urban schedules."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provides excellent standard cleaning for our Short North condo. Consistent, reliable, and our home always feels fresh and clean!",
      author: "Jennifer L., Short North Homeowner"
    }
  },
  {
    id: "victorian-village",
    name: "Victorian Village",
    description: "Victorian Village homeowners enjoy our comprehensive standard cleaning service that maintains their historic properties consistently clean and beautiful. Perfect for the charming Victorian Village lifestyle where homes require regular maintenance to stay spotless.",
    faq: [
      {
        question: "Do you work with historic properties for standard cleaning in Victorian Village?",
        answer: "Yes, we're experienced with historic property maintenance and can provide standard cleaning services that respect the unique features of Victorian Village homes."
      },
      {
        question: "Can you customize standard cleaning for Victorian Village properties?",
        answer: "Absolutely! We can adapt our cleaning checklist based on your Victorian Village property's unique architectural features and specific maintenance requirements."
      }
    ],
    testimonial: {
      text: "The standard cleaning service for our Victorian Village home has been wonderful. They really understand historic homes and our property always looks beautiful!",
      author: "Amanda T., Victorian Village Homeowner"
    }
  },
  {
    id: "hillard",
    name: "Hilliard",
    description: "Hilliard homeowners trust our professional standard cleaning service to maintain their properties consistently clean and comfortable. We provide reliable service that meets the demands of this family-friendly area where regular maintenance is essential for busy families.",
    faq: [
      {
        question: "How do you handle large-scale standard cleaning in Hilliard?",
        answer: "We're experienced with large-scale properties and can deploy multiple teams to handle extensive standard cleaning efficiently while maintaining quality standards."
      },
      {
        question: "What if I need to reschedule my Hilliard standard cleaning?",
        answer: "We're flexible with rescheduling and work closely with Hilliard homeowners to accommodate schedule changes while maintaining consistent service quality."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provides excellent standard cleaning for our Hilliard home. They really understood our family's needs and our home always feels welcoming!",
      author: "David K., Hilliard Homeowner"
    }
  },
  {
    id: "westerville",
    name: "Westerville",
    description: "Westerville homeowners depend on our reliable standard cleaning service to maintain their properties consistently clean and comfortable. We provide consistent, professional cleaning that ensures complete satisfaction and a perpetually tidy home in this thriving community.",
    faq: [
      {
        question: "Do you service both residential and commercial standard cleaning in Westerville?",
        answer: "Yes, we provide comprehensive standard cleaning services for all types of properties including residential homes, commercial spaces, and mixed-use developments."
      },
      {
        question: "How do you ensure consistency in Westerville standard cleaning?",
        answer: "Every Westerville standard cleaning follows our detailed checklist and includes a comprehensive quality assurance process to guarantee consistent, satisfactory results."
      }
    ],
    testimonial: {
      text: "The standard cleaning service for our Westerville home has been exceptional. Consistent, professional, and our family always enjoys coming home to a clean house!",
      author: "Robert H., Westerville Homeowner"
    }
  }
];

const StandardCleaningColumbusOhioPage = () => {
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
        <title>Standard Cleaning Service in Columbus Ohio | Red Rock Cleans</title>
        <meta name="description" content="Columbus Ohio standard cleaning. Regular maintenance for your home. Professional residential cleaning services. Book today!" />
      </Helmet>
      <Hreflang />
      
      <div className="min-h-screen flex flex-col">
        <ColumbusNavigation loginUrl="https://customer-portal.maidily.com/red-rock-cleans-columbus-ohio/sign-in" bookingUrl="/book-now-columbus-ohio" />
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative py-24 md:py-32 overflow-hidden">
            <div className="absolute inset-0">
              <img 
                src="/src/assets/hero-residential.jpg" 
                alt="Professional standard cleaning service in a beautiful Columbus Ohio home with modern city skyline views"
                className="w-full h-full object-cover scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">{t('columbus.standard.h1')}</h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                  Give yourself the gift of time with our dependable recurring cleaning service. Our professional standard cleaning gives busy Columbus professionals and families more time to enjoy their community, free from the burden of household chores and maintenance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="h-14 text-lg px-8" asChild>
                    <Link to="/book-now-columbus-ohio">
                      <Calendar className="w-5 h-5 mr-2" />
                      {t('columbus.standard.schedule')}
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="h-14 text-lg px-8" asChild>
                    <Link to="/columbus-calculator">
                      <Home className="w-5 h-5 mr-2" />
                      {t('columbus.standard.quote')}
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <StandardCleaningChecklistSection
            intro={t('checklists.standardCleaning.introWithLocation', { location: 'Columbus' })}
          />

          {/* Enjoy a Consistently Clean Home */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t('columbus.standard.benefitsTitle')}</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center p-6 bg-background rounded-lg shadow-sm">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Professional and Vetted Cleaners</h3>
                    <p className="text-muted-foreground">
                      Our team consists of professional, background-checked cleaners who are trained to deliver consistent, high-quality results every time they visit your Columbus home.
                    </p>
                  </div>
                  <div className="text-center p-6 bg-background rounded-lg shadow-sm">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Clock className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Flexible Scheduling</h3>
                    <p className="text-muted-foreground">
                      Choose from weekly, bi-weekly, or monthly service to fit your lifestyle. We work around your schedule and can accommodate changes as needed for your convenience.
                    </p>
                  </div>
                  <div className="text-center p-6 bg-background rounded-lg shadow-sm">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Peace of Mind</h3>
                    <p className="text-muted-foreground">
                      Enjoy the peace of mind that comes with a perpetually tidy home. Spend more time enjoying Columbus attractions and activities instead of worrying about cleaning.
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
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t('columbus.standard.areasTitle')}</h2>
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
                            <Link to="/book-now-columbus-ohio">
                              Schedule Your {neighborhood.name} Standard Cleaning
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
                <h2 className="text-3xl md:text-4xl font-bold mb-8">{t('columbus.standard.otherServicesTitle')}</h2>
                <p className="text-xl text-muted-foreground mb-12">
                  Beyond standard cleaning, we offer specialized services to meet all your Columbus property needs.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Link to="/columbus-ohio/deep-cleaning-services/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Deep Cleaning Services
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Comprehensive deep cleaning for those hard-to-reach areas and intensive cleaning needs.
                      </p>
                    </div>
                  </Link>
                  <Link to="/columbus-ohio/move-out-cleaning-services/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Move Out Cleaning Services
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Thorough end-of-tenancy cleaning to secure your security deposit.
                      </p>
                    </div>
                  </Link>
                  <Link to="/columbus-ohio/airbnb-cleaning-services/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Airbnb Cleaning Services
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Professional turnover cleaning for vacation rental properties.
                      </p>
                    </div>
                  </Link>
                  <Link to="/columbus-ohio/post-construction-cleaning-services/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Post Construction Cleaning Services
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Professional construction cleanup for new builds and renovations.
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
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t('columbus.standard.faqTitle')}</h2>
                <div className="space-y-6">
                  <div className="border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3">Do I need to be home for my recurring cleaning service?</h3>
                    <p className="text-muted-foreground">
                      No, you don't need to be home during your standard cleaning service. We can work with your schedule and can arrange key access or entry instructions that work best for your lifestyle and security needs.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3">What is the price for weekly house cleaning in the Dublin area?</h3>
                    <p className="text-muted-foreground">
                      Standard cleaning costs in Dublin vary by property size, frequency, and specific requirements. Contact us for a detailed, customized quote based on your home's needs and preferred cleaning schedule.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3">Do you use eco-friendly cleaning supplies?</h3>
                    <p className="text-muted-foreground">
                      Yes, we use eco-friendly and family-safe cleaning supplies that are effective yet gentle on your family and the environment, perfect for maintaining a healthy home in Columbus.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3">How often should I schedule standard cleaning?</h3>
                    <p className="text-muted-foreground">
                      Most Columbus homeowners choose weekly or bi-weekly standard cleaning to maintain consistent cleanliness. We can recommend the best frequency based on your lifestyle, home size, and specific needs.
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('columbus.standard.finalCtaTitle')}</h2>
                <p className="text-xl mb-8 opacity-90">
                  Join hundreds of satisfied Columbus homeowners who trust Red Rock Cleans for reliable standard cleaning that gives them more time to enjoy their lives.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" className="h-14 text-lg px-8" asChild>
                    <Link to="/book-now-columbus-ohio">
                      <Calendar className="w-5 h-5 mr-2" />
                      Schedule Your Standard Cleaning Today
                    </Link>
                  </Button>
                  <Button size="lg" variant="cta" className="h-14 text-lg px-8" asChild>
                    <Link to="/columbus-calculator">
                      <Home className="w-5 h-5 mr-2" />
                      Get Your Free Quote
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

export default StandardCleaningColumbusOhioPage;

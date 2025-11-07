import { MauiNavigation } from "@/components/MauiNavigation";
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
    id: "wailea",
    name: "Wailea",
    description: "Wailea homeowners trust our reliable standard cleaning service to maintain their luxury properties consistently. We understand the high standards expected in this prestigious resort area and provide regular maintenance that keeps homes spotless week after week.",
    faq: [
      {
        question: "How flexible is scheduling for Wailea standard cleaning?",
        answer: "We offer flexible scheduling including weekly, bi-weekly, or monthly service to fit your lifestyle. We can work around your schedule and accommodate changes as needed."
      },
      {
        question: "Do you work with Wailea property management companies?",
        answer: "Yes, we work directly with property management companies, individual homeowners, and luxury property owners in Wailea to provide consistent standard cleaning services."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our Wailea home beautifully with their standard cleaning service. Reliable, professional, and our home always looks perfect!",
      author: "Sarah M., Wailea Homeowner"
    }
  },
  {
    id: "makena",
    name: "Makena",
    description: "Makena homeowners rely on our professional standard cleaning service to keep their properties consistently clean and beautiful. We provide reliable recurring service that ensures your home stays pristine in this beautiful coastal area.",
    faq: [
      {
        question: "Do you handle both luxury and standard homes for regular cleaning in Makena?",
        answer: "Yes, we provide standard cleaning services for both luxury properties and standard homes in Makena, adapting our service level to match your property's specific needs."
      },
      {
        question: "Can you coordinate with Makena homeowner schedules?",
        answer: "Absolutely! We work closely with Makena homeowners to schedule standard cleaning services around their lifestyle and availability."
      }
    ],
    testimonial: {
      text: "The standard cleaning service for our Makena home has been wonderful. Consistent, professional, and they really understand the challenges of oceanfront living!",
      author: "Michael R., Makena Property Owner"
    }
  },
  {
    id: "kihei",
    name: "Kihei",
    description: "Kihei homeowners depend on our professional standard cleaning service to maintain their homes consistently clean and comfortable. We provide reliable recurring service that fits perfectly with the active Kihei lifestyle.",
    faq: [
      {
        question: "Do you service both residential and vacation rental standard cleaning in Kihei?",
        answer: "Yes, we specialize in standard cleaning for both residential homes and vacation rental properties in Kihei, adapting our service to your specific property type."
      },
      {
        question: "How do you handle regular maintenance in Kihei properties?",
        answer: "Every Kihei standard cleaning includes consistent attention to common areas, regular dusting, and maintaining cleanliness despite the challenges of island living."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provides excellent standard cleaning for our Kihei home. Consistent, reliable, and our home always feels fresh and clean!",
      author: "Jennifer L., Kihei Homeowner"
    }
  },
  {
    id: "kapalua",
    name: "Kapalua",
    description: "Kapalua homeowners trust our reliable standard cleaning service to maintain their luxury properties consistently. We understand the importance of meeting high-end property standards in this exclusive resort community with regular, dependable service.",
    faq: [
      {
        question: "What makes Kapalua standard cleaning different?",
        answer: "Kapalua standard cleaning addresses the unique requirements of luxury resort properties, including high-end finishes, premium materials, and the challenges of oceanfront living."
      },
      {
        question: "Do you offer flexible scheduling for standard cleaning in Kapalua?",
        answer: "Yes, we can accommodate various scheduling needs for Kapalua properties, from weekly to monthly service, adapting to your lifestyle and preferences."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been our go-to standard cleaning service for Kapalua properties. Reliable, professional, and they understand luxury home maintenance!",
      author: "Lisa W., Kapalua Property Owner"
    }
  },
  {
    id: "kaanapali",
    name: "Ka'anapali",
    description: "Ka'anapali homeowners enjoy our comprehensive standard cleaning service that maintains their properties consistently clean and beautiful. Perfect for the active Ka'anapali lifestyle where homes need regular maintenance to stay spotless.",
    faq: [
      {
        question: "Do you work with vacation rental owners for regular cleaning in Ka'anapali?",
        answer: "Yes, we're experienced with vacation rental properties and can provide standard cleaning services that maintain properties between guests while protecting high-end finishes."
      },
      {
        question: "Can you customize standard cleaning for Ka'anapali properties?",
        answer: "Absolutely! We can adapt our cleaning checklist based on your Ka'anapali property's unique features and specific maintenance requirements."
      }
    ],
    testimonial: {
      text: "The standard cleaning service for our Ka'anapali home has been fantastic. Consistent, reliable, and our property always looks beautiful!",
      author: "Amanda T., Ka'anapali Homeowner"
    }
  },
  {
    id: "lahaina",
    name: "Lahaina",
    description: "Lahaina homeowners trust our professional standard cleaning service to maintain their properties consistently clean and comfortable. We provide reliable recurring service that meets the demands of this historic town's unique architectural features.",
    faq: [
      {
        question: "How do you handle regular cleaning in historic Lahaina homes?",
        answer: "We're experienced with historic properties and can adapt our standard cleaning to respect the unique features and materials found in Lahaina's historic homes."
      },
      {
        question: "What if I need to reschedule my Lahaina standard cleaning?",
        answer: "We're flexible with rescheduling and work closely with Lahaina homeowners to accommodate schedule changes while maintaining consistent service quality."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provides excellent standard cleaning for our Lahaina historic home. Consistent, professional, and they really understand the unique needs of older properties!",
      author: "David K., Lahaina Homeowner"
    }
  },
  {
    id: "spreckelsville",
    name: "Spreckelsville",
    description: "Spreckelsville homeowners depend on our reliable standard cleaning service to maintain their properties consistently clean and comfortable. We provide consistent, professional cleaning that ensures complete satisfaction and a perpetually tidy home.",
    faq: [
      {
        question: "Do you service both residential and vacation rental standard cleaning in Spreckelsville?",
        answer: "Yes, we provide comprehensive standard cleaning services for all types of properties including residential homes, vacation rentals, and beachfront properties."
      },
      {
        question: "How do you ensure consistency in Spreckelsville standard cleaning?",
        answer: "Every Spreckelsville standard cleaning follows our detailed checklist and includes a comprehensive quality assurance process to guarantee consistent, satisfactory results."
      }
    ],
    testimonial: {
      text: "The standard cleaning service for our Spreckelsville home has been exceptional. Consistent, professional, and our family always enjoys coming home to a clean house!",
      author: "Robert H., Spreckelsville Homeowner"
    }
  },
  {
    id: "paia",
    name: "Pa'ia",
    description: "Pa'ia homeowners rely on our professional standard cleaning service to maintain their properties consistently clean and comfortable. We provide reliable recurring service that helps families maintain healthy living environments in this vibrant coastal community.",
    faq: [
      {
        question: "Do you work around Pa'ia family schedules?",
        answer: "Yes, we can schedule standard cleaning around family schedules and lifestyle commitments while maintaining professional service standards."
      },
      {
        question: "What's your cancellation policy for Pa'ia standard cleaning?",
        answer: "We require 24-hour notice for cancellations, but we're flexible for family emergencies and always work to find alternative solutions that meet your timeline."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been amazing for our Pa'ia family home. Their standard cleaning service helps us maintain a clean, healthy environment for our kids!",
      author: "Maria S., Pa'ia Homeowner"
    }
  },
  {
    id: "kuau",
    name: "Kuau",
    description: "Kuau homeowners enjoy our comprehensive standard cleaning service that maintains their properties consistently clean and comfortable. Reliable service for consistent satisfaction and a perpetually tidy home in this scenic area.",
    faq: [
      {
        question: "Do you offer competitive rates for Kuau standard cleaning?",
        answer: "Yes, we provide affordable, competitive rates for Kuau standard cleaning while maintaining the highest service quality and consistency."
      },
      {
        question: "How reliable is your standard cleaning service in Kuau?",
        answer: "We're committed to reliability and have a strong track record of consistent, high-quality standard cleaning services in Kuau."
      }
    ],
    testimonial: {
      text: "The standard cleaning service for our Kuau home has been thorough and affordable. Great value and our home always feels fresh and clean!",
      author: "Carlos M., Kuau Homeowner"
    }
  },
  {
    id: "haiku",
    name: "Ha'iku",
    description: "Ha'iku homeowners depend on our professional standard cleaning service to maintain their luxury properties consistently clean and comfortable. We understand the high standards expected in this prestigious mountain area where cleanliness and air quality are paramount.",
    faq: [
      {
        question: "Do you handle luxury properties for standard cleaning in Ha'iku?",
        answer: "Yes, we specialize in luxury standard cleaning and are experienced with high-end finishes, premium materials, and luxury property standards."
      },
      {
        question: "Can you accommodate Ha'iku HOA requirements for standard cleaning?",
        answer: "Absolutely! We're familiar with Ha'iku HOA guidelines and ensure full compliance for standard cleaning services while maintaining luxury standards."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provides exceptional standard cleaning for our Ha'iku luxury home. Consistent, professional service that maintains our high-end property perfectly!",
      author: "James L., Ha'iku Homeowner"
    }
  }
];

const StandardCleaningMauiPage = () => {
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
        <title>Standard Cleaning Service Maui | Red Rock Cleans</title>
        <meta name="description" content="Maui standard cleaning services. Regular maintenance for your Hawaiian paradise. Professional cleaning in Maui. Book today!" />
      </Helmet>
      <Hreflang />
      
      <div className="min-h-screen flex flex-col">
        <MauiNavigation loginUrl="https://customer-portal.maidily.com/red-rock-cleans-maui/sign-in" bookingUrl="/book-now-maui" />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative py-24 md:py-32 overflow-hidden">
            <div className="absolute inset-0">
              <img 
                src="/src/assets/hero-residential.jpg" 
                alt="Professional standard cleaning service in a beautiful Maui home with tropical landscape views"
                className="w-full h-full object-cover scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">{t('maui.standard.h1')}</h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                  Experience the joy of coming home to a consistently clean space every time. Our reliable recurring cleaning service gives Maui residents more time to enjoy the island lifestyle, with flexible scheduling that fits your busy life.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="h-14 text-lg px-8" asChild>
                    <Link to="/book-now-maui">
                      <Calendar className="w-5 h-5 mr-2" />
                      {t('maui.standard.schedule')}
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="h-14 text-lg px-8" asChild>
                    <Link to="/maui-calculator">
                      <Home className="w-5 h-5 mr-2" />
                      {t('maui.standard.quote')}
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <StandardCleaningChecklistSection
            intro={t('checklists.standardCleaning.introWithLocation', { location: 'Maui' })}
          />

          {/* Enjoy a Consistently Clean Home */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t('maui.standard.benefitsTitle')}</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center p-6 bg-background rounded-lg shadow-sm">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Professional and Vetted Cleaners</h3>
                    <p className="text-muted-foreground">
                      Our team consists of professional, background-checked cleaners who are trained to deliver consistent, high-quality results every time they visit your Maui home.
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
                      Enjoy the peace of mind that comes with a perpetually tidy home. Spend more time enjoying Maui's beautiful beaches and activities instead of worrying about cleaning.
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
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  Areas We Serve on Maui
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
                            <Link to="/book-now-maui">
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
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  Other Cleaning Services for Your Property on Maui
                </h2>
                <p className="text-xl text-muted-foreground mb-12">
                  Beyond standard cleaning, we offer specialized services to meet all your Maui property needs.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Link to="/maui/deep-cleaning-services/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Deep Cleaning Services
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Comprehensive deep cleaning for those hard-to-reach areas and intensive cleaning needs.
                      </p>
                    </div>
                  </Link>
                  <Link to="/maui/move-out-cleaning-services/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Move Out Cleaning Services
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Thorough end-of-tenancy cleaning to secure your security deposit.
                      </p>
                    </div>
                  </Link>
                  <Link to="/maui/airbnb-cleaning-services/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Airbnb Cleaning Services
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Professional turnover cleaning for vacation rental properties.
                      </p>
                    </div>
                  </Link>
                  <Link to="/maui/post-construction-cleaning-services/" className="group">
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
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-6">
                  <div className="border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3">Do I need to be home for my recurring cleaning service?</h3>
                    <p className="text-muted-foreground">
                      No, you don't need to be home during your standard cleaning service. We can work with your schedule and can arrange key access or entry instructions that work best for your lifestyle and security needs.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3">What is the price for weekly house cleaning in Kihei?</h3>
                    <p className="text-muted-foreground">
                      Standard cleaning costs in Kihei vary by property size, frequency, and specific requirements. Contact us for a detailed, customized quote based on your home's needs and preferred cleaning schedule.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3">Do you use eco-friendly cleaning supplies?</h3>
                    <p className="text-muted-foreground">
                      Yes, we use eco-friendly and family-safe cleaning supplies that are effective yet gentle on your family and the environment, perfect for maintaining a healthy home on Maui.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3">How often should I schedule standard cleaning?</h3>
                    <p className="text-muted-foreground">
                      Most Maui homeowners choose weekly or bi-weekly standard cleaning to maintain consistent cleanliness. We can recommend the best frequency based on your lifestyle, home size, and specific needs.
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
                  Ready to Enjoy a Consistently Clean Home?
                </h2>
                <p className="text-xl mb-8 opacity-90">
                  Join hundreds of satisfied Maui homeowners who trust Red Rock Cleans for reliable standard cleaning that gives them more time to enjoy the island lifestyle.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" className="h-14 text-lg px-8" asChild>
                    <Link to="/book-now-maui">
                      <Calendar className="w-5 h-5 mr-2" />
                      Schedule Your Standard Cleaning Today
                    </Link>
                  </Button>
                  <Button size="lg" variant="cta" className="h-14 text-lg px-8" asChild>
                    <Link to="/maui-calculator">
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

export default StandardCleaningMauiPage;

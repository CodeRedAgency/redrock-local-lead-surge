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

const neighborhoods = [
  {
    id: "wailea",
    name: "Wailea",
    description: "Wailea renters and property owners trust our professional move out cleaning service to secure their security deposits and prepare luxury properties for new occupants. We understand the high standards expected in this prestigious resort area.",
    faq: [
      {
        question: "How long does move out cleaning take in Wailea?",
        answer: "Move out cleaning typically takes 4-6 hours depending on property size and condition. We'll provide a detailed timeline during your free consultation."
      },
      {
        question: "Do you work with Wailea property management companies?",
        answer: "Yes, we work directly with property management companies, landlords, and tenants in Wailea to provide professional move out cleaning services."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans helped me secure my full security deposit with their thorough move out cleaning service. Their attention to detail exceeded my expectations!",
      author: "Sarah M., Wailea Tenant"
    }
  },
  {
    id: "makena",
    name: "Makena",
    description: "Makena renters and property owners rely on our comprehensive move out cleaning service to prepare their properties for new occupants. We ensure every surface meets landlord requirements for this beautiful coastal area.",
    faq: [
      {
        question: "Do you handle both condos and single-family homes for move out cleaning in Makena?",
        answer: "Yes, we provide move out cleaning services for both condos and single-family homes in Makena, from luxury properties to vacation rentals."
      },
      {
        question: "Can you coordinate with Makena property management schedules?",
        answer: "Absolutely! We work closely with Makena property management teams to schedule cleaning services around tenant move-out timelines."
      }
    ],
    testimonial: {
      text: "The move out cleaning service for our Makena rental was exceptional. Professional, thorough, and our new tenants were amazed by the condition!",
      author: "Michael R., Makena Property Owner"
    }
  },
  {
    id: "kihei",
    name: "Kihei",
    description: "Kihei renters and property owners depend on our professional move out cleaning service to secure their security deposits and prepare properties for new occupants. We understand the rental market dynamics in this growing community.",
    faq: [
      {
        question: "Do you service both short-term and long-term rental move out cleaning in Kihei?",
        answer: "Yes, we specialize in move out cleaning for both short-term vacation rentals and long-term residential properties in Kihei."
      },
      {
        question: "How do you ensure security deposit compliance in Kihei?",
        answer: "Every Kihei move out cleaning follows our detailed checklist and includes landlord-specific requirements to maximize your security deposit return."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provided excellent move out cleaning for our Kihei rental. Professional, thorough, and we got our full security deposit back!",
      author: "Jennifer L., Kihei Tenant"
    }
  },
  {
    id: "kapalua",
    name: "Kapalua",
    description: "Kapalua renters and property owners trust our reliable move out cleaning service to prepare their luxury properties for new occupants. We understand the importance of meeting high-end property standards in this exclusive resort community.",
    faq: [
      {
        question: "What makes Kapalua move out cleaning different?",
        answer: "Kapalua move out cleaning addresses the unique requirements of luxury resort properties, including high-end finishes, premium materials, and exclusive property standards."
      },
      {
        question: "Do you offer same-day move out cleaning in Kapalua?",
        answer: "Yes, we can often accommodate urgent move out cleaning requests for Kapalua properties, subject to availability and property condition."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been our go-to move out cleaning service for Kapalua properties. Reliable, professional, and our property managers are always impressed!",
      author: "Lisa W., Kapalua Property Manager"
    }
  },
  {
    id: "kaanapali",
    name: "Ka'anapali",
    description: "Ka'anapali renters and property owners enjoy our comprehensive move out cleaning service that prepares their properties for new occupants. Perfect for the busy Ka'anapali rental market with high turnover rates.",
    faq: [
      {
        question: "Do you work with vacation rental companies in Ka'anapali?",
        answer: "Yes, we're experienced with vacation rental companies and can work around tight turnover schedules while maintaining professional cleaning standards."
      },
      {
        question: "Can you customize move out cleaning for Ka'anapali properties?",
        answer: "Absolutely! We can adapt our cleaning checklist based on your Ka'anapali property's unique features and specific rental requirements."
      }
    ],
    testimonial: {
      text: "The move out cleaning service for our Ka'anapali vacation rental was wonderful. Professional, reliable, and our guests always comment on the cleanliness!",
      author: "Amanda T., Ka'anapali Property Owner"
    }
  },
  {
    id: "lahaina",
    name: "Lahaina",
    description: "Lahaina renters and property owners trust our professional move out cleaning service to prepare their properties for new occupants. We provide reliable service that meets the demands of this historic town's rental market.",
    faq: [
      {
        question: "How do you handle large-scale move out cleaning in Lahaina?",
        answer: "We're experienced with large-scale properties and can deploy multiple teams to handle extensive move out cleaning efficiently and on schedule."
      },
      {
        question: "What if I need to reschedule my Lahaina move out cleaning?",
        answer: "We're flexible with rescheduling and work closely with Lahaina tenants and property managers to accommodate move-out changes."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provides excellent move out cleaning for our Lahaina properties. Consistent quality and our tenants always get their deposits back!",
      author: "David K., Lahaina Property Manager"
    }
  },
  {
    id: "spreckelsville",
    name: "Spreckelsville",
    description: "Spreckelsville renters and property owners depend on our reliable move out cleaning service to prepare their properties for new occupants. We provide consistent, professional cleaning that ensures tenant satisfaction and deposit returns.",
    faq: [
      {
        question: "Do you service both residential and vacation rental move out cleaning in Spreckelsville?",
        answer: "Yes, we provide comprehensive move out cleaning services for all types of rental properties including residential homes, vacation rentals, and long-term rentals."
      },
      {
        question: "How do you ensure quality in Spreckelsville move out cleaning?",
        answer: "Every Spreckelsville move out cleaning follows our detailed checklist and includes a comprehensive quality assurance process to guarantee satisfactory results."
      }
    ],
    testimonial: {
      text: "The move out cleaning service for our Spreckelsville rental was exceptional. Professional, thorough, and our new tenant was amazed by the condition!",
      author: "Robert H., Spreckelsville Property Owner"
    }
  },
  {
    id: "paia",
    name: "Pa'ia",
    description: "Pa'ia renters and property owners rely on our professional move out cleaning service to prepare their properties for new occupants. We provide reliable service that helps tenants secure their deposits and property owners maintain high standards.",
    faq: [
      {
        question: "Do you work around Pa'ia tenant schedules?",
        answer: "Yes, we can schedule move out cleaning around tenant move-out timelines and work commitments while maintaining professional service standards."
      },
      {
        question: "What's your cancellation policy for Pa'ia move out cleaning?",
        answer: "We require 24-hour notice for cancellations, but we're flexible for emergencies and always work to find alternative solutions that meet your timeline."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been amazing for our Pa'ia rental properties. Their reliable service helps our tenants get their deposits back every time!",
      author: "Maria S., Pa'ia Property Manager"
    }
  },
  {
    id: "kuau",
    name: "Kuau",
    description: "Kuau renters and property owners enjoy our comprehensive move out cleaning service that prepares their properties for new occupants. Reliable service for consistent tenant satisfaction and deposit returns in this scenic area.",
    faq: [
      {
        question: "Do you offer competitive rates for Kuau move out cleaning?",
        answer: "Yes, we provide affordable, competitive rates for Kuau move out cleaning while maintaining the highest service quality and thoroughness."
      },
      {
        question: "How reliable is your move out cleaning service in Kuau?",
        answer: "We're committed to reliability and have a strong track record of consistent, high-quality move out cleaning services in Kuau."
      }
    ],
    testimonial: {
      text: "The move out cleaning service for our Kuau rental was thorough and affordable. Great value and our tenant got their full deposit back!",
      author: "Carlos M., Kuau Property Owner"
    }
  },
  {
    id: "haiku",
    name: "Ha'iku",
    description: "Ha'iku renters and property owners depend on our professional move out cleaning service to prepare their luxury properties for new occupants. We understand the high standards expected in this prestigious mountain area.",
    faq: [
      {
        question: "Do you handle luxury properties for move out cleaning in Ha'iku?",
        answer: "Yes, we specialize in luxury move out cleaning and are experienced with high-end finishes, premium materials, and luxury property standards."
      },
      {
        question: "Can you accommodate Ha'iku HOA requirements for move out cleaning?",
        answer: "Absolutely! We're familiar with Ha'iku HOA guidelines and ensure full compliance for move out cleaning services."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provides exceptional move out cleaning for our Ha'iku luxury rental. Perfect service for our high-end property and discerning tenants!",
      author: "James L., Ha'iku Property Owner"
    }
  }
];

const MoveOutCleaningMauiPage = () => {
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
        <title>Move Out Cleaning Service Maui | Red Rock Cleans</title>
        <meta name="description" content="Secure your deposit with our reliable move out cleaning service on Maui. We provide thorough end-of-tenancy cleaning in Wailea, Lahaina, and beyond. Book today!" />
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
                alt="Professional move out cleaning service in a Maui property with beautiful Hawaiian landscape views"
                className="w-full h-full object-cover scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">{t('maui.moveout.h1')}</h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                  Secure your security deposit and make your move easier with our professional move out cleaning service. We help Maui renters and homeowners prepare their properties for new occupants with thorough, landlord-approved cleaning that maximizes your chances of a full deposit return.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="h-14 text-lg px-8" asChild>
                    <Link to="/book-now-maui">
                      <Calendar className="w-5 h-5 mr-2" />
                      {t('maui.moveout.schedule')}
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="h-14 text-lg px-8" asChild>
                    <Link to="/maui-calculator">
                      <Home className="w-5 h-5 mr-2" />
                      {t('maui.moveout.quote')}
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Our Deposit-Focused Move Out Cleaning Checklist */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t('maui.moveout.checklistTitle')}</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <CheckCircle className="w-6 h-6 text-primary mr-3" />
                      Kitchen Deep Clean
                    </h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Inside oven, stovetop, and all appliances
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Inside refrigerator and freezer
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Inside all cabinets and drawers
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Clean all countertops and backsplash
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Scrub sink and faucet fixtures
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <CheckCircle className="w-6 h-6 text-primary mr-3" />
                      Complete Property Clean
                    </h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Clean baseboards and trim throughout
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Clean lanais and outdoor spaces
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Vacuum and clean all flooring
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Clean all windows and tracks
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Sanitize all bathrooms thoroughly
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Make Your Move Easier and Secure Your Deposit */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t('maui.moveout.benefitsTitle')}</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center p-6 bg-background rounded-lg shadow-sm">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Clock4 className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Saving Time During a Stressful Move</h3>
                    <p className="text-muted-foreground">
                      Let us handle the detailed cleaning while you focus on packing, organizing, and settling into your new place. Our efficient process saves you valuable time during one of life's most stressful events.
                    </p>
                  </div>
                  <div className="text-center p-6 bg-background rounded-lg shadow-sm">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Satisfying Landlord Requirements</h3>
                    <p className="text-muted-foreground">
                      Our thorough cleaning checklist is designed to meet and exceed typical landlord requirements, ensuring your property meets all inspection standards and maximizing your deposit return.
                    </p>
                  </div>
                  <div className="text-center p-6 bg-background rounded-lg shadow-sm">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <DollarSign className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Maximizing Deposit Return</h3>
                    <p className="text-muted-foreground">
                      Our professional cleaning service significantly increases your chances of receiving your full security deposit back, making the investment in professional cleaning worthwhile.
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
                            Professional move out cleaning services
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
                              Schedule Your {neighborhood.name} Move Out Cleaning
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
                  Beyond move out cleaning, we offer specialized services to meet all your Maui property needs.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Link to="/maui/standard-cleaning-services/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Standard Cleaning Services
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Regular maintenance cleaning for consistent home cleanliness.
                      </p>
                    </div>
                  </Link>
                  <Link to="/maui/deep-cleaning-services/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Deep Cleaning Services
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Comprehensive cleaning for special occasions or seasonal deep cleans.
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
                    <h3 className="text-lg font-semibold mb-3">Should the property be completely empty before a move out clean?</h3>
                    <p className="text-muted-foreground">
                      Yes, for the best results, the property should be completely empty. This allows us to access all areas including inside cabinets, behind appliances, and under furniture for a thorough cleaning that meets landlord standards.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3">What is the average cost for a move out clean in Lahaina?</h3>
                    <p className="text-muted-foreground">
                      Move out cleaning costs in Lahaina vary by property size, condition, and specific requirements. Contact us for a detailed, customized quote based on your property needs.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3">Do you guarantee I'll get my security deposit back?</h3>
                    <p className="text-muted-foreground">
                      While we can't guarantee specific outcomes, our thorough cleaning service significantly increases your chances of receiving your full security deposit back by meeting and exceeding typical landlord cleaning requirements.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3">How far in advance should I schedule move out cleaning?</h3>
                    <p className="text-muted-foreground">
                      We recommend scheduling move out cleaning at least 3-5 days in advance to ensure availability. For properties that require extensive cleaning, we recommend 1-2 weeks advance notice.
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
                  Ready to Secure Your Deposit?
                </h2>
                <p className="text-xl mb-8 opacity-90">
                  Join hundreds of successful Maui renters and property owners who trust Red Rock Cleans for professional move out cleaning that maximizes security deposit returns and simplifies the moving process.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" className="h-14 text-lg px-8" asChild>
                    <Link to="/book-now-maui">
                      <Calendar className="w-5 h-5 mr-2" />
                      Schedule Your Move Out Cleaning Today
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

export default MoveOutCleaningMauiPage;

import { DallasNavigation } from "@/components/DallasNavigation";
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
    id: "university-park",
    name: "University Park",
    description: "University Park homeowners and developers trust our professional post construction cleaning service to restore their luxury properties to pristine condition. We understand the high standards expected in this prestigious area and tackle the unique challenges of upscale home construction and renovation projects.",
    faq: [
      {
        question: "How long does post construction cleaning take in University Park?",
        answer: "Post construction cleaning typically takes 8-12 hours depending on property size and construction scope. We'll provide a detailed timeline during your free consultation and can work around your schedule."
      },
      {
        question: "Do you work with University Park property developers?",
        answer: "Yes, we work directly with property developers, individual homeowners, and luxury property owners in University Park to provide comprehensive post construction cleaning services."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans transformed our University Park renovation with their post construction cleaning service. The attention to detail was incredible - our home was move-in ready!",
      author: "Sarah M., University Park Homeowner"
    }
  },
  {
    id: "highland-park",
    name: "Highland Park",
    description: "Highland Park homeowners and developers rely on our comprehensive post construction cleaning service to restore their luxury properties to pristine condition. We ensure every surface meets the high standards expected in this exclusive neighborhood where construction projects require meticulous attention to detail.",
    faq: [
      {
        question: "Do you handle both luxury and standard homes for post construction cleaning in Highland Park?",
        answer: "Yes, we provide post construction cleaning services for both luxury properties and standard homes in Highland Park, adapting our service level to match your property's specific needs."
      },
      {
        question: "Can you coordinate with Highland Park homeowner schedules?",
        answer: "Absolutely! We work closely with Highland Park homeowners and developers to schedule post construction cleaning services around their timeline and availability."
      }
    ],
    testimonial: {
      text: "The post construction cleaning service for our Highland Park home was exceptional. Professional, thorough, and they really understood the challenges of luxury home construction!",
      author: "Michael R., Highland Park Property Owner"
    }
  },
  {
    id: "uptown-dallas",
    name: "Uptown Dallas",
    description: "Uptown Dallas homeowners and developers depend on our professional post construction cleaning service to restore their properties to pristine condition. We understand the unique challenges of urban construction and renovation projects in this vibrant neighborhood.",
    faq: [
      {
        question: "Do you service both residential and commercial post construction cleaning in Uptown Dallas?",
        answer: "Yes, we specialize in post construction cleaning for both residential properties and commercial spaces in Uptown Dallas, adapting our service to your specific property type."
      },
      {
        question: "How do you handle construction debris removal in Uptown Dallas?",
        answer: "Every Uptown Dallas post construction cleaning includes proper disposal of construction debris, using appropriate techniques and following local regulations for urban construction cleanup."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provided excellent post construction cleaning for our Uptown Dallas condo renovation. They really understood the challenges of urban construction and our property was spotless!",
      author: "Jennifer L., Uptown Dallas Homeowner"
    }
  },
  {
    id: "downtown-dallas",
    name: "Downtown Dallas",
    description: "Downtown Dallas developers and property owners trust our reliable post construction cleaning service to restore their commercial and residential properties to pristine condition. We understand the importance of meeting strict timelines and high standards in this busy urban environment.",
    faq: [
      {
        question: "What makes Downtown Dallas post construction cleaning different?",
        answer: "Downtown Dallas post construction cleaning addresses the unique requirements of urban construction projects, including high-rise buildings, commercial spaces, and the challenges of downtown construction logistics."
      },
      {
        question: "Do you offer same-day post construction cleaning in Downtown Dallas?",
        answer: "Yes, we can often accommodate urgent post construction cleaning requests for Downtown Dallas properties, subject to availability and project scope requirements."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been our go-to post construction cleaning service for Downtown Dallas projects. Reliable, professional, and they understand urban construction challenges!",
      author: "Lisa W., Downtown Dallas Developer"
    }
  },
  {
    id: "preston-hollow",
    name: "Preston Hollow",
    description: "Preston Hollow homeowners and developers enjoy our comprehensive post construction cleaning service that restores their properties to pristine condition. Perfect for the upscale Preston Hollow lifestyle where construction projects require meticulous attention to luxury finishes and details.",
    faq: [
      {
        question: "Do you work with luxury home developers in Preston Hollow?",
        answer: "Yes, we're experienced with luxury construction projects and can provide post construction cleaning services that meet the high standards expected in Preston Hollow properties."
      },
      {
        question: "Can you customize post construction cleaning for Preston Hollow properties?",
        answer: "Absolutely! We can adapt our cleaning checklist based on your Preston Hollow property's unique features, luxury finishes, and specific construction requirements."
      }
    ],
    testimonial: {
      text: "The post construction cleaning service for our Preston Hollow home was wonderful. Professional, reliable, and our luxury property looked absolutely stunning afterward!",
      author: "Amanda T., Preston Hollow Homeowner"
    }
  },
  {
    id: "plano",
    name: "Plano",
    description: "Plano homeowners and developers trust our professional post construction cleaning service to restore their properties to pristine condition. We provide reliable service that meets the demands of this fast-growing area's construction and renovation projects.",
    faq: [
      {
        question: "How do you handle large-scale post construction cleaning in Plano?",
        answer: "We're experienced with large-scale properties and can deploy multiple teams to handle extensive post construction cleaning efficiently while maintaining quality standards."
      },
      {
        question: "What if I need to reschedule my Plano post construction cleaning?",
        answer: "We're flexible with rescheduling and work closely with Plano homeowners and developers to accommodate schedule changes while maintaining service quality."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provides excellent post construction cleaning for our Plano new build. They really understood the scope of our project and delivered outstanding results!",
      author: "David K., Plano Homeowner"
    }
  },
  {
    id: "frisco",
    name: "Frisco",
    description: "Frisco homeowners and developers depend on our reliable post construction cleaning service to restore their properties to pristine condition. We provide consistent, professional cleaning that ensures complete satisfaction and move-in ready results for this rapidly growing area.",
    faq: [
      {
        question: "Do you service both residential and commercial post construction cleaning in Frisco?",
        answer: "Yes, we provide comprehensive post construction cleaning services for all types of properties including residential homes, commercial buildings, and mixed-use developments."
      },
      {
        question: "How do you ensure quality in Frisco post construction cleaning?",
        answer: "Every Frisco post construction cleaning follows our detailed checklist and includes a comprehensive quality assurance process to guarantee satisfactory results."
      }
    ],
    testimonial: {
      text: "The post construction cleaning service for our Frisco home was exceptional. Professional, thorough, and our family was able to move in immediately after construction!",
      author: "Robert H., Frisco Homeowner"
    }
  },
  {
    id: "prosper",
    name: "Prosper",
    description: "Prosper homeowners and developers rely on our professional post construction cleaning service to restore their properties to pristine condition. We provide reliable service that helps families and businesses achieve move-in ready results in this thriving community.",
    faq: [
      {
        question: "Do you work around Prosper family schedules?",
        answer: "Yes, we can schedule post construction cleaning around family schedules and business operations while maintaining professional service standards."
      },
      {
        question: "What's your cancellation policy for Prosper post construction cleaning?",
        answer: "We require 24-hour notice for cancellations, but we're flexible for construction delays and always work to find alternative solutions that meet your timeline."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been amazing for our Prosper new construction project. Their post construction cleaning service helped us achieve a flawless move-in experience!",
      author: "Maria S., Prosper Homeowner"
    }
  }
];

const PostConstructionCleaningDallasPage = () => {
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
        <title>Post Construction Cleaning Service in Dallas | Red Rock Cleans</title>
        <meta name="description" content="Professional post construction cleaning service in Dallas. Red Rock Cleans handles construction cleanup for new builds and renovations in Plano, Frisco, and beyond. Get a detailed quote today!" />
      </Helmet>
      <Hreflang />
      
      <div className="min-h-screen flex flex-col">
        <DallasNavigation loginUrl="https://customer-portal.maidily.com/red-rock-cleans-dallas/sign-in" bookingUrl="/book-now-dallas" />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative py-24 md:py-32 overflow-hidden">
            <div className="absolute inset-0">
              <img 
                src="/src/assets/hero-commercial.jpg" 
                alt="Professional post construction cleaning service in a Dallas construction site with modern city skyline views"
                className="w-full h-full object-cover scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">{t('dallas.post.h1')}</h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                  Transform your dusty worksite into a pristine, move-in ready property with our professional post construction cleaning service. Perfect for contractors, developers, and homeowners in the fast-growing Dallas area who demand excellence in their final walkthroughs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="h-14 text-lg px-8" asChild>
                    <Link to="/book-now-dallas">
                      <Calendar className="w-5 h-5 mr-2" />
                      {t('dallas.post.schedule')}
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="h-14 text-lg px-8" asChild>
                    <Link to="/dallas-calculator">
                      <Home className="w-5 h-5 mr-2" />
                      {t('dallas.post.quote')}
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Our Detailed Post Construction Cleanup Checklist */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t('dallas.post.processTitle')}</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <CheckCircle className="w-6 h-6 text-primary mr-3" />
                      Construction Debris Removal
                    </h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Removal of all construction debris and materials
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Fine drywall dust removal from all surfaces
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Cleaning and polishing all fixtures and hardware
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Window and track cleaning throughout
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Cabinet and drawer interior cleaning
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <CheckCircle className="w-6 h-6 text-primary mr-3" />
                      Final Detailing & Safety
                    </h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Comprehensive floor cleaning and protection
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Appliance cleaning and testing
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        HVAC system cleaning and filter replacement
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Safety inspection and hazard removal
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Final walkthrough and quality assurance
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* From Worksite to Showcase Home */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t('dallas.post.benefitsTitle')}</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center p-6 bg-background rounded-lg shadow-sm">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Ensuring Safety</h3>
                    <p className="text-muted-foreground">
                      Our thorough post construction cleaning removes all safety hazards, construction debris, and ensures your property is safe for occupancy and final inspections.
                    </p>
                  </div>
                  <div className="text-center p-6 bg-background rounded-lg shadow-sm">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Clock className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Saving Contractors Time</h3>
                    <p className="text-muted-foreground">
                      Free up your time for final walkthroughs and project completion. Our professional cleaning ensures your clients receive a flawless, move-in ready property that reflects your quality workmanship.
                    </p>
                  </div>
                  <div className="text-center p-6 bg-background rounded-lg shadow-sm">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Flawless Final Product</h3>
                    <p className="text-muted-foreground">
                      Deliver a showcase-quality result to your clients in upscale Dallas neighborhoods. Our attention to detail ensures every surface shines and every detail is perfect for move-in day.
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
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t('dallas.post.areasTitle')}</h2>
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
                            Professional post construction cleaning services
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
                              Schedule Your {neighborhood.name} Post Construction Cleaning
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
                  Other Cleaning Services for Your Property in Dallas
                </h2>
                <p className="text-xl text-muted-foreground mb-12">
                  Beyond post construction cleaning, we offer specialized services to meet all your Dallas property needs.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Link to="/dallas/standard-cleaning-services/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Standard Cleaning Services
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Regular maintenance cleaning for consistent home cleanliness.
                      </p>
                    </div>
                  </Link>
                  <Link to="/dallas/deep-cleaning-services/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Deep Cleaning Services
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Comprehensive deep cleaning for those hard-to-reach areas.
                      </p>
                    </div>
                  </Link>
                  <Link to="/dallas/move-out-cleaning-services/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Move Out Cleaning Services
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Thorough end-of-tenancy cleaning to secure your security deposit.
                      </p>
                    </div>
                  </Link>
                  <Link to="/dallas/airbnb-cleaning-services/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Airbnb Cleaning Services
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Professional turnover cleaning for vacation rental properties.
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
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t('dallas.post.faqTitle')}</h2>
                <div className="space-y-6">
                  <div className="border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3">What's the difference between a rough clean and a final clean?</h3>
                    <p className="text-muted-foreground">
                      A rough clean removes major construction debris and materials, while a final clean is the comprehensive, move-in ready cleaning that includes fine dust removal, fixture polishing, and safety inspections. We provide both services to ensure your property is completely ready.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3">What is the average price for post construction cleaning in the Dallas area?</h3>
                    <p className="text-muted-foreground">
                      Post construction cleaning costs in Dallas vary by property size, construction scope, and specific requirements. Contact us for a detailed, customized quote based on your project's needs and the level of cleaning required.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3">Do you work with commercial developers in Plano and Frisco?</h3>
                    <p className="text-muted-foreground">
                      Yes, we work extensively with commercial developers, contractors, and property management companies throughout the Dallas area, including Plano and Frisco. We understand project timelines and can coordinate with your construction schedule.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3">How long does post construction cleaning take?</h3>
                    <p className="text-muted-foreground">
                      Post construction cleaning typically takes 8-12 hours depending on property size and construction scope. We can work around your schedule and provide a detailed timeline during your free consultation.
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
                  {t('dallas.post.finalCtaTitle')}
                </h2>
                <p className="text-xl mb-8 opacity-90">
                  Join hundreds of satisfied Dallas contractors, developers, and homeowners who trust Red Rock Cleans for professional post construction cleaning that delivers showcase-quality results.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" className="h-14 text-lg px-8" asChild>
                    <Link to="/book-now-dallas">
                      <Calendar className="w-5 h-5 mr-2" />
                      {t('dallas.post.schedule')}
                    </Link>
                  </Button>
                  <Button size="lg" variant="cta" className="h-14 text-lg px-8" asChild>
                    <Link to="/dallas-calculator">
                      <Home className="w-5 h-5 mr-2" />
                      {t('dallas.post.quote')}
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

export default PostConstructionCleaningDallasPage;

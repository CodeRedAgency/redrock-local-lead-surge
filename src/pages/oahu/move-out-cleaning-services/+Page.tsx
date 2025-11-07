import { OahuNavigation } from "@/components/OahuNavigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Clock, Shield, Star, Users, Calendar, Home, Sparkles, DollarSign, Key } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Hreflang from "@/components/Hreflang";
import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import { MoveOutChecklistSection } from "@/components/MoveOutChecklistSection";

const neighborhoods = [
  {
    id: "aiea",
    name: "Aiea",
    description: "Aiea residents trust our move out cleaning service to thoroughly clean their property and maximize their security deposit return. We understand the unique needs of Aiea's diverse community.",
    faq: [
      {
        question: "Do you service both apartments and houses in Aiea?",
        answer: "Yes, we provide comprehensive move out cleaning services for all types of properties including apartments, houses, and condos throughout Aiea."
      },
      {
        question: "How far in advance should Aiea residents book?",
        answer: "We recommend booking at least 3-5 days in advance, especially during peak moving seasons in Aiea."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans helped us secure our full security deposit from our Aiea rental. Their attention to detail was incredible and met all landlord requirements.",
      author: "Sarah M., Aiea Resident"
    }
  },
  {
    id: "ewa-beach",
    name: "Ewa Beach",
    description: "Ewa Beach families depend on our move out cleaning service to meet landlord standards and secure their security deposit return. We provide reliable service for this growing community.",
    faq: [
      {
        question: "Do you clean inside appliances for Ewa Beach move outs?",
        answer: "Yes, our move out cleaning includes detailed cleaning inside ovens, refrigerators, microwaves, and all appliances to meet landlord requirements."
      },
      {
        question: "How do you handle pets during Ewa Beach move out cleaning?",
        answer: "We use pet-safe products and can work around your pets during the move out cleaning process."
      }
    ],
    testimonial: {
      text: "The move out cleaning service for our Ewa Beach home was thorough and professional. Excellent service and full deposit return!",
      author: "Michael R., Ewa Beach Resident"
    }
  },
  {
    id: "hawaii-kai",
    name: "Hawaii Kai",
    description: "Hawaii Kai residents rely on our move out cleaning service to meet landlord requirements and secure their security deposit return. We serve this beautiful waterfront community.",
    faq: [
      {
        question: "Do you clean baseboards during Hawaii Kai move out cleaning?",
        answer: "Yes, detailed baseboard cleaning is a key component of our move out cleaning service in Hawaii Kai."
      },
      {
        question: "Can you customize move out cleaning for Hawaii Kai properties?",
        answer: "Absolutely! We can focus on specific areas or requirements based on your Hawaii Kai landlord's expectations."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provided excellent move out cleaning for our Hawaii Kai home. Professional service and full security deposit return!",
      author: "Jennifer L., Hawaii Kai Resident"
    }
  },
  {
    id: "honolulu",
    name: "Honolulu",
    description: "Honolulu renters and homeowners depend on our move out cleaning service to thoroughly clean their property and ensure maximum security deposit return.",
    faq: [
      {
        question: "Do you offer same-day move out cleaning in Honolulu?",
        answer: "We can often accommodate same-day move out cleaning for existing customers, subject to availability."
      },
      {
        question: "What makes Honolulu move out cleaning different?",
        answer: "Honolulu move out cleaning focuses on removing salt air residue, meeting local landlord standards, and addressing unique island conditions."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans made our Honolulu move out process so much easier. Professional, thorough, and we got our full security deposit back!",
      author: "Lisa W., Honolulu Resident"
    }
  },
  {
    id: "kailua",
    name: "Kailua",
    description: "Kailua residents trust our move out cleaning service to thoroughly clean their property and maximize their security deposit return.",
    faq: [
      {
        question: "Do you work around Kailua school schedules?",
        answer: "Yes, we can schedule move out cleaning around school hours and family schedules for maximum convenience."
      },
      {
        question: "What if I'm not satisfied with move out cleaning in Kailua?",
        answer: "We guarantee satisfaction and will return to address any concerns at no additional charge."
      }
    ],
    testimonial: {
      text: "The move out cleaning service for our Kailua home was exceptional. Professional, thorough, and excellent value!",
      author: "Amanda T., Kailua Resident"
    }
  },
  {
    id: "kapolei",
    name: "Kapolei",
    description: "Kapolei families enjoy our comprehensive move out cleaning service that meets landlord requirements and secures security deposit returns.",
    faq: [
      {
        question: "How often do Kapolei residents need move out cleaning?",
        answer: "Move out cleaning is typically a one-time service when moving out of your Kapolei rental or selling your home."
      },
      {
        question: "Do you provide standard cleaning after move out in Kapolei?",
        answer: "Yes, we offer both move out cleaning and ongoing standard cleaning services throughout Kapolei."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provided excellent move out cleaning for our Kapolei home. Professional service and full deposit return!",
      author: "David K., Kapolei Resident"
    }
  },
  {
    id: "makakilo",
    name: "Makakilo",
    description: "Makakilo residents depend on our move out cleaning service to meet landlord standards and secure their security deposit return.",
    faq: [
      {
        question: "Do you service diverse property types in Makakilo for move out cleaning?",
        answer: "Yes, we provide comprehensive move out cleaning for all types of properties including houses, condos, and townhomes."
      },
      {
        question: "How do you ensure quality in Makakilo move out cleaning?",
        answer: "Every Makakilo move out cleaning is supervised with a comprehensive quality assurance process to guarantee landlord satisfaction."
      }
    ],
    testimonial: {
      text: "The move out cleaning service for our Makakilo home was exceptional. Professional, thorough, and excellent value!",
      author: "Robert H., Makakilo Resident"
    }
  },
  {
    id: "mililani",
    name: "Mililani",
    description: "Mililani families trust our move out cleaning service to thoroughly clean their property and ensure maximum security deposit return.",
    faq: [
      {
        question: "Do you work with families in Mililani for move out cleaning?",
        answer: "Yes, we're family-friendly and use safe, eco-friendly products that are safe for children and pets during move out cleaning."
      },
      {
        question: "Can you schedule around Mililani work hours for move out cleaning?",
        answer: "Absolutely! We offer flexible scheduling including early morning, evening, and weekend appointments."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans made our Mililani move out process so much easier. Professional service and we got our full security deposit back!",
      author: "Maria S., Mililani Resident"
    }
  },
  {
    id: "pearl-city",
    name: "Pearl City",
    description: "Pearl City residents rely on our move out cleaning service to meet landlord requirements and secure their security deposit return.",
    faq: [
      {
        question: "Do you offer competitive rates for Pearl City move out cleaning?",
        answer: "Yes, we provide affordable, competitive rates for Pearl City residents while maintaining high service quality."
      },
      {
        question: "How reliable is your move out cleaning service in Pearl City?",
        answer: "We're committed to reliability and have a strong track record of consistent, high-quality move out cleaning in Pearl City."
      }
    ],
    testimonial: {
      text: "The move out cleaning service for our Pearl City home was thorough and affordable. Great value and excellent results!",
      author: "Carlos M., Pearl City Resident"
    }
  },
  {
    id: "waialae",
    name: "Waialae",
    description: "Waialae residents enjoy our comprehensive move out cleaning service that meets landlord requirements and secures security deposit returns.",
    faq: [
      {
        question: "Do you handle luxury properties in Waialae?",
        answer: "Yes, we specialize in move out cleaning for luxury homes and are experienced with high-end finishes and materials."
      },
      {
        question: "Can you accommodate Waialae HOA requirements?",
        answer: "Absolutely! We're familiar with Waialae HOA guidelines and ensure full compliance for move out cleaning."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provided exceptional move out cleaning for our Waialae home. Perfect service for our luxury property!",
      author: "James L., Waialae Resident"
    }
  },
  {
    id: "waikiki",
    name: "Waikiki",
    description: "Waikiki residents trust our move out cleaning service to thoroughly clean their property and ensure maximum security deposit return.",
    faq: [
      {
        question: "Do you service condos for move out cleaning in Waikiki?",
        answer: "Yes, we provide comprehensive move out cleaning services for both condos and apartments throughout Waikiki."
      },
      {
        question: "What's your cancellation policy for Waikiki move out cleaning?",
        answer: "We require 24-hour notice for cancellations, but we're flexible for emergencies and rescheduling."
      }
    ],
    testimonial: {
      text: "The move out cleaning service for our Waikiki condo was exceptional. Professional, thorough, and excellent value!",
      author: "Nancy P., Waikiki Resident"
    }
  },
  {
    id: "waimanalo",
    name: "Waimanalo",
    description: "Waimanalo residents depend on our move out cleaning service to thoroughly clean their property and ensure maximum security deposit return.",
    faq: [
      {
        question: "Do you service both houses and apartments in Waimanalo?",
        answer: "Yes, we provide comprehensive move out cleaning services for all types of properties including houses, apartments, and condos."
      },
      {
        question: "How long does Waimanalo move out cleaning take?",
        answer: "Move out cleaning typically takes 3-5 hours depending on property size and specific Waimanalo landlord requirements."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provided excellent move out cleaning for our Waimanalo home. Professional service and full security deposit return!",
      author: "Patricia D., Waimanalo Resident"
    }
  },
  {
    id: "waipahu",
    name: "Waipahu",
    description: "Waipahu families enjoy our comprehensive move out cleaning service that meets landlord requirements and secures security deposit returns.",
    faq: [
      {
        question: "Do you work with families in Waipahu for move out cleaning?",
        answer: "Yes, we're family-friendly and use safe, eco-friendly products that are safe for children and pets during move out cleaning."
      },
      {
        question: "Can you schedule around Waipahu work hours for move out cleaning?",
        answer: "Absolutely! We offer flexible scheduling including early morning, evening, and weekend appointments."
      }
    ],
    testimonial: {
      text: "The move out cleaning service for our Waipahu home was thorough and professional. Excellent service and full deposit return!",
      author: "Susan B., Waipahu Resident"
    }
  }
];

const MoveOutCleaningOahuPage = () => {
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
        <title>Move Out Cleaning Service Oahu | Red Rock Cleans</title>
        <meta name="description" content="Move-out cleaning in Oahu. Get your full deposit back with comprehensive cleaning in Honolulu & Oahu. Book your service today!" />
      </Helmet>
      <Hreflang />
      
      <div className="min-h-screen flex flex-col">
        <OahuNavigation loginUrl="https://customer-portal.maidily.com/red-rock-cleans-oahu/sign-in" bookingUrl="/book-now-oahu" />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative py-24 md:py-32 overflow-hidden">
            <div className="absolute inset-0">
              <img 
                src="/src/assets/service-products.jpg" 
                alt="Professional move out cleaning service in an Oahu apartment with beautiful Hawaiian landscape views"
                className="w-full h-full object-cover scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">{t('oahu.moveout.h1')}</h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                  Secure your security deposit and make your move easier with our comprehensive move out cleaning service. We help Oahu renters, homeowners, and military families prepare their property for new occupants, meeting all landlord requirements and maximizing your deposit return.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="h-14 text-lg px-8" asChild>
                    <Link to="/book-now-oahu">
                      <Calendar className="w-5 h-5 mr-2" />
                      {t('oahu.moveout.schedule')}
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="h-14 text-lg px-8" asChild>
                    <Link to="/oahu-calculator">
                      <Home className="w-5 h-5 mr-2" />
                      {t('oahu.moveout.quote')}
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <MoveOutChecklistSection
            intro={t('checklists.moveOut.introWithLocation', { location: 'Oahu' })}
          />

          {/* Make Your Move Easier and Secure Your Deposit */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t('oahu.moveout.benefitsTitle')}</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center p-6 bg-background rounded-lg shadow-sm">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <DollarSign className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Maximize Your Security Deposit</h3>
                    <p className="text-muted-foreground">
                      Our thorough move out cleaning meets all landlord requirements, giving you the best chance of receiving your full security deposit back.
                    </p>
                  </div>
                  <div className="text-center p-6 bg-background rounded-lg shadow-sm">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Clock className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Save Time and Energy</h3>
                    <p className="text-muted-foreground">
                      Moving is stressful enough. Let us handle the cleaning while you focus on packing, organizing, and settling into your new home.
                    </p>
                  </div>
                  <div className="text-center p-6 bg-background rounded-lg shadow-sm">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Key className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Satisfy Landlord Requirements</h3>
                    <p className="text-muted-foreground">
                      Our detailed cleaning checklist ensures your property meets all landlord standards, preventing disputes and ensuring smooth transitions.
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
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t('oahu.moveout.areasTitle')}</h2>
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
                            <Link to="/book-now-oahu">
                              Schedule Your {neighborhood.name} Move Out Clean
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
                <h2 className="text-3xl md:text-4xl font-bold mb-8">{t('oahu.moveout.otherServicesTitle')}</h2>
                <p className="text-xl text-muted-foreground mb-12">
                  Beyond move out cleaning, we offer specialized services to meet all your Oahu property needs.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Link to="/oahu/standard-cleaning-services/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Standard Cleaning Services
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Regular maintenance cleaning for consistent home cleanliness.
                      </p>
                    </div>
                  </Link>
                  <Link to="/oahu/deep-cleaning-services/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Deep Cleaning Services
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Comprehensive cleaning for special occasions or seasonal deep cleans.
                      </p>
                    </div>
                  </Link>
                  <Link to="/oahu/airbnb-cleaning-services/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Airbnb Cleaning Services
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Professional turnover cleaning for vacation rental properties.
                      </p>
                    </div>
                  </Link>
                  <Link to="/oahu/post-construction-cleaning-services/" className="group">
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
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t('oahu.moveout.faqTitle')}</h2>
                <div className="space-y-6">
                  <div className="border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3">Should the property be completely empty before a move out clean?</h3>
                    <p className="text-muted-foreground">
                      For the best results, we recommend having the property as empty as possible. However, we can work around remaining furniture and belongings if needed.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3">What is the average cost for a move out clean in Honolulu?</h3>
                    <p className="text-muted-foreground">
                      Move out cleaning costs vary based on property size and specific requirements. Contact us for a free quote tailored to your Honolulu property.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3">Do you offer cleaning for military housing check-outs?</h3>
                    <p className="text-muted-foreground">
                      Yes, we specialize in military housing check-out cleaning and understand the specific requirements for base housing inspections.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3">How far in advance should I book move out cleaning?</h3>
                    <p className="text-muted-foreground">
                      We recommend booking at least 3-5 days in advance, especially during peak moving seasons. We can sometimes accommodate shorter notice for existing customers.
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('oahu.moveout.finalCtaTitle')}</h2>
                <p className="text-xl mb-8 opacity-90">
                  Join hundreds of satisfied Oahu residents who trust Red Rock Cleans for thorough, professional move out cleaning services that maximize their deposit returns.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" className="h-14 text-lg px-8" asChild>
                    <Link to="/book-now-oahu">
                      <Calendar className="w-5 h-5 mr-2" />
                      {t('oahu.moveout.schedule')}
                    </Link>
                  </Button>
                  <Button size="lg" variant="cta" className="h-14 text-lg px-8" asChild>
                    <Link to="/oahu-calculator">
                      <Home className="w-5 h-5 mr-2" />
                      {t('oahu.moveout.quote')}
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

export default MoveOutCleaningOahuPage;

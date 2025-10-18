import { OahuNavigation } from "@/components/OahuNavigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Clock, Shield, Star, Users, Calendar, Home, Sparkles, DollarSign, Key, Zap, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Hreflang from "@/components/Hreflang";
import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';

const neighborhoods = [
  {
    id: "aiea",
    name: "Aiea",
    description: "Aiea residents trust our deep cleaning service to thoroughly restore their homes. Our intensive cleaning tackles built-up grime and creates a fresh, healthy living environment.",
    faq: [
      {
        question: "How long does deep cleaning take in Aiea?",
        answer: "Deep cleaning typically takes 4-6 hours depending on home size and specific needs. We'll provide a detailed time estimate during your free consultation."
      },
      {
        question: "Do you clean inside cabinets during Aiea deep cleaning?",
        answer: "Yes, our deep cleaning includes detailed cleaning inside cabinets, drawers, and all storage areas that aren't covered in standard cleaning."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans transformed our Aiea home with their deep cleaning service. Every surface sparkled and the difference was incredible!",
      author: "Sarah M., Aiea Resident"
    }
  },
  {
    id: "ewa-beach",
    name: "Ewa Beach",
    description: "Ewa Beach families rely on our deep cleaning service to restore their homes to pristine condition. We tackle salt air buildup and create a truly refreshed living space.",
    faq: [
      {
        question: "Do you handle salt air damage during Ewa Beach deep cleaning?",
        answer: "Yes, we specialize in removing salt air residue and buildup that's common in Ewa Beach homes, using specialized techniques and products."
      },
      {
        question: "Can you schedule deep cleaning around my Ewa Beach work schedule?",
        answer: "Absolutely! We offer flexible scheduling including early morning, evening, and weekend appointments to fit your Ewa Beach lifestyle."
      }
    ],
    testimonial: {
      text: "The deep cleaning service for our Ewa Beach home was exceptional. They removed years of salt buildup and our home looks brand new!",
      author: "Michael R., Ewa Beach Resident"
    }
  },
  {
    id: "hawaii-kai",
    name: "Hawaii Kai",
    description: "Hawaii Kai residents depend on our deep cleaning service to thoroughly refresh their beautiful homes. Our intensive cleaning restores every surface to its original sparkle.",
    faq: [
      {
        question: "Do you clean light fixtures during Hawaii Kai deep cleaning?",
        answer: "Yes, our deep cleaning includes detailed cleaning of light fixtures, ceiling fans, and all hard-to-reach areas throughout your Hawaii Kai home."
      },
      {
        question: "How do you ensure quality in Hawaii Kai deep cleaning?",
        answer: "Every Hawaii Kai deep cleaning follows our comprehensive checklist and includes a detailed quality inspection to ensure nothing is missed."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provided excellent deep cleaning for our Hawaii Kai home. Professional, thorough, and the results exceeded our expectations!",
      author: "Jennifer L., Hawaii Kai Resident"
    }
  },
  {
    id: "honolulu",
    name: "Honolulu",
    description: "Honolulu residents trust our deep cleaning service to thoroughly restore their city homes. We tackle urban grime and create a healthier living environment in the heart of the city.",
    faq: [
      {
        question: "What makes Honolulu deep cleaning different?",
        answer: "Honolulu deep cleaning addresses unique urban challenges like traffic dust, city grime, and high-traffic areas that need intensive attention."
      },
      {
        question: "Do you offer same-day deep cleaning in Honolulu?",
        answer: "We can often accommodate same-day deep cleaning for existing customers, subject to availability and the scope of work required."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans transformed our Honolulu condo with their deep cleaning service. Every detail was perfect and our home feels completely refreshed!",
      author: "Lisa W., Honolulu Resident"
    }
  },
  {
    id: "kailua",
    name: "Kailua",
    description: "Kailua families enjoy our comprehensive deep cleaning service that thoroughly restores their homes. Perfect for spring cleaning or preparing for special occasions.",
    faq: [
      {
        question: "Do you work with families in Kailua for deep cleaning?",
        answer: "Yes, we're family-friendly and use safe, eco-friendly products that are safe for children and pets during deep cleaning sessions."
      },
      {
        question: "Can you customize deep cleaning for Kailua homes?",
        answer: "Absolutely! We can focus on specific areas or adjust our deep cleaning checklist based on your Kailua home's unique needs and challenges."
      }
    ],
    testimonial: {
      text: "The deep cleaning service for our Kailua home was wonderful. Professional, thorough, and our family loves the fresh, clean environment!",
      author: "Amanda T., Kailua Resident"
    }
  },
  {
    id: "kapolei",
    name: "Kapolei",
    description: "Kapolei residents trust our deep cleaning service to thoroughly restore their homes. Our intensive cleaning tackles built-up grime and creates a healthier living environment.",
    faq: [
      {
        question: "How do you handle pets during Kapolei deep cleaning?",
        answer: "We're pet-friendly and can work around your pets during deep cleaning. We use pet-safe products and are experienced with various pet situations."
      },
      {
        question: "What if I need to reschedule my Kapolei deep cleaning?",
        answer: "We're flexible with rescheduling and require 24-hour notice. We understand life happens and work with you to find alternative times."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provided excellent deep cleaning for our Kapolei home. Thorough, professional, and the results were outstanding!",
      author: "David K., Kapolei Resident"
    }
  },
  {
    id: "makakilo",
    name: "Makakilo",
    description: "Makakilo families depend on our deep cleaning service to thoroughly restore their homes. Our intensive cleaning process creates a fresh, healthy living environment for your family.",
    faq: [
      {
        question: "Do you service both houses and condos for deep cleaning in Makakilo?",
        answer: "Yes, we provide comprehensive deep cleaning services for all types of properties including houses, condos, and townhomes."
      },
      {
        question: "How do you ensure quality in Makakilo deep cleaning?",
        answer: "Every Makakilo deep cleaning follows our detailed checklist and includes a comprehensive quality assurance process to guarantee thorough results."
      }
    ],
    testimonial: {
      text: "The deep cleaning service for our Makakilo home was exceptional. Professional, thorough, and our home looks absolutely amazing!",
      author: "Robert H., Makakilo Resident"
    }
  },
  {
    id: "mililani",
    name: "Mililani",
    description: "Mililani residents rely on our deep cleaning service to thoroughly restore their homes. Perfect for families who want a comprehensive refresh of their living space.",
    faq: [
      {
        question: "Do you work around Mililani school schedules?",
        answer: "Yes, we can schedule deep cleaning around school hours and family schedules for maximum convenience in Mililani."
      },
      {
        question: "What's your cancellation policy for Mililani deep cleaning?",
        answer: "We require 24-hour notice for cancellations, but we're flexible for emergencies and always work to reschedule rather than cancel."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been amazing for our Mililani home deep cleaning. Professional, thorough, and the results speak for themselves!",
      author: "Maria S., Mililani Resident"
    }
  },
  {
    id: "pearl-city",
    name: "Pearl City",
    description: "Pearl City families enjoy our comprehensive deep cleaning service that thoroughly restores their homes. Our intensive cleaning creates a fresh, healthy living environment.",
    faq: [
      {
        question: "Do you offer competitive rates for Pearl City deep cleaning?",
        answer: "Yes, we provide affordable, competitive rates for Pearl City residents while maintaining the highest service quality and thoroughness."
      },
      {
        question: "How reliable is your deep cleaning service in Pearl City?",
        answer: "We're committed to reliability and have a strong track record of consistent, high-quality deep cleaning services in Pearl City."
      }
    ],
    testimonial: {
      text: "The deep cleaning service for our Pearl City home was thorough and affordable. Great value and excellent results that exceeded our expectations!",
      author: "Carlos M., Pearl City Resident"
    }
  },
  {
    id: "waialae",
    name: "Waialae",
    description: "Waialae residents depend on our deep cleaning service to thoroughly restore their beautiful homes. Our intensive cleaning process is perfect for luxury properties with high-end finishes.",
    faq: [
      {
        question: "Do you handle luxury properties for deep cleaning in Waialae?",
        answer: "Yes, we specialize in deep cleaning for luxury homes and are experienced with high-end finishes, materials, and delicate surfaces."
      },
      {
        question: "Can you accommodate Waialae HOA requirements for deep cleaning?",
        answer: "Absolutely! We're familiar with Waialae HOA guidelines and ensure full compliance for deep cleaning services."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provides exceptional deep cleaning for our Waialae home. Perfect service for our luxury property with incredible attention to detail!",
      author: "James L., Waialae Resident"
    }
  },
  {
    id: "waikiki",
    name: "Waikiki",
    description: "Waikiki residents trust our deep cleaning service to thoroughly restore their homes. Our intensive cleaning tackles the unique challenges of high-humidity living and creates a fresh environment.",
    faq: [
      {
        question: "Do you service condos for deep cleaning in Waikiki?",
        answer: "Yes, we provide comprehensive deep cleaning services for both condos and apartments throughout Waikiki."
      },
      {
        question: "How do you handle Waikiki's high humidity during deep cleaning?",
        answer: "We use specialized techniques and products to address Waikiki's humidity challenges, ensuring your home stays fresh and properly sanitized."
      }
    ],
    testimonial: {
      text: "The deep cleaning service for our Waikiki condo was exceptional. Professional, thorough, and perfect for our busy lifestyle!",
      author: "Nancy P., Waikiki Resident"
    }
  },
  {
    id: "waimanalo",
    name: "Waimanalo",
    description: "Waimanalo families rely on our deep cleaning service to thoroughly restore their homes. Our intensive cleaning process creates a fresh, healthy living environment perfect for family life.",
    faq: [
      {
        question: "Do you work with families in Waimanalo for deep cleaning?",
        answer: "Yes, we're family-friendly and use safe, eco-friendly products that are safe for children and pets during deep cleaning sessions."
      },
      {
        question: "Can you schedule around Waimanalo work hours for deep cleaning?",
        answer: "Absolutely! We offer flexible scheduling including early morning, evening, and weekend appointments to fit your schedule."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provides excellent deep cleaning for our Waimanalo home. Professional service and our family loves the fresh, clean environment!",
      author: "Patricia D., Waimanalo Resident"
    }
  },
  {
    id: "waipahu",
    name: "Waipahu",
    description: "Waipahu residents enjoy our comprehensive deep cleaning service that thoroughly restores their homes. Our intensive cleaning creates a fresh, healthy living environment for diverse families.",
    faq: [
      {
        question: "Do you work with diverse families in Waipahu for deep cleaning?",
        answer: "Yes, we're experienced with diverse family needs and can customize our deep cleaning service to accommodate various cultural preferences and requirements."
      },
      {
        question: "How do you ensure consistency in Waipahu deep cleaning?",
        answer: "Every Waipahu deep cleaning follows our detailed checklist and quality control measures to ensure thorough, consistent results every time."
      }
    ],
    testimonial: {
      text: "The deep cleaning service for our Waipahu home was thorough and professional. Excellent service and our family loves the completely refreshed environment!",
      author: "Susan B., Waipahu Resident"
    }
  }
];

const DeepCleaningOahuPage = () => {
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
        <title>Deep Cleaning Service Oahu | Red Rock Cleans</title>
        <meta name="description" content="Restore your home's sparkle with our thorough deep cleaning service on Oahu. Red Rock Cleans tackles built-up grime for a truly refreshed home in Honolulu and beyond. Get your free quote!" />
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
                alt="Professional deep cleaning service in an Oahu home with beautiful Hawaiian landscape views"
                className="w-full h-full object-cover scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">{t('oahu.deep.h1')}</h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                  Restore freshness and tackle built-up grime with our comprehensive deep cleaning service. Perfect for a one-time intensive clean to make any Oahu home feel new again, creating a healthier living environment for your family.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="h-14 text-lg px-8" asChild>
                    <Link to="/book-now-oahu">
                      <Calendar className="w-5 h-5 mr-2" />
                      {t('oahu.deep.schedule')}
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="h-14 text-lg px-8" asChild>
                    <Link to="/oahu-calculator">
                      <Home className="w-5 h-5 mr-2" />
                      {t('oahu.deep.quote')}
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Our Comprehensive Deep Cleaning Checklist */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t('oahu.deep.checklistTitle')}</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <CheckCircle className="w-6 h-6 text-primary mr-3" />
                      Intensive Surface Cleaning
                    </h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Clean inside all cabinets and drawers
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Detailed cleaning of baseboards and trim
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Clean light fixtures and ceiling fans
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Remove sand and salt buildup from windows
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Clean inside appliances (oven, microwave, refrigerator)
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <CheckCircle className="w-6 h-6 text-primary mr-3" />
                      Detailed Sanitization
                    </h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Detailed grout scrubbing and sanitization
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Clean window tracks and sills thoroughly
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Deep clean inside closets and storage areas
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Sanitize all door handles and light switches
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Clean and polish all mirrors and glass surfaces
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* The Perfect Solution for a Healthier Home */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t('oahu.deep.healthTitle')}</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center p-6 bg-background rounded-lg shadow-sm">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Zap className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Remove Built-Up Allergens</h3>
                    <p className="text-muted-foreground">
                      Our deep cleaning eliminates dust, allergens, and built-up grime that standard cleaning can't reach, creating a healthier living environment for your family.
                    </p>
                  </div>
                  <div className="text-center p-6 bg-background rounded-lg shadow-sm">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Fresh, Clean Environment</h3>
                    <p className="text-muted-foreground">
                      Experience the satisfaction of a completely refreshed home where every surface sparkles and every corner feels clean and inviting.
                    </p>
                  </div>
                  <div className="text-center p-6 bg-background rounded-lg shadow-sm">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Professional Expertise</h3>
                    <p className="text-muted-foreground">
                      Our trained professionals use specialized techniques and equipment to tackle the toughest cleaning challenges, ensuring thorough results every time.
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
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t('oahu.deep.areasTitle')}</h2>
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
                            Professional deep cleaning services
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
                              Schedule Your {neighborhood.name} Deep Cleaning
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
                <h2 className="text-3xl md:text-4xl font-bold mb-8">{t('oahu.deep.otherServicesTitle')}</h2>
                <p className="text-xl text-muted-foreground mb-12">
                  Beyond deep cleaning, we offer specialized services to meet all your Oahu property needs.
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
                  <Link to="/oahu/move-out-cleaning-services/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Move Out Cleaning Services
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Thorough end-of-tenancy cleaning to secure your security deposit.
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
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t('oahu.deep.faqTitle')}</h2>
                <div className="space-y-6">
                  <div className="border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3">How is a deep clean different from a standard clean?</h3>
                    <p className="text-muted-foreground">
                      Deep cleaning includes intensive tasks like cleaning inside cabinets and appliances, detailed baseboard cleaning, light fixture cleaning, grout scrubbing, and removing built-up grime that standard cleaning doesn't cover.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3">What is the average price for a deep clean in Honolulu?</h3>
                    <p className="text-muted-foreground">
                      Deep cleaning prices vary based on home size, specific needs, and the scope of work required. Contact us for a free, personalized quote tailored to your Honolulu home.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3">How often should I get a deep cleaning for my home on Oahu?</h3>
                    <p className="text-muted-foreground">
                      We recommend deep cleaning every 3-6 months, or more frequently if you have pets, allergies, or high-traffic areas. It's also perfect for spring cleaning or before special occasions.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3">How long does a deep cleaning typically take?</h3>
                    <p className="text-muted-foreground">
                      Deep cleaning typically takes 4-6 hours depending on home size and specific requirements. We'll provide a detailed time estimate during your free consultation.
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('oahu.deep.finalCtaTitle')}</h2>
                <p className="text-xl mb-8 opacity-90">
                  Join hundreds of satisfied Oahu residents who trust Red Rock Cleans for thorough, professional deep cleaning services that transform their homes into fresh, healthy living spaces.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" className="h-14 text-lg px-8" asChild>
                    <Link to="/book-now-oahu">
                      <Calendar className="w-5 h-5 mr-2" />
                      {t('oahu.deep.schedule')}
                    </Link>
                  </Button>
                  <Button size="lg" variant="cta" className="h-14 text-lg px-8" asChild>
                    <Link to="/oahu-calculator">
                      <Home className="w-5 h-5 mr-2" />
                      {t('oahu.deep.quote')}
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

export default DeepCleaningOahuPage;

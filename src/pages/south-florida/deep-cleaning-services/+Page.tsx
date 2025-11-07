import { SouthFloridaNavigation } from "@/components/SouthFloridaNavigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Clock, Shield, Star, Users, Calendar, Home, Sparkles, DollarSign, Key, RefreshCw, Heart, Clock4, Zap, HardHat, Hammer } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Hreflang from "@/components/Hreflang";
import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import { DeepCleaningChecklistSection } from "@/components/DeepCleaningChecklistSection";

const cities = [
  {
    id: "aventura",
    name: "Aventura",
    description: "Aventura residents trust our professional deep cleaning service to restore their luxury homes to pristine condition. Our intensive cleaning process tackles built-up grime and prepares homes for special events or seasonal transitions.",
    faq: [
      {
        question: "Do you offer deep cleaning for luxury homes in Aventura?",
        answer: "Yes, we specialize in luxury home deep cleaning and are experienced with high-end finishes, premium materials, and luxury property standards in Aventura."
      },
      {
        question: "How often should I schedule deep cleaning in Aventura?",
        answer: "Most Aventura homeowners schedule deep cleaning 2-4 times per year, especially before holidays, parties, or seasonal transitions to maintain their luxury lifestyle."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans transformed our Aventura home with their deep cleaning service. Every surface sparkles and our luxury finishes look brand new!",
      author: "Sarah M., Aventura Resident"
    }
  },
  {
    id: "cooper-city",
    name: "Cooper City",
    description: "Cooper City families rely on our comprehensive deep cleaning service to tackle built-up grime and restore their homes to like-new condition. Perfect for preparing for special occasions or seasonal deep cleans.",
    faq: [
      {
        question: "What's included in deep cleaning for Cooper City homes?",
        answer: "Our Cooper City deep cleaning includes baseboards, inside cabinets and appliances, light fixtures, detailed grout scrubbing, and tackling humidity-related buildup common in South Florida."
      },
      {
        question: "How long does deep cleaning take in Cooper City?",
        answer: "Deep cleaning typically takes 4-8 hours depending on home size and scope. We'll provide a detailed timeline during your free consultation."
      }
    ],
    testimonial: {
      text: "The deep cleaning service for our Cooper City home was exceptional. They tackled areas we hadn't cleaned in years and our home feels brand new!",
      author: "Michael R., Cooper City Family"
    }
  },
  {
    id: "dania-beach",
    name: "Dania Beach",
    description: "Dania Beach homeowners enjoy our thorough deep cleaning service that addresses the unique challenges of coastal living. We tackle salt air buildup, humidity-related grime, and restore homes to pristine condition.",
    faq: [
      {
        question: "Do you handle salt air buildup in Dania Beach homes?",
        answer: "Yes, we're experienced with coastal conditions and specifically address salt air buildup, humidity-related grime, and other challenges unique to Dania Beach coastal living."
      },
      {
        question: "How do you ensure quality in Dania Beach deep cleaning?",
        answer: "Every Dania Beach deep cleaning follows our detailed checklist and includes a comprehensive quality assurance process to guarantee satisfactory results every time."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been amazing for our Dania Beach home. They handle the coastal challenges and our home looks absolutely pristine!",
      author: "Robert H., Dania Beach Homeowner"
    }
  },
  {
    id: "davie",
    name: "Davie",
    description: "Davie families depend on our professional deep cleaning service to restore their homes and tackle built-up grime from busy family life. Our intensive process creates a healthier living environment for the whole family.",
    faq: [
      {
        question: "Can you work around my Davie family's schedule for deep cleaning?",
        answer: "Absolutely! We offer flexible scheduling for Davie families, including weekends and evenings. We'll find a time that works perfectly with your family's routine."
      },
      {
        question: "Do you use eco-friendly products for deep cleaning in Davie?",
        answer: "Yes, we use eco-friendly, non-toxic deep cleaning products that are safe for your family and pets while effectively removing built-up grime and allergens."
      }
    ],
    testimonial: {
      text: "The deep cleaning service for our Davie home was wonderful. Professional, thorough, and our family's allergies have improved significantly!",
      author: "Lisa W., Davie Family"
    }
  },
  {
    id: "fort-lauderdale",
    name: "Fort Lauderdale",
    description: "Fort Lauderdale residents trust our professional deep cleaning service to restore their homes to pristine condition. Our comprehensive process tackles built-up grime, allergens, and prepares homes for special events or seasonal transitions.",
    faq: [
      {
        question: "What is the average price for a deep clean in Fort Lauderdale?",
        answer: "Deep cleaning costs vary based on home size, specific needs, and scope of work. Contact us for a personalized quote tailored to your Fort Lauderdale property."
      },
      {
        question: "How is a deep clean different from a standard clean?",
        answer: "Deep cleaning includes intensive tasks like baseboards, inside cabinets and appliances, light fixtures, detailed grout scrubbing, and tackling built-up grime not covered in standard cleaning."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our Fort Lauderdale home for years. Their deep cleaning service is thorough and our home always looks amazing!",
      author: "Jennifer L., Fort Lauderdale Resident"
    }
  },
  {
    id: "hallandale-beach",
    name: "Hallandale Beach",
    description: "Hallandale Beach families enjoy our comprehensive deep cleaning service that addresses humidity-related buildup and creates a healthier living environment. Perfect for families who want to tackle built-up grime and allergens.",
    faq: [
      {
        question: "Do you work with families in Hallandale Beach for deep cleaning?",
        answer: "Yes, we're experienced with family homes and can work around your family's schedule while maintaining professional deep cleaning standards for your Hallandale Beach property."
      },
      {
        question: "Can you customize deep cleaning for Hallandale Beach homes?",
        answer: "Absolutely! We can adapt our deep cleaning checklist based on your Hallandale Beach home's unique features and your family's specific needs and concerns."
      }
    ],
    testimonial: {
      text: "The deep cleaning service for our Hallandale Beach home has been excellent. Professional, family-friendly, and our home is so much healthier now!",
      author: "Amanda T., Hallandale Beach Family"
    }
  },
  {
    id: "hollywood",
    name: "Hollywood",
    description: "Hollywood residents rely on our professional deep cleaning service to restore their homes and tackle built-up grime from busy lifestyles. Our intensive process creates a healthier living environment in the entertainment capital.",
    faq: [
      {
        question: "How flexible is your Hollywood deep cleaning schedule?",
        answer: "We offer very flexible scheduling for Hollywood residents, including weekends and evenings. We'll work with your entertainment industry schedule or regular work hours."
      },
      {
        question: "Do you offer same-day deep cleaning in Hollywood?",
        answer: "We can often accommodate urgent deep cleaning requests for Hollywood properties, subject to availability and your specific cleaning needs."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provides excellent deep cleaning for our Hollywood home. Flexible scheduling and thorough results - perfect for our busy lifestyle!",
      author: "David K., Hollywood Resident"
    }
  },
  {
    id: "las-olas",
    name: "Las Olas",
    description: "Las Olas residents trust our professional deep cleaning service to maintain their luxury downtown homes. Our high-end cleaning standards match the prestige of this vibrant area and tackle built-up grime from urban living.",
    faq: [
      {
        question: "Do you handle luxury homes in Las Olas for deep cleaning?",
        answer: "Yes, we specialize in luxury home deep cleaning and are experienced with high-end finishes, premium materials, and luxury property standards in Las Olas."
      },
      {
        question: "Can you accommodate Las Olas HOA requirements for deep cleaning?",
        answer: "Absolutely! We're familiar with Las Olas HOA guidelines and ensure full compliance for all deep cleaning services while maintaining our luxury standards."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provides exceptional deep cleaning for our Las Olas luxury home. Perfect service for our high-end downtown lifestyle!",
      author: "James L., Las Olas Resident"
    }
  },
  {
    id: "lauderdale-lakes",
    name: "Lauderdale Lakes",
    description: "Lauderdale Lakes families depend on our professional deep cleaning service to restore their homes and tackle built-up grime from busy family life. Our comprehensive process creates a healthier living environment.",
    faq: [
      {
        question: "Do you work around Lauderdale Lakes schedules for deep cleaning?",
        answer: "Yes, we can schedule deep cleaning around work commitments and family schedules while maintaining professional service standards for Lauderdale Lakes residents."
      },
      {
        question: "What's your cancellation policy for Lauderdale Lakes deep cleaning?",
        answer: "We require 24-hour notice for cancellations, but we're flexible for emergencies and always work to find alternative solutions that meet your timeline."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been amazing for our Lauderdale Lakes home. Their deep cleaning service helps us maintain a healthy family environment!",
      author: "Maria S., Lauderdale Lakes Family"
    }
  },
  {
    id: "lauderhill",
    name: "Lauderhill",
    description: "Lauderhill families enjoy our comprehensive deep cleaning service that tackles built-up grime and creates a healthier living environment. Perfect for families who want to address allergens and restore their home's freshness.",
    faq: [
      {
        question: "Do you offer competitive rates for Lauderhill deep cleaning?",
        answer: "Yes, we provide affordable, competitive rates for Lauderhill deep cleaning while maintaining the highest service quality and thoroughness."
      },
      {
        question: "How reliable is your Lauderhill deep cleaning service?",
        answer: "We're committed to reliability and have a strong track record of consistent, high-quality deep cleaning services in Lauderhill with professional, trustworthy cleaners."
      }
    ],
    testimonial: {
      text: "The deep cleaning service for our Lauderhill home has been thorough and affordable. Great value and our family's health has improved!",
      author: "Carlos M., Lauderhill Family"
    }
  },
  {
    id: "margate",
    name: "Margate",
    description: "Margate families rely on our professional deep cleaning service to restore their homes and tackle built-up grime from busy family life. Our intensive process creates a healthier living environment for the whole family.",
    faq: [
      {
        question: "Do you service both houses and condos in Margate for deep cleaning?",
        answer: "Yes, we provide comprehensive deep cleaning services for all types of properties including houses, condos, and townhomes in Margate."
      },
      {
        question: "How do you ensure quality in Margate deep cleaning?",
        answer: "Every Margate deep cleaning follows our detailed checklist and includes a comprehensive quality assurance process to guarantee satisfactory results every time."
      }
    ],
    testimonial: {
      text: "The deep cleaning service for our Margate home has been exceptional. Professional, thorough, and our family loves the fresh, clean environment!",
      author: "Robert H., Margate Family"
    }
  },
  {
    id: "miramar",
    name: "Miramar",
    description: "Miramar families trust our professional deep cleaning service to tackle built-up grime and restore their homes to like-new condition. Our comprehensive process addresses the unique needs of suburban family living.",
    faq: [
      {
        question: "What makes Miramar deep cleaning different?",
        answer: "Miramar deep cleaning addresses the unique needs of suburban families, including family-oriented cleaning approaches and diverse property types throughout the area."
      },
      {
        question: "Do you offer same-day deep cleaning in Miramar?",
        answer: "Yes, we can often accommodate urgent deep cleaning requests for Miramar properties, subject to availability and your specific cleaning needs."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been our go-to deep cleaning service for our Miramar home. Reliable, professional, and our family is always impressed!",
      author: "Lisa W., Miramar Family"
    }
  },
  {
    id: "north-lauderdale",
    name: "North Lauderdale",
    description: "North Lauderdale families depend on our professional deep cleaning service to restore their homes and tackle built-up grime from busy family life. Our comprehensive process creates a healthier living environment.",
    faq: [
      {
        question: "Do you work around North Lauderdale schedules for deep cleaning?",
        answer: "Yes, we can schedule deep cleaning around work commitments and family schedules while maintaining professional service standards for North Lauderdale residents."
      },
      {
        question: "What's your cancellation policy for North Lauderdale deep cleaning?",
        answer: "We require 24-hour notice for cancellations, but we're flexible for emergencies and always work to find alternative solutions that meet your timeline."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been amazing for our North Lauderdale home. Their deep cleaning service helps us maintain a healthy family environment!",
      author: "Maria S., North Lauderdale Family"
    }
  },
  {
    id: "pembroke-pines",
    name: "Pembroke Pines",
    description: "Pembroke Pines families enjoy our comprehensive deep cleaning service that tackles built-up grime and creates a healthier living environment. Perfect for families who want to address allergens and restore their home's freshness.",
    faq: [
      {
        question: "Do you offer competitive rates for Pembroke Pines deep cleaning?",
        answer: "Yes, we provide affordable, competitive rates for Pembroke Pines deep cleaning while maintaining the highest service quality and thoroughness."
      },
      {
        question: "How reliable is your Pembroke Pines deep cleaning service?",
        answer: "We're committed to reliability and have a strong track record of consistent, high-quality deep cleaning services in Pembroke Pines with professional, trustworthy cleaners."
      }
    ],
    testimonial: {
      text: "The deep cleaning service for our Pembroke Pines home has been thorough and affordable. Great value and our family's health has improved!",
      author: "Carlos M., Pembroke Pines Family"
    }
  },
  {
    id: "plantation",
    name: "Plantation",
    description: "Plantation families rely on our professional deep cleaning service to restore their homes and tackle built-up grime from busy family life. Our intensive process creates a healthier living environment for the whole family.",
    faq: [
      {
        question: "Do you service both houses and condos in Plantation for deep cleaning?",
        answer: "Yes, we provide comprehensive deep cleaning services for all types of properties including houses, condos, and townhomes in Plantation."
      },
      {
        question: "How do you ensure quality in Plantation deep cleaning?",
        answer: "Every Plantation deep cleaning follows our detailed checklist and includes a comprehensive quality assurance process to guarantee satisfactory results every time."
      }
    ],
    testimonial: {
      text: "The deep cleaning service for our Plantation home has been exceptional. Professional, thorough, and our family loves the fresh, clean environment!",
      author: "Robert H., Plantation Family"
    }
  },
  {
    id: "southwest-ranches",
    name: "Southwest Ranches",
    description: "Southwest Ranches families trust our professional deep cleaning service to tackle built-up grime in their spacious homes and restore them to pristine condition. Our comprehensive process addresses the unique challenges of rural-suburban living.",
    faq: [
      {
        question: "How do you handle large homes in Southwest Ranches for deep cleaning?",
        answer: "We're experienced with large homes and can deploy multiple cleaners to handle extensive deep cleaning efficiently while maintaining our high quality standards."
      },
      {
        question: "What if I need to reschedule my Southwest Ranches deep cleaning?",
        answer: "We're flexible with rescheduling and work closely with Southwest Ranches families to accommodate schedule changes while maintaining quality standards."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provides excellent deep cleaning for our Southwest Ranches home. Consistent quality and our large property looks absolutely pristine!",
      author: "David K., Southwest Ranches Family"
    }
  },
  {
    id: "sunny-isles-beach",
    name: "Sunny Isles Beach",
    description: "Sunny Isles Beach residents trust our professional deep cleaning service to maintain their luxury beachfront homes. Our high-end cleaning standards match the prestige of this area and tackle salt air buildup and humidity-related grime.",
    faq: [
      {
        question: "Do you handle luxury beachfront homes in Sunny Isles Beach for deep cleaning?",
        answer: "Yes, we specialize in luxury home deep cleaning and are experienced with high-end finishes, premium materials, and beachfront property standards in Sunny Isles Beach."
      },
      {
        question: "Can you accommodate Sunny Isles Beach HOA requirements for deep cleaning?",
        answer: "Absolutely! We're familiar with Sunny Isles Beach HOA guidelines and ensure full compliance for all deep cleaning services while maintaining our luxury standards."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provides exceptional deep cleaning for our Sunny Isles Beach luxury home. Perfect service for our beachfront lifestyle!",
      author: "James L., Sunny Isles Beach Resident"
    }
  },
  {
    id: "sunrise",
    name: "Sunrise",
    description: "Sunrise families depend on our professional deep cleaning service to restore their homes and tackle built-up grime from busy family life. Our comprehensive process creates a healthier living environment and peace of mind.",
    faq: [
      {
        question: "Do you work around Sunrise schedules for deep cleaning?",
        answer: "Yes, we can schedule deep cleaning around work commitments and family schedules while maintaining professional service standards for Sunrise residents."
      },
      {
        question: "What's your cancellation policy for Sunrise deep cleaning?",
        answer: "We require 24-hour notice for cancellations, but we're flexible for emergencies and always work to find alternative solutions that meet your timeline."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been amazing for our Sunrise home. Their deep cleaning service helps us maintain a healthy family environment!",
      author: "Maria S., Sunrise Family"
    }
  },
  {
    id: "tamarac",
    name: "Tamarac",
    description: "Tamarac families enjoy our comprehensive deep cleaning service that tackles built-up grime and creates a healthier living environment. Perfect for families who want to address allergens and restore their home's freshness.",
    faq: [
      {
        question: "Do you offer competitive rates for Tamarac deep cleaning?",
        answer: "Yes, we provide affordable, competitive rates for Tamarac deep cleaning while maintaining the highest service quality and thoroughness."
      },
      {
        question: "How reliable is your Tamarac deep cleaning service?",
        answer: "We're committed to reliability and have a strong track record of consistent, high-quality deep cleaning services in Tamarac with professional, trustworthy cleaners."
      }
    ],
    testimonial: {
      text: "The deep cleaning service for our Tamarac home has been thorough and affordable. Great value and our family's health has improved!",
      author: "Carlos M., Tamarac Family"
    }
  },
  {
    id: "weston",
    name: "Weston",
    description: "Weston families trust our professional deep cleaning service to restore their beautiful homes and tackle built-up grime from busy suburban life. Our comprehensive process creates a healthier living environment for the whole family.",
    faq: [
      {
        question: "Do you work with families in Weston for deep cleaning?",
        answer: "Yes, we're experienced with family homes and can work around your family's schedule while maintaining professional deep cleaning standards for your Weston property."
      },
      {
        question: "Can you customize deep cleaning for Weston homes?",
        answer: "Absolutely! We can adapt our deep cleaning checklist based on your Weston home's unique features and your family's specific needs and concerns."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our Weston home for over a year. Their deep cleaning service is thorough and our family loves the healthy environment!",
      author: "Jennifer L., Weston Family"
    }
  }
];

const DeepCleaningSouthFloridaPage = () => {
  const [openItem, setOpenItem] = useState<string>("");
  const { t } = useTranslation();

  useEffect(() => {
    const hash = window.location.hash.substring(1); // Remove the # symbol
    if (hash && cities.some(c => c.id === hash)) {
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
      if (hash && cities.some(c => c.id === hash)) {
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
        <title>Deep Cleaning Service South Florida | Red Rock Cleans</title>
        <meta name="description" content="Professional deep cleaning in South Florida. Complete home cleaning in Fort Lauderdale, Weston & Aventura. Eliminate grime & restore your sparkle." />
      </Helmet>
      <Hreflang />
      
      <div className="min-h-screen flex flex-col">
        <SouthFloridaNavigation loginUrl="https://customer-portal.maidily.com/red-rock-cleans-south-florida/sign-in" bookingUrl="/book-now-south-florida" />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative py-24 md:py-32 overflow-hidden">
            <div className="absolute inset-0">
              <img 
                src="/src/assets/service-products.jpg" 
                alt="Professional deep cleaning service in a South Florida home with beautiful landscape views"
                className="w-full h-full object-cover scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">{t('southFlorida.deep.h1')}</h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                  Our deep cleaning service restores a home's freshness by tackling built-up grime, perfect for a one-time intensive clean to prepare for events or seasons in South Florida. Experience the transformation of a truly refreshed home that sparkles from top to bottom.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="h-14 text-lg px-8" asChild>
                    <Link to="/book-now-south-florida">
                      <Calendar className="w-5 h-5 mr-2" />
                      {t('southFlorida.deep.schedule')}
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="h-14 text-lg px-8" asChild>
                    <Link to="/south-florida-calculator">
                      <Home className="w-5 h-5 mr-2" />
                      {t('southFlorida.deep.quote')}
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <DeepCleaningChecklistSection
            intro={t('checklists.deepCleaning.introWithLocation', { location: 'South Florida' })}
          />

          {/* The Perfect Solution for a Healthier Home */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t('southFlorida.deep.healthTitle')}</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center p-6 bg-background rounded-lg shadow-sm">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Remove Built-up Allergens</h3>
                    <p className="text-muted-foreground">
                      Our deep cleaning process removes built-up dust, allergens, and grime that regular cleaning misses, creating a healthier living environment for your family in the humid South Florida climate.
                    </p>
                  </div>
                  <div className="text-center p-6 bg-background rounded-lg shadow-sm">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Healthier Living Environment</h3>
                    <p className="text-muted-foreground">
                      Tackle humidity-related buildup, mold prevention, and allergen removal to create a cleaner, healthier home that's especially important in South Florida's climate.
                    </p>
                  </div>
                  <div className="text-center p-6 bg-background rounded-lg shadow-sm">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Star className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Like-New Freshness</h3>
                    <p className="text-muted-foreground">
                      Experience the transformation of a truly refreshed home that sparkles from top to bottom. Perfect for preparing for special events, seasonal transitions, or simply enjoying a pristine living space.
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
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t('southFlorida.deep.areasTitle')}</h2>
                <Accordion type="single" collapsible value={openItem} onValueChange={setOpenItem} className="space-y-4">
                  {cities.map((city) => (
                    <AccordionItem 
                      key={city.id} 
                      value={city.id} 
                      id={city.id}
                      className="border rounded-lg px-6"
                    >
                      <AccordionTrigger className="text-left hover:no-underline">
                        <div>
                          <h3 className="text-lg font-semibold">{city.name}</h3>
                          <p className="text-sm text-muted-foreground font-normal">
                            Professional deep cleaning services
                          </p>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pt-4">
                        <div className="space-y-6">
                          <p className="text-muted-foreground leading-relaxed">
                            {city.description}
                          </p>
                          
                          <div className="space-y-4">
                            <h4 className="font-semibold">Local FAQ</h4>
                            {city.faq.map((item, index) => (
                              <div key={index} className="border-l-2 border-primary/20 pl-4">
                                <h5 className="font-medium text-sm">{item.question}</h5>
                                <p className="text-sm text-muted-foreground mt-1">{item.answer}</p>
                              </div>
                            ))}
                          </div>

                          <blockquote className="border-l-4 border-primary/30 pl-4 italic text-muted-foreground">
                            "{city.testimonial.text}"
                            <footer className="mt-2 text-sm font-medium not-italic">
                              — {city.testimonial.author}
                            </footer>
                          </blockquote>

                          <Button asChild className="w-full">
                            <Link to="/book-now-south-florida">
                              Schedule Your {city.name} Deep Cleaning
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
                <h2 className="text-3xl md:text-4xl font-bold mb-8">{t('southFlorida.deep.otherServicesTitle')}</h2>
                <p className="text-xl text-muted-foreground mb-12">
                  Beyond deep cleaning, we offer specialized services to meet all your South Florida property needs.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Link to="/south-florida/standard-cleaning-services/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Standard Cleaning Services
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Regular maintenance cleaning for consistent home cleanliness.
                      </p>
                    </div>
                  </Link>
                  <Link to="/south-florida/move-out-cleaning-services/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Move Out Cleaning Services
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Thorough end-of-tenancy cleaning to secure your security deposit.
                      </p>
                    </div>
                  </Link>
                  <Link to="/south-florida/airbnb-cleaning-services/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Airbnb Cleaning Services
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Professional turnover cleaning for vacation rental properties.
                      </p>
                    </div>
                  </Link>
                  <Link to="/south-florida/post-construction-cleaning-services/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Post Construction Cleaning Services
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Professional cleanup for new builds and renovation projects.
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
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t('southFlorida.deep.faqTitle')}</h2>
                <div className="space-y-6">
                  <div className="border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3">How is a deep clean different from a standard clean?</h3>
                    <p className="text-muted-foreground">
                      Deep cleaning includes intensive tasks like cleaning baseboards, inside cabinets and appliances, light fixtures, detailed grout scrubbing, and tackling built-up grime that are not covered in standard cleaning services.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3">What is the average price for a deep clean in Fort Lauderdale?</h3>
                    <p className="text-muted-foreground">
                      Deep cleaning costs vary based on home size, specific needs, and scope of work. Contact us for a personalized quote tailored to your Fort Lauderdale property and requirements.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3">How long does a deep cleaning service take?</h3>
                    <p className="text-muted-foreground">
                      Deep cleaning typically takes 4-8 hours depending on home size and scope. We'll provide a detailed timeline during your free consultation to ensure we meet your expectations.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3">How often should I schedule deep cleaning?</h3>
                    <p className="text-muted-foreground">
                      Most South Florida homeowners schedule deep cleaning 2-4 times per year, especially before holidays, parties, or seasonal transitions to maintain their home's freshness and health.
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('southFlorida.deep.finalCtaTitle')}</h2>
                <p className="text-xl mb-8 opacity-90">
                  Join hundreds of satisfied South Florida homeowners who trust Red Rock Cleans for thorough deep cleaning services that transform their homes and create healthier living environments.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" className="h-14 text-lg px-8" asChild>
                    <Link to="/book-now-south-florida">
                      <Calendar className="w-5 h-5 mr-2" />
                      {t('southFlorida.deep.schedule')}
                    </Link>
                  </Button>
                  <Button size="lg" variant="cta" className="h-14 text-lg px-8" asChild>
                    <Link to="/south-florida-calculator">
                      <Home className="w-5 h-5 mr-2" />
                      {t('southFlorida.deep.quote')}
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

export default DeepCleaningSouthFloridaPage;

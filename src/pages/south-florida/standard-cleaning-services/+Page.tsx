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

const cities = [
  {
    id: "aventura",
    name: "Aventura",
    description: "Aventura residents trust our professional standard cleaning service to maintain their beautiful homes while they enjoy the luxury lifestyle this prestigious area offers. Our flexible scheduling works around your busy schedule.",
    faq: [
      {
        question: "Do you offer weekly house cleaning in Aventura?",
        answer: "Yes, we provide flexible weekly, bi-weekly, and monthly standard cleaning services in Aventura. We'll work with your schedule to find the perfect cleaning frequency."
      },
      {
        question: "Are your Aventura cleaners professionally vetted?",
        answer: "Absolutely! All our Aventura cleaning professionals are thoroughly vetted, background-checked, and trained to meet our high standards for luxury home cleaning."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our Aventura home for over a year. Professional, reliable, and our home always looks perfect!",
      author: "Sarah M., Aventura Resident"
    }
  },
  {
    id: "cooper-city",
    name: "Cooper City",
    description: "Cooper City families rely on our consistent standard cleaning service to keep their homes tidy while they focus on work and family activities. Our professional cleaners understand the needs of busy families.",
    faq: [
      {
        question: "Do I need to be home for my Cooper City cleaning service?",
        answer: "No, you don't need to be home. We can work around your schedule and have secure access procedures to clean your Cooper City home while you're away."
      },
      {
        question: "What's included in your Cooper City standard cleaning?",
        answer: "Our Cooper City standard cleaning includes dusting, vacuuming, mopping, bathroom sanitizing, kitchen cleaning, and trash removal. We'll customize based on your specific needs."
      }
    ],
    testimonial: {
      text: "The standard cleaning service for our Cooper City home has been a lifesaver. Consistent quality and our family loves coming home to a clean house!",
      author: "Michael R., Cooper City Family"
    }
  },
  {
    id: "dania-beach",
    name: "Dania Beach",
    description: "Dania Beach homeowners enjoy our reliable standard cleaning service that keeps their coastal homes fresh and tidy. Perfect for those who want to spend more time at the beach than cleaning.",
    faq: [
      {
        question: "Do you use eco-friendly cleaning supplies in Dania Beach?",
        answer: "Yes, we use eco-friendly, non-toxic cleaning supplies that are safe for your family and the environment in Dania Beach. We can also accommodate specific product preferences."
      },
      {
        question: "How reliable is your Dania Beach cleaning service?",
        answer: "We're committed to reliability and have a strong track record of consistent, high-quality standard cleaning services in Dania Beach with professional, trustworthy cleaners."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been amazing for our Dania Beach home. Professional, eco-friendly, and our coastal lifestyle is so much more enjoyable now!",
      author: "Robert H., Dania Beach Homeowner"
    }
  },
  {
    id: "davie",
    name: "Davie",
    description: "Davie families depend on our professional standard cleaning service to maintain their homes while balancing work and family life. Our flexible scheduling accommodates busy suburban lifestyles.",
    faq: [
      {
        question: "Can you work around my Davie family's schedule?",
        answer: "Absolutely! We offer flexible scheduling for Davie families, including weekends and evenings. We'll find a time that works perfectly with your family's routine."
      },
      {
        question: "Do you offer bi-weekly cleaning in Davie?",
        answer: "Yes, we offer weekly, bi-weekly, and monthly standard cleaning services in Davie. We'll help you choose the frequency that best fits your lifestyle and budget."
      }
    ],
    testimonial: {
      text: "The standard cleaning service for our Davie home has been wonderful. Professional, flexible, and our family has more time together!",
      author: "Lisa W., Davie Family"
    }
  },
  {
    id: "fort-lauderdale",
    name: "Fort Lauderdale",
    description: "Fort Lauderdale residents trust our professional standard cleaning service to maintain their beautiful homes while they enjoy the vibrant city life. Our reliable cleaners understand the needs of busy professionals and families.",
    faq: [
      {
        question: "What is the price for weekly house cleaning in Fort Lauderdale?",
        answer: "Our Fort Lauderdale weekly cleaning rates vary based on home size and specific needs. Contact us for a personalized quote that fits your budget and requirements."
      },
      {
        question: "Do you offer same-day cleaning in Fort Lauderdale?",
        answer: "We can often accommodate same-day cleaning requests in Fort Lauderdale, subject to availability. We recommend booking in advance for the best scheduling options."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our Fort Lauderdale home for months. Professional, affordable, and our home always looks spotless!",
      author: "Jennifer L., Fort Lauderdale Resident"
    }
  },
  {
    id: "hallandale-beach",
    name: "Hallandale Beach",
    description: "Hallandale Beach families enjoy our consistent standard cleaning service that keeps their homes tidy while they focus on work and enjoying the beach lifestyle. Perfect for busy professionals and families.",
    faq: [
      {
        question: "Do you work with families in Hallandale Beach?",
        answer: "Yes, we're experienced with family homes and can work around your family's schedule while maintaining professional cleaning standards for your Hallandale Beach property."
      },
      {
        question: "Can you customize cleaning for Hallandale Beach homes?",
        answer: "Absolutely! We can adapt our standard cleaning checklist based on your Hallandale Beach home's unique features and your family's specific needs."
      }
    ],
    testimonial: {
      text: "The standard cleaning service for our Hallandale Beach home has been excellent. Professional, family-friendly, and our kids love the clean environment!",
      author: "Amanda T., Hallandale Beach Family"
    }
  },
  {
    id: "hollywood",
    name: "Hollywood",
    description: "Hollywood residents rely on our professional standard cleaning service to maintain their homes while they enjoy the entertainment and cultural attractions. Our flexible scheduling works around busy lifestyles.",
    faq: [
      {
        question: "How flexible is your Hollywood cleaning schedule?",
        answer: "We offer very flexible scheduling for Hollywood residents, including weekends and evenings. We'll work with your entertainment industry schedule or regular work hours."
      },
      {
        question: "Do you offer monthly cleaning in Hollywood?",
        answer: "Yes, we offer weekly, bi-weekly, and monthly standard cleaning services in Hollywood. We'll help you choose the frequency that best fits your lifestyle and budget."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provides excellent standard cleaning for our Hollywood home. Flexible scheduling and consistent quality - perfect for our busy lifestyle!",
      author: "David K., Hollywood Resident"
    }
  },
  {
    id: "las-olas",
    name: "Las Olas",
    description: "Las Olas residents trust our professional standard cleaning service to maintain their luxury homes while they enjoy the vibrant downtown lifestyle. Our high-end cleaning standards match the prestige of this area.",
    faq: [
      {
        question: "Do you handle luxury homes in Las Olas?",
        answer: "Yes, we specialize in luxury home cleaning and are experienced with high-end finishes, premium materials, and luxury property standards in Las Olas."
      },
      {
        question: "Can you accommodate Las Olas HOA requirements?",
        answer: "Absolutely! We're familiar with Las Olas HOA guidelines and ensure full compliance for all cleaning services while maintaining our high standards."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provides exceptional standard cleaning for our Las Olas luxury home. Perfect service for our high-end lifestyle!",
      author: "James L., Las Olas Resident"
    }
  },
  {
    id: "lauderdale-lakes",
    name: "Lauderdale Lakes",
    description: "Lauderdale Lakes families depend on our reliable standard cleaning service to keep their homes clean while they focus on work and family activities. Our professional approach ensures consistent results.",
    faq: [
      {
        question: "Do you work around Lauderdale Lakes work schedules?",
        answer: "Yes, we can schedule cleaning around work commitments and family schedules while maintaining professional service standards for Lauderdale Lakes residents."
      },
      {
        question: "What's your cancellation policy for Lauderdale Lakes?",
        answer: "We require 24-hour notice for cancellations, but we're flexible for emergencies and always work to find alternative solutions that meet your timeline."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been amazing for our Lauderdale Lakes home. Reliable, professional, and our family has more time together!",
      author: "Maria S., Lauderdale Lakes Family"
    }
  },
  {
    id: "lauderhill",
    name: "Lauderhill",
    description: "Lauderhill families enjoy our comprehensive standard cleaning service that keeps their homes consistently clean and healthy. Perfect for busy families who want to spend more time together.",
    faq: [
      {
        question: "Do you offer competitive rates for Lauderhill cleaning?",
        answer: "Yes, we provide affordable, competitive rates for Lauderhill standard cleaning while maintaining the highest service quality and professional standards."
      },
      {
        question: "How reliable is your Lauderhill cleaning service?",
        answer: "We're committed to reliability and have a strong track record of consistent, high-quality standard cleaning services in Lauderhill with professional, trustworthy cleaners."
      }
    ],
    testimonial: {
      text: "The standard cleaning service for our Lauderhill home has been thorough and affordable. Great value and our family is always satisfied!",
      author: "Carlos M., Lauderhill Family"
    }
  },
  {
    id: "margate",
    name: "Margate",
    description: "Margate families rely on our professional standard cleaning service to maintain their homes while they focus on work and family life. Our consistent approach ensures your home always looks its best.",
    faq: [
      {
        question: "Do you service both houses and condos in Margate?",
        answer: "Yes, we provide comprehensive standard cleaning services for all types of properties including houses, condos, and townhomes in Margate."
      },
      {
        question: "How do you ensure quality in Margate cleaning?",
        answer: "Every Margate cleaning follows our detailed checklist and includes a comprehensive quality assurance process to guarantee satisfactory results every time."
      }
    ],
    testimonial: {
      text: "The standard cleaning service for our Margate home has been exceptional. Professional, thorough, and our family loves the consistent results!",
      author: "Robert H., Margate Family"
    }
  },
  {
    id: "miramar",
    name: "Miramar",
    description: "Miramar families trust our professional standard cleaning service to keep their homes tidy while they balance work and family commitments. Our flexible scheduling accommodates busy suburban lifestyles.",
    faq: [
      {
        question: "What makes Miramar cleaning different?",
        answer: "Miramar cleaning addresses the unique needs of suburban families, including family-oriented cleaning approaches and diverse property types throughout the area."
      },
      {
        question: "Do you offer same-day cleaning in Miramar?",
        answer: "Yes, we can often accommodate urgent cleaning requests for Miramar properties, subject to availability and your specific cleaning needs."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been our go-to cleaning service for our Miramar home. Reliable, professional, and our family is always impressed!",
      author: "Lisa W., Miramar Family"
    }
  },
  {
    id: "north-lauderdale",
    name: "North Lauderdale",
    description: "North Lauderdale families depend on our professional standard cleaning service to maintain their homes while they focus on work and family activities. Our reliable service ensures consistent results.",
    faq: [
      {
        question: "Do you work around North Lauderdale schedules?",
        answer: "Yes, we can schedule cleaning around work commitments and family schedules while maintaining professional service standards for North Lauderdale residents."
      },
      {
        question: "What's your cancellation policy for North Lauderdale?",
        answer: "We require 24-hour notice for cancellations, but we're flexible for emergencies and always work to find alternative solutions that meet your timeline."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been amazing for our North Lauderdale home. Reliable, professional, and our family has more quality time together!",
      author: "Maria S., North Lauderdale Family"
    }
  },
  {
    id: "pembroke-pines",
    name: "Pembroke Pines",
    description: "Pembroke Pines families enjoy our comprehensive standard cleaning service that keeps their homes consistently clean and healthy. Perfect for busy families who want professional results.",
    faq: [
      {
        question: "Do you offer competitive rates for Pembroke Pines cleaning?",
        answer: "Yes, we provide affordable, competitive rates for Pembroke Pines standard cleaning while maintaining the highest service quality and professional standards."
      },
      {
        question: "How reliable is your Pembroke Pines cleaning service?",
        answer: "We're committed to reliability and have a strong track record of consistent, high-quality standard cleaning services in Pembroke Pines with professional, trustworthy cleaners."
      }
    ],
    testimonial: {
      text: "The standard cleaning service for our Pembroke Pines home has been thorough and affordable. Great value and our family is always satisfied!",
      author: "Carlos M., Pembroke Pines Family"
    }
  },
  {
    id: "plantation",
    name: "Plantation",
    description: "Plantation families rely on our professional standard cleaning service to maintain their homes while they focus on work and family life. Our consistent approach ensures your home always looks its best.",
    faq: [
      {
        question: "Do you service both houses and condos in Plantation?",
        answer: "Yes, we provide comprehensive standard cleaning services for all types of properties including houses, condos, and townhomes in Plantation."
      },
      {
        question: "How do you ensure quality in Plantation cleaning?",
        answer: "Every Plantation cleaning follows our detailed checklist and includes a comprehensive quality assurance process to guarantee satisfactory results every time."
      }
    ],
    testimonial: {
      text: "The standard cleaning service for our Plantation home has been exceptional. Professional, thorough, and our family loves the consistent results!",
      author: "Robert H., Plantation Family"
    }
  },
  {
    id: "southwest-ranches",
    name: "Southwest Ranches",
    description: "Southwest Ranches families trust our professional standard cleaning service to keep their spacious homes tidy while they enjoy the rural-suburban lifestyle. Our flexible scheduling works around busy family schedules.",
    faq: [
      {
        question: "How do you handle large homes in Southwest Ranches?",
        answer: "We're experienced with large homes and can deploy multiple cleaners to handle extensive properties efficiently while maintaining our high quality standards."
      },
      {
        question: "What if I need to reschedule my Southwest Ranches cleaning?",
        answer: "We're flexible with rescheduling and work closely with Southwest Ranches families to accommodate schedule changes while maintaining quality standards."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provides excellent standard cleaning for our Southwest Ranches home. Consistent quality and our large property always looks perfect!",
      author: "David K., Southwest Ranches Family"
    }
  },
  {
    id: "sunny-isles-beach",
    name: "Sunny Isles Beach",
    description: "Sunny Isles Beach residents trust our professional standard cleaning service to maintain their luxury beachfront homes while they enjoy the ocean lifestyle. Our high-end cleaning standards match the prestige of this area.",
    faq: [
      {
        question: "Do you handle luxury beachfront homes in Sunny Isles Beach?",
        answer: "Yes, we specialize in luxury home cleaning and are experienced with high-end finishes, premium materials, and beachfront property standards in Sunny Isles Beach."
      },
      {
        question: "Can you accommodate Sunny Isles Beach HOA requirements?",
        answer: "Absolutely! We're familiar with Sunny Isles Beach HOA guidelines and ensure full compliance for all cleaning services while maintaining our luxury standards."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provides exceptional standard cleaning for our Sunny Isles Beach luxury home. Perfect service for our beachfront lifestyle!",
      author: "James L., Sunny Isles Beach Resident"
    }
  },
  {
    id: "sunrise",
    name: "Sunrise",
    description: "Sunrise families depend on our professional standard cleaning service to maintain their homes while they focus on work and family activities. Our reliable service ensures consistent results and peace of mind.",
    faq: [
      {
        question: "Do you work around Sunrise schedules?",
        answer: "Yes, we can schedule cleaning around work commitments and family schedules while maintaining professional service standards for Sunrise residents."
      },
      {
        question: "What's your cancellation policy for Sunrise?",
        answer: "We require 24-hour notice for cancellations, but we're flexible for emergencies and always work to find alternative solutions that meet your timeline."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been amazing for our Sunrise home. Reliable, professional, and our family has more quality time together!",
      author: "Maria S., Sunrise Family"
    }
  },
  {
    id: "tamarac",
    name: "Tamarac",
    description: "Tamarac families enjoy our comprehensive standard cleaning service that keeps their homes consistently clean and healthy. Perfect for busy families who want professional results without the hassle.",
    faq: [
      {
        question: "Do you offer competitive rates for Tamarac cleaning?",
        answer: "Yes, we provide affordable, competitive rates for Tamarac standard cleaning while maintaining the highest service quality and professional standards."
      },
      {
        question: "How reliable is your Tamarac cleaning service?",
        answer: "We're committed to reliability and have a strong track record of consistent, high-quality standard cleaning services in Tamarac with professional, trustworthy cleaners."
      }
    ],
    testimonial: {
      text: "The standard cleaning service for our Tamarac home has been thorough and affordable. Great value and our family is always satisfied!",
      author: "Carlos M., Tamarac Family"
    }
  },
  {
    id: "weston",
    name: "Weston",
    description: "Weston families trust our professional standard cleaning service to maintain their beautiful homes while they focus on work and family life. Our flexible scheduling accommodates busy suburban lifestyles perfectly.",
    faq: [
      {
        question: "Do you work with families in Weston?",
        answer: "Yes, we're experienced with family homes and can work around your family's schedule while maintaining professional cleaning standards for your Weston property."
      },
      {
        question: "Can you customize cleaning for Weston homes?",
        answer: "Absolutely! We can adapt our standard cleaning checklist based on your Weston home's unique features and your family's specific needs and preferences."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our Weston home for over a year. Professional, reliable, and our family loves the consistent cleanliness!",
      author: "Jennifer L., Weston Family"
    }
  }
];

const StandardCleaningSouthFloridaPage = () => {
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
        <title>Standard Cleaning Service South Florida | Red Rock Cleans</title>
        <meta name="description" content="Professional standard cleaning in South Florida. Regular maintenance for homes in Fort Lauderdale & Weston. Book your service today!" />
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
                alt="Professional standard cleaning service in a South Florida home with beautiful landscape views"
                className="w-full h-full object-cover scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">{t('southFlorida.standard.h1')}</h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                  Our recurring cleaning service gives busy South Florida families more time to enjoy the sun and local lifestyle, rather than spending it on chores. Experience the joy of coming home to a consistently clean space with our professional and reliable maid service.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="h-14 text-lg px-8" asChild>
                    <Link to="/book-now-south-florida">
                      <Calendar className="w-5 h-5 mr-2" />
                      {t('southFlorida.standard.schedule')}
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="h-14 text-lg px-8" asChild>
                    <Link to="/south-florida-calculator">
                      <Home className="w-5 h-5 mr-2" />
                      {t('southFlorida.standard.quote')}
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
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t('southFlorida.standard.checklistTitle')}</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <CheckCircle className="w-6 h-6 text-primary mr-3" />
                      Living Areas & Bedrooms
                    </h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Dust all surfaces, furniture, and decor
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Vacuum carpets and area rugs
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Mop hard floors and tile
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Empty trash and replace liners
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Clean mirrors and glass surfaces
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
                        Clean and sanitize kitchen counters
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Clean inside and outside of sinks
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Sanitize all bathroom surfaces
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Clean and disinfect toilets
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Wipe down appliances and fixtures
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Enjoy a Consistently Clean Home */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t('southFlorida.standard.benefitsTitle')}</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center p-6 bg-background rounded-lg shadow-sm">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Professional & Vetted Cleaners</h3>
                    <p className="text-muted-foreground">
                      Our South Florida cleaning team consists of professional, background-checked, and fully insured cleaners who are trained to meet our high standards.
                    </p>
                  </div>
                  <div className="text-center p-6 bg-background rounded-lg shadow-sm">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Clock4 className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Flexible Scheduling</h3>
                    <p className="text-muted-foreground">
                      Choose from weekly, bi-weekly, or monthly cleaning schedules that fit your lifestyle. We work around your busy South Florida schedule.
                    </p>
                  </div>
                  <div className="text-center p-6 bg-background rounded-lg shadow-sm">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Peace of Mind</h3>
                    <p className="text-muted-foreground">
                      Enjoy the peace of mind that comes with a perpetually tidy home. Spend more time with family and friends instead of worrying about cleaning.
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
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t('southFlorida.standard.areasTitle')}</h2>
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
                            Professional standard cleaning services
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
                              Schedule Your {city.name} Standard Cleaning
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
                <h2 className="text-3xl md:text-4xl font-bold mb-8">{t('southFlorida.standard.otherServicesTitle')}</h2>
                <p className="text-xl text-muted-foreground mb-12">
                  Beyond standard cleaning, we offer specialized services to meet all your South Florida property needs.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Link to="/south-florida/deep-cleaning-services/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Deep Cleaning Services
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Comprehensive cleaning for special occasions or seasonal deep cleans.
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
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t('southFlorida.standard.faqTitle')}</h2>
                <div className="space-y-6">
                  <div className="border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3">Do I need to be home for my recurring cleaning service?</h3>
                    <p className="text-muted-foreground">
                      No, you don't need to be home during your cleaning service. We have secure access procedures and can work around your schedule. Many of our South Florida clients prefer this convenience.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3">What is the price for weekly house cleaning in Fort Lauderdale?</h3>
                    <p className="text-muted-foreground">
                      Our Fort Lauderdale weekly cleaning rates vary based on home size, specific needs, and cleaning frequency. Contact us for a personalized quote that fits your budget and requirements.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3">Do you use eco-friendly cleaning supplies?</h3>
                    <p className="text-muted-foreground">
                      Yes, we use eco-friendly, non-toxic cleaning supplies that are safe for your family and the environment. We can also accommodate specific product preferences if you have them.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3">How often should I schedule standard cleaning?</h3>
                    <p className="text-muted-foreground">
                      Most South Florida families choose weekly or bi-weekly cleaning. We offer flexible scheduling including weekly, bi-weekly, and monthly options to fit your lifestyle and budget.
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('southFlorida.standard.finalCtaTitle')}</h2>
                <p className="text-xl mb-8 opacity-90">
                  Join hundreds of satisfied South Florida families who trust Red Rock Cleans for reliable standard cleaning services that give them more time to enjoy the sunshine state lifestyle.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" className="h-14 text-lg px-8" asChild>
                    <Link to="/book-now-south-florida">
                      <Calendar className="w-5 h-5 mr-2" />
                      {t('southFlorida.standard.schedule')}
                    </Link>
                  </Button>
                  <Button size="lg" variant="cta" className="h-14 text-lg px-8" asChild>
                    <Link to="/south-florida-calculator">
                      <Home className="w-5 h-5 mr-2" />
                      {t('southFlorida.standard.quote')}
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

export default StandardCleaningSouthFloridaPage;

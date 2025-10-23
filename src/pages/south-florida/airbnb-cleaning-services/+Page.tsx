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
    description: "Aventura Airbnb hosts trust our professional cleaning service to maintain their luxury vacation rental properties and secure 5-star reviews. Our reliable turnover service ensures guest satisfaction in this prestigious area.",
    faq: [
      {
        question: "Do you offer Airbnb cleaning for luxury properties in Aventura?",
        answer: "Yes, we specialize in luxury vacation rental cleaning and are experienced with high-end finishes, premium materials, and luxury property standards in Aventura."
      },
      {
        question: "How quickly can you turn around Aventura Airbnb properties?",
        answer: "We typically complete Aventura Airbnb cleaning within 2-4 hours, depending on property size. We understand the importance of quick turnovers for your booking schedule."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our Aventura Airbnb for months. Professional, reliable, and our guests consistently leave 5-star reviews!",
      author: "Sarah M., Aventura Airbnb Host"
    }
  },
  {
    id: "cooper-city",
    name: "Cooper City",
    description: "Cooper City Airbnb hosts rely on our professional cleaning service to maintain their vacation rental properties and ensure guest satisfaction. Our reliable turnover process helps maximize bookings and maintain high ratings.",
    faq: [
      {
        question: "Can you sync with my Cooper City Airbnb booking calendar?",
        answer: "Yes, we can coordinate with your Airbnb booking calendar and provide automated scheduling to ensure cleaning is completed between guest stays."
      },
      {
        question: "Do you restock guest amenities in Cooper City properties?",
        answer: "We can restock basic guest amenities like toilet paper, paper towels, and soap as part of our Cooper City Airbnb cleaning service."
      }
    ],
    testimonial: {
      text: "The Airbnb cleaning service for our Cooper City property has been exceptional. Reliable, professional, and our guests love the cleanliness!",
      author: "Michael R., Cooper City Airbnb Host"
    }
  },
  {
    id: "dania-beach",
    name: "Dania Beach",
    description: "Dania Beach Airbnb hosts enjoy our professional cleaning service that maintains their coastal vacation rental properties. Our thorough cleaning process ensures guest satisfaction and helps secure positive reviews.",
    faq: [
      {
        question: "Do you handle coastal Airbnb properties in Dania Beach?",
        answer: "Yes, we're experienced with coastal vacation rental properties and specifically address salt air buildup, humidity-related challenges, and beach sand cleanup."
      },
      {
        question: "How do you ensure quality in Dania Beach Airbnb cleaning?",
        answer: "Every Dania Beach Airbnb cleaning follows our detailed checklist and includes a comprehensive quality assurance process to guarantee guest-ready results."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been amazing for our Dania Beach Airbnb. They handle the coastal challenges and our guests consistently praise the cleanliness!",
      author: "Robert H., Dania Beach Airbnb Host"
    }
  },
  {
    id: "davie",
    name: "Davie",
    description: "Davie Airbnb hosts depend on our professional cleaning service to maintain their vacation rental properties and ensure guest satisfaction. Our reliable turnover process helps maximize bookings and maintain high ratings.",
    faq: [
      {
        question: "Can you work around my Davie Airbnb booking schedule?",
        answer: "Absolutely! We offer flexible scheduling for Davie Airbnb hosts and can accommodate same-day turnovers and urgent cleaning requests."
      },
      {
        question: "Do you use eco-friendly products for Davie Airbnb cleaning?",
        answer: "Yes, we use eco-friendly, guest-safe cleaning products that are effective while being safe for guests with allergies or sensitivities."
      }
    ],
    testimonial: {
      text: "The Airbnb cleaning service for our Davie property has been wonderful. Professional, flexible, and our guests love the fresh, clean environment!",
      author: "Lisa W., Davie Airbnb Host"
    }
  },
  {
    id: "fort-lauderdale",
    name: "Fort Lauderdale",
    description: "Fort Lauderdale Airbnb hosts trust our professional cleaning service to maintain their vacation rental properties and secure 5-star reviews. Our reliable turnover service ensures guest satisfaction in this competitive market.",
    faq: [
      {
        question: "How is the cleaning fee for a vacation rental in Fort Lauderdale calculated?",
        answer: "Cleaning fees vary based on property size, specific requirements, and turnover complexity. Contact us for a personalized quote tailored to your Fort Lauderdale property."
      },
      {
        question: "Do you work with multiple Airbnb properties in Fort Lauderdale?",
        answer: "Yes, we work with hosts who manage multiple properties and can provide consistent, reliable cleaning services across your entire portfolio."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our Fort Lauderdale Airbnb portfolio for years. Professional, reliable, and our guests consistently leave 5-star reviews!",
      author: "Jennifer L., Fort Lauderdale Airbnb Host"
    }
  },
  {
    id: "hallandale-beach",
    name: "Hallandale Beach",
    description: "Hallandale Beach Airbnb hosts enjoy our professional cleaning service that maintains their vacation rental properties and ensures guest satisfaction. Perfect for hosts who want to maximize bookings and maintain high ratings.",
    faq: [
      {
        question: "Do you work with family-owned Airbnb properties in Hallandale Beach?",
        answer: "Yes, we're experienced with family-owned vacation rental properties and can work around your family's schedule while maintaining professional cleaning standards."
      },
      {
        question: "Can you customize Airbnb cleaning for Hallandale Beach properties?",
        answer: "Absolutely! We can adapt our cleaning checklist based on your Hallandale Beach property's unique features and your specific guest requirements."
      }
    ],
    testimonial: {
      text: "The Airbnb cleaning service for our Hallandale Beach property has been excellent. Professional, family-friendly, and our guests love the spotless environment!",
      author: "Amanda T., Hallandale Beach Airbnb Host"
    }
  },
  {
    id: "hollywood",
    name: "Hollywood",
    description: "Hollywood Airbnb hosts rely on our professional cleaning service to maintain their vacation rental properties and ensure guest satisfaction. Our reliable turnover process helps maximize bookings in this entertainment hub.",
    faq: [
      {
        question: "How flexible is your Hollywood Airbnb cleaning schedule?",
        answer: "We offer very flexible scheduling for Hollywood Airbnb hosts, including same-day turnovers, weekend cleaning, and emergency cleaning services."
      },
      {
        question: "Do you offer same-day Airbnb cleaning in Hollywood?",
        answer: "Yes, we can often accommodate same-day Airbnb cleaning requests for Hollywood properties, subject to availability and your specific cleaning needs."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provides excellent Airbnb cleaning for our Hollywood property. Flexible scheduling and thorough results - perfect for our busy booking schedule!",
      author: "David K., Hollywood Airbnb Host"
    }
  },
  {
    id: "las-olas",
    name: "Las Olas",
    description: "Las Olas Airbnb hosts trust our professional cleaning service to maintain their luxury downtown vacation rental properties. Our high-end cleaning standards match the prestige of this vibrant area and ensure guest satisfaction.",
    faq: [
      {
        question: "Do you handle luxury Airbnb properties in Las Olas?",
        answer: "Yes, we specialize in luxury vacation rental cleaning and are experienced with high-end finishes, premium materials, and luxury property standards in Las Olas."
      },
      {
        question: "Can you accommodate Las Olas HOA requirements for Airbnb cleaning?",
        answer: "Absolutely! We're familiar with Las Olas HOA guidelines and ensure full compliance for all vacation rental cleaning services."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provides exceptional Airbnb cleaning for our Las Olas luxury property. Perfect service for our high-end downtown vacation rental!",
      author: "James L., Las Olas Airbnb Host"
    }
  },
  {
    id: "lauderdale-lakes",
    name: "Lauderdale Lakes",
    description: "Lauderdale Lakes Airbnb hosts depend on our professional cleaning service to maintain their vacation rental properties and ensure guest satisfaction. Our reliable turnover process helps maximize bookings and maintain high ratings.",
    faq: [
      {
        question: "Do you work around Lauderdale Lakes Airbnb booking schedules?",
        answer: "Yes, we can schedule cleaning around your booking calendar and guest turnover times while maintaining professional service standards."
      },
      {
        question: "What's your cancellation policy for Lauderdale Lakes Airbnb cleaning?",
        answer: "We require 24-hour notice for cancellations, but we're flexible for last-minute booking changes and always work to find alternative solutions."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been amazing for our Lauderdale Lakes Airbnb. Their reliable service helps us maintain perfect guest satisfaction scores!",
      author: "Maria S., Lauderdale Lakes Airbnb Host"
    }
  },
  {
    id: "lauderhill",
    name: "Lauderhill",
    description: "Lauderhill Airbnb hosts enjoy our professional cleaning service that maintains their vacation rental properties and ensures guest satisfaction. Perfect for hosts who want to maximize bookings and maintain high ratings.",
    faq: [
      {
        question: "Do you offer competitive rates for Lauderhill Airbnb cleaning?",
        answer: "Yes, we provide affordable, competitive rates for Lauderhill Airbnb cleaning while maintaining the highest service quality and guest satisfaction standards."
      },
      {
        question: "How reliable is your Lauderhill Airbnb cleaning service?",
        answer: "We're committed to reliability and have a strong track record of consistent, high-quality Airbnb cleaning services in Lauderhill with professional, trustworthy cleaners."
      }
    ],
    testimonial: {
      text: "The Airbnb cleaning service for our Lauderhill property has been thorough and affordable. Great value and our guests consistently leave 5-star reviews!",
      author: "Carlos M., Lauderhill Airbnb Host"
    }
  },
  {
    id: "margate",
    name: "Margate",
    description: "Margate Airbnb hosts rely on our professional cleaning service to maintain their vacation rental properties and ensure guest satisfaction. Our comprehensive cleaning process helps secure positive reviews and maximize bookings.",
    faq: [
      {
        question: "Do you service both houses and condos for Airbnb cleaning in Margate?",
        answer: "Yes, we provide comprehensive Airbnb cleaning services for all types of vacation rental properties including houses, condos, and townhomes in Margate."
      },
      {
        question: "How do you ensure quality in Margate Airbnb cleaning?",
        answer: "Every Margate Airbnb cleaning follows our detailed checklist and includes a comprehensive quality assurance process to guarantee guest-ready results."
      }
    ],
    testimonial: {
      text: "The Airbnb cleaning service for our Margate property has been exceptional. Professional, thorough, and our guests love the spotless environment!",
      author: "Robert H., Margate Airbnb Host"
    }
  },
  {
    id: "miramar",
    name: "Miramar",
    description: "Miramar Airbnb hosts trust our professional cleaning service to maintain their vacation rental properties and ensure guest satisfaction. Our comprehensive process helps secure positive reviews and maximize bookings.",
    faq: [
      {
        question: "What makes Miramar Airbnb cleaning different?",
        answer: "Miramar Airbnb cleaning addresses the unique needs of suburban vacation rental properties, including family-oriented cleaning approaches and diverse property types."
      },
      {
        question: "Do you offer same-day Airbnb cleaning in Miramar?",
        answer: "Yes, we can often accommodate same-day Airbnb cleaning requests for Miramar properties, subject to availability and your specific cleaning needs."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been our go-to Airbnb cleaning service for our Miramar property. Reliable, professional, and our guests are always impressed!",
      author: "Lisa W., Miramar Airbnb Host"
    }
  },
  {
    id: "north-lauderdale",
    name: "North Lauderdale",
    description: "North Lauderdale Airbnb hosts depend on our professional cleaning service to maintain their vacation rental properties and ensure guest satisfaction. Our reliable turnover process helps maximize bookings and maintain high ratings.",
    faq: [
      {
        question: "Do you work around North Lauderdale Airbnb booking schedules?",
        answer: "Yes, we can schedule cleaning around your booking calendar and guest turnover times while maintaining professional service standards."
      },
      {
        question: "What's your cancellation policy for North Lauderdale Airbnb cleaning?",
        answer: "We require 24-hour notice for cancellations, but we're flexible for last-minute booking changes and always work to find alternative solutions."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been amazing for our North Lauderdale Airbnb. Their reliable service helps us maintain perfect guest satisfaction scores!",
      author: "Maria S., North Lauderdale Airbnb Host"
    }
  },
  {
    id: "pembroke-pines",
    name: "Pembroke Pines",
    description: "Pembroke Pines Airbnb hosts enjoy our professional cleaning service that maintains their vacation rental properties and ensures guest satisfaction. Perfect for hosts who want to maximize bookings and maintain high ratings.",
    faq: [
      {
        question: "Do you offer competitive rates for Pembroke Pines Airbnb cleaning?",
        answer: "Yes, we provide affordable, competitive rates for Pembroke Pines Airbnb cleaning while maintaining the highest service quality and guest satisfaction standards."
      },
      {
        question: "How reliable is your Pembroke Pines Airbnb cleaning service?",
        answer: "We're committed to reliability and have a strong track record of consistent, high-quality Airbnb cleaning services in Pembroke Pines with professional, trustworthy cleaners."
      }
    ],
    testimonial: {
      text: "The Airbnb cleaning service for our Pembroke Pines property has been thorough and affordable. Great value and our guests consistently leave 5-star reviews!",
      author: "Carlos M., Pembroke Pines Airbnb Host"
    }
  },
  {
    id: "plantation",
    name: "Plantation",
    description: "Plantation Airbnb hosts rely on our professional cleaning service to maintain their vacation rental properties and ensure guest satisfaction. Our comprehensive cleaning process helps secure positive reviews and maximize bookings.",
    faq: [
      {
        question: "Do you service both houses and condos for Airbnb cleaning in Plantation?",
        answer: "Yes, we provide comprehensive Airbnb cleaning services for all types of vacation rental properties including houses, condos, and townhomes in Plantation."
      },
      {
        question: "How do you ensure quality in Plantation Airbnb cleaning?",
        answer: "Every Plantation Airbnb cleaning follows our detailed checklist and includes a comprehensive quality assurance process to guarantee guest-ready results."
      }
    ],
    testimonial: {
      text: "The Airbnb cleaning service for our Plantation property has been exceptional. Professional, thorough, and our guests love the spotless environment!",
      author: "Robert H., Plantation Airbnb Host"
    }
  },
  {
    id: "southwest-ranches",
    name: "Southwest Ranches",
    description: "Southwest Ranches Airbnb hosts trust our professional cleaning service to maintain their spacious vacation rental properties and ensure guest satisfaction. Our comprehensive process helps secure positive reviews and maximize bookings.",
    faq: [
      {
        question: "How do you handle large Airbnb properties in Southwest Ranches?",
        answer: "We're experienced with large vacation rental properties and can deploy multiple cleaners to handle extensive Airbnb cleaning efficiently while maintaining our high quality standards."
      },
      {
        question: "What if I need to reschedule my Southwest Ranches Airbnb cleaning?",
        answer: "We're flexible with rescheduling and work closely with Southwest Ranches Airbnb hosts to accommodate booking changes while maintaining quality standards."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provides excellent Airbnb cleaning for our Southwest Ranches property. Consistent quality and our guests consistently leave 5-star reviews!",
      author: "David K., Southwest Ranches Airbnb Host"
    }
  },
  {
    id: "sunny-isles-beach",
    name: "Sunny Isles Beach",
    description: "Sunny Isles Beach Airbnb hosts trust our professional cleaning service to maintain their luxury beachfront vacation rental properties. Our high-end cleaning standards match the prestige of this area and ensure guest satisfaction.",
    faq: [
      {
        question: "Do you handle luxury beachfront Airbnb properties in Sunny Isles Beach?",
        answer: "Yes, we specialize in luxury vacation rental cleaning and are experienced with high-end finishes, premium materials, and beachfront property standards in Sunny Isles Beach."
      },
      {
        question: "Can you accommodate Sunny Isles Beach HOA requirements for Airbnb cleaning?",
        answer: "Absolutely! We're familiar with Sunny Isles Beach HOA guidelines and ensure full compliance for all vacation rental cleaning services."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provides exceptional Airbnb cleaning for our Sunny Isles Beach luxury property. Perfect service for our high-end beachfront vacation rental!",
      author: "James L., Sunny Isles Beach Airbnb Host"
    }
  },
  {
    id: "sunrise",
    name: "Sunrise",
    description: "Sunrise Airbnb hosts depend on our professional cleaning service to maintain their vacation rental properties and ensure guest satisfaction. Our reliable turnover process helps maximize bookings and maintain high ratings.",
    faq: [
      {
        question: "Do you work around Sunrise Airbnb booking schedules?",
        answer: "Yes, we can schedule cleaning around your booking calendar and guest turnover times while maintaining professional service standards."
      },
      {
        question: "What's your cancellation policy for Sunrise Airbnb cleaning?",
        answer: "We require 24-hour notice for cancellations, but we're flexible for last-minute booking changes and always work to find alternative solutions."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been amazing for our Sunrise Airbnb. Their reliable service helps us maintain perfect guest satisfaction scores!",
      author: "Maria S., Sunrise Airbnb Host"
    }
  },
  {
    id: "tamarac",
    name: "Tamarac",
    description: "Tamarac Airbnb hosts enjoy our professional cleaning service that maintains their vacation rental properties and ensures guest satisfaction. Perfect for hosts who want to maximize bookings and maintain high ratings.",
    faq: [
      {
        question: "Do you offer competitive rates for Tamarac Airbnb cleaning?",
        answer: "Yes, we provide affordable, competitive rates for Tamarac Airbnb cleaning while maintaining the highest service quality and guest satisfaction standards."
      },
      {
        question: "How reliable is your Tamarac Airbnb cleaning service?",
        answer: "We're committed to reliability and have a strong track record of consistent, high-quality Airbnb cleaning services in Tamarac with professional, trustworthy cleaners."
      }
    ],
    testimonial: {
      text: "The Airbnb cleaning service for our Tamarac property has been thorough and affordable. Great value and our guests consistently leave 5-star reviews!",
      author: "Carlos M., Tamarac Airbnb Host"
    }
  },
  {
    id: "weston",
    name: "Weston",
    description: "Weston Airbnb hosts trust our professional cleaning service to maintain their beautiful vacation rental properties and ensure guest satisfaction. Our comprehensive process helps secure positive reviews and maximize bookings.",
    faq: [
      {
        question: "Do you work with multiple Airbnb properties in Weston?",
        answer: "Yes, we work with hosts who manage multiple properties and can provide consistent, reliable cleaning services across your entire Weston portfolio."
      },
      {
        question: "Can you customize Airbnb cleaning for Weston properties?",
        answer: "Absolutely! We can adapt our cleaning checklist based on your Weston property's unique features and your specific guest requirements."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our Weston Airbnb portfolio for over a year. Professional, reliable, and our guests consistently leave 5-star reviews!",
      author: "Jennifer L., Weston Airbnb Host"
    }
  }
];

const AirbnbCleaningSouthFloridaPage = () => {
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
        <title>Airbnb Cleaning Service South Florida | Red Rock Cleans</title>
        <meta name="description" content="Fast Airbnb cleaning in South Florida. Guest-ready turnovers in Fort Lauderdale & Weston. Professional vacation rental service." />
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
                alt="Professional Airbnb cleaning service in a South Florida vacation rental property with beautiful landscape views"
                className="w-full h-full object-cover scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">{t('southFlorida.airbnb.h1')}</h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                  Get 5-star reviews with our reliable Airbnb cleaning service in South Florida. Our automated turnover cleaning ensures pristine guest arrivals and helps Airbnb hosts in Fort Lauderdale, Weston, and beyond maximize bookings and guest satisfaction in the competitive vacation rental market.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="h-14 text-lg px-8" asChild>
                    <Link to="/book-now-south-florida">
                      <Calendar className="w-5 h-5 mr-2" />
                      Schedule Airbnb Cleaning Service
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="h-14 text-lg px-8" asChild>
                    <Link to="/south-florida-calculator">
                      <Home className="w-5 h-5 mr-2" />
                      {t('southFlorida.airbnb.quote')}
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Our Turnover Process for Flawless Guest Arrivals */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t('southFlorida.airbnb.processTitle')}</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <CheckCircle className="w-6 h-6 text-primary mr-3" />
                      Sanitization & Deep Cleaning
                    </h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Sanitize all surfaces and high-touch areas
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Clean and disinfect bathrooms thoroughly
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Kitchen deep clean and appliance sanitization
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Vacuum and mop all floors
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Dust all surfaces and clean windows
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <CheckCircle className="w-6 h-6 text-primary mr-3" />
                      Guest Preparation & Staging
                    </h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Fresh linens and towel placement
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Restock guest essentials and amenities
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Stage furniture and decor perfectly
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Empty trash and replace liners
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Final quality inspection and guest-ready check
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Maximize Your Bookings and Guest Satisfaction */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t('southFlorida.airbnb.benefitsTitle')}</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center p-6 bg-background rounded-lg shadow-sm">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Reliability & Consistency</h3>
                    <p className="text-muted-foreground">
                      Our professional cleaning team ensures consistent, high-quality turnovers every time, helping you maintain your Superhost status and secure 5-star reviews.
                    </p>
                  </div>
                  <div className="text-center p-6 bg-background rounded-lg shadow-sm">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Clock4 className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Quick Turnaround Times</h3>
                    <p className="text-muted-foreground">
                      Fast, efficient cleaning that fits your booking schedule. We understand the importance of quick turnovers to maximize your revenue potential.
                    </p>
                  </div>
                  <div className="text-center p-6 bg-background rounded-lg shadow-sm">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Peace of Mind</h3>
                    <p className="text-muted-foreground">
                      Focus on growing your Airbnb business while we handle the cleaning. Our reliable service gives you confidence that every guest arrival will be flawless.
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
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t('southFlorida.airbnb.areasTitle')}</h2>
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
                            Professional Airbnb cleaning services
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
                              Schedule Your {city.name} Airbnb Cleaning
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
                  Other Cleaning Services for Your Property in South Florida
                </h2>
                <p className="text-xl text-muted-foreground mb-12">
                  Beyond Airbnb cleaning, we offer specialized services to meet all your South Florida property needs.
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
                  <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t('southFlorida.airbnb.faqTitle')}</h2>
                <div className="space-y-6">
                  <div className="border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3">Can you sync with my Airbnb booking calendar?</h3>
                    <p className="text-muted-foreground">
                      Yes, we can coordinate with your Airbnb booking calendar and provide automated scheduling to ensure cleaning is completed between guest stays. We work with most property management systems.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3">How is the cleaning fee for a vacation rental in Fort Lauderdale calculated?</h3>
                    <p className="text-muted-foreground">
                      Cleaning fees vary based on property size, specific requirements, and turnover complexity. Contact us for a personalized quote tailored to your Fort Lauderdale property and booking frequency.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3">Do you restock guest amenities?</h3>
                    <p className="text-muted-foreground">
                      Yes, we can restock basic guest amenities like toilet paper, paper towels, soap, and other essentials as part of our Airbnb cleaning service to ensure your property is guest-ready.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3">How quickly can you turn around my Airbnb property?</h3>
                    <p className="text-muted-foreground">
                      We typically complete Airbnb cleaning within 2-4 hours, depending on property size and requirements. We understand the importance of quick turnovers for your booking schedule.
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('southFlorida.airbnb.finalCtaTitle')}</h2>
                <p className="text-xl mb-8 opacity-90">
                  Join hundreds of successful South Florida Airbnb hosts who trust Red Rock Cleans for reliable cleaning services that help them maintain Superhost status and maximize bookings.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" className="h-14 text-lg px-8" asChild>
                    <Link to="/book-now-south-florida">
                      <Calendar className="w-5 h-5 mr-2" />
                      {t('southFlorida.airbnb.schedule')}
                    </Link>
                  </Button>
                  <Button size="lg" variant="cta" className="h-14 text-lg px-8" asChild>
                    <Link to="/south-florida-calculator">
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

export default AirbnbCleaningSouthFloridaPage;

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
    description: "University Park Airbnb hosts trust our professional turnover cleaning service to maintain their luxury vacation rentals to the highest standards. We understand the expectations of discerning guests and ensure every property meets 5-star review standards in this prestigious neighborhood.",
    faq: [
      {
        question: "How reliable is your turnover cleaning service in University Park?",
        answer: "Our turnover cleaning service is highly reliable with a 99.9% on-time completion rate. We understand the importance of guest check-ins and coordinate perfectly with your booking schedule."
      },
      {
        question: "Do you work with luxury vacation rental properties in University Park?",
        answer: "Yes, we specialize in luxury vacation rental turnovers and are experienced with high-end properties, premium amenities, and the standards expected by guests in University Park."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our University Park Airbnb beautifully. Their turnover service is flawless and our guests consistently leave 5-star reviews!",
      author: "Sarah M., University Park Airbnb Host"
    }
  },
  {
    id: "highland-park",
    name: "Highland Park",
    description: "Highland Park Airbnb hosts rely on our comprehensive turnover cleaning service to maintain their exclusive vacation rentals to pristine condition. We ensure every surface meets the high standards expected in this prestigious neighborhood where guest satisfaction drives bookings.",
    faq: [
      {
        question: "Do you handle both luxury and standard vacation rentals for turnover cleaning in Highland Park?",
        answer: "Yes, we provide turnover cleaning services for both luxury properties and standard vacation rentals in Highland Park, adapting our service level to match your property's specific needs."
      },
      {
        question: "Can you coordinate with Highland Park host schedules?",
        answer: "Absolutely! We work closely with Highland Park hosts to schedule turnover cleaning services around guest check-in/out times and booking schedules."
      }
    ],
    testimonial: {
      text: "The turnover cleaning service for our Highland Park Airbnb was exceptional. Professional, reliable, and our guests always comment on how spotless the property is!",
      author: "Michael R., Highland Park Property Owner"
    }
  },
  {
    id: "uptown-dallas",
    name: "Uptown Dallas",
    description: "Uptown Dallas Airbnb hosts depend on our professional turnover cleaning service to maintain their urban vacation rentals to pristine condition. We understand the unique challenges of STR turnover cleaning in this vibrant neighborhood where business travelers and tourists expect perfection.",
    faq: [
      {
        question: "Do you service both residential and commercial STR turnover cleaning in Uptown Dallas?",
        answer: "Yes, we specialize in turnover cleaning for both residential vacation rentals and commercial short-term rental properties in Uptown Dallas, adapting our service to your specific property type."
      },
      {
        question: "How do you handle quick turnovers in Uptown Dallas?",
        answer: "Every Uptown Dallas turnover cleaning is optimized for speed and efficiency, using streamlined processes and experienced teams to meet tight guest check-in schedules."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provided excellent turnover cleaning for our Uptown Dallas Airbnb. They really understood the fast-paced nature of urban STRs and our guests love the cleanliness!",
      author: "Jennifer L., Uptown Dallas Host"
    }
  },
  {
    id: "downtown-dallas",
    name: "Downtown Dallas",
    description: "Downtown Dallas Airbnb hosts trust our reliable turnover cleaning service to maintain their urban vacation rentals to pristine condition. We understand the importance of meeting strict guest check-in timelines and maintaining high standards in this busy business district.",
    faq: [
      {
        question: "What makes Downtown Dallas turnover cleaning different?",
        answer: "Downtown Dallas turnover cleaning addresses the unique requirements of urban vacation rentals, including high-rise buildings, business traveler expectations, and the challenges of downtown STR logistics."
      },
      {
        question: "Do you offer same-day turnover cleaning in Downtown Dallas?",
        answer: "Yes, we can often accommodate urgent turnover cleaning requests for Downtown Dallas properties, subject to availability and guest check-in schedules."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been our go-to turnover cleaning service for Downtown Dallas properties. Reliable, professional, and they understand urban STR challenges!",
      author: "Lisa W., Downtown Dallas Host"
    }
  },
  {
    id: "preston-hollow",
    name: "Preston Hollow",
    description: "Preston Hollow Airbnb hosts enjoy our comprehensive turnover cleaning service that maintains their luxury vacation rentals to pristine condition. Perfect for the upscale Preston Hollow lifestyle where vacation rentals require meticulous attention to detail and guest experience.",
    faq: [
      {
        question: "Do you work with luxury vacation rental hosts in Preston Hollow?",
        answer: "Yes, we're experienced with luxury vacation rental turnovers and can provide cleaning services that meet the high standards expected by guests in Preston Hollow properties."
      },
      {
        question: "Can you customize turnover cleaning for Preston Hollow properties?",
        answer: "Absolutely! We can adapt our cleaning checklist based on your Preston Hollow property's unique features, luxury amenities, and specific guest expectations."
      }
    ],
    testimonial: {
      text: "The turnover cleaning service for our Preston Hollow Airbnb was wonderful. Professional, reliable, and our luxury property always looks stunning for guests!",
      author: "Amanda T., Preston Hollow Host"
    }
  },
  {
    id: "plano",
    name: "Plano",
    description: "Plano Airbnb hosts trust our professional turnover cleaning service to maintain their vacation rentals to pristine condition. We provide reliable service that meets the demands of this family-friendly area where guests expect clean, well-maintained properties for their stays.",
    faq: [
      {
        question: "How do you handle large-scale turnover cleaning in Plano?",
        answer: "We're experienced with large-scale vacation rental properties and can deploy multiple teams to handle extensive turnover cleaning efficiently while maintaining quality standards."
      },
      {
        question: "What if I need to reschedule my Plano turnover cleaning?",
        answer: "We're flexible with rescheduling and work closely with Plano hosts to accommodate guest schedule changes while maintaining service quality."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provides excellent turnover cleaning for our Plano Airbnb. They really understood our family-friendly property needs and our guests consistently give us 5 stars!",
      author: "David K., Plano Host"
    }
  },
  {
    id: "frisco",
    name: "Frisco",
    description: "Frisco Airbnb hosts depend on our reliable turnover cleaning service to maintain their vacation rentals to pristine condition. We provide consistent, professional cleaning that ensures complete guest satisfaction and 5-star reviews in this rapidly growing area.",
    faq: [
      {
        question: "Do you service both residential and commercial STR turnover cleaning in Frisco?",
        answer: "Yes, we provide comprehensive turnover cleaning services for all types of vacation rental properties including residential homes, commercial STRs, and mixed-use developments."
      },
      {
        question: "How do you ensure quality in Frisco turnover cleaning?",
        answer: "Every Frisco turnover cleaning follows our detailed checklist and includes a comprehensive quality assurance process to guarantee guest-ready results."
      }
    ],
    testimonial: {
      text: "The turnover cleaning service for our Frisco Airbnb was exceptional. Professional, thorough, and our guests always comment on how spotless and welcoming the property is!",
      author: "Robert H., Frisco Host"
    }
  },
  {
    id: "prosper",
    name: "Prosper",
    description: "Prosper Airbnb hosts rely on our professional turnover cleaning service to maintain their vacation rentals to pristine condition. We provide reliable service that helps hosts achieve 5-star guest reviews and maximize bookings in this thriving community.",
    faq: [
      {
        question: "Do you work around Prosper host schedules?",
        answer: "Yes, we can schedule turnover cleaning around guest check-in/out times and host availability while maintaining professional service standards."
      },
      {
        question: "What's your cancellation policy for Prosper turnover cleaning?",
        answer: "We require 24-hour notice for cancellations, but we're flexible for guest cancellations and always work to find alternative solutions that meet your timeline."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been amazing for our Prosper Airbnb. Their turnover cleaning service helped us achieve consistent 5-star reviews and increased our bookings!",
      author: "Maria S., Prosper Host"
    }
  }
];

const AirbnbCleaningDallasPage = () => {
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
        <title>Airbnb Cleaning Service in Dallas | Red Rock Cleans</title>
        <meta name="description" content="Get 5-star reviews with our reliable Airbnb cleaning service in Dallas. Red Rock Cleans offers automated turnover cleaning for vacation rentals in Uptown, Plano, and beyond." />
      </Helmet>
      <Hreflang />
      
      <div className="min-h-screen flex flex-col">
        <DallasNavigation loginUrl="https://customer-portal.maidily.com/red-rock-cleans-dallas/sign-in" bookingUrl="/book-now-dallas" />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative py-24 md:py-32 overflow-hidden">
            <div className="absolute inset-0">
              <img 
                src="/src/assets/hero-residential.jpg" 
                alt="Professional Airbnb cleaning service in a beautiful Dallas vacation rental with modern city skyline views"
                className="w-full h-full object-cover scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">{t('dallas.airbnb.h1')}</h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                  Secure 5-star reviews and maximize your bookings with our reliable turnover cleaning service. We understand that pristine turnovers are essential for Airbnb hosts in Dallas to satisfy business travelers and tourists who expect perfection in their vacation rental experience.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="h-14 text-lg px-8" asChild>
                    <Link to="/book-now-dallas">
                      <Calendar className="w-5 h-5 mr-2" />
                      {t('dallas.airbnb.schedule')}
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="h-14 text-lg px-8" asChild>
                    <Link to="/dallas-calculator">
                      <Home className="w-5 h-5 mr-2" />
                      {t('dallas.airbnb.quote')}
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
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t('dallas.airbnb.processTitle')}</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <CheckCircle className="w-6 h-6 text-primary mr-3" />
                      Comprehensive Sanitization
                    </h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Sanitizing all high-touch surfaces and amenities
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Complete laundry service for linens and towels
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Restocking guest essentials and amenities
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Deep cleaning bathrooms and kitchens
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Vacuuming and mopping all floors
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <CheckCircle className="w-6 h-6 text-primary mr-3" />
                      Professional Staging
                    </h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Staging for a professional, welcoming feel
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Checking all appliances and amenities
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Final quality inspection and walkthrough
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Coordinating with guest check-in schedules
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Documenting property condition and issues
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
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Maximize Your Bookings and Guest Satisfaction</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center p-6 bg-background rounded-lg shadow-sm">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Reliability You Can Trust</h3>
                    <p className="text-muted-foreground">
                      Our 99.9% on-time completion rate ensures your guests always arrive to a perfectly cleaned property. Never worry about last-minute cleaning issues affecting your reviews or bookings.
                    </p>
                  </div>
                  <div className="text-center p-6 bg-background rounded-lg shadow-sm">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Clock className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Quick Turnaround Times</h3>
                    <p className="text-muted-foreground">
                      Our streamlined process ensures fast, efficient turnovers that work with your booking schedule. We can handle tight check-in/check-out windows without compromising quality.
                    </p>
                  </div>
                  <div className="text-center p-6 bg-background rounded-lg shadow-sm">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Peace of Mind</h3>
                    <p className="text-muted-foreground">
                      Enjoy the peace of mind that comes from a professionally managed cleaning schedule. Focus on growing your Airbnb business while we ensure every guest has a 5-star experience.
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
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t('dallas.airbnb.areasTitle')}</h2>
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
                            Professional Airbnb turnover cleaning services
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
                              Schedule Your {neighborhood.name} Turnover Cleaning
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
                  Beyond Airbnb turnover cleaning, we offer specialized services to meet all your Dallas property needs.
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
                  <Link to="/dallas/post-construction-cleaning-services/" className="group">
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
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t('dallas.airbnb.faqTitle')}</h2>
                <div className="space-y-6">
                  <div className="border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3">Can you sync with my Airbnb booking calendar?</h3>
                    <p className="text-muted-foreground">
                      Yes, we can integrate with most vacation rental management platforms and booking calendars to automatically schedule cleanings based on guest check-in/check-out times, ensuring seamless coordination.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3">How is the cleaning fee for a vacation rental in Uptown Dallas calculated?</h3>
                    <p className="text-muted-foreground">
                      Vacation rental cleaning fees in Uptown Dallas are calculated based on property size, number of bedrooms/bathrooms, and specific amenities. Contact us for a detailed quote tailored to your property's needs.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3">Do you restock guest amenities?</h3>
                    <p className="text-muted-foreground">
                      Yes, we can restock guest amenities including toiletries, coffee, tea, and other essentials as part of our turnover service. We work with you to maintain your preferred brand standards and inventory levels.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3">What's your cancellation policy for Airbnb cleaning?</h3>
                    <p className="text-muted-foreground">
                      We require 24-hour notice for cancellations, but we're flexible for guest cancellations and always work to find alternative solutions that meet your booking schedule.
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
                  {t('dallas.airbnb.finalCtaTitle')}
                </h2>
                <p className="text-xl mb-8 opacity-90">
                  Join hundreds of satisfied Dallas Airbnb hosts who trust Red Rock Cleans for reliable turnover cleaning that maximizes bookings and guest satisfaction.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" className="h-14 text-lg px-8" asChild>
                    <Link to="/book-now-dallas">
                      <Calendar className="w-5 h-5 mr-2" />
                      Schedule Your Turnover Cleaning Today
                    </Link>
                  </Button>
                  <Button size="lg" variant="cta" className="h-14 text-lg px-8" asChild>
                    <Link to="/dallas-calculator">
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

export default AirbnbCleaningDallasPage;

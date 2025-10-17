import { MauiNavigation } from "@/components/MauiNavigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Clock, Shield, Star, Users, Calendar, Home, Sparkles, DollarSign, Key, RefreshCw, Heart, Clock4, Zap, HardHat, Hammer, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";

const neighborhoods = [
  {
    id: "wailea",
    name: "Wailea",
    description: "Wailea homeowners trust our professional deep cleaning service to restore their luxury properties to pristine condition. We understand the high standards expected in this prestigious resort area and tackle the unique challenges of oceanfront living.",
    faq: [
      {
        question: "How long does deep cleaning take in Wailea?",
        answer: "Deep cleaning typically takes 6-8 hours depending on property size and condition. We'll provide a detailed timeline during your free consultation and can work around your schedule."
      },
      {
        question: "Do you work with Wailea property management companies?",
        answer: "Yes, we work directly with property management companies, individual homeowners, and luxury property owners in Wailea to provide comprehensive deep cleaning services."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans transformed our Wailea home with their deep cleaning service. The attention to detail was incredible - our home felt brand new again!",
      author: "Sarah M., Wailea Homeowner"
    }
  },
  {
    id: "makena",
    name: "Makena",
    description: "Makena homeowners rely on our comprehensive deep cleaning service to restore their properties to pristine condition. We ensure every surface meets the high standards expected in this beautiful coastal area where ocean air and salt can cause buildup.",
    faq: [
      {
        question: "Do you handle both luxury and standard homes for deep cleaning in Makena?",
        answer: "Yes, we provide deep cleaning services for both luxury properties and standard homes in Makena, adapting our service level to match your property's specific needs."
      },
      {
        question: "Can you coordinate with Makena homeowner schedules?",
        answer: "Absolutely! We work closely with Makena homeowners to schedule deep cleaning services around their lifestyle and availability."
      }
    ],
    testimonial: {
      text: "The deep cleaning service for our Makena home was exceptional. Professional, thorough, and they really understood the challenges of oceanfront living!",
      author: "Michael R., Makena Property Owner"
    }
  },
  {
    id: "kihei",
    name: "Kihei",
    description: "Kihei homeowners depend on our professional deep cleaning service to restore their homes to pristine condition. We understand the unique challenges of Maui living including salt air, sand, and humidity that can cause buildup over time.",
    faq: [
      {
        question: "Do you service both residential and vacation rental deep cleaning in Kihei?",
        answer: "Yes, we specialize in deep cleaning for both residential homes and vacation rental properties in Kihei, adapting our service to your specific property type."
      },
      {
        question: "How do you handle salt and sand buildup in Kihei properties?",
        answer: "Every Kihei deep cleaning includes special attention to salt and sand removal, using appropriate techniques and products to protect your surfaces while achieving thorough cleaning."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provided excellent deep cleaning for our Kihei home. They really understood the challenges of island living and our home felt completely refreshed!",
      author: "Jennifer L., Kihei Homeowner"
    }
  },
  {
    id: "kapalua",
    name: "Kapalua",
    description: "Kapalua homeowners trust our reliable deep cleaning service to restore their luxury properties to pristine condition. We understand the importance of meeting high-end property standards in this exclusive resort community.",
    faq: [
      {
        question: "What makes Kapalua deep cleaning different?",
        answer: "Kapalua deep cleaning addresses the unique requirements of luxury resort properties, including high-end finishes, premium materials, and the challenges of oceanfront living."
      },
      {
        question: "Do you offer same-day deep cleaning in Kapalua?",
        answer: "Yes, we can often accommodate urgent deep cleaning requests for Kapalua properties, subject to availability and property size requirements."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been our go-to deep cleaning service for Kapalua properties. Reliable, professional, and they understand luxury home maintenance!",
      author: "Lisa W., Kapalua Property Owner"
    }
  },
  {
    id: "kaanapali",
    name: "Ka'anapali",
    description: "Ka'anapali homeowners enjoy our comprehensive deep cleaning service that restores their properties to pristine condition. Perfect for the active Ka'anapali lifestyle where homes need intensive cleaning to maintain their beauty.",
    faq: [
      {
        question: "Do you work with vacation rental owners in Ka'anapali?",
        answer: "Yes, we're experienced with vacation rental properties and can provide deep cleaning services that prepare properties for guests while protecting high-end finishes."
      },
      {
        question: "Can you customize deep cleaning for Ka'anapali properties?",
        answer: "Absolutely! We can adapt our cleaning checklist based on your Ka'anapali property's unique features and specific maintenance requirements."
      }
    ],
    testimonial: {
      text: "The deep cleaning service for our Ka'anapali home was wonderful. Professional, reliable, and our property looked absolutely stunning afterward!",
      author: "Amanda T., Ka'anapali Homeowner"
    }
  },
  {
    id: "lahaina",
    name: "Lahaina",
    description: "Lahaina homeowners trust our professional deep cleaning service to restore their properties to pristine condition. We provide reliable service that meets the demands of this historic town's unique architectural features and coastal environment.",
    faq: [
      {
        question: "How do you handle large-scale deep cleaning in Lahaina?",
        answer: "We're experienced with large-scale properties and can deploy multiple teams to handle extensive deep cleaning efficiently while maintaining quality standards."
      },
      {
        question: "What if I need to reschedule my Lahaina deep cleaning?",
        answer: "We're flexible with rescheduling and work closely with Lahaina homeowners to accommodate schedule changes while maintaining service quality."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provides excellent deep cleaning for our Lahaina historic home. They really understood the unique needs of older properties!",
      author: "David K., Lahaina Homeowner"
    }
  },
  {
    id: "spreckelsville",
    name: "Spreckelsville",
    description: "Spreckelsville homeowners depend on our reliable deep cleaning service to restore their properties to pristine condition. We provide consistent, professional cleaning that ensures complete satisfaction and a healthier living environment.",
    faq: [
      {
        question: "Do you service both residential and vacation rental deep cleaning in Spreckelsville?",
        answer: "Yes, we provide comprehensive deep cleaning services for all types of properties including residential homes, vacation rentals, and beachfront properties."
      },
      {
        question: "How do you ensure quality in Spreckelsville deep cleaning?",
        answer: "Every Spreckelsville deep cleaning follows our detailed checklist and includes a comprehensive quality assurance process to guarantee satisfactory results."
      }
    ],
    testimonial: {
      text: "The deep cleaning service for our Spreckelsville home was exceptional. Professional, thorough, and our family could really feel the difference in air quality!",
      author: "Robert H., Spreckelsville Homeowner"
    }
  },
  {
    id: "paia",
    name: "Pa'ia",
    description: "Pa'ia homeowners rely on our professional deep cleaning service to restore their properties to pristine condition. We provide reliable service that helps families maintain healthy living environments in this vibrant coastal community.",
    faq: [
      {
        question: "Do you work around Pa'ia family schedules?",
        answer: "Yes, we can schedule deep cleaning around family schedules and lifestyle commitments while maintaining professional service standards."
      },
      {
        question: "What's your cancellation policy for Pa'ia deep cleaning?",
        answer: "We require 24-hour notice for cancellations, but we're flexible for family emergencies and always work to find alternative solutions that meet your timeline."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been amazing for our Pa'ia family home. Their deep cleaning service helped us create a healthier environment for our kids!",
      author: "Maria S., Pa'ia Homeowner"
    }
  },
  {
    id: "kuau",
    name: "Kuau",
    description: "Kuau homeowners enjoy our comprehensive deep cleaning service that restores their properties to pristine condition. Reliable service for consistent satisfaction and healthier living in this scenic area.",
    faq: [
      {
        question: "Do you offer competitive rates for Kuau deep cleaning?",
        answer: "Yes, we provide affordable, competitive rates for Kuau deep cleaning while maintaining the highest service quality and thoroughness."
      },
      {
        question: "How reliable is your deep cleaning service in Kuau?",
        answer: "We're committed to reliability and have a strong track record of consistent, high-quality deep cleaning services in Kuau."
      }
    ],
    testimonial: {
      text: "The deep cleaning service for our Kuau home was thorough and affordable. Great value and our home felt completely renewed!",
      author: "Carlos M., Kuau Homeowner"
    }
  },
  {
    id: "haiku",
    name: "Ha'iku",
    description: "Ha'iku homeowners depend on our professional deep cleaning service to restore their luxury properties to pristine condition. We understand the high standards expected in this prestigious mountain area where air quality and cleanliness are paramount.",
    faq: [
      {
        question: "Do you handle luxury properties for deep cleaning in Ha'iku?",
        answer: "Yes, we specialize in luxury deep cleaning and are experienced with high-end finishes, premium materials, and luxury property standards."
      },
      {
        question: "Can you accommodate Ha'iku HOA requirements for deep cleaning?",
        answer: "Absolutely! We're familiar with Ha'iku HOA guidelines and ensure full compliance for deep cleaning services while maintaining luxury standards."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provides exceptional deep cleaning for our Ha'iku luxury home. Perfect service for our high-end property and the air quality improvement was remarkable!",
      author: "James L., Ha'iku Homeowner"
    }
  }
];

const DeepCleaningMauiPage = () => {
  const [openItem, setOpenItem] = useState<string>("");

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
        <title>Deep Cleaning Service Maui | Red Rock Cleans</title>
        <meta name="description" content="Restore your home's sparkle with our thorough deep cleaning service on Maui. Red Rock Cleans tackles built-up grime for a truly refreshed home in Wailea, Lahaina, and beyond. Get your free quote!" />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <MauiNavigation loginUrl="https://customer-portal.maidily.com/red-rock-cleans-maui/sign-in" bookingUrl="/book-now-maui" />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative py-24 md:py-32 overflow-hidden">
            <div className="absolute inset-0">
              <img 
                src="/src/assets/hero-residential.jpg" 
                alt="Professional deep cleaning service in a Maui home with beautiful Hawaiian landscape views"
                className="w-full h-full object-cover scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                  Thorough Deep Cleaning Service on Maui
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                  Restore your home's freshness and sparkle with our comprehensive deep cleaning service. We tackle built-up grime, allergens, and everyday wear to make any Maui home feel new again, perfect for a one-time intensive clean that transforms your living space.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="h-14 text-lg px-8" asChild>
                    <Link to="/book-now-maui">
                      <Calendar className="w-5 h-5 mr-2" />
                      Schedule Deep Cleaning
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="h-14 text-lg px-8" asChild>
                    <Link to="/maui-calculator">
                      <Home className="w-5 h-5 mr-2" />
                      Get Free Quote
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
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  Our Comprehensive Deep Cleaning Checklist
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <CheckCircle className="w-6 h-6 text-primary mr-3" />
                      Intensive Surface Cleaning
                    </h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Cleaning baseboards and trim throughout
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Inside of cabinets and drawers
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Inside all appliances (oven, refrigerator, dishwasher)
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Light fixtures and ceiling fans
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Detailed grout scrubbing and tile cleaning
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <CheckCircle className="w-6 h-6 text-primary mr-3" />
                      Maui-Specific Deep Clean
                    </h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Removing sand and salt buildup
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Cleaning window tracks and screens
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Deep carpet and upholstery cleaning
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        HVAC vent and filter cleaning
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Comprehensive dust removal from all surfaces
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
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  The Perfect Solution for a Healthier Home
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center p-6 bg-background rounded-lg shadow-sm">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Removing Built-Up Allergens</h3>
                    <p className="text-muted-foreground">
                      Our deep cleaning eliminates dust, allergens, and pollutants that accumulate over time, creating a healthier living environment for your family, especially important in Maui's climate.
                    </p>
                  </div>
                  <div className="text-center p-6 bg-background rounded-lg shadow-sm">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Sparkles className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Eliminating Dust and Grime</h3>
                    <p className="text-muted-foreground">
                      We tackle the hidden dirt and grime that regular cleaning misses, including salt buildup from ocean air and sand from beach visits, restoring your home's natural beauty.
                    </p>
                  </div>
                  <div className="text-center p-6 bg-background rounded-lg shadow-sm">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Healthier Living Environment</h3>
                    <p className="text-muted-foreground">
                      Create a healthier living environment for your family with our thorough deep cleaning that improves air quality and eliminates harmful buildup that can affect your family's wellbeing.
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
                            <Link to="/book-now-maui">
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
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  Other Cleaning Services for Your Property on Maui
                </h2>
                <p className="text-xl text-muted-foreground mb-12">
                  Beyond deep cleaning, we offer specialized services to meet all your Maui property needs.
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
                    <h3 className="text-lg font-semibold mb-3">How is a deep clean different from a standard clean?</h3>
                    <p className="text-muted-foreground">
                      A deep clean includes intensive tasks not covered in standard cleaning, such as cleaning inside appliances, scrubbing baseboards, detailed grout cleaning, light fixture cleaning, and tackling built-up grime and allergens that accumulate over time.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3">What is the average price for a deep clean in Kihei?</h3>
                    <p className="text-muted-foreground">
                      Deep cleaning costs in Kihei vary by property size, condition, and specific requirements. Contact us for a detailed, customized quote based on your home's needs and the level of deep cleaning required.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3">How often should I get a deep cleaning for my home on Maui?</h3>
                    <p className="text-muted-foreground">
                      We recommend deep cleaning every 3-6 months for Maui homes, or more frequently if you have pets, allergies, or live in areas with high salt air exposure. This helps maintain optimal air quality and cleanliness.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3">How long does a deep cleaning take?</h3>
                    <p className="text-muted-foreground">
                      Deep cleaning typically takes 6-8 hours depending on property size and condition. We can work around your schedule and provide a detailed timeline during your free consultation.
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
                  Ready to Restore Your Home's Sparkle?
                </h2>
                <p className="text-xl mb-8 opacity-90">
                  Join hundreds of satisfied Maui homeowners who trust Red Rock Cleans for professional deep cleaning that transforms their living spaces and creates healthier environments for their families.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" className="h-14 text-lg px-8" asChild>
                    <Link to="/book-now-maui">
                      <Calendar className="w-5 h-5 mr-2" />
                      Schedule Your Deep Cleaning Today
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

export default DeepCleaningMauiPage;

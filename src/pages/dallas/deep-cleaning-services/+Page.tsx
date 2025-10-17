import { DallasNavigation } from "@/components/DallasNavigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Clock, Shield, Star, Users, Calendar, Home, Sparkles, DollarSign, Key, RefreshCw, Heart, Clock4, Zap, HardHat, Hammer, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";

const neighborhoods = [
  {
    id: "university-park",
    name: "University Park",
    description: "University Park homeowners trust our professional deep cleaning service to restore their luxury properties to pristine condition. We understand the high standards expected in this prestigious neighborhood and tackle the unique challenges of maintaining upscale homes with thorough, intensive cleaning.",
    faq: [
      {
        question: "How long does deep cleaning take in University Park?",
        answer: "Deep cleaning typically takes 6-8 hours depending on property size and condition. We'll provide a detailed timeline during your free consultation and can work around your schedule."
      },
      {
        question: "Do you work with luxury properties for deep cleaning in University Park?",
        answer: "Yes, we specialize in luxury deep cleaning and are experienced with high-end finishes, premium materials, and the standards expected in University Park properties."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans transformed our University Park home with their deep cleaning service. The attention to detail was incredible - our home felt brand new again!",
      author: "Sarah M., University Park Homeowner"
    }
  },
  {
    id: "highland-park",
    name: "Highland Park",
    description: "Highland Park homeowners rely on our comprehensive deep cleaning service to restore their luxury properties to pristine condition. We ensure every surface meets the high standards expected in this exclusive neighborhood where intensive cleaning is essential for maintaining property value.",
    faq: [
      {
        question: "Do you handle both luxury and standard homes for deep cleaning in Highland Park?",
        answer: "Yes, we provide deep cleaning services for both luxury properties and standard homes in Highland Park, adapting our service level to match your property's specific needs."
      },
      {
        question: "Can you coordinate with Highland Park homeowner schedules?",
        answer: "Absolutely! We work closely with Highland Park homeowners to schedule deep cleaning services around their lifestyle and availability."
      }
    ],
    testimonial: {
      text: "The deep cleaning service for our Highland Park home was exceptional. Professional, thorough, and they really understood the challenges of luxury home maintenance!",
      author: "Michael R., Highland Park Property Owner"
    }
  },
  {
    id: "uptown-dallas",
    name: "Uptown Dallas",
    description: "Uptown Dallas homeowners depend on our professional deep cleaning service to restore their urban properties to pristine condition. We understand the unique challenges of city living including dust, pollution, and high-traffic areas that require intensive cleaning attention.",
    faq: [
      {
        question: "Do you service both apartments and houses for deep cleaning in Uptown Dallas?",
        answer: "Yes, we specialize in deep cleaning for both apartments and houses in Uptown Dallas, adapting our service to your specific property type and urban living challenges."
      },
      {
        question: "How do you handle urban pollution buildup in Uptown Dallas?",
        answer: "Every Uptown Dallas deep cleaning includes special attention to urban pollution removal, using appropriate techniques and products to restore your home's natural beauty."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provided excellent deep cleaning for our Uptown Dallas condo. They really understood the challenges of urban living and our home felt completely refreshed!",
      author: "Jennifer L., Uptown Dallas Homeowner"
    }
  },
  {
    id: "downtown-dallas",
    name: "Downtown Dallas",
    description: "Downtown Dallas homeowners trust our reliable deep cleaning service to restore their urban properties to pristine condition. We understand the importance of intensive cleaning in this busy business district where dust and pollution can accumulate quickly.",
    faq: [
      {
        question: "What makes Downtown Dallas deep cleaning different?",
        answer: "Downtown Dallas deep cleaning addresses the unique requirements of urban properties, including high-rise buildings, increased pollution exposure, and the challenges of downtown living."
      },
      {
        question: "Do you offer same-day deep cleaning in Downtown Dallas?",
        answer: "Yes, we can often accommodate urgent deep cleaning requests for Downtown Dallas properties, subject to availability and property size requirements."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been our go-to deep cleaning service for Downtown Dallas properties. Reliable, professional, and they understand urban cleaning challenges!",
      author: "Lisa W., Downtown Dallas Property Owner"
    }
  },
  {
    id: "preston-hollow",
    name: "Preston Hollow",
    description: "Preston Hollow homeowners enjoy our comprehensive deep cleaning service that restores their luxury properties to pristine condition. Perfect for the upscale Preston Hollow lifestyle where homes require meticulous attention to detail and intensive cleaning for optimal maintenance.",
    faq: [
      {
        question: "Do you work with luxury properties for deep cleaning in Preston Hollow?",
        answer: "Yes, we're experienced with luxury deep cleaning and can provide services that meet the high standards expected by homeowners in Preston Hollow properties."
      },
      {
        question: "Can you customize deep cleaning for Preston Hollow properties?",
        answer: "Absolutely! We can adapt our cleaning checklist based on your Preston Hollow property's unique features and specific maintenance requirements."
      }
    ],
    testimonial: {
      text: "The deep cleaning service for our Preston Hollow home was wonderful. Professional, reliable, and our luxury property looked absolutely stunning afterward!",
      author: "Amanda T., Preston Hollow Homeowner"
    }
  },
  {
    id: "plano",
    name: "Plano",
    description: "Plano homeowners trust our professional deep cleaning service to restore their properties to pristine condition. We provide reliable service that meets the demands of this family-friendly area where thorough cleaning is essential for healthy living.",
    faq: [
      {
        question: "How do you handle large-scale deep cleaning in Plano?",
        answer: "We're experienced with large-scale properties and can deploy multiple teams to handle extensive deep cleaning efficiently while maintaining quality standards."
      },
      {
        question: "What if I need to reschedule my Plano deep cleaning?",
        answer: "We're flexible with rescheduling and work closely with Plano homeowners to accommodate schedule changes while maintaining service quality."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provides excellent deep cleaning for our Plano home. They really understood our family's needs and our home felt completely renewed!",
      author: "David K., Plano Homeowner"
    }
  },
  {
    id: "frisco",
    name: "Frisco",
    description: "Frisco homeowners depend on our reliable deep cleaning service to restore their properties to pristine condition. We provide consistent, professional cleaning that ensures complete satisfaction and a healthier living environment in this rapidly growing area.",
    faq: [
      {
        question: "Do you service both residential and commercial deep cleaning in Frisco?",
        answer: "Yes, we provide comprehensive deep cleaning services for all types of properties including residential homes, commercial spaces, and mixed-use developments."
      },
      {
        question: "How do you ensure quality in Frisco deep cleaning?",
        answer: "Every Frisco deep cleaning follows our detailed checklist and includes a comprehensive quality assurance process to guarantee satisfactory results."
      }
    ],
    testimonial: {
      text: "The deep cleaning service for our Frisco home was exceptional. Professional, thorough, and our family could really feel the difference in air quality!",
      author: "Robert H., Frisco Homeowner"
    }
  },
  {
    id: "prosper",
    name: "Prosper",
    description: "Prosper homeowners rely on our professional deep cleaning service to restore their properties to pristine condition. We provide reliable service that helps families maintain healthy living environments in this thriving community where cleanliness is a priority.",
    faq: [
      {
        question: "Do you work around Prosper family schedules?",
        answer: "Yes, we can schedule deep cleaning around family schedules and lifestyle commitments while maintaining professional service standards."
      },
      {
        question: "What's your cancellation policy for Prosper deep cleaning?",
        answer: "We require 24-hour notice for cancellations, but we're flexible for family emergencies and always work to find alternative solutions that meet your timeline."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been amazing for our Prosper family home. Their deep cleaning service helped us create a healthier environment for our kids!",
      author: "Maria S., Prosper Homeowner"
    }
  }
];

const DeepCleaningDallasPage = () => {
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
        <title>Deep Cleaning Service Dallas | Red Rock Cleans</title>
        <meta name="description" content="Restore your home's sparkle with our thorough deep cleaning service in Dallas. We tackle built-up grime for a truly refreshed home in Plano, Frisco, and beyond. Get your free quote!" />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <DallasNavigation loginUrl="https://customer-portal.maidily.com/red-rock-cleans-dallas/sign-in" bookingUrl="/book-now-dallas" />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative py-24 md:py-32 overflow-hidden">
            <div className="absolute inset-0">
              <img 
                src="/src/assets/hero-residential.jpg" 
                alt="Professional deep cleaning service in a beautiful Dallas home with modern city skyline views"
                className="w-full h-full object-cover scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                  Thorough Deep Cleaning Service in Dallas
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                  Restore your home's sparkle and freshness with our comprehensive deep cleaning service. We tackle built-up dust, grime, and allergens that regular cleaning misses, perfect for a one-time intensive clean that makes any Dallas home feel new again.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="h-14 text-lg px-8" asChild>
                    <Link to="/book-now-dallas">
                      <Calendar className="w-5 h-5 mr-2" />
                      Schedule Deep Cleaning
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="h-14 text-lg px-8" asChild>
                    <Link to="/dallas-calculator">
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
                      Dallas-Specific Deep Clean
                    </h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Removing dust and pollution buildup
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
                      Our deep cleaning eliminates dust, allergens, and pollutants that accumulate over time, creating a healthier living environment for your family, especially important in the Dallas area's climate.
                    </p>
                  </div>
                  <div className="text-center p-6 bg-background rounded-lg shadow-sm">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Sparkles className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Eliminating Dust and Grime</h3>
                    <p className="text-muted-foreground">
                      We tackle the hidden dirt and grime that regular cleaning misses, including dust buildup from city living and pollution exposure, restoring your home's natural beauty and sparkle.
                    </p>
                  </div>
                  <div className="text-center p-6 bg-background rounded-lg shadow-sm">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Healthier Living Environment</h3>
                    <p className="text-muted-foreground">
                      Create a healthier living environment for your family with our thorough deep cleaning that improves air quality and eliminates harmful buildup that can affect your family's wellbeing in Dallas.
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
                  Areas We Serve in Dallas
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
                            <Link to="/book-now-dallas">
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
                  Other Cleaning Services for Your Property in Dallas
                </h2>
                <p className="text-xl text-muted-foreground mb-12">
                  Beyond deep cleaning, we offer specialized services to meet all your Dallas property needs.
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
                    <h3 className="text-lg font-semibold mb-3">What is the average price for a deep clean in the Dallas area?</h3>
                    <p className="text-muted-foreground">
                      Deep cleaning costs in Dallas vary by property size, condition, and specific requirements. Contact us for a detailed, customized quote based on your home's needs and the level of deep cleaning required.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3">How long does a deep cleaning service take?</h3>
                    <p className="text-muted-foreground">
                      Deep cleaning typically takes 6-8 hours depending on property size and condition. We can work around your schedule and provide a detailed timeline during your free consultation.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3">How often should I get a deep cleaning for my home in Dallas?</h3>
                    <p className="text-muted-foreground">
                      We recommend deep cleaning every 3-6 months for Dallas homes, or more frequently if you have pets, allergies, or live in areas with high pollution exposure. This helps maintain optimal air quality and cleanliness.
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
                  Join hundreds of satisfied Dallas homeowners who trust Red Rock Cleans for professional deep cleaning that transforms their living spaces and creates healthier environments for their families.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" className="h-14 text-lg px-8" asChild>
                    <Link to="/book-now-dallas">
                      <Calendar className="w-5 h-5 mr-2" />
                      Schedule Your Deep Cleaning Today
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

export default DeepCleaningDallasPage;

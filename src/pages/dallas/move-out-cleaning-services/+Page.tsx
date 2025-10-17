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
    description: "University Park renters and homeowners trust our professional move out cleaning service to secure their security deposits and prepare properties for sale. We understand the high standards expected in this prestigious neighborhood and ensure every property meets inspection requirements.",
    faq: [
      {
        question: "How reliable is your move out cleaning service in University Park?",
        answer: "Our move out cleaning service is highly reliable with a 99.9% on-time completion rate. We understand the importance of meeting inspection deadlines and coordinate perfectly with your move-out schedule."
      },
      {
        question: "Do you work with luxury properties for move out cleaning in University Park?",
        answer: "Yes, we specialize in move out cleaning for luxury properties and are experienced with high-end finishes, premium materials, and the standards expected by landlords and buyers in University Park."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans helped us secure our full security deposit with their move out cleaning service in University Park. Professional, thorough, and our landlord was impressed!",
      author: "Sarah M., University Park Renter"
    }
  },
  {
    id: "highland-park",
    name: "Highland Park",
    description: "Highland Park renters and homeowners rely on our comprehensive move out cleaning service to secure their deposits and prepare properties for sale. We ensure every surface meets the high standards expected in this exclusive neighborhood where property inspections are thorough.",
    faq: [
      {
        question: "Do you handle both rental and sale preparation for move out cleaning in Highland Park?",
        answer: "Yes, we provide move out cleaning services for both rental properties and homes being prepared for sale in Highland Park, adapting our service level to match your specific needs."
      },
      {
        question: "Can you coordinate with Highland Park landlord schedules?",
        answer: "Absolutely! We work closely with Highland Park landlords, property managers, and homeowners to schedule move out cleaning services around inspection times and move-out deadlines."
      }
    ],
    testimonial: {
      text: "The move out cleaning service for our Highland Park rental was exceptional. Professional, reliable, and we got our full security deposit back without any issues!",
      author: "Michael R., Highland Park Renter"
    }
  },
  {
    id: "uptown-dallas",
    name: "Uptown Dallas",
    description: "Uptown Dallas renters and homeowners depend on our professional move out cleaning service to secure their deposits and prepare properties for sale. We understand the unique challenges of urban apartment and condo move-outs in this vibrant neighborhood.",
    faq: [
      {
        question: "Do you service both apartments and condos for move out cleaning in Uptown Dallas?",
        answer: "Yes, we specialize in move out cleaning for both apartments and condos in Uptown Dallas, adapting our service to your specific property type and building requirements."
      },
      {
        question: "How do you handle quick move-outs in Uptown Dallas?",
        answer: "Every Uptown Dallas move out cleaning is optimized for efficiency, using streamlined processes and experienced teams to meet tight move-out deadlines and inspection schedules."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provided excellent move out cleaning for our Uptown Dallas apartment. They really understood the fast-paced nature of urban moves and our landlord was very satisfied!",
      author: "Jennifer L., Uptown Dallas Renter"
    }
  },
  {
    id: "downtown-dallas",
    name: "Downtown Dallas",
    description: "Downtown Dallas renters and homeowners trust our reliable move out cleaning service to secure their deposits and prepare properties for sale. We understand the importance of meeting strict move-out deadlines and maintaining high standards in this busy business district.",
    faq: [
      {
        question: "What makes Downtown Dallas move out cleaning different?",
        answer: "Downtown Dallas move out cleaning addresses the unique requirements of urban properties, including high-rise buildings, strict building management requirements, and the challenges of downtown move-out logistics."
      },
      {
        question: "Do you offer same-day move out cleaning in Downtown Dallas?",
        answer: "Yes, we can often accommodate urgent move out cleaning requests for Downtown Dallas properties, subject to availability and move-out schedule requirements."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been our go-to move out cleaning service for Downtown Dallas properties. Reliable, professional, and they understand urban move-out challenges!",
      author: "Lisa W., Downtown Dallas Renter"
    }
  },
  {
    id: "preston-hollow",
    name: "Preston Hollow",
    description: "Preston Hollow renters and homeowners enjoy our comprehensive move out cleaning service that secures deposits and prepares properties for sale. Perfect for the upscale Preston Hollow lifestyle where properties require meticulous attention to detail for inspections and showings.",
    faq: [
      {
        question: "Do you work with luxury properties for move out cleaning in Preston Hollow?",
        answer: "Yes, we're experienced with luxury property move out cleaning and can provide services that meet the high standards expected by landlords and buyers in Preston Hollow properties."
      },
      {
        question: "Can you customize move out cleaning for Preston Hollow properties?",
        answer: "Absolutely! We can adapt our cleaning checklist based on your Preston Hollow property's unique features, luxury finishes, and specific inspection requirements."
      }
    ],
    testimonial: {
      text: "The move out cleaning service for our Preston Hollow home was wonderful. Professional, reliable, and our property was ready for sale immediately after our move!",
      author: "Amanda T., Preston Hollow Homeowner"
    }
  },
  {
    id: "plano",
    name: "Plano",
    description: "Plano renters and homeowners trust our professional move out cleaning service to secure their deposits and prepare properties for sale. We provide reliable service that meets the demands of this family-friendly area where property inspections are thorough.",
    faq: [
      {
        question: "How do you handle large-scale move out cleaning in Plano?",
        answer: "We're experienced with large-scale properties and can deploy multiple teams to handle extensive move out cleaning efficiently while maintaining quality standards."
      },
      {
        question: "What if I need to reschedule my Plano move out cleaning?",
        answer: "We're flexible with rescheduling and work closely with Plano renters and homeowners to accommodate move-out schedule changes while maintaining service quality."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provides excellent move out cleaning for our Plano home. They really understood our timeline and our landlord was very impressed with the results!",
      author: "David K., Plano Renter"
    }
  },
  {
    id: "frisco",
    name: "Frisco",
    description: "Frisco renters and homeowners depend on our reliable move out cleaning service to secure their deposits and prepare properties for sale. We provide consistent, professional cleaning that ensures complete satisfaction and successful inspections in this rapidly growing area.",
    faq: [
      {
        question: "Do you service both rental and sale preparation for move out cleaning in Frisco?",
        answer: "Yes, we provide comprehensive move out cleaning services for all types of properties including rental homes, properties being sold, and mixed-use developments."
      },
      {
        question: "How do you ensure quality in Frisco move out cleaning?",
        answer: "Every Frisco move out cleaning follows our detailed checklist and includes a comprehensive quality assurance process to guarantee inspection-ready results."
      }
    ],
    testimonial: {
      text: "The move out cleaning service for our Frisco rental was exceptional. Professional, thorough, and we got our full security deposit back without any deductions!",
      author: "Robert H., Frisco Renter"
    }
  },
  {
    id: "prosper",
    name: "Prosper",
    description: "Prosper renters and homeowners rely on our professional move out cleaning service to secure their deposits and prepare properties for sale. We provide reliable service that helps families and individuals achieve successful move-outs in this thriving community.",
    faq: [
      {
        question: "Do you work around Prosper family schedules?",
        answer: "Yes, we can schedule move out cleaning around family schedules and move-out timelines while maintaining professional service standards."
      },
      {
        question: "What's your cancellation policy for Prosper move out cleaning?",
        answer: "We require 24-hour notice for cancellations, but we're flexible for move-out delays and always work to find alternative solutions that meet your timeline."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been amazing for our Prosper move out. Their cleaning service helped us secure our full deposit and made our move much less stressful!",
      author: "Maria S., Prosper Renter"
    }
  }
];

const MoveOutCleaningDallasPage = () => {
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
        <title>Move Out Cleaning Service in Dallas | Red Rock Cleans</title>
        <meta name="description" content="Secure your deposit with our reliable move out cleaning service in Dallas. We provide thorough end-of-tenancy cleaning in Plano, Frisco, and beyond. Book today!" />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <DallasNavigation loginUrl="https://customer-portal.maidily.com/red-rock-cleans-dallas/sign-in" bookingUrl="/book-now-dallas" />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative py-24 md:py-32 overflow-hidden">
            <div className="absolute inset-0">
              <img 
                src="/src/assets/hero-residential.jpg" 
                alt="Professional move out cleaning service in a Dallas apartment with modern city skyline views"
                className="w-full h-full object-cover scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                  Stress-Free Move Out Cleaning Service in Dallas
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                  Secure your security deposit and make your move easier with our professional move out cleaning service. In the competitive Dallas real estate market, our thorough end-of-tenancy cleaning helps renters and homeowners prepare properties for successful inspections and sales.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="h-14 text-lg px-8" asChild>
                    <Link to="/book-now-dallas">
                      <Calendar className="w-5 h-5 mr-2" />
                      Schedule Move Out Cleaning
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

          {/* Our Deposit-Focused Move Out Cleaning Checklist */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  Our Deposit-Focused Move Out Cleaning Checklist
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <CheckCircle className="w-6 h-6 text-primary mr-3" />
                      Kitchen & Appliance Deep Clean
                    </h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Inside oven cleaning and degreasing
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Inside refrigerator and freezer cleaning
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Inside all cabinets and drawers
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Dishwasher and garbage disposal cleaning
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Countertop and sink sanitization
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <CheckCircle className="w-6 h-6 text-primary mr-3" />
                      Comprehensive Surface Cleaning
                    </h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Baseboard cleaning throughout
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Inside all closets and storage areas
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Light fixtures and ceiling fan cleaning
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Window tracks and sills cleaning
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Bathroom deep sanitization
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
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  Make Your Move Easier and Secure Your Deposit
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center p-6 bg-background rounded-lg shadow-sm">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Clock className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Save Time During Your Move</h3>
                    <p className="text-muted-foreground">
                      Focus on packing and coordinating your move while we handle the cleaning. Our professional team ensures your property is inspection-ready, giving you peace of mind during this stressful time.
                    </p>
                  </div>
                  <div className="text-center p-6 bg-background rounded-lg shadow-sm">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Impress Landlords and Buyers</h3>
                    <p className="text-muted-foreground">
                      Our thorough cleaning creates an excellent first impression with landlords and potential buyers. A spotless property demonstrates respect for the property and increases your chances of a successful inspection.
                    </p>
                  </div>
                  <div className="text-center p-6 bg-background rounded-lg shadow-sm">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <DollarSign className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Maximize Security Deposit Return</h3>
                    <p className="text-muted-foreground">
                      Our comprehensive cleaning checklist addresses all common landlord concerns, maximizing your chances of receiving your full security deposit back without deductions for cleaning fees.
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
                            <Link to="/book-now-dallas">
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
                  Other Cleaning Services for Your Property in Dallas
                </h2>
                <p className="text-xl text-muted-foreground mb-12">
                  Beyond move out cleaning, we offer specialized services to meet all your Dallas property needs.
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
                    <h3 className="text-lg font-semibold mb-3">Should the property be completely empty before you arrive?</h3>
                    <p className="text-muted-foreground">
                      For the best results, we recommend having the property as empty as possible. However, we can work around furniture and items that are difficult to move. We'll clean around remaining items and focus on the areas that matter most for inspections.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3">What is the average cost for a move out clean in the Dallas area?</h3>
                    <p className="text-muted-foreground">
                      Move out cleaning costs in Dallas vary by property size, condition, and specific requirements. Contact us for a detailed, customized quote based on your property's needs and the level of cleaning required.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3">Do you guarantee I'll get my security deposit back?</h3>
                    <p className="text-muted-foreground">
                      While we can't guarantee your security deposit return (as that depends on your landlord's policies), our comprehensive cleaning checklist addresses all common landlord concerns and significantly increases your chances of receiving your full deposit back.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3">How long does move out cleaning take?</h3>
                    <p className="text-muted-foreground">
                      Move out cleaning typically takes 4-8 hours depending on property size and condition. We can work around your schedule and provide a detailed timeline during your free consultation.
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
                  Join hundreds of satisfied Dallas renters and homeowners who trust Red Rock Cleans for reliable move out cleaning that maximizes their security deposit returns.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" className="h-14 text-lg px-8" asChild>
                    <Link to="/book-now-dallas">
                      <Calendar className="w-5 h-5 mr-2" />
                      Schedule Your Move Out Cleaning Today
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

export default MoveOutCleaningDallasPage;

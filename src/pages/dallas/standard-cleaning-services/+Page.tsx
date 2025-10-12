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
    description: "University Park homeowners trust our reliable standard cleaning service to maintain their luxury properties consistently clean and beautiful. We understand the high standards expected in this prestigious neighborhood and provide regular maintenance that keeps homes spotless week after week.",
    faq: [
      {
        question: "How flexible is scheduling for University Park standard cleaning?",
        answer: "We offer flexible scheduling including weekly, bi-weekly, or monthly service to fit your lifestyle. We can work around your schedule and accommodate changes as needed."
      },
      {
        question: "Do you work with luxury properties for standard cleaning in University Park?",
        answer: "Yes, we specialize in luxury property maintenance and are experienced with high-end finishes, premium materials, and the standards expected by homeowners in University Park."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our University Park home beautifully with their standard cleaning service. Reliable, professional, and our home always looks perfect!",
      author: "Sarah M., University Park Homeowner"
    }
  },
  {
    id: "highland-park",
    name: "Highland Park",
    description: "Highland Park homeowners rely on our professional standard cleaning service to keep their luxury properties consistently clean and beautiful. We provide reliable recurring service that ensures your home stays pristine in this exclusive neighborhood where cleanliness is paramount.",
    faq: [
      {
        question: "Do you handle both luxury and standard homes for regular cleaning in Highland Park?",
        answer: "Yes, we provide standard cleaning services for both luxury properties and standard homes in Highland Park, adapting our service level to match your property's specific needs."
      },
      {
        question: "Can you coordinate with Highland Park homeowner schedules?",
        answer: "Absolutely! We work closely with Highland Park homeowners to schedule standard cleaning services around their lifestyle and availability."
      }
    ],
    testimonial: {
      text: "The standard cleaning service for our Highland Park home has been wonderful. Consistent, professional, and they really understand the challenges of luxury home maintenance!",
      author: "Michael R., Highland Park Property Owner"
    }
  },
  {
    id: "uptown-dallas",
    name: "Uptown Dallas",
    description: "Uptown Dallas homeowners depend on our professional standard cleaning service to maintain their urban properties consistently clean and comfortable. We provide reliable recurring service that fits perfectly with the active Uptown lifestyle where time is precious.",
    faq: [
      {
        question: "Do you service both apartments and houses for standard cleaning in Uptown Dallas?",
        answer: "Yes, we specialize in standard cleaning for both apartments and houses in Uptown Dallas, adapting our service to your specific property type and urban living needs."
      },
      {
        question: "How do you handle quick turnovers in Uptown Dallas?",
        answer: "Every Uptown Dallas standard cleaning is optimized for efficiency, using streamlined processes and experienced teams to maintain cleanliness despite busy urban schedules."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provides excellent standard cleaning for our Uptown Dallas condo. Consistent, reliable, and our home always feels fresh and clean!",
      author: "Jennifer L., Uptown Dallas Homeowner"
    }
  },
  {
    id: "downtown-dallas",
    name: "Downtown Dallas",
    description: "Downtown Dallas homeowners trust our reliable standard cleaning service to maintain their urban properties consistently clean and comfortable. We understand the importance of meeting busy schedules and maintaining high standards in this bustling business district.",
    faq: [
      {
        question: "What makes Downtown Dallas standard cleaning different?",
        answer: "Downtown Dallas standard cleaning addresses the unique requirements of urban properties, including high-rise buildings, busy professional schedules, and the challenges of downtown living."
      },
      {
        question: "Do you offer flexible scheduling for Downtown Dallas?",
        answer: "Yes, we can accommodate various scheduling needs for Downtown Dallas properties, from weekly to monthly service, adapting to your busy professional lifestyle."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been our go-to standard cleaning service for Downtown Dallas properties. Reliable, professional, and they understand urban lifestyle challenges!",
      author: "Lisa W., Downtown Dallas Property Owner"
    }
  },
  {
    id: "preston-hollow",
    name: "Preston Hollow",
    description: "Preston Hollow homeowners enjoy our comprehensive standard cleaning service that maintains their luxury properties consistently clean and beautiful. Perfect for the upscale Preston Hollow lifestyle where homes require regular maintenance to stay spotless.",
    faq: [
      {
        question: "Do you work with luxury properties for standard cleaning in Preston Hollow?",
        answer: "Yes, we're experienced with luxury property maintenance and can provide standard cleaning services that meet the high standards expected by homeowners in Preston Hollow properties."
      },
      {
        question: "Can you customize standard cleaning for Preston Hollow properties?",
        answer: "Absolutely! We can adapt our cleaning checklist based on your Preston Hollow property's unique features and specific maintenance requirements."
      }
    ],
    testimonial: {
      text: "The standard cleaning service for our Preston Hollow home has been fantastic. Consistent, reliable, and our luxury property always looks beautiful!",
      author: "Amanda T., Preston Hollow Homeowner"
    }
  },
  {
    id: "plano",
    name: "Plano",
    description: "Plano homeowners trust our professional standard cleaning service to maintain their properties consistently clean and comfortable. We provide reliable service that meets the demands of this family-friendly area where regular maintenance is essential for busy families.",
    faq: [
      {
        question: "How do you handle large-scale standard cleaning in Plano?",
        answer: "We're experienced with large-scale properties and can deploy multiple teams to handle extensive standard cleaning efficiently while maintaining quality standards."
      },
      {
        question: "What if I need to reschedule my Plano standard cleaning?",
        answer: "We're flexible with rescheduling and work closely with Plano homeowners to accommodate schedule changes while maintaining consistent service quality."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provides excellent standard cleaning for our Plano home. They really understood our family's needs and our home always feels welcoming!",
      author: "David K., Plano Homeowner"
    }
  },
  {
    id: "frisco",
    name: "Frisco",
    description: "Frisco homeowners depend on our reliable standard cleaning service to maintain their properties consistently clean and comfortable. We provide consistent, professional cleaning that ensures complete satisfaction and a perpetually tidy home in this rapidly growing area.",
    faq: [
      {
        question: "Do you service both residential and commercial standard cleaning in Frisco?",
        answer: "Yes, we provide comprehensive standard cleaning services for all types of properties including residential homes, commercial spaces, and mixed-use developments."
      },
      {
        question: "How do you ensure consistency in Frisco standard cleaning?",
        answer: "Every Frisco standard cleaning follows our detailed checklist and includes a comprehensive quality assurance process to guarantee consistent, satisfactory results."
      }
    ],
    testimonial: {
      text: "The standard cleaning service for our Frisco home has been exceptional. Consistent, professional, and our family always enjoys coming home to a clean house!",
      author: "Robert H., Frisco Homeowner"
    }
  },
  {
    id: "prosper",
    name: "Prosper",
    description: "Prosper homeowners rely on our professional standard cleaning service to maintain their properties consistently clean and comfortable. We provide reliable service that helps families maintain healthy living environments in this thriving community.",
    faq: [
      {
        question: "Do you work around Prosper family schedules?",
        answer: "Yes, we can schedule standard cleaning around family schedules and lifestyle commitments while maintaining professional service standards."
      },
      {
        question: "What's your cancellation policy for Prosper standard cleaning?",
        answer: "We require 24-hour notice for cancellations, but we're flexible for family emergencies and always work to find alternative solutions that meet your timeline."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been amazing for our Prosper family home. Their standard cleaning service helps us maintain a clean, healthy environment for our kids!",
      author: "Maria S., Prosper Homeowner"
    }
  }
];

const StandardCleaningDallasPage = () => {
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
        <title>Standard Cleaning Service Dallas | Red Rock Cleans</title>
        <meta name="description" content="Keep your Dallas home consistently beautiful with our reliable standard cleaning service. We offer flexible maid services in Plano, Frisco, and beyond. Get your free quote!" />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <DallasNavigation loginUrl="https://customer-portal.maidily.com/red-rock-cleans-dallas/sign-in" bookingUrl="/book-now-dallas" />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative py-24 md:py-32 overflow-hidden">
            <div className="absolute inset-0">
              <img 
                src="/src/assets/hero-residential.jpg" 
                alt="Professional standard cleaning service in a beautiful Dallas home with modern city skyline views"
                className="w-full h-full object-cover scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                  Reliable Standard Cleaning Service in Dallas
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                  Give yourself the gift of time with our dependable recurring cleaning service. Our professional standard cleaning gives busy Dallas families and professionals more time to enjoy their lives, free from the burden of household chores and maintenance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="h-14 text-lg px-8" asChild>
                    <Link to="/book-now-dallas">
                      <Calendar className="w-5 h-5 mr-2" />
                      Schedule Your Cleaning
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

          {/* Our Standard Cleaning Checklist */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  Our Standard Cleaning Checklist
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <CheckCircle className="w-6 h-6 text-primary mr-3" />
                      General Cleaning Tasks
                    </h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Dusting all surfaces and furniture
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Vacuuming and mopping all floors
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Cleaning kitchen counters and sinks
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Sanitizing all bathroom surfaces
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Emptying trash and replacing liners
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <CheckCircle className="w-6 h-6 text-primary mr-3" />
                      Dallas-Specific Maintenance
                    </h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Cleaning window sills and tracks
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Regular dusting of ceiling fans
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Maintaining clean mirrors and glass
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Organizing and tidying living spaces
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Light fixture and surface polishing
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
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  Enjoy a Consistently Clean Home
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center p-6 bg-background rounded-lg shadow-sm">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Professional and Vetted Cleaners</h3>
                    <p className="text-muted-foreground">
                      Our team consists of professional, background-checked cleaners who are trained to deliver consistent, high-quality results every time they visit your Dallas home.
                    </p>
                  </div>
                  <div className="text-center p-6 bg-background rounded-lg shadow-sm">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Clock className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Flexible Scheduling</h3>
                    <p className="text-muted-foreground">
                      Choose from weekly, bi-weekly, or monthly service to fit your lifestyle. We work around your schedule and can accommodate changes as needed for your convenience.
                    </p>
                  </div>
                  <div className="text-center p-6 bg-background rounded-lg shadow-sm">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Peace of Mind</h3>
                    <p className="text-muted-foreground">
                      Enjoy the peace of mind that comes with a perpetually tidy home. Spend more time enjoying Dallas attractions and activities instead of worrying about cleaning.
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
                            Professional standard cleaning services
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
                              Schedule Your {neighborhood.name} Standard Cleaning
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
                  Beyond standard cleaning, we offer specialized services to meet all your Dallas property needs.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Link to="/dallas/deep-cleaning-services/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Deep Cleaning Services
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Comprehensive deep cleaning for those hard-to-reach areas and intensive cleaning needs.
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
                    <h3 className="text-lg font-semibold mb-3">Do I need to be home for my recurring cleaning service?</h3>
                    <p className="text-muted-foreground">
                      No, you don't need to be home during your standard cleaning service. We can work with your schedule and can arrange key access or entry instructions that work best for your lifestyle and security needs.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3">What is the price for weekly house cleaning in the Dallas area?</h3>
                    <p className="text-muted-foreground">
                      Standard cleaning costs in Dallas vary by property size, frequency, and specific requirements. Contact us for a detailed, customized quote based on your home's needs and preferred cleaning schedule.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3">Do you use eco-friendly cleaning supplies?</h3>
                    <p className="text-muted-foreground">
                      Yes, we use eco-friendly and family-safe cleaning supplies that are effective yet gentle on your family and the environment, perfect for maintaining a healthy home in Dallas.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3">How often should I schedule standard cleaning?</h3>
                    <p className="text-muted-foreground">
                      Most Dallas homeowners choose weekly or bi-weekly standard cleaning to maintain consistent cleanliness. We can recommend the best frequency based on your lifestyle, home size, and specific needs.
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
                  Ready to Enjoy a Consistently Clean Home?
                </h2>
                <p className="text-xl mb-8 opacity-90">
                  Join hundreds of satisfied Dallas homeowners who trust Red Rock Cleans for reliable standard cleaning that gives them more time to enjoy their lives.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" className="h-14 text-lg px-8" asChild>
                    <Link to="/book-now-dallas">
                      <Calendar className="w-5 h-5 mr-2" />
                      Schedule Your Standard Cleaning Today
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="h-14 text-lg px-8 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                    <Link to="/dallas-calculator">
                      <Home className="w-5 h-5 mr-2" />
                      Get Your Free Quote
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Image Section */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <img 
                  src="/src/assets/hero-residential.jpg" 
                  alt="A bright and tidy living room in a Dallas home after a standard cleaning by Red Rock Cleans"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default StandardCleaningDallasPage;

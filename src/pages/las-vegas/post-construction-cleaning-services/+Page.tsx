import { LasVegasNavigation } from "@/components/LasVegasNavigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Clock, Shield, Star, Users, Calendar, Home, Sparkles, HardHat, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";

const neighborhoods = [
  {
    id: "anthem",
    name: "Anthem",
    description: "Transform your Anthem construction site into a move-in ready masterpiece with our professional post construction cleaning service that meets HOA standards.",
    faq: [
      {
        question: "Do you handle luxury new builds in Anthem?",
        answer: "Yes, we specialize in post construction cleaning for luxury new builds and renovations in Anthem, ensuring every detail meets the highest standards."
      },
      {
        question: "How long does post construction cleaning take in Anthem?",
        answer: "Post construction cleaning in Anthem typically takes 1-3 days depending on project size, with rough clean, final clean, and touch-up phases."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans transformed our Anthem new build from a dusty construction site to a pristine, move-in ready home. Exceptional attention to detail!",
      author: "Sarah M., Anthem Homeowner"
    }
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "Enterprise contractors and homeowners trust our post construction cleaning service to deliver flawless results that exceed expectations.",
    faq: [
      {
        question: "What phases of post construction cleaning do you provide?",
        answer: "We provide rough clean, final clean, and touch-up clean phases to ensure your Enterprise property is completely move-in ready."
      },
      {
        question: "Do you work with Enterprise contractors?",
        answer: "Yes, we work closely with Enterprise contractors and developers to ensure seamless post construction cleaning that meets all project timelines."
      }
    ],
    testimonial: {
      text: "The post construction cleaning service for our Enterprise renovation was outstanding. Professional, thorough, and our clients were amazed by the final result.",
      author: "Michael R., Enterprise Contractor"
    }
  },
  {
    id: "green-valley-north",
    name: "Green Valley North",
    description: "Green Valley North developers and homeowners rely on our post construction cleaning service to ensure their properties are safe and move-in ready.",
    faq: [
      {
        question: "Do you remove construction debris in Green Valley North?",
        answer: "Yes, our post construction cleaning includes complete debris removal, dust cleanup, and detailed surface cleaning throughout Green Valley North."
      },
      {
        question: "Can you handle large commercial projects in Green Valley North?",
        answer: "Absolutely! We handle both residential and commercial post construction cleaning projects of any size in Green Valley North."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans made our Green Valley North new build project shine. The post construction cleaning was thorough and professional.",
      author: "Jennifer L., Green Valley North Developer"
    }
  },
  {
    id: "henderson",
    name: "Henderson",
    description: "Henderson contractors and homeowners depend on our post construction cleaning service to deliver pristine results that showcase their work beautifully.",
    faq: [
      {
        question: "Do you clean construction dust from all surfaces in Henderson?",
        answer: "Yes, our Henderson post construction cleaning includes comprehensive dust removal from all surfaces, fixtures, and hard-to-reach areas."
      },
      {
        question: "How much does post construction cleaning cost in Henderson?",
        answer: "Post construction cleaning costs in Henderson vary by project size and complexity. Contact us for a detailed, customized quote."
      }
    ],
    testimonial: {
      text: "The post construction cleaning service for our Henderson renovation was exceptional. Every detail was perfect and our clients were thrilled!",
      author: "Amanda T., Henderson Contractor"
    }
  },
  {
    id: "lake-las-vegas",
    name: "Lake Las Vegas",
    description: "Lake Las Vegas luxury developers trust our post construction cleaning service to deliver the impeccable standards expected in premium properties.",
    faq: [
      {
        question: "Do you service luxury properties in Lake Las Vegas?",
        answer: "Yes, we specialize in post construction cleaning for luxury properties with high-end finishes and premium materials in Lake Las Vegas."
      },
      {
        question: "Can you work with Lake Las Vegas property developers?",
        answer: "Absolutely! We work closely with Lake Las Vegas developers to ensure seamless post construction cleaning that meets luxury standards."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans delivered exceptional post construction cleaning for our Lake Las Vegas luxury development. Professional service that exceeded expectations!",
      author: "David K., Lake Las Vegas Developer"
    }
  },
  {
    id: "las-vegas",
    name: "Las Vegas",
    description: "Las Vegas contractors and developers rely on our post construction cleaning service to ensure their projects are safe, clean, and move-in ready.",
    faq: [
      {
        question: "What is included in post construction cleaning in Las Vegas?",
        answer: "Our Las Vegas post construction cleaning includes debris removal, dust cleanup, window cleaning, fixture polishing, and detailed surface cleaning."
      },
      {
        question: "Do you offer same-day post construction cleaning in Las Vegas?",
        answer: "We can often accommodate same-day post construction cleaning for existing customers, subject to availability."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans transformed our Las Vegas construction site into a beautiful, move-in ready home. Outstanding service and attention to detail!",
      author: "Lisa W., Las Vegas Homeowner"
    }
  },
  {
    id: "macdonald-ranch",
    name: "MacDonald Ranch",
    description: "MacDonald Ranch developers and homeowners trust our post construction cleaning service to deliver flawless results that exceed expectations.",
    faq: [
      {
        question: "Do you clean construction dust from HVAC systems in MacDonald Ranch?",
        answer: "Yes, our post construction cleaning includes cleaning HVAC vents, filters, and systems to ensure proper air quality in MacDonald Ranch properties."
      },
      {
        question: "Can you work around MacDonald Ranch construction schedules?",
        answer: "Absolutely! We coordinate with MacDonald Ranch construction schedules to ensure seamless post construction cleaning timing."
      }
    ],
    testimonial: {
      text: "The post construction cleaning service for our MacDonald Ranch project was outstanding. Professional, thorough, and exceeded all expectations!",
      author: "Robert H., MacDonald Ranch Developer"
    }
  },
  {
    id: "mountains-edge",
    name: "Mountain's Edge",
    description: "Mountain's Edge contractors and homeowners depend on our post construction cleaning service to ensure their properties are pristine and move-in ready.",
    faq: [
      {
        question: "Do you handle residential post construction cleaning in Mountain's Edge?",
        answer: "Yes, we provide comprehensive residential post construction cleaning services for new builds and renovations throughout Mountain's Edge."
      },
      {
        question: "Can you customize post construction cleaning for Mountain's Edge projects?",
        answer: "Absolutely! We can customize our post construction cleaning services based on your specific Mountain's Edge project requirements."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans delivered exceptional post construction cleaning for our Mountain's Edge home. Professional service and outstanding results!",
      author: "Maria S., Mountain's Edge Homeowner"
    }
  },
  {
    id: "north-las-vegas",
    name: "North Las Vegas",
    description: "North Las Vegas contractors and developers rely on our post construction cleaning service to deliver professional results that showcase their work.",
    faq: [
      {
        question: "Do you offer affordable construction cleanup in North Las Vegas?",
        answer: "Yes, we provide competitive rates for post construction cleaning in North Las Vegas while maintaining the highest quality standards."
      },
      {
        question: "How do you ensure quality in North Las Vegas post construction cleaning?",
        answer: "Every North Las Vegas post construction cleaning is supervised with comprehensive quality checks to ensure perfect results."
      }
    ],
    testimonial: {
      text: "The post construction cleaning service for our North Las Vegas project was thorough and affordable. Excellent value and professional results!",
      author: "Carlos M., North Las Vegas Contractor"
    }
  },
  {
    id: "paradise",
    name: "Paradise",
    description: "Paradise developers and homeowners trust our post construction cleaning service to ensure their properties are safe, clean, and move-in ready.",
    faq: [
      {
        question: "Do you service both residential and commercial projects in Paradise?",
        answer: "Yes, we provide post construction cleaning services for both residential and commercial projects throughout Paradise."
      },
      {
        question: "What's your timeline for Paradise post construction cleaning?",
        answer: "We typically complete Paradise post construction cleaning within 1-3 days, depending on project size and complexity."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans made our Paradise construction project shine. The post construction cleaning was thorough and professional!",
      author: "Nancy P., Paradise Developer"
    }
  },
  {
    id: "seven-hills",
    name: "Seven Hills",
    description: "Seven Hills luxury developers trust our post construction cleaning service to deliver the impeccable standards expected in premium properties.",
    faq: [
      {
        question: "Do you handle luxury new builds in Seven Hills?",
        answer: "Yes, we specialize in post construction cleaning for luxury properties with high-end finishes and premium materials in Seven Hills."
      },
      {
        question: "How do you ensure security in Seven Hills post construction cleaning?",
        answer: "All our team members are background-checked, bonded, and insured for your complete peace of mind during Seven Hills projects."
      }
    ],
    testimonial: {
      text: "The post construction cleaning service for our Seven Hills luxury development was exceptional. Professional service that met all high-end standards!",
      author: "Thomas R., Seven Hills Developer"
    }
  },
  {
    id: "silverado-ranch",
    name: "Silverado Ranch",
    description: "Silverado Ranch contractors and homeowners depend on our post construction cleaning service to deliver flawless results that exceed expectations.",
    faq: [
      {
        question: "Do you work around Silverado Ranch construction schedules?",
        answer: "Yes, we coordinate with Silverado Ranch construction schedules to ensure seamless post construction cleaning timing."
      },
      {
        question: "What if I'm not satisfied with post construction cleaning in Silverado Ranch?",
        answer: "We guarantee satisfaction and will return to address any concerns at no additional charge."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans delivered outstanding post construction cleaning for our Silverado Ranch project. Professional service and exceptional results!",
      author: "Patricia D., Silverado Ranch Contractor"
    }
  },
  {
    id: "spring-valley",
    name: "Spring Valley",
    description: "Spring Valley developers and homeowners enjoy our comprehensive post construction cleaning service that ensures their properties are pristine and move-in ready.",
    faq: [
      {
        question: "Do you provide final construction clean in Spring Valley?",
        answer: "Yes, we provide comprehensive final construction cleaning services for new builds and renovations throughout Spring Valley."
      },
      {
        question: "Can you handle both residential and commercial projects in Spring Valley?",
        answer: "Absolutely! We handle both residential and commercial post construction cleaning projects of any size in Spring Valley."
      }
    ],
    testimonial: {
      text: "The post construction cleaning service for our Spring Valley project was thorough and professional. Outstanding results and excellent service!",
      author: "Susan B., Spring Valley Developer"
    }
  },
  {
    id: "summerlin-south",
    name: "Summerlin South",
    description: "Summerlin South luxury developers trust our post construction cleaning service to deliver the impeccable standards expected in premium properties.",
    faq: [
      {
        question: "Do you handle luxury properties in Summerlin South?",
        answer: "Yes, we specialize in post construction cleaning for luxury properties with high-end finishes and premium materials in Summerlin South."
      },
      {
        question: "Can you accommodate Summerlin South HOA requirements?",
        answer: "Absolutely! We're familiar with Summerlin South HOA guidelines and ensure full compliance for post construction cleaning."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans delivered exceptional post construction cleaning for our Summerlin South luxury development. Perfect service for our high-end project!",
      author: "James L., Summerlin South Developer"
    }
  },
  {
    id: "sunrise-manor",
    name: "Sunrise Manor",
    description: "Sunrise Manor contractors and developers rely on our post construction cleaning service to deliver professional results that showcase their work.",
    faq: [
      {
        question: "Do you offer competitive rates for Sunrise Manor post construction cleaning?",
        answer: "Yes, we provide affordable, competitive rates for Sunrise Manor post construction cleaning while maintaining high service quality."
      },
      {
        question: "How reliable is your post construction cleaning service in Sunrise Manor?",
        answer: "We're committed to reliability and have a strong track record of consistent, high-quality post construction cleaning in Sunrise Manor."
      }
    ],
    testimonial: {
      text: "The post construction cleaning service for our Sunrise Manor project was thorough and affordable. Great value and excellent results!",
      author: "Angela C., Sunrise Manor Contractor"
    }
  },
  {
    id: "whitney",
    name: "Whitney",
    description: "Whitney developers and homeowners enjoy our comprehensive post construction cleaning service that ensures their properties are safe and move-in ready.",
    faq: [
      {
        question: "Do you work with families in Whitney for post construction cleaning?",
        answer: "Yes, we're family-friendly and use safe, eco-friendly products that are safe for children and pets during Whitney post construction cleaning."
      },
      {
        question: "Can you schedule around Whitney construction timelines?",
        answer: "Absolutely! We offer flexible scheduling including early morning, evening, and weekend appointments to meet Whitney project timelines."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans made our Whitney construction project shine. Professional post construction cleaning and outstanding results!",
      author: "Kevin F., Whitney Homeowner"
    }
  },
  {
    id: "winchester",
    name: "Winchester",
    description: "Winchester contractors and developers trust our post construction cleaning service to deliver flawless results that exceed expectations.",
    faq: [
      {
        question: "Do you service diverse project types in Winchester for post construction cleaning?",
        answer: "Yes, we provide comprehensive post construction cleaning for all types of projects including residential, commercial, and mixed-use developments."
      },
      {
        question: "How do you ensure quality in Winchester post construction cleaning?",
        answer: "Every Winchester post construction cleaning is supervised with a comprehensive quality assurance process to guarantee perfect results."
      }
    ],
    testimonial: {
      text: "The post construction cleaning service for our Winchester project was exceptional. Professional, thorough, and exceeded all expectations!",
      author: "Rachel G., Winchester Developer"
    }
  }
];

const PostConstructionCleaningLasVegasPage = () => {
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
        <title>Post Construction Cleaning Service Las Vegas | Red Rock Cleans</title>
        <meta name="description" content="Professional post construction cleaning service in Las Vegas. Red Rock Cleans handles all construction cleanup for new builds and renovations. Get your free, detailed quote today!" />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <LasVegasNavigation />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative py-24 md:py-32 bg-gradient-to-br from-primary/5 via-background to-accent/5">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                  Post Construction Cleaning Service in Las Vegas
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                  Transform your dusty worksite into a move-in ready masterpiece with our professional post construction cleaning service. We help Las Vegas contractors, developers, and homeowners ensure their properties are safe, clean, and ready for occupancy with meticulous attention to detail.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="h-14 text-lg px-8" asChild>
                    <Link to="/book-now-vegas">
                      <Calendar className="w-5 h-5 mr-2" />
                      Schedule Post Construction Cleaning
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="h-14 text-lg px-8" asChild>
                    <Link to="/las-vegas-calculator">
                      <Home className="w-5 h-5 mr-2" />
                      Get Free Quote
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Our Detailed Post Construction Cleanup Process */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  Our Detailed Post Construction Cleanup Process
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <CheckCircle className="w-6 h-6 text-primary mr-3" />
                      Rough Clean Phase
                    </h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Remove construction debris and large particles
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Clean dust from all surfaces and fixtures
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Vacuum and sweep all floors thoroughly
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Clean windows and remove construction stickers
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Remove protective coverings and tape
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <CheckCircle className="w-6 h-6 text-primary mr-3" />
                      Final Clean & Touch-Up Phase
                    </h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Polish all fixtures and hardware
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Clean window tracks and frames
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Sanitize all surfaces and high-touch areas
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Clean inside cabinets and drawers
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Final inspection and quality assurance
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* From Dusty Worksite to Move-In Ready */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  From Dusty Worksite to Move-In Ready
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center p-6 bg-background rounded-lg shadow-sm">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Ensure Property Safety</h3>
                    <p className="text-muted-foreground">
                      Our thorough post construction cleaning removes construction dust, debris, and hazards to ensure your property is safe for occupants and visitors.
                    </p>
                  </div>
                  <div className="text-center p-6 bg-background rounded-lg shadow-sm">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Clock className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Save Contractors Time</h3>
                    <p className="text-muted-foreground">
                      Let us handle the detailed cleanup while you focus on your next project. Our efficient process gets your property move-in ready quickly.
                    </p>
                  </div>
                  <div className="text-center p-6 bg-background rounded-lg shadow-sm">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Present Flawless Results</h3>
                    <p className="text-muted-foreground">
                      Impress clients and homeowners with a pristine, move-in ready property that showcases your construction work at its finest.
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
                  Areas We Serve in Las Vegas
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
                            Professional post construction cleaning services
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
                            <Link to="/book-now-vegas">
                              Schedule Your {neighborhood.name} Post Construction Clean
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
                  Other Cleaning Services for Your Property in Las Vegas
                </h2>
                <p className="text-xl text-muted-foreground mb-12">
                  Beyond post construction cleaning, we offer specialized services to meet all your Las Vegas property needs.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Link to="/las-vegas/standard-cleaning-services/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Standard Cleaning Services
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Regular maintenance cleaning for consistent home cleanliness.
                      </p>
                    </div>
                  </Link>
                  <Link to="/las-vegas/deep-cleaning-services/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Deep Cleaning Services
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Comprehensive cleaning for special occasions or seasonal deep cleans.
                      </p>
                    </div>
                  </Link>
                  <Link to="/las-vegas/airbnb-cleaning-services/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Airbnb Cleaning Services
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Professional turnover cleaning for vacation rental properties.
                      </p>
                    </div>
                  </Link>
                  <Link to="/las-vegas/move-out-cleaning-services/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Move Out Cleaning Services
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Complete cleaning to secure your security deposit return.
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
                    <h3 className="text-lg font-semibold mb-3">What is included in a post construction clean?</h3>
                    <p className="text-muted-foreground">
                      Our post construction cleaning includes debris removal, dust cleanup from all surfaces, window and track cleaning, fixture polishing, cabinet cleaning, and comprehensive sanitization to make your property move-in ready.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3">How much does post construction cleaning cost in Las Vegas?</h3>
                    <p className="text-muted-foreground">
                      Post construction cleaning costs in Las Vegas vary by project size, complexity, and specific requirements. Contact us for a detailed, customized quote based on your project needs.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3">Why do I need a specialized post construction cleaning service?</h3>
                    <p className="text-muted-foreground">
                      Post construction cleaning requires specialized knowledge, equipment, and techniques to safely remove construction dust, debris, and residue. Our professional service ensures your property is safe, clean, and ready for occupancy.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3">How long does post construction cleaning take?</h3>
                    <p className="text-muted-foreground">
                      Post construction cleaning typically takes 1-3 days depending on project size and complexity. We provide rough clean, final clean, and touch-up phases to ensure your property is completely move-in ready.
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
                  Ready to Transform Your Construction Site?
                </h2>
                <p className="text-xl mb-8 opacity-90">
                  Join hundreds of satisfied Las Vegas contractors and developers who trust Red Rock Cleans for professional post construction cleaning services that deliver flawless results.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" className="h-14 text-lg px-8" asChild>
                    <Link to="/book-now-vegas">
                      <Calendar className="w-5 h-5 mr-2" />
                      Schedule Post Construction Cleaning Today
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="h-14 text-lg px-8 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                    <Link to="/las-vegas-calculator">
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
                  src="/src/assets/service-products.jpg" 
                  alt="A pristine, move-in ready home in Las Vegas after a thorough post construction cleaning by Red Rock Cleans"
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

export default PostConstructionCleaningLasVegasPage;

import { LasVegasNavigation } from "@/components/LasVegasNavigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Clock, Shield, Star, Users, Calendar, Home, Sparkles, DollarSign, Key } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";

const neighborhoods = [
  {
    id: "anthem",
    name: "Anthem",
    description: "Moving out of your home in Anthem? We provide detailed move out cleaning to meet HOA standards and ensure you get your full security deposit back.",
    faq: [
      {
        question: "Do you meet Anthem HOA move out requirements?",
        answer: "Yes, our move out cleaning service is designed to meet all Anthem HOA standards and landlord requirements for security deposit returns."
      },
      {
        question: "How far in advance should Anthem residents book?",
        answer: "We recommend booking at least 3-5 days in advance, especially during peak moving seasons in Anthem."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans helped us secure our full security deposit from our Anthem rental. Their attention to detail was incredible and met all HOA requirements.",
      author: "Sarah M., Anthem Resident"
    }
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "Enterprise residents trust our move out cleaning service to thoroughly clean their property and maximize their security deposit return.",
    faq: [
      {
        question: "What's included in Enterprise move out cleaning?",
        answer: "Our move out cleaning includes inside oven, refrigerator, all cabinets and drawers, baseboards, closets, and detailed surface cleaning."
      },
      {
        question: "Do you provide move out cleaning receipts in Enterprise?",
        answer: "Yes, we provide detailed receipts and cleaning checklists that you can submit to your landlord for security deposit purposes."
      }
    ],
    testimonial: {
      text: "The move out cleaning service for our Enterprise apartment was thorough and professional. We got our full security deposit back!",
      author: "Michael R., Enterprise Resident"
    }
  },
  {
    id: "green-valley-north",
    name: "Green Valley North",
    description: "Green Valley North renters rely on our move out cleaning service to meet landlord standards and secure their security deposit return.",
    faq: [
      {
        question: "Can you work around Green Valley North moving schedules?",
        answer: "Yes, we offer flexible scheduling including evenings and weekends to accommodate your Green Valley North moving timeline."
      },
      {
        question: "Do you clean carpets for move out in Green Valley North?",
        answer: "We can arrange carpet cleaning as part of your move out cleaning package if required by your Green Valley North landlord."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans made our Green Valley North move out process stress-free. Professional service and we got our full deposit back!",
      author: "Jennifer L., Green Valley North Resident"
    }
  },
  {
    id: "henderson",
    name: "Henderson",
    description: "Henderson families depend on our move out cleaning service to thoroughly clean their property and ensure maximum security deposit return.",
    faq: [
      {
        question: "Do you service both houses and apartments in Henderson?",
        answer: "Yes, we provide move out cleaning services for houses, apartments, and condos throughout Henderson."
      },
      {
        question: "How long does Henderson move out cleaning take?",
        answer: "Move out cleaning typically takes 3-5 hours depending on property size and specific Henderson landlord requirements."
      }
    ],
    testimonial: {
      text: "The move out cleaning service for our Henderson home was exceptional. Every detail was addressed and we got our full security deposit!",
      author: "Amanda T., Henderson Resident"
    }
  },
  {
    id: "lake-las-vegas",
    name: "Lake Las Vegas",
    description: "Lake Las Vegas luxury property owners and renters trust our move out cleaning service to meet the highest standards for property transitions.",
    faq: [
      {
        question: "Do you handle luxury properties in Lake Las Vegas?",
        answer: "Yes, we specialize in move out cleaning for luxury homes and properties with high-end finishes in Lake Las Vegas."
      },
      {
        question: "Can you work with Lake Las Vegas property managers?",
        answer: "Absolutely! We work directly with Lake Las Vegas property managers and can coordinate with your landlord or property management company."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provided exceptional move out cleaning for our Lake Las Vegas property. Professional service that met all requirements!",
      author: "David K., Lake Las Vegas Resident"
    }
  },
  {
    id: "las-vegas",
    name: "Las Vegas",
    description: "Las Vegas renters and homeowners rely on our move out cleaning service to secure their security deposit and make property transitions seamless.",
    faq: [
      {
        question: "What makes Las Vegas move out cleaning different?",
        answer: "Las Vegas move out cleaning focuses on removing desert dust, sand, and meeting local landlord standards for security deposit returns."
      },
      {
        question: "Do you offer same-day move out cleaning in Las Vegas?",
        answer: "We can often accommodate same-day move out cleaning for existing customers, subject to availability."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans made our Las Vegas move out process so much easier. Professional, thorough, and we got our full security deposit back!",
      author: "Lisa W., Las Vegas Resident"
    }
  },
  {
    id: "macdonald-ranch",
    name: "MacDonald Ranch",
    description: "MacDonald Ranch residents trust our move out cleaning service to thoroughly clean their property and maximize their security deposit return.",
    faq: [
      {
        question: "Do you clean inside appliances for MacDonald Ranch move outs?",
        answer: "Yes, our move out cleaning includes detailed cleaning inside ovens, refrigerators, microwaves, and all appliances."
      },
      {
        question: "How do you handle pets during MacDonald Ranch move out cleaning?",
        answer: "We use pet-safe products and can work around your pets during the move out cleaning process."
      }
    ],
    testimonial: {
      text: "The move out cleaning service for our MacDonald Ranch home was thorough and professional. Excellent service and full deposit return!",
      author: "Robert H., MacDonald Ranch Resident"
    }
  },
  {
    id: "mountains-edge",
    name: "Mountain's Edge",
    description: "Mountain's Edge residents depend on our move out cleaning service to meet landlord requirements and secure their security deposit return.",
    faq: [
      {
        question: "Do you clean baseboards during Mountain's Edge move out cleaning?",
        answer: "Yes, detailed baseboard cleaning is a key component of our move out cleaning service in Mountain's Edge."
      },
      {
        question: "Can you customize move out cleaning for Mountain's Edge properties?",
        answer: "Absolutely! We can focus on specific areas or requirements based on your Mountain's Edge landlord's expectations."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provided excellent move out cleaning for our Mountain's Edge home. Professional service and full security deposit return!",
      author: "Maria S., Mountain's Edge Resident"
    }
  },
  {
    id: "north-las-vegas",
    name: "North Las Vegas",
    description: "North Las Vegas renters trust our move out cleaning service to thoroughly clean their property and ensure maximum security deposit return.",
    faq: [
      {
        question: "Do you offer affordable move out cleaning for North Las Vegas?",
        answer: "Yes, we provide competitive rates for North Las Vegas move out cleaning while maintaining the highest quality standards."
      },
      {
        question: "How do you ensure quality in North Las Vegas move out cleaning?",
        answer: "Every North Las Vegas move out cleaning is supervised with a comprehensive quality check to ensure landlord satisfaction."
      }
    ],
    testimonial: {
      text: "The move out cleaning service for our North Las Vegas apartment was thorough and affordable. Great value and full deposit return!",
      author: "Carlos M., North Las Vegas Resident"
    }
  },
  {
    id: "paradise",
    name: "Paradise",
    description: "Paradise residents rely on our move out cleaning service to meet landlord standards and secure their security deposit return.",
    faq: [
      {
        question: "Do you service apartments for move out cleaning in Paradise?",
        answer: "Yes, we provide comprehensive move out cleaning services for both apartments and houses throughout Paradise."
      },
      {
        question: "What's your cancellation policy for Paradise move out cleaning?",
        answer: "We require 24-hour notice for cancellations, but we're flexible for emergencies and rescheduling."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans made our Paradise move out process stress-free. Professional service and we got our full security deposit back!",
      author: "Nancy P., Paradise Resident"
    }
  },
  {
    id: "seven-hills",
    name: "Seven Hills",
    description: "Seven Hills luxury property owners trust our move out cleaning service to meet the highest standards for property transitions.",
    faq: [
      {
        question: "Do you service luxury properties in Seven Hills?",
        answer: "Yes, we specialize in move out cleaning for luxury homes with high-end finishes and premium materials in Seven Hills."
      },
      {
        question: "How do you ensure security in Seven Hills?",
        answer: "All our team members are background-checked, bonded, and insured for your complete peace of mind."
      }
    ],
    testimonial: {
      text: "The move out cleaning service for our Seven Hills home was exceptional. Professional, thorough, and met all luxury property standards!",
      author: "Thomas R., Seven Hills Resident"
    }
  },
  {
    id: "silverado-ranch",
    name: "Silverado Ranch",
    description: "Silverado Ranch families depend on our move out cleaning service to thoroughly clean their property and ensure maximum security deposit return.",
    faq: [
      {
        question: "Do you work around Silverado Ranch school schedules?",
        answer: "Yes, we can schedule move out cleaning around school hours and family schedules for maximum convenience."
      },
      {
        question: "What if I'm not satisfied with move out cleaning in Silverado Ranch?",
        answer: "We guarantee satisfaction and will return to address any concerns at no additional charge."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provided excellent move out cleaning for our Silverado Ranch home. Professional service and full security deposit return!",
      author: "Patricia D., Silverado Ranch Resident"
    }
  },
  {
    id: "spring-valley",
    name: "Spring Valley",
    description: "Spring Valley residents enjoy our comprehensive move out cleaning service that meets landlord requirements and secures security deposit returns.",
    faq: [
      {
        question: "How often do Spring Valley residents need move out cleaning?",
        answer: "Move out cleaning is typically a one-time service when moving out of your Spring Valley rental or selling your home."
      },
      {
        question: "Do you provide standard cleaning after move out in Spring Valley?",
        answer: "Yes, we offer both move out cleaning and ongoing standard cleaning services throughout Spring Valley."
      }
    ],
    testimonial: {
      text: "The move out cleaning service for our Spring Valley home was thorough and professional. Excellent service and full deposit return!",
      author: "Susan B., Spring Valley Resident"
    }
  },
  {
    id: "summerlin-south",
    name: "Summerlin South",
    description: "Summerlin South luxury property owners trust our move out cleaning service to meet the highest standards for property transitions.",
    faq: [
      {
        question: "Do you service luxury properties in Summerlin South?",
        answer: "Yes, we specialize in move out cleaning for luxury homes and are experienced with high-end finishes and materials."
      },
      {
        question: "Can you accommodate Summerlin South HOA requirements?",
        answer: "Absolutely! We're familiar with Summerlin South HOA guidelines and ensure full compliance for move out cleaning."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provided exceptional move out cleaning for our Summerlin South home. Perfect service for our luxury property!",
      author: "James L., Summerlin South Resident"
    }
  },
  {
    id: "sunrise-manor",
    name: "Sunrise Manor",
    description: "Sunrise Manor residents depend on our move out cleaning service to thoroughly clean their property and ensure maximum security deposit return.",
    faq: [
      {
        question: "Do you offer competitive rates for Sunrise Manor move out cleaning?",
        answer: "Yes, we provide affordable, competitive rates for Sunrise Manor residents while maintaining high service quality."
      },
      {
        question: "How reliable is your move out cleaning service in Sunrise Manor?",
        answer: "We're committed to reliability and have a strong track record of consistent, high-quality move out cleaning in Sunrise Manor."
      }
    ],
    testimonial: {
      text: "The move out cleaning service for our Sunrise Manor home was thorough and affordable. Great value and excellent results!",
      author: "Angela C., Sunrise Manor Resident"
    }
  },
  {
    id: "whitney",
    name: "Whitney",
    description: "Whitney residents enjoy our comprehensive move out cleaning service that meets landlord requirements and secures security deposit returns.",
    faq: [
      {
        question: "Do you work with families in Whitney for move out cleaning?",
        answer: "Yes, we're family-friendly and use safe, eco-friendly products that are safe for children and pets during move out cleaning."
      },
      {
        question: "Can you schedule around Whitney work hours for move out cleaning?",
        answer: "Absolutely! We offer flexible scheduling including early morning, evening, and weekend appointments."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans made our Whitney move out process so much easier. Professional service and we got our full security deposit back!",
      author: "Kevin F., Whitney Resident"
    }
  },
  {
    id: "winchester",
    name: "Winchester",
    description: "Winchester residents trust our move out cleaning service to thoroughly clean their property and ensure maximum security deposit return.",
    faq: [
      {
        question: "Do you service diverse property types in Winchester for move out cleaning?",
        answer: "Yes, we provide comprehensive move out cleaning for all types of properties including houses, condos, and townhomes."
      },
      {
        question: "How do you ensure quality in Winchester move out cleaning?",
        answer: "Every Winchester move out cleaning is supervised with a comprehensive quality assurance process to guarantee landlord satisfaction."
      }
    ],
    testimonial: {
      text: "The move out cleaning service for our Winchester home was exceptional. Professional, thorough, and excellent value!",
      author: "Rachel G., Winchester Resident"
    }
  }
];

const MoveOutCleaningLasVegasPage = () => {
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
        <title>Move Out Cleaning Service Las Vegas | Red Rock Cleans</title>
        <meta name="description" content="Secure your deposit with our reliable move out cleaning service in Las Vegas. Red Rock Cleans provides thorough end-of-tenancy cleaning for renters and sellers. Book today!" />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <LasVegasNavigation />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative py-24 md:py-32 overflow-hidden">
            <div className="absolute inset-0">
              <img 
                src="/src/assets/service-products.jpg" 
                alt="Professional move out cleaning service in a Las Vegas apartment with Strip skyline views"
                className="w-full h-full object-cover scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                  Stress-Free Move Out Cleaning Service in Las Vegas
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                  Secure your security deposit and make your move easier with our comprehensive move out cleaning service. We help Las Vegas renters and homeowners prepare their property for new occupants, meeting all landlord requirements and maximizing your deposit return.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="h-14 text-lg px-8" asChild>
                    <Link to="/book-now-las-vegas">
                      <Calendar className="w-5 h-5 mr-2" />
                      Schedule Move Out Cleaning
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
                      Kitchen & Appliances
                    </h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Clean inside oven, stovetop, and microwave
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Clean inside refrigerator and freezer
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Clean inside all cabinets and drawers
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Clean countertops, backsplash, and sink
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Clean baseboards and trim
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <CheckCircle className="w-6 h-6 text-primary mr-3" />
                      Bathrooms & Living Areas
                    </h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Clean inside all closets and storage areas
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Scrub and sanitize all bathroom fixtures
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Clean windows, sills, and tracks
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Vacuum carpets and mop all floors
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Clean light fixtures and ceiling fans
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
                      <DollarSign className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Maximize Your Security Deposit</h3>
                    <p className="text-muted-foreground">
                      Our thorough move out cleaning meets all landlord requirements, giving you the best chance of receiving your full security deposit back.
                    </p>
                  </div>
                  <div className="text-center p-6 bg-background rounded-lg shadow-sm">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Clock className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Save Time and Energy</h3>
                    <p className="text-muted-foreground">
                      Moving is stressful enough. Let us handle the cleaning while you focus on packing, organizing, and settling into your new home.
                    </p>
                  </div>
                  <div className="text-center p-6 bg-background rounded-lg shadow-sm">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Key className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Satisfy Landlord Requirements</h3>
                    <p className="text-muted-foreground">
                      Our detailed cleaning checklist ensures your property meets all landlord standards, preventing disputes and ensuring smooth transitions.
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
                            <Link to="/book-now-las-vegas">
                              Schedule Your {neighborhood.name} Move Out Clean
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
                  Beyond move out cleaning, we offer specialized services to meet all your Las Vegas property needs.
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
                  <Link to="/las-vegas/post-construction-cleaning-services/" className="group">
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
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-6">
                  <div className="border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3">Should the property be completely empty before you arrive?</h3>
                    <p className="text-muted-foreground">
                      For the best results, we recommend having the property as empty as possible. However, we can work around remaining furniture and belongings if needed.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3">Do you clean inside the oven and fridge?</h3>
                    <p className="text-muted-foreground">
                      Yes, our move out cleaning includes detailed cleaning inside ovens, refrigerators, microwaves, and all appliances to meet landlord requirements.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3">How far in advance should I book move out cleaning?</h3>
                    <p className="text-muted-foreground">
                      We recommend booking at least 3-5 days in advance, especially during peak moving seasons. We can sometimes accommodate shorter notice for existing customers.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3">Do you provide receipts for security deposit purposes?</h3>
                    <p className="text-muted-foreground">
                      Yes, we provide detailed receipts and cleaning checklists that you can submit to your landlord for security deposit documentation.
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
                  Ready to Secure Your Security Deposit?
                </h2>
                <p className="text-xl mb-8 opacity-90">
                  Join hundreds of satisfied Las Vegas residents who trust Red Rock Cleans for thorough, professional move out cleaning services that maximize their deposit returns.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" className="h-14 text-lg px-8" asChild>
                    <Link to="/book-now-las-vegas">
                      <Calendar className="w-5 h-5 mr-2" />
                      Schedule Move Out Cleaning Today
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
                  alt="An empty, immaculate apartment in Las Vegas ready for landlord inspection after a move out cleaning by Red Rock Cleans"
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

export default MoveOutCleaningLasVegasPage;

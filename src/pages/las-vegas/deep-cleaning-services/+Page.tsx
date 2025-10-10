import { LasVegasNavigation } from "@/components/LasVegasNavigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Clock, Shield, Star, Users, Calendar, Home, Sparkles, RefreshCw, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";

const neighborhoods = [
  {
    id: "anthem",
    name: "Anthem",
    description: "Get a true deep clean for your home in the beautiful Anthem community with our comprehensive deep cleaning service that tackles every detail.",
    faq: [
      {
        question: "How often do Anthem residents need deep cleaning?",
        answer: "Most Anthem homeowners schedule deep cleaning quarterly or for special occasions like spring cleaning or before hosting events."
      },
      {
        question: "Do you handle luxury finishes in Anthem homes?",
        answer: "Yes, our team is trained to safely clean marble, granite, hardwood, and other premium finishes found in Anthem homes."
      }
    ],
    testimonial: {
      text: "The deep cleaning service in our Anthem home was exceptional. Every detail was addressed, from baseboards to light fixtures. Our home has never looked better!",
      author: "Sarah M., Anthem Resident"
    }
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "Transform your Enterprise home with our thorough deep cleaning service that removes built-up dust, grime, and allergens for a truly refreshed living space.",
    faq: [
      {
        question: "What's included in deep cleaning for Enterprise homes?",
        answer: "Our deep cleaning includes detailed baseboard cleaning, inside cabinet cleaning, appliance deep cleaning, and intensive grout scrubbing."
      },
      {
        question: "How long does deep cleaning take in Enterprise?",
        answer: "Deep cleaning typically takes 4-6 hours depending on home size and level of detail required."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans deep cleaning service for our Enterprise home exceeded expectations. They addressed areas we didn't even think of!",
      author: "Michael R., Enterprise Resident"
    }
  },
  {
    id: "green-valley-north",
    name: "Green Valley North",
    description: "Restore your Green Valley North home's sparkle with our comprehensive deep cleaning service that tackles desert dust and built-up grime.",
    faq: [
      {
        question: "Do you clean inside appliances during deep cleaning?",
        answer: "Yes, our deep cleaning includes cleaning inside ovens, microwaves, refrigerators, and other appliances."
      },
      {
        question: "Can you work around Green Valley North schedules?",
        answer: "Absolutely! We offer flexible scheduling including weekends to accommodate busy Green Valley North families."
      }
    ],
    testimonial: {
      text: "The deep cleaning service for our Green Valley North home was thorough and professional. Every corner was spotless!",
      author: "Jennifer L., Green Valley North Resident"
    }
  },
  {
    id: "henderson",
    name: "Henderson",
    description: "Henderson families trust our deep cleaning service for intensive home cleaning that removes allergens and creates a healthier living environment.",
    faq: [
      {
        question: "Do you use eco-friendly products for Henderson deep cleaning?",
        answer: "Yes, we use professional-grade eco-friendly products that are safe for families and pets in Henderson homes."
      },
      {
        question: "How often should Henderson homes get deep cleaned?",
        answer: "We recommend deep cleaning every 3-4 months or seasonally to maintain optimal home health and cleanliness."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans deep cleaning service for our Henderson home was incredible. The attention to detail was remarkable!",
      author: "Amanda T., Henderson Resident"
    }
  },
  {
    id: "lake-las-vegas",
    name: "Lake Las Vegas",
    description: "Lake Las Vegas luxury homes deserve the finest deep cleaning service. Our comprehensive approach ensures every surface sparkles to perfection.",
    faq: [
      {
        question: "Do you service luxury homes in Lake Las Vegas?",
        answer: "Yes, we specialize in deep cleaning luxury homes with high-end finishes and are experienced with delicate surfaces."
      },
      {
        question: "Can you work around Lake Las Vegas events?",
        answer: "We can schedule deep cleaning around your Lake Las Vegas social calendar and special events."
      }
    ],
    testimonial: {
      text: "The deep cleaning service for our Lake Las Vegas home was exceptional. Every detail was perfect for our upcoming party!",
      author: "David K., Lake Las Vegas Resident"
    }
  },
  {
    id: "las-vegas",
    name: "Las Vegas",
    description: "Las Vegas residents rely on our deep cleaning service for intensive home cleaning that removes desert dust and creates a healthier living environment.",
    faq: [
      {
        question: "What makes deep cleaning different in Las Vegas?",
        answer: "Las Vegas deep cleaning focuses on removing desert dust, sand, and allergens that accumulate in our dry climate."
      },
      {
        question: "Do you offer same-day deep cleaning in Las Vegas?",
        answer: "We can often accommodate same-day deep cleaning for existing customers, subject to availability."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans deep cleaning service transformed our Las Vegas home. The difference was incredible!",
      author: "Lisa W., Las Vegas Resident"
    }
  },
  {
    id: "macdonald-ranch",
    name: "MacDonald Ranch",
    description: "MacDonald Ranch families enjoy our comprehensive deep cleaning service that addresses every detail for a truly refreshed and healthy home.",
    faq: [
      {
        question: "Do you clean light fixtures during deep cleaning?",
        answer: "Yes, our deep cleaning includes cleaning light fixtures, ceiling fans, and other often-overlooked areas."
      },
      {
        question: "How do you handle pets during MacDonald Ranch deep cleaning?",
        answer: "We use pet-safe products and work around your pets' schedules for a stress-free deep cleaning experience."
      }
    ],
    testimonial: {
      text: "The deep cleaning service for our MacDonald Ranch home was thorough and professional. Every detail was perfect!",
      author: "Robert H., MacDonald Ranch Resident"
    }
  },
  {
    id: "mountains-edge",
    name: "Mountain's Edge",
    description: "Mountain's Edge residents trust our deep cleaning service for intensive home cleaning that removes built-up allergens and creates a healthier living space.",
    faq: [
      {
        question: "Do you clean baseboards during deep cleaning?",
        answer: "Yes, detailed baseboard cleaning is a key component of our deep cleaning service in Mountain's Edge."
      },
      {
        question: "Can you customize deep cleaning for Mountain's Edge homes?",
        answer: "Absolutely! We can focus on specific areas or tasks based on your Mountain's Edge home's needs."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans deep cleaning service for our Mountain's Edge home was exceptional. The attention to detail was outstanding!",
      author: "Maria S., Mountain's Edge Resident"
    }
  },
  {
    id: "north-las-vegas",
    name: "North Las Vegas",
    description: "North Las Vegas families depend on our deep cleaning service for intensive home cleaning that removes allergens and creates a healthier environment.",
    faq: [
      {
        question: "Do you offer affordable deep cleaning for North Las Vegas?",
        answer: "Yes, we provide competitive rates for North Las Vegas deep cleaning while maintaining the highest quality standards."
      },
      {
        question: "How do you ensure quality in North Las Vegas deep cleaning?",
        answer: "Every North Las Vegas deep cleaning is supervised with a comprehensive quality check to ensure perfection."
      }
    ],
    testimonial: {
      text: "The deep cleaning service for our North Las Vegas home was thorough and affordable. Excellent value!",
      author: "Carlos M., North Las Vegas Resident"
    }
  },
  {
    id: "paradise",
    name: "Paradise",
    description: "Paradise residents enjoy our comprehensive deep cleaning service that tackles every detail for a truly refreshed and healthy living environment.",
    faq: [
      {
        question: "Do you service apartments for deep cleaning in Paradise?",
        answer: "Yes, we provide comprehensive deep cleaning services for both apartments and houses throughout Paradise."
      },
      {
        question: "What's your cancellation policy for Paradise deep cleaning?",
        answer: "We require 24-hour notice for cancellations, but we're flexible for emergencies and rescheduling."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans deep cleaning service for our Paradise home was incredible. Every surface was spotless!",
      author: "Nancy P., Paradise Resident"
    }
  },
  {
    id: "seven-hills",
    name: "Seven Hills",
    description: "Seven Hills luxury homeowners trust our deep cleaning service for intensive cleaning that preserves their property value and creates a healthier environment.",
    faq: [
      {
        question: "Do you service luxury homes in Seven Hills?",
        answer: "Yes, we specialize in deep cleaning luxury homes with high-end finishes and premium materials."
      },
      {
        question: "How do you ensure security in Seven Hills?",
        answer: "All our team members are background-checked, bonded, and insured for your complete peace of mind."
      }
    ],
    testimonial: {
      text: "The deep cleaning service for our Seven Hills home was exceptional. Professional, thorough, and perfect results!",
      author: "Thomas R., Seven Hills Resident"
    }
  },
  {
    id: "silverado-ranch",
    name: "Silverado Ranch",
    description: "Silverado Ranch families rely on our deep cleaning service for intensive home cleaning that removes allergens and creates a healthier living space.",
    faq: [
      {
        question: "Do you work around Silverado Ranch school schedules?",
        answer: "Yes, we can schedule deep cleaning around school hours and family schedules for maximum convenience."
      },
      {
        question: "What if I'm not satisfied with deep cleaning in Silverado Ranch?",
        answer: "We guarantee satisfaction and will return to address any concerns at no additional charge."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans deep cleaning service for our Silverado Ranch home was thorough and professional. Highly recommend!",
      author: "Patricia D., Silverado Ranch Resident"
    }
  },
  {
    id: "spring-valley",
    name: "Spring Valley",
    description: "Spring Valley residents enjoy our comprehensive deep cleaning service that tackles every detail for a truly refreshed and healthy home environment.",
    faq: [
      {
        question: "How often do Spring Valley residents schedule deep cleaning?",
        answer: "Most Spring Valley customers schedule deep cleaning quarterly or seasonally for optimal home health."
      },
      {
        question: "Do you provide standard cleaning after deep cleaning in Spring Valley?",
        answer: "Yes, we offer both deep cleaning and ongoing standard cleaning services throughout Spring Valley."
      }
    ],
    testimonial: {
      text: "The deep cleaning service for our Spring Valley home was incredible. Every detail was addressed perfectly!",
      author: "Susan B., Spring Valley Resident"
    }
  },
  {
    id: "summerlin-south",
    name: "Summerlin South",
    description: "Summerlin South luxury homeowners trust our deep cleaning service for intensive cleaning that maintains their high-end lifestyle standards.",
    faq: [
      {
        question: "Do you service luxury homes in Summerlin South?",
        answer: "Yes, we specialize in deep cleaning luxury homes and are experienced with high-end finishes and materials."
      },
      {
        question: "Can you accommodate Summerlin South HOA requirements?",
        answer: "Absolutely! We're familiar with Summerlin South HOA guidelines and ensure full compliance."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans deep cleaning service for our Summerlin South home was exceptional. Perfect for our luxury lifestyle!",
      author: "James L., Summerlin South Resident"
    }
  },
  {
    id: "sunrise-manor",
    name: "Sunrise Manor",
    description: "Sunrise Manor families depend on our deep cleaning service for intensive home cleaning that removes allergens and creates a healthier living environment.",
    faq: [
      {
        question: "Do you offer competitive rates for Sunrise Manor deep cleaning?",
        answer: "Yes, we provide affordable, competitive rates for Sunrise Manor residents while maintaining high service quality."
      },
      {
        question: "How reliable is your deep cleaning service in Sunrise Manor?",
        answer: "We're committed to reliability and have a strong track record of consistent, high-quality deep cleaning in Sunrise Manor."
      }
    ],
    testimonial: {
      text: "The deep cleaning service for our Sunrise Manor home was thorough and affordable. Great value and excellent results!",
      author: "Angela C., Sunrise Manor Resident"
    }
  },
  {
    id: "whitney",
    name: "Whitney",
    description: "Whitney residents enjoy our comprehensive deep cleaning service that addresses every detail for a truly refreshed and healthy home environment.",
    faq: [
      {
        question: "Do you work with families in Whitney for deep cleaning?",
        answer: "Yes, we're family-friendly and use safe, eco-friendly products that are safe for children and pets."
      },
      {
        question: "Can you schedule around Whitney work hours for deep cleaning?",
        answer: "Absolutely! We offer flexible scheduling including early morning, evening, and weekend appointments."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans deep cleaning service for our Whitney home was thorough and professional. Excellent service!",
      author: "Kevin F., Whitney Resident"
    }
  },
  {
    id: "winchester",
    name: "Winchester",
    description: "Winchester residents trust our deep cleaning service for intensive home cleaning that removes allergens and creates a healthier living environment.",
    faq: [
      {
        question: "Do you service diverse home types in Winchester for deep cleaning?",
        answer: "Yes, we provide comprehensive deep cleaning for all types of homes including houses, condos, and townhomes."
      },
      {
        question: "How do you ensure quality in Winchester deep cleaning?",
        answer: "Every Winchester deep cleaning is supervised with a comprehensive quality assurance process to guarantee perfection."
      }
    ],
    testimonial: {
      text: "The deep cleaning service for our Winchester home was exceptional. Professional, thorough, and excellent value!",
      author: "Rachel G., Winchester Resident"
    }
  }
];

const DeepCleaningLasVegasPage = () => {
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
        <title>Deep Cleaning Service Las Vegas | Red Rock Cleans</title>
        <meta name="description" content="Restore your home's sparkle with our thorough deep cleaning service in Las Vegas. Red Rock Cleans tackles built-up grime for a truly refreshed home. Get your free quote!" />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <LasVegasNavigation />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative py-24 md:py-32 overflow-hidden">
            <div className="absolute inset-0">
              <img 
                src="/src/assets/deep-cleaning.jpg" 
                alt="Comprehensive deep cleaning service in a luxury Las Vegas home with Red Rock Canyon views"
                className="w-full h-full object-cover scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                  Thorough Deep Cleaning Service in Las Vegas
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                  Restore your home's sparkle with our comprehensive deep cleaning service that tackles every detail. Perfect for spring cleaning, special occasions, or when your Las Vegas home needs a complete refresh from top to bottom.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="h-14 text-lg px-8" asChild>
                    <Link to="/book-now-vegas">
                      <Calendar className="w-5 h-5 mr-2" />
                      Schedule Deep Cleaning
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
                      Detailed Interior Cleaning
                    </h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Clean inside all cabinets, drawers, and appliances
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Detailed baseboard and trim cleaning
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Clean light fixtures, ceiling fans, and vents
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Intensive grout scrubbing and tile cleaning
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Deep clean inside ovens, microwaves, and refrigerators
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <CheckCircle className="w-6 h-6 text-primary mr-3" />
                      Intensive Surface Treatment
                    </h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Clean window tracks and sills thoroughly
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Detailed door and frame cleaning
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Clean behind and under all furniture
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Deep clean all switch plates and outlet covers
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Sanitize all high-touch surfaces and handles
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* The Perfect Solution for a Healthier Las Vegas Home */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  The Perfect Solution for a Healthier Las Vegas Home
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center p-6 bg-background rounded-lg shadow-sm">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <RefreshCw className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Remove Built-Up Allergens</h3>
                    <p className="text-muted-foreground">
                      Our deep cleaning eliminates dust mites, pet dander, and desert allergens that accumulate over time, creating a healthier environment for your family.
                    </p>
                  </div>
                  <div className="text-center p-6 bg-background rounded-lg shadow-sm">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Desert Dust & Grime Removal</h3>
                    <p className="text-muted-foreground">
                      Las Vegas's desert climate brings unique challenges. Our deep cleaning tackles sand, dust, and grime that standard cleaning can't reach.
                    </p>
                  </div>
                  <div className="text-center p-6 bg-background rounded-lg shadow-sm">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Healthier Living Environment</h3>
                    <p className="text-muted-foreground">
                      Regular deep cleaning reduces bacteria, improves air quality, and creates a healthier living space for you and your loved ones.
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
                            Comprehensive deep cleaning services
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
                              Get a Deep Cleaning Quote for {neighborhood.name}
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
                  Beyond deep cleaning, we offer specialized services to meet all your Las Vegas property needs.
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
                    <h3 className="text-lg font-semibold mb-3">How is a deep clean different from a standard clean?</h3>
                    <p className="text-muted-foreground">
                      Deep cleaning includes intensive tasks like cleaning inside cabinets and appliances, detailed baseboard cleaning, light fixture cleaning, and intensive grout scrubbing that aren't part of standard cleaning.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3">How long does a deep clean take?</h3>
                    <p className="text-muted-foreground">
                      Deep cleaning typically takes 4-6 hours depending on your home's size and the level of detail required. We'll provide an accurate time estimate during your consultation.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3">How often should I schedule deep cleaning?</h3>
                    <p className="text-muted-foreground">
                      We recommend deep cleaning every 3-4 months or seasonally. Many Las Vegas residents schedule deep cleaning for spring cleaning or before special occasions.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3">Do I need to prepare my home for deep cleaning?</h3>
                    <p className="text-muted-foreground">
                      We recommend decluttering surfaces to maximize cleaning efficiency, but our team can work around your belongings. We'll discuss any specific preparation needs during your consultation.
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
                  Ready to Restore Your Las Vegas Home's Sparkle?
                </h2>
                <p className="text-xl mb-8 opacity-90">
                  Join hundreds of satisfied Las Vegas residents who trust Red Rock Cleans for thorough, professional deep cleaning services that make a real difference.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" className="h-14 text-lg px-8" asChild>
                    <Link to="/book-now-vegas">
                      <Calendar className="w-5 h-5 mr-2" />
                      Schedule Deep Cleaning Today
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
                  alt="A meticulously detailed kitchen in a Las Vegas home after a deep cleaning by Red Rock Cleans"
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

export default DeepCleaningLasVegasPage;

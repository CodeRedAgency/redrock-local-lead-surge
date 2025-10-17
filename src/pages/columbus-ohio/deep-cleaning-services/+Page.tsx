import { ColumbusNavigation } from "@/components/ColumbusNavigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Clock, Shield, Star, Users, Calendar, Home, Sparkles, DollarSign, Key, RefreshCw, Heart, Clock4, Zap, HardHat, Hammer, Award, Wrench, Target, Layers } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";

const neighborhoods = [
  {
    id: "dublin",
    name: "Dublin",
    description: "Dublin homeowners trust our thorough deep cleaning service to restore their luxury properties to pristine condition. We understand the high standards expected in this prestigious neighborhood and provide intensive cleaning that tackles every detail, leaving homes sparkling clean from top to bottom.",
    faq: [
      {
        question: "How is deep cleaning different from standard cleaning in Dublin?",
        answer: "Deep cleaning goes beyond regular maintenance to tackle built-up grime, detailed appliance cleaning, baseboards, light fixtures, and areas not covered in standard cleaning. It's perfect for spring cleaning or preparing for special events."
      },
      {
        question: "How long does a deep cleaning service take in Dublin?",
        answer: "Deep cleaning typically takes 4-8 hours depending on home size and condition. We provide detailed time estimates during your free consultation to ensure proper scheduling."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans transformed our Dublin home with their deep cleaning service. Every corner sparkles and the built-up grime is completely gone. Absolutely worth it!",
      author: "Sarah M., Dublin Homeowner"
    }
  },
  {
    id: "upper-arlington",
    name: "Upper Arlington",
    description: "Upper Arlington homeowners rely on our comprehensive deep cleaning service to restore their luxury properties to like-new condition. We provide intensive cleaning that addresses every surface and detail, perfect for maintaining the pristine standards expected in this exclusive neighborhood.",
    faq: [
      {
        question: "Do you handle luxury properties for deep cleaning in Upper Arlington?",
        answer: "Yes, we specialize in luxury property deep cleaning and are experienced with high-end finishes, premium materials, and the detailed attention required for Upper Arlington homes."
      },
      {
        question: "Can you customize deep cleaning for Upper Arlington properties?",
        answer: "Absolutely! We can adapt our deep cleaning checklist based on your Upper Arlington property's unique features, architectural details, and specific maintenance requirements."
      }
    ],
    testimonial: {
      text: "The deep cleaning service for our Upper Arlington home was exceptional. They paid attention to every detail and our luxury property looks absolutely stunning!",
      author: "Michael R., Upper Arlington Property Owner"
    }
  },
  {
    id: "powell",
    name: "Powell",
    description: "Powell homeowners depend on our thorough deep cleaning service to restore their properties to pristine condition. We provide intensive cleaning that fits perfectly with the active Powell lifestyle, giving families a fresh start with a completely refreshed home environment.",
    faq: [
      {
        question: "What's included in deep cleaning for Powell homes?",
        answer: "Our deep cleaning includes cleaning inside cabinets, appliances, light fixtures, baseboards, detailed grout scrubbing, window tracks, and all areas not covered in standard cleaning."
      },
      {
        question: "How often should I schedule deep cleaning in Powell?",
        answer: "Most Powell homeowners schedule deep cleaning 2-4 times per year, often for spring cleaning, before holidays, or when moving into a new home."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provided excellent deep cleaning for our Powell home. The difference is incredible - our home feels brand new and so much healthier!",
      author: "Jennifer L., Powell Homeowner"
    }
  },
  {
    id: "lewis-center",
    name: "Lewis Center",
    description: "Lewis Center homeowners trust our comprehensive deep cleaning service to restore their properties to pristine condition. We understand the importance of thorough cleaning for growing families and provide intensive service that creates a healthier living environment in this thriving community.",
    faq: [
      {
        question: "Is deep cleaning suitable for families in Lewis Center?",
        answer: "Yes, deep cleaning is perfect for families as it removes built-up allergens, dust, and bacteria that can affect children's health. We use family-safe products and create a healthier home environment."
      },
      {
        question: "Do you work around family schedules for deep cleaning?",
        answer: "Absolutely! We can schedule deep cleaning around family commitments and can work efficiently while you're away or coordinate timing that works best for your household."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been amazing for our Lewis Center family. Their deep cleaning service created such a healthy, fresh environment for our kids!",
      author: "Lisa W., Lewis Center Property Owner"
    }
  },
  {
    id: "worthington",
    name: "Worthington",
    description: "Worthington homeowners enjoy our comprehensive deep cleaning service that restores their properties to pristine condition. Perfect for the upscale Worthington lifestyle where homes require intensive maintenance to maintain their beautiful appearance and value.",
    faq: [
      {
        question: "Do you work with historic properties for deep cleaning in Worthington?",
        answer: "Yes, we're experienced with historic property deep cleaning and understand the special care required for older homes, including delicate surfaces and architectural details."
      },
      {
        question: "Can deep cleaning help maintain property value in Worthington?",
        answer: "Absolutely! Regular deep cleaning helps maintain your Worthington property's condition and value by preventing buildup of dirt and grime that can damage surfaces over time."
      }
    ],
    testimonial: {
      text: "The deep cleaning service for our Worthington home was fantastic. They really understood our historic home's needs and it looks absolutely beautiful!",
      author: "Amanda T., Worthington Homeowner"
    }
  },
  {
    id: "new-albany",
    name: "New Albany",
    description: "New Albany homeowners trust our thorough deep cleaning service to restore their properties to pristine condition. We provide intensive cleaning that meets the demands of this family-friendly area where maintaining a healthy home environment is essential for busy families.",
    faq: [
      {
        question: "How do you handle large-scale deep cleaning in New Albany?",
        answer: "We're experienced with large-scale properties and can deploy multiple teams to handle extensive deep cleaning efficiently while maintaining quality standards and attention to detail."
      },
      {
        question: "What if I need to reschedule my New Albany deep cleaning?",
        answer: "We're flexible with rescheduling and work closely with New Albany homeowners to accommodate schedule changes while maintaining our commitment to thorough service."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provided excellent deep cleaning for our New Albany home. They really understood our family's needs and created such a healthy environment!",
      author: "David K., New Albany Homeowner"
    }
  },
  {
    id: "bexley",
    name: "Bexley",
    description: "Bexley homeowners depend on our comprehensive deep cleaning service to restore their historic properties to pristine condition. We provide thorough cleaning that respects the unique character of Bexley homes while creating a healthier living environment for families.",
    faq: [
      {
        question: "Do you service both historic and modern homes for deep cleaning in Bexley?",
        answer: "Yes, we provide comprehensive deep cleaning services for all types of properties including historic homes, modern residences, and mixed architectural styles with appropriate care for each."
      },
      {
        question: "How do you ensure thoroughness in Bexley deep cleaning?",
        answer: "Every Bexley deep cleaning follows our detailed checklist and includes comprehensive quality assurance to guarantee thorough, satisfactory results in every area of your home."
      }
    ],
    testimonial: {
      text: "The deep cleaning service for our Bexley home was exceptional. They paid such attention to detail and our historic home looks absolutely stunning!",
      author: "Robert H., Bexley Homeowner"
    }
  },
  {
    id: "german-village",
    name: "German Village",
    description: "German Village homeowners rely on our thorough deep cleaning service to restore their historic properties to pristine condition. We provide intensive cleaning that helps families maintain healthy living environments in this charming and historic community.",
    faq: [
      {
        question: "Do you work around German Village family schedules?",
        answer: "Yes, we can schedule deep cleaning around family schedules and lifestyle commitments while maintaining our thorough service standards and attention to detail."
      },
      {
        question: "What's your approach to historic home deep cleaning in German Village?",
        answer: "We use gentle yet effective methods appropriate for historic homes, paying special attention to preserving original features while achieving deep cleaning results."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been amazing for our German Village historic home. Their deep cleaning service maintained the character while creating such a healthy environment!",
      author: "Maria S., German Village Homeowner"
    }
  },
  {
    id: "short-north",
    name: "Short North",
    description: "Short North homeowners trust our comprehensive deep cleaning service to restore their urban properties to pristine condition. We understand the unique challenges of urban living and provide intensive cleaning that creates a fresh, healthy environment in this vibrant arts district.",
    faq: [
      {
        question: "Do you service both apartments and condos for deep cleaning in Short North?",
        answer: "Yes, we specialize in deep cleaning for both apartments and condos in Short North, adapting our service to your specific property type and urban living needs."
      },
      {
        question: "How do you handle quick turnovers for deep cleaning in Short North?",
        answer: "Every Short North deep cleaning is optimized for efficiency while maintaining thoroughness, using streamlined processes and experienced teams to achieve comprehensive results."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provides excellent deep cleaning for our Short North condo. Thorough, professional, and our urban home feels completely refreshed!",
      author: "Jennifer L., Short North Homeowner"
    }
  },
  {
    id: "victorian-village",
    name: "Victorian Village",
    description: "Victorian Village homeowners enjoy our comprehensive deep cleaning service that restores their historic properties to pristine condition. Perfect for the charming Victorian Village lifestyle where homes require intensive maintenance to maintain their architectural beauty and character.",
    faq: [
      {
        question: "Do you work with Victorian-era homes for deep cleaning in Victorian Village?",
        answer: "Yes, we're experienced with Victorian-era property deep cleaning and understand the special care required for ornate details, original woodwork, and period features."
      },
      {
        question: "Can you customize deep cleaning for Victorian Village properties?",
        answer: "Absolutely! We can adapt our deep cleaning checklist based on your Victorian Village property's unique architectural features and specific maintenance requirements."
      }
    ],
    testimonial: {
      text: "The deep cleaning service for our Victorian Village home was wonderful. They really understood historic homes and preserved all the beautiful details while achieving thorough results!",
      author: "Amanda T., Victorian Village Homeowner"
    }
  },
  {
    id: "hillard",
    name: "Hilliard",
    description: "Hilliard homeowners trust our thorough deep cleaning service to restore their properties to pristine condition. We provide intensive cleaning that meets the demands of this family-friendly area where maintaining a healthy home environment is essential for busy families.",
    faq: [
      {
        question: "How do you handle large-scale deep cleaning in Hilliard?",
        answer: "We're experienced with large-scale properties and can deploy multiple teams to handle extensive deep cleaning efficiently while maintaining quality standards and thorough attention to detail."
      },
      {
        question: "What if I need to reschedule my Hilliard deep cleaning?",
        answer: "We're flexible with rescheduling and work closely with Hilliard homeowners to accommodate schedule changes while maintaining our commitment to comprehensive service."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provided excellent deep cleaning for our Hilliard home. They really understood our family's needs and created such a healthy, fresh environment!",
      author: "David K., Hilliard Homeowner"
    }
  },
  {
    id: "westerville",
    name: "Westerville",
    description: "Westerville homeowners depend on our comprehensive deep cleaning service to restore their properties to pristine condition. We provide thorough cleaning that ensures complete satisfaction and a truly refreshed home environment in this thriving community.",
    faq: [
      {
        question: "Do you service both residential and commercial deep cleaning in Westerville?",
        answer: "Yes, we provide comprehensive deep cleaning services for all types of properties including residential homes, commercial spaces, and mixed-use developments with appropriate care for each."
      },
      {
        question: "How do you ensure thoroughness in Westerville deep cleaning?",
        answer: "Every Westerville deep cleaning follows our detailed checklist and includes comprehensive quality assurance to guarantee thorough, satisfactory results in every area of your property."
      }
    ],
    testimonial: {
      text: "The deep cleaning service for our Westerville home was exceptional. Thorough, professional, and our family always enjoys coming home to such a clean, healthy environment!",
      author: "Robert H., Westerville Homeowner"
    }
  }
];

const DeepCleaningColumbusOhioPage = () => {
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
        <title>Deep Cleaning Service Columbus Ohio | Red Rock Cleans</title>
        <meta name="description" content="Restore your home's sparkle with our thorough deep cleaning service in Columbus, OH. We tackle built-up grime for a truly refreshed home in Dublin, Upper Arlington, and beyond." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <ColumbusNavigation loginUrl="https://customer-portal.maidily.com/red-rock-cleans-columbus-ohio/sign-in" bookingUrl="/book-now-columbus-ohio" />
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative py-24 md:py-32 overflow-hidden">
            <div className="absolute inset-0">
              <img 
                src="/src/assets/hero-residential.jpg" 
                alt="Professional deep cleaning service in a beautiful Columbus Ohio home with modern city skyline views"
                className="w-full h-full object-cover scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                  Thorough Deep Cleaning Service in Columbus, Ohio
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                  Restore your home's sparkle with our comprehensive deep cleaning service. Our intensive cleaning tackles built-up grime and hidden dirt, perfect for a one-time thorough clean to make any Columbus home feel new again.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="h-14 text-lg px-8" asChild>
                    <Link to="/book-now-columbus-ohio">
                      <Calendar className="w-5 h-5 mr-2" />
                      Schedule Your Deep Cleaning
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="h-14 text-lg px-8" asChild>
                    <Link to="/columbus-calculator">
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
                      <Layers className="w-6 h-6 text-primary mr-3" />
                      Intensive Cleaning Tasks
                    </h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <Target className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Cleaning inside cabinets and drawers
                      </li>
                      <li className="flex items-start">
                        <Target className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Detailed appliance cleaning (inside/outside)
                      </li>
                      <li className="flex items-start">
                        <Target className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Baseboard and trim cleaning
                      </li>
                      <li className="flex items-start">
                        <Target className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Light fixture and ceiling fan cleaning
                      </li>
                      <li className="flex items-start">
                        <Target className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Window tracks and sills deep cleaning
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <Wrench className="w-6 h-6 text-primary mr-3" />
                      Columbus-Specific Deep Cleaning
                    </h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <Target className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Detailed grout scrubbing and sealing
                      </li>
                      <li className="flex items-start">
                        <Target className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Inside oven and microwave cleaning
                      </li>
                      <li className="flex items-start">
                        <Target className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Refrigerator interior deep cleaning
                      </li>
                      <li className="flex items-start">
                        <Target className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Door frames and switch plate cleaning
                      </li>
                      <li className="flex items-start">
                        <Target className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Detailed dusting of all surfaces
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
                    <h3 className="text-xl font-semibold mb-3">Remove Built-up Allergens</h3>
                    <p className="text-muted-foreground">
                      Our deep cleaning removes built-up dust, allergens, and bacteria that can affect your family's health, creating a cleaner, healthier living environment in your Columbus home.
                    </p>
                  </div>
                  <div className="text-center p-6 bg-background rounded-lg shadow-sm">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Healthier Living Environment</h3>
                    <p className="text-muted-foreground">
                      Deep cleaning eliminates hidden dirt and grime that regular cleaning misses, creating a healthier home environment for your Columbus family to thrive in.
                    </p>
                  </div>
                  <div className="text-center p-6 bg-background rounded-lg shadow-sm">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Sparkles className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Restore Your Home's Sparkle</h3>
                    <p className="text-muted-foreground">
                      Experience the satisfaction of a truly clean home. Our deep cleaning restores your Columbus home's original beauty and creates a fresh, welcoming environment.
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
                  Areas We Serve in Columbus, Ohio
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
                            <Link to="/book-now-columbus-ohio">
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
                  Other Cleaning Services for Your Property in Columbus
                </h2>
                <p className="text-xl text-muted-foreground mb-12">
                  Beyond deep cleaning, we offer specialized services to meet all your Columbus property needs.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Link to="/columbus-ohio/standard-cleaning-services/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Standard Cleaning Services
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Regular recurring cleaning service for maintaining your home's cleanliness week after week.
                      </p>
                    </div>
                  </Link>
                  <Link to="/columbus-ohio/move-out-cleaning-services/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Move Out Cleaning Services
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Thorough end-of-tenancy cleaning to secure your security deposit.
                      </p>
                    </div>
                  </Link>
                  <Link to="/columbus-ohio/airbnb-cleaning-services/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Airbnb Cleaning Services
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Professional turnover cleaning for vacation rental properties.
                      </p>
                    </div>
                  </Link>
                  <Link to="/columbus-ohio/post-construction-cleaning-services/" className="group">
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
                      Deep cleaning goes beyond regular maintenance to tackle built-up grime, clean inside cabinets and appliances, scrub baseboards, clean light fixtures, and address areas not covered in standard cleaning. It's perfect for spring cleaning or preparing for special events.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3">What is the average price for a deep clean in the Columbus area?</h3>
                    <p className="text-muted-foreground">
                      Deep cleaning costs in Columbus vary by property size, condition, and specific requirements. Contact us for a detailed, customized quote based on your home's needs and the level of deep cleaning required.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3">How long does a deep cleaning service take?</h3>
                    <p className="text-muted-foreground">
                      Deep cleaning typically takes 4-8 hours depending on home size, condition, and specific requirements. We provide detailed time estimates during your free consultation to ensure proper scheduling.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3">When should I schedule deep cleaning?</h3>
                    <p className="text-muted-foreground">
                      Deep cleaning is perfect for spring cleaning, before holidays, when moving into a new home, or as a periodic intensive cleaning to maintain your Columbus home's condition and health.
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
                  Join hundreds of satisfied Columbus homeowners who trust Red Rock Cleans for thorough deep cleaning that transforms their homes into healthy, beautiful spaces.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" className="h-14 text-lg px-8" asChild>
                    <Link to="/book-now-columbus-ohio">
                      <Calendar className="w-5 h-5 mr-2" />
                      Schedule Your Deep Cleaning Today
                    </Link>
                  </Button>
                  <Button size="lg" variant="cta" className="h-14 text-lg px-8" asChild>
                    <Link to="/columbus-calculator">
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

export default DeepCleaningColumbusOhioPage;

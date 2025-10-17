import { ColumbusNavigation } from "@/components/ColumbusNavigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Clock, Shield, Star, Users, Calendar, Home, Sparkles, DollarSign, Key, RefreshCw, Heart, Clock4, Zap, HardHat, Hammer, Award, Wrench, Target, Layers, KeyRound, FileCheck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";

const neighborhoods = [
  {
    id: "dublin",
    name: "Dublin",
    description: "Dublin renters and homeowners trust our reliable move out cleaning service to secure their security deposits and prepare properties for new occupants. We understand the high standards expected by landlords and property managers in this prestigious area and provide thorough cleaning that meets all requirements.",
    faq: [
      {
        question: "How is move out cleaning different from regular cleaning in Dublin?",
        answer: "Move out cleaning is specifically designed to meet landlord requirements and secure your security deposit. It includes detailed tasks like inside oven cleaning, inside refrigerator cleaning, inside all cabinets and drawers, and baseboard cleaning that aren't typically included in regular cleaning."
      },
      {
        question: "Do you guarantee I'll get my security deposit back in Dublin?",
        answer: "While we can't guarantee deposit returns (as that depends on your landlord), our thorough move out cleaning is designed to meet the highest standards and maximize your chances of a full security deposit return."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans made our Dublin move out so much easier. Their thorough cleaning helped us get our full security deposit back, and we didn't have to worry about a thing!",
      author: "Sarah M., Dublin Renter"
    }
  },
  {
    id: "upper-arlington",
    name: "Upper Arlington",
    description: "Upper Arlington renters and homeowners rely on our professional move out cleaning service to secure their security deposits and prepare properties for new occupants. We provide comprehensive cleaning that meets the high standards expected by landlords in this exclusive neighborhood.",
    faq: [
      {
        question: "Do you work with luxury properties for move out cleaning in Upper Arlington?",
        answer: "Yes, we specialize in luxury property move out cleaning and are experienced with high-end finishes, premium materials, and the detailed attention required for Upper Arlington rental properties."
      },
      {
        question: "Can you handle both apartments and houses for move out cleaning in Upper Arlington?",
        answer: "Absolutely! We provide move out cleaning services for both apartments and houses in Upper Arlington, adapting our service to your specific property type and landlord requirements."
      }
    ],
    testimonial: {
      text: "The move out cleaning service for our Upper Arlington rental was exceptional. Professional, thorough, and we got our full deposit back without any issues!",
      author: "Michael R., Upper Arlington Property Owner"
    }
  },
  {
    id: "powell",
    name: "Powell",
    description: "Powell renters and homeowners depend on our reliable move out cleaning service to secure their security deposits and prepare properties for new occupants. We provide comprehensive cleaning that fits perfectly with busy moving schedules, ensuring a stress-free transition.",
    faq: [
      {
        question: "How long does move out cleaning take in Powell?",
        answer: "Move out cleaning typically takes 3-6 hours depending on property size and condition. We provide detailed time estimates during your free consultation to ensure proper scheduling around your move."
      },
      {
        question: "Do you work around tight moving schedules in Powell?",
        answer: "Yes, we understand moving timelines and can work around your schedule, including evenings and weekends, to ensure your property is ready for inspection when needed."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provided excellent move out cleaning for our Powell home. They worked around our tight moving schedule and our landlord was impressed with the results!",
      author: "Jennifer L., Powell Homeowner"
    }
  },
  {
    id: "lewis-center",
    name: "Lewis Center",
    description: "Lewis Center renters and homeowners trust our comprehensive move out cleaning service to secure their security deposits and prepare properties for new occupants. We understand the importance of meeting landlord requirements and provide thorough cleaning for growing families in this thriving community.",
    faq: [
      {
        question: "Is move out cleaning suitable for families in Lewis Center?",
        answer: "Yes, move out cleaning is perfect for families as it ensures your property meets all landlord requirements while you focus on your move. We can work around family schedules and coordinate with your moving timeline."
      },
      {
        question: "Do you handle both residential and rental properties for move out cleaning in Lewis Center?",
        answer: "Yes, we provide comprehensive move out cleaning services for all types of properties including rental homes, apartments, and owner-occupied properties being sold."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been amazing for our Lewis Center move out. They handled everything so professionally and we got our full security deposit back!",
      author: "Lisa W., Lewis Center Property Owner"
    }
  },
  {
    id: "worthington",
    name: "Worthington",
    description: "Worthington renters and homeowners enjoy our comprehensive move out cleaning service that secures their security deposits and prepares properties for new occupants. Perfect for the upscale Worthington lifestyle where properties require thorough cleaning to meet high standards.",
    faq: [
      {
        question: "Do you work with historic properties for move out cleaning in Worthington?",
        answer: "Yes, we're experienced with historic property move out cleaning and understand the special care required for older homes, including delicate surfaces and architectural details."
      },
      {
        question: "Can move out cleaning help with property sales in Worthington?",
        answer: "Absolutely! Our thorough move out cleaning prepares properties for new occupants or buyers, ensuring they meet the high standards expected in the Worthington market."
      }
    ],
    testimonial: {
      text: "The move out cleaning service for our Worthington home was fantastic. They really understood our historic home's needs and our property was ready for the new buyers!",
      author: "Amanda T., Worthington Homeowner"
    }
  },
  {
    id: "new-albany",
    name: "New Albany",
    description: "New Albany renters and homeowners trust our thorough move out cleaning service to secure their security deposits and prepare properties for new occupants. We provide comprehensive cleaning that meets the demands of this family-friendly area where maintaining property standards is essential.",
    faq: [
      {
        question: "How do you handle large-scale move out cleaning in New Albany?",
        answer: "We're experienced with large-scale properties and can deploy multiple teams to handle extensive move out cleaning efficiently while maintaining quality standards and meeting landlord requirements."
      },
      {
        question: "What if I need to reschedule my New Albany move out cleaning?",
        answer: "We're flexible with rescheduling and work closely with New Albany clients to accommodate moving timeline changes while maintaining our commitment to thorough service."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provided excellent move out cleaning for our New Albany home. They really understood our family's needs and our landlord was completely satisfied!",
      author: "David K., New Albany Homeowner"
    }
  },
  {
    id: "bexley",
    name: "Bexley",
    description: "Bexley renters and homeowners depend on our comprehensive move out cleaning service to secure their security deposits and prepare properties for new occupants. We provide thorough cleaning that respects the unique character of Bexley homes while meeting all landlord requirements.",
    faq: [
      {
        question: "Do you service both historic and modern homes for move out cleaning in Bexley?",
        answer: "Yes, we provide comprehensive move out cleaning services for all types of properties including historic homes, modern residences, and mixed architectural styles with appropriate care for each."
      },
      {
        question: "How do you ensure thoroughness in Bexley move out cleaning?",
        answer: "Every Bexley move out cleaning follows our detailed checklist and includes comprehensive quality assurance to guarantee thorough, satisfactory results that meet landlord standards."
      }
    ],
    testimonial: {
      text: "The move out cleaning service for our Bexley home was exceptional. They paid such attention to detail and our landlord was impressed with the thoroughness!",
      author: "Robert H., Bexley Homeowner"
    }
  },
  {
    id: "german-village",
    name: "German Village",
    description: "German Village renters and homeowners rely on our thorough move out cleaning service to secure their security deposits and prepare properties for new occupants. We provide comprehensive cleaning that helps maintain the charm of this historic community while meeting all requirements.",
    faq: [
      {
        question: "Do you work around German Village moving schedules?",
        answer: "Yes, we can schedule move out cleaning around your moving timeline and lifestyle commitments while maintaining our thorough service standards and attention to detail."
      },
      {
        question: "What's your approach to historic home move out cleaning in German Village?",
        answer: "We use gentle yet effective methods appropriate for historic homes, paying special attention to preserving original features while achieving thorough cleaning results that meet landlord requirements."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been amazing for our German Village move out. They maintained the historic character while ensuring our property met all landlord requirements!",
      author: "Maria S., German Village Renter"
    }
  },
  {
    id: "short-north",
    name: "Short North",
    description: "Short North renters and homeowners trust our comprehensive move out cleaning service to secure their security deposits and prepare properties for new occupants. We understand the unique challenges of urban rental properties and provide thorough cleaning for this vibrant arts district.",
    faq: [
      {
        question: "Do you service both apartments and condos for move out cleaning in Short North?",
        answer: "Yes, we specialize in move out cleaning for both apartments and condos in Short North, adapting our service to your specific property type and landlord requirements."
      },
      {
        question: "How do you handle quick turnovers for move out cleaning in Short North?",
        answer: "Every Short North move out cleaning is optimized for efficiency while maintaining thoroughness, using streamlined processes and experienced teams to meet tight moving deadlines."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provides excellent move out cleaning for our Short North condo. Professional, thorough, and we got our full security deposit back!",
      author: "Jennifer L., Short North Renter"
    }
  },
  {
    id: "victorian-village",
    name: "Victorian Village",
    description: "Victorian Village renters and homeowners enjoy our comprehensive move out cleaning service that secures their security deposits and prepares properties for new occupants. Perfect for the charming Victorian Village lifestyle where historic properties require special care during transitions.",
    faq: [
      {
        question: "Do you work with Victorian-era homes for move out cleaning in Victorian Village?",
        answer: "Yes, we're experienced with Victorian-era property move out cleaning and understand the special care required for ornate details, original woodwork, and period features."
      },
      {
        question: "Can you customize move out cleaning for Victorian Village properties?",
        answer: "Absolutely! We can adapt our move out cleaning checklist based on your Victorian Village property's unique architectural features and specific landlord requirements."
      }
    ],
    testimonial: {
      text: "The move out cleaning service for our Victorian Village home was wonderful. They really understood historic homes and preserved all the beautiful details while meeting our landlord's requirements!",
      author: "Amanda T., Victorian Village Renter"
    }
  },
  {
    id: "hillard",
    name: "Hilliard",
    description: "Hilliard renters and homeowners trust our thorough move out cleaning service to secure their security deposits and prepare properties for new occupants. We provide comprehensive cleaning that meets the demands of this family-friendly area where maintaining property standards is essential.",
    faq: [
      {
        question: "How do you handle large-scale move out cleaning in Hilliard?",
        answer: "We're experienced with large-scale properties and can deploy multiple teams to handle extensive move out cleaning efficiently while maintaining quality standards and meeting landlord requirements."
      },
      {
        question: "What if I need to reschedule my Hilliard move out cleaning?",
        answer: "We're flexible with rescheduling and work closely with Hilliard clients to accommodate moving timeline changes while maintaining our commitment to thorough service."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provided excellent move out cleaning for our Hilliard home. They really understood our family's needs and our landlord was completely satisfied with the results!",
      author: "David K., Hilliard Homeowner"
    }
  },
  {
    id: "westerville",
    name: "Westerville",
    description: "Westerville renters and homeowners depend on our comprehensive move out cleaning service to secure their security deposits and prepare properties for new occupants. We provide thorough cleaning that ensures complete satisfaction and meets all landlord requirements in this thriving community.",
    faq: [
      {
        question: "Do you service both residential and rental properties for move out cleaning in Westerville?",
        answer: "Yes, we provide comprehensive move out cleaning services for all types of properties including rental homes, apartments, and owner-occupied properties being sold with appropriate care for each."
      },
      {
        question: "How do you ensure thoroughness in Westerville move out cleaning?",
        answer: "Every Westerville move out cleaning follows our detailed checklist and includes comprehensive quality assurance to guarantee thorough, satisfactory results that meet all landlord standards."
      }
    ],
    testimonial: {
      text: "The move out cleaning service for our Westerville home was exceptional. Thorough, professional, and we got our full security deposit back without any issues!",
      author: "Robert H., Westerville Renter"
    }
  }
];

const MoveOutCleaningColumbusOhioPage = () => {
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
        <title>Move Out Cleaning Service Columbus Ohio | Red Rock Cleans</title>
        <meta name="description" content="Secure your deposit with our reliable move out cleaning service in Columbus, OH. We provide thorough end-of-tenancy cleaning in Dublin, Upper Arlington, and beyond. Book today!" />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <ColumbusNavigation loginUrl="https://customer-portal.maidily.com/red-rock-cleans-columbus-ohio/sign-in" bookingUrl="/book-now-columbus-ohio" />
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative py-24 md:py-32 overflow-hidden">
            <div className="absolute inset-0">
              <img 
                src="/src/assets/hero-residential.jpg" 
                alt="Professional move out cleaning service in a Columbus Ohio home with moving boxes"
                className="w-full h-full object-cover scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                  Stress-Free Move Out Cleaning Service in Columbus, Ohio
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                  Secure your security deposit and make your move easier with our comprehensive move out cleaning service. We help renters, students, and homeowners in the Columbus area prepare properties for new occupants, ensuring a stress-free transition and maximizing your chances of a full deposit return.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="h-14 text-lg px-8" asChild>
                    <Link to="/book-now-columbus-ohio">
                      <Calendar className="w-5 h-5 mr-2" />
                      Schedule Your Move Out Cleaning
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
                      <FileCheck className="w-6 h-6 text-primary mr-3" />
                      Kitchen Deep Clean
                    </h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Inside oven cleaning and degreasing
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Inside refrigerator cleaning and sanitizing
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Inside all cabinets and drawers
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Inside microwave cleaning
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Dishwasher interior cleaning
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <KeyRound className="w-6 h-6 text-primary mr-3" />
                      Columbus Move Out Requirements
                    </h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Baseboards and trim cleaning
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Inside all closets and storage areas
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Light fixtures and ceiling fans
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Window tracks and sills
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Detailed grout scrubbing
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
                      Let us handle the cleaning while you focus on packing and moving. Our professional team works efficiently to ensure your property is ready for inspection without adding stress to your moving timeline.
                    </p>
                  </div>
                  <div className="text-center p-6 bg-background rounded-lg shadow-sm">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FileCheck className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Satisfy Landlord Requirements</h3>
                    <p className="text-muted-foreground">
                      Our move out cleaning is specifically designed to meet landlord requirements and property management standards, ensuring your property passes inspection with flying colors.
                    </p>
                  </div>
                  <div className="text-center p-6 bg-background rounded-lg shadow-sm">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <DollarSign className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Maximize Deposit Return</h3>
                    <p className="text-muted-foreground">
                      Our thorough cleaning maximizes your chances of getting your full security deposit back by ensuring every detail meets landlord expectations and property standards.
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
                            <Link to="/book-now-columbus-ohio">
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
                  Other Cleaning Services for Your Property in Columbus
                </h2>
                <p className="text-xl text-muted-foreground mb-12">
                  Beyond move out cleaning, we offer specialized services to meet all your Columbus property needs.
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
                  <Link to="/columbus-ohio/deep-cleaning-services/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Deep Cleaning Services
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Comprehensive deep cleaning for those hard-to-reach areas and intensive cleaning needs.
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
                    <h3 className="text-lg font-semibold mb-3">Should the property be completely empty before you arrive?</h3>
                    <p className="text-muted-foreground">
                      While it's ideal to have the property empty, we can work around your moving schedule. We can clean around remaining items or coordinate timing to ensure the property is ready for your final inspection.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3">What is the average cost for a move out clean in the Columbus area?</h3>
                    <p className="text-muted-foreground">
                      Move out cleaning costs in Columbus vary by property size, condition, and specific requirements. Contact us for a detailed, customized quote based on your property's needs and landlord requirements.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3">Do you guarantee I'll get my security deposit back?</h3>
                    <p className="text-muted-foreground">
                      While we can't guarantee deposit returns (as that depends on your landlord), our thorough move out cleaning is designed to meet the highest standards and maximize your chances of a full security deposit return.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3">How far in advance should I schedule move out cleaning?</h3>
                    <p className="text-muted-foreground">
                      We recommend scheduling your move out cleaning 1-2 weeks in advance to ensure availability, especially during peak moving seasons. We can also accommodate last-minute requests when possible.
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
                  Join hundreds of satisfied Columbus renters and homeowners who trust Red Rock Cleans for thorough move out cleaning that maximizes their deposit returns and makes moving stress-free.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" className="h-14 text-lg px-8" asChild>
                    <Link to="/book-now-columbus-ohio">
                      <Calendar className="w-5 h-5 mr-2" />
                      Schedule Your Move Out Cleaning Today
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

export default MoveOutCleaningColumbusOhioPage;

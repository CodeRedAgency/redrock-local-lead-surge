import { OahuNavigation } from "@/components/OahuNavigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Clock, Shield, Star, Users, Calendar, Home, Sparkles, DollarSign, Key, RefreshCw, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";

const neighborhoods = [
  {
    id: "aiea",
    name: "Aiea",
    description: "Aiea residents trust our standard cleaning service to keep their homes consistently beautiful. We provide reliable, recurring maid services that fit your busy lifestyle.",
    faq: [
      {
        question: "How often do Aiea residents schedule standard cleaning?",
        answer: "Most Aiea residents choose weekly or bi-weekly cleaning services, though we also offer monthly options for those who need less frequent service."
      },
      {
        question: "Do you bring your own cleaning supplies to Aiea homes?",
        answer: "Yes, we bring all professional-grade cleaning supplies and equipment. We use eco-friendly products that are safe for your family and pets."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Aiea home spotless for over a year. Their attention to detail and reliability is unmatched!",
      author: "Sarah M., Aiea Resident"
    }
  },
  {
    id: "ewa-beach",
    name: "Ewa Beach",
    description: "Ewa Beach families enjoy our comprehensive standard cleaning service that maintains their homes week after week. Professional, reliable, and thorough cleaning every time.",
    faq: [
      {
        question: "Can you work around my Ewa Beach work schedule?",
        answer: "Absolutely! We offer flexible scheduling including early morning, evening, and weekend appointments to fit your Ewa Beach lifestyle."
      },
      {
        question: "What's included in your Ewa Beach standard cleaning?",
        answer: "Our standard cleaning includes dusting all surfaces, vacuuming and mopping floors, cleaning kitchen counters and sinks, and sanitizing all bathrooms."
      }
    ],
    testimonial: {
      text: "The standard cleaning service for our Ewa Beach home is exceptional. Coming home to a clean house every week is such a relief!",
      author: "Michael R., Ewa Beach Resident"
    }
  },
  {
    id: "hawaii-kai",
    name: "Hawaii Kai",
    description: "Hawaii Kai residents rely on our standard cleaning service to maintain their beautiful homes. Our professional cleaners ensure consistent quality and attention to detail.",
    faq: [
      {
        question: "Do you clean inside cabinets during standard cleaning in Hawaii Kai?",
        answer: "Our standard cleaning focuses on regularly used areas. Deep cabinet cleaning is available as an add-on service or during deep cleaning appointments."
      },
      {
        question: "How do you ensure consistency in Hawaii Kai standard cleaning?",
        answer: "We use detailed checklists and quality control measures to ensure every Hawaii Kai standard cleaning meets our high standards."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provides excellent standard cleaning for our Hawaii Kai home. Professional, thorough, and always on time!",
      author: "Jennifer L., Hawaii Kai Resident"
    }
  },
  {
    id: "honolulu",
    name: "Honolulu",
    description: "Honolulu residents depend on our standard cleaning service to keep their homes consistently beautiful. Professional maid services that fit your busy city lifestyle.",
    faq: [
      {
        question: "What makes Honolulu standard cleaning different?",
        answer: "Honolulu standard cleaning addresses the unique challenges of city living, including dust from traffic, salt air residue, and maintaining high-traffic areas."
      },
      {
        question: "Do you offer same-day standard cleaning in Honolulu?",
        answer: "We can often accommodate same-day cleaning for existing customers, subject to availability and scheduling."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has transformed our Honolulu home with their reliable standard cleaning service. Professional and trustworthy!",
      author: "Lisa W., Honolulu Resident"
    }
  },
  {
    id: "kailua",
    name: "Kailua",
    description: "Kailua families trust our standard cleaning service to maintain their homes week after week. Consistent, professional cleaning that gives you more time to enjoy paradise.",
    faq: [
      {
        question: "Do you work with families in Kailua for standard cleaning?",
        answer: "Yes, we're family-friendly and use safe, eco-friendly products that are safe for children and pets during standard cleaning."
      },
      {
        question: "Can you customize standard cleaning for Kailua homes?",
        answer: "Absolutely! We can focus on specific areas or adjust our standard cleaning checklist based on your Kailua home's unique needs."
      }
    ],
    testimonial: {
      text: "The standard cleaning service for our Kailua home is wonderful. Professional, reliable, and our kids love coming home to a clean house!",
      author: "Amanda T., Kailua Resident"
    }
  },
  {
    id: "kapolei",
    name: "Kapolei",
    description: "Kapolei residents enjoy our comprehensive standard cleaning service that maintains their homes consistently. Professional maid services tailored to your family's needs.",
    faq: [
      {
        question: "How do you handle pets during Kapolei standard cleaning?",
        answer: "We're pet-friendly and can work around your pets during standard cleaning. We use pet-safe products and are experienced with various pet situations."
      },
      {
        question: "What if I need to reschedule my Kapolei standard cleaning?",
        answer: "We're flexible with rescheduling and require 24-hour notice. We understand life happens and work with you to find alternative times."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provides excellent standard cleaning for our Kapolei home. Consistent quality and professional service every time!",
      author: "David K., Kapolei Resident"
    }
  },
  {
    id: "makakilo",
    name: "Makakilo",
    description: "Makakilo families depend on our standard cleaning service to keep their homes consistently beautiful. Reliable, professional maid services that fit your schedule.",
    faq: [
      {
        question: "Do you service both houses and condos for standard cleaning in Makakilo?",
        answer: "Yes, we provide comprehensive standard cleaning services for all types of properties including houses, condos, and townhomes."
      },
      {
        question: "How do you ensure quality in Makakilo standard cleaning?",
        answer: "Every Makakilo standard cleaning is supervised with a comprehensive quality assurance process to guarantee consistent results."
      }
    ],
    testimonial: {
      text: "The standard cleaning service for our Makakilo home is exceptional. Professional, thorough, and always reliable!",
      author: "Robert H., Makakilo Resident"
    }
  },
  {
    id: "mililani",
    name: "Mililani",
    description: "Mililani residents trust our standard cleaning service to maintain their homes week after week. Professional cleaners who understand the importance of a consistently clean home.",
    faq: [
      {
        question: "Do you work around Mililani school schedules?",
        answer: "Yes, we can schedule standard cleaning around school hours and family schedules for maximum convenience in Mililani."
      },
      {
        question: "What's your cancellation policy for Mililani standard cleaning?",
        answer: "We require 24-hour notice for cancellations, but we're flexible for emergencies and always work to reschedule rather than cancel."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Mililani home beautiful for months. Their standard cleaning service is professional and reliable!",
      author: "Maria S., Mililani Resident"
    }
  },
  {
    id: "pearl-city",
    name: "Pearl City",
    description: "Pearl City families enjoy our comprehensive standard cleaning service that maintains their homes consistently. Professional maid services tailored to your family's lifestyle.",
    faq: [
      {
        question: "Do you offer competitive rates for Pearl City standard cleaning?",
        answer: "Yes, we provide affordable, competitive rates for Pearl City residents while maintaining high service quality and consistency."
      },
      {
        question: "How reliable is your standard cleaning service in Pearl City?",
        answer: "We're committed to reliability and have a strong track record of consistent, high-quality standard cleaning in Pearl City."
      }
    ],
    testimonial: {
      text: "The standard cleaning service for our Pearl City home is thorough and affordable. Great value and excellent results every week!",
      author: "Carlos M., Pearl City Resident"
    }
  },
  {
    id: "waialae",
    name: "Waialae",
    description: "Waialae residents depend on our standard cleaning service to maintain their beautiful homes. Professional maid services that provide consistent, high-quality cleaning.",
    faq: [
      {
        question: "Do you handle luxury properties for standard cleaning in Waialae?",
        answer: "Yes, we specialize in standard cleaning for luxury homes and are experienced with high-end finishes and materials."
      },
      {
        question: "Can you accommodate Waialae HOA requirements for standard cleaning?",
        answer: "Absolutely! We're familiar with Waialae HOA guidelines and ensure full compliance for standard cleaning services."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provides exceptional standard cleaning for our Waialae home. Perfect service for our luxury property!",
      author: "James L., Waialae Resident"
    }
  },
  {
    id: "waikiki",
    name: "Waikiki",
    description: "Waikiki residents trust our standard cleaning service to keep their homes consistently beautiful. Professional maid services that understand the unique needs of Waikiki living.",
    faq: [
      {
        question: "Do you service condos for standard cleaning in Waikiki?",
        answer: "Yes, we provide comprehensive standard cleaning services for both condos and apartments throughout Waikiki."
      },
      {
        question: "How do you handle Waikiki's high humidity during standard cleaning?",
        answer: "We use specialized techniques and products to address Waikiki's humidity, ensuring your home stays fresh and clean between visits."
      }
    ],
    testimonial: {
      text: "The standard cleaning service for our Waikiki condo is exceptional. Professional, thorough, and perfect for our busy lifestyle!",
      author: "Nancy P., Waikiki Resident"
    }
  },
  {
    id: "waimanalo",
    name: "Waimanalo",
    description: "Waimanalo families rely on our standard cleaning service to maintain their homes week after week. Consistent, professional cleaning that gives you more time to enjoy the beautiful Waimanalo area.",
    faq: [
      {
        question: "Do you work with families in Waimanalo for standard cleaning?",
        answer: "Yes, we're family-friendly and use safe, eco-friendly products that are safe for children and pets during standard cleaning."
      },
      {
        question: "Can you schedule around Waimanalo work hours for standard cleaning?",
        answer: "Absolutely! We offer flexible scheduling including early morning, evening, and weekend appointments to fit your schedule."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provides excellent standard cleaning for our Waimanalo home. Professional service and always reliable!",
      author: "Patricia D., Waimanalo Resident"
    }
  },
  {
    id: "waipahu",
    name: "Waipahu",
    description: "Waipahu residents enjoy our comprehensive standard cleaning service that maintains their homes consistently. Professional maid services that understand the importance of a clean, comfortable home.",
    faq: [
      {
        question: "Do you work with diverse families in Waipahu for standard cleaning?",
        answer: "Yes, we're experienced with diverse family needs and can customize our standard cleaning service to accommodate various cultural preferences and requirements."
      },
      {
        question: "How do you ensure consistency in Waipahu standard cleaning?",
        answer: "Every Waipahu standard cleaning follows our detailed checklist and quality control measures to ensure consistent results every visit."
      }
    ],
    testimonial: {
      text: "The standard cleaning service for our Waipahu home is thorough and professional. Excellent service and our family loves the consistent results!",
      author: "Susan B., Waipahu Resident"
    }
  }
];

const StandardCleaningOahuPage = () => {
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
        <title>Standard Cleaning Service Oahu | Red Rock Cleans</title>
        <meta name="description" content="Keep your home consistently beautiful with our reliable standard cleaning service on Oahu. Red Rock Cleans offers flexible maid services in Honolulu and beyond. Get your free quote!" />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <OahuNavigation loginUrl="https://customer-portal.maidily.com/red-rock-cleans-oahu/sign-in" bookingUrl="/book-now-oahu" />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative py-24 md:py-32 overflow-hidden">
            <div className="absolute inset-0">
              <img 
                src="/src/assets/service-products.jpg" 
                alt="Professional standard cleaning service in an Oahu home with beautiful Hawaiian landscape views"
                className="w-full h-full object-cover scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                  Reliable Standard Cleaning Service on Oahu
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                  Experience the joy of coming home to a consistently clean space every week. Our recurring standard cleaning service gives Oahu residents more time to enjoy paradise while we keep your home beautifully maintained.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="h-14 text-lg px-8" asChild>
                    <Link to="/book-now-oahu">
                      <Calendar className="w-5 h-5 mr-2" />
                      Schedule Standard Cleaning
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="h-14 text-lg px-8" asChild>
                    <Link to="/oahu-calculator">
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
                      Living Areas & Bedrooms
                    </h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Dust all surfaces, furniture, and decorative items
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Vacuum carpets and rugs thoroughly
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Mop hard floors with appropriate cleaners
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Clean mirrors and glass surfaces
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Empty trash and replace liners
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <CheckCircle className="w-6 h-6 text-primary mr-3" />
                      Kitchen & Bathrooms
                    </h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Clean kitchen counters and sinks
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Sanitize all bathroom fixtures and surfaces
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Clean and disinfect toilet bowls
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Wipe down appliances and cabinet fronts
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Clean baseboards and light switches
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
                      <Users className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Professional & Vetted Cleaners</h3>
                    <p className="text-muted-foreground">
                      Our cleaning professionals are background-checked, insured, and trained to deliver consistent, high-quality results every visit.
                    </p>
                  </div>
                  <div className="text-center p-6 bg-background rounded-lg shadow-sm">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <RefreshCw className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Flexible Scheduling</h3>
                    <p className="text-muted-foreground">
                      Choose from weekly, bi-weekly, or monthly cleaning schedules that fit your lifestyle and budget perfectly.
                    </p>
                  </div>
                  <div className="text-center p-6 bg-background rounded-lg shadow-sm">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Peace of Mind</h3>
                    <p className="text-muted-foreground">
                      Enjoy the peace of mind that comes with a perpetually tidy home, giving you more time to focus on what matters most.
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
                  Areas We Serve on Oahu
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
                            <Link to="/book-now-oahu">
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
                  Other Cleaning Services for Your Property on Oahu
                </h2>
                <p className="text-xl text-muted-foreground mb-12">
                  Beyond standard cleaning, we offer specialized services to meet all your Oahu property needs.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Link to="/oahu/deep-cleaning-services/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Deep Cleaning Services
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Comprehensive cleaning for special occasions or seasonal deep cleans.
                      </p>
                    </div>
                  </Link>
                  <Link to="/oahu/move-out-cleaning-services/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Move Out Cleaning Services
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Thorough end-of-tenancy cleaning to secure your security deposit.
                      </p>
                    </div>
                  </Link>
                  <Link to="/oahu/airbnb-cleaning-services/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Airbnb Cleaning Services
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Professional turnover cleaning for vacation rental properties.
                      </p>
                    </div>
                  </Link>
                  <Link to="/oahu/post-construction-cleaning-services/" className="group">
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
                    <h3 className="text-lg font-semibold mb-3">Do I need to be home for my recurring cleaning service?</h3>
                    <p className="text-muted-foreground">
                      No, you don't need to be home! We can work around your schedule and will secure your home when we leave. Many of our customers provide us with keys or access codes for convenience.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3">What is the price for weekly house cleaning in Honolulu?</h3>
                    <p className="text-muted-foreground">
                      Standard cleaning prices vary based on home size, frequency, and specific needs. Contact us for a free, personalized quote tailored to your Honolulu home.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3">Do you use eco-friendly cleaning supplies?</h3>
                    <p className="text-muted-foreground">
                      Yes, we use eco-friendly, pet-safe cleaning supplies that are effective yet gentle on your family and the environment. We can also use your preferred products if you have specific requirements.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3">How do I get started with standard cleaning service?</h3>
                    <p className="text-muted-foreground">
                      Simply contact us for a free consultation and quote. We'll discuss your needs, create a customized cleaning plan, and schedule your first service at your convenience.
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
                  Join hundreds of satisfied Oahu residents who trust Red Rock Cleans for reliable, professional standard cleaning services that keep their homes beautiful week after week.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" className="h-14 text-lg px-8" asChild>
                    <Link to="/book-now-oahu">
                      <Calendar className="w-5 h-5 mr-2" />
                      Schedule Your Standard Cleaning Today
                    </Link>
                  </Button>
                  <Button size="lg" variant="cta" className="h-14 text-lg px-8" asChild>
                    <Link to="/oahu-calculator">
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

export default StandardCleaningOahuPage;

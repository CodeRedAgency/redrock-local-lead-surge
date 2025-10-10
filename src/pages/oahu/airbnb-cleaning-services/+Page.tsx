import { OahuNavigation } from "@/components/OahuNavigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Clock, Shield, Star, Users, Calendar, Home, Sparkles, DollarSign, Key, RefreshCw, Heart, Clock4, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";

const neighborhoods = [
  {
    id: "aiea",
    name: "Aiea",
    description: "Aiea Airbnb hosts trust our reliable turnover cleaning service to maintain their 5-star ratings. We provide consistent, professional cleaning that ensures guest satisfaction every time.",
    faq: [
      {
        question: "How quickly can you complete turnover cleaning in Aiea?",
        answer: "We can complete most Aiea turnover cleanings in 2-4 hours, ensuring your property is ready for the next guests on schedule."
      },
      {
        question: "Do you coordinate with Aiea Airbnb hosts for guest arrivals?",
        answer: "Yes, we work closely with Aiea hosts to coordinate cleaning schedules with guest check-ins and check-outs for seamless transitions."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our Aiea Airbnb for over a year. Their reliability and attention to detail help us maintain our 5-star rating!",
      author: "Sarah M., Aiea Airbnb Host"
    }
  },
  {
    id: "ewa-beach",
    name: "Ewa Beach",
    description: "Ewa Beach vacation rental owners rely on our professional Airbnb cleaning service to ensure their properties are guest-ready. Perfect for maintaining high ratings in this growing vacation rental area.",
    faq: [
      {
        question: "Do you handle same-day turnovers for Ewa Beach properties?",
        answer: "Yes, we can handle same-day turnovers for Ewa Beach properties when needed, ensuring your guests arrive to a pristine space."
      },
      {
        question: "Can you work with Ewa Beach property managers?",
        answer: "Absolutely! We work directly with Ewa Beach property managers and can coordinate with your management company for seamless service."
      }
    ],
    testimonial: {
      text: "The Airbnb cleaning service for our Ewa Beach rental is exceptional. Professional, reliable, and our guests always comment on how clean everything is!",
      author: "Michael R., Ewa Beach Airbnb Host"
    }
  },
  {
    id: "hawaii-kai",
    name: "Hawaii Kai",
    description: "Hawaii Kai vacation rental hosts depend on our comprehensive Airbnb cleaning service to maintain their luxury properties. We understand the high standards expected in this beautiful waterfront area.",
    faq: [
      {
        question: "Do you service luxury properties for Airbnb cleaning in Hawaii Kai?",
        answer: "Yes, we specialize in luxury vacation rental cleaning and are experienced with high-end finishes and premium amenities in Hawaii Kai properties."
      },
      {
        question: "How do you ensure quality in Hawaii Kai Airbnb cleaning?",
        answer: "Every Hawaii Kai Airbnb cleaning follows our detailed checklist and includes a quality inspection to ensure guest-ready standards."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provides excellent Airbnb cleaning for our Hawaii Kai rental. Professional, thorough, and our luxury guests are always impressed!",
      author: "Jennifer L., Hawaii Kai Airbnb Host"
    }
  },
  {
    id: "honolulu",
    name: "Honolulu",
    description: "Honolulu Airbnb hosts trust our reliable turnover cleaning service to maintain their competitive edge in the busy vacation rental market. We understand the importance of quick, thorough cleanings.",
    faq: [
      {
        question: "What makes Honolulu Airbnb cleaning different?",
        answer: "Honolulu Airbnb cleaning addresses the unique challenges of city vacation rentals, including high guest turnover and the need for quick, efficient service."
      },
      {
        question: "Do you offer same-day Airbnb cleaning in Honolulu?",
        answer: "Yes, we can often accommodate same-day turnovers for Honolulu properties, subject to availability and the scope of work required."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has transformed our Honolulu Airbnb business with their reliable cleaning service. Our guests consistently praise the cleanliness!",
      author: "Lisa W., Honolulu Airbnb Host"
    }
  },
  {
    id: "kailua",
    name: "Kailua",
    description: "Kailua vacation rental owners enjoy our comprehensive Airbnb cleaning service that maintains their properties to guest-ready standards. Perfect for the competitive Kailua rental market.",
    faq: [
      {
        question: "Do you work with families who rent their Kailua homes on Airbnb?",
        answer: "Yes, we're experienced with family-owned vacation rentals and can work around your family's schedule while maintaining professional cleaning standards."
      },
      {
        question: "Can you customize Airbnb cleaning for Kailua properties?",
        answer: "Absolutely! We can adapt our cleaning checklist based on your Kailua property's unique features and guest amenities."
      }
    ],
    testimonial: {
      text: "The Airbnb cleaning service for our Kailua rental is wonderful. Professional, reliable, and our guests love the attention to detail!",
      author: "Amanda T., Kailua Airbnb Host"
    }
  },
  {
    id: "kapolei",
    name: "Kapolei",
    description: "Kapolei vacation rental hosts trust our professional Airbnb cleaning service to maintain their properties. We provide reliable turnover cleaning that keeps guests happy and ratings high.",
    faq: [
      {
        question: "How do you handle pets in Kapolei Airbnb properties?",
        answer: "We're experienced with pet-friendly vacation rentals and use specialized techniques to remove pet hair and odors while maintaining a welcoming environment."
      },
      {
        question: "What if I need to reschedule my Kapolei Airbnb cleaning?",
        answer: "We're flexible with rescheduling and work closely with Kapolei hosts to accommodate last-minute changes while maintaining guest satisfaction."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provides excellent Airbnb cleaning for our Kapolei rental. Consistent quality and our guests always arrive to a spotless property!",
      author: "David K., Kapolei Airbnb Host"
    }
  },
  {
    id: "makakilo",
    name: "Makakilo",
    description: "Makakilo vacation rental owners depend on our reliable Airbnb cleaning service to maintain their properties. We provide consistent, professional cleaning that ensures guest satisfaction.",
    faq: [
      {
        question: "Do you service both houses and condos for Airbnb cleaning in Makakilo?",
        answer: "Yes, we provide comprehensive Airbnb cleaning services for all types of vacation rental properties including houses, condos, and townhomes."
      },
      {
        question: "How do you ensure quality in Makakilo Airbnb cleaning?",
        answer: "Every Makakilo Airbnb cleaning follows our detailed checklist and includes a comprehensive quality assurance process to guarantee guest-ready results."
      }
    ],
    testimonial: {
      text: "The Airbnb cleaning service for our Makakilo rental is exceptional. Professional, thorough, and our guests consistently give us 5-star reviews!",
      author: "Robert H., Makakilo Airbnb Host"
    }
  },
  {
    id: "mililani",
    name: "Mililani",
    description: "Mililani vacation rental hosts rely on our professional Airbnb cleaning service to maintain their properties. We provide reliable turnover cleaning that keeps guests happy and bookings coming.",
    faq: [
      {
        question: "Do you work around Mililani school schedules for Airbnb cleaning?",
        answer: "Yes, we can schedule Airbnb cleaning around school schedules and family commitments while maintaining professional service standards."
      },
      {
        question: "What's your cancellation policy for Mililani Airbnb cleaning?",
        answer: "We require 24-hour notice for cancellations, but we're flexible for emergencies and always work to find alternative solutions."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been amazing for our Mililani Airbnb. Their reliable service helps us maintain our Superhost status!",
      author: "Maria S., Mililani Airbnb Host"
    }
  },
  {
    id: "pearl-city",
    name: "Pearl City",
    description: "Pearl City vacation rental owners enjoy our comprehensive Airbnb cleaning service that maintains their properties to guest-ready standards. Reliable service for consistent guest satisfaction.",
    faq: [
      {
        question: "Do you offer competitive rates for Pearl City Airbnb cleaning?",
        answer: "Yes, we provide affordable, competitive rates for Pearl City vacation rental cleaning while maintaining the highest service quality."
      },
      {
        question: "How reliable is your Airbnb cleaning service in Pearl City?",
        answer: "We're committed to reliability and have a strong track record of consistent, high-quality Airbnb cleaning services in Pearl City."
      }
    ],
    testimonial: {
      text: "The Airbnb cleaning service for our Pearl City rental is thorough and affordable. Great value and our guests always comment on the cleanliness!",
      author: "Carlos M., Pearl City Airbnb Host"
    }
  },
  {
    id: "waialae",
    name: "Waialae",
    description: "Waialae vacation rental hosts depend on our professional Airbnb cleaning service to maintain their luxury properties. We understand the high standards expected in this prestigious area.",
    faq: [
      {
        question: "Do you handle luxury properties for Airbnb cleaning in Waialae?",
        answer: "Yes, we specialize in luxury vacation rental cleaning and are experienced with high-end finishes, premium amenities, and luxury guest expectations."
      },
      {
        question: "Can you accommodate Waialae HOA requirements for Airbnb cleaning?",
        answer: "Absolutely! We're familiar with Waialae HOA guidelines and ensure full compliance for vacation rental cleaning services."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provides exceptional Airbnb cleaning for our Waialae rental. Perfect service for our luxury property and discerning guests!",
      author: "James L., Waialae Airbnb Host"
    }
  },
  {
    id: "waikiki",
    name: "Waikiki",
    description: "Waikiki Airbnb hosts trust our professional turnover cleaning service to maintain their competitive edge in the busy vacation rental market. We understand the importance of quick, thorough cleanings in this tourist hotspot.",
    faq: [
      {
        question: "Do you service condos for Airbnb cleaning in Waikiki?",
        answer: "Yes, we provide comprehensive Airbnb cleaning services for both condos and apartments throughout Waikiki's busy vacation rental market."
      },
      {
        question: "How do you handle Waikiki's high guest turnover?",
        answer: "We specialize in quick, efficient turnovers and can coordinate with Waikiki hosts to ensure properties are ready for same-day guest arrivals."
      }
    ],
    testimonial: {
      text: "The Airbnb cleaning service for our Waikiki condo is exceptional. Professional, fast, and perfect for our high-turnover rental business!",
      author: "Nancy P., Waikiki Airbnb Host"
    }
  },
  {
    id: "waimanalo",
    name: "Waimanalo",
    description: "Waimanalo vacation rental owners rely on our professional Airbnb cleaning service to maintain their beachside properties. We provide reliable turnover cleaning that showcases the natural beauty of this area.",
    faq: [
      {
        question: "Do you work with families who rent their Waimanalo homes on Airbnb?",
        answer: "Yes, we're experienced with family-owned vacation rentals and can work around your family's schedule while maintaining professional cleaning standards."
      },
      {
        question: "Can you schedule around Waimanalo work hours for Airbnb cleaning?",
        answer: "Absolutely! We offer flexible scheduling including early morning, evening, and weekend appointments to fit your vacation rental schedule."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provides excellent Airbnb cleaning for our Waimanalo rental. Professional service and our beach-loving guests love the clean environment!",
      author: "Patricia D., Waimanalo Airbnb Host"
    }
  },
  {
    id: "waipahu",
    name: "Waipahu",
    description: "Waipahu vacation rental hosts enjoy our comprehensive Airbnb cleaning service that maintains their properties to guest-ready standards. Reliable service for consistent guest satisfaction in this diverse community.",
    faq: [
      {
        question: "Do you work with diverse families in Waipahu for Airbnb cleaning?",
        answer: "Yes, we're experienced with diverse family needs and can customize our Airbnb cleaning service to accommodate various cultural preferences and requirements."
      },
      {
        question: "How do you ensure consistency in Waipahu Airbnb cleaning?",
        answer: "Every Waipahu Airbnb cleaning follows our detailed checklist and quality control measures to ensure consistent, guest-ready results every time."
      }
    ],
    testimonial: {
      text: "The Airbnb cleaning service for our Waipahu rental is thorough and professional. Excellent service and our guests consistently give us 5-star reviews!",
      author: "Susan B., Waipahu Airbnb Host"
    }
  }
];

const AirbnbCleaningOahuPage = () => {
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
        <title>Airbnb Cleaning Service Oahu | Red Rock Cleans</title>
        <meta name="description" content="Get 5-star reviews with our reliable Airbnb cleaning service on Oahu. Red Rock Cleans offers automated turnover cleaning for vacation rentals in Honolulu, Waikiki, and beyond." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <OahuNavigation loginUrl="https://customer-portal.maidily.com/red-rock-cleans-oahu/sign-in" bookingUrl="/book-now-oahu" />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative py-24 md:py-32 overflow-hidden">
            <div className="absolute inset-0">
              <img 
                src="/src/assets/service-products.jpg" 
                alt="Professional Airbnb cleaning service in an Oahu vacation rental with beautiful Hawaiian landscape views"
                className="w-full h-full object-cover scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                  5-Star Airbnb Cleaning Service on Oahu
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                  Secure 5-star reviews with pristine turnovers that exceed guest expectations. Our reliable Airbnb cleaning service helps Oahu hosts maintain their competitive edge in the busy vacation rental market, ensuring every guest arrives to a spotless, welcoming space.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="h-14 text-lg px-8" asChild>
                    <Link to="/book-now-oahu">
                      <Calendar className="w-5 h-5 mr-2" />
                      Schedule Airbnb Cleaning
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

          {/* Our Turnover Process for Flawless Guest Arrivals */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  Our Turnover Process for Flawless Guest Arrivals
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <CheckCircle className="w-6 h-6 text-primary mr-3" />
                      Complete Sanitization & Cleaning
                    </h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Sanitize all surfaces, handles, and high-touch areas
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Deep clean bathrooms and kitchen areas
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Vacuum and mop all floors thoroughly
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Clean windows and mirrors to perfection
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Dust all furniture and decorative items
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <CheckCircle className="w-6 h-6 text-primary mr-3" />
                      Guest Preparation & Staging
                    </h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Launder all linens, towels, and bedding
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Restock guest essentials and amenities
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Stage property for guest arrival
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Empty trash and replace liners
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Final walkthrough and quality check
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Maximize Your Bookings and Guest Satisfaction */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  Maximize Your Bookings and Guest Satisfaction
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center p-6 bg-background rounded-lg shadow-sm">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Clock4 className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Reliability & Quick Turnaround</h3>
                    <p className="text-muted-foreground">
                      Count on us for consistent, on-time service that ensures your property is always guest-ready, even with tight turnaround schedules.
                    </p>
                  </div>
                  <div className="text-center p-6 bg-background rounded-lg shadow-sm">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Star className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">5-Star Review Quality</h3>
                    <p className="text-muted-foreground">
                      Our attention to detail and thorough cleaning process helps you maintain high ratings and attract more bookings through positive guest reviews.
                    </p>
                  </div>
                  <div className="text-center p-6 bg-background rounded-lg shadow-sm">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Peace of Mind</h3>
                    <p className="text-muted-foreground">
                      Focus on growing your Airbnb business while we handle the cleaning. Professional management of your cleaning schedule gives you complete peace of mind.
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
                            Professional Airbnb cleaning services
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
                              Schedule Your {neighborhood.name} Airbnb Cleaning
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
                  Beyond Airbnb cleaning, we offer specialized services to meet all your Oahu property needs.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Link to="/oahu/standard-cleaning-services/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Standard Cleaning Services
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Regular maintenance cleaning for consistent home cleanliness.
                      </p>
                    </div>
                  </Link>
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
                    <h3 className="text-lg font-semibold mb-3">Can you sync with my Airbnb booking calendar?</h3>
                    <p className="text-muted-foreground">
                      Yes, we can coordinate with your Airbnb calendar to ensure cleaning is scheduled around guest check-ins and check-outs. We work with various booking platforms to provide seamless service.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3">How is the cleaning fee for a vacation rental in Waikiki calculated?</h3>
                    <p className="text-muted-foreground">
                      Cleaning fees vary based on property size, number of bedrooms/bathrooms, and specific requirements. Contact us for a personalized quote tailored to your Waikiki vacation rental.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3">Do you restock guest amenities?</h3>
                    <p className="text-muted-foreground">
                      Yes, we can restock basic guest amenities like toilet paper, paper towels, soap, and other essentials. We can coordinate with your preferred suppliers or use our standard supplies.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3">What happens if guests check out late?</h3>
                    <p className="text-muted-foreground">
                      We're flexible with timing and can adjust our cleaning schedule based on actual check-out times. We maintain communication with hosts to ensure smooth transitions between guests.
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
                  Ready to Maximize Your Airbnb Success?
                </h2>
                <p className="text-xl mb-8 opacity-90">
                  Join hundreds of successful Oahu Airbnb hosts who trust Red Rock Cleans for reliable, professional turnover cleaning that helps maintain their 5-star ratings and maximize bookings.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" className="h-14 text-lg px-8" asChild>
                    <Link to="/book-now-oahu">
                      <Calendar className="w-5 h-5 mr-2" />
                      Schedule Your Airbnb Cleaning Today
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="h-14 text-lg px-8 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                    <Link to="/oahu-calculator">
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
                  alt="A beautiful, guest-ready Airbnb living room in an Oahu property, cleaned by Red Rock Cleans"
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

export default AirbnbCleaningOahuPage;

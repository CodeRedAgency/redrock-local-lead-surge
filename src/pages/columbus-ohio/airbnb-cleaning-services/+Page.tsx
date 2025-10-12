import { ColumbusNavigation } from "@/components/ColumbusNavigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Clock, Shield, Star, Users, Calendar, Home, Sparkles, DollarSign, Key, RefreshCw, Heart, Clock4, Zap, HardHat, Hammer, Award, Wrench, Target, Layers, KeyRound, FileCheck, ArrowRight, Building2, HardHat as HardHatIcon, CalendarDays, Coffee, Wifi, Utensils } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";

const neighborhoods = [
  {
    id: "dublin",
    name: "Dublin",
    description: "Dublin Airbnb hosts trust our reliable turnover cleaning service to maintain their luxury vacation rental properties. We understand the high standards expected by guests in this prestigious area and provide comprehensive cleaning that ensures 5-star reviews and repeat bookings.",
    faq: [
      {
        question: "Can you sync with my Airbnb booking calendar in Dublin?",
        answer: "Yes, we can integrate with most major booking platforms and property management systems to automatically schedule cleanings based on your Dublin property's guest turnover schedule."
      },
      {
        question: "How quickly can you complete a turnover clean in Dublin?",
        answer: "Our Dublin turnover cleaning typically takes 2-4 hours depending on property size. We can often accommodate same-day turnovers with advance notice."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been incredible for our Dublin Airbnb. Their reliable service ensures our guests always arrive to a spotless property, and we consistently receive 5-star reviews!",
      author: "Sarah M., Dublin Airbnb Host"
    }
  },
  {
    id: "upper-arlington",
    name: "Upper Arlington",
    description: "Upper Arlington Airbnb hosts rely on our professional turnover cleaning service to maintain their luxury vacation rental properties. We provide comprehensive cleaning that meets the high standards expected by guests in this exclusive neighborhood.",
    faq: [
      {
        question: "Do you handle luxury Airbnb properties for turnover cleaning in Upper Arlington?",
        answer: "Yes, we specialize in luxury property turnover cleaning and are experienced with high-end finishes, premium amenities, and the detailed attention required for Upper Arlington vacation rentals."
      },
      {
        question: "Can you coordinate with Upper Arlington Airbnb host schedules?",
        answer: "Absolutely! We work closely with Upper Arlington hosts to schedule turnover cleaning around guest check-ins and check-outs, ensuring seamless transitions."
      }
    ],
    testimonial: {
      text: "The turnover cleaning service for our Upper Arlington Airbnb has been exceptional. Professional, reliable, and our guests always comment on how immaculate the property is!",
      author: "Michael R., Upper Arlington Airbnb Host"
    }
  },
  {
    id: "powell",
    name: "Powell",
    description: "Powell Airbnb hosts depend on our reliable turnover cleaning service to maintain their vacation rental properties. We provide comprehensive cleaning that fits perfectly with busy hosting schedules, ensuring guest satisfaction and positive reviews.",
    faq: [
      {
        question: "What's included in turnover cleaning for Powell Airbnb properties?",
        answer: "Our Powell turnover cleaning includes sanitizing all surfaces, laundering linens, restocking guest essentials, staging the property, and ensuring every detail is perfect for incoming guests."
      },
      {
        question: "How often do you perform turnover cleaning in Powell?",
        answer: "We provide turnover cleaning after every guest departure in Powell, with flexible scheduling to accommodate various check-in and check-out times."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provides excellent turnover cleaning for our Powell Airbnb. Consistent, reliable, and our guests always arrive to a beautifully prepared property!",
      author: "Jennifer L., Powell Airbnb Host"
    }
  },
  {
    id: "lewis-center",
    name: "Lewis Center",
    description: "Lewis Center Airbnb hosts trust our comprehensive turnover cleaning service to maintain their vacation rental properties. We understand the importance of reliable service for growing hosting businesses and provide thorough cleaning for this thriving community.",
    faq: [
      {
        question: "Is turnover cleaning suitable for family-friendly Airbnb properties in Lewis Center?",
        answer: "Yes, turnover cleaning is perfect for family-friendly properties as it ensures a safe, clean environment for families with children. We use family-safe products and pay special attention to areas families use most."
      },
      {
        question: "Do you work around tight guest schedules in Lewis Center?",
        answer: "Yes, we understand Airbnb scheduling demands and can work around tight guest schedules, including early check-ins and late check-outs, to ensure smooth transitions."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been amazing for our Lewis Center Airbnb. Their systematic approach ensures our family-friendly property is always guest-ready!",
      author: "Lisa W., Lewis Center Airbnb Host"
    }
  },
  {
    id: "worthington",
    name: "Worthington",
    description: "Worthington Airbnb hosts enjoy our comprehensive turnover cleaning service that maintains their vacation rental properties. Perfect for the upscale Worthington market where guests expect luxury accommodations and impeccable cleanliness.",
    faq: [
      {
        question: "Do you work with historic Airbnb properties for turnover cleaning in Worthington?",
        answer: "Yes, we're experienced with historic property turnover cleaning and understand the special care required for older homes, including preserving original features while ensuring guest comfort."
      },
      {
        question: "Can turnover cleaning help with Airbnb Superhost status in Worthington?",
        answer: "Absolutely! Our thorough turnover cleaning helps maintain the high cleanliness standards required for Superhost status and contributes to the 5-star reviews needed for this achievement."
      }
    ],
    testimonial: {
      text: "The turnover cleaning service for our Worthington Airbnb has been fantastic. They really understand luxury hosting and our property consistently earns 5-star reviews!",
      author: "Amanda T., Worthington Airbnb Host"
    }
  },
  {
    id: "new-albany",
    name: "New Albany",
    description: "New Albany Airbnb hosts trust our thorough turnover cleaning service to maintain their vacation rental properties. We provide comprehensive cleaning that meets the demands of this growing area where reliable hosting services are essential for success.",
    faq: [
      {
        question: "How do you handle large-scale Airbnb turnover cleaning in New Albany?",
        answer: "We're experienced with large-scale vacation rental properties and can deploy multiple teams to handle extensive turnover cleaning efficiently while maintaining quality standards and meeting tight deadlines."
      },
      {
        question: "What if I need to reschedule my New Albany Airbnb turnover cleaning?",
        answer: "We're flexible with rescheduling and work closely with New Albany hosts to accommodate guest schedule changes while maintaining our commitment to reliable service."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provided excellent turnover cleaning for our New Albany Airbnb. They really understood our hosting needs and our guests always arrive to a perfect property!",
      author: "David K., New Albany Airbnb Host"
    }
  },
  {
    id: "bexley",
    name: "Bexley",
    description: "Bexley Airbnb hosts depend on our comprehensive turnover cleaning service to maintain their vacation rental properties. We provide thorough cleaning that respects the unique character of Bexley homes while ensuring guest satisfaction and positive reviews.",
    faq: [
      {
        question: "Do you service both historic and modern Airbnb properties for turnover cleaning in Bexley?",
        answer: "Yes, we provide comprehensive turnover cleaning services for all types of vacation rental properties including historic homes, modern residences, and mixed architectural styles with appropriate care for each."
      },
      {
        question: "How do you ensure thoroughness in Bexley Airbnb turnover cleaning?",
        answer: "Every Bexley turnover cleaning follows our detailed checklist and includes comprehensive quality assurance to guarantee thorough, satisfactory results that meet guest expectations."
      }
    ],
    testimonial: {
      text: "The turnover cleaning service for our Bexley Airbnb was exceptional. They paid such attention to detail and our historic property always looks beautiful for guests!",
      author: "Robert H., Bexley Airbnb Host"
    }
  },
  {
    id: "german-village",
    name: "German Village",
    description: "German Village Airbnb hosts rely on our thorough turnover cleaning service to maintain their vacation rental properties. We provide comprehensive cleaning that helps maintain the charm of this historic community while ensuring guest satisfaction and positive reviews.",
    faq: [
      {
        question: "Do you work around German Village Airbnb hosting schedules?",
        answer: "Yes, we can schedule turnover cleaning around your hosting schedule and guest turnover times while maintaining our thorough service standards and attention to detail."
      },
      {
        question: "What's your approach to historic home Airbnb turnover cleaning in German Village?",
        answer: "We use gentle yet effective methods appropriate for historic homes, paying special attention to preserving original features while ensuring the property is guest-ready and comfortable."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been amazing for our German Village Airbnb. They maintained the historic character while ensuring our property is always guest-ready!",
      author: "Maria S., German Village Airbnb Host"
    }
  },
  {
    id: "short-north",
    name: "Short North",
    description: "Short North Airbnb hosts trust our comprehensive turnover cleaning service to maintain their vacation rental properties. We understand the unique challenges of urban vacation rentals and provide thorough cleaning for this vibrant arts district.",
    faq: [
      {
        question: "Do you service both apartments and condos for Airbnb turnover cleaning in Short North?",
        answer: "Yes, we specialize in turnover cleaning for both apartments and condos in Short North, adapting our service to your specific property type and urban hosting needs."
      },
      {
        question: "How do you handle quick turnovers for Airbnb cleaning in Short North?",
        answer: "Every Short North turnover cleaning is optimized for efficiency while maintaining thoroughness, using streamlined processes and experienced teams to meet tight guest schedules."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provides excellent turnover cleaning for our Short North condo Airbnb. Professional, thorough, and our guests always arrive to a spotless urban retreat!",
      author: "Jennifer L., Short North Airbnb Host"
    }
  },
  {
    id: "victorian-village",
    name: "Victorian Village",
    description: "Victorian Village Airbnb hosts enjoy our comprehensive turnover cleaning service that maintains their vacation rental properties. Perfect for the charming Victorian Village market where historic properties require special care during guest transitions.",
    faq: [
      {
        question: "Do you work with Victorian-era Airbnb properties for turnover cleaning in Victorian Village?",
        answer: "Yes, we're experienced with Victorian-era property turnover cleaning and understand the special care required for ornate details, original woodwork, and period features."
      },
      {
        question: "Can you customize turnover cleaning for Victorian Village Airbnb properties?",
        answer: "Absolutely! We can adapt our turnover cleaning checklist based on your Victorian Village property's unique architectural features and specific hosting requirements."
      }
    ],
    testimonial: {
      text: "The turnover cleaning service for our Victorian Village Airbnb was wonderful. They really understood historic homes and preserved all the beautiful details while ensuring guest comfort!",
      author: "Amanda T., Victorian Village Airbnb Host"
    }
  },
  {
    id: "hillard",
    name: "Hilliard",
    description: "Hilliard Airbnb hosts trust our thorough turnover cleaning service to maintain their vacation rental properties. We provide comprehensive cleaning that meets the demands of this growing area where reliable hosting services are essential for success.",
    faq: [
      {
        question: "How do you handle large-scale Airbnb turnover cleaning in Hilliard?",
        answer: "We're experienced with large-scale vacation rental properties and can deploy multiple teams to handle extensive turnover cleaning efficiently while maintaining quality standards and meeting tight deadlines."
      },
      {
        question: "Do you work with both residential and commercial Airbnb properties in Hilliard?",
        answer: "Yes, we provide comprehensive turnover cleaning services for all types of vacation rental properties including residential homes, commercial spaces, and mixed-use developments."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provided excellent turnover cleaning for our Hilliard Airbnb. They really understood our hosting needs and our guests always arrive to a perfectly prepared property!",
      author: "David K., Hilliard Airbnb Host"
    }
  },
  {
    id: "westerville",
    name: "Westerville",
    description: "Westerville Airbnb hosts depend on our comprehensive turnover cleaning service to maintain their vacation rental properties. We provide thorough cleaning that ensures complete satisfaction and meets all guest expectations in this thriving community.",
    faq: [
      {
        question: "Do you service both residential and commercial Airbnb properties for turnover cleaning in Westerville?",
        answer: "Yes, we provide comprehensive turnover cleaning services for all types of vacation rental properties including residential homes, commercial spaces, and mixed-use developments with appropriate care for each."
      },
      {
        question: "How do you ensure thoroughness in Westerville Airbnb turnover cleaning?",
        answer: "Every Westerville turnover cleaning follows our detailed checklist and includes comprehensive quality assurance to guarantee thorough, satisfactory results that exceed guest expectations."
      }
    ],
    testimonial: {
      text: "The turnover cleaning service for our Westerville Airbnb was exceptional. Thorough, professional, and our guests consistently give us 5-star reviews for cleanliness!",
      author: "Robert H., Westerville Airbnb Host"
    }
  }
];

const AirbnbCleaningColumbusOhioPage = () => {
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
        <title>Airbnb Cleaning Service Columbus Ohio | Red Rock Cleans</title>
        <meta name="description" content="Get 5-star reviews with our reliable Airbnb cleaning service in Columbus, OH. Red Rock Cleans offers automated turnover cleaning for vacation rentals in Dublin, the Short North, and beyond." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <ColumbusNavigation loginUrl="https://customer-portal.maidily.com/red-rock-cleans-columbus-ohio/sign-in" bookingUrl="/book-now-columbus-ohio" />
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative py-24 md:py-32 overflow-hidden">
            <div className="absolute inset-0">
              <img 
                src="/src/assets/hero-residential.jpg" 
                alt="Professional Airbnb turnover cleaning service in a Columbus Ohio vacation rental property"
                className="w-full h-full object-cover scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                  5-Star Airbnb Cleaning Service in Columbus, Ohio
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                  Secure 5-star reviews and maximize your bookings with our reliable turnover cleaning service. Perfect for Columbus Airbnb hosts who need pristine turnovers to impress visitors exploring areas like the Short North or German Village.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="h-14 text-lg px-8" asChild>
                    <Link to="/book-now-columbus-ohio">
                      <Calendar className="w-5 h-5 mr-2" />
                      Schedule Your Turnover Cleaning
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
                      <Sparkles className="w-6 h-6 text-primary mr-3" />
                      Sanitizing & Deep Cleaning
                    </h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Sanitizing all high-touch surfaces and bathrooms
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Deep cleaning kitchen appliances and countertops
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Vacuuming and mopping all floors thoroughly
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Dusting all furniture and decorative items
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Cleaning mirrors, windows, and glass surfaces
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <Utensils className="w-6 h-6 text-primary mr-3" />
                      Laundry & Guest Essentials
                    </h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Washing and replacing all linens and towels
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Restocking guest amenities and toiletries
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Staging the property for guest arrival
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Emptying trash and replacing liners
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
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
                      <Clock className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Reliability You Can Count On</h3>
                    <p className="text-muted-foreground">
                      Never worry about last-minute cancellations. Our Columbus team is reliable and punctual, ensuring your Airbnb is always guest-ready on time, every time.
                    </p>
                  </div>
                  <div className="text-center p-6 bg-background rounded-lg shadow-sm">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Star className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Quick Turnaround Times</h3>
                    <p className="text-muted-foreground">
                      Our efficient processes ensure fast turnover cleaning, allowing you to maximize your booking potential with same-day or next-day guest arrivals.
                    </p>
                  </div>
                  <div className="text-center p-6 bg-background rounded-lg shadow-sm">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Peace of Mind</h3>
                    <p className="text-muted-foreground">
                      Enjoy the peace of mind that comes from professionally managed cleaning schedules. Focus on hosting while we handle the details that ensure 5-star reviews.
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
                            Professional Airbnb turnover cleaning services
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
                              Schedule Your {neighborhood.name} Airbnb Turnover Cleaning
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
                  Beyond Airbnb turnover cleaning, we offer specialized services to meet all your Columbus property needs.
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
                    <h3 className="text-lg font-semibold mb-3">Can you sync with my Airbnb booking calendar?</h3>
                    <p className="text-muted-foreground">
                      Yes, we can integrate with most major booking platforms including Airbnb, VRBO, Booking.com, and property management systems to automatically schedule cleanings based on your guest turnover schedule.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3">How is the cleaning fee for a vacation rental in the Short North calculated?</h3>
                    <p className="text-muted-foreground">
                      Cleaning fees for vacation rentals in the Short North vary by property size, number of bedrooms/bathrooms, and specific requirements. Contact us for a detailed, customized quote based on your property's needs.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3">Do you restock guest amenities like local coffee?</h3>
                    <p className="text-muted-foreground">
                      Yes, we can restock guest amenities including local coffee, toiletries, and other essentials. We work with you to maintain your preferred brand preferences and can coordinate with local suppliers for authentic Columbus experiences.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3">What's included in your Airbnb turnover cleaning service?</h3>
                    <p className="text-muted-foreground">
                      Our turnover cleaning includes sanitizing all surfaces, laundering linens, restocking guest essentials, staging the property, deep cleaning kitchen and bathrooms, and a final walkthrough to ensure everything is guest-ready.
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
                  Ready to Get 5-Star Reviews?
                </h2>
                <p className="text-xl mb-8 opacity-90">
                  Join hundreds of satisfied Columbus Airbnb hosts who trust Red Rock Cleans for reliable turnover cleaning that ensures guest satisfaction and maximizes their booking potential.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" className="h-14 text-lg px-8" asChild>
                    <Link to="/book-now-columbus-ohio">
                      <Calendar className="w-5 h-5 mr-2" />
                      Schedule Your Airbnb Turnover Cleaning Today
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="h-14 text-lg px-8 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                    <Link to="/columbus-calculator">
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
                  alt="A beautiful, guest-ready Airbnb in a historic Columbus neighborhood, cleaned by Red Rock Cleans"
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

export default AirbnbCleaningColumbusOhioPage;

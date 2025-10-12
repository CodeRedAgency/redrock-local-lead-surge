import { MauiNavigation } from "@/components/MauiNavigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Clock, Shield, Star, Users, Calendar, Home, Sparkles, DollarSign, Key, RefreshCw, Heart, Clock4, Zap, HardHat, Hammer, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";

const neighborhoods = [
  {
    id: "wailea",
    name: "Wailea",
    description: "Wailea Airbnb hosts trust our professional turnover cleaning service to maintain their luxury vacation rentals and secure 5-star reviews. We understand the high standards expected in this prestigious resort area where guest satisfaction drives bookings.",
    faq: [
      {
        question: "How quickly can you turn over a Wailea vacation rental?",
        answer: "We typically complete Wailea vacation rental turnovers in 2-4 hours depending on property size. We work around your check-out/check-in schedule to ensure seamless guest transitions."
      },
      {
        question: "Do you work with Wailea vacation rental management companies?",
        answer: "Yes, we work directly with vacation rental management companies, individual hosts, and property managers in Wailea to provide reliable turnover cleaning services."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been instrumental in maintaining our 5-star ratings in Wailea. Their reliable service ensures our guests always arrive to a pristine property!",
      author: "Sarah M., Wailea Airbnb Host"
    }
  },
  {
    id: "makena",
    name: "Makena",
    description: "Makena vacation rental owners rely on our comprehensive Airbnb cleaning service to prepare their properties for new guests. We ensure every surface meets the high standards expected in this beautiful coastal area where guest reviews are crucial.",
    faq: [
      {
        question: "Do you handle both luxury and standard vacation rentals in Makena?",
        answer: "Yes, we provide Airbnb cleaning services for both luxury resorts and standard vacation rentals in Makena, adapting our service level to match your property's positioning."
      },
      {
        question: "Can you coordinate with Makena property management schedules?",
        answer: "Absolutely! We work closely with Makena property management teams to schedule cleaning services around guest check-out and check-in times."
      }
    ],
    testimonial: {
      text: "The Airbnb cleaning service for our Makena rental has been exceptional. Professional, thorough, and our guests consistently leave 5-star reviews!",
      author: "Michael R., Makena Property Owner"
    }
  },
  {
    id: "kihei",
    name: "Kihei",
    description: "Kihei Airbnb hosts depend on our professional turnover cleaning service to maintain their vacation rentals and secure positive guest reviews. We understand the competitive vacation rental market in this growing community.",
    faq: [
      {
        question: "Do you service both short-term and long-term vacation rentals in Kihei?",
        answer: "Yes, we specialize in Airbnb cleaning for both short-term vacation rentals and extended stay properties in Kihei, adapting our service to your rental model."
      },
      {
        question: "How do you ensure guest satisfaction in Kihei vacation rentals?",
        answer: "Every Kihei vacation rental cleaning follows our detailed checklist and includes guest amenity restocking to ensure your guests have everything they need for a perfect stay."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provides excellent Airbnb cleaning for our Kihei rental. Professional, thorough, and our guests always comment on how clean and welcoming the property is!",
      author: "Jennifer L., Kihei Airbnb Host"
    }
  },
  {
    id: "kapalua",
    name: "Kapalua",
    description: "Kapalua vacation rental owners trust our reliable Airbnb cleaning service to prepare their luxury properties for discerning guests. We understand the importance of meeting high-end property standards in this exclusive resort community.",
    faq: [
      {
        question: "What makes Kapalua vacation rental cleaning different?",
        answer: "Kapalua vacation rental cleaning addresses the unique requirements of luxury resort properties, including high-end finishes, premium amenities, and exclusive guest experience standards."
      },
      {
        question: "Do you offer same-day vacation rental cleaning in Kapalua?",
        answer: "Yes, we can often accommodate urgent vacation rental cleaning requests for Kapalua properties, subject to availability and guest schedule requirements."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been our go-to vacation rental cleaning service for Kapalua properties. Reliable, professional, and our luxury guests are always impressed!",
      author: "Lisa W., Kapalua Property Manager"
    }
  },
  {
    id: "kaanapali",
    name: "Ka'anapali",
    description: "Ka'anapali Airbnb hosts enjoy our comprehensive turnover cleaning service that prepares their properties for new guests. Perfect for the busy Ka'anapali vacation rental market with high occupancy rates and quick turnovers.",
    faq: [
      {
        question: "Do you work with vacation rental companies in Ka'anapali?",
        answer: "Yes, we're experienced with vacation rental companies and can work around tight turnover schedules while maintaining professional cleaning standards for quick guest transitions."
      },
      {
        question: "Can you customize Airbnb cleaning for Ka'anapali properties?",
        answer: "Absolutely! We can adapt our cleaning checklist based on your Ka'anapali property's unique features and specific guest experience requirements."
      }
    ],
    testimonial: {
      text: "The Airbnb cleaning service for our Ka'anapali vacation rental was wonderful. Professional, reliable, and our guests always leave glowing reviews about the property condition!",
      author: "Amanda T., Ka'anapali Property Owner"
    }
  },
  {
    id: "lahaina",
    name: "Lahaina",
    description: "Lahaina vacation rental owners trust our professional Airbnb cleaning service to prepare their properties for new guests. We provide reliable service that meets the demands of this historic town's busy vacation rental market.",
    faq: [
      {
        question: "How do you handle large-scale vacation rental cleaning in Lahaina?",
        answer: "We're experienced with large-scale properties and can deploy multiple teams to handle extensive vacation rental cleaning efficiently and on schedule for busy periods."
      },
      {
        question: "What if I need to reschedule my Lahaina vacation rental cleaning?",
        answer: "We're flexible with rescheduling and work closely with Lahaina hosts to accommodate guest schedule changes while maintaining service quality."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provides excellent Airbnb cleaning for our Lahaina properties. Consistent quality and our guests consistently rate us 5 stars for cleanliness!",
      author: "David K., Lahaina Property Manager"
    }
  },
  {
    id: "spreckelsville",
    name: "Spreckelsville",
    description: "Spreckelsville vacation rental owners depend on our reliable Airbnb cleaning service to prepare their properties for new guests. We provide consistent, professional cleaning that ensures guest satisfaction and positive reviews.",
    faq: [
      {
        question: "Do you service both residential and vacation rental cleaning in Spreckelsville?",
        answer: "Yes, we provide comprehensive Airbnb cleaning services for all types of vacation rental properties including residential homes, luxury rentals, and beachfront properties."
      },
      {
        question: "How do you ensure quality in Spreckelsville vacation rental cleaning?",
        answer: "Every Spreckelsville vacation rental cleaning follows our detailed checklist and includes a comprehensive quality assurance process to guarantee guest satisfaction."
      }
    ],
    testimonial: {
      text: "The Airbnb cleaning service for our Spreckelsville rental was exceptional. Professional, thorough, and our guests were amazed by the pristine condition upon arrival!",
      author: "Robert H., Spreckelsville Property Owner"
    }
  },
  {
    id: "paia",
    name: "Pa'ia",
    description: "Pa'ia vacation rental owners rely on our professional Airbnb cleaning service to prepare their properties for new guests. We provide reliable service that helps hosts maintain high guest satisfaction ratings and positive reviews.",
    faq: [
      {
        question: "Do you work around Pa'ia vacation rental schedules?",
        answer: "Yes, we can schedule Airbnb cleaning around guest check-out and check-in times while maintaining professional service standards for seamless turnovers."
      },
      {
        question: "What's your cancellation policy for Pa'ia vacation rental cleaning?",
        answer: "We require 24-hour notice for cancellations, but we're flexible for guest schedule changes and always work to find alternative solutions that meet your timeline."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been amazing for our Pa'ia vacation rental. Their reliable service helps us maintain 5-star ratings and our guests love the spotless condition!",
      author: "Maria S., Pa'ia Airbnb Host"
    }
  },
  {
    id: "kuau",
    name: "Kuau",
    description: "Kuau vacation rental owners enjoy our comprehensive Airbnb cleaning service that prepares their properties for new guests. Reliable service for consistent guest satisfaction and positive reviews in this scenic area.",
    faq: [
      {
        question: "Do you offer competitive rates for Kuau vacation rental cleaning?",
        answer: "Yes, we provide affordable, competitive rates for Kuau vacation rental cleaning while maintaining the highest service quality and guest satisfaction standards."
      },
      {
        question: "How reliable is your vacation rental cleaning service in Kuau?",
        answer: "We're committed to reliability and have a strong track record of consistent, high-quality Airbnb cleaning services in Kuau with excellent guest feedback."
      }
    ],
    testimonial: {
      text: "The Airbnb cleaning service for our Kuau rental was thorough and affordable. Great value and our guests consistently praise the cleanliness and attention to detail!",
      author: "Carlos M., Kuau Property Owner"
    }
  },
  {
    id: "haiku",
    name: "Ha'iku",
    description: "Ha'iku vacation rental owners depend on our professional Airbnb cleaning service to prepare their luxury properties for discerning guests. We understand the high standards expected in this prestigious mountain area.",
    faq: [
      {
        question: "Do you handle luxury vacation rentals for Airbnb cleaning in Ha'iku?",
        answer: "Yes, we specialize in luxury vacation rental cleaning and are experienced with high-end finishes, premium amenities, and luxury guest experience standards."
      },
      {
        question: "Can you accommodate Ha'iku HOA requirements for vacation rental cleaning?",
        answer: "Absolutely! We're familiar with Ha'iku HOA guidelines and ensure full compliance for vacation rental cleaning services while maintaining luxury standards."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provides exceptional Airbnb cleaning for our Ha'iku luxury rental. Perfect service for our high-end property and discerning guests always leave 5-star reviews!",
      author: "James L., Ha'iku Property Owner"
    }
  }
];

const AirbnbCleaningMauiPage = () => {
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
        <title>Airbnb Cleaning Service Maui | Red Rock Cleans</title>
        <meta name="description" content="Get 5-star reviews with our reliable Airbnb cleaning service on Maui. Red Rock Cleans offers automated turnover cleaning for vacation rentals in Wailea, Lahaina, and beyond." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <MauiNavigation loginUrl="https://customer-portal.maidily.com/red-rock-cleans-maui/sign-in" bookingUrl="/book-now-maui" />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative py-24 md:py-32 overflow-hidden">
            <div className="absolute inset-0">
              <img 
                src="/src/assets/hero-vacation.jpg" 
                alt="Professional Airbnb cleaning service in a Maui vacation rental with beautiful Hawaiian landscape views"
                className="w-full h-full object-cover scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                  5-Star Airbnb Cleaning Service on Maui
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                  Secure 5-star reviews and maximize your bookings with our professional Airbnb cleaning service. We help Maui vacation rental hosts maintain pristine turnovers that impress guests and build your reputation in the competitive vacation rental market.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="h-14 text-lg px-8" asChild>
                    <Link to="/book-now-maui">
                      <Calendar className="w-5 h-5 mr-2" />
                      Schedule Airbnb Cleaning
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="h-14 text-lg px-8" asChild>
                    <Link to="/maui-calculator">
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
                      Sanitizing & Deep Clean
                    </h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Sanitize all high-touch surfaces and bathrooms
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Clean and disinfect all appliances
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Vacuum and clean all flooring thoroughly
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Clean all windows and sliding doors
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Dust all surfaces and decorative items
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <CheckCircle className="w-6 h-6 text-primary mr-3" />
                      Laundry & Guest Essentials
                    </h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Complete laundry service for all linens
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Restock guest amenities and toiletries
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Stage for luxury guest experience
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Arrange furniture and decorative items
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Final inspection and quality check
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
                      Count on us for consistent, reliable service that works around your guest schedules. Our efficient process ensures quick turnovers without compromising quality.
                    </p>
                  </div>
                  <div className="text-center p-6 bg-background rounded-lg shadow-sm">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Star className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">5-Star Guest Experience</h3>
                    <p className="text-muted-foreground">
                      Our meticulous cleaning and staging process creates the perfect first impression that leads to 5-star reviews and repeat bookings.
                    </p>
                  </div>
                  <div className="text-center p-6 bg-background rounded-lg shadow-sm">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Peace of Mind</h3>
                    <p className="text-muted-foreground">
                      Enjoy the peace of mind that comes from knowing your vacation rental is professionally managed and always guest-ready, allowing you to focus on growing your business.
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
                  Areas We Serve on Maui
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
                            <Link to="/book-now-maui">
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
                  Other Cleaning Services for Your Property on Maui
                </h2>
                <p className="text-xl text-muted-foreground mb-12">
                  Beyond Airbnb cleaning, we offer specialized services to meet all your Maui property needs.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Link to="/maui/standard-cleaning-services/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Standard Cleaning Services
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Regular maintenance cleaning for consistent home cleanliness.
                      </p>
                    </div>
                  </Link>
                  <Link to="/maui/deep-cleaning-services/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Deep Cleaning Services
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Comprehensive cleaning for special occasions or seasonal deep cleans.
                      </p>
                    </div>
                  </Link>
                  <Link to="/maui/move-out-cleaning-services/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Move Out Cleaning Services
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Thorough end-of-tenancy cleaning to secure your security deposit.
                      </p>
                    </div>
                  </Link>
                  <Link to="/maui/post-construction-cleaning-services/" className="group">
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
                      Yes, we can coordinate with your Airbnb booking calendar to ensure cleaning is completed between guest check-out and check-in times. We work with various calendar systems and property management platforms.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3">How is the cleaning fee for a vacation rental in Wailea calculated?</h3>
                    <p className="text-muted-foreground">
                      Vacation rental cleaning fees in Wailea are calculated based on property size, number of bedrooms/bathrooms, specific cleaning requirements, and frequency of service. Contact us for a detailed quote tailored to your property.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3">Do you restock guest amenities like coffee and toiletries?</h3>
                    <p className="text-muted-foreground">
                      Yes, our vacation rental cleaning service includes restocking guest amenities such as coffee, toiletries, paper products, and other essentials to ensure your guests have everything they need for a comfortable stay.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3">How far in advance should I schedule vacation rental cleaning?</h3>
                    <p className="text-muted-foreground">
                      We recommend scheduling vacation rental cleaning at least 3-5 days in advance to ensure availability. For peak seasons or properties with high turnover, we recommend 1-2 weeks advance notice.
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
                  Ready to Secure 5-Star Reviews?
                </h2>
                <p className="text-xl mb-8 opacity-90">
                  Join hundreds of successful Maui vacation rental hosts who trust Red Rock Cleans for professional Airbnb cleaning that maximizes bookings and guest satisfaction.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" className="h-14 text-lg px-8" asChild>
                    <Link to="/book-now-maui">
                      <Calendar className="w-5 h-5 mr-2" />
                      Schedule Your Airbnb Cleaning Today
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="h-14 text-lg px-8 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                    <Link to="/maui-calculator">
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
                  alt="A beautiful, guest-ready Airbnb with an ocean view on Maui, cleaned by Red Rock Cleans"
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

export default AirbnbCleaningMauiPage;

import React, { useEffect, useState } from 'react';
import { LasVegasNavigation } from "@/components/LasVegasNavigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Home } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Helmet } from "react-helmet";

const neighborhoods = [
  {
    id: "anthem",
    name: "Anthem",
    description: "For your Airbnb in the beautiful Anthem master-planned community, we provide exceptional cleaning services that ensure every guest leaves a 5-star review. Our team knows the high standards expected in this prestigious Henderson neighborhood.",
    faq: [
      {
        question: "How quickly can you clean my Anthem Airbnb?",
        answer: "We can typically clean your Anthem property within 4-6 hours, perfect for same-day turnovers."
      },
      {
        question: "Do you provide linens for Anthem properties?",
        answer: "Yes, we offer linen service including fresh towels, sheets, and amenities for your Anthem Airbnb."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our Anthem Airbnb for over a year. Their attention to detail and reliability has helped us maintain a 4.9-star rating.",
      author: "Sarah M., Anthem Host"
    }
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "Enterprise Airbnb hosts trust Red Rock Cleans for consistent, professional cleaning services. We understand the unique needs of vacation rentals in this growing Las Vegas area.",
    faq: [
      {
        question: "What cleaning services do you offer in Enterprise?",
        answer: "We provide comprehensive Airbnb cleaning including deep cleaning, maintenance cleaning, and emergency turnovers."
      },
      {
        question: "Do you work weekends in Enterprise?",
        answer: "Yes, we offer weekend cleaning services to accommodate your Enterprise Airbnb's busy turnover schedule."
      }
    ],
    testimonial: {
      text: "Living in Enterprise, I needed a reliable cleaning service for my Airbnb. Red Rock Cleans has never let me down, even during busy holiday weekends.",
      author: "Mike T., Enterprise Host"
    }
  },
  {
    id: "green-valley-north",
    name: "Green Valley North",
    description: "Green Valley North Airbnb hosts rely on Red Rock Cleans for spotless properties that impress guests. Our local team understands the expectations of visitors to this desirable Henderson area.",
    faq: [
      {
        question: "How do you handle key access for Green Valley North properties?",
        answer: "We offer flexible key management including lockbox access, key pickup, and smart lock integration."
      },
      {
        question: "What's included in your Green Valley North cleaning service?",
        answer: "Full cleaning including kitchens, bathrooms, bedrooms, living areas, plus inventory checks and restocking."
      }
    ],
    testimonial: {
      text: "Our Green Valley North Airbnb guests consistently mention how clean the property is. Red Rock Cleans makes us look great!",
      author: "Jennifer L., Green Valley North Host"
    }
  },
  {
    id: "henderson",
    name: "Henderson",
    description: "Henderson Airbnb properties require professional cleaning that meets the high standards of this family-friendly community. Red Rock Cleans delivers consistent quality that keeps guests coming back.",
    faq: [
      {
        question: "Do you clean Airbnb properties in all Henderson areas?",
        answer: "Yes, we serve all Henderson neighborhoods including Anthem, Green Valley, and the Lake Las Vegas area."
      },
      {
        question: "Can you handle same-day turnovers in Henderson?",
        answer: "Absolutely! We specialize in quick, thorough turnovers to meet your Henderson Airbnb's tight schedule."
      }
    ],
    testimonial: {
      text: "As a Henderson host, I appreciate Red Rock Cleans' professionalism and attention to detail. They've helped maintain our 5-star rating.",
      author: "David R., Henderson Host"
    }
  },
  {
    id: "lake-las-vegas",
    name: "Lake Las Vegas",
    description: "Lake Las Vegas vacation rentals demand luxury-level cleaning services. Our experienced team provides the premium cleaning that matches the upscale expectations of this exclusive resort community.",
    faq: [
      {
        question: "Do you provide luxury cleaning services for Lake Las Vegas properties?",
        answer: "Yes, we offer premium cleaning services tailored to the high-end expectations of Lake Las Vegas guests."
      },
      {
        question: "How do you handle seasonal cleaning for Lake Las Vegas rentals?",
        answer: "We provide comprehensive seasonal deep cleaning and maintenance services for Lake Las Vegas properties."
      }
    ],
    testimonial: {
      text: "Our Lake Las Vegas rental requires exceptional cleaning standards. Red Rock Cleans consistently delivers luxury-level service that impresses our guests.",
      author: "Lisa K., Lake Las Vegas Host"
    }
  },
  {
    id: "las-vegas",
    name: "Las Vegas",
    description: "Las Vegas Strip and downtown Airbnb properties need reliable cleaning services that work around the city's 24/7 schedule. Red Rock Cleans adapts to your property's unique needs in the Entertainment Capital.",
    faq: [
      {
        question: "Do you clean Airbnb properties near the Las Vegas Strip?",
        answer: "Yes, we service Airbnb properties throughout Las Vegas including the Strip, downtown, and surrounding areas."
      },
      {
        question: "Can you handle late-night turnovers in Las Vegas?",
        answer: "We offer flexible scheduling including late-night and early morning cleaning to accommodate Las Vegas tourism schedules."
      }
    ],
    testimonial: {
      text: "Running an Airbnb near the Strip is challenging, but Red Rock Cleans makes it easy with their flexible scheduling and thorough cleaning.",
      author: "Carlos M., Las Vegas Host"
    }
  },
  {
    id: "macdonald-ranch",
    name: "MacDonald Ranch",
    description: "MacDonald Ranch Airbnb hosts choose Red Rock Cleans for our understanding of this Henderson neighborhood's family-friendly atmosphere and guest expectations.",
    faq: [
      {
        question: "Do you offer family-friendly cleaning services for MacDonald Ranch?",
        answer: "Yes, we provide safe, family-friendly cleaning services perfect for MacDonald Ranch vacation rentals."
      },
      {
        question: "How do you handle pet-friendly properties in MacDonald Ranch?",
        answer: "We offer specialized cleaning for pet-friendly rentals including pet hair removal and odor elimination."
      }
    ],
    testimonial: {
      text: "Our MacDonald Ranch Airbnb caters to families, and Red Rock Cleans ensures it's always spotless and welcoming for our guests.",
      author: "Amanda S., MacDonald Ranch Host"
    }
  },
  {
    id: "mountains-edge",
    name: "Mountain's Edge",
    description: "Mountain's Edge Airbnb properties benefit from Red Rock Cleans' reliable service in this master-planned community. We understand the needs of vacation rentals in this scenic Henderson area.",
    faq: [
      {
        question: "Do you service Airbnb properties in Mountain's Edge?",
        answer: "Yes, we provide comprehensive cleaning services for Mountain's Edge vacation rentals."
      },
      {
        question: "Can you handle outdoor cleaning for Mountain's Edge properties?",
        answer: "We offer outdoor cleaning services including patios, outdoor furniture, and pool areas when needed."
      }
    ],
    testimonial: {
      text: "Mountain's Edge is a beautiful community, and Red Rock Cleans helps keep our Airbnb property looking pristine for every guest.",
      author: "Robert H., Mountain's Edge Host"
    }
  },
  {
    id: "north-las-vegas",
    name: "North Las Vegas",
    description: "North Las Vegas Airbnb hosts trust Red Rock Cleans for affordable, professional cleaning services that don't compromise on quality. We serve this growing area with reliable, consistent service.",
    faq: [
      {
        question: "Do you offer competitive rates for North Las Vegas properties?",
        answer: "Yes, we provide competitive pricing for North Las Vegas Airbnb cleaning services without sacrificing quality."
      },
      {
        question: "How quickly can you clean my North Las Vegas Airbnb?",
        answer: "We typically complete North Las Vegas Airbnb cleanings within 4-6 hours for efficient turnovers."
      }
    ],
    testimonial: {
      text: "As a North Las Vegas host, I appreciate Red Rock Cleans' fair pricing and reliable service. They've been cleaning my property for two years.",
      author: "Maria G., North Las Vegas Host"
    }
  },
  {
    id: "paradise",
    name: "Paradise",
    description: "Paradise Airbnb properties near the Strip and airport need flexible cleaning services. Red Rock Cleans adapts to the unique demands of this central Las Vegas location.",
    faq: [
      {
        question: "Do you clean Airbnb properties in Paradise near the airport?",
        answer: "Yes, we service Paradise properties including those near McCarran Airport with flexible scheduling."
      },
      {
        question: "Can you handle high-turnover properties in Paradise?",
        answer: "Absolutely! We specialize in high-turnover cleaning for Paradise's busy vacation rental market."
      }
    ],
    testimonial: {
      text: "Our Paradise Airbnb near the airport has high turnover, but Red Rock Cleans handles it flawlessly every time.",
      author: "Tony B., Paradise Host"
    }
  },
  {
    id: "seven-hills",
    name: "Seven Hills",
    description: "Seven Hills Airbnb hosts appreciate Red Rock Cleans' attention to detail in this upscale Henderson community. We provide the premium cleaning service that matches this neighborhood's standards.",
    faq: [
      {
        question: "Do you provide premium cleaning for Seven Hills properties?",
        answer: "Yes, we offer premium cleaning services tailored to Seven Hills' upscale community standards."
      },
      {
        question: "How do you handle luxury amenities in Seven Hills rentals?",
        answer: "We provide specialized cleaning for luxury amenities including gourmet kitchens and spa-like bathrooms."
      }
    ],
    testimonial: {
      text: "Seven Hills residents expect quality, and Red Rock Cleans delivers premium cleaning that keeps our Airbnb guests happy.",
      author: "Patricia W., Seven Hills Host"
    }
  },
  {
    id: "silverado-ranch",
    name: "Silverado Ranch",
    description: "Silverado Ranch Airbnb properties benefit from Red Rock Cleans' reliable service in this family-oriented Henderson neighborhood. We understand the needs of vacation rentals in this community.",
    faq: [
      {
        question: "Do you clean Airbnb properties in Silverado Ranch?",
        answer: "Yes, we provide comprehensive cleaning services for Silverado Ranch vacation rentals."
      },
      {
        question: "Can you handle family-friendly properties in Silverado Ranch?",
        answer: "We specialize in family-friendly cleaning services perfect for Silverado Ranch's residential atmosphere."
      }
    ],
    testimonial: {
      text: "Our Silverado Ranch Airbnb is perfect for families, and Red Rock Cleans ensures it's always clean and welcoming.",
      author: "Kevin L., Silverado Ranch Host"
    }
  },
  {
    id: "spring-valley",
    name: "Spring Valley",
    description: "Spring Valley Airbnb hosts choose Red Rock Cleans for our consistent service in this established Las Vegas community. We provide reliable cleaning that keeps guests satisfied.",
    faq: [
      {
        question: "Do you service established neighborhoods like Spring Valley?",
        answer: "Yes, we have extensive experience cleaning Airbnb properties in established Las Vegas communities like Spring Valley."
      },
      {
        question: "How do you handle older properties in Spring Valley?",
        answer: "We provide specialized cleaning for older properties including attention to vintage fixtures and architectural details."
      }
    ],
    testimonial: {
      text: "Our Spring Valley Airbnb is in an older home, but Red Rock Cleans treats it with care and keeps it spotless.",
      author: "Nancy D., Spring Valley Host"
    }
  },
  {
    id: "summerlin-south",
    name: "Summerlin South",
    description: "Summerlin South Airbnb properties require premium cleaning services that match this upscale community's standards. Red Rock Cleans delivers the quality and reliability Summerlin South hosts expect.",
    faq: [
      {
        question: "Do you provide luxury cleaning for Summerlin South properties?",
        answer: "Yes, we offer luxury cleaning services that meet Summerlin South's high community standards."
      },
      {
        question: "Can you handle large properties in Summerlin South?",
        answer: "We have experience cleaning large vacation rental properties in Summerlin South efficiently and thoroughly."
      }
    ],
    testimonial: {
      text: "Summerlin South expects quality, and Red Rock Cleans consistently delivers luxury-level cleaning for our Airbnb.",
      author: "Steven F., Summerlin South Host"
    }
  },
  {
    id: "sunrise-manor",
    name: "Sunrise Manor",
    description: "Sunrise Manor Airbnb hosts appreciate Red Rock Cleans' reliable service in this diverse Las Vegas community. We provide consistent cleaning that keeps vacation rentals guest-ready.",
    faq: [
      {
        question: "Do you clean Airbnb properties in Sunrise Manor?",
        answer: "Yes, we provide reliable cleaning services for Sunrise Manor vacation rentals."
      },
      {
        question: "How do you handle diverse property types in Sunrise Manor?",
        answer: "We adapt our cleaning services to various property types found in Sunrise Manor's diverse community."
      }
    ],
    testimonial: {
      text: "Sunrise Manor has diverse properties, but Red Rock Cleans adapts to each one and keeps our Airbnb looking great.",
      author: "Rachel M., Sunrise Manor Host"
    }
  },
  {
    id: "whitney",
    name: "Whitney",
    description: "Whitney Airbnb hosts trust Red Rock Cleans for professional cleaning services in this established Henderson neighborhood. We provide reliable service that keeps vacation rentals competitive.",
    faq: [
      {
        question: "Do you service established neighborhoods like Whitney?",
        answer: "Yes, we have extensive experience cleaning Airbnb properties in established Henderson communities like Whitney."
      },
      {
        question: "Can you handle competitive pricing for Whitney properties?",
        answer: "We offer competitive rates for Whitney Airbnb cleaning services while maintaining high quality standards."
      }
    ],
    testimonial: {
      text: "Our Whitney Airbnb stays competitive thanks to Red Rock Cleans' consistent, professional cleaning service.",
      author: "Mark T., Whitney Host"
    }
  },
  {
    id: "winchester",
    name: "Winchester",
    description: "Winchester Airbnb properties benefit from Red Rock Cleans' reliable service in this central Las Vegas area. We provide consistent cleaning that keeps vacation rentals guest-ready.",
    faq: [
      {
        question: "Do you clean Airbnb properties in Winchester?",
        answer: "Yes, we provide comprehensive cleaning services for Winchester vacation rentals."
      },
      {
        question: "Can you handle central Las Vegas locations like Winchester?",
        answer: "We specialize in cleaning vacation rentals in central Las Vegas areas including Winchester."
      }
    ],
    testimonial: {
      text: "Winchester's central location means high guest turnover, but Red Rock Cleans handles it perfectly every time.",
      author: "Linda K., Winchester Host"
    }
  }
];

export default function AirbnbCleaningLasVegasPage() {
  const [openItem, setOpenItem] = useState<string>("");

  useEffect(() => {
    // Get the hash from the URL on component mount
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
        <title>Airbnb Cleaning Services Las Vegas | Red Rock Cleans</title>
        <meta name="description" content="5-star Airbnb cleaning services in Las Vegas. Red Rock Cleans offers reliable, automated turnover cleaning for vacation rentals to impress every guest. Get your free instant quote today!" />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <LasVegasNavigation loginUrl="https://customer-portal.maidily.com/red-rock-cleans-vegas/sign-in" bookingUrl="/book-now-las-vegas" />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative py-24 md:py-32 overflow-hidden">
            <div className="absolute inset-0">
              <img 
                src="/src/assets/hero-vacation.jpg" 
                alt="Professional Airbnb cleaning service in a Las Vegas vacation rental with Bellagio fountain views"
                className="w-full h-full object-cover scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                  Professional Airbnb Cleaning Services in Las Vegas
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                  Keep your Las Vegas vacation rental spotless and guest-ready with our professional Airbnb cleaning services. 
                  We help you maintain 5-star reviews and maximize your rental income with reliable, thorough cleaning every time.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="h-14 text-lg px-8" asChild>
                    <Link to="/book-now-las-vegas">
                      <Calendar className="w-5 h-5 mr-2" />
                      Schedule Airbnb Cleaning
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

          {/* Our Process Section */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12">Our Airbnb Cleaning Process for 5-Star Reviews</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="bg-card p-6 rounded-lg shadow-md">
                      <h3 className="text-2xl font-bold mb-4">1. Arrival & Assessment</h3>
                      <p className="text-muted-foreground">Our team arrives on time, assesses the property condition, and begins systematic cleaning following our proven checklist.</p>
                    </div>
                    <div className="bg-card p-6 rounded-lg shadow-md">
                      <h3 className="text-2xl font-bold mb-4">2. Deep Cleaning</h3>
                      <p className="text-muted-foreground">We thoroughly clean every surface, appliance, and amenity to ensure your Las Vegas Airbnb exceeds guest expectations.</p>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="bg-card p-6 rounded-lg shadow-md">
                      <h3 className="text-2xl font-bold mb-4">3. Quality Inspection</h3>
                      <p className="text-muted-foreground">Each property undergoes a detailed quality check to ensure nothing is missed before guest arrival.</p>
                    </div>
                    <div className="bg-card p-6 rounded-lg shadow-md">
                      <h3 className="text-2xl font-bold mb-4">4. Guest-Ready Setup</h3>
                      <p className="text-muted-foreground">We restock amenities, arrange furniture, and ensure your Las Vegas Airbnb is perfectly prepared for the next guest.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Us Section */}
          <section className="py-20 bg-muted/20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12">Why Hosts in Las Vegas Choose Red Rock Cleans</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">⭐</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">5-Star Reviews</h3>
                    <p className="text-muted-foreground">Our thorough cleaning process consistently earns 5-star reviews from your Las Vegas Airbnb guests.</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">⚡</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Fast Turnovers</h3>
                    <p className="text-muted-foreground">We complete most Las Vegas Airbnb cleanings within 4-6 hours for efficient same-day turnovers.</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🔒</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Reliable Service</h3>
                    <p className="text-muted-foreground">Count on us for consistent, dependable cleaning that keeps your Las Vegas vacation rental competitive.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Areas We Serve Section */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12">Areas We Serve in Las Vegas</h2>
                <Accordion type="single" collapsible value={openItem} onValueChange={setOpenItem} className="space-y-4">
                  {neighborhoods.map((neighborhood) => (
                    <AccordionItem key={neighborhood.id} value={neighborhood.id} id={neighborhood.id} className="bg-card px-6 rounded-lg">
                      <AccordionTrigger className="text-lg font-semibold">
                        {neighborhood.name}
                      </AccordionTrigger>
                      <AccordionContent className="space-y-4">
                        <p className="text-muted-foreground">
                          {neighborhood.description}
                        </p>
                        
                        <div className="space-y-3">
                          <h4 className="font-semibold">Frequently Asked Questions:</h4>
                          {neighborhood.faq.map((item, index) => (
                            <div key={index} className="border-l-4 border-primary pl-4">
                              <p className="font-medium">{item.question}</p>
                              <p className="text-muted-foreground">{item.answer}</p>
                            </div>
                          ))}
                        </div>
                        
                        <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                          "{neighborhood.testimonial.text}"
                          <footer className="mt-2 text-sm font-medium not-italic">
                            — {neighborhood.testimonial.author}
                          </footer>
                        </blockquote>
                        
                        <div className="flex flex-col sm:flex-row gap-4">
                          <Button asChild className="bg-primary hover:bg-primary/90">
                            <Link to="/book-now-las-vegas">
                              Book Your {neighborhood.name} Cleaning
                            </Link>
                          </Button>
                          <Button asChild variant="outline">
                            <Link to="/commercial-cleaning">
                              Other Cleaning Services for Your Property in Las Vegas
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

          {/* FAQ Section */}
          <section className="py-20 bg-muted/20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  <div className="bg-card p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-3">How much do Airbnb cleaning services cost in Las Vegas?</h3>
                    <p className="text-muted-foreground">Our Las Vegas Airbnb cleaning rates vary based on property size and cleaning requirements. Contact us for a free, instant quote tailored to your specific property.</p>
                  </div>
                  <div className="bg-card p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-3">Do you provide same-day cleaning for Las Vegas Airbnb properties?</h3>
                    <p className="text-muted-foreground">Yes, we offer same-day cleaning services for Las Vegas Airbnb properties. We typically complete cleanings within 4-6 hours to accommodate tight turnover schedules.</p>
                  </div>
                  <div className="bg-card p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-3">What's included in your Las Vegas Airbnb cleaning service?</h3>
                    <p className="text-muted-foreground">Our comprehensive service includes kitchen cleaning, bathroom sanitization, bedroom preparation, living area cleaning, inventory checks, and amenity restocking for your Las Vegas vacation rental.</p>
                  </div>
                  <div className="bg-card p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-3">Do you work with Airbnb management companies in Las Vegas?</h3>
                    <p className="text-muted-foreground">Absolutely! We partner with Las Vegas Airbnb management companies to provide reliable cleaning services for their portfolio of vacation rental properties.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="py-20 bg-primary/5">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold mb-6">Ready to Elevate Your Las Vegas Airbnb?</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join hundreds of Las Vegas hosts who trust Red Rock Cleans for professional Airbnb cleaning services. 
                Get your free quote today and start earning 5-star reviews.
              </p>
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                <Link to="/book-now-las-vegas">Get Your Free Las Vegas Airbnb Cleaning Quote</Link>
              </Button>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
}

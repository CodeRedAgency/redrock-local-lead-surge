import { OahuNavigation } from "@/components/OahuNavigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Heart, Cross, Calendar, CheckCircle, Clock, Shield, Star, Users, Sparkles, DollarSign, Key, RefreshCw, Phone, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';

const neighborhoods = [
  {
    id: "aiea",
    name: "Aiea",
    description: "Aiea churches trust Red Rock Cleans for respectful and professional sanctuary cleaning. We understand the importance of maintaining sacred spaces with the utmost care and discretion.",
    faq: [
      {
        question: "How do you handle cleaning during Aiea church services?",
        answer: "We work around your service schedule, offering flexible cleaning times including early morning, evening, and weekday appointments to minimize disruption."
      },
      {
        question: "Do you use church-safe cleaning products in Aiea?",
        answer: "Yes, we use gentle, non-toxic cleaning products that are safe for all surfaces and won't damage religious artifacts or furnishings."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our Aiea church with the utmost respect and professionalism. They understand the sacred nature of our space.",
      author: "Pastor Michael R., Aiea Community Church"
    }
  },
  {
    id: "ewa-beach",
    name: "Ewa Beach",
    description: "Ewa Beach places of worship rely on our comprehensive church cleaning services. We provide thorough, respectful cleaning that maintains the dignity and sanctity of your sacred spaces.",
    faq: [
      {
        question: "Can you clean around Ewa Beach church events and activities?",
        answer: "Absolutely! We coordinate with your church calendar to schedule cleaning around services, weddings, funerals, and special events."
      },
      {
        question: "Do you clean church kitchens and fellowship halls in Ewa Beach?",
        answer: "Yes, we provide comprehensive cleaning including kitchens, fellowship halls, classrooms, and all common areas."
      }
    ],
    testimonial: {
      text: "The church cleaning service for our Ewa Beach congregation is exceptional. Professional, respectful, and always thorough.",
      author: "Reverend Sarah L., Ewa Beach Methodist Church"
    }
  },
  {
    id: "hawaii-kai",
    name: "Hawaii Kai",
    description: "Hawaii Kai churches depend on our professional church cleaning services to maintain beautiful, healthy environments for worship and fellowship. We treat every space with reverence and care.",
    faq: [
      {
        question: "How do you ensure discretion during Hawaii Kai church cleaning?",
        answer: "Our team is trained to work discreetly and respectfully, maintaining the peaceful atmosphere of your Hawaii Kai church."
      },
      {
        question: "Do you provide regular church cleaning schedules in Hawaii Kai?",
        answer: "Yes, we offer weekly, bi-weekly, or monthly church cleaning schedules tailored to your Hawaii Kai congregation's needs."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provides outstanding church cleaning for our Hawaii Kai sanctuary. They respect our sacred space and deliver excellent results.",
      author: "Father David K., Hawaii Kai Catholic Church"
    }
  },
  {
    id: "honolulu",
    name: "Honolulu",
    description: "Honolulu churches trust Red Rock Cleans for comprehensive sanctuary and facility cleaning. We understand the unique needs of urban churches and provide professional, respectful service.",
    faq: [
      {
        question: "Do you handle large Honolulu churches with multiple buildings?",
        answer: "Yes, we have experience cleaning large church complexes including multiple buildings, parking areas, and extensive facilities."
      },
      {
        question: "Can you work around Honolulu church office hours?",
        answer: "We coordinate with your church office to schedule cleaning that works around staff hours and church activities."
      }
    ],
    testimonial: {
      text: "The church cleaning service for our Honolulu congregation is professional and respectful. They truly understand the importance of maintaining our sacred space.",
      author: "Pastor Lisa W., Downtown Honolulu Church"
    }
  },
  {
    id: "kailua",
    name: "Kailua",
    description: "Kailua churches enjoy our comprehensive church cleaning services that maintain beautiful, welcoming spaces for worship and community gatherings. We treat every area with the reverence it deserves.",
    faq: [
      {
        question: "Do you clean church nurseries and children's areas in Kailua?",
        answer: "Yes, we use child-safe cleaning products and pay special attention to nurseries, Sunday school rooms, and children's play areas."
      },
      {
        question: "Can you accommodate Kailua church volunteer schedules?",
        answer: "We work around your volunteer schedules and can coordinate with church volunteers to ensure cleaning doesn't interfere with church activities."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our Kailua church beautifully. Their respectful approach and attention to detail is exactly what we needed.",
      author: "Reverend Amanda T., Kailua United Church"
    }
  },
  {
    id: "kapolei",
    name: "Kapolei",
    description: "Kapolei churches rely on our professional church cleaning services to maintain clean, healthy environments for worship and fellowship. We understand the importance of sacred spaces and treat them accordingly.",
    faq: [
      {
        question: "Do you clean church restrooms and changing areas in Kapolei?",
        answer: "Yes, we provide thorough cleaning and sanitizing of all restrooms, changing areas, and facilities with appropriate disinfectants."
      },
      {
        question: "Can you work around Kapolei church maintenance schedules?",
        answer: "We coordinate with your church maintenance team to ensure cleaning doesn't interfere with repairs or maintenance work."
      }
    ],
    testimonial: {
      text: "The church cleaning service for our Kapolei congregation is thorough and professional. They respect our space and deliver consistent quality.",
      author: "Pastor Robert H., Kapolei Community Church"
    }
  },
  {
    id: "makakilo",
    name: "Makakilo",
    description: "Makakilo churches trust our comprehensive church cleaning services to maintain beautiful, welcoming environments for worship. We provide respectful, professional cleaning that honors your sacred space.",
    faq: [
      {
        question: "Do you service both traditional and contemporary churches in Makakilo?",
        answer: "Yes, we provide church cleaning services for all denominations and worship styles, adapting our approach to your specific needs."
      },
      {
        question: "How do you handle church cleaning during Makakilo community events?",
        answer: "We coordinate with your event calendar and can adjust cleaning schedules to accommodate community events and special services."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provides excellent church cleaning for our Makakilo congregation. Professional service with the respect our sacred space deserves.",
      author: "Reverend Maria S., Makakilo Baptist Church"
    }
  },
  {
    id: "mililani",
    name: "Mililani",
    description: "Mililani churches depend on our professional church cleaning services to maintain clean, healthy environments for worship and community activities. We treat every space with reverence and care.",
    faq: [
      {
        question: "Do you work around Mililani church school programs?",
        answer: "Yes, we coordinate with church school schedules and can clean during school breaks or after school hours to avoid disruption."
      },
      {
        question: "Can you provide emergency church cleaning in Mililani?",
        answer: "We offer emergency cleaning services for special events, funerals, or urgent cleaning needs in your Mililani church."
      }
    ],
    testimonial: {
      text: "The church cleaning service for our Mililani congregation is exceptional. They understand the sacred nature of our space and clean with respect.",
      author: "Pastor Carlos M., Mililani Presbyterian Church"
    }
  },
  {
    id: "pearl-city",
    name: "Pearl City",
    description: "Pearl City churches enjoy our comprehensive church cleaning services that maintain beautiful, welcoming spaces for worship and fellowship. We provide professional, respectful cleaning that honors your sacred environment.",
    faq: [
      {
        question: "Do you clean church parking areas and outdoor spaces in Pearl City?",
        answer: "Yes, we provide comprehensive cleaning including parking areas, walkways, and outdoor gathering spaces around your Pearl City church."
      },
      {
        question: "Can you accommodate Pearl City church seasonal cleaning needs?",
        answer: "We offer seasonal deep cleaning services and can adjust our regular schedule to accommodate seasonal church activities and events."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our Pearl City church with professionalism and respect. Their attention to detail is outstanding.",
      author: "Father James L., Pearl City Catholic Church"
    }
  },
  {
    id: "waialae",
    name: "Waialae",
    description: "Waialae churches trust our professional church cleaning services to maintain pristine, welcoming environments for worship. We understand the importance of sacred spaces and provide respectful, thorough cleaning.",
    faq: [
      {
        question: "Do you handle luxury church facilities in Waialae?",
        answer: "Yes, we specialize in cleaning high-end church facilities and are experienced with delicate materials, artwork, and religious artifacts."
      },
      {
        question: "Can you work with Waialae church security requirements?",
        answer: "We comply with all church security protocols and can coordinate with your security team for access and safety procedures."
      }
    ],
    testimonial: {
      text: "The church cleaning service for our Waialae congregation is professional and respectful. They treat our sacred space with the reverence it deserves.",
      author: "Reverend Nancy P., Waialae United Methodist Church"
    }
  },
  {
    id: "waikiki",
    name: "Waikiki",
    description: "Waikiki churches rely on our professional church cleaning services to maintain clean, welcoming spaces for worship in the heart of the city. We provide respectful, thorough cleaning that honors your sacred environment.",
    faq: [
      {
        question: "Do you clean church facilities in busy Waikiki locations?",
        answer: "Yes, we're experienced with urban church facilities and can work efficiently in busy Waikiki locations while maintaining discretion."
      },
      {
        question: "Can you handle Waikiki church tourist-related cleaning needs?",
        answer: "We understand the unique challenges of Waikiki churches and can provide enhanced cleaning for high-traffic tourist areas."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provides excellent church cleaning for our Waikiki congregation. Professional service in the heart of the city.",
      author: "Pastor Patricia D., Waikiki Community Church"
    }
  },
  {
    id: "waimanalo",
    name: "Waimanalo",
    description: "Waimanalo churches enjoy our comprehensive church cleaning services that maintain beautiful, healthy environments for worship and community gatherings. We treat every sacred space with reverence and care.",
    faq: [
      {
        question: "Do you work with Waimanalo church community programs?",
        answer: "Yes, we coordinate with your community programs and can schedule cleaning around food banks, community meals, and outreach activities."
      },
      {
        question: "Can you provide eco-friendly church cleaning in Waimanalo?",
        answer: "We offer eco-friendly cleaning options that are safe for your congregation and the beautiful Waimanalo environment."
      }
    ],
    testimonial: {
      text: "The church cleaning service for our Waimanalo congregation is thorough and respectful. They understand our community needs.",
      author: "Reverend Susan B., Waimanalo United Church"
    }
  },
  {
    id: "waipahu",
    name: "Waipahu",
    description: "Waipahu churches depend on our professional church cleaning services to maintain clean, welcoming spaces for worship and fellowship. We provide respectful, comprehensive cleaning that honors your sacred environment.",
    faq: [
      {
        question: "Do you work with diverse Waipahu church communities?",
        answer: "Yes, we're experienced with diverse church communities and can accommodate various cultural preferences and cleaning requirements."
      },
      {
        question: "Can you handle Waipahu church multi-language service schedules?",
        answer: "We coordinate with your multi-language service schedules and can clean around various worship times and community events."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provides exceptional church cleaning for our Waipahu congregation. Professional, respectful, and culturally sensitive.",
      author: "Pastor Michael R., Waipahu Community Church"
    }
  }
];

const ChurchCleaningOahuPage = () => {
  const { t } = useTranslation();
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
        <title>{t(`commercialServices.oahu.church.title`, { defaultValue: "Church Cleaning Oahu | Red Rock Cleans" })}</title>
        <meta name="description" content={t(`commercialServices.oahu.church.description`, { defaultValue: "Oahu church cleaning. Respectful, thorough cleaning for places of worship in Honolulu & Oahu. Professional Hawaiian service!" })} />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <OahuNavigation loginUrl="https://customer-portal.maidily.com/red-rock-cleans-oahu/sign-in" bookingUrl="/commercial-quote?location=oahu" />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative py-24 md:py-32 overflow-hidden">
            <div className="absolute inset-0">
              <img 
                src="/src/assets/hero-commercial.jpg" 
                alt="Professional church cleaning service in a beautiful Oahu sanctuary with stained glass windows and peaceful atmosphere"
                className="w-full h-full object-cover scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                  Respectful & Professional Church Cleaning on Oahu
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                  Create a clean, welcoming, and healthy environment for your congregation across the island of Oahu. Our respectful approach to church cleaning honors the sacred nature of your worship space while maintaining the highest standards of cleanliness and hygiene.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="h-14 text-lg px-8" asChild>
                    <a href="tel:+18089098801">
                      <Phone className="w-5 h-5 mr-2" />
                      Call (808) 909-8801
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="h-14 text-lg px-8" asChild>
                    <Link to="/commercial-quote?location=oahu">
                      <Home className="w-5 h-5 mr-2" />
                      Get Free Quote
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* A Clean Space for Worship and Fellowship */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  A Clean Space for Worship and Fellowship
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <Card className="group hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                        <Heart className="w-8 h-8 text-primary" />
                      </div>
                      <CardTitle>Respect for Sacred Spaces</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed">
                        Our team approaches every sanctuary, chapel, and sacred area with the utmost respect and discretion. We understand the spiritual significance of your worship space and work quietly and reverently to maintain its peaceful atmosphere.
                      </CardDescription>
                    </CardContent>
                  </Card>

                  <Card className="group hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                        <Cross className="w-8 h-8 text-primary" />
                      </div>
                      <CardTitle>Health & Hygiene for Your Congregation</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed">
                        We use appropriate disinfectants and sanitizers to ensure a healthy environment for members of all ages. Our cleaning protocols help protect vulnerable populations while maintaining the welcoming atmosphere of your church.
                      </CardDescription>
                    </CardContent>
                  </Card>

                  <Card className="group hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                        <Calendar className="w-8 h-8 text-primary" />
                      </div>
                      <CardTitle>Flexible Scheduling</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed">
                        We work around your service schedules, church events, and office hours to minimize disruption. Whether you need early morning, evening, or weekend cleaning, we accommodate your congregation's needs.
                      </CardDescription>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Areas We Serve on Oahu */}
          <section className="py-20 bg-muted/30">
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
                      className="border rounded-lg px-6 bg-background"
                    >
                      <AccordionTrigger className="text-left hover:no-underline">
                        <div>
                          <h3 className="text-lg font-semibold">{neighborhood.name}</h3>
                          <p className="text-sm text-muted-foreground font-normal">
                            Professional church cleaning services
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
                            <Link to="/commercial-quote?location=oahu">
                              Schedule Your {neighborhood.name} Church Cleaning
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

          {/* Other Commercial Cleaning Services on Oahu */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  Other Commercial Cleaning Services on Oahu
                </h2>
                <p className="text-xl text-muted-foreground mb-12">
                  Beyond church cleaning, we offer specialized commercial cleaning services to meet all your Oahu business needs.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <Link to="/oahu/school-cleaning/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        School Cleaning Services
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Comprehensive cleaning for educational facilities including classrooms, offices, and common areas.
                      </p>
                    </div>
                  </Link>
                  <Link to="/oahu/medical-office-cleaning/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Medical Office Cleaning
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Specialized cleaning for healthcare facilities with medical-grade sanitization and compliance.
                      </p>
                    </div>
                  </Link>
                  <Link to="/oahu/gym-cleaning/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Gym Cleaning Services
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Professional fitness facility cleaning with specialized equipment and high-traffic area focus.
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  Frequently Asked Questions
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem value="faq-1" className="border rounded-lg px-6 bg-background">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <h3 className="text-lg font-semibold">What is included in church cleaning on Oahu?</h3>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground leading-relaxed">
                        Our church cleaning service includes sanitizing pews and seating areas, cleaning and disinfecting restrooms, vacuuming and mopping all floors, dusting all surfaces and fixtures, cleaning windows and glass surfaces, emptying trash receptacles, and maintaining a peaceful, respectful atmosphere throughout the cleaning process.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="faq-2" className="border rounded-lg px-6 bg-background">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <h3 className="text-lg font-semibold">How do you ensure respect for sacred spaces during cleaning?</h3>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground leading-relaxed">
                        Our team is trained to work quietly and respectfully in sacred spaces. We avoid disrupting any religious items, work around service schedules, use gentle cleaning products safe for all surfaces, and maintain the peaceful atmosphere of your worship environment.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="faq-3" className="border rounded-lg px-6 bg-background">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <h3 className="text-lg font-semibold">What is the cost of church cleaning services on Oahu?</h3>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground leading-relaxed">
                        Church cleaning costs vary based on the size of your facility, frequency of service, and specific cleaning needs. We offer competitive rates and can provide weekly, bi-weekly, or monthly service options. Contact us for a free, personalized quote for your Oahu church.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="faq-4" className="border rounded-lg px-6 bg-background">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <h3 className="text-lg font-semibold">Can you work around our church service and event schedule?</h3>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground leading-relaxed">
                        Absolutely! We coordinate with your church calendar to schedule cleaning around regular services, special events, weddings, funerals, and community activities. We offer flexible scheduling including early morning, evening, and weekend appointments to minimize disruption to your congregation.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-20 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 text-center">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Maintain Your Sacred Space?
                </h2>
                <p className="text-xl mb-8 opacity-90">
                  Join Oahu churches who trust Red Rock Cleans for respectful, professional church cleaning services that honor the sacred nature of your worship space while maintaining the highest standards of cleanliness.
                </p>
                <Button size="lg" variant="secondary" className="h-14 text-lg px-8" asChild>
                  <Link to="/commercial-quote?location=oahu">
                    <Calendar className="w-5 h-5 mr-2" />
                    Schedule Your Church Cleaning Today
                  </Link>
                </Button>
              </div>
            </div>
          </section>
      </main>
        
        <Footer />
      </div>
    </>
  );
};

export default ChurchCleaningOahuPage;

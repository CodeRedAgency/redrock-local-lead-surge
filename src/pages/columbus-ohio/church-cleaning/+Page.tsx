import { ColumbusNavigation } from "@/components/ColumbusNavigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BookOpen, HeartHandshake, Calendar, Building, Heart, Dumbbell, Phone, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";

const cities = [
  {
    id: "dublin",
    name: "Dublin",
    description: "Dublin's diverse faith communities trust our respectful church cleaning services to maintain welcoming sanctuaries that honor their sacred spaces and support their congregations with professional care.",
    faq: [
      {
        question: "Do you work around church services in Dublin?",
        answer: "Yes, we schedule cleanings around worship services, religious events, and office hours to ensure minimal disruption to your congregation's activities in Dublin."
      },
      {
        question: "Are your cleaning products safe for religious artifacts in Dublin?",
        answer: "Absolutely. We use gentle, non-toxic cleaning solutions that are safe for delicate surfaces, religious artifacts, and the health of all congregants in your Dublin place of worship."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been caring for our Dublin sanctuary with reverence and professionalism. They understand the importance of our sacred space.",
      author: "Pastor Johnson, Dublin Community Church"
    }
  },
  {
    id: "upper-arlington",
    name: "Upper Arlington",
    description: "Upper Arlington places of worship enjoy professional church cleaning services that maintain their facilities in pristine condition while respecting the sanctity of their sacred spaces and serving their growing congregations.",
    faq: [
      {
        question: "How often do Upper Arlington churches schedule cleaning?",
        answer: "Most Upper Arlington churches prefer weekly or bi-weekly cleaning, though we offer flexible scheduling based on your congregation size and service frequency."
      },
      {
        question: "Do you clean fellowship halls and classrooms in Upper Arlington?",
        answer: "Yes, we provide comprehensive cleaning for sanctuaries, fellowship halls, Sunday school classrooms, offices, and all church facilities in Upper Arlington."
      }
    ],
    testimonial: {
      text: "The Red Rock Cleans team treats our Upper Arlington church with such care and respect. They're always professional and thorough.",
      author: "Administrator, Upper Arlington Faith Center"
    }
  },
  {
    id: "powell",
    name: "Powell",
    description: "Powell religious facilities rely on our discreet and thorough church cleaning services to create welcoming environments for worship and community fellowship that reflect their commitment to excellence.",
    faq: [
      {
        question: "Can you handle large church facilities in Powell?",
        answer: "Yes, we have experience cleaning churches of all sizes in Powell, from intimate chapels to large sanctuaries with multiple buildings and facilities."
      },
      {
        question: "Do you provide emergency cleaning in Powell?",
        answer: "Yes, we offer emergency cleaning services for special events, holiday preparations, or unexpected situations at your Powell place of worship."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans helped us prepare our Powell sanctuary for our Easter services. The results were stunning and our congregation noticed immediately.",
      author: "Deacon Martinez, Powell Chapel"
    }
  },
  {
    id: "lewis-center",
    name: "Lewis Center",
    description: "Lewis Center churches trust our professional cleaning services to maintain healthy, welcoming environments that support their spiritual missions and community outreach programs in this thriving area.",
    faq: [
      {
        question: "What areas do you clean in Lewis Center churches?",
        answer: "We clean all areas including sanctuaries, pews, altars, fellowship halls, restrooms, kitchens, offices, and outdoor gathering spaces at Lewis Center churches."
      },
      {
        question: "Are your staff background-checked for Lewis Center churches?",
        answer: "Yes, all our team members undergo thorough background checks and are trained to work respectfully in religious environments."
      }
    ],
    testimonial: {
      text: "Our Lewis Center congregation appreciates the cleanliness and care Red Rock Cleans brings to our worship space every week.",
      author: "Church Administrator, Lewis Center United Methodist"
    }
  },
  {
    id: "worthington",
    name: "Worthington",
    description: "Worthington's vibrant religious community benefits from our specialized church cleaning services that honor sacred spaces while maintaining the highest standards of cleanliness and care.",
    faq: [
      {
        question: "Do you clean historic churches in Worthington?",
        answer: "Yes, we have experience with historic places of worship in Worthington and understand the special care required for older buildings and delicate architectural features."
      },
      {
        question: "Can you work with our Worthington church's budget?",
        answer: "We offer flexible cleaning packages and custom solutions to fit various budgets while maintaining our high standards of service for Worthington churches."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been instrumental in maintaining our historic Worthington sanctuary. They're respectful, reliable, and thorough.",
      author: "Reverend Thompson, First Church of Worthington"
    }
  },
  {
    id: "new-albany",
    name: "New Albany",
    description: "New Albany places of worship enjoy consistent, respectful cleaning services that keep their facilities welcoming for congregants of all ages and backgrounds in this family-friendly community.",
    faq: [
      {
        question: "Do you serve all denominations in New Albany?",
        answer: "Yes, we serve all religious denominations in New Albany and understand the unique cleaning requirements and customs of different faith traditions."
      },
      {
        question: "What's included in church cleaning in New Albany?",
        answer: "Our service includes sanctuary cleaning, pew polishing, floor care, restroom sanitization, kitchen cleaning, and office tidying for New Albany churches."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans understands the needs of our New Albany congregation. Their service is always respectful and thorough.",
      author: "Facility Manager, New Albany Temple"
    }
  },
  {
    id: "bexley",
    name: "Bexley",
    description: "Bexley religious facilities trust our professional church cleaning services to maintain pristine worship environments that reflect their commitment to community and faith in this historic neighborhood.",
    faq: [
      {
        question: "Can you clean after special events in Bexley?",
        answer: "Yes, we provide post-event cleaning for weddings, funerals, holiday services, and other special religious gatherings at Bexley churches."
      },
      {
        question: "How do you ensure quality in Bexley churches?",
        answer: "We use detailed checklists, conduct regular quality inspections, and maintain open communication with church leadership to ensure satisfaction."
      }
    ],
    testimonial: {
      text: "Our Bexley church family loves coming to a clean, fresh-smelling sanctuary every Sunday thanks to Red Rock Cleans.",
      author: "Elder Williams, Bexley Community Church"
    }
  },
  {
    id: "german-village",
    name: "German Village",
    description: "German Village places of worship benefit from our detailed church cleaning services that maintain beautiful, welcoming spaces for worship and community fellowship in this charming historic district.",
    faq: [
      {
        question: "Do you clean stained glass windows in German Village?",
        answer: "Yes, we have specialized training for cleaning stained glass windows and other delicate religious artwork and architectural features in German Village churches."
      },
      {
        question: "Can you accommodate last-minute cleaning in German Village?",
        answer: "We do our best to accommodate urgent cleaning needs and can often provide same-day or next-day service for our German Village church clients."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans treats our German Village sanctuary with the reverence it deserves. Their attention to detail is exceptional.",
      author: "Priest Rodriguez, German Village Catholic Church"
    }
  },
  {
    id: "short-north",
    name: "Short North",
    description: "Short North churches rely on our compassionate cleaning services to create clean, healthy environments that support their spiritual missions and community programs in this vibrant arts district.",
    faq: [
      {
        question: "What cleaning products do you use in Short North churches?",
        answer: "We use eco-friendly, non-toxic cleaning products that are safe for children, elderly congregants, and people with sensitivities in Short North places of worship."
      },
      {
        question: "Do you offer discounts for Short North churches?",
        answer: "We offer special pricing for religious organizations and work with each church to create a cleaning plan that fits their budget and needs."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been a blessing to our Short North congregation. Our church always looks and smells fresh for services.",
      author: "Minister Davis, Short North Baptist Church"
    }
  },
  {
    id: "victorian-village",
    name: "Victorian Village",
    description: "Victorian Village religious communities trust our professional church cleaning services to maintain welcoming, sanitary spaces that honor their sacred traditions in this beautiful historic neighborhood.",
    faq: [
      {
        question: "How long does church cleaning take in Victorian Village?",
        answer: "Cleaning time varies based on facility size, but we work efficiently to complete the job without disrupting church activities or services in Victorian Village."
      },
      {
        question: "Can we customize our cleaning plan in Victorian Village?",
        answer: "Absolutely! We create custom cleaning plans tailored to each church's specific needs, schedule, and priorities in Victorian Village."
      }
    ],
    testimonial: {
      text: "Our Victorian Village church has never looked better. Red Rock Cleans is professional, respectful, and always thorough.",
      author: "Trustee Johnson, Victorian Village Community Church"
    }
  },
  {
    id: "hillard",
    name: "Hilliard",
    description: "Hilliard places of worship enjoy dedicated church cleaning services that ensure every corner of their facilities reflects the care and respect their sacred spaces deserve.",
    faq: [
      {
        question: "Do you clean church nurseries in Hilliard?",
        answer: "Yes, we provide specialized cleaning and sanitization for church nurseries and children's areas to ensure the safety of young congregants in Hilliard."
      },
      {
        question: "What if we're not satisfied with the cleaning in Hilliard?",
        answer: "We guarantee your satisfaction and will return to address any concerns at no additional charge, ensuring your Hilliard worship space meets your standards."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans understands that our Hilliard church is more than a building—it's a sacred space. They treat it accordingly.",
      author: "Reverend Lee, Hilliard Methodist Church"
    }
  },
  {
    id: "westerville",
    name: "Westerville",
    description: "Westerville churches benefit from our respectful, thorough cleaning services that maintain pristine worship environments for their growing congregations in this thriving community.",
    faq: [
      {
        question: "Do you clean multi-purpose church facilities in Westerville?",
        answer: "Yes, we clean all church spaces including worship areas, gymnasiums, cafeterias, classrooms, and administrative offices in Westerville."
      },
      {
        question: "How do you handle sensitive religious items in Westerville?",
        answer: "Our team is trained to identify and carefully handle religious artifacts, texts, and ceremonial items with the utmost respect and care in Westerville churches."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been serving our Westerville church for years. They're reliable, professional, and always respectful of our faith.",
      author: "Administrator Garcia, Westerville Christian Center"
    }
  }
];

const ChurchCleaningColumbusOhioPage = () => {
  const [openAccordion, setOpenAccordion] = useState<string>("");

  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash) {
      setOpenAccordion(hash);
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
    }
  }, []);

  const handleAccordionChange = (value: string) => {
    setOpenAccordion(value);
    window.location.hash = value;
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Church Cleaning Columbus Ohio | Red Rock Cleans</title>
        <meta name="description" content="Professional church cleaning services in Columbus, OH. Red Rock Cleans provides respectful, detailed cleaning for places of worship in Dublin, Upper Arlington, and across the area." />
        <meta name="keywords" content="church cleaning Columbus Ohio, church cleaning near me, place of worship cleaning Columbus Ohio, sanctuary cleaning Dublin OH, chapel cleaning Upper Arlington, best church cleaners Columbus, professional church cleaning Columbus Ohio, respectful religious facility cleaning, dependable church cleaners Columbus, church cleaning cost Columbus Ohio, affordable church cleaning services Columbus, what is included in church cleaning Columbus, hire church cleaners in Columbus" />
        <link rel="canonical" href="https://redrockcleans.com/columbus-ohio/church-cleaning" />
      </Helmet>
      
      <ColumbusNavigation loginUrl="https://customer-portal.maidily.com/red-rock-cleans-columbus-ohio/sign-in" bookingUrl="/commercial-quote?location=columbus-ohio" />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/src/assets/hero-commercial.jpg" 
              alt="Professional church cleaning service in a Columbus Ohio sanctuary"
              className="w-full h-full object-cover scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                Respectful & Professional Church Cleaning in Columbus, Ohio
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Creating clean, welcoming, and healthy environments for the diverse congregations across the Columbus area. Our respectful cleaning services honor the sacred nature of your place of worship while maintaining the highest standards of cleanliness and care for your community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="h-14 text-lg px-8" asChild>
                  <a href="tel:+13802353135">
                    <Phone className="w-5 h-5 mr-2" />
                    Call (380) 235-3135
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="h-14 text-lg px-8" asChild>
                  <Link to="/commercial-quote?location=columbus-ohio">
                    <Home className="w-5 h-5 mr-2" />
                    Get Free Quote
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* A Clean Space for Worship and Fellowship Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                A Clean Space for Worship and Fellowship
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Respect for Sacred Spaces</h3>
                      <p className="text-muted-foreground">
                        Our team approaches every sanctuary, chapel, and sacred area with the utmost discretion and reverence. We understand that your Columbus place of worship is more than just a building—it's a cornerstone of faith and community that deserves special care and attention from trained professionals.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <HeartHandshake className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Health & Hygiene for Your Congregation</h3>
                      <p className="text-muted-foreground">
                        We use professional-grade disinfectants and eco-friendly cleaning solutions to create a healthy environment for congregants of all ages. From sanctuary pews to fellowship halls in Columbus, we ensure every surface is thoroughly sanitized to protect your community's wellbeing.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Flexible Scheduling</h3>
                      <p className="text-muted-foreground">
                        We work around your worship services, religious events, and office hours to minimize disruption. Whether you need weekly cleaning, special event preparation, or holiday deep cleaning in Columbus, we schedule our services at times most convenient for your congregation's activities.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Areas We Serve Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Areas We Serve in Columbus, Ohio
              </h2>
              
              <Accordion type="single" value={openAccordion} onValueChange={handleAccordionChange} className="space-y-4">
                {cities.map((city) => (
                  <AccordionItem key={city.id} value={city.id} id={city.id} className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <div>
                        <h3 className="text-lg font-semibold">{city.name}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{city.description}</p>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold mb-2">Church Cleaning Services in {city.name}</h4>
                          <p className="text-muted-foreground">
                            {city.description}
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-2">Frequently Asked Questions</h4>
                          <div className="space-y-2">
                            {city.faq.map((faq, index) => (
                              <div key={index}>
                                <p className="font-medium text-sm">{faq.question}</p>
                                <p className="text-muted-foreground text-sm">{faq.answer}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="bg-primary/5 p-4 rounded-lg">
                          <p className="italic text-sm mb-2">"{city.testimonial.text}"</p>
                          <p className="text-sm font-medium">- {city.testimonial.author}</p>
                        </div>
                        
                        <Button asChild className="w-full">
                          <Link to="/commercial-quote?location=columbus-ohio">
                            Get Church Cleaning Quote for {city.name}
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

        {/* Other Services Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">
                Other Commercial Cleaning Services in Columbus
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <Building className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">School Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Professional cleaning services for educational facilities and schools
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/columbus-ohio/school-cleaning">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <Heart className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Medical Office Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Specialized cleaning for medical facilities and healthcare offices
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/columbus-ohio/medical-office-cleaning">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <Dumbbell className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Gym Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Hygienic cleaning services for fitness centers and health clubs
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/columbus-ohio/gym-cleaning">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Frequently Asked Questions
              </h2>
              <Accordion type="single" className="space-y-4">
                <AccordionItem value="what-included" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">What is included in church cleaning services in Columbus Ohio?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Our comprehensive church cleaning services in Columbus include sanctuary cleaning, pew polishing, altar care, floor maintenance, restroom sanitization, fellowship hall cleaning, kitchen cleaning, office tidying, window washing, and trash removal. We also provide special attention to religious artifacts and delicate surfaces, ensuring everything is handled with care and respect.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="cost" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">How much does church cleaning cost in Columbus Ohio?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Church cleaning costs in Columbus vary based on facility size, cleaning frequency, and specific needs. We offer competitive, transparent pricing with special rates for religious organizations. Most Columbus churches invest between $150-$500 per cleaning session, depending on their requirements. We provide free, customized quotes to ensure our services fit within your congregation's budget.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="denominations" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">Do you serve all religious denominations in Columbus?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Yes, we proudly serve all religious denominations and faith traditions throughout Columbus, including churches, synagogues, mosques, temples, and other places of worship. Our team is trained to understand and respect the unique customs, requirements, and sacred practices of each faith community we serve in the Columbus area.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="schedule" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">Can you work around our worship schedule in Columbus?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Absolutely! We offer flexible scheduling to accommodate your worship services, religious events, office hours, and special celebrations in Columbus. We can clean during weekday mornings, evenings, or weekends—whatever works best for your congregation. Our goal is to maintain your sacred space without disrupting your religious activities.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Enhance Your Sacred Space?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join Columbus congregations that trust Red Rock Cleans for respectful, professional church cleaning services
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
              <Link to="/commercial-quote?location=columbus-ohio">Get Your Free Church Cleaning Quote</Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ChurchCleaningColumbusOhioPage;


import { LasVegasNavigation } from "@/components/LasVegasNavigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Clock, Shield, Star, Users, Calendar, Home, Sparkles, Heart, Cross, Bird, Building2, Stethoscope, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";

const neighborhoods = [
  {
    id: "anthem",
    name: "Anthem",
    description: "Keep your Anthem church sanctuary and facilities pristine with our respectful church cleaning services designed for places of worship.",
    faq: [
      {
        question: "Do you understand the importance of respectful cleaning in religious spaces?",
        answer: "Absolutely. Our team is trained to work with reverence and respect in all religious facilities, understanding the sacred nature of church spaces."
      },
      {
        question: "Can you work around Anthem church service schedules?",
        answer: "Yes, we schedule our cleaning services around your worship times, events, and office hours to minimize disruption to your congregation."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our Anthem church with the utmost respect and professionalism. They understand the sacred nature of our space.",
      author: "Pastor Michael R., Anthem Community Church"
    }
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "Professional church cleaning services for Enterprise congregations who value a clean, welcoming environment for worship and fellowship.",
    faq: [
      {
        question: "What areas of Enterprise churches do you clean?",
        answer: "We clean all areas including sanctuaries, chapels, fellowship halls, offices, classrooms, and restrooms throughout Enterprise churches."
      },
      {
        question: "Do you provide flexible scheduling for Enterprise churches?",
        answer: "Yes, we work around your service schedules, special events, and church activities to ensure minimal disruption to your congregation."
      }
    ],
    testimonial: {
      text: "Our Enterprise church has never looked cleaner. Red Rock Cleans respects our space and provides excellent service around our busy schedule.",
      author: "Reverend Sarah L., Enterprise Methodist Church"
    }
  },
  {
    id: "green-valley-north",
    name: "Green Valley North",
    description: "Keep your Green Valley North church facilities spotless with our comprehensive church cleaning service designed for busy congregations.",
    faq: [
      {
        question: "Do you clean both large and small churches in Green Valley North?",
        answer: "Yes, we provide church cleaning services for congregations of all sizes, from small chapels to large church complexes."
      },
      {
        question: "What's included in your Green Valley North church cleaning?",
        answer: "We clean sanctuaries, chapels, fellowship halls, offices, classrooms, nurseries, restrooms, and common areas with appropriate reverence."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Green Valley North church beautifully. Their respectful approach and attention to detail are exceptional.",
      author: "Father David K., Green Valley Catholic Church"
    }
  },
  {
    id: "henderson",
    name: "Henderson",
    description: "Henderson churches trust Red Rock Cleans for consistent, respectful church cleaning services that maintain their sacred spaces beautifully year-round.",
    faq: [
      {
        question: "How far in advance should Henderson churches book cleaning?",
        answer: "We recommend booking at least one week in advance, though we can often accommodate shorter notice for special events or emergencies."
      },
      {
        question: "Do you provide cleaning supplies for Henderson churches?",
        answer: "Yes, we bring all professional-grade cleaning supplies and equipment to every Henderson church cleaning appointment."
      }
    ],
    testimonial: {
      text: "As a Henderson church administrator, I appreciate Red Rock Cleans' professionalism and respect for our sacred spaces. Highly recommended!",
      author: "Janet M., Henderson Baptist Church"
    }
  },
  {
    id: "lake-las-vegas",
    name: "Lake Las Vegas",
    description: "Lake Las Vegas churches enjoy pristine, resort-quality cleaning with our church cleaning service that maintains their beautiful facilities to the highest standards.",
    faq: [
      {
        question: "Do you service luxury churches in Lake Las Vegas?",
        answer: "Yes, we specialize in cleaning high-end church facilities and are experienced with delicate religious artifacts and beautiful finishes."
      },
      {
        question: "Can you work around Lake Las Vegas church event schedules?",
        answer: "Absolutely! We offer flexible scheduling including weekend appointments to accommodate weddings, special services, and events."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Lake Las Vegas church to perfection. Their respect for our sacred space and attention to detail is remarkable.",
      author: "Pastor Robert H., Lake Las Vegas Community Church"
    }
  },
  {
    id: "las-vegas",
    name: "Las Vegas",
    description: "Las Vegas churches rely on our church cleaning service for consistent, professional facility maintenance that creates a welcoming environment for worship.",
    faq: [
      {
        question: "What makes Red Rock Cleans different for Las Vegas churches?",
        answer: "We're locally owned, fully insured, and our team is trained to work respectfully in religious spaces with understanding of different faith traditions."
      },
      {
        question: "Do you offer emergency cleaning for Las Vegas churches?",
        answer: "Yes, we can often provide same-day or emergency cleaning services for special events, funerals, or unexpected situations."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been cleaning our Las Vegas church for three years. They understand our needs and maintain our facilities beautifully.",
      author: "Reverend Lisa W., Las Vegas United Methodist Church"
    }
  },
  {
    id: "macdonald-ranch",
    name: "MacDonald Ranch",
    description: "MacDonald Ranch churches enjoy consistent, high-quality church cleaning services that keep their facilities spotless and welcoming for all members.",
    faq: [
      {
        question: "How long does church cleaning take in MacDonald Ranch?",
        answer: "Most MacDonald Ranch church cleanings take 3-6 hours depending on facility size and specific cleaning requirements."
      },
      {
        question: "Do you work with MacDonald Ranch church volunteers?",
        answer: "Yes, we can coordinate with church volunteers and staff to ensure our cleaning complements your existing maintenance efforts."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our MacDonald Ranch church beautifully. Their respectful approach and professionalism are outstanding.",
      author: "Pastor Maria S., MacDonald Ranch Lutheran Church"
    }
  },
  {
    id: "mountains-edge",
    name: "Mountain's Edge",
    description: "Mountain's Edge churches trust our church cleaning service for consistent facility maintenance that complements their active community involvement.",
    faq: [
      {
        question: "What cleaning products do you use in Mountain's Edge churches?",
        answer: "We use eco-friendly, professional-grade cleaning products that are safe for all ages and won't damage religious artifacts or delicate surfaces."
      },
      {
        question: "Can you customize cleaning for Mountain's Edge churches?",
        answer: "Yes, we can customize our church cleaning service to focus on specific areas, special events, or particular cleaning priorities."
      }
    ],
    testimonial: {
      text: "Living in Mountain's Edge, I appreciate Red Rock Cleans' reliability and respect for our church space. Excellent service for our congregation.",
      author: "Father Thomas R., Mountain's Edge Catholic Church"
    }
  },
  {
    id: "north-las-vegas",
    name: "North Las Vegas",
    description: "North Las Vegas churches depend on our church cleaning service for consistent, affordable facility maintenance that keeps their sacred spaces beautiful and welcoming.",
    faq: [
      {
        question: "Do you offer affordable rates for North Las Vegas churches?",
        answer: "Yes, we provide competitive rates for North Las Vegas churches while maintaining high-quality service standards and respect for sacred spaces."
      },
      {
        question: "How do you ensure quality in North Las Vegas church cleaning?",
        answer: "Every North Las Vegas church cleaning is supervised and we guarantee satisfaction with our comprehensive quality assurance process."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our North Las Vegas church clean and welcoming. Great value and excellent service for our community.",
      author: "Pastor Carlos M., North Las Vegas Baptist Church"
    }
  },
  {
    id: "paradise",
    name: "Paradise",
    description: "Paradise churches enjoy reliable church cleaning services that maintain their facilities to the highest standards of cleanliness and reverence.",
    faq: [
      {
        question: "Do you service diverse church denominations in Paradise?",
        answer: "Yes, we provide respectful cleaning services for churches of all denominations and faith traditions throughout Paradise."
      },
      {
        question: "What's your cancellation policy for Paradise churches?",
        answer: "We require 24-hour notice for cancellations, but we're flexible for church emergencies and can reschedule around special events."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our Paradise church beautifully. Professional, respectful, and thorough every time.",
      author: "Reverend Nancy P., Paradise Presbyterian Church"
    }
  },
  {
    id: "seven-hills",
    name: "Seven Hills",
    description: "Seven Hills churches trust our church cleaning service for consistent, professional facility maintenance that preserves their beautiful sacred spaces.",
    faq: [
      {
        question: "Do you service historic churches in Seven Hills?",
        answer: "Yes, we have extensive experience cleaning historic and traditional churches, using appropriate methods for older buildings and artifacts."
      },
      {
        question: "How do you ensure security in Seven Hills churches?",
        answer: "All our team members are background-checked, bonded, and insured. We respect the sacred nature of your space and maintain strict confidentiality."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Seven Hills church to perfection. Their professionalism and respect for our historic building are outstanding.",
      author: "Pastor James L., Seven Hills Episcopal Church"
    }
  },
  {
    id: "silverado-ranch",
    name: "Silverado Ranch",
    description: "Silverado Ranch churches rely on our church cleaning service for consistent facility maintenance that keeps their busy community programs running smoothly.",
    faq: [
      {
        question: "Do you work around Silverado Ranch church school programs?",
        answer: "Yes, we can schedule cleanings around church school hours, youth programs, and community events for your convenience."
      },
      {
        question: "What if we're not satisfied with cleaning in Silverado Ranch?",
        answer: "We guarantee satisfaction and will return to address any concerns at no additional charge, understanding the importance of your sacred space."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Silverado Ranch church spotless for over two years. Highly recommend their respectful service!",
      author: "Reverend Patricia D., Silverado Ranch Methodist Church"
    }
  },
  {
    id: "spring-valley",
    name: "Spring Valley",
    description: "Spring Valley churches enjoy consistent, professional church cleaning services that maintain their facilities clean and welcoming for worship year-round.",
    faq: [
      {
        question: "How often do Spring Valley churches schedule cleaning?",
        answer: "Most Spring Valley churches prefer weekly or bi-weekly cleaning, though we offer flexible scheduling around your service calendar."
      },
      {
        question: "Do you provide specialized cleaning for Spring Valley churches?",
        answer: "Yes, we offer both regular church cleaning and specialized services for special events, holidays, and deep cleaning needs."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our Spring Valley church beautifully. Professional, reliable, and always respectful of our sacred space.",
      author: "Father Susan B., Spring Valley Catholic Church"
    }
  },
  {
    id: "summerlin-south",
    name: "Summerlin South",
    description: "Summerlin South churches trust our church cleaning service for consistent, high-quality facility maintenance that complements their beautiful worship spaces.",
    faq: [
      {
        question: "Do you service luxury churches in Summerlin South?",
        answer: "Yes, we specialize in cleaning beautiful, high-end church facilities and are experienced with delicate religious art and architectural features."
      },
      {
        question: "Can you accommodate Summerlin South church event schedules?",
        answer: "Absolutely! We're familiar with busy church calendars and can work around weddings, funerals, and special services."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Summerlin South church to the highest standards. Exceptional service and deep respect for our sacred space.",
      author: "Pastor Kevin F., Summerlin South Community Church"
    }
  },
  {
    id: "sunrise-manor",
    name: "Sunrise Manor",
    description: "Sunrise Manor churches depend on our church cleaning service for consistent, affordable facility maintenance that keeps their sacred spaces spotless and welcoming.",
    faq: [
      {
        question: "Do you offer competitive rates for Sunrise Manor churches?",
        answer: "Yes, we provide affordable, competitive rates for Sunrise Manor churches while maintaining high service quality and respect for sacred spaces."
      },
      {
        question: "How reliable is your service in Sunrise Manor churches?",
        answer: "We're committed to reliability and have a strong track record of consistent, respectful service in Sunrise Manor religious facilities."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Sunrise Manor church clean and welcoming. Great value and reliable service for our congregation.",
      author: "Reverend Angela C., Sunrise Manor Baptist Church"
    }
  },
  {
    id: "whitney",
    name: "Whitney",
    description: "Whitney churches enjoy professional church cleaning services that maintain their facilities clean, comfortable, and ready for worship and community events.",
    faq: [
      {
        question: "Do you work with diverse Whitney church communities?",
        answer: "Yes, we're experienced with churches of all denominations and sizes, using respectful cleaning practices appropriate for each faith tradition."
      },
      {
        question: "Can you schedule around Whitney church community events?",
        answer: "Absolutely! We offer flexible scheduling including early morning, evening, and weekend appointments around your community calendar."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our Whitney church beautifully. Professional, trustworthy, and always respectful of our sacred space.",
      author: "Pastor Rachel G., Whitney United Church"
    }
  },
  {
    id: "winchester",
    name: "Winchester",
    description: "Winchester churches trust our church cleaning service for consistent, professional facility maintenance that keeps their sacred spaces spotless year-round.",
    faq: [
      {
        question: "Do you service diverse church types in Winchester?",
        answer: "Yes, we provide church cleaning for all types of religious facilities including traditional churches, modern worship centers, and community chapels."
      },
      {
        question: "How do you ensure quality in Winchester church cleaning?",
        answer: "Every Winchester church cleaning is supervised and we guarantee satisfaction with our comprehensive quality assurance process and respectful approach."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Winchester church immaculate. Reliable, professional, and excellent value for our sacred space.",
      author: "Father Michael R., Winchester Catholic Church"
    }
  }
];

const ChurchCleaningLasVegasPage = () => {
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
        <title>Church Cleaning Las Vegas | Red Rock Cleans</title>
        <meta name="description" content="Professional church cleaning services in Las Vegas. Red Rock Cleans provides respectful, detailed cleaning for places of worship in Henderson, Summerlin, and across the valley." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <LasVegasNavigation />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative py-24 md:py-32 overflow-hidden">
            <div className="absolute inset-0">
              <img 
                src="/src/assets/hero-commercial.jpg" 
                alt="Professional church cleaning service in a beautiful Las Vegas sanctuary"
                className="w-full h-full object-cover scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                  Respectful & Professional Church Cleaning in Las Vegas
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                  Create a clean, welcoming, and healthy environment for your congregation across the Las Vegas valley. Our respectful church cleaning services maintain your sacred spaces with the reverence they deserve.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="h-14 text-lg px-8" asChild>
                    <Link to="/commercial-quote?location=las-vegas">
                      <Calendar className="w-5 h-5 mr-2" />
                      Schedule Church Cleaning
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="h-14 text-lg px-8" asChild>
                    <Link to="/contact">
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
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Bird className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Respect for Sacred Spaces</h3>
                      <p className="text-muted-foreground text-sm">
                        Our team approaches every sanctuary, chapel, and sacred area with deep respect and understanding. We work discreetly and reverently, ensuring your worship space maintains its spiritual atmosphere while staying impeccably clean.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Sacred & Reverent →
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Cross className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Health & Hygiene for Your Congregation</h3>
                      <p className="text-muted-foreground text-sm">
                        We use hospital-grade disinfectants and eco-friendly cleaning products to ensure a healthy environment for members of all ages. Our thorough sanitization protects your congregation while maintaining the integrity of your sacred spaces.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Healthy & Safe →
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Calendar className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Flexible Scheduling</h3>
                      <p className="text-muted-foreground text-sm">
                        We work around your service schedules, special events, weddings, funerals, and office hours to minimize disruption to your congregation. Our flexible approach ensures your church activities continue uninterrupted.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Convenient & Flexible →
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Areas We Serve in Las Vegas */}
          <section className="py-20 bg-muted/30">
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
                            <Link to="/commercial-quote?location=las-vegas">
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

          {/* Other Commercial Cleaning Services in Las Vegas */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  Other Commercial Cleaning Services in Las Vegas
                </h2>
                <p className="text-xl text-muted-foreground mb-12">
                  Beyond church cleaning, we offer specialized commercial cleaning services to meet all your Las Vegas facility needs.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <Link to="/las-vegas/school-cleaning/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors mb-4">
                        <GraduationCap className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        School Cleaning Services
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Professional cleaning for educational facilities, ensuring safe and healthy learning environments.
                      </p>
                    </div>
                  </Link>
                  <Link to="/las-vegas/medical-office-cleaning/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors mb-4">
                        <Stethoscope className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Medical Office Cleaning Services
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Specialized cleaning for healthcare facilities with strict hygiene and safety standards.
                      </p>
                    </div>
                  </Link>
                  <Link to="/las-vegas/office-cleaning/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors mb-4">
                        <Building2 className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Office Cleaning Services
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Professional office cleaning to maintain a productive and welcoming business environment.
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
                  <AccordionItem value="item-1" className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <h3 className="text-lg font-semibold">What makes your church cleaning service different?</h3>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <p className="text-muted-foreground">
                        We understand that churches are sacred spaces and require special care. Our team is trained to work with reverence and respect, using appropriate cleaning methods that honor the spiritual nature of your facility while ensuring thorough cleanliness.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2" className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <h3 className="text-lg font-semibold">How do you handle scheduling around church services and events?</h3>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <p className="text-muted-foreground">
                        We work closely with your church staff to create a cleaning schedule that minimizes disruption. We can clean early mornings, evenings, or between services. For special events like weddings or funerals, we can provide same-day or emergency cleaning services.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3" className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <h3 className="text-lg font-semibold">What areas of the church do you clean?</h3>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <p className="text-muted-foreground">
                        We clean all areas of your church including sanctuaries, chapels, fellowship halls, offices, classrooms, nurseries, restrooms, and common areas. We can also clean special areas like baptismal fonts, altars, and religious artifacts with appropriate care and respect.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-4" className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <h3 className="text-lg font-semibold">Are your cleaners background-checked and trustworthy?</h3>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <p className="text-muted-foreground">
                        Yes, all our team members undergo thorough background checks, are fully insured and bonded. We understand the trust you place in us when we enter your sacred space, and we take that responsibility seriously. Our team is trained to work respectfully and maintain strict confidentiality.
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
                  Ready for a Clean, Welcoming Church Environment?
                </h2>
                <p className="text-xl mb-8 opacity-90">
                  Join the Las Vegas churches that trust Red Rock Cleans for respectful, professional church cleaning services that honor your sacred space.
                </p>
                <Button size="lg" variant="secondary" className="h-14 text-lg px-8" asChild>
                  <Link to="/commercial-quote?location=las-vegas">
                    <Calendar className="w-5 h-5 mr-2" />
                    Schedule Your Church Cleaning Today
                  </Link>
                </Button>
              </div>
            </div>
          </section>

          {/* Image Section */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <img 
                  src="/src/assets/service-products.jpg" 
                  alt="A pristine and welcoming church sanctuary in Las Vegas after professional cleaning by Red Rock Cleans"
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

export default ChurchCleaningLasVegasPage;

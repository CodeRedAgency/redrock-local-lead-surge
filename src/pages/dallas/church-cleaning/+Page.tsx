import { DallasNavigation } from "@/components/DallasNavigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BookOpen, HeartHandshake, Calendar, Building2, Stethoscope, Dumbbell, Phone, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";

const neighborhoods = [
  {
    id: "university-park",
    name: "University Park",
    description: "Keep your University Park church sanctuary and facilities pristine with our respectful church cleaning services designed for places of worship. We understand the unique needs of this distinguished Dallas neighborhood's faith communities.",
    faq: [
      {
        question: "Do you understand the importance of respectful cleaning in religious spaces?",
        answer: "Absolutely. Our team is trained to work with reverence and respect in all religious facilities, understanding the sacred nature of church spaces in University Park."
      },
      {
        question: "Can you work around University Park church service schedules?",
        answer: "Yes, we schedule our cleaning services around your worship times, events, and office hours to minimize disruption to your University Park congregation."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our University Park church with the utmost respect and professionalism. They understand the sacred nature of our space.",
      author: "Pastor Michael R., University Park Community Church"
    }
  },
  {
    id: "highland-park",
    name: "Highland Park",
    description: "Professional church cleaning services for Highland Park congregations who value a clean, welcoming environment for worship and fellowship. Our team provides meticulous care for your historic and beautiful church facilities.",
    faq: [
      {
        question: "What areas of Highland Park churches do you clean?",
        answer: "We clean all areas including sanctuaries, chapels, fellowship halls, offices, classrooms, and restrooms throughout Highland Park churches."
      },
      {
        question: "Do you provide flexible scheduling for Highland Park churches?",
        answer: "Yes, we work around your service schedules, special events, and church activities to ensure minimal disruption to your Highland Park congregation."
      }
    ],
    testimonial: {
      text: "Our Highland Park church has never looked cleaner. Red Rock Cleans respects our space and provides excellent service around our busy schedule.",
      author: "Reverend Sarah L., Highland Park Methodist Church"
    }
  },
  {
    id: "uptown-dallas",
    name: "Uptown Dallas",
    description: "Keep your Uptown Dallas church facilities spotless with our comprehensive church cleaning service designed for busy congregations in the heart of the city.",
    faq: [
      {
        question: "Do you clean both large and small churches in Uptown Dallas?",
        answer: "Yes, we provide church cleaning services for congregations of all sizes in Uptown Dallas, from small chapels to large church complexes."
      },
      {
        question: "What's included in your Uptown Dallas church cleaning?",
        answer: "We clean sanctuaries, chapels, fellowship halls, offices, classrooms, nurseries, restrooms, and common areas with appropriate reverence."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Uptown Dallas church beautifully. Their respectful approach and attention to detail are exceptional.",
      author: "Father David K., Uptown Catholic Church"
    }
  },
  {
    id: "downtown-dallas",
    name: "Downtown Dallas",
    description: "Downtown Dallas churches trust Red Rock Cleans for consistent, respectful church cleaning services that maintain their sacred spaces beautifully year-round in the bustling city center.",
    faq: [
      {
        question: "How far in advance should Downtown Dallas churches book cleaning?",
        answer: "We recommend booking at least one week in advance, though we can often accommodate shorter notice for special events or emergencies in Downtown Dallas."
      },
      {
        question: "Do you provide cleaning supplies for Downtown Dallas churches?",
        answer: "Yes, we bring all professional-grade cleaning supplies and equipment to every Downtown Dallas church cleaning appointment."
      }
    ],
    testimonial: {
      text: "As a Downtown Dallas church administrator, I appreciate Red Rock Cleans' professionalism and respect for our sacred spaces. Highly recommended!",
      author: "Janet M., Downtown Dallas Baptist Church"
    }
  },
  {
    id: "preston-hollow",
    name: "Preston Hollow",
    description: "Preston Hollow churches enjoy pristine, high-quality cleaning with our church cleaning service that maintains their beautiful facilities to the highest standards in this prestigious Dallas neighborhood.",
    faq: [
      {
        question: "Do you service luxury churches in Preston Hollow?",
        answer: "Yes, we specialize in cleaning high-end church facilities and are experienced with delicate religious artifacts and beautiful finishes in Preston Hollow."
      },
      {
        question: "Can you work around Preston Hollow church event schedules?",
        answer: "Absolutely! We offer flexible scheduling including weekend appointments to accommodate weddings, special services, and events in Preston Hollow."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Preston Hollow church to perfection. Their respect for our sacred space and attention to detail is remarkable.",
      author: "Pastor Robert H., Preston Hollow Community Church"
    }
  },
  {
    id: "plano",
    name: "Plano",
    description: "Plano churches rely on our church cleaning service for consistent, professional facility maintenance that creates a welcoming environment for worship in this thriving Dallas suburb.",
    faq: [
      {
        question: "What makes Red Rock Cleans different for Plano churches?",
        answer: "We're locally owned, fully insured, and our team is trained to work respectfully in religious spaces with understanding of different faith traditions in Plano."
      },
      {
        question: "Do you offer emergency cleaning for Plano churches?",
        answer: "Yes, we can often provide same-day or emergency cleaning services for special events, funerals, or unexpected situations in Plano."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been cleaning our Plano church for three years. They understand our needs and maintain our facilities beautifully.",
      author: "Reverend Lisa W., Plano United Methodist Church"
    }
  },
  {
    id: "frisco",
    name: "Frisco",
    description: "Frisco churches enjoy consistent, high-quality church cleaning services that keep their facilities spotless and welcoming for all members in this fast-growing community.",
    faq: [
      {
        question: "How long does church cleaning take in Frisco?",
        answer: "Most Frisco church cleanings take 3-6 hours depending on facility size and specific cleaning requirements."
      },
      {
        question: "Do you work with Frisco church volunteers?",
        answer: "Yes, we can coordinate with church volunteers and staff to ensure our cleaning complements your existing maintenance efforts in Frisco."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our Frisco church beautifully. Their respectful approach and professionalism are outstanding.",
      author: "Pastor Maria S., Frisco Lutheran Church"
    }
  },
  {
    id: "prosper",
    name: "Prosper",
    description: "Prosper churches trust our church cleaning service for consistent facility maintenance that complements their active community involvement in this growing Dallas area town.",
    faq: [
      {
        question: "What cleaning products do you use in Prosper churches?",
        answer: "We use eco-friendly, professional-grade cleaning products that are safe for all ages and won't damage religious artifacts or delicate surfaces in Prosper."
      },
      {
        question: "Can you customize cleaning for Prosper churches?",
        answer: "Yes, we can customize our church cleaning service to focus on specific areas, special events, or particular cleaning priorities for Prosper congregations."
      }
    ],
    testimonial: {
      text: "Living in Prosper, I appreciate Red Rock Cleans' reliability and respect for our church space. Excellent service for our congregation.",
      author: "Father Thomas R., Prosper Catholic Church"
    }
  }
];

const ChurchCleaningDallasPage = () => {
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
        <title>Church Cleaning in Dallas | Red Rock Cleans</title>
        <meta name="description" content="Professional church cleaning services in Dallas. Red Rock Cleans provides respectful, detailed cleaning for places of worship in Plano, Frisco, and across the Dallas area." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <DallasNavigation />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative py-24 md:py-32 overflow-hidden">
            <div className="absolute inset-0">
              <img 
                src="/src/assets/hero-commercial.jpg" 
                alt="Professional church cleaning service in a beautiful Dallas sanctuary"
                className="w-full h-full object-cover scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                  Respectful & Professional Church Cleaning in Dallas
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                  Create a clean, welcoming, and healthy environment for the diverse congregations across the Dallas area. Our respectful church cleaning services maintain your sacred spaces with the reverence they deserve, serving communities from University Park to Plano and beyond.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="h-14 text-lg px-8" asChild>
                    <a href="tel:+19729922576">
                      <Phone className="w-5 h-5 mr-2" />
                      Call (972) 992-2576
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="h-14 text-lg px-8" asChild>
                    <Link to="/commercial-quote?location=dallas">
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
                        <BookOpen className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Respect for Sacred Spaces</h3>
                      <p className="text-muted-foreground text-sm">
                        Our team approaches every sanctuary, chapel, and sacred area with deep respect and understanding. We work discreetly and reverently, ensuring your worship space maintains its spiritual atmosphere while staying impeccably clean throughout the Dallas area.
                      </p>
                      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Sacred & Reverent →
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <HeartHandshake className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Health & Hygiene for Your Congregation</h3>
                      <p className="text-muted-foreground text-sm">
                        We use hospital-grade disinfectants and eco-friendly cleaning products to ensure a healthy environment for members of all ages. Our thorough sanitization protects your Dallas congregation while maintaining the integrity of your sacred spaces.
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
                        We work around your service schedules, special events, weddings, funerals, and office hours to minimize disruption to your congregation. Our flexible approach ensures your church activities continue uninterrupted across the Dallas metroplex.
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

          {/* Areas We Serve in Dallas */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  Areas We Serve in Dallas
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
                            <Link to="/commercial-quote?location=dallas">
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

          {/* Other Commercial Cleaning Services in Dallas */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  Other Commercial Cleaning Services in Dallas
                </h2>
                <p className="text-xl text-muted-foreground mb-12">
                  Beyond church cleaning, we offer specialized commercial cleaning services to meet all your Dallas facility needs.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <Link to="/dallas/school-cleaning/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors mb-4">
                        <Building2 className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        School Cleaning Services
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Professional cleaning for educational facilities, ensuring safe and healthy learning environments across Dallas.
                      </p>
                    </div>
                  </Link>
                  <Link to="/dallas/medical-office-cleaning/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors mb-4">
                        <Stethoscope className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Medical Office Cleaning Services
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Specialized cleaning for healthcare facilities with strict hygiene and safety standards in Dallas.
                      </p>
                    </div>
                  </Link>
                  <Link to="/dallas/gym-cleaning/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors mb-4">
                        <Dumbbell className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Gym Cleaning Services
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Professional gym and fitness center cleaning to maintain a healthy workout environment in Dallas.
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
                      <h3 className="text-lg font-semibold">What makes your church cleaning service different in Dallas?</h3>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <p className="text-muted-foreground">
                        We understand that churches are sacred spaces and require special care. Our Dallas team is trained to work with reverence and respect, using appropriate cleaning methods that honor the spiritual nature of your facility while ensuring thorough cleanliness. We serve diverse congregations across the Dallas metroplex with cultural sensitivity and professionalism.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2" className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <h3 className="text-lg font-semibold">How do you handle scheduling around church services and events in Dallas?</h3>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <p className="text-muted-foreground">
                        We work closely with your Dallas church staff to create a cleaning schedule that minimizes disruption. We can clean early mornings, evenings, or between services. For special events like weddings, funerals, or community gatherings, we can provide same-day or emergency cleaning services throughout the Dallas area.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3" className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <h3 className="text-lg font-semibold">What areas of the church do you clean?</h3>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <p className="text-muted-foreground">
                        We clean all areas of your Dallas church including sanctuaries, chapels, fellowship halls, offices, classrooms, nurseries, restrooms, and common areas. We can also clean special areas like baptismal fonts, altars, and religious artifacts with appropriate care and respect. Our comprehensive service ensures every space is welcoming and hygienic.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-4" className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <h3 className="text-lg font-semibold">Are your cleaners background-checked and trustworthy?</h3>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <p className="text-muted-foreground">
                        Yes, all our team members undergo thorough background checks and are fully insured and bonded. We understand the trust Dallas congregations place in us when we enter your sacred space, and we take that responsibility seriously. Our team is trained to work respectfully and maintain strict confidentiality in all church settings.
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
                  Join the Dallas churches that trust Red Rock Cleans for respectful, professional church cleaning services that honor your sacred space from Plano to Preston Hollow.
                </p>
                <Button size="lg" variant="secondary" className="h-14 text-lg px-8" asChild>
                  <Link to="/commercial-quote?location=dallas">
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

export default ChurchCleaningDallasPage;


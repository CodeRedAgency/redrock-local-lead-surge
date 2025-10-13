import { MauiNavigation } from "@/components/MauiNavigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BookOpen, HeartHandshake, Calendar, MapPin, Home, Building2, Stethoscope, Dumbbell } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";

const towns = [
  {
    id: "wailea",
    name: "Wailea",
    description: "Wailea churches and places of worship trust our professional cleaning service for maintaining sacred spaces that reflect the reverence and beauty of your faith community.",
    faq: [
      {
        question: "Do you work around Wailea worship schedules?",
        answer: "Yes, we schedule cleanings around your services, events, and office hours to ensure minimal disruption to your congregation and activities."
      },
      {
        question: "What if we're not satisfied with cleaning in Wailea?",
        answer: "We guarantee satisfaction and will return to address any concerns at no additional charge, understanding the sacred nature of your space."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our Wailea chapel with exceptional care and respect for over two years. Their attention to detail is outstanding!",
      author: "Pastor, Wailea Community Church"
    }
  },
  {
    id: "makena",
    name: "Makena",
    description: "Makena places of worship enjoy consistent, professional cleaning services that maintain their sacred facilities clean and welcoming for congregations year-round.",
    faq: [
      {
        question: "How often do Makena churches schedule cleaning?",
        answer: "Most Makena churches prefer weekly cleaning, though we offer flexible scheduling based on your worship schedule and special events."
      },
      {
        question: "Do you provide emergency cleaning services in Makena?",
        answer: "Yes, we offer emergency cleaning services for special events, unexpected situations, and urgent facility needs."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Makena sanctuary to perfection. Their professionalism and understanding of sacred spaces are outstanding.",
      author: "Facilities Director, Makena Faith Center"
    }
  },
  {
    id: "kihei",
    name: "Kihei",
    description: "Kihei churches rely on our professional cleaning service for consistent facility maintenance that keeps their places of worship operating smoothly and safely.",
    faq: [
      {
        question: "Do you service large churches in Kihei?",
        answer: "Yes, we have extensive experience cleaning churches of all sizes, including those with multiple buildings, fellowship halls, and educational facilities."
      },
      {
        question: "How do you ensure respectful cleaning in Kihei churches?",
        answer: "All our team members are trained in respectful cleaning practices, understanding the sacred nature of worship spaces and religious artifacts."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Kihei church spotless and welcoming for our congregation. Highly recommend their professional service!",
      author: "Church Administrator, Kihei Community Church"
    }
  },
  {
    id: "kapalua",
    name: "Kapalua",
    description: "Kapalua places of worship trust our professional cleaning service for consistent facility maintenance that keeps their sacred spaces pristine and welcoming.",
    faq: [
      {
        question: "Do you work around Kapalua worship schedules?",
        answer: "Yes, we can schedule cleanings around your services, special events, and operational requirements for your convenience and minimal disruption."
      },
      {
        question: "What if we're not satisfied with cleaning in Kapalua?",
        answer: "We guarantee satisfaction and will return to address any concerns at no additional charge, understanding the importance of your sacred space."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Kapalua chapel with exceptional respect and care. Their team is reliable and professional.",
      author: "Deacon, Kapalua Chapel"
    }
  },
  {
    id: "kaanapali",
    name: "Ka'anapali",
    description: "Ka'anapali churches enjoy consistent, professional cleaning services that maintain their facilities clean and welcoming at the highest standards year-round.",
    faq: [
      {
        question: "How often do Ka'anapali churches schedule cleaning?",
        answer: "Most Ka'anapali churches prefer weekly or bi-weekly cleaning, though we offer flexible scheduling based on your congregation's needs."
      },
      {
        question: "Do you provide emergency cleaning services in Ka'anapali?",
        answer: "Yes, we offer emergency cleaning services for special events, holidays, and urgent facility maintenance needs."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Ka'anapali sanctuary spotless and reverent. Highly recommend their service!",
      author: "Pastor, Ka'anapali Fellowship"
    }
  },
  {
    id: "lahaina",
    name: "Lahaina",
    description: "Lahaina places of worship rely on our professional cleaning service for consistent facility maintenance that keeps their sacred spaces operating smoothly.",
    faq: [
      {
        question: "Do you service historic churches in Lahaina?",
        answer: "Yes, we have experience cleaning historic churches with special care for antique furnishings, stained glass, and architectural details."
      },
      {
        question: "How do you ensure respectful cleaning in Lahaina churches?",
        answer: "All our team members are trained in respectful cleaning practices and understand the cultural significance of Lahaina's historic places of worship."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our historic Lahaina church with incredible care and respect. Their attention to detail is remarkable.",
      author: "Church Council Member, Lahaina Historic Church"
    }
  },
  {
    id: "spreckelsville",
    name: "Spreckelsville",
    description: "Spreckelsville churches trust our professional cleaning service for consistent facility maintenance that keeps their places of worship pristine and welcoming.",
    faq: [
      {
        question: "Do you work around Spreckelsville worship schedules?",
        answer: "Yes, we schedule cleanings around your services, events, and office hours to ensure minimal disruption to your congregation."
      },
      {
        question: "What if we're not satisfied with cleaning in Spreckelsville?",
        answer: "We guarantee satisfaction and will return to address any concerns at no additional charge, understanding the sacred nature of your space."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our Spreckelsville chapel for over a year with exceptional professionalism and care.",
      author: "Facilities Manager, Spreckelsville Community Church"
    }
  },
  {
    id: "paia",
    name: "Pa'ia",
    description: "Pa'ia places of worship enjoy consistent, professional cleaning services that maintain their sacred facilities clean and welcoming for congregations year-round.",
    faq: [
      {
        question: "How often do Pa'ia churches schedule cleaning?",
        answer: "Most Pa'ia churches prefer weekly cleaning, though we offer flexible scheduling based on your worship schedule and community events."
      },
      {
        question: "Do you provide emergency cleaning services in Pa'ia?",
        answer: "Yes, we offer emergency cleaning services for special events, unexpected situations, and urgent facility needs."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Pa'ia sanctuary to perfection. Their professionalism and respect for our space are outstanding.",
      author: "Pastor, Pa'ia Faith Community"
    }
  },
  {
    id: "kuau",
    name: "Kuau",
    description: "Kuau churches rely on our professional cleaning service for consistent facility maintenance that keeps their places of worship operating smoothly and safely.",
    faq: [
      {
        question: "Do you service small churches in Kuau?",
        answer: "Yes, we serve churches of all sizes, from intimate chapels to large multi-building facilities, with the same level of care and professionalism."
      },
      {
        question: "How do you ensure respectful cleaning in Kuau churches?",
        answer: "All our team members are trained in respectful cleaning practices, understanding the sacred nature of worship spaces and religious traditions."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Kuau chapel spotless and welcoming. Highly recommend their professional and respectful service!",
      author: "Church Administrator, Kuau Chapel"
    }
  },
  {
    id: "haiku",
    name: "Ha'iku",
    description: "Ha'iku places of worship trust our professional cleaning service for consistent facility maintenance that keeps their sacred spaces pristine and welcoming for their ohana.",
    faq: [
      {
        question: "Do you work around Ha'iku worship schedules?",
        answer: "Yes, we can schedule cleanings around your services, special events, and operational requirements for minimal disruption to your congregation."
      },
      {
        question: "What if we're not satisfied with cleaning in Ha'iku?",
        answer: "We guarantee satisfaction and will return to address any concerns at no additional charge, understanding the importance of your sacred space."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Ha'iku church with exceptional care and respect. Their team is reliable and professional.",
      author: "Deacon, Ha'iku Community Church"
    }
  }
];

const ChurchCleaningMauiPage = () => {
  const [openAccordion, setOpenAccordion] = useState<string>("");

  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash) {
      setOpenAccordion(hash);
    }
  }, []);

  const handleAccordionChange = (value: string) => {
    setOpenAccordion(value);
    window.location.hash = value;
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Church Cleaning Maui | Red Rock Cleans</title>
        <meta name="description" content="Professional church cleaning services on Maui. Red Rock Cleans provides respectful, detailed cleaning for places of worship in Wailea, Lahaina, and across the island." />
        <meta name="keywords" content="church cleaning near me, place of worship cleaning Maui, sanctuary cleaning Wailea, chapel cleaning Lahaina, best church cleaners Maui, professional church cleaning Maui, respectful religious facility cleaning, dependable church cleaners Kihei, church cleaning cost Maui, affordable church cleaning services Maui, what is included in church cleaning Maui, hire church cleaners in Maui" />
        <link rel="canonical" href="https://redrockcleans.com/maui/church-cleaning" />
      </Helmet>
      
      <MauiNavigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/src/assets/hero-commercial.jpg" 
              alt="Professional church cleaning service in a beautiful Maui place of worship"
              className="w-full h-full object-cover scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                Respectful & Professional Church Cleaning on Maui
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Creating a clean, welcoming, and healthy environment for congregations across the island of Maui is our sacred commitment. We understand that your place of worship is more than just a building—it's a sanctuary where your ohana gathers for fellowship, prayer, and spiritual growth. Our professional cleaning services ensure every corner reflects the reverence and care your sacred space deserves.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="h-14 text-lg px-8" asChild>
                  <Link to="/book-now-maui">
                    <Calendar className="w-5 h-5 mr-2" />
                    Get Your Free Quote
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="h-14 text-lg px-8" asChild>
                  <Link to="/contact">
                    <Home className="w-5 h-5 mr-2" />
                    Contact Us
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
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Respect for Sacred Spaces</h3>
                      <p className="text-muted-foreground">
                        Our team approaches every sanctuary, chapel, and sacred area with the utmost discretion and respect. We understand the spiritual significance of these spaces and clean with reverence, ensuring religious artifacts and furnishings are treated with appropriate care.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <HeartHandshake className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Health & Hygiene for Your Ohana</h3>
                      <p className="text-muted-foreground">
                        We use professional-grade disinfectants and cleaning solutions to ensure a healthy environment for members of all ages. Our thorough sanitization practices protect your congregation, from keiki to kupuna, creating a safe space for worship and fellowship.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Flexible Scheduling</h3>
                      <p className="text-muted-foreground">
                        We work around your worship services, events, Bible studies, and office hours to ensure minimal disruption. Whether you need cleaning before Sunday services or after special events, we accommodate your schedule with flexibility and reliability.
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
                Areas We Serve on Maui
              </h2>
              
              {/* Town Selector */}
              <div className="max-w-md mx-auto mb-12">
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    value={openAccordion}
                    onChange={(e) => {
                      const value = e.target.value;
                      setOpenAccordion(value);
                      window.location.hash = value;
                      // Scroll to the accordion item
                      setTimeout(() => {
                        const element = document.getElementById(value);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        }
                      }, 100);
                    }}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white text-gray-900"
                  >
                    <option value="">Select a Maui Town</option>
                    {towns.map((town) => (
                      <option key={town.id} value={town.id}>
                        {town.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              
              <Accordion type="single" value={openAccordion} onValueChange={handleAccordionChange} className="space-y-4">
                {towns.map((town) => (
                  <AccordionItem key={town.id} value={town.id} id={town.id} className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <div>
                        <h3 className="text-lg font-semibold">{town.name}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{town.description}</p>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold mb-2">Local Church Cleaning Services</h4>
                          <p className="text-muted-foreground">
                            {town.description}
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-2">Frequently Asked Questions</h4>
                          <div className="space-y-2">
                            {town.faq.map((faq, index) => (
                              <div key={index}>
                                <p className="font-medium text-sm">{faq.question}</p>
                                <p className="text-muted-foreground text-sm">{faq.answer}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="bg-primary/5 p-4 rounded-lg">
                          <p className="italic text-sm mb-2">"{town.testimonial.text}"</p>
                          <p className="text-sm font-medium">- {town.testimonial.author}</p>
                        </div>
                        
                        <Button asChild className="w-full">
                          <Link to="/book-now-maui">
                            Get Church Cleaning Quote for {town.name}
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
                Other Commercial Cleaning Services on Maui
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <Building2 className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">School Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Professional cleaning services for schools and educational facilities
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/maui/school-cleaning">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <Stethoscope className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Medical Office Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Hygienic cleaning services for medical offices and healthcare facilities
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/maui/medical-office-cleaning">Learn More</Link>
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
                      <Link to="/maui/gym-cleaning">Learn More</Link>
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
                <AccordionItem value="respect-sacred" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">How do you ensure respectful cleaning of sacred spaces?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      All our team members receive specialized training in respectful cleaning practices for places of worship. We understand the sacred nature of religious spaces and handle all furnishings, artifacts, and areas with appropriate care and reverence. Our staff is trained to be discreet and mindful of the spiritual significance of your sanctuary.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="scheduling" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">Can you work around our worship schedule?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Yes, we offer flexible scheduling to accommodate your worship services, special events, Bible studies, and office hours. We can clean before Sunday services, after events, or during weekdays—whatever works best for your congregation with minimal disruption to your activities.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="what-included" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">What is included in church cleaning on Maui?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Our church cleaning services include sanctuary and chapel cleaning, pew and seating sanitization, altar and pulpit care, fellowship hall cleaning, restroom sanitization, floor care (carpet and hard surfaces), window cleaning, and common area maintenance. We customize our services to meet your specific needs and respect the unique aspects of your place of worship.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="emergency-services" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">Do you offer emergency cleaning services?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Yes, we offer emergency cleaning services for unexpected situations, special holiday services, weddings, funerals, and other urgent facility needs. We understand that churches sometimes need immediate assistance, and we're available to help when you need us most.
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
              Ready to Create a Welcoming Space for Your Congregation?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join Maui churches that trust Red Rock Cleans for respectful, professional cleaning services
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
              <Link to="/book-now-maui">Get Your Free Church Cleaning Quote</Link>
            </Button>
          </div>
        </section>

        {/* Image Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <img 
                src="/static/service-products.jpg" 
                alt="A pristine and welcoming church sanctuary on Maui after professional cleaning by Red Rock Cleans"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ChurchCleaningMauiPage;

import { SouthFloridaNavigation } from "@/components/SouthFloridaNavigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BookOpen, HeartHandshake, Calendar, MapPin, Cross, Building, Heart, Phone, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";

const cities = [
  {
    id: "aventura",
    name: "Aventura",
    description: "Aventura's diverse religious communities trust our respectful church cleaning services to maintain welcoming sanctuaries that honor their sacred spaces and support their congregations.",
    faq: [
      {
        question: "Do you work around church services in Aventura?",
        answer: "Yes, we schedule cleanings around worship services, religious events, and office hours to ensure minimal disruption to your congregation's activities."
      },
      {
        question: "Are your cleaning products safe for religious artifacts in Aventura?",
        answer: "Absolutely. We use gentle, non-toxic cleaning solutions that are safe for delicate surfaces, religious artifacts, and the health of all congregants."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been caring for our Aventura sanctuary with reverence and professionalism for years. They understand the importance of our sacred space.",
      author: "Pastor Johnson, Aventura Community Church"
    }
  },
  {
    id: "cooper-city",
    name: "Cooper City",
    description: "Cooper City places of worship enjoy professional church cleaning services that maintain their facilities in pristine condition while respecting the sanctity of their sacred spaces.",
    faq: [
      {
        question: "How often do Cooper City churches schedule cleaning?",
        answer: "Most Cooper City churches prefer weekly or bi-weekly cleaning, though we offer flexible scheduling based on your congregation size and service frequency."
      },
      {
        question: "Do you clean fellowship halls and classrooms in Cooper City?",
        answer: "Yes, we provide comprehensive cleaning for sanctuaries, fellowship halls, Sunday school classrooms, offices, and all church facilities."
      }
    ],
    testimonial: {
      text: "The Red Rock Cleans team treats our Cooper City church with such care and respect. They're always professional and thorough.",
      author: "Administrator, Cooper City Faith Center"
    }
  },
  {
    id: "dania-beach",
    name: "Dania Beach",
    description: "Dania Beach religious facilities rely on our discreet and thorough church cleaning services to create welcoming environments for worship and community fellowship.",
    faq: [
      {
        question: "Can you handle large church facilities in Dania Beach?",
        answer: "Yes, we have experience cleaning churches of all sizes, from intimate chapels to large sanctuaries with multiple buildings and facilities."
      },
      {
        question: "Do you provide emergency cleaning in Dania Beach?",
        answer: "Yes, we offer emergency cleaning services for special events, holiday preparations, or unexpected situations at your place of worship."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans helped us prepare our Dania Beach sanctuary for our Easter services. The results were stunning and our congregation noticed immediately.",
      author: "Deacon Martinez, Dania Beach Chapel"
    }
  },
  {
    id: "davie",
    name: "Davie",
    description: "Davie churches trust our professional cleaning services to maintain healthy, welcoming environments that support their spiritual missions and community outreach programs.",
    faq: [
      {
        question: "What areas do you clean in Davie churches?",
        answer: "We clean all areas including sanctuaries, pews, altars, fellowship halls, restrooms, kitchens, offices, and outdoor gathering spaces."
      },
      {
        question: "Are your staff background-checked for Davie churches?",
        answer: "Yes, all our team members undergo thorough background checks and are trained to work respectfully in religious environments."
      }
    ],
    testimonial: {
      text: "Our Davie congregation appreciates the cleanliness and care Red Rock Cleans brings to our worship space every week.",
      author: "Church Administrator, Davie United Methodist"
    }
  },
  {
    id: "fort-lauderdale",
    name: "Fort Lauderdale",
    description: "Fort Lauderdale's vibrant religious community benefits from our specialized church cleaning services that honor sacred spaces while maintaining the highest standards of cleanliness.",
    faq: [
      {
        question: "Do you clean historic churches in Fort Lauderdale?",
        answer: "Yes, we have experience with historic places of worship and understand the special care required for older buildings and delicate architectural features."
      },
      {
        question: "Can you work with our Fort Lauderdale church's budget?",
        answer: "We offer flexible cleaning packages and custom solutions to fit various budgets while maintaining our high standards of service."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been instrumental in maintaining our historic Fort Lauderdale sanctuary. They're respectful, reliable, and thorough.",
      author: "Reverend Thompson, First Church of Fort Lauderdale"
    }
  },
  {
    id: "hallandale-beach",
    name: "Hallandale Beach",
    description: "Hallandale Beach places of worship enjoy consistent, respectful cleaning services that keep their facilities welcoming for congregants of all ages and backgrounds.",
    faq: [
      {
        question: "Do you clean synagogues in Hallandale Beach?",
        answer: "Yes, we serve all religious denominations and understand the unique cleaning requirements and customs of different faith traditions."
      },
      {
        question: "What's included in church cleaning in Hallandale Beach?",
        answer: "Our service includes sanctuary cleaning, pew polishing, floor care, restroom sanitization, kitchen cleaning, and office tidying."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans understands the needs of our Hallandale Beach congregation. Their service is always respectful and thorough.",
      author: "Facility Manager, Hallandale Beach Temple"
    }
  },
  {
    id: "hollywood",
    name: "Hollywood",
    description: "Hollywood religious facilities trust our professional church cleaning services to maintain pristine worship environments that reflect their commitment to community and faith.",
    faq: [
      {
        question: "Can you clean after special events in Hollywood?",
        answer: "Yes, we provide post-event cleaning for weddings, funerals, holiday services, and other special religious gatherings."
      },
      {
        question: "How do you ensure quality in Hollywood churches?",
        answer: "We use detailed checklists, conduct regular quality inspections, and maintain open communication with church leadership to ensure satisfaction."
      }
    ],
    testimonial: {
      text: "Our Hollywood church family loves coming to a clean, fresh-smelling sanctuary every Sunday thanks to Red Rock Cleans.",
      author: "Elder Williams, Hollywood Community Church"
    }
  },
  {
    id: "las-olas",
    name: "Las Olas",
    description: "Las Olas places of worship benefit from our detailed church cleaning services that maintain beautiful, welcoming spaces for worship and community fellowship.",
    faq: [
      {
        question: "Do you clean stained glass windows in Las Olas?",
        answer: "Yes, we have specialized training for cleaning stained glass windows and other delicate religious artwork and architectural features."
      },
      {
        question: "Can you accommodate last-minute cleaning in Las Olas?",
        answer: "We do our best to accommodate urgent cleaning needs and can often provide same-day or next-day service for our church clients."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans treats our Las Olas sanctuary with the reverence it deserves. Their attention to detail is exceptional.",
      author: "Priest Rodriguez, Las Olas Catholic Church"
    }
  },
  {
    id: "lauderdale-lakes",
    name: "Lauderdale Lakes",
    description: "Lauderdale Lakes churches rely on our compassionate cleaning services to create clean, healthy environments that support their spiritual missions and community programs.",
    faq: [
      {
        question: "What cleaning products do you use in Lauderdale Lakes churches?",
        answer: "We use eco-friendly, non-toxic cleaning products that are safe for children, elderly congregants, and people with sensitivities."
      },
      {
        question: "Do you offer discounts for Lauderdale Lakes churches?",
        answer: "We offer special pricing for religious organizations and work with each church to create a cleaning plan that fits their budget and needs."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been a blessing to our Lauderdale Lakes congregation. Our church always looks and smells fresh for services.",
      author: "Minister Davis, Lauderdale Lakes Baptist Church"
    }
  },
  {
    id: "lauderhill",
    name: "Lauderhill",
    description: "Lauderhill religious communities trust our professional church cleaning services to maintain welcoming, sanitary spaces that honor their sacred traditions.",
    faq: [
      {
        question: "How long does church cleaning take in Lauderhill?",
        answer: "Cleaning time varies based on facility size, but we work efficiently to complete the job without disrupting church activities or services."
      },
      {
        question: "Can we customize our cleaning plan in Lauderhill?",
        answer: "Absolutely! We create custom cleaning plans tailored to each church's specific needs, schedule, and priorities."
      }
    ],
    testimonial: {
      text: "Our Lauderhill church has never looked better. Red Rock Cleans is professional, respectful, and always thorough.",
      author: "Trustee Johnson, Lauderhill Community Church"
    }
  },
  {
    id: "margate",
    name: "Margate",
    description: "Margate places of worship enjoy dedicated church cleaning services that ensure every corner of their facilities reflects the care and respect their sacred spaces deserve.",
    faq: [
      {
        question: "Do you clean church nurseries in Margate?",
        answer: "Yes, we provide specialized cleaning and sanitization for church nurseries and children's areas to ensure the safety of young congregants."
      },
      {
        question: "What if we're not satisfied with the cleaning in Margate?",
        answer: "We guarantee your satisfaction and will return to address any concerns at no additional charge, ensuring your worship space meets your standards."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans understands that our Margate church is more than a building—it's a sacred space. They treat it accordingly.",
      author: "Reverend Lee, Margate Methodist Church"
    }
  },
  {
    id: "miramar",
    name: "Miramar",
    description: "Miramar churches benefit from our respectful, thorough cleaning services that maintain pristine worship environments for their growing congregations.",
    faq: [
      {
        question: "Do you clean multi-purpose church facilities in Miramar?",
        answer: "Yes, we clean all church spaces including worship areas, gymnasiums, cafeterias, classrooms, and administrative offices."
      },
      {
        question: "How do you handle sensitive religious items in Miramar?",
        answer: "Our team is trained to identify and carefully handle religious artifacts, texts, and ceremonial items with the utmost respect and care."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been serving our Miramar church for years. They're reliable, professional, and always respectful of our faith.",
      author: "Administrator Garcia, Miramar Christian Center"
    }
  },
  {
    id: "north-lauderdale",
    name: "North Lauderdale",
    description: "North Lauderdale religious facilities trust our professional cleaning services to create welcoming, healthy environments for worship, fellowship, and community service.",
    faq: [
      {
        question: "Can you clean outdoor church areas in North Lauderdale?",
        answer: "Yes, we provide cleaning for outdoor worship spaces, courtyards, fellowship areas, and other exterior church facilities."
      },
      {
        question: "Do you work with church volunteers in North Lauderdale?",
        answer: "We're happy to coordinate with church volunteers and can provide training or guidance for volunteer cleaning teams as needed."
      }
    ],
    testimonial: {
      text: "Our North Lauderdale congregation appreciates the cleanliness and care Red Rock Cleans brings every week. Highly recommended!",
      author: "Deacon Brown, North Lauderdale Church of God"
    }
  },
  {
    id: "pembroke-pines",
    name: "Pembroke Pines",
    description: "Pembroke Pines places of worship rely on our compassionate cleaning services to maintain sacred spaces that support their spiritual missions and community outreach.",
    faq: [
      {
        question: "What makes your church cleaning different in Pembroke Pines?",
        answer: "We combine professional cleaning expertise with deep respect for religious spaces, understanding that churches require special care and discretion."
      },
      {
        question: "Do you provide weekly cleaning in Pembroke Pines?",
        answer: "Yes, we offer weekly, bi-weekly, or custom cleaning schedules to meet the specific needs of Pembroke Pines congregations."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans treats our Pembroke Pines sanctuary with reverence and professionalism. We couldn't ask for better service.",
      author: "Pastor Mitchell, Pembroke Pines Assembly"
    }
  },
  {
    id: "plantation",
    name: "Plantation",
    description: "Plantation churches enjoy professional cleaning services that maintain beautiful worship spaces while respecting the sacred nature of their religious facilities.",
    faq: [
      {
        question: "How do you ensure confidentiality in Plantation churches?",
        answer: "Our team members are trained in confidentiality and discretion, understanding the sensitive nature of religious environments and private church matters."
      },
      {
        question: "Can you clean during off-hours in Plantation?",
        answer: "Yes, we offer flexible scheduling including evening and weekend cleaning to work around your church's service times and activities."
      }
    ],
    testimonial: {
      text: "Our Plantation church family loves the fresh, clean environment Red Rock Cleans maintains for us every week.",
      author: "Church Secretary, Plantation Presbyterian"
    }
  },
  {
    id: "southwest-ranches",
    name: "Southwest Ranches",
    description: "Southwest Ranches religious communities trust our detailed church cleaning services to maintain welcoming, sanitary facilities that honor their faith traditions.",
    faq: [
      {
        question: "Do you serve all denominations in Southwest Ranches?",
        answer: "Yes, we serve churches, synagogues, mosques, temples, and all places of worship, respecting the unique traditions of each faith."
      },
      {
        question: "What's your cleaning process for Southwest Ranches churches?",
        answer: "We follow a comprehensive checklist covering all areas, use appropriate products for each surface, and maintain respectful protocols throughout."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been a blessing to our Southwest Ranches congregation. Professional, respectful, and always thorough.",
      author: "Elder Thompson, Southwest Ranches Community Church"
    }
  },
  {
    id: "sunny-isles-beach",
    name: "Sunny Isles Beach",
    description: "Sunny Isles Beach places of worship benefit from our respectful cleaning services that ensure their facilities remain pristine and welcoming for all congregants.",
    faq: [
      {
        question: "Can you handle high-traffic churches in Sunny Isles Beach?",
        answer: "Yes, we have experience with high-traffic religious facilities and can adjust our cleaning frequency and approach to meet increased demand."
      },
      {
        question: "Do you clean after holiday services in Sunny Isles Beach?",
        answer: "Absolutely! We provide special cleaning services for high holy days, holidays, and major religious celebrations."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans understands the importance of maintaining our Sunny Isles Beach sanctuary. Their service is exceptional.",
      author: "Facility Director, Sunny Isles Beach Synagogue"
    }
  },
  {
    id: "sunrise",
    name: "Sunrise",
    description: "Sunrise churches rely on our professional cleaning services to create clean, healthy worship environments that reflect their commitment to their congregations.",
    faq: [
      {
        question: "What areas receive special attention in Sunrise churches?",
        answer: "We pay special attention to high-touch surfaces, pews, altars, fellowship halls, restrooms, and children's areas to ensure thorough sanitization."
      },
      {
        question: "Do you offer green cleaning for Sunrise churches?",
        answer: "Yes, we use eco-friendly, non-toxic cleaning products that are safe for the environment and all members of your congregation."
      }
    ],
    testimonial: {
      text: "Our Sunrise congregation has noticed the difference since partnering with Red Rock Cleans. The church always sparkles!",
      author: "Minister Jackson, Sunrise Church of Christ"
    }
  },
  {
    id: "tamarac",
    name: "Tamarac",
    description: "Tamarac religious facilities enjoy consistent, professional church cleaning that maintains welcoming spaces for worship, fellowship, and community programs.",
    faq: [
      {
        question: "How do you price church cleaning in Tamarac?",
        answer: "We provide transparent, customized pricing based on your facility size, cleaning frequency, and specific needs, with special rates for religious organizations."
      },
      {
        question: "Can you clean our Tamarac church kitchen?",
        answer: "Yes, we provide thorough cleaning and sanitization of church kitchens, including appliances, counters, floors, and food preparation areas."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been caring for our Tamarac church with professionalism and respect. We highly recommend their services.",
      author: "Trustee Martinez, Tamarac Bible Church"
    }
  },
  {
    id: "weston",
    name: "Weston",
    description: "Weston places of worship trust our dedicated church cleaning services to maintain sacred spaces that support spiritual growth and community fellowship.",
    faq: [
      {
        question: "Do you provide move-in cleaning for new Weston churches?",
        answer: "Yes, we offer comprehensive move-in and renovation cleaning services for churches relocating or opening new facilities in Weston."
      },
      {
        question: "How quickly can you respond to cleaning needs in Weston?",
        answer: "We strive to respond to all inquiries within 24 hours and can often accommodate urgent cleaning needs within 1-2 business days."
      }
    ],
    testimonial: {
      text: "Our Weston congregation appreciates the reverence and care Red Rock Cleans brings to our worship space every week.",
      author: "Pastor Robinson, Weston Faith Community"
    }
  }
];

const ChurchCleaningSouthFloridaPage = () => {
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
        <title>Church Cleaning South Florida | Red Rock Cleans</title>
        <meta name="description" content="Professional church cleaning services in South Florida. Red Rock Cleans provides respectful, detailed cleaning for places of worship in Fort Lauderdale, Weston, and across the region." />
        <meta name="keywords" content="church cleaning South Florida, church cleaning near me, place of worship cleaning South Florida, sanctuary cleaning Fort Lauderdale, chapel cleaning Weston FL, best church cleaners South Florida, professional church cleaning Broward County, respectful religious facility cleaning, dependable church cleaners Fort Lauderdale, church cleaning cost South Florida, affordable church cleaning services South Florida, what is included in church cleaning South Florida, hire church cleaners in Broward County" />
        <link rel="canonical" href="https://redrockcleans.com/south-florida/church-cleaning" />
      </Helmet>
      
      <SouthFloridaNavigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/src/assets/hero-commercial.jpg" 
              alt="Professional church cleaning service in a South Florida sanctuary"
              className="w-full h-full object-cover scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                Respectful & Professional Church Cleaning in South Florida
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Creating clean, welcoming, and healthy environments for the diverse congregations across South Florida. Our respectful cleaning services honor the sacred nature of your place of worship while maintaining the highest standards of cleanliness and care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="h-14 text-lg px-8" asChild>
                  <a href="tel:+19544698881">
                    <Phone className="w-5 h-5 mr-2" />
                    Call (954) 469-8881
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="h-14 text-lg px-8" asChild>
                  <Link to="/commercial-quote?location=south-florida">
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
                        Our team approaches every sanctuary, chapel, and sacred area with the utmost discretion and reverence. We understand that your place of worship is more than just a building—it's a cornerstone of faith and community that deserves special care and attention.
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
                        We use professional-grade disinfectants and eco-friendly cleaning solutions to create a healthy environment for congregants of all ages. From sanctuary pews to fellowship halls, we ensure every surface is thoroughly sanitized to protect your community's wellbeing.
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
                        We work around your worship services, religious events, and office hours to minimize disruption. Whether you need weekly cleaning, special event preparation, or holiday deep cleaning, we schedule our services at times most convenient for your congregation.
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
                Areas We Serve in South Florida
              </h2>
              
              {/* City Selector */}
              <div className="max-w-md mx-auto mb-12">
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    value={openAccordion}
                    onChange={(e) => {
                      const value = e.target.value;
                      setOpenAccordion(value);
                      window.location.hash = value;
                      setTimeout(() => {
                        const element = document.getElementById(value);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        }
                      }, 100);
                    }}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white text-gray-900"
                  >
                    <option value="">Select a South Florida Area</option>
                    {cities.map((city) => (
                      <option key={city.id} value={city.id}>
                        {city.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              
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
                          <Link to="/commercial-quote?location=south-florida">
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
                Other Commercial Cleaning Services in South Florida
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
                      <Link to="/south-florida/school-cleaning">Learn More</Link>
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
                      <Link to="/south-florida/medical-office-cleaning">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <HeartHandshake className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Gym Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Hygienic cleaning services for fitness centers and health clubs
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/south-florida/gym-cleaning">Learn More</Link>
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
                    <h3 className="text-lg font-semibold">What is included in church cleaning services in South Florida?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Our comprehensive church cleaning services include sanctuary cleaning, pew polishing, altar care, floor maintenance, restroom sanitization, fellowship hall cleaning, kitchen cleaning, office tidying, window washing, and trash removal. We also provide special attention to religious artifacts and delicate surfaces, ensuring everything is handled with care and respect.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="cost" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">How much does church cleaning cost in South Florida?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Church cleaning costs vary based on facility size, cleaning frequency, and specific needs. We offer competitive, transparent pricing with special rates for religious organizations. Most South Florida churches invest between $150-$500 per cleaning session, depending on their requirements. We provide free, customized quotes to ensure our services fit within your congregation's budget.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="denominations" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">Do you serve all religious denominations?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Yes, we proudly serve all religious denominations and faith traditions throughout South Florida, including churches, synagogues, mosques, temples, and other places of worship. Our team is trained to understand and respect the unique customs, requirements, and sacred practices of each faith community we serve.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="schedule" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">Can you work around our worship schedule?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Absolutely! We offer flexible scheduling to accommodate your worship services, religious events, office hours, and special celebrations. We can clean during weekday mornings, evenings, or weekends—whatever works best for your congregation. Our goal is to maintain your sacred space without disrupting your religious activities.
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
              Join South Florida congregations that trust Red Rock Cleans for respectful, professional church cleaning services
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
              <Link to="/commercial-quote">Get Your Free Church Cleaning Quote</Link>
            </Button>
          </div>
        </section>

        {/* Image Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <img 
                src="/static/service-products.jpg" 
                alt="A pristine and welcoming church sanctuary in South Florida after professional cleaning by Red Rock Cleans"
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

export default ChurchCleaningSouthFloridaPage;


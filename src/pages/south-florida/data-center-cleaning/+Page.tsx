import { SouthFloridaNavigation } from "@/components/SouthFloridaNavigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Microchip, Award, Clock, Grid, Server, Sprout, Database, TrendingUp, ShieldCheck, MapPin, Calendar, Factory, Building2, Heart, Phone, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import CountUp from "react-countup";

const cities = [
  {
    id: "aventura",
    name: "Aventura",
    description: "Aventura's growing tech sector relies on our specialized data center cleaning to protect critical infrastructure from South Florida's challenging climate conditions.",
    faq: [
      {
        question: "Do you offer 24/7 data center cleaning in Aventura?",
        answer: "Yes, we provide flexible scheduling including overnight and weekend cleaning to minimize disruption to your Aventura data center operations."
      },
      {
        question: "Are your cleaners certified for Aventura cleanroom environments?",
        answer: "Absolutely. Our team is trained in ISO 14644-1 standards and certified for critical environment cleaning in data centers."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans understands the critical nature of our Aventura data center. Their specialized cleaning keeps our hardware running flawlessly.",
      author: "IT Director, Aventura Cloud Services"
    }
  },
  {
    id: "cooper-city",
    name: "Cooper City",
    description: "Cooper City businesses trust our precision data center cleaning services to maintain optimal conditions for their mission-critical server environments.",
    faq: [
      {
        question: "How often should Cooper City data centers be cleaned?",
        answer: "Most Cooper City data centers benefit from quarterly deep cleaning with monthly maintenance, though frequency depends on environmental factors and equipment sensitivity."
      },
      {
        question: "Do you clean raised floors in Cooper City?",
        answer: "Yes, our comprehensive service includes specialized sub-floor vacuuming and cleaning to remove dust accumulation beneath raised flooring systems."
      }
    ],
    testimonial: {
      text: "Our Cooper City server room has never been cleaner. Red Rock Cleans' attention to detail is exceptional and our uptime has improved.",
      author: "Facility Manager, Cooper City Tech Hub"
    }
  },
  {
    id: "dania-beach",
    name: "Dania Beach",
    description: "Dania Beach data centers benefit from our anti-static cleaning protocols that protect sensitive equipment from contamination and environmental threats.",
    faq: [
      {
        question: "What makes data center cleaning different in Dania Beach?",
        answer: "South Florida's humidity and salt air require specialized protocols. We use anti-static tools and HEPA filtration to protect your equipment."
      },
      {
        question: "Can you handle emergency cleaning in Dania Beach?",
        answer: "Yes, we offer emergency response services for post-storm cleanup, equipment relocations, or unexpected contamination events."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans helped us recover after a humidity issue in our Dania Beach facility. Their expertise saved our equipment.",
      author: "Operations Manager, Dania Beach Data Solutions"
    }
  },
  {
    id: "davie",
    name: "Davie",
    description: "Davie's technology infrastructure relies on our ISO-compliant cleaning services to maintain contamination-free environments for sensitive computing equipment.",
    faq: [
      {
        question: "What areas do you clean in Davie data centers?",
        answer: "We clean server racks, cable management systems, raised floors, sub-floors, walls, ceilings, cooling systems, and all environmental surfaces."
      },
      {
        question: "Are your products safe for Davie server equipment?",
        answer: "Yes, we use anti-static, non-conductive cleaning solutions specifically designed for sensitive electronic environments."
      }
    ],
    testimonial: {
      text: "Our Davie data center passes every inspection thanks to Red Rock Cleans. They understand the unique requirements of our environment.",
      author: "Chief Engineer, Davie Hosting Services"
    }
  },
  {
    id: "fort-lauderdale",
    name: "Fort Lauderdale",
    description: "Fort Lauderdale's enterprise data centers trust our specialized cleaning to prevent downtime and protect millions of dollars in critical infrastructure investments.",
    faq: [
      {
        question: "Do you follow ISO 14644-1 standards in Fort Lauderdale?",
        answer: "Absolutely. We adhere to ISO 14644-1 cleanroom standards and maintain detailed documentation of all cleaning procedures and particle counts."
      },
      {
        question: "How do you prevent static in Fort Lauderdale data centers?",
        answer: "We use anti-static equipment, grounded tools, and specialized cleaning materials to eliminate static electricity risks to your hardware."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans is our trusted partner for our Fort Lauderdale data center. Their precision and professionalism are unmatched.",
      author: "VP of Operations, Fort Lauderdale Enterprise Systems"
    }
  },
  {
    id: "hallandale-beach",
    name: "Hallandale Beach",
    description: "Hallandale Beach server rooms benefit from our contamination control expertise that prevents dust, humidity, and particulate buildup in critical environments.",
    faq: [
      {
        question: "What's included in Hallandale Beach data center cleaning?",
        answer: "Our service includes raised floor cleaning, server rack detailing, cable management cleaning, HVAC filter replacement, and complete environmental surface disinfection."
      },
      {
        question: "Do you provide cleaning reports in Hallandale Beach?",
        answer: "Yes, we provide detailed cleaning reports, particle count measurements, and compliance documentation for your facility management records."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Hallandale Beach server room to perfection. Our equipment runs cooler and more efficiently now.",
      author: "IT Manager, Hallandale Beach Financial Systems"
    }
  },
  {
    id: "hollywood",
    name: "Hollywood",
    description: "Hollywood's digital infrastructure depends on our meticulous data center cleaning to ensure optimal performance in South Florida's demanding climate.",
    faq: [
      {
        question: "Can you clean during operating hours in Hollywood?",
        answer: "Yes, we can work around your operations schedule with minimal disruption, though we recommend scheduled maintenance windows for optimal results."
      },
      {
        question: "How do you handle security in Hollywood data centers?",
        answer: "All our technicians undergo background checks and sign NDAs. We work closely with your security protocols and access requirements."
      }
    ],
    testimonial: {
      text: "Our Hollywood data center uptime has improved significantly since partnering with Red Rock Cleans. Highly professional service.",
      author: "Director of IT, Hollywood Cloud Infrastructure"
    }
  },
  {
    id: "las-olas",
    name: "Las Olas",
    description: "Las Olas businesses rely on our precision cleaning services to protect their data center investments from environmental contamination and equipment failure.",
    faq: [
      {
        question: "Do you clean cooling systems in Las Olas data centers?",
        answer: "Yes, we clean CRAC units, air handlers, and cooling infrastructure as part of our comprehensive environmental control maintenance."
      },
      {
        question: "What's your response time for Las Olas emergencies?",
        answer: "We maintain 24-hour emergency response capability and can typically deploy to Las Olas facilities within 2-4 hours of contact."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans' expertise has been invaluable to our Las Olas facility. They understand the criticality of our operations.",
      author: "Facility Director, Las Olas Data Services"
    }
  },
  {
    id: "lauderdale-lakes",
    name: "Lauderdale Lakes",
    description: "Lauderdale Lakes data centers trust our specialized cleaning protocols to maintain cleanroom conditions and prevent costly equipment failures.",
    faq: [
      {
        question: "What certifications do your Lauderdale Lakes cleaners have?",
        answer: "Our technicians are certified in cleanroom protocols, anti-static procedures, and critical environment cleaning standards."
      },
      {
        question: "Do you offer preventive maintenance in Lauderdale Lakes?",
        answer: "Yes, we provide scheduled preventive cleaning programs tailored to your equipment sensitivity and environmental conditions."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has transformed our Lauderdale Lakes server room. The difference in air quality and equipment performance is remarkable.",
      author: "Systems Administrator, Lauderdale Lakes Tech Center"
    }
  },
  {
    id: "lauderhill",
    name: "Lauderhill",
    description: "Lauderhill's technology sector depends on our comprehensive data center cleaning to protect against South Florida's humidity, dust, and environmental challenges.",
    faq: [
      {
        question: "How do you measure cleanliness in Lauderhill data centers?",
        answer: "We use particle counters and environmental monitoring to verify ISO 14644-1 compliance and document contamination levels."
      },
      {
        question: "Can you help with Lauderhill data center relocations?",
        answer: "Yes, we provide pre-move cleaning, transport preparation, and post-installation cleaning for data center equipment relocations."
      }
    ],
    testimonial: {
      text: "Our Lauderhill facility has never looked better. Red Rock Cleans' systematic approach ensures nothing is overlooked.",
      author: "Infrastructure Manager, Lauderhill Systems Group"
    }
  },
  {
    id: "margate",
    name: "Margate",
    description: "Margate businesses rely on our ISO-compliant data center cleaning to ensure their critical infrastructure operates at peak efficiency year-round.",
    faq: [
      {
        question: "What's the cost of data center cleaning in Margate?",
        answer: "Costs vary based on facility size and cleaning frequency. Most Margate facilities invest $500-$2,000 per cleaning. We provide free customized quotes."
      },
      {
        question: "Do you clean white space only in Margate?",
        answer: "We clean both white space (server areas) and gray space (support infrastructure) to ensure complete environmental control."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Margate data center to the highest standards. Their expertise gives us complete confidence.",
      author: "COO, Margate Managed Services"
    }
  },
  {
    id: "miramar",
    name: "Miramar",
    description: "Miramar's growing data center market trusts our specialized cleaning expertise to prevent contamination and maintain optimal operating conditions.",
    faq: [
      {
        question: "How often should Miramar server rooms be cleaned?",
        answer: "We recommend quarterly deep cleaning with monthly touch-ups, though high-density facilities may require more frequent service."
      },
      {
        question: "Do you clean during Miramar business hours?",
        answer: "We offer flexible scheduling including evenings, weekends, and planned maintenance windows to suit your operational needs."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans understands the unique challenges of our Miramar facility. Professional, thorough, and always reliable.",
      author: "Data Center Manager, Miramar Hosting Solutions"
    }
  },
  {
    id: "north-lauderdale",
    name: "North Lauderdale",
    description: "North Lauderdale data centers benefit from our contamination control protocols that protect expensive hardware from dust, humidity, and particulate damage.",
    faq: [
      {
        question: "What equipment do you use in North Lauderdale?",
        answer: "We use HEPA-filtered vacuums, anti-static tools, and specialized cleaning solutions designed specifically for critical environments."
      },
      {
        question: "Can you handle large North Lauderdale facilities?",
        answer: "Yes, we have experience with facilities ranging from small server rooms to enterprise-scale data centers with thousands of square feet."
      }
    ],
    testimonial: {
      text: "Our North Lauderdale data center performance has improved dramatically since implementing Red Rock Cleans' maintenance program.",
      author: "VP of Technology, North Lauderdale Networks"
    }
  },
  {
    id: "pembroke-pines",
    name: "Pembroke Pines",
    description: "Pembroke Pines technology infrastructure relies on our precision cleaning to maintain contamination-free environments critical for sensitive computing equipment.",
    faq: [
      {
        question: "Do you provide emergency services in Pembroke Pines?",
        answer: "Yes, we offer 24/7 emergency response for water damage, contamination events, or urgent cleaning needs in Pembroke Pines facilities."
      },
      {
        question: "How do you ensure quality in Pembroke Pines?",
        answer: "We follow detailed checklists, use particle monitoring, and provide comprehensive documentation of all cleaning procedures."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans is our trusted partner for our Pembroke Pines data center. Their expertise is invaluable to our operations.",
      author: "Director of Facilities, Pembroke Pines Enterprise Group"
    }
  },
  {
    id: "plantation",
    name: "Plantation",
    description: "Plantation's digital backbone depends on our systematic data center cleaning to prevent equipment failure and maintain optimal operating conditions.",
    faq: [
      {
        question: "What makes your Plantation service unique?",
        answer: "We combine ISO 14644-1 compliance with deep understanding of South Florida's environmental challenges to deliver superior protection."
      },
      {
        question: "Do you clean cable management in Plantation?",
        answer: "Yes, we clean and organize cable management systems, including overhead trays, under-floor pathways, and vertical management."
      }
    ],
    testimonial: {
      text: "Our Plantation server room has never been in better condition. Red Rock Cleans delivers exceptional results every time.",
      author: "IT Director, Plantation Technology Services"
    }
  },
  {
    id: "southwest-ranches",
    name: "Southwest Ranches",
    description: "Southwest Ranches businesses trust our specialized data center cleaning to protect their technology investments from environmental contamination.",
    faq: [
      {
        question: "How long does cleaning take in Southwest Ranches?",
        answer: "Cleaning time varies by facility size. Typical server rooms take 4-8 hours, while larger data centers may require 1-2 days."
      },
      {
        question: "Do you provide maintenance plans in Southwest Ranches?",
        answer: "Yes, we offer customized preventive maintenance programs with scheduled cleaning at frequencies that match your needs and budget."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our Southwest Ranches facility for years. Consistently excellent service and results.",
      author: "Operations Manager, Southwest Ranches IT Solutions"
    }
  },
  {
    id: "sunny-isles-beach",
    name: "Sunny Isles Beach",
    description: "Sunny Isles Beach data centers rely on our contamination control expertise to combat salt air, humidity, and environmental challenges unique to coastal locations.",
    faq: [
      {
        question: "How do you handle coastal conditions in Sunny Isles Beach?",
        answer: "We use specialized protocols for coastal facilities, including enhanced anti-corrosion measures and increased cleaning frequency recommendations."
      },
      {
        question: "What's your service area in Sunny Isles Beach?",
        answer: "We serve all of Sunny Isles Beach and surrounding areas with rapid response times and flexible scheduling options."
      }
    ],
    testimonial: {
      text: "The salt air challenges of our Sunny Isles Beach location require specialized care. Red Rock Cleans delivers perfectly.",
      author: "Facilities Chief, Sunny Isles Beach Data Hub"
    }
  },
  {
    id: "sunrise",
    name: "Sunrise",
    description: "Sunrise's technology sector depends on our precision data center cleaning to ensure maximum uptime and protect critical infrastructure investments.",
    faq: [
      {
        question: "Do you clean air handling systems in Sunrise?",
        answer: "Yes, we clean CRAC units, air handlers, filters, and ventilation systems as part of comprehensive environmental control."
      },
      {
        question: "What's included in Sunrise data center cleaning?",
        answer: "Our service includes raised floors, server racks, cable management, environmental surfaces, cooling systems, and complete documentation."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans' systematic approach to our Sunrise data center has dramatically improved our equipment reliability and lifespan.",
      author: "Engineering Director, Sunrise Cloud Services"
    }
  },
  {
    id: "tamarac",
    name: "Tamarac",
    description: "Tamarac businesses benefit from our ISO-compliant cleaning protocols that maintain cleanroom conditions and prevent costly downtime in critical facilities.",
    faq: [
      {
        question: "How do you price data center cleaning in Tamarac?",
        answer: "We provide transparent, customized pricing based on facility size, cleaning frequency, and specific requirements. Free quotes available."
      },
      {
        question: "Can you work with our Tamarac security requirements?",
        answer: "Absolutely. Our team is experienced with strict security protocols, background checks, NDAs, and access control requirements."
      }
    ],
    testimonial: {
      text: "Our Tamarac facility requires the highest standards. Red Rock Cleans consistently exceeds our expectations.",
      author: "VP of Infrastructure, Tamarac Technology Group"
    }
  },
  {
    id: "weston",
    name: "Weston",
    description: "Weston's enterprise data centers trust our specialized cleaning expertise to protect millions in infrastructure investments from South Florida's environmental challenges.",
    faq: [
      {
        question: "What certifications does your Weston team have?",
        answer: "Our Weston technicians are certified in ISO 14644-1 cleanroom standards, anti-static protocols, and critical environment procedures."
      },
      {
        question: "Do you offer ongoing support in Weston?",
        answer: "Yes, we provide scheduled maintenance programs, emergency response services, and ongoing consultation for your Weston facility."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been our Weston data center partner for years. Their expertise and reliability are essential to our operations.",
      author: "Chief Technology Officer, Weston Enterprise Solutions"
    }
  }
];

const DataCenterCleaningSouthFloridaPage = () => {
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
        <title>Data Center Cleaning South Florida | Red Rock Cleans</title>
        <meta name="description" content="Specialized data center cleaning in South Florida. Red Rock Cleans offers ISO 14644-1 compliant server room, sub-floor, and critical environment cleaning in Fort Lauderdale and Weston to ensure uptime." />
        <meta name="keywords" content="data center cleaning South Florida, data center cleaning near me, server room cleaning South Florida, critical environment cleaning Fort Lauderdale, raised floor cleaning Weston FL, professional data center cleaners South Florida, ISO 14644-1 cleaning Fort Lauderdale, anti-static cleaning South Florida, sub-floor cleaning Broward County, data center cleaning cost South Florida, data center maintenance services Fort Lauderdale, data center cleaning checklist South Florida, hire data center cleaning services in South Florida" />
        <link rel="canonical" href="https://redrockcleans.com/south-florida/data-center-cleaning" />
      </Helmet>
      
      <SouthFloridaNavigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/src/assets/hero-commercial.jpg" 
              alt="Professional data center cleaning service in a South Florida server room"
              className="w-full h-full object-cover scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                Specialized Data Center Cleaning in South Florida
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                In South Florida's challenging climate, specialized data center cleaning plays a critical role in protecting sensitive hardware from humidity, dust, and potential storm-related contamination. Our ISO 14644-1 compliant cleaning protocols ensure maximum uptime and protect your mission-critical infrastructure investments from environmental threats that can compromise performance and reliability.
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

        {/* Protecting South Florida's Critical Infrastructure Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Protecting South Florida's Critical Infrastructure
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Microchip className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Precision Contamination Control</h3>
                      <p className="text-muted-foreground">
                        Our advanced cleaning methods prevent dust, humidity, and static electricity from compromising your hardware. Using HEPA filtration, anti-static tools, and cleanroom protocols, we eliminate particulate contamination that can cause overheating, short circuits, and premature equipment failure in South Florida's demanding environment.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">ISO & Industry Compliance</h3>
                      <p className="text-muted-foreground">
                        We adhere strictly to ISO 14644-1 standards for cleanroom environments, ensuring your data center meets the most rigorous industry requirements. Our documented procedures, particle count verification, and compliance reporting provide the evidence you need for audits, certifications, and operational excellence.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Minimizing Downtime Risk</h3>
                      <p className="text-muted-foreground">
                        Proactive cleaning prevents the overheating and system failures that plague South Florida data centers. By maintaining optimal airflow, reducing dust accumulation on cooling systems, and preventing contamination buildup, we help you maximize uptime and protect your business continuity in our challenging subtropical climate.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Comprehensive Data Center Cleaning Protocol Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Our Comprehensive Data Center Cleaning Protocol
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Grid className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Raised Floor & Sub-Floor Cleaning</h3>
                      <p className="text-muted-foreground">
                        We employ specialized HEPA-filtered vacuuming systems to remove accumulated dust, debris, and particulate matter from beneath raised flooring. Our technicians clean plenum spaces, cable pathways, and sub-floor supports to ensure optimal airflow and prevent contamination from circulating through your cooling systems.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Server className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Server Rack & Equipment Detailing</h3>
                      <p className="text-muted-foreground">
                        Using anti-static cleaning solutions and tools, we meticulously clean server exteriors, cable management systems, rack frames, and equipment surfaces. Our careful approach removes dust and contamination without risking static discharge or damage to sensitive components, ensuring your hardware remains protected and operating efficiently.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Sprout className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Environmental Surface Disinfection</h3>
                      <p className="text-muted-foreground">
                        We clean and disinfect all environmental surfaces including walls, ceilings, access doors, windows, and HVAC components using appropriate cleanroom-grade solutions. This comprehensive approach prevents contamination sources from compromising your controlled environment and maintains the integrity of your critical infrastructure space.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Commitment to South Florida's Digital Backbone Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Our Commitment to South Florida's Digital Backbone
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Database className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    <CountUp end={150} duration={2} />+
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Data Centers Secured in FL</h3>
                  <p className="text-muted-foreground text-sm">
                    South Florida businesses trust our specialized cleaning expertise
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
                  <h3 className="text-lg font-semibold mb-2">Uptime Percentage Maintained</h3>
                  <p className="text-muted-foreground text-sm">
                    Our cleaning protocols help clients achieve maximum reliability
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ShieldCheck className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    <CountUp end={25} duration={2} />+
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Certified Cleanroom Specialists</h3>
                  <p className="text-muted-foreground text-sm">
                    ISO 14644-1 trained technicians serving South Florida
                  </p>
                </div>
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
                          <h4 className="font-semibold mb-2">Data Center Cleaning Services in {city.name}</h4>
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
                            Get Data Center Cleaning Quote for {city.name}
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
                Other Specialized Commercial Cleaning in South Florida
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <Factory className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Industrial Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Professional cleaning services for industrial facilities and manufacturing plants
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/south-florida/industrial-cleaning">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <Building2 className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Government Facility Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Specialized cleaning for government buildings and public facilities
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/south-florida/government-facility-cleaning">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <Heart className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Medical Office Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Healthcare-grade cleaning for medical offices and clinics
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/south-florida/medical-office-cleaning">Learn More</Link>
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
                    <h3 className="text-lg font-semibold">What's on a data center cleaning checklist in South Florida?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Our comprehensive data center cleaning checklist includes: raised floor and sub-floor HEPA vacuuming, server rack and equipment anti-static cleaning, cable management cleaning, environmental surface disinfection (walls, ceilings, doors), CRAC unit and air handler cleaning, filter replacement, particle count verification, and complete documentation for compliance. We also inspect for moisture, corrosion, and other environmental concerns specific to South Florida's climate.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="cost" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">How much does data center cleaning cost in South Florida?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Data center cleaning costs vary based on facility size, contamination levels, and cleaning frequency. Most South Florida facilities invest $500-$2,000 per cleaning session for small to medium server rooms, while large enterprise data centers may range from $3,000-$10,000+ depending on scope. We recommend quarterly deep cleaning with monthly maintenance for optimal protection. Contact us for a free, customized quote based on your specific requirements.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="iso-compliance" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">Do you follow ISO 14644-1 standards in Fort Lauderdale?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Yes, we strictly adhere to ISO 14644-1 cleanroom classification standards for all our South Florida data center cleaning services. Our technicians are trained in cleanroom protocols, we use HEPA-filtered equipment, employ particle counting for verification, and provide complete documentation of procedures and results. This ensures your facility meets industry standards for contamination control and helps you maintain certifications and pass audits.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="frequency" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">How often should data centers be cleaned in South Florida?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Due to South Florida's high humidity, dust, and coastal conditions, we recommend quarterly comprehensive cleaning with monthly preventive maintenance for most data centers. High-density facilities or those with sensitive equipment may benefit from more frequent service. Facilities near construction, in industrial areas, or experiencing rapid growth should consider monthly deep cleaning. We'll assess your specific environment and create a customized maintenance schedule to ensure optimal protection.
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
              Ready to Protect Your Critical Infrastructure?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join South Florida's leading businesses that trust Red Rock Cleans for specialized data center cleaning
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
              <Link to="/commercial-quote">Get Your Free Data Center Cleaning Quote</Link>
            </Button>
          </div>
        </section>

        {/* Image Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <img 
                src="/static/service-products.jpg" 
                alt="A pristine server room in a South Florida data center after specialized cleaning by Red Rock Cleans"
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

export default DataCenterCleaningSouthFloridaPage;


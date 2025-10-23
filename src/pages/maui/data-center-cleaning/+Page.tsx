import { MauiNavigation } from "@/components/MauiNavigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Cpu, Award, Clock, Grid3x3, Server, SprayCan, Database, TrendingUp, ShieldCheck, MapPin, Calendar, Home, Factory, Building, Stethoscope, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { useTranslation } from 'react-i18next';

const towns = [
  {
    id: "wailea",
    name: "Wailea",
    description: "Wailea data centers and server rooms trust our specialized cleaning services to maintain ISO-compliant environments that protect critical infrastructure from Hawaii's unique environmental challenges.",
    faq: [
      {
        question: "Can you work around Wailea data center operations?",
        answer: "Yes, we schedule cleanings during maintenance windows and off-peak hours to ensure zero disruption to your critical operations and uptime requirements."
      },
      {
        question: "What certifications do your Wailea technicians have?",
        answer: "Our technicians are trained in ISO 14644-1 cleanroom standards, anti-static protocols, and critical environment cleaning specific to data center operations."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our Wailea data center for three years. Their attention to cleanroom standards and understanding of our uptime needs is exceptional.",
      author: "IT Director, Wailea Tech Facility"
    }
  },
  {
    id: "makena",
    name: "Makena",
    description: "Makena server facilities rely on our precision cleaning services to combat salt air and humidity, ensuring optimal performance of sensitive computing equipment year-round.",
    faq: [
      {
        question: "How do you protect against Makena's salt air?",
        answer: "We use specialized cleaning solutions and protocols designed to remove salt deposits and prevent corrosion on sensitive electronics while maintaining cleanroom standards."
      },
      {
        question: "Do you provide emergency cleaning in Makena?",
        answer: "Yes, we offer 24/7 emergency response for contamination events or equipment failures requiring immediate environmental remediation."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans understands the unique challenges of operating a data center in Makena's coastal environment. Their proactive approach has improved our system reliability.",
      author: "Facilities Manager, Makena Server Farm"
    }
  },
  {
    id: "kihei",
    name: "Kihei",
    description: "Kihei data centers benefit from our comprehensive cleaning protocols that address raised floor environments, sub-floor contamination, and equipment surface maintenance.",
    faq: [
      {
        question: "What is included in Kihei data center cleaning?",
        answer: "Our service includes raised floor and sub-floor cleaning, server rack detailing, environmental surface disinfection, cable management cleaning, and air quality monitoring."
      },
      {
        question: "How often should Kihei facilities schedule cleaning?",
        answer: "We recommend monthly deep cleaning for critical environments, with quarterly sub-floor maintenance and weekly surface cleaning for optimal contamination control."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans' systematic approach to data center cleaning has significantly reduced our dust accumulation and improved our cooling efficiency in Kihei.",
      author: "Chief Engineer, Kihei Data Services"
    }
  },
  {
    id: "kapalua",
    name: "Kapalua",
    description: "Kapalua server rooms and tech facilities trust our ISO-compliant cleaning services to maintain the pristine conditions required for sensitive computing infrastructure.",
    faq: [
      {
        question: "Are your Kapalua cleanings ISO certified?",
        answer: "Yes, we adhere to ISO 14644-1 cleanroom standards and maintain detailed documentation for compliance and audit purposes."
      },
      {
        question: "What makes your service different in Kapalua?",
        answer: "We specialize in critical environment cleaning with anti-static equipment, HEPA filtration, and protocols specifically designed for data center contamination control."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provides the level of precision and compliance our Kapalua facility requires. Their expertise in cleanroom standards is unmatched.",
      author: "Operations Director, Kapalua Tech Center"
    }
  },
  {
    id: "kaanapali",
    name: "Ka'anapali",
    description: "Ka'anapali data centers rely on our specialized services to protect against environmental contamination while maintaining the strict cleanliness standards required for uptime.",
    faq: [
      {
        question: "How do you minimize downtime in Ka'anapali?",
        answer: "We coordinate with your IT team, work during scheduled maintenance windows, and use rapid deployment protocols to ensure minimal impact on operations."
      },
      {
        question: "Do you clean while servers are running?",
        answer: "Yes, our technicians are trained to safely clean around live equipment using anti-static tools and non-conductive cleaning solutions."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has never caused a single minute of downtime at our Ka'anapali facility. Their professionalism and technical knowledge are outstanding.",
      author: "Network Administrator, Ka'anapali Data Hub"
    }
  },
  {
    id: "lahaina",
    name: "Lahaina",
    description: "Lahaina tech facilities benefit from our comprehensive data center cleaning that addresses both environmental contamination and equipment-specific maintenance needs.",
    faq: [
      {
        question: "What cleaning methods do you use in Lahaina?",
        answer: "We use HEPA-filtered vacuums, anti-static microfiber cloths, and cleanroom-approved solutions to prevent static discharge and equipment damage."
      },
      {
        question: "Can you clean our raised floor plenum?",
        answer: "Yes, sub-floor and plenum cleaning is a core part of our service, removing accumulated dust that affects cooling efficiency and air quality."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans' attention to detail in our Lahaina server room has been remarkable. They understand the critical nature of our operations.",
      author: "IT Manager, Lahaina Technology Services"
    }
  },
  {
    id: "spreckelsville",
    name: "Spreckelsville",
    description: "Spreckelsville data centers trust our precision cleaning services to maintain contamination-free environments critical for high-performance computing operations.",
    faq: [
      {
        question: "How do you ensure quality in Spreckelsville?",
        answer: "We use particle counters, document all cleaning activities, and provide compliance reports to ensure cleanroom standards are consistently met."
      },
      {
        question: "What are your rates for Spreckelsville facilities?",
        answer: "Pricing is based on facility size, cleaning frequency, and specific requirements. Contact us for a customized quote based on your needs."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been instrumental in maintaining our Spreckelsville facility's certification. Their systematic approach is exactly what we needed.",
      author: "Compliance Officer, Spreckelsville Computing Center"
    }
  },
  {
    id: "paia",
    name: "Pa'ia",
    description: "Pa'ia server facilities rely on our expert cleaning services to combat environmental challenges and maintain the pristine conditions required for critical infrastructure.",
    faq: [
      {
        question: "Do you serve small facilities in Pa'ia?",
        answer: "Yes, we service data centers of all sizes, from small server rooms to large enterprise facilities, with the same level of expertise and attention to detail."
      },
      {
        question: "What safety protocols do you follow in Pa'ia?",
        answer: "All technicians follow strict ESD protocols, wear cleanroom garments, and use only approved anti-static equipment to protect your sensitive hardware."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans transformed our Pa'ia server room from a dust concern to a showcase facility. Their expertise is evident in every detail.",
      author: "Systems Administrator, Pa'ia Tech Solutions"
    }
  },
  {
    id: "kuau",
    name: "Kuau",
    description: "Kuau data centers benefit from our specialized cleaning protocols designed to protect sensitive equipment from Hawaii's coastal environment and ensure optimal uptime.",
    faq: [
      {
        question: "How quickly can you respond in Kuau?",
        answer: "We offer same-day emergency response for critical contamination events and can schedule routine maintenance within 48 hours of contact."
      },
      {
        question: "Do you provide cleaning verification in Kuau?",
        answer: "Yes, we provide particle count verification, photographic documentation, and detailed reports to confirm cleanroom compliance after each service."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans' proactive approach to our Kuau facility has reduced our maintenance issues significantly. They're true professionals.",
      author: "Facility Director, Kuau Data Operations"
    }
  },
  {
    id: "haiku",
    name: "Ha'iku",
    description: "Ha'iku tech facilities trust our ISO-compliant cleaning services to maintain the contamination-free environments essential for reliable data center operations.",
    faq: [
      {
        question: "What makes Ha'iku data centers unique?",
        answer: "Ha'iku's rural location presents unique dust challenges. We customize our protocols to address local environmental factors while maintaining cleanroom standards."
      },
      {
        question: "Can you train our staff in Ha'iku?",
        answer: "Yes, we offer training sessions on basic contamination control and best practices for maintaining clean environments between professional services."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been essential to our Ha'iku facility's success. Their understanding of critical environment cleaning is exceptional.",
      author: "Technical Director, Ha'iku Server Center"
    }
  }
];

const DataCenterCleaningMauiPage = () => {
  const { t } = useTranslation();
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
        <title>{t(`commercialServices.maui.dataCenter.title`, { defaultValue: "Data Center Cleaning Maui | Red Rock Cleans" })}</title>
        <meta name="description" content={t(`commercialServices.maui.dataCenter.description`, { defaultValue: "Data center cleaning in Maui. Protect critical infrastructure with specialized cleaning. Professional Hawaiian service!" })} />
      </Helmet>
      
      <MauiNavigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/src/assets/hero-commercial.jpg" 
              alt="Professional data center cleaning service in a Maui technology facility"
              className="w-full h-full object-cover scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                Specialized Data Center Cleaning on Maui
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                In Maui's unique island environment, specialized cleaning plays a critical role in protecting sensitive hardware from humidity, dust, and salt air. Our ISO-compliant data center cleaning services ensure maximum uptime for businesses across the island by preventing contamination-related failures, maintaining optimal cooling efficiency, and preserving the pristine conditions your critical infrastructure demands.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="h-14 text-lg px-8" asChild>
                  <a href="tel:+18089093038">
                    <Phone className="w-5 h-5 mr-2" />
                    Call (808) 909-3038
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="h-14 text-lg px-8" asChild>
                  <Link to="/commercial-quote?location=maui">
                    <Home className="w-5 h-5 mr-2" />
                    Get Free Quote
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Protecting Your Island's Critical Infrastructure Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Protecting Your Island's Critical Infrastructure
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Cpu className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Precision Contamination Control</h3>
                      <p className="text-muted-foreground">
                        Our specialized methods prevent dust, salt air, and static discharge from compromising your hardware. We use HEPA-filtered equipment, anti-static tools, and cleanroom-approved solutions to eliminate contaminants that threaten system reliability and performance.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">ISO & Industry Compliance</h3>
                      <p className="text-muted-foreground">
                        We adhere to critical standards including ISO 14644-1 for cleanroom environments, providing detailed documentation and particle count verification. Our protocols ensure your facility maintains the compliance required for certifications and audits.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Minimizing Downtime Risk</h3>
                      <p className="text-muted-foreground">
                        Proactive cleaning prevents overheating and system failures in Maui's humid climate. By maintaining optimal air quality and removing heat-trapping contaminants, we help ensure your critical systems operate reliably 24/7/365.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Comprehensive Cleaning Protocol Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Our Comprehensive Data Center Cleaning Protocol
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Grid3x3 className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Raised Floor & Sub-Floor Cleaning</h3>
                      <p className="text-muted-foreground">
                        Specialized HEPA vacuuming and cleaning beneath raised floors removes accumulated dust, debris, and contaminants. We clean plenums, cable runs, and support structures to restore airflow efficiency and prevent contamination circulation.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Server className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Server Rack & Equipment Detailing</h3>
                      <p className="text-muted-foreground">
                        Anti-static cleaning of server exteriors, cable management systems, and equipment surfaces. We use non-conductive solutions and ESD-safe tools to safely remove dust and salt deposits without risking electrical damage.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <SprayCan className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Environmental Surface Disinfection</h3>
                      <p className="text-muted-foreground">
                        Cleaning walls, ceilings, lighting fixtures, and access doors with appropriate cleanroom solutions. We eliminate dust accumulation points and prevent contamination sources that affect air quality and equipment performance.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Commitment to Maui's Digital Infrastructure Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Our Commitment to Maui's Digital Infrastructure
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Database className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    <CountUp end={25} duration={2} />+
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Data Centers Secured on Maui</h3>
                  <p className="text-muted-foreground text-sm">
                    Critical facilities trust our specialized cleaning expertise
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    99.9<CountUp end={9} duration={2} decimal="." decimals={1} />%
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Uptime Percentage Maintained</h3>
                  <p className="text-muted-foreground text-sm">
                    Zero cleaning-related downtime incidents across all facilities
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ShieldCheck className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    <CountUp end={12} duration={2} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Certified Cleanroom Specialists</h3>
                  <p className="text-muted-foreground text-sm">
                    ISO 14644-1 trained technicians dedicated to Maui facilities
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
                          <h4 className="font-semibold mb-2">Local Data Center Cleaning Services</h4>
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
                          <Link to="/commercial-quote?location=maui">
                            Get Data Center Cleaning Quote for {town.name}
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
                Other Specialized Commercial Cleaning on Maui
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <Factory className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Industrial Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Professional cleaning services for manufacturing and industrial facilities
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/maui/industrial-cleaning">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <Building className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Government Facility Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Compliant cleaning services for government and municipal buildings
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/maui/government-facility-cleaning">Learn More</Link>
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
                <AccordionItem value="iso-compliance" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">What ISO standards do you follow for data center cleaning?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      We adhere to ISO 14644-1 cleanroom standards for critical environment cleaning. Our protocols include particle count verification, detailed documentation, and compliance reporting. All technicians are trained in cleanroom procedures, ESD safety, and contamination control specific to data center operations.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="downtime" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">Will cleaning cause any downtime to our operations?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      No. We coordinate with your IT team to schedule cleaning during maintenance windows or off-peak hours. Our technicians are trained to work safely around live equipment using anti-static tools and non-conductive solutions. We have a perfect track record of zero cleaning-related downtime incidents.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="what-included" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">What's included in your data center cleaning checklist?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Our comprehensive checklist includes: raised floor and sub-floor cleaning, server rack and equipment detailing, environmental surface disinfection, cable management cleaning, air vent and filter maintenance, particle count verification, photographic documentation, and compliance reporting. We customize our service based on your specific facility requirements.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="salt-air" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">How do you protect against Maui's salt air and humidity?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      We use specialized cleaning solutions designed to remove salt deposits and prevent corrosion on sensitive electronics. Our protocols address Maui's unique environmental challenges including coastal salt air, volcanic dust, and high humidity. HEPA filtration and anti-static equipment ensure thorough contamination removal without introducing new risks.
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
              Join Maui's leading data centers that trust Red Rock Cleans for ISO-compliant cleaning services
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
              <Link to="/commercial-quote?location=maui">Get Your Free Data Center Assessment</Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default DataCenterCleaningMauiPage;

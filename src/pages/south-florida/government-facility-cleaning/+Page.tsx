import { SouthFloridaNavigation } from "@/components/SouthFloridaNavigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Shield, Lock, FileText, Building, Scale, Users, ShieldCheck, Building2, CheckCircle2, MapPin, Calendar, Heart, Server, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import CountUp from "react-countup";

const cities = [
  {
    id: "aventura",
    name: "Aventura",
    description: "Aventura's municipal buildings trust our security-cleared cleaning professionals to maintain pristine, secure public facilities while protecting confidential information.",
    faq: [
      {
        question: "Are your cleaners background-checked for Aventura government facilities?",
        answer: "Yes, all staff assigned to government facilities undergo comprehensive background checks and security clearance procedures specific to public sector requirements."
      },
      {
        question: "Can you work around Aventura city council meetings and events?",
        answer: "Absolutely. We schedule cleaning services around government operations, public meetings, and special events to minimize disruption."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has maintained our Aventura city facilities with professionalism and discretion. They understand the importance of security and confidentiality.",
      author: "Facilities Director, Aventura Municipal Services"
    }
  },
  {
    id: "cooper-city",
    name: "Cooper City",
    description: "Cooper City government offices rely on our discreet, compliant cleaning services to maintain professional public spaces while respecting sensitive operations.",
    faq: [
      {
        question: "Do you provide cleaning reports for Cooper City facilities?",
        answer: "Yes, we provide detailed cleaning documentation, compliance reports, and service verification for all government facility contracts."
      },
      {
        question: "How do you handle secure areas in Cooper City buildings?",
        answer: "We follow strict access protocols, sign NDAs, and work closely with facility security to ensure proper handling of sensitive areas."
      }
    ],
    testimonial: {
      text: "Our Cooper City government complex has never looked better. Red Rock Cleans is professional, reliable, and security-conscious.",
      author: "City Administrator, Cooper City Government"
    }
  },
  {
    id: "dania-beach",
    name: "Dania Beach",
    description: "Dania Beach public facilities benefit from our specialized government cleaning that balances public accessibility with security requirements.",
    faq: [
      {
        question: "Can you clean Dania Beach courthouses?",
        answer: "Yes, we have extensive experience cleaning courtrooms, judicial chambers, and legal facilities with appropriate security and confidentiality measures."
      },
      {
        question: "Do you offer emergency cleaning for Dania Beach facilities?",
        answer: "Yes, we provide rapid response services for urgent cleaning needs at municipal and government buildings."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans understands the unique needs of our Dania Beach public facilities. Their attention to security and detail is exceptional.",
      author: "Facility Manager, Dania Beach Municipal Complex"
    }
  },
  {
    id: "davie",
    name: "Davie",
    description: "Davie's government buildings depend on our compliant cleaning services that maintain professional appearances while protecting sensitive information.",
    faq: [
      {
        question: "What certifications do your Davie cleaners have?",
        answer: "Our government facility staff are background-checked, security-cleared, and trained in confidentiality protocols and compliance requirements."
      },
      {
        question: "How do you ensure quality in Davie government buildings?",
        answer: "We use detailed checklists, conduct regular inspections, and provide comprehensive documentation to ensure consistent quality and compliance."
      }
    ],
    testimonial: {
      text: "Our Davie town hall and municipal offices are always clean and welcoming thanks to Red Rock Cleans' professional service.",
      author: "Operations Manager, Davie Town Services"
    }
  },
  {
    id: "fort-lauderdale",
    name: "Fort Lauderdale",
    description: "Fort Lauderdale's extensive government infrastructure relies on our secure, professional cleaning services to maintain public trust and operational excellence.",
    faq: [
      {
        question: "Do you clean federal buildings in Fort Lauderdale?",
        answer: "Yes, we have experience with federal, state, county, and municipal facilities, meeting all required security and compliance standards."
      },
      {
        question: "Are you on the GSA schedule in Fort Lauderdale?",
        answer: "We work with government procurement processes and can accommodate various contracting requirements. Contact us for specific scheduling information."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our Fort Lauderdale government facilities with the highest standards of professionalism and security.",
      author: "Procurement Director, Fort Lauderdale County Services"
    }
  },
  {
    id: "hallandale-beach",
    name: "Hallandale Beach",
    description: "Hallandale Beach municipal buildings trust our security-conscious cleaning approach that protects public spaces and sensitive government operations.",
    faq: [
      {
        question: "What's included in Hallandale Beach government cleaning?",
        answer: "Our service includes public lobbies, offices, courtrooms, conference rooms, restrooms, break areas, and secure zones with appropriate clearance."
      },
      {
        question: "How do you handle confidentiality in Hallandale Beach?",
        answer: "All staff sign comprehensive NDAs and are trained in proper handling of sensitive documents and secure areas within government facilities."
      }
    ],
    testimonial: {
      text: "Our Hallandale Beach city facilities are maintained to the highest standards. Red Rock Cleans is reliable, discreet, and professional.",
      author: "City Manager, Hallandale Beach Administration"
    }
  },
  {
    id: "hollywood",
    name: "Hollywood",
    description: "Hollywood's government facilities benefit from our experienced team that understands the balance between public service and operational security.",
    faq: [
      {
        question: "Can you clean during Hollywood city business hours?",
        answer: "We offer flexible scheduling including after-hours and weekend cleaning to accommodate government operations and public access hours."
      },
      {
        question: "Do you provide specialized courthouse cleaning in Hollywood?",
        answer: "Yes, we have protocols specifically for judicial facilities, including courtrooms, judge's chambers, and legal administrative areas."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Hollywood government complex with professionalism and understanding of our security requirements.",
      author: "Facilities Coordinator, Hollywood City Government"
    }
  },
  {
    id: "las-olas",
    name: "Las Olas",
    description: "Las Olas government offices rely on our discreet cleaning services that maintain professional environments while respecting confidential operations.",
    faq: [
      {
        question: "How do you secure access in Las Olas facilities?",
        answer: "We coordinate with building security, use proper credentials, follow sign-in/sign-out protocols, and respect all access restrictions."
      },
      {
        question: "What's your response time for Las Olas emergencies?",
        answer: "We maintain rapid response capability and can typically deploy to Las Olas government facilities within 2-4 hours for urgent needs."
      }
    ],
    testimonial: {
      text: "Our Las Olas administrative offices are always pristine. Red Rock Cleans understands the importance of our public image.",
      author: "Administrative Director, Las Olas Public Services"
    }
  },
  {
    id: "lauderdale-lakes",
    name: "Lauderdale Lakes",
    description: "Lauderdale Lakes public facilities trust our comprehensive cleaning that supports efficient government operations and positive public interactions.",
    faq: [
      {
        question: "Do you clean police stations in Lauderdale Lakes?",
        answer: "Yes, we have experience cleaning law enforcement facilities with appropriate security protocols and understanding of sensitive areas."
      },
      {
        question: "How often should Lauderdale Lakes facilities be cleaned?",
        answer: "Most government buildings benefit from daily or nightly cleaning with periodic deep cleaning, though frequency depends on public traffic."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our Lauderdale Lakes municipal buildings for years. Consistently excellent service.",
      author: "Public Works Director, Lauderdale Lakes City Services"
    }
  },
  {
    id: "lauderhill",
    name: "Lauderhill",
    description: "Lauderhill's government infrastructure depends on our reliable cleaning services that maintain public trust through consistent professionalism.",
    faq: [
      {
        question: "What makes your Lauderhill government cleaning different?",
        answer: "We combine security-cleared staff, comprehensive confidentiality protocols, and deep understanding of public sector requirements for superior service."
      },
      {
        question: "Can you handle large Lauderhill facilities?",
        answer: "Yes, we service government facilities of all sizes, from small municipal offices to large courthouse and administrative complexes."
      }
    ],
    testimonial: {
      text: "Our Lauderhill city hall and offices are maintained to perfection. Red Rock Cleans is professional, secure, and reliable.",
      author: "City Clerk, Lauderhill Municipal Government"
    }
  },
  {
    id: "margate",
    name: "Margate",
    description: "Margate municipal buildings benefit from our security-focused cleaning that protects both public spaces and sensitive government operations.",
    faq: [
      {
        question: "How do you price government cleaning in Margate?",
        answer: "We provide transparent, competitive pricing tailored to government budgets with detailed proposals for procurement review."
      },
      {
        question: "Do you provide staff training records for Margate?",
        answer: "Yes, we maintain complete documentation of staff training, certifications, background checks, and security clearances for your records."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been instrumental in maintaining our Margate public facilities. Their professionalism is outstanding.",
      author: "Facilities Manager, Margate City Administration"
    }
  },
  {
    id: "miramar",
    name: "Miramar",
    description: "Miramar's government facilities trust our experienced team to maintain secure, professional environments that serve the public effectively.",
    faq: [
      {
        question: "Can you clean fire stations in Miramar?",
        answer: "Yes, we clean fire stations, police facilities, and other emergency services buildings with appropriate respect for 24/7 operations."
      },
      {
        question: "Do you offer contract cleaning in Miramar?",
        answer: "Yes, we provide flexible contract options including annual, multi-year, and renewable agreements for government facilities."
      }
    ],
    testimonial: {
      text: "Our Miramar government complex is always clean and welcoming. Red Rock Cleans delivers consistent quality and security.",
      author: "Operations Chief, Miramar City Services"
    }
  },
  {
    id: "north-lauderdale",
    name: "North Lauderdale",
    description: "North Lauderdale public buildings rely on our compliant cleaning services that balance accessibility with operational security needs.",
    faq: [
      {
        question: "How do you ensure compliance in North Lauderdale?",
        answer: "We follow all federal, state, and local regulations, maintain detailed documentation, and conduct regular compliance audits."
      },
      {
        question: "Can you clean during North Lauderdale public hours?",
        answer: "We offer flexible scheduling and can work around public access hours, though we typically recommend after-hours cleaning for optimal results."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans understands the unique needs of our North Lauderdale municipal facilities. Professional and security-conscious.",
      author: "City Administrator, North Lauderdale Government"
    }
  },
  {
    id: "pembroke-pines",
    name: "Pembroke Pines",
    description: "Pembroke Pines government infrastructure depends on our professional cleaning that supports efficient public service delivery and operational excellence.",
    faq: [
      {
        question: "Do you clean libraries in Pembroke Pines?",
        answer: "Yes, we clean public libraries, community centers, and other municipal facilities with appropriate care for public spaces and materials."
      },
      {
        question: "What security measures do you follow in Pembroke Pines?",
        answer: "We coordinate with facility security, use proper access credentials, follow all security protocols, and maintain strict confidentiality."
      }
    ],
    testimonial: {
      text: "Our Pembroke Pines city facilities have benefited tremendously from Red Rock Cleans' professional government cleaning services.",
      author: "Public Services Director, Pembroke Pines City Government"
    }
  },
  {
    id: "plantation",
    name: "Plantation",
    description: "Plantation's municipal buildings trust our secure cleaning approach that maintains professional public spaces while protecting sensitive information.",
    faq: [
      {
        question: "What areas do you clean in Plantation government buildings?",
        answer: "We clean public lobbies, administrative offices, conference rooms, courtrooms, break areas, restrooms, and authorized secure areas."
      },
      {
        question: "How do you handle document security in Plantation?",
        answer: "Our staff is trained never to move, read, or disturb documents, and we follow strict protocols for cleaning around sensitive materials."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Plantation city hall with exceptional professionalism. They respect our security requirements completely.",
      author: "Facility Director, Plantation Municipal Services"
    }
  },
  {
    id: "southwest-ranches",
    name: "Southwest Ranches",
    description: "Southwest Ranches government facilities benefit from our experienced team that understands the unique needs of municipal operations.",
    faq: [
      {
        question: "How quickly can you start in Southwest Ranches?",
        answer: "After security clearance and facility assessment, we can typically begin service within 1-2 weeks for government facilities."
      },
      {
        question: "Do you offer green cleaning in Southwest Ranches?",
        answer: "Yes, we use eco-friendly, low-VOC cleaning products that are safe for public facilities and meet environmental standards."
      }
    ],
    testimonial: {
      text: "Our Southwest Ranches town facilities are maintained to the highest standards. Red Rock Cleans is reliable and professional.",
      author: "Town Manager, Southwest Ranches Administration"
    }
  },
  {
    id: "sunny-isles-beach",
    name: "Sunny Isles Beach",
    description: "Sunny Isles Beach municipal buildings rely on our professional cleaning that creates positive public impressions while maintaining security.",
    faq: [
      {
        question: "Can you clean Sunny Isles Beach recreation centers?",
        answer: "Yes, we clean community centers, recreation facilities, and other municipal buildings with high public traffic and diverse usage."
      },
      {
        question: "What's included in government facility cleaning in Sunny Isles Beach?",
        answer: "Our service includes all public and authorized areas: lobbies, offices, meeting rooms, restrooms, kitchens, and specialized spaces."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans keeps our Sunny Isles Beach city facilities pristine and welcoming for residents and visitors.",
      author: "City Services Manager, Sunny Isles Beach Government"
    }
  },
  {
    id: "sunrise",
    name: "Sunrise",
    description: "Sunrise government facilities depend on our comprehensive cleaning services that support effective public service delivery and operational efficiency.",
    faq: [
      {
        question: "Do you provide inspection-ready cleaning in Sunrise?",
        answer: "Yes, our cleaning meets or exceeds standards for government inspections, audits, and compliance reviews."
      },
      {
        question: "How do you coordinate with Sunrise facility management?",
        answer: "We maintain open communication, provide regular reports, respond quickly to concerns, and adapt to your operational needs."
      }
    ],
    testimonial: {
      text: "Our Sunrise municipal complex has never looked better. Red Rock Cleans delivers consistent, professional government facility cleaning.",
      author: "Facilities Coordinator, Sunrise City Administration"
    }
  },
  {
    id: "tamarac",
    name: "Tamarac",
    description: "Tamarac public facilities trust our security-cleared team to maintain clean, professional environments that serve the community effectively.",
    faq: [
      {
        question: "What's the cost of government cleaning in Tamarac?",
        answer: "We provide competitive, transparent pricing designed for government budgets. Contact us for a detailed proposal tailored to your facilities."
      },
      {
        question: "Can you provide references in Tamarac?",
        answer: "Yes, we can provide references from other government facilities we serve, subject to confidentiality agreements and client approval."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our Tamarac city buildings with professionalism and discretion. Highly recommended.",
      author: "Public Works Manager, Tamarac Municipal Government"
    }
  },
  {
    id: "weston",
    name: "Weston",
    description: "Weston's government infrastructure relies on our experienced cleaning team that understands the critical balance between public service and security.",
    faq: [
      {
        question: "Are you insured for Weston government facilities?",
        answer: "Yes, we carry comprehensive insurance including general liability, workers' compensation, and bonding appropriate for government contracts."
      },
      {
        question: "Do you provide ongoing support in Weston?",
        answer: "Yes, we offer dedicated account management, regular quality reviews, and responsive service for all our Weston government facility clients."
      }
    ],
    testimonial: {
      text: "Our Weston city facilities are maintained to the highest professional standards. Red Rock Cleans is our trusted partner.",
      author: "City Manager, Weston Municipal Services"
    }
  }
];

const GovernmentFacilityCleaningSouthFloridaPage = () => {
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
        <title>Government Facility Cleaning South Florida | Red Rock Cleans</title>
        <meta name="description" content="Secure and compliant government facility cleaning in South Florida. Red Rock Cleans provides discreet, professional cleaning for municipal and federal buildings in Fort Lauderdale and Weston by security-cleared staff." />
        <meta name="keywords" content="government facility cleaning South Florida, government cleaning near me, municipal building cleaning South Florida, federal office cleaning Fort Lauderdale, courthouse cleaning Broward County, secure facility cleaning South Florida, GSA schedule cleaning South Florida, confidential cleaning services Fort Lauderdale, discreet government cleaners South Florida, government cleaning contracts South Florida, cost of municipal cleaning Fort Lauderdale, what is government facility cleaning South Florida, hire secure cleaners in South Florida" />
        <link rel="canonical" href="https://redrockcleans.com/south-florida/government-facility-cleaning" />
      </Helmet>
      
      <SouthFloridaNavigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/src/assets/hero-commercial.jpg" 
              alt="Professional government facility cleaning service in a South Florida municipal building"
              className="w-full h-full object-cover scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                Secure & Compliant Government Facility Cleaning in South Florida
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                When cleaning sensitive government and municipal buildings in Fort Lauderdale and across South Florida, security, discretion, and reliability are paramount. Our security-cleared team provides professional cleaning services that protect confidential information, maintain public trust, and ensure compliance with all federal, state, and local standards for government facilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="h-14 text-lg px-8" asChild>
                  <Link to="/book-now-southflorida">
                    <Calendar className="w-5 h-5 mr-2" />
                    Get Your Free Quote
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="h-14 text-lg px-8" asChild>
                  <Link to="/contact">
                    <Shield className="w-5 h-5 mr-2" />
                    Contact Us
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* A Higher Standard of Trust for Public Facilities Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                A Higher Standard of Trust for Public Facilities
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Security-Cleared Personnel</h3>
                      <p className="text-muted-foreground">
                        All staff assigned to government contracts in South Florida undergo rigorous background checks, security clearance procedures, and comprehensive vetting. We ensure that every team member working in your facility meets the highest standards of trustworthiness and professionalism required for sensitive public sector environments.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Lock className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Strict Confidentiality Protocols</h3>
                      <p className="text-muted-foreground">
                        We're committed to absolute discretion and protection of sensitive information. Our team signs comprehensive non-disclosure agreements, follows strict protocols for handling secure areas, and never accesses, moves, or disturbs confidential documents or materials. Your facility's privacy and security are our top priorities.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Compliance & Detailed Reporting</h3>
                      <p className="text-muted-foreground">
                        We adhere to all local, state, and federal cleaning and safety standards for government facilities. Our comprehensive documentation includes detailed cleaning reports, compliance verification, staff training records, and quality audits to support your procurement requirements and regulatory obligations.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Government Facility Cleaning Checklist Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Our Government Facility Cleaning Checklist
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Building className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Public Lobbies & Offices</h3>
                      <p className="text-muted-foreground">
                        We maintain a professional public image by keeping lobbies, reception areas, and administrative offices spotlessly clean. Our services ensure that citizens and visitors experience welcoming, well-maintained facilities that reflect positively on your government operations and public service mission.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Scale className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Secure Areas & Courtrooms</h3>
                      <p className="text-muted-foreground">
                        Our protocols for cleaning sensitive or restricted areas include coordination with security personnel, proper access credential management, respect for confidential materials, and adherence to all facility-specific security requirements. We understand the unique needs of courtrooms, judicial chambers, and secure government offices.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Common Areas & Restrooms</h3>
                      <p className="text-muted-foreground">
                        High-traffic sanitation is critical in public facilities. We provide thorough cleaning and disinfection of restrooms, break rooms, conference spaces, and common areas to ensure a healthy, hygienic environment for both government employees and the citizens they serve throughout South Florida.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Commitment to Serving South Florida Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Our Commitment to Serving South Florida
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ShieldCheck className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    <CountUp end={50} duration={2} />+
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Security Cleared Staff</h3>
                  <p className="text-muted-foreground text-sm">
                    Background-checked professionals serving South Florida government facilities
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building2 className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    <CountUp end={75} duration={2} />+
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Public Facilities Maintained</h3>
                  <p className="text-muted-foreground text-sm">
                    Municipal, county, and federal buildings trust our services
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    <CountUp end={15} duration={2} />+
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Years of Compliant Service</h3>
                  <p className="text-muted-foreground text-sm">
                    Proven track record of secure government facility cleaning
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
                          <h4 className="font-semibold mb-2">Government Facility Cleaning Services in {city.name}</h4>
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
                          <Link to="/book-now-southflorida">
                            Get Government Facility Cleaning Quote for {city.name}
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
                    <Heart className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Medical Office Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Healthcare-grade cleaning for medical facilities and clinics
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/south-florida/medical-office-cleaning">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <Server className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Data Center Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      ISO compliant cleaning for critical technology infrastructure
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/south-florida/data-center-cleaning">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <GraduationCap className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">School Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Safe, thorough cleaning for educational facilities
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/south-florida/school-cleaning">Learn More</Link>
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
                <AccordionItem value="what-is-government-cleaning" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">What is government facility cleaning in South Florida?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Government facility cleaning in South Florida involves specialized cleaning services for municipal, county, state, and federal buildings. This includes city halls, courthouses, police and fire stations, administrative offices, public libraries, community centers, and other government properties. Our services meet strict security, confidentiality, and compliance requirements specific to public sector facilities.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="security-clearance" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">How do you ensure security for government facilities?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      We ensure security through comprehensive background checks on all staff, security clearance procedures for government contracts, mandatory non-disclosure agreements, strict access control protocols, coordination with facility security personnel, proper credential management, and ongoing training in confidentiality and security procedures. All our technicians understand the sensitive nature of government facilities.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="contracts" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">How do government cleaning contracts work in South Florida?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      We work with various government procurement processes including formal bids, RFPs (Request for Proposals), GSA schedules, and cooperative purchasing agreements. We provide detailed proposals with transparent pricing, comprehensive insurance documentation, staff qualifications, and compliance certifications. Our contracts are flexible and can accommodate annual, multi-year, or renewable terms based on your requirements.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="hire-secure-cleaners" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">How do I hire secure cleaners for South Florida government facilities?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Contact Red Rock Cleans for a confidential consultation about your government facility cleaning needs. We'll conduct a facility assessment, review your security requirements, prepare a detailed proposal with pricing and compliance documentation, and coordinate the security clearance process for our staff. We work within your procurement guidelines and can typically begin service within 2-4 weeks after approval, depending on security clearance requirements.
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
              Ready to Secure Professional Cleaning for Your Facility?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join South Florida government agencies that trust Red Rock Cleans for secure, compliant facility cleaning
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
              <Link to="/commercial-quote">Get Your Free Government Facility Quote</Link>
            </Button>
          </div>
        </section>

        {/* Image Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <img 
                src="/static/service-products.jpg" 
                alt="The clean and secure lobby of a government building in South Florida after cleaning by Red Rock Cleans"
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

export default GovernmentFacilityCleaningSouthFloridaPage;


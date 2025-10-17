import { MauiNavigation } from "@/components/MauiNavigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Shield, Lock, FileText, Building, Gavel, Users, ShieldCheck, Building2, CheckCircle2, MapPin, Calendar, Home, Stethoscope, Server, GraduationCap, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import CountUp from "react-countup";

const towns = [
  {
    id: "wailea",
    name: "Wailea",
    description: "Wailea government offices and municipal facilities trust our security-cleared cleaning teams to maintain professional, compliant environments while respecting the confidential nature of public service.",
    faq: [
      {
        question: "Are your Wailea cleaners background-checked?",
        answer: "Yes, all staff assigned to government facilities undergo comprehensive background checks and security clearances appropriate for municipal and federal contracts."
      },
      {
        question: "Can you work around public hours in Wailea?",
        answer: "Absolutely. We schedule cleaning during off-hours or weekends to minimize disruption to public services and ensure facilities are pristine before business hours."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has maintained our Wailea municipal offices for three years. Their professionalism, security awareness, and attention to detail are exceptional.",
      author: "Facilities Director, Wailea Public Services"
    }
  },
  {
    id: "makena",
    name: "Makena",
    description: "Makena government buildings rely on our discreet, professional cleaning services that uphold the highest standards of security and cleanliness for public facilities.",
    faq: [
      {
        question: "What makes your Makena government cleaning different?",
        answer: "We specialize in secure environments with cleared personnel, strict confidentiality protocols, and detailed compliance documentation for government contracts."
      },
      {
        question: "Do you provide emergency cleaning in Makena?",
        answer: "Yes, we offer rapid response for urgent cleaning needs at government facilities, including after public events or emergency situations."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans understands the unique requirements of our Makena government facility. Their discretion and reliability are exactly what we needed.",
      author: "Operations Manager, Makena Municipal Center"
    }
  },
  {
    id: "kihei",
    name: "Kihei",
    description: "Kihei municipal buildings benefit from our comprehensive cleaning protocols that address public areas, offices, and secure zones while maintaining strict confidentiality standards.",
    faq: [
      {
        question: "What is included in Kihei government facility cleaning?",
        answer: "Our service includes public lobby cleaning, office sanitization, restroom maintenance, secure area cleaning, courtroom care, and compliance documentation for all government standards."
      },
      {
        question: "How often should Kihei facilities schedule cleaning?",
        answer: "We recommend daily cleaning for high-traffic public areas, with weekly deep cleaning and customized schedules based on your facility's specific needs."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans' systematic approach to our Kihei government building has significantly improved our facility's appearance and visitor experience.",
      author: "Facility Manager, Kihei Public Works"
    }
  },
  {
    id: "kapalua",
    name: "Kapalua",
    description: "Kapalua government offices trust our security-compliant cleaning services to maintain professional environments while protecting sensitive information and restricted areas.",
    faq: [
      {
        question: "Are your Kapalua cleanings GSA-compliant?",
        answer: "Yes, we adhere to GSA schedule standards and maintain detailed documentation for compliance with federal, state, and local cleaning requirements."
      },
      {
        question: "What makes your Kapalua service unique?",
        answer: "We specialize in government facilities with security-cleared staff, strict protocols for sensitive areas, and comprehensive reporting for contract compliance."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provides the level of security and professionalism our Kapalua facility requires. Their expertise in government cleaning is evident.",
      author: "Security Director, Kapalua Government Center"
    }
  },
  {
    id: "kaanapali",
    name: "Ka'anapali",
    description: "Ka'anapali municipal facilities rely on our specialized services to maintain clean, secure public spaces while adhering to strict government cleaning protocols.",
    faq: [
      {
        question: "How do you protect confidential areas in Ka'anapali?",
        answer: "Our security-cleared staff follow strict access protocols, sign confidentiality agreements, and are supervised to ensure the protection of sensitive government areas."
      },
      {
        question: "Can you provide cleaning verification in Ka'anapali?",
        answer: "Yes, we provide detailed service reports, photographic documentation, and compliance records required for government contract verification."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has never had a single security incident at our Ka'anapali facility. Their professionalism and understanding of government needs are outstanding.",
      author: "Compliance Officer, Ka'anapali Municipal Building"
    }
  },
  {
    id: "lahaina",
    name: "Lahaina",
    description: "Lahaina government buildings benefit from our comprehensive cleaning that addresses public-facing areas, administrative offices, and secure zones with the highest level of professionalism.",
    faq: [
      {
        question: "What cleaning methods do you use in Lahaina government facilities?",
        answer: "We use EPA-approved disinfectants, HEPA-filtered equipment, and green cleaning solutions appropriate for public buildings serving all members of the community."
      },
      {
        question: "Can you clean courtrooms in Lahaina?",
        answer: "Yes, we have experience cleaning courtrooms, chambers, and judicial facilities with the respect and discretion these important spaces require."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans' attention to detail in our Lahaina courthouse has been remarkable. They understand the importance of maintaining dignity in public spaces.",
      author: "Court Administrator, Lahaina Judicial Center"
    }
  },
  {
    id: "spreckelsville",
    name: "Spreckelsville",
    description: "Spreckelsville government facilities trust our precision cleaning services to maintain the professional, secure environment required for effective public service delivery.",
    faq: [
      {
        question: "How do you ensure quality in Spreckelsville?",
        answer: "We use detailed checklists, conduct quality inspections, and provide comprehensive documentation to ensure all cleaning meets government standards and contract requirements."
      },
      {
        question: "What are your rates for Spreckelsville government contracts?",
        answer: "We provide competitive pricing for government contracts with transparent, GSA-compliant quotes. Contact us for a detailed proposal based on your facility's requirements."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been instrumental in maintaining our Spreckelsville facility's professional standards. Their systematic approach is exactly what government facilities need.",
      author: "Building Manager, Spreckelsville Municipal Office"
    }
  },
  {
    id: "paia",
    name: "Pa'ia",
    description: "Pa'ia public facilities rely on our expert cleaning services to maintain the clean, welcoming environment the community deserves while meeting all government compliance standards.",
    faq: [
      {
        question: "Do you serve small government offices in Pa'ia?",
        answer: "Yes, we service government facilities of all sizes, from small satellite offices to large municipal centers, with the same level of security and professionalism."
      },
      {
        question: "What safety protocols do you follow in Pa'ia?",
        answer: "All technicians follow strict security protocols, wear proper identification, sign in/out, and coordinate with facility security procedures."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans transformed our Pa'ia community center from a maintenance concern to a showcase facility. Their government cleaning expertise is evident.",
      author: "Director, Pa'ia Community Services"
    }
  },
  {
    id: "kuau",
    name: "Kuau",
    description: "Kuau government facilities benefit from our specialized cleaning protocols designed to protect sensitive information while ensuring public areas remain clean and welcoming.",
    faq: [
      {
        question: "How quickly can you respond in Kuau?",
        answer: "We offer priority response for government facilities, including same-day emergency cleaning for urgent situations affecting public services."
      },
      {
        question: "Do you provide cleaning documentation in Kuau?",
        answer: "Yes, we provide detailed service logs, compliance reports, and photographic documentation required for government contract administration."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans' proactive approach to our Kuau facility has improved our public image significantly. They're true professionals in government cleaning.",
      author: "Administrator, Kuau Public Safety Building"
    }
  },
  {
    id: "haiku",
    name: "Ha'iku",
    description: "Ha'iku municipal facilities trust our GSA-compliant cleaning services to maintain the secure, professional environment essential for serving the public effectively.",
    faq: [
      {
        question: "What makes Ha'iku government facilities unique?",
        answer: "Ha'iku facilities serve diverse community needs. We customize our protocols to address each building's specific requirements while maintaining security and compliance standards."
      },
      {
        question: "Can you train our staff in Ha'iku?",
        answer: "Yes, we offer training sessions on basic facility maintenance and coordination procedures to support smooth collaboration between our teams."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been essential to our Ha'iku facility's success. Their understanding of government cleaning requirements is exceptional.",
      author: "Facility Coordinator, Ha'iku Administrative Offices"
    }
  }
];

const GovernmentFacilityCleaningMauiPage = () => {
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
        <title>Government Facility Cleaning Maui | Red Rock Cleans</title>
        <meta name="description" content="Secure and compliant government facility cleaning on Maui. Red Rock Cleans provides discreet, professional cleaning for municipal and federal buildings by security-cleared staff." />
        <meta name="keywords" content="government cleaning near me Maui, municipal building cleaning Kihei, federal office cleaning Maui, courthouse cleaning Wailuku, secure facility cleaning Maui, GSA schedule cleaning Maui, confidential cleaning services Maui, discreet government cleaners Maui, government cleaning contracts Maui, cost of municipal cleaning Maui, what is government facility cleaning Maui, hire secure cleaners in Maui" />
        <link rel="canonical" href="https://redrockcleans.com/maui/government-facility-cleaning" />
      </Helmet>
      
      <MauiNavigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/src/assets/hero-commercial.jpg" 
              alt="Professional government facility cleaning service at a Maui municipal building"
              className="w-full h-full object-cover scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                Secure & Compliant Government Facility Cleaning on Maui
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Security, discretion, and reliability are paramount when cleaning sensitive government and municipal buildings in Wailuku and across Maui. Our security-cleared teams provide the professional cleaning services that government facilities require—maintaining public trust through spotless spaces while adhering to strict confidentiality protocols and compliance standards that protect sensitive information and serve the community with excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="h-14 text-lg px-8" asChild>
                  <Link to="/commercial-quote?location=maui">
                    <Calendar className="w-5 h-5 mr-2" />
                    Request Contract Proposal
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

        {/* Higher Standard of Trust Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                A Higher Standard of Trust for Public Facilities
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Security-Cleared Personnel</h3>
                      <p className="text-muted-foreground">
                        All staff assigned to government contracts on Maui undergo rigorous background checks, security clearances, and specialized training. We ensure that only trustworthy, vetted professionals access your sensitive facilities and confidential areas.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Lock className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Strict Confidentiality Protocols</h3>
                      <p className="text-muted-foreground">
                        Our commitment to discretion protects the privacy of sensitive areas, documents, and operations. All staff sign confidentiality agreements and follow strict protocols for handling restricted zones and classified information.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Compliance & Detailed Reporting</h3>
                      <p className="text-muted-foreground">
                        We adhere to all local, state, and federal cleaning standards. Our comprehensive documentation includes service logs, compliance reports, and verification records that support your facility's audit and contract requirements.
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
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Building className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Public Lobbies & Offices</h3>
                      <p className="text-muted-foreground">
                        Maintaining a professional public image through meticulous cleaning of reception areas, waiting rooms, and administrative offices. We ensure that citizens' first impressions reflect the quality of services your facility provides.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Gavel className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Secure Areas & Courtrooms</h3>
                      <p className="text-muted-foreground">
                        Our protocols for cleaning sensitive or restricted areas include proper access procedures, document handling policies, and respectful care of courtrooms, chambers, and other spaces requiring heightened security awareness.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Common Areas & Restrooms</h3>
                      <p className="text-muted-foreground">
                        High-traffic sanitation using hospital-grade disinfectants to protect public health. We maintain break rooms, conference areas, hallways, and restrooms to the highest standards of cleanliness and hygiene.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Commitment to Serving Maui Community Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Our Commitment to Serving the Maui Community
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ShieldCheck className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    <CountUp end={45} duration={2} />+
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Security Cleared Staff</h3>
                  <p className="text-muted-foreground text-sm">
                    Background-checked professionals dedicated to government facilities
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building2 className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    <CountUp end={30} duration={2} />+
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Public Facilities Maintained</h3>
                  <p className="text-muted-foreground text-sm">
                    Municipal and federal buildings across Maui trust our services
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    <CountUp end={8} duration={2} />+
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Years of Compliant Service</h3>
                  <p className="text-muted-foreground text-sm">
                    Perfect compliance record with government cleaning standards
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
                          <h4 className="font-semibold mb-2">Local Government Facility Cleaning Services</h4>
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
                            Get Government Cleaning Quote for {town.name}
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
                    <Server className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Data Center Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      ISO-compliant cleaning for critical technology infrastructure
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/maui/data-center-cleaning">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <GraduationCap className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">School Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Safe and healthy cleaning services for educational facilities
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/maui/school-cleaning">Learn More</Link>
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
                <AccordionItem value="security-clearance" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">What security clearances do your staff have for government facilities?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      All staff assigned to government facilities undergo comprehensive background checks including criminal history, employment verification, and reference checks. For federal contracts, we provide clearances appropriate to the security level required. All personnel sign confidentiality agreements and receive training on government facility protocols and sensitive information handling.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="gsa-compliance" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">Are you GSA schedule compliant for federal contracts?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Yes, we maintain compliance with GSA schedule requirements and provide all necessary documentation for federal contracts. Our services meet federal cleaning standards, we provide detailed billing and reporting, and we maintain proper insurance and bonding for government work.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="what-included" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">What's included in government facility cleaning on Maui?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Our comprehensive government facility cleaning includes public lobby and reception area maintenance, office and administrative space cleaning, courtroom and chamber care, secure area cleaning with proper protocols, restroom sanitization, break room cleaning, floor care, window cleaning, and detailed compliance documentation. We customize our service to meet your specific facility requirements and security protocols.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="contracts" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">How do government cleaning contracts work in Maui?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      We work with government agencies to develop customized contracts based on facility size, cleaning frequency, security requirements, and specific services needed. Our competitive pricing is transparent and GSA-compliant. We provide detailed proposals, service level agreements, and ongoing performance reporting to ensure your facility receives the quality cleaning it deserves while meeting all budgetary and compliance requirements.
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
              Ready to Serve Your Government Facility?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join Maui's government agencies that trust Red Rock Cleans for secure, compliant cleaning services
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
              <Link to="/commercial-quote?location=maui">Request Your Government Contract Proposal</Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default GovernmentFacilityCleaningMauiPage;

import { SouthFloridaNavigation } from "@/components/SouthFloridaNavigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HardHat, Cog, ClipboardCheck, Layers, Wrench, Construction, Users, ShieldCheck, Clock, Factory, MapPin, Calendar, Warehouse, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import CountUp from "react-countup";

const cities = [
  {
    id: "aventura",
    name: "Aventura",
    description: "Aventura's manufacturing sector relies on our professional factory cleaning to maintain safe, compliant production environments that meet OSHA standards.",
    faq: [
      {
        question: "Do you offer scheduled factory cleaning in Aventura?",
        answer: "Yes, we provide daily, weekly, or custom cleaning schedules tailored to your Aventura factory's production cycles and operational requirements."
      },
      {
        question: "Can you clean during production shifts in Aventura?",
        answer: "Absolutely. We work around your production schedule, providing cleaning services during off-hours, shift changes, or planned downtime."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has transformed our Aventura factory floor. Our safety record has improved and production efficiency is up.",
      author: "Operations Manager, Aventura Manufacturing Group"
    }
  },
  {
    id: "cooper-city",
    name: "Cooper City",
    description: "Cooper City manufacturers trust our heavy-duty cleaning services to keep production floors clean, machinery running efficiently, and workers safe.",
    faq: [
      {
        question: "What's included in Cooper City factory cleaning?",
        answer: "Our service includes production floor degreasing, machinery cleaning, high-dusting, restroom sanitization, and common area maintenance."
      },
      {
        question: "Do you handle hazardous materials in Cooper City?",
        answer: "Yes, we're trained in proper handling and disposal of industrial waste and follow all regulations for hazardous material cleanup."
      }
    ],
    testimonial: {
      text: "Our Cooper City plant has never been cleaner. Red Rock Cleans understands the unique needs of manufacturing facilities.",
      author: "Plant Manager, Cooper City Industries"
    }
  },
  {
    id: "dania-beach",
    name: "Dania Beach",
    description: "Dania Beach factories benefit from our comprehensive cleaning protocols that reduce workplace accidents and maintain compliance with industry regulations.",
    faq: [
      {
        question: "How do you ensure safety in Dania Beach factories?",
        answer: "We follow strict safety protocols, use proper PPE, and coordinate with your safety team to ensure all cleaning meets OSHA standards."
      },
      {
        question: "Can you clean specialized equipment in Dania Beach?",
        answer: "Yes, we're experienced with various industrial equipment and follow manufacturer specifications for safe, effective cleaning."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans helped us pass our safety inspection with flying colors at our Dania Beach facility. Highly professional service.",
      author: "Safety Director, Dania Beach Production Co."
    }
  },
  {
    id: "davie",
    name: "Davie",
    description: "Davie's industrial facilities depend on our thorough factory cleaning to maintain production efficiency and create safer working environments.",
    faq: [
      {
        question: "What's the cost of factory cleaning in Davie?",
        answer: "Costs vary based on facility size and cleaning frequency. Most Davie factories invest $800-$3,000 per cleaning. We provide free customized quotes."
      },
      {
        question: "Do you provide emergency cleaning in Davie?",
        answer: "Yes, we offer emergency response services for spills, accidents, or urgent cleaning needs at your Davie manufacturing facility."
      }
    ],
    testimonial: {
      text: "Our Davie factory runs smoother thanks to Red Rock Cleans. Their attention to detail is exceptional.",
      author: "Production Supervisor, Davie Manufacturing Solutions"
    }
  },
  {
    id: "fort-lauderdale",
    name: "Fort Lauderdale",
    description: "Fort Lauderdale manufacturers rely on our specialized factory cleaning to reduce downtime, improve safety, and maintain compliance with industry standards.",
    faq: [
      {
        question: "Do you follow OSHA standards in Fort Lauderdale?",
        answer: "Absolutely. We're well-versed in OSHA regulations and ensure all our cleaning procedures meet or exceed compliance requirements."
      },
      {
        question: "How often should factories be cleaned in Fort Lauderdale?",
        answer: "Most Fort Lauderdale factories benefit from daily floor maintenance with weekly deep cleaning, though frequency depends on production volume."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans is our trusted partner for our Fort Lauderdale manufacturing plant. Professional, reliable, and safety-focused.",
      author: "VP of Operations, Fort Lauderdale Industrial Group"
    }
  },
  {
    id: "hallandale-beach",
    name: "Hallandale Beach",
    description: "Hallandale Beach production facilities trust our heavy-duty cleaning services to remove industrial grime and maintain optimal working conditions.",
    faq: [
      {
        question: "Can you degrease machinery in Hallandale Beach?",
        answer: "Yes, we specialize in industrial degreasing using professional-grade products that are effective yet safe for equipment and workers."
      },
      {
        question: "What areas do you clean in Hallandale Beach factories?",
        answer: "We clean production floors, machinery, assembly lines, overhead structures, break rooms, offices, restrooms, and loading docks."
      }
    ],
    testimonial: {
      text: "Our Hallandale Beach facility has seen improved productivity since partnering with Red Rock Cleans. Excellent service.",
      author: "Plant Director, Hallandale Beach Manufacturing"
    }
  },
  {
    id: "hollywood",
    name: "Hollywood",
    description: "Hollywood's industrial sector benefits from our systematic factory cleaning that enhances safety, reduces liability, and improves operational efficiency.",
    faq: [
      {
        question: "Do you provide cleaning reports in Hollywood?",
        answer: "Yes, we provide detailed cleaning reports and documentation to help maintain compliance records for inspections and audits."
      },
      {
        question: "Can you handle large Hollywood facilities?",
        answer: "Yes, we have the equipment and trained staff to service factories of all sizes, from small production shops to large industrial complexes."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Hollywood plant to perfection. Their industrial cleaning expertise is unmatched.",
      author: "Facility Manager, Hollywood Production Systems"
    }
  },
  {
    id: "las-olas",
    name: "Las Olas",
    description: "Las Olas manufacturers depend on our professional cleaning services to maintain pristine production environments and ensure workplace safety.",
    faq: [
      {
        question: "What cleaning methods do you use in Las Olas?",
        answer: "We use industrial-grade equipment including floor scrubbers, high-pressure washers, and specialized degreasing systems for thorough cleaning."
      },
      {
        question: "Do you work weekends in Las Olas?",
        answer: "Yes, we offer flexible scheduling including nights, weekends, and holidays to accommodate your production schedule."
      }
    ],
    testimonial: {
      text: "Our Las Olas manufacturing facility has never looked better. Red Rock Cleans delivers consistent, quality results.",
      author: "Operations Chief, Las Olas Industrial Partners"
    }
  },
  {
    id: "lauderdale-lakes",
    name: "Lauderdale Lakes",
    description: "Lauderdale Lakes factories rely on our comprehensive cleaning protocols to minimize workplace hazards and maintain production schedules.",
    faq: [
      {
        question: "How do you handle production floor cleaning in Lauderdale Lakes?",
        answer: "We use heavy-duty sweeping, scrubbing, and degreasing methods to remove oil, grease, and debris from concrete factory floors."
      },
      {
        question: "Can you clean high areas in Lauderdale Lakes?",
        answer: "Yes, we perform high-dusting of ceilings, rafters, pipes, and overhead structures using specialized equipment and safety procedures."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans keeps our Lauderdale Lakes factory compliant and our workers safe. We couldn't ask for better service.",
      author: "Safety Manager, Lauderdale Lakes Manufacturing"
    }
  },
  {
    id: "lauderhill",
    name: "Lauderhill",
    description: "Lauderhill's manufacturing industry trusts our factory cleaning expertise to create safer, more productive work environments.",
    faq: [
      {
        question: "What makes your Lauderhill factory cleaning different?",
        answer: "We combine industrial-strength cleaning with deep understanding of manufacturing environments, safety requirements, and compliance standards."
      },
      {
        question: "Do you clean break rooms in Lauderhill?",
        answer: "Yes, our service includes complete cleaning of break rooms, offices, restrooms, and all common areas within factory facilities."
      }
    ],
    testimonial: {
      text: "Our Lauderhill production facility runs more efficiently thanks to Red Rock Cleans' thorough cleaning program.",
      author: "Plant Superintendent, Lauderhill Industries"
    }
  },
  {
    id: "margate",
    name: "Margate",
    description: "Margate manufacturers benefit from our specialized cleaning that reduces contamination, prevents equipment failure, and improves workplace morale.",
    faq: [
      {
        question: "How quickly can you start in Margate?",
        answer: "We can typically begin service within 1-3 business days of your initial consultation and facility assessment."
      },
      {
        question: "Do you offer maintenance plans in Margate?",
        answer: "Yes, we provide customized preventive maintenance programs with scheduled cleaning at frequencies that match your operational needs."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our Margate factory for years. Reliable, professional, and always thorough.",
      author: "Production Manager, Margate Manufacturing Solutions"
    }
  },
  {
    id: "miramar",
    name: "Miramar",
    description: "Miramar's production facilities depend on our heavy-duty factory cleaning to maintain OSHA compliance and maximize production efficiency.",
    faq: [
      {
        question: "What equipment do you use in Miramar factories?",
        answer: "We use industrial floor scrubbers, pressure washers, HEPA vacuums, and specialized degreasing equipment for comprehensive factory cleaning."
      },
      {
        question: "Can you handle grease and oil in Miramar?",
        answer: "Yes, we specialize in removing heavy grease, oil, and industrial contaminants using professional-grade degreasing solutions."
      }
    ],
    testimonial: {
      text: "Our Miramar facility's safety record has improved dramatically since partnering with Red Rock Cleans. Exceptional service.",
      author: "EHS Director, Miramar Production Group"
    }
  },
  {
    id: "north-lauderdale",
    name: "North Lauderdale",
    description: "North Lauderdale factories trust our systematic cleaning approach to reduce workplace accidents and maintain pristine production environments.",
    faq: [
      {
        question: "Do you clean during production in North Lauderdale?",
        answer: "We can work around active production, though we recommend scheduled downtime for optimal deep cleaning results and safety."
      },
      {
        question: "What's your response time for North Lauderdale emergencies?",
        answer: "We maintain rapid response capability and can typically deploy to North Lauderdale facilities within 2-4 hours for emergencies."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans understands the demands of our North Lauderdale manufacturing operation. Always reliable and professional.",
      author: "Operations Director, North Lauderdale Industrial"
    }
  },
  {
    id: "pembroke-pines",
    name: "Pembroke Pines",
    description: "Pembroke Pines manufacturers rely on our professional cleaning services to maintain safe, compliant facilities that support production goals.",
    faq: [
      {
        question: "How do you ensure quality in Pembroke Pines?",
        answer: "We use detailed checklists, conduct regular inspections, and maintain open communication with your team to ensure consistent quality."
      },
      {
        question: "Can you clean specialized areas in Pembroke Pines?",
        answer: "Yes, we clean production floors, assembly areas, clean rooms, quality control labs, and all specialized manufacturing spaces."
      }
    ],
    testimonial: {
      text: "Our Pembroke Pines plant has benefited tremendously from Red Rock Cleans' expertise. Production efficiency is at an all-time high.",
      author: "Plant Manager, Pembroke Pines Manufacturing Corp"
    }
  },
  {
    id: "plantation",
    name: "Plantation",
    description: "Plantation's industrial facilities benefit from our thorough factory cleaning that reduces downtime and creates safer working conditions.",
    faq: [
      {
        question: "What certifications do your Plantation cleaners have?",
        answer: "Our technicians are trained in industrial safety, OSHA compliance, hazardous material handling, and proper use of industrial cleaning equipment."
      },
      {
        question: "Do you provide post-construction cleaning in Plantation?",
        answer: "Yes, we offer comprehensive post-construction and post-renovation cleaning for manufacturing facilities and factory expansions."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans keeps our Plantation factory in top condition. Their industrial cleaning knowledge is impressive.",
      author: "Facility Director, Plantation Industrial Services"
    }
  },
  {
    id: "southwest-ranches",
    name: "Southwest Ranches",
    description: "Southwest Ranches manufacturers trust our heavy-duty cleaning to maintain production floors, equipment, and facilities in optimal condition.",
    faq: [
      {
        question: "How long does factory cleaning take in Southwest Ranches?",
        answer: "Cleaning time varies by facility size and scope. Typical factories require 4-12 hours depending on square footage and services needed."
      },
      {
        question: "Do you handle waste disposal in Southwest Ranches?",
        answer: "Yes, we properly collect, segregate, and dispose of industrial waste following all environmental regulations and best practices."
      }
    ],
    testimonial: {
      text: "Our Southwest Ranches production facility is safer and more efficient thanks to Red Rock Cleans' comprehensive cleaning program.",
      author: "VP of Manufacturing, Southwest Ranches Industries"
    }
  },
  {
    id: "sunny-isles-beach",
    name: "Sunny Isles Beach",
    description: "Sunny Isles Beach factories rely on our specialized cleaning services to combat coastal environmental challenges and maintain pristine production areas.",
    faq: [
      {
        question: "How do you handle coastal conditions in Sunny Isles Beach?",
        answer: "We use corrosion-resistant equipment and specialized cleaning methods to address the unique challenges of coastal manufacturing environments."
      },
      {
        question: "What's included in machinery cleaning in Sunny Isles Beach?",
        answer: "We safely clean and degrease production equipment, assembly machinery, and tools using appropriate methods that protect sensitive components."
      }
    ],
    testimonial: {
      text: "The coastal environment is tough on our Sunny Isles Beach facility. Red Rock Cleans keeps everything clean and protected.",
      author: "Maintenance Chief, Sunny Isles Beach Manufacturing"
    }
  },
  {
    id: "sunrise",
    name: "Sunrise",
    description: "Sunrise manufacturing plants depend on our professional factory cleaning to ensure compliance, safety, and maximum production efficiency.",
    faq: [
      {
        question: "Do you offer continuous cleaning in Sunrise?",
        answer: "Yes, we can provide ongoing cleaning support with technicians on-site during production hours for continuous facility maintenance."
      },
      {
        question: "How do you price factory cleaning in Sunrise?",
        answer: "We provide transparent, customized pricing based on facility size, cleaning frequency, and specific needs. Free quotes available."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been instrumental in maintaining our Sunrise factory's high standards. Outstanding service and results.",
      author: "Quality Manager, Sunrise Production Systems"
    }
  },
  {
    id: "tamarac",
    name: "Tamarac",
    description: "Tamarac factories benefit from our comprehensive cleaning protocols that enhance safety, reduce liability, and improve operational performance.",
    faq: [
      {
        question: "What safety measures do you follow in Tamarac?",
        answer: "We follow lockout/tagout procedures, use proper PPE, coordinate with your safety team, and adhere to all OSHA regulations."
      },
      {
        question: "Can you clean during third shift in Tamarac?",
        answer: "Yes, we offer flexible scheduling including third shift, overnight, and weekend cleaning to minimize disruption to production."
      }
    ],
    testimonial: {
      text: "Our Tamarac manufacturing facility has never been safer or cleaner. Red Rock Cleans delivers excellence every time.",
      author: "Operations Manager, Tamarac Manufacturing Group"
    }
  },
  {
    id: "weston",
    name: "Weston",
    description: "Weston's manufacturing sector trusts our factory cleaning expertise to maintain safe, efficient production environments that support business growth.",
    faq: [
      {
        question: "What makes your Weston service unique?",
        answer: "We combine heavy-duty industrial cleaning expertise with deep understanding of OSHA requirements and manufacturing best practices."
      },
      {
        question: "Do you provide ongoing support in Weston?",
        answer: "Yes, we offer scheduled maintenance programs, emergency response services, and ongoing consultation for your Weston manufacturing facility."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been our Weston factory cleaning partner for years. Their expertise and reliability are essential to our operations.",
      author: "Plant Director, Weston Industrial Solutions"
    }
  }
];

const FactoryCleaningSouthFloridaPage = () => {
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
        <title>Factory Cleaning South Florida | Red Rock Cleans</title>
        <meta name="description" content="Professional factory cleaning in South Florida. Red Rock Cleans offers heavy-duty cleaning for manufacturing plants in Fort Lauderdale, Weston, and beyond to ensure safety and productivity." />
        <meta name="keywords" content="factory cleaning South Florida, factory cleaning near me, industrial cleaning South Florida, manufacturing plant cleaning Fort Lauderdale, factory cleaning Hollywood FL, heavy-duty factory cleaning South Florida, production floor cleaning Broward County, machinery degreasing South Florida, OSHA compliant cleaning South Florida, factory cleaning cost South Florida, industrial cleaning prices Fort Lauderdale, what is factory cleaning South Florida, hire factory cleaners in South Florida" />
        <link rel="canonical" href="https://redrockcleans.com/south-florida/factory-cleaning" />
      </Helmet>
      
      <SouthFloridaNavigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/src/assets/hero-commercial.jpg" 
              alt="Professional factory cleaning service in a South Florida manufacturing plant"
              className="w-full h-full object-cover scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                Professional Factory Cleaning in South Florida
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                A clean, compliant factory is essential for worker safety, operational efficiency, and meeting production goals across South Florida. Our specialized industrial cleaning services help manufacturing businesses maintain OSHA-compliant environments, reduce workplace accidents, and maximize productivity through systematic, heavy-duty cleaning protocols.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="h-14 text-lg px-8" asChild>
                  <Link to="/commercial-quote?location=south-florida">
                    <Calendar className="w-5 h-5 mr-2" />
                    Get Your Free Quote
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="h-14 text-lg px-8" asChild>
                  <Link to="/contact">
                    <Factory className="w-5 h-5 mr-2" />
                    Contact Us
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Enhancing Safety, Compliance, and Productivity Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Enhancing Safety, Compliance, and Productivity
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <HardHat className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Prioritizing Worker Safety</h3>
                      <p className="text-muted-foreground">
                        Our factory cleaning services focus on removing hazards like oil spills, debris, and trip hazards that can lead to workplace accidents. By maintaining clean production floors and clear pathways, we help you meet OSHA standards, reduce workers' compensation claims, and create a safer environment for your South Florida manufacturing team.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Cog className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Boosting Production Efficiency</h3>
                      <p className="text-muted-foreground">
                        Clean machinery and organized workspaces prevent costly downtime and improve workflow efficiency. Our systematic cleaning removes grease buildup that can cause equipment failure, maintains clear production pathways, and creates an environment where your team can focus on quality output rather than navigating cluttered, dirty spaces.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <ClipboardCheck className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Upholding Industry Standards</h3>
                      <p className="text-muted-foreground">
                        We're committed to providing a level of cleanliness that meets industry-specific regulations and compliance requirements. From food-grade manufacturing to heavy industrial production, our team understands the unique standards your South Florida facility must maintain and delivers cleaning that ensures you pass inspections and audits.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Comprehensive Factory Cleaning Checklist Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Our Comprehensive Factory Cleaning Checklist
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Layers className="h-10 w-10 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-3">Production Floor Care</h3>
                      <p className="text-muted-foreground text-sm">
                        Heavy-duty sweeping, scrubbing, and industrial degreasing of concrete floors. We remove oil, grease, and debris using professional-grade equipment to maintain safe, slip-free surfaces.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Wrench className="h-10 w-10 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-3">Machinery & Equipment Cleaning</h3>
                      <p className="text-muted-foreground text-sm">
                        Safe cleaning and degreasing of production equipment, assembly machinery, and tools. We follow manufacturer specifications to protect sensitive components while removing buildup.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Construction className="h-10 w-10 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-3">High-Dusting & Structural Cleaning</h3>
                      <p className="text-muted-foreground text-sm">
                        Comprehensive cleaning of ceilings, pipes, rafters, and overhead structures to remove accumulated dust and debris. We use specialized equipment for safe high-area access.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Users className="h-10 w-10 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-3">Common Areas & Restrooms</h3>
                      <p className="text-muted-foreground text-sm">
                        Complete cleaning of break rooms, offices, restrooms, and sanitation facilities. We ensure your workers have clean, comfortable spaces for meals and personal needs.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Commitment to South Florida's Industries Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Our Commitment to South Florida's Industries
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ShieldCheck className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">100%</div>
                  <h3 className="text-lg font-semibold mb-2">Safety Standards Met</h3>
                  <p className="text-muted-foreground text-sm">
                    All our factory clients maintain OSHA compliance through our cleaning
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    <CountUp end={500} duration={2} />+
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Production Hours Saved</h3>
                  <p className="text-muted-foreground text-sm">
                    Annually through reduced downtime and improved efficiency
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Factory className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    <CountUp end={200} duration={2} />+
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Compliant Cleans Completed</h3>
                  <p className="text-muted-foreground text-sm">
                    South Florida factories trust our industrial cleaning expertise
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
                          <h4 className="font-semibold mb-2">Factory Cleaning Services in {city.name}</h4>
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
                            Get Factory Cleaning Quote for {city.name}
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
                Other Industrial & Commercial Services in South Florida
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <Warehouse className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Warehouse Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Professional cleaning services for warehouses and distribution centers
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/south-florida/warehouse-cleaning">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <Factory className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Industrial Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Heavy-duty cleaning for industrial facilities and plants
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/south-florida/industrial-cleaning">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <Building2 className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Post-Construction Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Comprehensive cleaning after construction or renovation projects
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/south-florida/post-construction-cleaning-services">Learn More</Link>
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
                <AccordionItem value="what-is-factory-cleaning" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">What is factory cleaning in South Florida?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Factory cleaning in South Florida involves specialized industrial cleaning services designed for manufacturing environments. This includes heavy-duty floor cleaning and degreasing, machinery and equipment cleaning, high-dusting of overhead structures, removal of industrial waste, cleaning of production areas, break rooms, and restrooms, and ensuring OSHA compliance. Our services are tailored to meet the unique demands of South Florida's manufacturing sector.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="cost" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">How much does factory cleaning cost in South Florida?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Factory cleaning costs vary based on facility size, production type, and cleaning frequency. Most South Florida manufacturers invest $800-$3,000 per cleaning session for small to medium facilities, while large industrial complexes may range from $5,000-$15,000+ depending on scope. We recommend daily floor maintenance with weekly deep cleaning for optimal results. Contact us for a free, customized quote based on your specific manufacturing requirements.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="osha-compliance" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">Do you provide OSHA compliant cleaning in South Florida?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Yes, all our factory cleaning services are designed to meet or exceed OSHA requirements for workplace safety and cleanliness. We follow proper lockout/tagout procedures, maintain clean walking surfaces to prevent slips and falls, ensure proper handling of hazardous materials, provide documentation for compliance audits, and train our staff in industrial safety protocols. Our goal is to help you maintain a safe, compliant manufacturing environment.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="hire-cleaners" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">How do I hire factory cleaners in South Florida?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Hiring factory cleaners in South Florida is simple with Red Rock Cleans. Contact us for a free consultation and facility assessment. We'll evaluate your specific cleaning needs, production schedule, and compliance requirements. Then we'll provide a detailed proposal with transparent pricing and a customized cleaning plan. Once approved, we can typically begin service within 1-3 business days. We offer flexible scheduling to work around your production cycles.
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
              Ready to Enhance Your Factory's Safety and Efficiency?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join South Florida manufacturers that trust Red Rock Cleans for professional factory cleaning services
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
              <Link to="/commercial-quote">Get Your Free Factory Cleaning Quote</Link>
            </Button>
          </div>
        </section>

        {/* Image Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <img 
                src="/static/service-products.jpg" 
                alt="A clean and safe factory floor in South Florida after professional cleaning by Red Rock Cleans"
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

export default FactoryCleaningSouthFloridaPage;


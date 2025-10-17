import { ColumbusNavigation } from "@/components/ColumbusNavigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Sparkles, Droplets, Heart, Scissors, Paintbrush, Sofa, ShowerHead, Smile, BadgeCheck, Wind, Store, Hospital, Dumbbell, Phone, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";

const cities = [
  {
    id: "dublin",
    name: "Dublin",
    description: "Dublin's thriving beauty and wellness community trusts Red Rock Cleans to maintain the pristine, hygienic environments that create luxurious experiences for clients. Our professional salon and spa cleaning services ensure your Dublin establishment reflects the quality and care you provide every day.",
    faq: [
      {
        question: "Can you clean our Dublin salon after hours?",
        answer: "Yes, we offer flexible scheduling for Dublin salons and spas including evening and weekend cleaning to ensure your facility is spotless before opening without disrupting client services."
      },
      {
        question: "Do you meet Ohio Board of Cosmetology standards in Dublin?",
        answer: "Absolutely. Our Dublin salon cleaning follows all Ohio State Board of Cosmetology sanitation requirements, using appropriate disinfectants and protocols to maintain compliant, hygienic facilities."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans keeps our Dublin spa immaculate. Our clients constantly comment on how clean and relaxing our space feels.",
      author: "Owner, Dublin Day Spa"
    }
  },
  {
    id: "upper-arlington",
    name: "Upper Arlington",
    description: "Upper Arlington's upscale salons and spas rely on our meticulous cleaning services to maintain the luxurious environments their discerning clients expect. We understand that in Upper Arlington's beauty market, impeccable cleanliness is essential for success and client retention.",
    faq: [
      {
        question: "What makes your Upper Arlington salon cleaning different?",
        answer: "We combine beauty industry expertise with understanding of luxury service standards, ensuring your Upper Arlington salon or spa maintains the pristine environment that matches your premium brand."
      },
      {
        question: "Do you clean medispas in Upper Arlington?",
        answer: "Yes, we provide specialized cleaning for medispas in Upper Arlington with understanding of the heightened hygiene requirements for medical aesthetic treatments and procedures."
      }
    ],
    testimonial: {
      text: "Our Upper Arlington salon maintains its upscale appearance thanks to Red Rock Cleans. They understand high-end beauty industry cleaning.",
      author: "Manager, Upper Arlington Hair Studio"
    }
  },
  {
    id: "powell",
    name: "Powell",
    description: "Powell salons and spas depend on our professional cleaning services that create the welcoming, hygienic spaces where clients relax and trust your expertise. We maintain the comprehensive cleanliness that supports your Powell beauty business success.",
    faq: [
      {
        question: "How do you handle Powell salon hair cleanup?",
        answer: "We thoroughly sweep and vacuum hair from all surfaces in Powell salons, clean styling stations, and maintain spotless floors that reflect professionalism throughout your facility."
      },
      {
        question: "Can you disinfect pedicure chairs in Powell spas?",
        answer: "Yes, our Powell spa cleaning includes comprehensive disinfection of pedicure chairs, foot baths, and manicure stations using appropriate sanitizers that meet Ohio cosmetology board requirements."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans delivers consistent salon cleaning for our Powell location. Professional service that understands beauty industry needs.",
      author: "Owner, Powell Nail Salon"
    }
  },
  {
    id: "lewis-center",
    name: "Lewis Center",
    description: "Lewis Center beauty establishments trust our specialized cleaning services to maintain the pristine conditions essential for client confidence and satisfaction. Our experienced team ensures your Lewis Center salon or spa always looks and feels its best.",
    faq: [
      {
        question: "Are your Lewis Center cleaners trained in salon protocols?",
        answer: "Yes, our Lewis Center team receives training in beauty industry cleaning including proper disinfection of tools, equipment sanitation, and handling of hair and beauty product residue."
      },
      {
        question: "What areas do you clean in Lewis Center salons?",
        answer: "We clean all areas including styling stations, treatment rooms, nail stations, reception, waiting areas, restrooms, break rooms, and storage areas in Lewis Center beauty facilities."
      }
    ],
    testimonial: {
      text: "Our Lewis Center salon stays beautifully clean thanks to Red Rock Cleans. They're reliable and understand our industry.",
      author: "Manager, Lewis Center Beauty Bar"
    }
  },
  {
    id: "worthington",
    name: "Worthington",
    description: "Worthington's diverse beauty and wellness community benefits from our professional cleaning that maintains the hygienic, inviting environments clients expect. We help Worthington salons and spas create spaces where clients feel pampered and safe.",
    faq: [
      {
        question: "How often should Worthington salons schedule cleaning?",
        answer: "Most Worthington salons benefit from daily cleaning with deep cleaning scheduled weekly, ensuring consistent facility maintenance that meets health standards and client expectations."
      },
      {
        question: "Do you clean Worthington barber shops?",
        answer: "Yes, we provide professional cleaning for barber shops in Worthington including chair sanitization, floor care, and maintaining the clean, masculine environment your clients appreciate."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Worthington spa with professionalism and attention to wellness industry standards. Highly recommended!",
      author: "Director, Worthington Wellness Spa"
    }
  },
  {
    id: "new-albany",
    name: "New Albany",
    description: "New Albany's luxury salons and high-end spas demand the highest level of cleanliness and presentation. Our premium cleaning services ensure New Albany beauty establishments maintain the immaculate conditions that match their sophisticated clientele and upscale services.",
    faq: [
      {
        question: "Can you handle New Albany luxury spas?",
        answer: "Yes, we specialize in luxury spa cleaning for New Albany facilities, understanding the meticulous standards required for high-end beauty and wellness environments serving discerning clients."
      },
      {
        question: "Do you provide emergency cleaning for New Albany salons?",
        answer: "Yes, we offer emergency and on-call cleaning services for New Albany salons and spas to handle spills, preparation for VIP clients, or urgent facility needs."
      }
    ],
    testimonial: {
      text: "Our New Albany medspa's pristine condition reflects Red Rock Cleans' commitment to excellence. They deliver the premium service we require.",
      author: "Medical Director, New Albany Medspa"
    }
  },
  {
    id: "bexley",
    name: "Bexley",
    description: "Bexley salons and spas trust our dependable cleaning services to maintain the welcoming, hygienic environments essential for client satisfaction and retention. We treat every Bexley beauty establishment with the personalized care it deserves.",
    faq: [
      {
        question: "What salon equipment do you clean in Bexley?",
        answer: "We clean and disinfect all salon equipment areas in Bexley including styling chairs, shampoo bowls, dryers, treatment beds, and manicure stations while following proper sanitation protocols."
      },
      {
        question: "How do you ensure quality in Bexley salon cleaning?",
        answer: "We use detailed beauty industry checklists, conduct quality inspections, and maintain open communication with Bexley salon management to ensure consistent, thorough cleaning."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our Bexley salon with reliability and professionalism. Our space always looks welcoming.",
      author: "Owner, Bexley Hair Boutique"
    }
  },
  {
    id: "german-village",
    name: "German Village",
    description: "German Village's charming salons and spas benefit from our adaptable cleaning services that maintain modern hygiene standards while preserving the character of these special spaces. We help German Village beauty businesses create clean, inviting environments.",
    faq: [
      {
        question: "Can you clean German Village salons in historic buildings?",
        answer: "Yes, we adapt our cleaning methods for German Village's historic salon spaces while maintaining the same rigorous hygiene standards required for beauty industry compliance."
      },
      {
        question: "Do you clean German Village day spas?",
        answer: "Yes, we provide comprehensive cleaning for day spas in German Village including treatment rooms, relaxation areas, and all facilities that support wellness services."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans successfully maintains our German Village salon in this historic building. They understand both beauty and unique spaces.",
      author: "Manager, German Village Beauty Studio"
    }
  },
  {
    id: "short-north",
    name: "Short North",
    description: "Short North's vibrant beauty scene demands professional cleaning that matches the energy and sophistication of this premier district. Our salon and spa cleaning services help Short North establishments maintain the high standards that keep clients returning.",
    faq: [
      {
        question: "Do you serve Short North boutique salons?",
        answer: "Yes, we provide specialized cleaning for Short North boutique salons, independent stylists, and trendy beauty spaces with understanding of urban salon environments."
      },
      {
        question: "Can you accommodate Short North's varied salon hours?",
        answer: "Absolutely. We offer flexible scheduling for Short North salons including late-night and weekend cleaning to work around extended service hours and busy schedules."
      }
    ],
    testimonial: {
      text: "Our Short North salon stays spotlessly clean thanks to Red Rock Cleans. They understand urban beauty industry needs.",
      author: "Owner, Short North Style Bar"
    }
  },
  {
    id: "victorian-village",
    name: "Victorian Village",
    description: "Victorian Village salons and spas rely on our professional cleaning that maintains the hygienic, welcoming spaces essential for beauty industry success. Whether serving traditional salons or modern wellness centers, we deliver the cleanliness clients notice.",
    faq: [
      {
        question: "What salon zones do you prioritize in Victorian Village?",
        answer: "We prioritize high-touch surfaces, styling stations, treatment rooms, and client areas while thoroughly cleaning all spaces in Victorian Village salons to maintain comprehensive hygiene."
      },
      {
        question: "Do you provide Victorian Village weekend spa cleaning?",
        answer: "Yes, we provide weekend and flexible scheduling for Victorian Village spas to ensure facilities are pristine without disrupting weekday client services."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Victorian Village spa with professionalism and attention to wellness standards. Excellent service.",
      author: "Director, Victorian Village Day Spa"
    }
  },
  {
    id: "hillard",
    name: "Hilliard",
    description: "Hilliard's growing beauty and wellness community trusts our comprehensive cleaning services to maintain the pristine facilities essential for client satisfaction and business success. We protect Hilliard salons and spas through meticulous cleaning and hygiene-focused service.",
    faq: [
      {
        question: "Do you serve Hilliard chain salon locations?",
        answer: "Yes, we work with both independent and chain salons in Hilliard, following brand standards and maintaining consistent cleanliness that reflects your business's reputation."
      },
      {
        question: "What training does your Hilliard salon team receive?",
        answer: "Our Hilliard team receives training in beauty industry cleaning, proper disinfection protocols, handling of hair and product residue, and Ohio cosmetology board requirements."
      }
    ],
    testimonial: {
      text: "Our Hilliard salon has been excellently maintained by Red Rock Cleans. Their beauty industry cleaning expertise shows in every detail.",
      author: "Manager, Hilliard Hair Design"
    }
  },
  {
    id: "westerville",
    name: "Westerville",
    description: "Westerville salons and spas trust our specialized cleaning services to maintain the welcoming, hygienic environments that support client loyalty and positive reviews. Our experienced team understands the comprehensive cleaning needs of Westerville beauty establishments.",
    faq: [
      {
        question: "Can you customize cleaning for Westerville salon types?",
        answer: "Yes, we create customized cleaning plans for Westerville salons and spas based on services offered, facility size, client volume, and specific hygiene requirements."
      },
      {
        question: "How do you coordinate with Westerville salon staff?",
        answer: "We maintain open communication with Westerville salon owners and managers, adapting our schedules to minimize disruption while ensuring thorough cleaning of all areas."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provides the professional salon cleaning our Westerville facility needs. Reliable, thorough, and beauty-focused service.",
      author: "Owner, Westerville Salon & Spa"
    }
  }
];

const SalonSpaCleaningColumbusOhioPage = () => {
  const [openAccordion, setOpenAccordion] = useState<string>("");
  const [countersVisible, setCountersVisible] = useState(false);
  const [clientSatisfaction, setClientSatisfaction] = useState(0);
  const [hygieneScore, setHygieneScore] = useState(0);
  const [stressFree, setStressFree] = useState(0);

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setCountersVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const counterSection = document.getElementById('counters-section');
    if (counterSection) {
      observer.observe(counterSection);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (countersVisible) {
      const duration = 2000;
      const steps = 60;
      const interval = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        
        setClientSatisfaction(Math.floor(progress * 96));
        setHygieneScore(Math.floor(progress * 100));
        setStressFree(Math.floor(progress * 94));

        if (step >= steps) {
          clearInterval(timer);
          setClientSatisfaction(96);
          setHygieneScore(100);
          setStressFree(94);
        }
      }, interval);

      return () => clearInterval(timer);
    }
  }, [countersVisible]);

  const handleAccordionChange = (value: string) => {
    setOpenAccordion(value);
    window.location.hash = value;
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Salon & Spa Cleaning in Columbus Ohio | Red Rock Cleans</title>
        <meta name="description" content="Professional salon and spa cleaning in Columbus, OH. Red Rock Cleans ensures a pristine, hygienic, and relaxing environment for hair salons, day spas, and medispas in Dublin and the Short North." />
        <meta name="keywords" content="salon and spa cleaning Columbus Ohio, salon cleaning near me, spa cleaning Columbus Ohio, hair salon cleaning Dublin OH, nail salon cleaning Short North, medispa cleaning Columbus, best salon cleaners Columbus, hygienic spa cleaning Columbus Ohio, beauty salon sanitation, barber shop cleaning Columbus, salon cleaning cost Columbus Ohio, spa cleaning prices Columbus, what is salon cleaning Columbus, hire spa cleaners in Columbus Ohio" />
        <link rel="canonical" href="https://redrockcleans.com/columbus-ohio/salon-spa-cleaning" />
      </Helmet>
      
      <ColumbusNavigation loginUrl="https://customer-portal.maidily.com/red-rock-cleans-columbus-ohio/sign-in" bookingUrl="/commercial-quote?location=columbus-ohio" />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/src/assets/hero-commercial.jpg" 
              alt="Professional salon and spa cleaning service in Columbus Ohio"
              className="w-full h-full object-cover scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                Pristine Salon & Spa Cleaning for Ultimate Client Relaxation in Columbus
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                In the competitive Columbus beauty and wellness industry, cleanliness is paramount for creating a luxurious, relaxing, and trustworthy experience for every client. Our specialized salon and spa cleaning services maintain the immaculate environments that reflect your commitment to excellence, meet Ohio State Board of Cosmetology standards, and ensure clients feel pampered from the moment they walk through your door. Trust Red Rock Cleans to keep your Columbus salon or spa spotless.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="h-14 text-lg px-8" asChild>
                  <Link to="/commercial-quote?location=columbus-ohio">
                    <Sparkles className="w-5 h-5 mr-2" />
                    Schedule Salon Cleaning
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="h-14 text-lg px-8" asChild>
                  <Link to="/contact">
                    <Heart className="w-5 h-5 mr-2" />
                    Request Spa Assessment
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Elevating Your Columbus Client's Experience Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Elevating Your Columbus Client's Experience
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Sparkles className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Serene & Inviting Atmosphere</h3>
                      <p className="text-muted-foreground">
                        Immaculate cleanliness contributes to relaxation and a high-end feel in your Columbus salon or spa. Clients immediately sense when a space is truly clean, and that perception of quality and care allows them to fully relax, trust your services, and become loyal advocates for your business.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Droplets className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Strict Hygiene & Disinfection</h3>
                      <p className="text-muted-foreground">
                        Our practices prevent cross-contamination and meet Ohio State Board of Cosmetology standards in your Columbus facility. We use appropriate disinfectants, follow proper protocols for beauty industry sanitation, and maintain the rigorous hygiene that protects clients and demonstrates your professionalism.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Flawless First Impressions</h3>
                      <p className="text-muted-foreground">
                        A spotless reception and waiting area sets the tone for a premium experience at your Columbus salon or spa. Before clients even reach your chair or treatment room, they're judging your business by the cleanliness they see, making that first impression absolutely critical for success.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Our Comprehensive Salon & Spa Cleaning Checklist Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Our Comprehensive Salon & Spa Cleaning Checklist
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Scissors className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">Treatment & Styling Rooms</h3>
                      <p className="text-muted-foreground">
                        Sanitizing surfaces, equipment, and managing hair/product residue in your Columbus salon. We thoroughly clean styling stations, shampoo bowls, treatment beds, and all surfaces while properly disposing of hair and managing product buildup to maintain the pristine spaces your services require.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Paintbrush className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">Nail Stations & Pedicure Chairs</h3>
                      <p className="text-muted-foreground">
                        Deep cleaning and disinfection of foot baths and manicure stations in your Columbus spa. We use appropriate sanitizers to clean pedicure chairs, foot baths, manicure tables, and nail equipment, meeting Ohio Board of Cosmetology requirements for infection control and client safety.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Sofa className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">Reception & Waiting Areas</h3>
                      <p className="text-muted-foreground">
                        Maintaining spotless first impressions, dusting, and floor care in your Columbus salon. We ensure reception desks, waiting area furniture, magazines, floors, and windows always look pristine, creating the welcoming environment that puts clients at ease from the moment they arrive.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <ShowerHead className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">Restrooms & Changing Areas</h3>
                      <p className="text-muted-foreground">
                        Intensive sanitization and restocking to luxury standards in your Columbus spa. We maintain spa-quality restrooms and changing areas with thorough disinfection, premium supply restocking, and attention to the details that demonstrate your commitment to client comfort and hygiene.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* The Difference a Professional Clean Makes Section */}
        <section id="counters-section" className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                The Difference a Professional Clean Makes
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <Smile className="h-16 w-16 mx-auto mb-4 opacity-90" />
                  <div className="text-5xl font-bold mb-2">{clientSatisfaction}%</div>
                  <h3 className="text-xl font-semibold opacity-90">Client Satisfaction Boost</h3>
                </div>
                
                <div className="text-center">
                  <BadgeCheck className="h-16 w-16 mx-auto mb-4 opacity-90" />
                  <div className="text-5xl font-bold mb-2">{hygieneScore}%</div>
                  <h3 className="text-xl font-semibold opacity-90">Hygiene Standard Score</h3>
                </div>
                
                <div className="text-center">
                  <Wind className="h-16 w-16 mx-auto mb-4 opacity-90" />
                  <div className="text-5xl font-bold mb-2">{stressFree}%</div>
                  <h3 className="text-xl font-semibold opacity-90">Stress-Free Environment</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Areas We Serve Section */}
        <section className="py-16 bg-background">
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
                          <h4 className="font-semibold mb-2">Salon & Spa Cleaning in {city.name}</h4>
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
                            Schedule {city.name} Salon Cleaning
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
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">
                Other Commercial Cleaning Services in Columbus
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <Store className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Retail Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Professional cleaning services for retail stores and boutiques
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/columbus-ohio/retail-cleaning">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <Hospital className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Medical Office Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      HIPAA compliant cleaning for medispas and healthcare facilities
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
                      Hygienic cleaning and disinfection for fitness centers
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
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Frequently Asked Questions
              </h2>
              <Accordion type="single" className="space-y-4">
                <AccordionItem value="what-included" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">What is included in salon and spa cleaning in Columbus Ohio?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Our comprehensive salon and spa cleaning in Columbus includes styling station sanitization, treatment room cleaning, nail station and pedicure chair disinfection, hair and product residue removal, reception and waiting area maintenance, restroom sanitization, window cleaning, floor care, high-touch surface disinfection, and trash removal. We follow Ohio State Board of Cosmetology sanitation requirements to maintain the pristine, hygienic environment your clients expect.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="cost" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">How much does salon and spa cleaning cost in Columbus Ohio?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Salon and spa cleaning costs in Columbus vary based on facility size, services offered, cleaning frequency, and specific requirements. Most salons invest between $300-$1,500 per month for professional cleaning services. Small boutique salons typically have lower costs, while large full-service spas with extensive treatment rooms require more comprehensive cleaning. We provide free consultations and customized quotes based on your Columbus salon or spa's specific needs.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="standards" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">Do you meet Ohio Board of Cosmetology standards in Columbus?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Yes, all our Columbus salon and spa cleaning services follow Ohio State Board of Cosmetology sanitation requirements. We use appropriate EPA-registered disinfectants, follow proper protocols for beauty industry hygiene, properly clean and sanitize equipment areas, and maintain the documentation that supports your compliance. Our team understands the specific standards beauty professionals must meet.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="products" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">Are your cleaning products safe for Columbus salons and spas?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Yes, all cleaning products used in Columbus salons and spas are safe for use around clients, staff, and beauty products while providing effective disinfection. We select products appropriate for beauty industry environments that won't damage equipment, affect air quality, or leave residues that could interfere with services. Our products meet all safety and efficacy standards for professional salon and spa cleaning.
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
              Ready to Create the Ultimate Relaxation Environment?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join Columbus salons and spas that trust Red Rock Cleans for pristine, hygienic beauty facilities
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
              <Link to="/commercial-quote?location=columbus-ohio">Schedule Your Salon & Spa Cleaning Today</Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default SalonSpaCleaningColumbusOhioPage;


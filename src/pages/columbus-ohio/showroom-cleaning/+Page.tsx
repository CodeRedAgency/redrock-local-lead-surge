import { ColumbusNavigation } from "@/components/ColumbusNavigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Diamond, Sparkles, Handshake, SprayCan, Square, Car, Sofa, Users, DollarSign, Search, Store, Utensils, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";

const cities = [
  {
    id: "dublin",
    name: "Dublin",
    description: "Dublin's luxury retailers and automotive showrooms trust Red Rock Cleans to maintain the pristine environments that showcase high-value products with excellence. Our professional showroom cleaning services ensure every detail reflects the quality and sophistication your Dublin business represents.",
    faq: [
      {
        question: "Can you clean our Dublin car dealership showroom?",
        answer: "Yes, we specialize in automotive showroom cleaning for Dublin dealerships including floor polishing, glass cleaning, vehicle dusting, and client area maintenance to create the immaculate environment that sells luxury vehicles."
      },
      {
        question: "Do you polish Dublin showroom floors?",
        answer: "Absolutely. We provide specialized floor care for Dublin showrooms including polishing, buffing, and maintenance for tile, concrete, and hardwood floors to maintain the gleaming surfaces that reflect quality."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans keeps our Dublin automotive showroom looking showroom-perfect. Our clients notice the difference in cleanliness and presentation.",
      author: "General Manager, Dublin Luxury Auto"
    }
  },
  {
    id: "upper-arlington",
    name: "Upper Arlington",
    description: "Upper Arlington showrooms rely on our meticulous cleaning services to maintain the flawless presentation that luxury products demand. We understand that in Upper Arlington's upscale market, every detail of cleanliness influences purchasing decisions and brand perception.",
    faq: [
      {
        question: "What makes your Upper Arlington showroom cleaning different?",
        answer: "We combine luxury retail expertise with understanding of high-end product presentation, ensuring your Upper Arlington showroom maintains the immaculate environment that matches your premium brand positioning."
      },
      {
        question: "Do you clean furniture showrooms in Upper Arlington?",
        answer: "Yes, we provide specialized cleaning for furniture showrooms in Upper Arlington including careful product dusting, floor care, and maintenance that protects valuable display items while creating inviting spaces."
      }
    ],
    testimonial: {
      text: "Our Upper Arlington showroom maintains its luxury appearance thanks to Red Rock Cleans. They understand high-end retail presentation.",
      author: "Owner, Upper Arlington Design Gallery"
    }
  },
  {
    id: "powell",
    name: "Powell",
    description: "Powell showrooms depend on our professional cleaning services that create the impressive environments where products shine and customers feel confident making significant purchases. We maintain the pristine conditions that support your Powell business success.",
    faq: [
      {
        question: "How do you handle Powell showroom glass cleaning?",
        answer: "We provide streak-free cleaning for Powell showroom windows and glass displays using professional techniques and products that ensure maximum visibility and pristine presentation of your products."
      },
      {
        question: "Can you dust Powell showroom products?",
        answer: "Yes, our Powell showroom cleaning includes careful, lint-free dusting of all products and displays using appropriate methods for different materials to protect merchandise while ensuring pristine presentation."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans keeps our Powell showroom looking perfect for every customer visit. Professional service that understands presentation matters.",
      author: "Manager, Powell Outdoor Equipment"
    }
  },
  {
    id: "lewis-center",
    name: "Lewis Center",
    description: "Lewis Center showrooms trust our comprehensive cleaning services to maintain the spotless environments that influence buying decisions. Our experienced team ensures your products are showcased in spaces that reflect their quality and value.",
    faq: [
      {
        question: "Do you clean Lewis Center automotive showrooms?",
        answer: "Yes, we specialize in automotive showroom cleaning for Lewis Center dealerships including floors, windows, vehicle displays, and customer areas to maintain the pristine environment that sells cars."
      },
      {
        question: "What areas do you clean in Lewis Center showrooms?",
        answer: "We clean all areas including display floors, product surfaces, windows, client lounges, offices, restrooms, and exterior entryways in Lewis Center showrooms for complete facility presentation."
      }
    ],
    testimonial: {
      text: "Our Lewis Center showroom has never looked better. Red Rock Cleans delivers consistent, professional cleaning that our customers notice.",
      author: "Director, Lewis Center Home Center"
    }
  },
  {
    id: "worthington",
    name: "Worthington",
    description: "Worthington showrooms benefit from our specialized cleaning that protects product integrity while creating the impressive presentation essential for luxury retail and high-value sales. We maintain the environments where Worthington customers make confident purchases.",
    faq: [
      {
        question: "How often should Worthington showrooms schedule cleaning?",
        answer: "Most Worthington showrooms benefit from daily or nightly cleaning with regular floor polishing and deep cleaning scheduled based on foot traffic and product type to maintain consistent presentation."
      },
      {
        question: "Do you use safe products in Worthington showrooms?",
        answer: "Yes, all cleaning products used in Worthington showrooms are safe for use around merchandise, employees, and customers while providing effective cleaning and maintaining pristine conditions."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans understands the presentation standards our Worthington showroom requires. Reliable and thorough every visit.",
      author: "Owner, Worthington Luxury Goods"
    }
  },
  {
    id: "new-albany",
    name: "New Albany",
    description: "New Albany's premium showrooms demand the highest level of cleanliness and presentation. Our luxury showroom cleaning services ensure New Albany businesses maintain the immaculate environments that match the sophistication of their products and discerning clientele.",
    faq: [
      {
        question: "Can you handle New Albany luxury showrooms?",
        answer: "Yes, we specialize in high-end showroom cleaning for New Albany luxury retailers and dealerships, understanding the meticulous attention required for premium product environments and upscale clientele."
      },
      {
        question: "Do you provide emergency cleaning for New Albany showrooms?",
        answer: "Yes, we offer emergency and on-call cleaning services for New Albany showrooms to handle unexpected situations, special events, or urgent presentation needs before VIP clients."
      }
    ],
    testimonial: {
      text: "Our New Albany showroom's pristine condition reflects Red Rock Cleans' commitment to excellence. They deliver the premium service we require.",
      author: "General Manager, New Albany Luxury Motors"
    }
  },
  {
    id: "bexley",
    name: "Bexley",
    description: "Bexley showrooms trust our dependable cleaning services to maintain the professional presentation essential for successful sales environments. We treat every Bexley showroom with the care it deserves, protecting products while creating impressive spaces.",
    faq: [
      {
        question: "What showroom types do you serve in Bexley?",
        answer: "We serve all showroom types in Bexley including automotive dealerships, furniture galleries, appliance stores, and luxury retail showrooms with customized cleaning protocols for each."
      },
      {
        question: "How do you ensure quality in Bexley showroom cleaning?",
        answer: "We use detailed checklists, conduct regular quality inspections, and maintain open communication with Bexley showroom management to ensure consistent, high-quality results every service."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our Bexley showroom with professionalism and reliability. Our space always looks impressive.",
      author: "Owner, Bexley Fine Furnishings"
    }
  },
  {
    id: "german-village",
    name: "German Village",
    description: "German Village showrooms benefit from our adaptable cleaning services that maintain modern presentation standards while respecting the unique character of historic spaces. We help German Village businesses showcase products in pristine, inviting environments.",
    faq: [
      {
        question: "Can you clean German Village showrooms in historic buildings?",
        answer: "Yes, we adapt our cleaning methods for German Village's historic showroom spaces while maintaining the same rigorous standards that create impressive product presentations."
      },
      {
        question: "Do you handle German Village specialty showrooms?",
        answer: "Yes, we clean specialty showrooms in German Village including art galleries, antique shops, and unique retail spaces with appropriate care for valuable and delicate items."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans successfully maintains our German Village showroom in this historic building. They understand both presentation and unique spaces.",
      author: "Manager, German Village Design Center"
    }
  },
  {
    id: "short-north",
    name: "Short North",
    description: "Short North's vibrant showroom scene demands professional cleaning that matches the energy and sophistication of this premier retail district. Our showroom cleaning services help Short North businesses maintain the high standards that attract discerning customers.",
    faq: [
      {
        question: "Do you serve Short North art galleries and design showrooms?",
        answer: "Yes, we provide specialized cleaning for Short North galleries, design showrooms, and specialty retail spaces with understanding of the unique needs of these high-end environments."
      },
      {
        question: "Can you accommodate Short North's varied showroom hours?",
        answer: "Absolutely. We offer flexible scheduling for Short North showrooms including evening, overnight, and weekend cleaning to work around extended hours and special events."
      }
    ],
    testimonial: {
      text: "Our Short North showroom stays impeccably clean thanks to Red Rock Cleans. They understand urban luxury retail presentation.",
      author: "Director, Short North Contemporary Designs"
    }
  },
  {
    id: "victorian-village",
    name: "Victorian Village",
    description: "Victorian Village showrooms rely on our professional cleaning that maintains impressive product presentation while respecting neighborhood character. Whether serving traditional or contemporary showrooms, we deliver the cleanliness that supports sales success.",
    faq: [
      {
        question: "What showroom fixtures do you clean in Victorian Village?",
        answer: "We clean all showroom fixtures in Victorian Village including display cases, shelving, pedestals, lighting, and specialty fixtures while protecting products and maintaining pristine presentation."
      },
      {
        question: "Do you provide Victorian Village weekend showroom cleaning?",
        answer: "Yes, we provide weekend and flexible scheduling for Victorian Village showrooms to ensure facilities are spotless before opening without disrupting business operations."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Victorian Village showroom with attention to the details that matter. Our products always look their best.",
      author: "Owner, Victorian Village Home Gallery"
    }
  },
  {
    id: "hillard",
    name: "Hilliard",
    description: "Hilliard's expanding showroom community trusts our comprehensive cleaning services to create the professional environments that influence purchasing decisions. From automotive to furniture, we maintain the pristine conditions Hilliard showrooms require.",
    faq: [
      {
        question: "Do you serve Hilliard's automotive mega-dealers?",
        answer: "Yes, we have the capacity and experience to serve large automotive dealerships in Hilliard, from small specialty lots to multi-brand mega-dealers with extensive showroom spaces."
      },
      {
        question: "What makes your Hilliard showroom cleaning reliable?",
        answer: "We use consistent teams, detailed protocols, and quality assurance processes to ensure your Hilliard showroom receives dependable, professional cleaning every service."
      }
    ],
    testimonial: {
      text: "Our Hilliard dealership has been excellently maintained by Red Rock Cleans. Their showroom cleaning expertise is evident in every detail.",
      author: "General Manager, Hilliard Auto Group"
    }
  },
  {
    id: "westerville",
    name: "Westerville",
    description: "Westerville showrooms trust our specialized cleaning services to maintain the impressive environments that showcase products effectively and influence buying decisions. Our experienced team understands the comprehensive cleaning needs of Westerville showroom businesses.",
    faq: [
      {
        question: "Can you customize cleaning for Westerville showroom types?",
        answer: "Yes, we create customized cleaning plans for Westerville showrooms based on product type, showroom size, foot traffic, and specific presentation requirements."
      },
      {
        question: "How do you coordinate with Westerville showroom staff?",
        answer: "We maintain open communication with Westerville showroom managers and adapt our schedules to minimize disruption while ensuring thorough cleaning of all areas."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provides the professional showroom cleaning our Westerville business needs. Reliable, thorough, and presentation-focused service.",
      author: "Owner, Westerville Specialty Vehicles"
    }
  }
];

const ShowroomCleaningColumbusOhioPage = () => {
  const [openAccordion, setOpenAccordion] = useState<string>("");
  const [countersVisible, setCountersVisible] = useState(false);
  const [clientImpressions, setClientImpressions] = useState(0);
  const [perceivedValue, setPerceivedValue] = useState(0);
  const [detailScore, setDetailScore] = useState(0);

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
        
        setClientImpressions(Math.floor(progress * 97));
        setPerceivedValue(Math.floor(progress * 35));
        setDetailScore(Math.floor(progress * 99));

        if (step >= steps) {
          clearInterval(timer);
          setClientImpressions(97);
          setPerceivedValue(35);
          setDetailScore(99);
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
        <title>Showroom Cleaning Services Columbus Ohio | Red Rock Cleans</title>
        <meta name="description" content="Professional showroom cleaning in Columbus, OH. Red Rock Cleans enhances your product presentation with meticulous cleaning for car dealerships and luxury retail in Dublin and New Albany." />
        <meta name="keywords" content="showroom cleaning services Columbus Ohio, showroom cleaning near me, car dealership cleaning Columbus Ohio, furniture showroom cleaning Dublin OH, luxury retail cleaning New Albany, best showroom cleaners Columbus, professional showroom cleaning Columbus Ohio, showroom floor polishing Columbus, immaculate dealership cleaning Columbus, showroom cleaning cost Columbus Ohio, dealership cleaning prices Columbus, what is showroom cleaning Columbus, hire showroom cleaners in Columbus Ohio" />
        <link rel="canonical" href="https://redrockcleans.com/columbus-ohio/showroom-cleaning" />
      </Helmet>
      
      <ColumbusNavigation loginUrl="https://customer-portal.maidily.com/red-rock-cleans-columbus-ohio/sign-in" bookingUrl="/commercial-quote?location=columbus-ohio" />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/src/assets/hero-commercial.jpg" 
              alt="Professional showroom cleaning service in Columbus Ohio"
              className="w-full h-full object-cover scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                Impeccable Showroom Cleaning to Showcase Your Columbus Products
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                For high-value products in Columbus, the showroom's cleanliness is a direct reflection of the product's quality and is crucial for influencing purchasing decisions. Our specialized showroom cleaning services create the pristine environments where luxury vehicles, furniture, and premium products shine, helping your business make powerful first impressions that close sales. Trust Red Rock Cleans to maintain the flawless presentation your Columbus showroom deserves.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="h-14 text-lg px-8" asChild>
                  <Link to="/commercial-quote?location=columbus-ohio">
                    <Diamond className="w-5 h-5 mr-2" />
                    Schedule Showroom Cleaning
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="h-14 text-lg px-8" asChild>
                  <Link to="/contact">
                    <Sparkles className="w-5 h-5 mr-2" />
                    Request Showroom Assessment
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Creating a Flawless Buying Environment Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Creating a Flawless Buying Environment
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Diamond className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Pristine Product Presentation</h3>
                      <p className="text-muted-foreground">
                        Ensuring every product is free of dust, smudges, and fingerprints in your Columbus showroom. We meticulously clean vehicles, furniture, appliances, and displays so every item looks showroom-perfect, allowing your products to speak for themselves without distraction from dirt or imperfections that undermine perceived value.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Sparkles className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Gleaming Floors & Surfaces</h3>
                      <p className="text-muted-foreground">
                        Perfectly polished floors and spotless surfaces that reflect luxury in your Columbus showroom. We maintain pristine tile, concrete, or hardwood floors with specialized polishing and care that creates the gleaming reflections customers associate with premium products and high-quality brands.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Handshake className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">A Premium Client Experience</h3>
                      <p className="text-muted-foreground">
                        Clean client lounges, offices, and reception areas are essential for your Columbus showroom success. We ensure every customer touchpoint—from comfortable seating areas to private consultation offices—maintains the immaculate presentation that reinforces your brand's commitment to quality and customer care.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Our Meticulous Showroom Cleaning Checklist Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Our Meticulous Showroom Cleaning Checklist
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <SprayCan className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">Floor Care & Polishing</h3>
                      <p className="text-muted-foreground">
                        Specialized care for tile, concrete, or hardwood floors in your Columbus showroom. We maintain gleaming surfaces through professional polishing, buffing, and regular maintenance that creates the mirror-like finish customers expect in luxury showrooms, ensuring floors always look their absolute best.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Square className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">Window & Glass Cleaning</h3>
                      <p className="text-muted-foreground">
                        Streak-free cleaning for large plate glass windows and displays in your Columbus showroom. We ensure maximum visibility and pristine presentation with professional window cleaning techniques that eliminate streaks, smudges, and dirt, allowing natural light to showcase your products perfectly.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Car className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">Product & Display Dusting</h3>
                      <p className="text-muted-foreground">
                        Careful, lint-free dusting of all products in your Columbus showroom. We use appropriate methods for different materials—from automotive finishes to fine furniture—ensuring every item is immaculately clean without risk of scratches, damage, or residue that could affect product quality or appearance.
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
                      <h3 className="text-xl font-semibold mb-3">Client Lounges & Offices</h3>
                      <p className="text-muted-foreground">
                        Creating a comfortable and impressive space for clients in your Columbus showroom. We maintain spotless waiting areas, private offices, and consultation spaces where customers make purchasing decisions, ensuring every area reflects the quality and professionalism your brand represents.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* The Impact of a Perfectly Clean Showroom Section */}
        <section id="counters-section" className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                The Impact of a Perfectly Clean Showroom
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <Users className="h-16 w-16 mx-auto mb-4 opacity-90" />
                  <div className="text-5xl font-bold mb-2">{clientImpressions}%</div>
                  <h3 className="text-xl font-semibold opacity-90">Positive Client Impressions</h3>
                </div>
                
                <div className="text-center">
                  <DollarSign className="h-16 w-16 mx-auto mb-4 opacity-90" />
                  <div className="text-5xl font-bold mb-2">{perceivedValue}%</div>
                  <h3 className="text-xl font-semibold opacity-90">Increased Perceived Value</h3>
                </div>
                
                <div className="text-center">
                  <Search className="h-16 w-16 mx-auto mb-4 opacity-90" />
                  <div className="text-5xl font-bold mb-2">{detailScore}%</div>
                  <h3 className="text-xl font-semibold opacity-90">Attention to Detail Score</h3>
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
                          <h4 className="font-semibold mb-2">Showroom Cleaning in {city.name}</h4>
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
                            Schedule {city.name} Showroom Cleaning
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
                      Professional cleaning services for retail stores and shopping centers
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/columbus-ohio/retail-cleaning">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <Utensils className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Restaurant Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Professional kitchen and dining room cleaning for restaurants
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/columbus-ohio/restaurant-cleaning">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <Building2 className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Government Facility Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Secure cleaning for government buildings and public facilities
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/columbus-ohio/government-facility-cleaning">Learn More</Link>
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
                    <h3 className="text-lg font-semibold">What is included in showroom cleaning in Columbus Ohio?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Our comprehensive showroom cleaning in Columbus includes floor polishing and maintenance, window and glass cleaning, product and display dusting, client lounge maintenance, office cleaning, restroom sanitization, entryway care, and high-touch surface disinfection. We create customized cleaning plans that address all areas of your showroom to maintain the pristine presentation that influences purchasing decisions and reflects your brand's quality.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="cost" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">How much does showroom cleaning cost in Columbus Ohio?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Showroom cleaning costs in Columbus vary based on showroom size, product type, service frequency, and scope of cleaning needed. Most showrooms invest between $500-$3,000 per month for professional cleaning services. Smaller specialty showrooms typically have lower costs, while large automotive dealerships or furniture galleries require more comprehensive cleaning. We provide free consultations and customized quotes for your Columbus showroom's specific needs.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="products" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">How do you protect products during Columbus showroom cleaning?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      We protect products during Columbus showroom cleaning through specialized techniques, appropriate cleaning products, and trained staff who understand luxury retail and showroom environments. Our team uses lint-free materials for dusting, avoids harsh chemicals near merchandise, and maintains careful awareness of high-value products including vehicles, furniture, and sensitive displays. We work with your staff to ensure all products remain pristine during the cleaning process.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="automotive" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">Do you specialize in automotive dealership cleaning in Columbus?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Yes, we specialize in automotive dealership cleaning for Columbus showrooms including luxury, import, and domestic brands. Our services include showroom floor polishing, vehicle dusting and detailing prep, window cleaning, customer lounge maintenance, and office cleaning. We understand the unique needs of automotive showrooms and maintain the immaculate presentation that helps sell vehicles and reflects your dealership's commitment to quality.
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
              Ready to Showcase Your Products in a Pristine Showroom?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join Columbus showrooms that trust Red Rock Cleans for impeccable presentation and increased sales
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
              <Link to="/commercial-quote?location=columbus-ohio">Schedule Your Showroom Cleaning Today</Link>
            </Button>
          </div>
        </section>

        {/* Image Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <img 
                src="/src/assets/hero-commercial.jpg" 
                alt="A pristine luxury car showroom in Columbus, Ohio after professional cleaning by Red Rock Cleans"
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

export default ShowroomCleaningColumbusOhioPage;


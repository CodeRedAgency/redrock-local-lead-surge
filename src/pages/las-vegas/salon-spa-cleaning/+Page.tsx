import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { LasVegasNavigation } from "@/components/LasVegasNavigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  Sparkles, 
  Shield, 
  Heart, 
  Scissors, 
  Users, 
  Monitor, 
  Smile, 
  Cloud, 
  ChevronRight,
  Star,
  CheckCircle,
  Award,
  Building,
  Car,
  Calendar,
  Home,
  MapPin,
  Phone
} from 'lucide-react';

const SalonSpaCleaningLasVegasPage: React.FC = () => {
  const [activeAccordion, setActiveAccordion] = useState<string>('');
  const [counters, setCounters] = useState({
    satisfaction: 0,
    hygiene: 0,
    environment: 0
  });

  // Auto-open accordion based on URL hash
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      setActiveAccordion(hash);
    }
  }, []);

  // Animated counters
  useEffect(() => {
    const animateCounters = () => {
      const targets = { satisfaction: 98, hygiene: 100, environment: 95 };
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        const easeOut = 1 - Math.pow(1 - progress, 3);

        setCounters({
          satisfaction: Math.floor(targets.satisfaction * easeOut),
          hygiene: Math.floor(targets.hygiene * easeOut),
          environment: Math.floor(targets.environment * easeOut)
        });

        if (step >= steps) {
          clearInterval(timer);
          setCounters(targets);
        }
      }, stepDuration);
    };

    const timer = setTimeout(animateCounters, 500);
    return () => clearTimeout(timer);
  }, []);

  const areas = [
    {
      id: 'anthem',
      name: 'Anthem',
      content: 'Anthem\'s upscale community demands salon and spa cleaning excellence. Our specialized services ensure your beauty and wellness business meets the premium standards expected in this master-planned community.'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      content: 'Enterprise\'s growing business district needs salon and spa cleaning that supports professional growth. We provide comprehensive cleaning services for hair salons, day spas, and medispas in this expanding area.'
    },
    {
      id: 'green-valley-north',
      name: 'Green Valley North',
      content: 'Green Valley North\'s established neighborhoods appreciate attention to detail. Our salon and spa cleaning services maintain the pristine conditions that clients expect from premium beauty and wellness businesses.'
    },
    {
      id: 'henderson',
      name: 'Henderson',
      content: 'Henderson\'s diverse beauty and wellness market requires adaptable cleaning solutions. From boutique salons to luxury spas, we deliver the hygiene standards that build client trust and loyalty.'
    },
    {
      id: 'lake-las-vegas',
      name: 'Lake Las Vegas',
      content: 'Lake Las Vegas\'s resort-style community expects luxury in every detail. Our premium salon and spa cleaning services ensure your business presentation matches the high-end expectations of this exclusive area.'
    },
    {
      id: 'las-vegas',
      name: 'Las Vegas',
      content: 'Las Vegas\'s competitive beauty industry demands salon and spa perfection. Our comprehensive cleaning services help your business stand out with immaculate presentation that converts visitors into loyal clients.'
    },
    {
      id: 'macdonald-ranch',
      name: 'MacDonald Ranch',
      content: 'MacDonald Ranch\'s family-oriented community values quality and reliability. Our consistent salon and spa cleaning services help build trust with clients who appreciate thorough, professional attention to detail.'
    },
    {
      id: 'mountains-edge',
      name: 'Mountain\'s Edge',
      content: 'Mountain\'s Edge\'s active lifestyle community appreciates businesses that maintain high standards. Our salon and spa cleaning services ensure your beauty and wellness space always looks its best.'
    },
    {
      id: 'north-las-vegas',
      name: 'North Las Vegas',
      content: 'North Las Vegas\'s growing economy needs salon and spa cleaning that supports business growth. We provide reliable, professional cleaning services that help your beauty business make the right impression.'
    },
    {
      id: 'paradise',
      name: 'Paradise',
      content: 'Paradise\'s central location serves diverse client bases. Our adaptable salon and spa cleaning services meet the varying needs of hair salons, nail studios, and wellness centers in this busy area.'
    },
    {
      id: 'seven-hills',
      name: 'Seven Hills',
      content: 'Seven Hills\'s elevated community expects elevated service standards. Our premium salon and spa cleaning services ensure your business presentation matches the sophisticated expectations of this upscale neighborhood.'
    },
    {
      id: 'silverado-ranch',
      name: 'Silverado Ranch',
      content: 'Silverado Ranch\'s established community values consistency and quality. Our regular salon and spa cleaning services help maintain the professional appearance that builds client confidence and loyalty.'
    },
    {
      id: 'spring-valley',
      name: 'Spring Valley',
      content: 'Spring Valley\'s diverse business environment requires flexible salon and spa cleaning solutions. We adapt our services to meet the specific needs of hair salons, spas, and beauty studios.'
    },
    {
      id: 'summerlin-south',
      name: 'Summerlin South',
      content: 'Summerlin South\'s luxury market demands salon and spa excellence. Our meticulous cleaning services ensure your high-end beauty and wellness business reflects the premium standards expected in this prestigious area.'
    },
    {
      id: 'sunrise-manor',
      name: 'Sunrise Manor',
      content: 'Sunrise Manor\'s growing community needs reliable salon and spa cleaning services. We provide consistent, professional cleaning that helps your beauty business maintain a competitive edge in this expanding market.'
    },
    {
      id: 'whitney',
      name: 'Whitney',
      content: 'Whitney\'s established neighborhoods appreciate businesses that maintain high standards. Our comprehensive salon and spa cleaning services ensure your beauty and wellness space always presents professionally.'
    },
    {
      id: 'winchester',
      name: 'Winchester',
      content: 'Winchester\'s central location serves clients from across the valley. Our professional salon and spa cleaning services help your beauty business make a lasting positive impression on every visitor.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Salon & Spa Cleaning Las Vegas | Red Rock Cleans</title>
        <meta name="description" content="Professional salon and spa cleaning services in Las Vegas. Red Rock Cleans provides specialized cleaning for beauty and wellness businesses. Call (702) 508-0098!" />
      </Helmet>
      <LasVegasNavigation />
      
      <main className="flex-1">
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/src/assets/hero-commercial.jpg" 
            alt="Professional salon and spa cleaning service in a Las Vegas beauty establishment"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Pristine Salon & Spa Cleaning for Ultimate Client Relaxation in Las Vegas
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              In the competitive Las Vegas beauty and wellness industry, cleanliness is paramount for creating a luxurious, relaxing, and trustworthy environment for every client. Our specialized cleaning services ensure your salon or spa provides the pristine experience that builds lasting client relationships.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="h-14 text-lg px-8" asChild>
                <a href="tel:+17025080098">
                  <Phone className="w-5 h-5 mr-2" />
                  Call (702) 508-0098
                </a>
              </Button>
              <Button size="lg" variant="outline" className="h-14 text-lg px-8" asChild>
                <Link to="/commercial-quote?location=las-vegas">
                  <Home className="w-5 h-5 mr-2" />
                  Get Free Quote
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Elevating Your Las Vegas Client's Experience */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-slate-900">
              Elevating Your Las Vegas Client's Experience
            </h2>
            <p className="text-xl text-center text-slate-600 mb-16 max-w-3xl mx-auto">
              Professional salon and spa cleaning directly impacts client satisfaction, hygiene standards, and your business reputation.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                <CardContent className="pt-6 text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Heart className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Serene & Inviting Atmosphere</h3>
                  <p className="text-muted-foreground text-sm">
                    Immaculate cleanliness contributes to relaxation and a high-end feel, creating the tranquil environment your clients expect from premium beauty and wellness services.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                <CardContent className="pt-6 text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Shield className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Strict Hygiene & Disinfection</h3>
                  <p className="text-muted-foreground text-sm">
                    Practices to prevent cross-contamination and meet Nevada State Board of Cosmetology standards, ensuring client safety and regulatory compliance.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                <CardContent className="pt-6 text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Flawless First Impressions</h3>
                  <p className="text-muted-foreground text-sm">
                    A spotless reception and waiting area sets the tone for a premium experience, immediately establishing trust and professionalism with every client.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Comprehensive Salon & Spa Cleaning Checklist */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-slate-900">
              Our Comprehensive Salon & Spa Cleaning Checklist
            </h2>
            <p className="text-xl text-center text-slate-600 mb-16 max-w-3xl mx-auto">
              Every area of your salon or spa receives specialized attention to ensure maximum hygiene, comfort, and client satisfaction.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                <CardContent className="pt-6 text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Scissors className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Treatment & Styling Rooms</h3>
                  <p className="text-muted-foreground text-sm">
                    Sanitizing surfaces, equipment, and managing hair/product residue to maintain hygienic workstations and prevent cross-contamination.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                <CardContent className="pt-6 text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Users className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Nail Stations & Pedicure Chairs</h3>
                  <p className="text-muted-foreground text-sm">
                    Deep cleaning and disinfection of foot baths and manicure stations to meet strict hygiene standards and prevent bacterial growth.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                <CardContent className="pt-6 text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Monitor className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Reception & Waiting Areas</h3>
                  <p className="text-muted-foreground text-sm">
                    Maintaining spotless first impressions, dusting, and floor care to create a welcoming environment that reflects your brand's quality.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                <CardContent className="pt-6 text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Car className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Restrooms & Changing Areas</h3>
                  <p className="text-muted-foreground text-sm">
                    Intensive sanitization and restocking to luxury standards, ensuring client comfort and maintaining the premium experience throughout their visit.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* The Difference a Professional Clean Makes */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The Difference a Professional Clean Makes
            </h2>
            <p className="text-xl mb-16 text-primary-foreground/90 max-w-3xl mx-auto">
              Professional salon and spa cleaning delivers measurable results that improve client satisfaction, hygiene standards, and business success.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-4">
                  <Smile className="w-8 h-8" />
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {counters.satisfaction}%
                </div>
                <h3 className="text-lg font-semibold mb-2">Client Satisfaction Boost</h3>
                <p className="text-primary-foreground/80 text-sm">
                  Clients consistently rate clean salons and spas significantly higher for overall satisfaction and likelihood to return.
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-4">
                  <Sparkles className="w-8 h-8" />
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {counters.hygiene}%
                </div>
                <h3 className="text-lg font-semibold mb-2">Hygiene Standard Score</h3>
                <p className="text-primary-foreground/80 text-sm">
                  Professional cleaning ensures compliance with Nevada State Board of Cosmetology hygiene standards and regulations.
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-4">
                  <Cloud className="w-8 h-8" />
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {counters.environment}%
                </div>
                <h3 className="text-lg font-semibold mb-2">Stress-Free Environment</h3>
                <p className="text-primary-foreground/80 text-sm">
                  Clean, organized spaces create a calming atmosphere that enhances relaxation and improves the overall client experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas We Serve in Las Vegas */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-slate-900">
              Areas We Serve in Las Vegas
            </h2>
            <p className="text-xl text-center text-slate-600 mb-12 max-w-3xl mx-auto">
              Professional salon and spa cleaning services across all Las Vegas neighborhoods, tailored to each area's unique beauty and wellness market.
            </p>
            
            {/* Neighborhood Selector */}
            <div className="max-w-md mx-auto mb-12">
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  value={activeAccordion}
                  onChange={(e) => {
                    const value = e.target.value;
                    setActiveAccordion(value);
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
                  <option value="">Select a Las Vegas Area</option>
                  {areas.map((area) => (
                    <option key={area.id} value={area.id}>
                      {area.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            
            <Accordion type="single" collapsible value={activeAccordion} onValueChange={setActiveAccordion} className="space-y-4">
              {areas.map((area) => (
                <AccordionItem key={area.id} value={area.id} id={area.id} className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">{area.name}</h3>
                      <p className="text-sm text-slate-600 mt-1">Professional salon and spa cleaning services</p>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <div className="space-y-6">
                      <p className="text-slate-700 leading-relaxed">{area.content}</p>
                      
                      <div className="bg-slate-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-slate-900 mb-2">Local Salon & Spa Cleaning FAQ</h4>
                        <p className="text-sm text-slate-600 mb-2">
                          <strong>Q: How often should salons and spas be professionally cleaned?</strong>
                        </p>
                        <p className="text-sm text-slate-700 mb-4">
                          A: Most salons and spas benefit from daily cleaning and weekly deep cleaning, with specialized sanitization after each client service.
                        </p>
                      </div>
                      
                      <div className="bg-primary/5 p-4 rounded-lg border-l-4 border-primary">
                        <div className="flex items-start space-x-3">
                          <Star className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="text-sm text-slate-700 italic mb-2">
                              "Red Rock Cleans transformed our spa environment. The attention to detail and hygiene standards have significantly improved our client satisfaction and helped us maintain our luxury reputation."
                            </p>
                            <p className="text-xs text-slate-500">- Spa Owner in {area.name}</p>
                          </div>
                        </div>
                      </div>
                      
                      <Button asChild className="w-full">
                        <Link to="/commercial-quote?location=las-vegas">
                          Schedule Salon & Spa Cleaning in {area.name}
                          <ChevronRight className="ml-2 h-4 w-4" />
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

      {/* Other Commercial Cleaning Services */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
              Other Commercial Cleaning Services in Las Vegas
            </h2>
            <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto">
              Explore our comprehensive range of commercial cleaning services designed for Las Vegas businesses.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-all duration-300 group">
                <CardContent className="pt-6 text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Building className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg">Retail Store Cleaning</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Comprehensive cleaning for retail environments that enhance customer shopping experiences.
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/las-vegas/retail-cleaning/">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300 group">
                <CardContent className="pt-6 text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Award className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg">Medical Office Cleaning</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Specialized cleaning for medical facilities and medispas that meet health department standards.
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/las-vegas/medical-office-cleaning/">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300 group">
                <CardContent className="pt-6 text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg">Gym Cleaning</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Comprehensive cleaning for fitness facilities that maintain hygiene and member satisfaction.
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/las-vegas/gym-cleaning/">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-slate-900">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-center text-slate-600 mb-12 max-w-3xl mx-auto">
              Common questions about our professional salon and spa cleaning services in Las Vegas.
            </p>
            
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="frequency" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <h3 className="text-lg font-semibold text-slate-900">How often should salons and spas be professionally cleaned?</h3>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <p className="text-slate-700 leading-relaxed">
                    Most salons and spas benefit from daily cleaning and weekly deep cleaning, with specialized sanitization after each client service. High-traffic nail salons may require more frequent cleaning, while boutique spas might need less frequent but more intensive cleaning sessions.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="standards" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <h3 className="text-lg font-semibold text-slate-900">Do you follow Nevada State Board of Cosmetology standards?</h3>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <p className="text-slate-700 leading-relaxed">
                    Yes, we strictly adhere to Nevada State Board of Cosmetology hygiene standards and regulations. Our team is trained in proper sanitization protocols, uses approved disinfectants, and follows all guidelines for cleaning beauty and wellness facilities.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="equipment" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <h3 className="text-lg font-semibold text-slate-900">What cleaning products do you use for salons and spas?</h3>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <p className="text-slate-700 leading-relaxed">
                    We use professional-grade, EPA-approved disinfectants and cleaning products that are safe for salon and spa environments. Our products are specifically chosen to provide effective sanitization while being gentle on equipment and surfaces.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="disruption" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <h3 className="text-lg font-semibold text-slate-900">Will cleaning disrupt our client services?</h3>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <p className="text-slate-700 leading-relaxed">
                    We work around your schedule to minimize disruption to client services. Our team can clean during off-hours, between appointments, or in sections to keep your business running smoothly. We coordinate with your team to ensure cleaning activities don't interfere with client treatments.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Elevate Your Salon or Spa Experience?
            </h2>
            <p className="text-xl mb-8 text-slate-200 max-w-3xl mx-auto">
              Let Red Rock Cleans help you create the pristine, hygienic environment that builds client trust and enhances their relaxation experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg">
                <Link to="/commercial-quote?location=las-vegas">
                  Schedule Your Salon & Spa Cleaning Today
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg">
                Get Free Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SalonSpaCleaningLasVegasPage;

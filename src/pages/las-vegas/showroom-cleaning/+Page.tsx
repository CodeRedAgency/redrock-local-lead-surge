import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Hreflang from '@/components/Hreflang';
import { LasVegasNavigation } from "@/components/LasVegasNavigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useTranslation } from 'react-i18next';
import { 
  Gem, 
  Sparkles, 
  HandHeart, 
  Car, 
  Monitor, 
  Car as CarIcon, 
  Users, 
  DollarSign, 
  Search,
  ChevronRight,
  Star,
  CheckCircle,
  Clock,
  Award,
  Handshake,
  MapPin,
  Phone,
  Calendar,
  Home
} from 'lucide-react';

const ShowroomCleaningLasVegasPage: React.FC = () => {
  const [activeAccordion, setActiveAccordion] = useState<string>('');
  const [counters, setCounters] = useState({
    impressions: 0,
    value: 0,
    detail: 0
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
  const { t } = useTranslation();
      const targets = { impressions: 2500, value: 35, detail: 98 };
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        const easeOut = 1 - Math.pow(1 - progress, 3);

        setCounters({
          impressions: Math.floor(targets.impressions * easeOut),
          value: Math.floor(targets.value * easeOut),
          detail: Math.floor(targets.detail * easeOut)
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
      content: 'Anthem\'s upscale community demands showroom excellence. Our specialized cleaning services ensure your luxury car dealership or high-end furniture showroom reflects the premium standards of this master-planned community.'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      content: 'Enterprise\'s growing business district needs showroom cleaning that matches its professional atmosphere. We provide meticulous cleaning for automotive dealerships and commercial showrooms in this dynamic area.'
    },
    {
      id: 'green-valley-north',
      name: 'Green Valley North',
      content: 'Green Valley North\'s established neighborhoods appreciate attention to detail. Our showroom cleaning services maintain the pristine condition that customers expect from businesses in this well-maintained community.'
    },
    {
      id: 'henderson',
      name: 'Henderson',
      content: 'Henderson\'s diverse business landscape requires versatile showroom cleaning solutions. From automotive dealerships to furniture showrooms, we deliver the professional cleaning standards that drive sales.'
    },
    {
      id: 'lake-las-vegas',
      name: 'Lake Las Vegas',
      content: 'Lake Las Vegas\'s resort-style community expects luxury in every detail. Our premium showroom cleaning services ensure your business presentation matches the high-end expectations of this exclusive area.'
    },
    {
      id: 'las-vegas',
      name: 'Las Vegas',
      content: 'Las Vegas\'s competitive market demands showroom perfection. Our comprehensive cleaning services help your dealership or showroom stand out with immaculate presentation that converts visitors into customers.'
    },
    {
      id: 'macdonald-ranch',
      name: 'MacDonald Ranch',
      content: 'MacDonald Ranch\'s family-oriented community values quality and reliability. Our consistent showroom cleaning services help build trust with customers who appreciate thorough, professional attention to detail.'
    },
    {
      id: 'mountains-edge',
      name: 'Mountain\'s Edge',
      content: 'Mountain\'s Edge\'s active lifestyle community appreciates businesses that maintain high standards. Our showroom cleaning services ensure your automotive or retail space always looks its best.'
    },
    {
      id: 'north-las-vegas',
      name: 'North Las Vegas',
      content: 'North Las Vegas\'s growing economy needs showroom cleaning that supports business growth. We provide reliable, professional cleaning services that help your dealership or showroom make the right impression.'
    },
    {
      id: 'paradise',
      name: 'Paradise',
      content: 'Paradise\'s central location serves diverse customer bases. Our adaptable showroom cleaning services meet the varying needs of automotive dealerships, furniture stores, and specialty retailers in this busy area.'
    },
    {
      id: 'seven-hills',
      name: 'Seven Hills',
      content: 'Seven Hills\'s elevated community expects elevated service standards. Our premium showroom cleaning services ensure your business presentation matches the sophisticated expectations of this upscale neighborhood.'
    },
    {
      id: 'silverado-ranch',
      name: 'Silverado Ranch',
      content: 'Silverado Ranch\'s established community values consistency and quality. Our regular showroom cleaning services help maintain the professional appearance that builds customer confidence and loyalty.'
    },
    {
      id: 'spring-valley',
      name: 'Spring Valley',
      content: 'Spring Valley\'s diverse business environment requires flexible showroom cleaning solutions. We adapt our services to meet the specific needs of automotive, furniture, and specialty retail showrooms.'
    },
    {
      id: 'summerlin-south',
      name: 'Summerlin South',
      content: 'Summerlin South\'s luxury market demands showroom excellence. Our meticulous cleaning services ensure your high-end dealership or showroom reflects the premium standards expected in this prestigious area.'
    },
    {
      id: 'sunrise-manor',
      name: 'Sunrise Manor',
      content: 'Sunrise Manor\'s growing community needs reliable showroom cleaning services. We provide consistent, professional cleaning that helps your business maintain a competitive edge in this expanding market.'
    },
    {
      id: 'whitney',
      name: 'Whitney',
      content: 'Whitney\'s established neighborhoods appreciate businesses that maintain high standards. Our comprehensive showroom cleaning services ensure your automotive or retail space always presents professionally.'
    },
    {
      id: 'winchester',
      name: 'Winchester',
      content: 'Winchester\'s central location serves customers from across the valley. Our professional showroom cleaning services help your dealership or showroom make a lasting positive impression on every visitor.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>{t(`commercialServices.lasVegas.showroom.title`, { defaultValue: "Showroom Cleaning Services in Las Vegas | Red Rock Cleans" })}</title>
        <meta name="description" content={t(`commercialServices.lasVegas.showroom.description`, { defaultValue: "Showroom cleaning in Las Vegas. Spotless displays showcasing your products perfectly in Las Vegas & Henderson. Book now!" })} />
      </Helmet>
      <Hreflang />
      <div className="min-h-screen flex flex-col">
        <LasVegasNavigation />
      
      <main className="flex-1">
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-20">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Impeccable Showroom Cleaning to Showcase Your Las Vegas Products
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-slate-200 leading-relaxed">
                For high-value products in Las Vegas, the showroom's cleanliness is a direct reflection of the product's quality and is crucial for influencing purchasing decisions. Our meticulous cleaning services ensure every surface sparkles and every product shines.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg" asChild>
                  <a href="tel:+17025080098">
                    <Phone className="mr-2 h-5 w-5" />
                    Call (702) 508-0098
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg" asChild>
                  <Link to="/commercial-quote?location=las-vegas">
                    Get Free Quote
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Creating a Flawless Buying Environment */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-slate-900">
                Creating a Flawless Buying Environment
              </h2>
              <p className="text-xl text-center text-slate-600 mb-16 max-w-3xl mx-auto">
                Every detail matters when customers are making high-value purchasing decisions. Our showroom cleaning ensures perfection at every touchpoint.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                  <CardContent className="pt-6 text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Gem className="w-6 h-6" />
                  </div>
                    <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Pristine Product Presentation</h3>
                    <p className="text-muted-foreground text-sm">
                      Ensuring every product is free of dust, smudges, and fingerprints to showcase quality and attention to detail that builds customer confidence.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                  <CardContent className="pt-6 text-center space-y-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Sparkles className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Gleaming Floors & Surfaces</h3>
                    <p className="text-muted-foreground text-sm">
                      Perfectly polished floors and spotless surfaces that reflect luxury and create an environment where premium products can truly shine.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                  <CardContent className="pt-6 text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <HandHeart className="w-6 h-6" />
                  </div>
                    <h3 className="font-bold text-lg group-hover:text-primary transition-colors">A Premium Client Experience</h3>
                    <p className="text-muted-foreground text-sm">
                      Clean client lounges, offices, and reception areas that create a welcoming atmosphere and reinforce the premium nature of your business.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Our Meticulous Showroom Cleaning Checklist */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-slate-900">
                Our Meticulous Showroom Cleaning Checklist
              </h2>
              <p className="text-xl text-center text-slate-600 mb-16 max-w-3xl mx-auto">
                Every zone of your showroom receives specialized attention to ensure maximum impact on customer perception and sales.
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                  <CardContent className="pt-6 text-center space-y-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Car className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Floor Care & Polishing</h3>
                    <p className="text-muted-foreground text-sm">
                      Specialized care for tile, concrete, or hardwood floors with professional polishing techniques that enhance product presentation.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                  <CardContent className="pt-6 text-center space-y-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Monitor className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Window & Glass Cleaning</h3>
                    <p className="text-muted-foreground text-sm">
                      Streak-free cleaning for large plate glass windows and displays that maximize natural light and product visibility.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                  <CardContent className="pt-6 text-center space-y-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <CarIcon className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Product & Display Dusting</h3>
                    <p className="text-muted-foreground text-sm">
                      Careful, lint-free dusting of all products and displays to ensure they look pristine and ready for customer inspection.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                  <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Users className="w-6 h-6" />
                      </div>
                    <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Client Lounges & Offices</h3>
                    <p className="text-muted-foreground text-sm">
                      Creating a comfortable and impressive space for clients with meticulous cleaning of seating areas and office spaces.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* The Impact of a Perfectly Clean Showroom */}
        <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                The Impact of a Perfectly Clean Showroom
              </h2>
              <p className="text-xl mb-16 text-primary-foreground/90 max-w-3xl mx-auto">
                Professional showroom cleaning directly impacts your bottom line by enhancing customer perception and increasing sales potential.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-4">
                    <Handshake className="w-8 h-8" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold mb-2">
                    {counters.impressions.toLocaleString()}+
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Positive Client Impressions</h3>
                  <p className="text-primary-foreground/80 text-sm">
                    Customers who experience a clean showroom are more likely to make purchases and recommend your business.
                  </p>
                </div>

                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-4">
                    <DollarSign className="w-8 h-8" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold mb-2">
                    {counters.value}%
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Increased Perceived Value</h3>
                  <p className="text-primary-foreground/80 text-sm">
                    Clean showrooms increase the perceived value of products and justify premium pricing strategies.
                  </p>
                </div>

                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-4">
                    <Search className="w-8 h-8" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold mb-2">
                    {counters.detail}%
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Attention to Detail Score</h3>
                  <p className="text-primary-foreground/80 text-sm">
                    Customers rate businesses with clean showrooms significantly higher for attention to detail and professionalism.
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
                Professional showroom cleaning services across all Las Vegas neighborhoods, tailored to each area's unique business environment.
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
                        <p className="text-sm text-slate-600 mt-1">Professional showroom cleaning services</p>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6">
                      <div className="space-y-6">
                        <p className="text-slate-700 leading-relaxed">{area.content}</p>
                        
                        <div className="bg-slate-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-slate-900 mb-2">Local Showroom Cleaning FAQ</h4>
                          <p className="text-sm text-slate-600 mb-2">
                            <strong>Q: How often should showrooms be professionally cleaned?</strong>
                          </p>
                          <p className="text-sm text-slate-700 mb-4">
                            A: Most showrooms benefit from daily cleaning during business hours and deep cleaning 2-3 times per week to maintain pristine conditions.
                          </p>
                        </div>
                        
                        <div className="bg-primary/5 p-4 rounded-lg border-l-4 border-primary">
                          <div className="flex items-start space-x-3">
                            <Star className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="text-sm text-slate-700 italic mb-2">
                                "Red Rock Cleans transformed our showroom. The attention to detail is incredible - every surface sparkles and our customers notice the difference immediately."
                              </p>
                              <p className="text-xs text-slate-500">- Local Business Owner in {area.name}</p>
                            </div>
                          </div>
                        </div>
                        
                        <Button asChild className="w-full">
                          <Link to="/commercial-quote?location=las-vegas">
                            Schedule Showroom Cleaning in {area.name}
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
                      <Car className="w-6 h-6" />
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
                      <Users className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-lg">Restaurant Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Specialized cleaning for food service establishments that meet health department standards.
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/las-vegas/restaurant-cleaning/">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="pt-6 text-center space-y-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Award className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-lg">Government Facility Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Secure cleaning services for government buildings and public facilities.
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/las-vegas/government-facility-cleaning/">Learn More</Link>
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
                Common questions about our professional showroom cleaning services in Las Vegas.
              </p>
              
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="frequency" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <h3 className="text-lg font-semibold text-slate-900">How often should showrooms be professionally cleaned?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <p className="text-slate-700 leading-relaxed">
                      Most showrooms benefit from daily cleaning during business hours and deep cleaning 2-3 times per week. High-traffic automotive dealerships may require more frequent cleaning, while furniture showrooms might need less frequent but more intensive cleaning sessions.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="products" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <h3 className="text-lg font-semibold text-slate-900">What cleaning products do you use for showrooms?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <p className="text-slate-700 leading-relaxed">
                      We use professional-grade, eco-friendly cleaning products that are safe for all surfaces and won't damage products or finishes. Our products are specifically chosen to provide streak-free results on glass, gentle cleaning for delicate surfaces, and effective sanitization for customer areas.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="timing" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <h3 className="text-lg font-semibold text-slate-900">Can you clean during business hours?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <p className="text-slate-700 leading-relaxed">
                      Yes, we can work around your business hours. We use quiet equipment and work efficiently to minimize disruption. Many clients prefer daytime cleaning as it ensures the showroom is always ready for customers, while others schedule cleaning for early morning or after hours.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="specialized" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <h3 className="text-lg font-semibold text-slate-900">Do you handle specialized showroom equipment?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <p className="text-slate-700 leading-relaxed">
                      Absolutely. We're experienced with automotive lifts, furniture displays, lighting systems, and other specialized showroom equipment. Our team is trained to clean around sensitive equipment safely and effectively, ensuring everything looks pristine without risking damage.
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
                Ready to Transform Your Showroom?
              </h2>
              <p className="text-xl mb-8 text-slate-200 max-w-3xl mx-auto">
                Let Red Rock Cleans help you create the perfect environment for showcasing your products and closing more sales.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg">
                  <Link to="/commercial-quote?location=las-vegas">
                    Schedule Your Showroom Cleaning Today
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
    </>
  );
};

export default ShowroomCleaningLasVegasPage;

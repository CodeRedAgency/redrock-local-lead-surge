import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { LasVegasNavigation } from "@/components/LasVegasNavigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  Shield, 
  Clock, 
  Package, 
  Car, 
  Users, 
  Monitor, 
  Box, 
  ChevronRight,
  Star,
  CheckCircle,
  Award,
  Truck,
  Building,
  Calendar,
  Home,
  MapPin,
  Phone
} from 'lucide-react';

const WarehouseCleaningLasVegasPage: React.FC = () => {
  const [activeAccordion, setActiveAccordion] = useState<string>('');
  const [counters, setCounters] = useState({
    squareFeet: 0,
    incidents: 0,
    efficiency: 0
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
      const targets = { squareFeet: 2500000, incidents: 95, efficiency: 40 };
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        const easeOut = 1 - Math.pow(1 - progress, 3);

        setCounters({
          squareFeet: Math.floor(targets.squareFeet * easeOut),
          incidents: Math.floor(targets.incidents * easeOut),
          efficiency: Math.floor(targets.efficiency * easeOut)
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
      content: 'Anthem\'s business district includes several distribution centers and logistics facilities. Our specialized warehouse cleaning services ensure these high-volume operations maintain optimal safety and efficiency standards.'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      content: 'Enterprise\'s growing industrial sector demands reliable warehouse cleaning solutions. We provide comprehensive floor scrubbing, high-bay dusting, and OSHA-compliant cleaning for distribution centers in this expanding area.'
    },
    {
      id: 'green-valley-north',
      name: 'Green Valley North',
      content: 'Green Valley North\'s established warehouses benefit from our systematic cleaning approach. We help maintain clean, organized facilities that support efficient operations and protect valuable inventory.'
    },
    {
      id: 'henderson',
      name: 'Henderson',
      content: 'Henderson\'s diverse industrial landscape requires adaptable warehouse cleaning services. From small distribution centers to large logistics hubs, we deliver the cleaning standards that keep operations running smoothly.'
    },
    {
      id: 'lake-las-vegas',
      name: 'Lake Las Vegas',
      content: 'Lake Las Vegas\'s premium business environment expects excellence in all operations. Our professional warehouse cleaning services ensure facilities meet the high standards expected in this exclusive area.'
    },
    {
      id: 'las-vegas',
      name: 'Las Vegas',
      content: 'Las Vegas\'s central location serves as a major logistics hub. Our comprehensive warehouse cleaning services help distribution centers maintain the cleanliness and organization essential for efficient operations.'
    },
    {
      id: 'macdonald-ranch',
      name: 'MacDonald Ranch',
      content: 'MacDonald Ranch\'s business community values reliability and consistency. Our regular warehouse cleaning services help maintain the professional standards that support successful logistics operations.'
    },
    {
      id: 'mountains-edge',
      name: 'Mountain\'s Edge',
      content: 'Mountain\'s Edge\'s active business environment needs warehouse cleaning that supports growth. We provide the systematic cleaning services that help facilities scale efficiently while maintaining safety standards.'
    },
    {
      id: 'north-las-vegas',
      name: 'North Las Vegas',
      content: 'North Las Vegas\'s expanding industrial sector requires professional warehouse cleaning services. We help distribution centers and logistics facilities maintain the cleanliness that drives operational success.'
    },
    {
      id: 'paradise',
      name: 'Paradise',
      content: 'Paradise\'s central location serves diverse warehouse operations. Our flexible cleaning services adapt to different facility types, ensuring each warehouse maintains optimal cleanliness and organization.'
    },
    {
      id: 'seven-hills',
      name: 'Seven Hills',
      content: 'Seven Hills\'s elevated business standards require warehouse cleaning excellence. Our comprehensive services ensure facilities meet the professional standards expected in this upscale community.'
    },
    {
      id: 'silverado-ranch',
      name: 'Silverado Ranch',
      content: 'Silverado Ranch\'s established warehouses benefit from our consistent cleaning approach. We help maintain the organized, clean environments that support efficient logistics operations.'
    },
    {
      id: 'spring-valley',
      name: 'Spring Valley',
      content: 'Spring Valley\'s diverse warehouse operations require specialized cleaning solutions. We provide the floor scrubbing, dusting, and organization services that keep facilities running at peak efficiency.'
    },
    {
      id: 'summerlin-south',
      name: 'Summerlin South',
      content: 'Summerlin South\'s premium business environment demands warehouse cleaning excellence. Our professional services ensure facilities maintain the high standards that support successful operations.'
    },
    {
      id: 'sunrise-manor',
      name: 'Sunrise Manor',
      content: 'Sunrise Manor\'s growing industrial sector needs reliable warehouse cleaning partners. We provide the systematic cleaning services that help facilities maintain safety and efficiency as they expand.'
    },
    {
      id: 'whitney',
      name: 'Whitney',
      content: 'Whitney\'s established warehouses require consistent, professional cleaning services. We help maintain the clean, organized environments that support efficient operations and protect valuable inventory.'
    },
    {
      id: 'winchester',
      name: 'Winchester',
      content: 'Winchester\'s central location serves warehouses from across the valley. Our comprehensive cleaning services help distribution centers maintain the cleanliness and organization essential for successful logistics operations.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Warehouse Cleaning Las Vegas | Red Rock Cleans</title>
        <meta name="description" content="Professional warehouse cleaning services in Las Vegas. Red Rock Cleans provides industrial cleaning for logistics facilities and distribution centers. Call (702) 508-0098!" />
      </Helmet>
      <LasVegasNavigation />
      
      <main className="flex-1">
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/src/assets/hero-commercial.jpg" 
            alt="Professional warehouse cleaning service in a Las Vegas logistics facility"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Efficient & Safe Warehouse Cleaning in Las Vegas
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              For Las Vegas's logistics hubs, a clean and organized warehouse is essential for operational efficiency, employee safety, and protecting valuable inventory. Our comprehensive cleaning services ensure your facility operates at peak performance.
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

      {/* Optimizing Your Las Vegas Logistics Environment */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-slate-900">
              Optimizing Your Las Vegas Logistics Environment
            </h2>
            <p className="text-xl text-center text-slate-600 mb-16 max-w-3xl mx-auto">
              Professional warehouse cleaning directly impacts your bottom line by improving safety, efficiency, and inventory protection.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                <CardContent className="pt-6 text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Shield className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Enhancing Workplace Safety</h3>
                  <p className="text-muted-foreground text-sm">
                    Clear, hazard-free floors and compliance with OSHA standards create a safer environment for your team and reduce workplace accidents.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                <CardContent className="pt-6 text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Clock className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Boosting Operational Efficiency</h3>
                  <p className="text-muted-foreground text-sm">
                    Clean, marked floors and organized spaces speed up operations, reduce downtime, and help your team work more efficiently.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                <CardContent className="pt-6 text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Package className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Protecting Valuable Inventory</h3>
                  <p className="text-muted-foreground text-sm">
                    Controlling dust and debris prevents product damage, reduces contamination risks, and maintains the quality of your inventory.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Comprehensive Warehouse Cleaning Checklist */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-slate-900">
              Our Comprehensive Warehouse Cleaning Checklist
            </h2>
            <p className="text-xl text-center text-slate-600 mb-16 max-w-3xl mx-auto">
              Every area of your warehouse receives specialized attention to ensure maximum safety, efficiency, and cleanliness.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                <CardContent className="pt-6 text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Car className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Floor Scrubbing & Sweeping</h3>
                  <p className="text-muted-foreground text-sm">
                    Using industrial-grade equipment for concrete floors, removing debris, oil stains, and maintaining clear walkways.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                <CardContent className="pt-6 text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Users className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg group-hover:text-primary transition-colors">High-Bay & Racking Dusting</h3>
                  <p className="text-muted-foreground text-sm">
                    Cleaning hard-to-reach ceilings, beams, and pallet racks to prevent dust accumulation and maintain air quality.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                <CardContent className="pt-6 text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Truck className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Loading Docks & Common Areas</h3>
                  <p className="text-muted-foreground text-sm">
                    Keeping high-traffic areas clean and safe, including loading docks, break rooms, and employee common areas.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                <CardContent className="pt-6 text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Monitor className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Offices & Employee Restrooms</h3>
                  <p className="text-muted-foreground text-sm">
                    Maintaining administrative areas and employee facilities to ensure a professional, comfortable work environment.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* The Impact of a Professionally Cleaned Warehouse */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The Impact of a Professionally Cleaned Warehouse
            </h2>
            <p className="text-xl mb-16 text-primary-foreground/90 max-w-3xl mx-auto">
              Professional warehouse cleaning delivers measurable results that improve safety, efficiency, and operational success.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-4">
                  <Box className="w-8 h-8" />
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {counters.squareFeet.toLocaleString()}+
                </div>
                <h3 className="text-lg font-semibold mb-2">Square Feet Cleaned</h3>
                <p className="text-primary-foreground/80 text-sm">
                  Our team has cleaned millions of square feet of warehouse space across Las Vegas, maintaining the highest standards.
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-4">
                  <Shield className="w-8 h-8" />
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {counters.incidents}%
                </div>
                <h3 className="text-lg font-semibold mb-2">Safety Incidents Prevented</h3>
                <p className="text-primary-foreground/80 text-sm">
                  Clean warehouses experience significantly fewer workplace accidents and safety incidents.
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-4">
                  <Clock className="w-8 h-8" />
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {counters.efficiency}%
                </div>
                <h3 className="text-lg font-semibold mb-2">More Efficient Operations</h3>
                <p className="text-primary-foreground/80 text-sm">
                  Clean, organized warehouses operate more efficiently with faster picking, packing, and shipping processes.
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
              Professional warehouse cleaning services across all Las Vegas neighborhoods, tailored to each area's unique industrial environment.
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
                      <p className="text-sm text-slate-600 mt-1">Professional warehouse cleaning services</p>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <div className="space-y-6">
                      <p className="text-slate-700 leading-relaxed">{area.content}</p>
                      
                      <div className="bg-slate-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-slate-900 mb-2">Local Warehouse Cleaning FAQ</h4>
                        <p className="text-sm text-slate-600 mb-2">
                          <strong>Q: How often should warehouses be professionally cleaned?</strong>
                        </p>
                        <p className="text-sm text-slate-700 mb-4">
                          A: Most warehouses benefit from daily floor cleaning and weekly deep cleaning, with high-bay dusting monthly to maintain optimal conditions.
                        </p>
                      </div>
                      
                      <div className="bg-primary/5 p-4 rounded-lg border-l-4 border-primary">
                        <div className="flex items-start space-x-3">
                          <Star className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="text-sm text-slate-700 italic mb-2">
                              "Red Rock Cleans transformed our warehouse operations. The systematic approach and attention to detail have significantly improved our efficiency and safety record."
                            </p>
                            <p className="text-xs text-slate-500">- Warehouse Manager in {area.name}</p>
                          </div>
                        </div>
                      </div>
                      
                      <Button asChild className="w-full">
                        <Link to="/commercial-quote?location=las-vegas">
                          Schedule Warehouse Cleaning in {area.name}
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

      {/* Other Industrial Cleaning Services */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
              Other Industrial Cleaning Services in Las Vegas
            </h2>
            <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto">
              Explore our comprehensive range of industrial cleaning services designed for Las Vegas businesses.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-all duration-300 group">
                <CardContent className="pt-6 text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Building className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg">Factory Cleaning</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Comprehensive cleaning for manufacturing facilities and production environments.
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/las-vegas/factory-cleaning/">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300 group">
                <CardContent className="pt-6 text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Award className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg">Industrial Cleaning</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Specialized cleaning services for heavy industrial facilities and equipment.
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/las-vegas/industrial-cleaning/">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300 group">
                <CardContent className="pt-6 text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg">Post Construction Cleaning</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Thorough cleaning services for newly constructed or renovated facilities.
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/las-vegas/post-construction-cleaning-services/">Learn More</Link>
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
              Common questions about our professional warehouse cleaning services in Las Vegas.
            </p>
            
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="frequency" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <h3 className="text-lg font-semibold text-slate-900">How often should warehouses be professionally cleaned?</h3>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <p className="text-slate-700 leading-relaxed">
                    Most warehouses benefit from daily floor cleaning and weekly deep cleaning, with high-bay dusting monthly. High-traffic facilities may require more frequent cleaning, while storage-only warehouses might need less frequent but more intensive cleaning sessions.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="equipment" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <h3 className="text-lg font-semibold text-slate-900">What equipment do you use for warehouse cleaning?</h3>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <p className="text-slate-700 leading-relaxed">
                    We use industrial-grade equipment including floor scrubbers, high-reach cleaning systems, industrial vacuums, and specialized dusting tools. Our equipment is designed for large spaces and can handle concrete floors, high ceilings, and heavy-duty cleaning requirements.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="safety" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <h3 className="text-lg font-semibold text-slate-900">Do you follow OSHA safety standards?</h3>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <p className="text-slate-700 leading-relaxed">
                    Yes, we strictly adhere to OSHA safety standards and regulations. Our team is trained in workplace safety protocols, uses proper safety equipment, and follows all guidelines for working in industrial environments. We also help ensure your facility maintains compliance.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="disruption" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <h3 className="text-lg font-semibold text-slate-900">Will cleaning disrupt our operations?</h3>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <p className="text-slate-700 leading-relaxed">
                    We work around your schedule to minimize disruption. Our team can clean during off-hours, weekends, or in sections to keep your operations running. We coordinate with your team to ensure cleaning activities don't interfere with critical warehouse functions.
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
              Ready to Optimize Your Warehouse Operations?
            </h2>
            <p className="text-xl mb-8 text-slate-200 max-w-3xl mx-auto">
              Let Red Rock Cleans help you create a safer, more efficient warehouse environment that protects your inventory and boosts productivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg">
                <Link to="/commercial-quote?location=las-vegas">
                  Schedule Your Warehouse Cleaning Today
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

export default WarehouseCleaningLasVegasPage;

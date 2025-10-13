import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { MapPin, Star } from "lucide-react";

const neighborhoods = [
  { name: "University Park", slug: "university-park" },
  { name: "Highland Park", slug: "highland-park" },
  { name: "Uptown Dallas", slug: "uptown-dallas" },
  { name: "Downtown Dallas", slug: "downtown-dallas" },
  { name: "Preston Hollow", slug: "preston-hollow" },
  { name: "Plano", slug: "plano" },
  { name: "Frisco", slug: "frisco" },
  { name: "Prosper", slug: "prosper" },
];

const neighborhoodContent = {
  "university-park": {
    description: "University Park is one of Dallas's most prestigious neighborhoods, known for its beautiful homes, excellent schools, and proximity to Southern Methodist University. Our premium cleaning services in University Park cater to discerning homeowners who demand the highest standards, providing meticulous attention to detail that matches the area's sophisticated lifestyle and luxury properties.",
    services: ["Standard Cleaning", "Deep Cleaning", "Move Out Cleaning", "Airbnb Cleaning", "Post Construction Cleaning"],
    testimonial: "Our University Park home deserves the best. Red Rock Cleaning delivers luxury service that keeps our beautiful property spotless and perfectly maintained year-round."
  },
  "highland-park": {
    description: "Highland Park is Dallas's crown jewel, featuring some of the most expensive real estate in Texas with stunning homes and a strong sense of community. Our cleaning services in Highland Park understand the needs of luxury homeowners, providing discreet, professional service that maintains the pristine condition of high-end properties and ensures every detail meets the highest standards.",
    services: ["Standard Cleaning", "Deep Cleaning", "Move Out Cleaning", "Airbnb Cleaning", "Post Construction Cleaning"],
    testimonial: "Highland Park living requires the finest services. Red Rock Cleaning exceeds our expectations with their professional approach and attention to every luxury detail."
  },
  "uptown-dallas": {
    description: "Uptown Dallas is the city's vibrant urban district, featuring high-rise condos, luxury apartments, and a bustling entertainment scene. Our cleaning services in Uptown Dallas specialize in urban living solutions, providing flexible scheduling for busy professionals and comprehensive cleaning for modern high-rise properties and vacation rentals.",
    services: ["Standard Cleaning", "Deep Cleaning", "Move Out Cleaning", "Airbnb Cleaning", "Post Construction Cleaning"],
    testimonial: "Living in Uptown Dallas means a busy lifestyle. Red Rock Cleaning keeps our high-rise condo spotless so we can focus on enjoying the vibrant urban scene."
  },
  "downtown-dallas": {
    description: "Downtown Dallas is the city's business and cultural heart, featuring a mix of historic buildings, modern high-rises, and luxury condos. Our cleaning services in Downtown Dallas cater to busy professionals and property investors, providing reliable maid service and specialized cleaning for unique urban properties and vacation rental units.",
    services: ["Standard Cleaning", "Deep Cleaning", "Move Out Cleaning", "Airbnb Cleaning", "Post Construction Cleaning"],
    testimonial: "Working in downtown Dallas means long hours. Red Rock Cleaning takes care of our home so we can focus on our careers and enjoy the city's cultural offerings."
  },
  "preston-hollow": {
    description: "Preston Hollow is an affluent residential area known for its large estates, beautiful homes, and proximity to some of Dallas's best shopping and dining. Our cleaning services in Preston Hollow provide premium residential care for luxury homeowners, ensuring your estate remains spotless and perfectly maintained with the attention to detail that matches your investment.",
    services: ["Standard Cleaning", "Deep Cleaning", "Move Out Cleaning", "Airbnb Cleaning", "Post Construction Cleaning"],
    testimonial: "Our Preston Hollow estate is our pride and joy. Red Rock Cleaning ensures every room is spotless, maintaining the luxury standard our home deserves."
  },
  plano: {
    description: "Plano is one of Dallas's most family-friendly suburbs, known for its excellent schools, master-planned communities, and strong economy. Our cleaning services in Plano help busy families maintain clean, healthy homes with reliable maid service and comprehensive deep cleaning options that fit busy schedules and active lifestyles.",
    services: ["Standard Cleaning", "Deep Cleaning", "Move Out Cleaning", "Airbnb Cleaning", "Post Construction Cleaning"],
    testimonial: "Raising kids in Plano means our home gets lots of use. Red Rock Cleaning keeps everything spotless so we can focus on family time and community activities."
  },
  frisco: {
    description: "Frisco is one of America's fastest-growing cities, featuring new developments, excellent schools, and a thriving sports and entertainment scene. Our cleaning services in Frisco help new homeowners and growing families maintain pristine properties, from move-in cleaning to ongoing maintenance that preserves your investment in this dynamic community.",
    services: ["Standard Cleaning", "Deep Cleaning", "Move Out Cleaning", "Airbnb Cleaning", "Post Construction Cleaning"],
    testimonial: "Moving to Frisco was exciting, and Red Rock Cleaning made settling into our new home effortless with their thorough move-in cleaning service."
  },
  prosper: {
    description: "Prosper is a rapidly growing community known for its new construction, excellent schools, and family-friendly atmosphere. Our cleaning services in Prosper help new homeowners and growing families maintain their pristine properties, from initial move-in cleaning to regular maintenance that keeps your home looking brand new in this thriving North Texas community.",
    services: ["Standard Cleaning", "Deep Cleaning", "Move Out Cleaning", "Airbnb Cleaning", "Post Construction Cleaning"],
    testimonial: "Prosper's growth and family atmosphere are perfect for our family. Red Rock Cleaning provides reliable service that helps us maintain our beautiful new home."
  }
};

export const DallasAreasServed = () => {
  const [selectedArea, setSelectedArea] = useState<string>("");
  const [accordionValue, setAccordionValue] = useState<string>("");

  // Handle URL hash changes and auto-open accordion
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (hash && neighborhoods.some(n => n.slug === hash)) {
        setAccordionValue(hash);
        setSelectedArea(hash);
        
        // Smooth scroll to the accordion item
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ 
              behavior: 'smooth', 
              block: 'center' 
            });
          }
        }, 100);
      }
    };

    // Check for hash on initial load
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Handle neighborhood selector changes
  const handleNeighborhoodSelect = (neighborhoodSlug: string) => {
    setSelectedArea(neighborhoodSlug);
    setAccordionValue(neighborhoodSlug);
    
    // Update URL hash without page reload
    window.history.pushState(null, '', `#${neighborhoodSlug}`);
    
    // Smooth scroll to the accordion item
    setTimeout(() => {
      const element = document.getElementById(neighborhoodSlug);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'center' 
        });
      }
    }, 100);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Proudly Serving Communities Across Dallas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From the prestigious Park Cities to the vibrant growth of Frisco and Prosper, 
            we provide professional cleaning services throughout Dallas's diverse communities.
          </p>
        </div>

        {/* Neighborhood Selector */}
        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <select
              value={selectedArea}
              onChange={(e) => handleNeighborhoodSelect(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white text-gray-900"
            >
              <option value="">Select a Dallas Area</option>
              {neighborhoods.map((neighborhood) => (
                <option key={neighborhood.slug} value={neighborhood.slug}>
                  {neighborhood.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Areas Accordion */}
        <div className="max-w-4xl mx-auto">
          <Accordion 
            type="single" 
            collapsible 
            value={accordionValue}
            onValueChange={(value) => {
              setAccordionValue(value || "");
              setSelectedArea(value || "");
              if (value) {
                window.history.pushState(null, '', `#${value}`);
              }
            }}
          >
            {neighborhoods.map((neighborhood) => {
              const content = neighborhoodContent[neighborhood.slug as keyof typeof neighborhoodContent];
              return (
                <AccordionItem 
                  key={neighborhood.slug} 
                  value={neighborhood.slug}
                  id={neighborhood.slug}
                >
                  <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                    <span className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-primary" />
                      {neighborhood.name}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pt-6">
                    <div className="space-y-6">
                      {/* Local Description */}
                      <p className="text-gray-700 leading-relaxed">
                        {content.description}
                      </p>

                      {/* Services List */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Services We Provide:</h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                          {content.services.map((service, index) => (
                            <li key={index} className="flex items-center gap-2 text-gray-700">
                              <div className="w-2 h-2 bg-primary rounded-full"></div>
                              {service}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Local Testimonial */}
                      <blockquote className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
                        <div className="flex items-start gap-4">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                          <div>
                            <p className="text-gray-700 italic mb-2">"{content.testimonial}"</p>
                            <cite className="text-sm text-gray-600 font-medium">
                              — Satisfied Customer in {neighborhood.name}
                            </cite>
                          </div>
                        </div>
                      </blockquote>

                      {/* CTA Button */}
                      <div className="pt-4">
                        <Button 
                          asChild 
                          size="lg" 
                          className="w-full sm:w-auto"
                        >
                          <a href="/book-now-dallas">
                            Get a Quote for {neighborhood.name}
                          </a>
                        </Button>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Don't see your specific area? We likely serve it! Contact us for confirmation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="cta">
              <a href="/book-now-dallas">Get Your Free Quote</a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="/contact">Contact Us</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

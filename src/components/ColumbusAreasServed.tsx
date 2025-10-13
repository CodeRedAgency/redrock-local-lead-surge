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
  { name: "Dublin", slug: "dublin" },
  { name: "Upper Arlington", slug: "upper-arlington" },
  { name: "Powell", slug: "powell" },
  { name: "Lewis Center", slug: "lewis-center" },
  { name: "Worthington", slug: "worthington" },
  { name: "New Albany", slug: "new-albany" },
  { name: "Bexley", slug: "bexley" },
  { name: "German Village", slug: "german-village" },
  { name: "Short North", slug: "short-north" },
  { name: "Victorian Village", slug: "victorian-village" },
  { name: "Hilliard", slug: "hilliard" },
  { name: "Westerville", slug: "westerville" },
];

const neighborhoodContent = {
  dublin: {
    description: "Dublin is a thriving suburban community known for its corporate headquarters, excellent schools, and beautiful family neighborhoods. Our cleaning services in Dublin help busy professionals and families maintain pristine homes, from routine maid service for corporate executives to deep cleaning for special occasions and move-out cleaning for relocating families.",
    services: ["Standard Cleaning", "Deep Cleaning", "Move Out Cleaning", "Airbnb Cleaning", "Post Construction Cleaning"],
    testimonial: "Working in Dublin's corporate environment means long hours. Red Rock Cleaning keeps our home spotless so we can focus on our careers and enjoy quality family time."
  },
  "upper-arlington": {
    description: "Upper Arlington is one of Columbus's most prestigious suburbs, featuring beautiful homes, tree-lined streets, and a strong sense of community. Our premium cleaning services in Upper Arlington cater to discerning homeowners who demand the highest standards, providing meticulous attention to detail that matches the area's sophisticated lifestyle and well-maintained properties.",
    services: ["Standard Cleaning", "Deep Cleaning", "Move Out Cleaning", "Airbnb Cleaning", "Post Construction Cleaning"],
    testimonial: "Our Upper Arlington home deserves the best care. Red Rock Cleaning delivers luxury service that keeps our beautiful property spotless and perfectly maintained year-round."
  },
  powell: {
    description: "Powell is a charming suburban community known for its historic downtown, excellent schools, and family-friendly atmosphere. Our cleaning services in Powell help busy families maintain clean, comfortable homes with reliable maid service and comprehensive deep cleaning options that fit active lifestyles and busy schedules.",
    services: ["Standard Cleaning", "Deep Cleaning", "Move Out Cleaning", "Airbnb Cleaning", "Post Construction Cleaning"],
    testimonial: "Raising kids in Powell means our home gets lots of use. Red Rock Cleaning keeps everything spotless so we can focus on family activities and community events."
  },
  "lewis-center": {
    description: "Lewis Center is a rapidly growing area featuring new developments, excellent schools, and easy access to major highways. Our cleaning services in Lewis Center help new homeowners and growing families maintain their pristine properties, from move-in cleaning to ongoing maintenance that preserves your investment in this dynamic community.",
    services: ["Standard Cleaning", "Deep Cleaning", "Move Out Cleaning", "Airbnb Cleaning", "Post Construction Cleaning"],
    testimonial: "Moving to Lewis Center was exciting, and Red Rock Cleaning made settling into our new home effortless with their thorough move-in cleaning service."
  },
  worthington: {
    description: "Worthington is a historic community known for its charming downtown, excellent schools, and mix of historic and modern homes. Our cleaning services in Worthington respect the area's heritage while providing modern cleaning solutions, from routine maintenance for busy families to specialized care for historic properties and unique home features.",
    services: ["Standard Cleaning", "Deep Cleaning", "Move Out Cleaning", "Airbnb Cleaning", "Post Construction Cleaning"],
    testimonial: "Worthington's historic charm deserves careful cleaning. Red Rock Cleaning understands our unique home and keeps it spotless while preserving its character."
  },
  "new-albany": {
    description: "New Albany is an upscale community known for its beautiful homes, excellent schools, and strong sense of community. Our premium cleaning services in New Albany understand the needs of luxury homeowners, providing discreet, professional service that maintains the pristine condition of high-end properties and ensures every detail meets the highest standards.",
    services: ["Standard Cleaning", "Deep Cleaning", "Move Out Cleaning", "Airbnb Cleaning", "Post Construction Cleaning"],
    testimonial: "New Albany living requires the finest services. Red Rock Cleaning exceeds our expectations with their professional approach and attention to every luxury detail."
  },
  bexley: {
    description: "Bexley is a unique community known for its independent school district, historic homes, and strong sense of community pride. Our cleaning services in Bexley provide personalized care for residents who value the area's distinctive character, offering flexible scheduling and comprehensive cleaning solutions that respect the community's unique identity.",
    services: ["Standard Cleaning", "Deep Cleaning", "Move Out Cleaning", "Airbnb Cleaning", "Post Construction Cleaning"],
    testimonial: "Bexley's community spirit is strong, and Red Rock Cleaning fits right in. They're trustworthy neighbors who keep our home clean and comfortable."
  },
  "german-village": {
    description: "German Village is Columbus's historic gem, featuring beautifully restored brick homes, charming cobblestone streets, and a vibrant community atmosphere. Our cleaning services in German Village respect the historic character of properties while providing modern cleaning solutions, from routine maintenance to specialized care for unique architectural features.",
    services: ["Standard Cleaning", "Deep Cleaning", "Move Out Cleaning", "Airbnb Cleaning", "Post Construction Cleaning"],
    testimonial: "German Village's historic beauty deserves careful cleaning. Red Rock Cleaning understands our unique home and keeps it spotless while preserving its historic character."
  },
  "short-north": {
    description: "Short North is Columbus's vibrant arts district, featuring trendy lofts, modern condos, and a bustling entertainment scene. Our cleaning services in Short North specialize in urban living solutions, providing flexible scheduling for busy professionals and comprehensive cleaning for modern properties and vacation rentals in this dynamic neighborhood.",
    services: ["Standard Cleaning", "Deep Cleaning", "Move Out Cleaning", "Airbnb Cleaning", "Post Construction Cleaning"],
    testimonial: "Living in Short North means a busy, creative lifestyle. Red Rock Cleaning keeps our loft spotless so we can focus on enjoying the vibrant arts scene."
  },
  "victorian-village": {
    description: "Victorian Village is a charming historic neighborhood known for its beautifully restored Victorian homes and strong community spirit. Our cleaning services in Victorian Village understand the unique needs of historic property owners, providing specialized care that preserves architectural details while ensuring modern cleanliness standards.",
    services: ["Standard Cleaning", "Deep Cleaning", "Move Out Cleaning", "Airbnb Cleaning", "Post Construction Cleaning"],
    testimonial: "Our Victorian Village home is a piece of history. Red Rock Cleaning ensures it stays beautifully clean while respecting its historic character and unique features."
  },
  hilliard: {
    description: "Hilliard is a growing suburban community known for its excellent schools, family-friendly neighborhoods, and strong economy. Our cleaning services in Hilliard help busy families maintain clean, healthy homes with reliable maid service and comprehensive deep cleaning options that fit busy schedules and active lifestyles.",
    services: ["Standard Cleaning", "Deep Cleaning", "Move Out Cleaning", "Airbnb Cleaning", "Post Construction Cleaning"],
    testimonial: "Hilliard families trust Red Rock Cleaning for consistent, quality service that keeps our homes spotless week after week."
  },
  westerville: {
    description: "Westerville is a thriving suburban community known for its excellent schools, historic downtown, and strong sense of community. Our cleaning services in Westerville help busy families and professionals maintain pristine homes, from routine maintenance to deep cleaning for special occasions, ensuring your home matches the community's high standards.",
    services: ["Standard Cleaning", "Deep Cleaning", "Move Out Cleaning", "Airbnb Cleaning", "Post Construction Cleaning"],
    testimonial: "Westerville's community pride extends to our home thanks to Red Rock Cleaning. They provide the quality service that matches our community's high standards."
  }
};

export const ColumbusAreasServed = () => {
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
            Proudly Serving Columbus and Surrounding Communities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From the historic charm of German Village to the growing suburbs of Lewis Center and Hilliard, 
            we provide professional cleaning services throughout Columbus's diverse communities.
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
              <option value="">Select a Columbus Area</option>
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
                          <a href="/book-now-columbus-ohio">
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
              <a href="/book-now-columbus-ohio">Get Your Free Quote</a>
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

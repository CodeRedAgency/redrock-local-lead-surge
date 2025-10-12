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
  { name: "Anthem", slug: "anthem" },
  { name: "Enterprise", slug: "enterprise" },
  { name: "Green Valley North", slug: "green-valley-north" },
  { name: "Henderson", slug: "henderson" },
  { name: "Lake Las Vegas", slug: "lake-las-vegas" },
  { name: "Las Vegas", slug: "las-vegas" },
  { name: "MacDonald Ranch", slug: "macdonald-ranch" },
  { name: "Mountain's Edge", slug: "mountains-edge" },
  { name: "North Las Vegas", slug: "north-las-vegas" },
  { name: "Paradise", slug: "paradise" },
  { name: "Seven Hills", slug: "seven-hills" },
  { name: "Silverado Ranch", slug: "silverado-ranch" },
  { name: "Spring Valley", slug: "spring-valley" },
  { name: "Summerlin South", slug: "summerlin-south" },
  { name: "Sunrise Manor", slug: "sunrise-manor" },
  { name: "Whitney", slug: "whitney" },
  { name: "Winchester", slug: "winchester" },
];

const neighborhoodContent = {
  anthem: {
    description: "Nestled in the foothills of the Black Mountain Range, Anthem is a master-planned community offering luxury living with stunning desert views. Our professional cleaning services in Anthem provide residents with sparkling homes that match the beauty of their surroundings, from routine maid service to deep cleaning for special occasions.",
    services: ["Standard Cleaning", "Deep Cleaning", "Move Out Cleaning", "Airbnb Cleaning", "Post Construction Cleaning"],
    testimonial: "Red Rock Cleaning transformed our Anthem home into a spotless retreat. Their attention to detail with our luxury finishes is unmatched!"
  },
  enterprise: {
    description: "Enterprise combines suburban charm with modern amenities, making it a sought-after location for families and professionals. Our cleaning services in Enterprise ensure your home remains a sanctuary from the busy Las Vegas lifestyle, with reliable recurring maid service and comprehensive deep cleaning options.",
    services: ["Standard Cleaning", "Deep Cleaning", "Move Out Cleaning", "Airbnb Cleaning", "Post Construction Cleaning"],
    testimonial: "Living in Enterprise, we needed a cleaning service that understands family life. Red Rock delivers every time with their thorough approach."
  },
  "green-valley-north": {
    description: "Green Valley North offers a perfect blend of residential comfort and easy access to entertainment and shopping. Our cleaning professionals serve this vibrant community with tailored services, from weekly maid service to move out cleaning that ensures you get your full security deposit back.",
    services: ["Standard Cleaning", "Deep Cleaning", "Move Out Cleaning", "Airbnb Cleaning", "Post Construction Cleaning"],
    testimonial: "The team at Red Rock knows Green Valley North well. They always arrive on time and leave our home absolutely spotless."
  },
  henderson: {
    description: "As Nevada's second-largest city, Henderson provides a family-friendly atmosphere with excellent schools and parks. Our Henderson cleaning services cater to busy families who need reliable, quality cleaning solutions, from regular maintenance to deep cleaning for fresh starts.",
    services: ["Standard Cleaning", "Deep Cleaning", "Move Out Cleaning", "Airbnb Cleaning", "Post Construction Cleaning"],
    testimonial: "Raising kids in Henderson means constant messes. Red Rock Cleaning keeps our home clean and organized so we can focus on family time."
  },
  "lake-las-vegas": {
    description: "Lake Las Vegas offers resort-style living with stunning lake views and championship golf courses. Our premium cleaning services in Lake Las Vegas match the luxury lifestyle of residents, providing meticulous attention to detail for high-end homes and vacation rentals.",
    services: ["Standard Cleaning", "Deep Cleaning", "Move Out Cleaning", "Airbnb Cleaning", "Post Construction Cleaning"],
    testimonial: "Our Lake Las Vegas home deserves the best. Red Rock Cleaning provides luxury service that matches our beautiful lakeside community."
  },
  "las-vegas": {
    description: "The heart of the entertainment capital, Las Vegas proper offers diverse neighborhoods from historic districts to modern high-rises. Our Las Vegas cleaning services adapt to every lifestyle, whether you need quick touch-ups between shows or comprehensive deep cleaning for special events.",
    services: ["Standard Cleaning", "Deep Cleaning", "Move Out Cleaning", "Airbnb Cleaning", "Post Construction Cleaning"],
    testimonial: "In the city that never sleeps, Red Rock Cleaning helps us rest easy knowing our Las Vegas home is always guest-ready."
  },
  "macdonald-ranch": {
    description: "MacDonald Ranch is a prestigious gated community known for its custom homes and golf course living. Our cleaning services in MacDonald Ranch understand the needs of luxury homeowners, providing discreet, professional service that maintains the pristine condition of your investment property.",
    services: ["Standard Cleaning", "Deep Cleaning", "Move Out Cleaning", "Airbnb Cleaning", "Post Construction Cleaning"],
    testimonial: "MacDonald Ranch living requires the finest services. Red Rock Cleaning exceeds our expectations with their professional approach and attention to detail."
  },
  "mountains-edge": {
    description: "Mountain's Edge offers new construction homes with modern amenities and stunning mountain views. Our cleaning services in Mountain's Edge help new homeowners maintain their pristine properties, from move-in cleaning to ongoing maintenance that preserves your home's value.",
    services: ["Standard Cleaning", "Deep Cleaning", "Move Out Cleaning", "Airbnb Cleaning", "Post Construction Cleaning"],
    testimonial: "Moving to Mountain's Edge was exciting, and Red Rock Cleaning made settling in effortless with their thorough move-in cleaning service."
  },
  "north-las-vegas": {
    description: "North Las Vegas provides affordable living with easy access to Nellis Air Force Base and the city center. Our cleaning services in North Las Vegas offer reliable, budget-friendly solutions for busy families and military personnel, from standard cleaning to specialized services.",
    services: ["Standard Cleaning", "Deep Cleaning", "Move Out Cleaning", "Airbnb Cleaning", "Post Construction Cleaning"],
    testimonial: "As military families in North Las Vegas, we need dependable service. Red Rock Cleaning always delivers quality cleaning when we need it most."
  },
  paradise: {
    description: "Paradise offers the excitement of being near The Strip while maintaining residential tranquility. Our cleaning services in Paradise cater to both full-time residents and property investors, providing flexible scheduling and specialized Airbnb cleaning for vacation rental properties.",
    services: ["Standard Cleaning", "Deep Cleaning", "Move Out Cleaning", "Airbnb Cleaning", "Post Construction Cleaning"],
    testimonial: "Living near The Strip in Paradise, our Airbnb property needs expert care. Red Rock Cleaning ensures our guests always arrive to a perfect space."
  },
  "seven-hills": {
    description: "Seven Hills is an upscale community offering panoramic valley views and luxury amenities. Our cleaning services in Seven Hills provide the meticulous care that luxury homeowners expect, from routine maintenance to deep cleaning that showcases your home's finest features.",
    services: ["Standard Cleaning", "Deep Cleaning", "Move Out Cleaning", "Airbnb Cleaning", "Post Construction Cleaning"],
    testimonial: "The views from Seven Hills are amazing, and Red Rock Cleaning ensures our home's interior matches the beautiful surroundings outside."
  },
  "silverado-ranch": {
    description: "Silverado Ranch combines suburban comfort with convenient access to shopping and entertainment. Our cleaning services in Silverado Ranch help busy families maintain clean, healthy homes with reliable maid service and comprehensive deep cleaning options.",
    services: ["Standard Cleaning", "Deep Cleaning", "Move Out Cleaning", "Airbnb Cleaning", "Post Construction Cleaning"],
    testimonial: "Silverado Ranch families trust Red Rock Cleaning for consistent, quality service that keeps our homes spotless week after week."
  },
  "spring-valley": {
    description: "Spring Valley offers diverse housing options from single-family homes to townhouses, making it perfect for first-time buyers and growing families. Our cleaning services in Spring Valley provide flexible solutions for every lifestyle, from move-out cleaning to regular maintenance.",
    services: ["Standard Cleaning", "Deep Cleaning", "Move Out Cleaning", "Airbnb Cleaning", "Post Construction Cleaning"],
    testimonial: "Growing up in Spring Valley, we know good neighbors. Red Rock Cleaning treats our home like their own, with care and respect."
  },
  "summerlin-south": {
    description: "Summerlin South is part of the master-planned community known for its parks, trails, and family-friendly atmosphere. Our cleaning services in Summerlin South complement the active lifestyle of residents, providing reliable maid service that lets families focus on enjoying their beautiful community.",
    services: ["Standard Cleaning", "Deep Cleaning", "Move Out Cleaning", "Airbnb Cleaning", "Post Construction Cleaning"],
    testimonial: "Summerlin South living is all about enjoying life. Red Rock Cleaning handles the cleaning so we can spend more time with family and friends."
  },
  "sunrise-manor": {
    description: "Sunrise Manor offers affordable housing with a strong sense of community and easy access to downtown Las Vegas. Our cleaning services in Sunrise Manor provide quality, reliable solutions for working families, from standard cleaning to move-out services that help with transitions.",
    services: ["Standard Cleaning", "Deep Cleaning", "Move Out Cleaning", "Airbnb Cleaning", "Post Construction Cleaning"],
    testimonial: "Sunrise Manor is our home, and Red Rock Cleaning helps keep it beautiful. Their reliable service gives us peace of mind."
  },
  whitney: {
    description: "Whitney provides a quiet residential atmosphere with easy access to major employers and shopping centers. Our cleaning services in Whitney offer dependable solutions for busy professionals and families, ensuring your home remains a clean, comfortable retreat from daily life.",
    services: ["Standard Cleaning", "Deep Cleaning", "Move Out Cleaning", "Airbnb Cleaning", "Post Construction Cleaning"],
    testimonial: "Whitney's quiet streets deserve clean homes. Red Rock Cleaning delivers consistent quality that makes coming home a joy."
  },
  winchester: {
    description: "Winchester offers diverse neighborhoods from established communities to new developments, all within minutes of The Strip. Our cleaning services in Winchester adapt to every home type and lifestyle, providing flexible scheduling and comprehensive cleaning solutions.",
    services: ["Standard Cleaning", "Deep Cleaning", "Move Out Cleaning", "Airbnb Cleaning", "Post Construction Cleaning"],
    testimonial: "Winchester's proximity to The Strip is perfect, and Red Rock Cleaning ensures our home stays guest-ready for all our visitors."
  }
};

export const LasVegasAreasServed = () => {
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
            Proudly Serving the Entire Las Vegas Valley
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From the luxury communities of Summerlin South to the family-friendly streets of Henderson, 
            we provide professional cleaning services throughout the Las Vegas metropolitan area.
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
              <option value="">Select a Las Vegas Area</option>
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
                          <a href="/book-now-vegas">
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
              <a href="/book-now-vegas">Get Your Free Quote</a>
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

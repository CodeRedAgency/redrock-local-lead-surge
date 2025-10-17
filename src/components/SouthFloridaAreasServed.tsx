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
  { name: "Aventura", slug: "aventura" },
  { name: "Cooper City", slug: "cooper-city" },
  { name: "Dania Beach", slug: "dania-beach" },
  { name: "Davie", slug: "davie" },
  { name: "Fort Lauderdale", slug: "fort-lauderdale" },
  { name: "Hallandale Beach", slug: "hallandale-beach" },
  { name: "Hollywood", slug: "hollywood" },
  { name: "Las Olas", slug: "las-olas" },
  { name: "Lauderdale Lakes", slug: "lauderdale-lakes" },
  { name: "Lauderhill", slug: "lauderhill" },
  { name: "Margate", slug: "margate" },
  { name: "Miramar", slug: "miramar" },
  { name: "North Lauderdale", slug: "north-lauderdale" },
  { name: "Pembroke Pines", slug: "pembroke-pines" },
  { name: "Plantation", slug: "plantation" },
  { name: "Southwest Ranches", slug: "southwest-ranches" },
  { name: "Sunny Isles Beach", slug: "sunny-isles-beach" },
  { name: "Sunrise", slug: "sunrise" },
  { name: "Tamarac", slug: "tamarac" },
  { name: "Weston", slug: "weston" },
];

const neighborhoodContent = {
  aventura: {
    description: "Aventura is South Florida's premier luxury shopping and residential destination, featuring high-rise condos, upscale retail, and waterfront living. Our premium cleaning services in Aventura cater to luxury homeowners and vacation rental investors, providing meticulous attention to detail that matches the area's sophisticated lifestyle and high-end properties.",
    services: ["Standard Cleaning", "Deep Cleaning", "Move Out Cleaning", "Airbnb Cleaning", "Post Construction Cleaning"],
    testimonial: "Our Aventura high-rise condo demands perfection. Red Rock Cleaning delivers luxury service that keeps our waterfront home spotless and guest-ready year-round."
  },
  "cooper-city": {
    description: "Cooper City offers a perfect blend of suburban tranquility and modern amenities, making it ideal for families seeking quality schools and community living. Our cleaning services in Cooper City help busy families maintain clean, healthy homes with reliable maid service and comprehensive deep cleaning options that fit busy schedules.",
    services: ["Standard Cleaning", "Deep Cleaning", "Move Out Cleaning", "Airbnb Cleaning", "Post Construction Cleaning"],
    testimonial: "Raising kids in Cooper City means our home gets lots of use. Red Rock Cleaning keeps everything spotless so we can focus on family time and community activities."
  },
  "dania-beach": {
    description: "Dania Beach combines coastal living with historic charm, offering a mix of beachfront condos, single-family homes, and proximity to Fort Lauderdale-Hollywood International Airport. Our cleaning services in Dania Beach provide flexible solutions for both residents and vacation rental owners, from routine maintenance to quick turnovers for incoming guests.",
    services: ["Standard Cleaning", "Deep Cleaning", "Move Out Cleaning", "Airbnb Cleaning", "Post Construction Cleaning"],
    testimonial: "Living near the beach in Dania Beach means dealing with sand and salt. Red Rock Cleaning handles it all, keeping our coastal home pristine and comfortable."
  },
  davie: {
    description: "Davie is known for its Western heritage, excellent schools, and mix of residential communities from equestrian estates to modern subdivisions. Our cleaning services in Davie cater to diverse housing needs, providing reliable maid service for busy families and specialized cleaning for unique property types throughout this vibrant community.",
    services: ["Standard Cleaning", "Deep Cleaning", "Move Out Cleaning", "Airbnb Cleaning", "Post Construction Cleaning"],
    testimonial: "Davie's Western charm deserves a clean home to match. Red Rock Cleaning provides reliable service that respects our community's unique character and family values."
  },
  "fort-lauderdale": {
    description: "Fort Lauderdale is South Florida's cultural and business hub, featuring diverse neighborhoods from historic districts to modern high-rises along the Intracoastal Waterway. Our cleaning services in Fort Lauderdale adapt to every lifestyle, whether you need quick touch-ups for busy professionals or comprehensive deep cleaning for special events and vacation rentals.",
    services: ["Standard Cleaning", "Deep Cleaning", "Move Out Cleaning", "Airbnb Cleaning", "Post Construction Cleaning"],
    testimonial: "Working in downtown Fort Lauderdale means long hours. Red Rock Cleaning takes care of our home so we can focus on our careers and enjoy the beautiful waterfront lifestyle."
  },
  "hallandale-beach": {
    description: "Hallandale Beach offers a unique blend of urban convenience and coastal relaxation, with easy access to both Miami and Fort Lauderdale. Our cleaning services in Hallandale Beach provide reliable solutions for busy professionals and families, ensuring your home remains a clean, comfortable retreat from the vibrant South Florida lifestyle.",
    services: ["Standard Cleaning", "Deep Cleaning", "Move Out Cleaning", "Airbnb Cleaning", "Post Construction Cleaning"],
    testimonial: "Hallandale Beach's central location is perfect, and Red Rock Cleaning's flexible scheduling works great with our busy professional lifestyle."
  },
  hollywood: {
    description: "Hollywood is a diverse community known for its beachfront Broadwalk, arts district, and mix of historic and modern neighborhoods. Our cleaning services in Hollywood respect the area's cultural diversity while providing modern cleaning solutions, from routine maintenance to specialized services for unique property types.",
    services: ["Standard Cleaning", "Deep Cleaning", "Move Out Cleaning", "Airbnb Cleaning", "Post Construction Cleaning"],
    testimonial: "Hollywood's diversity is what makes it special, and Red Rock Cleaning understands our unique needs. They keep our historic home spotless while preserving its character."
  },
  "las-olas": {
    description: "Las Olas is Fort Lauderdale's premier entertainment district, featuring luxury condos, upscale restaurants, and vibrant nightlife along the Intracoastal Waterway. Our cleaning services in Las Olas specialize in high-end residential and vacation rental properties, providing meticulous care that matches the area's sophisticated urban lifestyle.",
    services: ["Standard Cleaning", "Deep Cleaning", "Move Out Cleaning", "Airbnb Cleaning", "Post Construction Cleaning"],
    testimonial: "Las Olas living requires the finest services. Red Rock Cleaning exceeds our expectations with their professional approach and attention to every luxury detail."
  },
  "lauderdale-lakes": {
    description: "Lauderdale Lakes offers affordable housing with convenient access to major highways and employment centers, making it ideal for working families. Our cleaning services in Lauderdale Lakes provide quality, reliable solutions for busy families, from standard cleaning to move-out services that help with life transitions and property changes.",
    services: ["Standard Cleaning", "Deep Cleaning", "Move Out Cleaning", "Airbnb Cleaning", "Post Construction Cleaning"],
    testimonial: "Lauderdale Lakes' community spirit is strong, and Red Rock Cleaning fits right in. They're trustworthy neighbors who keep our home clean and comfortable."
  },
  lauderhill: {
    description: "Lauderhill is a diverse, family-friendly community with a strong sense of neighborhood pride and convenient access to shopping and entertainment. Our cleaning services in Lauderhill provide dependable solutions for working families, ensuring your home remains a clean, comfortable sanctuary from daily life in South Florida.",
    services: ["Standard Cleaning", "Deep Cleaning", "Move Out Cleaning", "Airbnb Cleaning", "Post Construction Cleaning"],
    testimonial: "Lauderhill's family atmosphere is wonderful, and Red Rock Cleaning helps maintain that clean, welcoming environment in our home every week."
  },
  margate: {
    description: "Margate offers suburban comfort with easy access to beaches, shopping, and major highways, making it perfect for families seeking a quieter lifestyle. Our cleaning services in Margate help busy families maintain clean, healthy homes with reliable maid service and comprehensive deep cleaning options.",
    services: ["Standard Cleaning", "Deep Cleaning", "Move Out Cleaning", "Airbnb Cleaning", "Post Construction Cleaning"],
    testimonial: "Margate families trust Red Rock Cleaning for consistent, quality service that keeps our homes spotless week after week."
  },
  miramar: {
    description: "Miramar is one of South Florida's fastest-growing cities, featuring new developments, excellent schools, and diverse residential communities. Our cleaning services in Miramar help new homeowners and growing families maintain pristine properties, from move-in cleaning to ongoing maintenance that preserves your investment.",
    services: ["Standard Cleaning", "Deep Cleaning", "Move Out Cleaning", "Airbnb Cleaning", "Post Construction Cleaning"],
    testimonial: "Moving to Miramar was exciting, and Red Rock Cleaning made settling into our new home effortless with their thorough move-in cleaning service."
  },
  "north-lauderdale": {
    description: "North Lauderdale provides affordable housing with a strong sense of community and convenient access to employment centers throughout Broward County. Our cleaning services in North Lauderdale offer reliable solutions for working families, from standard cleaning to specialized services that fit busy schedules and budgets.",
    services: ["Standard Cleaning", "Deep Cleaning", "Move Out Cleaning", "Airbnb Cleaning", "Post Construction Cleaning"],
    testimonial: "North Lauderdale's affordability and community feel are perfect for our family. Red Rock Cleaning provides reliable service that fits our budget and schedule."
  },
  "pembroke-pines": {
    description: "Pembroke Pines is known for its master-planned communities, excellent schools, and family-friendly atmosphere, making it one of South Florida's most desirable residential areas. Our cleaning services in Pembroke Pines help busy families maintain clean, healthy homes with reliable maid service and comprehensive deep cleaning options.",
    services: ["Standard Cleaning", "Deep Cleaning", "Move Out Cleaning", "Airbnb Cleaning", "Post Construction Cleaning"],
    testimonial: "Pembroke Pines' family-friendly reputation is well-deserved, and Red Rock Cleaning helps us maintain that clean, comfortable lifestyle in our home."
  },
  plantation: {
    description: "Plantation offers a perfect blend of suburban charm and urban convenience, with excellent schools, parks, and easy access to major employment centers. Our cleaning services in Plantation cater to busy families and professionals, providing flexible scheduling and comprehensive cleaning solutions that fit modern lifestyles.",
    services: ["Standard Cleaning", "Deep Cleaning", "Move Out Cleaning", "Airbnb Cleaning", "Post Construction Cleaning"],
    testimonial: "Plantation's balance of suburban comfort and city convenience is perfect. Red Rock Cleaning keeps our home spotless so we can enjoy the best of both worlds."
  },
  "southwest-ranches": {
    description: "Southwest Ranches offers rural charm with large properties, equestrian facilities, and a peaceful atmosphere while maintaining proximity to urban amenities. Our cleaning services in Southwest Ranches understand the unique needs of rural property owners, providing specialized cleaning solutions for larger homes and unique property features.",
    services: ["Standard Cleaning", "Deep Cleaning", "Move Out Cleaning", "Airbnb Cleaning", "Post Construction Cleaning"],
    testimonial: "Southwest Ranches' rural setting is perfect for our family. Red Rock Cleaning understands our larger property and keeps every corner spotless."
  },
  "sunny-isles-beach": {
    description: "Sunny Isles Beach is Miami-Dade's luxury beachfront destination, featuring high-rise condos, five-star hotels, and exclusive residential towers. Our premium cleaning services in Sunny Isles Beach cater to luxury homeowners and vacation rental investors, providing meticulous attention to detail that matches the area's five-star standards and oceanfront lifestyle.",
    services: ["Standard Cleaning", "Deep Cleaning", "Move Out Cleaning", "Airbnb Cleaning", "Post Construction Cleaning"],
    testimonial: "Our Sunny Isles Beach oceanfront condo demands perfection. Red Rock Cleaning delivers luxury service that keeps our beachfront home pristine for guests and family."
  },
  sunrise: {
    description: "Sunrise is home to the BB&T Center and Sawgrass Mills Mall, offering a mix of residential communities and commercial attractions. Our cleaning services in Sunrise provide reliable solutions for busy families and professionals, ensuring your home remains a clean, comfortable retreat from the area's vibrant commercial activity.",
    services: ["Standard Cleaning", "Deep Cleaning", "Move Out Cleaning", "Airbnb Cleaning", "Post Construction Cleaning"],
    testimonial: "Sunrise's entertainment options are amazing, and Red Rock Cleaning ensures our home is always ready for family gatherings and relaxation after busy days."
  },
  tamarac: {
    description: "Tamarac offers affordable living with excellent recreational facilities, parks, and a strong sense of community. Our cleaning services in Tamarac provide quality, reliable solutions for working families, from standard cleaning to move-out services that help with life transitions and property changes.",
    services: ["Standard Cleaning", "Deep Cleaning", "Move Out Cleaning", "Airbnb Cleaning", "Post Construction Cleaning"],
    testimonial: "Tamarac's community spirit and recreational amenities are wonderful. Red Rock Cleaning helps us maintain a clean home so we can fully enjoy everything our city offers."
  },
  weston: {
    description: "Weston is South Florida's premier master-planned community, known for its excellent schools, beautiful neighborhoods, and family-friendly atmosphere. Our cleaning services in Weston help busy families maintain pristine properties, from routine maid service to deep cleaning for special occasions, ensuring your home matches the community's high standards.",
    services: ["Standard Cleaning", "Deep Cleaning", "Move Out Cleaning", "Airbnb Cleaning", "Post Construction Cleaning"],
    testimonial: "Weston's reputation for excellence extends to our home thanks to Red Rock Cleaning. They provide the quality service that matches our community's high standards."
  }
};

export const SouthFloridaAreasServed = () => {
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
            Proudly Serving Communities Across South Florida
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From the luxury high-rises of Aventura to the family-friendly streets of Weston, 
            we provide professional cleaning services throughout South Florida's diverse communities.
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
              <option value="">Select a South Florida Area</option>
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
                          <a href="/book-now-south-florida">
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
              <a href="/book-now-south-florida">Get Your Free Quote</a>
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

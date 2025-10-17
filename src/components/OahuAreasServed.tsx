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
  { name: "Aiea", slug: "aiea" },
  { name: "Ewa Beach", slug: "ewa-beach" },
  { name: "Hawaii Kai", slug: "hawaii-kai" },
  { name: "Honolulu", slug: "honolulu" },
  { name: "Kailua", slug: "kailua" },
  { name: "Kapolei", slug: "kapolei" },
  { name: "Makakilo", slug: "makakilo" },
  { name: "Mililani", slug: "mililani" },
  { name: "Pearl City", slug: "pearl-city" },
  { name: "Waialae", slug: "waialae" },
  { name: "Waikiki", slug: "waikiki" },
  { name: "Waimanalo", slug: "waimanalo" },
  { name: "Waipahu", slug: "waipahu" },
];

const neighborhoodContent = {
  aiea: {
    description: "Aiea offers a perfect blend of residential tranquility and convenient access to Pearl Harbor and Honolulu. Our professional cleaning services in Aiea help busy families and military personnel maintain spotless homes, from routine maid service to deep cleaning for special occasions and move-out cleaning.",
    services: ["Standard Cleaning", "Deep Cleaning", "Move Out Cleaning", "Airbnb Cleaning", "Post Construction Cleaning"],
    testimonial: "Red Rock Cleaning understands the military community in Aiea. Their reliable service and attention to detail make our home feel like a true sanctuary."
  },
  "ewa-beach": {
    description: "Ewa Beach is one of Oahu's fastest-growing communities, known for its beautiful beaches and family-friendly atmosphere. Our cleaning services in Ewa Beach cater to the active lifestyle of residents, providing flexible scheduling and comprehensive cleaning solutions for both new construction and established homes.",
    services: ["Standard Cleaning", "Deep Cleaning", "Move Out Cleaning", "Airbnb Cleaning", "Post Construction Cleaning"],
    testimonial: "Living in Ewa Beach with kids means constant activity. Red Rock Cleaning keeps our home spotless so we can focus on enjoying the beautiful beaches."
  },
  "hawaii-kai": {
    description: "Hawaii Kai is an upscale community offering stunning marina views and luxury living along Oahu's southeastern shore. Our premium cleaning services in Hawaii Kai match the high standards of residents, providing meticulous attention to detail for luxury homes and vacation rental properties.",
    services: ["Standard Cleaning", "Deep Cleaning", "Move Out Cleaning", "Airbnb Cleaning", "Post Construction Cleaning"],
    testimonial: "Our Hawaii Kai home overlooks the marina, and Red Rock Cleaning ensures the interior matches the beautiful view outside. Exceptional service every time."
  },
  honolulu: {
    description: "As Oahu's capital and largest city, Honolulu offers diverse neighborhoods from historic districts to modern high-rises. Our Honolulu cleaning services adapt to every lifestyle, whether you need quick touch-ups for busy professionals or comprehensive deep cleaning for special events and vacation rentals.",
    services: ["Standard Cleaning", "Deep Cleaning", "Move Out Cleaning", "Airbnb Cleaning", "Post Construction Cleaning"],
    testimonial: "Working in downtown Honolulu means long hours. Red Rock Cleaning takes care of our home so we can focus on our careers and enjoy island life."
  },
  kailua: {
    description: "Kailua embodies the laid-back, beach-town lifestyle that makes Hawaii special, with its world-famous beaches and charming local shops. Our cleaning services in Kailua complement the relaxed atmosphere, providing reliable maid service that lets residents focus on enjoying their beautiful coastal community.",
    services: ["Standard Cleaning", "Deep Cleaning", "Move Out Cleaning", "Airbnb Cleaning", "Post Construction Cleaning"],
    testimonial: "Kailua's laid-back vibe is perfect, and Red Rock Cleaning fits right in. They're reliable, friendly, and keep our beach house spotless for guests."
  },
  kapolei: {
    description: "Kapolei is Oahu's 'Second City,' featuring new developments, shopping centers, and growing residential communities. Our cleaning services in Kapolei help new homeowners and growing families maintain pristine properties, from move-in cleaning to ongoing maintenance that preserves your investment.",
    services: ["Standard Cleaning", "Deep Cleaning", "Move Out Cleaning", "Airbnb Cleaning", "Post Construction Cleaning"],
    testimonial: "Moving to Kapolei was exciting, and Red Rock Cleaning made settling into our new home effortless with their thorough move-in cleaning service."
  },
  makakilo: {
    description: "Makakilo offers panoramic ocean and mountain views from its elevated position, making it a sought-after location for families seeking a quieter lifestyle. Our cleaning services in Makakilo provide reliable solutions for busy families, ensuring your home remains a clean, comfortable retreat with stunning views.",
    services: ["Standard Cleaning", "Deep Cleaning", "Move Out Cleaning", "Airbnb Cleaning", "Post Construction Cleaning"],
    testimonial: "The views from Makakilo are incredible, and Red Rock Cleaning ensures our home's interior is just as beautiful as the scenery outside our windows."
  },
  mililani: {
    description: "Mililani is a master-planned community known for its excellent schools, parks, and family-friendly atmosphere. Our cleaning services in Mililani help busy families maintain clean, healthy homes with reliable maid service and comprehensive deep cleaning options that fit busy schedules.",
    services: ["Standard Cleaning", "Deep Cleaning", "Move Out Cleaning", "Airbnb Cleaning", "Post Construction Cleaning"],
    testimonial: "Raising kids in Mililani means our home gets lots of use. Red Rock Cleaning keeps everything spotless so we can focus on family time and activities."
  },
  "pearl-city": {
    description: "Pearl City provides convenient access to Pearl Harbor, military bases, and downtown Honolulu while maintaining its residential character. Our cleaning services in Pearl City cater to both military families and civilians, offering flexible scheduling and specialized services for unique home layouts.",
    services: ["Standard Cleaning", "Deep Cleaning", "Move Out Cleaning", "Airbnb Cleaning", "Post Construction Cleaning"],
    testimonial: "Pearl City's central location is perfect for our family, and Red Rock Cleaning's flexible scheduling works great with our busy military lifestyle."
  },
  waialae: {
    description: "Waialae is an affluent neighborhood known for its golf course, upscale homes, and proximity to Kahala. Our premium cleaning services in Waialae understand the needs of luxury homeowners, providing discreet, professional service that maintains the pristine condition of high-end properties.",
    services: ["Standard Cleaning", "Deep Cleaning", "Move Out Cleaning", "Airbnb Cleaning", "Post Construction Cleaning"],
    testimonial: "Waialae living requires the finest services. Red Rock Cleaning exceeds our expectations with their professional approach and attention to every detail."
  },
  waikiki: {
    description: "Waikiki is the heart of Oahu's tourism industry, featuring high-rise condos, luxury hotels, and vacation rentals. Our cleaning services in Waikiki specialize in vacation rental management, providing quick turnovers, deep cleaning for guest arrivals, and regular maintenance for property investors.",
    services: ["Standard Cleaning", "Deep Cleaning", "Move Out Cleaning", "Airbnb Cleaning", "Post Construction Cleaning"],
    testimonial: "Managing vacation rentals in Waikiki requires perfection. Red Rock Cleaning delivers consistent, high-quality service that keeps our guests happy and coming back."
  },
  waimanalo: {
    description: "Waimanalo offers rural charm with stunning beaches and agricultural landscapes, providing a peaceful escape from city life. Our cleaning services in Waimanalo respect the natural beauty of the area, providing eco-friendly cleaning solutions and flexible scheduling for residents who value the island's pristine environment.",
    services: ["Standard Cleaning", "Deep Cleaning", "Move Out Cleaning", "Airbnb Cleaning", "Post Construction Cleaning"],
    testimonial: "Waimanalo's natural beauty deserves a clean home to match. Red Rock Cleaning uses eco-friendly products that are safe for our family and the environment."
  },
  waipahu: {
    description: "Waipahu is a diverse community with a rich agricultural history and growing residential developments. Our cleaning services in Waipahu provide quality, reliable solutions for working families, from standard cleaning to move-out services that help with life transitions and property changes.",
    services: ["Standard Cleaning", "Deep Cleaning", "Move Out Cleaning", "Airbnb Cleaning", "Post Construction Cleaning"],
    testimonial: "Waipahu's community spirit is strong, and Red Rock Cleaning fits right in. They're trustworthy neighbors who keep our home clean and comfortable."
  }
};

export const OahuAreasServed = () => {
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
            Proudly Serving the Entire Island of Oahu
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From the bustling streets of Waikiki to the serene beaches of Waimanalo, 
            we provide professional cleaning services throughout Oahu's diverse communities.
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
              <option value="">Select an Oahu Area</option>
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
                          <a href="/book-now-oahu">
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
              <a href="/book-now-oahu">Get Your Free Quote</a>
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

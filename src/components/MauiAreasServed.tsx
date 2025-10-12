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
  { name: "Wailea", slug: "wailea" },
  { name: "Makena", slug: "makena" },
  { name: "Kihei", slug: "kihei" },
  { name: "Kapalua", slug: "kapalua" },
  { name: "Ka'anapali", slug: "kaanapali" },
  { name: "Lahaina", slug: "lahaina" },
  { name: "Spreckelsville", slug: "spreckelsville" },
  { name: "Pa'ia", slug: "paia" },
  { name: "Kuau", slug: "kuau" },
  { name: "Ha'iku", slug: "haiku" },
];

const neighborhoodContent = {
  wailea: {
    description: "Wailea is Maui's premier luxury resort destination, featuring world-class hotels, championship golf courses, and exclusive beachfront properties. Our premium cleaning services in Wailea cater to high-end vacation rentals, luxury homes, and resort properties, providing meticulous attention to detail that matches the area's five-star standards.",
    services: ["Standard Cleaning", "Deep Cleaning", "Move Out Cleaning", "Airbnb Cleaning", "Post Construction Cleaning"],
    testimonial: "Our Wailea vacation rental demands perfection for our guests. Red Rock Cleaning delivers luxury service that keeps our property in pristine condition year-round."
  },
  makena: {
    description: "Makena offers some of Maui's most exclusive residential communities, with stunning oceanfront estates and private beach access. Our cleaning services in Makena understand the needs of luxury homeowners and vacation rental investors, providing discreet, professional service that maintains the pristine condition of high-end properties.",
    services: ["Standard Cleaning", "Deep Cleaning", "Move Out Cleaning", "Airbnb Cleaning", "Post Construction Cleaning"],
    testimonial: "Makena's natural beauty deserves a home that matches. Red Rock Cleaning ensures our oceanfront estate is always guest-ready with their exceptional attention to detail."
  },
  kihei: {
    description: "Kihei is Maui's most family-friendly destination, offering a mix of condos, townhouses, and single-family homes with easy access to beautiful beaches. Our cleaning services in Kihei help busy families and vacation rental owners maintain clean, comfortable spaces, from regular maid service to quick turnovers for incoming guests.",
    services: ["Standard Cleaning", "Deep Cleaning", "Move Out Cleaning", "Airbnb Cleaning", "Post Construction Cleaning"],
    testimonial: "Raising kids in Kihei means our home gets lots of use. Red Rock Cleaning keeps everything spotless so we can focus on enjoying the beaches and family time."
  },
  kapalua: {
    description: "Kapalua is home to Maui's most prestigious golf courses and luxury resort communities, attracting discerning travelers and property owners. Our cleaning services in Kapalua provide the meticulous care that luxury properties require, from routine maintenance to deep cleaning that showcases your home's finest features.",
    services: ["Standard Cleaning", "Deep Cleaning", "Move Out Cleaning", "Airbnb Cleaning", "Post Construction Cleaning"],
    testimonial: "Kapalua living requires the finest services. Red Rock Cleaning exceeds our expectations with their professional approach and attention to every luxury detail."
  },
  kaanapali: {
    description: "Ka'anapali is Maui's original resort destination, featuring historic properties, world-famous beaches, and a vibrant vacation rental market. Our cleaning services in Ka'anapali specialize in vacation rental management, providing quick turnovers, deep cleaning for guest arrivals, and regular maintenance for property investors.",
    services: ["Standard Cleaning", "Deep Cleaning", "Move Out Cleaning", "Airbnb Cleaning", "Post Construction Cleaning"],
    testimonial: "Managing vacation rentals in Ka'anapali requires perfection. Red Rock Cleaning delivers consistent, high-quality service that keeps our guests happy and coming back."
  },
  lahaina: {
    description: "Lahaina is Maui's historic whaling town, now a bustling tourist destination with unique architecture and a thriving vacation rental market. Our cleaning services in Lahaina respect the historic character of properties while providing modern cleaning solutions, from quick turnovers to deep cleaning for special events.",
    services: ["Standard Cleaning", "Deep Cleaning", "Move Out Cleaning", "Airbnb Cleaning", "Post Construction Cleaning"],
    testimonial: "Lahaina's historic charm deserves careful cleaning. Red Rock Cleaning understands our unique property and keeps it spotless while preserving its character."
  },
  spreckelsville: {
    description: "Spreckelsville is a quiet residential area known for its sugar plantation history and peaceful atmosphere, offering a retreat from the busier tourist areas. Our cleaning services in Spreckelsville provide reliable, personalized care for residents who value the area's tranquility and natural beauty.",
    services: ["Standard Cleaning", "Deep Cleaning", "Move Out Cleaning", "Airbnb Cleaning", "Post Construction Cleaning"],
    testimonial: "Spreckelsville's peaceful setting deserves a clean home to match. Red Rock Cleaning provides reliable service that respects our quiet lifestyle and natural surroundings."
  },
  paia: {
    description: "Pa'ia is Maui's eclectic North Shore town, known for its bohemian vibe, windsurfing culture, and unique mix of historic and modern homes. Our cleaning services in Pa'ia embrace the area's laid-back spirit while providing thorough cleaning solutions for residents who value both style and functionality.",
    services: ["Standard Cleaning", "Deep Cleaning", "Move Out Cleaning", "Airbnb Cleaning", "Post Construction Cleaning"],
    testimonial: "Pa'ia's unique style deserves cleaning that matches. Red Rock Cleaning understands our eclectic home and keeps it spotless while respecting our creative lifestyle."
  },
  kuau: {
    description: "Kuau is a hidden gem on Maui's North Shore, offering a mix of oceanfront properties and quiet residential streets with stunning views of the Pacific. Our cleaning services in Kuau provide personalized care for residents who appreciate the area's natural beauty and peaceful atmosphere.",
    services: ["Standard Cleaning", "Deep Cleaning", "Move Out Cleaning", "Airbnb Cleaning", "Post Construction Cleaning"],
    testimonial: "Kuau's oceanfront location is magical, and Red Rock Cleaning ensures our home's interior matches the beautiful views outside our windows."
  },
  haiku: {
    description: "Ha'iku is Maui's upcountry gem, offering cooler temperatures, lush landscapes, and a mix of agricultural and residential properties. Our cleaning services in Ha'iku respect the area's natural environment, providing eco-friendly cleaning solutions and flexible scheduling for residents who value sustainable living.",
    services: ["Standard Cleaning", "Deep Cleaning", "Move Out Cleaning", "Airbnb Cleaning", "Post Construction Cleaning"],
    testimonial: "Ha'iku's natural beauty deserves eco-friendly cleaning. Red Rock Cleaning uses products that are safe for our family and the environment we love."
  }
};

export const MauiAreasServed = () => {
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
            Proudly Serving Communities Across Maui
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From the luxury resorts of Wailea to the historic charm of Lahaina, 
            we provide professional cleaning services throughout Maui's diverse communities.
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
              <option value="">Select a Maui Area</option>
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
                          <a href="/book-now-maui">
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
              <a href="/book-now-maui">Get Your Free Quote</a>
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

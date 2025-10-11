import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MapPin } from "lucide-react";

const locations = [
  {
    id: "las-vegas",
    name: "Las Vegas",
    path: "/las-vegas",
    services: [
      { name: "Standard Cleaning", path: "/las-vegas/standard-cleaning-services" },
      { name: "Deep Cleaning", path: "/las-vegas/deep-cleaning-services" },
      { name: "Move-Out Cleaning", path: "/las-vegas/move-out-cleaning-services" },
      { name: "Post-Construction", path: "/las-vegas/post-construction-cleaning-services" },
      { name: "Airbnb Cleaning", path: "/las-vegas/airbnb-cleaning-services" },
    ]
  },
  {
    id: "oahu",
    name: "Oahu",
    path: "/oahu",
    services: [
      { name: "Standard Cleaning", path: "/oahu/standard-cleaning-services" },
      { name: "Deep Cleaning", path: "/oahu/deep-cleaning-services" },
      { name: "Move-Out Cleaning", path: "/oahu/move-out-cleaning-services" },
      { name: "Post-Construction", path: "/oahu/post-construction-cleaning-services" },
      { name: "Airbnb Cleaning", path: "/oahu/airbnb-cleaning-services" },
    ]
  },
  {
    id: "maui",
    name: "Maui",
    path: "/maui",
    services: [
      { name: "Standard Cleaning", path: "/maui/standard-cleaning-services" },
      { name: "Deep Cleaning", path: "/maui/deep-cleaning-services" },
      { name: "Move-Out Cleaning", path: "/maui/move-out-cleaning-services" },
      { name: "Post-Construction", path: "/maui/post-construction-cleaning-services" },
      { name: "Airbnb Cleaning", path: "/maui/airbnb-cleaning-services" },
    ]
  },
  {
    id: "south-florida",
    name: "South Florida",
    path: "/south-florida",
    services: [
      { name: "Standard Cleaning", path: "/south-florida/standard-cleaning-services" },
      { name: "Deep Cleaning", path: "/south-florida/deep-cleaning-services" },
      { name: "Move-Out Cleaning", path: "/south-florida/move-out-cleaning-services" },
      { name: "Post-Construction", path: "/south-florida/post-construction-cleaning-services" },
      { name: "Airbnb Cleaning", path: "/south-florida/airbnb-cleaning-services" },
    ]
  },
  {
    id: "columbus-ohio",
    name: "Columbus, Ohio",
    path: "/columbus-ohio",
    services: [
      { name: "Standard Cleaning", path: "/columbus-ohio/standard-cleaning-services" },
      { name: "Deep Cleaning", path: "/columbus-ohio/deep-cleaning-services" },
      { name: "Move-Out Cleaning", path: "/columbus-ohio/move-out-cleaning-services" },
      { name: "Post-Construction", path: "/columbus-ohio/post-construction-cleaning-services" },
      { name: "Airbnb Cleaning", path: "/columbus-ohio/airbnb-cleaning-services" },
    ]
  },
  {
    id: "dallas",
    name: "Dallas",
    path: "/dallas",
    services: [
      { name: "Standard Cleaning", path: "/dallas/standard-cleaning-services" },
      { name: "Deep Cleaning", path: "/dallas/deep-cleaning-services" },
      { name: "Move-Out Cleaning", path: "/dallas/move-out-cleaning-services" },
      { name: "Post-Construction", path: "/dallas/post-construction-cleaning-services" },
      { name: "Airbnb Cleaning", path: "/dallas/airbnb-cleaning-services" },
    ]
  },
];

interface LocalLocationSelectorProps {
  currentLocation?: string;
}

export const LocalLocationSelector = ({ currentLocation }: LocalLocationSelectorProps) => {
  // Find the default open location based on current location
  const defaultLocation = currentLocation ? 
    locations.find(loc => loc.path.includes(currentLocation))?.id : 
    undefined;

  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Our Service Locations</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Select your location to view available cleaning services
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible defaultValue={defaultLocation} className="space-y-4">
            {locations.map((location) => (
              <AccordionItem 
                key={location.id} 
                value={location.id}
                className="border border-border rounded-lg px-6 bg-background/50 backdrop-blur-sm"
              >
                <AccordionTrigger className="hover:no-underline py-6">
                  <div className="flex items-center space-x-3 text-left">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-lg font-semibold">{location.name}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {location.services.map((service) => (
                      <a
                        key={service.path}
                        href={service.path}
                        className="block p-4 rounded-lg border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-200 group"
                      >
                        <div className="text-sm font-medium group-hover:text-primary transition-colors">
                          {service.name}
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">
                          View Details →
                        </div>
                      </a>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

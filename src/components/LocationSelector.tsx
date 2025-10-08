import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const locations = [
  {
    name: "South Florida",
    region: "Weston & Fort Lauderdale",
    path: "/home-south-florida",
    phone: "(954) 469-8881",
    address: "4032 Pinewood Lane, Weston FL, 33331",
  },
  {
    name: "Las Vegas",
    region: "Las Vegas & Henderson",
    path: "/home-las-vegas",
    phone: "(702) 508-0098",
    address: "4536 W Warm Springs Rd, Las Vegas NV, 89118",
  },
  {
    name: "Oahu",
    region: "Honolulu & Surrounding Areas",
    path: "/home-oahu",
    phone: "(808) 909-8801",
    address: "1326 Alapai Street, Honolulu HI, 96813",
  },
  {
    name: "Maui",
    region: "Maui Island",
    path: "/home-maui",
    phone: "(808) 909-3038",
    address: "1326 Alapai Street, Honolulu HI, 96813",
  },
  {
    name: "Columbus Ohio",
    region: "Columbus & Dublin",
    path: "/home-columbus-ohio",
    phone: "(380) 235-3135",
    address: "6605 Longshore Street Suite 240-320, Dublin, Oh 43017",
  },
  {
    name: "Dallas",
    region: "Dallas Metro Area",
    path: "/home-dallas",
    phone: "(972) 992-2576",
    address: "18383 Preston Road # 202, Dallas, TX 75252",
  },
];

export const LocationSelector = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Select Your Location</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose your service area to get started with premium cleaning services
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {locations.map((location) => (
            <Card key={location.path} className="hover:shadow-xl transition-shadow group">
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-bold text-xl mb-1">{location.name}</h3>
                    <p className="text-sm text-muted-foreground">{location.region}</p>
                  </div>
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-start space-x-2">
                    <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-muted-foreground" />
                    <a href={`tel:${location.phone}`} className="hover:text-primary transition-colors">
                      {location.phone}
                    </a>
                  </div>
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-muted-foreground" />
                    <span className="text-muted-foreground">{location.address}</span>
                  </div>
                </div>
                
                <Button asChild className="w-full group-hover:bg-primary/90" variant="cta">
                  <Link to={location.path}>
                    Select Location
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

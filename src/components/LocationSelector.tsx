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
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Select Your Location</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose your service area to get started with premium cleaning services
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {locations.map((location, index) => (
            <Card 
              key={location.path} 
              className="group hover:scale-[1.02] transition-all duration-300 border-2 hover:border-primary/20 overflow-hidden relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardContent className="pt-6 space-y-4 relative z-10">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-bold text-xl mb-1 group-hover:text-primary transition-colors">{location.name}</h3>
                    <p className="text-sm text-muted-foreground">{location.region}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                </div>
                
                <div className="space-y-3 text-sm pt-2">
                  <div className="flex items-start space-x-3 group/phone">
                    <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-muted-foreground group-hover/phone:text-primary transition-colors" />
                    <a href={`tel:${location.phone}`} className="hover:text-primary transition-colors font-medium">
                      {location.phone}
                    </a>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-muted-foreground" />
                    <span className="text-muted-foreground text-xs leading-relaxed">{location.address}</span>
                  </div>
                </div>
                
                <Button asChild className="w-full mt-4" variant="cta">
                  <Link to={location.path} className="group/btn">
                    Select Location
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
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

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

const locations = [
  {
    name: "Las Vegas",
    path: "/las-vegas",
  },
  {
    name: "Oahu",
    path: "/oahu",
  },
  {
    name: "Maui",
    path: "/maui",
  },
  {
    name: "South Florida",
    path: "/south-florida",
  },
  {
    name: "Columbus, Ohio",
    path: "/columbus-ohio",
  },
  {
    name: "Dallas",
    path: "/dallas",
  },
];

export const LocationSelector = () => {
  const navigate = useNavigate();

  const handleLocationChange = (path: string) => {
    navigate(path);
  };

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Select Your Location</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose your service area to get started with premium cleaning services
          </p>
        </div>
        
        <div className="max-w-md mx-auto">
          <Select onValueChange={handleLocationChange}>
            <SelectTrigger className="h-14 text-lg">
              <MapPin className="w-5 h-5 mr-2" />
              <SelectValue placeholder="Choose your location" />
            </SelectTrigger>
            <SelectContent>
              {locations.map((location) => (
                <SelectItem key={location.path} value={location.path}>
                  {location.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </section>
  );
};

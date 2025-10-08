import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo.png";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const locations = [
  { name: "South Florida", path: "/home-south-florida", phone: "(954) 469-8881" },
  { name: "Las Vegas", path: "/home-las-vegas", phone: "(702) 508-0098" },
  { name: "Oahu", path: "/home-oahu", phone: "(808) 909-8801" },
  { name: "Maui", path: "/home-maui", phone: "(808) 909-3038" },
  { name: "Columbus Ohio", path: "/home-columbus-ohio", phone: "(380) 235-3135" },
  { name: "Dallas", path: "/home-dallas", phone: "(972) 992-2576" },
];

export const Navigation = ({ loginUrl }: { loginUrl?: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const currentLocation = locations.find(loc => 
    location.pathname.includes(loc.path.replace('/home-', ''))
  ) || locations[0];

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24 md:h-40 py-2 md:py-4">
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt="Red Rock Cleaning Logo" className="h-[75px] w-[75px] md:h-[150px] md:w-[150px]" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Select value={currentLocation.path} onValueChange={(value) => window.location.href = value}>
              <SelectTrigger className="w-[200px]">
                <MapPin className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Select Location" />
              </SelectTrigger>
              <SelectContent>
                {locations.map((loc) => (
                  <SelectItem key={loc.path} value={loc.path}>
                    {loc.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <a href={`tel:${currentLocation.phone}`} className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              <span className="font-medium">{currentLocation.phone}</span>
            </a>
            
            {loginUrl && (
              <Button asChild variant="outline">
                <a href={loginUrl} target="_blank" rel="noopener noreferrer">
                  Customer Login
                </a>
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Select value={currentLocation.path} onValueChange={(value) => window.location.href = value}>
              <SelectTrigger className="w-full">
                <MapPin className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Select Location" />
              </SelectTrigger>
              <SelectContent>
                {locations.map((loc) => (
                  <SelectItem key={loc.path} value={loc.path}>
                    {loc.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <a href={`tel:${currentLocation.phone}`} className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              <span className="font-medium">{currentLocation.phone}</span>
            </a>
            
            {loginUrl && (
              <Button asChild variant="outline" className="w-full">
                <a href={loginUrl} target="_blank" rel="noopener noreferrer">
                  Customer Login
                </a>
              </Button>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

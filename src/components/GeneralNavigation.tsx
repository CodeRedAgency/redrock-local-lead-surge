import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, MapPin } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const locations = [
  { name: "South Florida", path: "/home-south-florida" },
  { name: "Las Vegas", path: "/home-las-vegas" },
  { name: "Oahu", path: "/home-oahu" },
  { name: "Maui", path: "/home-maui" },
  { name: "Columbus Ohio", path: "/home-columbus-ohio" },
  { name: "Dallas", path: "/home-dallas" },
];

export const GeneralNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-primary">Red Rock Cleaning</div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Select onValueChange={(value) => window.location.href = value}>
              <SelectTrigger className="w-[200px]">
                <MapPin className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Choose Location" />
              </SelectTrigger>
              <SelectContent>
                {locations.map((loc) => (
                  <SelectItem key={loc.path} value={loc.path}>
                    {loc.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
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
            <Select onValueChange={(value) => window.location.href = value}>
              <SelectTrigger className="w-full">
                <MapPin className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Choose Location" />
              </SelectTrigger>
              <SelectContent>
                {locations.map((loc) => (
                  <SelectItem key={loc.path} value={loc.path}>
                    {loc.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}
      </div>
    </nav>
  );
};

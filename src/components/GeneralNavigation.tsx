import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, MapPin, ChevronDown, Phone } from "lucide-react";
import logo from "@/assets/logo.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
    <nav className="bg-background/95 backdrop-blur-md border-b border-border sticky top-0 z-50 shadow-[var(--shadow-soft)]">
      {/* Top Bar with Toll-Free Number */}
      <div className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground py-2.5">
        <div className="container mx-auto px-4 flex justify-center items-center">
          <a href="tel:+18888051733" className="flex items-center space-x-2 hover:scale-105 transition-transform duration-300 group">
            <Phone className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            <span className="font-semibold tracking-wide">(888) 805-1733</span>
          </a>
        </div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24 md:h-40 py-2 md:py-4">
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt="Red Rock Cleaning Logo" className="h-[75px] w-[75px] md:h-[150px] md:w-[150px]" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 hover:text-primary transition-all duration-300 group font-medium">
                About <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link to="/about">About Us</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/faq">FAQ</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 hover:text-primary transition-colors">
                Services <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link to="/residential-cleaning">Residential Cleaning</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/commercial-cleaning">Commercial Cleaning</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 hover:text-primary transition-colors">
                Pricing <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link to="/south-florida-booking">South Florida</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/las-vegas-booking">Las Vegas</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/oahu-booking">Oahu</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/maui-booking">Maui</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/columbus-ohio-booking">Columbus Ohio</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/dallas-booking">Dallas</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/contact" className="hover:text-primary transition-colors">
              Contact
            </Link>

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
            <div className="space-y-2">
              <div className="font-semibold text-sm text-muted-foreground px-2">About</div>
              <Link to="/about" className="block px-2 py-2 hover:bg-muted rounded" onClick={() => setIsOpen(false)}>
                About Us
              </Link>
              <Link to="/faq" className="block px-2 py-2 hover:bg-muted rounded" onClick={() => setIsOpen(false)}>
                FAQ
              </Link>
            </div>

            <div className="space-y-2">
              <div className="font-semibold text-sm text-muted-foreground px-2">Services</div>
              <Link to="/residential-cleaning" className="block px-2 py-2 hover:bg-muted rounded" onClick={() => setIsOpen(false)}>
                Residential Cleaning
              </Link>
              <Link to="/commercial-cleaning" className="block px-2 py-2 hover:bg-muted rounded" onClick={() => setIsOpen(false)}>
                Commercial Cleaning
              </Link>
            </div>

            <div className="space-y-2">
              <div className="font-semibold text-sm text-muted-foreground px-2">Pricing</div>
              <Link to="/south-florida-booking" className="block px-2 py-2 hover:bg-muted rounded" onClick={() => setIsOpen(false)}>
                South Florida
              </Link>
              <Link to="/las-vegas-booking" className="block px-2 py-2 hover:bg-muted rounded" onClick={() => setIsOpen(false)}>
                Las Vegas
              </Link>
              <Link to="/oahu-booking" className="block px-2 py-2 hover:bg-muted rounded" onClick={() => setIsOpen(false)}>
                Oahu
              </Link>
              <Link to="/maui-booking" className="block px-2 py-2 hover:bg-muted rounded" onClick={() => setIsOpen(false)}>
                Maui
              </Link>
              <Link to="/columbus-ohio-booking" className="block px-2 py-2 hover:bg-muted rounded" onClick={() => setIsOpen(false)}>
                Columbus Ohio
              </Link>
              <Link to="/dallas-booking" className="block px-2 py-2 hover:bg-muted rounded" onClick={() => setIsOpen(false)}>
                Dallas
              </Link>
            </div>

            <Link to="/contact" className="block px-2 py-2 hover:bg-muted rounded" onClick={() => setIsOpen(false)}>
              Contact
            </Link>

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

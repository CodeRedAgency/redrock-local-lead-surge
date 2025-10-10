import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, MapPin, Phone, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "@/components/ui/dropdown-menu";

const locations = [
  { name: "South Florida", path: "/south-florida", phone: "(954) 469-8881" },
  { name: "Las Vegas", path: "/las-vegas", phone: "(702) 508-0098" },
  { name: "Oahu", path: "/oahu", phone: "(808) 909-8801" },
  { name: "Maui", path: "/maui", phone: "(808) 909-3038" },
  { name: "Columbus Ohio", path: "/columbus-ohio", phone: "(380) 235-3135" },
  { name: "Dallas", path: "/dallas", phone: "(972) 992-2576" },
];

export const Navigation = ({ loginUrl, bookingUrl }: { loginUrl?: string; bookingUrl?: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const currentLocation = locations.find(loc => 
    location.pathname.includes(loc.path.replace('/', ''))
  ) || locations[0];

  return (
    <nav className="bg-background/95 backdrop-blur-md border-b border-border sticky top-0 z-50 shadow-[var(--shadow-soft)] relative overflow-hidden">
      
      {/* Top Bar with Phone Number */}
      <div className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground py-2.5 relative">
        <div className="container mx-auto px-4 flex justify-center items-center">
          <a href={`tel:${currentLocation.phone}`} className="flex items-center space-x-2 hover:scale-105 transition-transform duration-300 group">
            <Phone className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            <span className="font-semibold tracking-wide">{currentLocation.phone}</span>
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="Red Rock Cleans" className="h-8 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-primary transition-all duration-300 font-medium relative z-10">
              Home
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 hover:text-primary transition-all duration-300 group font-medium relative z-10">
                About <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link to="/about">About Us</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/about/faq">FAQ</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 hover:text-primary transition-all duration-300 group font-medium relative z-10">
                Services <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>Residential Cleaning</DropdownMenuSubTrigger>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem asChild>
                      <Link to="/standard-cleaning-services">Standard Cleaning Services</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/deep-cleaning-services">Deep Cleaning Services</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/move-out-cleaning-services">Move Out Cleaning Services</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/post-construction-cleaning-services">Post Construction Cleaning Services</Link>
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
                <DropdownMenuItem asChild>
                  <Link to="/commercial-cleaning">Commercial Cleaning</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 hover:text-primary transition-all duration-300 group font-medium relative z-10">
                Pricing <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link to="/commercial-cleaning-estimator">Commercial Cleaning Cost Estimator</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/book-now-southflorida">South Florida</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/book-now-vegas">Las Vegas</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/book-now-honolulu">Oahu</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/book-now-maui">Maui</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/book-now-columbus-ohio">Columbus Ohio</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/book-now-dallas">Dallas</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/contact" className="hover:text-primary transition-colors relative z-10">
              Contact
            </Link>

            {/* Location Selector */}
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-muted-foreground" />
              <Select defaultValue={currentLocation.path}>
                <SelectTrigger className="w-32 border-0 bg-transparent shadow-none">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  {locations.map((location) => (
                    <SelectItem key={location.path} value={location.path}>
                      <a href={location.path} className="flex items-center space-x-2">
                        <span>{location.name}</span>
                        <span className="text-xs text-muted-foreground">{location.phone}</span>
                      </a>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {loginUrl && (
              <Button variant="ghost" size="sm" asChild>
                <a href={loginUrl} target="_blank" rel="noopener noreferrer">
                  Login
                </a>
              </Button>
            )}
            {bookingUrl && (
              <Button size="sm" asChild>
                <a href={bookingUrl}>
                  <Phone className="w-4 h-4 mr-2" />
                  Book Now
                </a>
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t">
            <nav className="py-4 space-y-4">
              <Link to="/" className="block hover:text-primary transition-colors">
                Home
              </Link>
              
              <div>
                <div className="font-medium mb-2">About</div>
                <div className="ml-4 space-y-2">
                  <Link to="/about" className="block hover:text-primary transition-colors text-sm">
                    About Us
                  </Link>
                  <Link to="/about/faq" className="block hover:text-primary transition-colors text-sm">
                    FAQ
                  </Link>
                </div>
              </div>

              <div>
                <div className="font-medium mb-2">Services</div>
                <div className="ml-4 space-y-2">
                  <div className="font-medium text-sm text-muted-foreground mb-1">Residential Cleaning</div>
                  <Link to="/standard-cleaning-services" className="block ml-4 hover:text-primary transition-colors text-sm">
                    Standard Cleaning Services
                  </Link>
                  <Link to="/deep-cleaning-services" className="block ml-4 hover:text-primary transition-colors text-sm">
                    Deep Cleaning Services
                  </Link>
                  <Link to="/move-out-cleaning-services" className="block ml-4 hover:text-primary transition-colors text-sm">
                    Move Out Cleaning Services
                  </Link>
                  <Link to="/post-construction-cleaning-services" className="block ml-4 hover:text-primary transition-colors text-sm">
                    Post Construction Cleaning Services
                  </Link>
                  <Link to="/commercial-cleaning" className="block ml-4 hover:text-primary transition-colors text-sm">
                    Commercial Cleaning
                  </Link>
                </div>
              </div>

              <div>
                <div className="font-medium mb-2">Pricing</div>
                <div className="ml-4 space-y-2">
                  <Link to="/commercial-cleaning-estimator" className="block hover:text-primary transition-colors text-sm">
                    Commercial Cleaning Cost Estimator
                  </Link>
                  <Link to="/book-now-southflorida" className="block hover:text-primary transition-colors text-sm">
                    South Florida
                  </Link>
                  <Link to="/book-now-vegas" className="block hover:text-primary transition-colors text-sm">
                    Las Vegas
                  </Link>
                  <Link to="/book-now-honolulu" className="block hover:text-primary transition-colors text-sm">
                    Oahu
                  </Link>
                  <Link to="/book-now-maui" className="block hover:text-primary transition-colors text-sm">
                    Maui
                  </Link>
                  <Link to="/book-now-columbus-ohio" className="block hover:text-primary transition-colors text-sm">
                    Columbus Ohio
                  </Link>
                  <Link to="/book-now-dallas" className="block hover:text-primary transition-colors text-sm">
                    Dallas
                  </Link>
                </div>
              </div>

              <Link to="/contact" className="block hover:text-primary transition-colors">
                Contact
              </Link>

              {/* Mobile CTA Buttons */}
              <div className="pt-4 space-y-2">
                {loginUrl && (
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <a href={loginUrl} target="_blank" rel="noopener noreferrer">
                      Login
                    </a>
                  </Button>
                )}
                {bookingUrl && (
                  <Button size="sm" className="w-full" asChild>
                    <a href={bookingUrl}>
                      <Phone className="w-4 h-4 mr-2" />
                      Book Now
                    </a>
                  </Button>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </nav>
  );
};
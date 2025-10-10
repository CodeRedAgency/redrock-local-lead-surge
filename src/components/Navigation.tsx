import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, MapPin, Phone, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";
import { BubbleAnimation, HoverBubble, ClickBubble } from "@/components/BubbleAnimation";
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
  { name: "South Florida", path: "/home-south-florida", phone: "(954) 469-8881" },
  { name: "Las Vegas", path: "/home-las-vegas", phone: "(702) 508-0098" },
  { name: "Oahu", path: "/home-oahu", phone: "(808) 909-8801" },
  { name: "Maui", path: "/home-maui", phone: "(808) 909-3038" },
  { name: "Columbus Ohio", path: "/home-columbus-ohio", phone: "(380) 235-3135" },
  { name: "Dallas", path: "/home-dallas", phone: "(972) 992-2576" },
];

export const Navigation = ({ loginUrl, bookingUrl }: { loginUrl?: string; bookingUrl?: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const currentLocation = locations.find(loc => 
    location.pathname.includes(loc.path.replace('/home-', ''))
  ) || locations[0];

  return (
    <nav className="bg-background/95 backdrop-blur-md border-b border-border sticky top-0 z-50 shadow-[var(--shadow-soft)] relative overflow-hidden">
      {/* Bubble Animation Background */}
      <BubbleAnimation className="absolute inset-0 pointer-events-none" bubbleCount={3} />
      
      {/* Top Bar with Phone Number */}
      <div className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground py-2.5 relative">
        <div className="container mx-auto px-4 flex justify-center items-center">
          <a href={`tel:${currentLocation.phone}`} className="flex items-center space-x-2 hover:scale-105 transition-transform duration-300 group">
            <Phone className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            <span className="font-semibold tracking-wide">{currentLocation.phone}</span>
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
            <HoverBubble>
              <Link to="/" className="hover:text-primary transition-all duration-300 font-medium relative z-10">
                Home
              </Link>
            </HoverBubble>

            <HoverBubble>
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
            </HoverBubble>

            <HoverBubble>
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
                      <Link to="/airbnb-cleaning-services">Airbnb Cleaning Services</Link>
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
            </HoverBubble>

            <HoverBubble>
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
            </HoverBubble>

            <HoverBubble>
              <Link to="/contact" className="hover:text-primary transition-all duration-300 font-medium relative z-10">
                Contact
              </Link>
            </HoverBubble>

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
            
            {loginUrl && (
              <Button asChild variant="outline">
                <a href={loginUrl} target="_blank" rel="noopener noreferrer">
                  Customer Login
                </a>
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <ClickBubble>
            <button
              className="md:hidden p-2 relative z-10"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </ClickBubble>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <div className="space-y-2">
              <Link to="/" className="block px-2 py-2 hover:bg-muted rounded font-medium" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </div>

            <div className="space-y-2">
              <div className="font-semibold text-sm text-muted-foreground px-2">About</div>
              <Link to="/about" className="block px-2 py-2 hover:bg-muted rounded" onClick={() => setIsOpen(false)}>
                About Us
              </Link>
              <Link to="/about/faq" className="block px-2 py-2 hover:bg-muted rounded" onClick={() => setIsOpen(false)}>
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

            {bookingUrl && (
              <Link to={bookingUrl} className="block px-2 py-2 hover:bg-muted rounded" onClick={() => setIsOpen(false)}>
                Pricing
              </Link>
            )}

            <Link to="/contact" className="block px-2 py-2 hover:bg-muted rounded" onClick={() => setIsOpen(false)}>
              Contact
            </Link>

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

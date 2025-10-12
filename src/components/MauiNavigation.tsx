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

export const MauiNavigation = ({ loginUrl, bookingUrl }: { loginUrl?: string; bookingUrl?: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const currentLocation = locations.find(loc => location.pathname.startsWith(loc.path));
  
  // Get the current page path for the area selector
  const currentPath = location.pathname;

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/maui" className="flex items-center space-x-2">
              <img src={logo} alt="Red Rock Cleans" className="h-8 w-auto" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/maui" className="hover:text-primary transition-colors relative z-10">
                Home
              </Link>

              <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center space-x-1 hover:text-primary transition-all duration-300 group font-medium relative z-10">
                    Services <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuSub>
                      <DropdownMenuSubTrigger>Residential Cleaning</DropdownMenuSubTrigger>
                      <DropdownMenuSubContent>
                        <DropdownMenuItem asChild>
                          <Link to="/maui/airbnb-cleaning-services">Airbnb Cleaning Services in Maui</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/maui/standard-cleaning-services">Standard Cleaning Services in Maui</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/maui/deep-cleaning-services">Deep Cleaning Services in Maui</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/maui/move-out-cleaning-services">Move Out Cleaning Services in Maui</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/maui/post-construction-cleaning-services">Post Construction Cleaning Services in Maui</Link>
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

              {/* Maui Neighborhood Selector */}
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-muted-foreground" />
              <Select defaultValue="" onValueChange={(value) => {
                if (value) {
                  window.location.href = `/maui#${value}`;
                }
              }}>
                <SelectTrigger className="w-40 border-0 bg-transparent shadow-none">
                  <SelectValue placeholder="Maui Areas" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="wailea">
                    Wailea
                  </SelectItem>
                  <SelectItem value="makena">
                    Makena
                  </SelectItem>
                  <SelectItem value="kihei">
                    Kihei
                  </SelectItem>
                  <SelectItem value="kapalua">
                    Kapalua
                  </SelectItem>
                  <SelectItem value="kaanapali">
                    Ka'anapali
                  </SelectItem>
                  <SelectItem value="lahaina">
                    Lahaina
                  </SelectItem>
                  <SelectItem value="spreckelsville">
                    Spreckelsville
                  </SelectItem>
                  <SelectItem value="paia">
                    Pa'ia
                  </SelectItem>
                  <SelectItem value="kuau">
                    Kuau
                  </SelectItem>
                  <SelectItem value="haiku">
                    Ha'iku
                  </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </nav>

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
                <Link to="/maui" className="block hover:text-primary transition-colors">
                  Home
                </Link>
                
                <div>
                  <div className="font-medium mb-2">Services</div>
                  <div className="ml-4 space-y-2">
                    <div className="font-medium text-sm text-muted-foreground mb-1">Residential Cleaning</div>
                    <Link to="/maui/airbnb-cleaning-services" className="block ml-4 hover:text-primary transition-colors text-sm">
                      Airbnb Cleaning Services in Maui
                    </Link>
                    <Link to="/maui/standard-cleaning-services" className="block ml-4 hover:text-primary transition-colors text-sm">
                      Standard Cleaning Services in Maui
                    </Link>
                    <Link to="/maui/deep-cleaning-services" className="block ml-4 hover:text-primary transition-colors text-sm">
                      Deep Cleaning Services in Maui
                    </Link>
                    <Link to="/maui/move-out-cleaning-services" className="block ml-4 hover:text-primary transition-colors text-sm">
                      Move Out Cleaning Services in Maui
                    </Link>
                    <Link to="/maui/post-construction-cleaning-services" className="block ml-4 hover:text-primary transition-colors text-sm">
                      Post Construction Cleaning Services in Maui
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
                    <Link to="/book-now-maui" className="block hover:text-primary transition-colors text-sm">
                      Maui Booking
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
      </header>
  );
};

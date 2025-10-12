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

const southFloridaNeighborhoods = [
  { name: "Aventura", path: "/south-florida/standard-cleaning-services#aventura" },
  { name: "Cooper City", path: "/south-florida/standard-cleaning-services#cooper-city" },
  { name: "Dania Beach", path: "/south-florida/standard-cleaning-services#dania-beach" },
  { name: "Davie", path: "/south-florida/standard-cleaning-services#davie" },
  { name: "Fort Lauderdale", path: "/south-florida/standard-cleaning-services#fort-lauderdale" },
  { name: "Hallandale Beach", path: "/south-florida/standard-cleaning-services#hallandale-beach" },
  { name: "Hollywood", path: "/south-florida/standard-cleaning-services#hollywood" },
  { name: "Las Olas", path: "/south-florida/standard-cleaning-services#las-olas" },
  { name: "Lauderdale Lakes", path: "/south-florida/standard-cleaning-services#lauderdale-lakes" },
  { name: "Lauderhill", path: "/south-florida/standard-cleaning-services#lauderhill" },
  { name: "Margate", path: "/south-florida/standard-cleaning-services#margate" },
  { name: "Miramar", path: "/south-florida/standard-cleaning-services#miramar" },
  { name: "North Lauderdale", path: "/south-florida/standard-cleaning-services#north-lauderdale" },
  { name: "Pembroke Pines", path: "/south-florida/standard-cleaning-services#pembroke-pines" },
  { name: "Plantation", path: "/south-florida/standard-cleaning-services#plantation" },
  { name: "Southwest Ranches", path: "/south-florida/standard-cleaning-services#southwest-ranches" },
  { name: "Sunny Isles Beach", path: "/south-florida/standard-cleaning-services#sunny-isles-beach" },
  { name: "Sunrise", path: "/south-florida/standard-cleaning-services#sunrise" },
  { name: "Tamarac", path: "/south-florida/standard-cleaning-services#tamarac" },
  { name: "Weston", path: "/south-florida/standard-cleaning-services#weston" },
];

export const SouthFloridaNavigation = ({ loginUrl, bookingUrl }: { loginUrl?: string; bookingUrl?: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const currentLocation = locations.find(loc => location.pathname.startsWith(loc.path));

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/south-florida" className="flex items-center space-x-2">
              <img src={logo} alt="Red Rock Cleans" className="h-8 w-auto" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/south-florida" className="hover:text-primary transition-colors relative z-10">
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
                          <Link to="/south-florida/airbnb-cleaning-services">Airbnb Cleaning Services in South Florida</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/south-florida/standard-cleaning-services">Standard Cleaning Services in South Florida</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/south-florida/deep-cleaning-services">Deep Cleaning Services in South Florida</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/south-florida/move-out-cleaning-services">Move Out Cleaning Services in South Florida</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/south-florida/post-construction-cleaning-services">Post Construction Cleaning Services in South Florida</Link>
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
                      <Link to="/south-florida-calculator">South Florida Calculator</Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center space-x-1 hover:text-primary transition-all duration-300 group font-medium relative z-10">
                  <MapPin className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                  Locations <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {locations.map((location) => (
                    <DropdownMenuItem key={location.path} asChild>
                      <Link to={location.path} className="flex items-center justify-between w-full">
                        <span>{location.name}</span>
                        <span className="text-xs text-muted-foreground">{location.phone}</span>
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <Link to="/about" className="hover:text-primary transition-colors relative z-10">
                About
              </Link>

              <Link to="/contact" className="hover:text-primary transition-colors relative z-10">
                Contact
              </Link>

              <div className="flex items-center space-x-4">
                {loginUrl && (
                  <Button variant="ghost" size="sm" asChild>
                    <Link to={loginUrl}>Login</Link>
                  </Button>
                )}
                <Button size="sm" asChild>
                  <Link to={bookingUrl || "/book-now-southflorida"}>Book Now</Link>
                </Button>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:text-primary transition-colors relative z-10"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col space-y-4">
                <Link to="/south-florida" className="hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
                  Home
                </Link>
                
                <div className="space-y-2">
                  <div className="font-medium text-foreground">Services</div>
                  <div className="ml-4 space-y-2">
                    <Link to="/south-florida/airbnb-cleaning-services" className="block hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
                      Airbnb Cleaning Services in South Florida
                    </Link>
                    <Link to="/south-florida/standard-cleaning-services" className="block hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
                      Standard Cleaning Services in South Florida
                    </Link>
                    <Link to="/south-florida/deep-cleaning-services" className="block hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
                      Deep Cleaning Services in South Florida
                    </Link>
                    <Link to="/south-florida/move-out-cleaning-services" className="block hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
                      Move Out Cleaning Services in South Florida
                    </Link>
                    <Link to="/south-florida/post-construction-cleaning-services" className="block hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
                      Post Construction Cleaning Services in South Florida
                    </Link>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="font-medium text-foreground">Locations</div>
                  <div className="ml-4 space-y-2">
                    {locations.map((location) => (
                      <Link key={location.path} to={location.path} className="block hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
                        {location.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <Link to="/about" className="hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
                  About
                </Link>
                <Link to="/contact" className="hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
                  Contact
                </Link>

                <div className="flex flex-col space-y-2 pt-4 border-t">
                  {loginUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <Link to={loginUrl} onClick={() => setIsOpen(false)}>Login</Link>
                    </Button>
                  )}
                  <Button size="sm" asChild>
                    <Link to={bookingUrl || "/book-now-southflorida"} onClick={() => setIsOpen(false)}>Book Now</Link>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Neighborhood Selector */}
        <div className="bg-muted/50 py-2">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Select your neighborhood:</span>
              <Select onValueChange={(value) => window.location.href = value}>
                <SelectTrigger className="w-48 h-8 text-xs">
                  <SelectValue placeholder="Choose neighborhood" />
                </SelectTrigger>
                <SelectContent>
                  {southFloridaNeighborhoods.map((neighborhood) => (
                    <SelectItem key={neighborhood.path} value={neighborhood.path}>
                      {neighborhood.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
    </header>
  );
};

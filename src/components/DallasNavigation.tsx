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

export const DallasNavigation = ({ loginUrl, bookingUrl }: { loginUrl?: string; bookingUrl?: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const currentLocation = locations.find(loc => location.pathname.startsWith(loc.path));
  
  // Get the current page path for the area selector
  const currentPath = location.pathname;

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="Red Rock Cleans" className="h-24 w-auto" />
          </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/dallas" className="hover:text-primary transition-colors relative z-10">
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
                          <Link to="/dallas/airbnb-cleaning-services">Airbnb Cleaning Services in Dallas</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/dallas/standard-cleaning-services">Standard Cleaning Services in Dallas</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/dallas/deep-cleaning-services">Deep Cleaning Services in Dallas</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/dallas/move-out-cleaning-services">Move Out Cleaning Services in Dallas</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/dallas/post-construction-cleaning-services">Post Construction Cleaning Services in Dallas</Link>
                        </DropdownMenuItem>
                      </DropdownMenuSubContent>
                    </DropdownMenuSub>
                    <DropdownMenuSub>
                      <DropdownMenuSubTrigger>Commercial Cleaning</DropdownMenuSubTrigger>
                      <DropdownMenuSubContent>
                        <DropdownMenuItem asChild>
                          <Link to="/dallas/church-cleaning">
                            {location.pathname === "/dallas/church-cleaning" ? "Church Cleaning in Dallas" : "Church Cleaning"}
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/dallas/data-center-cleaning">
                            {location.pathname === "/dallas/data-center-cleaning" ? "Data Center Cleaning in Dallas" : "Data Center Cleaning"}
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/dallas/factory-cleaning">
                            {location.pathname === "/dallas/factory-cleaning" ? "Factory Cleaning in Dallas" : "Factory Cleaning"}
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/dallas/government-facility-cleaning">
                            {location.pathname === "/dallas/government-facility-cleaning" ? "Government Facility Cleaning in Dallas" : "Government Facility Cleaning"}
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/dallas/school-cleaning">
                            {location.pathname === "/dallas/school-cleaning" ? "School Cleaning in Dallas" : "School Cleaning"}
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/dallas/medical-office-cleaning">
                            {location.pathname === "/dallas/medical-office-cleaning" ? "Medical Office Cleaning in Dallas" : "Medical Office Cleaning"}
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/dallas/restaurant-cleaning">
                            {location.pathname === "/dallas/restaurant-cleaning" ? "Restaurant Cleaning in Dallas" : "Restaurant Cleaning"}
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/dallas/retail-cleaning">
                            {location.pathname === "/dallas/retail-cleaning" ? "Retail Store Cleaning in Dallas" : "Retail Store Cleaning"}
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/dallas/showroom-cleaning">
                            {location.pathname === "/dallas/showroom-cleaning" ? "Showroom Cleaning in Dallas" : "Showroom Cleaning"}
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/dallas/gym-cleaning">
                            {location.pathname === "/dallas/gym-cleaning" ? "Gym Cleaning in Dallas" : "Gym Cleaning"}
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/dallas/industrial-cleaning">
                            {location.pathname === "/dallas/industrial-cleaning" ? "Industrial Cleaning Services in Dallas" : "Industrial Cleaning Services"}
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/dallas/warehouse-cleaning">
                            {location.pathname === "/dallas/warehouse-cleaning" ? "Warehouse Cleaning in Dallas" : "Warehouse Cleaning"}
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/dallas/salon-spa-cleaning">
                            {location.pathname === "/dallas/salon-spa-cleaning" ? "Salon & Spa Cleaning in Dallas" : "Salon & Spa Cleaning"}
                          </Link>
                        </DropdownMenuItem>
                      </DropdownMenuSubContent>
                    </DropdownMenuSub>
                  </DropdownMenuContent>
                </DropdownMenu>

              <Link to="/book-now-dallas" className="hover:text-primary transition-colors relative z-10">
                Pricing
              </Link>

              <Link to="/contact" className="hover:text-primary transition-colors relative z-10">
                Contact
              </Link>

              {/* Dallas Neighborhood Selector */}
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-muted-foreground" />
              <Select defaultValue="" onValueChange={(value) => {
                if (value) {
                  // Get the current path and route to the same service page with the city hash
                  const currentPath = location.pathname;
                  window.location.href = `${currentPath}#${value}`;
                }
              }}>
                <SelectTrigger className="w-40 border-0 bg-transparent shadow-none">
                  <SelectValue placeholder="Dallas Areas" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="university-park">
                    University Park
                  </SelectItem>
                  <SelectItem value="highland-park">
                    Highland Park
                  </SelectItem>
                  <SelectItem value="uptown-dallas">
                    Uptown Dallas
                  </SelectItem>
                  <SelectItem value="downtown-dallas">
                    Downtown Dallas
                  </SelectItem>
                  <SelectItem value="preston-hollow">
                    Preston Hollow
                  </SelectItem>
                  <SelectItem value="plano">
                    Plano
                  </SelectItem>
                  <SelectItem value="frisco">
                    Frisco
                  </SelectItem>
                  <SelectItem value="prosper">
                    Prosper
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
                <Link to="/dallas" className="block hover:text-primary transition-colors">
                  Home
                </Link>
                
                <div>
                  <div className="font-medium mb-2">Services</div>
                  <div className="ml-4 space-y-2">
                    <div className="font-medium text-sm text-muted-foreground mb-1">Residential Cleaning</div>
                    <Link to="/dallas/airbnb-cleaning-services" className="block ml-4 hover:text-primary transition-colors text-sm">
                      Airbnb Cleaning Services in Dallas
                    </Link>
                    <Link to="/dallas/standard-cleaning-services" className="block ml-4 hover:text-primary transition-colors text-sm">
                      Standard Cleaning Services in Dallas
                    </Link>
                    <Link to="/dallas/deep-cleaning-services" className="block ml-4 hover:text-primary transition-colors text-sm">
                      Deep Cleaning Services in Dallas
                    </Link>
                    <Link to="/dallas/move-out-cleaning-services" className="block ml-4 hover:text-primary transition-colors text-sm">
                      Move Out Cleaning Services in Dallas
                    </Link>
                    <Link to="/dallas/post-construction-cleaning-services" className="block ml-4 hover:text-primary transition-colors text-sm">
                      Post Construction Cleaning Services in Dallas
                    </Link>
                    <div className="font-medium text-sm text-muted-foreground mt-2 mb-1">Commercial Cleaning</div>
                    <Link to="/dallas/church-cleaning" className="block ml-4 hover:text-primary transition-colors text-sm">
                      {location.pathname === "/dallas/church-cleaning" ? "Church Cleaning in Dallas" : "Church Cleaning"}
                    </Link>
                    <Link to="/dallas/data-center-cleaning" className="block ml-4 hover:text-primary transition-colors text-sm">
                      {location.pathname === "/dallas/data-center-cleaning" ? "Data Center Cleaning in Dallas" : "Data Center Cleaning"}
                    </Link>
                    <Link to="/dallas/factory-cleaning" className="block ml-4 hover:text-primary transition-colors text-sm">
                      {location.pathname === "/dallas/factory-cleaning" ? "Factory Cleaning in Dallas" : "Factory Cleaning"}
                    </Link>
                    <Link to="/dallas/government-facility-cleaning" className="block ml-4 hover:text-primary transition-colors text-sm">
                      {location.pathname === "/dallas/government-facility-cleaning" ? "Government Facility Cleaning in Dallas" : "Government Facility Cleaning"}
                    </Link>
                    <Link to="/dallas/school-cleaning" className="block ml-4 hover:text-primary transition-colors text-sm">
                      {location.pathname === "/dallas/school-cleaning" ? "School Cleaning in Dallas" : "School Cleaning"}
                    </Link>
                    <Link to="/dallas/medical-office-cleaning" className="block ml-4 hover:text-primary transition-colors text-sm">
                      {location.pathname === "/dallas/medical-office-cleaning" ? "Medical Office Cleaning in Dallas" : "Medical Office Cleaning"}
                    </Link>
                    <Link to="/dallas/restaurant-cleaning" className="block ml-4 hover:text-primary transition-colors text-sm">
                      {location.pathname === "/dallas/restaurant-cleaning" ? "Restaurant Cleaning in Dallas" : "Restaurant Cleaning"}
                    </Link>
                    <Link to="/dallas/retail-cleaning" className="block ml-4 hover:text-primary transition-colors text-sm">
                      {location.pathname === "/dallas/retail-cleaning" ? "Retail Store Cleaning in Dallas" : "Retail Store Cleaning"}
                    </Link>
                    <Link to="/dallas/showroom-cleaning" className="block ml-4 hover:text-primary transition-colors text-sm">
                      {location.pathname === "/dallas/showroom-cleaning" ? "Showroom Cleaning in Dallas" : "Showroom Cleaning"}
                    </Link>
                    <Link to="/dallas/gym-cleaning" className="block ml-4 hover:text-primary transition-colors text-sm">
                      {location.pathname === "/dallas/gym-cleaning" ? "Gym Cleaning in Dallas" : "Gym Cleaning"}
                    </Link>
                    <Link to="/dallas/industrial-cleaning" className="block ml-4 hover:text-primary transition-colors text-sm">
                      {location.pathname === "/dallas/industrial-cleaning" ? "Industrial Cleaning Services in Dallas" : "Industrial Cleaning Services"}
                    </Link>
                    <Link to="/dallas/warehouse-cleaning" className="block ml-4 hover:text-primary transition-colors text-sm">
                      {location.pathname === "/dallas/warehouse-cleaning" ? "Warehouse Cleaning in Dallas" : "Warehouse Cleaning"}
                    </Link>
                    <Link to="/dallas/salon-spa-cleaning" className="block ml-4 hover:text-primary transition-colors text-sm">
                      {location.pathname === "/dallas/salon-spa-cleaning" ? "Salon & Spa Cleaning in Dallas" : "Salon & Spa Cleaning"}
                    </Link>
                  </div>
                </div>

                <Link to="/book-now-dallas" className="block hover:text-primary transition-colors">
                  Pricing
                </Link>

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

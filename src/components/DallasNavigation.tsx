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
                            Church Cleaning in Dallas
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/dallas/data-center-cleaning">
                            Data Center Cleaning in Dallas
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/dallas/factory-cleaning">
                            Factory Cleaning in Dallas
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/dallas/government-facility-cleaning">
                            Government Facility Cleaning in Dallas
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/dallas/school-cleaning">
                            School Cleaning in Dallas
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/dallas/medical-office-cleaning">
                            Medical Office Cleaning in Dallas
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/dallas/restaurant-cleaning">
                            Restaurant Cleaning in Dallas
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/dallas/retail-cleaning">
                            Retail Store Cleaning in Dallas
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/dallas/showroom-cleaning">
                            Showroom Cleaning in Dallas
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/dallas/gym-cleaning">
                            Gym Cleaning in Dallas
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/dallas/industrial-cleaning">
                            Industrial Cleaning Services in Dallas
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/dallas/warehouse-cleaning">
                            Warehouse Cleaning in Dallas
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/dallas/salon-spa-cleaning">
                            Salon & Spa Cleaning in Dallas
                          </Link>
                        </DropdownMenuItem>
                      </DropdownMenuSubContent>
                    </DropdownMenuSub>
                  </DropdownMenuContent>
                </DropdownMenu>

              {/* Conditionally show calculator links or Pricing based on current page */}
              {location.pathname.includes('/church-cleaning') || 
               location.pathname.includes('/data-center-cleaning') ||
               location.pathname.includes('/factory-cleaning') ||
               location.pathname.includes('/government-facility-cleaning') ||
               location.pathname.includes('/gym-cleaning') ||
               location.pathname.includes('/industrial-cleaning') ||
               location.pathname.includes('/medical-office-cleaning') ||
               location.pathname.includes('/restaurant-cleaning') ||
               location.pathname.includes('/retail-cleaning') ||
               location.pathname.includes('/salon-spa-cleaning') ||
               location.pathname.includes('/school-cleaning') ||
               location.pathname.includes('/showroom-cleaning') ||
               location.pathname.includes('/warehouse-cleaning') ? (
                <>
                  <Link to="/commercial-cleaning-cost-estimator" className="hover:text-primary transition-colors relative z-10">
                    Cleaning Cost Calculator
                  </Link>
                  <Link to="/commercial-cleaning-time-estimator" className="hover:text-primary transition-colors relative z-10">
                    Cleaning Time Calculator
                  </Link>
                </>
              ) : (
                <Link to="/book-now-dallas" className="hover:text-primary transition-colors relative z-10">
                  Pricing
                </Link>
              )}

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
                      Church Cleaning in Dallas
                    </Link>
                    <Link to="/dallas/data-center-cleaning" className="block ml-4 hover:text-primary transition-colors text-sm">
                      Data Center Cleaning in Dallas
                    </Link>
                    <Link to="/dallas/factory-cleaning" className="block ml-4 hover:text-primary transition-colors text-sm">
                      Factory Cleaning in Dallas
                    </Link>
                    <Link to="/dallas/government-facility-cleaning" className="block ml-4 hover:text-primary transition-colors text-sm">
                      Government Facility Cleaning in Dallas
                    </Link>
                    <Link to="/dallas/school-cleaning" className="block ml-4 hover:text-primary transition-colors text-sm">
                      School Cleaning in Dallas
                    </Link>
                    <Link to="/dallas/medical-office-cleaning" className="block ml-4 hover:text-primary transition-colors text-sm">
                      Medical Office Cleaning in Dallas
                    </Link>
                    <Link to="/dallas/restaurant-cleaning" className="block ml-4 hover:text-primary transition-colors text-sm">
                      Restaurant Cleaning in Dallas
                    </Link>
                    <Link to="/dallas/retail-cleaning" className="block ml-4 hover:text-primary transition-colors text-sm">
                      Retail Store Cleaning in Dallas
                    </Link>
                    <Link to="/dallas/showroom-cleaning" className="block ml-4 hover:text-primary transition-colors text-sm">
                      Showroom Cleaning in Dallas
                    </Link>
                    <Link to="/dallas/gym-cleaning" className="block ml-4 hover:text-primary transition-colors text-sm">
                      Gym Cleaning in Dallas
                    </Link>
                    <Link to="/dallas/industrial-cleaning" className="block ml-4 hover:text-primary transition-colors text-sm">
                      Industrial Cleaning Services in Dallas
                    </Link>
                    <Link to="/dallas/warehouse-cleaning" className="block ml-4 hover:text-primary transition-colors text-sm">
                      Warehouse Cleaning in Dallas
                    </Link>
                    <Link to="/dallas/salon-spa-cleaning" className="block ml-4 hover:text-primary transition-colors text-sm">
                      Salon & Spa Cleaning in Dallas
                    </Link>
                  </div>
                </div>

                {/* Conditionally show calculator links or Pricing in mobile menu */}
                {location.pathname.includes('/church-cleaning') || 
                 location.pathname.includes('/data-center-cleaning') ||
                 location.pathname.includes('/factory-cleaning') ||
                 location.pathname.includes('/government-facility-cleaning') ||
                 location.pathname.includes('/gym-cleaning') ||
                 location.pathname.includes('/industrial-cleaning') ||
                 location.pathname.includes('/medical-office-cleaning') ||
                 location.pathname.includes('/restaurant-cleaning') ||
                 location.pathname.includes('/retail-cleaning') ||
                 location.pathname.includes('/salon-spa-cleaning') ||
                 location.pathname.includes('/school-cleaning') ||
                 location.pathname.includes('/showroom-cleaning') ||
                 location.pathname.includes('/warehouse-cleaning') ? (
                  <>
                    <Link to="/commercial-cleaning-cost-estimator" className="block hover:text-primary transition-colors">
                      Cleaning Cost Calculator
                    </Link>
                    <Link to="/commercial-cleaning-time-estimator" className="block hover:text-primary transition-colors">
                      Cleaning Time Calculator
                    </Link>
                  </>
                ) : (
                  <Link to="/book-now-dallas" className="block hover:text-primary transition-colors">
                    Pricing
                  </Link>
                )}

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

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

export const SouthFloridaNavigation = ({ loginUrl, bookingUrl }: { loginUrl?: string; bookingUrl?: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const currentLocation = locations.find(loc => location.pathname.startsWith(loc.path));

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      {/* Top Bar with Local Phone Number */}
      <div className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground py-2.5 relative">
        <div className="container mx-auto px-4 flex justify-center items-center">
          <a href="tel:+19544698881" className="flex items-center space-x-2 hover:scale-105 transition-transform duration-300 group">
            <Phone className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            <span className="font-semibold tracking-wide">(954) 469-8881</span>
          </a>
        </div>
      </div>

        <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="Red Rock Cleans" className="h-24 w-auto" />
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
                    <DropdownMenuSub>
                      <DropdownMenuSubTrigger>Commercial Cleaning</DropdownMenuSubTrigger>
                      <DropdownMenuSubContent>
                        <DropdownMenuItem asChild>
                          <Link to="/south-florida/church-cleaning">
                            Church Cleaning in South Florida
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/south-florida/data-center-cleaning">
                            Data Center Cleaning in South Florida
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/south-florida/factory-cleaning">
                            Factory Cleaning in South Florida
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/south-florida/government-facility-cleaning">
                            Government Facility Cleaning in South Florida
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/south-florida/gym-cleaning">
                            Gym Cleaning in South Florida
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/south-florida/industrial-cleaning">
                            Industrial Cleaning Services in South Florida
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/south-florida/medical-office-cleaning">
                            Medical Office Cleaning in South Florida
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/south-florida/restaurant-cleaning">
                            Restaurant Cleaning in South Florida
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/south-florida/retail-cleaning">
                            Retail Store Cleaning in South Florida
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/south-florida/school-cleaning">
                            School Cleaning in South Florida
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/south-florida/showroom-cleaning">
                            Showroom Cleaning in South Florida
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/south-florida/warehouse-cleaning">
                            Warehouse Cleaning in South Florida
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/south-florida/salon-spa-cleaning">
                            Salon & Spa Cleaning in South Florida
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
                <Link to="/book-now-south-florida" className="hover:text-primary transition-colors relative z-10">
                  Pricing
                </Link>
              )}

              <Link to="/contact" className="hover:text-primary transition-colors relative z-10">
                Contact
              </Link>

              {/* South Florida Neighborhood Selector */}
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
                  <SelectValue placeholder="South Florida Areas" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aventura">
                    Aventura
                  </SelectItem>
                  <SelectItem value="cooper-city">
                    Cooper City
                  </SelectItem>
                  <SelectItem value="dania-beach">
                    Dania Beach
                  </SelectItem>
                  <SelectItem value="davie">
                    Davie
                  </SelectItem>
                  <SelectItem value="fort-lauderdale">
                    Fort Lauderdale
                  </SelectItem>
                  <SelectItem value="hallandale-beach">
                    Hallandale Beach
                  </SelectItem>
                  <SelectItem value="hollywood">
                    Hollywood
                  </SelectItem>
                  <SelectItem value="las-olas">
                    Las Olas
                  </SelectItem>
                  <SelectItem value="lauderdale-lakes">
                    Lauderdale Lakes
                  </SelectItem>
                  <SelectItem value="lauderhill">
                    Lauderhill
                  </SelectItem>
                  <SelectItem value="margate">
                    Margate
                  </SelectItem>
                  <SelectItem value="miramar">
                    Miramar
                  </SelectItem>
                  <SelectItem value="north-lauderdale">
                    North Lauderdale
                  </SelectItem>
                  <SelectItem value="pembroke-pines">
                    Pembroke Pines
                  </SelectItem>
                  <SelectItem value="plantation">
                    Plantation
                  </SelectItem>
                  <SelectItem value="southwest-ranches">
                    Southwest Ranches
                  </SelectItem>
                  <SelectItem value="sunny-isles-beach">
                    Sunny Isles Beach
                  </SelectItem>
                  <SelectItem value="sunrise">
                    Sunrise
                  </SelectItem>
                  <SelectItem value="tamarac">
                    Tamarac
                  </SelectItem>
                  <SelectItem value="weston">
                    Weston
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
                <Link to="/south-florida" className="block hover:text-primary transition-colors">
                  Home
                </Link>
                
                <div>
                  <div className="font-medium mb-2">Services</div>
                  <div className="ml-4 space-y-2">
                    <div className="font-medium text-sm text-muted-foreground mb-1">Residential Cleaning</div>
                    <Link to="/south-florida/airbnb-cleaning-services" className="block ml-4 hover:text-primary transition-colors text-sm">
                      Airbnb Cleaning Services in South Florida
                    </Link>
                    <Link to="/south-florida/standard-cleaning-services" className="block ml-4 hover:text-primary transition-colors text-sm">
                      Standard Cleaning Services in South Florida
                    </Link>
                    <Link to="/south-florida/deep-cleaning-services" className="block ml-4 hover:text-primary transition-colors text-sm">
                      Deep Cleaning Services in South Florida
                    </Link>
                    <Link to="/south-florida/move-out-cleaning-services" className="block ml-4 hover:text-primary transition-colors text-sm">
                      Move Out Cleaning Services in South Florida
                    </Link>
                    <Link to="/south-florida/post-construction-cleaning-services" className="block ml-4 hover:text-primary transition-colors text-sm">
                      Post Construction Cleaning Services in South Florida
                    </Link>
                    <div className="font-medium text-sm text-muted-foreground mb-1 mt-2">Commercial Cleaning</div>
                    <Link to="/south-florida/church-cleaning" className="block ml-4 hover:text-primary transition-colors text-sm">
                      Church Cleaning in South Florida
                    </Link>
                    <Link to="/south-florida/data-center-cleaning" className="block ml-4 hover:text-primary transition-colors text-sm">
                      Data Center Cleaning in South Florida
                    </Link>
                    <Link to="/south-florida/factory-cleaning" className="block ml-4 hover:text-primary transition-colors text-sm">
                      Factory Cleaning in South Florida
                    </Link>
                    <Link to="/south-florida/government-facility-cleaning" className="block ml-4 hover:text-primary transition-colors text-sm">
                      Government Facility Cleaning in South Florida
                    </Link>
                    <Link to="/south-florida/gym-cleaning" className="block ml-4 hover:text-primary transition-colors text-sm">
                      Gym Cleaning in South Florida
                    </Link>
                    <Link to="/south-florida/industrial-cleaning" className="block ml-4 hover:text-primary transition-colors text-sm">
                      Industrial Cleaning Services in South Florida
                    </Link>
                    <Link to="/south-florida/medical-office-cleaning" className="block ml-4 hover:text-primary transition-colors text-sm">
                      Medical Office Cleaning in South Florida
                    </Link>
                    <Link to="/south-florida/restaurant-cleaning" className="block ml-4 hover:text-primary transition-colors text-sm">
                      Restaurant Cleaning in South Florida
                    </Link>
                    <Link to="/south-florida/retail-cleaning" className="block ml-4 hover:text-primary transition-colors text-sm">
                      Retail Store Cleaning in South Florida
                    </Link>
                    <Link to="/south-florida/school-cleaning" className="block ml-4 hover:text-primary transition-colors text-sm">
                      School Cleaning in South Florida
                    </Link>
                    <Link to="/south-florida/showroom-cleaning" className="block ml-4 hover:text-primary transition-colors text-sm">
                      Showroom Cleaning in South Florida
                    </Link>
                    <Link to="/south-florida/warehouse-cleaning" className="block ml-4 hover:text-primary transition-colors text-sm">
                      Warehouse Cleaning in South Florida
                    </Link>
                    <Link to="/south-florida/salon-spa-cleaning" className="block ml-4 hover:text-primary transition-colors text-sm">
                      Salon & Spa Cleaning in South Florida
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
                  <Link to="/book-now-south-florida" className="block hover:text-primary transition-colors">
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

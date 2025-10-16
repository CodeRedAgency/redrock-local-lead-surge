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

export const ColumbusNavigation = ({ loginUrl, bookingUrl }: { loginUrl?: string; bookingUrl?: string }) => {
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
              <Link to="/columbus-ohio" className="hover:text-primary transition-colors relative z-10">
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
                          <Link to="/columbus-ohio/standard-cleaning-services">Standard Cleaning Services in Columbus Ohio</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/columbus-ohio/deep-cleaning-services">Deep Cleaning Services in Columbus Ohio</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/columbus-ohio/move-out-cleaning-services">Move Out Cleaning Services in Columbus Ohio</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/columbus-ohio/post-construction-cleaning-services">Post Construction Cleaning Services in Columbus Ohio</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/columbus-ohio/airbnb-cleaning-services">Airbnb Cleaning Services in Columbus Ohio</Link>
                        </DropdownMenuItem>
                      </DropdownMenuSubContent>
                    </DropdownMenuSub>
                    <DropdownMenuSub>
                      <DropdownMenuSubTrigger>Commercial Cleaning</DropdownMenuSubTrigger>
                      <DropdownMenuSubContent>
                        <DropdownMenuItem asChild>
                          <Link to="/columbus-ohio/church-cleaning">
                            {location.pathname === '/columbus-ohio/church-cleaning' 
                              ? 'Church Cleaning in Columbus' 
                              : 'Church Cleaning'}
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/columbus-ohio/data-center-cleaning">
                            {location.pathname === '/columbus-ohio/data-center-cleaning' 
                              ? 'Data Center Cleaning in Columbus' 
                              : 'Data Center Cleaning'}
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/columbus-ohio/factory-cleaning">
                            {location.pathname === '/columbus-ohio/factory-cleaning' 
                              ? 'Factory Cleaning in Columbus' 
                              : 'Factory Cleaning'}
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/columbus-ohio/government-facility-cleaning">
                            {location.pathname === '/columbus-ohio/government-facility-cleaning' 
                              ? 'Government Facility Cleaning in Columbus' 
                              : 'Government Facility Cleaning'}
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/columbus-ohio/industrial-cleaning">
                            {location.pathname === '/columbus-ohio/industrial-cleaning' 
                              ? 'Industrial Cleaning Services in Columbus' 
                              : 'Industrial Cleaning Services'}
                          </Link>
                        </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                          <Link to="/columbus-ohio/school-cleaning">
                            {location.pathname === '/columbus-ohio/school-cleaning' 
                              ? 'School Cleaning in Columbus' 
                              : 'School Cleaning'}
                          </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                          <Link to="/columbus-ohio/medical-office-cleaning">
                            {location.pathname === '/columbus-ohio/medical-office-cleaning' 
                              ? 'Medical Office Cleaning in Columbus' 
                              : 'Medical Office Cleaning'}
                          </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                          <Link to="/columbus-ohio/gym-cleaning">
                            {location.pathname === '/columbus-ohio/gym-cleaning' 
                              ? 'Gym Cleaning in Columbus' 
                              : 'Gym Cleaning'}
                          </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                          <Link to="/columbus-ohio/restaurant-cleaning">
                            {location.pathname === '/columbus-ohio/restaurant-cleaning' 
                              ? 'Restaurant Cleaning in Columbus' 
                              : 'Restaurant Cleaning'}
                          </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                          <Link to="/columbus-ohio/retail-cleaning">
                            {location.pathname === '/columbus-ohio/retail-cleaning' 
                              ? 'Retail Store Cleaning in Columbus' 
                              : 'Retail Store Cleaning'}
                          </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                          <Link to="/columbus-ohio/showroom-cleaning">
                            {location.pathname === '/columbus-ohio/showroom-cleaning' 
                              ? 'Showroom Cleaning in Columbus' 
                              : 'Showroom Cleaning'}
                          </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                          <Link to="/columbus-ohio/warehouse-cleaning">
                            {location.pathname === '/columbus-ohio/warehouse-cleaning' 
                              ? 'Warehouse Cleaning in Columbus' 
                              : 'Warehouse Cleaning'}
                          </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                          <Link to="/columbus-ohio/salon-spa-cleaning">
                            {location.pathname === '/columbus-ohio/salon-spa-cleaning' 
                              ? 'Salon & Spa Cleaning in Columbus' 
                              : 'Salon & Spa Cleaning'}
                          </Link>
                    </DropdownMenuItem>
                      </DropdownMenuSubContent>
                    </DropdownMenuSub>
                  </DropdownMenuContent>
                </DropdownMenu>

              <Link to="/book-now-columbus-ohio" className="hover:text-primary transition-colors relative z-10">
                Pricing
              </Link>

              <Link to="/contact" className="hover:text-primary transition-colors relative z-10">
                Contact
              </Link>

              {/* Columbus Neighborhood Selector */}
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
                  <SelectValue placeholder="Columbus Areas" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="dublin">
                    Dublin
                  </SelectItem>
                  <SelectItem value="upper-arlington">
                    Upper Arlington
                  </SelectItem>
                  <SelectItem value="powell">
                    Powell
                  </SelectItem>
                  <SelectItem value="lewis-center">
                    Lewis Center
                  </SelectItem>
                  <SelectItem value="worthington">
                    Worthington
                  </SelectItem>
                  <SelectItem value="new-albany">
                    New Albany
                  </SelectItem>
                  <SelectItem value="bexley">
                    Bexley
                  </SelectItem>
                  <SelectItem value="german-village">
                    German Village
                  </SelectItem>
                  <SelectItem value="short-north">
                    Short North
                  </SelectItem>
                  <SelectItem value="victorian-village">
                    Victorian Village
                  </SelectItem>
                  <SelectItem value="hilliard">
                    Hilliard
                  </SelectItem>
                  <SelectItem value="westerville">
                    Westerville
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
                <Link to="/columbus-ohio" className="block hover:text-primary transition-colors">
                  Home
                </Link>
                
                <div>
                  <div className="font-medium mb-2">Services</div>
                  <div className="ml-4 space-y-2">
                    <div className="font-medium text-sm text-muted-foreground mb-1">Residential Cleaning</div>
                    <Link to="/columbus-ohio/standard-cleaning-services" className="block ml-4 hover:text-primary transition-colors text-sm">
                      Standard Cleaning Services in Columbus Ohio
                    </Link>
                    <Link to="/columbus-ohio/deep-cleaning-services" className="block ml-4 hover:text-primary transition-colors text-sm">
                      Deep Cleaning Services in Columbus Ohio
                    </Link>
                    <Link to="/columbus-ohio/move-out-cleaning-services" className="block ml-4 hover:text-primary transition-colors text-sm">
                      Move Out Cleaning Services in Columbus Ohio
                    </Link>
                    <Link to="/columbus-ohio/post-construction-cleaning-services" className="block ml-4 hover:text-primary transition-colors text-sm">
                      Post Construction Cleaning Services in Columbus Ohio
                    </Link>
                    <Link to="/columbus-ohio/airbnb-cleaning-services" className="block ml-4 hover:text-primary transition-colors text-sm">
                      Airbnb Cleaning Services in Columbus Ohio
                    </Link>
                    <div className="font-medium text-sm text-muted-foreground mb-1">Commercial Cleaning</div>
                    <Link to="/columbus-ohio/church-cleaning" className="block ml-4 hover:text-primary transition-colors text-sm">
                      {location.pathname === '/columbus-ohio/church-cleaning' 
                        ? 'Church Cleaning in Columbus' 
                        : 'Church Cleaning'}
                    </Link>
                    <Link to="/columbus-ohio/data-center-cleaning" className="block ml-4 hover:text-primary transition-colors text-sm">
                      {location.pathname === '/columbus-ohio/data-center-cleaning' 
                        ? 'Data Center Cleaning in Columbus' 
                        : 'Data Center Cleaning'}
                    </Link>
                    <Link to="/columbus-ohio/factory-cleaning" className="block ml-4 hover:text-primary transition-colors text-sm">
                      {location.pathname === '/columbus-ohio/factory-cleaning' 
                        ? 'Factory Cleaning in Columbus' 
                        : 'Factory Cleaning'}
                    </Link>
                    <Link to="/columbus-ohio/government-facility-cleaning" className="block ml-4 hover:text-primary transition-colors text-sm">
                      {location.pathname === '/columbus-ohio/government-facility-cleaning' 
                        ? 'Government Facility Cleaning in Columbus' 
                        : 'Government Facility Cleaning'}
                    </Link>
                    <Link to="/columbus-ohio/industrial-cleaning" className="block ml-4 hover:text-primary transition-colors text-sm">
                      {location.pathname === '/columbus-ohio/industrial-cleaning' 
                        ? 'Industrial Cleaning Services in Columbus' 
                        : 'Industrial Cleaning Services'}
                    </Link>
                    <Link to="/columbus-ohio/school-cleaning" className="block ml-4 hover:text-primary transition-colors text-sm">
                      {location.pathname === '/columbus-ohio/school-cleaning' 
                        ? 'School Cleaning in Columbus' 
                        : 'School Cleaning'}
                    </Link>
                    <Link to="/columbus-ohio/medical-office-cleaning" className="block ml-4 hover:text-primary transition-colors text-sm">
                      {location.pathname === '/columbus-ohio/medical-office-cleaning' 
                        ? 'Medical Office Cleaning in Columbus' 
                        : 'Medical Office Cleaning'}
                    </Link>
                    <Link to="/columbus-ohio/gym-cleaning" className="block ml-4 hover:text-primary transition-colors text-sm">
                      {location.pathname === '/columbus-ohio/gym-cleaning' 
                        ? 'Gym Cleaning in Columbus' 
                        : 'Gym Cleaning'}
                    </Link>
                    <Link to="/columbus-ohio/restaurant-cleaning" className="block ml-4 hover:text-primary transition-colors text-sm">
                      {location.pathname === '/columbus-ohio/restaurant-cleaning' 
                        ? 'Restaurant Cleaning in Columbus' 
                        : 'Restaurant Cleaning'}
                    </Link>
                    <Link to="/columbus-ohio/retail-cleaning" className="block ml-4 hover:text-primary transition-colors text-sm">
                      {location.pathname === '/columbus-ohio/retail-cleaning' 
                        ? 'Retail Store Cleaning in Columbus' 
                        : 'Retail Store Cleaning'}
                    </Link>
                    <Link to="/columbus-ohio/showroom-cleaning" className="block ml-4 hover:text-primary transition-colors text-sm">
                      {location.pathname === '/columbus-ohio/showroom-cleaning' 
                        ? 'Showroom Cleaning in Columbus' 
                        : 'Showroom Cleaning'}
                    </Link>
                    <Link to="/columbus-ohio/warehouse-cleaning" className="block ml-4 hover:text-primary transition-colors text-sm">
                      {location.pathname === '/columbus-ohio/warehouse-cleaning' 
                        ? 'Warehouse Cleaning in Columbus' 
                        : 'Warehouse Cleaning'}
                    </Link>
                    <Link to="/columbus-ohio/salon-spa-cleaning" className="block ml-4 hover:text-primary transition-colors text-sm">
                      {location.pathname === '/columbus-ohio/salon-spa-cleaning' 
                        ? 'Salon & Spa Cleaning in Columbus' 
                        : 'Salon & Spa Cleaning'}
                    </Link>
                  </div>
                </div>

                <Link to="/book-now-columbus-ohio" className="block hover:text-primary transition-colors">
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

import { useState } from "react";
import { useTranslation } from 'react-i18next';
import { Link, useLocation, useNavigate } from "react-router-dom";
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

export const LasVegasNavigation = ({ loginUrl, bookingUrl, hideLocationSelector }: { loginUrl?: string; bookingUrl?: string; hideLocationSelector?: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const switchLang = (lang: 'en' | 'es') => {
    const path = window.location.pathname || '/';
    const toEs = lang === 'es';
    const nextPath = toEs ? (path.startsWith('/es') ? path : `/es${path}`) : (path.startsWith('/es') ? path.replace(/^\/es(\/|$)/, '/') : path);
    i18n.changeLanguage(lang);
    navigate(nextPath);
  };

  const currentLocation = locations.find(loc => location.pathname.startsWith(loc.path));

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      {/* Top Bar with Local Phone Number */}
      <div className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground py-2.5 relative">
        <div className="container mx-auto px-4 flex justify-center items-center">
          <a href="tel:+17025080098" className="flex items-center space-x-2 hover:scale-105 transition-transform duration-300 group">
            <Phone className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            <span className="font-semibold tracking-wide">(702) 508-0098</span>
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
              <Link to="/las-vegas" className="hover:text-primary transition-colors relative z-10">
                {t('nav.home')}
              </Link>

              <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center space-x-1 hover:text-primary transition-all duration-300 group font-medium relative z-10">
                    {t('nav.services')} <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuSub>
                      <DropdownMenuSubTrigger>Residential Cleaning</DropdownMenuSubTrigger>
                      <DropdownMenuSubContent>
                        <DropdownMenuItem asChild>
                          <Link to="/las-vegas/airbnb-cleaning-services">Airbnb Cleaning Services in Las Vegas</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/las-vegas/standard-cleaning-services">Standard Cleaning Services in Las Vegas</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/las-vegas/deep-cleaning-services">Deep Cleaning Services in Las Vegas</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/las-vegas/move-out-cleaning-services">Move Out Cleaning Services in Las Vegas</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/las-vegas/post-construction-cleaning-services">Post Construction Cleaning Services in Las Vegas</Link>
                        </DropdownMenuItem>
                      </DropdownMenuSubContent>
                    </DropdownMenuSub>
                    <DropdownMenuSub>
                      <DropdownMenuSubTrigger>Commercial Cleaning</DropdownMenuSubTrigger>
                      <DropdownMenuSubContent>
                        <DropdownMenuItem asChild>
                          <Link to="/las-vegas/church-cleaning">
                            Church Cleaning in Las Vegas
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/las-vegas/school-cleaning">
                            School Cleaning in Las Vegas
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/las-vegas/medical-office-cleaning">
                            Medical Office Cleaning in Las Vegas
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/las-vegas/data-center-cleaning">
                            Data Center Cleaning in Las Vegas
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/las-vegas/factory-cleaning">
                            Factory Cleaning in Las Vegas
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/las-vegas/government-facility-cleaning">
                            Government Facility Cleaning in Las Vegas
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/las-vegas/gym-cleaning">
                            Gym Cleaning in Las Vegas
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/las-vegas/industrial-cleaning">
                            Industrial Cleaning Services in Las Vegas
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/las-vegas/restaurant-cleaning">
                            Restaurant Cleaning in Las Vegas
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/las-vegas/retail-cleaning">
                            Retail Store Cleaning in Las Vegas
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/las-vegas/showroom-cleaning">
                            Showroom Cleaning in Las Vegas
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/las-vegas/warehouse-cleaning">
                            Warehouse Cleaning in Las Vegas
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/las-vegas/salon-spa-cleaning">
                            Salon & Spa Cleaning in Las Vegas
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
                <Link to="/book-now-las-vegas" className="hover:text-primary transition-colors relative z-10">
                  {t('nav.pricing')}
                </Link>
              )}

              <Link to="/contact" className="hover:text-primary transition-colors relative z-10">
                {t('nav.contact')}
              </Link>
              <div className="flex items-center gap-2">
                <button onClick={() => switchLang('en')} className={`text-sm px-2 py-1 rounded ${i18n.language.startsWith('en') ? 'bg-primary text-primary-foreground' : 'hover:bg-accent'}`} aria-label="Switch to English">EN</button>
                <button onClick={() => switchLang('es')} className={`text-sm px-2 py-1 rounded ${i18n.language.startsWith('es') ? 'bg-primary text-primary-foreground' : 'hover:bg-accent'}`} aria-label="Cambiar a español">ES</button>
              </div>

              {/* Las Vegas Neighborhood Selector */}
              {!hideLocationSelector && (
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                <Select defaultValue="" onValueChange={(value) => {
                  if (value) {
                    // Set the hash and trigger hashchange event for the accordion to respond
                    window.location.hash = value;
                  }
                }}>
                  <SelectTrigger className="w-40 border-0 bg-transparent shadow-none">
                    <SelectValue placeholder="Las Vegas Areas" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="anthem">
                      Anthem
                    </SelectItem>
                    <SelectItem value="enterprise">
                      Enterprise
                    </SelectItem>
                    <SelectItem value="green-valley-north">
                      Green Valley North
                    </SelectItem>
                    <SelectItem value="henderson">
                      Henderson
                    </SelectItem>
                    <SelectItem value="lake-las-vegas">
                      Lake Las Vegas
                    </SelectItem>
                    <SelectItem value="las-vegas">
                      Las Vegas
                    </SelectItem>
                    <SelectItem value="macdonald-ranch">
                      MacDonald Ranch
                    </SelectItem>
                    <SelectItem value="mountains-edge">
                      Mountain's Edge
                    </SelectItem>
                    <SelectItem value="north-las-vegas">
                      North Las Vegas
                    </SelectItem>
                    <SelectItem value="paradise">
                      Paradise
                    </SelectItem>
                    <SelectItem value="seven-hills">
                      Seven Hills
                    </SelectItem>
                    <SelectItem value="silverado-ranch">
                      Silverado Ranch
                    </SelectItem>
                    <SelectItem value="spring-valley">
                      Spring Valley
                    </SelectItem>
                    <SelectItem value="summerlin-south">
                      Summerlin South
                    </SelectItem>
                    <SelectItem value="sunrise-manor">
                      Sunrise Manor
                    </SelectItem>
                    <SelectItem value="whitney">
                      Whitney
                    </SelectItem>
                    <SelectItem value="winchester">
                      Winchester
                    </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}
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
                <Link to="/las-vegas" className="block hover:text-primary transition-colors">
                  Home
                </Link>
                
                <div>
                  <div className="font-medium mb-2">Services</div>
                  <div className="ml-4 space-y-2">
                    <div className="font-medium text-sm text-muted-foreground mb-1">Residential Cleaning</div>
                    <Link to="/las-vegas/airbnb-cleaning-services" className="block ml-4 hover:text-primary transition-colors text-sm">
                      Airbnb Cleaning Services in Las Vegas
                    </Link>
                    <Link to="/las-vegas/standard-cleaning-services" className="block ml-4 hover:text-primary transition-colors text-sm">
                      Standard Cleaning Services in Las Vegas
                    </Link>
                    <Link to="/las-vegas/deep-cleaning-services" className="block ml-4 hover:text-primary transition-colors text-sm">
                      Deep Cleaning Services in Las Vegas
                    </Link>
                    <Link to="/las-vegas/move-out-cleaning-services" className="block ml-4 hover:text-primary transition-colors text-sm">
                      Move Out Cleaning Services in Las Vegas
                    </Link>
                    <Link to="/las-vegas/post-construction-cleaning-services" className="block ml-4 hover:text-primary transition-colors text-sm">
                      Post Construction Cleaning Services in Las Vegas
                    </Link>
                    <div className="font-medium text-sm text-muted-foreground mb-1 ml-4">Commercial Cleaning</div>
                    <Link to="/las-vegas/church-cleaning" className="block ml-6 hover:text-primary transition-colors text-sm">
                      Church Cleaning in Las Vegas
                    </Link>
                    <Link to="/las-vegas/school-cleaning" className="block ml-6 hover:text-primary transition-colors text-sm">
                      School Cleaning in Las Vegas
                    </Link>
                    <Link to="/las-vegas/medical-office-cleaning" className="block ml-6 hover:text-primary transition-colors text-sm">
                      Medical Office Cleaning in Las Vegas
                    </Link>
                    <Link to="/las-vegas/data-center-cleaning" className="block ml-6 hover:text-primary transition-colors text-sm">
                      Data Center Cleaning in Las Vegas
                    </Link>
                    <Link to="/las-vegas/factory-cleaning" className="block ml-6 hover:text-primary transition-colors text-sm">
                      Factory Cleaning in Las Vegas
                    </Link>
                    <Link to="/las-vegas/government-facility-cleaning" className="block ml-6 hover:text-primary transition-colors text-sm">
                      Government Facility Cleaning in Las Vegas
                    </Link>
                    <Link to="/las-vegas/gym-cleaning" className="block ml-6 hover:text-primary transition-colors text-sm">
                      Gym Cleaning in Las Vegas
                    </Link>
                    <Link to="/las-vegas/industrial-cleaning" className="block ml-6 hover:text-primary transition-colors text-sm">
                      Industrial Cleaning Services in Las Vegas
                    </Link>
                    <Link to="/las-vegas/restaurant-cleaning" className="block ml-6 hover:text-primary transition-colors text-sm">
                      Restaurant Cleaning in Las Vegas
                    </Link>
                    <Link to="/las-vegas/retail-cleaning" className="block ml-6 hover:text-primary transition-colors text-sm">
                      Retail Store Cleaning in Las Vegas
                    </Link>
                    <Link to="/las-vegas/showroom-cleaning" className="block ml-6 hover:text-primary transition-colors text-sm">
                      Showroom Cleaning in Las Vegas
                    </Link>
                    <Link to="/las-vegas/warehouse-cleaning" className="block ml-6 hover:text-primary transition-colors text-sm">
                      Warehouse Cleaning in Las Vegas
                    </Link>
                    <Link to="/las-vegas/salon-spa-cleaning" className="block ml-6 hover:text-primary transition-colors text-sm">
                      Salon & Spa Cleaning in Las Vegas
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
                  <Link to="/book-now-las-vegas" className="block hover:text-primary transition-colors">
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

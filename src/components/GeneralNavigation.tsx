import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Menu, X, MapPin, ChevronDown, Phone } from "lucide-react";
import logo from "@/assets/logo.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useIsMobile } from "@/hooks/use-mobile";

const locations = [
  { name: "South Florida", path: "/south-florida" },
  { name: "Las Vegas", path: "/las-vegas" },
  { name: "Oahu", path: "/oahu" },
  { name: "Maui", path: "/maui" },
  { name: "Columbus Ohio", path: "/columbus-ohio" },
  { name: "Dallas", path: "/dallas" },
];

export const GeneralNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const isMobile = useIsMobile();

  // Helper to get language prefix based on current i18n language
  const getLanguagePrefix = () => {
    return i18n.language.startsWith('es') ? '/es' : '';
  };

  // Get current location name for display
  const getCurrentLocationName = () => {
    // Remove language prefix when checking location
    const pathWithoutLang = location.pathname.replace(/^\/es/, '');
    const currentLocation = locations.find(loc => pathWithoutLang.startsWith(loc.path));
    return currentLocation ? currentLocation.name : "Select Location";
  };

  const handleLocationChange = (path: string) => {
    // Add current language prefix to location path
    const langPrefix = getLanguagePrefix();
    const prefixedPath = langPrefix + path;
    navigate(prefixedPath);
  };

  const switchLanguage = (lang: string) => {
    // Get current path without language prefix
    const pathWithoutLang = window.location.pathname.replace(/^\/es/, '') || '/';
    
    // Construct new path with correct language prefix
    const newPath = lang === 'es' ? `/es${pathWithoutLang}` : pathWithoutLang;
    
    // Change i18n language and navigate
    i18n.changeLanguage(lang).then(() => {
      // Use navigate instead of window.location to avoid reload
      navigate(newPath);
    });
  };

  return (
    <nav className="bg-background/95 backdrop-blur-md border-b border-border sticky top-0 z-50 shadow-[var(--shadow-soft)] relative overflow-hidden">
      
      {/* Top Bar with Toll-Free Number */}
      <div className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground py-2.5 relative">
        <div className="container mx-auto px-4 flex justify-center items-center">
          <a href="tel:+18888051733" className="flex items-center space-x-2 hover:scale-105 transition-transform duration-300 group">
            <Phone className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            <span className="font-semibold tracking-wide">(888) 805-1733</span>
          </a>
        </div>
      </div>

      {/* Language Switcher for Desktop */}
      <div className="hidden md:flex items-center space-x-2 absolute top-2 right-4">
        <Select onValueChange={switchLanguage} className="w-32">
          <SelectTrigger>
            <SelectValue placeholder="Select Language" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="en">English</SelectItem>
            <SelectItem value="es">Spanish</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link to={getLanguagePrefix() + "/"} className="flex items-center space-x-2">
            <img src={logo} alt="Red Rock Cleans" className="h-24 w-auto" />
          </Link>

          {/* Mobile Location Selector & Language Switcher */}
          <div className="md:hidden flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-primary" />
            <Select value={location.pathname} onValueChange={handleLocationChange}>
              <SelectTrigger className="w-32 text-xs border-primary/20">
                <SelectValue>{getCurrentLocationName()}</SelectValue>
              </SelectTrigger>
              <SelectContent>
                {locations.map((locationItem) => (
                  <SelectItem key={locationItem.path} value={locationItem.path}>
                    {locationItem.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {/* Language Switcher for Mobile */}
            <Select onValueChange={switchLanguage} className="w-32">
              <SelectTrigger>
                <SelectValue placeholder="Select Language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="es">Spanish</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to={getLanguagePrefix() + "/"} className="hover:text-primary transition-colors relative z-10">
              {t("nav.home")}
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 hover:text-primary transition-colors relative z-10">
                {t("nav.services")} <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>Residential Cleaning</DropdownMenuSubTrigger>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem asChild>
                      <Link to={getLanguagePrefix() + "/standard-cleaning-services"}>Standard Cleaning Services</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to={getLanguagePrefix() + "/deep-cleaning-services"}>Deep Cleaning Services</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to={getLanguagePrefix() + "/move-out-cleaning-services"}>Move Out Cleaning Services</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to={getLanguagePrefix() + "/post-construction-cleaning-services"}>Post Construction Cleaning Services</Link>
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>Commercial Cleaning</DropdownMenuSubTrigger>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem asChild>
                  <Link to={getLanguagePrefix() + "/commercial-cleaning"}>Commercial Cleaning</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/commercial-cleaning-time-estimator">Commercial Cleaning Time Estimator</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/commercial-cleaning-cost-estimator">Commercial Cleaning Cost Estimator</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/church-cleaning">Church Cleaning</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                  <Link to={getLanguagePrefix() + "/data-center-cleaning"}>Data Center Cleaning</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                  <Link to={getLanguagePrefix() + "/factory-cleaning"}>Factory Cleaning</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                  <Link to={getLanguagePrefix() + "/government-facility-cleaning"}>Government Facility Cleaning</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                  <Link to={getLanguagePrefix() + "/gym-cleaning"}>Gym Cleaning</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                  <Link to={getLanguagePrefix() + "/medical-office-cleaning"}>Medical Office Cleaning</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                  <Link to={getLanguagePrefix() + "/retail-cleaning"}>Retail Store Cleaning</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                  <Link to={getLanguagePrefix() + "/restaurant-cleaning"}>Restaurant Cleaning</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                  <Link to={getLanguagePrefix() + "/industrial-cleaning"}>Industrial Cleaning</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                  <Link to={getLanguagePrefix() + "/school-cleaning"}>School Cleaning</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                  <Link to={getLanguagePrefix() + "/showroom-cleaning"}>Showroom Cleaning</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                  <Link to={getLanguagePrefix() + "/warehouse-cleaning"}>Warehouse Cleaning</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                  <Link to={getLanguagePrefix() + "/salon-spa-cleaning"}>Salon & Spa Cleaning</Link>
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 hover:text-primary transition-colors relative z-10">
                {t("nav.pricing")} <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link to="/commercial-cleaning-estimator">Commercial Cleaning Cost Estimator</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/book-now-las-vegas">Pricing for Las Vegas</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/book-now-oahu">Pricing for Oahu</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/book-now-maui">Pricing for Maui</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/book-now-south-florida">Pricing for South Florida</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/book-now-dallas">Pricing for Dallas</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/book-now-columbus-ohio">Pricing for Columbus, Ohio</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 hover:text-primary transition-colors relative z-10">
                {t("nav.about")} <ChevronDown className="w-4 h-4" />
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

              <Link to={getLanguagePrefix() + "/contact"} className="hover:text-primary transition-colors relative z-10">
              {t("nav.contact")}
            </Link>

            {/* Location Selector */}
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-muted-foreground" />
              <Select value={location.pathname} onValueChange={handleLocationChange}>
                <SelectTrigger className="w-40 border-0 bg-transparent shadow-none">
                  <SelectValue>{getCurrentLocationName()}</SelectValue>
                </SelectTrigger>
                <SelectContent>
                  {locations.map((locationItem) => (
                    <SelectItem key={locationItem.path} value={locationItem.path}>
                      {locationItem.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" asChild>
              <a href="https://customer-portal.maidily.com/red-rock-cleans-south-florida/sign-in" target="_blank" rel="noopener noreferrer">
                {t("nav.login")}
              </a>
            </Button>
            <Button size="sm" asChild>
              <a href="/book-now-south-florida">
                <Phone className="w-4 h-4 mr-2" />
                {t("nav.bookNow")}
              </a>
            </Button>
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
                {t("nav.home")}
              </Link>
              
              <div>
                <div className="font-medium mb-2">{t("nav.services")}</div>
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
                  <div className="font-medium text-sm text-muted-foreground mb-1 mt-3">Commercial Cleaning</div>
                  <Link to="/commercial-cleaning" className="block ml-4 hover:text-primary transition-colors text-sm">
                    Commercial Cleaning
                  </Link>
                  <Link to="/church-cleaning" className="block ml-4 hover:text-primary transition-colors text-sm">
                    Church Cleaning
                  </Link>
                  <Link to="/data-center-cleaning" className="block ml-4 hover:text-primary transition-colors text-sm">
                    Data Center Cleaning
                  </Link>
                  <Link to="/factory-cleaning" className="block ml-4 hover:text-primary transition-colors text-sm">
                    Factory Cleaning
                  </Link>
                  <Link to="/government-facility-cleaning" className="block ml-4 hover:text-primary transition-colors text-sm">
                    Government Facility Cleaning
                  </Link>
                  <Link to="/gym-cleaning" className="block ml-4 hover:text-primary transition-colors text-sm">
                    Gym Cleaning
                  </Link>
                  <Link to="/medical-office-cleaning" className="block ml-4 hover:text-primary transition-colors text-sm">
                    Medical Office Cleaning
                  </Link>
                  <Link to="/retail-cleaning" className="block ml-4 hover:text-primary transition-colors text-sm">
                    Retail Store Cleaning
                  </Link>
                  <Link to="/restaurant-cleaning" className="block ml-4 hover:text-primary transition-colors text-sm">
                    Restaurant Cleaning
                  </Link>
                  <Link to="/industrial-cleaning" className="block ml-4 hover:text-primary transition-colors text-sm">
                    Industrial Cleaning
                  </Link>
                  <Link to="/school-cleaning" className="block ml-4 hover:text-primary transition-colors text-sm">
                    School Cleaning
                  </Link>
                  <Link to="/showroom-cleaning" className="block ml-4 hover:text-primary transition-colors text-sm">
                    Showroom Cleaning
                  </Link>
                  <Link to="/warehouse-cleaning" className="block ml-4 hover:text-primary transition-colors text-sm">
                    Warehouse Cleaning
                  </Link>
                  <Link to="/salon-spa-cleaning" className="block ml-4 hover:text-primary transition-colors text-sm">
                    Salon & Spa Cleaning
                  </Link>
                </div>
              </div>

              <div>
                <div className="font-medium mb-2">{t("nav.pricing")}</div>
                <div className="ml-4 space-y-2">
                  <Link to="/commercial-cleaning-estimator" className="block hover:text-primary transition-colors text-sm">
                    Commercial Cleaning Cost Estimator
                  </Link>
                  <Link to="/book-now-las-vegas" className="block hover:text-primary transition-colors text-sm">
                    Pricing for Las Vegas
                  </Link>
                  <Link to="/book-now-oahu" className="block hover:text-primary transition-colors text-sm">
                    Pricing for Oahu
                  </Link>
                  <Link to="/book-now-maui" className="block hover:text-primary transition-colors text-sm">
                    Pricing for Maui
                  </Link>
                  <Link to="/book-now-south-florida" className="block hover:text-primary transition-colors text-sm">
                    Pricing for South Florida
                  </Link>
                  <Link to="/book-now-dallas" className="block hover:text-primary transition-colors text-sm">
                    Pricing for Dallas
                  </Link>
                  <Link to="/book-now-columbus-ohio" className="block hover:text-primary transition-colors text-sm">
                    Pricing for Columbus, Ohio
                  </Link>
                </div>
              </div>

              <div>
                <div className="font-medium mb-2">{t("nav.about")}</div>
                <div className="ml-4 space-y-2">
                  <Link to="/about" className="block hover:text-primary transition-colors text-sm">
                    About Us
                  </Link>
                  <Link to="/about/faq" className="block hover:text-primary transition-colors text-sm">
                    FAQ
                  </Link>
                </div>
              </div>

              <Link to="/contact" className="block hover:text-primary transition-colors">
                {t("nav.contact")}
              </Link>

              {/* Mobile CTA Buttons */}
              <div className="pt-4 space-y-2">
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href="https://customer-portal.maidily.com/red-rock-cleans-south-florida/sign-in" target="_blank" rel="noopener noreferrer">
                    {t("nav.login")}
                  </a>
                </Button>
                <Button size="sm" className="w-full" asChild>
                  <a href="/book-now-south-florida">
                    <Phone className="w-4 h-4 mr-2" />
                    {t("nav.bookNow")}
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </nav>
  );
};
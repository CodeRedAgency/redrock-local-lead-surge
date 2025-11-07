import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Menu, X, MapPin, ChevronDown, Phone, Calendar } from "lucide-react";
import logo from "@/assets/logo.png";
import { useLocationContext } from "@/contexts/LocationContext";
import { LocationPromptModal } from "@/components/LocationPromptModal";
import { useLocationGuard } from "@/hooks/use-location-guard";
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
  const { setSelectedLocation, highlightLocation, showPrompt, setShowPrompt } = useLocationContext();
  const guardLocation = useLocationGuard();

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
    // Update context with selected location
    setSelectedLocation(path);
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

  const handleLoginClick = (e: React.MouseEvent) => {
    e.preventDefault();
    guardLocation(() => {
      window.open("https://customer-portal.maidily.com/red-rock-cleans-south-florida/sign-in", "_blank", "noopener,noreferrer");
    });
  };

  const handleBookNowClick = (e: React.MouseEvent) => {
    e.preventDefault();
    guardLocation(() => {
      window.location.href = "/book-now-south-florida";
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
      <div className="hidden md:flex items-center space-x-2 absolute top-2 right-4 z-50">
        <Link 
          to={location.pathname.startsWith('/es') ? location.pathname.replace(/^\/es/, '') || '/' : location.pathname}
          className={`px-3 py-1 rounded-md text-sm font-medium transition-all duration-200 ${
            !location.pathname.startsWith('/es') 
              ? 'bg-primary text-primary-foreground' 
              : 'text-slate-300 hover:text-primary hover:bg-primary/10'
          }`}
        >
          EN
        </Link>
        <Link 
          to={location.pathname.startsWith('/es') ? location.pathname : `/es${location.pathname}`}
          className={`px-3 py-1 rounded-md text-sm font-medium transition-all duration-200 ${
            location.pathname.startsWith('/es') 
              ? 'bg-primary text-primary-foreground' 
              : 'text-slate-300 hover:text-primary hover:bg-primary/10'
          }`}
        >
          ES
        </Link>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link to={getLanguagePrefix() + "/"} className="flex items-center space-x-2 flex-shrink-0">
            <img src={logo} alt="Red Rock Cleans" className="h-24 w-auto" />
          </Link>

          {/* Mobile Location Selector & Language Switcher */}
          <div className="md:hidden flex items-center gap-2 flex-1 justify-center mr-2">
            {/* Location Selector for Mobile */}
            <div className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-muted-foreground" />
              <Select value={location.pathname} onValueChange={handleLocationChange}>
                <SelectTrigger className={`w-24 h-8 border-0 bg-transparent shadow-none text-xs transition-all ${highlightLocation ? 'location-highlight border-2 border-primary rounded-md' : ''}`}>
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
            
            {/* Language Toggle for Mobile */}
            <div className="flex items-center space-x-1 bg-slate-100 rounded-md p-1">
              <Link 
                to={location.pathname.startsWith('/es') ? location.pathname.replace(/^\/es/, '') || '/' : location.pathname}
                className={`px-2 py-1 rounded text-xs font-medium transition-all ${
                  !location.pathname.startsWith('/es') 
                    ? 'bg-primary text-primary-foreground' 
                    : 'text-slate-600'
                }`}
              >
                EN
              </Link>
              <Link 
                to={location.pathname.startsWith('/es') ? location.pathname : `/es${location.pathname}`}
                className={`px-2 py-1 rounded text-xs font-medium transition-all ${
                  location.pathname.startsWith('/es') 
                    ? 'bg-primary text-primary-foreground' 
                    : 'text-slate-600'
                }`}
              >
                ES
              </Link>
            </div>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center justify-center space-x-8 flex-1">
            <Link to={getLanguagePrefix() + "/"} className="hover:text-primary transition-colors relative z-10">
              {t("nav.home")}
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 hover:text-primary transition-colors relative z-10">
                {t("nav.services")} <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>{t("nav.residential.title", { defaultValue: "Residential Cleaning" })}</DropdownMenuSubTrigger>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem asChild>
                      <Link to={getLanguagePrefix() + "/standard-cleaning-services"}>{t("nav.residential.standard", { defaultValue: "Standard Cleaning Services" })}</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to={getLanguagePrefix() + "/deep-cleaning-services"}>{t("nav.residential.deep", { defaultValue: "Deep Cleaning Services" })}</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to={getLanguagePrefix() + "/airbnb-cleaning-services"}>{t("nav.residential.airbnb", { defaultValue: "Airbnb Cleaning Services" })}</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to={getLanguagePrefix() + "/move-out-cleaning-services"}>{t("nav.residential.moveOut", { defaultValue: "Move Out Cleaning Services" })}</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to={getLanguagePrefix() + "/post-construction-cleaning-services"}>{t("nav.residential.postConstruction", { defaultValue: "Post Construction Cleaning Services" })}</Link>
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>{t("nav.commercial.title", { defaultValue: "Commercial Cleaning" })}</DropdownMenuSubTrigger>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem asChild>
                      <Link to={getLanguagePrefix() + "/commercial-cleaning"}>{t("nav.commercial.main", { defaultValue: "Commercial Cleaning" })}</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to={getLanguagePrefix() + "/commercial-cleaning-time-estimator"}>{t("nav.commercial.timeEstimator", { defaultValue: "Commercial Cleaning Time Estimator" })}</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to={getLanguagePrefix() + "/commercial-cleaning-cost-estimator"}>{t("nav.commercial.costEstimator", { defaultValue: "Commercial Cleaning Cost Estimator" })}</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to={getLanguagePrefix() + "/church-cleaning"}>{t("nav.commercial.church", { defaultValue: "Church Cleaning" })}</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to={getLanguagePrefix() + "/data-center-cleaning"}>{t("nav.commercial.dataCenter", { defaultValue: "Data Center Cleaning" })}</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to={getLanguagePrefix() + "/factory-cleaning"}>{t("nav.commercial.factory", { defaultValue: "Factory Cleaning" })}</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to={getLanguagePrefix() + "/government-facility-cleaning"}>{t("nav.commercial.government", { defaultValue: "Government Facility Cleaning" })}</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to={getLanguagePrefix() + "/gym-cleaning"}>{t("nav.commercial.gym", { defaultValue: "Gym Cleaning" })}</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to={getLanguagePrefix() + "/medical-office-cleaning"}>{t("nav.commercial.medical", { defaultValue: "Medical Office Cleaning" })}</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to={getLanguagePrefix() + "/retail-cleaning"}>{t("nav.commercial.retail", { defaultValue: "Retail Store Cleaning" })}</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to={getLanguagePrefix() + "/restaurant-cleaning"}>{t("nav.commercial.restaurant", { defaultValue: "Restaurant Cleaning" })}</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to={getLanguagePrefix() + "/industrial-cleaning"}>{t("nav.commercial.industrial", { defaultValue: "Industrial Cleaning" })}</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to={getLanguagePrefix() + "/school-cleaning"}>{t("nav.commercial.school", { defaultValue: "School Cleaning" })}</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to={getLanguagePrefix() + "/showroom-cleaning"}>{t("nav.commercial.showroom", { defaultValue: "Showroom Cleaning" })}</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to={getLanguagePrefix() + "/warehouse-cleaning"}>{t("nav.commercial.warehouse", { defaultValue: "Warehouse Cleaning" })}</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to={getLanguagePrefix() + "/salon-spa-cleaning"}>{t("nav.commercial.salonSpa", { defaultValue: "Salon & Spa Cleaning" })}</Link>
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
                  <Link to={getLanguagePrefix() + "/commercial-cleaning-estimator"}>{t("nav.pricingMenu.estimator", { defaultValue: "Commercial Cleaning Cost Estimator" })}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to={getLanguagePrefix() + "/book-now-las-vegas"}>{t("nav.pricingMenu.lasVegas", { defaultValue: "Pricing for Las Vegas" })}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to={getLanguagePrefix() + "/book-now-oahu"}>{t("nav.pricingMenu.oahu", { defaultValue: "Pricing for Oahu" })}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to={getLanguagePrefix() + "/book-now-maui"}>{t("nav.pricingMenu.maui", { defaultValue: "Pricing for Maui" })}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to={getLanguagePrefix() + "/book-now-south-florida"}>{t("nav.pricingMenu.southFlorida", { defaultValue: "Pricing for South Florida" })}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to={getLanguagePrefix() + "/book-now-dallas"}>{t("nav.pricingMenu.dallas", { defaultValue: "Pricing for Dallas" })}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to={getLanguagePrefix() + "/book-now-columbus-ohio"}>{t("nav.pricingMenu.columbus", { defaultValue: "Pricing for Columbus, Ohio" })}</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 hover:text-primary transition-colors relative z-10">
                {t("nav.about")} <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link to={getLanguagePrefix() + "/about"}>{t("nav.aboutMenu.about", { defaultValue: "About Us" })}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to={getLanguagePrefix() + "/about/faq"}>{t("nav.aboutMenu.faq", { defaultValue: "FAQ" })}</Link>
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
                <SelectTrigger className={`w-40 border-0 bg-transparent shadow-none transition-all ${highlightLocation ? 'location-highlight border-2 border-primary rounded-md' : ''}`}>
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
            <Button variant="ghost" size="sm" onClick={handleLoginClick}>
              {t("nav.login")}
            </Button>
            <Button size="sm" onClick={handleBookNowClick}>
              <Calendar className="w-4 h-4 mr-2" />
              {t("nav.bookNow")}
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
                  <div className="font-medium text-sm text-muted-foreground mb-1">{t("nav.residential.title", { defaultValue: "Residential Cleaning" })}</div>
                  <Link to={getLanguagePrefix() + "/standard-cleaning-services"} className="block ml-4 hover:text-primary transition-colors text-sm">
                    {t("nav.residential.standard", { defaultValue: "Standard Cleaning Services" })}
                  </Link>
                  <Link to={getLanguagePrefix() + "/deep-cleaning-services"} className="block ml-4 hover:text-primary transition-colors text-sm">
                    {t("nav.residential.deep", { defaultValue: "Deep Cleaning Services" })}
                  </Link>
                  <Link to={getLanguagePrefix() + "/airbnb-cleaning-services"} className="block ml-4 hover:text-primary transition-colors text-sm">
                    {t("nav.residential.airbnb", { defaultValue: "Airbnb Cleaning Services" })}
                  </Link>
                  <Link to={getLanguagePrefix() + "/move-out-cleaning-services"} className="block ml-4 hover:text-primary transition-colors text-sm">
                    {t("nav.residential.moveOut", { defaultValue: "Move Out Cleaning Services" })}
                  </Link>
                  <Link to={getLanguagePrefix() + "/post-construction-cleaning-services"} className="block ml-4 hover:text-primary transition-colors text-sm">
                    {t("nav.residential.postConstruction", { defaultValue: "Post Construction Cleaning Services" })}
                  </Link>
                </div>
              </div>

              <div>
                <div className="font-medium mb-2">{t("nav.pricing")}</div>
                <div className="ml-4 space-y-2">
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
                <Button variant="outline" size="sm" className="w-full" onClick={handleLoginClick}>
                  {t("nav.login")}
                </Button>
                <Button size="sm" className="w-full" onClick={handleBookNowClick}>
                  <Phone className="w-4 h-4 mr-2" />
                  {t("nav.bookNow")}
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>

      {/* Location Prompt Modal */}
      <LocationPromptModal isOpen={showPrompt} onClose={() => setShowPrompt(false)} />
    </nav>
  );
};